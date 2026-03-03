import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-[450px] flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <h1 className="text-9xl font-extrabold text-blue-600">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-2 max-w-md text-gray-600">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;