function validateForm() {
    const name = document.forms["formValidate"]["name"].value.trim();
    const email = document.forms["formValidate"]["email"].value.trim();
    const phoneNumber = document.forms["formValidate"]["phone"].value.trim();
    const destination = document.forms["formValidate"]["destination"].value;
    
    document.getElementById("error-name").innerHTML = "";
    document.getElementById("error-email").innerHTML = "";
    document.getElementById("error-phone").innerHTML = "";
    document.getElementById("error-destination").innerHTML = "";

    if (name === "") {
        document.getElementById("error-name").innerHTML = "*name required!";
        return false;
    }

    if (email === "") {
        document.getElementById("error-email").innerHTML = "*email required!";
        return false;
    }

    if (phoneNumber === "") {
        document.getElementById("error-phone").innerHTML = "*phone number required!";
        return false;
    }

    if (destination === "") {
        document.getElementById("error-destination").innerHTML = "*destination must be selected!";
        return false;
    }

    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const images = document.querySelectorAll(".main-banner .banner");
    const totalImages = images.length;

    function showNextImage() {
        images[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].style.display = "block";
    }

    setInterval(showNextImage, 2000);
});


