var data = [10];

var canvas = d3.select('body')
			.append('svg')
			.attr('width', 500)
			.attr('height', 500)

var circle1 = canvas.append('circle')
			.attr('cx', 50)
			.attr('cy', 100)
			.attr('r', 25);

var circle2 = canvas.append('circle')
			.attr('cx', 50)
			.attr('cy', 200)
			.attr('r', 25);


var circle = canvas.selectAll('circle')
			.data(data)
			// .attr('fill', 'red')
			// .enter()
			// 	.append('circle')
			// 	.attr('cx', 50)
			// 	.attr('cy', 50)
			// 	.attr('fill', 'green')
			// 	.attr('r', 25);
			.attr('fill', 'green')
			.exit()
				.attr('fill', 'blue');


circle1.transition()
	.duration(1500)
	.delay(1000)
	.attr('cx', 150)
	.on('start', function() { d3.select(this).attr('fill', 'red'); })
	.transition()
	.attr('cy', 200);
	



