import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: (newCabin) => createEditCabin(newCabin),
    onSuccess: () => {
      toast.success("New Cabin Successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
      //   reset();
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}
