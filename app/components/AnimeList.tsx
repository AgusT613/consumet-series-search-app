import styles from "@/app/components/styles/AnimeList.module.css"
import AnimeResultContainer from "./AnimeResultContainer"
import { animeProvider } from "../utils/animeProvider"
import H2Section from "./H2Section"

export default async function AnimeList () {
    const data = await animeProvider.fetchAnimeList()
    const animeList = data.results

    return (
        <div>
            <H2Section>Anime List</H2Section>
            <section className={styles.animeList}>
                {animeList.map(anime => AnimeResultContainer(anime))}
            </section>
        </div>
    )
}