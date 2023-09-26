import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons";
import Logo from "../../images/logo.svg";
import styles from "./Nav.module.scss";

export const Nav = () => {
  return (
    <div className={styles.nav_container}>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
      </div>
      <ul className={styles.menu_items}>
        <li className={styles.menu_list_item}>Discovery</li>
        <li className={styles.menu_list_item}>About</li>
        <li className={styles.menu_list_item}>Contact Us</li>
      </ul>
      <div className={styles.nav_icons}>
        <IconContext.Provider value={{ style: { width: 25.5, height: 25.5 } }}>
          <div>
            <AiOutlineUser />
          </div>
          <div className={styles.cart_container}>
            <div className={styles.item_count}>0</div>
            <AiOutlineShoppingCart />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};
