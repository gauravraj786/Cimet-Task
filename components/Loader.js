import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

const LoaderBox = styled.div`
  border: 10px solid #cfe7ea;
  border-radius: 50%;
  border-top: 10px solid #2f5ea1;
  width: 75px;
  height: 75px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderBox></LoaderBox>
    </LoaderContainer>
  );
};
