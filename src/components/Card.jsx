export const Card = ({
  title,
  description,
  imageUrl,
  shadow = "md",
  ...props
}) => {
  // Shadow depth map
  const shadowStyles = {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };

  return (
    <div
      className={`max-w-sm overflow-hidden bg-white border border-gray-200 rounded-xl 
                 dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 
                 hover:scale-105 ${shadowStyles[shadow]} cursor-pointer`}
      {...props}
    >
      {/* Agar image URL hai toh hi image dikhao */}
      {imageUrl && (
        <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      )}

      <div className="p-5">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};
