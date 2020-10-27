import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Cell, CellValue } from './Cell';

const BoardWrapper = styled.div`
background-color: #999999;
width: 100%;
height: 100%;
grid-template-columns: auto auto auto;
grid-template-rows: auto auto auto;
display: grid;
column-gap: 6px;
row-gap: 6px;
`;

export type Winner = CellValue | "tie";


interface BoardProps {
    onGameEnd(winner: Winner): void;
}


const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

export const Board: FC<BoardProps> = ({ onGameEnd }) => {
    const [cells, setCells] = useState<CellValue[]>(Array(9).fill(undefined));

    const currentShape: CellValue = cells.filter(Boolean).length % 2 ? 'O' : 'X'; // filter(Boolean) filter(n => n) filters undefined

    const winningCondition = winningConditions.find(cond => {
        const line = cond.map(idx => cells[idx]);

        return line[0] && line.every(value => value === line[0]);
    });

    const tie = cells.filter(Boolean).length === 9;

    const winningShape = winningCondition ? cells[winningCondition[0]] : undefined;

    useEffect(() => {
        if (winningShape)
            return onGameEnd(winningShape);

        if (tie)
            return onGameEnd('tie');
    }, [winningShape, tie, onGameEnd])

    const toggleCell = (index: number) => {
        setCells(cells => cells.map((c, i) => i === index ? currentShape : c));
    };

    return <BoardWrapper>
        {
            cells.map((cell, i) => (
                <Cell
                    key={i}
                    value={cell}
                    index={i}
                    toggle={toggleCell} />
            ))
        }
    </BoardWrapper>
};
