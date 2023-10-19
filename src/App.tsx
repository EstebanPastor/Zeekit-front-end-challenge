import GetMovie from "./components/GetMovie";

const App = () => {
  return (
    <main className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4">
      <header className="text-xl font-bold leading-[3rem]">
        Zeekit challenge
      </header>
      <GetMovie />
      <footer className="text-center leading-[3rem] opacity-70">
        By Esteban Pastor
      </footer>
    </main>
  );
};

export default App;
