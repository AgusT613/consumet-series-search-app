import styles from '@/app/components/styles/AnimeList.module.css';
import Image from "next/image"
import { NoImagePreview } from "../utils/animeProvider"
import { IAnimeResult } from "@consumet/extensions"

export default function AnimeResultContainer (animeInfo: IAnimeResult) {
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