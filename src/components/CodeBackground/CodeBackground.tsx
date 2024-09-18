"use client";
import { makeClassName } from "@/utils/utils";

export default function CodeBackground() {
  const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 3);
    switch (randomColor) {
      case 0:
        return "bg-highlight";
      case 1:
        return "bg-primary";
      case 2:
        return "bg-foreground";
      default:
        return "bg-highlight";
    }
  };

  const generateRandomWidth = () => {
    const randomWidth = Math.floor(Math.random() * 4);
    switch (randomWidth) {
      case 0:
        return "w-20";
      case 1:
        return "w-40";
      case 2:
        return "w-72";
      case 3:
        return "w-96";
      default:
        return "w-20";
    }
  };

  const renderCode = () => {
    return (
      <div className="grid grid-flow-row gap-y-4 justify-items-end">
        {Array.from({ length: 9 }).map((_, i) => {
          const rowDoubler = Math.floor(Math.random() * 2) + 1;
          return (
            <div className="flex opacity-20">
              {Array.from({ length: rowDoubler }).map((_, j) => (
                <div
                  key={`${i}-${j}`}
                  className={makeClassName(
                    generateRandomColor(),
                    generateRandomWidth(),
                    "h-12",
                    "rounded-3xl"
                  )}
                ></div>
              ))}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex h-full align-middle justify-end pt-32">
      <div className="h-full animate-fade">{renderCode()}</div>
    </div>
  );
}
