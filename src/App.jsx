import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count -1 : 0);
  const reset = () => setCount(0);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh", backgroundColor: "black" }}>
      <Card style={{ width: "20rem", textAlign: "center" }}>
        <Card.Body>
          <Card.Title>React Counter App</Card.Title>
          <Card.Text className="mb-4">Current Count: <strong style={{fontSize:"1.2rem"}}>{count}</strong></Card.Text>
          <div className="d-flex justify-content-around" style={{ gap: "5px" }}>
            <Button style={{ backgroundColor: "blue" }} onClick={increment}> Increment </Button>
            <Button style={{ backgroundColor: "red" }} onClick={decrement}>Decrement</Button>
            <Button style={{ backgroundColor: "green" }} onClick={reset} > Reset</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default App
