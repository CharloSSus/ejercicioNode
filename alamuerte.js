const fs = require("fs");

fs.readFile("./nombres.txt", (error, leer) =>{
    if(error){
        console.log("ha habido un error");
    }else{
        let leido = leer.toString(); 
        let nombres = leido.split(",");

        let personas = [];
        
       nombres.forEach(nombre=>{
           personas.push({
               nombres,
               edad: 
           })
       })



            
        }
    }
);

