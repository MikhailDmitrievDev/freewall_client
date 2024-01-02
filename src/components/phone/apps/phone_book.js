import style from "../../../css/phone.module.css";
import { useState } from "react";
import {
  CallSharp,
  StarOutline,
  TimeOutline,
  AppsOutline,
  RecordingOutline,
  PersonCircleOutline,
  Backspace,
} from "react-ionicons";

const PhoneBook = ({ handleScreenChange }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"];
  const [labelState, setLabel] = useState("");

  const handleClick = (number) => {
    setLabel(labelState + number);
  };

  const handleBackspace = () => {
    setLabel(labelState.slice(0, -1));
  }

  const buttons = numbers.map((number) => (
    <button
      className={style.iphone_button}
      key={number}
      onClick={() => handleClick(number)}
    >
      {number}
    </button>
  ));
  return (
    <div className={style.call_container}>
      <label className={style.iphone_label}>{labelState}</label>
      <div className={style.iphone_button_container}>{buttons}</div>

      <div className={style.manage_buttons}>
        <button className={style.call_button}>
          <CallSharp color="#fff" height="50px" />
        </button>
        <button className={style.backspace_button} onClick={handleBackspace}>
          <Backspace color="grey" height={"30px"} width={"30px"} />
        </button>
      </div>

      <div className={style.bottom_menu}>
        <div className={style.bottom_menu_item}>
          <StarOutline color="grey" height="20px" />
          <span>Favorites</span>
        </div>
        <div className={style.bottom_menu_item}>
          <TimeOutline color="grey" height="20px" />
          <span>History</span>
        </div>
        <div className={style.bottom_menu_item}>
          <PersonCircleOutline color="grey" height="20px" />
          <span>Contacts</span>
        </div>
        <div className={style.bottom_menu_item}>
          <AppsOutline color="grey" height="20px" />
          <span>Keypad</span>
        </div>
        <div className={style.bottom_menu_item}>
          <RecordingOutline color="grey" height="20px" />
          <span>Voicemail</span>
        </div>
      </div>
    </div>
  );
};

export default PhoneBook;
