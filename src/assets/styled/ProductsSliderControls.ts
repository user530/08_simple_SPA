import styled from 'styled-components';

export const SliderControlsWrapper = styled.div`
  padding-top: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;

export const SliderControlBtn = styled.button`
  width: 81px;
  height: 81px;
  border-radius: 50%;
  background: linear-gradient(180deg, #00b09b 0%, #96c93d 100%);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 50px;
  color: #fff;
`;
export const SliderControlProgress = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #f7f7f7;
`;

export const SliderControlProgressBar = styled.div`
  width: 28px;
  height: 5px;
  background-color: ${(props) => props.theme.color};
`;

SliderControlProgressBar.defaultProps = {
  theme: {
    color: '#F6F6F6',
  },
};

export const ProgressBarActiveTheme = {
  color: '#96C93D',
};
