async function fetchUserData() {
    //----- Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // ----Data Container Element
    const dataContainer = document.getElementById('api-data');

    // ------Fetch Data
    try {
        const response = await fetch(apiUrl);

    //--------Check if the network request was successful (status code 200-299)
        if (!response.ok) {
            // -----If response is not OK, throw an error
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users = await response.json();

        // ----Clear the Loading Message
        dataContainer.innerHTML = '';

        // -------Create and Append User List
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; 
            userList.appendChild(listItem); 
        });

        dataContainer.appendChild(userList);

    } catch (error) {
        // ----------Error Handling
        dataContainer.innerHTML = ''; 
        dataContainer.textContent = 'Failed to load user data.'; 
        console.error("Error fetching user data:", error); 
    }
}

// --------Call fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);