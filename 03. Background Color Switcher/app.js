let popped = 0;

document.addEventListener('mousedown', function(e){
    
    if (e.target.className === "balloon"){
        
                e.target.style.backgroundColor = "#ededed";
                popped++;
                removeEvent(e);
                checkAllPopped();
    }   
});

function removeEvent(e){
    e.target.removeEventListener('mousedown', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 10){
        console.log('all popped!');
        let gallery = document.getElementById('balloon-gallery');
        let message = document.getElementById('yay-no-balloons');
        let description = document.getElementById("description");
        description.style.display = "none"
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};