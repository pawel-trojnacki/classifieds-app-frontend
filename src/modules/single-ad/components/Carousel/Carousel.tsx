import 'react-multi-carousel/lib/styles.css';
import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useViewportSize } from 'hooks/useViewportSize';
import Parallax from 'modules/common/components/Parallax';
import CarouselInner from '../CarouselInner';
import CarouselActions from '../CarouselActions';

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
});

export interface Props {
  images: string[];
}

const Carousel: FC<Props> = ({ images }) => {
  const classes = useStyles();
  const { isSmWidth } = useViewportSize();
  if (isSmWidth) {
    return (
      <div className={classes.root}>
        <CarouselInner images={images} />
        <CarouselActions />
      </div>
    );
  }
  return (
    <Parallax withOpacity yRange={300} yRangeOpacity={150}>
      <div className={classes.root}>
        <CarouselInner images={images} />
        <CarouselActions />
      </div>
    </Parallax>
  );
};

export default Carousel;
