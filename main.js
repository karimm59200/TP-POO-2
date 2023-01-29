import { Contact } from "./classe/Contact.js"

let contact1= new Contact("Mr","Dupont","Jean","12/12/1980","+(33)6 12 12 12 12","Dup-jeanjean@gmail.fr")
let contact2= new Contact("Mme","Doe","Jeanne","01/25/1985","+(33)6 13 13 13 13","Doedoe-MarieJeanne@gmail.com")
// console.log(contact1);
// console.log(contact2);

let contacts = []

 contacts.push(contact1);
 contacts.push(contact2);

//  console.table(contacts);

contacts.forEach(contact => { 
console.log(`<tr>
<th>${contact.titre}</th>
<th>${contact.nom}</th>
<th>${contact.prenom}</th>
<th>${contact.dateDeNaissance}</th>
<th>${contact.tel}</th>
<th>${contact.email}</th>
</tr>`)
  
   console.table(contact);
});

const table = document.getElementById("table");
const man = document.getElementById('man');
const woman = document.getElementById('woman');
const prenom = document.getElementById('fname');
const nom = document.getElementById('lname');
const dateNaissance = document.getElementById("birthDate");
const tel = document.getElementById("tel");
const email = document.getElementById('email');
const btn = document.getElementById("btn");
// const refreshTableContact = document.getElementById('table');
console.log(btn);

// const dateFR = Contact.dateDeNaissance.split('/').reverse().join('');

// console.log(dateFR);

// reverse = mot.split('').reverse().join('');





  const refreshTableContact = contacts.forEach(contact => {
  table.innerHTML += `<tr class="table-light m-5">
  <th>${contact.titre}</th>
  <th>${contact.nom}</th>
  <th>${contact.prenom}</th>
  <th>${contact.dateDeNaissance}</th>
  <th>${contact.tel}</th>
  <th>${contact.email}</th>
  </tr>`;


     console.log(contact);
   })
 


btn.addEventListener('click', () => {
   if (man) 
   {document.getElementById('man').value}
   else {
    document.getElementById('woman').value
   }
   ;
  prenom = document.getElementById('fname').value;
  nom = document.getElementById('lname').value;
  dateNaissance = document.getElementById('birthDate').value;
  tel = document.getElementById('tel').value;
  email = document.getElementById('email').value;

  contacts.push({
    man : man,
    prenom : prenom,
    nom  : nom,
    dateNaissance : dateNaissance,
    tel : tel,
    email : email,
  })
  console.table(contacts);

    refreshContacts()
    
      man=true;
      prenom="";
      nom="";
      dateNaissance="";
      tel="";
      email="";
        
    
})


