import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 30px;

  border-radius: 14px;
  background: ${(props) =>
    props.isBack ? `transparent` : `rgba(0, 0, 0, 0.8)`};

  border: ${(props) => (props.isBack ? `1px solid #fff` : `none`)};

  color: #fff;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  img {
    transform: ${(props) => (props.isBack && `rotate(180deg)` )};
  }
`;
