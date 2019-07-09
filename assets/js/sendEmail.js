function sendMail(contactForm) {
    emailjs.send("gmail", "africa", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "information_request": contactForm.informationsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}
