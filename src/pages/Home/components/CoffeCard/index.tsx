import { formatMoney } from "../../../../Utils/formatMoney";
import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles";
import { ShoppingCart } from "phosphor-react";

export interface Coffee {
  photo: any;
  id: string;
  tags: string[];
  name: string;
  description: string;
  image: string;
  price: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

export function CoffeCard({ coffee }: CoffeeProps) {
  const formattedPrice = formatMoney(coffee.price);

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">9,90</TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}