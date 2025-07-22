import Component from "./starter/02-props";

function App() {
  return (
    <main>
      <h2>React & Typescript</h2>
      <Component name="peter" id={123}>
        <h1>Hello</h1>
      </Component>
    </main>
  );
}

export default App;
