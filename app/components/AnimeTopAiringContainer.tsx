import styles from '@/app/components/styles/AnimeTopAiring.module.css';
import Image from "next/image"
import { NoImagePreview } from "../utils/animeProvider"
import { IAnimeResult } from "@consumet/extensions"

export default function AnimeTopAiringContainer (animeInfo: IAnimeResult) {
    const { title, image, id, releaseDate } = animeInfo

    const ATitle = title.toString()
    const AImageUrl = image || NoImagePreview
    const AImageAlt = `${ATitle.toLowerCase()} image preview`

    return (
        <article className={styles.topAiringAnime} key={id}>
            <Image src={AImageUrl} alt={AImageAlt} width={250} height={300} className={styles.animeImage}/>
            <h3 className={styles.animeTitle}>{ATitle}</h3>
            <p>{releaseDate}</p>
        </article>
    )
}