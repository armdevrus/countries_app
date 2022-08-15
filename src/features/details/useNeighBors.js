import { loadingNeighborsByBorder, selectNeighbors } from "./details_slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useNeighbors = (borders) => {
  const dispatch = useDispatch();
  const neighbors = useSelector(selectNeighbors);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadingNeighborsByBorder(borders));
    }
  }, [borders, dispatch]);

  return neighbors
};
