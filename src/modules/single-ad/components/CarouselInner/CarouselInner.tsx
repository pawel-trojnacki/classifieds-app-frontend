import 'react-multi-carousel/lib/styles.css';
import { FC } from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles';
import MultiCarousel from 'react-multi-carousel';

const navBarHeightXsUp = '56px';
const navBarHeightSmUp = '64px';

const PLACEHOLDER_IMAGE =
  'http://challengefutureacademy.com/storage/noimage.jpg';

export interface Props {
  images: string[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      display: 'block',
      height: '250px',
      width: '100%',
      marginTop: navBarHeightXsUp,
      objectFit: 'cover',
      objectPosition: 'center',
      [theme.breakpoints.up('sm')]: {
        height: '500px',
        marginTop: navBarHeightSmUp,
      },
      [theme.breakpoints.up('md')]: {
        marginTop: 0,
      },
    },
  })
);

const CarouselInner: FC<Props> = ({ images }) => {
  const theme = useTheme();
  const classes = useStyles();

  const { xs, sm, md } = theme.breakpoints.values;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: md },
      items: 1,
    },
    tablet: {
      breakpoint: { max: md, min: sm },
      items: 1,
    },
    mobile: {
      breakpoint: { max: sm, min: xs },
      items: 1,
    },
  };

  if (images.length < 1) {
    return <img className={classes.img} src={PLACEHOLDER_IMAGE} alt="" />;
  }

  return (
    <MultiCarousel
      autoPlay={false}
      responsive={responsive}
      draggable={false}
      infinite
      showDots
      removeArrowOnDeviceType="mobile"
    >
      {images.map((image) => (
        <img
          key={image}
          className={classes.img}
          src={`${process.env.REACT_APP_IMG_BASE_URL}/${image}`}
          alt=""
        />
      ))}
    </MultiCarousel>
  );
};

export default CarouselInner;
