import { FC } from 'react'

import { makeStyles, Paper } from '@material-ui/core'

export type FooterProps = {}

const Footer: FC<FooterProps> = (props) => {
  const classes = useStyles(props)

  return (
    <Paper square elevation={0} className={classes.root}>
      Footer
    </Paper>
  )
}

const useStyles = makeStyles(({ palette }) => ({
  root: {
    backgroundColor: palette.primary.main,
    color: palette.primary.contrastText,
  },
}))

export default Footer
