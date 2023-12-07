import CalculadoraVisitor from "../grammar/CalculadoraVisitor.js";

export default class CustomVisitor extends CalculadoraVisitor {

	// Visit a parse tree produced by CalculadoraParser#file.
	visitFile(ctx) {
		console.log("Hola desde CustomVisitor");
		//console.log(this.visit(ctx.expr()));
	  	return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by CalculadoraParser#timesDiv.
	visitMultidiv(ctx) {
	  const operation_data = this.visitChildren(ctx)
	  console.log(ctx.operation.type);
		if (ctx.operation.type === 5) {
			console.log("La operacion es una multiplicacion")
			return operation_data[0] * operation_data[2];
		}
    
		else {
			console.log("La operacion es una division")
			return operation_data[0] / operation_data[2];
		}
	}


	// Visit a parse tree produced by CalculadoraParser#plusSubtraction.
	visitMasmenos(ctx) {
      //operation es un atributo en la gramatica

	  console.log(ctx.operation.type);
      const operation_data = this.visitChildren(ctx)
      if (ctx.operation.type === 3) {
        console.log("La operacion es una suma")
        return operation_data[0] + operation_data[2];
      }
      
      else {
        console.log("La operacion es una resta")
        return operation_data[0] - operation_data[2];
      }
	}

	// Visit a parse tree produced by CalculadoraParser#implicitMultExpr.
	visitMultiParentesis(ctx) {
		console.log("multi")
		let results = this.visitChildren(ctx)
		return results[0] * results[1]
	}

	// Visit a parse tree produced by CalculadoraParser#parentheses.
	visitParentesis(ctx) {
		console.log("parentesis")
		let visit = this.visitChildren(ctx)
		return visit[1]
	}


	// Visit a parse tree produced by CalculadoraParser#number.
	visitNumero(ctx) {
    	console.log(Number(ctx.getText()));
		return Number(ctx.getText());
	}
}