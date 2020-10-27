import React, { FC } from 'react';
import styled from 'styled-components';

const CellWrapper = styled.button`
background-color: #fff;
border: 1px solid #181818;
margin-bottom: -1px;
cursor: pointer;
outline:none;
`;

export type CellValue = 'X' | 'O' | undefined;

type CellProps = {
    value: CellValue;
    toggle(index: number): void;
    index: number;
}

export const Cell: FC<CellProps> = ({ value, toggle, index }) => {
    return <CellWrapper onClick={() => toggle(index)}>
        {
            value === 'O' ? 'O' : value ? 'X' : null
        }
    </CellWrapper>
};
