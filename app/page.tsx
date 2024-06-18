import AnimeList from "./components/AnimeList";
import AnimeRecentEpisodes from "./components/AnimeRecentEpisodes";
import AnimeTopAiring from "./components/AnimeTopAiring";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.mainHeading}>Home Page - Welcome to AnimeSearchApp</h1>
      </header>
      <main className={styles.main}>
        <AnimeTopAiring />
        <AnimeRecentEpisodes />
        <AnimeList />
      </main>
    </>
  );
}
