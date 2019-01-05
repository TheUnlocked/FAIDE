// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const Path = require('path');

console.log(process.versions);

process.env.EDGE_USE_CORECLR = 1;
process.env.EDGE_APP_ROOT = Path.join(__dirname, '\\FAILanguage');

const Edge = require('electron-edge-js');

const FAIExecute = Edge.func({
    assemblyFile: Path.join(__dirname, '\\FAILanguage\\FAILang.dll'),
    typeName: 'FAILang.FAILanguage',
    methodName: 'ExecuteProgramHook'
});

const CodeMirror = require('codemirror');
require('codemirror/addon/scroll/simplescrollbars');

const MathJax = require('mathjax-electron');
const Katex = require('katex');
const Texifai = require('./TeXiFAI/index.js');

const texBox = document.getElementById("tex-result");

let codeMirrorBox;
function createCodeBox(){
    codeMirrorBox = CodeMirror(document.getElementById('fai-editor'),
        {
            autofocus: true,
            lineNumbers: true,
            theme: "base16-light",
            scrollbarStyle: "simple"
        });
    codeMirrorBox.setSize("99%", "300px");
    
    codeMirrorBox.on("change", (editor, changes) => {
        texBox.innerHTML = "";

        let texed = "";
        try {
            texed = Texifai.parseInput(editor.getValue());
        }
        catch (e) {
            texed = editor.getValue().replace(/{/g, '\\{').replace(/}/g, '\\}').replace(/\n/g, '\0');
        }
        
        if (texed){
            let lines = document.createElement("div");
            for (let line of texed.split('\0')){
                let katexTemp = document.createElement("div");
                Katex.render(line, katexTemp);
                texBox.appendChild(katexTemp);

                lines.innerHTML += `$${line}$<br>`;
            }
        }
    });
}
MathJax.loadMathJax(document, () => {
    createCodeBox();
});

document.getElementById("fai-execute").onclick = executeFAI;


function executeFAI(){
    let input = codeMirrorBox.getValue();
    FAIExecute(input, function(error, result){
        try {
            if (error) throw error;
            let resultDiv = document.getElementById('result-box');
            resultDiv.innerHTML = "";
            for (let line of result){
                let texed = "";
                try {
                    texed = Texifai.parseInput(line);
                }
                catch (e) {
                    texed = line.replace(/{/g, '\\{').replace(/}/g, '\\}');
                }
                
                let katexTemp = document.createElement("div");
                Katex.render(texed, katexTemp);
                resultDiv.appendChild(katexTemp);
            }
        }
        catch (e) {document.getElementById('result-box').innerHTML = e;}
    });
}