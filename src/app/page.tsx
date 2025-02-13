import { Features } from '../components/home/features'
import { Hero } from '../components/home/hero'
import { Footer } from '../components/layout/footer/footer'

export default function Home() {
	return (
		<div className='relative min-h-screen'>
			<div className='pointer-events-none fixed inset-0'>
				<div className='absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]' />
				<div className='absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]' />
			</div>
			<div className='relative z-10'>
				<Hero />
				<Features />
				{/* <Support /> */}
				{/* <div className='mt-12 max-w-4xl text-center'>
					<h2 className='text-3xl font-bold'>Обратная связь</h2>
					<p className='mt-4 text-lg text-muted-foreground'>
						Если у вас есть пожелания, замечания или идеи,
						обязательно поделитесь ими, написав нам.
					</p>
				</div> */}
				<Footer />
			</div>
		</div>
	)
}
