import { useState, useEffect, useRef } from "react";
import style from "../../css/phone.module.css";
import MainScreen from "./main_screen";
import PhoneBook from "./apps/phone_book";
import {
  LockClosed,
  Flashlight,
  Camera,
  Cellular,
  BatteryFull,
  Wifi,
} from "react-ionicons";
function Phone() {
  const [locked, setLocked] = useState(true);
  const [currentScreen, setScreen] = useState("");
  const [currenColorIcons, setColorIcons] = useState("#fff");

  const body_p = useRef(null);
  const application_menuRef = useRef(null);
  const button_under = useRef(null);

  useEffect(() => {
    body_p.current.style.transform = "translateY(0%)";
  }, []);

  const handleScreenChange = (newScreen) => {
    if (newScreen === "phoneBook") {
      button_under.current.style.backgroundColor = "#000";
      setColorIcons("#000");
    }
    if (newScreen === "mainScreen") {
      setColorIcons("#fff");
    }
    setScreen(newScreen);
  };

  const handleDivClick = () => {
    setLocked(!locked);
    application_menuRef.current.style.transform = "none";
  };

  return (
    <div className={style.body_phone} ref={body_p}>
      <div className={style.phone_frame}>
        <div className={style.norch}>
          <div className={style.rounded}></div>
        </div>
        <div className={style.nav}>
          <div className={style.left}>
            <span>fw-сеть</span>
          </div>
          <div className={style.right}>
            <Cellular color={currenColorIcons} width={"15px"} height={"14px"} />
            <Wifi color={currenColorIcons} height={"15px"} />
            <BatteryFull color={currenColorIcons} height={"15px"} />
          </div>
        </div>
        <div className={style.app_container}>
          <div className={style.bg_image}>
            <div className={style.bg_frame}></div>
          </div>
        </div>
        <div
          className={`${style.lock_screen} ${locked ? style.active : ""}`}
          onClick={handleDivClick}
        >
          <div className={style.block}>
            <LockClosed color={"#fff"} />
          </div>
          <div className={style.time}>
            <span>Суббота, 23 декабря</span>
            <h1>12:20</h1>
          </div>
          <div className={style.scr_lock_nav}>
            <div className={style.left}>
              <button>
                <Flashlight color="#fff" />
              </button>
            </div>
            <div className={style.right}>
              <button>
                <Camera color="#fff" />
              </button>
            </div>
          </div>
          <div className={style.unlock_button}></div>
        </div>
        <div ref={application_menuRef} className={style.application_menu}>
          {(() => {
            switch (currentScreen) {
              case "phoneBook":
                return <PhoneBook handleScreenChange={handleScreenChange} />;
              case "mainScreen":
                return <MainScreen handleScreenChange={handleScreenChange} />;
              default:
                return <MainScreen handleScreenChange={handleScreenChange} />;
            }
          })()}
        </div>
        <div
          className={style.button_under}
          ref={button_under}
          onClick={() => handleScreenChange("mainScreen")}
        ></div>
      </div>
    </div>
  );
}

export default Phone;
