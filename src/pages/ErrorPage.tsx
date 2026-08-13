import { useRouteError, isRouteErrorResponse, useNavigate } from "react-router";
import { Button } from "@/components/Button/Button";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";

export const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  let statusCode = 404;
  let statusText = "Page Not Found";
  let errorMessage = "Sorry, we couldn't find the page or component documentation you were looking for.";

  if (isRouteErrorResponse(error)) {
    statusCode = error.status;
    statusText = error.statusText || statusText;
    if (error.data?.message) {
      errorMessage = error.data.message;
    }
  } else if (error instanceof Error) {
    statusCode = 500;
    statusText = "Application Error";
    errorMessage = error.message;
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full p-8 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl space-y-6">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center">
          <AlertCircle size={32} />
        </div>

        <div className="space-y-2">
          <span className="text-5xl font-black text-blue-600 dark:text-blue-400">
            {statusCode}
          </span>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-zinc-100">
            {statusText}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {errorMessage}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <ArrowLeft size={16} /> Go Back
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate("/")}
            className="w-full sm:w-auto flex items-center justify-center gap-2"
          >
            <Home size={16} /> Back to Home
          </Button>
        </div>

        <div className="pt-4 border-t border-gray-100 dark:border-zinc-800 text-xs text-gray-400 dark:text-zinc-500">
          EaseUI Documentation • Built with React & TypeScript
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
