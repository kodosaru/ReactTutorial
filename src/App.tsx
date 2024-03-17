import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Chicago", "Detroit", "Berlin"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button
        color="secondary"
        onClick={() => {
          setAlertVisibility(true);
          console.log("Clicked");
        }}
      >
        My Button
      </Button>
      {/*<Alert>
        Hello World<span>Again</span>
      </Alert>*/}
      {/*       <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      ></ListGroup> */}
    </div>
  );
}

export default App;
