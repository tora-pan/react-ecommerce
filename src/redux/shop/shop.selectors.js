import { createSelector } from "reselect";

import memoize from "lodash.memoize";

// pull a piece of the state for ease of use (input selector).
const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  // 2 args, 1.) a collection of input selectors 2.) a function that returns the value we want
  [selectShop],
  (shop) => shop.collections
);

//convert obj to array
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
);

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
