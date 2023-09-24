import { Menu } from "@headlessui/react";
import { D4, D6, D8, D10, D12, D20 } from "../../assets/roll/Die";
import { useState } from "react";

const DiceCard = ({ amount, icon, onIncrementHandler }) => {
  return (
    <div
      className="bg-neutral-200 flex justify-center items-center shadow-xl rounded-full w-16 h-16 relative"
      onClick={onIncrementHandler}
    >
      {icon}
      <span className="bg-neutral-500 z-0 text-neutral-50 h-6 w-6 rounded-full flex justify-center items-center absolute -right-1 -top-1">
        {amount}
      </span>
    </div>
  );
};

export default function Roll() {
  const [result, setResult] = useState(0);
  const [writtenProof, setWrittenProof] = useState("");

  const [die, setDie] = useState([
    { sides: 4, amount: 0, icon: <D4 /> },
    { sides: 6, amount: 0, icon: <D6 /> },
    { sides: 8, amount: 0, icon: <D8 /> },
    { sides: 10, amount: 0, icon: <D10 /> },
    { sides: 12, amount: 0, icon: <D12 /> },
    { sides: 20, amount: 0, icon: <D20 /> },
  ]);

  function onDiceIncrementHandler(index) {
    const newDie = [...die];
    newDie[index].amount += 1;
    setDie(newDie);
  }

  function onRollClickHandler() {
    let total = 0;
    die.forEach((dice) => {
      for (let i = 0; i < dice.amount; i++) {
        let curr_roll = Math.floor(Math.random() * dice.sides) + 1;
        setWrittenProof((prev) => prev + `${prev ? " + " : ""} ${curr_roll}`);
        total += curr_roll;
      }
    });
    setResult(total);
  }

  function onResetClickHandler() {
    setResult(0);
    setDie([
      { sides: 4, amount: 0, icon: <D4 /> },
      { sides: 6, amount: 0, icon: <D6 /> },
      { sides: 8, amount: 0, icon: <D8 /> },
      { sides: 10, amount: 0, icon: <D10 /> },
      { sides: 12, amount: 0, icon: <D12 /> },
      { sides: 20, amount: 0, icon: <D20 /> },
    ]);
    setWrittenProof("");
  }

  return (
    <div>
      <Menu as="div" className="flex flex-col gap-2">
        {({ open }) => (
          <>
            <Menu.Button
              as="div"
              className="bg-neutral-900 flex justify-center items-center shadow-xl rounded-full w-16 h-16"
            >
              <D20 fill="#fafafa" />
            </Menu.Button>
            <Menu.Items as="div">
              <Menu.Item as="div">
                {die.map((dice, index) => (
                  <DiceCard
                    key={dice.sides}
                    {...dice}
                    onIncrementHandler={() => onDiceIncrementHandler(index)}
                  />
                ))}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
      <button onClick={onRollClickHandler}>Roll</button>
      <button onClick={onResetClickHandler}>Reset</button>
      <div>
        {writtenProof} = {result}
      </div>
    </div>
  );
}
