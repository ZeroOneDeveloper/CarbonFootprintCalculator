import React from "react";
import { redirect } from "next/navigation";

const Page: React.FC = () => {
  return redirect("/cal/water");
};

export default Page;
