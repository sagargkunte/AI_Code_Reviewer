import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import { useState } from "react";
import Editor from "react-simple-code-editor";
import "./App.css";
import "prismjs/components/prism-javascript"; 

function App() {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);

  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) =>
              prism.highlight(code, prism.languages.javascript, "javascript")
            }
            padding={10}
            style={{
              fontSize: 12,
              backgroundColor: "grey",
              border: "1px solid #ddd",
              borderRadius: "5px",
              height: "100%",
              width: "100%",
              fontFamily: "monospace",
            }}
          />
        </div>
        <div className="review">Review</div>
      </div>
      <div className="right"></div>
    </main>
  );
}

export default App;
