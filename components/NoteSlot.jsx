import styled from "styled-components";
import slugify from "slugify";

export const NoteSlot = ({ register, index, watch, noteRemove }) => {
  const value = watch(`notesArray.${index}.added-note`);

  return (
    <StatWrapper>
      <Stat>
        <LabelText htmlFor={`notesArray.${index}.added-note`}>
          Note {`${index + 1}`}
        </LabelText>
        <NoteInput
          {...register(`notesArray.${index}.added-note`)}
          defaultValue="Add a note"
        ></NoteInput>
        <Button type="button" onClick={() => noteRemove(index)}>
          Delete
        </Button>
      </Stat>
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

const NoteInput = styled.textarea`
  width: 100%;
  font-family: Roboto;
`;
