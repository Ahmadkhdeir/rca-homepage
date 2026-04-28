import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import homePage from '../../client/index.html'

UiPage({
  $id: Now.ID['home-page'],
  endpoint: 'x_488299_home_page_Home.do',
  description: 'CoE Summit Home Page',
  category: 'general',
  html: homePage,
  direct: true,
})
