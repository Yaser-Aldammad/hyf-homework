
let firstName= "Yaser",
    lastName= "Aldammad",
    useFormalName= true;

    let firstname= "Adam",
        lastname= "Aldammad",
        useFormalName1= false;

function getFullNameParent(useFormalName, firstName, lastName) {
    if (useFormalName == true) { 

      return "Lord "+ firstName + " " + lastName;
    
    } else {

        return firstName+ " "+ lastName;
    }
}

document.getElementById("output1").innerHTML= getFullNameParent(useFormalName, firstName, lastName);

function getFullNamechild(useFormalName1, firstname, lastname){
    if(useFormalName1== false){
        return firstname+ " "+ lastname
    }
}

document.getElementById("output2").innerHTML=getFullNamechild(useFormalName1, firstname, lastname);