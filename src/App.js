import "./App.css";
import { useState, useEffect } from "react";
import Autharization from "./components/auth";
import Phone from "./components/phone/phone";

function App() {
  const [page, setPage] = useState("");
  useEffect(() => {
    const showPhone = () => {
      setPage("phone");
    };
    const ShowAuth = () => {
      setPage("auth");
    };

    document.addEventListener("shwoAuth", ShowAuth);
    document.addEventListener("showPhone", showPhone);
    return () => {
      document.removeEventListener("shwoAuth", ShowAuth);
      document.removeEventListener("showPhone", showPhone);
    };
  }, []);
  return (
    <div className="App">
      {(() => {
        switch (page) {
          case "auth":
            return <Autharization />;
          case "phone":
            return <Phone />;
          default:
            return <Phone />;
        }
      })()}
    </div>
  );
}

export default App;
