const apiToken = '1|biijPgHcztd0ZUVet7GO465JZXhyDNIZWhUhIHYHdb0c2b7e';
const headers = {
    Accept: 'application/json',
    Authorization: `Bearer ${apiToken}`,
    'User-Agent': 'user'
};

console.log(headers);

axios.get('https://showmore.ly/dashboard/messages', { headers: headers })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });