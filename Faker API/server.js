const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
const port = 8000;

// Function to create a User
const createUser = () => {
    return {
        _id: faker.string.uuid(), // Updated method
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number(),
    };
};

// Function to create a Company
const createCompany = () => {
    return {
        _id: faker.string.uuid(), // Updated method
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country(),
        },
    };
};

// Route: Create a new User
app.get('/api/users/new', (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

// Route: Create a new Company
app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

// Route: Create a new User and Company
app.get('/api/user/company', (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({ user: newUser, company: newCompany });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});