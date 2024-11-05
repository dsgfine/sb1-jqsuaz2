<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'

onLaunch(() => {
  console.log('App Launch')
})

onShow(() => {
  console.log('App Show')
})

onHide(() => {
  console.log('App Hide')
})
</script>

<style>
@import './index.css';

/* 微信小程序兼容性样式 */
page {
  background-color: #f9fafb;
}

/* 统一按钮样式 */
.uni-btn {
  border: none;
  margin: 0;
  padding: 0;
  background: none;
  line-height: inherit;
}
.uni-btn::after {
  border: none;
}
</style>