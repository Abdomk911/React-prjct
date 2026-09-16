import HabitForm from "./components/Habitform";
import Header from "./components/Header";
import HabitList from "./components/HabitListe";


export default function App() {
  return (
    <div>
      <div className="max-w-2xl mx-auto p-4 flex flex-col">
        
        <Header />
       
        <HabitForm />
        <HabitList />
      </div>
    </div>
  );
}
