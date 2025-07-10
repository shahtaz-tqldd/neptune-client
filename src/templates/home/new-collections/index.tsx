import NavigateButton from "@/components/buttons/navigate-button";
import Button from "@/components/buttons/primary-button";
import Image from "next/image";
import React from "react";

const NewCollections = () => {
  const LEFT_IMAGE =
    "https://static.dezeen.com/uploads/2018/08/reebok-plant-trainers-design_dezeen_2364_col_4.jpg";
  const RIGHT_IMAGE =
    "https://cdnimg.dreampairs.com/dreampairshoes/image/article/20220830_88/DWUMFA2525-knit-flats-pants-work2.jpg";
  return (
    <section className="py-20 ">
      <div className="grid grid-cols-2 gap-x-16 container">
        <div className="space-y-16">
          <h4 className="text-6xl font-black max-w-lg leading-tight">
            See our brand new collections
          </h4>
          <Image
            src={LEFT_IMAGE}
            alt="Cool Sneakers"
            className="w-full h-[680px] object-cover"
            width={800}
            height={800}
          />
        </div>
        <div className="space-y-16">
          <Image
            src={RIGHT_IMAGE}
            alt="Cool Sneakers"
            className="w-full h-[680px] object-cover"
            width={800}
            height={800}
          />
          <p className="text-2xl">
            Most of our new shoes are for the open to try and enlighten your end
            of trips
          </p>
          <NavigateButton>Explore Collections</NavigateButton>
        </div>
      </div>
    </section>
  );
};

export default NewCollections;
