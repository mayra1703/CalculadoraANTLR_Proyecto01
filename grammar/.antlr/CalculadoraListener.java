// Generated from c:/Users/mayme/OneDrive/Desktop/automatas2/practica01/proyectoAutomatas/grammar/Calculadora.g4 by ANTLR 4.13.1
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
	 * Enter a parse tree produced by the {@code parentesis}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterParentesis(CalculadoraParser.ParentesisContext ctx);
	/**
	 * Exit a parse tree produced by the {@code parentesis}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitParentesis(CalculadoraParser.ParentesisContext ctx);
	/**
	 * Enter a parse tree produced by the {@code multidiv}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterMultidiv(CalculadoraParser.MultidivContext ctx);
	/**
	 * Exit a parse tree produced by the {@code multidiv}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitMultidiv(CalculadoraParser.MultidivContext ctx);
	/**
	 * Enter a parse tree produced by the {@code masmenos}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterMasmenos(CalculadoraParser.MasmenosContext ctx);
	/**
	 * Exit a parse tree produced by the {@code masmenos}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitMasmenos(CalculadoraParser.MasmenosContext ctx);
	/**
	 * Enter a parse tree produced by the {@code numero}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterNumero(CalculadoraParser.NumeroContext ctx);
	/**
	 * Exit a parse tree produced by the {@code numero}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitNumero(CalculadoraParser.NumeroContext ctx);
	/**
	 * Enter a parse tree produced by the {@code multiParentesis}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterMultiParentesis(CalculadoraParser.MultiParentesisContext ctx);
	/**
	 * Exit a parse tree produced by the {@code multiParentesis}
	 * labeled alternative in {@link CalculadoraParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitMultiParentesis(CalculadoraParser.MultiParentesisContext ctx);
}