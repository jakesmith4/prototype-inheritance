function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(
      `Check your ${selection} element, no such element exists in the HTML`
    );
  }
}

export default getElement;
