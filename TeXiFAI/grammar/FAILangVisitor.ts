// Generated from grammar/FAILang.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { CallsContext } from './FAILangParser';
import { CallContext } from './FAILangParser';
import { DefContext } from './FAILangParser';
import { LambdaContext } from './FAILangParser';
import { FparamsContext } from './FAILangParser';
import { CallparamsContext } from './FAILangParser';
import { ArgContext } from './FAILangParser';
import { NameContext } from './FAILangParser';
import { ParamContext } from './FAILangParser';
import { ExpressionContext } from './FAILangParser';
import { TypeContext } from './FAILangParser';
import { TupleContext } from './FAILangParser';
import { VectorContext } from './FAILangParser';
import { PrefixContext } from './FAILangParser';
import { IndexerContext } from './FAILangParser';
import { PiecewiseContext } from './FAILangParser';
import { ConditionContext } from './FAILangParser';
import { UnionContext } from './FAILangParser';
import { EndContext } from './FAILangParser';
import { CompileUnitContext } from './FAILangParser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FAILangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FAILangVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `FAILangParser.calls`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCalls?: (ctx: CallsContext) => Result;

	/**
	 * Visit a parse tree produced by `FAILangParser.call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall?: (ctx: CallContext) => Result;

	/**
	 * Visit a parse tree produced by `FAILangParser.def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDef?: (ctx: DefContext) => Result;

	/**
	 * Visit a parse tree produced by `FAILangParser.lambda`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda?: (ctx: LambdaContext) => Result;

	/**
	 * Visit a parse tree produced by `FAILangParser.fparams`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFparams?: (ctx: FparamsContext) => Result;

	/**
	 * Visit a parse tree produced by `FAILangParser.callparams`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallparams?: (ctx: CallparamsContext) => Result;

	/**
	 * Visit a parse tree produced by `FAILangParser.arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArg?: (ctx: ArgContext) => Result;

	/**
	 * Visit a parse tree produced by `FAILangParser.name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitName?: (ctx: NameContext) => Result;

	/**
	 * Visit a parse tree produced by `FAILangParser.param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam?: (ctx: ParamContext) => Result;

	/**
	 * Visit a parse tree produced by `FAILangParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `FAILangParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `FAILangParser.tuple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuple?: (ctx: TupleContext) => Result;

	/**
	 * Visit a parse tree produced by `FAILangParser.vector`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVector?: (ctx: VectorContext) => Result;

	/**
	 * Visit a parse tree produced by `FAILangParser.prefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefix?: (ctx: PrefixContext) => Result;

	/**
	 * Visit a parse tree produced by `FAILangParser.indexer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexer?: (ctx: IndexerContext) => Result;

	/**
	 * Visit a parse tree produced by `FAILangParser.piecewise`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPiecewise?: (ctx: PiecewiseContext) => Result;

	/**
	 * Visit a parse tree produced by `FAILangParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `FAILangParser.union`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnion?: (ctx: UnionContext) => Result;

	/**
	 * Visit a parse tree produced by `FAILangParser.end`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnd?: (ctx: EndContext) => Result;

	/**
	 * Visit a parse tree produced by `FAILangParser.compileUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompileUnit?: (ctx: CompileUnitContext) => Result;
}

