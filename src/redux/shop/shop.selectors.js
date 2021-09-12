import { createSelector } from "reselect";

import memoize from "lodash.memoize";

// pull a piece of the state for ease of use (input selector).
const selectShop = (state) => state.shop;

//map to connect id to url (int to string)
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

export const selectCollections = createSelector(
  // 2 args, 1.) a collection of input selectors 2.) a function that returns the value we want
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
);
