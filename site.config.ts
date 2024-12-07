import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://xmw-and-lhy.com/',
  lang: 'zh-CN',
  languages: ['zh-CN'],
  title: '我们的小站',
  timezone: 'Asia/Shanghai',
  author: {
    avatar: 'https://cdn.jsdelivr.net/gh/XMW-and-LHY/storage/images/avatar.jpg',
    name: '傻狗和宝宝'
  },
  description: '特别鸣谢你制造 更欢乐的我',
  subtitle: '2024.10.25-Eternity',
  favicon: 'https://cdn.jsdelivr.net/gh/XMW-and-LHY/storage/images/20241206223148772.png',

  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: '傻狗的GitHub',
      link: 'https://github.com/MadSteinitz',
      icon: 'i-ri-genderless-line',
      color: 'dodgerblue',
    },
    {
      name: '宝宝的GitHub',
      link: 'https://github.com/BCXC0621',
      icon: 'i-ri-women-line',
      color: 'hotpink'
    }
  ],

  search: {
    enable: true,
    type: 'fuse'
  },

  sponsor: {
    enable: false
  },

  comment: {
    enable: false
  },

  license: {
    enabled: false
  }

})
