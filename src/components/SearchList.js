import React from "react";

import styled from "styled-components";

const SearchRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 10px;
  &:hover {
    background-color: rgba(#3498db, 0.5);
  }
`;

const SearchRowHeader = styled(SearchRow)`
  margin-bottom: 20px;
  font-weight: bold;
`;

const SearchRowItem = styled.span`
  display: block;
  flex-basis: 48%;
  font-size: 1rem;
  text-align: left;
`;

const SearchRowHeaderItem = styled(SearchRowItem)`
  text-align: center;
`;

const SearchList = ({ streetsList }) => {
  return (
    <div>
      <SearchRowHeader>
        <SearchRowHeaderItem>Старое название</SearchRowHeaderItem>
        <SearchRowHeaderItem>Новое название</SearchRowHeaderItem>
      </SearchRowHeader>
      {streetsList.map((street, id) => (
        <SearchRow key={id}>
          <SearchRowItem>{street.old}</SearchRowItem>
          <SearchRowItem>{street.new}</SearchRowItem>
        </SearchRow>
      ))}
    </div>
  );
};

export default SearchList;
