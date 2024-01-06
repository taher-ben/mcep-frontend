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
                var salesContainer = document.getElementById("sales-container");
                const dataElement = document.getElementById('data');
                console.log(response);
                for (let i = 0; i < response.data.data.length; i++) {
                    let f_name = document.createElement('div');
                    let dat = response.data.data[i].email;
                }
            })
            .catch(error => {
                console.error('Error fetching protected data:', error);
            });
    }
});

// var data = [
//     { fullName: "معاد عمر بن طاهر", email: "example@email.com", message: "توجد مشكلة من قبل السائق" },
//     // يمكنك إضافة مزيد من العناصر هنا
// ];

// // الحصول على عنصر العرض
// var salesContainer = document.getElementById("sales-container");

// // إنشاء العناصر الديناميكية باستخدام JavaScript
// data.forEach(function (item) {
//     var salesDetails = document.createElement("div");
//     salesDetails.className = "sales-details";

//     // إنشاء العنصر "الأسم"
//     var nameDiv = createTextElement("h5", "الأسم");
//     var fullNameDiv = createTextElement("div", item.fullName);
//     fullNameDiv.id = "full_name";
//     nameDiv.appendChild(fullNameDiv);

//     // إنشاء العنصر "البريد الإلكتروني"
//     var emailDiv = createTextElement("h5", "البريد الالكتروني");
//     var emailValueDiv = createTextElement("div", item.email);
//     emailValueDiv.id = "email";
//     emailDiv.appendChild(emailValueDiv);

//     // إنشاء العنصر "الرسالة"
//     var messageDiv = createTextElement("h5", "الرسالة");
//     var messageValueDiv = createTextElement("div", item.message);
//     messageValueDiv.id = "message";
//     messageDiv.appendChild(messageValueDiv);

//     // إنشاء زر حذف
//     var deleteDiv = document.createElement("div");
//     deleteDiv.className = "delete";
//     var trashIcon = document.createElement("i");
//     trashIcon.className = "fas fa-trash-can"; // رمز القمامة من FontAwesome
//     deleteDiv.appendChild(trashIcon);

//     // إضافة العناصر إلى "salesDetails"
//     salesDetails.appendChild(nameDiv);
//     salesDetails.appendChild(emailDiv);
//     salesDetails.appendChild(messageDiv);
//     salesDetails.appendChild(deleteDiv);

//     // إضافة "salesDetails" إلى "salesContainer"
//     salesContainer.appendChild(salesDetails);
// });

// // دالة لإنشاء عنصر نصي
// function createTextElement(tagName, text) {
//     var element = document.createElement(tagName);
//     var textNode = document.createTextNode(text);
//     element.appendChild(textNode);
//     return element;
// }