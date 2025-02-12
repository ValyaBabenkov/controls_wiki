import { NotebookText, Smartphone, StickyNote, UsersRound } from 'lucide-react'

const features = [
	{
		name: 'Мобильное приложение',
		description:
			'Удобное мобильное приложение для iOS и Android позволяет собирать данные и работать в автономном режиме.',
		icon: Smartphone
	},
	{
		name: 'Совместная работа',
		description:
			'Легко подключайте участников проекта: заказчиков, подрядчиков и других пользователей.',
		icon: UsersRound
	},
	{
		name: 'Чек-листы',
		description:
			'Загружайте чек-листы — используйте свои собственные или выберите из предустановленных.',
		icon: NotebookText
	},
	{
		name: 'Отчеты',
		description:
			'Создавайте отчеты в форматах PDF и Excel с помощью одного нажатия кнопки.',
		icon: StickyNote
	}
]

export function Features() {
	return (
		<section id='features' className='container space-y-16 py-10 md:pb-32'>
			<div className='mx-auto max-w-[58rem] text-center'>
				<h2 className='text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl'>
					Функции
				</h2>
				<p className='mt-4 text-muted-foreground sm:text-lg'>
					Функционал, который доступен уже сейчас
				</p>
			</div>
			<div className='mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2'>
				{features.map(feature => (
					<div
						key={feature.name}
						className='relative overflow-hidden rounded-lg border bg-background p-8'
					>
						<div className='flex items-center gap-4'>
							<feature.icon className='h-8 w-8' />
							<h3 className='font-bold'>{feature.name}</h3>
						</div>
						<p className='mt-2 text-muted-foreground'>
							{feature.description}
						</p>
					</div>
				))}
			</div>
		</section>
	)
}
