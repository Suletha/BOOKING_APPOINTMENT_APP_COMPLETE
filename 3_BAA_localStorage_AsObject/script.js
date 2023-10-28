function store_data(){
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

    
    
}