"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FAILangParser_1 = require("./grammar/FAILangParser");
class TexifaiVisitor {
    visitCalls(ctx) {
        if (ctx == null)
            return "";
        return ctx.call().map(call => this.visit(call)).join("\0");
    }
    visitCall(ctx) {
        if (ctx == null)
            return "";
        if (ctx.def()) {
            return this.visit(ctx.def());
        }
        return this.visit(ctx.expression());
    }
    visitDef(ctx) {
        if (ctx == null)
            return "";
        let keywords = "";
        if (ctx._update || ctx._memoize)
            keywords = `\\text{${ctx._update ? "update\\;" : ""}${ctx._memoize ? "memo\\;" : ""}}`;
        let name = this.visit(ctx.name());
        let params = "";
        if (ctx.fparams()) {
            params = `\\left(${this.visit(ctx.fparams())}\\right)`;
        }
        let expression = "";
        if (ctx.expression()) {
            expression = `= ${this.visit(ctx.expression())}`;
        }
        return keywords + name + params + expression;
    }
    visitLambda(ctx) {
        if (ctx == null)
            return "";
        let firstPart = "";
        if (ctx.param()) {
            firstPart = this.visit(ctx.param());
        }
        else {
            firstPart = `(${ctx._memoize ? "\\text{memo}\\;" : ""}${this.visit(ctx.fparams())})`;
        }
        return firstPart + "\\\\rightarrow" + this.visit(ctx.expression());
    }
    visitFparams(ctx) {
        if (ctx == null)
            return "";
        if (!ctx.param())
            return "";
        return ctx.param().map(p => this.visit(p)).join(', ') + (ctx._elipsis ? "..." : "");
    }
    visitCallparams(ctx) {
        if (ctx == null)
            return "";
        return ctx.arg().map(a => this.visit(a)).join(', ');
    }
    visitArg(ctx) {
        if (ctx == null)
            return "";
        return `${this.visit(ctx.expression())}${ctx._elipsis ? ctx._elipsis.text : ""}`;
    }
    visitName(ctx) {
        if (ctx == null)
            return "";
        if (/\d/.test(ctx.text))
            return `\\text{${ctx.text}}`;
        return `\\textit{${ctx.text}}`;
    }
    visitParam(ctx) {
        if (ctx == null)
            return "";
        if (/\d/.test(ctx.text))
            return `\\text{${ctx.text}}`;
        return `\\textit{${ctx.text}}`;
    }
    visitExpression(ctx) {
        if (ctx == null)
            return "";
        if (ctx.callparams()) {
            let params = this.visit(ctx.callparams());
            if (params.includes('\\\\ '))
                return `${this.visit(ctx.expression()[0])}\\begin{pmatrix}${params}\\end{pmatrix}`;
            return `${this.visit(ctx.expression()[0])}\\left(${params}\\right)`;
        }
        else if (ctx.prefix()) {
            return this.visit(ctx.prefix()) + this.visit(ctx.expression(0));
        }
        else if (ctx.indexer()) {
            return this.visit(ctx.expression(0)) + this.visit(ctx.indexer());
        }
        else if (ctx._op) {
            return this.visit(ctx.expression(0)) + ctx._op.text + this.visit(ctx.expression(1));
        }
        else if (ctx.union()) {
            return this.visit(ctx.union());
        }
        else if (ctx.lambda()) {
            return this.visit(ctx.lambda());
        }
        else if (ctx.piecewise()) {
            return this.visit(ctx.piecewise());
        }
        else if (ctx.type()) {
            return this.visit(ctx.type());
        }
        else if (ctx.name()) {
            return this.visit(ctx.name());
        }
        else {
            let expr = this.visit(ctx.expression(0));
            if (expr.includes('\\\\ '))
                return `\\begin{pmatrix}${expr}\\end{pmatrix}`;
            return `\\left(${expr}\\right)`;
        }
    }
    visitType(ctx) {
        if (ctx == null)
            return "";
        if (ctx._t_number) {
            let imaginary = ctx._t_number.text.endsWith('i');
            let num = ctx._t_number.text.replace('i', '').toLowerCase();
            if (num.includes('e'))
                num = num.replace('e', '\\cdot10^{') + '}';
            if (imaginary)
                num += 'i';
            return num;
        }
        else if (ctx._t_string) {
            return `\\text{\`\`${ctx._t_string.text.slice(1, -1)}''}`;
        }
        else if (ctx._t_boolean) {
            return `\\mathit{${ctx._t_boolean.text}}`;
        }
        else if (ctx.tuple()) {
            return this.visit(ctx.tuple());
        }
        else if (ctx.vector()) {
            return this.visit(ctx.vector());
        }
        else {
            return '\\mathbf{void}';
        }
    }
    visitTuple(ctx) {
        if (ctx == null)
            return "";
        let contents = ctx.expression() ? ctx.expression().map(exp => this.visit(exp)).join(',') : "";
        if (contents.includes('\\\\ '))
            return `\\begin{pmatrix}${contents}\\end{pmatrix}`;
        return `\\left(${contents}\\right)`;
    }
    visitVector(ctx) {
        if (ctx == null)
            return "";
        return `<${ctx.expression().map(exp => this.visit(exp)).join(',')}>`;
    }
    visitPrefix(ctx) {
        if (ctx == null)
            return "";
        return ctx.text;
    }
    visitIndexer(ctx) {
        if (ctx == null)
            return "";
        let left = ctx._l_index ? this.visit(ctx._l_index) : "";
        let right = ctx._r_index ? this.visit(ctx._r_index) : "";
        let elipsis = ctx._elipsis ? ctx._elipsis.text : "";
        let indexed = left + elipsis + right;
        if (indexed.includes('\\\\ '))
            return `\\begin{bmatrix}${indexed}\\end{bmatrix}`;
        return `\\left[${indexed}\\right]`;
    }
    visitPiecewise(ctx) {
        if (ctx == null)
            return "";
        return `\\begin{cases}${ctx.condition().map(cond => this.visit(cond)).join("\\\\ ")}\\\\ ${this.visit(ctx.expression())} & \\text{otherwise;}\\end{cases}`;
    }
    visitCondition(ctx) {
        if (ctx == null)
            return "";
        return `${this.visit(ctx._expr)} & \\text{if}\\; ${this.visit(ctx._cond)};`;
    }
    visitUnion(ctx) {
        if (ctx == null)
            return "";
        let contents = ctx.expression() ? ctx.expression().map(exp => this.visit(exp)).join('|') : "";
        if (contents.includes('\\\\ '))
            return `\\begin{pmatrix}${contents}\\end{pmatrix}`;
        return `\\left(${contents}\\right)`;
    }
    visitEnd(ctx) {
        return "";
    }
    visitCompileUnit(ctx) {
        return "";
    }
    visit(tree) {
        switch (tree.constructor.name) {
            case FAILangParser_1.CallsContext.name:
                return this.visitCalls(tree);
            case FAILangParser_1.CallContext.name:
                return this.visitCall(tree);
            case FAILangParser_1.DefContext.name:
                return this.visitDef(tree);
            case FAILangParser_1.LambdaContext.name:
                return this.visitLambda(tree);
            case FAILangParser_1.FparamsContext.name:
                return this.visitFparams(tree);
            case FAILangParser_1.CallparamsContext.name:
                return this.visitCallparams(tree);
            case FAILangParser_1.ArgContext.name:
                return this.visitArg(tree);
            case FAILangParser_1.NameContext.name:
                return this.visitName(tree);
            case FAILangParser_1.ParamContext.name:
                return this.visitParam(tree);
            case FAILangParser_1.ExpressionContext.name:
                return this.visitExpression(tree);
            case FAILangParser_1.TypeContext.name:
                return this.visitType(tree);
            case FAILangParser_1.TupleContext.name:
                return this.visitTuple(tree);
            case FAILangParser_1.VectorContext.name:
                return this.visitVector(tree);
            case FAILangParser_1.PrefixContext.name:
                return this.visitPrefix(tree);
            case FAILangParser_1.IndexerContext.name:
                return this.visitIndexer(tree);
            case FAILangParser_1.PiecewiseContext.name:
                return this.visitPiecewise(tree);
            case FAILangParser_1.ConditionContext.name:
                return this.visitCondition(tree);
            case FAILangParser_1.UnionContext.name:
                return this.visitUnion(tree);
            case FAILangParser_1.EndContext.name:
                return this.visitEnd(tree);
            default:
                return "";
        }
    }
    visitChildren(node) {
        throw new Error("Method not implemented.");
    }
    visitTerminal(node) {
        throw new Error("Method not implemented.");
    }
    visitErrorNode(node) {
        throw new Error("Method not implemented.");
    }
}
exports.TexifaiVisitor = TexifaiVisitor;
//# sourceMappingURL=TexifaiVisitor.js.map