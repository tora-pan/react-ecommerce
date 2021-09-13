import { createSelector } from "reselect";

import memoize from "lodash.memoize";

// pull a piece of the state for ease of use (input selector).
const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  // 2 args, 1.) a collection of input selectors 2.) a function that returns the value we want
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  )
);