import { useState } from "react";

function ROW({ title }) {
  const [movis, setMovies] = useState([]);
  return (
    <div>
      <h2>{title}</h2>
      {/* title */}
    </div>
  );
}

export default ROW;
