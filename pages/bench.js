import styled from "styled-components";
import { Footer } from "/components/Footer";
import Toggle from "react-toggle";
import { useEffect, useState } from "react";
import Link from "next/dist/client/link";
import { motion } from "framer-motion";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

import { useSnackbar } from "notistack";

export default function Bench({
  bench,
  setActiveCharacter,
  removeCharacter,
  checkForNewCharacter,
}) {
  const [open, setOpen] = useState(false);
  const [removeID, setRemoveID] = useState();
  const [removeName, setRemoveName] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleRemove = () => {
    removeCharacter(removeID);
    setOpen(false);
    enqueueSnackbar("Character deleted!", {
      variant: "success",
      autoHideDuration: 2000,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    checkForNewCharacter();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <MainStyle>
        <Title>Character Bench</Title>
        <Intro>
          This is the character bench. All of your characters will be stored
          here. Use the toggle to activate your character. If none of your
          characters are set as active, the current page will be empty.
        </Intro>
        <Wrapper>
          {bench.characters.length !== 0 ? (
            bench.characters.map((benchItem) => (
              <BenchDiv
                key={benchItem.id}
                animate={{
                  scale: [0.95, 1.05, 1],
                  backgroundColor: ["#95a8c4", "#FFF"],
                }}
                transition={{ type: "spring", duration: 0.5 }}
                initial={benchItem.isNew}
              >
                <Name>{benchItem.charname}</Name>
                <ToggleDiv>
                  <Toggle
                    checked={bench.activeCharacterID === benchItem.id}
                    name="characterIsActive"
                    icons={false}
                    onChange={() => {
                      setActiveCharacter(benchItem.id);
                    }}
                  />
                </ToggleDiv>
                <Link href={`/edit-character/${benchItem.id}`}>
                  <Edit>Edit</Edit>
                </Link>
                <Remove
                  onClick={() => {
                    setRemoveID(benchItem.id);
                    setRemoveName(benchItem.charname);
                    handleClickOpen();
                  }}
                >
                  Remove
                </Remove>
              </BenchDiv>
            ))
          ) : (
            <Empty>It&#39;s empty here ...</Empty>
          )}
        </Wrapper>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title" sx={{ wordWrap: "break-word" }}>
            {`Delete your character ${removeName}?`}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This action is permanent.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleRemove} autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
        <Footer />
      </MainStyle>
    </>
  );
}

const MainStyle = styled.div`
  padding: 0;
  margin: 0;
  font-family: Roboto;
  font-weight: 300;
`;

const Title = styled.div`
  margin-bottom: 1rem;
  background: rgba(58, 82, 118, 1);
  color: white;
  padding: 0.4rem;
  width: 50vw;
`;

const Intro = styled.div`
  margin: 1rem;
  padding: 0.4rem;
  font-size: 0.8rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto auto 5rem auto;
  width: 80vw;
  gap: 1rem;
`;

const BenchDiv = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 1rem;
  box-shadow: 0px 2px 7px rgba(58, 82, 118, 0.2);
`;

const Empty = styled.div`
  margin: 10vh auto auto auto;
  color: grey;
`;

const Name = styled.p`
  margin: 0;
  padding: 0;
  width: 30%;
  word-wrap: break-word;
`;

const ToggleDiv = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
`;

const Remove = styled.div`
  color: grey;
  font-size: 0.8rem;
`;

const Edit = styled.a`
  color: grey;
  font-size: 0.8rem;
`;
