let btnAdd = document.getElementById("addExp")
let table = document.getElementById("expTable")

let nameInput = document.getElementById("Name")
let dateInput = document.getElementById("Date")
let amountInput = document.getElementById("Amount")

btnAdd.addEventListener('click', function(){
    let n = nameInput.value;
    let d = dateInput.value;
    let a = amountInput.value;
    let template = `
    
    <tr bgcolor="lightgrey"> 
        <th>${n}</th>
        <th>${d}</th>
        <th>$${a}</th>
    </tr>
    
    `
    table.innerHTML +=template;
});