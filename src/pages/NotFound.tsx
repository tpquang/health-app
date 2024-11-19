import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">Page not found</h2>
        <p className="not-found__text">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <button className="not-found__button" onClick={() => navigate("/")}>
          Back to My Page
        </button>
      </div>
    </div>
  );
};

export default NotFound;
