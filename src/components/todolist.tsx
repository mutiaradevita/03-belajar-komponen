// Kode Awal
// const person = {
//     name: 'Gregorio Y. Zara',
//     theme: {
//       backgroundColor: 'black',
//       color: 'pink'
//     }
//   };
  
//   export default function TodoList() {
//     return (
//       <div style={person.theme}>
//         <h1>{person}'s Todos</h1>
//         <img
//           className="avatar"
//           src="https://i.imgur.com/7vQD0fPs.jpg"
//           alt="Gregorio Y. Zara"
//         />
//         <ul>
//           <li>Improve the videophone</li>
//           <li>Prepare aeronautics lectures</li>
//           <li>Work on the alcohol-fuelled engine</li>
//         </ul>
//       </div>
//     );
//   }

// Kode Perbaikan
// const person = {
//     name: 'Gregorio Y. Zara',
//     theme: {
//       backgroundColor: 'black',
//       color: 'pink'
//     }
//   };

//   export function TodoList() {
//     return (
//       <div style={person.theme}>
//         <h1>{person.name} s Todos</h1>
//         <img
//           className="avatar"
//           src="https://i.imgur.com/7vQD0fPs.jpg"
//           alt="Gregorio Y. Zara"
//         />
//         <ul>
//           <li>Improve the videophone</li>
//           <li>Prepare aeronautics lectures</li>
//           <li>Work on the alcohol-fuelled engine</li>
//         </ul>
//       </div>
//     );
//   }

// Soal nomor 5
const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    },
    url: 'https://i.imgur.com/7vQD0fPs.jpg'
  };

  export function TodoList() {
    return (
      <div style={person.theme}>
        <h1>{person.name} s Todos</h1>
        <img
          className="avatar"
          src={person.url}
          alt={person.name}
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }