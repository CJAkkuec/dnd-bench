import "../styles/globals.css";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "../utils/useLocalStorage";

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

  function addCharacterToBench(charObject) {
    const newCharacter = {
      id: uuidv4(),
      ...charObject,
    };
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
    <Component
      {...pageProps}
      bench={bench}
      addCharacterToBench={addCharacterToBench}
      setActiveCharacter={setActiveCharacter}
      removeCharacter={removeCharacter}
      getCurrentCharacter={getCurrentCharacter}
      characterToEdit={characterToEdit}
      updateCharacter={updateCharacter}
    />
  );
}

export default MyApp;
