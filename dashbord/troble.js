
document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('authToken');
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!isLoggedIn || !token) {
        // Redirect to login page if not logged in
        window.location.href = 'login.html';
    } else {
        const headers = {
            Authorization: `Bearer ${token}`, // Update to use Bearer token
        };

        // Call the protected data API endpoint
        axios.get('https://api.showmore.ly/dashboard/messages', { headers })
            .then(response => {
                const salesContainer = document.querySelector('.recent-sales');
                for (let i = response.data.data.length - 1; i >= 0; i--) {
                    const salesDetailsContainer = document.createElement('div');
                    salesDetailsContainer.className = 'sales-details';

                    // Add Name
                    const nameContainer = document.createElement('div');
                    const nameHeader = document.createElement('h5');
                    const nameText = document.createTextNode('الأسم');
                    const nameValue = document.createElement('div');
                    nameValue.id = 'full_name';
                    nameValue.innerText = response.data.data[i].full_name;

                    nameHeader.appendChild(nameText);
                    nameContainer.appendChild(nameHeader);
                    nameContainer.appendChild(nameValue);

                    // Add Email
                    const emailContainer = document.createElement('div');
                    const emailHeader = document.createElement('h5');
                    const emailText = document.createTextNode('البريد الالكتروني');
                    const emailValue = document.createElement('div');
                    emailValue.id = 'email';
                    emailValue.innerText = response.data.data[i].email;

                    emailHeader.appendChild(emailText);
                    emailContainer.appendChild(emailHeader);
                    emailContainer.appendChild(emailValue);

                    // Add Message
                    const messageContainer = document.createElement('div');
                    const messageHeader = document.createElement('h5');
                    const messageText = document.createTextNode('الرسالة');
                    const messageValue = document.createElement('div');
                    messageValue.id = 'message';
                    messageValue.innerText = response.data.data[i].message;

                    messageHeader.appendChild(messageText);
                    messageContainer.appendChild(messageHeader);
                    messageContainer.appendChild(messageValue);

                    // Add all details to sales details container
                    salesDetailsContainer.appendChild(nameContainer);
                    salesDetailsContainer.appendChild(emailContainer);
                    salesDetailsContainer.appendChild(messageContainer);

                    // Add sales details container to the main container
                    salesContainer.appendChild(salesDetailsContainer);
                }
            })
            .catch(error => {
                console.error('Error fetching protected data:', error);
            });
    }
});

window.addEventListener('beforeunload', () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('isLoggedIn');
});


