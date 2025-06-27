function sendmail() {
    // Capture form data
    const name = document.getElementById("yourname").value;
    const email = document.getElementById("emailaddress").value;
    const message = document.getElementById("phone").value;

    // Construct WhatsApp message
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Replace 'YOUR_PHONE_NUMBER' with your WhatsApp number including country code (e.g., +91xxxxxxxxxx)
    const whatsappURL = `https://api.whatsapp.com/send?phone=+918007983109&text=${whatsappMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");

    alert("Your message is being sent to WhatsApp - Team NESGI");
}

var navLinks = document.getElementById("navLinks");

function showmenu() {
    navLinks.style.right = "0";
}

function hidemenu() {
    navLinks.style.right = "-200px";
}
