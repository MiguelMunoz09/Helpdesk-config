import { exec } from 'child_process';
import clc from "cli-color";
import scripts from './index.js';

function Xcode () {
    exec('xcode-select --install', (error,stderr) => {
        console.log(clc.white("stderr: " + stderr))
        if (error !== null) {
            console.log(clc.red(error))
            scripts();
        } else {
            console.log(clc.green("Xcode is installed!"))
            scripts();
        }
    })
}


//tarda 4:50 minutos en descargar homebrew

function Homebrew () {
          exec('sudo -i'),
          exec('/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
            function (error, stderr, stdout) {
                console.log(clc.white('stderr: ' + stderr));
                if (error !== null ) {
                    console.log(clc.red (error));
                    stepOne();
                } else {
                    stepOne();
                }
                // console.log(clc.white(`stdout:\n${stdout}`));
            }
            )
    }
  
  
  function stepOne () {
            exec('echo eval "$(/opt/homebrew/bin/brew shellenv)"',
              function (error, stderr) {
                  if (error !== null ) {
                      console.log (clc.red(error));
                      stepTwo();
                  } else {
                      stepTwo();
               
                  } 
              }
              )
      }
    
  
  
  function stepTwo () {
            exec('eval "$(/opt/homebrew/bin/brew shellenv)"',
              function (error, stderr) {
                  if (error !== null ) {
                    console.log (clc.red(error));
                      scripts();
                  } else {
                      console.log (clc.green("Homebrew is installed!"))
                      scripts();
                  }
              }
              )
      }


    // software tools
    // tarda 

      function Github () {
                exec ('brew install --cask github',
                function (error, stderr) {
                    console.log(clc.white('stderr: ' + stderr));
                    if (error !== null ) {
                        console.log (clc.red(error));
                        visualcode();
                    } else {
                        console.log (clc.green("Github is installed!"))
                        visualcode();
                    }
                    
                }
               
                )
                
            }
             
      
      function visualcode () {
                exec ('brew install --cask visual-studio-code',
                function (error, stderr) {
                    console.log(clc.white('stderr: ' + stderr));
                    if (error !== null ) {
                        console.log (clc.red(error));
                        Postman();
                    } else {
                        console.log (clc.green("Visual Studio Code is installed!"))
                        Postman();
                    } 
                }
                )
            }
      
      function Postman () {
                exec ('brew install --cask postman',
                function (error, stderr) {
                    console.log(clc.white('stderr: ' + stderr));
                    if (error !== null ) {
                        console.log (clc.red(error));
                        docker();
                    } else {
                        console.log (clc.green("Postman is installed!"))
                        docker();
                    }  
                }
                )   
        }
      
    
      function docker () {
                exec ('brew install --cask docker',
                function (error, stderr) {
                    console.log(clc.white('stderr: ' + stderr));
                    if (error !== null ) {
                        console.log (clc.red(error));
                        zshell();
                    } else {
                        console.log (clc.green("Docker is installed!"))
                        zshell();
                    }   
                }
                )
            }
      
      function zshell () {
                exec (' brew install zsh',
                function (error, stderr) {
                    console.log(clc.white('stderr: ' + stderr));
                    if (error !== null ) {
                        console.log (clc.red(error));
                        scripts();
                    } else {
                        console.log (clc.green("Zshell is installed!"))
                        scripts();
                    }    
                }
                )
            }
        
// design apps

function adobe () {
            exec (' brew install --cask adobe-creative-cloud',
            function (error, stderr) {
                console.log(clc.white('stderr: ' + stderr));
                if (error !== null ) {
                    console.log (clc.red(error));
                  figma();
                } else {
                    console.log (clc.green("Adobe is installed"))
                    figma();
                }
            }
            ) 
        }

  function figma () {
            exec ('brew install --cask figma',
            function (error, stderr) {
                console.log(clc.white('stderr: ' + stderr));
                if (error !== null ) {
                    console.log (clc.red(error));
                    scripts();
                } else {
                    console.log (clc.green("Figma is installed"))
                    scripts();
                }   
            }
            )
        }
    
//general tools
// 2 minutos

function googlechrome () {
            exec ('brew install --cask google-chrome',
            function (error, stderr) {
                console.log(clc.white('stderr: ' + stderr));
                if (error !== null ) {
                    console.log (clc.red(error));
                    slack();

                } else {
                    console.log (clc.green("google chrome is installed"))
                    slack();
                }
                
            }
            )
        }

function slack () {
    
            exec('brew install --cask slack',
            function (error, stderr) {
                console.log(clc.white('stderr: ' + stderr));
                if (error !== null ) {
                    console.log (clc.red(error));
                    clickup();
                } else {
                    console.log(clc.green("Slack is Installed"))
                    clickup();
                }   
            }
            )
    }


function clickup () {
            exec('brew install --cask clickup',
            function (error, stderr) {
                console.log(clc.white('stderr: ' + stderr));
                if (error !== null ) {
                    console.log (clc.red(error));
                    clockify();
                } else {
                    console.log(clc.green("Clickup is Installed"))
                    clockify();
                } 
            }
            )
        }

function clockify () { 
            exec('brew install --cask clockify',
            function (error, stderr) {
                console.log(clc.white('stderr: ' + stderr));
                if (error !== null ) {
                    console.log (clc.red(error));
                   firefox();
                } else {
                    console.log (clc.green("Clockify is Installed"))
                    firefox()
                }   
            }
            )
        }


function firefox () {
            exec('brew install --cask firefox',
            function (error, stderr) {
                console.log(clc.white('stderr: ' + stderr));
                if (error !== null ) {
                    console.log (clc.red(error));
                      scripts()
                } else {
                    console.log (clc.blue("Firefox is installed"))
                    scripts();
                } 
            }
            )
        }

      //administration tool
      //4:38 minutos 

      function pdf () {
                exec (' brew install --cask adobe-acrobat-reader',
                function (error, stderr) {
                    console.log(clc.white('stderr: ' + stderr));
                    if (error !== null ) {
                        console.log (clc.red(error));
                        office();
                    } else {
                        console.log (clc.green("Adobe PDF is installed"))
                        office();
                    }                   
                }               
                )
            }
             
     
      
      function office () {        
                exec ('brew install --cask microsoft-office',
                function (error, stderr) {
                    console.log(clc.white('stderr: ' + stderr));
                    if (error !== null ) {
                        console.log (clc.red(error));
                          scripts();
                    } else {
                        console.log (clc.green("Office is installed"))
                        scripts();
                    }                    
                }               
                )                
            }

export {Xcode,Homebrew,googlechrome,pdf,Github,adobe};