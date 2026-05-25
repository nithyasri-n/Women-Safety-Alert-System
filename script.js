function sendAlert() {

    document.getElementById("message").innerHTML =
        "Emergency Alert Sent Successfully!";
}

function getLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(showPosition);

    } else {

        document.getElementById("location").innerHTML =
            "Geolocation is not supported.";
    }
}

function showPosition(position) {

    document.getElementById("location").innerHTML =
        "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

function saveContact() {

    let name = document.getElementById("contact1").value;

    let phone = document.getElementById("phone1").value;

    if(name === "" || phone === ""){
        alert("Please enter both name and phone number");
        return;
    }

    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    contacts.push({
        name: name,
        phone: phone
    });

    localStorage.setItem("contacts", JSON.stringify(contacts));

    document.getElementById("savedContact").innerHTML =
        "Emergency Contact Saved Successfully!";

    document.getElementById("contact1").value = "";
    document.getElementById("phone1").value = "";

    displayContacts();
}

function displayContacts() {

    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    let contactList = document.getElementById("contactList");
}