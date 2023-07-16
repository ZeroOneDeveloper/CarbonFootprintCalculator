"use client";

import React from "react";

import { pages } from "../utils";

const Page: React.FC<{
  params: {
    id: string;
  };
}> = ({ params }) => {
  return pages.map((page, k) => {
    if (page.route === params.id) {
      return (
        <div key={k} style={{ display: "flex", justifyContent: "center" }}>
          <page.children />
        </div>
      );
    }
  });
};

export default Page;
