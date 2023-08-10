import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import { getStarWarsPeople } from "@/api/fakeRequest";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.pink};
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
