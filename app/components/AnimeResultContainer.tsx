import styles from '@/app/components/styles/AnimeList.module.css';
import Image from "next/image"
import { NoImagePreview } from "../utils/animeProvider"
import { IAnimeResult } from "@consumet/extensions"

export default function AnimeResultContainer (animeInfo: IAnimeResult) {
    const { title, image, id } = animeInfo

    const ATitle = title.toString()
    const AImageUrl = image || NoImagePreview
    const AImageAlt = `${ATitle.toLowerCase()} image preview`

    return (
        <article className={styles.animeInfoContainer} key={id}>
            <Image src={AImageUrl} alt={AImageAlt} width={250} height={300} className={styles.animeImage}/>
            <div className={styles.info}>
                <h3 className={styles.animeTitle}>{ATitle}</h3>
            </div>
        </article>
    )
}