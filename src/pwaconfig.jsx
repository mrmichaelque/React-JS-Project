import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import { AppBar, Toolbar, Typography, IconButton, Container, Grid } from '@mui/material'

const pwaConfig = {}

export default withPwa(defineConfig({
  themeConfig: {
    navbar: false,
    sidebar: false,
  },
  pwa: pwaConfig,
  enhanceApp({ app }) {
    app.component('AppBar', AppBar)
    app.component('Toolbar', Toolbar)
    app.component('Typography', Typography)
    app.component('IconButton', IconButton)
    app.component('Container', Container)
    app.component('Grid', Grid)
  },
}))
