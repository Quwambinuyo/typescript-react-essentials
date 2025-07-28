import { useState } from "react";

interface Person {
  name: string;
}

function Component() {
  const [text, setText] = useState("");
  const [email, setEmailt] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmailt(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData);
    console.log(data);
    const text = formData.get("text") as string;
    const person: Person = {
      name: text,
    };
  };

  return (
    <section>
      <div>
        <h2>Events Example</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            className="form-input mb-1"
            value={text}
            name="text"
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="email"
            className="form-input mb-1"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-block">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
export default Component;
