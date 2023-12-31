import { useDispatch, useSelector } from 'react-redux';
import {
  selectAdverts,
  selectFavorites,
} from '../../redux/adverts/advertsSelectors';
import { useEffect, useState } from 'react';
import {
  CarItem,
  Grid,
  GridWrap,
  LoadMoreStyled,
} from '../CarGallery/CarGallery.styled';
import CarGalleryItem from '../CarGalleryItem/CarGalleryItem';
import { getAllAdverts } from '../../redux/adverts/advertsOperations';
import { NotFoundMessage } from './FavoriteCarGallery.styled';
import MainButton from '../Buttons/MainButton';
import { Link } from 'react-router-dom';

function FavoriteCarGallery() {
  const [visibleCount, setVisibleCount] = useState(8);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAdverts());
  }, [dispatch]);

  const adverts = useSelector(selectAdverts);
  const favoriteId = useSelector(selectFavorites);
  const favoriteAdverts = adverts.filter(item => favoriteId.includes(item.id));
  const handleLoadMore = () => {
    setVisibleCount(prevVisibleCount => prevVisibleCount + 8);
  };

  if (favoriteAdverts.length !== 0) {
    return (
      <GridWrap>
        <Grid>
          {favoriteAdverts.slice(0, visibleCount).map(item => (
            <CarItem key={item.id}>
              <CarGalleryItem data={item} />
            </CarItem>
          ))}
        </Grid>
        {visibleCount < favoriteAdverts.length && (
          <LoadMoreStyled type="button" onClick={handleLoadMore}>
            Load more
          </LoadMoreStyled>
        )}
      </GridWrap>
    );
  } else {
    return (
      <NotFoundMessage>
        <span>No favorite cars found.</span>
        <Link to="/catalog">
          <MainButton width={280} text="Rent a CAR" />
        </Link>
      </NotFoundMessage>
    );
  }
}

export default FavoriteCarGallery;
