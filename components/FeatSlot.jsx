import styled from "styled-components";
import featList from "/data/featsinv-data.json";
import slugify from "slugify";

export const FeatSlot = ({ register, index, watch, featRemove }) => {
  const value = watch(`featSlotArray.${index}.selectedFeat`);
  const selectedFeat = featList.find((feat) => slugify(feat.name) === value);

  return (
    <>
      <StatWrapper>
        <Stat>
          <LabelText htmlFor={`featSlotArray.${index}.selectedFeat`}>
            Feature {`${index + 1}`}
          </LabelText>
          <FeatSelect {...register(`featSlotArray.${index}.selectedFeat`)}>
            <option value="">Select a Feature</option>
            {featList.map((feat) => {
              return (
                <option key={slugify(feat.name)} value={slugify(feat.name)}>
                  {feat.name}
                </option>
              );
            })}
          </FeatSelect>

          {selectedFeat ? (
            <FeatSlotContainer>
              <p>{selectedFeat.name}</p>
              <p>Type: {selectedFeat.featureType}</p>
            </FeatSlotContainer>
          ) : (
            ""
          )}
        </Stat>
        <ButtonWrapper>
          <Button type="button" onClick={() => featRemove(index)}>
            Delete
          </Button>
        </ButtonWrapper>
      </StatWrapper>
    </>
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
`;

const Button = styled.button`
  background: rgba(58, 82, 118, 0.24);
  color: black‚;
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

const FeatSelect = styled.select`
  width: 100%;
  overflow: hidden;
  white-space: pre;
  text-overflow: ellipsis;
`;

const FeatSlotContainer = styled.div`
  font-size: 0.8rem;
`;
