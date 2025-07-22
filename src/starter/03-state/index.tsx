import { useState } from "react";

interface Link {
  id: number;
  url: string;
  text: string;
}

const navLinks = [
  {
    id: 1,
    url: "some url",
    text: "some text",
  },
  {
    id: 2,
    url: "some url",
    text: "some text",
  },
  {
    id: 3,
    url: "some url",
    text: "some text",
  },
];

function Component() {
  const [text, setText] = useState("shakeAndBake");
  // const [text, setText] = useState<string>("shakeAndBake");
  const [number, setNumber] = useState(123);
  // const [number, setNumber] = useState<number>(123);
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);

  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          //  setText("TypeScript")
          setNumber((prev) => prev + 1);
          setList(["1", "2", "3"]);
          setLinks([...links, { id: 4, url: "new url", text: "first text" }]);
        }}
      >
        click me
      </button>
    </div>
  );
}
export default Component;
