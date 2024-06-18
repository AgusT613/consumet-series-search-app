import styles from '@/app/components/styles/AnimeList.module.css';
import { animeProvider } from "../utils/animeProvider"
import AnimeResultContainer from "./AnimeResultContainer"

export default async function AnimeRecentEpisodes() {
    const data = await animeProvider.fetchRecentEpisodes()
    const recentEpisodes = data.results

    return (
        <div>
            <h2>Recent Episodes</h2>
            <section className={styles.animeList}>
                {recentEpisodes.map(anime => AnimeResultContainer(anime))}
            </section>
        </div>
    )
}