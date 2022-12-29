import {Xcode,Homebrew,googlechrome,pdf,Github,adobe} from "./Functions.js"
import inquirer from 'inquirer';
import clc from "cli-color";

//form

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
            name: `Install X-Code (installation required)`
          },
          {
            value: "2",
            name: `Install Homebrew (installation required)`
          },
          {
            value: "3",
            name: `Install General Apps (Google Chrome, Firefox, Clockify, Clickup, Slack) `,
          },
          {
            value: "4",
            name: `Install General Developer Apps`,
          },
          {
            value: "5",
            name: `Install administration and accounting applications`,
          },
          {
            value: "6",
            name: `Install Designer Apps`,
          },
  
          {
            value: "7",
    
            name: `Close window`,
            
          }
    
        ]
      }
    ])
    
    //conditionals form
    
    .then(({questionsform}, ) => {

    console.log (clc.green(`Function  ${questionsform} is being executed` ))

      function show () {
        if (questionsform == 1) {
           
        Xcode ();
        
      } else if (questionsform == 2){
       Homebrew();
  
      } else if (questionsform == 3) {
  
        googlechrome ();
            
      } else if (questionsform == 4 ) {
        
        Github();
    
      } else if (questionsform == 5) {
        pdf();
        
      } else  if (questionsform == 6){ 
       adobe();
  
        } else if (questionsform == 7 ) {
        console.log(clc.white("Coming out of the console... "))
        setTimeout (function (){
        process.exit();
        }, 900 )
      } 
  
      }
      show ();
     
    })
    
    //.catch para evitar que el programa se rompa gravemente
    
    .catch((error) => {
     console.log(clc.cyan("Something is wrong!"))
     console.log(clc.red(error))
  
    }); 
    
    
  
  
    }

export default scripts;


