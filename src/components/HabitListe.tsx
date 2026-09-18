import {
  eachDayOfInterval,
  endOfWeek,
  format,
  isFuture,
  isSameDay,
  startOfWeek,
} from "date-fns";
import Button from "./Button";

export type Habit = {
  id: string;
  name: string;
  completions?: Date[];
};

type HabitListProps = {
  habits: Habit[];
  onDelete?: (id: string) => void;
};

export default function HabitList({ habits, onDelete }: HabitListProps) {
  if (habits.length === 0) {
    return (
      <p className="text-zinc-500 py-12 flex justify-center items-center my-4">
        No habits added yet
      </p>
    );
  }

  const handleDelete = (id: string) => {
    onDelete?.(id);
  };

  return (
    <ul className="space-y-2">
      {habits.map((habit) => (
        <li key={habit.id}>
          <HabitItem habit={habit} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
}

type HabitItemProps = {
  habit: Habit;
  onDelete: (id: string) => void;
};

function HabitItem({ habit, onDelete }: HabitItemProps) {
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 }),
  });

  return (
    <div className="rounded-xl bg-zinc-800 p-2 flex flex-col gap-3 my-4">
      <div className="flex justify-between">
        <div>
          <span>{habit.name} 🔥</span>
        </div>
        <span
          onClick={() => onDelete(habit.id)}
          className="text-red-500 hover:text-red-400 cursor-pointer "
        >
          Delete
        </span>
      </div>
      <div className="flex gap-2 justify-around ">
        {visibleDates.map((date) => (
          <Button
            className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-lg min-h-15 py-2"
            key={date.toISOString()}
            disabled={isFuture(date)}
            variant={
              habit.completions?.some((d) => isSameDay(date, d))
                ? "primary"
                : "secondary"
            }
          >
            <span className="flex flex-col items-center">
              <span className="text-xs opacity-80">{format(date, "EEE")}</span>
              <span className="text-zinc-300 font-medium">
                {format(date, "d")}
              </span>
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}
