export const Banner = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center bg-blue-800 bg-opacity-10 text-[#4B4A46] p-2">
        <div className="sm:w-1/4"></div>
        <div className="text-center sm:flex-grow mb-2 sm:mb-0">
          Free same day shipping
        </div>
        <div className="flex items-center justify-center sm:justify-end space-x-4 sm:w-1/4">
          <span>Track Order</span>
          <span>Contact Us</span>
        </div>
      </div>
    </>
  );
};
