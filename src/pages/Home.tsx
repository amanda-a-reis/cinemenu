import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c4dfff;
`;

function Home() {
  return (
    <Container>
      <div>Home</div>
    </Container>
  );
}

export default Home;
