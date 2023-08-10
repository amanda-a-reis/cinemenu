import { getStarWarsPeople } from "@/api/fakeRequest";

import { useQuery } from "@tanstack/react-query";
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
  const { data, isLoading } = useQuery({
    queryKey: ["starWars"],
    queryFn: getStarWarsPeople,
  });
  return (
    <Container>
      {!isLoading && <div>Hello world!: {data?.data.name}</div>}
    </Container>
  );
}

export default HelloWorld;
