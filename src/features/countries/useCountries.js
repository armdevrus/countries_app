import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectControls } from "../controls/controls_slice";
import { loadCountries, selectCountriesInfo, selectVisibleCountries } from "./countries_slice";

export const useCountries = () => {
  const dispatch = useDispatch();

  const controls = useSelector(selectControls);
  const countries = useSelector((state) =>
    selectVisibleCountries(state, controls)
  );
  const { status, error, count } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!count) {
      dispatch(loadCountries());
    }
  }, [count, dispatch]);

  return [countries, {status, error}];
};
