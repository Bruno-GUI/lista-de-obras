import yargs from 'yargs';
import obraAtual from './data/obraAtual';
import obrasLidas from './data/obrasLidas';
import obrasAguardando from './data/obrasAguardando';
import listaLeitura from './data/listaLeitura';
const clear = require('clear');
const clc = require('cli-color');
const { parse, differenceInDays, format } = require('date-fns');
const { utcToZonedTime, zonedTimeToUtc } = require('date-fns-tz');

yargs
  .command('lendo', 'Mostrar a obra que está sendo lida atualmente', () => {
    clear();
    console.log();
    console.log(clc.green.bold('Obras atualmente sendo lidas:'));
    obraAtual.forEach((obra) => {
      console.log();
      console.log(`- ${clc.yellow.bold(obra.titulo)}`);
      console.log(`${clc.red.bold('Capítulos lidos:')} ${obra.capitulosLidos ? clc.cyan(obra.capitulosLidos) : 'N/A'}`);

      const initialDate = parse(obra.data, 'dd/MM/yyyy', new Date());
      const currentDate = new Date();
      const daysDifferenceLendo = differenceInDays(currentDate, initialDate);

      console.log(`${clc.red.bold('Data de início:')} ${clc.magenta.bold(obra.data)}`);
      console.log(`${clc.red.bold('Dias desde o início:')} ${daysDifferenceLendo !== 0 ? clc.magenta.bold(daysDifferenceLendo + ' Dia(s)') : 'Hoje'}`);
      console.log();
    });
    console.log(`${clc.green.bold('Lendo atualmente um total de:')} ${obraAtual.length ? clc.red.bold(obraAtual.length + ' Obras.') : 'N/A'}`);
    console.log();
  })  

  .command('lidos', 'Mostrar as obras já lidas', () => {
    clear();
    console.log();
    console.log(clc.green.bold('Obras já lidas:'));
    obrasLidas.forEach((obra) => {
      console.log();
      console.log(`- ${clc.yellow.bold(obra.titulo)}`);
      console.log(`${clc.red.bold('Nota:')} ${obra.nota ? clc.cyan.bold(obra.nota) : 'N/A'}`);

      const initialDate = parse(obra.data, 'dd/MM/yyyy', new Date());
      const currentDate = new Date();
      const daysDifferenceLista = differenceInDays(currentDate, initialDate);

      console.log(`${clc.red.bold('Data de termino:')} ${clc.magenta.bold(obra.data)}`);
      console.log(`${clc.red.bold('Dias sem ler:')} ${daysDifferenceLista !== 0 ? clc.magenta.bold(daysDifferenceLista + ' Dia(s)') : 'Hoje'}`);
      console.log(`${clc.red.bold('Comentário:')} ${clc.white.bold(obra.comentario)}`);

      console.log();
    });
    console.log(`${clc.green.bold('Total de obras lidas:')} ${obrasLidas.length ? clc.cyan.bold(obrasLidas.length + ' Obras.') : 'N/A' }`);
    console.log();
  })

  .command('aguardando', 'Mostrar as obras aguardando novos capítulos', () => {
    clear();
    console.log();
    console.log(clc.green.bold('Obras que estou aguardando novos capítulos:'));
    obrasAguardando.forEach((obra) => {
      console.log();
      console.log(`- ${clc.yellow.bold(obra.titulo)}`);
      console.log(`${clc.red.bold('Capítulos registrados:')} ${obra.capitulosParaLer ? clc.cyan.bold(obra.capitulosParaLer + ' Capítulos') : 'N/A'}`);
      console.log(`${clc.red.bold('Data inicial de aguardo:')} ${clc.magenta.bold(obra.data)}`);

      const initialDate = parse(obra.data, 'dd/MM/yyyy', new Date());
      const currentDate = new Date();
      const daysDifferenceAguardo = differenceInDays(currentDate, initialDate);

      console.log(`${clc.red.bold('Dias de aguardo:')} ${daysDifferenceAguardo !== 0 ? clc.magenta.bold(daysDifferenceAguardo + ' Dia(s)') : 'Hoje'}`);

      console.log();
    });
    console.log(`${clc.green.bold('Aguardando um total de:')} ${obrasAguardando.length ? clc.cyan.bold(obrasAguardando.length + ' Obras.') : 'N/A Obras'}`);
    console.log();
  })

  .command('lista', 'Mostrar obras que já vou ler', () => {
    clear();
    console.log();
    console.log(clc.green.bold('Obras que vou ler:'));
    listaLeitura.forEach((obra) => {
      console.log();
      console.log(`- ${clc.yellow.bold(obra.titulo)}`);

      const initialDate = parse(obra.data, 'dd/MM/yyyy', new Date());
      const currentDate = new Date();
      const daysDifferenceLista = differenceInDays(currentDate, initialDate);

      console.log(`${clc.red.bold('Capítulos restante:')} ${obra.capitulosParaLer ? clc.cyan.bold(obra.capitulosParaLer + ' Capítulos.') : 'N/A'}`);
      console.log(`${clc.red.bold('Data inicial reserva:')} ${clc.magenta.bold(obra.data)}`);
      console.log(`${clc.red.bold('Dias desde a reserva:')} ${daysDifferenceLista !== 0 ? clc.magenta.bold(daysDifferenceLista + ' Dia(s)') : 'Hoje'}`);
      console.log();
    });
    console.log(`${clc.green.bold('Total de obras para ler:')} ${listaLeitura.length ? clc.cyan.bold(listaLeitura.length + ' Obras.') : 'N/A'}`);
    console.log();
  })

  .demandCommand()
  .help()
  .wrap(null)
  .showHelpOnFail(false)
  .argv;
