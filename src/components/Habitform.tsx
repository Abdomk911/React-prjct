import Button from "./Button";
import FirsttEffect from "./FirsttEffect";
export default function HabitForm() {
  return (
    <>
      <form className="flex gap-2">
        <input
          type="text"
          placeholder="New Habit ..."
          className="flex-1 rounded-lg border border-zinc-800 bg-transparent px-4 py-2 text-zinc-50 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 "
        />
        <Button className="rounded-lg px-4 py-2 font-medium">Add Habit</Button>
      </form>
      <FirsttEffect />
    </>
  );
}
