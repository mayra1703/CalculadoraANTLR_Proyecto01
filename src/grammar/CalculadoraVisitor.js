// Generated from ./grammar/Calculadora.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by CalculadoraParser.

export default class CalculadoraVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by CalculadoraParser#file.
	visitFile(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculadoraParser#parentesis.
	visitParentesis(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculadoraParser#multidiv.
	visitMultidiv(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculadoraParser#masmenos.
	visitMasmenos(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculadoraParser#numero.
	visitNumero(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculadoraParser#multiParentesis.
	visitMultiParentesis(ctx) {
	  return this.visitChildren(ctx);
	}



}