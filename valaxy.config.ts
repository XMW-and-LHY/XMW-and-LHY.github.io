import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    type: 'strato',
    banner: {
      enable: true,
      title: '傻狗和宝宝的小站',
      cloud: {
        enable: true
      }
    },
    
    footer: {
      since: 2024,
      powered: false
    }
  },

  unocss: { safelist },
})
