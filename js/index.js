window.Reveal = require("reveal.js");
window.hljs = require("highlight.js");
window.io = require("socket.io-client");
hljs.initHighlightingOnLoad();

window.addEventListener("load", initialize);

function initialize()
{
    Reveal.initialize({
        controlsTutorial: true,
        controls: true,
        controlsLayout: 'bottom-right',
        slideNumber: false,
        hideAddressBar: true,
        showNotes: false,
        history: true,
        keyboard: true,
        touch: true,
        help: true,
        defaultTiming: 120,
        multiplex: {
            secret: '15789397506092044303',
            id: 'd8abcc55047f4407',
            url: 'https://reveal.gaypunkposer.dev/'
        }
    });

    require("reveal.js/plugin/multiplex/master.js");
    require("reveal.js/plugin/notes/notes.js");
    require("reveal-code-focus");

}