import React from 'react'
import Styles from '../../utils/css/styles.css'


const hangManBox =() =>{
    function logic(){
        let letters = "ABCDEFGHIKLMNÑOPQRSTUVWXYZ";
        const alphabet = document.getElementById("alphabet")
        const passwordBoard= [
            "Hola mundo",
            "Si puedes soñarlo puedes programarlo",
            "No documentes el problema arreglalo",
            "la tecnología inspira el arte",
            "codigo limpio",
            "eres el css de mi html",
            "si el codigo funciona no lo toques"
        ];
         const passwordDiv= document.querySelector("#board");
         const imgDiv = document.querySelector("#hangin-dude");
         const ramdon = Math.floor(Math.random()* passwordBoard.length);
         const yes = new Audio("yes.wav");
         const no = new Audio("no.wav");
         const win = new Audio("nice-work.wav");
         const lose = new Audio("oh-my-god-1.wav");
         let fail=1;
         let countDown;
         const start =function (){
            letters.split("").forEach((letter) => {
                const html = `<div class="letter">${letter}</div>`;
                alphabet.insertAdjacentElementHTML("beforend", html);
            });
         }
    
    
    }








    return(
        <div className="hangMan-component">
            <body>
                <main>
                    <div id="container">
                    <div id="title">HangMan</div>
                    <div id="board"></div>
                    <div id="hangin-dude"></div>
                    <div id="alphabet"></div>
                    <div id="timer"> 0:00:00</div>
                    </div>
                </main>
            </body>
        </div>
    )
}

export default hangManBox