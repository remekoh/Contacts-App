'use strict';
$(document).ready(function() {
    //Empty contacts array
    var contacts = [];

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

    //FUNCTIONS
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

    $('#form').submit(function(event) {
        event.preventDefault();
        addContact();
    })

}); // document ready close