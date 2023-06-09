const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const highlightRandomServices = ($s, c) => {
  const nth1 = [1, 4, 7, 10, 13]
  const nth2 = [2, 5, 8, 11, 14]
  const nth3 = [3, 6, 9, 12, 15]
  let c1 = getRandomNumber(1, 5)
  let c2 = getRandomNumber(1, 5)
  let c3 = getRandomNumber(1, 5)

  if(c && nth1.indexOf(c) !== -1) {
    c1 = nth1.indexOf(c) + 1
  }

  if(c && nth2.indexOf(c) !== -1) {
    c2 = nth2.indexOf(c) + 1
  }

  if(c && nth3.indexOf(c) !== -1) {
    c3 = nth3.indexOf(c) + 1
  }

  $s.setAttribute('data-col1', c1)
  $s.setAttribute('data-col2', c2)
  $s.setAttribute('data-col3', c3)

  $ss.innerHTML = `
    .services[data-col1="${c1}"][data-col2="${c2}"] li:nth-child(${nth1[c1 - 1]}):before {
      content: "";
      position: absolute;
      left: 100%;
      ${c2 - c1 < 0 ? 'bottom: calc(50% + .125rem);': 'top: calc(50% + .125rem);'}
      ${c2 - c1 < 0 ? 'border-bottom: .25rem solid var(--color-omega);': 'border-top: .25rem solid var(--color-omega);'}
      border-right: .25rem solid var(--color-omega);
      ${c2 - c1 < 0 ? 'border-bottom-right-radius: var(--brad-beta);': 'border-top-right-radius: var(--brad-beta);'}
      min-block-size: calc(((100% * ${Math.abs(c2 - c1)}) + (var(--gap-gamma) * ${Math.abs(c2 - c1)})) / 2);
      min-inline-size: calc(var(--gap-delta) - .125rem);
      translate: 0 -.125rem;
    }

    .services[data-col1="${c1}"][data-col2="${c2}"] li:nth-child(${nth1[c1 - 1]}):after {
      content: "";
      position: absolute;
      left: 100%;
      ${c2 - c1 < 0 ? 'bottom: 50%;': 'top: 50%;'}
      ${c2 - c1 < 0 ? 'border-top: .25rem solid var(--color-omega);': 'border-bottom: .25rem solid var(--color-omega);'}
      border-left: .25rem solid var(--color-omega);
      ${c2 - c1 < 0 ? 'border-top-left-radius: var(--brad-beta);': 'border-bottom-left-radius: var(--brad-beta);'}
      min-block-size: calc(((100% * ${Math.abs(c2 - c1)}) + (var(--gap-gamma) * ${Math.abs(c2 - c1)})) / 2);
      min-inline-size: calc(var(--gap-delta) - .125rem);
      translate: calc(100% - .25rem) calc(${c2 - c1 < 0 ? '-100% + .125rem': '100% - .25rem'});
    }

    .services[data-col2="${c2}"][data-col3="${c3}"] li:nth-child(${nth2[c2 - 1]}):before {
      content: "";
      position: absolute;
      left: 100%;
      ${c3 - c2 < 0 ? 'bottom: calc(50% + .125rem);': 'top: calc(50% + .125rem);'}
      ${c3 - c2 < 0 ? 'border-bottom: .25rem solid var(--color-omega);': 'border-top: .25rem solid var(--color-omega);'}
      border-right: .25rem solid var(--color-omega);
      ${c3 - c2 < 0 ? 'border-bottom-right-radius: var(--brad-beta);': 'border-top-right-radius: var(--brad-beta);'}
      min-block-size: calc(((100% * ${Math.abs(c3 - c2)}) + (var(--gap-gamma) * ${Math.abs(c3 - c2)})) / 2);
      min-inline-size: calc(var(--gap-delta) - .125rem);
      translate: 0 -.125rem;
    }

    .services[data-col2="${c2}"][data-col3="${c3}"] li:nth-child(${nth2[c2 - 1]}):after {
      content: "";
      position: absolute;
      left: 100%;
      ${c3 - c2 < 0 ? 'bottom: 50%;': 'top: 50%;'}
      ${c3 - c2 < 0 ? 'border-top: .25rem solid var(--color-omega);': 'border-bottom: .25rem solid var(--color-omega);'}
      border-left: .25rem solid var(--color-omega);
      ${c3 - c2 < 0 ? 'border-top-left-radius: var(--brad-beta);': 'border-bottom-left-radius: var(--brad-beta);'}
      min-block-size: calc(((100% * ${Math.abs(c3 - c2)}) + (var(--gap-gamma) * ${Math.abs(c3 - c2)})) / 2);
      min-inline-size: calc(var(--gap-delta) - .125rem);
      translate: calc(100% - .25rem) calc(${c3 - c2 < 0 ? '-100% + .125rem': '100% - .25rem'});
    }
  `
}

const $s = document.querySelector('.js-services')
const $ss = document.querySelector('#services-style')

if($s && $ss) {
  const $lis = $s.querySelectorAll('li')
  const $ul = $s.querySelector('ul')

  let hover = false;

  highlightRandomServices($s)

  const si = setInterval(() => {
    if(!hover) {
      highlightRandomServices($s)
    }
  }, 4000)

  $lis.forEach(($li, i) => {
    $li.addEventListener('mouseenter', () => {
      highlightRandomServices($s, i + 1)

      hover = true
    })
  })

  $ul.addEventListener('mouseleave', () => {
    hover = false
  })
}
