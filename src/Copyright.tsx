import { FC } from 'react'

import MuiLink from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const Copyright: FC = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}

export default Copyright
