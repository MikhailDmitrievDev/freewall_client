import style from "../../css/setting_person.module.css";

function PersonInfo() {
  return (
    <div className={style.left_block_main_person_info}>
      <div>
        <input type="text" placeholder="Имя" />
      </div>
      <div>
        <input type="text" placeholder="Фамилия" />
      </div>
      <div>
        <input type="text" placeholder="Дата рождения 20.12.1999" />
      </div>
      <div>
        <select>
          <option value="option1">Итальянец</option>
          <option value="option2">Русский</option>
          <option value="option3">Американец</option>
        </select>
      </div>
      <div>
        <select>
          <option value="option1">Мужской</option>
          <option value="option2">Женский</option>
        </select>
      </div>
    </div>
  );
}

export default PersonInfo;
