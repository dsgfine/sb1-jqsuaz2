export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-rem-to-responsive-pixel': {
      // 转换rem为rpx
      rootValue: 32,
      propList: ['*'],
      transformUnit: 'rpx'
    }
  }
}