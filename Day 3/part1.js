var x = 0;
var y = 0;

function calculateHousesVisited(directions)
{
	var visited = [{col: x, row: y}];
	
	for(var i = 0; i < directions.length; i++)
	{
		switch (directions[i])
		{
			case '^':
				y++;
				break;
			case '>':
				x++;
				break;
			case 'v':
				y--;
				break;
			case '<':
				x--; 
				break;
		}
		
		if(visited.findIndex(findCoordinate) === -1)
		{
			visited.push({col: x, row: y});
		}
	}
	
	return visited.length;
}

function findCoordinate(coordinate)
{
	return coordinate.col === x && coordinate.row === y;
}