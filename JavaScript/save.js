//method to save data into localstorage
function save() {

    let fName = document.getElementById('fullName').value
    let mail = document.getElementById('email').value
    let contactNum = document.getElementById('contact').value
    if(fName=="" || mail=="" ||contactNum==""){
        alert("fill all details")
        return;
    }
 
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    //get last array to get last id
    //and store it into variable id
    var id
    contactList.length != 0 ? contactList.findLast((item) => id = item.id) : id = 0

    if (document.getElementById('id').value) {

        //edit contactlist array based on value
        contactList.forEach(value => {
            if (document.getElementById('id').value == value.id) {
                value.fullName = document.getElementById('fullName').value,
                    value.email = document.getElementById('email').value,
                    value.contact = document.getElementById('contact').value
            }
        });

        //remove hidden input
        document.getElementById('id').value = ''

    } else {

        //save
        //get data from form
        var item = {
            id: id + 1,
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            contact: document.getElementById('contact').value
        }

        //add item data to array contactlist
        contactList.push(item)
    }

    // save array into localstorage
    localStorage.setItem('listItem', JSON.stringify(contactList))

    //update table list
    allData()

    //remove form data
    document.getElementById('form').reset()
}