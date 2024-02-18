"use client";

import { useState } from "react";

export const GetFile = () => {
  const [fileName, setFileName] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [error, setError] = useState<string>("");

  const onClick = async () => {
    if (!fileName) return;

    const response = await fetch(`/api/get-file?fileName=${fileName}`);

    if (!response.ok) {
      setError("Error getting file");
      return;
    }

    const { url } = await response.json();

    setUrl(url);
  };

  return (
    <>
      <div>
        <h1>Get your file</h1>
        <br />
        <input type="text" onChange={(e) => setFileName(e.target.value)} />
        <br />
        <br />
        <button onClick={onClick}>Get</button>
      </div>
      <br />
      {url && <img src={url} alt="file" />}
      {error && <p>{error}</p>}
    </>
  );
};
