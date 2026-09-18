import HabitForm from "./components/Habitform";
import Header from "./components/Header";
import HabitList from "./components/HabitListe";
import type { Habit } from "./components/HabitListe";
import { useState,useEffect } from "react";

export default function App() {
const [habits, setHabit] = useState<Habit[]>(() => {
  const saved = localStorage.getItem("habits");
  return saved ? JSON.parse(saved) : [];
});
useEffect(() => {
  localStorage.setItem("habits", JSON.stringify(habits));
}, [habits]);
  function addhabit(name: string) {
    setHabit((curr) => [...curr, { id: crypto.randomUUID(), name , completions: []}]);
  }    
    
function deleteHabit(id: string) {
setHabit((curr) => curr .filter((h) => h.id !== id));
  }
  return (
    <div>
      <div className="max-w-2xl mx-auto p-4 flex flex-col">
        
        <Header />
       
        <HabitForm onAdd={addhabit} />
        <HabitList habits={habits} onDelete={deleteHabit} />
      </div>
    </div>
  );
}
