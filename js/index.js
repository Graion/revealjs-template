(function () {
  'use strict';

  // Full list of configuration options available at:
  // https://github.com/hakimel/reveal.js#configuration
  Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    width: 1280,
    height: 720,
    // none/fade/slide/convex/concave/zoom
    transition: 'fade',
    // Optional reveal.js plugins
    dependencies: [{
      src: 'components/reveal.js/lib/js/classList.js',
      condition: function () {
        return !document.body.classList;
      }
    }, {
      src: 'components/reveal.js/plugin/markdown/marked.js',
      condition: function () {
        return !!document.querySelector('[data-markdown]');
      }
    }, {
      src: 'components/reveal.js/plugin/markdown/markdown.js',
      condition: function () {
        return !!document.querySelector('[data-markdown]');
      }
    }, {
      src: 'components/reveal.js/plugin/highlight/highlight.js',
      async: true,
      condition: function () {
        return !!document.querySelector('pre code');
      },
      callback: function () {
        hljs.initHighlightingOnLoad();
      }
    }, {
      src: 'components/reveal.js/plugin/zoom-js/zoom.js',
      async: true
    }, {
      src: 'components/reveal.js/plugin/notes/notes.js',
      async: true
    }]
  });

}());
