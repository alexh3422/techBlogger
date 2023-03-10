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
const profileBtn = document.getElementById("profile");

profileBtn.addEventListener("click", function () {
  location.replace("/profile");
});

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

const homeBtn = document.getElementById("homepage");

homeBtn.addEventListener("click", function () {
  location.replace("/");
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

const delBtn = document.querySelectorAll(".delBtn");

delBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const postId = btn.getAttribute("data-post-id");

    // Now you have the post ID, you can use it in the DELETE request
    fetch(`/api/posts/${postId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(function () {
      location.reload();
    });
  });
});

<<<<<<< HEAD
const submitComment = document.querySelectorAll(".submitComment");
=======
function comments() {
  fetch("/api/comments", {
    method: "GET",
  })
    .then(function (res) {
      
      return res.json();
    })
    .then(function (data) {
      
    });
}
>>>>>>> 80f32dbc7e1eb0275b9881f1b4d19b9da708b001

submitComment.addEventListener("click", function () {
  const postTitle = titleInput.value;
  const postContent = contentInput.value;

  // Add logic to send the new post data to the server here

  fetch("/api/comments", {
    method: "POST",
    body: JSON.stringify({
      comment_text: postContent,
      userId: req.session.userId,
      postId: req.body.postId,
    }),
    headers: { "Content-Type": "application/json" },
  }).then(function () {
    location.reload();
  });
});
