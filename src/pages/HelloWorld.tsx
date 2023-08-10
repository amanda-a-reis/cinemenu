import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: bisque;
`;

function HelloWorld() {
  return (
    <Container>
      <div>Hello world!</div>
    </Container>
  );
}

export default HelloWorld;
