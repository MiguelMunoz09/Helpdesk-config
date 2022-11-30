import inquirer from 'inquirer';
import { exec } from 'child_process';
import internal from 'stream';

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
      xcode_homebrew();

  } else if (questionsform == 2){
    generalapps();

  } else if (questionsform == 3) {
    developerapps();

  } else if (questionsform == 4 ) {
    designapps();

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


//funciones para descargar las aplicaciones



/**
 * Execute simple shell command (async wrapper).
 * @param {String} cmd
 * @return {Object} { stdout: String, stderr: String }
 */


async function sh(cmd) {
  return new Promise(function (resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err)
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

//funcion main que descarga las aplicaciones que necesitamos.

async function xcode() {
  let { stdout } = await sh('xcode-select --install');
  for (let line of stdout.split('\n')) {
    console.log(`xcode-select --install: ${line}`);
  }
}



async function Homebrew(){
  let {stdout} = await sh ('/ usr / bin / ruby ​​-e "$ (curl -sSL https://raw.githubusercontent.com/Homebrew/install/master/install)"');
  for(let line of stdout.split('\n')) {
    console.log(`Homebrew: ${line}`);
  }
}

async function slack(){
  let {stdout} = await sh ('brew install --cask slack');
  for(let line of stdout.split('\n')) {
    console.log(`brew install --cask slack: ${line}`);
  }
}

async function googlechrome(){
  let {stdout} = await sh ('brew install --cask google-chrome');
  for(let line of stdout.split('\n')) {
    console.log(`brew install --cask google-chrome: ${line}`);
  }
}

async function firefox (){
  let {stdout} = await sh ('brew install --cask firefox');
  for(let line of stdout.split('\n')) {
    console.log(`brew install --cask firefox: ${line}`);
  }
}

async function clickup (){
  let {stdout} = await sh ('brew install --cask clickup');
  for(let line of stdout.split('\n')) {
    console.log(`brew install --cask clickup: ${line}`);
  }
}

async function clockify (){
  let {stdout} = await sh ('brew install --cask clockify');
  for(let line of stdout.split('\n')) {
    console.log(`brew install --cask clockify: ${line}`);
  }
}

//developer apps 


async function github (){
  let {stdout} = await sh ('brew install --cask github');
  for(let line of stdout.split('\n')) {
    console.log(`brew install --cask github: ${line}`);
  }
}

async function visualstudio (){
  let {stdout} = await sh ('brew install --cask visual-studio-code');
  for(let line of stdout.split('\n')) {
    console.log(`brew install --cask visual-studio-code: ${line}`);
  }
}

async function postman (){
  let {stdout} = await sh ('brew install --cask postman');
  for(let line of stdout.split('\n')) {
    console.log(`brew install --cask postman: ${line}`);
  }
}

async function docker (){
  let {stdout} = await sh ('brew install --cask docker');
  for(let line of stdout.split('\n')) {
    console.log(`brew install --cask docker: ${line}`);
  }
}


//designers apps 

async function adobe (){
  let {stdout} = await sh ('brew install --cask adobe-creative-cloud');
  for(let line of stdout.split('\n')) {
    console.log(`brew install --cask adobe-creative-cloud: ${line}`);
  }
}

async function figma (){
  let {stdout} = await sh ('brew install --cask figma');
  for(let line of stdout.split('\n')) {
    console.log(`brew install --cask figma: ${line}`);
  }
}


//funciones para manejar el tiempo de los callbacks

//xcode y homebrew

function xcode_homebrew() {
    xcode();
   setInterval (()=>{
    Homebrew();
   }, 9000)
}

//aplicaciones generales

function generalapps () {
    googlechrome();
  
  setInterval (()=>{
    firefox();
  }, 9000 )

  setInterval (()=>{
    clickup();
  }, 10000)

  setInterval (()=>{
    slack();
  }, 18000)

  setInterval (()=>{
    clockify();
  }, 20000)
}

//aplicaciones de desarrollador

function developerapps (){
    github ();

  setInterval (()=>{
    visualstudio();
  }, 8000)

  setInterval (()=> {
    postman();
  }, 16000)

  setInterval (()=> {
    docker();
  }, 30000)

}

//aplicaciones de desarrollador

function designapps () {
    adobe();
    setTimeout (()=>{
      figma();
    }, 9000)
  

}

export default scripts;


