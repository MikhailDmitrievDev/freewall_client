import { useState, useEffect, useRef } from "react";
import style from "../../css/phone.module.css";
import {
  LockClosed,
  Flashlight,
  Camera,
  Cellular,
  BatteryFull,
  Wifi,
  Videocam,
  CameraSharp,
  MailSharp,
  Book,
  ChatbubbleSharp,
  CallSharp,
} from "react-ionicons";
function Phone() {
  const [locked, setLocked] = useState(true);
  const [active_scr, setActiveScreen] = useState(true);
  const body_p = useRef(null);
  const application_menuRef = useRef(null);
  useEffect(() => {
    body_p.current.style.transform = "translateY(0%)";
  }, []);

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
            <Cellular color={"#fff"} height={"14px"} />
            <Wifi color={"#fff"} height={"15px"} />
            <BatteryFull color={"#fff"} height={"15px"} />
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
          <div className={style.button_under}></div>
        </div>
        <div ref={application_menuRef} className={style.application_menu}>
          <div className={style.applications}>
            <div
              className={`${style.screen_first} ${
                active_scr ? style.active_screen : ""
              }`}
              id="screen_first"
            >
              <div className={style.icon_section}>
                <div className={style.icon}>
                  <button className={`${style.facetime} ${style.message}`}>
                    <Videocam color="#fff" />
                  </button>
                  <label>facetime</label>
                </div>
                <div className={style.icon}>
                  <button className={style.camera}>
                    <CameraSharp color="#fff" />
                  </button>
                  <label>Camera</label>
                </div>
                <div className={style.icon}>
                  <button className={`${style.bi_envelope_fill} ${style.mail}`}>
                    <MailSharp color="#fff" />
                  </button>
                  <label>Mail</label>
                </div>
                <div className={style.icon}>
                  <button className={style.ibooke}>
                    <Book color="#000" />
                  </button>
                  <label>IBook</label>
                </div>
              </div>
              <div className={style.icon_section}>
                <div className={style.icon}>
                  <button className={style.itunes}>
                    <ion-icon name="star"></ion-icon>
                  </button>
                  <label>ITunes</label>
                </div>
                <div className={style.icon}>
                  <button className={style.wallet}>
                    <ion-icon name="wallet-outline"></ion-icon>
                  </button>
                  <label>Wallet</label>
                </div>
                <div className={style.icon}>
                  <button className={style.appstore}>
                    <ion-icon name="logo-apple-appstore"></ion-icon>
                  </button>
                  <label>Mail</label>
                </div>
                <div className={style.icon}>
                  <button className={`${style.phone} ${style.call}`}>
                    <CallSharp color="#fff" />
                  </button>
                  <label>Phone</label>
                </div>
              </div>
            </div>
            <div className={style.screen_second}></div>
            <div className={style.indicators}>
              <span className={`${style.span_1} ${style.active}`}></span>
              <span className={style.span_2}></span>
            </div>
            <div className={style.button_navigation}>
              <div className={`${style.button_app} ${style.call}`}>
                <CallSharp color="#fff" />
              </div>
              <div className={`${style.button_app} ${style.message}`}>
                <ChatbubbleSharp color="#fff" />
              </div>
              <div className={`${style.button_app} ${style.camera}`}>
                <CameraSharp color="#fff" />
              </div>
              <div className={`${style.button_app} ${style.mail}`}>
                <MailSharp color="#fff" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;
