const styles = {
  width: '100px',
  height: '100px',
  overflow: 'scroll',
  position: 'absolute',
  top: '-9999px',
};

export default () => {
  const scrollDiv = document.createElement('div');
  document.body.appendChild(scrollDiv);

  Object.keys(styles).forEach(key => {
    scrollDiv.style[key] = styles[key];
  });

  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;

  document.body.removeChild(scrollDiv);

  return scrollbarWidth;
};
