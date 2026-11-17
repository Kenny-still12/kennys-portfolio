"use client";

import { useEffect, useState } from "react";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

type DecryptedTextProps = {
  text: string;
  // Milliseconds between each revealed character.
  speed?: number;
};

// Characters before `revealed` are final; the rest are random letters. Spaces and punctuation stay put.
function scramble(text: string, revealed: number) {
  return [...text]
    .map((char, index) =>
      index < revealed || !/\w/.test(char)
        ? char
        : CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)],
    )
    .join("");
}

export function DecryptedText({ text, speed = 30 }: DecryptedTextProps) {
  // Starts as the real text so the server render and no-JS visitors see it.
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let revealed = 0;
    const id = window.setInterval(() => {
      setDisplay(scramble(text, revealed));
      revealed += 1;
      if (revealed > text.length) window.clearInterval(id);
    }, speed);

    return () => {
      window.clearInterval(id);
      setDisplay(text);
    };
  }, [text, speed]);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{display}</span>
    </>
  );
}
