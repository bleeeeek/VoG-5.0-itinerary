import logoImage from '../assets/logo.png';

export const setFavicon = () => {
  const favicon = document.getElementById('favicon') as HTMLLinkElement;
  if (favicon) {
    favicon.href = logoImage;
  }
}; 