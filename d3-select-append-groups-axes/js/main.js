var dataArray = [20, 40, 60, 100],
	width = 500,
	height = 500;

var widthScale = d3.scaleLinear()
				.domain([0, 100])
				.range([0, width]);

var color = d3.scaleLinear()
		    .domain([0, 100])
			.range(['yellow', 'red'])

var axis = d3.axisBottom()
		  .ticks(10)
		  .scale(widthScale);

var canvas = d3.select('body')
			.append('svg')
			.attr('width', width)
			.attr('height', height)
			.append('g')
			.attr('transform', 'translate(20, 0)');

var bars = canvas.selectAll('rect')
		  .data(dataArray)
		  .enter()
		  	.append('rect')
		  	.attr('width', function(d) { return widthScale(d); })
		  	.attr('height', 50)
		  	.attr('fill', function(d) { return color(d); })
		  	.attr('y', function(d, i) { return i * 80; });

canvas.append('g')
	  .attr('transform', 'translate(0, 400)')
	  .call(axis);