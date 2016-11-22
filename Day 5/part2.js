//example xyxy (xy), aabcdefgaa (aa), etc
//Not aaa (aa, but it overlaps)
function stringContainsPairThatDoesNotOverlap(str)
{
	var result = false;
	for(var i = 0; i < str.length-1; i++)
	{
		var pair = str[i] + str[i+1];
		result |= (str.substr(i+2).indexOf(pair) > -1);
	}
	return result;
}

//example aba, zyz, etc
function stringContainsSeparatedDuplicateLetters(str)
{
	var result = false;
	for(var i = 0; i < str.length-2; i++)
	{
		result |= (str[i] === str[i+2]);
	}
	return result;
}

function stringIsNice(str)
{
	return stringContainsPairThatDoesNotOverlap(str) && stringContainsSeparatedDuplicateLetters(str);
}

function getNumberOfNiceStrings(text)
{
	var count = 0;
	var strings = text.split('\n');
	for(var i = 0; i < strings.length; i++)
	{
		if(stringIsNice(strings[i]))
		{
			count++;
		}
	}
	return count;
}