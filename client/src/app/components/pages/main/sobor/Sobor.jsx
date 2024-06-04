import styles from './Sobor.module.scss'

const Sobor = () => {
	return (
		<div className={styles.Sobor}>
			<h2 className='px-4'>Ближайшее мероприятие в Москве</h2>
			<img
				src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/posters%2F310524.webp?alt=media&token=2f6e3d15-e01e-4bf5-bfad-5fb5bc29cb42'
				alt='Торжественный гала концерт ко Дню Защиты Детей'
			/>
			<a
				href='https://etema.ru/events/torzestvennyj-priem-blagotvoritelnyj-gala-koncert-nas-mir-21-vek-k-dnu-zasity-detej-moskva/208612'
				target='_blank'
				rel='noopener noreferrer'
			>
				Подробнее...
			</a>
		</div>
	)
}

export default Sobor
