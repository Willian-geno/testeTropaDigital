import styled from "styled-components";

const EventsConteiner = styled.div`
    width:100%;
    padding: 30px;
    height: 100%;
`;

const EventsHeader = styled.div`
    text-align: start;  
    height:10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .welcomeUser{
        font-size: 16px;
    }
    .title{
        font-size: 20px;
        font-weight: 600;
        color: #cc6237; 
    }
`;

const TableContener = styled.div`
    width: 100%;
    margin-top: 20px;
 
    background-color: #fff;
    padding: 40px 15px;
    border: solid #c4c4c4 2px;
    border-radius: 10px;
`
const TableHeader = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;

    .inputConteiner{
        margin: 0 5px;
    }
    .buttonConteiner{
        margin: 0 5px;
    }
`
const Table = styled.table`
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;

    th {
        color: #cc6237; 
        font-weight: 600;
        text-align: center;
        padding: 12px 8px;
        background: transparent;
        font-size: 15px;
    }

    td {
        color: #6b6b6b;
        font-size: 15px;
        padding: 12px 8px;
        border-bottom: 1px solid #f0f0f0;
        background: transparent;
        vertical-align: middle;
    }

    tr:last-child td {
        border-bottom: none;
    }
`

const PaginationContainer = styled.div`
    margin-top: 24px;
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    align-items: center;
`;

const PaginationButton = styled.button<{ active?: boolean }>`
    border-radius: 20px;
    border: ${({ active }) => (active ? "none" : "1px solid #cc6237")};
    background: ${({ active }) => (active ? "#cc6237" : "#fff")};
    color: ${({ active }) => (active ? "#fff" : "#cc6237")};
    padding: 6px 18px;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    outline: none;

    &:disabled {
        background: #f5f5f5;
        color: #bdbdbd;
        border: none;
        cursor: not-allowed;
    }
`;

const FooterTable = styled.div`
    display: flex;
    justify-content: end;

    .numberPage{
        align-content: center;
        margin: 0 20px;
    }
`

export const EventsStyles = {
    EventsConteiner,
    EventsHeader,
    TableContener,
    TableHeader,
    Table,
    PaginationContainer,
    PaginationButton,
    FooterTable
}