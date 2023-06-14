import yargs from 'yargs';
import obraAtual from './data/obraAtual';
import obrasLidas from './data/obrasLidas';
import obrasAguardando from './data/obrasAguardando';
import listaLeitura from './data/listaLeitura';
const chalk = require('chalk');

yargs
  .command('lendo', 'Mostrar a obra que está sendo lida atualmente', () => {
    console.log();
    console.log(chalk.green('Obras atualmente sendo lidas:'));
    obraAtual.forEach((obra) => {
      console.log();
      console.log(`- ${chalk.yellow(obra.titulo)}`);
      console.log(`${chalk.red('Capítulos lidos: ')} ${obra.capitulosLidos ? chalk.cyan(obra.capitulosLidos) : 'N/A'}`);
      console.log();
    });
    console.log(`${chalk.green('Lendo atualmente um total de')}: ${obraAtual.length ? chalk.cyan(obraAtual.length) : 'N/A '}`);
    console.log();
    
  })
  .command('lidos', 'Mostrar as obras já lidas', () => {
    console.log();
    console.log(chalk.green('Obras já lidas:'));
    obrasLidas.forEach((obra) => {
      console.log();
      console.log(`- ${chalk.yellow(obra.titulo)}`);
      console.log(`${chalk.red('Nota ')}: ${obra.nota ? chalk.cyan(obra.nota) : 'N/A' }`);
      console.log(`${chalk.red('Comentário ')}: ${obra.comentario}`);
      console.log();
    });
    console.log(`${chalk.green('Total de obras lidas')}: ${obrasLidas.length ? chalk.cyan(obrasLidas.length) : 'N/A '}`);
    console.log();

  })
  .command('aguardando', 'Mostrar as obras aguardando novos capítulos', () => {
    console.log()
    console.log(chalk.green('Obras aguardando novos capítulos:'));
    obrasAguardando.forEach((obra) => {
      console.log();
      console.log(`- ${chalk.yellow(obra.titulo)}`);
      console.log(`${chalk.red('Capítulos aguardando ')}: ${obra.capitulosParaLer ? chalk.cyan(obra.capitulosParaLer) : 'N/A'}`);
      console.log();
    });
    console.log(`${chalk.green('Aguardando um total de')}: ${obrasAguardando.length ? chalk.cyan(obrasAguardando.length) : 'N/A '}`);
    console.log();

  })
  .command('lista', 'Mostrar obras que já vou ler', () => {
    console.log()
    console.log(chalk.green('Obras que vou ler:'));
    listaLeitura.forEach((obra) => {
      console.log();
      console.log(`- ${chalk.yellow(obra.titulo)}`);
      console.log();
    });
    console.log(`${chalk.green('Total de obras para ler')}: ${listaLeitura.length ? chalk.cyan(listaLeitura.length) : 'N/A '}`);
    console.log();

  })
  .demandCommand()
  .help()
  .argv;