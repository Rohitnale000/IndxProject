//this file serves to retrieve data from localStorage according to the selected id, 
//then the data will be displayed on the form.Follow the script below.
//method to get detail personal data based on id
function find(id){
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    contactList.forEach(function (value){
        if(value.id == id){
           document.getElementById('id').value = value.id
           document.getElementById('fullName').value = value.fullName
           document.getElementById('email').value = value.email
           document.getElementById('contact').value = value.contact
           
        }
    })
}