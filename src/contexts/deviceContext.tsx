"use client";

import { DeviceData } from "@/typeDef/typeDef";
import React, { createContext, useContext, useEffect, useState } from "react";

export const DeviceContext = createContext({});

export const DeviceProvider = ({ children }: { children: React.ReactNode }) => {
  const [device, setDevice] = useState("mobile");
  const [deviceWidth, setDeviceWidth] = useState(() => {});
  const [deviceHeight, setdeviceHeight] = useState(() => {});

  useEffect(() => {
    setDevice(/Mobi/.test(window.navigator.userAgent) ? "mobile" : "desktop");
    setDeviceWidth(() => {
      return window.innerWidth;
    });
    setdeviceHeight(() => {
      return window.innerHeight;
    });
  }, []);

  const data: DeviceData = {
    device,
    deviceWidth,
    deviceHeight,
  };

  return (
    <DeviceContext.Provider value={data}>{children}</DeviceContext.Provider>
  );
};

export const useDevice = (): DeviceData => {
  const context = useContext(DeviceContext);
  return context;
};
