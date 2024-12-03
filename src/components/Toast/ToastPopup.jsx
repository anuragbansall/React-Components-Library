import React, { useEffect, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";

function ToastPopup({
  variant = "information",
  timer = "3000",
  width = "fit-content",
  children,
}) {
  const [isTimedOut, setIsTimedOut] = useState(false);

  let icon;
  if (variant === "success") {
    icon = <FaCheckCircle className="icon" />;
  } else if (variant === "warning") {
    icon = <IoWarning className="icon" />;
  } else if (variant === "error") {
    icon = <IoCloseCircle className="icon" />;
  } else {
    icon = <FaInfoCircle className="icon" />;
  }

  const toastStyles = {
    width: width,
  };

  useEffect(() => {
    setTimeout(() => {
      setIsTimedOut(true);
    }, timer);
  }, []);

  return children ? (
    <div
      className={`toast-component ${variant} ${isTimedOut ? "hide" : ""}`}
      style={toastStyles}
    >
      {icon}
      <div className="content">{children}</div>
    </div>
  ) : null;
}

export default ToastPopup;
