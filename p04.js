function extractBodyContent(htmlString) {
  // TODO: Implement this function
  let first = htmlString.split('<body>')
 const  second = first[1].split('</body>');
//  return second
  return second[0];
}
const  htmlString = `htmlString = "<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>This is my new React app.</p>
  </body>
</html>" `
console.log(extractBodyContent(htmlString))