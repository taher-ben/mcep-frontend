let headers = {
    Accept: 'application/json',
};
let ar = {
    0:"لا يوجد",
    1: "الاعدادي",
    2:"الثانوية",
    3:"معهد متوسط",
    4:"معهد عالي",
    5:"بكالوريوس",
    6: "ماجستير",
    7: "دكتوارة"
};
axios.get(`https://api.showmore.ly/education`)
    .then(response => {
        let data = response.data.data;
        let education_id = document.getElementById('education_id');
        for (let i = 0; i < data.length; i++) {
            let op = document.createElement('option');
            op.value = data[i].id;  
            let name = document.createTextNode(ar[i]);
            op.appendChild(name);
            education_id.appendChild(op);
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Validate reCAPTCHA
    let captcharesponse = grecaptcha.getResponse();
    if (captcharesponse.length <= 0) {
        throw new Error('Erorr');
    }
let num = document.getElementById('phone_number').value;
console.log(typeof(num));
    function Validate() {
        let dateOfBirthInput = document.getElementById('date_of_birth').value;
        let selectedDate = dateOfBirthInput;
        let currentDate = new Date();
        let selectedDateObj = new Date(selectedDate);
        if (selectedDateObj < currentDate) {
            true;
        } else {
            Swal.fire({
                icon: "warning",
                title: "خطا في تاريخ الميلاد",
            });
            let done = "تم";
            let editno = document.querySelector(".swal2-styled").innerText = done;
            console.error('خطأ:', error);
        }
    }
        Validate();
    // Prepare data for API request
    let data = {
        full_name: document.getElementById('full_name').value,
        number_of_children: document.getElementById('number_of_children').value,
        last_name: document.getElementById('last_name').value,
        address: document.getElementById('address').value,
        date_of_birth: document.getElementById('date_of_birth').value,
        education_id: document.getElementById('education_id').value,
        nationality: document.getElementById('nationality').value,
        phone_number: document.getElementById('phone_number').value,
        gender: document.getElementById('gender').value,
        desired_position: document.getElementById('desired_position').value,
        email: document.getElementById('email').value,
        experience: document.getElementById('experience').value,
        marital_status: document.getElementById('marital_status').value,
        was_tried: document.getElementById('was_tried').value
    };
    console.log(data);

    let headers = {
        Accept: 'application/json',
    };

    axios.post('https://api.showmore.ly/job-application', data , { headers: headers })
    .then(response => {
            console.log('البيانات:', response);
            Swal.fire({
                title: "تم الارسال",
                icon: "success"
            });
            let done = "تم";
            let editno = document.querySelector(".swal2-styled").innerText = done;
    })
    .catch(error => {
        console.error('خطأ:', error);
            Swal.fire({
                icon: "error",
                title: "خطا في الرسال",
            });
            let done = "تم";
            let editno = document.querySelector(".swal2-styled").innerText = done;
            console.error('خطأ:', error.response.data);
    })

});