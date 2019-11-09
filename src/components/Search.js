import React, { useState } from "react";

import styled, { css } from "styled-components";

import streets from "../streets.json";
import SearchList from "./SearchList.js";

const SearchWrapper = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
`;

const InputWrapper = styled.form`
  padding: 20px 20px;
  display: flex;
  justify-content: center;
`;

const InputControl = styled.input`
  display: block;
  width: 100%;
  max-width: 470px;
  height: 42px;
  padding: 8px 12px;
  font-size: 1rem;
  font-weight: 300;
  color: #34495e;
  border: 2px solid #bdc3c7;
  border-radius: 6px;
  transition: border-color 0.25s linear, color 0.25s linear,
    background-color 0.25s linear;
  appearance: none;

  &:focus {
    border-color: #1abc9c;
    outline: 0;
    box-shadow: none;
  }

  ${props =>
    props.error &&
    css`
      color: #e74c3c;
      border-color: #e74c3c;
      &:focus {
        border-color: #e74c3c;
      }
    `}
`;

const Search = () => {
  const [searchString, setSearchValue] = useState("");

  const handleChange = e => {
    setSearchValue(e.target.value);
  };

  let streetsList = streets;

  const cleanedSearchString = searchString.trim().toLowerCase();

  if (cleanedSearchString.length > 0) {
    streetsList = streets.filter(
      s =>
        s.old.toLowerCase().match(cleanedSearchString) ||
        s.new.toLowerCase().match(cleanedSearchString)
    );
  }

  return (
    <SearchWrapper>
      <InputWrapper>
        <InputControl
          error={!streetsList.length}
          value={searchString}
          onChange={handleChange}
          type="text"
          placeholder="Введите старое или новое название улицы"
          autoFocus
        />
      </InputWrapper>
      <SearchList streetsList={streetsList} />
    </SearchWrapper>
  );
};

export default Search;
