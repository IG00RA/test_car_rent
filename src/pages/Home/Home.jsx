import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllAdverts } from '../../redux/adverts/advertsOperations';
import { selectAdverts } from '../../redux/adverts/advertsSelectors';
import { ModalCarImg } from '../../components/CarInfo/CarInfo.styled';
import {
  CenteredImageWrap,
  FeaturedCarTittleStyled,
  FeaturedStyled,
  FeaturedTittleStyled,
  FeaturedWrap,
  FooterLinkStyled,
  FooterStyled,
  FooterWrap,
  HeroStyled,
  HeroTittleStyled,
  TestimonialTextStyled,
  TestimonialTittleStyled,
  TestimonialWrap,
  TestimonialsStyled,
} from './Home.styled';
import MainButton from '../../components/Buttons/MainButton';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAdverts());
  }, [dispatch]);
  const adverts = useSelector(selectAdverts);
  return (
    <>
      <HeroStyled>
        <HeroTittleStyled>Book your luxury car today</HeroTittleStyled>
        <Link to="/catalog">
          <MainButton width={274} text="Book now" />
        </Link>
      </HeroStyled>
      <FeaturedStyled>
        <FeaturedTittleStyled>Featured cars</FeaturedTittleStyled>
        {adverts.slice(0, 4).map((advert, index) => (
          <FeaturedWrap key={index}>
            <CenteredImageWrap>
              <ModalCarImg src={advert.img} alt={`Luxury car ${index + 1}`} />
            </CenteredImageWrap>
            <FeaturedCarTittleStyled>
              {advert.make} {advert.model}
            </FeaturedCarTittleStyled>
            <p>{advert.description}</p>
          </FeaturedWrap>
        ))}
      </FeaturedStyled>
      <TestimonialsStyled>
        <TestimonialTittleStyled>Testimonials</TestimonialTittleStyled>
        <TestimonialWrap>
          <p>
            "I'm very satisfied with this service. I recommend it to all my
            friends and colleagues."
          </p>
          <TestimonialTextStyled>John Doe</TestimonialTextStyled>
        </TestimonialWrap>
        <TestimonialWrap>
          <p>
            "Great company with a wealth of experience and a professional
            approach to clients."
          </p>
          <TestimonialTextStyled>Jane Smith</TestimonialTextStyled>
        </TestimonialWrap>
      </TestimonialsStyled>
      <FooterStyled>
        <FooterWrap>
          <p>
            Contact us:{' '}
            <FooterLinkStyled href="tel:+380730000000">
              +38 073 0000000
            </FooterLinkStyled>
          </p>
          <p>
            Email:{' '}
            <FooterLinkStyled href="mailto:info@drivestar.com">
              info@drivestar.com
            </FooterLinkStyled>
          </p>
        </FooterWrap>
      </FooterStyled>
    </>
  );
}

export default Home;
