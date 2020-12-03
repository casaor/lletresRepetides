let lletres = ["C","A","R","L","0","T","A"];
const vocals = ["A","E","I","O","U"];

console.log("Partim del nom: CARL0TA");

lletres.map(function(lletra){
    if (!isNaN(lletra)) {
        console.log("Els noms de persones no contenen el número: " + lletra); 
    }else{
        let trobat = false;
        vocals.map(function(vocal){
            if(lletra == vocal){
                trobat= true;
            }
        })

        if (trobat){
            console.log("He trobat la VOCAL: " + lletra);
        }else{
            console.log("He trobat la CONSONANT: " + lletra);
        }
    }
})