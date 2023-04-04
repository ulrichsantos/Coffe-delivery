import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles";
import coffeeLogoImg from '../../assets/coffe-delivery-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <div className="header-content">
        <img src={coffeeLogoImg} alt="logo" />

        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} height="fill" />
            Porto Alegre, RS
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart size={20} height="fill" />
          </HeaderButton>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  )
}