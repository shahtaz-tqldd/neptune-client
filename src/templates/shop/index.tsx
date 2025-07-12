import React from "react";
import Filter from "./filter";
import Header from "./header";
import Display from "./display";

const ShopPage = () => {
  return (
    <main className="flex gap-8 container pt-28 pb-20">
      <aside className="max-w-[320px] w-full">
        <Filter />
      </aside>
      <section className="flex-1 space-y-8">
        <Header />
        <Display />
      </section>
    </main>
  );
};

export default ShopPage;
