// Generated from m:\Users\Unlocked\Documents\Faide\Faide\TeXiFAI\grammar\FAILang.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class FAILangParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		PLUS=1, SUBTRACT=2, MULTIPLY=3, DIVIDE=4, MODULO=5, EXPONENT=6, EQ=7, 
		NE=8, R_ARR=9, L_ARR=10, GE=11, LE=12, NOT=13, L_PAREN=14, R_PAREN=15, 
		L_CURL=16, R_CURL=17, L_BRAC=18, R_BRAC=19, COMMA=20, COLON=21, SEMI_COLON=22, 
		VERT_LINE=23, ELIPSIS=24, ARROW=25, NUMBER=26, STRING=27, BOOLEAN=28, 
		VOID=29, LAMBDA=30, UPDATE=31, MEMO=32, IF=33, OTHERWISE=34, NAME=35, 
		COMMENT=36, MULTILINE_COMMENT=37, WS=38;
	public static final int
		RULE_calls = 0, RULE_call = 1, RULE_def = 2, RULE_lambda = 3, RULE_fparams = 4, 
		RULE_callparams = 5, RULE_arg = 6, RULE_name = 7, RULE_param = 8, RULE_expression = 9, 
		RULE_type = 10, RULE_tuple = 11, RULE_vector = 12, RULE_prefix = 13, RULE_indexer = 14, 
		RULE_piecewise = 15, RULE_condition = 16, RULE_union = 17, RULE_end = 18, 
		RULE_compileUnit = 19;
	public static final String[] ruleNames = {
		"calls", "call", "def", "lambda", "fparams", "callparams", "arg", "name", 
		"param", "expression", "type", "tuple", "vector", "prefix", "indexer", 
		"piecewise", "condition", "union", "end", "compileUnit"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", "'='", "'~='", "'>'", 
		"'<'", "'>='", "'<='", "'~'", "'('", "')'", "'{'", "'}'", "'['", "']'", 
		"','", "':'", "';'", "'|'", null, "'->'", null, null, null, "'void'", 
		"'lambda'", "'update'", "'memo'", "'if'", "'otherwise'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "PLUS", "SUBTRACT", "MULTIPLY", "DIVIDE", "MODULO", "EXPONENT", 
		"EQ", "NE", "R_ARR", "L_ARR", "GE", "LE", "NOT", "L_PAREN", "R_PAREN", 
		"L_CURL", "R_CURL", "L_BRAC", "R_BRAC", "COMMA", "COLON", "SEMI_COLON", 
		"VERT_LINE", "ELIPSIS", "ARROW", "NUMBER", "STRING", "BOOLEAN", "VOID", 
		"LAMBDA", "UPDATE", "MEMO", "IF", "OTHERWISE", "NAME", "COMMENT", "MULTILINE_COMMENT", 
		"WS"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "FAILang.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public FAILangParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class CallsContext extends ParserRuleContext {
		public CompileUnitContext compileUnit() {
			return getRuleContext(CompileUnitContext.class,0);
		}
		public List<CallContext> call() {
			return getRuleContexts(CallContext.class);
		}
		public CallContext call(int i) {
			return getRuleContext(CallContext.class,i);
		}
		public List<EndContext> end() {
			return getRuleContexts(EndContext.class);
		}
		public EndContext end(int i) {
			return getRuleContext(EndContext.class,i);
		}
		public CallsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calls; }
	}

	public final CallsContext calls() throws RecognitionException {
		CallsContext _localctx = new CallsContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_calls);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(46);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SUBTRACT) | (1L << L_ARR) | (1L << NOT) | (1L << L_PAREN) | (1L << L_CURL) | (1L << NUMBER) | (1L << STRING) | (1L << BOOLEAN) | (1L << VOID) | (1L << UPDATE) | (1L << MEMO) | (1L << NAME))) != 0)) {
				{
				{
				setState(40);
				call();
				setState(42);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(41);
					end();
					}
					break;
				}
				}
				}
				setState(48);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(49);
			compileUnit();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallContext extends ParserRuleContext {
		public DefContext def() {
			return getRuleContext(DefContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public CallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_call; }
	}

	public final CallContext call() throws RecognitionException {
		CallContext _localctx = new CallContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_call);
		try {
			setState(53);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(51);
				def();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(52);
				expression(0);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DefContext extends ParserRuleContext {
		public Token update;
		public Token memoize;
		public NameContext name() {
			return getRuleContext(NameContext.class,0);
		}
		public TerminalNode L_PAREN() { return getToken(FAILangParser.L_PAREN, 0); }
		public FparamsContext fparams() {
			return getRuleContext(FparamsContext.class,0);
		}
		public TerminalNode R_PAREN() { return getToken(FAILangParser.R_PAREN, 0); }
		public TerminalNode EQ() { return getToken(FAILangParser.EQ, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode UPDATE() { return getToken(FAILangParser.UPDATE, 0); }
		public TerminalNode MEMO() { return getToken(FAILangParser.MEMO, 0); }
		public DefContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_def; }
	}

	public final DefContext def() throws RecognitionException {
		DefContext _localctx = new DefContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_def);
		int _la;
		try {
			setState(78);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(56);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==UPDATE) {
					{
					setState(55);
					((DefContext)_localctx).update = match(UPDATE);
					}
				}

				setState(59);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MEMO) {
					{
					setState(58);
					((DefContext)_localctx).memoize = match(MEMO);
					}
				}

				setState(61);
				name();
				setState(62);
				match(L_PAREN);
				setState(63);
				fparams();
				setState(64);
				match(R_PAREN);
				setState(65);
				match(EQ);
				setState(66);
				expression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(69);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==UPDATE) {
					{
					setState(68);
					((DefContext)_localctx).update = match(UPDATE);
					}
				}

				setState(71);
				name();
				setState(72);
				match(EQ);
				setState(73);
				expression(0);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(75);
				((DefContext)_localctx).update = match(UPDATE);
				setState(76);
				((DefContext)_localctx).memoize = match(MEMO);
				setState(77);
				name();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LambdaContext extends ParserRuleContext {
		public Token memoize;
		public Token elipsis;
		public TerminalNode L_PAREN() { return getToken(FAILangParser.L_PAREN, 0); }
		public FparamsContext fparams() {
			return getRuleContext(FparamsContext.class,0);
		}
		public TerminalNode R_PAREN() { return getToken(FAILangParser.R_PAREN, 0); }
		public TerminalNode ARROW() { return getToken(FAILangParser.ARROW, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode MEMO() { return getToken(FAILangParser.MEMO, 0); }
		public ParamContext param() {
			return getRuleContext(ParamContext.class,0);
		}
		public TerminalNode ELIPSIS() { return getToken(FAILangParser.ELIPSIS, 0); }
		public LambdaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lambda; }
	}

	public final LambdaContext lambda() throws RecognitionException {
		LambdaContext _localctx = new LambdaContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_lambda);
		int _la;
		try {
			setState(96);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case L_PAREN:
				enterOuterAlt(_localctx, 1);
				{
				setState(80);
				match(L_PAREN);
				setState(82);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==MEMO) {
					{
					setState(81);
					((LambdaContext)_localctx).memoize = match(MEMO);
					}
				}

				setState(84);
				fparams();
				setState(85);
				match(R_PAREN);
				setState(86);
				match(ARROW);
				setState(87);
				expression(0);
				}
				break;
			case NAME:
				enterOuterAlt(_localctx, 2);
				{
				setState(89);
				param();
				setState(91);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ELIPSIS) {
					{
					setState(90);
					((LambdaContext)_localctx).elipsis = match(ELIPSIS);
					}
				}

				setState(93);
				match(ARROW);
				setState(94);
				expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FparamsContext extends ParserRuleContext {
		public Token elipsis;
		public List<ParamContext> param() {
			return getRuleContexts(ParamContext.class);
		}
		public ParamContext param(int i) {
			return getRuleContext(ParamContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FAILangParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FAILangParser.COMMA, i);
		}
		public TerminalNode ELIPSIS() { return getToken(FAILangParser.ELIPSIS, 0); }
		public FparamsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fparams; }
	}

	public final FparamsContext fparams() throws RecognitionException {
		FparamsContext _localctx = new FparamsContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_fparams);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(110);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==NAME) {
				{
				setState(103);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(98);
						param();
						setState(99);
						match(COMMA);
						}
						} 
					}
					setState(105);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
				}
				setState(106);
				param();
				setState(108);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ELIPSIS) {
					{
					setState(107);
					((FparamsContext)_localctx).elipsis = match(ELIPSIS);
					}
				}

				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CallparamsContext extends ParserRuleContext {
		public List<ArgContext> arg() {
			return getRuleContexts(ArgContext.class);
		}
		public ArgContext arg(int i) {
			return getRuleContext(ArgContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(FAILangParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FAILangParser.COMMA, i);
		}
		public CallparamsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_callparams; }
	}

	public final CallparamsContext callparams() throws RecognitionException {
		CallparamsContext _localctx = new CallparamsContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_callparams);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(121);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SUBTRACT) | (1L << L_ARR) | (1L << NOT) | (1L << L_PAREN) | (1L << L_CURL) | (1L << NUMBER) | (1L << STRING) | (1L << BOOLEAN) | (1L << VOID) | (1L << NAME))) != 0)) {
				{
				setState(117);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(112);
						arg();
						setState(113);
						match(COMMA);
						}
						} 
					}
					setState(119);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
				}
				setState(120);
				arg();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgContext extends ParserRuleContext {
		public Token elipsis;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode ELIPSIS() { return getToken(FAILangParser.ELIPSIS, 0); }
		public ArgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arg; }
	}

	public final ArgContext arg() throws RecognitionException {
		ArgContext _localctx = new ArgContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_arg);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(123);
			expression(0);
			setState(125);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELIPSIS) {
				{
				setState(124);
				((ArgContext)_localctx).elipsis = match(ELIPSIS);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NameContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(FAILangParser.NAME, 0); }
		public NameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_name; }
	}

	public final NameContext name() throws RecognitionException {
		NameContext _localctx = new NameContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_name);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(127);
			match(NAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParamContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(FAILangParser.NAME, 0); }
		public ParamContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_param; }
	}

	public final ParamContext param() throws RecognitionException {
		ParamContext _localctx = new ParamContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_param);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(129);
			match(NAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public Token op;
		public TerminalNode L_PAREN() { return getToken(FAILangParser.L_PAREN, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode R_PAREN() { return getToken(FAILangParser.R_PAREN, 0); }
		public UnionContext union() {
			return getRuleContext(UnionContext.class,0);
		}
		public PrefixContext prefix() {
			return getRuleContext(PrefixContext.class,0);
		}
		public LambdaContext lambda() {
			return getRuleContext(LambdaContext.class,0);
		}
		public PiecewiseContext piecewise() {
			return getRuleContext(PiecewiseContext.class,0);
		}
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public NameContext name() {
			return getRuleContext(NameContext.class,0);
		}
		public TerminalNode EXPONENT() { return getToken(FAILangParser.EXPONENT, 0); }
		public TerminalNode MULTIPLY() { return getToken(FAILangParser.MULTIPLY, 0); }
		public TerminalNode DIVIDE() { return getToken(FAILangParser.DIVIDE, 0); }
		public TerminalNode MODULO() { return getToken(FAILangParser.MODULO, 0); }
		public TerminalNode PLUS() { return getToken(FAILangParser.PLUS, 0); }
		public TerminalNode SUBTRACT() { return getToken(FAILangParser.SUBTRACT, 0); }
		public TerminalNode EQ() { return getToken(FAILangParser.EQ, 0); }
		public TerminalNode NE() { return getToken(FAILangParser.NE, 0); }
		public TerminalNode R_ARR() { return getToken(FAILangParser.R_ARR, 0); }
		public TerminalNode L_ARR() { return getToken(FAILangParser.L_ARR, 0); }
		public TerminalNode GE() { return getToken(FAILangParser.GE, 0); }
		public TerminalNode LE() { return getToken(FAILangParser.LE, 0); }
		public CallparamsContext callparams() {
			return getRuleContext(CallparamsContext.class,0);
		}
		public IndexerContext indexer() {
			return getRuleContext(IndexerContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 18;
		enterRecursionRule(_localctx, 18, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(144);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				{
				setState(132);
				match(L_PAREN);
				setState(133);
				expression(0);
				setState(134);
				match(R_PAREN);
				}
				break;
			case 2:
				{
				setState(136);
				union();
				}
				break;
			case 3:
				{
				setState(137);
				prefix();
				setState(138);
				expression(10);
				}
				break;
			case 4:
				{
				setState(140);
				lambda();
				}
				break;
			case 5:
				{
				setState(141);
				piecewise();
				}
				break;
			case 6:
				{
				setState(142);
				type();
				}
				break;
			case 7:
				{
				setState(143);
				name();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(167);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(165);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(146);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(147);
						((ExpressionContext)_localctx).op = match(EXPONENT);
						setState(148);
						expression(8);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(149);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(150);
						((ExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << MULTIPLY) | (1L << DIVIDE) | (1L << MODULO))) != 0)) ) {
							((ExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(151);
						expression(8);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(152);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(153);
						((ExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==PLUS || _la==SUBTRACT) ) {
							((ExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(154);
						expression(7);
						}
						break;
					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(155);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(156);
						((ExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << EQ) | (1L << NE) | (1L << R_ARR) | (1L << L_ARR) | (1L << GE) | (1L << LE))) != 0)) ) {
							((ExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(157);
						expression(6);
						}
						break;
					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(158);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(159);
						match(L_PAREN);
						setState(160);
						callparams();
						setState(161);
						match(R_PAREN);
						}
						break;
					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(163);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(164);
						indexer();
						}
						break;
					}
					} 
				}
				setState(169);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class TypeContext extends ParserRuleContext {
		public Token t_number;
		public Token t_string;
		public Token t_boolean;
		public Token t_void;
		public TerminalNode NUMBER() { return getToken(FAILangParser.NUMBER, 0); }
		public TerminalNode STRING() { return getToken(FAILangParser.STRING, 0); }
		public TerminalNode BOOLEAN() { return getToken(FAILangParser.BOOLEAN, 0); }
		public TerminalNode VOID() { return getToken(FAILangParser.VOID, 0); }
		public TupleContext tuple() {
			return getRuleContext(TupleContext.class,0);
		}
		public VectorContext vector() {
			return getRuleContext(VectorContext.class,0);
		}
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_type);
		try {
			setState(176);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUMBER:
				enterOuterAlt(_localctx, 1);
				{
				setState(170);
				((TypeContext)_localctx).t_number = match(NUMBER);
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(171);
				((TypeContext)_localctx).t_string = match(STRING);
				}
				break;
			case BOOLEAN:
				enterOuterAlt(_localctx, 3);
				{
				setState(172);
				((TypeContext)_localctx).t_boolean = match(BOOLEAN);
				}
				break;
			case VOID:
				enterOuterAlt(_localctx, 4);
				{
				setState(173);
				((TypeContext)_localctx).t_void = match(VOID);
				}
				break;
			case L_PAREN:
				enterOuterAlt(_localctx, 5);
				{
				setState(174);
				tuple();
				}
				break;
			case L_ARR:
				enterOuterAlt(_localctx, 6);
				{
				setState(175);
				vector();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TupleContext extends ParserRuleContext {
		public TerminalNode L_PAREN() { return getToken(FAILangParser.L_PAREN, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode R_PAREN() { return getToken(FAILangParser.R_PAREN, 0); }
		public List<TerminalNode> COMMA() { return getTokens(FAILangParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FAILangParser.COMMA, i);
		}
		public TupleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tuple; }
	}

	public final TupleContext tuple() throws RecognitionException {
		TupleContext _localctx = new TupleContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_tuple);
		int _la;
		try {
			int _alt;
			setState(196);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(178);
				match(L_PAREN);
				setState(184);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(179);
						expression(0);
						setState(180);
						match(COMMA);
						}
						} 
					}
					setState(186);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
				}
				setState(187);
				expression(0);
				setState(189);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(188);
					match(COMMA);
					}
				}

				setState(191);
				match(R_PAREN);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(193);
				match(L_PAREN);
				setState(194);
				match(COMMA);
				setState(195);
				match(R_PAREN);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VectorContext extends ParserRuleContext {
		public TerminalNode L_ARR() { return getToken(FAILangParser.L_ARR, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode R_ARR() { return getToken(FAILangParser.R_ARR, 0); }
		public List<TerminalNode> COMMA() { return getTokens(FAILangParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(FAILangParser.COMMA, i);
		}
		public VectorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_vector; }
	}

	public final VectorContext vector() throws RecognitionException {
		VectorContext _localctx = new VectorContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_vector);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(198);
			match(L_ARR);
			setState(204);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(199);
					expression(0);
					setState(200);
					match(COMMA);
					}
					} 
				}
				setState(206);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			}
			setState(207);
			expression(0);
			setState(208);
			match(R_ARR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrefixContext extends ParserRuleContext {
		public TerminalNode NOT() { return getToken(FAILangParser.NOT, 0); }
		public TerminalNode SUBTRACT() { return getToken(FAILangParser.SUBTRACT, 0); }
		public PrefixContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prefix; }
	}

	public final PrefixContext prefix() throws RecognitionException {
		PrefixContext _localctx = new PrefixContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_prefix);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(210);
			_la = _input.LA(1);
			if ( !(_la==SUBTRACT || _la==NOT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IndexerContext extends ParserRuleContext {
		public ExpressionContext l_index;
		public Token elipsis;
		public ExpressionContext r_index;
		public TerminalNode L_BRAC() { return getToken(FAILangParser.L_BRAC, 0); }
		public TerminalNode R_BRAC() { return getToken(FAILangParser.R_BRAC, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode ELIPSIS() { return getToken(FAILangParser.ELIPSIS, 0); }
		public IndexerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_indexer; }
	}

	public final IndexerContext indexer() throws RecognitionException {
		IndexerContext _localctx = new IndexerContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_indexer);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(212);
			match(L_BRAC);
			setState(227);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				{
				setState(213);
				((IndexerContext)_localctx).l_index = expression(0);
				setState(218);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ELIPSIS) {
					{
					setState(214);
					((IndexerContext)_localctx).elipsis = match(ELIPSIS);
					setState(216);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SUBTRACT) | (1L << L_ARR) | (1L << NOT) | (1L << L_PAREN) | (1L << L_CURL) | (1L << NUMBER) | (1L << STRING) | (1L << BOOLEAN) | (1L << VOID) | (1L << NAME))) != 0)) {
						{
						setState(215);
						((IndexerContext)_localctx).r_index = expression(0);
						}
					}

					}
				}

				}
				break;
			case 2:
				{
				setState(224);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
				case 1:
					{
					setState(221);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << SUBTRACT) | (1L << L_ARR) | (1L << NOT) | (1L << L_PAREN) | (1L << L_CURL) | (1L << NUMBER) | (1L << STRING) | (1L << BOOLEAN) | (1L << VOID) | (1L << NAME))) != 0)) {
						{
						setState(220);
						((IndexerContext)_localctx).l_index = expression(0);
						}
					}

					setState(223);
					((IndexerContext)_localctx).elipsis = match(ELIPSIS);
					}
					break;
				}
				setState(226);
				((IndexerContext)_localctx).r_index = expression(0);
				}
				break;
			}
			setState(229);
			match(R_BRAC);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PiecewiseContext extends ParserRuleContext {
		public TerminalNode L_CURL() { return getToken(FAILangParser.L_CURL, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode OTHERWISE() { return getToken(FAILangParser.OTHERWISE, 0); }
		public TerminalNode SEMI_COLON() { return getToken(FAILangParser.SEMI_COLON, 0); }
		public List<ConditionContext> condition() {
			return getRuleContexts(ConditionContext.class);
		}
		public ConditionContext condition(int i) {
			return getRuleContext(ConditionContext.class,i);
		}
		public PiecewiseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_piecewise; }
	}

	public final PiecewiseContext piecewise() throws RecognitionException {
		PiecewiseContext _localctx = new PiecewiseContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_piecewise);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(231);
			match(L_CURL);
			setState(233); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(232);
					condition();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(235); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,29,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(237);
			expression(0);
			setState(238);
			match(OTHERWISE);
			setState(239);
			match(SEMI_COLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConditionContext extends ParserRuleContext {
		public ExpressionContext expr;
		public ExpressionContext cond;
		public TerminalNode IF() { return getToken(FAILangParser.IF, 0); }
		public TerminalNode SEMI_COLON() { return getToken(FAILangParser.SEMI_COLON, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition; }
	}

	public final ConditionContext condition() throws RecognitionException {
		ConditionContext _localctx = new ConditionContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_condition);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(241);
			((ConditionContext)_localctx).expr = expression(0);
			setState(242);
			match(IF);
			setState(243);
			((ConditionContext)_localctx).cond = expression(0);
			setState(244);
			match(SEMI_COLON);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnionContext extends ParserRuleContext {
		public TerminalNode L_PAREN() { return getToken(FAILangParser.L_PAREN, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode R_PAREN() { return getToken(FAILangParser.R_PAREN, 0); }
		public List<TerminalNode> VERT_LINE() { return getTokens(FAILangParser.VERT_LINE); }
		public TerminalNode VERT_LINE(int i) {
			return getToken(FAILangParser.VERT_LINE, i);
		}
		public UnionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_union; }
	}

	public final UnionContext union() throws RecognitionException {
		UnionContext _localctx = new UnionContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_union);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(246);
			match(L_PAREN);
			setState(250); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(247);
					expression(0);
					setState(248);
					match(VERT_LINE);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(252); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(254);
			expression(0);
			setState(255);
			match(R_PAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EndContext extends ParserRuleContext {
		public TerminalNode SEMI_COLON() { return getToken(FAILangParser.SEMI_COLON, 0); }
		public TerminalNode EOF() { return getToken(FAILangParser.EOF, 0); }
		public EndContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_end; }
	}

	public final EndContext end() throws RecognitionException {
		EndContext _localctx = new EndContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_end);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(257);
			_la = _input.LA(1);
			if ( !(_la==EOF || _la==SEMI_COLON) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CompileUnitContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(FAILangParser.EOF, 0); }
		public CompileUnitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compileUnit; }
	}

	public final CompileUnitContext compileUnit() throws RecognitionException {
		CompileUnitContext _localctx = new CompileUnitContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_compileUnit);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(259);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 9:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 8);
		case 1:
			return precpred(_ctx, 7);
		case 2:
			return precpred(_ctx, 6);
		case 3:
			return precpred(_ctx, 5);
		case 4:
			return precpred(_ctx, 11);
		case 5:
			return precpred(_ctx, 9);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3(\u0108\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\3\2\3\2\5\2-\n\2\7\2/\n\2\f\2\16\2\62\13"+
		"\2\3\2\3\2\3\3\3\3\5\38\n\3\3\4\5\4;\n\4\3\4\5\4>\n\4\3\4\3\4\3\4\3\4"+
		"\3\4\3\4\3\4\3\4\5\4H\n\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4Q\n\4\3\5\3\5"+
		"\5\5U\n\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\5\5^\n\5\3\5\3\5\3\5\5\5c\n\5\3"+
		"\6\3\6\3\6\7\6h\n\6\f\6\16\6k\13\6\3\6\3\6\5\6o\n\6\5\6q\n\6\3\7\3\7\3"+
		"\7\7\7v\n\7\f\7\16\7y\13\7\3\7\5\7|\n\7\3\b\3\b\5\b\u0080\n\b\3\t\3\t"+
		"\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3"+
		"\13\5\13\u0093\n\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\7\13\u00a8\n\13\f\13\16"+
		"\13\u00ab\13\13\3\f\3\f\3\f\3\f\3\f\3\f\5\f\u00b3\n\f\3\r\3\r\3\r\3\r"+
		"\7\r\u00b9\n\r\f\r\16\r\u00bc\13\r\3\r\3\r\5\r\u00c0\n\r\3\r\3\r\3\r\3"+
		"\r\3\r\5\r\u00c7\n\r\3\16\3\16\3\16\3\16\7\16\u00cd\n\16\f\16\16\16\u00d0"+
		"\13\16\3\16\3\16\3\16\3\17\3\17\3\20\3\20\3\20\3\20\5\20\u00db\n\20\5"+
		"\20\u00dd\n\20\3\20\5\20\u00e0\n\20\3\20\5\20\u00e3\n\20\3\20\5\20\u00e6"+
		"\n\20\3\20\3\20\3\21\3\21\6\21\u00ec\n\21\r\21\16\21\u00ed\3\21\3\21\3"+
		"\21\3\21\3\22\3\22\3\22\3\22\3\22\3\23\3\23\3\23\3\23\6\23\u00fd\n\23"+
		"\r\23\16\23\u00fe\3\23\3\23\3\23\3\24\3\24\3\25\3\25\3\25\2\3\24\26\2"+
		"\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(\2\7\3\2\5\7\3\2\3\4\3\2\t"+
		"\16\4\2\4\4\17\17\3\3\30\30\2\u0120\2\60\3\2\2\2\4\67\3\2\2\2\6P\3\2\2"+
		"\2\bb\3\2\2\2\np\3\2\2\2\f{\3\2\2\2\16}\3\2\2\2\20\u0081\3\2\2\2\22\u0083"+
		"\3\2\2\2\24\u0092\3\2\2\2\26\u00b2\3\2\2\2\30\u00c6\3\2\2\2\32\u00c8\3"+
		"\2\2\2\34\u00d4\3\2\2\2\36\u00d6\3\2\2\2 \u00e9\3\2\2\2\"\u00f3\3\2\2"+
		"\2$\u00f8\3\2\2\2&\u0103\3\2\2\2(\u0105\3\2\2\2*,\5\4\3\2+-\5&\24\2,+"+
		"\3\2\2\2,-\3\2\2\2-/\3\2\2\2.*\3\2\2\2/\62\3\2\2\2\60.\3\2\2\2\60\61\3"+
		"\2\2\2\61\63\3\2\2\2\62\60\3\2\2\2\63\64\5(\25\2\64\3\3\2\2\2\658\5\6"+
		"\4\2\668\5\24\13\2\67\65\3\2\2\2\67\66\3\2\2\28\5\3\2\2\29;\7!\2\2:9\3"+
		"\2\2\2:;\3\2\2\2;=\3\2\2\2<>\7\"\2\2=<\3\2\2\2=>\3\2\2\2>?\3\2\2\2?@\5"+
		"\20\t\2@A\7\20\2\2AB\5\n\6\2BC\7\21\2\2CD\7\t\2\2DE\5\24\13\2EQ\3\2\2"+
		"\2FH\7!\2\2GF\3\2\2\2GH\3\2\2\2HI\3\2\2\2IJ\5\20\t\2JK\7\t\2\2KL\5\24"+
		"\13\2LQ\3\2\2\2MN\7!\2\2NO\7\"\2\2OQ\5\20\t\2P:\3\2\2\2PG\3\2\2\2PM\3"+
		"\2\2\2Q\7\3\2\2\2RT\7\20\2\2SU\7\"\2\2TS\3\2\2\2TU\3\2\2\2UV\3\2\2\2V"+
		"W\5\n\6\2WX\7\21\2\2XY\7\33\2\2YZ\5\24\13\2Zc\3\2\2\2[]\5\22\n\2\\^\7"+
		"\32\2\2]\\\3\2\2\2]^\3\2\2\2^_\3\2\2\2_`\7\33\2\2`a\5\24\13\2ac\3\2\2"+
		"\2bR\3\2\2\2b[\3\2\2\2c\t\3\2\2\2de\5\22\n\2ef\7\26\2\2fh\3\2\2\2gd\3"+
		"\2\2\2hk\3\2\2\2ig\3\2\2\2ij\3\2\2\2jl\3\2\2\2ki\3\2\2\2ln\5\22\n\2mo"+
		"\7\32\2\2nm\3\2\2\2no\3\2\2\2oq\3\2\2\2pi\3\2\2\2pq\3\2\2\2q\13\3\2\2"+
		"\2rs\5\16\b\2st\7\26\2\2tv\3\2\2\2ur\3\2\2\2vy\3\2\2\2wu\3\2\2\2wx\3\2"+
		"\2\2xz\3\2\2\2yw\3\2\2\2z|\5\16\b\2{w\3\2\2\2{|\3\2\2\2|\r\3\2\2\2}\177"+
		"\5\24\13\2~\u0080\7\32\2\2\177~\3\2\2\2\177\u0080\3\2\2\2\u0080\17\3\2"+
		"\2\2\u0081\u0082\7%\2\2\u0082\21\3\2\2\2\u0083\u0084\7%\2\2\u0084\23\3"+
		"\2\2\2\u0085\u0086\b\13\1\2\u0086\u0087\7\20\2\2\u0087\u0088\5\24\13\2"+
		"\u0088\u0089\7\21\2\2\u0089\u0093\3\2\2\2\u008a\u0093\5$\23\2\u008b\u008c"+
		"\5\34\17\2\u008c\u008d\5\24\13\f\u008d\u0093\3\2\2\2\u008e\u0093\5\b\5"+
		"\2\u008f\u0093\5 \21\2\u0090\u0093\5\26\f\2\u0091\u0093\5\20\t\2\u0092"+
		"\u0085\3\2\2\2\u0092\u008a\3\2\2\2\u0092\u008b\3\2\2\2\u0092\u008e\3\2"+
		"\2\2\u0092\u008f\3\2\2\2\u0092\u0090\3\2\2\2\u0092\u0091\3\2\2\2\u0093"+
		"\u00a9\3\2\2\2\u0094\u0095\f\n\2\2\u0095\u0096\7\b\2\2\u0096\u00a8\5\24"+
		"\13\n\u0097\u0098\f\t\2\2\u0098\u0099\t\2\2\2\u0099\u00a8\5\24\13\n\u009a"+
		"\u009b\f\b\2\2\u009b\u009c\t\3\2\2\u009c\u00a8\5\24\13\t\u009d\u009e\f"+
		"\7\2\2\u009e\u009f\t\4\2\2\u009f\u00a8\5\24\13\b\u00a0\u00a1\f\r\2\2\u00a1"+
		"\u00a2\7\20\2\2\u00a2\u00a3\5\f\7\2\u00a3\u00a4\7\21\2\2\u00a4\u00a8\3"+
		"\2\2\2\u00a5\u00a6\f\13\2\2\u00a6\u00a8\5\36\20\2\u00a7\u0094\3\2\2\2"+
		"\u00a7\u0097\3\2\2\2\u00a7\u009a\3\2\2\2\u00a7\u009d\3\2\2\2\u00a7\u00a0"+
		"\3\2\2\2\u00a7\u00a5\3\2\2\2\u00a8\u00ab\3\2\2\2\u00a9\u00a7\3\2\2\2\u00a9"+
		"\u00aa\3\2\2\2\u00aa\25\3\2\2\2\u00ab\u00a9\3\2\2\2\u00ac\u00b3\7\34\2"+
		"\2\u00ad\u00b3\7\35\2\2\u00ae\u00b3\7\36\2\2\u00af\u00b3\7\37\2\2\u00b0"+
		"\u00b3\5\30\r\2\u00b1\u00b3\5\32\16\2\u00b2\u00ac\3\2\2\2\u00b2\u00ad"+
		"\3\2\2\2\u00b2\u00ae\3\2\2\2\u00b2\u00af\3\2\2\2\u00b2\u00b0\3\2\2\2\u00b2"+
		"\u00b1\3\2\2\2\u00b3\27\3\2\2\2\u00b4\u00ba\7\20\2\2\u00b5\u00b6\5\24"+
		"\13\2\u00b6\u00b7\7\26\2\2\u00b7\u00b9\3\2\2\2\u00b8\u00b5\3\2\2\2\u00b9"+
		"\u00bc\3\2\2\2\u00ba\u00b8\3\2\2\2\u00ba\u00bb\3\2\2\2\u00bb\u00bd\3\2"+
		"\2\2\u00bc\u00ba\3\2\2\2\u00bd\u00bf\5\24\13\2\u00be\u00c0\7\26\2\2\u00bf"+
		"\u00be\3\2\2\2\u00bf\u00c0\3\2\2\2\u00c0\u00c1\3\2\2\2\u00c1\u00c2\7\21"+
		"\2\2\u00c2\u00c7\3\2\2\2\u00c3\u00c4\7\20\2\2\u00c4\u00c5\7\26\2\2\u00c5"+
		"\u00c7\7\21\2\2\u00c6\u00b4\3\2\2\2\u00c6\u00c3\3\2\2\2\u00c7\31\3\2\2"+
		"\2\u00c8\u00ce\7\f\2\2\u00c9\u00ca\5\24\13\2\u00ca\u00cb\7\26\2\2\u00cb"+
		"\u00cd\3\2\2\2\u00cc\u00c9\3\2\2\2\u00cd\u00d0\3\2\2\2\u00ce\u00cc\3\2"+
		"\2\2\u00ce\u00cf\3\2\2\2\u00cf\u00d1\3\2\2\2\u00d0\u00ce\3\2\2\2\u00d1"+
		"\u00d2\5\24\13\2\u00d2\u00d3\7\13\2\2\u00d3\33\3\2\2\2\u00d4\u00d5\t\5"+
		"\2\2\u00d5\35\3\2\2\2\u00d6\u00e5\7\24\2\2\u00d7\u00dc\5\24\13\2\u00d8"+
		"\u00da\7\32\2\2\u00d9\u00db\5\24\13\2\u00da\u00d9\3\2\2\2\u00da\u00db"+
		"\3\2\2\2\u00db\u00dd\3\2\2\2\u00dc\u00d8\3\2\2\2\u00dc\u00dd\3\2\2\2\u00dd"+
		"\u00e6\3\2\2\2\u00de\u00e0\5\24\13\2\u00df\u00de\3\2\2\2\u00df\u00e0\3"+
		"\2\2\2\u00e0\u00e1\3\2\2\2\u00e1\u00e3\7\32\2\2\u00e2\u00df\3\2\2\2\u00e2"+
		"\u00e3\3\2\2\2\u00e3\u00e4\3\2\2\2\u00e4\u00e6\5\24\13\2\u00e5\u00d7\3"+
		"\2\2\2\u00e5\u00e2\3\2\2\2\u00e6\u00e7\3\2\2\2\u00e7\u00e8\7\25\2\2\u00e8"+
		"\37\3\2\2\2\u00e9\u00eb\7\22\2\2\u00ea\u00ec\5\"\22\2\u00eb\u00ea\3\2"+
		"\2\2\u00ec\u00ed\3\2\2\2\u00ed\u00eb\3\2\2\2\u00ed\u00ee\3\2\2\2\u00ee"+
		"\u00ef\3\2\2\2\u00ef\u00f0\5\24\13\2\u00f0\u00f1\7$\2\2\u00f1\u00f2\7"+
		"\30\2\2\u00f2!\3\2\2\2\u00f3\u00f4\5\24\13\2\u00f4\u00f5\7#\2\2\u00f5"+
		"\u00f6\5\24\13\2\u00f6\u00f7\7\30\2\2\u00f7#\3\2\2\2\u00f8\u00fc\7\20"+
		"\2\2\u00f9\u00fa\5\24\13\2\u00fa\u00fb\7\31\2\2\u00fb\u00fd\3\2\2\2\u00fc"+
		"\u00f9\3\2\2\2\u00fd\u00fe\3\2\2\2\u00fe\u00fc\3\2\2\2\u00fe\u00ff\3\2"+
		"\2\2\u00ff\u0100\3\2\2\2\u0100\u0101\5\24\13\2\u0101\u0102\7\21\2\2\u0102"+
		"%\3\2\2\2\u0103\u0104\t\6\2\2\u0104\'\3\2\2\2\u0105\u0106\7\2\2\3\u0106"+
		")\3\2\2\2!,\60\67:=GPT]binpw{\177\u0092\u00a7\u00a9\u00b2\u00ba\u00bf"+
		"\u00c6\u00ce\u00da\u00dc\u00df\u00e2\u00e5\u00ed\u00fe";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}