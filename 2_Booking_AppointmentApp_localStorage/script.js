function store_data(){
    //getting the elements 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone_no").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    //storing the data in Local Storage
    var user_name = localStorage.setItem("name",name)
    var user_email = localStorage.setItem("email",email)
    var user_phone = localStorage.setItem("phone",phone)
    var user_date = localStorage.setItem("date",date)
    var user_time = localStorage.setItem("time",time)

}