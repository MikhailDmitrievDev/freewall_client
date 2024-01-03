import style from "../../css/setting_person.module.css";
import { useState } from "react";
function PersonInfo() {
  const nationality = [
    "Итальянец",
    "Украинец",
    "Русский",
    "Американец",
    "Японец",
    "Китаец",
    "Мексиканец",
    "Кореец",
    "Француз",
    "Ирландец",
  ];

  const [birthdate, setBirthdate] = useState("");

  const handleChangeBirthday = (event) => {
    const input = event.target.value;

    const cleanedInput = input.replace(/[^\p{Nd}]/gu, '');

    const limitedInput = cleanedInput.slice(0, 8);

    let formattedInput = '';
    for (let i = 0; i < limitedInput.length; i++) {
      if (i === 2 || i === 4) {
        formattedInput += '.';
      }
      formattedInput += limitedInput[i];
    }

    if (limitedInput.length === 0) {
      formattedInput = '';
    }

    setBirthdate(formattedInput);
  };

  return (
    <div className={style.left_block_main_person_info}>
      <div>
        <input className={style.person_input} type="text" placeholder="Имя" />
      </div>
      <div>
        <input
          className={style.person_input}
          type="text"
          placeholder="Фамилия"
        />
      </div>
      <div>
        <input
          className={style.person_input}
          type="text"
          value={birthdate}
          onChange={handleChangeBirthday}
          maxLength={10} // Ограничиваем максимальную длину ввода
          placeholder="ДД.ММ.ГГГГ"
        />
      </div>
      <div>
        <select className={style.person_select}>
          {nationality.map((option, index) => (
            <option key={index} value={option.toLowerCase()}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className={style.gender}>
        <div className={style.item_gender}>
          <svg
            viewBox="0 0 32 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            height={"100%"}
            width={"100%"}
          >
            <path
              d="M0 32.4985C0 41.3634 7.15417 48.5757 15.9738 48.5757C24.7934 48.5757 32 41.3634 32 32.4985C32 24.6657 26.3149 18.1271 19.0411 16.7097V9.65294L21.0938 11.4321L24.4726 7.38842L15.8707 0.0908966L7.00794 7.35968L10.3782 11.4611L12.7703 9.5304V16.7596C5.49674 18.2791 0 24.7583 0 32.4985ZM25.6773 32.4985C25.6773 37.888 21.315 42.2728 15.953 42.2728C10.5909 42.2728 6.22864 37.888 6.22864 32.4985C6.22864 27.1088 10.5909 22.7239 15.953 22.7239C21.315 22.7239 25.6773 27.1088 25.6773 32.4985Z"
              fill="#fff"
            ></path>
          </svg>
        </div>
        <div className={style.item_gender}>
          <svg
            viewBox="0 0 32 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            height={"100%"}
            width={"100%"}
          >
            <path
              d="M12.7792 32.1684V36.3999H10.2694V41.7525H12.7792V45.5757H19.0539V41.7525H21.8147V36.3999H19.0539V32.2137C26.3325 30.7762 32 24.1686 32 16.2537C32 7.29144 24.7992 -1.52588e-05 15.974 -1.52588e-05C7.14859 -1.52588e-05 0 7.29119 0 16.2537C0 24.0829 5.50061 30.636 12.7792 32.1684ZM15.9529 6.37233C21.3183 6.37233 25.6834 10.8053 25.6834 16.2539C25.6834 21.7028 21.3183 26.1358 15.9529 26.1358C10.5874 26.1358 6.2222 21.7028 6.2222 16.2539C6.22245 10.805 10.5874 6.37233 15.9529 6.37233Z"
              fill="#fff"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default PersonInfo;
