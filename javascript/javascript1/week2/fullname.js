let firstName= "Elias",
    surName= "Aldammad";

    function getFullName(firstName, surName){
        console.log(firstName, surName);
        return firstName+ " "+ surName;
    }
    document.getElementById("output").innerHTML= getFullName(firstName, surName);