import { useEffect, useState } from "react";
import { ProductCard } from "../../components/product_card/ProductCard";
import styles from "./ProductsSection.module.scss";

interface ProductItem {
  id: number;
  title: string;
  price: string;
  category?: string;
  description?: string;
  image: string;
}

export const ProductsSection = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await fetch(
          "https://fakestoreapi.com/products/category/jewelery"
        );
        const data = await request.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className={styles.products_section}>
      <h1>Products</h1>
      <p>Order it for you or for your beloved ones </p>
      <div className={styles.products_list}>
        {products.map((product) => {
          return (
            <ProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          );
        })}
      </div>
    </section>
  );
};
