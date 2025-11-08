// Runtime tweaks: title + brighter text
(function(){
  try {
    document.addEventListener('DOMContentLoaded', function(){
      try {
        document.title = 'クリプトニンジャバトルタイピング';
        var h1 = document.querySelector('.header h1');
        if (h1) h1.textContent = 'クリプトニンジャバトルタイピング';
      } catch(_){ }

      try {
        var css = [
          '.kana{color:#fff!important;background:none!important;-webkit-background-clip:initial!important;background-clip:initial!important;text-shadow:0 4px 18px rgba(0,0,0,.6)!important;}',
          '.romaji{color:#f8fafc!important;text-shadow:0 2px 12px rgba(0,0,0,.6)!important;}'
        ].join('');
        var style = document.createElement('style');
        style.setAttribute('data-injected','brighten');
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
      } catch(_){ }
    });
  } catch(_){ }
})();

