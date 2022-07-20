function removeQuotes(string){

  //remove quotes and the like from start and end of string
	let newString = string.replace(/((\bu201c|\u201\b)|(\bu201d|\u201d\b)|(\bu0022|\u0022\b)|(\bu0027|\u0027\b)|(\bu0060|\u0060\b)|(\bu00b4|\u00b4\b)|(\bu2018|\u2018\b)|(\bu2019|\u2019\b))/,'');

  return newString
}
