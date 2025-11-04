import { Link } from "react-router-dom";
import "./PageNotFound.css";
import backgroundImage from "../../assets/error-image.png";
import { Header } from "../../components/Header";
import { Helmet } from "react-helmet";
export function PageNotFound({cart}) {
  console.log(cart);
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/favicons/error.png" />
        <title>error</title> 
      </Helmet>
      <Header cart={cart} />
      <div className="page-not-found">
        <img className="error-image" src={backgroundImage} alt="error" />
        <p className="error-state message">404</p>
        <p className="error-message message">Page not found</p>
        <Link to="/">
          <button className="return-home">Back To Home</button>
        </Link>
      </div>
    </>
  );
}
