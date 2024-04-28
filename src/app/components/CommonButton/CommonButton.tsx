import React from 'react'
import Button from '@mui/material/Button'

interface CommonButtonProps {
  linkLabel: string
  link: string
  disable?: boolean
}

const CommonButton = (data: CommonButtonProps) => {
  return (
    <Button
      className="common-button-container"
      variant="contained"
      href={data.link}
      target="_blank"
      disableElevation={true}
      disabled={data.disable ? data.disable : false}
      sx={{
        color: '#2d2d2d',
        backgroundColor: '#ffc34d',
        marginTop: '1rem',
        boxShadow: '0px',
        fontWeight: '600',
        '&:hover': {
          backgroundColor: '#ffbb33',
        },
      }}
    >
      {data.linkLabel}
    </Button>
  )
}

export default CommonButton
