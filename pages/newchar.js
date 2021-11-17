import { CharacterForm } from "../components/CharacterForm";

export default function NewChar({ addCharacterToBench }) {
  const handleSubmit = (data) => {
    addCharacterToBench(data);
    alert("Your character has been created.");
    window.location = "/bench";
  };

  return <CharacterForm onSubmit={handleSubmit} />;
}
