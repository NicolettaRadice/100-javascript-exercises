function palindrome(myString) {
	// first we remove all special characters and spaces
	var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

	//then we reverse removeChar to compare
	var checkPalindrome = removeChar.split('').reverse().join('');

	//check if palindrome
	if (removeChar===checkPalindrome){
		document.write("<div>" + myString + " is a palindrome.</div>");
	} else {
		document.write("<div>" + myString + " is not a palindrome.</div>");
	}
}

palindrome("cat");
palindrome("tea");
palindrome("Anna");
palindrome("Kayak");
palindrome("tofu");
palindrome("91119");