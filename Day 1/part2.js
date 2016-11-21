//sample usage: processInstructions('(()')
function processInstructions(input)
{
	var floor = 0, position = 0;
	while(input.length > 0)
	{
		position++;
		input[0] === '(' ? floor++ : floor--;
		input = input.substring(1);
		if(floor < 0)
			break;
	}
	
	return position;
}