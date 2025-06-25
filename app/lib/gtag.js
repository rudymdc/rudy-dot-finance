// app/lib/gtag.js
export const GA_MEASUREMENT_ID = 'G-TQ7XNLW00G'; // Replace with your ID

export const pageview = (url) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};