// script.js
document.getElementById("donor-tab").addEventListener("click", function() {
    document.getElementById("donor-form").style.display = "block";
    document.getElementById("recipient-form").style.display = "none";
});

document.getElementById("recipient-tab").addEventListener("click", function() {
    document.getElementById("donor-form").style.display = "none";
    document.getElementById("recipient-form").style.display = "block";
});
