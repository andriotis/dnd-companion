import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const DiceCard = ({ value, onDecrementHandler, onIncrementHandler }) => {
  return (
    <div className="flex">
      <div>d{value}</div>
      <div onClick={onIncrementHandler}>
        <PlusIcon className="h-6 w-6 text-gray-950" />
      </div>
      <div onClick={onDecrementHandler}>
        <MinusIcon className="h-6 w-6 text-gray-950" />
      </div>
    </div>
  );
};

export default function Roll() {
  const [result, setResult] = useState(0);
  const [writtenProof, setWrittenProof] = useState("");

  const [die, setDie] = useState([
    [4, 0],
    [6, 0],
    [8, 0],
    [10, 0],
    [12, 0],
    [20, 0],
  ]);

  function onIncrementHandler(index) {
    const newDie = [...die];
    newDie[index][1]++;
    setDie(newDie);
  }

  function onDecrementHandler(index) {
    const newDie = [...die];
    newDie[index][1]--;
    setDie(newDie);
  }

  function onRollClickHandler() {
    let total = 0;
    die.forEach((dice) => {
      for (let i = 0; i < dice[1]; i++) {
        let curr_roll = Math.floor(Math.random() * dice[0]) + 1;
        setWrittenProof((prev) => prev + `d${dice[0]}: ${curr_roll}\n`);
        total += curr_roll;
      }
    });
    setResult(total);
  }

  function onResetClickHandler() {
    setResult(0);
    setDie([
      [4, 0],
      [6, 0],
      [8, 0],
      [10, 0],
      [12, 0],
      [20, 0],
    ]);
  }

  return (
    <div>
      <div className="flex flex-col">
        {die.map((die, index) => (
          <DiceCard
            key={index}
            value={die[0]}
            onDecrementHandler={() => onDecrementHandler(index)}
            onIncrementHandler={() => onIncrementHandler(index)}
          />
        ))}
      </div>
      <button onClick={onRollClickHandler}>
        Roll: {result} {writtenProof}
      </button>
      <button onClick={onResetClickHandler}>Reset</button>
    </div>
  );
}
