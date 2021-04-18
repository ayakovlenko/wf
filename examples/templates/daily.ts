// --allow-net=api.openweathermap.org
// --allow-env=OPENWEATHERMAP_TOKEN

import { Template } from "https://raw.githubusercontent.com/ayakovlenko/wf/0.0.3/lib.ts";
import { format } from "https://deno.land/std@0.93.0/datetime/mod.ts";

const fetchTemperature = async (city: string) => {
  const appId = Deno.env.get("OPENWEATHERMAP_TOKEN");
  const weatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${appId}`,
  );
  const { main: { feels_like: feelsLike } } = await weatherData.json() as {
    main: { feels_like: number };
  };
  return feelsLike;
};

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();

Template([
  {
    text: format(d, "yyyy-MM-dd"),
    note: weekday[d.getDay()],
    items: [
      {
        text: `Weather: ${await fetchTemperature("Helsinki")}°C`,
      },
      {
        text: "TO DO",
      },
      {
        text: "DONE",
      },
    ],
  },
]);
