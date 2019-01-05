// Generated from grammar/FAILang.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

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
 * This interface defines a complete listener for a parse tree produced by
 * `FAILangParser`.
 */
export interface FAILangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `FAILangParser.calls`.
	 * @param ctx the parse tree
	 */
	enterCalls?: (ctx: CallsContext) => void;
	/**
	 * Exit a parse tree produced by `FAILangParser.calls`.
	 * @param ctx the parse tree
	 */
	exitCalls?: (ctx: CallsContext) => void;

	/**
	 * Enter a parse tree produced by `FAILangParser.call`.
	 * @param ctx the parse tree
	 */
	enterCall?: (ctx: CallContext) => void;
	/**
	 * Exit a parse tree produced by `FAILangParser.call`.
	 * @param ctx the parse tree
	 */
	exitCall?: (ctx: CallContext) => void;

	/**
	 * Enter a parse tree produced by `FAILangParser.def`.
	 * @param ctx the parse tree
	 */
	enterDef?: (ctx: DefContext) => void;
	/**
	 * Exit a parse tree produced by `FAILangParser.def`.
	 * @param ctx the parse tree
	 */
	exitDef?: (ctx: DefContext) => void;

	/**
	 * Enter a parse tree produced by `FAILangParser.lambda`.
	 * @param ctx the parse tree
	 */
	enterLambda?: (ctx: LambdaContext) => void;
	/**
	 * Exit a parse tree produced by `FAILangParser.lambda`.
	 * @param ctx the parse tree
	 */
	exitLambda?: (ctx: LambdaContext) => void;

	/**
	 * Enter a parse tree produced by `FAILangParser.fparams`.
	 * @param ctx the parse tree
	 */
	enterFparams?: (ctx: FparamsContext) => void;
	/**
	 * Exit a parse tree produced by `FAILangParser.fparams`.
	 * @param ctx the parse tree
	 */
	exitFparams?: (ctx: FparamsContext) => void;

	/**
	 * Enter a parse tree produced by `FAILangParser.callparams`.
	 * @param ctx the parse tree
	 */
	enterCallparams?: (ctx: CallparamsContext) => void;
	/**
	 * Exit a parse tree produced by `FAILangParser.callparams`.
	 * @param ctx the parse tree
	 */
	exitCallparams?: (ctx: CallparamsContext) => void;

	/**
	 * Enter a parse tree produced by `FAILangParser.arg`.
	 * @param ctx the parse tree
	 */
	enterArg?: (ctx: ArgContext) => void;
	/**
	 * Exit a parse tree produced by `FAILangParser.arg`.
	 * @param ctx the parse tree
	 */
	exitArg?: (ctx: ArgContext) => void;

	/**
	 * Enter a parse tree produced by `FAILangParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `FAILangParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `FAILangParser.param`.
	 * @param ctx the parse tree
	 */
	enterParam?: (ctx: ParamContext) => void;
	/**
	 * Exit a parse tree produced by `FAILangParser.param`.
	 * @param ctx the parse tree
	 */
	exitParam?: (ctx: ParamContext) => void;

	/**
	 * Enter a parse tree produced by `FAILangParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `FAILangParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `FAILangParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `FAILangParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `FAILangParser.tuple`.
	 * @param ctx the parse tree
	 */
	enterTuple?: (ctx: TupleContext) => void;
	/**
	 * Exit a parse tree produced by `FAILangParser.tuple`.
	 * @param ctx the parse tree
	 */
	exitTuple?: (ctx: TupleContext) => void;

	/**
	 * Enter a parse tree produced by `FAILangParser.vector`.
	 * @param ctx the parse tree
	 */
	enterVector?: (ctx: VectorContext) => void;
	/**
	 * Exit a parse tree produced by `FAILangParser.vector`.
	 * @param ctx the parse tree
	 */
	exitVector?: (ctx: VectorContext) => void;

	/**
	 * Enter a parse tree produced by `FAILangParser.prefix`.
	 * @param ctx the parse tree
	 */
	enterPrefix?: (ctx: PrefixContext) => void;
	/**
	 * Exit a parse tree produced by `FAILangParser.prefix`.
	 * @param ctx the parse tree
	 */
	exitPrefix?: (ctx: PrefixContext) => void;

	/**
	 * Enter a parse tree produced by `FAILangParser.indexer`.
	 * @param ctx the parse tree
	 */
	enterIndexer?: (ctx: IndexerContext) => void;
	/**
	 * Exit a parse tree produced by `FAILangParser.indexer`.
	 * @param ctx the parse tree
	 */
	exitIndexer?: (ctx: IndexerContext) => void;

	/**
	 * Enter a parse tree produced by `FAILangParser.piecewise`.
	 * @param ctx the parse tree
	 */
	enterPiecewise?: (ctx: PiecewiseContext) => void;
	/**
	 * Exit a parse tree produced by `FAILangParser.piecewise`.
	 * @param ctx the parse tree
	 */
	exitPiecewise?: (ctx: PiecewiseContext) => void;

	/**
	 * Enter a parse tree produced by `FAILangParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `FAILangParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `FAILangParser.union`.
	 * @param ctx the parse tree
	 */
	enterUnion?: (ctx: UnionContext) => void;
	/**
	 * Exit a parse tree produced by `FAILangParser.union`.
	 * @param ctx the parse tree
	 */
	exitUnion?: (ctx: UnionContext) => void;

	/**
	 * Enter a parse tree produced by `FAILangParser.end`.
	 * @param ctx the parse tree
	 */
	enterEnd?: (ctx: EndContext) => void;
	/**
	 * Exit a parse tree produced by `FAILangParser.end`.
	 * @param ctx the parse tree
	 */
	exitEnd?: (ctx: EndContext) => void;

	/**
	 * Enter a parse tree produced by `FAILangParser.compileUnit`.
	 * @param ctx the parse tree
	 */
	enterCompileUnit?: (ctx: CompileUnitContext) => void;
	/**
	 * Exit a parse tree produced by `FAILangParser.compileUnit`.
	 * @param ctx the parse tree
	 */
	exitCompileUnit?: (ctx: CompileUnitContext) => void;
}

