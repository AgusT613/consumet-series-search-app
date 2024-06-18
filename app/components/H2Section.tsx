import "material-icons/iconfont/round.css"
import styles from '@/app/components/styles/Heading.module.css';

export default function H2Section({children}: { children: React.ReactNode }) {
    return (
        <div className={styles.headingContent}>
            <h2 className={styles.sectionTitle}>{children}</h2>
            <div className={styles.redirectToPage}>
                <span>See More</span>
                <span className="material-icons-round">arrow_outward</span>
            </div>
        </div>
    );
}