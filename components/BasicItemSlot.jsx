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
            <>
              <div>
                <p>Category: {selectedItem.weaponCategory}</p>
                <p>Damage: {selectedItem.dmg1}</p>
                <p>Value: {selectedItem.value}</p>
              </div>
              <LabelText
                htmlFor={`basicItemSlotArray.${index}.selectedItemAmount`}
              >
                Amount:
              </LabelText>
              <InputNumber
                {...register(`basicItemSlotArray.${index}.selectedItemAmount`)}
                id={`basicItemSlotArray.${index}.selectedItemAmount`}
                max="1000000"
                min="1"
                name={`basicItemSlotArray.${index}.selectedItemAmount`}
                placeholder="1"
              />
            </>
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
  font-size: 0.8rem;
`;

const Stat = styled.label``;

const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(58, 82, 118, 0.1);
  padding: 0.5rem;
  width: 43vw;
  height: 100%;
  margin-bottom: 0.3rem;
  font-size: 0.8rem;
`;

const Button = styled.button`
  background: rgba(58, 82, 118, 0.24);
  color: black;
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

const InputNumber = styled.input.attrs({ type: "number" })`
  width: 2rem;
  font-size: 0.7rem;
`;
