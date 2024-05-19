'use client'

import React, { ReactNode } from 'react'
import './footer.scss'
import Button from '@mui/material/Button'
import langOptions, { LanguageType } from '@/constant/supportedLang'
import { useRouter } from "next/navigation";

type FooterLayoutProps = {
  lang: string
}

const FooterLayout = ({ lang }: FooterLayoutProps) => {

  const router = useRouter();

  const changeLang = (nextLang: string) => {
    const curPath = window.location.pathname;
    const replacedPath = curPath.replace(`/${lang}`, "");
    router.push(`/${nextLang}${replacedPath}`);
  }

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-element-container"></div>
          <div className="footer-lang-container">
            {langOptions.map((item: LanguageType) => {
              return (
                <div className="lang-item" key={item.code}>
                  <Button disabled={item.lang == lang} onClick={()=>changeLang(item.lang)}>{item.label}</Button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterLayout
