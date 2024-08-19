import styles from "./en.module.css"

export default function EnglishCV() {
	return (
		<div className={styles.cvWrapper}>
			<div className={styles.cv}>
				<embed src="CV_Cauã-Yves_En.pdf" type="application/pdf" />
			</div>
		</div>
		)
}