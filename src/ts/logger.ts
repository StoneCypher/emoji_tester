
function make_logger({ symbol }: { symbol?: string }) {

  return function(text: string) {
    console.log(`${symbol? (symbol + ' ') : ''}${text}`);
  }

}





export { make_logger };
