import React from 'react';
import { CodeIcon, GitMergeIcon } from 'lucide-react';

const Contributions = () => {
  const contributions = [
    "提高提取局部变量重构的安全性 #331 #333",
    "提高提取局部变量重构的安全性 #39",
    "通过识别可能改变提取表达式值的语句提高'提取局部变量'重构的安全性 #432 #439",
    "提取局部变量重构的自动化名称推荐 #601",
    "基于上下文的提取局部变量重构名称推荐 #655"
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
        <GitMergeIcon className="h-8 w-8 text-green-600 bg-green-100 p-1.5 rounded-full" />
        <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
          对开源社区的贡献
        </span>
      </h2>
      
      <div className="space-y-4">
        {contributions.map((item, index) => (
          <div 
            key={index} 
            className="flex items-start p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="bg-green-100 text-green-800 rounded-full p-2 mr-3 flex-shrink-0">
              <CodeIcon className="h-5 w-5" />
            </div>
            <div className="text-gray-700">
              <span className="font-semibold text-green-600">已合并到Eclipse:</span> {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributions;
