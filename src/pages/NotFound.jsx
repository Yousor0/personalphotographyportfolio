import Footer from "../components/Footer";
import Header from "../components/Header";
import Button from "../components/Button";
import { useState } from "react";

export default function NotFound() {
  const [images, setImages] = useState([]);

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3">
        <h1 className="text-5xl">404 Error - Page Not Found</h1>
        <div className="w-fit">
          <Button
            text="go back"
            to="/latestworks"
            className="flex items-center justify-center px-4 py-1 mt-2 border"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
