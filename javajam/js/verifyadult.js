//function to verify user's age
function verifySenior() {
    //prompt user for age
    var userAge = prompt("Please enter your age:");

    //Convert the user's age to a #
    userAge = parseInt(userAge);

    //get p element by id
    var messageParagraph = document.getElementById('seniorMessage');

    //check if user is > 65
    if (userAge >= 65) {
        //display message if true
        messageParagraph.innerHTML = "Free Friday Coffee Night for Seniors!"
    } else {
        //display message if false
        messageParagraph.innerHTML = 'Enjoy Music and Make Memories!'
    }
}

//call function when page is loaded
document.addEventListener('DOMContentLoaded', verifySenior);