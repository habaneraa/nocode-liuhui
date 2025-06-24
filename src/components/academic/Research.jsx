import React from 'react';
import { BookOpenIcon, AwardIcon } from 'lucide-react';

const Research = () => {
  const publications = [
    { 
      year: "2024", 
      authors: "Taiming Wang, Hui Liu*, Yuxia Zhang, Yanjie Jiang.", 
      title: "Recommending Variable Names for Extract Local Variable Refactorings.", 
      journal: "ACM Transactions on Software Engineering Methodology. CCF-A"
    },
    { 
      year: "2024", 
      authors: "Fu Fan, Yanjie Jiang, Tianyi Chen, Hengshun Zhang, Yuxia Zhang, Nan Niu, Hui Liu*.", 
      title: "An Empirical Study on Common Sense-Violating Bugs in Mobile Apps.", 
      journal: "ACM Transactions on Software Engineering Methodology. CCF-A"
    },
    { 
      year: "2024", 
      authors: "Tianyi Chen, Yanjie Jiang, Fu Fan, Bo Liu, Hui Liu*.", 
      title: "A Position-Aware Approach to Decomposing God Classes.", 
      journal: "IEEE/ACM International Conference on Automated Software Engineering. CCF-A"
    },
    { 
      year: "2025", 
      authors: "Yanjie Jiang, Hui Liu*, Jinyan Liu, Yuxia Zhang, Weixing Ji, Hao Zhong, and Lu Zhang.", 
      title: "An Empirical Study on the Relationship Between Defects and Source Code's Unnaturalness.", 
      journal: "ACM Transactions on Software Engineering and Methodology (TOSEM). CCF-A"
    },
    { 
      year: "2025", 
      authors: "Haris Ali Khan, Yanjie Jiang*, Qasim Umer, Yuxia Zhang, Waseem Akram, and Hui Liu*.", 
      title: "Has My Code Been Stolen for Model Training? A Naturalness Based Approach to Code Contamination Detection.", 
      journal: "ACM International Conference on the Foundations of Software Engineering (FSE2025). CCF-A"
    }
  ];

  const awards = [
    "ACM杰出论文奖 - ESEC/FSE 2023 和 ICSE 2022",
    "RE'2021最佳研究论文奖",
    "IET Software优质奖 (2018)",
    "新世纪优秀人才 (2013)",
    "北京市高等学校青年英才教师 (2013)",
    "中国计算机学会杰出会员",
    "CCF软件工程专业委员会秘书长"
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold flex items-center gap-3 mb-8">
        <BookOpenIcon className="h-8 w-8 text-indigo-600 bg-indigo-100 p-1.5 rounded-full" />
        <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
          研究成果
        </span>
      </h2>
      
      <div className="mb-6">
        <a 
          href="https://dblp.dagstuhl.de/pid/93/4010-3.html" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300 bg-blue-50 px-4 py-2 rounded-lg"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <span className="mr-2">🔗</span>
          完整出版物列表可在DBLP查看
          <span className="ml-2 font-semibold text-indigo-600">(中国计算机学会推荐A类顶级期刊/会议)</span>
        </a>
      </div>
      
      <div className="space-y-5">
        {publications.map((pub, index) => (
          <div 
            key={index} 
            className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                {pub.year}
              </span>
              <span className="bg-red-100 text-red-800 text-sm font-medium px-3 py-1 rounded-full">
                CCF-A
              </span>
            </div>
            <p className="font-semibold text-gray-800 mb-1">{pub.authors}</p>
            <p className="text-gray-700 mb-2">{pub.title}</p>
            <p className="text-gray-600">{pub.journal}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-10 p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border border-amber-200">
        <div className="flex items-center gap-3 mb-4">
          <AwardIcon className="h-6 w-6 text-amber-600" />
          <h3 className="text-xl font-bold text-amber-800">获奖情况</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="flex items-center p-3 bg-white rounded-lg border border-amber-100 shadow-sm"
            >
              <span className="bg-amber-100 text-amber-800 rounded-full p-1 mr-3">🏆</span>
              <span className="text-gray-700">{award}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
