var santaX = 0, santaY = 0, roboSantaX = 0; roboSantaY = 0, compareX = 0, compareY = 0;

function calculateHousesVisited(directions)
{
	var visited = [{col: 0, row: 0}];
	
	for(var i = 0; i < directions.length; i++)
	{
		switch (directions[i])
		{
			case '^':
				i % 2 === 0 ? santaY++ : roboSantaY++;
				break;
			case '>':
				i % 2 === 0 ? santaX++ : roboSantaX++;
				break;
			case 'v':
				i % 2 === 0 ? santaY-- : roboSantaY--;
				break;
			case '<':
				i % 2 === 0 ? santaX-- : roboSantaX--; 
				break;
		}
		
		if(i%2 === 0)
		{
			compareX = santaX;
			compareY = santaY;
		}
		else
		{
			compareX = roboSantaX;
			compareY = roboSantaY;
		}
		
		if(visited.findIndex(findCoordinate) === -1)
		{
			visited.push({col: compareX, row: compareY});
		}
	}
	
	return visited.length;
}

function findCoordinate(coordinate)
{
	return coordinate.col === compareX && coordinate.row === compareY;
}