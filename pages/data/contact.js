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
    };
    console.log(data);
    let headers = {
        Accept: 'application/json',
    };
    axios.post('https://api.showmore.ly/contact-us', data, { headers: headers })
    .then(response => {
        console.log('البيانات:', response.data);
    })
    .catch(error => {
        console.error('خطأ:', error);
    });
});


