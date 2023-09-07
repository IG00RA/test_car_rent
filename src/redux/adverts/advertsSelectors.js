export const selectAdverts = state => state.adverts.adverts;
export const selectIsLoading = state => state.adverts.isLoading;
export const selectError = state => state.adverts.error;
export const selectAdvertById = (state, { carId }) => {
  const adverts = state.adverts.adverts;
  const advert = adverts.find(advert => advert.id === carId);

  return advert;
};
