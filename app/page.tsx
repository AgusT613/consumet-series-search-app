import AnimeList from "./components/AnimeList";
import AnimeRecentEpisodes from "./components/AnimeRecentEpisodes";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page - Welcome to AnimeSearchApp</h1>
      <div>
        <h2>Recent Episodes</h2>
        <AnimeRecentEpisodes />
      </div>
      <div>
        <h2>Anime List</h2>
        <AnimeList />
      </div>
    </main>
  );
}
