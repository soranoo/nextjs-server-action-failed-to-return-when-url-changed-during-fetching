"use client";

import { useListingData } from "@/hooks/use-db-data";
import { useRouter } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const Home = () => {
  const router = useRouter();
  const [msg, setMsg] = useState("Hello from the db!");
  const { data, refetch, isFetching } = useListingData({ msg: msg });

  useEffect(() => {
    setParams();
  }, [msg]);

  const setParams = () => {
    router.replace(`?t="hello"`, { scroll: false });
  };

  const resetParams = () => {
    router.replace("?", { scroll: false });
  };

  const setParamsAfterRequest = () => {
    resetParams();
    setMsg(`Params set during fetching ${new Date().toISOString()}`);
    refetch();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{data?.msg || "No Message"}</div>
      {isFetching && <p>fetching...</p>}
      <div>
        <strong>Expected:</strong>
        <code className="bg-slate-700 rounded-sm px-2">{`?t="hello"`}</code> in the URL
        and <code className="bg-slate-700 rounded-sm px-2">{`DB: Params set during fetching {ISO 8601 Datetime String}`}</code> in the message
      </div>
      <div className="space-x-2">
        <button
          onClick={setParamsAfterRequest}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Set Params during fetching
        </button>
      </div>
      <div className="space-x-2">
        <button onClick={resetParams} className="bg-red-500 text-white px-4 py-2 rounded">
          Reset Params
        </button>
      </div>
    </main>
  );
};

const queryClient = new QueryClient();

export default function Wrapper() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
