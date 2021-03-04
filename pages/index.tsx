import * as React from 'react'

import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import Link from '../components/Link'
import Copyright from '../src/Copyright'
import ProTip from '../src/ProTip'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          fontFamily="OpenSans"
        >
          Next.js v5-alpha with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page what
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}
