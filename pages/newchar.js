import { CharacterForm } from "../components/CharacterForm";
import { useRouter } from "next/dist/client/router";
import { useSnackbar } from "notistack";

export default function NewChar({ addCharacterToBench }) {
  const router = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (data) => {
    addCharacterToBench(data);
    enqueueSnackbar("Character created!", {
      variant: "success",
      autoHideDuration: 2000,
    });
    router.push("/bench");
  };

  return (
    <>
      <CharacterForm onSubmit={handleSubmit} />
    </>
  );
}
