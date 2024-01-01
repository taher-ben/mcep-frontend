const apiToken = 'biijPgHcztd0ZUVet7GO465JZXhyDNIZWhUhIHYHdb0c2b7e';

const headers = {
    Authorization: `Bearer ${apiToken}`
};

axios.get('https://api.showmore.ly/dashboard/contract-requests', { headers })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error('Error fetching data:', error.response.data);
    });


// axios.get('https://api.showmore.ly/services')
//     .then(response => {
//         console.log(response);
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });