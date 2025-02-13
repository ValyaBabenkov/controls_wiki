import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import { type ComponentPropsWithoutRef, forwardRef } from 'react'

import { cn } from '@/src/utils/tw-merge'

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap select-none rounded-lg transition-all will-change-transform active:hover:scale-[0.98] active:hover:transform text-sm font-medium ring-offset-background focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				primary: 'bg-cyan-600 text-white hover:bg-cyan-600/90',
				outline:
					'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
				secondary: 'bg-white text-black hover:bg-neutral-100',
				ghost: 'border-transparent hover:bg-accent hover:text-accent-forenground',
				link: 'text-primary underline-offset-4 hover:underline',
				destructive:
					'bg-gradient-to-b from-orange-600 to-orange-700 text-destructive-foreground hover:from-orange-700 hover:to-orange-700'
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 px-4 py-2',
				xs: 'h-9 rounded-md px-3 text-xs',
				lg: 'h-11 rounded-lg px-8',
				icon: 'h-10 w-10'
			}
		},
		defaultVariants: {
			variant: 'primary',
			size: 'default'
		}
	}
)

interface ButtonProps
	extends ComponentPropsWithoutRef<'button'>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			asChild,
			className,
			disabled,
			variant,
			size,
			children,
			...props
		}: ButtonProps,
		forwardedRef
	) => {
		const Component = asChild ? Slot : 'button'

		return (
			<Component
				ref={forwardedRef}
				className={cn(buttonVariants({ variant, size }), className)}
				{...props}
			>
				{children}
			</Component>
		)
	}
)

Button.displayName = 'Button'

export { Button, buttonVariants, type ButtonProps }
