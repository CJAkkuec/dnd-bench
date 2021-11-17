import { useRouter } from "next/router";
import { CharacterForm } from "../../components/CharacterForm";

const EditCharacter = ({ bench, updateCharacter }) => {
  const router = useRouter();
  const { id } = router.query;

  const handleSubmit = (data) => {
    updateCharacter(data);
    alert("Your changes have been saved.");
    window.location = "/mychar";
  };

  const characterToEdit = bench.characters.find(
    (character) => character.id === id
  );

  return (
    <CharacterForm
      onSubmit={handleSubmit}
      isEditMode
      defaultValues={characterToEdit}
    />
  );
};

export default EditCharacter;
