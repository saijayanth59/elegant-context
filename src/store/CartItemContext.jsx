import { createContext } from "react";

export const CardContext = createContext({
  items: [],
  addItem: () => {},
  updateItemQ: () => {},
});
