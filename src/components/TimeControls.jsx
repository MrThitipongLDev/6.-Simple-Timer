import { useEffect, useRef } from "react";

const TimerControls = ({ isRunning, onToggle, onReset }) => {
  const startButtonRef = useRef(null);

  useEffect(() => {
    if (startButtonRef.current) {
      startButtonRef.current.focus();
    }
  }, []);

  return (
    <>
      <button
        onClick={onToggle}
        className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        {isRunning ? "หยุด" : "เริ่ม"}
      </button>
      <button
        onClick={onReset}
        className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        เริ่มใหม่
      </button>
    </>
  );
};

export default TimerControls;
