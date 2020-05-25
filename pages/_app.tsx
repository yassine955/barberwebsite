import "../css/bootstrap.min.css";
import "../css/owl.carousel.min.css";
import "../css/magnific-popup.css";
import "../css/font-awesome.min.css";
import "../css/themify-icons.css";
import "../css/nice-select.css";
import "../css/flaticon.css";
import "../css/gijgo.css";
import "../css/animate.css";
import "../css/slicknav.css";
import "../css/style.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
