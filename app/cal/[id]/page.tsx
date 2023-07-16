import React from "react";

import { pages } from "../utils";

const Page: React.FC<{
  params: {
    id: string;
  };
}> = ({ params }) => {
  return pages.map((page, k) => {
    if (page.route === params.id) {
      return <page.children key={k} />;
    }
  });
};

export default Page;
