document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Validate reCAPTCHA
    let captcharesponse = grecaptcha.getResponse();
    if (captcharesponse.length <= 0) {
        throw new Error('Erorr');
    }

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

    let headers = {
        Accept: 'application/json',
    };
    
    axios.post('https://api.showmore.ly/job-application', data , { headers: headers })
    .then(response => {
        console.log('البيانات:', response.data);
    })
    .catch(error => {
        console.error('خطأ:', error);
    });
});




