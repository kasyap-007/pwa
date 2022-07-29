import React, { useState } from "react";
import axios from "axios";

type Props = {};
type ApodProps = {
  copyright: string;
  date: string;
  explanation: string;
  url: string;
  title: string;
  hdurl: string;
  media_type: string;
  service_version: string;
};

type getApodResponse = {
  data: ApodProps;
};

const Apod = (props: Props) => {
  const [apod, setApod] = useState<ApodProps>({
    copyright: "Jeff Dai",
    date: "2022-07-28",
    explanation:
      "An ancient tree seems to reach out and touch Earth's North Celestial Pole in this well-planned night skyscape. Consecutive exposures for the timelapse composition were recorded with a camera fixed to a tripod in the Yiwu Desert Poplar Forests in northwest Xinjiang, China. The graceful star trail arcs reflect Earth's daily rotation around its axis. By extension, the axis of rotation leads to the center of the concentric arcs in the night sky. Known as the North Star, bright star Polaris is a friend to northern hemisphere night sky photographers and celestial navigators alike. That's because Polaris lies very close to the North Celestial Pole on the sky. Of course it can be found at the tip of an outstretched barren branch in a postcard from a rotating planet.",
    hdurl: "https://apod.nasa.gov/apod/image/2207/AncientTreeNCP_Dai.jpg",
    media_type: "image",
    service_version: "v1",
    title: "North Celestial Tree",
    url: "https://apod.nasa.gov/apod/image/2207/AncientTreeNCP_Dai1024.jpg",
  });

  const getApod = async () => {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`
    );
    setApod(response.data);
  };

  React.useEffect(() => {
    try {
      getApod();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-slate-900 rounded-lg p-5">
      <img
        src={apod.hdurl}
        className="h-72 w-[500px] rounded-lg object-cover"
        alt={apod.title}
      />
      <p className="text-2xl ">{apod.title}</p>
      <p className="text-lg text-center text-gray-200">{apod.explanation}</p>
    </div>
  );
};

export default Apod;
