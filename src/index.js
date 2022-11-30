const { write } = require('fs');
const inquirer = require('inquirer');
require('colors');

var readline = require ('readline');

var rl = readline.createInterface(process.stdin, process.stdout);

//Formulario

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

//condicionales del formulario

.then(({questionsform}, ) => {
console.log (`Function  ${questionsform} is being executed ...`) 
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
    setTimeout (function (){
    console.log("Coming out of the console... ")
    process.exit();
  
    }, 1000)
    

  } else {
    console.log("sintaxis equivocada")
  }
  }
  show ();
 
})

//.catch para evitar que el programa se rompa gravemente

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

