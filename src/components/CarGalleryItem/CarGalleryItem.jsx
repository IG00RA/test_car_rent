import { useState } from 'react';
import MainButton from '../Buttons/MainButton';
import {
  CarImg,
  DataList,
  DataWrap,
  StyledModel,
  StyledSVG,
  Title,
  TitleWrap,
} from './CarGalleryItem.styled';
import ModalContainer from '../Modal/ModalContainer';
import CarInfo from '../CarInfo/CarInfo';

function CarGalleryItem({ data }) {
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
  } = data;
  const altText = `${make} ${model}`;
  const addressWords = address.split(' ');
  const city = addressWords[addressWords.length - 2].replace(',', '');
  const country = addressWords[addressWords.length - 1];
  const svgIcon = (
    <StyledSVG
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path d="M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z" />
    </StyledSVG>
  );

  function getRandomElement(...arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  const accessory = getRandomElement(...accessories, ...functionalities)
    .split(' ')
    .slice(0, 2)
    .join(' ');

  const totalLength = country.length + rentalCompany.length + city.length;

  const totalLengthSecond = type.length + make.length + id.toString().length;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <>
      {svgIcon}
      <CarImg src={img} alt={altText} />
      <TitleWrap>
        <Title>
          {make}
          <StyledModel> {model}</StyledModel>, {year}
        </Title>
        <span>{rentalPrice}</span>
      </TitleWrap>
      <DataWrap>
        <ul>
          <DataList>{country}</DataList>
          <DataList>{rentalCompany}</DataList>
          <DataList>{city}</DataList>
          {totalLength <= 30 && <DataList>Premium</DataList>}
        </ul>
        <ul>
          <DataList>{type}</DataList>
          <DataList>{make}</DataList>
          <DataList>{id}</DataList>
          {totalLengthSecond <= 25 &&
            (accessory.length > 14 ? (
              <DataList>{accessory.slice(0, 14) + ''}</DataList>
            ) : (
              <DataList>{accessory}</DataList>
            ))}
        </ul>
      </DataWrap>
      <MainButton width={274} text="Learn more" onClick={toggleModal} />
      <ModalContainer isOpen={modalIsOpen} onRequestClose={toggleModal}>
        <CarInfo id={id} city={city} country={country} altText={altText} />
      </ModalContainer>
    </>
  );
}

export default CarGalleryItem;
