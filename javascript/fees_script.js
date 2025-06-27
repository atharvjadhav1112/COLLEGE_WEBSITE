// Handle Navigation Menu Toggle
const navLinks = document.getElementById("navLinks");

function showmenu() {
    navLinks.classList.add("active");
}

function hidemenu() {
    navLinks.classList.remove("active");
}

// Handle Fee Payment Form Submission
function processPayment(event) {
    event.preventDefault();

    // Fetch user inputs
    const course = document.getElementById("course").value;
    const installment = document.getElementById("installment").value;
    const uid = document.getElementById("uid").value;

    // Validate form inputs
    if (!course || !installment || !uid) {
        alert("Please fill out all the required fields.");
        return;
    }

    // Confirm Payment (Simulated)
    alert(
        `Payment Initiated:\nCourse: ${course}\nInstallment: ${installment}\nUID: ${uid}\n\nThank you for your payment!`
    );

    // Reset form (Optional)
    document.getElementById("feesForm").reset();
}
