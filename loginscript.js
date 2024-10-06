function handleSignIn(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get user inputs
    const email = document.querySelector('.input-field[type="text"]').value;
    const password = document.querySelector('.input-field[type="password"]').value;

    // Define allowed email/password pairs
    const validCredentials = [
        { email: 'rujul1710@gmail.com', password: 'sharlincutie' },
        { email: 'user2@example.com', password: 'password2' }
    ];
 
    // Check if the entered credentials match any of the valid pairs
    const isValidUser = validCredentials.some(user => user.email === email && user.password === password);

    if (isValidUser) {
        window.location.href = 'video-player.html'; // Redirect to the video player page
    } else {
        alert('Invalid email or password. Please try again.'); // Show an error message
    }
}