import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center mt-64">
        <div>
        <h2 className="block text-center mb-4">Oopsss!!!!!!</h2>
      <Link to="/">
        <button className="btn btn-error">Back To Home</button>
      </Link>
        </div>
      
    </div>
  );
};

export default ErrorPage;
