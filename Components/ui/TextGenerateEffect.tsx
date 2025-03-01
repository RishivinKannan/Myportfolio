"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          if (word == "Rishivin" || word == "Kannan.") {
            return (
              <motion.span
                key={word + idx}
                className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-violet-600 opacity-0"
              >
                {word}{" "}
              </motion.span>
            );
          }
          return (
            <motion.span
              key={word + idx}
              className="text-black opacity-0 dark:text-white"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="tracking-wide leading-normal text-black dark:text-white">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
