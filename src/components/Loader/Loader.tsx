import style from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={style["overlay"]}>
      <div className={style["loader"]}></div>
    </div>
  );
}
