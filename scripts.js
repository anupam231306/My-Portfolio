document.addEventListener('DOMContentLoaded', (event) => {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_w20jfch', 'template_1plftl7', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message Sent!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Message Failed to Send');
            });
    });
});