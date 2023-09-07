import MainButton from '../Buttons/MainButton';
import {
  CarImg,
  DataList,
  DataWrap,
  Title,
  TitleWrap,
} from './CarGalleryItem.styled';

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

  return (
    <>
      <CarImg src={img} alt={altText} />
      <TitleWrap>
        <Title>
          {make}
          <span> {model}</span>, {year}
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
          <DataList>
            {totalLengthSecond <= 25 &&
              (accessory.length > 14 ? (
                accessory.slice(0, 14) + ''
              ) : (
                <DataList>{accessory}</DataList>
              ))}
          </DataList>
        </ul>
      </DataWrap>
      <MainButton width={274} text="Learn more" />
    </>
  );
}

export default CarGalleryItem;
