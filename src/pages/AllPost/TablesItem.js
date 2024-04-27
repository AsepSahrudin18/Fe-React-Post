import styled from "styled-components";


const StyledResponsive = styled.div`
    overflow-x: auto;
`;

const StyledTableItem = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

const StyledTd = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`;

const StyledTh = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    background-color: #4793AF;
    color: #FFFFFF;
`;

const StyledTr = styled.tr`
    &:hover {
        background-color: #ddd;
    }
`;

export {
    StyledTableItem,
    StyledTd,
    StyledTh,
    StyledTr,
    StyledResponsive,
    
};