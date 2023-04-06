import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import { PaymentMethodContainer, ContentContainer } from './styles'

type PaymentoMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentoMethodInputProps>(({
  id,
  icon,
  label,
  ...props
}, ref) => {
  return (
    <PaymentMethodContainer>
    <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
    <label htmlFor={id}>
      <ContentContainer>
        {icon}
        {label}
      </ContentContainer>
    </label>
  </PaymentMethodContainer>
  )
})