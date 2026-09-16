import HabitForm from "./components/Habitform";
import Header from "./components/Header";
import HabitList from "./components/HabitListe";
import type { Habit } from "./components/HabitListe";
import { useState } from "react";

export default function App() {
  const [habits, setHabit] = useState<Habit[]>([]);
  function addhabit ( name : string){
    
    
    setHabit([...habits, {id : crypto.randomUUID() , name }])
  }
  return (
    <div>
      <div className="max-w-2xl mx-auto p-4 flex flex-col">
        
        <Header />
       
        <HabitForm />
        <HabitList habits={habits} />
      </div>
    </div>
  );
}
