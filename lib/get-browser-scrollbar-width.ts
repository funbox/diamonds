export default (): number => {
  const scrollDiv = document.createElement('div');
  document.body.appendChild(scrollDiv);

  scrollDiv.style.width = '100px';
  scrollDiv.style.height = '100px';
  scrollDiv.style.overflow = 'scroll';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';

  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

  document.body.removeChild(scrollDiv);

  return scrollbarWidth;
};
