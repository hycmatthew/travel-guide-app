import React from 'react'
import Button from '@mui/material/Button'
import './CommonButton.scss'

interface CommonButtonProps {
  buttonType: "text" | "contained"
  linkLabel: string
  link: string
  disable?: boolean
}

const CommonButton = (data: CommonButtonProps) => {
  return (
    <Button
      className={`common-button-container ${data.buttonType === 'text' ? 'text-button' : 'contained-button'}`}
      variant={data.buttonType}
      href={data.link}
      target="_blank"
      disableElevation={true}
      disabled={data.disable ? data.disable : false}
      sx={{
        color: data.buttonType === 'text' ? '#fff' : '#2d2d2d',
        backgroundColor: data.buttonType === 'text' ? 'transparent' : '#ffc34d',
        marginTop: '1rem',
        boxShadow: '0px',
        fontWeight: '600',
        '&:hover': {
          backgroundColor: data.buttonType === 'text' ? 'transparent' : '#ffbb33',
        },
      }}
    >
      {data.linkLabel}
    </Button>
  )
}

export default CommonButton
