function validateForm() {
    const name = document.forms["formValidate"]["name"].value.trim();
    const email = document.forms["formValidate"]["email"].value.trim();
    const phoneNumber = document.forms["formValidate"]["phone"].value.trim();
    const destination = document.forms["formValidate"]["destination"].value;
    
    // Reset error messages
    document.getElementById("error-name").innerHTML = "";
    document.getElementById("error-email").innerHTML = "";
    document.getElementById("error-phone").innerHTML = "";
    document.getElementById("error-destination").innerHTML = "";

    // Validasi nama
    if (name === "") {
        document.getElementById("error-name").innerHTML = "Name Required!";
        return false;
    }

    // Validasi email
    if (email === "") {
        document.getElementById("error-email").innerHTML = "Email Required!";
        return false;
    }

    // Validasi nomor telepon
    if (phoneNumber === "") {
        document.getElementById("error-phone").innerHTML = "Phone Number Required!";
        return false;
    }

    // Validasi destinasi
    if (destination === "") {
        document.getElementById("error-destination").innerHTML = "Destination must be selected!";
        return false;
    }

    // Jika semua validasi sukses
    return true;
}

// JS/script.js
document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const images = document.querySelectorAll(".main-banner .banner");
    const totalImages = images.length;

    function showNextImage() {
        images[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].style.display = "block";
    }

    setInterval(showNextImage, 2000); // Change image every 3 seconds
});


