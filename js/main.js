var App = (function() {

  "use strict";

  var data = {
    title: location.hostname || 'salvan13.github.io'
  };

  var container, code, profile, letters, interval;

  var init = function() {
    if(interval) {
      clearInterval(interval);
    }
    letters = [];

    Template.render({
      container: document.body,
      type: 'main',
      nodeType: 'main',
      data: data,
      empty: true
    });

    interval = setInterval(function() {
      if(letters.length > 0) {
        code.innerHTML += letters[0].char;
        if(letters[0].cb) {
          letters[0].cb();
        }
        letters = letters.splice(1);
      }
    }, 12);

    code = document.querySelector('code');

    write('Hello, I am Antonio.');
    write('Thank you for visiting my profile 😃');
    write('I am an italian Frontend Engineer,');
    write('🏠 from Napoli ✈️ based in Milan.');
    write('\n👷 Some coding skills');
    write('Javascript\t' + '⭐'.repeat(10));
    write('HTML\t\t' + '⭐'.repeat(10));
    write('CSS\t\t' + '⭐'.repeat(9));
    write('Java\t\t' + '⭐'.repeat(9));
    write('SQL\t\t' + '⭐'.repeat(8));
    write('Python\t\t' + '⭐'.repeat(6));
    write('\n🐧 Linux user');
    write('\n👾 Casual videogame maker/player');
    write('\n❤️‍ Italian 🍕 Japanese 🍙 and Greek food');
    write('\n🎧 Rock Music');
    write('\n⚔ House Stark Member');
  };

  var write = function(txt, cb) {
    txt += '\n';
    for(let x = 0; x < txt.length; x++) {
      if(cb && x === txt.length - 1) {
        letters.push({char: txt[x], cb: cb});
      } else {
        letters.push({char: txt[x]});
      }
    }
  };

  return {
    init: init
  };

})();

var Template = (function() {

  function t(strings, ...keys) {
    return (function(obj) {
      var result = [strings[0]];
      keys.forEach(function(key, i) {
        var value = obj[key];
        result.push(value, strings[i + 1]);
      });
      return result.join('');
    });
  };

  var templates = {
    main: t`<header>
      <h1>${'title'}</h1>
    </header>
    <section>
      <pre><code></code></pre>
      </div>
    </section>
    <footer>
      <a href="https://twitter.com/salvan13"><i class="fa fa-twitter"></i></a>
      <a href="https://github.com/salvan13"><i class="fa fa-github"></i></a>
      <a href="https://linkedin.com/in/antoniosalvati84"><i class="fa fa-linkedin"></i></a>
      <a href="https://stackoverflow.com/users/640815/antonio-salvati"><i class="fa fa-stack-overflow"></i></a>
    </footer>`
  };

  var render = function(cfg) {
    if(cfg.empty) {
      while (cfg.container.lastChild) {
        cfg.container.removeChild(cfg.container.lastChild);
      }
    }
    var elem = document.createElement(cfg.nodeType || 'div');
    if(cfg.nodeClass) {
      elem.classList.add(cfg.nodeClass);
    }
    elem.innerHTML = templates[cfg.type](cfg.data || {});
    cfg.container.appendChild(elem);
    return elem;
  }

  return {
    render: render
  };


})();

window.addEventListener('load', App.init);
