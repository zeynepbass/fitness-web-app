import WorkoutCard from "../components/Cards"

export default async function WorkoutsPage() {
  let workouts = [];

  try {
    const res = await fetch("https://example.com/api/workouts", { cache: "no-store" });
    if (!res.ok) throw new Error("API hatası");
    workouts = await res.json();
  } catch (error) {
    console.error("Workout fetch hatası:", error);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
}
