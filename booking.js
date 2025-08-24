// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrv6by5gvNzIZbBT-sI0MqU1GQcxzTSvc",
    authDomain: "cafe-system-7ce7e.firebaseapp.com",
    databaseURL: "https://cafe-system-7ce7e-default-rtdb.firebaseio.com",
    projectId: "cafe-system-7ce7e",
    storageBucket: "cafe-system-7ce7e.appspot.com",
    messagingSenderId: "26331255227",
    appId: "1:26331255227:web:53f0c26c43c23958f7349e"
  };




// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the database
const db = firebase.database();

// Handle form submission
 document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Log to ensure the form submission is triggered
    console.log('Form submission triggered');

    // Get values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const people = document.getElementById('people').value;

    console.log('Data to be sent:', { name, email, date, time, people });

    // Save the data to Firebase
    db.ref('bookings').push({
        name: name,
        email: email,
        date: date,
        time: time,
        people: people
    }).then(() => {
        console.log('Table booking success');
        alert('Table booked successfully!');
        document.getElementById('bookingForm').reset(); // Reset the form

        // Redirect to the home page after successful booking
        window.location.href = 'index.html'; // Replace 'index.html' with your actual homepage
    }).catch((error) => {
        console.error('Error booking table:', error);
        alert('There was an error booking the table. Please try again.');
    });
});
// window.location.href = 'index.html'; // Redirect to home page after booking
