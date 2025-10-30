import FileDrop from "./components/FileDrop";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">SecureDrop 🔐</h1>
        <FileDrop />
      </div>
    </div>
  );
}

export default App;
