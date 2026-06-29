import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function CountUp({
  to,
  duration = 2,
  prefix = "",
  suffix = "",
  decimals = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, to, {
      duration,
      onUpdate(value) {
        setCount(value);
      },
    });

    return () => controls.stop();
  }, [isInView, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}
