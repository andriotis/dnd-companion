import { D4, D6, D8, D10, D12, D20 } from "../../assets/roll/Die";
import { useState } from "react";

const die = [
  { value: 2, icon: <D4 /> },
  { value: 4, icon: <D6 /> },
  { value: 6, icon: <D8 /> },
  { value: 8, icon: <D10 /> },
  { value: 10, icon: <D12 /> },
  { value: 12, icon: <D20 /> },
];

const DiceCard = ({ icon }) => {
  const [amount, setAmount] = useState(0);
  return (
    <div className="flex">
      <div>{icon}</div>
      <div
        onClick={() => {
          setAmount(amount + 1);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        onClick={() => {
          setAmount(amount - 1);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div>{amount}</div>
    </div>
  );
};

export default function Roll() {
  const [result, setResult] = useState(0);
  return (
    <div>
      {die.map((dice) => (
        <DiceCard key={dice.value} {...dice} />
      ))}
      <div>{result}</div>
    </div>
  );
}
