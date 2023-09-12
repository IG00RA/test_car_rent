import { useDispatch, useSelector } from 'react-redux';
import CarGalleryItem from '../CarGalleryItem/CarGalleryItem';
import {
  selectAdverts,
  selectIsLoading,
} from '../../redux/adverts/advertsSelectors';
import { useEffect, useState } from 'react';
import { getAllAdverts } from '../../redux/adverts/advertsOperations';
import { CarItem, Grid, GridWrap, LoadMoreStyled } from './CarGallery.styled';
import FilterForm from '../FilterForm/FilterForm';
import { selectFilters } from '../../redux/filters/filtersSelectors';
import Loader from '../Loader/Loader';

function CarGallery() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAdverts());
  }, [dispatch]);

  const [visibleCount, setVisibleCount] = useState(8);

  const adverts = useSelector(selectAdverts);
  const filters = useSelector(selectFilters);
  const isLoading = useSelector(selectIsLoading);

  const filteredAdverts = adverts?.filter(advert => {
    const { carBrand, price, from, to } = filters;
    if (
      (carBrand === '' || advert.make === carBrand) &&
      (price === '' ||
        parseInt(price) >= parseInt(advert.rentalPrice.replace('$', ''))) &&
      (from === '' || parseInt(from) <= advert.mileage) &&
      (to === '' || parseInt(to) >= advert.mileage)
    ) {
      return true;
    }
    return false;
  });

  const handleLoadMore = () => {
    setVisibleCount(prevVisibleCount => prevVisibleCount + 8);
  };
  if (filteredAdverts) {
    return isLoading ? (
      <Loader />
    ) : (
      <GridWrap>
        <FilterForm carData={adverts} />
        <Grid>
          {filteredAdverts.slice(0, visibleCount).map(item => (
            <CarItem key={item.id}>
              <CarGalleryItem data={item} />
            </CarItem>
          ))}
        </Grid>
        {visibleCount < filteredAdverts.length && (
          <LoadMoreStyled type="button" onClick={handleLoadMore}>
            Load more
          </LoadMoreStyled>
        )}
      </GridWrap>
    );
  }
  return (
    <GridWrap>
      <FilterForm carData={adverts} />
      <p>No matching cars found.</p>
    </GridWrap>
  );
}

export default CarGallery;
