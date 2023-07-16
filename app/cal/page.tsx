import React from "react";
import { redirect } from "next/navigation";

import { pages } from "./utils";

const Page = () => {
  return redirect(`/cal/${pages[0].name}`);
};

export default Page;
