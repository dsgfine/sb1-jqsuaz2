import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-red-800 mb-6">联系我们</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">主办单位联系方式</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <Phone className="text-red-600 mr-3" />
            <span>电话：123-456-7890</span>
          </div>
          <div className="flex items-center">
            <Mail className="text-red-600 mr-3" />
            <span>邮箱：info@flowermarket.com</span>
          </div>
          <div className="flex items-center">
            <MapPin className="text-red-600 mr-3" />
            <span>地址：花市大道123号，花城市</span>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">工作时间</h3>
          <p>周一至周五：上午9:00 - 下午5:00</p>
          <p>周六、周日：上午10:00 - 下午4:00</p>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">紧急联系</h3>
          <p>如遇紧急情况，请拨打：999-888-7777</p>
        </div>
      </div>
    </div>
  )
}

export default Contact