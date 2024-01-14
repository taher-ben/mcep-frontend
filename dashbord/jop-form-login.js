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
        
        axios.get('https://api.showmore.ly/dashboard/job-applications', { headers })
            .then(response => {
                allData(response);
            })
            .catch(error => {
                console.error('Error fetching protected data:', error);
            });
                    // Add event listener for select change
        document.getElementById('services').addEventListener('change', function (event) {
            // Fetch job applications data with filtering
            const selectedService = event.target.value;
            if (selectedService === '0') {
                // Fetch all data if the selected value is '0'
                axios.get('https://api.showmore.ly/dashboard/job-applications', { headers })
                    .then(response => {
                        allData(response); // Pass the response to the function
                        console.log(allData(response));
                    })
                    .catch(error => {
                        console.error('Error fetching contract requests data:', error);
                    });
            } else {
                const jobApplicationsUrl = `https://api.showmore.ly/dashboard/job-applications?filter[education_id]=${selectedService}`;
                axios.get(jobApplicationsUrl, { headers})
                    .then(response => {
                        allData(response); // Pass the response to the function
                    })
                    .catch(error => {
                        console.error('Error fetching job applications data:', error);
                    });
            }
        });
    }
});

function allData(response) {
    const salesContainer = document.querySelector('.recent-sales');
    salesContainer.innerHTML = ''; // Clear previous elements

    for (let i = 0 ; i < response.data.data.length ; i++) {
        const salesDetailsContainer = document.createElement('div');
        salesDetailsContainer.className = 'sales-details';

        // Add Full Name
        const nameContainer = document.createElement('div');
        const nameHeader = document.createElement('h5');
        const nameText = document.createTextNode('الأسم');
        const nameValue = document.createElement('div');
        nameValue.id = 'full_name';
        nameValue.innerText = response.data.data[i].full_name;

        nameHeader.appendChild(nameText);
        nameContainer.appendChild(nameHeader);
        nameContainer.appendChild(nameValue);

        // Add Last Name
        const lastNameContainer = document.createElement('div');
        const lastNameHeader = document.createElement('h5');
        const lastNameText = document.createTextNode('اللقب');
        const lastNameValue = document.createElement('div');
        lastNameValue.innerHTML = response.data.data[i].last_name;

        lastNameHeader.appendChild(lastNameText);
        lastNameContainer.appendChild(lastNameHeader);
        lastNameContainer.appendChild(lastNameValue);

        // Add Email
        const emailContainer = document.createElement('div');
        const emailHeader = document.createElement('h5');
        const emailText = document.createTextNode('البريد الالكتروني');
        const emailValue = document.createElement('div');
        emailValue.id = 'email';
        emailValue.innerText = response.data.data[i].email;

        emailHeader.appendChild(emailText);
        emailContainer.appendChild(emailHeader);
        emailContainer.appendChild(emailValue);

        // Add Education
        const educationContainer = document.createElement('div');
        const educationHeader = document.createElement('h5');
        const educationText = document.createTextNode('المؤهل الدراسي');
        const educationValue = document.createElement('div');
        educationValue.id = 'education';
        educationValue.innerText = response.data.data[i].education;

        educationHeader.appendChild(educationText);
        educationContainer.appendChild(educationHeader);
        educationContainer.appendChild(educationValue);

        // Add Address
        const addressContainer = document.createElement('div');
        const addressHeader = document.createElement('h5');
        const addressText = document.createTextNode('العنوان');
        const addressValue = document.createElement('div');
        addressValue.innerHTML = response.data.data[i].address;
        addressValue.id = 'address';

        addressHeader.appendChild(addressText);
        addressContainer.appendChild(addressHeader);
        addressContainer.appendChild(addressValue);

        // Add Created At
        const createdAtContainer = document.createElement('div');
        const createdAtHeader = document.createElement('h5');
        const createdAtText = document.createTextNode('تاريخ التقديم ');
        const createdAtValue = document.createElement('div');
        createdAtValue.innerHTML = response.data.data[i].created_at;
        createdAtValue.id = 'created-at';

        createdAtHeader.appendChild(createdAtText);
        createdAtContainer.appendChild(createdAtHeader);
        createdAtContainer.appendChild(createdAtValue);

        // Add Date Of Birth
        const dateOfBirthContainer = document.createElement('div');
        const dateOfBirthHeader = document.createElement('h5');
        const dateOfBirthText = document.createTextNode('تاريخ الميلاد ');
        const dateOfBirthValue = document.createElement('div');
        dateOfBirthValue.innerHTML = response.data.data[i].date_of_birth;
        dateOfBirthValue.id = 'date-of-birth';

        dateOfBirthHeader.appendChild(dateOfBirthText);
        dateOfBirthContainer.appendChild(dateOfBirthHeader);
        dateOfBirthContainer.appendChild(dateOfBirthValue);

        // Add Desired Position
        const desiredPositionContainer = document.createElement('div');
        const desiredPositionHeader = document.createElement('h5');
        const desiredPositionText = document.createTextNode('المنصب المطلوب ');
        const desiredPositionValue = document.createElement('div');
        desiredPositionValue.innerHTML = response.data.data[i].desired_position;
        desiredPositionValue.id = 'desired-position';

        desiredPositionHeader.appendChild(desiredPositionText);
        desiredPositionContainer.appendChild(desiredPositionHeader);
        desiredPositionContainer.appendChild(desiredPositionValue);

        // Add Marital Status
        const maritalStatusContainer = document.createElement('div');
        const maritalStatusHeader = document.createElement('h5');
        const maritalStatusText = document.createTextNode('الحالة الاجتماعية');
        const maritalStatusValue = document.createElement('div');
        if (response.data.data[i].marital_status === 'married') {
            maritalStatusValue.innerHTML = 'متزوج ';
        } else {
            maritalStatusValue.innerHTML = 'أعزب ';
        }

        maritalStatusValue.id = 'marital-status';

        maritalStatusHeader.appendChild(maritalStatusText);
        maritalStatusContainer.appendChild(maritalStatusHeader);
        maritalStatusContainer.appendChild(maritalStatusValue);

        // Add Nationality
        const nationalityContainer = document.createElement('div');
        const nationalityHeader = document.createElement('h5');
        const nationalityText = document.createTextNode('الجنسية');
        const nationalityValue = document.createElement('div');
        nationalityValue.innerHTML = response.data.data[i].nationality;
        nationalityValue.id = 'nationality';

        nationalityHeader.appendChild(nationalityText);
        nationalityContainer.appendChild(nationalityHeader);
        nationalityContainer.appendChild(nationalityValue);

        // Add Number of Children
        const numberOfChildrenContainer = document.createElement('div');
        const numberOfChildrenHeader = document.createElement('h5');
        const numberOfChildrenText = document.createTextNode('عدد الأطفال');
        const numberOfChildrenValue = document.createElement('div');
        if (response.data.data[i].number_of_children == null) {
            numberOfChildrenValue.innerHTML = 'لا يوجد اطفال ';
        } else {
            numberOfChildrenValue.innerHTML = response.data.data[i].number_of_children;

        }
        numberOfChildrenValue.id = 'number-of-children';

        numberOfChildrenHeader.appendChild(numberOfChildrenText);
        numberOfChildrenContainer.appendChild(numberOfChildrenHeader);
        numberOfChildrenContainer.appendChild(numberOfChildrenValue);

        // Add Phone Number
        const phoneNumberContainer = document.createElement('div');
        const phoneNumberHeader = document.createElement('h5');
        const phoneNumberText = document.createTextNode('رقم الهاتف');
        const phoneNumberValue = document.createElement('div');
        phoneNumberValue.innerHTML = response.data.data[i].phone_number;
        phoneNumberValue.id = 'phone-number';

        phoneNumberHeader.appendChild(phoneNumberText);
        phoneNumberContainer.appendChild(phoneNumberHeader);
        phoneNumberContainer.appendChild(phoneNumberValue);

        // Add Was Tried
        const wasTriedContainer = document.createElement('div');
        const wasTriedHeader = document.createElement('h5');
        const wasTriedText = document.createTextNode('هل توجد الحالة الجنائية');
        const wasTriedValue = document.createElement('div');
        if (response.data.data[i].was_tried === false) {
            wasTriedValue.innerHTML = 'لا توجد ';
        } else {
            wasTriedValue.innerHTML = 'نعم توجد ';
        }
        wasTriedValue.id = 'was-tried';

        wasTriedHeader.appendChild(wasTriedText);
        wasTriedContainer.appendChild(wasTriedHeader);
        wasTriedContainer.appendChild(wasTriedValue);

        // Add all details to sales details container
        salesDetailsContainer.appendChild(createdAtContainer);
        salesDetailsContainer.appendChild(nameContainer);
        salesDetailsContainer.appendChild(lastNameContainer);
        salesDetailsContainer.appendChild(emailContainer);
        salesDetailsContainer.appendChild(educationContainer);
        salesDetailsContainer.appendChild(addressContainer);
        salesDetailsContainer.appendChild(dateOfBirthContainer);
        salesDetailsContainer.appendChild(desiredPositionContainer);
        salesDetailsContainer.appendChild(maritalStatusContainer);
        salesDetailsContainer.appendChild(nationalityContainer);
        salesDetailsContainer.appendChild(numberOfChildrenContainer);
        salesDetailsContainer.appendChild(phoneNumberContainer);
        salesDetailsContainer.appendChild(wasTriedContainer);

        // Add sales details container to the main container
        salesContainer.appendChild(salesDetailsContainer);
    }
}