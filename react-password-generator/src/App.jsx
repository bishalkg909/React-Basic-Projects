import { useState, useCallback, useEffect, useRef } from "react"

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef Hook const var = useRef(defaultValue)
  const passwordRef = useRef(null);

  // const passwordGenerator = useCallback(function, [dependencies])
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str+= "0123456789";
    if(charAllowed) str+= "`~!@#$%^&*()_+-={}[]|;:',./?";

    for(let i=1; i<=length; i++){
      let randomIndex = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(randomIndex); 
    }
    
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

  // Copy to Clipboard Method
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,10);
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(() => {
    passwordGenerator()
  } ,[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-6 py-5 bg-gray-800 text-white">
        {/* Title */}
        <h1 className="text-center text-2xl font-bold mb-6 text-orange-400">
          Password Generator
        </h1>
  
        {/* Password Display */}
        <div className="flex shadow-md rounded-lg overflow-hidden mb-6 bg-gray-700">
          <input
            type="text"
            value={password}
            className="w-full py-2 px-3 bg-gray-700 text-gray-300 outline-none placeholder-gray-500"
            placeholder="Your generated password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-500 text-xs text-white px-4 py-2 rounded-r-md transition"
          >
            Copy
          </button>
        </div>
  
        {/* Settings */}
        <div className="space-y-4">
          {/* Length Slider */}
          <div className="flex items-center justify-between text-sm">
            <label className="text-gray-300">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="w-full ml-4"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
  
          {/* Options */}
          <div className="flex flex-col space-y-2 text-sm">
            <div className="flex items-center">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                className="accent-orange-400 cursor-pointer"
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              <label htmlFor="numberInput" className="ml-2">
                Include Numbers
              </label>
            </div>
  
            <div className="flex items-center">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
                className="accent-orange-400 cursor-pointer"
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="characterInput" className="ml-2">
                Include Special Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default App
