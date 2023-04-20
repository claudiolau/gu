import { useState } from "react";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselItems = [
    {
      id: "slide1",
      imgUrl:
        "https://www.soph.net/img/usr/visual/main_sophnet_gregory_23ss_pc1.jpg",
      prevItemId: "slide3",
      nextItemId: "slide2",
    },
    {
      id: "slide2",
      imgUrl: "https://www.soph.net/img/usr/visual/main_soph_23ss_pc16.jpg",
      prevItemId: "slide1",
      nextItemId: "slide3",
    },
    {
      id: "slide3",
      imgUrl: "https://www.soph.net/img/usr/visual/main_soph_23ss_pc15.jpg",
      prevItemId: "slide2",
      nextItemId: "slide1",
    },
  ];

  const handleClickPrev = () => {
    const prevSlideIndex =
      currentSlide === 0 ? carouselItems.length - 1 : currentSlide - 1;
    setCurrentSlide(prevSlideIndex);
  };

  const handleClickNext = () => {
    const nextSlideIndex = (currentSlide + 1) % carouselItems.length;
    setCurrentSlide(nextSlideIndex);
  };

  return (
    <>
      <div className="carousel w-full">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            id={item.id}
            className={`carousel-item relative w-full ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <img src={carouselItems[currentSlide].imgUrl} className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button onClick={handleClickPrev} className="btn-circle btn">
                ❮
              </button>
              <button onClick={handleClickNext} className="btn-circle btn">
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
