import styles from "@/app/components/styles/AnimeList.module.css"
import { NoImagePreview, animeProvider } from "../utils/animeProvider"
import Image from "next/image"
import { IAnimeResult } from "@consumet/extensions"

export default async function AnimeList () {
    const data = await animeProvider.fetchAnimeList()
    const animeList = data.results

    return (
        <section className={styles.animeList}>
            {animeList.map(anime => AnimeContainer(anime))}
        </section>
    )
}

function AnimeContainer (animeInfo: IAnimeResult) {
    const { title, image, id, releaseDate } = animeInfo

    const ATitle = title.toString()
    const AImageUrl = image || NoImagePreview
    const AImageAlt = `${ATitle.toLowerCase()} image preview`

    return (
        <article className={styles.animeInfoContainer} key={id}>
            <Image src={AImageUrl} alt={AImageAlt} width={250} height={300}/>
            <h2>{ATitle}</h2>
            <p>{releaseDate}</p>
        </article>
    )
}