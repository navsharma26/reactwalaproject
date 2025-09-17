import { useState } from "react";
export default function Ludoboard(){
    let[moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0});
    

   
    let updateblue=()=>{
        
        console.log(`moves.blue=${moves.blue}`);
        // #basically it is used for rerrandring the array element spread the value and copy the values basically it givea the new values
        // #by use of callback and updeted value
         
        setMoves((prevMoves)=>{
          return  {...prevMoves,blue:prevMoves.blue+1

            }

        });
    };
    let updatered=()=>{
        
        console.log(`moves.red=${moves.red}`);
        // #basically it is used for rerrandring the array element spread the value and copy the values basically it givea the new values
        // #by use of callback and updeted value
         
        setMoves((prevMoves)=>{
          return  {...prevMoves,red:prevMoves.red+1

            }

        });
    };
    let updateyellow=()=>{
        
        console.log(`moves.yellow=${moves.yelow}`);
        // #basically it is used for rerrandring the array element spread the value and copy the values basically it givea the new values
        // #by use of callback and updeted value
         
        setMoves((prevMoves)=>{
          return  {...prevMoves,yellow:prevMoves.yellow+1

            }

        });
    };
    let updategreen=()=>{
        
        console.log(`moves.green=${moves.green}`);
        // #basically it is used for rerrandring the array element spread the value and copy the values basically it givea the new values
        // #by use of callback and updeted value
         
        setMoves((prevMoves)=>{
          return  {...prevMoves,green:prevMoves.green+1

            }

        });
    };
    return(
        <div>
            <p>The game begains!!!</p>
            <div className="board">
                <p>blue moves={moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateblue}>+1</button>
                <p>red moves={moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updatered}>+1</button>
                <p>yellow moves={moves.yellow} </p>
                <button style={{backgroundColor:"yellow",color:"black"}} onClick={updateyellow}>+1</button>
                <p>green moves={moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updategreen}>+1</button>

            </div>
        </div>
    )
}