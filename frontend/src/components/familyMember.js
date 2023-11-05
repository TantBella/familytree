// import React, { useState, useEffect } from "react";

// function familyMember({ id, name, age }) {
//   const [editedName, setEditedName] = useState(name);
//   const [editedAge, setEditedAge] = useState(age);
//   const [isEditing, setIsEditing] = useState(false);

//   const handleEditClick = () => {
//     setIsEditing(true);
//   };

//   const handleSaveClick = () => {
//     fetch(`/api/familymembers/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name: editedName, age: editedAge }),
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         alert(`Välkommen till familjeträdet!!`);
//       });
//   };

//   useEffect(() => {
//     setEditedName(name);
//     setEditedAge(age);
//   }, [name, age]);

//   return (
//     <div>
//       <div>
//         {isEditing ? (
//           <>
//             <input
//               type="text"
//               value={editedName}
//               onChange={(e) => setEditedName(e.target.value)}
//             />
//             <input
//               type="number"
//               value={editedAge}
//               onChange={(e) => setEditedAge(e.target.value)}
//             />
//           </>
//         ) : (
//           <>
//             <div>Name: {name}</div>
//             <div>Age: {age}</div>
//           </>
//         )}
//       </div>
//       <button onClick={isEditing ? handleSaveClick : handleEditClick}>
//         {isEditing ? "Save" : "Edit"}
//       </button>
//     </div>
//   );
// }

// export default familyMember;
