// Generated from grammar/FAILang.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { NotNull } from 'antlr4ts/Decorators';
import { Override } from 'antlr4ts/Decorators';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';


export class FAILangLexer extends Lexer {
	public static readonly PLUS=1;
	public static readonly SUBTRACT=2;
	public static readonly MULTIPLY=3;
	public static readonly DIVIDE=4;
	public static readonly MODULO=5;
	public static readonly EXPONENT=6;
	public static readonly EQ=7;
	public static readonly NE=8;
	public static readonly R_ARR=9;
	public static readonly L_ARR=10;
	public static readonly GE=11;
	public static readonly LE=12;
	public static readonly NOT=13;
	public static readonly L_PAREN=14;
	public static readonly R_PAREN=15;
	public static readonly L_CURL=16;
	public static readonly R_CURL=17;
	public static readonly L_BRAC=18;
	public static readonly R_BRAC=19;
	public static readonly COMMA=20;
	public static readonly COLON=21;
	public static readonly SEMI_COLON=22;
	public static readonly VERT_LINE=23;
	public static readonly ELIPSIS=24;
	public static readonly ARROW=25;
	public static readonly NUMBER=26;
	public static readonly STRING=27;
	public static readonly BOOLEAN=28;
	public static readonly VOID=29;
	public static readonly LAMBDA=30;
	public static readonly UPDATE=31;
	public static readonly MEMO=32;
	public static readonly IF=33;
	public static readonly OTHERWISE=34;
	public static readonly NAME=35;
	public static readonly COMMENT=36;
	public static readonly MULTILINE_COMMENT=37;
	public static readonly WS=38;
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE"
	];

	public static readonly ruleNames: string[] = [
		"UPPERCASE", "LOWERCASE", "DIGIT", "STRING_CHAR", "ESC", "E", "PLUS", 
		"SUBTRACT", "MULTIPLY", "DIVIDE", "MODULO", "EXPONENT", "EQ", "NE", "R_ARR", 
		"L_ARR", "GE", "LE", "NOT", "L_PAREN", "R_PAREN", "L_CURL", "R_CURL", 
		"L_BRAC", "R_BRAC", "COMMA", "COLON", "SEMI_COLON", "VERT_LINE", "ELIPSIS", 
		"ARROW", "NUMBER", "STRING", "BOOLEAN", "VOID", "LAMBDA", "UPDATE", "MEMO", 
		"IF", "OTHERWISE", "NAME", "COMMENT", "MULTILINE_COMMENT", "WS"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", "'='", "'~='", "'>'", 
		"'<'", "'>='", "'<='", "'~'", "'('", "')'", "'{'", "'}'", "'['", "']'", 
		"','", "':'", "';'", "'|'", undefined, "'->'", undefined, undefined, undefined, 
		"'void'", "'lambda'", "'update'", "'memo'", "'if'", "'otherwise'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "PLUS", "SUBTRACT", "MULTIPLY", "DIVIDE", "MODULO", "EXPONENT", 
		"EQ", "NE", "R_ARR", "L_ARR", "GE", "LE", "NOT", "L_PAREN", "R_PAREN", 
		"L_CURL", "R_CURL", "L_BRAC", "R_BRAC", "COMMA", "COLON", "SEMI_COLON", 
		"VERT_LINE", "ELIPSIS", "ARROW", "NUMBER", "STRING", "BOOLEAN", "VOID", 
		"LAMBDA", "UPDATE", "MEMO", "IF", "OTHERWISE", "NAME", "COMMENT", "MULTILINE_COMMENT", 
		"WS"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FAILangLexer._LITERAL_NAMES, FAILangLexer._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return FAILangLexer.VOCABULARY;
	}


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(FAILangLexer._ATN, this);
	}

	@Override
	public get grammarFileName(): string { return "FAILang.g4"; }

	@Override
	public get ruleNames(): string[] { return FAILangLexer.ruleNames; }

	@Override
	public get serializedATN(): string { return FAILangLexer._serializedATN; }

	@Override
	public get modeNames(): string[] { return FAILangLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02(\u0140\b\x01"+
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06"+
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r"+
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t"+
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t"+
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t"+
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t"+
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04"+
		"+\t+\x04,\t,\x04-\t-\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03"+
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t"+
		"\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E"+
		"\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12"+
		"\x03\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16"+
		"\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A"+
		"\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F"+
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\x9F\n\x1F\x03 \x03 \x03 \x03"+
		"!\x07!\xA5\n!\f!\x0E!\xA8\v!\x03!\x03!\x06!\xAC\n!\r!\x0E!\xAD\x03!\x03"+
		"!\x05!\xB2\n!\x03!\x06!\xB5\n!\r!\x0E!\xB6\x05!\xB9\n!\x03!\x05!\xBC\n"+
		"!\x03!\x06!\xBF\n!\r!\x0E!\xC0\x03!\x03!\x06!\xC5\n!\r!\x0E!\xC6\x05!"+
		"\xC9\n!\x03!\x03!\x05!\xCD\n!\x03!\x06!\xD0\n!\r!\x0E!\xD1\x05!\xD4\n"+
		"!\x03!\x05!\xD7\n!\x03!\x05!\xDA\n!\x03\"\x03\"\x03\"\x07\"\xDF\n\"\f"+
		"\"\x0E\"\xE2\v\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03#\x03"+
		"#\x05#\xEF\n#\x03$\x03$\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03%\x03%\x03"+
		"%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03"+
		"(\x03(\x03(\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03)\x03*\x03"+
		"*\x03*\x05*\u0119\n*\x03*\x03*\x03*\x03*\x07*\u011F\n*\f*\x0E*\u0122\v"+
		"*\x03+\x03+\x03+\x03+\x07+\u0128\n+\f+\x0E+\u012B\v+\x03+\x03+\x03,\x03"+
		",\x03,\x03,\x07,\u0133\n,\f,\x0E,\u0136\v,\x03,\x03,\x03,\x03,\x03,\x03"+
		"-\x03-\x03-\x03-\x05\xE0\u0129\u0134\x02\x02.\x03\x02\x02\x05\x02\x02"+
		"\x07\x02\x02\t\x02\x02\v\x02\x02\r\x02\x02\x0F\x02\x03\x11\x02\x04\x13"+
		"\x02\x05\x15\x02\x06\x17\x02\x07\x19\x02\b\x1B\x02\t\x1D\x02\n\x1F\x02"+
		"\v!\x02\f#\x02\r%\x02\x0E\'\x02\x0F)\x02\x10+\x02\x11-\x02\x12/\x02\x13"+
		"1\x02\x143\x02\x155\x02\x167\x02\x179\x02\x18;\x02\x19=\x02\x1A?\x02\x1B"+
		"A\x02\x1CC\x02\x1DE\x02\x1EG\x02\x1FI\x02 K\x02!M\x02\"O\x02#Q\x02$S\x02"+
		"%U\x02&W\x02\'Y\x02(\x03\x02\t\x03\x02C\\\x03\x02c|\x03\x022;\x03\x02"+
		"^^\n\x02$$^^ddhhppttvvxx\x04\x02GGgg\x05\x02\v\f\x0F\x0F\"\"\u0154\x02"+
		"\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02"+
		"\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02"+
		"\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02"+
		"!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03"+
		"\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02"+
		"\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x02"+
		"5\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02"+
		"\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02"+
		"\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03"+
		"\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02"+
		"\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02"+
		"W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x03[\x03\x02\x02\x02\x05]\x03\x02"+
		"\x02\x02\x07_\x03\x02\x02\x02\ta\x03\x02\x02\x02\vc\x03\x02\x02\x02\r"+
		"f\x03\x02\x02\x02\x0Fh\x03\x02\x02\x02\x11j\x03\x02\x02\x02\x13l\x03\x02"+
		"\x02\x02\x15n\x03\x02\x02\x02\x17p\x03\x02\x02\x02\x19r\x03\x02\x02\x02"+
		"\x1Bt\x03\x02\x02\x02\x1Dv\x03\x02\x02\x02\x1Fy\x03\x02\x02\x02!{\x03"+
		"\x02\x02\x02#}\x03\x02\x02\x02%\x80\x03\x02\x02\x02\'\x83\x03\x02\x02"+
		"\x02)\x85\x03\x02\x02\x02+\x87\x03\x02\x02\x02-\x89\x03\x02\x02\x02/\x8B"+
		"\x03\x02\x02\x021\x8D\x03\x02\x02\x023\x8F\x03\x02\x02\x025\x91\x03\x02"+
		"\x02\x027\x93\x03\x02\x02\x029\x95\x03\x02\x02\x02;\x97\x03\x02\x02\x02"+
		"=\x9E\x03\x02\x02\x02?\xA0\x03\x02\x02\x02A\xD9\x03\x02\x02\x02C\xDB\x03"+
		"\x02\x02\x02E\xEE\x03\x02\x02\x02G\xF0\x03\x02\x02\x02I\xF5\x03\x02\x02"+
		"\x02K\xFC\x03\x02\x02\x02M\u0103\x03\x02\x02\x02O\u0108\x03\x02\x02\x02"+
		"Q\u010B\x03\x02\x02\x02S\u0118\x03\x02\x02\x02U\u0123\x03\x02\x02\x02"+
		"W\u012E\x03\x02\x02\x02Y\u013C\x03\x02\x02\x02[\\\t\x02\x02\x02\\\x04"+
		"\x03\x02\x02\x02]^\t\x03\x02\x02^\x06\x03\x02\x02\x02_`\t\x04\x02\x02"+
		"`\b\x03\x02\x02\x02ab\n\x05\x02\x02b\n\x03\x02\x02\x02cd\x07^\x02\x02"+
		"de\t\x06\x02\x02e\f\x03\x02\x02\x02fg\t\x07\x02\x02g\x0E\x03\x02\x02\x02"+
		"hi\x07-\x02\x02i\x10\x03\x02\x02\x02jk\x07/\x02\x02k\x12\x03\x02\x02\x02"+
		"lm\x07,\x02\x02m\x14\x03\x02\x02\x02no\x071\x02\x02o\x16\x03\x02\x02\x02"+
		"pq\x07\'\x02\x02q\x18\x03\x02\x02\x02rs\x07`\x02\x02s\x1A\x03\x02\x02"+
		"\x02tu\x07?\x02\x02u\x1C\x03\x02\x02\x02vw\x07\x80\x02\x02wx\x07?\x02"+
		"\x02x\x1E\x03\x02\x02\x02yz\x07@\x02\x02z \x03\x02\x02\x02{|\x07>\x02"+
		"\x02|\"\x03\x02\x02\x02}~\x07@\x02\x02~\x7F\x07?\x02\x02\x7F$\x03\x02"+
		"\x02\x02\x80\x81\x07>\x02\x02\x81\x82\x07?\x02\x02\x82&\x03\x02\x02\x02"+
		"\x83\x84\x07\x80\x02\x02\x84(\x03\x02\x02\x02\x85\x86\x07*\x02\x02\x86"+
		"*\x03\x02\x02\x02\x87\x88\x07+\x02\x02\x88,\x03\x02\x02\x02\x89\x8A\x07"+
		"}\x02\x02\x8A.\x03\x02\x02\x02\x8B\x8C\x07\x7F\x02\x02\x8C0\x03\x02\x02"+
		"\x02\x8D\x8E\x07]\x02\x02\x8E2\x03\x02\x02\x02\x8F\x90\x07_\x02\x02\x90"+
		"4\x03\x02\x02\x02\x91\x92\x07.\x02\x02\x926\x03\x02\x02\x02\x93\x94\x07"+
		"<\x02\x02\x948\x03\x02\x02\x02\x95\x96\x07=\x02\x02\x96:\x03\x02\x02\x02"+
		"\x97\x98\x07~\x02\x02\x98<\x03\x02\x02\x02\x99\x9A\x070\x02\x02\x9A\x9B"+
		"\x070\x02\x02\x9B\x9F\x070\x02\x02\x9C\x9D\x070\x02\x02\x9D\x9F\x070\x02"+
		"\x02\x9E\x99\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9F>\x03\x02\x02"+
		"\x02\xA0\xA1\x07/\x02\x02\xA1\xA2\x07@\x02\x02\xA2@\x03\x02\x02\x02\xA3"+
		"\xA5\x05\x07\x04\x02\xA4\xA3\x03\x02\x02\x02\xA5\xA8\x03\x02\x02\x02\xA6"+
		"\xA4\x03\x02\x02\x02\xA6\xA7\x03\x02\x02\x02\xA7\xA9\x03\x02\x02\x02\xA8"+
		"\xA6\x03\x02\x02\x02\xA9\xAB\x070\x02\x02\xAA\xAC\x05\x07\x04\x02\xAB"+
		"\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD"+
		"\xAE\x03\x02\x02\x02\xAE\xB8\x03\x02\x02\x02\xAF\xB1\x05\r\x07\x02\xB0"+
		"\xB2\x07/\x02\x02\xB1\xB0\x03\x02\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2"+
		"\xB4\x03\x02\x02\x02\xB3\xB5\x05\x07\x04\x02\xB4\xB3\x03\x02\x02\x02\xB5"+
		"\xB6\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7"+
		"\xB9\x03\x02\x02\x02\xB8\xAF\x03\x02\x02\x02\xB8\xB9\x03\x02\x02\x02\xB9"+
		"\xBB\x03\x02\x02\x02\xBA\xBC\x07k\x02\x02\xBB\xBA\x03\x02\x02\x02\xBB"+
		"\xBC\x03\x02\x02\x02\xBC\xDA\x03\x02\x02\x02\xBD\xBF\x05\x07\x04\x02\xBE"+
		"\xBD\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02\xC0"+
		"\xC1\x03\x02\x02\x02\xC1\xC8\x03\x02\x02\x02\xC2\xC4\x070\x02\x02\xC3"+
		"\xC5\x05\x07\x04\x02\xC4\xC3\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6"+
		"\xC4\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC9\x03\x02\x02\x02\xC8"+
		"\xC2\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xD3\x03\x02\x02\x02\xCA"+
		"\xCC\x05\r\x07\x02\xCB\xCD\x07/\x02\x02\xCC\xCB\x03\x02\x02\x02\xCC\xCD"+
		"\x03\x02\x02\x02\xCD\xCF\x03\x02\x02\x02\xCE\xD0\x05\x07\x04\x02\xCF\xCE"+
		"\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD2"+
		"\x03\x02\x02\x02\xD2\xD4\x03\x02\x02\x02\xD3\xCA\x03\x02\x02\x02\xD3\xD4"+
		"\x03\x02\x02\x02\xD4\xD6\x03\x02\x02\x02\xD5\xD7\x07k\x02\x02\xD6\xD5"+
		"\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xDA\x03\x02\x02\x02\xD8\xDA"+
		"\x07k\x02\x02\xD9\xA6\x03\x02\x02\x02\xD9\xBE\x03\x02\x02\x02\xD9\xD8"+
		"\x03\x02\x02\x02\xDAB\x03\x02\x02\x02\xDB\xE0\x07$\x02\x02\xDC\xDF\x05"+
		"\v\x06\x02\xDD\xDF\x05\t\x05\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDD\x03\x02"+
		"\x02\x02\xDF\xE2\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE0\xDE\x03\x02"+
		"\x02\x02\xE1\xE3\x03\x02\x02\x02\xE2\xE0\x03\x02\x02\x02\xE3\xE4\x07$"+
		"\x02\x02\xE4D\x03\x02\x02\x02\xE5\xE6\x07v\x02\x02\xE6\xE7\x07t\x02\x02"+
		"\xE7\xE8\x07w\x02\x02\xE8\xEF\x07g\x02\x02\xE9\xEA\x07h\x02\x02\xEA\xEB"+
		"\x07c\x02\x02\xEB\xEC\x07n\x02\x02\xEC\xED\x07u\x02\x02\xED\xEF\x07g\x02"+
		"\x02\xEE\xE5\x03\x02\x02\x02\xEE\xE9\x03\x02\x02\x02\xEFF\x03\x02\x02"+
		"\x02\xF0\xF1\x07x\x02\x02\xF1\xF2\x07q\x02\x02\xF2\xF3\x07k\x02\x02\xF3"+
		"\xF4\x07f\x02\x02\xF4H\x03\x02\x02\x02\xF5\xF6\x07n\x02\x02\xF6\xF7\x07"+
		"c\x02\x02\xF7\xF8\x07o\x02\x02\xF8\xF9\x07d\x02\x02\xF9\xFA\x07f\x02\x02"+
		"\xFA\xFB\x07c\x02\x02\xFBJ\x03\x02\x02\x02\xFC\xFD\x07w\x02\x02\xFD\xFE"+
		"\x07r\x02\x02\xFE\xFF\x07f\x02\x02\xFF\u0100\x07c\x02\x02\u0100\u0101"+
		"\x07v\x02\x02\u0101\u0102\x07g\x02\x02\u0102L\x03\x02\x02\x02\u0103\u0104"+
		"\x07o\x02\x02\u0104\u0105\x07g\x02\x02\u0105\u0106\x07o\x02\x02\u0106"+
		"\u0107\x07q\x02\x02\u0107N\x03\x02\x02\x02\u0108\u0109\x07k\x02\x02\u0109"+
		"\u010A\x07h\x02\x02\u010AP\x03\x02\x02\x02\u010B\u010C\x07q\x02\x02\u010C"+
		"\u010D\x07v\x02\x02\u010D\u010E\x07j\x02\x02\u010E\u010F\x07g\x02\x02"+
		"\u010F\u0110\x07t\x02\x02\u0110\u0111\x07y\x02\x02\u0111\u0112\x07k\x02"+
		"\x02\u0112\u0113\x07u\x02\x02\u0113\u0114\x07g\x02\x02\u0114R\x03\x02"+
		"\x02\x02\u0115\u0119\x05\x03\x02\x02\u0116\u0119\x05\x05\x03\x02\u0117"+
		"\u0119\x07a\x02\x02\u0118\u0115\x03\x02\x02\x02\u0118\u0116\x03\x02\x02"+
		"\x02\u0118\u0117\x03\x02\x02\x02\u0119\u0120\x03\x02\x02\x02\u011A\u011F"+
		"\x05\x03\x02\x02\u011B\u011F\x05\x05\x03\x02\u011C\u011F\x07a\x02\x02"+
		"\u011D\u011F\x05\x07\x04\x02\u011E\u011A\x03\x02\x02\x02\u011E\u011B\x03"+
		"\x02\x02\x02\u011E\u011C\x03\x02\x02\x02\u011E\u011D\x03\x02\x02\x02\u011F"+
		"\u0122\x03\x02\x02\x02\u0120\u011E\x03\x02\x02\x02\u0120\u0121\x03\x02"+
		"\x02\x02\u0121T\x03\x02\x02\x02\u0122\u0120\x03\x02\x02\x02\u0123\u0124"+
		"\x071\x02\x02\u0124\u0125\x071\x02\x02\u0125\u0129\x03\x02\x02\x02\u0126"+
		"\u0128\v\x02\x02\x02\u0127\u0126\x03\x02\x02\x02\u0128\u012B\x03\x02\x02"+
		"\x02\u0129\u012A\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02\u012A\u012C"+
		"\x03\x02\x02\x02\u012B\u0129\x03\x02\x02\x02\u012C\u012D\b+\x02\x02\u012D"+
		"V\x03\x02\x02\x02\u012E\u012F\x071\x02\x02\u012F\u0130\x07,\x02\x02\u0130"+
		"\u0134\x03\x02\x02\x02\u0131\u0133\v\x02\x02\x02\u0132\u0131\x03\x02\x02"+
		"\x02\u0133\u0136\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0134\u0132"+
		"\x03\x02\x02\x02\u0135\u0137\x03\x02\x02\x02\u0136\u0134\x03\x02\x02\x02"+
		"\u0137\u0138\x07,\x02\x02\u0138\u0139\x071\x02\x02\u0139\u013A\x03\x02"+
		"\x02\x02\u013A\u013B\b,\x02\x02\u013BX\x03\x02\x02\x02\u013C\u013D\t\b"+
		"\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u013F\b-\x02\x02\u013FZ\x03"+
		"\x02\x02\x02\x1A\x02\x9E\xA6\xAD\xB1\xB6\xB8\xBB\xC0\xC6\xC8\xCC\xD1\xD3"+
		"\xD6\xD9\xDE\xE0\xEE\u0118\u011E\u0120\u0129\u0134\x03\x02\x03\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FAILangLexer.__ATN) {
			FAILangLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FAILangLexer._serializedATN));
		}

		return FAILangLexer.__ATN;
	}

}

