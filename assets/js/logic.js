// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton= document.getElementById('toggleMode');
  const body = document.body;

  //Check the saved theme on page load
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  } else {
    body.classList.add('light-mode');
  }
  toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    }
  });
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage(key) {
  //Attempt to retrieve data from local storage
  const data = localStorage.getItem(key);

  //If data exists, parse and return it
  if (data) {
    return JSON.parse(data);
  }
  //If no data exists, return an empty array
  return [];
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(key, newData) {
  //Read existing data from local storage
  const existingData = readLocalStorage(key);

  //Update the existing data with the new data
  const updatedData = [...existingData, ...newData];

  //Save the updated data back to localStorage
  localStorage.setItem(key, JSON.stringify(updatedData));
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};