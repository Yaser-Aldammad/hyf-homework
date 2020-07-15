//Housey pricey (A house price estimator)

let Height = 10;
let Depth = 10;
let Width = 8;
let gardenSizeInM2 = 100;
const volumeInMeters = Width * Depth * Height;
const peterhoursePrice =  2500000;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if(housePrice == peterhoursePrice){
    console.log( "Good price, as it is expected!");
}
 else if (housePrice < peterhoursePrice) {
    console.log("Cheap prise");
} else {
    console.log("too much");
}

Height= 8; 
Depth= 11;
Width= 5;
gardenSizeInM2= 70;

const juliahouseprice= 1000000;

if(housePrice== juliahouseprice){
    console.log( "Good price, as it is expected!");
}
 else if (housePrice < juliahouseprice) {
    console.log("Cheap prise");
} else {
    console.log("too much");
}
