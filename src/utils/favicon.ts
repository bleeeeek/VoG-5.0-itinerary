export const setFavicon = () => {
  const favicon = document.getElementById('favicon') as HTMLLinkElement;
  if (favicon) {
    favicon.href = '/assets/logo.png';
  }
}; 