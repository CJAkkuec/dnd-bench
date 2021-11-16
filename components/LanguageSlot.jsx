import styled from "styled-components";
import languageList from "/data/languages-data.json";
import slugify from "slugify";

export const LanguageSlot = ({ register, index, watch, languageRemove }) => {
  const value = watch(`languageSlotArray.${index}.selectedLanguage`);
  const selectedLanguage = languageList.find(
    (language) => slugify(language.name) === value
  );

  return (
    <StatWrapper>
      <Stat>
        <LabelText htmlFor={`languageSlotArray.${index}.selectedLanguage`}>
          Language {`${index + 1}`}
        </LabelText>
        <LangSelect
          {...register(`languageSlotArray.${index}.selectedLanguage`)}
        >
          <option value="">Select a language</option>
          {languageList.map((language) => {
            return (
              <option
                key={slugify(language.name)}
                value={slugify(language.name)}
              >
                {language.name}
              </option>
            );
          })}
        </LangSelect>
      </Stat>
      <Stat>
        <div>
          {selectedLanguage ? (
            <div>
              <p>{selectedLanguage.name}</p>
              {selectedLanguage.type ? (
                <p>Script: {selectedLanguage.type}</p>
              ) : (
                ""
              )}
              {selectedLanguage.script ? (
                <p>Script: {selectedLanguage.script}</p>
              ) : (
                ""
              )}

              <p>Typical Speakers: {selectedLanguage.typicalSpeakers}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </Stat>
      <ButtonWrapper>
        <Button type="button" onClick={() => languageRemove(index)}>
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

const LangSelect = styled.select`
  width: 100%;
  overflow: hidden;
  white-space: pre;
  text-overflow: ellipsis;
`;
