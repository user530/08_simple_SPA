import {
  ProgressBarActiveTheme,
  SliderControlBtn,
  SliderControlProgress,
  SliderControlProgressBar,
  SliderControlsWrapper,
} from '../assets/styled/ProductsSliderControls';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

interface IProductsSliderControls {
  size: number;
  active: number;
}

const ProductsSliderControls: React.FC<IProductsSliderControls> = (
  props: IProductsSliderControls
) => {
  const { size, active } = props;

  return (
    <SliderControlsWrapper>
      <SliderControlBtn>
        <BsArrowLeft />
      </SliderControlBtn>
      <SliderControlProgress>
        {Array(size)
          .fill(0)
          .map((_, ind) =>
            ind === active ? (
              <SliderControlProgressBar
                theme={ProgressBarActiveTheme}
                key={ind}
              />
            ) : (
              <SliderControlProgressBar key={ind} />
            )
          )}
      </SliderControlProgress>
      <SliderControlBtn>
        <BsArrowRight />
      </SliderControlBtn>
    </SliderControlsWrapper>
  );
};

export default ProductsSliderControls;
