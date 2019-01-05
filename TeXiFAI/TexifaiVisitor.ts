import { FAILangVisitor } from "./grammar/FAILangVisitor";
import { CallsContext, CallContext, DefContext, LambdaContext, FparamsContext, CallparamsContext, ArgContext, NameContext, ParamContext, ExpressionContext, TypeContext, TupleContext, VectorContext, PrefixContext, IndexerContext, PiecewiseContext, ConditionContext, UnionContext, EndContext, CompileUnitContext } from "./grammar/FAILangParser";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";

export class TexifaiVisitor implements FAILangVisitor<string> {
    visitCalls (ctx: CallsContext): string{
        if (ctx == null)
            return "";

        return ctx.call().map(call => this.visit(call)).join("\0");
    }
    visitCall (ctx: CallContext): string{
        if (ctx == null)
            return "";

        if (ctx.def()){
            return this.visit(ctx.def());
        }
        return this.visit(ctx.expression());
    }
    visitDef (ctx: DefContext): string {
        if (ctx == null)
            return "";

        let keywords: string = "";
        if (ctx._update || ctx._memoize)
            keywords = `\\text{${ctx._update ? "update\\;" : ""}${ctx._memoize ? "memo\\;" : ""}}`;
        
        let name: string = this.visit(ctx.name());

        let params: string = "";
        if (ctx.fparams()){
            params = `\\left(${this.visit(ctx.fparams())}\\right)`;
        }

        let expression: string = "";
        if (ctx.expression()){
            expression = `= ${this.visit(ctx.expression())}`;
        }

        return keywords + name + params + expression;
    }
    visitLambda (ctx: LambdaContext): string {
        if (ctx == null)
            return "";

        let firstPart: string = "";
        
        if (ctx.param()){
            firstPart = this.visit(ctx.param());
        }
        else{
            firstPart = `(${ctx._memoize ? "\\text{memo}\\;" : ""}${this.visit(ctx.fparams())})`;
        }

        return firstPart + "\\\\rightarrow" + this.visit(ctx.expression());
    }
    visitFparams (ctx: FparamsContext): string {
        if (ctx == null)
            return "";

        if (!ctx.param())
            return "";
        return ctx.param().map(p => this.visit(p)).join(', ') + (ctx._elipsis ? "..." : "");
    }
    visitCallparams (ctx: CallparamsContext): string {
        if (ctx == null)
            return "";

        return ctx.arg().map(a => this.visit(a)).join(', ');
    }
    visitArg (ctx: ArgContext): string {
        if (ctx == null)
            return "";

        return `${this.visit(ctx.expression())}${ctx._elipsis ? ctx._elipsis.text : ""}`;
    }
    visitName (ctx: NameContext): string {
        if (ctx == null)
            return "";

        if (/\d/.test(ctx.text))
            return `\\text{${ctx.text}}`
        return `\\textit{${ctx.text}}`;
    }
    visitParam (ctx: ParamContext): string {
        if (ctx == null)
            return "";

        if (/\d/.test(ctx.text))
            return `\\text{${ctx.text}}`
        return `\\textit{${ctx.text}}`;
    }
    visitExpression (ctx: ExpressionContext): string {
        if (ctx == null)
            return "";

        if (ctx.callparams()){
            let params: string = this.visit(ctx.callparams());
            if (params.includes('\\\\ '))
                return `${this.visit(ctx.expression()[0])}\\begin{pmatrix}${params}\\end{pmatrix}`;
            return `${this.visit(ctx.expression()[0])}\\left(${params}\\right)`;
        }
        else if (ctx.prefix()){
            return this.visit(ctx.prefix()) + this.visit(ctx.expression(0));
        }
        else if (ctx.indexer()){
            return this.visit(ctx.expression(0)) + this.visit(ctx.indexer());
        }
        else if (ctx._op){
            return this.visit(ctx.expression(0)) + ctx._op.text + this.visit(ctx.expression(1));
        }
        else if (ctx.union()){
            return this.visit(ctx.union());
        }
        else if (ctx.lambda()){
            return this.visit(ctx.lambda());
        }
        else if (ctx.piecewise()){
            return this.visit(ctx.piecewise());
        }
        else if (ctx.type()){
            return this.visit(ctx.type());
        }
        else if (ctx.name()){
            return this.visit(ctx.name());
        }
        else{
            let expr: string = this.visit(ctx.expression(0));
            if (expr.includes('\\\\ '))
                return `\\begin{pmatrix}${expr}\\end{pmatrix}`;
            return `\\left(${expr}\\right)`;
        }
    }
    visitType (ctx: TypeContext): string {
        if (ctx == null)
            return "";

        if (ctx._t_number){
            let imaginary: boolean = ctx._t_number.text.endsWith('i');
            let num: string = ctx._t_number.text.replace('i', '').toLowerCase();
            if (num.includes('e'))
                num = num.replace('e', '\\cdot10^{') + '}'
            if (imaginary)
                num += 'i';
            return num;
        }
        else if (ctx._t_string){
            return `\\text{\`\`${ctx._t_string.text.slice(1, -1)}''}`;
        }
        else if (ctx._t_boolean){
            return `\\mathit{${ctx._t_boolean.text}}`;
        }
        else if (ctx.tuple()){
            return this.visit(ctx.tuple());
        }
        else if (ctx.vector()){
            return this.visit(ctx.vector());
        }
        else{
            return '\\mathbf{void}';
        }
    }
    visitTuple (ctx: TupleContext): string {
        if (ctx == null)
            return "";

        let contents: string = ctx.expression() ? ctx.expression().map(exp => this.visit(exp)).join(',') : "";
        if (contents.includes('\\\\ '))
            return `\\begin{pmatrix}${contents}\\end{pmatrix}`;
        return `\\left(${contents}\\right)`;
    }
    visitVector (ctx: VectorContext): string {
        if (ctx == null)
            return "";

        return `<${ctx.expression().map(exp => this.visit(exp)).join(',')}>`;
    }
    visitPrefix (ctx: PrefixContext): string {
        if (ctx == null)
            return "";

        return ctx.text;
    }
    visitIndexer (ctx: IndexerContext): string {
        if (ctx == null)
            return "";

        let left: string = ctx._l_index ? this.visit(ctx._l_index) : "";
        let right: string = ctx._r_index ? this.visit(ctx._r_index) : "";
        let elipsis: string = ctx._elipsis ? ctx._elipsis.text : "";
        let indexed: string = left + elipsis + right;
        if (indexed.includes('\\\\ '))
            return `\\begin{bmatrix}${indexed}\\end{bmatrix}`;
        return `\\left[${indexed}\\right]`;
    }
    visitPiecewise (ctx: PiecewiseContext): string {
        if (ctx == null)
            return "";

        return `\\begin{cases}${ctx.condition().map(cond => this.visit(cond)).join("\\\\ ")}\\\\ ${this.visit(ctx.expression())} & \\text{otherwise;}\\end{cases}`;
    }
    visitCondition (ctx: ConditionContext): string {
        if (ctx == null)
            return "";

        return `${this.visit(ctx._expr)} & \\text{if}\\; ${this.visit(ctx._cond)};`;
    }
    visitUnion (ctx: UnionContext): string {
        if (ctx == null)
            return "";
            
        let contents: string = ctx.expression() ? ctx.expression().map(exp => this.visit(exp)).join('|') : "";
        if (contents.includes('\\\\ '))
            return `\\begin{pmatrix}${contents}\\end{pmatrix}`;
        return `\\left(${contents}\\right)`;
    }
    visitEnd (ctx: EndContext): string {
        return "";
    }
    visitCompileUnit (ctx: CompileUnitContext): string {
        return "";
    }
    visit(tree: ParseTree): string {
        switch(tree.constructor.name){
            case CallsContext.name:
                return this.visitCalls(tree as CallsContext);
            case CallContext.name:
                return this.visitCall(tree as CallContext);
            case DefContext.name:
                return this.visitDef(tree as DefContext);
            case LambdaContext.name:
                return this.visitLambda(tree as LambdaContext);
            case FparamsContext.name:
                return this.visitFparams(tree as FparamsContext);
            case CallparamsContext.name:
                return this.visitCallparams(tree as CallparamsContext);
            case ArgContext.name:
                return this.visitArg(tree as ArgContext);
            case NameContext.name:
                return this.visitName(tree as NameContext);
            case ParamContext.name:
                return this.visitParam(tree as ParamContext);
            case ExpressionContext.name:
                return this.visitExpression(tree as ExpressionContext);
            case TypeContext.name:
                return this.visitType(tree as TypeContext);
            case TupleContext.name:
                return this.visitTuple(tree as TupleContext);
            case VectorContext.name:
                return this.visitVector(tree as VectorContext);
            case PrefixContext.name:
                return this.visitPrefix(tree as PrefixContext);
            case IndexerContext.name:
                return this.visitIndexer(tree as IndexerContext);
            case PiecewiseContext.name:
                return this.visitPiecewise(tree as PiecewiseContext);
            case ConditionContext.name:
                return this.visitCondition(tree as ConditionContext);
            case UnionContext.name:
                return this.visitUnion(tree as UnionContext);
            case EndContext.name:
                return this.visitEnd(tree as EndContext);
            default:
                return "";
        }
    }
    visitChildren(node: RuleNode): string {
        throw new Error("Method not implemented.");
    }
    visitTerminal(node: TerminalNode): string {
        throw new Error("Method not implemented.");
    }
    visitErrorNode(node: ErrorNode): string {
        throw new Error("Method not implemented.");
    }
}