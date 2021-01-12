const OPENERS = ["{", "[", "("];
const CLOSERS = ["}", "]", "("];



function matched(text) {
  var text = document.getElementById("text").value;
  const bracketsOnly = text.replace(/[^(){}\[\]]/g, "");

  const numBrackets = bracketsOnly.length;
  if (numBrackets % 2 !== 0) {
    console.log("Something is missing")
    document.getElementById("matched").innerHTML = "Something is missing";
    return false
  }

 const aBrackets = [];
  let lookingFor = "";

  for(let i = 0; i < numBrackets; i++) {
    const char = bracketsOnly[i];

    const idx = OPENERS.indexOf(char);
    if(idx === -1) {
      if(char === lookingFor) {
        aBrackets.pop(char);
        lookingFor = aBrackets.length > 0 ? aBrackets[aBrackets.length - 1] : "";
      } else {
        console.log("Something is not good");
        document.getElementById("matched").innerHTML = "Something is not good";
        return false;
      }
    } else {
      lookingFor = CLOSERS[idx];
      aBrackets.push(lookingFor);
    }
  }
  document.getElementById("matched").innerHTML = "Matched";
  console.log("matched")
  return aBrackets.length === 0;
};
