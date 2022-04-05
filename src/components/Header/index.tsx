import { Container, Content, Info, Input } from "./styles";
import icon_moon from "../../assets/icon-moon.svg";

export function Header() {
  return (
    <Container>
      <Content>
        <Info>
          <h1>TODO</h1>
          <img src={icon_moon} alt="" />
        </Info>
        <Input>
          <div></div>
          <input type="text" />
        </Input>
      </Content>
    </Container>
  );
}
