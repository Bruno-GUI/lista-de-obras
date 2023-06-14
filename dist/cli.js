import yargs from 'yargs';
import obraAtual from './data/obraAtual';
import obrasLidas from './data/obrasLidas';
import obrasAguardando from './data/obrasAguardando';
import listaLeitura from './data/listaLeitura';
var chalk = require('chalk');
yargs
    .command('lendo', 'Mostrar a obra que está sendo lida atualmente', function () {
    console.log();
    console.log(chalk.green('Obras atualmente sendo lidas:'));
    obraAtual.forEach(function (obra) {
        console.log();
        console.log("- ".concat(chalk.yellow(obra.titulo)));
        console.log("".concat(chalk.red('Capítulos lidos: '), " ").concat(obra.capitulosLidos ? chalk.cyan(obra.capitulosLidos) : 'N/A'));
        console.log();
    });
    console.log("".concat(chalk.green('Lendo atualmente um total de'), ": ").concat(obraAtual.length ? chalk.cyan(obraAtual.length) : 'N/A '));
    console.log();
})
    .command('lidos', 'Mostrar as obras já lidas', function () {
    console.log();
    console.log(chalk.green('Obras já lidas:'));
    obrasLidas.forEach(function (obra) {
        console.log();
        console.log("- ".concat(chalk.yellow(obra.titulo)));
        console.log("".concat(chalk.red('Nota '), ": ").concat(obra.nota ? chalk.cyan(obra.nota) : 'N/A'));
        console.log("".concat(chalk.red('Comentário '), ": ").concat(obra.comentario));
        console.log();
    });
    console.log("".concat(chalk.green('Total de obras lidas'), ": ").concat(obrasLidas.length ? chalk.cyan(obrasLidas.length) : 'N/A '));
    console.log();
})
    .command('aguardando', 'Mostrar as obras aguardando novos capítulos', function () {
    console.log();
    console.log(chalk.green('Obras aguardando novos capítulos:'));
    obrasAguardando.forEach(function (obra) {
        console.log();
        console.log("- ".concat(chalk.yellow(obra.titulo)));
        console.log("".concat(chalk.red('Capítulos aguardando '), ": ").concat(obra.capitulosParaLer ? chalk.cyan(obra.capitulosParaLer) : 'N/A'));
        console.log();
    });
    console.log("".concat(chalk.green('Aguardando um total de'), ": ").concat(obrasAguardando.length ? chalk.cyan(obrasAguardando.length) : 'N/A '));
    console.log();
})
    .command('lista', 'Mostrar obras que já vou ler', function () {
    console.log();
    console.log(chalk.green('Obras que vou ler:'));
    listaLeitura.forEach(function (obra) {
        console.log();
        console.log("- ".concat(chalk.yellow(obra.titulo)));
        console.log();
    });
    console.log("".concat(chalk.green('Total de obras para ler'), ": ").concat(listaLeitura.length ? chalk.cyan(listaLeitura.length) : 'N/A '));
    console.log();
})
    .demandCommand()
    .help()
    .argv;
