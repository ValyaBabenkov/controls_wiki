'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { BorderBeam } from '../shared/border-beam'
import { Button } from '../ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '../ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'

import { supportApi } from '@/src/api/support'
import { type DonateSchema, donateSchema } from '@/src/schemas/donate.schema'

export function Support() {
	const { push } = useRouter()

	const { mutate, isPending } = useMutation({
		mutationKey: ['donate'],
		mutationFn: (data: DonateSchema) => supportApi.donate(data),
		onSuccess(data) {
			push(`/payment/${data.confirmation.confirmation_token}`)
		}
	})

	const form = useForm<DonateSchema>({
		resolver: zodResolver(donateSchema),
		defaultValues: {
			email: '',
			amount: 1000
		}
	})

	function onSubmit(data: DonateSchema) {
		mutate(data)
	}

	return (
		<section id='support' className='border-t'>
			<div className='container flex flex-col items-center gap-4 py-24 text-center md:py-32'>
				<h2 className='text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl'>
					Поддержка проекта
				</h2>
				<p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
					Если вам нравится наше приложение и вы хотите поддержать его
					развитие, мы будем очень благодарны! Ваша помощь позволит
					нам делать продукт еще лучше.
				</p>
				<Dialog>
					<DialogTrigger asChild>
						<Button size='lg' className='mt-4'>
							Поддержать
						</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Заполните форму ниже</DialogTitle>
						</DialogHeader>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className='grid gap-y-4'
							>
								<FormField
									control={form.control}
									name='email'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Почта</FormLabel>
											<FormControl>
												<Input
													placeholder='Введите вашу почту'
													disabled={isPending}
													{...field}
												/>
											</FormControl>
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='amount'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Сумма</FormLabel>
											<FormControl>
												<Input
													placeholder='Введите сумму пожертвования'
													disabled={isPending}
													{...field}
												/>
											</FormControl>
										</FormItem>
									)}
								/>
								<Button
									variant='secondary'
									disabled={isPending}
								>
									Перейти к оплате
								</Button>
							</form>
						</Form>
						<BorderBeam duration={8} size={100} />
					</DialogContent>
				</Dialog>
			</div>
		</section>
	)
}
