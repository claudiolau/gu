export const Hero = () => {
  const carouselItems = [
    {
      id: "slide1",
      imgUrl:
        "https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg",
      prevItemId: "slide4",
      nextItemId: "slide2",
    },
    {
      id: "slide2",
      imgUrl:
        "https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
      prevItemId: "slide1",
      nextItemId: "slide3",
    },
    {
      id: "slide3",
      imgUrl:
        "https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg",
      prevItemId: "slide2",
      nextItemId: "slide4",
    },
    {
      id: "slide4",
      imgUrl: "/images/stock/photo-1665553365602-b2fb8e5d1707.jpg",
      prevItemId: "slide3",
      nextItemId: "slide1",
    },
  ];

  return (
    <>
      <div className="carousel w-full">
        {carouselItems.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className="carousel-item relative w-full"
          >
            <img src={item.imgUrl} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`#${item.prevItemId}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#${item.nextItemId}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
