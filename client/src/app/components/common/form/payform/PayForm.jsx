import styles from './PayForm.module.scss'

const paySysstemsLogos = [
	{
		id: 'mir',
		url: 'https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/paySyst%2Fmir.png?alt=media&token=311f5f51-29fb-47b2-a5b0-8cb7cdbf570b',
	},
	{
		id: 'ruble',
		url: 'https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/paySyst%2Fruble.png?alt=media&token=ebf33def-1eac-468f-b3e1-beb53d3ee813',
	},
	{
		id: 'maestro',
		url: 'https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/paySyst%2Fmaestro.png?alt=media&token=9e28fa3a-a80a-4467-85f6-8473449edc86',
	},
	{
		id: 'master card',
		url: 'https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/paySyst%2Fmaster%20card.png?alt=media&token=f7a025bb-7030-4fd1-bfbb-c1111b787230',
	},
	{
		id: 'visa',
		url: 'https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/paySyst%2Fvisa.png?alt=media&token=c283e763-829a-471b-a382-85dfecf13ae5',
	},
]

const PayForm = () => {
	return (
		<div className={styles.PayForm}>
			<a
				className='text-light mb-3'
				href='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/DOCS%2Foferta.pdf?alt=media&token=67431f55-3b22-4d27-9bfe-8afbb182b3fe'
				target='_blank'
				rel='noopener noreferrer'
			>
				Публичная оферта<i class='bi bi-file-earmark-arrow-down'></i>
			</a>
			<div className={styles.PayForm_aboutTG}>
				<a
					href='https://t.me/+GewYrvJ--TM1ODJi'
					target='_blank'
					rel='noopener noreferrer'
				>
					@mecenatrussia
				</a>
				<span>
					{' '}
					- наш телеграм канал, вступив в который, вы уже становитесь Меценатом.
				</span>
				<p>
					Внести свой вклад в увековечивание памяти можно пожертвовав любой
					суммой.
				</p>
				<p>
					На данный момент, взносы принимаются по реквизитам:
					<ul className='fw-bold'>
						<li>Адрес: 119421, г.Москва, Ленинский пр-т 111, к. 1, 24Н</li>
						<li>ИНН: 9728097957 ОГРН: 123770394140 КПП: 772801001</li>
						<li>р/с: 4070 3810 0000 0005 405 ПАО "Промсвязьбанк"</li>
						<li>к/с: 30101 810 4 0000 0000555 БИК: 044525555</li>
					</ul>
					Денежные средства пойдут на изготовление и установку скульптурных
					групп и монументов "Дети Донбасса - Дети России", "Героям России",
					"Волонтерам России" и "Священнослужителям"
				</p>
			</div>
			<p className='text-light'>
				Другие варианты сотрудничества и вся информация:{' '}
				<a href='mailto:info@org-nashmir.tech'>info@org-nashmir.tech</a>
			</p>
			<h3 className='text-light pt-5 text-center'>
				Главный партнер{' '}
				<a
					href='https://www.psbank.ru/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<img
						src='https://firebasestorage.googleapis.com/v0/b/fow-react.appspot.com/o/logos%2FPSB_logo_white_png%20(1).png?alt=media&token=162413e0-fd83-40f6-b8e3-6fad219321a2'
						alt='ПСБ'
						width={200}
					/>
				</a>
			</h3>
			<div className={styles.PayForm_paySystems}>
				{paySysstemsLogos.map(({ id, url }) => (
					<img key={id} alt={id} src={url} />
				))}
			</div>
		</div>
	)
}

export default PayForm
