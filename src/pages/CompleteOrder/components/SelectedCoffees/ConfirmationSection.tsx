import { formatMoney } from '../../../../Utils/formatMoney'
import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { ConfirmationSectionContainer } from './styles'

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formatDeliveryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formatDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText size="l" color="subtitle" weight="700">
          Entrega
        </RegularText>
        <RegularText size="l" color="subtitle" weight="700">
          R$ {formattedCartTotal}
        </RegularText>
      </div>

      <Button text="Confirmar Pedido" disabled={cartQuantity <= 0} type='submit'/>
    </ConfirmationSectionContainer>
  )
}
