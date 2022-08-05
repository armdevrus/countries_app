import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

import { Button } from "../components/Button";
import { Info } from "../components/Info";
import {
  selectDetails,
} from "../store/details/details_selectors";
import {
  clearCountry,
  loadingCountryByName,
} from "../store/details/details_action";

export const Details = () => {
  const dispatch = useDispatch();
  const { currentCountry, error, status } = useSelector(selectDetails);

  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadingCountryByName(name));

    return () => {
      dispatch(clearCountry());
    }
  }, [name, dispatch]);
  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
