import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import { Trash } from "phosphor-react";

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1681689600&Signature=kxCgdp5fD~dsna8sNmva6O-fz~oX36L0A3~sZohTAlzqcMvzYFfLZYKoOq6xq5YvUVHoOnJ3WRn-75oE585n9uoDlPmLu9Qmq-A3Q5dDOphkN1U6AlYEIjPzeTqN-~--vhXoBshJWWF1WgML7qRvLuOEHMzXKqi18Jr862ihFv79iWzjfpZWvrgckB7L-sm8KC1ibbAN6mEAnBOpVvo3tZ1qSUSOMTM5fUwKEBCD3J0sCkVR4eI5XUDSsNaKhXRhwWYdxSAYav6MFO8WjfCkySoAvfa6ia2Y4ZZ6TfTo4BBnquAK~NHMabSXNoH-yFiaHGKgtHK4NicxWaoJl4Mr0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small"/>
            <RemoveButton>
              <Trash size={16}/>
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  )
}