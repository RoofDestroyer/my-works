const { useState } = require("react");

const TestCount = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
};

export default TestCount;
