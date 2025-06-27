function sendWhatsAppMessage() {
    // Collect form data
    var userName = document.getElementById("yourname").value;
    var userEmail = document.getElementById("emailaddress").value;
    var userPhone = document.getElementById("phone").value;
    var userGender = document.querySelector('input[name="gender"]:checked').value;
    var userDOB = document.getElementById("dob").value;
    var userCourse = document.getElementById("course").value;

    // Validate the course selection
    if (userCourse === "select") {
        alert("Please select a course.");
        return;
    }

    // WhatsApp Number to receive messages
    var recipientNumber = "918007983109"; // Replace with your WhatsApp number in international format (e.g., "919876543210")

    // Generate the WhatsApp message
    var message = `New Admission Form Submission:%0A
    Name: ${userName}%0A
    Email: ${userEmail}%0A
    Phone: ${userPhone}%0A
    Gender: ${userGender}%0A
    Date of Birth: ${userDOB}%0A
    Selected Course: ${userCourse}`;

    // WhatsApp API URL
    var whatsappURL = `https://wa.me/${recipientNumber}?text=${message}`;

    // Open the WhatsApp chat in a new tab
    window.open(whatsappURL, "_blank");
}

function showmenu() {
    document.getElementById("navLinks").style.right = "0";
}

function hidemenu() {
    document.getElementById("navLinks").style.right = "-200px";
}
