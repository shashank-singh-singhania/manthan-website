"use client";
import { useLayoutEffect } from "react";
import useGlobalLoader from "@/store/useGlobalLoader";

const Loader = () => {
  const counter = useGlobalLoader((state) => state.counter);

  useLayoutEffect(() => {
    if (counter > 0) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [counter]);

  if (counter > 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200/30"></div>
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin"
            style={{ animationDuration: "1s" }}
          ></div>
          <div
            className="absolute inset-2 rounded-full border-3 border-transparent border-b-primary/60 border-l-primary/60"
            style={{ animation: "spin 1.5s linear infinite reverse" }}
          ></div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Loader;
