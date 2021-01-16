let updateInput = (filterTerm,filterField) => {
    switch (filterField) {
    
    case 'FirstName':group.filter(search => {
        return search.FirstName.toLowerCase() === input;
    });
    break;

    case 'LastName':group.filter(search => {
        return search.LastName.toLowerCase() === input;
    });
    break;

    case 'Gender':group.filter(search => {
        return search.Gender.toLowerCase() === input;
    });
    break;

    case 'Latitude':group.filter(search => {
        return search.Latitude.toLowerCase() === input;
    });
    break;

    case 'Longitude':group.filter(search => {
        return search.Longitude.toLowerCase() === input;
    });
    break;

    case 'CreditCardNumber':group.filter(search => {
        return search.CreditCardNumber.toLowerCase() === input;
    });
    break;

    case 'CreditCardType':group.filter(search => {
        return search.CreditCardType.toLowerCase() === input;
    });
    break;

    case 'Email':group.filter(search => {
        return search.Email.toLowerCase() === input;
    });
    break;

    case 'DomainName':group.filter(search => {
        return search.DomainName.toLowerCase() === input;
    });
    break;

    case 'PhoneNumber':group.filter(search => {
        return search.PhoneNumber.toLowerCase() === input;
    });
    break;

    case 'MacAddress':group.filter(search => {
        return search.MacAddress.toLowerCase() === input;
    });
    break;

    case 'URL':group.filter(search => {
        return search.URL.toLowerCase() === input;
    });
    break;

    case 'UserName':group.filter(search => {
        return search.UserName.toLowerCase() === input;
    });
    break;

    case 'LastLogin':group.filter(search => {
        return search.LastLogin.toLowerCase() === input;
    });
    break;

    case 'PaymentMethod':group.filter(search => {
        return search.PaymentMethod.toLowerCase() === input;
    });
    break;

    default: return true;
  }
};