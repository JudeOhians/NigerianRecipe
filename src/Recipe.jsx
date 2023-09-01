import React from "react";

const Recipe = ({ data }) => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <section className="flex-grow flex flex-col">
        <div
          className="h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.image})` }}
        ></div>

        <div className="bg-white p-8 shadow-md mt-4">
          <h2 className="text-3xl font-semibold mb-4">
            The Nigerian White Soup (Ofe-Nsala)
          </h2>
          <p className="text-gray-700 left-aligned">{data.notes}</p>
        </div>

        <div className="bg-white p-8 shadow-md mt-4">
          <h2 className="text-3xl font-semibold mb-4">
            Preparation Ingredients
          </h2>
          <div className="flex">
            <div className="w-2/3 flex flex-col">
              <h4 className="left-aligned bold-text">For the Soupbase:</h4>
              <p className="text-gray-700 left-aligned">{data.soupbase1}</p>
              <p className="text-gray-700 left-aligned">{data.soupbase2}</p>
              <p className="text-gray-700 left-aligned">{data.soupbase3}</p>
              <p className="text-gray-700 left-aligned">{data.soupbase4}</p>
              <p className="text-gray-700 left-aligned">{data.soupbase5}</p>
              <p className="text-gray-700 left-aligned">{data.soupbase6}</p>
              <p className="text-gray-700 left-aligned">{data.soupbase7}</p>
              <p className="text-gray-700 left-aligned">{data.soupbase8}</p>
            </div>
            <div className="w-2/3 flex flex-col">
              <div className="w-full bg-white p-4 mb-2 shadow-md">
                <h4 className="bold-text left-aligned">For the Meat</h4>
                <p className="text-gray-700 left-aligned">{data.meat1}</p>
                <p className="text-gray-700 left-aligned">{data.meat2}</p>
                <p className="text-gray-700 left-aligned">{data.meat3}</p>
                <p className="text-gray-700 left-aligned">{data.meat4}</p>
              </div>
              <div className="w-full bg-white p-4 shadow-md">
                <h6 className="bold-text left-aligned">For Ganish:</h6>
                <p className="text-gray-700 left-aligned">{data.g1}</p>
                <p className="text-gray-700 left-aligned">{data.g2}</p>
                <p className="text-gray-700 left-aligned">{data.g3}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 shadow-md mt-4">
          <h2 className="text-3xl font-semibold mb-4">Cooking Instructions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* content for each step */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recipe;
