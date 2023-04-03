import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchDictionary } from "../utils";

const Homes = () => {
  const { data } = useQuery({
    queryKey: ["dictionary"],
    queryFn: fetchDictionary,
  });
};

export default Homes;
