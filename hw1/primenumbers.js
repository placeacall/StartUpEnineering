var primenumbers = [];
var counter = 2;

var primality = function(number)
{
	var divisor = [2, 3, 5, 7, 11, 13, 17, 19, 23];
	
	for (var i = 0; i < divisor.length; i++)
	{
		if (number === divisor[i])
		{
			return true;
		}
		else
		{
			if (number % divisor[i] === 0)
			{
				return false
			}
		}
	}
	return true
};

while(primenumbers.length < 100)
{
	if (primality(counter))
	{
		primenumbers.push(counter);
//		console.log(counter);
	}
	counter++;
}
var fs = require('fs');
var outfile = "primenumbers.txt";

fs.writeFileSync(outfile, primenumbers.toString() + ",");
//console.log(primenumbers.toString());
