import styled from "styled-components";
import tw from "twin.macro";

import CarLogoImg from "../../../assets/car-logo.png";
import CarLogoDarkImg from "../../../assets/car-logo-dark.png";

interface ILogoProps {
  color?: "white" | "dark";
  bgColor?: "white" | "dark";
}

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
    `};
  ${({ color }) => (color === "white" ? tw`text-white` : tw`text-black`)}
`;

const Image = styled.div`
  width: auto;
  ${tw`h-6 md:h-9`};
  img {
    width: auto;
    height: 100%;
  }
`;

const Logo = (props: ILogoProps) => {
  const { color, bgColor } = props;

  return (
    <LogoContainer>
      <Image>
        <img src={bgColor === "dark" ? CarLogoDarkImg : CarLogoImg} alt="Your car logo" />
      </Image>
      <LogoText color={color || "dark"}>Yourcar.</LogoText>
    </LogoContainer>
  );
}

export default Logo;
