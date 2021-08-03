topButton = document.getElementById("myBtn");

function scrollFunction() {
    if (document.boidy.scroolTop > 15 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";

    } else {
        topButton.style.display = "none";
    }

}

function toTopFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; //for the other browsers
  }