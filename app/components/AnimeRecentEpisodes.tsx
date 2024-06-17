import styles from '@/app/components/styles/AnimeList.module.css';
import { animeProvider } from "../utils/animeProvider"
import AnimeResultContainer from "./AnimeResultContainer"

export default async function AnimeRecentEpisodes() {
    const data = await animeProvider.fetchRecentEpisodes()
    const recentEpisodes = data.results

    return (
        <section className={styles.animeList}>
            {recentEpisodes.map(recentEpisode => AnimeResultContainer(recentEpisode))}
        </section>
    )
}