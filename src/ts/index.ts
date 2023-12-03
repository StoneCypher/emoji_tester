
import { make_logger } from './logger';

const log = make_logger({ symbol: '🧠' });





function refigure() {

  const out = document.getElementById('output');
  if (out === null) { return; }

  const ta = document.getElementById('input_ta');
  if (ta === null) { return; }

  const notEmptyString = (tx: string) => tx !== '',
        parseAsHex     = (ch: string) => String.fromCodePoint( parseInt(ch, 16) );

  const terms = (ta as HTMLTextAreaElement).value.replace('\r\n', '\n')
                                                 .replace('\r',   '\n')
                                                 .split(' ')
                                                 .filter(notEmptyString)
                                                 .map(parseAsHex);

  out.innerHTML = terms.join('');

}





function bootstrap() {

  const ta = document.getElementById('input_ta');
  if (ta === null) { return; }

  ta.onkeyup = () => refigure();

  log('ET Started');

}





window.onload = bootstrap;





function append(newtext: string) {

  const ta = document.getElementById('input_ta');
  if (ta === null) { return; }

  (ta as HTMLTextAreaElement).value = (ta as HTMLTextAreaElement).value + newtext + ' ';
  refigure();

}





export { bootstrap, append };
