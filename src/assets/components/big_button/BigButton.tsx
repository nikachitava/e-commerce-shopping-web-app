import styles from "./BigButton.module.scss";
// import { AiOutlineShoppingCart } from "react-icons/ai";

export const BigButton = ({ label }: { label: string }) => {
  return <div className={styles.big_button}>{label}</div>;
};
