import React from 'react';

const Header: React.FC = () => {
  return (
    <header 
      className="relative min-h-[50vh] sm:min-h-[60vh] flex flex-col items-center justify-center text-white overflow-hidden"
      style={{ backgroundColor: '#FFDF60' }}
    >
      {/* Marigold Garland Banner */}
      <img
        src="https://i.postimg.cc/PfR8VtxY/pngtree-marigold-toran-door-garland-decorations-hindu-festival-border-vector-design-png-image-621965.png"
        alt="Marigold Garland"
        className="absolute top-0 left-0 w-full object-cover z-10"
        style={{ maxHeight: '150000px' }}
      />

      {/* Rotating Decorative Image Behind Content with Blur */}
      <div className="absolute z-0 w-64 h-64 animate-spin-slow filter blur-slg opacity-50">
        <img 
          src="https://i.postimg.cc/9FqDf05b/34.png"
          alt="Decorative Spinner"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Ganesh Image in Circular Container */}
      <div className="relative mb-6 mt-6 md:mb-12 md:mt-12 z-20" style={{ top: '30px' }}>
        <div className="w-56 h-56 md:w-72 md:h-72 flex items-center justify-center overflow-hidden">
          <img 
        // src='https://i.postimg.cc/LXDm5dNm/R.png'
        src='https://i.postimg.cc/hjj5LHKD/vector-lord-ganpati-illustration-ganesh-chaturthi-festival-india-398157-59-removebg-preview.png'
        alt="Lord Ganesh" 
        className="w-full h-full"
        style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
      
      {/* Title in Telugu */}
      <div className="relative text-center px-3 z-20">
        <h2 className="telugu-text text-2xl md:text-3xl font-semibold mt-2 text-[#5C3B0B]">
          శ్రీ గణేశాయ నమః
        </h2>
        <h1 className="telugu-text text-3xl md:text-5xl font-bold mb-0 text-[#5C3B0B]">
          పోలా వారి కళ్యాణశుభలేఖ
        </h1>
      </div>
    </header>
  );
};

export default Header;
