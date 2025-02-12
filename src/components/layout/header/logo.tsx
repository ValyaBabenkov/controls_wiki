import Link from 'next/link'

export function Logo() {
	return (
		<Link href='/' className='flex items-center gap-2 text-xl font-bold'>
			<img src='/logo.png' width={50} height={50} />
			ControlsApp
		</Link>
	)
}
