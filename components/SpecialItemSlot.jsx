import styled from "styled-components";
import specialItemsList from "../data/items-data.json";
import slugify from "slugify";

export const SpecialItemSlot = ({
  register,
  index,
  watch,
  basicItemRemove,
}) => {
  const value = watch(`specialItemSlotArray.${index}.selectedItem`);
  const selectedItem = specialItemsList.item.find(
    (specialItem) => slugify(specialItem.name) === value
  );

  return (
    <StatWrapper>
      <Stat>
        <LabelText htmlFor={`specialItemSlotArray.${index}.selectedItem`}>
          Special Item {`${index + 1}`}
        </LabelText>
        <ItemSelect {...register(`specialItemSlotArray.${index}.selectedItem`)}>
          <option value="">Select an item</option>
          {specialItemsList.item.map((specialItem) => {
            return (
              <option
                key={slugify(specialItem.name)}
                value={slugify(specialItem.name)}
              >
                {specialItem.name}
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
                <p>{selectedItem.name}</p>
                <p>Category: {selectedItem.type}</p>
                <p>Value: {selectedItem.value}</p>
                {selectedItem.entries !== undefined
                  ? selectedItem.entries.map((entry) => <div>{entry}</div>)
                  : ""}
              </div>
              <LabelText
                htmlFor={`specialItemSlotArray.${index}.selectedItemAmount`}
              >
                Amount:
              </LabelText>
              <InputNumber
                {...register(
                  `specialItemSlotArray.${index}.selectedItemAmount`
                )}
                id={`specialItemSlotArray.${index}.selectedItemAmount`}
                max="1000000"
                min="1"
                name={`specialItemSlotArray.${index}.selectedItemAmount`}
                placeholder="1"
              />
            </>
          ) : (
            ""
          )}
        </div>
      </Stat>
      <ButtonWrapper>
        <Button type="button" onClick={() => specialItemRemove(index)}>
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
