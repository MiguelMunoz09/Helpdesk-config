const { write } = require('fs');
const inquirer = require('inquirer');
require('colors');

var readline = require ('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

function scripts () {

inquirer
.prompt([
  {
    type: "rawlist",
    name: "questionsform",
    message: "what would you like to do? ",
    loop : true,
    choices: [
      
      {
        value: "1",
        name: `Install X-Code and Homebrew (required for App install)`,
      },
      {
        value: "2",
        name: `Install General Apps (Google Chrome, Firefox, Clockify, Clickup, Slack) `,
      },
      {
        value: "3",
        name: `Install General Developer Apps`,
      },
      {
        value: "4",
        name: `Install Designer Apps`,
      },
      {
        value: "5",
        name: `Close window`,
        
      }

    ]
  }
])



.then(({questionsform}, ) => {
console.log (`se esta ejecutando la funcion  ${questionsform} ...`) 
  function show () {
    if (questionsform == 1) {
    console.log ("en proceso..")
      goback();

    
  } else if (questionsform == 2){
    console.log ("este es el proceso 2")

    goback ();

  } else if (questionsform == 3) {
    console.log ("consola numero 3")

    goback ();

  } else if (questionsform == 4 ) {
    console.log ("consola numero 4")

    goback ();

  } else if (questionsform == 5) {
    console.log("ten ")
    process.exit();
  

  } else {
    console.log("sintaxis equivocada")
  }
  }
  show ();
 
})

 

.catch((error) => {
 if (error.isTtyError) {

   console.log(error)
 } else {
   /* console */
  }

}); 



}



scripts ()

//para volver a el formulario.

function goback () {
  inquirer
.prompt([
  {
    type: "input",
    name: "press9",
    message: "press 9 for go back ",
    loop : true,
    
  }
])

.then(({press9}, ) => {
  
    function show2 () {
      if (press9 == 9) {
      scripts();
        
    } else {
      console.log("sintaxis equivocada, digita bien el numero")
      goback();
    }
    }
    show2 ();
   
  })
  
}

// para salir de la consola



























//para volver atras
/*

var result;


function allthishit () {
    process.stdout.write ("selecciona el 9 para volver: ")

      process.stdin.on('data', function(data){
       result = data.toString()
        if (result == 9 ) {
            console.log ("se logro")
        } else {
            console.log ("no se logro")
            process.exit();
        }
})

}

  */


 
  
    













 








  
   




         
