export const Banner = () => {
  return (
    <>
      <div className="flex flex-col bg-blue-800 bg-opacity-10 p-2 text-[#4B4A46] sm:flex-row sm:items-center">
        <div className="sm:w-1/4"></div>
        <div className="mb-2 text-center sm:mb-0 sm:flex-grow">
          Free same day shipping
        </div>
        <div className="flex items-center justify-center space-x-4 sm:w-1/4 sm:justify-end">
          <span>Track Order</span>
          <span>Contact Us</span>
        </div>
      </div>
    </>
  );
};
