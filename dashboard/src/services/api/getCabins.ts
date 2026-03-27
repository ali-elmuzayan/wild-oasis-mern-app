import supabase from "../supabase";
import type { Cabin } from "../../types/Cabin";

export default async function getCabins(): Promise<Cabin[]> {
  const { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return cabins ?? [];
}
