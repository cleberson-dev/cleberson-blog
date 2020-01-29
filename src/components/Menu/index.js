import React from "react";
import { getCategoryLocale } from "../../utils/locales/pt-br";

import { 
  MenuContainer, 
  FilterSelectorContainer, FilterSelectorLabel, FilterSelectorSelect,
  PostCounterContainer, PostCounterCount, PostCounterLegend
} from "./styles";

export default ({ 
  options, 
  onChangeHandler = (e) => e.preventDefault(), 
  postsCount 
}) => (
  <MenuContainer>
    <FilterSelectorContainer>
      <FilterSelectorLabel>Filtrar</FilterSelectorLabel>
        { options ? (
          <FilterSelectorSelect onChange={onChangeHandler}>
            {options.map(optionText => <option value={optionText}>{getCategoryLocale(optionText)}</option>)}
          </FilterSelectorSelect>
        ) : ''}
    </FilterSelectorContainer>

    <PostCounterContainer>
      <PostCounterCount>{ postsCount }</PostCounterCount>
      <PostCounterLegend>artigos</PostCounterLegend>
    </PostCounterContainer>
  </MenuContainer>
);