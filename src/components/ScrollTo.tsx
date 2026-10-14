"use client";

import type { MouseEvent, ReactNode } from "react";

type Props = {
  targetId: string;
  className?: string;
  children: ReactNode;
};

export function ScrollTo({ targetId, className, children }: Props) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const el = document.getElementById(targetId);
    if (!el) return;
    event.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${targetId}`);
  }

  return (
    <a href={`#${targetId}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
