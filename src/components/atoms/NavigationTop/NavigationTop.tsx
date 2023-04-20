import { useRef } from "react";

export const NavigationTop = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleOnClick = () => {
    if (buttonRef.current) {
      buttonRef.current.classList.add("animate-bounce");
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(
        () => buttonRef.current?.classList.remove("animate-bounce"),
        1000
      );
    }
  };

  return (
    <button
      ref={buttonRef}
      className="w-1/3 border border-black bg-[#FFFFFF] p-2 text-black"
      onClick={handleOnClick}
    >
      Back to Top
    </button>
  );
};
