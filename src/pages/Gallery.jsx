// // src/pages/SchoolGallery.jsx
// import React from "react";

// const galleryItems = [
//   {
//     id: 1,
//     category: "Classroom",
//     title: "Learning Through Play",
//     description: "Primary 2 pupils exploring shapes and colors.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1580582932707-520aed4e9987?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     id: 2,
//     category: "Sports",
//     title: "Annual Sports Day",
//     description: "Relay race excitement during the 2025 sports festival.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     id: 3,
//     category: "Excursions",
//     title: "Zoo Educational Visit",
//     description: "Primary students learning about wildlife conservation.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     id: 4,
//     category: "Events",
//     title: "End of Year Ceremony",
//     description: "Awards, performances, and academic recognitions.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     id: 5,
//     category: "Creative Arts",
//     title: "Student Art Exhibition",
//     description: "Showcasing creativity and imagination.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1513364776144-9b22f654b9f2?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     id: 6,
//     category: "Literacy",
//     title: "Story Time Session",
//     description: "Nursery pupils enjoying guided reading.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
//   },
// ];

// export default function SchoolGallery() {
//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-800">
//       {/* Header */}
//       <header className="border-b bg-white">
//         <div className="max-w-7xl mx-auto px-6 py-16 text-center">
//           <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
//             School Gallery
//           </h1>
//           <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-slate-600 leading-relaxed">
//             A curated collection of academic, cultural, and extracurricular
//             moments reflecting excellence, discipline, and holistic education.
//           </p>
//         </div>
//       </header>

//       {/* Gallery */}
//       <main className="max-w-7xl mx-auto px-6 py-20">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {galleryItems.map((item) => (
//             <article
//               key={item.id}
//               className="group bg-white rounded-xl overflow-hidden border 
//                          border-slate-200 transition hover:shadow-lg"
//             >
//               <div className="relative aspect-[4/3] overflow-hidden">
//                 <img
//                   src={item.imageUrl}
//                   alt={item.title}
//                   loading="lazy"
//                   className="h-full w-full object-cover transition-transform duration-500 
//                              group-hover:scale-105"
//                 />

//                 {/* Category */}
//                 <span className="absolute top-4 left-4 bg-slate-900/80 
//                                  text-white text-xs uppercase tracking-wide 
//                                  px-3 py-1 rounded-md">
//                   {item.category}
//                 </span>
//               </div>

//               {/* Content */}
//               <div className="p-6">
//                 <h3 className="text-lg font-semibold text-slate-900">
//                   {item.title}
//                 </h3>
//                 <p className="mt-2 text-sm text-slate-600 leading-relaxed">
//                   {item.description}
//                 </p>
//               </div>
//             </article>
//           ))}
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="border-t bg-white">
//         <div className="max-w-7xl mx-auto px-6 py-10 text-center text-sm text-slate-600">
//           © {new Date().getFullYear()} Sunshine Academy • Ibadan, Nigeria <br />
//           Excellence in Learning • Character • Leadership
//         </div>
//       </footer>
//     </div>
//   );
// }