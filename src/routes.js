import Projects from './pages/Projects'
import Performance from './pages/Performance'
import Calendar from './pages/Calendar'
// import Username from './pages/Username'
// import ChooseProduct from './pages/ChooseProduct'
// import Review from './pages/Review'
// import Category from './pages/Category'
// import Import from './components/Import'
// import History from './pages/History'
// import HistoryIndex from './pages/History/components/History'
// import HistoryDetail from './pages/HistoryDetail/HistoryDetail'
// import ListLazada from './pages/ListLazada'
// import PotentialSeller from './pages/PotentialSeller'

export const routes = [
  { path: '/', component: Projects, name: 'projects' },
  { path: '/teamPerformance', component: Performance, name: 'teamPerformance' },
  { path: '/calendar', component: Calendar, name: 'calendar' },
  // { path: '/import', component: Import, children: [
  //   { path: '', component: Username, name: 'import' },
  //   { path: 'choose', component: ChooseProduct, name: 'choose' },
  //   { path: 'review', component: Review, name: 'review' },
  // ] },
  // { path: '/category', component: Category, name: 'category' },
  // { path: '/history', component: History, children: [
  //   { path: '', component: HistoryIndex, name: 'history' },
  //   { path: 'detail', component: HistoryDetail, props: true, name: 'detail' },
  // ] },
  // { path: '/list', component: ListLazada, name: 'list' },
  // { path: '/list/potential', component: PotentialSeller, name: 'potential' },
  // { path: '*', redirect: '/' }
]