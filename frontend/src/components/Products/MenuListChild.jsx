import { useState } from "react";

export default function MenuListChild({ name }) {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleSelectMenu = (id) => {
    setSelectedMenu(prevSelectMenu => (prevSelectMenu === id ? null : id));
  };

  return (
    <li>
      <button onClick={() => handleSelectMenu(id)}>
        {name}
      </button>
    </li>
  );
}