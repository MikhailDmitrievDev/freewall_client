import style from "../../css/phone.module.css";
import { useState, useEffect, useRef } from "react";
import {
  Videocam,
  CameraSharp,
  MailSharp,
  Book,
  ChatbubbleSharp,
  CallSharp,
} from "react-ionicons";

const MainScreen = ({handleScreenChange}) => {
  const [active_scr, setActiveScreen] = useState(true);

  return (
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
            <button className={`${style.phone} ${style.call}`} onClick={() => handleScreenChange("phoneBook")}>
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
        <div className={`${style.button_app} ${style.call}`} onClick={() => handleScreenChange("phoneBook")}>
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
  );
};

export default MainScreen;
