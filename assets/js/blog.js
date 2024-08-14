// Select the main element and the back button element
const mainElement = document.getElementById('main-content');
const backButton = document.getElementById('back-button');

// Function to build and append an element
function buildAndAppendElement(tag, content, parent) {
    const newElement = document.createElement(tag);
    newElement.textContent = content;
    parent.appendChild(newElement);
}

// Function to handle the case where there are no blog posts
function handleNoPosts() {
    buildAndAppendElement('p', 'No blog posts available.', mainElement);
}

// Function to render the blog list
function renderBlogList() {
    // Clear previous content
    mainElement.innerHTML = '';

    // Retrieve blog posts from local storage
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    if (blogPosts.length === 0) {
        handleNoPosts();
    } else {
        blogPosts.forEach(post => {
            buildAndAppendElement('h2', post.title, mainElement);
            buildAndAppendElement('p', post.content, mainElement);
            buildAndAppendElement('small', `Posted by: ${post.username}`, mainElement);
        });
    }
}

// Call the renderBlogList function
renderBlogList();

// Redirect to the home page using the redirectPage function when the back button is clicked
backButton.addEventListener('click', () => {
    if (typeof redirectPage === 'function') {
        redirectPage();  // Make sure redirectPage function is imported or defined in your script
    } else {
        console.error('redirectPage function is not defined.');
    }
});
