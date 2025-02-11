import { GeistMono } from 'geist/font/mono'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

import { ThemeProvider } from '../providers/theme-provider'
import { cn } from '../utils/tw-merge'

import '../styles/globals.css'

export const metadata: Metadata = {
	title: 'ControlsApp by ValyaBabenkov',
	description: ''
}

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang='ru' suppressHydrationWarning>
			<body className={cn('bg-sidebar', GeistMono.variable)}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
					enableColorScheme
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
