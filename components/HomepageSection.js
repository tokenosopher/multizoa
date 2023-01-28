import styled from "styled-components";

//make HomePageSection a component with children
export const HomepageSection = ({ children, color }) => {
  return <Section color={color}>{children}</Section>;
}

const Section = styled.div`
  //get background color from prop
  background-color: ${(props) => props.color ? props.color: "#111111"};
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