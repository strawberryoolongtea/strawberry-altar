import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <div className="inner_container">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
