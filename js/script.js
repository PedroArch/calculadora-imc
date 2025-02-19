//state application
let globalHeight = 1.7;
let globalWeight = 70;
let descIndex = null;

const descriptions = [
  {
    id: 0,
    type: 'subpeso',
    description:
      'Peso abaixo do normal. Neste caso, é necessária a busca por um especialista, para verificar a existência de algum problema de saúde causador do índice abaixo do normal, ou analisar se sua saúde não está sendo afetada.',
    interval: '< 18,5',
  },
  {
    id: 1,
    type: 'normal',
    description:
      'São pesos considerados normais pela OMS. No entanto, mesmo nesta faixa de peso, deve-se ter atenção e cuidado com possíveis problemas metabólicos, principalmente se houver acúmulo de gordura na região interna do abdômen.',
    interval: ' >= 18,5 && <= 24,9',
  },
  {
    id: 2,
    type: 'pré-obsidade',
    description:
      'Peso em pré-obesidade ou acima do peso, representando um risco maior para a saúde. Nesta causa, é imprescindível uma consulta com um especialista, pois pode estar relacionado à pressão alta, colesterol alto ou diabetes, podendo apontar até para o hipotireoidismo. Este é o seu índice? Se sim, é tempo de consultar um profissional, realizar exames e pensar em uma reeducação alimentar e exercícios físicos.',
    interval: '>= 25 $$ <= 29,9',
  },
  {
    id: 3,
    type: 'obesidade grau um',
    description:
      'Este índice indica obesidade grau um. Este peso aumenta riscos para várias doenças, como diabetes, hipertensão arterial, o infarto do miocárdio e diversos tipos de câncer. A obesidade já é considerada uma comorbidade e necessita de tratamento profissional. O indicado é consultar um especialista e receber acompanhamento adequado.',
    interval: '>= 30 %% <= 34,9',
  },
  {
    id: 4,
    type: 'obsedidade grau dois',
    description:
      'Indica obesidade grau dois. Este peso já representa risco elevado para as doenças supracitadas. Como em todos os casos, mas neste impreterivelmente, deve-se buscar um profissional especializado e receber as orientações e medidas adequadas para obter uma saúde equilibrada.',
    interval: '>= 35 && <= 39,99',
  },
  {
    id: 5,
    type: 'obsedidade mórbida',
    description:
      'Indica obesidade grau três ou mórbida. O peso neste grau apresenta problemas extremamente graves e necessita de tratamento profissional com o máximo de recursos disponíveis, incluindo até cirurgia.',
    interval: '>= 40',
  },
];

const heightInput = document.querySelector('#heightInput');
const weightInput = document.querySelector('#weightInput');
const calcButton = document.querySelector('#buttonCalc');

window.addEventListener('load', () => {
  heightInput.addEventListener('input', handleHeightInput);
  weightInput.addEventListener('input', handleWeightInput);
  calcButton.addEventListener('click', handleButtonClick);
});

function doCalc(weight, height) {
  return (weight / height ** 2).toFixed(2);
}

function handleHeightInput(event) {
  globalHeight = event.target.value;
}

function handleWeightInput(event) {
  globalWeight = event.target.value;
}

function handleButtonClick(event) {
  const result = doCalc(globalWeight, globalHeight);

  const headerResult = document.querySelector('#headerCard');
  headerResult.textContent = `Seu resultado é ${result}`;

  const span = document.querySelector('#resultDescription');

  if (result < 18.5) {
    descIndex = 0;
  }
  if (result >= 18.5 && result <= 24.9) {
    descIndex = 1;
  }
  if (result >= 25 && result <= 29.99) {
    descIndex = 2;
  }
  if (result >= 30 && result <= 34.99) {
    descIndex = 3;
  }
  if (result >= 35 && result <= 39.99) {
    descIndex = 4;
  }
  if (result >= 40) {
    descIndex = 5;
  }

  span.textContent = descriptions[descIndex].description;
}
