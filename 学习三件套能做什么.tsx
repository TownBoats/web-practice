import React from 'react';
import { 
  Laptop, 
  FileText, 
  Home, 
  Palette, 
  CheckSquare, 
  Book, 
  Calculator,
  Timer,
  Images,
  Gamepad,
  BarChart,
  FormInput,
  Layout
} from 'lucide-react';

const PPTSlide = () => {
  const categories = [
    {
      title: "个人项目",
      color: "bg-blue-100",
      titleColor: "text-blue-700",
      borderColor: "border-blue-200",
      icon: Laptop,
      items: [
        { text: "个人博客/作品集网站", icon: FileText },
        { text: "在线简历", icon: FileText },
        { text: "个人主页", icon: Home },
        { text: "兴趣项目展示", icon: Palette }
      ]
    },
    {
      title: "实用工具",
      color: "bg-green-100",
      titleColor: "text-green-700",
      borderColor: "border-green-200",
      icon: Calculator,
      items: [
        { text: "待办事项清单", icon: CheckSquare },
        { text: "笔记应用", icon: Book },
        { text: "简单的计算器", icon: Calculator },
        { text: "倒计时工具", icon: Timer },
        { text: "图片画廊", icon: Images }
      ]
    },
    {
      title: "互动性网页",
      color: "bg-purple-100",
      titleColor: "text-purple-700",
      borderColor: "border-purple-200",
      icon: Layout,
      items: [
        { text: "小游戏（记忆卡片、贪吃蛇）", icon: Gamepad },
        { text: "数据可视化图表", icon: BarChart },
        { text: "交互式问卷", icon: FormInput },
        { text: "动态展示页面", icon: Layout }
      ]
    }
  ];

  return (
    <div className="w-full h-full bg-white p-8 font-sans">
      {/* 标题 */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          学习前端能做什么？
        </h1>
        <p className="text-gray-500 mt-2">Frontend Development Applications</p>
      </div>

      {/* 内容区域 */}
      <div className="grid grid-cols-3 gap-6">
        {categories.map((category, idx) => (
          <div 
            key={idx} 
            className={`${category.color} rounded-xl p-6 border ${category.borderColor}`}
          >
            <div className="flex items-center mb-4">
              <category.icon className={`w-6 h-6 ${category.titleColor} mr-2`} />
              <h2 className={`text-xl font-bold ${category.titleColor}`}>
                {category.title}
              </h2>
            </div>
            <ul className="space-y-3">
              {category.items.map((item, index) => (
                <li key={index} className="flex items-center">
                  <item.icon className="w-4 h-4 text-gray-600 mr-2" />
                  <span className="text-gray-700">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 底部装饰 */}
      <div className="absolute bottom-4 right-4 text-sm text-gray-400">
        前端开发应用场景概览
      </div>
    </div>
  );
};

export default PPTSlide;