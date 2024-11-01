import { FaCloudDownloadAlt } from 'react-icons/fa'
import styles from './Sobor.module.scss'
const Sobor = () => {
	return (
		<>
			<div className={styles.Sobor}>
				<h2 className='px-4 mt-5'>Ближайшее мероприятие в Москве</h2>
				<img
					src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/posters%2Fav21.webp?alt=media&token=3d00df46-e45a-48db-8db7-8bcf7fb3b14d'
					alt='Пятый международный форум экономического сотрудничества'
				/>
				<div>
					<h3 className='text-center'>
						<a
							href='https://etema.ru/events/blagotvoritelnyj-konkurs-krasoty-nas-mir-21-vek-moskva/209149'
							target='_blank'
							rel='noopener noreferrer'
						>
							V-й МЕЖДУНАРОДНЫЙ ФОРУМ КУЛЬТУРНО-ЭКОНОМИЧЕСКОГО СОТРУДНИЧЕСТВА
							"НАШ МИР-XXI ВЕК"
						</a>
					</h3>
					<div className='text-center mb-4	'>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/DOCS%2F%D0%9F%D1%80%D0%B5%D1%81%D1%81-%D1%80%D0%B5%D0%B7%D0%B8%D0%B7-5-%D0%B3%D0%BE-%D0%9C%D0%A4%D0%9A%D0%AD%D0%A1-%D0%9D%D0%B0%D1%88-%D0%9C%D0%B8%D1%80-21-%D0%B2%D0%B5%D0%BA_%D0%9F%D1%80%D0%B5%D0%B7%D0%B8%D0%B4%D0%B5%D0%BD%D1%82_%D0%BE%D1%82%D0%B5%D1%8C-NEW.pdf?alt=media&token=ca347a1d-6f0d-4935-a202-07ecaabc2221'
						>
							Пресс-релиз.pdf
							<FaCloudDownloadAlt className='ms-2' />
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default Sobor
