import { Input } from "../../../../components/Input";
import { AddresFormContainer } from "./styles";

export function AddresForm() {
  return (
    <AddresFormContainer>
      <Input placeholder="CEP" className="cep" type="number"/>
      <Input placeholder="Rua" className="street" />
      <Input placeholder="Número" type="number" />
      <Input placeholder="Complemento" className="complement" />
      <Input placeholder="Bairro" />
      <Input placeholder="Cidade" />
      <Input placeholder="UF" />
    </AddresFormContainer>
  )
}