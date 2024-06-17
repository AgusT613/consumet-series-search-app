import styles from '@/app/components/styles/AnimeList.module.css';
import { animeProvider } from "../utils/animeProvider";
import AnimeResultContainer from "./AnimeResultContainer";

export default async function AnimeTopAiring() {
    const data = await animeProvider.fetchTopAiring()
    const topAiring = data.results

    return (
        <section className={styles.animeList}>
            {topAiring.map(anime => AnimeResultContainer(anime))}
        </section>
    );
}