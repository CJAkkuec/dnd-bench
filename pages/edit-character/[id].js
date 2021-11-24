import { useRouter } from "next/router";
import { CharacterForm } from "../../components/CharacterForm";
import { useSnackbar } from "notistack";

const EditCharacter = ({ bench, updateCharacter }) => {
  const router = useRouter();
  const { id } = router.query;

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (data) => {
    updateCharacter(data);
    enqueueSnackbar("Changes saved!", {
      variant: "success",
      autoHideDuration: 2000,
    });
    router.push("/mychar");
  };

  const characterToEdit = bench.characters.find(
    (character) => character.id === id
  );

  if (!characterToEdit) return null;

  return (
    <>
      <CharacterForm
        onSubmit={handleSubmit}
        isEditMode
        defaultValues={characterToEdit}
      />
    </>
  );
};

export default EditCharacter;
