

export default function WorkoutCard({ workout }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <h2 className="font-bold text-lg">{workout.name}</h2>
      <p>{workout.description}</p>
    </div>
  );
}
