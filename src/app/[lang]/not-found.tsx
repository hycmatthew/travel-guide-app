import React from 'react'

interface ErrorPageProps { 
  params: { lang: string }
}

const NotFound = async() => {

  // const { t } = await useTranslation(lang, "translation");

  return (
    <html>
      <body>
          <main><h1>Test</h1></main>
      </body>
    </html>
  )
}

export default NotFound