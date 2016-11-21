//sample usage: processInstructions('(()')
function processInstructions(input)
{
	var floor = 0;
	while(input.length > 0)
	{
		input[0] === '(' ? floor++ : floor--;
		
		input = input.substring(1);
	}
	
	return floor;
}