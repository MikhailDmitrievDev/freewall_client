import "./App.css";
import { useState, useEffect } from "react";
import Autharization from "./components/auth";
import Phone from "./components/phone/phone";
import SettingPerson from "./components/setting_person";

function App() {
  const [page, setPage] = useState("");
  useEffect(() => {
    const showPhone = () => {
      setPage("phone");
    };
    const ShowAuth = () => {
      setPage("auth");
    };

    const showSettingPerson = () => {
      setPage("settingPerson");
    }

    document.addEventListener("shwoAuth", ShowAuth);
    document.addEventListener("showPhone", showPhone);
    document.addEventListener("showSettingPerson", showSettingPerson);
    return () => {
      document.removeEventListener("shwoAuth", ShowAuth);
      document.removeEventListener("showPhone", showPhone);
      document.removeEventListener("showSettingPerson", showSettingPerson);
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
          case "settingPerson":
            return <SettingPerson />
          default:
            return <SettingPerson />;
        }
      })()}
    </div>
  );
}

export default App;
