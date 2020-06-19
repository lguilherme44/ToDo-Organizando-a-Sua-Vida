import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 240px;
  height: 85px;
  background: ${(props) => (props.actived ? '#7159C1' : '#707070')};
  opacity: ${(props) => (props.actived ? '' : '60%')};
  border-radius: 10px 35px 10px 35px;
  padding: 10px;
  cursor: pointer;

  img {
    width: 30;
    height: 27px;
    color: #fff;
    align-self: flex-start;
  }

  span {
    font-weight: bold;
    font-size: 16px;
    color: #fff;
    align-self: flex-end;
  }

  &:hover {
    background: #7159c1;
    transition: 0.5s;
    opacity: 1;
  }
`;
