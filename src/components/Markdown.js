import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./style.css";

const Markdown = () => {
  const [markdown, setMarkDown] = useState("");
  return (
    <>
      <h1 className="name1">Markdown Editor</h1>
      <div className="center-div">
        <textarea
          className="mrkdwn-side"
          name="textarea"
          id="markdown"
          required
          placeholder="Write some markdown here..."
          value={markdown}
          onChange={(e) => setMarkDown(e.target.value)}
        ></textarea>
        <div className="result-side">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
      <footer>Copyright © 2022, @ Umar Ashraf</footer>
    </>
  );
};

export default Markdown;
