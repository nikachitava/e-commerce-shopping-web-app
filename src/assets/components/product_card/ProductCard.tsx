// import CardPhoto from "../../images/image_1.svg";
import styles from "../../components/product_card/ProductCard.module.scss";

interface ProductItem {
  id: number;
  title: string;
  price: string;
  category?: string;
  description?: string;
  image: string;
}

export const ProductCard = ({ id, title, price, image }: ProductItem) => {
  return (
    <div className={styles.card_container} key={id}>
      <img src={image} alt="cardphoto" />
      <div className={styles.product_info}>
        <div className={styles.product_title}>
          <span>{title.slice(0, 20)}...</span>
        </div>
        <div className={styles.product_price}>
          <span>{price}$</span>
        </div>
      </div>
    </div>
  );
};
