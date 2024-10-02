import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="grid grid-flow-row items-center justify-center bg-cover bg-center"
    >
      <h1 className="text-white text-4xl font-bold">Oops!</h1>
      <p className="text-white text-lg mt-2">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-white mt-4">
        Back to{" "}
        <Link
          className="py-2 text-center font-semibold text-green-300 hover:text-red-300"
          to="/"
        >
          Home
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
