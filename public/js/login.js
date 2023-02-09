document.querySelector("#loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const loginObj = {
    username: document.querySelector("#user-login").value,
    password: document.querySelector("#password-login").value,
  };
  console.log(loginObj);
  fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify(loginObj),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      location.href = "/";
    } else {
      alert("WOMP");
    }
  });
});

// ON CLICK EVENT LISTENER FOR SIGN UP BUTTON
