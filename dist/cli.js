"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const obraAtual_1 = __importDefault(require("./data/obraAtual"));
const obrasLidas_1 = __importDefault(require("./data/obrasLidas"));
const obrasAguardando_1 = __importDefault(require("./data/obrasAguardando"));
const listaLeitura_1 = __importDefault(require("./data/listaLeitura"));
const chalk = require('chalk');
const colorette_1 = require("colorette");
yargs_1.default
    .command('lendo', 'Mostrar a obra que está sendo lida atualmente', () => {
    console.log();
    console.log((0, colorette_1.green)('Obras atualmente sendo lidas:'));
    obraAtual_1.default.forEach((obra) => {
        console.log();
        console.log(`- ${(0, colorette_1.yellow)(obra.titulo)}`);
        console.log(`${chalk.red('Capítulos lidos: ')} ${obra.capitulosLidos ? (0, colorette_1.cyan)(obra.capitulosLidos) : 'N/A'}`);
        console.log();
    });
    console.log(`${(0, colorette_1.green)('Lendo atualmente um total de')}: ${obraAtual_1.default.length ? (0, colorette_1.cyan)(obraAtual_1.default.length) : 'N/A '}`);
    console.log();
})
    .command('lidos', 'Mostrar as obras já lidas', () => {
    console.log();
    console.log((0, colorette_1.green)('Obras já lidas:'));
    obrasLidas_1.default.forEach((obra) => {
        console.log();
        console.log(`- ${(0, colorette_1.yellow)(obra.titulo)}`);
        console.log(`${chalk.red('Nota ')}: ${obra.nota ? (0, colorette_1.cyan)(obra.nota) : 'N/A'}`);
        console.log(`${chalk.red('Comentário ')}: ${obra.comentario}`);
        console.log();
    });
    console.log(`${(0, colorette_1.green)('Total de obras lidas')}: ${obrasLidas_1.default.length ? (0, colorette_1.cyan)(obrasLidas_1.default.length) : 'N/A '}`);
    console.log();
})
    .command('aguardando', 'Mostrar as obras aguardando novos capítulos', () => {
    console.log();
    console.log((0, colorette_1.green)('Obras aguardando novos capítulos:'));
    obrasAguardando_1.default.forEach((obra) => {
        console.log();
        console.log(`- ${(0, colorette_1.yellow)(obra.titulo)}`);
        console.log(`${chalk.red('Capítulos aguardando ')}: ${obra.capitulosParaLer ? (0, colorette_1.cyan)(obra.capitulosParaLer) : 'N/A'}`);
        console.log();
    });
    console.log(`${(0, colorette_1.green)('Aguardando um total de')}: ${obrasAguardando_1.default.length ? (0, colorette_1.cyan)(obrasAguardando_1.default.length) : 'N/A '}`);
    console.log();
})
    .command('lista', 'Mostrar obras que já vou ler', () => {
    console.log();
    console.log((0, colorette_1.green)('Obras que vou ler:'));
    listaLeitura_1.default.forEach((obra) => {
        console.log();
        console.log(`- ${(0, colorette_1.yellow)(obra.titulo)}`);
        console.log();
    });
    console.log(`${(0, colorette_1.green)('Total de obras para ler')}: ${listaLeitura_1.default.length ? (0, colorette_1.cyan)(listaLeitura_1.default.length) : 'N/A '}`);
    console.log();
})
    .demandCommand()
    .help()
    .argv;
