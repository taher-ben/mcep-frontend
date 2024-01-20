axios.get('../assest/header_for_sub.html')
.then(response => {
    document.getElementById('headerContainer').innerHTML = response.data;
    console.log(response);
})
.catch(error => console.error('حدث خطأ: ', error));

axios.get('../assest/footer_for_sub.html')
.then(response => {
    document.getElementById('footercontaienr').innerHTML = response.data;
})
.catch(error => console.error('حدث خطأ: ', error));
