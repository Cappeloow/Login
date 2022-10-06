/*

G KRAV
Ditt projekt skall kunna testas online via tex github pages. (10p) ///////DONE

Sidan visar dynamiskt rätt innehåll hela tiden. (10p) ///////////DONE

Det går att logga in. (10p) ///////////DONE

Inloggning sparas i localStorage, dvs det skall gå att ladda om webbläsaren och sidan kommer ihåg att man är inloggad och visar rätt vy. (20p)

Det går att logga ut. (10p)/////DONE

VG KRAV
Det skall finnas fler användare (med unika lösenord), dokumentera de andra användarna inför test i readme.md (10p) ////////////DONE

Välkomstsidan skall dynamiskt visa rätt användarnamn beroende på vem som är inloggad. (10p) ///////////DONE

Det skall gå att skapa och logga in med en ny användare (Då skall ett nytt formulär för detta visas på innehålls-sidan) Du skall då 
använda localStorage som databas för användare. (20p) 


Menyn skall alltid visas och ändras dynamiskt för att visa rätt innehåll:

**En valfri logotyp eller en h1'a.***
Om besökaren ej är inloggad så skall ett inloggningsformulär visas.
Är besökaren inloggad så skall istället en logga-ut knapp visas.
Innehålls -vyn skall dynamiskt växla mellan tre olika lägen:

Välkomstsida för ej inloggade.
Felmeddelande vid felaktig inlogging.
Välkomstsida för inloggad besökare.

PSEUDOCODE:
//skapa ett inloggningsformulär
//skapa en array-object med användarnamn och lösenord
//när vi trycker på submit så sätter vi en addEventlistener kollar vi ifall det är true eller false utifrån arrayen
// om det är sant så går vi vidare till nästa steg
// vi lägger till namn på personen som är inloggad
// vi gör en push function in i array för att lägga till fler namn.
//create a logout buttong and remove the input formular, paragraphs ~~
//om det är falskt så skriver vi fel password or username









*/
/***DETTA SKA SKRIVAS UT I LOGIN ***/
const divLogin = document.querySelector(".containeroflogin");
const button = document.querySelector("button");
const accountInput = document.querySelector("#user")
const passwordInput = document.querySelector("#pass")
const headerLogin = document.querySelector("h2");
const paragrafs = document.querySelectorAll("p");




/*CREATE ACCOUNTS*/
const divForCreate = document.querySelector(".createAccount");

const createAcc = document.querySelector("#chooseAcc");
const createPass = document.querySelector("#choosePass");
const buttonSubmit = document.querySelector(".submit");

const wrong = document.createElement("p"); 
divLogin.appendChild(wrong);

const accDone= document.createElement("p");

const users = [
  {account:"casper",password:"123456" },
  {account:"jonas",password:"242424" },
  {account:"erik",password:"252252" },
  {account:"trovald",password:"525252" },
];

/********Localstorage***********/
function inIt(){
  if(localStorage.getItem("Users")){
    LoggedIn();
  }
}

inIt();



/****lET THE USER PUSH ACC AND PASS***/
function createAccount(acc,password){
  users.push({account:acc, password:password});
}


/*******JUST PRESS THE BUTTON AFTER INPUTS */
buttonSubmit.addEventListener("click",function(){
  createAccount(createAcc.value, createPass.value);
  createAcc.value ="";
  createPass.value ="";
  divForCreate.appendChild(accDone);
  accDone.innerHTML = "Well Done";
});

/*****LOOP THROUGH ARRAY OF OBJECTS TO FIND THE RIGHT USER****/

function searchUser (){

  const inputAcc = accountInput.value;
  const inputPass = passwordInput.value;

  for(var i = 0; i<users.length; i++)
  {
    if (inputAcc === users[i].account && inputPass === users[i].password)
      {
        const loggedIn = users[i].account; 
        localStorage.setItem("Users", loggedIn);
        LoggedIn(); 
        return;
      } 
  }
  accountInput.value = "";
  passwordInput.value = "";
  /*********IF IT'S NOT FOUND WRONG PASSWORD***********/
  wrong.innerHTML ="Wrong Password";
}

/****lOGGEDIN AND DISPLAYING USER**/
function LoggedIn(){
  const userName = localStorage.getItem("Users");
  headerLogin.innerHTML =  userName;
  button.innerHTML = "Log Out";
  accountInput.style.display ="none";
  passwordInput.style.display="none";
  paragrafs[1].style.display="none";
  paragrafs[0].innerHTML = "ENJOY YOUR STAY";
  wrong.style.display="none";
  divForCreate.style.display="none";
  accountInput.value ="";
  passwordInput.value ="";
  
}

/******LOGGEDOUT*****/
function ToLogout(){
  headerLogin.innerHTML = "Please log in";
  button.innerHTML = "Log In";
  accountInput.style.display ="block";
  passwordInput.style.display ="block";
  paragrafs[1].style.display="block";
  paragrafs[0].innerHTML = "Password";
  wrong.style.display="block";
  divForCreate.style.display="inline";
  localStorage.removeItem("Users");
}





button.addEventListener("click", function(){
  
  
  if(button.innerHTML==="Log In")
  {
    searchUser();
  } 
  else if (button.innerHTML ==="Log Out")
  {
    ToLogout();
    

  }

   
});

