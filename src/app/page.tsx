"use client";

import { useListingData } from "@/hooks/use-db-data";
import { useRouter } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { SectionB } from "@/components/section-b";
import { SectionA } from "@/components/section-a";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SectionA />
      <SectionB />
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
