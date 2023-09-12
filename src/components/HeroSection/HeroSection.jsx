import { Link } from 'react-router-dom';
import { HeroBackground } from './HeroSection.styled';
import MainButton from '../Buttons/MainButton';

function HeroSection() {
  return (
    <HeroBackground className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-60"></div>
      <div
        className="hero-content text-center text-neutral-content"
        style={{ position: 'absolute', bottom: '25%' }}
      >
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Book your luxury car today
          </h1>
          <p className="mb-5">
            Welcome to DriveStar Car Rental, your premier destination for luxury
            car rentals. Explore our wide range of luxury vehicles and book your
            dream car today!
          </p>
          <Link to="/catalog">
            <MainButton width={200} text="Book now" />
          </Link>
        </div>
      </div>
    </HeroBackground>
  );
}

export default HeroSection;
