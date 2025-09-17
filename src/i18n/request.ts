import {getRequestConfig} from 'next-intl/server';

 const SUPPORTED_LOCALES = ['en', 'fr'];

export default getRequestConfig(async () => {
 const { cookies, headers } = await import('next/headers');

  // Check for a locale in cookies
  const cookieLocale = (await cookies()).get('locale')?.value;

  // Fallback to the Accept-Language header if no cookie is set
  const headerLocale = (await headers()).get('accept-language')?.split(',')[0]; // Extract the first language from the header
  // Extract base language (e.g., 'en' from 'en-GB')
  const baseLocale = (cookieLocale || headerLocale || 'en')?.split('-')[0] || 'en';

  // Fallback to 'en' if not supported
  const locale = SUPPORTED_LOCALES.includes(baseLocale) ? baseLocale : 'en'; // Default to 'en' if no locale is found

  // Ensure locale is always a string
  const finalLocale: string = locale || 'en';

  return {
    locale: finalLocale,
    messages: (await import(`../../messages/${finalLocale}.json`)).default
  };
});