"use strict";
// Generated from grammar/FAILang.g4 by ANTLR 4.6-SNAPSHOT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const Decorators_1 = require("antlr4ts/Decorators");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Decorators_2 = require("antlr4ts/Decorators");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const RuleVersion_1 = require("antlr4ts/RuleVersion");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class FAILangParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(FAILangParser._ATN, this);
    }
    get vocabulary() {
        return FAILangParser.VOCABULARY;
    }
    get grammarFileName() { return "FAILang.g4"; }
    get ruleNames() { return FAILangParser.ruleNames; }
    get serializedATN() { return FAILangParser._serializedATN; }
    calls() {
        let _localctx = new CallsContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, FAILangParser.RULE_calls);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 46;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FAILangParser.SUBTRACT) | (1 << FAILangParser.L_ARR) | (1 << FAILangParser.NOT) | (1 << FAILangParser.L_PAREN) | (1 << FAILangParser.L_CURL) | (1 << FAILangParser.NUMBER) | (1 << FAILangParser.STRING) | (1 << FAILangParser.BOOLEAN) | (1 << FAILangParser.VOID) | (1 << FAILangParser.UPDATE))) !== 0) || _la === FAILangParser.MEMO || _la === FAILangParser.NAME) {
                    {
                        {
                            this.state = 40;
                            this.call();
                            this.state = 42;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 41;
                                        this.end();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 48;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 49;
                this.compileUnit();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    call() {
        let _localctx = new CallContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, FAILangParser.RULE_call);
        try {
            this.state = 53;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 51;
                        this.def();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 52;
                        this.expression(0);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    def() {
        let _localctx = new DefContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, FAILangParser.RULE_def);
        let _la;
        try {
            this.state = 78;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 56;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FAILangParser.UPDATE) {
                            {
                                this.state = 55;
                                _localctx._update = this.match(FAILangParser.UPDATE);
                            }
                        }
                        this.state = 59;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FAILangParser.MEMO) {
                            {
                                this.state = 58;
                                _localctx._memoize = this.match(FAILangParser.MEMO);
                            }
                        }
                        this.state = 61;
                        this.name();
                        this.state = 62;
                        this.match(FAILangParser.L_PAREN);
                        this.state = 63;
                        this.fparams();
                        this.state = 64;
                        this.match(FAILangParser.R_PAREN);
                        this.state = 65;
                        this.match(FAILangParser.EQ);
                        this.state = 66;
                        this.expression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 69;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FAILangParser.UPDATE) {
                            {
                                this.state = 68;
                                _localctx._update = this.match(FAILangParser.UPDATE);
                            }
                        }
                        this.state = 71;
                        this.name();
                        this.state = 72;
                        this.match(FAILangParser.EQ);
                        this.state = 73;
                        this.expression(0);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 75;
                        _localctx._update = this.match(FAILangParser.UPDATE);
                        this.state = 76;
                        _localctx._memoize = this.match(FAILangParser.MEMO);
                        this.state = 77;
                        this.name();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    lambda() {
        let _localctx = new LambdaContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, FAILangParser.RULE_lambda);
        let _la;
        try {
            this.state = 96;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FAILangParser.L_PAREN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 80;
                        this.match(FAILangParser.L_PAREN);
                        this.state = 82;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FAILangParser.MEMO) {
                            {
                                this.state = 81;
                                _localctx._memoize = this.match(FAILangParser.MEMO);
                            }
                        }
                        this.state = 84;
                        this.fparams();
                        this.state = 85;
                        this.match(FAILangParser.R_PAREN);
                        this.state = 86;
                        this.match(FAILangParser.ARROW);
                        this.state = 87;
                        this.expression(0);
                    }
                    break;
                case FAILangParser.NAME:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 89;
                        this.param();
                        this.state = 91;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FAILangParser.ELIPSIS) {
                            {
                                this.state = 90;
                                _localctx._elipsis = this.match(FAILangParser.ELIPSIS);
                            }
                        }
                        this.state = 93;
                        this.match(FAILangParser.ARROW);
                        this.state = 94;
                        this.expression(0);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    fparams() {
        let _localctx = new FparamsContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, FAILangParser.RULE_fparams);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 110;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FAILangParser.NAME) {
                    {
                        this.state = 103;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 98;
                                        this.param();
                                        this.state = 99;
                                        this.match(FAILangParser.COMMA);
                                    }
                                }
                            }
                            this.state = 105;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
                        }
                        this.state = 106;
                        this.param();
                        this.state = 108;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FAILangParser.ELIPSIS) {
                            {
                                this.state = 107;
                                _localctx._elipsis = this.match(FAILangParser.ELIPSIS);
                            }
                        }
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    callparams() {
        let _localctx = new CallparamsContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, FAILangParser.RULE_callparams);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 121;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FAILangParser.SUBTRACT) | (1 << FAILangParser.L_ARR) | (1 << FAILangParser.NOT) | (1 << FAILangParser.L_PAREN) | (1 << FAILangParser.L_CURL) | (1 << FAILangParser.NUMBER) | (1 << FAILangParser.STRING) | (1 << FAILangParser.BOOLEAN) | (1 << FAILangParser.VOID))) !== 0) || _la === FAILangParser.NAME) {
                    {
                        this.state = 117;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 112;
                                        this.arg();
                                        this.state = 113;
                                        this.match(FAILangParser.COMMA);
                                    }
                                }
                            }
                            this.state = 119;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
                        }
                        this.state = 120;
                        this.arg();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    arg() {
        let _localctx = new ArgContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, FAILangParser.RULE_arg);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 123;
                this.expression(0);
                this.state = 125;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === FAILangParser.ELIPSIS) {
                    {
                        this.state = 124;
                        _localctx._elipsis = this.match(FAILangParser.ELIPSIS);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    name() {
        let _localctx = new NameContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, FAILangParser.RULE_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 127;
                this.match(FAILangParser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    param() {
        let _localctx = new ParamContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, FAILangParser.RULE_param);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 129;
                this.match(FAILangParser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    expression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let _parentctx = this._ctx;
        let _parentState = this.state;
        let _localctx = new ExpressionContext(this._ctx, _parentState);
        let _prevctx = _localctx;
        let _startState = 18;
        this.enterRecursionRule(_localctx, 18, FAILangParser.RULE_expression, _p);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 144;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
                    case 1:
                        {
                            this.state = 132;
                            this.match(FAILangParser.L_PAREN);
                            this.state = 133;
                            this.expression(0);
                            this.state = 134;
                            this.match(FAILangParser.R_PAREN);
                        }
                        break;
                    case 2:
                        {
                            this.state = 136;
                            this.union();
                        }
                        break;
                    case 3:
                        {
                            this.state = 137;
                            this.prefix();
                            this.state = 138;
                            this.expression(10);
                        }
                        break;
                    case 4:
                        {
                            this.state = 140;
                            this.lambda();
                        }
                        break;
                    case 5:
                        {
                            this.state = 141;
                            this.piecewise();
                        }
                        break;
                    case 6:
                        {
                            this.state = 142;
                            this.type();
                        }
                        break;
                    case 7:
                        {
                            this.state = 143;
                            this.name();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 167;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null)
                            this.triggerExitRuleEvent();
                        _prevctx = _localctx;
                        {
                            this.state = 165;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, FAILangParser.RULE_expression);
                                        this.state = 146;
                                        if (!(this.precpred(this._ctx, 8)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                                        this.state = 147;
                                        _localctx._op = this.match(FAILangParser.EXPONENT);
                                        this.state = 148;
                                        this.expression(8);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, FAILangParser.RULE_expression);
                                        this.state = 149;
                                        if (!(this.precpred(this._ctx, 7)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                                        this.state = 150;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FAILangParser.MULTIPLY) | (1 << FAILangParser.DIVIDE) | (1 << FAILangParser.MODULO))) !== 0))) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 151;
                                        this.expression(8);
                                    }
                                    break;
                                case 3:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, FAILangParser.RULE_expression);
                                        this.state = 152;
                                        if (!(this.precpred(this._ctx, 6)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                                        this.state = 153;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!(_la === FAILangParser.PLUS || _la === FAILangParser.SUBTRACT)) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 154;
                                        this.expression(7);
                                    }
                                    break;
                                case 4:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, FAILangParser.RULE_expression);
                                        this.state = 155;
                                        if (!(this.precpred(this._ctx, 5)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                                        this.state = 156;
                                        _localctx._op = this._input.LT(1);
                                        _la = this._input.LA(1);
                                        if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FAILangParser.EQ) | (1 << FAILangParser.NE) | (1 << FAILangParser.R_ARR) | (1 << FAILangParser.L_ARR) | (1 << FAILangParser.GE) | (1 << FAILangParser.LE))) !== 0))) {
                                            _localctx._op = this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 157;
                                        this.expression(6);
                                    }
                                    break;
                                case 5:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, FAILangParser.RULE_expression);
                                        this.state = 158;
                                        if (!(this.precpred(this._ctx, 11)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                                        this.state = 159;
                                        this.match(FAILangParser.L_PAREN);
                                        this.state = 160;
                                        this.callparams();
                                        this.state = 161;
                                        this.match(FAILangParser.R_PAREN);
                                    }
                                    break;
                                case 6:
                                    {
                                        _localctx = new ExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, FAILangParser.RULE_expression);
                                        this.state = 163;
                                        if (!(this.precpred(this._ctx, 9)))
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                                        this.state = 164;
                                        this.indexer();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 169;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    }
    type() {
        let _localctx = new TypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, FAILangParser.RULE_type);
        try {
            this.state = 176;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case FAILangParser.NUMBER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 170;
                        _localctx._t_number = this.match(FAILangParser.NUMBER);
                    }
                    break;
                case FAILangParser.STRING:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 171;
                        _localctx._t_string = this.match(FAILangParser.STRING);
                    }
                    break;
                case FAILangParser.BOOLEAN:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 172;
                        _localctx._t_boolean = this.match(FAILangParser.BOOLEAN);
                    }
                    break;
                case FAILangParser.VOID:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 173;
                        _localctx._t_void = this.match(FAILangParser.VOID);
                    }
                    break;
                case FAILangParser.L_PAREN:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 174;
                        this.tuple();
                    }
                    break;
                case FAILangParser.L_ARR:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 175;
                        this.vector();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    tuple() {
        let _localctx = new TupleContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, FAILangParser.RULE_tuple);
        let _la;
        try {
            let _alt;
            this.state = 196;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 178;
                        this.match(FAILangParser.L_PAREN);
                        this.state = 184;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 179;
                                        this.expression(0);
                                        this.state = 180;
                                        this.match(FAILangParser.COMMA);
                                    }
                                }
                            }
                            this.state = 186;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
                        }
                        this.state = 187;
                        this.expression(0);
                        this.state = 189;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === FAILangParser.COMMA) {
                            {
                                this.state = 188;
                                this.match(FAILangParser.COMMA);
                            }
                        }
                        this.state = 191;
                        this.match(FAILangParser.R_PAREN);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 193;
                        this.match(FAILangParser.L_PAREN);
                        this.state = 194;
                        this.match(FAILangParser.COMMA);
                        this.state = 195;
                        this.match(FAILangParser.R_PAREN);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    vector() {
        let _localctx = new VectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, FAILangParser.RULE_vector);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 198;
                this.match(FAILangParser.L_ARR);
                this.state = 204;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 199;
                                this.expression(0);
                                this.state = 200;
                                this.match(FAILangParser.COMMA);
                            }
                        }
                    }
                    this.state = 206;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
                }
                this.state = 207;
                this.expression(0);
                this.state = 208;
                this.match(FAILangParser.R_ARR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    prefix() {
        let _localctx = new PrefixContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, FAILangParser.RULE_prefix);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 210;
                _la = this._input.LA(1);
                if (!(_la === FAILangParser.SUBTRACT || _la === FAILangParser.NOT)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    indexer() {
        let _localctx = new IndexerContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, FAILangParser.RULE_indexer);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 212;
                this.match(FAILangParser.L_BRAC);
                this.state = 227;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
                    case 1:
                        {
                            this.state = 213;
                            _localctx._l_index = this.expression(0);
                            this.state = 218;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === FAILangParser.ELIPSIS) {
                                {
                                    this.state = 214;
                                    _localctx._elipsis = this.match(FAILangParser.ELIPSIS);
                                    this.state = 216;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FAILangParser.SUBTRACT) | (1 << FAILangParser.L_ARR) | (1 << FAILangParser.NOT) | (1 << FAILangParser.L_PAREN) | (1 << FAILangParser.L_CURL) | (1 << FAILangParser.NUMBER) | (1 << FAILangParser.STRING) | (1 << FAILangParser.BOOLEAN) | (1 << FAILangParser.VOID))) !== 0) || _la === FAILangParser.NAME) {
                                        {
                                            this.state = 215;
                                            _localctx._r_index = this.expression(0);
                                        }
                                    }
                                }
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 224;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 221;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FAILangParser.SUBTRACT) | (1 << FAILangParser.L_ARR) | (1 << FAILangParser.NOT) | (1 << FAILangParser.L_PAREN) | (1 << FAILangParser.L_CURL) | (1 << FAILangParser.NUMBER) | (1 << FAILangParser.STRING) | (1 << FAILangParser.BOOLEAN) | (1 << FAILangParser.VOID))) !== 0) || _la === FAILangParser.NAME) {
                                            {
                                                this.state = 220;
                                                _localctx._l_index = this.expression(0);
                                            }
                                        }
                                        this.state = 223;
                                        _localctx._elipsis = this.match(FAILangParser.ELIPSIS);
                                    }
                                    break;
                            }
                            this.state = 226;
                            _localctx._r_index = this.expression(0);
                        }
                        break;
                }
                this.state = 229;
                this.match(FAILangParser.R_BRAC);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    piecewise() {
        let _localctx = new PiecewiseContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, FAILangParser.RULE_piecewise);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 231;
                this.match(FAILangParser.L_CURL);
                this.state = 233;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 232;
                                    this.condition();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 235;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 237;
                this.expression(0);
                this.state = 238;
                this.match(FAILangParser.OTHERWISE);
                this.state = 239;
                this.match(FAILangParser.SEMI_COLON);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    condition() {
        let _localctx = new ConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, FAILangParser.RULE_condition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 241;
                _localctx._expr = this.expression(0);
                this.state = 242;
                this.match(FAILangParser.IF);
                this.state = 243;
                _localctx._cond = this.expression(0);
                this.state = 244;
                this.match(FAILangParser.SEMI_COLON);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    union() {
        let _localctx = new UnionContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, FAILangParser.RULE_union);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 246;
                this.match(FAILangParser.L_PAREN);
                this.state = 250;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 247;
                                    this.expression(0);
                                    this.state = 248;
                                    this.match(FAILangParser.VERT_LINE);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 252;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                this.state = 254;
                this.expression(0);
                this.state = 255;
                this.match(FAILangParser.R_PAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    end() {
        let _localctx = new EndContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, FAILangParser.RULE_end);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 257;
                _la = this._input.LA(1);
                if (!(_la === FAILangParser.EOF || _la === FAILangParser.SEMI_COLON)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    compileUnit() {
        let _localctx = new CompileUnitContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, FAILangParser.RULE_compileUnit);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 259;
                this.match(FAILangParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    sempred(_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 9:
                return this.expression_sempred(_localctx, predIndex);
        }
        return true;
    }
    expression_sempred(_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 8);
            case 1:
                return this.precpred(this._ctx, 7);
            case 2:
                return this.precpred(this._ctx, 6);
            case 3:
                return this.precpred(this._ctx, 5);
            case 4:
                return this.precpred(this._ctx, 11);
            case 5:
                return this.precpred(this._ctx, 9);
        }
        return true;
    }
    static get _ATN() {
        if (!FAILangParser.__ATN) {
            FAILangParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(FAILangParser._serializedATN));
        }
        return FAILangParser.__ATN;
    }
}
FAILangParser.PLUS = 1;
FAILangParser.SUBTRACT = 2;
FAILangParser.MULTIPLY = 3;
FAILangParser.DIVIDE = 4;
FAILangParser.MODULO = 5;
FAILangParser.EXPONENT = 6;
FAILangParser.EQ = 7;
FAILangParser.NE = 8;
FAILangParser.R_ARR = 9;
FAILangParser.L_ARR = 10;
FAILangParser.GE = 11;
FAILangParser.LE = 12;
FAILangParser.NOT = 13;
FAILangParser.L_PAREN = 14;
FAILangParser.R_PAREN = 15;
FAILangParser.L_CURL = 16;
FAILangParser.R_CURL = 17;
FAILangParser.L_BRAC = 18;
FAILangParser.R_BRAC = 19;
FAILangParser.COMMA = 20;
FAILangParser.COLON = 21;
FAILangParser.SEMI_COLON = 22;
FAILangParser.VERT_LINE = 23;
FAILangParser.ELIPSIS = 24;
FAILangParser.ARROW = 25;
FAILangParser.NUMBER = 26;
FAILangParser.STRING = 27;
FAILangParser.BOOLEAN = 28;
FAILangParser.VOID = 29;
FAILangParser.LAMBDA = 30;
FAILangParser.UPDATE = 31;
FAILangParser.MEMO = 32;
FAILangParser.IF = 33;
FAILangParser.OTHERWISE = 34;
FAILangParser.NAME = 35;
FAILangParser.COMMENT = 36;
FAILangParser.MULTILINE_COMMENT = 37;
FAILangParser.WS = 38;
FAILangParser.RULE_calls = 0;
FAILangParser.RULE_call = 1;
FAILangParser.RULE_def = 2;
FAILangParser.RULE_lambda = 3;
FAILangParser.RULE_fparams = 4;
FAILangParser.RULE_callparams = 5;
FAILangParser.RULE_arg = 6;
FAILangParser.RULE_name = 7;
FAILangParser.RULE_param = 8;
FAILangParser.RULE_expression = 9;
FAILangParser.RULE_type = 10;
FAILangParser.RULE_tuple = 11;
FAILangParser.RULE_vector = 12;
FAILangParser.RULE_prefix = 13;
FAILangParser.RULE_indexer = 14;
FAILangParser.RULE_piecewise = 15;
FAILangParser.RULE_condition = 16;
FAILangParser.RULE_union = 17;
FAILangParser.RULE_end = 18;
FAILangParser.RULE_compileUnit = 19;
FAILangParser.ruleNames = [
    "calls", "call", "def", "lambda", "fparams", "callparams", "arg", "name",
    "param", "expression", "type", "tuple", "vector", "prefix", "indexer",
    "piecewise", "condition", "union", "end", "compileUnit"
];
FAILangParser._LITERAL_NAMES = [
    undefined, "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", "'='", "'~='", "'>'",
    "'<'", "'>='", "'<='", "'~'", "'('", "')'", "'{'", "'}'", "'['", "']'",
    "','", "':'", "';'", "'|'", undefined, "'->'", undefined, undefined, undefined,
    "'void'", "'lambda'", "'update'", "'memo'", "'if'", "'otherwise'"
];
FAILangParser._SYMBOLIC_NAMES = [
    undefined, "PLUS", "SUBTRACT", "MULTIPLY", "DIVIDE", "MODULO", "EXPONENT",
    "EQ", "NE", "R_ARR", "L_ARR", "GE", "LE", "NOT", "L_PAREN", "R_PAREN",
    "L_CURL", "R_CURL", "L_BRAC", "R_BRAC", "COMMA", "COLON", "SEMI_COLON",
    "VERT_LINE", "ELIPSIS", "ARROW", "NUMBER", "STRING", "BOOLEAN", "VOID",
    "LAMBDA", "UPDATE", "MEMO", "IF", "OTHERWISE", "NAME", "COMMENT", "MULTILINE_COMMENT",
    "WS"
];
FAILangParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(FAILangParser._LITERAL_NAMES, FAILangParser._SYMBOLIC_NAMES, []);
FAILangParser._serializedATN = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03(\u0108\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
    "\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x05\x02-\n\x02" +
    "\x07\x02/\n\x02\f\x02\x0E\x022\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05" +
    "\x038\n\x03\x03\x04\x05\x04;\n\x04\x03\x04\x05\x04>\n\x04\x03\x04\x03" +
    "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04H\n\x04\x03" +
    "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04Q\n\x04\x03" +
    "\x05\x03\x05\x05\x05U\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
    "\x05\x03\x05\x05\x05^\n\x05\x03\x05\x03\x05\x03\x05\x05\x05c\n\x05\x03" +
    "\x06\x03\x06\x03\x06\x07\x06h\n\x06\f\x06\x0E\x06k\v\x06\x03\x06\x03\x06" +
    "\x05\x06o\n\x06\x05\x06q\n\x06\x03\x07\x03\x07\x03\x07\x07\x07v\n\x07" +
    "\f\x07\x0E\x07y\v\x07\x03\x07\x05\x07|\n\x07\x03\b\x03\b\x05\b\x80\n\b" +
    "\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
    "\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\x93\n\v\x03\v\x03\v\x03\v\x03\v" +
    "\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
    "\v\x03\v\x03\v\x03\v\x07\v\xA8\n\v\f\v\x0E\v\xAB\v\v\x03\f\x03\f\x03\f" +
    "\x03\f\x03\f\x03\f\x05\f\xB3\n\f\x03\r\x03\r\x03\r\x03\r\x07\r\xB9\n\r" +
    "\f\r\x0E\r\xBC\v\r\x03\r\x03\r\x05\r\xC0\n\r\x03\r\x03\r\x03\r\x03\r\x03" +
    "\r\x05\r\xC7\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xCD\n\x0E\f\x0E" +
    "\x0E\x0E\xD0\v\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03" +
    "\x10\x03\x10\x03\x10\x05\x10\xDB\n\x10\x05\x10\xDD\n\x10\x03\x10\x05\x10" +
    "\xE0\n\x10\x03\x10\x05\x10\xE3\n\x10\x03\x10\x05\x10\xE6\n\x10\x03\x10" +
    "\x03\x10\x03\x11\x03\x11\x06\x11\xEC\n\x11\r\x11\x0E\x11\xED\x03\x11\x03" +
    "\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03" +
    "\x13\x03\x13\x03\x13\x06\x13\xFD\n\x13\r\x13\x0E\x13\xFE\x03\x13\x03\x13" +
    "\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x02\x02\x03\x14\x16\x02" +
    "\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
    "\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02\x02" +
    "\x07\x03\x02\x05\x07\x03\x02\x03\x04\x03\x02\t\x0E\x04\x02\x04\x04\x0F" +
    "\x0F\x03\x03\x18\x18\u0120\x020\x03\x02\x02\x02\x047\x03\x02\x02\x02\x06" +
    "P\x03\x02\x02\x02\bb\x03\x02\x02\x02\np\x03\x02\x02\x02\f{\x03\x02\x02" +
    "\x02\x0E}\x03\x02\x02\x02\x10\x81\x03\x02\x02\x02\x12\x83\x03\x02\x02" +
    "\x02\x14\x92\x03\x02\x02\x02\x16\xB2\x03\x02\x02\x02\x18\xC6\x03\x02\x02" +
    "\x02\x1A\xC8\x03\x02\x02\x02\x1C\xD4\x03\x02\x02\x02\x1E\xD6\x03\x02\x02" +
    "\x02 \xE9\x03\x02\x02\x02\"\xF3\x03\x02\x02\x02$\xF8\x03\x02\x02\x02&" +
    "\u0103\x03\x02\x02\x02(\u0105\x03\x02\x02\x02*,\x05\x04\x03\x02+-\x05" +
    "&\x14\x02,+\x03\x02\x02\x02,-\x03\x02\x02\x02-/\x03\x02\x02\x02.*\x03" +
    "\x02\x02\x02/2\x03\x02\x02\x020.\x03\x02\x02\x0201\x03\x02\x02\x0213\x03" +
    "\x02\x02\x0220\x03\x02\x02\x0234\x05(\x15\x024\x03\x03\x02\x02\x0258\x05" +
    "\x06\x04\x0268\x05\x14\v\x0275\x03\x02\x02\x0276\x03\x02\x02\x028\x05" +
    "\x03\x02\x02\x029;\x07!\x02\x02:9\x03\x02\x02\x02:;\x03\x02\x02\x02;=" +
    "\x03\x02\x02\x02<>\x07\"\x02\x02=<\x03\x02\x02\x02=>\x03\x02\x02\x02>" +
    "?\x03\x02\x02\x02?@\x05\x10\t\x02@A\x07\x10\x02\x02AB\x05\n\x06\x02BC" +
    "\x07\x11\x02\x02CD\x07\t\x02\x02DE\x05\x14\v\x02EQ\x03\x02\x02\x02FH\x07" +
    "!\x02\x02GF\x03\x02\x02\x02GH\x03\x02\x02\x02HI\x03\x02\x02\x02IJ\x05" +
    "\x10\t\x02JK\x07\t\x02\x02KL\x05\x14\v\x02LQ\x03\x02\x02\x02MN\x07!\x02" +
    "\x02NO\x07\"\x02\x02OQ\x05\x10\t\x02P:\x03\x02\x02\x02PG\x03\x02\x02\x02" +
    "PM\x03\x02\x02\x02Q\x07\x03\x02\x02\x02RT\x07\x10\x02\x02SU\x07\"\x02" +
    "\x02TS\x03\x02\x02\x02TU\x03\x02\x02\x02UV\x03\x02\x02\x02VW\x05\n\x06" +
    "\x02WX\x07\x11\x02\x02XY\x07\x1B\x02\x02YZ\x05\x14\v\x02Zc\x03\x02\x02" +
    "\x02[]\x05\x12\n\x02\\^\x07\x1A\x02\x02]\\\x03\x02\x02\x02]^\x03\x02\x02" +
    "\x02^_\x03\x02\x02\x02_`\x07\x1B\x02\x02`a\x05\x14\v\x02ac\x03\x02\x02" +
    "\x02bR\x03\x02\x02\x02b[\x03\x02\x02\x02c\t\x03\x02\x02\x02de\x05\x12" +
    "\n\x02ef\x07\x16\x02\x02fh\x03\x02\x02\x02gd\x03\x02\x02\x02hk\x03\x02" +
    "\x02\x02ig\x03\x02\x02\x02ij\x03\x02\x02\x02jl\x03\x02\x02\x02ki\x03\x02" +
    "\x02\x02ln\x05\x12\n\x02mo\x07\x1A\x02\x02nm\x03\x02\x02\x02no\x03\x02" +
    "\x02\x02oq\x03\x02\x02\x02pi\x03\x02\x02\x02pq\x03\x02\x02\x02q\v\x03" +
    "\x02\x02\x02rs\x05\x0E\b\x02st\x07\x16\x02\x02tv\x03\x02\x02\x02ur\x03" +
    "\x02\x02\x02vy\x03\x02\x02\x02wu\x03\x02\x02\x02wx\x03\x02\x02\x02xz\x03" +
    "\x02\x02\x02yw\x03\x02\x02\x02z|\x05\x0E\b\x02{w\x03\x02\x02\x02{|\x03" +
    "\x02\x02\x02|\r\x03\x02\x02\x02}\x7F\x05\x14\v\x02~\x80\x07\x1A\x02\x02" +
    "\x7F~\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x0F\x03\x02\x02\x02" +
    "\x81\x82\x07%\x02\x02\x82\x11\x03\x02\x02\x02\x83\x84\x07%\x02\x02\x84" +
    "\x13\x03\x02\x02\x02\x85\x86\b\v\x01\x02\x86\x87\x07\x10\x02\x02\x87\x88" +
    "\x05\x14\v\x02\x88\x89\x07\x11\x02\x02\x89\x93\x03\x02\x02\x02\x8A\x93" +
    "\x05$\x13\x02\x8B\x8C\x05\x1C\x0F\x02\x8C\x8D\x05\x14\v\f\x8D\x93\x03" +
    "\x02\x02\x02\x8E\x93\x05\b\x05\x02\x8F\x93\x05 \x11\x02\x90\x93\x05\x16" +
    "\f\x02\x91\x93\x05\x10\t\x02\x92\x85\x03\x02\x02\x02\x92\x8A\x03\x02\x02" +
    "\x02\x92\x8B\x03\x02\x02\x02\x92\x8E\x03\x02\x02\x02\x92\x8F\x03\x02\x02" +
    "\x02\x92\x90\x03\x02\x02\x02\x92\x91\x03\x02\x02\x02\x93\xA9\x03\x02\x02" +
    "\x02\x94\x95\f\n\x02\x02\x95\x96\x07\b\x02\x02\x96\xA8\x05\x14\v\n\x97" +
    "\x98\f\t\x02\x02\x98\x99\t\x02\x02\x02\x99\xA8\x05\x14\v\n\x9A\x9B\f\b" +
    "\x02\x02\x9B\x9C\t\x03\x02\x02\x9C\xA8\x05\x14\v\t\x9D\x9E\f\x07\x02\x02" +
    "\x9E\x9F\t\x04\x02\x02\x9F\xA8\x05\x14\v\b\xA0\xA1\f\r\x02\x02\xA1\xA2" +
    "\x07\x10\x02\x02\xA2\xA3\x05\f\x07\x02\xA3\xA4\x07\x11\x02\x02\xA4\xA8" +
    "\x03\x02\x02\x02\xA5\xA6\f\v\x02\x02\xA6\xA8\x05\x1E\x10\x02\xA7\x94\x03" +
    "\x02\x02\x02\xA7\x97\x03\x02\x02\x02\xA7\x9A\x03\x02\x02\x02\xA7\x9D\x03" +
    "\x02\x02\x02\xA7\xA0\x03\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA8\xAB\x03" +
    "\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\x15\x03" +
    "\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAC\xB3\x07\x1C\x02\x02\xAD\xB3\x07" +
    "\x1D\x02\x02\xAE\xB3\x07\x1E\x02\x02\xAF\xB3\x07\x1F\x02\x02\xB0\xB3\x05" +
    "\x18\r\x02\xB1\xB3\x05\x1A\x0E\x02\xB2\xAC\x03\x02\x02\x02\xB2\xAD\x03" +
    "\x02\x02\x02\xB2\xAE\x03\x02\x02\x02\xB2\xAF\x03\x02\x02\x02\xB2\xB0\x03" +
    "\x02\x02\x02\xB2\xB1\x03\x02\x02\x02\xB3\x17\x03\x02\x02\x02\xB4\xBA\x07" +
    "\x10\x02\x02\xB5\xB6\x05\x14\v\x02\xB6\xB7\x07\x16\x02\x02\xB7\xB9\x03" +
    "\x02\x02\x02\xB8\xB5\x03\x02\x02\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03" +
    "\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBD\x03\x02\x02\x02\xBC\xBA\x03" +
    "\x02\x02\x02\xBD\xBF\x05\x14\v\x02\xBE\xC0\x07\x16\x02\x02\xBF\xBE\x03" +
    "\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC2\x07" +
    "\x11\x02\x02\xC2\xC7\x03\x02\x02\x02\xC3\xC4\x07\x10\x02\x02\xC4\xC5\x07" +
    "\x16\x02\x02\xC5\xC7\x07\x11\x02\x02\xC6\xB4\x03\x02\x02\x02\xC6\xC3\x03" +
    "\x02\x02\x02\xC7\x19\x03\x02\x02\x02\xC8\xCE\x07\f\x02\x02\xC9\xCA\x05" +
    "\x14\v\x02\xCA\xCB\x07\x16\x02\x02\xCB\xCD\x03\x02\x02\x02\xCC\xC9\x03" +
    "\x02\x02\x02\xCD\xD0\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03" +
    "\x02\x02\x02\xCF\xD1\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD1\xD2\x05" +
    "\x14\v\x02\xD2\xD3\x07\v\x02\x02\xD3\x1B\x03\x02\x02\x02\xD4\xD5\t\x05" +
    "\x02\x02\xD5\x1D\x03\x02\x02\x02\xD6\xE5\x07\x14\x02\x02\xD7\xDC\x05\x14" +
    "\v\x02\xD8\xDA\x07\x1A\x02\x02\xD9\xDB\x05\x14\v\x02\xDA\xD9\x03\x02\x02" +
    "\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDD\x03\x02\x02\x02\xDC\xD8\x03\x02\x02" +
    "\x02\xDC\xDD\x03\x02\x02\x02\xDD\xE6\x03\x02\x02\x02\xDE\xE0\x05\x14\v" +
    "\x02\xDF\xDE\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE1\x03\x02\x02" +
    "\x02\xE1\xE3\x07\x1A\x02\x02\xE2\xDF\x03\x02\x02\x02\xE2\xE3\x03\x02\x02" +
    "\x02\xE3\xE4\x03\x02\x02\x02\xE4\xE6\x05\x14\v\x02\xE5\xD7\x03\x02\x02" +
    "\x02\xE5\xE2\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8\x07\x15\x02" +
    "\x02\xE8\x1F\x03\x02\x02\x02\xE9\xEB\x07\x12\x02\x02\xEA\xEC\x05\"\x12" +
    "\x02\xEB\xEA\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEB\x03\x02\x02" +
    "\x02\xED\xEE\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF0\x05\x14\v" +
    "\x02\xF0\xF1\x07$\x02\x02\xF1\xF2\x07\x18\x02\x02\xF2!\x03\x02\x02\x02" +
    "\xF3\xF4\x05\x14\v\x02\xF4\xF5\x07#\x02\x02\xF5\xF6\x05\x14\v\x02\xF6" +
    "\xF7\x07\x18\x02\x02\xF7#\x03\x02\x02\x02\xF8\xFC\x07\x10\x02\x02\xF9" +
    "\xFA\x05\x14\v\x02\xFA\xFB\x07\x19\x02\x02\xFB\xFD\x03\x02\x02\x02\xFC" +
    "\xF9\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFE" +
    "\xFF\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101\x05\x14\v\x02" +
    "\u0101\u0102\x07\x11\x02\x02\u0102%\x03\x02\x02\x02\u0103\u0104\t\x06" +
    "\x02\x02\u0104\'\x03\x02\x02\x02\u0105\u0106\x07\x02\x02\x03\u0106)\x03" +
    "\x02\x02\x02!,07:=GPT]binpw{\x7F\x92\xA7\xA9\xB2\xBA\xBF\xC6\xCE\xDA\xDC" +
    "\xDF\xE2\xE5\xED\xFE";
__decorate([
    Decorators_2.Override,
    Decorators_1.NotNull
], FAILangParser.prototype, "vocabulary", null);
__decorate([
    Decorators_2.Override
], FAILangParser.prototype, "grammarFileName", null);
__decorate([
    Decorators_2.Override
], FAILangParser.prototype, "ruleNames", null);
__decorate([
    Decorators_2.Override
], FAILangParser.prototype, "serializedATN", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], FAILangParser.prototype, "calls", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], FAILangParser.prototype, "call", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], FAILangParser.prototype, "def", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], FAILangParser.prototype, "lambda", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], FAILangParser.prototype, "fparams", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], FAILangParser.prototype, "callparams", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], FAILangParser.prototype, "arg", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], FAILangParser.prototype, "name", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], FAILangParser.prototype, "param", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], FAILangParser.prototype, "expression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], FAILangParser.prototype, "type", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], FAILangParser.prototype, "tuple", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], FAILangParser.prototype, "vector", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], FAILangParser.prototype, "prefix", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], FAILangParser.prototype, "indexer", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], FAILangParser.prototype, "piecewise", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], FAILangParser.prototype, "condition", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], FAILangParser.prototype, "union", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], FAILangParser.prototype, "end", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], FAILangParser.prototype, "compileUnit", null);
exports.FAILangParser = FAILangParser;
class CallsContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    compileUnit() {
        return this.getRuleContext(0, CompileUnitContext);
    }
    call(i) {
        if (i === undefined) {
            return this.getRuleContexts(CallContext);
        }
        else {
            return this.getRuleContext(i, CallContext);
        }
    }
    end(i) {
        if (i === undefined) {
            return this.getRuleContexts(EndContext);
        }
        else {
            return this.getRuleContext(i, EndContext);
        }
    }
    get ruleIndex() { return FAILangParser.RULE_calls; }
    enterRule(listener) {
        if (listener.enterCalls)
            listener.enterCalls(this);
    }
    exitRule(listener) {
        if (listener.exitCalls)
            listener.exitCalls(this);
    }
    accept(visitor) {
        if (visitor.visitCalls)
            return visitor.visitCalls(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], CallsContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], CallsContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], CallsContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], CallsContext.prototype, "accept", null);
exports.CallsContext = CallsContext;
class CallContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    def() {
        return this.tryGetRuleContext(0, DefContext);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    get ruleIndex() { return FAILangParser.RULE_call; }
    enterRule(listener) {
        if (listener.enterCall)
            listener.enterCall(this);
    }
    exitRule(listener) {
        if (listener.exitCall)
            listener.exitCall(this);
    }
    accept(visitor) {
        if (visitor.visitCall)
            return visitor.visitCall(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], CallContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], CallContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], CallContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], CallContext.prototype, "accept", null);
exports.CallContext = CallContext;
class DefContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    name() {
        return this.getRuleContext(0, NameContext);
    }
    L_PAREN() { return this.tryGetToken(FAILangParser.L_PAREN, 0); }
    fparams() {
        return this.tryGetRuleContext(0, FparamsContext);
    }
    R_PAREN() { return this.tryGetToken(FAILangParser.R_PAREN, 0); }
    EQ() { return this.tryGetToken(FAILangParser.EQ, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    UPDATE() { return this.tryGetToken(FAILangParser.UPDATE, 0); }
    MEMO() { return this.tryGetToken(FAILangParser.MEMO, 0); }
    get ruleIndex() { return FAILangParser.RULE_def; }
    enterRule(listener) {
        if (listener.enterDef)
            listener.enterDef(this);
    }
    exitRule(listener) {
        if (listener.exitDef)
            listener.exitDef(this);
    }
    accept(visitor) {
        if (visitor.visitDef)
            return visitor.visitDef(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], DefContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], DefContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], DefContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], DefContext.prototype, "accept", null);
exports.DefContext = DefContext;
class LambdaContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    L_PAREN() { return this.tryGetToken(FAILangParser.L_PAREN, 0); }
    fparams() {
        return this.tryGetRuleContext(0, FparamsContext);
    }
    R_PAREN() { return this.tryGetToken(FAILangParser.R_PAREN, 0); }
    ARROW() { return this.getToken(FAILangParser.ARROW, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    MEMO() { return this.tryGetToken(FAILangParser.MEMO, 0); }
    param() {
        return this.tryGetRuleContext(0, ParamContext);
    }
    ELIPSIS() { return this.tryGetToken(FAILangParser.ELIPSIS, 0); }
    get ruleIndex() { return FAILangParser.RULE_lambda; }
    enterRule(listener) {
        if (listener.enterLambda)
            listener.enterLambda(this);
    }
    exitRule(listener) {
        if (listener.exitLambda)
            listener.exitLambda(this);
    }
    accept(visitor) {
        if (visitor.visitLambda)
            return visitor.visitLambda(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], LambdaContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], LambdaContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], LambdaContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], LambdaContext.prototype, "accept", null);
exports.LambdaContext = LambdaContext;
class FparamsContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    param(i) {
        if (i === undefined) {
            return this.getRuleContexts(ParamContext);
        }
        else {
            return this.getRuleContext(i, ParamContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FAILangParser.COMMA);
        }
        else {
            return this.getToken(FAILangParser.COMMA, i);
        }
    }
    ELIPSIS() { return this.tryGetToken(FAILangParser.ELIPSIS, 0); }
    get ruleIndex() { return FAILangParser.RULE_fparams; }
    enterRule(listener) {
        if (listener.enterFparams)
            listener.enterFparams(this);
    }
    exitRule(listener) {
        if (listener.exitFparams)
            listener.exitFparams(this);
    }
    accept(visitor) {
        if (visitor.visitFparams)
            return visitor.visitFparams(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], FparamsContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], FparamsContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], FparamsContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], FparamsContext.prototype, "accept", null);
exports.FparamsContext = FparamsContext;
class CallparamsContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    arg(i) {
        if (i === undefined) {
            return this.getRuleContexts(ArgContext);
        }
        else {
            return this.getRuleContext(i, ArgContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FAILangParser.COMMA);
        }
        else {
            return this.getToken(FAILangParser.COMMA, i);
        }
    }
    get ruleIndex() { return FAILangParser.RULE_callparams; }
    enterRule(listener) {
        if (listener.enterCallparams)
            listener.enterCallparams(this);
    }
    exitRule(listener) {
        if (listener.exitCallparams)
            listener.exitCallparams(this);
    }
    accept(visitor) {
        if (visitor.visitCallparams)
            return visitor.visitCallparams(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], CallparamsContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], CallparamsContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], CallparamsContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], CallparamsContext.prototype, "accept", null);
exports.CallparamsContext = CallparamsContext;
class ArgContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    ELIPSIS() { return this.tryGetToken(FAILangParser.ELIPSIS, 0); }
    get ruleIndex() { return FAILangParser.RULE_arg; }
    enterRule(listener) {
        if (listener.enterArg)
            listener.enterArg(this);
    }
    exitRule(listener) {
        if (listener.exitArg)
            listener.exitArg(this);
    }
    accept(visitor) {
        if (visitor.visitArg)
            return visitor.visitArg(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ArgContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ArgContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ArgContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ArgContext.prototype, "accept", null);
exports.ArgContext = ArgContext;
class NameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NAME() { return this.getToken(FAILangParser.NAME, 0); }
    get ruleIndex() { return FAILangParser.RULE_name; }
    enterRule(listener) {
        if (listener.enterName)
            listener.enterName(this);
    }
    exitRule(listener) {
        if (listener.exitName)
            listener.exitName(this);
    }
    accept(visitor) {
        if (visitor.visitName)
            return visitor.visitName(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], NameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], NameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], NameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], NameContext.prototype, "accept", null);
exports.NameContext = NameContext;
class ParamContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NAME() { return this.getToken(FAILangParser.NAME, 0); }
    get ruleIndex() { return FAILangParser.RULE_param; }
    enterRule(listener) {
        if (listener.enterParam)
            listener.enterParam(this);
    }
    exitRule(listener) {
        if (listener.exitParam)
            listener.exitParam(this);
    }
    accept(visitor) {
        if (visitor.visitParam)
            return visitor.visitParam(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ParamContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ParamContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ParamContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ParamContext.prototype, "accept", null);
exports.ParamContext = ParamContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    L_PAREN() { return this.tryGetToken(FAILangParser.L_PAREN, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    R_PAREN() { return this.tryGetToken(FAILangParser.R_PAREN, 0); }
    union() {
        return this.tryGetRuleContext(0, UnionContext);
    }
    callparams() {
        return this.tryGetRuleContext(0, CallparamsContext);
    }
    prefix() {
        return this.tryGetRuleContext(0, PrefixContext);
    }
    indexer() {
        return this.tryGetRuleContext(0, IndexerContext);
    }
    EXPONENT() { return this.tryGetToken(FAILangParser.EXPONENT, 0); }
    MULTIPLY() { return this.tryGetToken(FAILangParser.MULTIPLY, 0); }
    DIVIDE() { return this.tryGetToken(FAILangParser.DIVIDE, 0); }
    MODULO() { return this.tryGetToken(FAILangParser.MODULO, 0); }
    PLUS() { return this.tryGetToken(FAILangParser.PLUS, 0); }
    SUBTRACT() { return this.tryGetToken(FAILangParser.SUBTRACT, 0); }
    EQ() { return this.tryGetToken(FAILangParser.EQ, 0); }
    NE() { return this.tryGetToken(FAILangParser.NE, 0); }
    R_ARR() { return this.tryGetToken(FAILangParser.R_ARR, 0); }
    L_ARR() { return this.tryGetToken(FAILangParser.L_ARR, 0); }
    GE() { return this.tryGetToken(FAILangParser.GE, 0); }
    LE() { return this.tryGetToken(FAILangParser.LE, 0); }
    lambda() {
        return this.tryGetRuleContext(0, LambdaContext);
    }
    piecewise() {
        return this.tryGetRuleContext(0, PiecewiseContext);
    }
    type() {
        return this.tryGetRuleContext(0, TypeContext);
    }
    name() {
        return this.tryGetRuleContext(0, NameContext);
    }
    get ruleIndex() { return FAILangParser.RULE_expression; }
    enterRule(listener) {
        if (listener.enterExpression)
            listener.enterExpression(this);
    }
    exitRule(listener) {
        if (listener.exitExpression)
            listener.exitExpression(this);
    }
    accept(visitor) {
        if (visitor.visitExpression)
            return visitor.visitExpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "accept", null);
exports.ExpressionContext = ExpressionContext;
class TypeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NUMBER() { return this.tryGetToken(FAILangParser.NUMBER, 0); }
    STRING() { return this.tryGetToken(FAILangParser.STRING, 0); }
    BOOLEAN() { return this.tryGetToken(FAILangParser.BOOLEAN, 0); }
    VOID() { return this.tryGetToken(FAILangParser.VOID, 0); }
    tuple() {
        return this.tryGetRuleContext(0, TupleContext);
    }
    vector() {
        return this.tryGetRuleContext(0, VectorContext);
    }
    get ruleIndex() { return FAILangParser.RULE_type; }
    enterRule(listener) {
        if (listener.enterType)
            listener.enterType(this);
    }
    exitRule(listener) {
        if (listener.exitType)
            listener.exitType(this);
    }
    accept(visitor) {
        if (visitor.visitType)
            return visitor.visitType(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TypeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TypeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TypeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TypeContext.prototype, "accept", null);
exports.TypeContext = TypeContext;
class TupleContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    L_PAREN() { return this.getToken(FAILangParser.L_PAREN, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    R_PAREN() { return this.getToken(FAILangParser.R_PAREN, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FAILangParser.COMMA);
        }
        else {
            return this.getToken(FAILangParser.COMMA, i);
        }
    }
    get ruleIndex() { return FAILangParser.RULE_tuple; }
    enterRule(listener) {
        if (listener.enterTuple)
            listener.enterTuple(this);
    }
    exitRule(listener) {
        if (listener.exitTuple)
            listener.exitTuple(this);
    }
    accept(visitor) {
        if (visitor.visitTuple)
            return visitor.visitTuple(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TupleContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TupleContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TupleContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TupleContext.prototype, "accept", null);
exports.TupleContext = TupleContext;
class VectorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    L_ARR() { return this.getToken(FAILangParser.L_ARR, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    R_ARR() { return this.getToken(FAILangParser.R_ARR, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(FAILangParser.COMMA);
        }
        else {
            return this.getToken(FAILangParser.COMMA, i);
        }
    }
    get ruleIndex() { return FAILangParser.RULE_vector; }
    enterRule(listener) {
        if (listener.enterVector)
            listener.enterVector(this);
    }
    exitRule(listener) {
        if (listener.exitVector)
            listener.exitVector(this);
    }
    accept(visitor) {
        if (visitor.visitVector)
            return visitor.visitVector(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], VectorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], VectorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], VectorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], VectorContext.prototype, "accept", null);
exports.VectorContext = VectorContext;
class PrefixContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NOT() { return this.tryGetToken(FAILangParser.NOT, 0); }
    SUBTRACT() { return this.tryGetToken(FAILangParser.SUBTRACT, 0); }
    get ruleIndex() { return FAILangParser.RULE_prefix; }
    enterRule(listener) {
        if (listener.enterPrefix)
            listener.enterPrefix(this);
    }
    exitRule(listener) {
        if (listener.exitPrefix)
            listener.exitPrefix(this);
    }
    accept(visitor) {
        if (visitor.visitPrefix)
            return visitor.visitPrefix(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PrefixContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PrefixContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PrefixContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PrefixContext.prototype, "accept", null);
exports.PrefixContext = PrefixContext;
class IndexerContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    L_BRAC() { return this.getToken(FAILangParser.L_BRAC, 0); }
    R_BRAC() { return this.getToken(FAILangParser.R_BRAC, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    ELIPSIS() { return this.tryGetToken(FAILangParser.ELIPSIS, 0); }
    get ruleIndex() { return FAILangParser.RULE_indexer; }
    enterRule(listener) {
        if (listener.enterIndexer)
            listener.enterIndexer(this);
    }
    exitRule(listener) {
        if (listener.exitIndexer)
            listener.exitIndexer(this);
    }
    accept(visitor) {
        if (visitor.visitIndexer)
            return visitor.visitIndexer(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], IndexerContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], IndexerContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], IndexerContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], IndexerContext.prototype, "accept", null);
exports.IndexerContext = IndexerContext;
class PiecewiseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    L_CURL() { return this.getToken(FAILangParser.L_CURL, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    OTHERWISE() { return this.getToken(FAILangParser.OTHERWISE, 0); }
    SEMI_COLON() { return this.getToken(FAILangParser.SEMI_COLON, 0); }
    condition(i) {
        if (i === undefined) {
            return this.getRuleContexts(ConditionContext);
        }
        else {
            return this.getRuleContext(i, ConditionContext);
        }
    }
    get ruleIndex() { return FAILangParser.RULE_piecewise; }
    enterRule(listener) {
        if (listener.enterPiecewise)
            listener.enterPiecewise(this);
    }
    exitRule(listener) {
        if (listener.exitPiecewise)
            listener.exitPiecewise(this);
    }
    accept(visitor) {
        if (visitor.visitPiecewise)
            return visitor.visitPiecewise(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PiecewiseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PiecewiseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PiecewiseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PiecewiseContext.prototype, "accept", null);
exports.PiecewiseContext = PiecewiseContext;
class ConditionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IF() { return this.getToken(FAILangParser.IF, 0); }
    SEMI_COLON() { return this.getToken(FAILangParser.SEMI_COLON, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    get ruleIndex() { return FAILangParser.RULE_condition; }
    enterRule(listener) {
        if (listener.enterCondition)
            listener.enterCondition(this);
    }
    exitRule(listener) {
        if (listener.exitCondition)
            listener.exitCondition(this);
    }
    accept(visitor) {
        if (visitor.visitCondition)
            return visitor.visitCondition(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ConditionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ConditionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ConditionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ConditionContext.prototype, "accept", null);
exports.ConditionContext = ConditionContext;
class UnionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    L_PAREN() { return this.getToken(FAILangParser.L_PAREN, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    R_PAREN() { return this.getToken(FAILangParser.R_PAREN, 0); }
    VERT_LINE(i) {
        if (i === undefined) {
            return this.getTokens(FAILangParser.VERT_LINE);
        }
        else {
            return this.getToken(FAILangParser.VERT_LINE, i);
        }
    }
    get ruleIndex() { return FAILangParser.RULE_union; }
    enterRule(listener) {
        if (listener.enterUnion)
            listener.enterUnion(this);
    }
    exitRule(listener) {
        if (listener.exitUnion)
            listener.exitUnion(this);
    }
    accept(visitor) {
        if (visitor.visitUnion)
            return visitor.visitUnion(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], UnionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], UnionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], UnionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], UnionContext.prototype, "accept", null);
exports.UnionContext = UnionContext;
class EndContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    SEMI_COLON() { return this.tryGetToken(FAILangParser.SEMI_COLON, 0); }
    EOF() { return this.tryGetToken(FAILangParser.EOF, 0); }
    get ruleIndex() { return FAILangParser.RULE_end; }
    enterRule(listener) {
        if (listener.enterEnd)
            listener.enterEnd(this);
    }
    exitRule(listener) {
        if (listener.exitEnd)
            listener.exitEnd(this);
    }
    accept(visitor) {
        if (visitor.visitEnd)
            return visitor.visitEnd(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], EndContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], EndContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], EndContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], EndContext.prototype, "accept", null);
exports.EndContext = EndContext;
class CompileUnitContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EOF() { return this.getToken(FAILangParser.EOF, 0); }
    get ruleIndex() { return FAILangParser.RULE_compileUnit; }
    enterRule(listener) {
        if (listener.enterCompileUnit)
            listener.enterCompileUnit(this);
    }
    exitRule(listener) {
        if (listener.exitCompileUnit)
            listener.exitCompileUnit(this);
    }
    accept(visitor) {
        if (visitor.visitCompileUnit)
            return visitor.visitCompileUnit(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], CompileUnitContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], CompileUnitContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], CompileUnitContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], CompileUnitContext.prototype, "accept", null);
exports.CompileUnitContext = CompileUnitContext;
//# sourceMappingURL=FAILangParser.js.map