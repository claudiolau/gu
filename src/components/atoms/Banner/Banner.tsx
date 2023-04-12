export const Banner = () => {
  return (
    <>
      <div className="w-full bg-blue-800 bg-opacity-10 text-[#4B4A46] text-center">
        <div className="flex flex-col sm:flex-row justify-between p-2 items-center">
          <div className="text-center sm:flex-grow mb-2 sm:mb-0">
            Free same day shipping
          </div>
          <div className="flex items-center space-x-4">
            <span>Track Order</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>
    </>
  );
};
