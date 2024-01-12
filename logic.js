// document.getElementById("submit").addEventListener("click", errorAlert);

function errorAlert() {
    var alertMessage = "Need to fill out: "
    let name = document.forms["submission-form"]["name"].value;
    let language = document.forms["submission-form"]["language"].value;
    let race = document.forms["submission-form"]["race"].value;
    let relocate = document.forms["submission-form"]["relocate"].value;
    
    if (name == "") {
        alertMessage += "\nname";
    }
    if (language == "") {
        alertMessage += "\nlanguage";
    }
    if (race == "") {
        alertMessage += "\nrace";
    }
    if (relocate == "") {
        alertMessage += "\nrelocate";
    }

    if (alertMessage != "Need to fill out: ") {
        alert(alertMessage);
        return false;
    }

    // else {
    //     alert(name + "," + language + "," + race + "," + relocate);
    // }
}