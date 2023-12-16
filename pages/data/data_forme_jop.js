document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Validate reCAPTCHA
    let captcharesponse = grecaptcha.getResponse();
    if (captcharesponse.length <= 0) {
        throw new Error('Erorr');
    }

    // // Validate other form fields (add more validation as needed)
    // let requiredFields = ['full_name', 'email', 'phone_number'];
    // for (let field of requiredFields) {
    //     let value = document.getElementById(field).value;
    //     if (!value.trim()) {
    //         alert(`Please fill out the ${field.replace('_', ' ')} field.`);
    //         return;
    //     }
    // }

    // Prepare data for API request
    let data = {
        full_name: document.getElementById('full_name').value,
        number_of_children: document.getElementById('number_of_children').value,
        last_name: document.getElementById('last_name').value,
        address: document.getElementById('address').value,
        date_of_birth: document.getElementById('date_of_birth').value,
        education: document.getElementById('education').value,
        nationality: document.getElementById('nationality').value,
        phone_number: document.getElementById('phone_number').value,
        gender: document.getElementById('gender').value,
        desired_position: document.getElementById('desired_position').value,
        email: document.getElementById('email').value,
        experience: document.getElementById('experience').value,
        marital_status: document.getElementById('marital_status').value,
        was_tried: document.getElementById('was_tried').value
    };

    // Make API request
    
    axios.post('https://api.showmore.ly/job-application', data)
        .then(function (response) {
            console.log(response);
            alert('Application submitted successfully!');
        })
        .catch(function (error) {
            console.error(error);
            alert('Failed to submit application. Please try again.');
        });
});


let myapi = 'https://api.showmore.ly/services';

// Make a GET request
// axios.get(myapi)
//     .then(response => {
//         // Handle the data from the response
//         console.log('Data:', response.data);
//     })
//     .catch(error => {
//         // Handle errors
//         console.error('Error:', error);
//     });