"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const FAILangLexer_1 = require("./grammar/FAILangLexer");
const FAILangParser_1 = require("./grammar/FAILangParser");
const TexifaiVisitor_1 = require("./TexifaiVisitor");
function parseInput(input) {
    let inputStream = new antlr4ts_1.ANTLRInputStream(input);
    let lexer = new FAILangLexer_1.FAILangLexer(inputStream);
    let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    let parser = new FAILangParser_1.FAILangParser(tokenStream);
    parser.removeErrorListeners();
    let context = parser.calls();
    return new TexifaiVisitor_1.TexifaiVisitor().visitCalls(context);
}
module.exports = {
    parseInput: parseInput
};
//# sourceMappingURL=index.js.map