const audio = [];
audio[0] = new Audio('./sounds/crash.mp3');
audio[1] = new Audio('./sounds/kick-bass.mp3');
audio[2] = new Audio('./sounds/snare.mp3');
audio[3] = new Audio('./sounds/tom-1.mp3');
audio[4] = new Audio('./sounds/tom-2.mp3');
audio[5] = new Audio('./sounds/tom-3.mp3');
audio[6] = new Audio('./sounds/tom-4.mp3');


for (let index = 0; index < document.querySelectorAll("button").length; index++) {
    document.querySelectorAll("button")[index].addEventListener("click",()=>{
        audio[index].play();
    });  
}




// querySelectorAll is used to get all the elements of that query.
// We can use for loop for iterating over all the elements.