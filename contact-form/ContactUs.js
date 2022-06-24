const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});



function sendEmail() {
    Email.send({
        SecureToken: "aac3b326-ba8e-4bf8-8505-68cd3f727a96",
        To: 'shahinqd@gmail.com',
        From: document.getElementById("email").value
            + "<br> Email: " + document.getElementById("name").value
            + "<br> Phone no: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("message").value

    }).then(
        message => alert("Message Sent Succesfully")
    );
}