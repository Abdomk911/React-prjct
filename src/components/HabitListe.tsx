import { eachDayOfInterval, endOfWeek, format, isFuture, startOfWeek } from "date-fns";
import Button from "./Button";
export default function HabitList() {
  const habits = [
    { id: 1, name: "Drink water" },
    { id: 2, name: "Exercise" },
  ];

  if (habits.length === 0) {
    return (
      <p className="text-zinc-500 py-12 flex justify-center items-center my-4">
        No habits added yet
      </p>
    );
  }

  return (
    <ul className="space-y-2">
      {habits.map((habit) => (
        <li key={habit.id}>
          <HabitItem habit={habit} />
        </li>
      ))}
    </ul>
  );
}
type HabitItemProps = {
  habit: { id: number; name: string };
};

function HabitItem({ habit }: HabitItemProps) {
  // Option A: Use index if visibleDates is static/positional

  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date()),

    end: endOfWeek(new Date()),
  });

  return (
    <div className="rounded-xl bg-zinc-800 p-2 flex flex-col gap-3 my-4">
      {/* ... */}
      <div className="flex justify-between">
        <div>
          <span>{habit.name} 🔥</span>
          
        </div>
        <span className="text-red-500 hover:text-red-400 cursor-pointer">Delete</span>
      </div>
      <div className="flex gap-2 justify-around ">
        {visibleDates.map((date, index) => (
          <Button className="flex flex-1 flex-col items-center  justify-center gap-0.5 rounded-lg  h-[60px]" key={index} disabled={isFuture(date)}>
            <span className="flex flex-col items-center p-5 ">
              <span className="text-sm">{format(date, "EEE ")}</span>

              <span className="text-zinc-300">{format(date, "d")}</span>
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}
