import styled from "styled-components";
import basicItemsList from "../data/basicitems-data.json";
import slugify from "slugify";

export const BasicItemSlot = ({ register, index, watch, basicItemRemove }) => {
  const value = watch(`basicItemSlotArray.${index}.selectedItem`);
  const selectedItem = basicItemsList.find(
    (basicItem) => slugify(basicItem.name) === value
  );

  return (
    <StatWrapper>
      <Stat>
        <LabelText htmlFor={`basicItemSlotArray.${index}.selectedItem`}>
          Item {`${index + 1}`}
        </LabelText>
        <ItemSelect {...register(`basicItemSlotArray.${index}.selectedItem`)}>
          <option value="">Select an item</option>
          {basicItemsList.map((basicItem) => {
            return (
              <option
                key={slugify(basicItem.name)}
                value={slugify(basicItem.name)}
              >
                {basicItem.name}
              </option>
            );
          })}
        </ItemSelect>
      </Stat>
      <Stat>
        <div>
          {selectedItem ? (
            <div>
              <p>{selectedItem.name}</p>
              <p>Category: {selectedItem.weaponCategory}</p>
              <p>Damage: {selectedItem.dmg1}</p>
              <p>Value: {selectedItem.value}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </Stat>
      <ButtonWrapper>
        <Button type="button" onClick={() => basicItemRemove(index)}>
          Delete
        </Button>
      </ButtonWrapper>
    </StatWrapper>
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

const ItemSelect = styled.select`
  width: 100%;
  overflow: hidden;
  white-space: pre;
  text-overflow: ellipsis;
`;
