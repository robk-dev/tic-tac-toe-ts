import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

import { Board, Winner } from './Board';
import { StartScreen } from './StartScreen';

const BoardContainer = styled.div`
background: #ffffff;
width: 550px;
height: 520px;
border-radius: 16px;
box-shadow: -6px 10px 30px 4px #00000069;
border: 20px solid #999999;
`;

type GameState = "start" | "game" | "reset";

export default function App() {
    const [winner, setWinner] = useState<Winner>();
    const [gameState, setGameState] = useState<GameState>("start");

    const onStart = () => {
        setGameState("game");
    }

    const onGameEnd = (winner: Winner) => {
        console.log({ winner });
        setWinner(winner);
        setGameState("reset");
    };


    return <BoardContainer>
        {{
            start: <StartScreen onStart={onStart} />, //<button onClick={() => setGameState("game")} > Start</button>,
            game: <Board onGameEnd={(onGameEnd)}>Start</Board >,
            reset: <>Start</>
        }[gameState]}
    </BoardContainer>
}

