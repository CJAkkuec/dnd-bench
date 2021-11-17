import styled from "styled-components";
import slugify from "slugify";

export const NoteSlot = ({ register, index, noteRemove }) => {
  return (
    <StatWrapper>
      <Stat>
        <LabelText htmlFor={`notesArray.${index}.addedNote`}>
          Note {`${index + 1}`}
        </LabelText>
        <NoteInput
          {...register(`notesArray.${index}.addedNote`)}
          placeholder="Add a note"
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

const NoteInput = styled.textarea`
  width: 100%;
  font-family: Roboto;
`;
