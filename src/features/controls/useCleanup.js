import { useDispatch } from "react-redux";
import { clearControls } from "./controls_slice";

export const useCleanup = () => {
  const dispatch = useDispatch();

  const cleanFilters = () => {
    dispatch(clearControls());
  };

  return {cleanFilters}
};
