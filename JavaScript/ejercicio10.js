const removeHTMLTags = (code) => {
  return code.replace( /(<([^>]+)>)/ig, '');
}

const result = removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>');
 
console.log(result);