//update the last modified date in footer
function updateLastModifiedDate() {
    //get date
    var lastModifiedDate = new Date(document.lastModified);
    var formattedDate = lastModifiedDate.toLocaleString()

    //display date
    var message = "This page was last modified on: " + formattedDate;
    document.getElementById('dateUpdate').innerHTML = message;
}

//call function when page is loaded
document.addEventListener("DOMContentLoaded", updateLastModifiedDate);