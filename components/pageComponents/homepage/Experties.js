import ScrollAnimation from "@/components/Animation";
import Images from "@/components/ui/image";
import React, { useState, useCallback } from "react";

function throttle(func, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

function Experties({ 
  cardData ,
  ourExpertise ,
  heading 
}) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [cardId, setCardId] = useState();
  const [triggered, setTriggered] = useState(false);

  const onMouseMove = useCallback(
    throttle((e) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 7;
      const rotateY = (centerX - x) / 7;

      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    []
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <>
      <div className="h-full w-[50%] -top-72 right-0 expertise-bg absolute max-sm:hidden"></div>
      <div className="bg-[#010427] rounded-2xl lg:px-20 px-2 mb-[100px] max-sm:mt-16 mt-[200px]">
        <div className=" flex flex-col  w-full">
          <div className="py-[50px] grid grid-cols-1 gap-4 ">
            <h2 className="lg:!text-[40px] text-[25px] text-white heading1 font-bold">
              {ourExpertise?.title}
            </h2>
            <p className="lg:text-[16px] text-[14px] text-white">
              {ourExpertise?.description}
            </p>
          </div>
          <div className="w-full lg:gap-x-4 lg:gap-y-4 gap-x-2 gap-y-2 justify-between items-center flex">
            <div className="lg:w-[5rem] w-[5%] flex-shrink-0 h-[1px] bg-gradient-to-r from-pink-600 to-purple-800"></div>
            <div className="tracking-wider uppercase font-sans lg:text-[14px] text-[10px] font-semibold text-white">
              {heading?.EXPERTISE}
            </div>
            <div className="h-[1px] bg-gradient-to-r from-pink-600 to-purple-800 flex-1" />
          </div>
          <ScrollAnimation setTriggered={setTriggered} triggered={triggered} />
          <div
            className={`grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 lg:p-10 p-2 auto-rows-fr  ${
              triggered ? "animate fadeInLeft three" : "hidden"
            }`}
          >
            {cardData &&
              cardData?.length &&
              cardData?.map((item, index) => (
                <div
                  key={index}
                  className="card relative w-full p-5 rounded-xl bg-white transition-[all_400ms_cubic-bezier(0.03,0.98,0.52,0.99)_0s] will-change-transform"
                  onMouseMove={(e) => {
                    onMouseMove(e), setCardId(index);
                  }}
                  onMouseLeave={onMouseLeave}
                  style={
                    cardId === index
                      ? {
                          transform: `perspective(1000px) rotateX(${-rotate.x}deg) rotateY(${-rotate.y}deg) scale3d(1, 1, 1)`,
                          transformOrigin: "center", // Adjust the transform origin if necessary

                          transition:
                            "all 4000ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
                        }
                      : {}
                  }
                >
                  <div className="relative flex flex-col h-full w-full select-none  rounded-lg bg-white  text-slate-700">
                    <Images Path={item?.icon} className={"mb-2"} />
                    <span className="text-[#6e48ff] font-bold text-xl">
                      {item.title}
                    </span>
                    <ul className="mt-2 list-disc pl-5 pb-3 leading-7">
                      {item.list &&
                        item.list.length &&
                        item.list.map((items) => (
                          <li key={items.id}>{items.title}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Experties;
