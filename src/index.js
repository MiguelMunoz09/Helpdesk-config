const inquirer = require('inquirer');
require('colors');

function scripts () {

inquirer
.prompt([
  {
    type: "rawlist",
    name: "options",
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

.then(() => {
  if (options = 1){
  console.log("test") 
    comeback();
 }
  
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

//para volver atras

function comeback () {
  inquirer
.prompt([ {
  type: "input",
    name: "entry",
    message: "press 9 for comeback:  ",
}])
   .then ((entry) => {
    console.log (entry)
   })
} 





  
   




         
