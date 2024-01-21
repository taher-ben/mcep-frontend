let headers = {
    Accept: 'application/json',
};
axios.get('https://api.showmore.ly/services')
    .then(response => {
        let data = response.data.data;
        let service_id = document.getElementById('service_id');
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let op = document.createElement('option');
            op.value = data[i].id;
            let name = document.createTextNode(data[i].name);
            op.appendChild(name);
            service_id.appendChild(op);
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    let captcharesponse = grecaptcha.getResponse();
    console.log(captcharesponse);
    if (captcharesponse.length <= 0) {
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
    let headers = {
        Accept: 'application/json',
    };
    axios.post('https://api.showmore.ly/contract-form', data, { headers: headers })
        .then(response => {
            Swal.fire({
                title: "تم الارسال",
                icon: "success"
            });
            let done = "تم";
            let editno = document.querySelector(".swal2-styled").innerText = done;
        })
        .catch(error => {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "خطا في الرسال",
            });
            let done = "تم";
            let editno = document.querySelector(".swal2-styled").innerText = done;
            console.error('خطأ:', error);
        });
});
