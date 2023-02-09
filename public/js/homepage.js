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

// Get references to the modal, input fields and buttons
const modal = document.getElementById("newPostModal");
const titleInput = document.getElementById("titleInput");
const contentInput = document.getElementById("contentInput");
const cancelBtn = document.getElementById("close-button");
const submitBtn = document.getElementById("submitBtn");

// Get reference to the new post button
const newPostBtn = document.getElementById("new-post");

// Open the modal when the new post button is clicked
newPostBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

// Close the modal when the cancel button is clicked
cancelBtn.addEventListener("click", function () {
 

  titleInput.value = "";
  contentInput.value = "";

  modal.style.display = "none";
});

// Submit the new post when the submit button is clicked
submitPost.addEventListener("click", function () {
  const postTitle = titleInput.value;
  const postContent = contentInput.value;

  // Add logic to send the new post data to the server here

  fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({
      title: postTitle,
      content: postContent,
    }),
    headers: { "Content-Type": "application/json" },
  }).then(function () {
    location.reload();
  });

  // Clear the input fields after submitting


  titleInput.value = "";
  contentInput.value = "";

  // Close the modal after submitting
  modal.style.display = "none";
});
