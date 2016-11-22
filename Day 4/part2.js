function findHashWithSixZeroes(key)
{
	var found = false;
	var number = 0;
	while(!found)
	{
		number++;
		var hash = CryptoJS.MD5(key + number);
		if(hash.toString().substring(0, 6) === "000000")
		{
			found = true;
		}
	}
	return number;
}