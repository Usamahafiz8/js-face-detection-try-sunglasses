import styled from "styled-components"

export const PresetphotosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-gap: 20px;
  margin: 0 auto;
  max-width: 90vw;

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }
`