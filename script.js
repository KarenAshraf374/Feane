    // Booking Form Submission Logic
    const bookingForm = document.querySelector('#bookTable form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = bookingForm.querySelector('input[placeholder="Your Name"]').value;
            const date = bookingForm.querySelector('input[type="date"]').value;

            // Simple Feedback
            alert(`Thank you, ${name}! Your table reservation for ${date} has been received.`);
            bookingForm.reset();
        }
        )
};
   

    
