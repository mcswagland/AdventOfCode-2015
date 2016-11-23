var lightGrid = [];


function initializeGrid()
{
	for(var i = 0; i < 1000; i++)
	{
		var arr = []; 
		for(var j = 0; j < 1000; j++)
		{
			arr.push(0);
		}
		lightGrid.push(arr);
	}
}

function turnOnLights(coord1, coord2)
{
	for(var i = coord1.x; i < coord2.x; i++)
	{
		for(var j = coord1.y; j < coord2.y; j++)
		{
			lightGrid[i][j] = 1;
		}
	}
}

function turnOffLights(coord1, coord2)
{
	for(var i = coord1.x; i < coord2.x; i++)
	{
		for(var j = coord1.y; j < coord2.y; j++)
		{
			lightGrid[i][j] = 0;
		}
	}
}

function toggleLights(coord1, coord2)
{
	for(var i = coord1.x; i < coord2.x; i++)
	{
		for(var j = coord1.y; j < coord2.y; j++)
		{
			lightGrid[i][j] = (lightGrid[i][j] == 0 ? 1 : 0);
		}
	}
}

function getNumberOfLightsOn()
{
	var result = 0;
	for(var i = 0; i < 1000; i++)
	{
		for(var j = 0; j < 1000; j++)
		{
			lightGrid[i][j] === 1 ? result++ : result = result;
		}
	}
	return result;
}

function getAnswer(input)
{
	input.split('\n');
	var coord1, coord2;
	for(var i = 0; i < input.length; i++)
	{
		//coord1 =
		//coord2 =
		if(input.indexOf("turn off") > -1)
		{
			turnOffLights(coord1, coord2);
		}
		else if(input.indexOf("turn on") > -1)
		{
			turnOnLights(coord1, coord2);
		}
		else if(input.indexOf("toggle") > -1)
		{
			toggleLights(coord1, coord2);
		}
	}
	
	return getNumberOfLightsOn();
}