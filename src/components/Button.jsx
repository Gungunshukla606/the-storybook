export const Button = ({
  label,
  variant = "primary",
  disabled = false,
  ...props
}) => {
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md",
    secondary:
      "bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-200 shadow-sm",
  };

  const isDisabled = disabled
    ? "opacity-50 cursor-not-allowed grayscale"
    : "active:scale-95 cursor-pointer";

  return (
    <button
      className={`px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 ${styles[variant]} ${isDisabled}`}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};
