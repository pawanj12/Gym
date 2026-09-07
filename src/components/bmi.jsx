// import { useState } from "react";
// import '../styles/bmi.css'

// // export default function BMIForm {
// //   const [weight, setWeight] = useState("");
// //   const [height, setHeight] = useState("");
// //   const [result, setResult] = useState(null);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const res = await fetch("http://localhost:8000/bmi", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ weight: parseFloat(weight), height: parseFloat(height) }),
// //     });
// //     const data = await res.json();
// //     setResult(data);
// //   };

// //   return (
// //     <section className="bg-gray-900 text-white py-12">
// //       <div className="max-w-md mx-auto">
// //         <h2 className="text-2xl font-bold mb-6 text-center">BMI Calculator</h2>
// //         <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
// //           <input
// //             type="number"
// //             placeholder="Weight (kg)"
// //             value={weight}
// //             onChange={(e) => setWeight(e.target.value)}
// //             className="w-full p-2 rounded bg-gray-700 text-white"
// //           />
// //           <input
// //             type="number"
// //             placeholder="Height (m)"
// //             value={height}
// //             onChange={(e) => setHeight(e.target.value)}
// //             className="w-full p-2 rounded bg-gray-700 text-white"
// //           />
// //           <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-2 rounded">
// //             Calculate BMI
// //           </button>
// //         </form>

// //         {result && (
// //           <div className="mt-6 text-center">
// //             <p className="text-xl">Your BMI: <span className="font-bold">{result.bmi}</span></p>
// //             <p className="text-lg">Category: <span className="text-green-400">{result.category}</span></p>
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // }

// export default function BMICalculator() {
//   const [height, setHeight] = useState("");
//   const [weight, setWeight] = useState("");
//   const [result, setResult] = useState("");

//   const calculateBMI = async () => {
//     const res = await fetch("http://127.0.0.1:5000/bmi", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ height, weight }),
//     });

//     const data = await res.json();
//     setResult(`${data.bmi} - ${data.status}`);
//   };

//   return (
//     <div className="max-w-md p-6 bg-zinc-900 rounded-xl">
//       <input
//         type="number"
//         placeholder="Height (cm)"
//         className="w-full p-3 mb-3 bg-black border rounded"
//         onChange={(e) => setHeight(e.target.value)}
//       />

//       <input
//         type="number"
//         placeholder="Weight (kg)"
//         className="w-full p-3 mb-3 bg-black border rounded"
//         onChange={(e) => setWeight(e.target.value)}
//       />

//       <button
//         onClick={calculateBMI}
//         className="w-full bg-lime-400 text-black p-3 rounded-full font-bold"
//       >
//         Calculate BMI
//       </button>

//       {result && (
//         <h2 className="text-lime-400 text-xl mt-4 text-center">{result}</h2>
//       )}
//     </div>
//   );
// }