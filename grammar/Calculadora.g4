grammar Calculadora;
import CommonLexerRules;

file: stat+;          

stat:   expr SPACES            # printExpr
        |
        ID '=' expr SPACES     # assign
        |
        SPACES                 # blank
        ;

expr: 	expr op=('*'|'/') expr  # MulDiv
        |
        expr op=('+'|'-') expr  # AddSub
        |
        INT                     # int
        |
        ID                      # id
        |
        '(' expr ')'            # parens
        |
        expr expr              #implicitMult
        ;