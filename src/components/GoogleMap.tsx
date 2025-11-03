import { AdvancedMarker, Map, Pin } from "@vis.gl/react-google-maps";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LaunchIcon from "@mui/icons-material/Launch";
import React from "react";

interface GoogleMapProps {
  heightClass?: string;
  center?: { lat: number; lng: number };
  showTitle?: boolean;
}

export const GoogleMap: React.FC<GoogleMapProps> = ({
  heightClass = "h-[380px] md:h-[420px]",
  center = { lat: 52.28240616061442, lng: 5.154936510761147 },
  showTitle = true,
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur-sm shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 px-5 pt-5 pb-4">
          <div className="flex flex-col gap-1">
            {showTitle && (
              <h3
                id="map"
                className="text-2xl sm:text-3xl font-light tracking-tight"
              >
                Onze locatie
              </h3>
            )}
            <p className="text-base text-gray-300 flex items-center gap-2">
              <LocationOnIcon className="w-4 h-4 text-primary-400" />
              <span>Binnenhof 62b, 1412 LC Naarden</span>
            </p>
          </div>
          <a
            href="https://www.google.com/maps/dir//Binnenhof+62b,+1412+LC+Naarden/@52.2824068,5.1497848,16z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47c61371b50eae5f:0x22c58b9db9c59b96!2m2!1d5.1549347!2d52.2824003!3e0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open route naar Binnenhof 62b in Google Maps (nieuw venster)"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50 rounded px-1 py-0.5 -my-0.5 hover:underline underline-offset-4 decoration-primary-500/40 transition"
          >
            <span>Route plannen</span>
            <LaunchIcon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition" />
          </a>
        </div>

        <div className={`${heightClass} flex-1`}>
          <Map
            className="w-full h-full"
            defaultZoom={13}
            defaultCenter={center}
            scrollwheel={false}
            gestureHandling="greedy"
            disableDefaultUI={false}
            mapId="casparFinance"
          >
            <AdvancedMarker position={center}>
              <Pin glyphColor="#000" />
            </AdvancedMarker>
          </Map>
        </div>
      </div>
    </div>
  );
};
