import { Component, Show, createEffect, createSignal } from "solid-js";

const App: Component = () => {
  const [getCount, setCount] = createSignal(0);
  console.log("Render " + Math.random());
  console.log("Render: CurrentCount is", getCount());
  //expesinve calculation digitOfPi(1000)

  createEffect(() => {
    getCount();
    if (Math.random() > 0.1) {
      console.log("Effect: CurrentCount is", getCount());
    }
  });

  return (
    <Show when={getCount() < 10} fallback={<h1>The count is too big</h1>}>
      <div>
        The count is:{getCount()}
        <br />
        <button onClick={() => setCount(getCount() + 1)}>Increment</button>
      </div>
    </Show>
  );
};

export default App;
