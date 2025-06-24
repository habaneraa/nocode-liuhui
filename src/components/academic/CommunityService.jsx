import React from 'react';
import { UsersIcon, CalendarIcon } from 'lucide-react';

const CommunityService = () => {
  const services = [
    { year: "2025", content: "CCF ChinaSoft PC联合主席, FSE PC(元评审), ISSTA PC" },
    { year: "2024", content: "ASE PC, ISSTA PC, IET Software AE, IEEE Access AE" },
    { year: "2023", content: "ESEC/FSE PC, ASE PC, IET Software AE, 《软件学报》特邀编辑，《计算机研究与发展》特邀编辑" },
    { year: "2022", content: "ASE PC, ICSME PC, SANER PC, IET Software AE, IEEE Access AE, Journal of Software: Evolution and Process客座编辑" },
    { year: "2021", content: "ICSME PC, SANER PC, Internetware PC, COMPSAC PC, IET Software AE, IEEE Access AE" },
    { year: "2020", content: "ICSME PC, SANER PC, RE Posters and Demos Track PC, COMPSAC PC, Internetware PC, IET Software AE, EMSE客座编辑, JSS客座编辑" }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">
        <UsersIcon className="h-8 w-8 text-purple-600 bg-purple-100 p-1.5 rounded-full" />
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          社区服务 (2020年至今)
        </span>
      </h2>
      
      <div className="relative pl-8 border-l-2 border-purple-200">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="mb-8 relative group"
          >
            <div className="absolute -left-11 mt-1.5 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold z-10">
              {service.year}
            </div>
            <div className="ml-2 p-5 bg-white rounded-xl shadow-sm border border-gray-200 group-hover:shadow-lg transition-all duration-300">
              <p className="text-gray-700">{service.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityService;
