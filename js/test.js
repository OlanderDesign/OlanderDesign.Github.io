d3.json('js/test.json').then(function(graph) {
    const width = 900, height = 600;

    const svg = d3.select("#network").append("svg")
        .attr("width", width)
        .attr("height", height);

    const simulation = d3.forceSimulation(graph.nodes)
        .force("link", d3.forceLink(graph.links).id(d => d.id))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg.append("g")
        .attr("stroke", "#999")
        .selectAll("line")
        .data(graph.links)
        .join("line")
        .attr("stroke-width", d => Math.sqrt(d.value));

    const node = svg.append("g")
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.5)
        .selectAll("circle")
        .data(graph.nodes)
        .join("circle")
        .attr("r", 5)
        .attr("fill", color)
        .call(drag(simulation))
        .on("click", function(event, d) {
            // Open the URL in a new tab when the node is clicked
            window.open(d.url, '_blank');
        });

    node.append("title")
        .text(d => d.id);

    const labels = svg.append("g")
      .attr("class", "labels")
      .selectAll("text")
      .data(graph.nodes)
      .enter().append("text")
      .attr("dx", 12)
      .attr("dy", ".35em")
      .text(d => d.label)
      .style("font-size", "12px");

    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);

        labels
            .attr("x", d => d.x)
            .attr("y", d => d.y);
    });

    function color(d) {
        return d.group === 1 ? "#ff0000" : "#0000ff";
    }

    function drag(simulation) {
        function dragstarted(event) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }

        function dragged(event) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }

        function dragended(event) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }

        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }
});