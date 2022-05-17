import { useLocalStorage } from "../utils/useLocalStorage";
import { useState } from "react";

export const BattleMode = ({ getCurrentCharacter }) => {
  const currentCharacter = getCurrentCharacter();
  console.log(currentCharacter);

  const [count, setCount] = useState(0);

  const [currentHP, setCurrentHP] = useState(
    parseInt(currentCharacter.hp) ?? "Loading"
  );

  function addHP() {
    const newNumber = document.getElementById("addInt").value;
    if (newNumber > 0) {
      setCurrentHP(parseInt(currentHP) + parseInt(newNumber));
    } else return null;
  }

  function subHP() {
    const newNumber = document.getElementById("addInt").value;
    if (newNumber > 0) {
      setCurrentHP(parseInt(currentHP) - parseInt(newNumber));
    } else return null;
  }

  return (
    <>
      <div>
        Battle Timer: {count}
        <button type="button" onClick={() => setCount(count + 1)}>
          Add Round
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
      <div>Current HP: {currentHP}</div>
      <input type="number" id="addInt" />
      <button type="button" onClick={addHP}>
        +
      </button>
      <button type="button" onClick={subHP}>
        -
      </button>
    </>
  );
};
