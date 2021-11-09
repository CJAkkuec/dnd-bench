import styled from "styled-components";
import spellList from "../data/spell-data.json";
import slugify from "slugify";

export const SpellSlot = ({ register, index, watch, spellRemove }) => {
  const value = watch(`spellSlotArray.${index}.selected-spell`);
  const selectedSpell = spellList.find(
    (spell) => slugify(spell.name) === value
  );

  return (
    <>
      <StatWrapper>
        <Stat>
          <LabelText htmlFor={`selected-spell_${index}`}>
            Spell {`${index + 1}`}
          </LabelText>
          <SpellSelect {...register(`spellSlotArray.${index}.selected-spell`)}>
            <option value="">Select a spell</option>
            {spellList.map((spell) => {
              return (
                <option key={slugify(spell.name)} value={slugify(spell.name)}>
                  {spell.name}
                </option>
              );
            })}
          </SpellSelect>

          {selectedSpell ? (
            <SpellSlotContainer>
              <p>{selectedSpell.name}</p>
              <div
                dangerouslySetInnerHTML={{ __html: selectedSpell.desc }}
              ></div>
              <p>Components: {selectedSpell.components}</p>
              <p>Range: {selectedSpell.range}</p>
            </SpellSlotContainer>
          ) : (
            ""
          )}
        </Stat>
        <ButtonWrapper>
          <Button type="button" onClick={() => spellRemove(index)}>
            Delete
          </Button>
        </ButtonWrapper>
      </StatWrapper>
    </>
  );
};

const LabelText = styled.p`
  margin: 0.2rem 0 0.2rem 0;
`;

const Stat = styled.label``;

const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 0.5rem;
  width: 43vw;
  height: 100%;
`;

const Button = styled.button`
  background: grey;
  color: white;
  border: none;
  padding: 0.3rem;
  width: auto;
  font-size: 0.8rem;
  text-align: center;
  margin-top: 0.3rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
`;

const SpellSelect = styled.select`
  width: 100%;
  overflow: hidden;
  white-space: pre;
  text-overflow: ellipsis;
`;

const SpellSlotContainer = styled.div`
  font-size: 0.8rem;
`;
