import { useEffect, useRef, useState } from "react";

interface TracingBeamProps {
  children: React.ReactNode;
  className?: string;
}

export function TracingBeam({ children, className = "" }: TracingBeamProps) {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [beamPosition, setBeamPosition] = useState(50);
  const [beamEnd, setBeamEnd] = useState(50);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [lastScrollTime, setLastScrollTime] = useState(Date.now());

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const start = rect.top + scrollY - windowHeight;
      const end = rect.top + scrollY + rect.height;
      const current = Math.max(0, Math.min(1, (scrollY - start) / (end - start)));

      setScrollProgress(current);

      const currentTime = Date.now();

      setLastScrollY(scrollY);
      setLastScrollTime(currentTime);

      const targetBeamPosition = 50 + (svgHeight - 100) * current;
      setBeamPosition((prev) => prev + (targetBeamPosition - prev) * 0.1);

      const targetBeamEnd = 50 + (svgHeight - 250) * current;
      setBeamEnd((prev) => prev + (targetBeamEnd - prev) * 0.05);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [svgHeight, lastScrollY, lastScrollTime]);

  return (
    <div ref={ref} className={`relative mx-auto h-full w-full max-w-6xl ${className}`}>
      <div className="absolute top-3 -left-4 md:-left-20">
        <div
          className={`ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm ${
            scrollProgress > 0
              ? "border-primary shadow-none"
              : "border-muted-foreground shadow-[rgba(0,0,0,0.24)_0px_3px_8px]"
          }`}
        >
          <div
            className={`h-2 w-2 rounded-full border ${
              scrollProgress > 0 ? "border-primary bg-primary" : "border-muted-foreground bg-muted-foreground"
            }`}
          />
        </div>
        <svg viewBox={`0 0 20 ${svgHeight}`} width="20" height={svgHeight} className="ml-4 block" aria-hidden="true">
          <path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
          ></path>
          <path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
          ></path>
          <defs>
            <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={beamPosition} y2={beamEnd}>
              <stop stopColor="hsl(var(--primary))" stopOpacity="0"></stop>
              <stop stopColor="hsl(var(--primary))"></stop>
              <stop offset="0.325" stopColor="hsl(var(--primary))"></stop>
              <stop offset="1" stopColor="hsl(var(--primary))" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </div>
  );
}
