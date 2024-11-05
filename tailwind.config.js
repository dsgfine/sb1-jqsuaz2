/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // 禁用预设样式，避免与uni-app冲突
  },
  // 微信小程序兼容性处理
  variants: {
    extend: {},
  },
  // 处理微信小程序不支持的样式
  purge: {
    options: {
      safelist: [
        // 保留基础类名
        'flex',
        'items-center',
        'justify-center',
        'text-center',
        'font-bold',
        'rounded-lg',
        'shadow-md',
        'bg-white',
        'text-gray-700',
        'hover:bg-gray-100',
        /^(bg|text|border|hover)-(red|green|blue|gray|yellow)-[1-9]00$/,
      ],
    },
  },
}