// Initialize the user list from local storage
let userList = JSON.parse(localStorage.getItem('userList')) || [];

// Function to add a new user
function store_data(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Getting the elements 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone_no").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    
    // Create a user details object
    const userDetails = {
        user_name: name,
        user_email: email,
        user_phone: phone,
        user_date: date,
        user_time: time
    };
    
    // Add the user to the list
    userList.push(userDetails);

    // Store the updated user list in local storage
    localStorage.setItem('userList', JSON.stringify(userList));

    // Display the user details on the screen
    displayUserDetails(userList);

    // Clear the form for the next entry
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone_no").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
}

// Function to delete a user from the screen and local storage
function removeUser(index) {
    userList.splice(index, 1); // Remove the user from the array

    // Update local storage with the modified user list
    localStorage.setItem('userList', JSON.stringify(userList));

    // Display the updated user list
    displayUserDetails(userList);
}

// Function to display user details on the screen
function displayUserDetails(userList) {
    // Get the display element
    const displayElement = document.getElementById("userDetailsDisplay");

    // Create HTML content to display user details
    let userDetailsHTML = "<h3>User Details:</h3>";

    for (let i = 0; i < userList.length; i++) {
        const userDetails = userList[i];
        userDetailsHTML += `
            <p>Name--> ${userDetails.user_name}</p>
            <p>Email--> ${userDetails.user_email}</p>
            <p>Phone--> ${userDetails.user_phone}</p>
            <p>Date for call--> ${userDetails.user_date}</p>
            <p>Time for call--> ${userDetails.user_time}</p>
            <button onclick='removeUser(${i})'>Delete Me</button>
            <hr>`;
    }

    // Update the display element with the user details
    displayElement.innerHTML = userDetailsHTML;
}

// Attach the store_data function to the button's click event
document.getElementById("button").addEventListener("click", store_data);

// Display user details when the page loads
displayUserDetails(userList);
