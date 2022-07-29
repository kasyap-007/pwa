import React, { useEffect, useState } from "react";
import axios from "axios";

const Mars = () => {
  const [mars, setMars] = useState([]);
  const getMarsRoverData = async () => {
    const response = await axios.get(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${process.env.REACT_APP_NASA_API_KEY}`
    );
    console.log(response.data.photos);
    setMars(response.data.photos);
  };

  useEffect(() => {
    try {
      getMarsRoverData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1>Mars</h1>

      <div className="grid grid-cols-4 gap-2">
        {mars.map((item) => (
          <div
            key="item.id"
            class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <img class="rounded-t-lg" src={item.img_src} alt="" />

            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.camera.full_name}
              </h5>

              <div className="flex flex-col gap-1">
                <p>Rover: {item.rover.name}</p>
                <p>Landing date: {item.rover.landing_date}</p>
                <p>Launch date: {item.rover.launch_date}</p>
                <p>Status: {item.rover.status}</p>
              </div>
              <p class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {item.earth_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mars;
