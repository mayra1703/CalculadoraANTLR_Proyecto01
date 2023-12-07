import CalculadoraVisitor from "../grammar/CalculadoraVisitor.js";

export default class CustomVisitor extends CalculadoraVisitor {

	// Visit a parse tree produced by CalculadoraParser#file.
	visitFile(ctx) {
        console.log("Hola desde CustomVisitor");
        console.log(this.visit(ctx.expr()));

	  	return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by CalculadoraParser#timesDiv.
	visitTimesDiv(ctx) {
	  const operation_data = this.visitChildren(ctx)
		if (ctx.operation.type === 3) {
			console.log("La operacion es una multiplicacion")
			return operation_data[0] * operation_data[2];
		}
    
		else {
			console.log("La operacion es una division")
			return operation_data[0] / operation_data[2];
		}
	}


	// Visit a parse tree produced by CalculadoraParser#plusSubtraction.
	visitPlusSubtraction(ctx) {
      //operation es un atributo en la gramatica

      //Obtener el valor por arrays
      //console.log(this.visit(ctx.expr(0)));

      const operation_data = this.visitChildren(ctx)
      if (ctx.operation.type === 1) {
        console.log("La operacion es una suma")
        return operation_data[0] + operation_data[2];
      }
      
      else {
        console.log("La operacion es una resta")
        return operation_data[0] - operation_data[2];
      }
	}

	// Visit a parse tree produced by CalculadoraParser#implicitMultExpr.
	visitImplicitMultExpr(ctx) {
		let results = this.visitChildren(ctx)
		return results[0] * results[1]
	}

	// Visit a parse tree produced by CalculadoraParser#parentheses.
	visitParentheses(ctx) {
		let visit = this.visitChildren(ctx)
		return visit[1]
	}


	// Visit a parse tree produced by CalculadoraParser#number.
	visitNumber(ctx) {
    	console.log(Number(ctx.getText()));
		return Number(ctx.getText());
	}
}