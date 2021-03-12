const URL_BASE="https://myapiangel.herokuapp.com/api/"

export const environment = {
  production: true,
  uriCategoria: URL_BASE +"categories",
  uriProductos: URL_BASE +"products",
  uriProductoCategoria: URL_BASE +"products/search/findByCategoryId?id=",
  uriCheckout: URL_BASE +"checkout/purchase"
};
