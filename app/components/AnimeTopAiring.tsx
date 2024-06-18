import styles from '@/app/components/styles/AnimeTopAiring.module.css';
import { animeProvider } from "../utils/animeProvider";
import AnimeTopAiringContainer from './AnimeTopAiringContainer';
import H2Section from './H2Section';

export default async function AnimeTopAiring() {
    const data = await animeProvider.fetchTopAiring()
    const topAiring = data.results.slice(0, 7)

    return (
        <div className={styles.container}>
            <H2Section>Top Airing</H2Section>
            <section className={styles.topAiringAnimeContainer}>
                {topAiring.map(anime => AnimeTopAiringContainer(anime))}
            </section>
        </div>
    );
}