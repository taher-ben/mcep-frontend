//let dataContainer = document.getElementById('data-container');
// for(let i = 1 ; i<=3;i++){

// }
let headers = {
    Accept: 'application/json',
};
axios.get('https://api.showmore.ly/services')
    .then(response => {
            let data = response.data.data;
            for (let i = 0; i < data.length; i++) {
                let id = data[i].name; 
                let text = document.createTextNode(id); 
                console.log(text); 
                let ser = document.getElementsByClassName(i); 
                ser[i];
                console.log(ser); 
            }
            
                // for(let j = 10; j<=12; j++)
                // {
                    
                // }
                // let optionElement = document.createElement('option');
    
                // // تعيين قيمة ونص للعنصر option
                // optionElement.value = i;
                // optionElement.textContent = id;
    
                // // إضافة العنصر إلى الـ select
                // selectElement.appendChild(optionElement);
            

    })

.catch (error => {
    console.error('خطأ:', error);
});

// let headers = {
//     Accept: 'application/json',
// };
// axios.get('https://api.showmore.ly/services')
//     .then(response => {
//         let data = response.data.data;
//         for (let i = 0; i < data.length; i++) {
//             let id = data[i].id;  // تغيير هنا إلى data[i].id بدلاً من data[i].name
//             console.log(id);
//             let ser = document.getElementsByClassName(id);
//             if (ser) {
//                 ser.innerText  = data[i].name;
//                 console.log(ser);
//             } else {
//                 console.error(`لم يتم العثور على العنصر بالمعرف: ${id}`,error);
//             }
//         }
//     })
//     .catch(error => {
//         console.error('خطأ:', error);
//     });


// document.querySelector('form').addEventListener('submit', function (event) {
//     event.preventDefault();
//     let captcharesponse = grecaptcha.getResponse();
//     console.log(captcharesponse);
//     if (captcharesponse.length <= 0) {
//         throw new Error('Erorr');
//     }
//     let data = {
//         email: document.getElementById('email').value,
//         service_id: document.getElementById('service_id').value,
//         representative_name: document.getElementById('representative_name').value,
//         representative_details: document.getElementById('representative_details').value,
//         contract_duration_in_years: document.getElementById('contract_duration_in_years').value,
//         company_name: document.getElementById('company_name').value,
//         phone_number: document.getElementById('phone_number').value,
//         company_commercial_name: document.getElementById('company_commercial_name').value,
//         commercial_registeration_number: document.getElementById('commercial_registeration_number').value,
//         commercial_license_number: document.getElementById('commercial_license_number').value,
//         company_address: document.getElementById('company_address').value
//     };
//     console.log(data);
//     let headers = {
//         Accept: 'application/json',
//     };
//     axios.post('https://api.showmore.ly/contract-form', data, { headers: headers })
//         .then(response => {
//             Swal.fire({
//                 title: "تم الارسال",
//                 icon: "success"
//             });
//             let done = "تم";
//             let editno = document.querySelector(".swal2-styled").innerText = done;
//         })
//         .catch(error => {
//             Swal.fire({
//                 icon: "error",
//                 title: "خطا في الرسال",
//             });
//             let done = "تم";
//             let editno = document.querySelector(".swal2-styled").innerText = done;
//             console.error('خطأ:', error);
//         });
// });


// console.log(editno);
// console.log(document.getElementById('service_id').value);
