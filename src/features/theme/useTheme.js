import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "./theme_slice";

export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const toggleTheme = () =>
    dispatch(setTheme(theme === "light" ? "dark" : "light"));

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  
  return [theme, toggleTheme]
};
