let lletres = ["c","a","r","l","o","t","a"];
const vocals = ["A","E","I","O","U"];

console.log("Partim del nom: CARL0TA");

toUpper = function(x){ 
    return x.toUpperCase();
};

toLower = function(x){ 
return x.toLowerCase();
};

lletres = lletres.map(toUpper);

console.log(lletres);

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

lletres = lletres.map(toLower);

console.log(lletres);