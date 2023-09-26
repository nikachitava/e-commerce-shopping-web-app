import styles from "./HeroPage.module.scss";
import bg_img from "../../images/bg-image.png";
import { BigButton } from "../big_button/BigButton";

export const HeroPage = () => {
  return (
    <div className={styles.heropage_background}>
      <img src={bg_img} alt="bg_img" />
      <div className={styles.content_container}>
        <h4 style={{ fontSize: 40 }}>The natural material</h4>
        <p style={{ fontSize: 18, marginBottom: 20, marginTop: 20 }}>
          Lorem ipsum dolor sit amet, dolor sit amet, consectetur adipisicing
          elit.
        </p>
        <BigButton label={"Discovery our collection"} />
      </div>
    </div>
  );
};
