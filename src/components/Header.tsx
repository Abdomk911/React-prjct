import Button from "./Button";
export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl">Habit Tracker</h1>
        <span>Done today</span>
      </div>
      <div className="flex flex-col gap-1 items-end">
        <span>Apr 6 - Apr 12</span>
        <div className="flex gap-2 p-1">
          <button className="bg-purple-800 p-1.5 font-bold rounded-[7px] text-amber-50 hover:cursor-pointer hover:inset-shadow-sm inset-shadow-zinc-100">
            Prev
          </button>
          <Button>ab </Button>
        </div>
      </div>
    </header>
  );
}
