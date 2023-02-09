// logout function which redirects to login page
function logout() {
  fetch("/api/users/logout", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(function () {
    location.replace("/login");
  });
}
// event listener for logout button

document.getElementById("logout").addEventListener("click", function () {
  logout();
});
