const button = document.getElementById('button')

var lastIndex = 0;








function getNewCard() {
    var theImage = document.getElementById("picture");
    var imgDir = 'carte/';
    var imgArray = new Array('1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png', '23.png', '24.png', '25.png', '26.png', '27.png', '28.png', '29.png', '30.png', '31.png', '32.png', '33.png', '34.png', '35.png', '36.png', '37.png', '38.png', '39.png', '40.png');
    var imgIndex = 0;
    
    imgIndex = Math.floor(Math.random() * imgArray.length);
    lastIndex = imgIndex;
    
    var imgPath = imgDir + imgArray[imgIndex];
        
    theImage.src = imgPath;
    theImage.alt = imgArray[imgIndex];
    // console.log(imgPath)
}

button.addEventListener('click', getNewCard)

// getNewCard();
    // var randomNumber = Math.floor(Math.random() * randomCard.length);
    // document.getElementById("picture").src = randomCard[randomNumber];

