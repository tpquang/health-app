import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <div className="not-found__content py-16">
        <h1 className="not-found__title text-center mb-8 fs-48 fw-700">404</h1>
        <h2 className="not-found__subtitle text-center mb-8 fs-24 fw-500">
          Page not found
        </h2>
        <p className="not-found__text text-center mb-16 fs-16 fw-400">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className="flex justify-center">
          <Button variant="gradient" size="large" onClick={() => navigate("/")}>
            Back to My Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
