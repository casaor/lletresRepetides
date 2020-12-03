let lletres = ["C","A","R","L","O","T","A"];
let repeticions = new Array ();

for (lletra of lletres){
    let repetida = 0;
    let trobat = false;

    for (repetit of repeticions){
        
        if (repetit.lletra == lletra){
            trobat = true;
        }
    }

    if (!trobat){
        for (i=0; i<lletres.length; i++){
            if (lletra == lletres[i]){
                repetida+=1;
            }
        }
        repeticions.push({lletra, repetida});     
    }  
}

console.log(repeticions);