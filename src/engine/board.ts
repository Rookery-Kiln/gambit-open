export type PieceColor="white"|"black";

export type PieceType=| "king"|"queen"|"rook"|"bishop"| "knight"|"knight" | "pawn";

export interface Piece{
    type:PieceType
    color:PieceColor
}

export type Board =(Piece|null)[];

export function createBoard(): Board{
    const board:Board=Array(64).fill(null);

    const Rank: PieceType[]=["rook","knight","bishop","queen","king","bishop","knight","rook"];

    for(let col=0; col<8 ; col++){
        board[col]={
            type:Rank[col]!,
            color:"black"
        };
        board[8 + col]={
            type:"pawn",
            color:"black"
        }
    }

    for(let col=0; col<8 ; col++){
        board[48 + col]={
            type:"pawn",
            color:"white"
        };

        board[56 + col]={
            type:Rank[col]!,
            color:"white"
        };
    }
    return board;
}

