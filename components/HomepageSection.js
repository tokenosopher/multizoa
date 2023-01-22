import styled from "styled-components";

//make HomePageSection a component with children
export const HomepageSection = ({ children }) => {
  return <Section>{children}</Section>;
}

const Section = styled.section`
  background-color: #202020;
  color: #fff;
  padding: 2rem;
  margin: 2rem 2rem;
  border-radius: 10px;
  border: 1px solid #313131;
  flex-direction: column;
  max-width: 40%;
  min-height: 80%;
  justify-content: center;
  display: flex;
  
  @media (max-width: 1024px) {
    max-width: 100%;
    min-height: inherit;
    align-items: center;
  }
`;