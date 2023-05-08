import * as React from 'react'
import { makeStyles } from '@material-ui/core'
import { ListItem } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    color: '#0c1932 !important',
    zIndex: 99,
    float: 'left',
    position: 'relative',
    display: 'block',
    width: 'auto !important',
    margin: '0px !important',
    padding: '0px !important',
    border: 'none !important'
  }
})

export const PrepagaListItem: React.FC = (props) => {
  const classes = useStyles()
  return (
    <ListItem
      classes={{
        root: classes.root
      }}
    >
      {props.children}
    </ListItem>
  )
}
