import styled from "styled-components";
import React, { useState } from "react";

export const PartyMemberForm = ({ handleSubmit, initialValue }) => {
  const [values, setValues] = useState(
    initialValue || {
      id: "",
      charName: "",
      charMaxHP: "",
      charCurrentHP: "",
      charInitiative: "",
      activeEffect: "",
      forRounds: "",
    }
  );

  return (
    <StyledForm>
      <label htmlFor="charName">Name</label>
      <input
        type="text"
        id="charName"
        name="charName"
        value={values.charName}
        onChange={(event) => {
          setValues({
            ...values,
            charName: event.target.value,
          });
        }}
      />
      <label htmlFor="charMaxHP">Max HP</label>
      <input
        type="number"
        id="charMaxHP"
        name="charMaxHP"
        value={values.charMaxHP}
        min="0"
        onChange={(event) => {
          setValues({
            ...values,
            charMaxHP: event.target.value,
          });
        }}
      />
      <label htmlFor="charCurrentHP">Current HP</label>
      <input
        type="number"
        id="charCurrentHP"
        name="charCurrentHP"
        value={values.charCurrentHP}
        min="0"
        onChange={(event) => {
          setValues({
            ...values,
            charCurrentHP: event.target.value,
          });
        }}
      />
      <label htmlFor="charInitiative">Initiative</label>
      <input
        type="number"
        id="charInitiative"
        name="charInitiative"
        value={values.charInitiative}
        min="0"
        onChange={(event) => {
          setValues({
            ...values,
            charInitiative: event.target.value,
          });
        }}
      />
      <label htmlFor="activeEffect">Effect</label>
      <input
        type="text"
        id="activeEffect"
        name="activeEffect"
        value={values.activeEffect}
        onChange={(event) => {
          setValues({
            ...values,
            activeEffect: event.target.value,
          });
        }}
      />
      <label htmlFor="forRounds">Number of Rounds</label>
      <input
        type="number"
        id="forRounds"
        name="forRounds"
        value={values.forRounds}
        min="0"
        onChange={(event) => {
          setValues({
            ...values,
            forRounds: event.target.value,
          });
        }}
      />

      <button
        type="submit"
        onClick={(event) => {
          handleSubmit(event, values);
        }}
      >
        Save
      </button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
`;
