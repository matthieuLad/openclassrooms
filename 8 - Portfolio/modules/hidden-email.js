var encEmail = "aGVsbG9AbWF0bGFkb3VjZS5kZXY=";
const form = document.getElementById("contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));
