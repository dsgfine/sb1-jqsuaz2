import React, { useState, useEffect } from 'react'

const stallTypes = [
  '鲜花摊位', '绿植摊位', '园艺用品摊位', '花艺设计摊位', '种子和球茎摊位'
]

const Bidding: React.FC = () => {
  const [selectedType, setSelectedType] = useState('')
  const [bidAmount, setBidAmount] = useState('')
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes in seconds
  const [isBiddingOpen, setIsBiddingOpen] = useState(true)

  useEffect(() => {
    if (timeLeft > 0 && isBiddingOpen) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      setIsBiddingOpen(false)
    }
  }, [timeLeft, isBiddingOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isBiddingOpen) {
      console.log(`Bid submitted for ${selectedType}: ¥${bidAmount}`)
      // TODO: Implement bid submission logic
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-red-800 mb-6">竞价</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <p className="text-lg font-semibold">
            {isBiddingOpen
              ? `竞价剩余时间: ${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`
              : '竞价已结束'}
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="stallType" className="block text-gray-700 mb-2">选择摊位类型</label>
            <select
              id="stallType"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            >
              <option value="">请选择</option>
              {stallTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="bidAmount" className="block text-gray-700 mb-2">出价金额 (¥)</label>
            <input
              type="number"
              id="bidAmount"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
              min="0"
              step="0.01"
            />
          </div>
          <button
            type="submit"
            disabled={!isBiddingOpen}
            className={`w-full py-2 px-4 rounded-md ${
              isBiddingOpen
                ? 'bg-red-600 text-white hover:bg-red-700'
                : 'bg-gray-400 text-gray-700 cursor-not-allowed'
            } transition`}
          >
            {isBiddingOpen ? '提交竞价' : '竞价已结束'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Bidding