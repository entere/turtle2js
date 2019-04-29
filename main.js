class Main {
    constructor() {
        this.bindEvent();


    }

    builtinRead (x) {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
        return Sk.builtinFiles["files"][x];
    }

    runCode() {
       let prog = document.getElementById("editor-code").value;
       (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'draw-canvas';
       Sk.configure({ read:this.builtinRead});
       Sk.TurtleGraphics.height = 600;
       try {
          //Sk.importMainWithBody("<stdin>",false,prog);
          Sk.misceval.asyncToPromise(function() {
            return Sk.importMainWithBody("<stdin>",false,prog,true);
          });
       } catch (e) {
          console.log(e);
       }
    }

    bindEvent() {

        document.getElementById('run-code-button').addEventListener('click', ()=>{
            this.runCode();
        });

    }

}

new Main()