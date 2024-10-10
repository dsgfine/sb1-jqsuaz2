import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-red-800 mb-6">欢迎来到花市摊位竞标系统</h1>
      <p className="text-xl mb-8">在这里，您可以参与花市摊位的竞标，实现您的经营梦想！</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/auth" className="bg-red-600 text-white p-6 rounded-lg shadow-md hover:bg-red-700 transition">
          <h2 className="text-2xl font-semibold mb-2">认证和注册</h2>
          <p>开始您的竞标之旅</p>
        </Link>
        <Link to="/bidding-info" className="bg-yellow-500 text-white p-6 rounded-lg shadow-md hover:bg-yellow-600 transition">
          <h2 className="text-2xl font-semibold mb-2">竞价须知</h2>
          <p>了解竞标规则和摊位分类</p>
        </Link>
        <Link to="/check-in" className="bg-green-600 text-white p-6 rounded-lg shadow-md hover:bg-green-700 transition">
          <h2 className="text-2xl font-semibold mb-2">现场签到</h2>
          <p>扫描二维码完成签到</p>
        </Link>
      </div>
    </div>
  )
}

export default Home