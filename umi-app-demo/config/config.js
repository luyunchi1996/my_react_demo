
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  exportStatic: {
    htmlSuffix:true
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
  ['umi-plugin-react', {
    antd: true,
    dva: true,
    dynamicImport: false,
    title: 'managerSystem',
    dll: false,
  }],
  ],

  routes: [
    {
      path: '/',
      component: 'index',


    },
  ],
}
