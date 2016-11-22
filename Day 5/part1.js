function stringContainsThreeVowels(str)
{
	var count = 0;
	for(var i = 0; i < str.length; i++)
	{
		var character = str[i];
		if(['a', 'e', 'i', 'o', 'u'].indexOf(str[i]) > -1)
		{
			count++;
		}
	}
	return count >= 3;
}

function stringContainsDuplicateLetter(str)
{
	var result = false;
	for(var i = 0; i < str.length-1; i++)
	{
		result |= (str[i] === str[i+1]);
	}
	return result;
}

function stringContainsForbiddenLetters(str)
{
	return (str.indexOf("ab") > -1 || str.indexOf("cd") > -1 || str.indexOf("pq") > -1 || str.indexOf("xy") > -1)
}

function stringIsNice(str)
{
	return stringContainsThreeVowels(str) && stringContainsDuplicateLetter(str) && !stringContainsForbiddenLetters(str);
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