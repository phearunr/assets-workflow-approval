export const AppMenu = [
  {
    title: 'Dashboard',
    icon: 'ep:house',
    path: '/',
  },
  {
    path: '/fixed-asset',
    icon: 'heroicons:building-library',
    title: 'Fixed Asset',
  },
  {
    path: '/it-asset',
    icon: 'heroicons:bug-ant',
    title: 'IT Asset',
  },
  {
    title: 'Setting',
    icon: 'heroicons:cog',
    path: '/settings',
  },
];

export const quizAccessApp = [
  {
    to: '/products',
    title: 'Register',
    icon: 'heroicons:pencil-square-20-solid',
  },
  {
    to: '/transfer',
    icon: 'heroicons:arrow-path-rounded-square',
    title: 'Transfer',
  },
  {
    to: '/report',
    icon: 'heroicons:chart-bar',
    title: 'Report',
  },
  {
    to: '/disposal',
    icon: 'heroicons:trash',
    title: 'Disposal',
  },
  {
    to: '/settings',
    icon: 'heroicons:cog',
    title: 'Setting',
  },
];

export const recentStatus = [
 
  {
    to: '/fixed-asset',
    count: 10,
    title: 'Fixed Asset',
  },
  {
    to: '/it-asset',
    count: 50,
    title: 'IT Asset',
  },
  {
    to: '/products',
    count: 10,
    title: 'Products',
  },
  {
    to: '/transfer',
    count: 45,
    title: 'Transfer',
  },
  {
    to: '/disposal',
    count: 6,
    title: 'Disposal',
  },
];
