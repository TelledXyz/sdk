import React, { useState } from "react";
import { Button, Card, Modal } from "./components";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Telled Components</h1>

      <Button onClick={() => setOpen(true)}>Open Modal</Button>

      <Card title="Telled Card">
        This is a reusable card component.
      </Card>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>Hello from Modal</h2>
      </Modal>
    </div>
  );
}
