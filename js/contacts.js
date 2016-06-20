
'use strict';
$(document).ready(function() {

<<<<<<< HEAD
    //Initial Object
    var emptyContact = {
        first: 'Brad',
        last: 'Pitt',
        phone: '3105550000',
        street: '123 Main Street',
        city: 'Beverly Hills',
        state: 'CA',
        zip: '90210'
    }
=======
//FUNCTIONS
>>>>>>> 9db3bf6299828d9df6e793da6a1c50deb86ec5e4

    //Adding a contact
    function addContact() {
        var newContact = Object.create(emptyContact);
        newContact.first = $('#first-name').val();
        newContact.last = $('#last-name').val();
        newContact.phone = $('#phone-number').val();
        newContact.street = $('#street').val();
        newContact.city = $('#city').val();
        newContact.state = $('#state').val();
        newContact.zip = $('#zipcode').val();
        contacts.push(newContact);
        //Variable to hold first and last name
        var contactInfo = newContact.first + " " + newContact.last;
        //function to display (full info) property to added object
        newContact.display = function() {
            $('.first-last').html(contactInfo);
            $('.first').html('First Name: ' + this.first);
            $('.last').html('Last Name: ' + this.last);
            $('.phone').html('Phone Number: ' + this.phone);
            $('.address').html('Address: ' + '<ul><li>' + this.street + ", " + this.city + ", " + this.state + '</ul></li>');
        }
        //calling the display function inside the addContact function
        contactDisplay(contactInfo, function() {
            //passing this to the specific contact being added
            newContact.display();
        });
        $('#form')[0].reset();
    } //addContact End

    function contactDisplay(contactInfo, clickHandler) {
        var aTag = $("<li> <a class='link' href='#display-area'>" + contactInfo + "</a> </li>").click(clickHandler);
        $('.contact-list').append(aTag)
    }

<<<<<<< HEAD
    $('#form').submit(function(event) {
        event.preventDefault();
        addContact();
    })

}); // document ready close
=======
    //On Click function populates the empty contacts and adds to contact array
    $('form').submit(function(event) {
        event.preventDefault();
        $('.contact-list').empty();
        addContact(); 
        for (var i = 0; i < contacts.length; i++) {
            $('.contact-list').append("<li><a href='#display-area' class='contact-display' onClick='contactDisplay(" + i + ");'>" + contacts[i].first + " " + contacts[i].last + "</a></li>");
        }
        $('.form-control').val(null);
    });

});

//Click function to select contacts from contact list and display in the contact info session
function contactDisplay(i) {
        $("#display-contact").empty();
        $("#display-contact").append("<li>" + contacts[i].first + " " + contacts[i].last + "</li>");
        $("#display-contact").append("<li>" + contacts[i].phone + "</li>");
        $("#display-contact").append("<li>" + contacts[i].street + "</li>");
        $("#display-contact").append("<li>" + contacts[i].city + "," + " " + contacts[i].state + "</li>");
        $("#display-contact").append("<li>" + contacts[i].zip + "</li>");
}

// Variables
var contacts = []
var fields = ["first", "last", "phone", "street", "city", "state", "zip"]
var totalFields = 7
var emptyContact = {
    first: "",
    last: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: ""
}








>>>>>>> 9db3bf6299828d9df6e793da6a1c50deb86ec5e4
