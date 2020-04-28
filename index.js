import React from 'react';
import './style.css';
class Tictactoe extends React.Component{
    state={
        boxes:["","","","","","","","",""],
        xIsNext:true,
    }
    componentDidMount=()=>{
        alert("Start The Game!");
    }
    handleBoxClick=(index)=>{
        const boxes=this.state.boxes;
        if(this.findWinner(boxes)!==null)
            return;
        if(this.areAllBoxesClicked(boxes)===true)
            return;
        boxes[index]=this.state.xIsNext?"X":"O";
        this.setState({boxes:boxes,
                        xIsNext:this.state.xIsNext?false:true,
                        })
    }
    findWinner=(boxes)=>{
        const rows=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let i=0;i<rows.length;i++)
        {
            const[a,b,c]=rows[i];
            if(boxes[a] && boxes[a]===boxes[b] && boxes[a]===boxes[c])
                return(boxes[a])
        }
        return null;
    }
    areAllBoxesClicked=(boxes)=>{
        let count=0;
        boxes.forEach(element => {
            if(element!=="")
            count++;
        });
        if(count==9)
            return true;
        else
            return false;
    }
    handleRestart=()=>{
        this.setState({
        boxes:["","","","","","","","",""],
        xIsNext:true,})
    }
    render(){
        const winner=this.findWinner(this.state.boxes);
        const isFilled=this.areAllBoxesClicked(this.state.boxes);
        let status;
        if(winner!=null){
            status="The Winner is:"+winner+"!!";
        }
        else if(winner===null && isFilled===true){
            status="Game Drawn!";
        }
        else{
            let turn=this.state.xIsNext?"X":"O";
            status="It is "+turn+"'s turn";
        }
        return(
        <div className="page">
                <h1>TicTacToe</h1>
                <h2>{status}</h2>
            <div className="container" >
                <div className="eachCell" onClick={()=>{this.handleBoxClick(0)}}>
                    <p className="symbol" >{this.state.boxes[0]}</p>
                </div>
                <div className="eachCell" onClick={()=>{this.handleBoxClick(1)}}>
                   <p className="symbol">{this.state.boxes[1]}</p>
                </div>
                <div className="eachCell" onClick={()=>{this.handleBoxClick(2)}}>
                   <p className="symbol">{this.state.boxes[2]}</p>
                </div>
                <div className="eachCell" onClick={()=>{this.handleBoxClick(3)}}>
                   <p className="symbol">{this.state.boxes[3]}</p>
                </div>
                <div className="eachCell" onClick={()=>{this.handleBoxClick(4)}}>
                   <p className="symbol">{this.state.boxes[4]}</p>
                </div>
                <div className="eachCell" onClick={()=>{this.handleBoxClick(5)}}>
                   <p className="symbol">{this.state.boxes[5]}</p>
                </div>
                <div className="eachCell" onClick={()=>{this.handleBoxClick(6)}}>
                   <p className="symbol">{this.state.boxes[6]}</p>
                </div>
                <div className="eachCell" onClick={()=>{this.handleBoxClick(7)}}>
                   <p className="symbol">{this.state.boxes[7]}</p>
                </div>
                <div className="eachCell" onClick={()=>{this.handleBoxClick(8)}}>
                   <p className="symbol">{this.state.boxes[8]}</p>
                </div>
            </div>
            <button className="restart" onClick={this.handleRestart}>Start a New Game</button>
        </div>
        )
    }
}
export default Tictactoe