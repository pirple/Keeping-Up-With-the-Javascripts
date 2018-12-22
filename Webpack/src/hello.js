export default (content = 'Hi there!') => {
  const newDiv = document.createElement('div');
  newDiv.innerHTML = content;
  return newDiv;
};
