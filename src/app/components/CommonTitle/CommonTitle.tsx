import React from 'react'
import Typography from '@mui/material/Typography'
import './CommonTitle.scss'

interface CommonTitleProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  text: string
}

const CommonTitle = (data: CommonTitleProps) => {
  return (
    <div className="title-block">
      <Typography variant={data.variant} component={data.variant}>
        {data.text}
      </Typography>
    </div>
  )
}

export default CommonTitle
