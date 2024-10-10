import React from 'react'
import { Link } from 'react-router-dom'
import { Flower2 } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-red-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Flower2 size={32} />
          <span className="text-2xl font-bold">花市竞标</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-yellow-300">首页</Link></li>
            <li><Link to="/auth" className="hover:text-yellow-300">登录/注册</Link></li>
            <li><Link to="/bidding-info" className="hover:text-yellow-300">竞标信息</Link></li>
            <li><Link to="/check-in" className="hover:text-yellow-300">现场签到</Link></li>
            <li><Link to="/bidding" className="hover:text-yellow-300">竞价</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300">联系我们</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header