"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  title: string;
  className?: string;
  sandbox?: string;
  style?: React.CSSProperties;
}

export default function LazyIframe({ src, title, className, sandbox, style }: Props) {
  const [load, setLoad] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Charge l'iframe après que la page est interactive, via requestIdleCallback
    const id = (window as Window & { requestIdleCallback?: (cb: () => void, opts?: object) => number })
      .requestIdleCallback
      ? (window as Window & { requestIdleCallback: (cb: () => void, opts?: object) => number })
          .requestIdleCallback(() => setLoad(true), { timeout: 3000 })
      : window.setTimeout(() => setLoad(true), 2000);

    return () => {
      if ((window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback) {
        (window as Window & { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(id as number);
      } else {
        clearTimeout(id as number);
      }
    };
  }, []);

  return (
    <div ref={ref} className={className} style={style}>
      {load && (
        <iframe
          src={src}
          title={title}
          className="w-full h-full border-0"
          sandbox={sandbox}
        />
      )}
    </div>
  );
}
