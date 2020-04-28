/* eslint-disable no-useless-escape */
const acceptedNameLength = 5;
const acceptedAddressLength = 5;
const deliveryOptions = ['Courier', 'Parcel locker', 'Personal pickup'];
const paymentOptions = ['Transfer', 'Upon receipt'];

const checkNameLength = (name) => {
  if (name.length >= acceptedNameLength) {
    return true;
  }
};

const checkAddressLength = (address) => {
  if (address.length >= acceptedAddressLength) {
    return true;
  }
};

const checkDeliveryAndPayment = (word, array) => {
  for (let i in array) {
    if (word === array[i]) {
      return true;
    }
  }
};

const validateText = (text) => {
  const pattern = new RegExp(
    /(<\s*(strong|em)*>(([AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż,]|[0-9]|\s)*)<\s*\/\s*(strong|em)>)|(([AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyZzŹźŻż,]|[0-9]|\s|\.)*)/,
    'g',
  );
  const textMatched = text.match(pattern).join('');

  if (textMatched.length === text.length) {
    return true;
  }
};
const validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

exports.validateForm = (name, address, email, delivery, payment) => {
  if (name && address && email && delivery && payment) {
    if (checkNameLength(name) && checkAddressLength(address)) {
      if (validateText(name) && validateText(address)) {
        if (validateEmail(email)) {
          if (checkDeliveryAndPayment(delivery, deliveryOptions) && checkDeliveryAndPayment(payment, paymentOptions)) {
            return true;
          } else {
            alert('Wrong delivery or payment values');
          }
        } else {
          alert('Invalid email');
        }
      } else {
        alert('Invalid characters in name or address');
      }
    } else {
      alert('Fields: name, address are too short');
    }
  } else {
    alert('Fields: name, address and email cannot be empty');
  }
};
