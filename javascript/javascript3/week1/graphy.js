let submitBtn = document.getElementById("subt");
let empty = document.getElementById("empty");



let apiUrl =
  "http://api.giphy.com/v1/gifs/search?&api_key=UzMWGrXRdD8bLvzF5UnZerMOmKRAVVZI&q="; ;
let gifNumber = document.getElementById("numb");
let searchWord = document.getElementById("search");
let imgWrapper = document.querySelector("#imgWrapper")


const search = submitBtn.onclick=(e)=>{
    e.preventDefault();
   
    if (searchWord.value === "" || searchWord.value == null ) {
      empty.innerHTML = "should not be empty";
    } else {
      if (gifNumber.value === ""){
   empty.innerHTML = "";
   let newapiUrl = apiUrl + searchWord.value + "&limit=" + gifNumber.value;
   console.log(newapiUrl);

   fetch(newapiUrl)
  .then((respons) => respons.json())

  .then((result) => {
    for (let item of result.data) {
      
      let image = document.createElement("img");
      image.src = item.images.downsized_medium.url;
      imgWrapper.insertAdjacentElement("afterbegin", image);
    } console.log(result);
})

.catch((err) => {
    console.error(err);
  });
   } 
 }
  imgWrapper.innerHTML = "";
};


const limit = () =>{
   
    gifNumber.onchange =()=>{
     imgWrapper.innerHTML = "";
      
      let newapiUrl = apiUrl + searchWord.value + "&limit=" + gifNumber.value;
      console.log(newapiUrl);
  
      fetch(newapiUrl)
        .then((respons) => respons.json())
  
        .then((result) => {
          
          for (let i = 0; i < result.data.length; i++) {
            let image = document.createElement("img");
            image.src = result.data[i].images.downsized_medium.url;
            imgWrapper.insertAdjacentElement("afterbegin", image);
          }
  
          console.log(result);
        })
        .catch((err) => {
          console.error(err);
        });
  
    };
    
  
  }
  limit();