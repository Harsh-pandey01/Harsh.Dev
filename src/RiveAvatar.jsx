import React from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

// Your Rive file info
const RIVE_FILE = "/Avatar.riv"; // put this file inside public/
const STATE_MACHINE = "State Machine 1";
const HOVER_TRIGGER = "Hover";

export default function RiveAvatar() {
  // Load Rive with the main state machine autoplayed
  const { rive, RiveComponent } = useRive({
    src: RIVE_FILE,
    stateMachines: STATE_MACHINE,
    autoplay: true, // ✅ play everything automatically
  });

  // Hook for Hover trigger
  const hoverTrigger = useStateMachineInput(rive, STATE_MACHINE, HOVER_TRIGGER);

  return (
    <div
      className="w-[250px] h-[250px] flex items-center justify-center rounded-full md:rounded-none overflow-clip"
      onMouseEnter={() => hoverTrigger?.fire()} // 🪶 play Hover animation
    >
      <RiveComponent className="w-full h-full" />
    </div>
  );
}
