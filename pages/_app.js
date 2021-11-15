import "../styles/globals.css";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "../utils/useLocalStorage";

const initialBenchState = {
  characters: [],
  activeCharacterID: null,
};
function MyApp({ Component, pageProps }) {
  const [bench, setBench] = useLocalStorage("bench", initialBenchState);

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
    />
  );
}

export default MyApp;
