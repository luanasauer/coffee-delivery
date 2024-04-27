import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
  BannerContainer,
  BannerHeader,
  BannerImageContainer,
  Icon,
  Item,
  Items,
  SubTitle,
  Title,
} from "./styles";
import coffee from "../../../../assets/coffee.svg";

export function Banner() {
  return (
    <BannerContainer>
      <BannerHeader>
        <Title>Encontre o café perfeito para qualquer hora do dia</Title>
        <SubTitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </SubTitle>
      </BannerHeader>

      <Items>
        <Item>
          <Icon background="yellowDark">
            <ShoppingCart weight="fill" size={16} />
          </Icon>
          <p>Compra simples e segura</p>
        </Item>
        <Item>
          <Icon background="gray">
            <Package weight="fill" size={16} />
          </Icon>
          <p>Embalagem mantém o café intacto</p>
        </Item>
        <Item>
          <Icon background="yellow">
            <Timer weight="fill" size={16} />
          </Icon>
          <p>Entrega rápida e rastreada</p>
        </Item>
        <Item>
          <Icon background="purple">
            <Coffee weight="fill" size={16} />
          </Icon>
          <p>O café chega fresquinho até você</p>
        </Item>
      </Items>

      <BannerImageContainer>
        <img src={coffee} alt="" />
      </BannerImageContainer>
    </BannerContainer>
  );
}
