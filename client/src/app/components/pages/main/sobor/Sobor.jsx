import styles from './Sobor.module.scss'

const Sobor = () => {
	return (
		<div className={styles.Sobor}>
			<h2>Ближайшее мероприятие:</h2>
			<img
				src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/posters%2Fcathedral.webp?alt=media&token=6a459dbe-8a1e-4b79-91b5-3c6a84d535e8'
				alt='Храм Христа Спасителя'
			/>
			<span>
				<a
					href='https://etema.ru/events/nash-mir-21-vek-moskva'
					target='_blank'
					rel='noopener noreferrer'
				>
					Купить билет
				</a>
			</span>
		</div>
	)
}

export default Sobor
