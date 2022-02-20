import { useEffect } from "react";

export function useOnKeyDown(keys: KeyboardEvent['key'][], callback: () => void) {
  function isKeyInKeys({ key }: KeyboardEvent) {
    if (keys.includes(key)) callback();
  }

  useEffect(() => {
    document.addEventListener("keydown", isKeyInKeys);
    return () => {
      document.removeEventListener("keydown", isKeyInKeys);
    };
  });
}
