import { exec } from 'child_process';
import inquirer from 'inquirer';

//Xcode and Homebrew (required for install all aplications)

function Xcode () {
  return new Promise (function(resolve,reject){
      setTimeout (function(){
          exec ('xcode-select --install',
          function (error, stderr) {
              console.log('stderr: ' + stderr);
              if (error !== null ) {
                  console.log ('code error' + error);
                  scripts();

              } else {
                  console.log ("Xcode is installed")
                  scripts();
              }
              
          }
         
          )
          resolve();
      }, 1000)
       
  })
}

function Homebrew () {
  return new Promise (function(resolve,reject){
      setTimeout (function(){
        exec('sudo -i'),
        exec('/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
          function (error, stderr) {
              console.log('stderr: ' + stderr);
              if (error !== null ) {
                  console.log ('code error' + error);
                  scripts();
              } else {
                  console.log ("Homebrew is installed")
                  scripts();
              }
              
          }
         
          )
          resolve();
      }, 1000)
       
  })
}

//developer tools

function Github () {
  return new Promise (function(resolve,reject){
      setTimeout (function(){
          exec ('brew install --cask github',
          function (error, stderr) {
              console.log('stderr: ' + stderr);
              if (error !== null ) {
                  console.log ('code error' + error);
                  visualcode();
              } else {
                  console.log ("Github is installed")
                  visualcode();
              }
              
          }
         
          )
          resolve();
      }, 1000)
       
  })
}

function visualcode () {
  return new Promise (function(resolve,reject){
      setTimeout (function(){
          exec ('brew install --cask visual-studio-code',
          function (error, stderr) {
              console.log('stderr: ' + stderr);
              if (error !== null ) {
                  console.log ('code error' + error);
                Postman();
              } else {
                  console.log ("Visual Studio Code is installed")
                  Postman();
              }
              
          }
         
          )
          resolve();
      }, 1000)
       
  })
}

function Postman () {
  return new Promise (function(resolve,reject){
      setTimeout (function(){
          exec ('brew install --cask postman',
          function (error, stderr) {
              console.log('stderr: ' + stderr);
              if (error !== null ) {
                  console.log ('code error' + error);
                  docker();
              } else {
                  console.log ("Postman is installed")
                  docker();
              }
              
          }
         
          )
          resolve();
      }, 1000)
       
  })
}

function docker () {
  return new Promise (function(resolve,reject){
      setTimeout (function(){
          exec ('brew install --cask docker',
          function (error, stderr) {
              console.log('stderr: ' + stderr);
              if (error !== null ) {
                  console.log ('code error' + error);
                  zshell();
              } else {
                  console.log ("Docker is installed")
                  zshell();
              }
              
          }
         
          )
          resolve();
      }, 1000)
       
  })
}

function zshell () {
  return new Promise (function(resolve,reject){
      setTimeout (function(){
          exec (' brew install zsh',
          function (error, stderr) {
              console.log('stderr: ' + stderr);
              if (error !== null ) {
                  console.log ('code error' + error);
                  scripts();
              } else {
                  console.log ("Zshell is installed")
                  scripts();
              }
              
          }
         
          )
          resolve();
      }, 1000)
       
  })
}

function adobe () {
  return new Promise (function(resolve,reject){
      setTimeout (function(){
          exec (' brew install --cask adobe-creative-cloud',
          function (error, stderr) {
              console.log('stderr: ' + stderr);
              if (error !== null ) {
                  console.log ('code error' + error);
                figma();
              } else {
                  console.log ("Adobe is installed")
                  figma();
              }
              
          }
         
          )
          resolve();
      }, 1000)
       
  })
}

function figma () {
  return new Promise (function(resolve,reject){
      setTimeout (function(){
          exec ('brew install --cask figma',
          function (error, stderr) {
              console.log('stderr: ' + stderr);
              if (error !== null ) {
                  console.log ('code error' + error);
                  scripts();
              } else {
                  console.log ("Figma is installed")
                  scripts();
              }
              
          }
         
          )
          resolve();
      }, 1000)
       
  })
}

//administrations tools

function pdf () {
  return new Promise (function(resolve,reject){
      setTimeout (function(){
          exec (' brew install --cask adobe-acrobat-reader',
          function (error, stderr) {
              console.log('stderr: ' + stderr);
              if (error !== null ) {
                  console.log ('code error' + error);
                  office();
              } else {
                  console.log ("Adobe PDF is installed")
                  office();
              }
              
          }
         
          )
          resolve();
      }, 1000)
       
  })
}

function office () {
  return new Promise (function(resolve,reject){
      setTimeout (function(){
          exec ('brew install --cask microsoft-office',
          function (error, stderr) {
              console.log('stderr: ' + stderr);
              if (error !== null ) {
                  console.log ('code error' + error);
                    scripts();
              } else {
                  console.log ("Office is installed")
                  scripts();
              }
              
          }
         
          )
          resolve();
      }, 1000)
       
  })
}


//General tools!

  function googlechrome () {
    return new Promise (function(resolve,reject){
        setTimeout (function(){
            exec ('brew install --cask google-chrome',
            function (error, stderr) {
                console.log('stderr: ' + stderr);
                if (error !== null ) {
                    console.log ('code error' + error);
                    slack();

                } else {
                    console.log ("google chrome is installed")
                    slack();
                }
                
            }
           
            )
            resolve();
        }, 1000)
         
    })
}

function slack () {
    return new Promise (function(resolve,reject){
        setTimeout (function(){
            exec('brew install --cask slack',
            function (error, stderr) {
                console.log('stderr: ' + stderr);
                if (error !== null ) {
                    console.log ('code error' + error);
                    clickup();
                } else {
                    console.log("Slack is Installed")
                    clickup();
                }
                
            }
            )
            resolve();
        }, 1000)
    })
}


function clickup () {
    return new Promise (function(resolve,reject){
        setTimeout (function(){
            exec('brew install --cask clickup',
            function (error, stderr) {
                console.log('stderr: ' + stderr);
                if (error !== null ) {
                    console.log ('code error' + error);
                    clockify();
                } else {
                    console.log("Clickup is Installed")
                    clockify();
                }
                
            }
            )
            resolve();
        }, 1000)
    })
}

function clockify () {
    return new Promise (function(resolve,reject){
        setTimeout (function(){
            exec('brew install --cask clockify',
            function (error, stderr) {
                console.log('stderr: ' + stderr);
                if (error !== null ) {
                    console.log ('code error' + error);
                   firefox();
                } else {
                    console.log ("Clockify is Installed")
                    firefox()
                }
                
            }
            )
            resolve();
        }, 1000)
    })
}


function firefox () {
    return new Promise (function(resolve,reject){
        setTimeout (function(){
            exec('brew install --cask firefox',
            function (error, stderr) {
                console.log('stderr: ' + stderr);
                if (error !== null ) {
                    console.log ('code error' + error);
                      scripts()
                } else {
                    console.log ("Firefox is installed")
                    scripts();
                }
                
            }
            )
            resolve();
        }, 1000)
    })
}


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
    console.log (`Function  ${questionsform} is being executed ...`) 
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
        console.log("Coming out of the console... ")
        setTimeout (function (){
        process.exit();
        }, 1000 )
      } 
  
      }
      show ();
     
    })
    
    //.catch para evitar que el programa se rompa gravemente
    
    .catch((error) => {
     console.log("Something is wrong!")
     console.log(error)
  
    }); 
    
    
  
  
    }

export default scripts;


