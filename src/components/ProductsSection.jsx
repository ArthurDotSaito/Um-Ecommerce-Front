import styled from "styled-components";
import TitleCategory from "./TitleCategory";

export default function ProductSection({children, title, block}) {
  return (
    <StyledProductSection block={!!block}>
      <header>
        <TitleCategory text={title} />
      </header>

      <div className="content">
        {children}
      </div>
    </StyledProductSection>
  );
}

const StyledProductSection = styled.section`
  header > h2 {
    margin-top: 60px;
    margin-bottom: 24px;
  }

  .content {
    display: ${props => props.block ? "block" : "flex"};
    width: 100%;
  }
`
