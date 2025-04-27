import * as theme from "./src/radix-colors-dark"
import { variables, type Config } from '@master/css'

export default {
  variables: {
    app: { ...theme },
    'font-family': {
      main: ['Vazirmatn', ...variables['font-family'].sans],
    },
  },
} as Config
