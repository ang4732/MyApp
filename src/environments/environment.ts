// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const URL_BASE="https://myapiangel.herokuapp.com/api/"

export const environment = {
  production: false,
  uriCategoria: URL_BASE +"categories",
  uriProductos: URL_BASE +"products",
  uriProductoCategoria: URL_BASE +"products/search/findByCategoryId?id=",
  uriCheckout: URL_BASE +"checkout/purchase"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
