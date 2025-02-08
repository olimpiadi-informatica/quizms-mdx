import { useEffect, useRef } from "react";

import katex from "katex";

import "katex/dist/katex.css";
import "./equation.css";

type MathProps = {
  display?: boolean;
  children: string;
};

export function Equation({ display, children }: MathProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      katex.render(children, ref.current, { displayMode: display });
    }
  }, [children, display]);

  return <span ref={ref} />;
}
