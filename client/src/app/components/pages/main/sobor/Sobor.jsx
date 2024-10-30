import { FaCloudDownloadAlt } from 'react-icons/fa'
import styles from './Sobor.module.scss'
const Sobor = () => {
	return (
		<>
			<h2 className='px-4 mt-5'>Ближайшее мероприятие в Москве</h2>
			<div className={styles.Sobor}>
				<img
					src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/posters%2Fav21.webp?alt=media&token=3d00df46-e45a-48db-8db7-8bcf7fb3b14d'
					alt='Пятый международный форум экономического сотрудничества'
				/>
				<div>
					<h3>
						V-й МЕЖДУНАРОДНЫЙ ФОРУМ КУЛЬТУРНО-ЭКОНОМИЧЕСКОГО СОТРУДНИЧЕСТВА "НАШ
						МИР-XXI ВЕК"
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
					<ul className='text-light fs-4'>
						<li>
							11. 00. Сбор гостей, осмотр выставки, фотозона, пресс-подходы и
							пр.
						</li>
						<li>12.00. Торжественное открытие. Выступление почетных гостей.</li>
						<li>
							12.30.Пленарная сессия "Рост экономики за счёт роста качественных
							показателей: основные тенденции в России и мире". (Участники -
							представители федеральных и региональных министерств, сенаторы и
							депутаты Госдумы РФ, послы , эксперты федерального ТВ,
							представители крупного бизнеса.
						</li>
						<li>
							13.30. Блок: "Мировая культура" (выступление известных российских
							и зарубежных деятелей культуры и искусства, и т.д.)
						</li>
						<li>
							14.00.Пленарная сессия: "Контрафакт: международный опыт борьбы с
							экономической угрозой".
						</li>
						<li>15.00. Блок "Мировая культура"</li>
						<li>15.30. Пленарная сессия "Здоровое Отечество".</li>
						<li>16.30.Выступление спикеров. Вручение наград.</li>
						<li>18.00. Благотворительный концерт</li>
						<li>19. 00. Финал конкурса красоты</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Sobor
