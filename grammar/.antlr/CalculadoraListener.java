// Generated from c:/Users/mayme/OneDrive/Desktop/automatas2/practica02/proyectoAutomatas/grammar/Calculadora.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CalculadoraParser}.
 */
public interface CalculadoraListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CalculadoraParser#file}.
	 * @param ctx the parse tree
	 */
	void enterFile(CalculadoraParser.FileContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalculadoraParser#file}.
	 * @param ctx the parse tree
	 */
	void exitFile(CalculadoraParser.FileContext ctx);
	/**
	 * Enter a parse tree produced by the {@code printExpr}
	 * labeled alternative in {@link CalculadoraParser#stat}.
	 * @param ctx the parse tree
	 */
	void enterPrintExpr(CalculadoraParser.PrintExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code printExpr}
	 * labeled alternative in {@link CalculadoraParser#stat}.
	 * @param ctx the parse tree
	 */
	void exitPrintExpr(CalculadoraParser.PrintExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code assign}
	 * labeled alternative in {@link CalculadoraParser#stat}.
	 * @param ctx the parse tree
	 */
	void enterAssign(CalculadoraParser.AssignContext ctx);
	/**
	 * Exit a parse tree produced by the {@code assign}
	 * labeled alternative in {@link CalculadoraParser#stat}.
	 * @param ctx the parse tree
	 */
	void exitAssign(CalculadoraParser.AssignContext ctx);
	/**
	 * Enter a parse tree produced by the {@code blank}
	 * labeled alternative in {@link CalculadoraParser#stat}.
	 * @param ctx the parse tree
	 */
	void enterBlank(CalculadoraParser.BlankContext ctx);
	/**
	 * Exit a parse tree produced by the {@code blank}
	 * labeled alternative in {@link CalculadoraParser#stat}.
	 * @param ctx the parse tree
	 */
	void exitBlank(CalculadoraParser.BlankContext ctx);
	/**
	 * Enter a parse tree produced by the {@code parens}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterParens(CalculadoraParser.ParensContext ctx);
	/**
	 * Exit a parse tree produced by the {@code parens}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitParens(CalculadoraParser.ParensContext ctx);
	/**
	 * Enter a parse tree produced by the {@code MulDiv}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterMulDiv(CalculadoraParser.MulDivContext ctx);
	/**
	 * Exit a parse tree produced by the {@code MulDiv}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitMulDiv(CalculadoraParser.MulDivContext ctx);
	/**
	 * Enter a parse tree produced by the {@code AddSub}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterAddSub(CalculadoraParser.AddSubContext ctx);
	/**
	 * Exit a parse tree produced by the {@code AddSub}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitAddSub(CalculadoraParser.AddSubContext ctx);
	/**
	 * Enter a parse tree produced by the {@code id}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterId(CalculadoraParser.IdContext ctx);
	/**
	 * Exit a parse tree produced by the {@code id}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitId(CalculadoraParser.IdContext ctx);
	/**
	 * Enter a parse tree produced by the {@code int}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterInt(CalculadoraParser.IntContext ctx);
	/**
	 * Exit a parse tree produced by the {@code int}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitInt(CalculadoraParser.IntContext ctx);
}