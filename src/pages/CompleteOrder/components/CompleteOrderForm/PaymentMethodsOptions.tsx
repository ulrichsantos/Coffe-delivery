import { PaymentMethodInput } from "../PaymentMethodInput";
import { PaymentMethodsOptionsContainer } from "./styles";

export function PaymentMethodOptions() {
  return (
    <PaymentMethodsOptionsContainer>
      <PaymentMethodInput />
      <PaymentMethodInput />
      <PaymentMethodInput />
    </PaymentMethodsOptionsContainer>
  )
}