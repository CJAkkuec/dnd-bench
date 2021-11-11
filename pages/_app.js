import { useState, useEffect } from "react";
import "../styles/globals.css";
import { v4 as uuidv4 } from "uuid";

function MyApp({ Component, pageProps }) {
  const [bench, setBench] = useState([]);
  useEffect(() => {
    const initialValue = localStorage.getItem("bench");
    if (initialValue === null) {
      setBench([]);
    } else {
      const initialValueResult = JSON.parse(initialValue);
      setBench(initialValueResult);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("bench", JSON.stringify(bench));
  }, [bench]);

  function addCharacterToBench(charObject) {
    const newCharacter = {
      id: uuidv4(),
      ...charObject,
    };
    setBench([...bench, newCharacter]);
  }

  return (
    <Component
      {...pageProps}
      bench={bench}
      addCharacterToBench={addCharacterToBench}
    />
  );
}

export default MyApp;

/* add character to bench thing */
