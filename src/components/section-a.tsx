"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export const SectionA = () => {
  const router = useRouter();

  useEffect(() => {
    // Set search param for better url understanding
    router.replace(`?post-title="im-a-good-post"`, { scroll: false });
  }, []);

  return <h1>SectionA (post title will be set in here)</h1>;
};
