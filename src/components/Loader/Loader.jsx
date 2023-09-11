import loader from '../../img/loader.gif';
import { LoaderWrap } from './Loader.styled';

function Loader() {
  return (
    <LoaderWrap>
      <img width={200} src={loader} alt="loader" />
    </LoaderWrap>
  );
}

export default Loader;
