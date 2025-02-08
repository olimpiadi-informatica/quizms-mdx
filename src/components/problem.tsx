import { type ReactNode, createContext, useContext } from "react";

type ProblemProps = {
  id: number;
  points: [number, number, number];
  children: ReactNode;
};

type ProblemContextProps = {
  id?: string | number;
  points: [number, number, number];
};

const ProblemContext = createContext<ProblemContextProps>({
  id: undefined,
  points: [0, 0, 0],
});
ProblemContext.displayName = "ProblemContext";

export function Problem({ id, points, children }: ProblemProps) {
  return (
    <ProblemContext.Provider value={{ id, points }}>
      <div className="relative">{children}</div>
      <hr className="last:hidden" />
    </ProblemContext.Provider>
  );
}

type SubProblemProps = {
  subId: number;
  children: ReactNode;
};

export function SubProblem({ subId, children }: SubProblemProps) {
  const { id, points } = useContext(ProblemContext);
  const newId = subId ? `${id}.${subId}` : `${id}`;

  return (
    <ProblemContext.Provider value={{ id: newId, points }}>
      <div className="break-inside-avoid">
        <h3>Domanda {newId}</h3>
        {children}
      </div>
    </ProblemContext.Provider>
  );
}

export function useProblem() {
  return useContext(ProblemContext);
}
