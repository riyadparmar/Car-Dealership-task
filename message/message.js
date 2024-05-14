const oMessage = {
    sUserExists: { error: 'Email already exists' },
    sUserNotFound: { error: 'User not found' },
    sInternalServerError: { error: 'Internal server error' },
    sMandatoryFields: { error: 'Missing required fields: name, password, and email are required.' },
    sEmailNotValid: { error: 'Invalid email format.' },
    sLoginSuccess: { message: 'Login successful!' },
    sInvalidUser: { error: 'Invalid User' },
    sInvalidSeller: { error: 'Invalid Seller' },
    sInvalidCar: { error: 'Invalid Car' },
    sInvalidBrand: { error: 'Invalid Brand' },
    sIncorrectPassword: { message: "Incorrect password" },
    sForbiddenAccess: { error: 'Access forbidden: requires admin role' },
    sUnauthorizedUser: { error: 'User is not Authorized'},
    sInvalidCity: { error: 'User can only buy cars from sellers in their city.'}
}

module.exports = oMessage;