import styled from "@emotion/styled";

export const ResetButton = styled.div`
  width: 20rem;
  padding: 2rem 0;
  margin: 0 auto;
  box-shadow: 3px 4px 10px 2px rgba(0, 0, 0, 0.75);

  cursor: pointer;
  &:active {
    box-shadow: 3px 2px 20px -5px rgba(0, 0, 0, 0.75);
    transition: 0.02s;
  }
`;

export const FoodItemsWrapper = styled.div`
  display: flex;
  margin: 2.2rem;
  font-family: "ZCOOL KuaiLe", cursive;
  flex-wrap: wrap;
`;

export const FoodItem = styled.div`
  border: 1px solid black;
  box-shadow: 3px 4px 5px -2px rgba(0, 0, 0, 0.75);
  padding: 2.2rem;
  flex: 1 1 30%;
  margin: 2.2rem;
  text-align: center;

  p {
    font-size: 40px;
    cursor: pointer;
  }

  h1 {
    font-size: 100px;
    cursor: pointer;
  }
`;
