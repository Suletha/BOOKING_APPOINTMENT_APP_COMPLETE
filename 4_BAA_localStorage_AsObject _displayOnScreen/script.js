function store_data(event){
     
    // Prevent the default form submission behavior
    event.preventDefault();

    //getting the elements 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone_no").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    
    //create a user details for object
    const userDetails ={
        user_name: name,
        user_email: email,
        user_phone: phone,
        user_date: date,
        user_time: time

    };

    // Store the user details object in local storage
    localStorage.setItem('userDetails',JSON.stringify(userDetails));
    
    // Display the user details on the screen
    displayUserDetails(userDetails);

      
    
}
function displayUserDetails(userDetails){
    //Get the  display element
    const displayElement = document.getElementById("userDetailsDisplay");

    // Create HTML content to display user details
    const userDetailsHTML = `
    <h3>User Details:</h3>
    <p>Name--> ${userDetails.user_name}</p>
    <p>Email--> ${userDetails.user_email}</p>
    <p>Phone--> ${userDetails.user_phone}</p>
    <p>Date for call--> ${userDetails.user_date}</p>
    <p>Time for call--> ${userDetails.user_time}</p>
    `;

    // Update the display element with the user details
    displayElement.innerHTML = userDetailsHTML;
}