
for (let index = 0; index < document.querySelectorAll("button").length; index++) {
    document.querySelectorAll("button")[index].addEventListener("click",()=>{
        alert("I got clicked");
    });  
}

// querySelectorAll is used to get all the elements of that query.
// We can use for loop for iterating over all the elements.