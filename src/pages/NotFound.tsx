
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center animate-fade-up">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">404</h1>
            <p className="text-xl text-gray-600 mb-4">This page is still under development</p>
            <a
              href="/"
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              Return to Home
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
