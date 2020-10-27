import React, { FC } from 'react';
import { Winner } from './Board';

interface ResetScreenProps {
    winner: Winner;
    onReset(): void
}
export const ResetScreen: FC<ResetScreenProps> = ({ winner, onReset }) => {
    return <>
        <h2>{
            winner === "tie" ? 'TIE' : 'WINNER ' + winner
        }</h2>
        {winner}
    </>;
}