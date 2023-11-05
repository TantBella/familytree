import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newFamilyMember, setNewFamilyMember] = useState({
    name: "",
    age: 0,
    role: "",
  });

  // useEffect(() => {});

  const getFamily = () => {
    fetch("/api")
      .then((response) => response.json())
      .then((result) => {
        console.log("Familjen är hämtad = ", result);
        setData(result);
      });
  };

  const addFamilyMember = () => {
    fetch("/api/addFamilyMember", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newFamilyMember),
    })
      .then((response) => response.json())
      .then(() => {
        console.log(newFamilyMember);
        getFamily();
        setNewFamilyMember({ name: "", age: 0, role: "" });
      });
  };

  return (
    <>
      <div className="main">
        <div className="container">
          <div>
            <h1>Familjeträdet!</h1>
          </div>
          <div>
            <input type="button" onClick={getFamily} value="Hämta familjen" />
          </div>
          {isLoading ? (
            <p>Laddar data...</p>
          ) : (
            <div>
              <ul>
                {data.map((familyMember) => (
                  <li key={familyMember.id}>
                    Namn: {familyMember.name}, Ålder: {familyMember.age},
                    Familjeroll: {familyMember.role}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="container">
          <div>
            <h1>Lägg till en ny familjemedlem</h1>
          </div>
          <div className="container">
            <input
              type="text"
              placeholder="Namn"
              value={newFamilyMember.name}
              onChange={(e) =>
                setNewFamilyMember({ ...newFamilyMember, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Ålder"
              value={newFamilyMember.age}
              onChange={(e) =>
                setNewFamilyMember({ ...newFamilyMember, age: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Familjeroll"
              value={newFamilyMember.role}
              onChange={(e) =>
                setNewFamilyMember({ ...newFamilyMember, role: e.target.value })
              }
            />
            <div>
              <input
                type="button"
                onClick={addFamilyMember}
                value="Lägg till"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
