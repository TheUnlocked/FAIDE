import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { FAILangLexer } from './grammar/FAILangLexer';
import { FAILangParser } from './grammar/FAILangParser';
import { FAILangListener } from './grammar/FAILangListener';
import { TexifaiVisitor } from './TexifaiVisitor';

function parseInput(input: string){
    let inputStream = new ANTLRInputStream(input);
    let lexer = new FAILangLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new FAILangParser(tokenStream);
    parser.removeErrorListeners();

    let context = parser.calls();
    return new TexifaiVisitor().visitCalls(context);
}

module.exports = {
    parseInput: parseInput
}