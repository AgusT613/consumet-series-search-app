import AnimeList from "./components/AnimeList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page - Welcome to AnimeSearchApp</h1>
      <AnimeList />
    </main>
  );
}
