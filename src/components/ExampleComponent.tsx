import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const Button = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Counter = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: white;
`;

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Counter>{count}</Counter>
      <Button onClick={() => setCount(count + 1)}>Increment Counter</Button>
      <Button onClick={() => setCount(0)}>Reset</Button>
    </Container>
  );
};

export default ExampleComponent;
