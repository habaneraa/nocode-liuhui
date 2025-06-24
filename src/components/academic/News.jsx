import React from 'react';
import { NewspaperIcon } from 'lucide-react';

const News = () => {
  const newsItems = [
    { date: '2025/3/7', content: '我们的论文"通过比较连续版本发现软件重构的自动化方法"已被IEEE TSE接受', color: 'text-red-600' },
    { date: '2025/1/15', content: '我们的论文"我的代码是否被用于模型训练？基于自然度的代码污染检测方法"已被FSE 2025接受', color: 'text-blue-600' },
    { date: '2025/1/15', content: '我们的论文"基于自动生成上下文提示的LLM方法名推荐"已被FSE 2025接受', color: 'text-red-600' },
    { date: '2025/1/15', content: '我们的论文"提取局部变量重构的自动化方法"已被ACM TOSEM接受', color: 'text-blue-600' },
    { date: '2024/12/23', content: '我们的论文"为提取局部变量重构推荐变量名"已被ACM TOSEM接受', color: 'text-red-600' },
    { date: '2024/12/09', content: '我们的论文"移动应用中违反常识错误的实证研究"已被ACM TOSEM接受', color: 'text-blue-600' },
    { content: '我们的论文"使用缩写缩短过长的方法名"已被ACM TOSEM接受', color: 'text-red-600' },
    { content: '我们的论文"基于位置感知的上帝类分解方法"已被ASE 2024接受', color: 'text-blue-600' },
    { content: '我们的论文"基于上下文感知的字段重命名推荐"已被ICSE 2024接受', color: 'text-red-600' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
        <NewspaperIcon className="h-8 w-8 text-blue-600 bg-blue-100 p-1.5 rounded-full" />
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          最新动态
        </span>
      </h2>
      
      <div className="space-y-4">
        {newsItems.map((item, index) => (
          <div 
            key={index} 
            className="flex items-start p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-3 flex-shrink-0">
              <span className="font-bold">📢</span>
            </div>
            <div>
              {item.date && (
                <span className="font-medium text-gray-500 mr-2">{item.date}:</span>
              )}
              <span className={`${item.color || 'text-gray-700'} font-medium`}>
                {item.content}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
