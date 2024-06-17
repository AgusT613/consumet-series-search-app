import styles from "@/app/components/styles/AnimeList.module.css"
import AnimeResultContainer from "./AnimeResultContainer"
import { animeProvider } from "../utils/animeProvider"

export default async function AnimeList () {
    const data = await animeProvider.fetchAnimeList()
    const animeList = data.results

    return (
        <section className={styles.animeList}>
            {animeList.map(anime => AnimeResultContainer(anime))}
        </section>
    )
}