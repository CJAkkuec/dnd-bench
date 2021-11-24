import "../styles/globals.css";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "../utils/useLocalStorage";
import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";

const initialBenchState = {
  characters: [],
  activeCharacterID: null,
};

const initialEditState = {};

function MyApp({ Component, pageProps }) {
  const [bench, setBench] = useLocalStorage("bench", initialBenchState);
  const [characterToEdit, setCharacterToEdit] = useLocalStorage(
    "toEdit",
    initialEditState
  );

  const checkForNewCharacter = () => {
    const updatedBench = bench.characters.map((character) => {
      if (character.isNew) {
        return { ...character, isNew: false };
      }
      return character;
    });
    setBench({
      ...bench,
      characters: updatedBench,
    });
  };

  function addCharacterToBench(charObject) {
    const { languageSlotArray } = charObject;
    const languages = new Set();
    languageSlotArray.forEach((language) => {
      languages.add(language.selectedLanguage);
    });

    const newLanguageSlotArray = [...languages];

    const languageObject = newLanguageSlotArray.map((language) => {
      return { selectedLanguage: language };
    });

    console.log(charObject);

    const newCharacter = {
      id: uuidv4(),
      isNew: true,
      ...charObject,
      languageSlotArray: languageObject,
    };

    console.log(newCharacter);
    setBench({
      ...bench,
      characters: [...bench.characters, newCharacter],
    });
  }

  const updateCharacter = (charObject) => {
    const characterIndex = bench.characters.findIndex(
      (character) => charObject.id === character.id
    );
    const updatedCharacters = [...bench.characters];
    updatedCharacters[characterIndex] = charObject;

    setBench({
      ...bench,
      characters: updatedCharacters,
    });
  };

  const getCurrentCharacter = () =>
    bench.characters.find(({ id }) => id === bench.activeCharacterID);

  function removeCharacter(id) {
    const updatedBench = bench.characters.filter(
      (character) => character.id !== id
    );
    setBench({ ...bench, characters: updatedBench });
  }

  const setActiveCharacter = (activeCharacterID) => {
    setBench({ ...bench, activeCharacterID: activeCharacterID });
  };

  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      TransitionComponent={Slide}
    >
      <Component
        {...pageProps}
        bench={bench}
        addCharacterToBench={addCharacterToBench}
        setActiveCharacter={setActiveCharacter}
        removeCharacter={removeCharacter}
        getCurrentCharacter={getCurrentCharacter}
        characterToEdit={characterToEdit}
        updateCharacter={updateCharacter}
        checkForNewCharacter={checkForNewCharacter}
      />
    </SnackbarProvider>
  );
}

export default MyApp;
