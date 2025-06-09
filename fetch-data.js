// define asynchronous function
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        // clear loading message
        dataContainer.innerHTML = '';

        // Create and populate the user list
        const userList = document.createElement('ul');
        users.array.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        //  append the list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Display error message
        dataContainer.innerHTML = '',
            dataContainer.textContent = 'Failed to load user data.';
    }

}

// Run the async function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);