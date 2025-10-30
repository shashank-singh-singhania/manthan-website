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
      <>
        <div className=" h-screen w-screen bg-white flex justify-center items-center body">
          <img
            src="https://loading.io/assets/mod/spinner/spinner/lg.gif"
            alt="loader"
          />
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default Loader;
