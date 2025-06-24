import React from 'react';
import Header from '@/components/academic/Header';
import News from '@/components/academic/News';
import Contributions from '@/components/academic/Contributions';
import CommunityService from '@/components/academic/CommunityService';
import Research from '@/components/academic/Research';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 bg-[url('https://nocode.meituan.com/photo/search?keyword=abstract,tech,pattern&width=1200&height=800')] bg-cover bg-center">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-10 transform transition-all duration-300 hover:shadow-2xl">
          <Header />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:shadow-2xl">
              <div className="prose max-w-none">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-3 h-10 rounded-full mr-3"></div>
                  <h2 className="text-2xl font-bold text-gray-800">个人简介</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    我是北京理工大学计算机科学与技术学院的教授。曾任北京大学软件工程研究所研究生，2008年6月获得博士学位。
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img 
                      src="https://nocode.meituan.com/photo/search?keyword=deep,learning,code&width=400&height=300" 
                      alt="深度学习" 
                      className="rounded-lg shadow-md object-cover h-full"
                    />
                    <p className="text-lg bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                      我的研究方向包括基于深度学习的软件工程，特别是：基于深度学习的程序生成；软件重构；自动程序修复；软件质量；基于机器学习的代码补全；软件工程数据集的自动构建。我的工作部分由中国国家自然科学基金和国家重点研发计划资助。
                    </p>
                  </div>
                  
                  <p className="text-lg font-semibold bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg border-l-4 border-indigo-500 animate-pulse">
                    我一直在寻找有自我驱动力的学生与我合作。如果您对深度学习、软件工程、自然语言处理或数据挖掘感兴趣，请通过电子邮件联系我！
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:shadow-2xl">
            <img 
              src="https://nocode.meituan.com/photo/search?keyword=research,lab,technology&width=400&height=500" 
              alt="研究实验室" 
              className="rounded-lg shadow-md object-cover w-full h-full"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:shadow-2xl">
            <News />
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:shadow-2xl">
            <Contributions />
          </div>
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-10 transform transition-all duration-300 hover:shadow-2xl">
          <CommunityService />
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:shadow-2xl">
          <Research />
        </div>
      </div>
    </div>
  );
};

export default Index;
