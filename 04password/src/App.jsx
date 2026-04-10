import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {

  const [length, setLength] = useState(8);
  const [useNumbers, setUseNumbers] = useState(false);
  const [useChars, setUseChars] = useState(false);
  const [password, setPassword] = useState("");

  const inputRef = useRef(null);

  // Generate password
  function generatePassword() {

    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (useNumbers) chars += "0123456789";
    if (useChars) chars += "!@#$%^&*()_+";

    let newPassword = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }

    setPassword(newPassword);
  }

  // Copy password
  function copyPassword() {
    navigator.clipboard.writeText(password);
    alert("Password Copied!");
  }

  // Auto generate when settings change
  useEffect(() => {
    generatePassword();
  }, [length, useNumbers, useChars]);

  return (
    <div style={{ textAlign: "center", padding: "40px" }} className="w-full h-auto flex flex-wrap justify-between flex-col bg-amber-900">

      <h1 className="text-black bg-white text-center rounded-sm ">Password Generator</h1>

      <div className="flex flex-wrap bg-gray-600 ">
        <input
        type="text"
        value={password}
        ref={inputRef}
        readOnly
        style={{ padding: "10px", width: "250px" }}
        aria-placeholder="Password"
        className="bg-black align-center text-2xl r-"
      />

      <button
        onClick={copyPassword}
        style={{ marginLeft: "10px", cursor: "pointer" }}
        className="bg-blue-600 p-5 "
      >
        Copy
      </button>
      </div>

      <br /><br />

      <div>
        <label>Password Length: {length}</label>
        <br />

        <input
          type="range"
          min="6"
          max="20"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>

      <br />

      <div>
        <label>
          <input
            type="checkbox"
            checked={useNumbers}
            onChange={() => setUseNumbers(!useNumbers)}
          />
          Include Numbers
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={useChars}
            onChange={() => setUseChars(!useChars)}
          />
          Include Special Characters
        </label>
      </div>

    </div>
  );
}

export default App;