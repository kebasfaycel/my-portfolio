import { createContext, useContext, useState } from "react";
import Mysnackbar from "../components/Mysnackbar";
const snackContext = createContext(null);
export default function SnackProvider({ children }) {
  const [open, setOpen] = useState({ value: "", state: false });
  const handleClick = () => {
    setOpen({ value: "Pending...", state: true });
    setTimeout(() => {
      setOpen({ value: "Message Sent", state: true });
    }, 1500);
    setTimeout(() => {
      setOpen({ ...open, state: false });
    }, 3000);
  };
  return (
    <snackContext.Provider value={handleClick}>
      <Mysnackbar open={open} setOpen={setOpen} />
      {children}
    </snackContext.Provider>
  );
}
export const useSnack = () => {
  return useContext(snackContext);
};
