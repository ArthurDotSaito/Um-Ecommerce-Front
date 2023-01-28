import styled from "styled-components";
import { TITLE_CATEGORY_COLOR } from "../constants/colors";

export default function TitleCategory({ text }) {
  return <StyledTitleCategory>{text}</StyledTitleCategory>;
}

const StyledTitleCategory = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 60px;

  display: flex;
  align-items: center;

  color: ${TITLE_CATEGORY_COLOR};
`;
