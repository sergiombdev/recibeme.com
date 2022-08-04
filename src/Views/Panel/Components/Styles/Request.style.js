import styled from "styled-components";

export const ContainerPage = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
    padding: 2rem;
    grid-gap: 2rem;
`;
export const ContainerTable = styled.div`
    display: grid;
    background: var(--backgroundColor);
    border-radius: 20px;
    box-shadow: var(--shadowGlobal);
    padding: 1rem;
`;
