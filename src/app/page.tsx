export default function Home() {
  return (
    <main
      className="flex min-h-screen items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: "url('/gradient-blue.svg')" }}
    >
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg leading-tight">
          We are preparing something awesome! Stay tuned.
        </h1>
      </div>
    </main>
  );
}
