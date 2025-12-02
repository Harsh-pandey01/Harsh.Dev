import React, { useRef } from "react";
import { Outlet } from "react-router";
import Header from "./component/Header";

function App() {
  const themeToggleRef = useRef(null);
  return (
    <div>
      <div className="bg-primary min-h-screen text-text overflow-hidden">
        <Header themeToggleRef={themeToggleRef} />
        <Outlet />
        <div
          ref={themeToggleRef}
          className=" h-10 w-10 z-100 fixed  rounded-full left-full top-0 bg-[black] dark:bg-[white]  border-border"
        >
          cacas
        </div>
      </div>
    </div>
  );
}

export default App;
