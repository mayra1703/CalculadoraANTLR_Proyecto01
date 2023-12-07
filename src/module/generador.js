import antlr4 from 'antlr4'

import CalculadoraParser from '../grammar/CalculadoraParser.js'
import CalculadoraLexer from '../grammar/CalculadoraLexer.js'
import CustomVisitor from '../helper/CustomVisitor.js';
//import CalculadoraVisitor from '../grammar/CalculadoraVisitor.js'

export const calcular = (input) => {
    const chars = new antlr4.InputStream(input);
    const lexer = new CalculadoraLexer(chars)
    const tokens = new antlr4.CommonTokenStream(lexer)
    const parser = new CalculadoraParser(tokens)
    parser.buildParseTrees = true;
    const tree = parser.file();
    const visitor = new CustomVisitor();
    //visitor.visitFile(tree);

    return visitor.visitFile(tree);
}


