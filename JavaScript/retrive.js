//method to get all data
function allData() {

    table.innerHTML = ``
    //get data from localstorage and store to contaclist array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []
    //looping data and show data in table
    contactList.forEach(function (value, i) {

        var table = document.getElementById('table')

        table.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${value.fullName}</td>
                <td>${value.email}</td>
                <td>${value.contact}</td>
                <td>
                    <button type="button" onclick="find(${value.id})">Edit
                    </button>
                    
                </td>
                <td>
                    <button type="button" onclick="removeData(${value.id})">Delete
               </button>
                </td>
            </tr>`
    })
}
