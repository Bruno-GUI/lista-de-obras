import yargs from 'yargs';
import obraAtual from './data/obraAtual';
import obrasLidas from './data/obrasLidas';
import obrasAguardando from './data/obrasAguardando';
import listaLeitura from './data/listaLeitura';
const chalk = require('chalk');
import { green, yellow, cyan } from 'colorette';

yargs
  .command('lendo', 'Mostrar a obra que está sendo lida atualmente', () => {
    console.log();
    console.log(green('Obras atualmente sendo lidas:'));
    obraAtual.forEach((obra) => {
      console.log();
      console.log(`- ${yellow(obra.titulo)}`);
      console.log(`${chalk.red('Capítulos lidos: ')} ${obra.capitulosLidos ? cyan(obra.capitulosLidos) : 'N/A'}`);
      console.log();
    });
    console.log(`${green('Lendo atualmente um total de')}: ${obraAtual.length ? cyan(obraAtual.length) : 'N/A '}`);
    console.log();
    
  })
  .command('lidos', 'Mostrar as obras já lidas', () => {
    console.log();
    console.log(green('Obras já lidas:'));
    obrasLidas.forEach((obra) => {
      console.log();
      console.log(`- ${yellow(obra.titulo)}`);
      console.log(`${chalk.red('Nota ')}: ${obra.nota ? cyan(obra.nota) : 'N/A' }`);
      console.log(`${chalk.red('Comentário ')}: ${obra.comentario}`);
      console.log();
    });
    console.log(`${green('Total de obras lidas')}: ${obrasLidas.length ? cyan(obrasLidas.length) : 'N/A '}`);
    console.log();

  })
  .command('aguardando', 'Mostrar as obras aguardando novos capítulos', () => {
    console.log()
    console.log(green('Obras aguardando novos capítulos:'));
    obrasAguardando.forEach((obra) => {
      console.log();
      console.log(`- ${yellow(obra.titulo)}`);
      console.log(`${chalk.red('Capítulos aguardando ')}: ${obra.capitulosParaLer ? cyan(obra.capitulosParaLer) : 'N/A'}`);
      console.log();
    });
    console.log(`${green('Aguardando um total de')}: ${obrasAguardando.length ? cyan(obrasAguardando.length) : 'N/A '}`);
    console.log();

  })
  .command('lista', 'Mostrar obras que já vou ler', () => {
    console.log()
    console.log(green('Obras que vou ler:'));
    listaLeitura.forEach((obra) => {
      console.log();
      console.log(`- ${yellow(obra.titulo)}`);
      console.log();
    });
    console.log(`${green('Total de obras para ler')}: ${listaLeitura.length ? cyan(listaLeitura.length) : 'N/A '}`);
    console.log();

  })
  .demandCommand()
  .help()
  .argv;