import { useState } from "react";
import { PartyMemberForm } from "./PartyMemberForm";
import { PartyMemberSlot } from "./PartyMemberSlot";
import styled from "styled-components";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export const PartyMemberContainer = ({
  partyMember,
  editPartyMember,
  removePartyMember,
  handleClickOpen,
  handleClose,
  open,
}) => {
  const [editMode, setEditMode] = useState(false);

  function updatePartyMember(event, updatedCharacter) {
    event.preventDefault();
    editPartyMember(updatedCharacter);
    setEditMode(false);
  }

  function handleRemove(partyMember) {
    removePartyMember(partyMember);
  }

  return (
    <>
      <SlotWrapper>
        {editMode === false ? (
          <>
            <PartyMemberSlot partyMember={partyMember} />
            <ButtonDiv>
              <StyledButton
                onClick={() => {
                  setEditMode(true);
                }}
              >
                Edit
              </StyledButton>
              <StyledButton
                onClick={() => {
                  handleClickOpen();
                }}
              >
                Delete
              </StyledButton>
            </ButtonDiv>
          </>
        ) : (
          <>
            <PartyMemberForm
              initialValue={partyMember}
              handleSubmit={updatePartyMember}
            />
          </>
        )}
      </SlotWrapper>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ wordWrap: "break-word" }}>
          {`Delete ${partyMember.charName} from your party?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action is permanent.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleRemove(partyMember);
            }}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const SlotWrapper = styled.div`
  flex-grow: 0;
  height: 100%;
  width: 47%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: rgba(58, 82, 118, 0.24);

  & p {
    margin: 0;
  }
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
`;

const StyledButton = styled.button`
  background: rgba(58, 82, 118, 1);
  color: white;
  border: none;
  padding: 0.4rem;
  width: auto;
  font-size: 0.8rem;
  text-align: center;
  cursor: pointer;
`;
