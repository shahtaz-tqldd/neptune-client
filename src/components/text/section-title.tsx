import React from "react";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="flex gap-10">
      <h2 className="bg-primary py-1 px-3 rounded-lg">{title}</h2>
      <p className="max-w-2xl text-lg">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
