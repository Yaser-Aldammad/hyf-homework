//Housey pricey (A house price estimator)

let huseHeight = 10 ;
let huseDepth = 10 ;
let husWidth = 8 ;
let gardenSizeInM2 = 100 ;
let volumeInMeters = husWidth * huseDepth * huseHeight;
let requstedPrice =  2500000;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if(housePrice  == requstedPrice){
    console.log( "Good price, as it is expected!")
}
 else if (housePrice < requstedPrice) {
    console.log("Cheap prise")
} else {
    console.log("too much")
}
 huseHeight = 8 ; 
huseDepth = 11 ;
husWidth = 5 ;
gardenSizeInM2 = 70 ;

 requstedPrice =  1000000;

if(housePrice  == requstedPrice){
    console.log( "Good price, as it is expected!")
}
 else if (housePrice < requstedPrice) {
    console.log("Cheap prise")
} else {
    console.log("too much")
}