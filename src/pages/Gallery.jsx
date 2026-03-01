import { useState, useEffect, useRef } from "react";
import { FaExpandAlt, FaTimes, FaCamera, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function SchoolGallery() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const galleryRef = useRef(null);
  const imagesPerPage = 6;

  // Updated images with your requested categories
  const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1544531585-9847b68c8c86", category: "Teachers", title: "Faculty Workshop Session" },
    { id: 2, src: "https://images.unsplash.com/photo-1509062522246-3755977927d7", category: "Students", title: "Chemistry Lab Practical" },
    { id: 3, src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18", category: "Sport", title: "Inter-House Athletics" },
    { id: 4, src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1", category: "Library", title: "Digital Research Wing" },
    { id: 5, src: "https://images.unsplash.com/photo-1577891729319-f69705f41bbd", category: "Students", title: "Class of 2025 Graduation" },
    { id: 6, src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655", category: "Teachers", title: "Senior Biology Lecture" },
    { id: 7, src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b", category: "Students", title: "Morning Assembly" },
    { id: 8, src: "https://images.unsplash.com/photo-1588072432836-e10032774350", category: "Sport", title: "Indoor Robotics Arena" },
    { id: 9, src: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4", category: "Sport", title: "Swimming Championship" },
    { id: 10, src: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f", category: "Students", title: "Outdoor Learning Circle" },
    { id: 11, src: "https://images.unsplash.com/photo-1501290741922-b56c0d097e79", category: "Teachers", title: "Music & Performing Arts Staff" },
    { id: 12, src: "https://images.unsplash.com/photo-1564910443496-5fd2d068dd01", category: "Library", title: "The Quiet Zone" },
    { id: 13, src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b", category: "Library", title: "Reference & Archives" },
    { id: 14, src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc", category: "Students", title: "Student Council Meeting" },
    { id: 15, src: "https://images.unsplash.com/photo-1529390079861-591de354faf5", category: "Sport", title: "Basketball Finals" },
    { id: 16, src: "https://images.unsplash.com/photo-1516321497487-e288fb19713f", category: "Teachers", title: "Head of Department Briefing" },
    { id: 17, src: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca", category: "Sport", title: "Tennis Academy" },
    { id: 18, src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45", category: "Library", title: "Study Group Station" },
    { id: 19, src: "https://images.unsplash.com/photo-1501290829350-2850029bc485", category: "Library", title: "Children's Reading Room" },
    { id: 20, src: "https://images.unsplash.com/photo-1491845274214-46f9015949d8", category: "Teachers", title: "One-on-One Mentorship" },
  ];

  const categories = ["All", "Teachers", "Students", "Library", "Sport"];

  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const filteredImages = filter === "All" ? images : images.filter(img => img.category === filter);
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);

  return (
    <section ref={galleryRef} className="py-24 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-12 mb-20">
          <div className="space-y-5 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-800/50">
              <FaCamera className="text-blue-600 dark:text-blue-400 text-xs" />
              <span className="text-blue-600 dark:text-blue-400 font-black tracking-[0.2em] text-[10px] uppercase">
                Captured Excellence
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-none tracking-tighter">
              Pearly Gate <br /><span className="text-blue-600">Gallery</span>
            </h2>
          </div>

          {/* Filter Tab */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-gray-100/50 dark:bg-gray-900/50 backdrop-blur-md rounded-[2rem] border border-gray-200 dark:border-gray-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-[1.5rem] text-[11px] font-black uppercase tracking-widest transition-all duration-300
                  ${filter === cat 
                    ? "bg-white dark:bg-gray-800 text-blue-600 shadow-xl shadow-black/5 dark:shadow-none scale-105" 
                    : "text-gray-500 hover:text-gray-900 dark:hover:text-white"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10 min-h-[700px]">
          {currentImages.map((img, idx) => (
            <div 
              key={img.id}
              onClick={() => setSelectedImg(img)}
              className="relative group overflow-hidden rounded-[3rem] cursor-pointer break-inside-avoid shadow-sm hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 ease-out"
              style={{ animation: `fadeInUp 0.6s ease-out forwards ${idx * 0.1}s`, opacity: 0 }}
            >
              <img 
                src={`${img.src}?auto=format&fit=crop&w=1000&q=90`} 
                alt={img.title}
                className="w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-blue-600/20 backdrop-blur-md text-blue-400 text-[9px] font-black uppercase tracking-[0.2em] rounded-lg mb-4 border border-blue-400/20">
                    {img.category}
                    </span>
                    <h3 className="text-white text-2xl font-black leading-tight mb-6">{img.title}</h3>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-gray-900 shadow-lg">
                            <FaExpandAlt size={16} />
                        </div>
                        <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">View Masterpiece</span>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-32 flex flex-col items-center gap-8">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="group w-14 h-14 rounded-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-400 hover:border-blue-600 hover:text-blue-600 disabled:opacity-20 transition-all"
              >
                <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-800">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-10 h-10 rounded-full font-black text-xs transition-all duration-300
                      ${currentPage === i + 1 
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/40 scale-110" 
                        : "text-gray-400 hover:text-blue-600"}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="group w-14 h-14 rounded-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-400 hover:border-blue-600 hover:text-blue-600 disabled:opacity-20 transition-all"
              >
                <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="h-[1px] w-24 bg-gray-100 dark:bg-gray-800" />
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.4em]">
                Collection {currentPage} <span className="text-blue-600 mx-2">/</span> {totalPages}
            </p>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImg && (
          <div className="fixed inset-0 z-[100] bg-gray-950/98 backdrop-blur-2xl flex items-center justify-center p-6 animate-fadeIn">
            <button 
              onClick={() => setSelectedImg(null)}
              className="absolute top-10 right-10 w-16 h-16 bg-white/5 text-white rounded-full flex items-center justify-center hover:bg-red-500 hover:scale-110 transition-all border border-white/10"
            >
              <FaTimes size={28} />
            </button>
            <div className="max-w-6xl w-full flex flex-col items-center gap-8">
              <img 
                src={selectedImg.src} 
                className="max-h-[75vh] w-auto rounded-[4rem] shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-white/5 animate-zoomIn" 
                alt={selectedImg.title} 
              />
              <div className="text-center space-y-3">
                <h4 className="text-4xl font-black text-white tracking-tight">{selectedImg.title}</h4>
                <div className="flex items-center justify-center gap-3">
                    <div className="w-8 h-[1px] bg-blue-600" />
                    <p className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px]">{selectedImg.category}</p>
                    <div className="w-8 h-[1px] bg-blue-600" />
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </section>
  );
}