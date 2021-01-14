function convert(num) {
  let str = ''
  if (num % 3 === 0) str += 'Pling';
  if (num % 5 === 0) str += 'Plang';
  if (num % 7 === 0) str += 'Plong';
  document.getElementById("result").innerHTML = num + ' is equal to ' + str;
  return str || num.toString();
  
}

convert(9);
