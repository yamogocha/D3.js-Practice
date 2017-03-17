var data = [10, 20, 30, 40, 50, 60];

//remove the first data
console.log(data.shift());
//sort data in descending order
console.log(data.sort(d3.descending));
//gives the min value
console.log(d3.min(data));
//gives the max value
console.log(d3.max(data));
//gives the min and max values
console.log(d3.extent(data));
//sums up all the values
console.log(d3.sum(data));
//get the mean of the array
console.log(d3.mean(data));
//get the middium value
console.log(d3.median(data));
//shuffle the values 
console.log(d3.shuffle(data));

d3.json('mydata.json', function(data) {
	var canvas = d3.select('body').append('svg')
				.attr('width', 500)
				.attr('height', 500)

		canvas.selectAll('rect')
			.data(data)
			.enter()
				.append('rect')
				.attr('width', function(d) { return d.age * 10; })
				.attr('height', 48)
				.attr('y', function(d, i) { return i * 50; })
				.attr('fill', 'blue')

		canvas.selectAll('text')
			.data(data)
			.enter()
				.append('text')
				.attr('fill', 'white')
				.attr('y', function(d, i) { return i * 50 + 24; })
				.text(function(d) { return d.name; })
});