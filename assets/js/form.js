// Select the form element, error message paragraph, and modal elements
const form = document.getElementById('blog-form');
const errorElement = document.getElementById('error');
const modal = document.getElementById('error-modal');
const modalClose = document.getElementById('modal-close');
const modalMessage = document.getElementById('modal-message');

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();

    // Validate form data
    if (!username || !title || !content) {
        // Display modal if validation fails
        showModal('Please fill out all fields.');
        return;
    }

    // Clear the error message if everything is filled
    errorElement.textContent = '';

    // Create a new post object
    const newPost = {
        username: username,
        title: title,
        content: content
    };

    // Retrieve existing blog posts from local storage
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    // Add the new post to the blog posts array
    blogPosts.push(newPost);

    // Save the updated blog posts array to local storage
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    // Clear the form
    form.reset();

    // Redirect to the blog page
    redirectPage(); // Assuming redirectPage function is defined elsewhere
}

// Function to show modal with a custom message
function showModal(message) {
    modalMessage.textContent = message;
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Add event listener to the modal close button
modalClose.addEventListener('click', closeModal);

// Add event listener to close the modal if the user clicks outside the modal
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Define the redirectPage function
function redirectPage() {
    window.location.href = 'blog.html'; // Adjust the URL as needed
}

// Add an event listener to the form
form.addEventListener('submit', handleFormSubmission);
