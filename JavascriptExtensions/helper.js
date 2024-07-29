function addText(strLabel, strValue)
{
	if (strValue != null)
	{
		return strLabel + ' ' + strValue + '\n';
	}
}

function convertToMinutes(strSeconds)
{
	if (strSeconds.indexOf('sec') > -1)
	{
		intSeconds = strSeconds.substring(0,strSeconds.indexOf('.'));
	}
	intMinutes = intSeconds / 60;
	return intMinutes
}
