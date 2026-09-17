import Button from "./Button";
import FirsttEffect from "./FirsttEffect";
import { useState, type FormEvent } from "react";

type HabitFormProps = {
  onAdd: (name: string) => void;
}

export default function HabitForm({ onAdd }: HabitFormProps) {
  const [name, setName] = useState("");

  function handlesubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (name.trim() === "") return;
    onAdd(name.trim());
    setName("");
  }

  return (
    <>
      <form className="flex gap-2" onSubmit={handlesubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New Habit ..."
          className="flex-1 rounded-lg border border-zinc-800 bg-transparent px-4 py-2 text-zinc-50 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 "
        />
        <Button disabled={name.trim() === ""} className="rounded-lg px-4 py-2 font-medium">
          Add Habit
        </Button>
      </form>
      <FirsttEffect />
    </>
  );
}
