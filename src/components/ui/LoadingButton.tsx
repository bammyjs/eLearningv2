import React from "react";

export interface LoadingButtonProps {
  isLoading?: boolean;
  disabled?: boolean;
  otherStyles?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement | HTMLFormElement>;
  type?: "button" | "submit" | "reset";
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading = false,
  disabled = false,
  otherStyles = "",
  children,
  onClick,
  type = "submit",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${
        disabled ? "pointer-events-none opacity-50 " : " hover:bg-brand-base/80"
      } whitespace-nowrap   border-0  bg-brand-base rounded-full py-3 px-4 font-bogoss text-sm  text-base-white flex items-center  gap-4  justify-center ${otherStyles} relative`}
    >
      {isLoading ? (
        <div className="bg-base-white loading loading-spinner loading-md" aria-hidden="true"></div>
      ) : (
        children
      )}
    </button>
  );
};
