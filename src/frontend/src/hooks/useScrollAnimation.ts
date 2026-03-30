import { useEffect, useRef } from "react";

export function useScrollAnimation<T extends HTMLElement>(
  className = "reveal",
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add(className);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [className]);

  return ref;
}

export function useScrollAnimateChildren(stagger = 100) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    for (const [i, child] of children.entries()) {
      child.style.opacity = "0";
      child.style.transform = "translateY(24px)";
      child.style.transition = `opacity 0.5s ease ${i * stagger}ms, transform 0.5s ease ${i * stagger}ms`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          for (const child of children) {
            child.style.opacity = "1";
            child.style.transform = "translateY(0)";
          }
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [stagger]);

  return ref;
}
