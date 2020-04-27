export const api = {
  url: '//' + window.location.hostname + (window.location.hostname === 'localhost' ? ':8000/api' : ''),
  imageUrl: '//' + window.location.hostname + (window.location.hostname === 'localhost' ? ':8000/' : ''),
  products: 'products',
  forms: 'forms',
  carts: 'carts',
  users: 'users',
};
