// Contact form handling
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const form = this;
    const submitButton = form.querySelector('.submitform');
    const loader = document.getElementById('submit-loader');
    const successMessage = document.getElementById('message-success');
    const warningMessage = document.getElementById('message-warning');

    // Clear previous messages
    successMessage.style.display = 'none';
    warningMessage.style.display = 'none';
    loader.style.display = 'block';

    try {
        const templateParams = {
            from_name: form.from_name.value,
            from_email: form.from_email.value,
            subject: form.subject.value,
            message: form.message.value,
            to_name: "Muhammed Mubaris"
        };

        const response = await emailjs.send(
            'service_yvxqxwp',
            'template_yvw0rvr',
            templateParams,
            'user_Qj6AmhWGwZBxBgbUGCFbF'
        );

        // Hide loader
        loader.style.display = 'none';

        if (response.status === 200) {
            // Show success message
            form.reset();
            form.style.display = 'none';
            successMessage.style.display = 'block';
        } else {
            // Show error message
            warningMessage.innerHTML = 'Something went wrong. Please try again.';
            warningMessage.style.display = 'block';
        }
    } catch (error) {
        // Hide loader and show error message
        loader.style.display = 'none';
        warningMessage.innerHTML = 'Failed to send message. Please try again.';
        warningMessage.style.display = 'block';
        console.error('Contact form error:', error);
    }
}); 