for (var i = 0, headings = document.getElementsByTagName('h1');
     i < headings.length; i++) {
   console.log(headings[i].textContent.trim() + " " +  
               headings[i].tagName,
               headings[i]);
}