import { makeClassName } from "@/utils/utils";
import { ReactNode } from "react";

export default function BracketWrapper({
  children,
  size,
  nav = false,
}: Readonly<{
  children: React.ReactNode;
  size: string;
  nav?: boolean;
}>) {
  return (
    <>
      <div
        className={makeClassName(
          "text-primary",
          "font-bold",
          !nav ? "pt-8 pb-8 text-5xl" : ""
        )}
      >{`{`}</div>
      {children}
      <div
        className={makeClassName(
          "text-highlight",
          `text-${size}`,
          "font-bold",
          !nav ? "pt-16 pb-8 text-5xl" : ""
        )}
      >{`}`}</div>
    </>
  );
}
