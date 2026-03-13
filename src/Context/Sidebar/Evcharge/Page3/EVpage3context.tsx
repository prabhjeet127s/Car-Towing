/* eslint-disable react-refresh/only-export-components */ 

import { createContext } from "react";
import type{ ReactNode } from "react";

export const EVPage3context = createContext<any>(null);

type Props = {
  children: ReactNode;
};

export default function EVpage3provider({ children }: Props) {
  const evpage3data = [
    {
      id: 1,
      title: "Where is your Vehicle?",
      type: "button",
      options: [
        { label: "Current Location", value: "current_location" },
        { label: "Type Address", value: "type_address" }
      ]
    }
  ];

  return (
    <EVPage3context.Provider value={evpage3data}>
      {children}
    </EVPage3context.Provider>
  );
}