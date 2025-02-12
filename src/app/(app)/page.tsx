export default function Home() {
	return (
		<div className='flex flex-col items-center'>
			<h1 className='text-6xl font-bold'>ControlsApp</h1>
			<p className='mx-auto mt-6 max-w-4xl text-lg text-muted-foreground'>
				Простое и удобное решение для для сбора и контроля замечаний на объекте!
			</p>
			<p>
				Цель системы — сэкономить время и ресурсы на сбор замечаний в рамках осмотра.
			</p>

				Функционал, который доступен уже сейчас:
				<ul>
					<li>Мобильное приложение (iOS, Android) — удобный инструмент для сбора данных, работа в автономном режиме</li>
					<li>Работа в команде — подключайте пользователей в проект (заказчик, подрядчик и т. д.)</li>
					<li>Загрузка чек-листов — используйте свои или предустановленные</li>
					<li>Формирование отчетов в формате PDF, Excel</li>
					<li>Модуль работы с задачами — в планах (Q2 2025)</li>
					<li>Оповещения (Push Notification, email) — в планах</li>
				</ul>

			<div className='mt-12 max-w-4xl text-center'>
				<h2 className='text-3xl font-bold'>Поддержка проекта</h2>
				<p className='mt-4 text-lg text-muted-foreground'>
					Если вам нравится наше приложение и вы хотите поддержать его развитие, мы будем очень благодарны!
					Ваша помощь позволит нам делать продукт еще лучше.
				</p>
				<p className='mt-2 text-lg text-muted-foreground'>
					Кнопка Спонсортсво
				</p>
			</div>
			<div className='mt-12 max-w-4xl text-center'>
				<h2 className='text-3xl font-bold'>Обратная связь</h2>
				<p className='mt-4 text-lg text-muted-foreground'>
					Если у вас есть пожелания, замечания или идеи, обязательно поделитесь ими, написав нам.
				</p>
			</div>
		</div>
	)
}
