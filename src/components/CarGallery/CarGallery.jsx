import { useDispatch, useSelector } from 'react-redux';
import CarGalleryItem from '../CarGalleryItem/CarGalleryItem';
import { selectAdverts } from '../../redux/adverts/advertsSelectors';
import { useEffect } from 'react';
import { getAllAdverts } from '../../redux/adverts/advertsOperations';
import { CarItem, Grid } from './CarGallery.styled';

function CarGallery() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAdverts());
  }, [dispatch]);

  const adverts = useSelector(selectAdverts);
  if (adverts.length !== 0) {
    return (
      <>
        <p>CarGallery</p>
        <Grid>
          {adverts.map(item => (
            <CarItem key={item.id}>
              <CarGalleryItem data={item} />
            </CarItem>
          ))}
        </Grid>
      </>
    );
  }
}

export default CarGallery;
