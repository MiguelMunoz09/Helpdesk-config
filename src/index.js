import inquirer from 'inquirer';
import { exec } from 'child_process';
//functions for downloads the apps

//xcode and homebrew

function xcode () {
  console.log("Installing Xcode...")
  exec('xcode-select -p || xcode-select --install',
  function (error, stderr) {
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('Code error: ' + error);
         console.log ("xcode cannot be installed on your computer, because it is already installed.")
      } else {
          console.log("Xcode is Installed")
      }
  });
}

function homebrew () {
  console.log ("Installing Homebrew...")
  exec(' /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
  function (error, stderr) {
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('Code error: ' + error);
         console.log ("Homebrew cannot be installed on your computer, because it is already installed.")
      } else {
          console.log("Homebrew is Installed")
      }
  });
}


//general apps

function googlechrome () {
  console.log ("installing google chrome...")
  exec(' brew list google-chrome || brew install --cask google-chrome',
  function (error, stderr) {
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('Code error: ' + error);
         console.log ("google chrome cannot be installed on your computer, because it is already installed.")
      } else {
          console.log("google chrome is installed")
      }
  });
}

function firefox () {
  console.log("installing firefox...")
  exec(' brew list firefox || brew install --cask firefox',
  function (error, stderr) {
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('Code error: ' + error);
         console.log ("Firefox cannot be installed on your computer, because it is already installed.")
      } else {
          console.log ("Firefox is installed")
      }
  });
}

function clickup () {
  console.log ("installing Clickup...")
  exec('brew list clickup || brew install --cask clickup',
  function (error, stderr) {
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('Code error: ' + error);
         console.log ("Clickup cannot be installed on your computer, because it is already installed.")
      } else {
          console.log("Clickup is Installed")
      }
  });
}

function clockify () {
  console.log ("Installing Clockify...")
  exec('brew list clockify || brew install --cask clockify',
  function (error, stderr) {
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('Code error: ' + error);
         console.log ("Clockify cannot be installed on your computer, because it is already installed.")
      } else {
          console.log ("Clockify is Installed")
      }
  });
}

function slack () {
  console.log("Installing Slack...")
  exec('brew list slack || brew install --cask slack',
  function (error, stderr) {
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('Code error: ' + error);
         console.log ("Slack cannot be installed on your computer, because it is already installed.")
      } else {
          console.log("Slack is Installed")
      }
  });
}

//developertools

function github () {
  console.log ("Installing Github Command Line Tools...")
  exec('brew list gh || brew install --cask github',
  function (error, stderr) {
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('Code error: ' + error);
         console.log ("Github cannot be installed on your computer, because it is already installed.")
      } else {
          console.log("Github is Installed")
      }
  });
}

function visualcode () {
  console.log("Installing Visual Studio Code... ")
  exec(' brew list visual-studio-code || brew install --cask visual-studio-code',
  function (error, stderr) {
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('Code error: ' + error);
         console.log ("Visual studio code cannot be installed on your computer, because it is already installed.")
      } else {
          console.log("Visual Studio Code is installed")
      }
  });
}

function postman () {
  exec(' brew list postman || brew install --cask postman',
  function (error, stderr) {
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('Code error: ' + error);
         console.log ("Postman cannot be installed on your computer, because it is already installed.")
      } 
  });
}

function docker () {
  console.log ("Installing Docker...")
  exec('  brew list docker || brew install --cask docker',
  function (error, stderr) {
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('Code error: ' + error);
         console.log ("Docker cannot be installed on your computer, because it is already installed.")
      } else {
          console.log("Docker is Installed")
      }
  });
}

function zshell () {
  console.log ("Installing zshell...")
  exec(' brew install zsh',
  function (error, stderr) {
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('Code error: ' + error);
         console.log ("zshell cannot be installed on your computer, because it is already installed.")
      } else {
          console.log("zshell is Installed")
      }
  });
}



//design tools

function adobe () {
  console.log("Installing Adobe... ")
  exec('brew install --cask adobe-creative-cloud',
  function (error, stderr) {
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('Code error: ' + error);
         console.log ("Adobe cannot be installed on your computer, because it is already installed.")
      } else {
          console.log("Adobe is Installing")
      }
  });
}

function figma () {
  console.log("Installing Figma...")
  exec('brew install --cask figma',
  function (error, stderr) {
      console.log('stderr: ' + stderr);
      if (error !== null) {
          console.log('Code error: ' + error);
         console.log ("Figma cannot be installed on your computer, because it is already installed.")
      } else {
          console.log("Figma is Installed")
      }
  });
}

//para volver a el formulario.

const goback = async () => {
  const result = await inquirer
  .prompt([
    {
      type: "input",
      name: "press9",
      message: "press 9 for go back ",
      loop : true,
      
    }
  ])
  
const resultado = result.press9;

  if (resultado == 9){
      scripts();
  } else {
      console.log("type the correct syntax...")
      goback();
  }
}


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
        xcode();
        homebrew();
        goback();
        

        setTimeout (()=>{
          goback();
        }, 14000)
  
    } else if (questionsform == 2){
  
      googlechrome();
      clockify();
      clickup();
      firefox();
      slack();
      
      setTimeout (()=>{
        goback();
      }, 14000)

    } else if (questionsform == 3) {
      github();
      visualcode();
      docker();
      postman();
      zshell();
      
      setTimeout (()=>{
        goback();
      }, 14000)
  
    } else if (questionsform == 4 ) {
      adobe();
      figma();
      
      setTimeout (()=>{
        goback();
      }, 12000)

  
    } else if (questionsform == 5) {
      console.log("Coming out of the console... ")
      setTimeout (function (){
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

export default scripts;


