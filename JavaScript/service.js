var registrationArray = [];
var contactArray=[];
function saveRegistrationDataFun() {
  //Retrieving the data from html file

  let fname = document.getElementById("firstname").value;
  let lname = document.getElementById("lastname").value;
  let mob = document.getElementById("mobile").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  //Validation Code

  let atposition = email.indexOf("@");
  let dotposition = email.lastIndexOf(".");
  if (fname == "" || lname == "" || mob == "" || email == "" || pass == "") {
    alert("please fill all details properly...");
    return;
  } else if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= email.length
  ) {
    alert("Please enter a valid e-mail address");
    return;
  } else if (mob.length > 10 || mob.length < 10) {
    alert("Enter Valid Mobile Number");
    return;
  } else if (pass.length < 5) {
    alert("Use atleast five letters");
    return;
  }

  //Retrieving data are converted into JS OBJECT
  let objRegistration = {
    fname: fname,
    lname: lname,
    mobile: mob,
    Email: email,
    Password: pass,
  };

  //push object data inside the array using push method
  registrationArray.push(objRegistration);
  console.log(registrationArray);

  //convert array data into JSON String using stringify method
  const cJSONString = JSON.stringify(registrationArray);
  localStorage.setItem("Registration", cJSONString);
  alert("Data Save Successfully...!")
}

//this is RESET Function which has been reset All form using form id
function resetFun() {
  let resetForm = document.getElementById("form_id");
  resetForm.reset();
}

//login button code

function loginFun() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let array = [];
  let passArray=[];
  let iCnt = 0;
  let getEmailValue = JSON.parse(localStorage.getItem("Registration"));
  let getPassValue = JSON.parse(localStorage.getItem("Registration"))

  getEmailValue.forEach((element) => {
    array.push(element.Email);
  });

  getPassValue.forEach(element => {
      passArray.push(element.Password)
  });

  for (let i = 0,j=0; i < array.length||j<passArray.length; i++,j++) {
    if (array[i] == email&& passArray[j]==pass) {
      iCnt++;
    }
  }

  if (iCnt > 0) {
     alert("Login Successfully...");
    location.href='./main.html' ;
  } else {
    alert("Invalid Username or Password");
  }
}


//Contact-Details Form

function saveContactDetails(){
  //Retrieving the data from html file

  let fname = document.getElementById("firstname").value;
  let lname = document.getElementById("lastname").value;
  let mob = document.getElementById("mobile").value;
  let email = document.getElementById("email").value;



  //Validation Code

 let atposition = email.indexOf("@");
 let dotposition = email.lastIndexOf(".");
 if (fname == "" || lname == "" || mob == "" || email == "") {
   alert("please fill all details properly...");
   return;
 } else if (
   atposition < 1 ||
   dotposition < atposition + 2 ||
   dotposition + 2 >= email.length
 ) {
   alert("Please enter a valid e-mail address");
   return;
 } else if (mob.length > 10 || mob.length < 10) {
   alert("Enter Valid Mobile Number");
   return;
 }

 //Retrieving data are converted into JS OBJECT
 let objContact = {
   fname: fname,
   lname: lname,
   mobile: mob,
   Email: email,
   
 };

  //push object data inside the array using push method
 contactArray.push(objContact);
 console.log(contactArray);

 //convert array data into JSON String using stringify method
 const conStringJSON = JSON.stringify(contactArray);
 localStorage.setItem("Contact", conStringJSON);
 alert("Data Save Successfully...!")
}


//data display in table format

// var contactArray1 =[];

// function displayDataFun(){

 
//   let getEmailValue = JSON.parse(localStorage.getItem("Contact"));
//   getEmailValue.forEach(element => {
//      contactArray1.push(element.fname) 
//   });

//   let fname = null;
//   for (let i = 0; i < contactArray1.length; i++) {
//    fname = contactArray1[i];
    
//   }

//   var table = document.getElementById("regtable");
//   var row = table.insertRow();
//   var firstNameCell = row.insertCell(0);

//   firstNameCell.innerHTML  = fname ;

  
// }