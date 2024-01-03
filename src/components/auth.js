import { useState, useEffect } from "react";
import styles from "../css/auth.module.css";

function Autharization() {
  const [isActive, setIsActive] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmitRegister = (event) => {
    event.preventDefault();
    if (!emailRegex.test(formData.email)) {
      mp.trigger(
        "CEF:CLIENT::CHAT_MESSAGE",
        "Некорректный email (формат `test@test.net`)"
      );
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      mp.trigger("CEF:CLIENT::CHAT_MESSAGE", "Пароли не совпадают");
      return;
    }
    mp.trigger(
      "CEF:CLIENT::REGISTER_BUTTON_CLICK",
      formData.name,
      formData.email,
      formData.password
    );
  };
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    if (!emailRegex.test(formData.email)) {
      mp.trigger(
        "CEF:CLIENT::CHAT_MESSAGE",
        "Некорректный email (формат `test@test.net`)"
      );
      return;
    }
    mp.trigger(
      "CEF:CLIENT::LOGIN_BUTTON_CLICK",
      formData.email,
      formData.password
    );
  };

  return (
    <div
      className={`${styles.container} ${isActive ? styles.active : ""}`}
      id="container"
    >
      <div className={`${styles.form_container} ${styles.sign_up}`}>
        <form>
          <h1>Регистрация</h1>
          <span>Создание аккаунта на сервер FreeWall[RP]</span>
          <input
            type="text"
            placeholder="имя"
            value={formData.name}
            onChange={handleChange}
            name="name"
          />
          <input
            type="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
          <input
            type="password"
            placeholder="пароль"
            value={formData.password}
            onChange={handleChange}
            name="password"
          />
          <input
            type="password"
            placeholder="подтвердить пароль"
            value={formData.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
          />
          <button onClick={handleSubmitRegister}>Создать</button>
        </form>
      </div>
      <div className={`${styles.form_container} ${styles.sign_in}`}>
        <form>
          <h1>Авторизация</h1>
          <span>Вход в аккаунт на сервер FreeWall[RP]</span>
          <input
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email"
            name="email"
          />
          <input
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="пароль"
            name="password"
          />
          <a href="#">Забыл пароль?</a>
          <button onClick={handleSubmitLogin}>Войти</button>
        </form>
      </div>
      <div className={styles.toggle_container}>
        <div className={styles.toggle}>
          <div className={`${styles.toggle_panel} ${styles.toggle_left}`}>
            <h1>С возвращением!</h1>
            <h5>Для продолжения игры войдите в свою учетную запись</h5>
            <button
              className={styles.ghost}
              onClick={handleLoginClick}
              id="login"
            >
              Авторизация
            </button>
          </div>
          <div className={`${styles.toggle_panel} ${styles.toggle_right}`}>
            <h1>Добро пожаловать!</h1>
            <h5>Для начала игры зарегистрируйтесь</h5>
            <button
              className={styles.ghost}
              onClick={handleRegisterClick}
              id="register"
            >
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Autharization;
