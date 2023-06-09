import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../context/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

const newTransactionFormValidationSchema = z.object({
  description: z.string(),
  category: z.string(),
  type: z.enum(['outcome', 'income']),
  price: z.number(),
})

type newTransactionsInputs = z.infer<typeof newTransactionFormValidationSchema>

export function NewTransactionsModal() {
  const createTransaction = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.createTransaction
    },
  )

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<newTransactionsInputs>({
    resolver: zodResolver(newTransactionFormValidationSchema),
    defaultValues: {
      type: 'income',
    },
  })

  async function handleCreateNewTransaction(data: newTransactionsInputs) {
    const { description, price, category, type } = data

    await createTransaction({ description, price, category, type })

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New transaction</Dialog.Title>

        <CloseButton asChild>
          <X />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Description"
            {...register('description')}
            required
          />
          <input
            type="number"
            placeholder="Price"
            {...register('price', { valueAsNumber: true })}
            required
          />
          <input
            type="text"
            placeholder="Category"
            {...register('category')}
            required
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    In come
                  </TransactionTypeButton>
                  <TransactionTypeButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Out come
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button disabled={isSubmitting} type="submit">
            Register
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
