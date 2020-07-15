//Goodboy-Oldboy (A dog age calculator)

let dogYearOfBirth= 2017 ;
let dogYearFuture= 2027 ;
let dogYear= dogYearFuture - dogYearOfBirth ;
let shouldShowResultInDogYears= 7; 
if( shouldShowResultInDogYears == false){
    console.log("Your dog will be" + dogYear + "human years old in" + dogYearFuture);

}else{
    console.log("Your dog will be" + dogYear* 7 + "dog years old in" + dogYearFuture)
}

