const posts = document.querySelectorAll(".post");

posts.forEach((post, index) => {
    post.addEventListener("click", () => {
        alert(`Post ${index + 1} clicked!`);
    });
});
