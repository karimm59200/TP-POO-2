import { Contact } from "./classe/Contact.js"

//let contact1= new Contact("Mr","Dupont","Jean","12/12/1980","+(33)6 12 12 12 12","Dup-jeanjean@gmail.fr")
//let contact2= new Contact("Mme","Doe","Jeanne","01/25/1985","+(33)6 13 13 13 13","Doedoe-MarieJeanne@gmail.com")
// console.log(contact1);
// console.log(contact2);

let contacts = [ 
  new Contact("Mr","Dupont","Jean","12/12/1980","+(33)6 12 12 12 12","Dup-jeanjean@gmail.fr"),
  new Contact("Mme","Doe","Jeanne","01/25/1985","+(33)6 13 13 13 13","Doedoe-MarieJeanne@gmail.com")
]
const btn = document.getElementById("btn");


 //contacts.push(contact1);
 //contacts.push(contact2);

//  console.table(contacts);


// const refreshTableContact = document.getElementById('table');


// const dateFR = Contact.dateDeNaissance.split('/').reverse().join('');

// console.log(dateFR);

// reverse = mot.split('').reverse().join('');



function refreshTableContact() {
  const table = document.getElementById("table");
  table.innerHTML =  '';
  contacts.forEach(contact => {
    table.innerHTML += `<tr class="table-light m-5">
    <th>${contact.titre}</th>
    <th>${contact.nom}</th>
    <th>${contact.prenom}</th>
    <th>${contact.dateDeNaissance}</th>
    <th>${contact.tel}</th>
    <th>${contact.email}</th>
    </tr>`
     });
}
refreshTableContact();

btn.addEventListener('click',function(){
  
  let titre = document.getElementById('man');
  let prenom = document.getElementById('fname');
  let nom = document.getElementById('lname');
  let dateNaissance = document.getElementById("birthDate");
  let tel = document.getElementById("tel");
  let email = document.getElementById('email');
  
  contacts.push({
    titre : titre.checked ? "Mr" : "Mme",
    prenom :  prenom.value,
    nom  : nom.value,
    dateNaissance : dateNaissance.value,
    tel : tel.value,
    email : email.value,
  })

    refreshTableContact();

  man.checked = true;
  prenom.value = "";
  nom.value = "";
  dateNaissance.value = "";
  tel.value = "";
  email.value = ""; 
  
})


