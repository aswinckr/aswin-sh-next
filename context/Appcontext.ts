import { createContext, useContext } from "react";

const AppContext = createContext({
  prevPath: "/",
});

export default AppContext;
