let nom = ["C","A","R","L","O","T","A"];
let cognom = ["S","A","S"];
let fullName = nom.concat(cognom);

fullName.splice(7,0," ");

console.log(fullName);