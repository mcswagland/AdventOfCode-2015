function calculateWrappingPaper(length, width, height)
{
	var lowestArea = Math.min(length*width, length*height, width*height);
	return (2*length*width) + (2*width*height) + (2*height*length) + lowestArea;
}

function main(fileContents)
{
	var dimensionList = fileContents.split('\n');
	var wrappingPaperNeeded = 0;
	for(var i = 0; i < dimensionList.length; i++)
	{
		var dimensions = dimensionList[i].split('x');
		wrappingPaperNeeded += calculateWrappingPaper(dimensions[0], dimensions[1], dimensions[2]);
	}
	return wrappingPaperNeeded;
}