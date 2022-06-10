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
               nombre,
               edad: Math.floor(Math.random()*21)+10 
           })
       })

       let estudiantes = JSON.stringify(personas);
       fs.writeFile("./estudiantes.json", estudiantes, error =>{
           if(error){
               console.log("Ha habido un error")
           }else{
               console.log("Todo ok!")
            }
           
       });
        }
    }   
);

