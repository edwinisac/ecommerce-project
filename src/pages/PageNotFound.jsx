import {Link} from 'react-router-dom';
import { Header } from "../components/Header";
import './PageNotFound.css';
import backgroundImage from '../assets/error-image.png'
export function PageNotFound() {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/favicons/error.png" />
      <title>error</title>
      <Header />
        <div className="page-not-found">
        <img className="error-image" src={backgroundImage} alt="error"  />
        <p className="error-state message">404</p>
        <p className="error-message message">Page not found</p>
        <Link to="/">
            <button className="return-home">Back To Home</button>
        </Link>
        </div>
    </>
  );
}
