import { useQuery } from "@tanstack/react-query";
import getCabins from "../services/api/getCabins";
import type { Cabin } from "../types/Cabin";

const useCabins = () => {
  const { data: cabins, isLoading, error } = useQuery<Cabin[], Error>({
    queryKey: ["cabins"],
    queryFn: getCabins,
    staleTime: 60 * 1000,
  });
  return { cabins, isLoading, error };
};

export default useCabins;
