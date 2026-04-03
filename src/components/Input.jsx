export const Input = ({ placeholder, variant = "default", ...props }) => {
  // Variant ke hisaab se border color set karna
  const styles = {
    default: "border-gray-300 focus:border-blue-500 focus:ring-blue-200",
    error:
      "border-red-500 focus:border-red-600 focus:ring-red-100 placeholder:text-red-300",
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`px-4 py-2 border rounded-md outline-none transition-all duration-200 ring-offset-2 focus:ring-2 ${styles[variant]}`}
      {...props}
    />
  );
};
