// function read tow parameter 
/* function getFullName (firstname,surname){
    return firstname +' '+ surname;
}
console.log(getFullName('Ahmad','Alzoubani'));
let fullName1 = getFullName('Mais','alzoubani');
let fullName2 = getFullName('Adam','Ahmad');
console.log(fullName1);
console.log(fullName2); */


//Formal fullname
function getFullName (firstname,surname,useFormalName){
    if (useFormalName == true){
      return 'Lord '+firstname +' '+ surname;

    }else{
        return firstname +' '+ surname;
    }
  
}
let fullName1 = getFullName('Mais','Alzoubani');
let fullName2 = getFullName('Adam','Ahmad',1);
console.log(fullName1);
console.log(fullName2);