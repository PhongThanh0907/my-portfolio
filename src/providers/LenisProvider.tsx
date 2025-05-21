import { ReactLenis, useLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { useRef, useEffect, type ReactNode } from "react";
import { cancelFrame, frame } from "framer-motion";

const LenisProvider = ({ children }: { children: ReactNode }) => {
  const lenis = useLenis();
  const lenisRef = useRef<LenisRef | null>(null);
  useEffect(() => {
    if (!lenis) {
      return;
    }
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }
    frame.update(update, true);
    lenis.stop();
    lenis.start();
    lenis.scrollTo(0, { immediate: true });
    return () => cancelFrame(update);
  }, [lenis]);

  return (
    <ReactLenis
      className="h-full"
      options={{
        duration: 2,
        orientation: "vertical",
        gestureOrientation: "vertical",
        touchMultiplier: 2,
        anchors: true,
        lerp: 0.1,
        autoRaf: false,
      }}
      root
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisProvider;
