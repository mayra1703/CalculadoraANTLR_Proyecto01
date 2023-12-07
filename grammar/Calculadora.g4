grammar Calculadora;

file: expr+;          

expr: 	
	'('expr')'                        #parentesis
    	|
	expr expr			  #multiParentesis
	|
	// Operation es un atributo
        expr operation=(TIMES|DIV) expr   #multidiv
        |
        expr operation=(PLUS|MINUS) expr  #masmenos
        |
        NUMBER              		  #numero
        ;

PLUS    :   '+';
MINUS   :   '-';
TIMES   :   '*';
DIV     :   '/';
NUMBER  :   [0-9]+;
SPACES  :   [ \t\r\n]+ -> skip;