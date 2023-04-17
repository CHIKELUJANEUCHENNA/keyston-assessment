import React, { useState } from "react";
import Select from "react-tailwindcss-select";

function Dashboard() {
  const addedProducts = [
    {
      id: 1,
      icon: "images/jersey1.jpeg",
      productName: "PSG Stadium 20/21",
      noOfVariants: "3 variants",
      SKU: "8600844",
      productType: "Jersey",
      date: "12.11.2020",
      productStatus: "Published",
    },
    {
      id: 2,
      icon: "images/jersey2.webp",
      productName: "Los Angelos Lakers city",
      noOfVariants: "5 variants",
      SKU: "8608647",
      productType: "Jersey",
      date: "12.11.2020",
      productStatus: "Pending",
    },
    {
      id: 3,
      icon: "images/outwear1.webp",
      productName: "Miami Heat Courtside",
      noOfVariants: "4 variants",
      SKU: "8609824",
      productType: "Outwear",
      date: "10.11.2020",
      productStatus: "Published",
    },
    {
      id: 4,
      icon: "images/jersey3.jpeg",
      productName: "Liverpool FC 20/21 Staduim",
      noOfVariants: "3 variants",
      SKU: "8609474",
      productType: "Jersey",
      date: "07.11.2020",
      productStatus: "Published",
    },
  ];

  const [year, setYear] = useState(null);

  const options = [
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
  ];

  const handleChange = (value) => {
    setYear(value);
  };

  return (
    <>
      <div className="bg-slate-100 w-full p-4 rounded-xl">
        <div className="flex justify-between">
          <div class="relative">
            <input
              className="bg-gray-200 rounded-md ps-1.5 block w-full p-2 text-sm rounded-lg text-black"
              type="search"
              placeholder="Searching..."
            />
            <div class="absolute inset-y-0 right-2 flex items-center mb-2 pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex">
            <div>
              <p>jamesbrown@example.com</p>
              <p className="text-end text-gray-500 font-xs">Admin</p>
            </div>

            <img
              className="w-10 h-10 rounded-full"
              src="images/avatar.jpeg"
              alt=""
            />
          </div>
        </div>
        <div className="card rounded-md bg-white">
          <div className="flex justify-between pb-3 ">
            <p>Sales Overview</p>
            <button className="text-white px-5 py-1 rounded-lg bg-gradient-to-r from-sky-600 to-blue-600">
              + Add Offer
            </button>
          </div>
          <hr />
          <div className="flex justify-between pt-4">
            <div className="flex justify-between">
              <p className="pr-5 font-bold text-2xl">$80,630</p>
              <img
                className="pr-3 mt-2 w-10 h-5 rounded-full"
                src="images/arrow.jpeg"
                alt=""
              />
              <span className="pr-5 mt-2 text-cyan-500">+6.7%</span>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <span className="h-2 w-2 mr-1 bg-blue-500 mt-2 rounded-full"></span>
                <p className="pr-5">Incomes</p>
              </div>
              <div className="flex">
                <span className="h-2 w-2 mr-1 bg-red-500 mt-2 rounded-full"></span>
                <p className="pr-5">Expenses</p>
              </div>

              <Select
                value={year}
                onChange={handleChange}
                options={options}
                label="year"
              />
            </div>
          </div>
          <img src="images/chart.jpeg" alt="" />
        </div>
        <div className="flex justify-between py-4">
          <div className="card rounded-md bg-white text-white bg-gradient-to-r from-sky-600 to-blue-600">
            <p className="text-xs text-left">Daily Income</p>
            <div className="flex justify-between">
              <p className="text-2xl pt-3 pr-9 text-left font-bold">$ 345</p>
              <img
                className="w-13 h-11 mt-2 rounded-md"
                src="images/wave blue.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="card rounded-md bg-white">
            <p className="text-xs text-left">Daily Expenses</p>
            <div className="flex justify-between">
              <p className="text-2xl pt-3 pr-12 text-left font-bold">$ 380</p>
              <img
                className="w-13 h-12 mt-2 mr-5 rounded-full"
                src="images/wave pink.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="card rounded-md bg-white">
            <p className="text-xs text-left">Weekly Income</p>
            <div className="flex justify-between">
              <p className="text-2xl pt-3 pr-9 text-left font-bold">$ 5380</p>
              <img
                className="w-13 h-12 mt-2 rounded-full"
                src="images/wave line blue.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="card rounded-md bg-white">
            <p className="text-xs text-left">Weekly Expenses</p>
            <div className="flex justify-between">
              <p className="text-2xl pt-3 pr-12 text-left font-bold">$ 4320</p>
              <img
                className="w-13 h-12 mt-2 rounded-full"
                src="images/wave line.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full">
          <div className="card rounded-md bg-white h-full mr-3 w-[30%]">
            <p className="text-gray-500">Top selling categories</p>
            <img className="" src="images/hexagon.jpeg" alt="" />
          </div>
          <div className="card overflow-x-auto gap-x-12 flex flex-col py-2 rounded-md w-[70%] bg-white h-full">
            <p className="mb-2 text-gray-500">Latest Added Products</p>
            {addedProducts.map((item) => (
              <div key={item.id} className="flex justify-between w-full">
                <img
                  className="w-10 h-10 rounded-md mr-3"
                  src={item.icon}
                  alt="img"
                ></img>
                <div className="block pr-4">
                  <p className="whitespace-nowrap">{item.productName}</p>
                  <p className="text-left font-xs text-gray-400">
                    {item.noOfVariants}
                  </p>
                </div>
                <p className="pr-4 whitespace-nowrap">
                  <span className="text-left text-gray-500">SKU:</span>{" "}
                  {item.SKU}
                </p>
                <p className="pr-4 text-left">{item.productType}</p>
                <p className="pr-4 text-left">{item.date}</p>
                {item.productStatus === "Published" ? (
                  <button className="bg-gray-200 text-cyan-400 rounded-full mb-8 px-2">
                    {item.productStatus}
                  </button>
                ) : (
                  <button className="bg-gray-200 text-red-500 rounded-full mb-8 px-2">
                    {item.productStatus}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
