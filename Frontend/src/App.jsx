import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import { useState } from "react";
import Editor from "react-simple-code-editor";
import "./App.css";
import "prismjs/components/prism-javascript"; 
import axios from 'axios';
import Markdown from 'react-markdown';

function App() {
  const [code, setCode] = useState(`Enter your code which need to verify.. \nEx: function add() {\n  return a + b;\n} \n`);
  const [review,setReview] = useState('');

  async function reviewCode() {
    const res = await axios.post('http://localhost:3000/ai/verifyCode',{code});
    console.log(res.data);
    setReview(res.data);
  }
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
              backgroundColor: "black",
              border: "1px solid #ddd",
              borderRadius: "5px",
              height: "100%",
              width: "100%",
              fontFamily: "monospace",
            }}
          />
        </div>
        <div className="review" onClick={reviewCode}>Review</div>
      </div>
      <div className="right"><Markdown>{review}</Markdown></div>
    </main>
  );
}

export default App;
