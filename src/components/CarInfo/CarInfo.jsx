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
import MainButton from '../Buttons/MainButton';

function CarInfo(carData) {
  const { id, city, country, altText } = carData;

  const advert = useSelector(state => selectAdvertById(state, id));
  if (!advert) {
    return <div>Авто не знайдено</div>;
  }
  const {
    year,
    make,
    model,
    type,
    description,
    img,
    rentalPrice,
    accessories,
    functionalities,
    fuelConsumption,
    engineSize,
    rentalConditions,
    mileage,
  } = advert;
  const conditionsArray = rentalConditions.split('\n');
  const [minAgeText, age] = conditionsArray[0]
    .split(': ')
    .map(item => item.trim());
  const formattedMileage = mileage.toLocaleString();
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
      </ModalTitleWrap>
      <ModalDataWrap>
        <ul>
          <ModalDataList>{city}</ModalDataList>
          <ModalDataList>{country}</ModalDataList>
          <ModalDataList>{id}</ModalDataList>
          <ModalDataList>{year}</ModalDataList>
          <ModalDataList>{type}</ModalDataList>
        </ul>
        <ul>
          <ModalDataList>Fuel Consumption: {fuelConsumption}</ModalDataList>
          <ModalDataList>Engine Size: {engineSize}</ModalDataList>
        </ul>
      </ModalDataWrap>
      <p>{description}</p>
      <p>Accessories and functionalities:</p>
      <ModalDataWrap>
        <ul>
          <ModalDataList>{accessories[0]}</ModalDataList>
          <ModalDataList>{accessories[1]}</ModalDataList>
          <ModalDataList>{accessories[2]}</ModalDataList>
        </ul>
        <ul>
          <ModalDataList>{functionalities[0]}</ModalDataList>
          <ModalDataList>{functionalities[1]}</ModalDataList>
          <ModalDataList>{functionalities[2]}</ModalDataList>{' '}
        </ul>
      </ModalDataWrap>
      <p>Rental Conditions: </p>
      <ul>
        <li>
          {minAgeText}: {age}
        </li>
        <li>{conditionsArray[1]}</li>
        <li>{conditionsArray[2]}</li>
        <li>Mileage: {formattedMileage}</li>
        <li>Price: {rentalPrice}</li>
      </ul>

      <MainButton width={168} text="Rental car" />
    </ModalWrap>
  );
}

export default CarInfo;
