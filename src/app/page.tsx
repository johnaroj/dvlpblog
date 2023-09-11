import CategoryList from "@/components/categoryList/CategoryList";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CardList from "@/components/cardList/CardList";
import Pagination from "@/components/pagination/Pagination";
import Menu from "@/components/menu/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        {/* <Pagination /> */}
        <Menu />
      </div>
    </div>
  );
}
