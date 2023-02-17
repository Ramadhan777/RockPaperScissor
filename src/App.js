import React from "react";
import logo from "./assets/images/logo.svg";
import paper from "./assets/images/kertas.png";
import rock from "./assets/images/batu.png";
import scissor from "./assets/images/gunting.png";
import refresh from "./assets/images/refresh.png";

const App = () => {
  const [playerChoice, setPlayerChoice] = React.useState("");
  const [comChoice, setComChoice] = React.useState("");

  const againstCom = (hand) => {
    const randomNumber = Math.floor(Math.random() * 3);
    const com = randomNumber === 0 ? "rock" : randomNumber === 1 ? "paper" : "scissor";
    
    setPlayerChoice(hand);
    setComChoice(com);

    const result = getResult(hand, com);

    const resultScreen = document.querySelector('.result-screen')
    
    resultScreen.innerText = result
    resultScreen.style.color = 'white'
    resultScreen.style.borderRadius = '12px'
    if(result === 'WIN'){
      resultScreen.style.backgroundColor = '#035B0C'
    } else if(result === 'DRAW') {
      resultScreen.style.backgroundColor = "#4C9654";
    } else {
      resultScreen.style.backgroundColor = '#bb0404'
    }
  };

  const getResult = (player, com) => {
    if (player === com) return "DRAW";
    if (player === "rock") return com === "scissor" ? "WIN" : "LOSE";
    if (player === "paper") return com === "rock" ? "WIN" : "LOSE";
    if (player === "scissor") return com === "paper" ? "WIN" : "LOSE";
  };

  const refreshAction = () => {
    const resultScreen = document.querySelector('.result-screen')
    setPlayerChoice('')
    setComChoice('')

    resultScreen.innerText = 'VS'
    resultScreen.style.backgroundColor = ''
  }

  return (
    <div className="App w-full h-screen bg-amber-700">
      <div className="flex flex-row pt-3 pl-5 items-center gap-5">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <div className="text-amber-500 text-xl font-bold">ROCK PAPER SCISSORS</div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-5 gap-6">
        <div className="grid grid-cols-3 w-[300px] sm:w-[600px] lg:w-[800px] place-items-center gap-4 sm:gap-0">
          <div className="text-2xl lg:text-3xl font-bold text-white min-w-[100px] text-center max-w-[400px]:text-black">Player</div>
          <div></div>
          <div className="text-2xl lg:text-3xl font-bold text-white min-w-[100px] text-center">Com</div>
        </div>

        <div className="grid grid-cols-3 w-[300px] sm:w-[600px] lg:w-[800px] place-items-center gap-4 sm:gap-0">
          <div className={`hover:bg-slate-50 hover:cursor-pointer p-3 flex w-[100px] sm:w-[120px] lg:w-[150px] justify-center rounded-xl ${playerChoice === "rock" && "bg-slate-50"}`}>
            <img src={rock} onClick={() => againstCom("rock")} alt="rock" className="w-16 h-12 sm:w-24 sm:h-16 lg:w-28 lg:h-20 " />
          </div>
          <div></div>
          <div className={`${comChoice === 'rock' && 'p-3 flex w-[100px] sm:w-[120px] lg:w-[150px] justify-center bg-slate-50 rounded-xl'}`}>
            <img src={rock} alt="rock" className="w-16 h-12 sm:w-24 sm:h-16 lg:w-28 lg:h-20" />
          </div>
        </div>

        <div className="grid grid-cols-3 w-[300px] sm:w-[600px] lg:w-[800px] place-items-center gap-4 sm:gap-0">
          <div className={`hover:bg-slate-50 hover:cursor-pointer p-3 flex w-[100px] sm:w-[120px] lg:w-[150px] justify-center rounded-xl ${playerChoice === "paper" && "bg-slate-50"}`}>
            <img src={paper} onClick={() => againstCom("paper")} alt="paper" className="w-16 h-20 sm:w-20 sm:h-24 lg:w-24 lg:h-28" />
          </div>
          <div className="result-screen text-white w-[100px] sm:w-[150px] lg:w-[200px] text-center text-2xl sm:text-4xl lg:text-5xl font-bold p-[10px] sm:p-[20px] lg:p-[30px]">VS</div>
          <div className={`${comChoice === 'paper' && 'p-3 flex w-[100px] sm:w-[120px] lg:w-[150px] justify-center bg-slate-50 rounded-xl'}`}>
            <img src={paper} alt="paper" className="w-16 h-20 sm:w-20 sm:h-24 lg:w-24 lg:h-28" />
          </div>
        </div>

        <div className="grid grid-cols-3 w-[300px] sm:w-[600px] lg:w-[800px] place-items-center gap-4 sm:gap-0">
          <div className={`hover:bg-slate-50 hover:cursor-pointer p-3 flex w-[100px] sm:w-[120px] lg:w-[150px] justify-center rounded-xl ${playerChoice === "scissor" && "bg-slate-50"}`}>
            <img src={scissor} onClick={() => againstCom("scissor")} alt="scissor" className="w-16 h-20 sm:w-20 sm:h-24 lg:w-24 lg:h-28" />
          </div>
          <div onClick={refreshAction} className="hover:bg-slate-50 p-3 flex w-[100px] sm:w-[120px] lg:w-[150px] justify-center rounded-xl">
            <img src={refresh} alt="refresh button" className="w-16 h-14 sm:w-20 sm:h-18 lg:w-24 lg:h-20" />
          </div>
          <div className={`${comChoice === 'scissor' && 'p-3 flex w-[100px] sm:w-[120px] lg:w-[150px] justify-center bg-slate-50 rounded-xl'}`}>
            <img src={scissor} alt="scissor" className="w-16 h-20 sm:w-20 sm:h-24 lg:w-24 lg:h-28" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
