document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    let captcharesponse = grecaptcha.getResponse();
    console.log(captcharesponse);
    if(captcharesponse.length <= 0){
        throw new Error('Erorr');
    }
    let data = {
        email: document.getElementById('email').value,
        service_id: document.getElementById('service_id').value,
        representative_name: document.getElementById('representative_name').value,
        representative_details: document.getElementById('representative_details').value,
        contract_duration_in_years: document.getElementById('contract_duration_in_years').value,
        company_name: document.getElementById('company_name').value,
        phone_number: document.getElementById('phone_number').value,
        company_commercial_name: document.getElementById('company_commercial_name').value,
        commercial_registeration_number: document.getElementById('commercial_registeration_number').value,
        commercial_license_number: document.getElementById('commercial_license_number').value,
        company_address: document.getElementById('company_address').value
    };
    console.log(data);
    // axios.post('', data)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
});


