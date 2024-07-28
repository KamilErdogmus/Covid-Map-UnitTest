import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl = "https://ismailarilik.com/react-covid-maps/geo.json";

const Main = () => {
  const [geo, setGeo] = useState();
  return (
    <div className="bg-zinc-800 text-white flex flex-col justify-center items-center h-[calc(100vh-80px)] overflow-hidden wrapper">
      <h1 className={`${!geo ? "opacity-0" : "opacity-100"}`}>
        Country: <span>{geo?.properties?.name}</span>
      </h1>
      <ComposableMap
        height={900}
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 300,
        }}
      >
        <ZoomableGroup>
          <Sphere stroke="gray" strokeWidth={0.6} />
          <Graticule stroke="gray" strokeWidth={0.3} />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Link key={geo.rsmKey} to={`/detail?code=${geo.id}`}>
                  <Geography
                    onMouseEnter={() => setGeo(geo)}
                    onMouseLeave={() => setGeo(null)}
                    stroke="#969696"
                    geography={geo}
                    style={{
                      default: {
                        fill: "#EEE",
                      },
                      hover: {
                        fill: "rgb(54 197 95)",
                      },
                    }}
                  />
                </Link>
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default Main;
