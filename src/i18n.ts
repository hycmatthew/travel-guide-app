import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import config from './config/config';
 
// Can be imported from a shared config
export const locales = config.LANG;
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
 
  return {
    messages: (await import(`./lib/locales/${locale}/translation.json`)).default
  };
});