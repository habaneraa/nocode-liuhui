import React from 'react';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
      <div className="flex-shrink-0 transform transition-transform duration-300 hover:scale-105">
        <img 
          src="/images/image005.jpg" 
          alt="刘辉" 
          className="w-full max-w-xs rounded-xl shadow-lg mx-auto object-cover border-4 border-white"
        />
      </div>
      
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          刘辉 (Hui Liu)
        </h1>
        <p className="text-2xl text-gray-700 mt-2 font-medium">教授</p>
        
        <div className="mt-6 space-y-3">
          <p className="text-gray-600 flex items-center">
            <span className="bg-blue-100 text-blue-800 p-1 rounded mr-2">🏫</span>
            <a 
              href="http://cs.bit.edu.cn/" 
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              计算机科学与技术学院
            </a>
          </p>
          <p className="text-gray-600 flex items-center">
            <span className="bg-blue-100 text-blue-800 p-1 rounded mr-2">🎓</span>
            <a 
              href="http://english.bit.edu.cn/" 
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              北京理工大学
            </a>
          </p>
          <p className="text-gray-600 flex items-center">
            <span className="bg-blue-100 text-blue-800 p-1 rounded mr-2">📍</span>
            北京, 中国
          </p>
        </div>
        
        {/* <div className="mt-6 transform transition-transform duration-300 hover:scale-105">
          <img 
            src="https://nocode.meituan.com/photo/search?keyword=Beijing%20Institute%20of%20Technology,logo&width=200&height=46" 
            alt="BIT Logo" 
            className="mt-2 mx-auto md:mx-0 object-cover"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Header;
