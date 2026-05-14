export default function Dashboard() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "bg-gray-900 text-white min-h-screen" : "bg-gray-100 min-h-screen"}>

      {/* TOP BAR */}
      <div className="p-4 flex justify-between">
        <h1>Dashboard</h1>

        <button
          onClick={() => setDark(!dark)}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Toggle Theme
        </button>
      </div>

    </div>
  );
}