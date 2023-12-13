function change_me(){

    let first_name = document.getElementById("first_name").value;

    if(first_name == ""){
        document.getElementById("span1").innerHTML = "<span style='color: red;'>Please enter first name<span>";
    }else{
        document.getElementById("span1").innerHTML = first_name;
    };

    let last_name = document.getElementById("last_name").value;

    if(last_name == ""){
        document.getElementById("span2").innerHTML = "<span style='color: red;'>Please enter last name<span>";
    }else{
        document.getElementById("span2").innerHTML = last_name;
    };

    let email = document.getElementById("email").value;

    if(email == ""){
        document.getElementById("span3").innerHTML = "<span style='color: red;'>Please enter valid email id<span>";
    }else{
        document.getElementById("span3").innerHTML = email;
    };

    let phone = document.getElementById("phone").value;

    if(phone == ""){
        document.getElementById("span4").innerHTML = "<span style='color: red;'>Please enter valid mobile number<span>";
    }else{
        document.getElementById("span4").innerHTML = phone;
    };

    let date = document.getElementById("date").value;

    if(date == ""){
        document.getElementById("span5").innerHTML = "<span style='color: red;'>Please select appointment date<span>";
    }else{
        document.getElementById("span5").innerHTML = date;
    };

    let time = document.getElementById("time").value;

    if(time == ""){
        document.getElementById("span6").innerHTML = "<span style='color: red;'>Please select appointment time<span>";
    }else{
        document.getElementById("span6").innerHTML = time;
    };

    let gender = document.getElementById("gender").value;

    if(gender == "Select Gender"){
        document.getElementById("span7").innerHTML = "<span style='color: red;'>Please select your gender<span>";
    }else{
        document.getElementById("span7").innerHTML = gender;
    };

    let treatment = document.getElementById("treatment").value;

    if(treatment == "Select Gender"){
        document.getElementById("span8").innerHTML = "<span style='color: red;'>Please select treatment which you want<span>";
    }else{
        document.getElementById("span8").innerHTML = treatment;
    };

    let doctor = document.getElementById("doctor").value;

    if(doctor == "Select Doctor"){
        document.getElementById("span9").innerHTML = "<span style='color: red;'>Please select Doctor<span>";
    }else{
        document.getElementById("span9").innerHTML = doctor;
    };

    let text = document.getElementById("africa").value;

    if(text == ""){
        document.getElementById("span10").innerHTML = "<span style='color: red;'>Optional<span>";
    }else{
        document.getElementById("span10").innerHTML = text;
    }

}

// let full_name = document.getElementById("name").value;

// if(full_name == ""){
//     document.getElementById("name_error").innerHTML = "<span style='color: red;'>Please field required information</span>";
// }else{
//     document.getElementById("name_error").innerHTML = full_name;
// }


// let state = document.getElementById("state").value;

//     if(state == "Select State"){
//         document.getElementById("state_error").innerHTML = "<span style='color: red;'>Please field required information</span>";
//     }else{
//         document.getElementById("state_error").innerHTML = state;
//     }