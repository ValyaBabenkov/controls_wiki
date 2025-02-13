export function Footer() {
	return (
		<footer className='border-t'>
			<div className='container max-w-screen-2xl border-t py-6'>
				<p className='text-center text-sm text-muted-foreground'>
					ControlsApp &copy; {new Date().getFullYear()} Все права
					защищены.
				</p>
			</div>
		</footer>
	)
}
