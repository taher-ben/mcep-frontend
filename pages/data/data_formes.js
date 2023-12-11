document.querySelector('form').addEventListener('submit', function (event) {

    event.preventDefault();
    let data = {
        service: document.getElementById('service').value,
        contract_period: document.getElementById('contract_period').value,
        fullname: document.getElementById('fullname').value,
        commercial_name: document.getElementById('commercial_name').value,
        location: document.getElementById('location').value,
        email: document.getElementById('email').value,
        signature: document.getElementById('signature').value,
        signature_level: document.getElementById('signature_level').value,
        phone_number: document.getElementById('phone_number').value,
        commercial_register: document.getElementById('commercial_register').value,
        Commercial_license: document.getElementById('Commercial_license').value

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
