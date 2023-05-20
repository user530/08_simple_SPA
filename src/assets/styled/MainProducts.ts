import styled from 'styled-components';

export const MainProductsWrapper = styled.section`
  padding-top: 188px;
`;

export const ProductsHeadingWrapper = styled.div`
  text-align: center;
  padding-bottom: 76px;
`;
export const ProductsHeading = styled.h2`
  position: relative;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.22;

  &::after {
    content: attr(data-text);
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50px);
    font-size: 82px;
    color: rgba(0, 0, 0, 0.05);
  }
`;
