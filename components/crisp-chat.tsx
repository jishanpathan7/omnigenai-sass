"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("712d374f-289a-46e2-b3a9-e67358823d3a");
  }, []);

  return null;
};
