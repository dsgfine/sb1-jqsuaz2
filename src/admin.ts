import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Admin from './views/Admin.vue'
import BasicInfoEditor from './views/admin/BasicInfoEditor.vue'
import OperatorRegistration from './views/admin/OperatorRegistration.vue'
import DataExport from './views/admin/DataExport.vue'
import BiddingStageControl from './views/admin/BiddingStageControl.vue'
import BiddingResults from './views/admin/BiddingResults.vue'
import './index.css'

const router = createRouter({
  history: createWebHashHistory('/flower/admin.html'),
  routes: [
    { path: '/', redirect: '/basic-info' },
    { path: '/basic-info', name: 'admin-basic-info', component: BasicInfoEditor },
    { path: '/operator-registration', name: 'admin-operator-registration', component: OperatorRegistration },
    { path: '/data-export', name: 'admin-data-export', component: DataExport },
    { path: '/bidding-stage', name: 'admin-bidding-stage', component: BiddingStageControl },
    { path: '/bidding-results', name: 'admin-bidding-results', component: BiddingResults },
  ],
})

const app = createApp(Admin)
app.use(router)
app.mount('#app')