"use client";

import { useListingData } from "@/hooks/use-db-data";
import { useEffect, useState } from "react";

export const SectionB = () => {
  const [msg, setMsg] = useState("Hello from the db!");
  const { data, isLoading } = useListingData({ msg: msg });

  useEffect(() => {
    if (isLoading) {
      return;
    }
    // setMsg(`Params set during fetching ${new Date().toISOString()}`);
  }, [isLoading]);

  return (
    <div>
      <h1>Section B (data will be loaded in here)</h1>
      <div>{data?.msg || "No Message"}</div>
      {isLoading && <p>loading...</p>}
      <div>
        <strong>Expected:</strong>
        <code className="bg-slate-700 rounded-sm px-2">{`?t="hello"`}</code> in the URL
        with any message
      </div>
    </div>
  );
};
