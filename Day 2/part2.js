function calculateRibbon(length, width, height)
{
	var dimensions = [length, width, height];
	dimensions.sort(function (a, b) {  return a - b;  });
	return (2*dimensions[0]) + (2*dimensions[1]) + (length * width * height);
}

function main(fileContents)
{
	var dimensionList = fileContents.split('\n');
	var ribbonNeeded = 0;
	for(var i = 0; i < dimensionList.length; i++)
	{
		var dimensions = dimensionList[i].split('x');
		ribbonNeeded += calculateRibbon(dimensions[0], dimensions[1], dimensions[2]);
	}
	return ribbonNeeded;
}