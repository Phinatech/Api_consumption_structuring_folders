import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchDictionary } from "../utils";

const Homes = () => {
  const { data } = useQuery({
    queryKey: ["dictionary"],
    queryFn: fetchDictionary,
  });

  console.log("reading", data);

  return (
    <div>
      <h2>This is our home Key</h2>
      {data?.list?.map((props: any) => (
        <p>{props.example}</p>
      ))}
      {/* {data?.list[0]} */}
    </div>
  );
};

export default Homes;
