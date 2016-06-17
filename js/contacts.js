'use strict';
$(document).ready(function() {
//Empty contacts array
var contacts = [];

//Initial Object
var emptyContact = {
    first: "",
    last: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: ""
}

//FUNCTIONS
//Adding a contact
// var addContact = function() { ... }
function addContact() {
    console.log("hi")
    var newContact = Object.create(emptyContact);
    newContact.first = $("#first-name").val();
    newContact.last = $("#last-name").val();
    newContact.phone = $("#phone-number").val();
    newContact.street = $("#street").val();
    newContact.city = $("#city").val();
    newContact.state = $("#state").val();
    newContact.zip = $("#zipcode").val();
    contacts.push(newContact);
    console.log(newContact);
    return newContact;
}
//On Click function populates the empty contacts and adds to contact array
//Also empty contact list UL and append updated Contacts Array


// always use this when you are listening to a form.
$('form').submit(function(event) {
    event.preventDefault();
    $('.contact-list').empty();
    addContact();
    var i;
    for (i = 0; i < contacts.length; i++) {
        $('.contact-list').append("<li>" + contacts[i].first + " " + contacts[i].last + "</li>");
    }
    console.log(contacts)
    // add a-link for selecting contacts
})
// var newContact = this.emptyContact.forEach(function (element) {

// }
});

//Click function to select contacts from contact list and display in the contact info session
//Removes from array and reprints ul