document.querySelector("#signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const signupObj = {
    username: document.querySelector("#user-login").value,
    password: document.querySelector("#password-login").value,
  };
  
  fetch("/api/users/signup", {
    method: "POST",
    body: JSON.stringify(signupObj),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    
    if (res.ok) {
      alert = "success";
      location.href = "/login";
    } else {
      alert("please try again");
    }
    

    
  });
});
