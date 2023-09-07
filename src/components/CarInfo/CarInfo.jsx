import { useSelector } from 'react-redux';
import {
  ModalCarImg,
  ModalDataList,
  ModalDataWrap,
  ModalStyledModel,
  ModalTitle,
  ModalTitleWrap,
  ModalWrap,
  StyledXSVG,
} from './CarInfo.styled';
import { selectAdvertById } from '../../redux/adverts/advertsSelectors';

function CarInfo(carId) {
  const advert = useSelector(state => selectAdvertById(state, carId));
  if (!advert) {
    return <div>Авто не знайдено</div>;
  }
  const {
    id,
    year,
    make,
    model,
    type,
    rentalCompany,
    address,
    img,
    rentalPrice,
    accessories,
    functionalities,
  } = advert;
  const altText = `${make} ${model}`;
  const xIcon = (
    <StyledXSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M18 6L6 18" />
      <path d="M6 6L18 18" />
    </StyledXSVG>
  );

  return (
    <ModalWrap>
      {xIcon}
      <ModalCarImg src={img} alt={altText} />
      <ModalTitleWrap>
        <ModalTitle>
          {make}
          <ModalStyledModel> {model}</ModalStyledModel>, {year}
        </ModalTitle>
        <span>{rentalPrice}</span>
      </ModalTitleWrap>
      <ModalDataWrap>
        <ul>
          <ModalDataList>{country}</ModalDataList>
          <ModalDataList>{rentalCompany}</ModalDataList>
          <ModalDataList>{city}</ModalDataList>
          {totalLength <= 30 && <ModalDataList>Premium</ModalDataList>}
        </ul>
        <ul>
          <ModalDataList>{type}</ModalDataList>
          <ModalDataList>{make}</ModalDataList>
          <ModalDataList>{id}</ModalDataList>
          {totalLengthSecond <= 25 &&
            (accessory.length > 14 ? (
              <ModalDataList>{accessory.slice(0, 14) + ''}</ModalDataList>
            ) : (
              <ModalDataList>{accessory}</ModalDataList>
            ))}
        </ul>
      </ModalDataWrap>
    </ModalWrap>
  );
}

export default CarInfo;
