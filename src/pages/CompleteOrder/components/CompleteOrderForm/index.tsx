import { useTheme } from "styled-components";
import { TitleText } from "../../../../components/Typography";
import { FormSectionContainer } from "../../styles";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormContainer } from "./styles";
import { MapPinLine, CurrencyDollar } from "phosphor-react";
import { AddresForm } from "./AddresForm";

export function CompleteOrderForm() {
  const { colors } = useTheme();

  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle 
          title="Endereço de entrega" 
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine color={colors["brand-yellow-dark"]} size={22}/>}
        />

        <AddresForm />
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle 
          title="Pagamento" 
          subtitle="O Pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar color={colors["brand-purple"]} size={22}/>}
        />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}