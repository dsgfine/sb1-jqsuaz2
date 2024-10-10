import React, { useState } from 'react'
import { QrCode } from 'lucide-react'

const CheckIn: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false)
  const [isCheckedIn, setIsCheckedIn] = useState(false)

  const handleScan = () => {
    // Simulate QR code scanning
    setIsScanning(true)
    setTimeout(() => {
      setIsScanning(false)
      setIsCheckedIn(true)
    }, 2000)
  }

  return (
    <div className="max-w-md mx-auto text-center">
      <h1 className="text-3xl font-bold text-red-800 mb-6">现场签到</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {!isCheckedIn ? (
          <>
            <p className="mb-4">请扫描现场的临时二维码完成签到</p>
            <button
              onClick={handleScan}
              disabled={isScanning}
              className={`flex items-center justify-center mx-auto px-6 py-3 bg-red-600 text-white rounded-lg ${
                isScanning ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
              } transition`}
            >
              <QrCode className="mr-2" />
              {isScanning ? '扫描中...' : '扫描二维码'}
            </button>
          </>
        ) : (
          <div className="text-green-600">
            <h2 className="text-2xl font-bold mb-2">签到成功！</h2>
            <p>您已完成现场签到，可以参与竞价了。</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CheckIn