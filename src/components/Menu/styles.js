import styled from "styled-components";


export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 20px;
`;





// Filter Selector
export const FilterSelectorContainer = styled.div`

`;

export const FilterSelectorLabel = styled.label`
  color: #B1B1B1;
  font-size: 0.8rem;
  text-transform: lowercase;
`;

export const FilterSelectorSelect = styled.select`
  display: block;
  border: none;
  text-transform: uppercase;
  font-family: 'Roboto Slab', serif;
  background-color: transparent;

  &:focus {
    outline-color: ${props => props.theme.colors.primary};
  }
`;





// Post Counter
export const PostCounterContainer = styled.div`
  font-family: 'Roboto Slab', serif;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const PostCounterCount = styled.div`
  font-size: 1.1rem;
  font-weight: 900;
`;

export const PostCounterLegend = styled.div`
  font-size: 0.8rem;
`;