import { useDispatch, useSelector } from 'react-redux';
import CarGalleryItem from '../CarGalleryItem/CarGalleryItem';
import { selectAdverts } from '../../redux/adverts/advertsSelectors';
import { useEffect, useState } from 'react';
import { getAllAdverts } from '../../redux/adverts/advertsOperations';
import { CarItem, Grid, GridWrap, LoadMoreStyled } from './CarGallery.styled';

function CarGallery() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAdverts());
  }, [dispatch]);

  const [visibleCount, setVisibleCount] = useState(8);

  const adverts = useSelector(selectAdverts);

  const handleLoadMore = () => {
    setVisibleCount(prevVisibleCount => prevVisibleCount + 8);
  };
  if (adverts.length !== 0) {
    return (
      <GridWrap>
        <Grid>
          {adverts.slice(0, visibleCount).map(item => (
            <CarItem key={item.id}>
              <CarGalleryItem data={item} />
            </CarItem>
          ))}
        </Grid>
        {visibleCount < adverts.length && (
          <LoadMoreStyled type="button" onClick={handleLoadMore}>
            Load more
          </LoadMoreStyled>
        )}
      </GridWrap>
    );
  }
}

export default CarGallery;
