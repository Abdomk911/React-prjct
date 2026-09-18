# Habit Tracker — React + TypeScript CRUD App

A simple, fast habit tracker built with **React 19, TypeScript, Vite and Tailwind CSS v4**.
Create habits, view your current week day-by-day, delete what's not working — with automatic persistence in `localStorage`.

**Live demo:** https://habittrackerbyabdomk.vercel.app/

## What it does

This is a **CRUD-style** front-end app (Create / Read / Delete fully working, Update / completions in progress):

- **Create:** controlled form with validation — empty names can't be submitted, input clears after add
- **Read:** habit list with empty state (`"No habits added yet"`), each habit shows a Monday–Sunday strip for the current week
- **Delete:** per-habit delete using immutable `filter()`, with correct `key={habit.id}` reconciliation
- **Persist:** lazy `useState` init from `localStorage` + `useEffect` sync on every change — refresh-proof
- **Weekly view:** `date-fns` (`startOfWeek`, `endOfWeek`, `eachDayOfInterval`, `format`, `isFuture`) — future days disabled, completed days highlighted
- **UI:** dark Zinc theme, reusable `Button` with `primary / secondary / ghost-destructive` variants (`tailwind-merge`), custom SF Pro Rounded `@font-face`

## Tech stack

- React 19 + TypeScript (~6.0, strict)
- Vite 8 + React Compiler
- Tailwind CSS v4 (`@theme`, `--font-sans`)
- date-fns 4, tailwind-merge
- Vercel for production deploy

## Project structure

```
src/
  App.tsx                  # state owner: habits, addHabit, deleteHabit, localStorage sync
  Style.css                # Tailwind import, @font-face, theme
  main.tsx                 # StrictMode entry
  components/
    HabitListe.tsx         # Habit type, HabitList + HabitItem, weekly grid
    Habitform.tsx          # controlled add form (onAdd prop)
    Header.tsx             # title + current week range + Prev/Next
    Button.tsx             # reusable variant button
    FirsttEffect.tsx
Font/
  FontsFree-Net-SF-Pro-Rounded-Bold.ttf
```

## Key React concepts demonstrated

```tsx
// src/App.tsx — lazy init (read localStorage once, not on every render)
const [habits, setHabit] = useState<Habit[]>(() => {
  const saved = localStorage.getItem("habits");
  return saved ? JSON.parse(saved) : [];
});

// persist after every change
useEffect(() => {
  localStorage.setItem("habits", JSON.stringify(habits));
}, [habits]);

// immutable create / delete — new array reference triggers re-render
function addhabit(name: string) {
  setHabit((curr) => [...curr, { id: crypto.randomUUID(), name, completions: [] }]);
}
function deleteHabit(id: string) {
  setHabit((curr) => curr.filter((h) => h.id !== id));
}
```

```tsx
// src/components/HabitListe.tsx — types as data contracts + prop drilling
export type Habit = { id: string; name: string; completions?: Date[] };

// App -> HabitList -> HabitItem -> <span onClick>
<span onClick={() => onDelete(habit.id)}>Delete</span>
```

The arrow-function closure captures each row's own `habit.id` — that's how one generic `deleteHabit(id)` knows which row was clicked.

## Run locally

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # tsc + vite build -> dist/
npm run preview  # preview production build
```

Requires Node 18+.

## What I'd add next

- Toggle day completion (`Update` → full CRUD) + streak counter 🔥
- Edit habit name inline
- Week navigation (Prev/Next already in `Header.tsx`)
- `woff2` font subset (current TTF is ~1.8 MB) + migrated to `public/fonts`
- Filter/search + tests (Vitest / Testing Library)

## Author

Built while learning React + TypeScript. Feedback welcome.
