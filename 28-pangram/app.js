function pangrams() {
	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	let regex = /\s/g;
	var input = document.getElementById("text").value;
	let lowercase = input.toLowerCase().replace(regex, "");
	

	for(let i = 0; i < alphabet.length; i++){
	 if(lowercase.indexOf(alphabet[i]) === -1){
	   console.log("no");
	   document.getElementById("ispan").innerHTML = ("<div class='no'>" + input + " is not a pangram.</div>");
	   return "not pangram";
	 }
	}
	console.log("yes");
	document.getElementById("ispan").innerHTML = ("<div class='yes'>" + input + " is a pangram.</div>");
   	return "pangram";
 }


// pangrams("abcdefghijklmnopqrstuvwxyz");
// pangrams("the cat is on the table");
// pangrams("The quick brown fox jumps over the lazy dog");
// pangrams("hello how are you?");