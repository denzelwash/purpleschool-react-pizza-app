import style from "./App.module.scss";
import Button from "../Button/Button";
import Input from "../Input/Input";
import clsx from "clsx";

function App() {
  return (
    <>
      <div className={style["page-login"]}>
        <div className="container">
          <div className={style["page-login__grid"]}>
            <div className={style["page-login__logo"]}>
              <img src="/img/logo.svg" alt="" width={363} />
            </div>
            <form className={style["page-login__form"]}>
              <h1>Вход</h1>
              <Input label="Ваш email" />
              <Input type="password" className="mb-0" label="Ваш пароль" />
              <Button
                className={clsx("primary", style["page-login__btn"])}
                size="default"
              >
                Вход
              </Button>
              <div className={style["page-login__text"]}>
                Нет акканута?
                <br />
                <a href="#"> Зарегистрироваться</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
