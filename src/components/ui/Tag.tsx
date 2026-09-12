import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

export default function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-control border border-border px-3 py-1 font-mono text-label text-secondary-text">
      {children}
    </span>
  );
}
