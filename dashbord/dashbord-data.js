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
        axios.get('https://api.showmore.ly/dashboard/contract-requests', { headers })
            .then(response => {
                const salesContainer = document.querySelector('.recent-sales');

                for (let i = response.data.data.length - 1; i >= 0; i--) {
                    console.log(response.data.data);
                    const salesDetailsContainer = document.createElement('div');
                    salesDetailsContainer.className = 'sales-details';

                    // Add Company Name
                    const service_typeContainer = document.createElement('div');
                    const service_typeHeader = document.createElement('h5');
                    const service_typeText = document.createTextNode(' نوع الخدمة المرغوبة ');
                    const service_typeValue = document.createElement('div');
                    service_typeValue.id = 'company-name';
                    service_typeValue.innerText = response.data.data[i].service_type;

                    service_typeHeader.appendChild(service_typeText);
                    service_typeContainer.appendChild(service_typeHeader);
                    service_typeContainer.appendChild(service_typeValue);

                    // Add Commercial License Number
                    const contract_in_yearsContainer = document.createElement('div');
                    const contract_in_yearsHeader = document.createElement('h5');
                    const contract_in_yearsText = document.createTextNode('فترة التعاقد');
                    const contract_in_yearsValue = document.createElement('div');
                    contract_in_yearsValue.id = 'commercial-license-number';
                    contract_in_yearsValue.innerText = response.data.data[i].contract_in_years;

                    contract_in_yearsHeader.appendChild(contract_in_yearsText);
                    contract_in_yearsContainer.appendChild(contract_in_yearsHeader);
                    contract_in_yearsContainer.appendChild(contract_in_yearsValue);

                    // Add Commercial Registration Number
                    const company_nameContainer = document.createElement('div');
                    const company_nameHeader = document.createElement('h5');
                    const company_nameText = document.createTextNode('أسم الجهة كاملا');
                    const company_nameValue = document.createElement('div');
                    company_nameValue.id = 'commercial-registration-number';
                    company_nameValue.innerText = response.data.data[i].company_name;

                    company_nameHeader.appendChild(company_nameText);
                    company_nameContainer.appendChild(company_nameHeader);
                    company_nameContainer.appendChild(company_nameValue);

                    // Add Company Address
                    const company_commercial_nameContainer = document.createElement('div');
                    const company_commercial_nameHeader = document.createElement('h5');
                    const company_commercial_nameText = document.createTextNode('أسم الجهة التجاري');
                    const company_commercial_nameValue = document.createElement('div');
                    company_commercial_nameValue.id = 'company-commercial-name';
                    company_commercial_nameValue.innerText = response.data.data[i].company_commercial_name;

                    company_commercial_nameHeader.appendChild(company_commercial_nameText);
                    company_commercial_nameContainer.appendChild(company_commercial_nameHeader);
                    company_commercial_nameContainer.appendChild(company_commercial_nameValue);

                    // Add Email
                    const company_addressContainer = document.createElement('div');
                    const company_addressHeader = document.createElement('h5');
                    const company_addressText = document.createTextNode('عنوان الجهة');
                    const company_addressValue = document.createElement('div');
                    company_addressValue.id = 'company-address';
                    company_addressValue.innerText = response.data.data[i].company_address;

                    company_addressHeader.appendChild(company_addressText);
                    company_addressContainer.appendChild(company_addressHeader);
                    company_addressContainer.appendChild(company_addressValue);

                    // Add Phone Number
                    const emailContainer = document.createElement('div');
                    const emailHeader = document.createElement('h5');
                    const emailText = document.createTextNode('البريد الاكتروني');
                    const emailValue = document.createElement('div');
                    emailValue.id = 'email';
                    emailValue.innerText = response.data.data[i].email;

                    emailHeader.appendChild(emailText);
                    emailContainer.appendChild(emailHeader);
                    emailContainer.appendChild(emailValue);

                    // Add Representative Name
                    const representativeNameContainer = document.createElement('div');
                    const representativeNameHeader = document.createElement('h5');
                    const representativeNameText = document.createTextNode('المخول بالتوقيع');
                    const representativeNameValue = document.createElement('div');
                    representativeNameValue.id = 'representative-name';
                    representativeNameValue.innerText = response.data.data[i].representative_name;

                    representativeNameHeader.appendChild(representativeNameText);
                    representativeNameContainer.appendChild(representativeNameHeader);
                    representativeNameContainer.appendChild(representativeNameValue);

                    // Add Service Type
                    const representative_detailsContainer = document.createElement('div');
                    const representative_detailsHeader = document.createElement('h5');
                    const representative_detailsText = document.createTextNode('صفة المخول بالتوقيع');
                    const representative_detailsValue = document.createElement('div');
                    representative_detailsValue.id = 'representative-details';
                    representative_detailsValue.innerText = response.data.data[i].representative_details;

                    representative_detailsHeader.appendChild(representative_detailsText);
                    representative_detailsContainer.appendChild(representative_detailsHeader);
                    representative_detailsContainer.appendChild(representative_detailsValue);

                    // Add Contract Duration
                    const phone_numberContainer = document.createElement('div');
                    const phone_numberHeader = document.createElement('h5');
                    const phone_numberText = document.createTextNode('رقم الهاتف');
                    const phone_numberValue = document.createElement('div');
                    phone_numberValue.id = 'contract-duration';
                    phone_numberValue.innerText = response.data.data[i].phone_number;

                    phone_numberHeader.appendChild(phone_numberText);
                    phone_numberContainer.appendChild(phone_numberHeader);
                    phone_numberContainer.appendChild(phone_numberValue);

                    // Add Contract Duration
                    const commercial_registeration_numberContainer = document.createElement('div');
                    const commercial_registeration_numberHeader = document.createElement('h5');
                    const commercial_registeration_numberText = document.createTextNode('رقم السجل التجاري');
                    const commercial_registeration_numberValue = document.createElement('div');
                    commercial_registeration_numberValue.id = 'contract-duration';
                    commercial_registeration_numberValue.innerText = response.data.data[i].commercial_registeration_number;

                    commercial_registeration_numberHeader.appendChild(commercial_registeration_numberText);
                    commercial_registeration_numberContainer.appendChild(commercial_registeration_numberHeader);
                    commercial_registeration_numberContainer.appendChild(commercial_registeration_numberValue);

                    // Add Contract Duration
                    const commercial_license_numberContainer = document.createElement('div');
                    const commercial_license_numberHeader = document.createElement('h5');
                    const commercial_license_numberText = document.createTextNode('رقم السجل التجاري');
                    const commercial_license_numberValue = document.createElement('div');
                    commercial_license_numberValue.id = 'contract-duration';
                    commercial_license_numberValue.innerText = response.data.data[i].commercial_license_number;

                    commercial_license_numberHeader.appendChild(commercial_license_numberText);
                    commercial_license_numberContainer.appendChild(commercial_license_numberHeader);
                    commercial_license_numberContainer.appendChild(commercial_license_numberValue);

                    // Add all details to sales details container
                    salesDetailsContainer.appendChild(service_typeContainer);
                    salesDetailsContainer.appendChild(contract_in_yearsContainer);
                    salesDetailsContainer.appendChild(company_nameContainer);
                    salesDetailsContainer.appendChild(company_commercial_nameContainer);
                    salesDetailsContainer.appendChild(company_addressContainer);
                    salesDetailsContainer.appendChild(emailContainer);
                    salesDetailsContainer.appendChild(representativeNameContainer);
                    salesDetailsContainer.appendChild(phone_numberContainer);
                    salesDetailsContainer.appendChild(commercial_registeration_numberContainer);
                    salesDetailsContainer.appendChild(commercial_license_numberContainer);

                    // Add sales details container to the main container
                    salesContainer.appendChild(salesDetailsContainer);
                }
            })
            .catch(error => {
                console.error('Error fetching protected data:', error);
            });
    }
});
