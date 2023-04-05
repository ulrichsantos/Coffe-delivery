import { TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../data/coffees";
import { CoffeCard } from "../CoffeCard";
import { CoffeeList, OutCoffesContainer } from "./styles";

export function OurCoffees() {
  return (
    <OutCoffesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos Cafés
      </TitleText>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeCard key={coffee.id} coffee={coffee}/>
        ))}
      </CoffeeList>
    </OutCoffesContainer>
  )
}