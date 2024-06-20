import styles from '@/app/components/styles/AnimeList.module.css';
import { animeProvider } from "../utils/animeProvider"
import AnimeResultContainer from "./AnimeResultContainer"
import H2Section from './H2Section';

export default async function AnimeRecentEpisodes() {
    const data = await animeProvider.fetchRecentEpisodes()
    const recentEpisodes = data.results

    return (
        <div>
            <H2Section>Recent Episodes</H2Section>
            <section className={styles.animeList}>
                {recentEpisodes.map(anime => AnimeResultContainer(anime))}
            </section>
        </div>
    )
}