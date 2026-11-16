import type { Board,Piece } from "../engine/board";

const pieceSymbols:Record<string,string>={
    "white-king":"\u2654",
    "white-queen":"\u2655",
    "white-rook":"\u2656",
    "white-bishop":"\u2657",
    "white-knight":"\u2658",
    "white-pawn":"\u2659",

    "black-king":"\u2654",
    "black-queen":"\u2655",
    "black-rook":"\u2656",
    "black-bishop":"\u2657",
    "black-knight":"\u2658",
    "black-pawn":"\u2659"
}

function createPiece(piece:Piece):HTMLSpanElement{
    const element=document.createElement("span");
    const symbolKey=`${piece.color}-${piece.type}`;
    
    element.className=`piece ${piece.color}`
    element.textContent=pieceSymbols[symbolKey]??"";

    return element;
}

export function renderBoard( board:Board,container:HTMLElement):void{
    container.innerHTML="";

    for(let index = 0;index <64;index++){
        const square=document.createElement("button");
        const row = Math.floor(index/8);
        const col=index % 8

        const isLight=(row + col)%2 === 1;

        square.className=`square ${isLight ? "lignt" : "dark"}`;
        square.type = "button";
        square.dataset.index=String();

        const piece=board[index]
        if(piece){
            square.appendChild(createPiece(piece));
        }
        container.appendChild(square)
    }
}




