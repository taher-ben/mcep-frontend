axios.get('../assest/header_for_pages.html')
.then(response => {
    // إدراج محتوى الصفحة في عنصر div في الصفحة الفرعية
    document.getElementById('headerContainer').innerHTML = response.data;
    console.log(response);
})
.catch(error => console.error('حدث خطأ: ', error));

axios.get('../assest/footer_for_pages.html')
.then(response => {
    // إدراج محتوى الصفحة في عنصر div في الصفحة الفرعية
    document.getElementById('footercontaienr').innerHTML = response.data;
})
.catch(error => console.error('حدث خطأ: ', error));
