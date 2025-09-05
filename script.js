// Select image element by ID
const MyImg = document.querySelector("#myImg");


// Select text elements by class
const hello = document.querySelector(".id1");
const carry = document.querySelector(".id2");
const saini = document.querySelector(".id3");


// Select text elements by class
MyImg.addEventListener("click",(e)=>{

// Cycle through images on click
    if(e.target.id=="myImg"){
        if(MyImg.src.includes("my1.jpg")){
            MyImg.src = "my2.jpg";
        } else if(MyImg.src.includes("my2.jpg")){
            MyImg.src = "my3.png";
        } else if(MyImg.src.includes("my3.png")){
            MyImg.src = "my4.png";
        } else if(MyImg.src.includes("my4.png")){
            MyImg.src = "my1.jpg";
        }


// Cycle through images on click
    hello.classList.add("hello");
    carry.classList.add("carry");
    saini.classList.add("saini");
    }
// Remove classes after 2 seconds  
     setTimeout(() => {
    hello.classList.remove("hello");
    carry.classList.remove("carry");
    saini.classList.remove("saini");
  }, 2000);


})