import React from "react";
import styled from "styled-components";

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: grey;
`;

const Header = ({ all, complitedTasks }) => {
  return (
    <HeaderWrap>
      <h1>TODO list</h1>
      <div>
        Всего задач {all}, из них выполненно {complitedTasks}
      </div>
    </HeaderWrap>
  );
};

export default Header;
