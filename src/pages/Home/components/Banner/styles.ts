import styled from "styled-components";

const ICON_BG_COLORS = {
  yellowDark: "yellow-dark",
  yellow: "yellow",
  gray: "base-text",
  purple: "purple",
} as const;

interface IconProps {
  background: keyof typeof ICON_BG_COLORS;
}

export const BannerContainer = styled.div`
  display: grid;
  grid-template-areas:
    "title image image"
    "list image image";
  padding: 5px;
`;

export const BannerHeader = styled.div`
  grid-area: title;
`;

export const Title = styled.p`
  font-family: "Baloo 2", sans-serif;
  font-size: 48px;
  max-width: 588px;
`;

export const SubTitle = styled.p`
  font-weight: normal;
`;

export const Items = styled.ul`
  grid-area: list;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5px;
  list-style-type: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div<IconProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme[ICON_BG_COLORS[props.background]]};
`;

export const BannerImageContainer = styled.div`
  grid-area: image;
`;
