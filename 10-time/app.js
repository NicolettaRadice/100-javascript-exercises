  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var print = document.getElementById('container');


  // function time() {
  //   if ( hours > 5 && hours < 12) {
  //     return document.getElementById('container').innerHTML = "it is " + hours + ":" + minutes + " in the morning!"
  //   } else if ( hours === 12 ) {
  //     return document.getElementById('container').innerHTML = "it is " + hours + ":" + minutes + ", it is midday!"
  //   } else if( hours > 12 && hours < 19 ) {
  //     return document.getElementById('container').innerHTML = "it is " + hours + ":" + minutes + ", it is afternoon!"
  //   } else {
  //     return document.getElementById('container').innerHTML = "it is " + hours + ":" + minutes + ", it is night!"
  //   }
  // }

  //say whether it is morning-midday-evening-afternoon
  function time() {
    return  hours > 5 && hours < 12 ? print.innerHTML = "morning!"
          : hours === 12 ? print.innerHTML = "midday!"
          : hours > 12 && hours < 19 ? print.innerHTML = "afternoon!"
          : print.innerHTML = "it is " + hours + ":" + minutes + ", it is night!"
}     



time();





  