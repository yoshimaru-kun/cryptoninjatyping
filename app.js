(() => {
  'use strict';

  // ===== Data =====
  const LEVELS = [
    { name: 'Lv1', words: [
      { k: 'いぬ', r: 'inu' },{ k: 'ねこ', r: 'neko' },{ k: 'さる', r: 'saru' },{ k: 'やま', r: 'yama' },{ k: 'そら', r: 'sora' },{ k: 'はな', r: 'hana' },{ k: 'みず', r: 'mizu' },{ k: 'いす', r: 'isu' },{ k: 'き', r: 'ki' },{ k: 'あめ', r: 'ame' }
    ]},
    { name: 'Lv2', words: [
      { k: 'すいか', r: 'suika' },{ k: 'たまご', r: 'tamago' },{ k: 'ふね', r: 'fune' },{ k: 'みち', r: 'michi' },{ k: 'つき', r: 'tsuki' },{ k: 'ゆき', r: 'yuki' },{ k: 'くも', r: 'kumo' },{ k: 'かめ', r: 'kame' },{ k: 'くるま', r: 'kuruma' },{ k: 'かぎ', r: 'kagi' }
    ]},
    { name: 'Lv3', words: [
      { k: 'がっこう', r: 'gakkou' },{ k: 'きって', r: 'kitte' },{ k: 'ざっし', r: 'zasshi' },{ k: 'こっぷ', r: 'koppu' },{ k: 'けっせき', r: 'kesseki' },{ k: 'しっぽ', r: 'shippo' },{ k: 'ばなな', r: 'banana' },{ k: 'ぶた', r: 'buta' },{ k: 'ぱん', r: 'pan' },{ k: 'だるま', r: 'daruma' }
    ]},
    { name: 'Lv4', words: [
      { k: 'きゃく', r: 'kyaku' },{ k: 'しゃしん', r: 'shashin' },{ k: 'ちょう', r: 'chou' },{ k: 'りゅう', r: 'ryuu' },{ k: 'みゃく', r: 'myaku' },{ k: 'にゃんこ', r: 'nyanko' },{ k: 'ひょう', r: 'hyou' },{ k: 'しゅりけん', r: 'shuriken' },{ k: 'ぎゃく', r: 'gyaku' },{ k: 'きょう', r: 'kyou' }
    ]},
    { name: 'Lv5', words: [
      { k: 'しんぶんし', r: 'shinbunshi' },{ k: 'じてんしゃ', r: 'jitensha' },{ k: 'こうさてん', r: 'kousaten' },{ k: 'きょうりゅう', r: 'kyouryuu' },{ k: 'ちょっけい', r: 'chokkei' },{ k: 'せんせい', r: 'sensei' },{ k: 'しょうねん', r: 'shounen' },{ k: 'しょくどう', r: 'shokudou' },{ k: 'しゅくだい', r: 'shukudai' },{ k: 'でんしゃ', r: 'densha' }
    ]},
    { name: 'Lv6', words: [
      { k: 'こうえん', r: 'kouen' },{ k: 'ゆうびん', r: 'yuubin' },{ k: 'とうふ', r: 'toufu' },{ k: 'すうじ', r: 'suuji' },{ k: 'くうこう', r: 'kuukou' },{ k: 'ひこうき', r: 'hikouki' },{ k: 'ほうせき', r: 'houseki' },{ k: 'りょこう', r: 'ryokou' },{ k: 'おうさま', r: 'ousama' },{ k: 'おおさか', r: 'oosaka' }
    ]},
    { name: 'Lv7', words: [
      { k: 'ぎゅうにゅう', r: 'gyuunyuu' },{ k: 'じゅぎょう', r: 'jugyou' },{ k: 'びょういん', r: 'byouin' },{ k: 'ちゅうしゃ', r: 'chuusha' },{ k: 'きょうしつ', r: 'kyoushitsu' },{ k: 'りゅうがく', r: 'ryuugaku' },{ k: 'しゃちょう', r: 'shachou' },{ k: 'じょうけん', r: 'jouken' },{ k: 'ひょうげん', r: 'hyougen' },{ k: 'きょうそう', r: 'kyousou' }
    ]},
    { name: 'Lv8', words: [
      { k: 'しょくぶつえん', r: 'shokubutsuen' },{ k: 'けんきゅうしつ', r: 'kenkyuushitsu' },{ k: 'じどうしゃどう', r: 'jidoushado' },{ k: 'しょうがっこう', r: 'shougakkou' },{ k: 'ほっきょく', r: 'hokkyoku' },{ k: 'ふくざつ', r: 'fukuzatsu' },{ k: 'ちゅうしゃじょう', r: 'chuushajou' },{ k: 'しんごうき', r: 'shingouki' },{ k: 'だいがくいん', r: 'daigakuin' },{ k: 'しぜんかがく', r: 'shizenkagaku' }
    ]},
    { name: 'Lv9', words: [
      { k: 'がっきゅういいん', r: 'gakkyuuin' },{ k: 'きっさてん', r: 'kissaten' },{ k: 'ざっかや', r: 'zakkaya' },{ k: 'ほっきょくぐま', r: 'hokkyokuguma' },{ k: 'しゃっくり', r: 'shakkuri' },{ k: 'かっぱつ', r: 'kappatsu' },{ k: 'じっけん', r: 'jikken' },{ k: 'がっしょう', r: 'gasshou' },{ k: 'きっぷうりば', r: 'kippuuriba' },{ k: 'まっくら', r: 'makkura' }
    ]},
    { name: 'Lv10', words: [
      { k: 'こうつうじゅうたい', r: 'koutsuujuutai' },{ k: 'けんきゅうはっぴょう', r: 'kenkyuuhappyou' },{ k: 'しんりゃくしゃ', r: 'shinryakusha' },{ k: 'じっけんしつ', r: 'jikkenshitsu' },{ k: 'ちょうりしつ', r: 'chourishitsu' },{ k: 'りょうりちょう', r: 'ryourichou' },{ k: 'しんがっき', r: 'shingakki' },{ k: 'ふっこうこうじ', r: 'fukkoukouji' },{ k: 'じゅうようぶんや', r: 'juuyoubunya' },{ k: 'せいさくかいぎ', r: 'seisakukaigi' }
    ]}
  ];

  // ===== DOM =====
  const elTimeLeft = document.getElementById('timeLeft');
  const elTimeBarFill = document.getElementById('timeBarFill');
  const elScore = document.getElementById('score');
  const elMisses = document.getElementById('misses');
  const elAccuracy = document.getElementById('accuracy');
  const elKana = document.getElementById('kana');
  const elRomaji = document.getElementById('romaji');
  const elInput = document.getElementById('typeInput');
  const elHint = document.getElementById('hint');
  const btnStart = document.getElementById('startBtn');
  const btnRestart = document.getElementById('restartBtn');
  const elLevel = document.getElementById('level');
  const elLevelUp = document.getElementById('levelUp');
  const elLevelUpNum = document.getElementById('levelUpNumber');
  const elLevelUpImg = document.getElementById('levelUpImg');
  const elModeLabel = document.getElementById('modeLabel');
  const modeButtons = Array.from(document.querySelectorAll('.modes .seg'));
  const customSecondsInput = document.getElementById('customSeconds');
  const setCustomBtn = document.getElementById('setCustomBtn');
  const btnGoRestart = document.getElementById('goRestartBtn');
  // Will be created dynamically on game over overlay
  let btnContinue = null;
  let btnStartOver = null;
  let elContinuesLeft = null;
  const btnCloseResults = document.getElementById('closeResults');
  const radioHepburn = document.getElementById('romanHepburn');
  const radioKunrei = document.getElementById('romanKunrei');
  const btnRomanHelp = document.getElementById('romanHelpBtn');
  const boxRomanHelp = document.getElementById('romanHelp');
  const btnRomanHelpClose = document.getElementById('romanHelpClose');
  // BGM UI (placeholder)
  const bgmSelect = document.getElementById('bgmSelect');
  const bgmVolume = document.getElementById('bgmVolume');
  const diffButtons = Array.from(document.querySelectorAll('.difficulty .seg'));

  // ===== State =====
  let limitSeconds = 60;
  let running = false;
  let timerId = null;
  let timeLeft = limitSeconds;
  let score = 0;
  let misses = 0;
  let typedTotal = 0;
  let typedCorrect = 0;
  let levelIndex = 0;
  let pool = [];
  let currentBase = null; // {k,r}
  let current = null; // {k,r}
  let romanScheme = (localStorage.getItem('romanScheme')||'hepburn');
  let level10Count = 0; // Lv10での正解数カウント（クリア判定用）
  let missesThisWord = 0;
  let perfectStreak = 0; // 3連続ノーミスで会心

  // ===== Difficulty =====
  const DIFFICULTY_INTERVAL = { easy: 3000, normal: 2000, hard: 1000 };
  let difficulty = (localStorage.getItem('difficulty')||'normal');
  function getEnemyIntervalMs(){ return DIFFICULTY_INTERVAL[difficulty] || 2000; }
  function setDifficultyFromButton(btn){
    const d = btn && btn.getAttribute('data-difficulty');
    if (!d) return;
    difficulty = d;
    localStorage.setItem('difficulty', difficulty);
    diffButtons.forEach(b => b.classList.toggle('on', b===btn));
    if (running){ try { stopEnemyAttacks(); startEnemyAttacks(); } catch(_){} }
  }
  (function initDifficultyUI(){
    if (!diffButtons.length) return;
    const initial = diffButtons.find(b => b.getAttribute('data-difficulty')===difficulty) || diffButtons.find(b=>b.classList.contains('on')) || diffButtons[1];
    if (initial){ diffButtons.forEach(b => b.classList.toggle('on', b===initial)); }
    diffButtons.forEach(b => b.addEventListener('click', () => { setDifficultyFromButton(b); }));
  })();

  // ===== Utils =====
  function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
  function hepburnToKunrei(s){
    return s
      .replace(/sha/g,'sya').replace(/shu/g,'syu').replace(/sho/g,'syo')
      .replace(/shi/g,'si')
      .replace(/cha/g,'tya').replace(/chu/g,'tyu').replace(/cho/g,'tyo')
      .replace(/chi/g,'ti')
      .replace(/tsu/g,'tu')
      .replace(/fu/g,'hu');
  }
  function toScheme(r){ return romanScheme==='kunrei' ? hepburnToKunrei(r) : r; }

  // ===== UI helpers =====
  function setStats(){
    elScore.textContent = String(score);
    elMisses.textContent = String(misses);
    const acc = typedTotal===0 ? 100 : Math.round((typedCorrect/typedTotal)*100);
    elAccuracy.textContent = acc + '%';
  }
  function setTimeUI(){
    if (limitSeconds == null) elTimeLeft.textContent = '∞';
    else elTimeLeft.textContent = timeLeft.toFixed(1);
    const p = limitSeconds == null ? 1 : Math.max(0, Math.min(1, timeLeft/limitSeconds));
    if (elTimeBarFill){ elTimeBarFill.style.transform = 'scaleX(' + p + ')'; }
  }
  function setLevelUI(){ elLevel.textContent = String(levelIndex+1); }
  const LEVEL_THRESHOLDS = [0, 3, 6, 10, 15, 21, 28, 36, 45, 55];
  function showLevelUp(lv){
    if (!elLevelUp) return;
    if (elLevelUpNum) elLevelUpNum.textContent = String(lv);
    try {
      if (elLevelUpImg && window.__battle && window.__battle.player && window.__battle.player.img){
        elLevelUpImg.src = encodeURI(window.__battle.player.img);
      }
    } catch(_){ }
    elLevelUp.classList.remove('hidden');
    try { sfx.play('level_up'); } catch(_){ }
    setTimeout(()=>{ try { elLevelUp.classList.add('hidden'); } catch(_){ } }, 1000);
  }
  function updateLevelByScore(){
    let target = 0;
    for (let i=0;i<LEVEL_THRESHOLDS.length;i++) if (score >= LEVEL_THRESHOLDS[i]) target = i;
    target = Math.min(target, LEVELS.length-1);
    if (target !== levelIndex){
      levelIndex = target; setLevelUI(); rebuildPool(); showLevelUp(levelIndex+1);
      // レベルが変わったらLv10カウンタをリセット
      if (levelIndex !== LEVELS.length-1) level10Count = 0;
      // レベルアップ時にHPを10%回復（上限まで）
      try {
        if (window.__battle && window.__battle.player){
          const max = window.__battle.player.maxHP|0;
          window.__battle.playerHp = Math.min(max, Math.round((window.__battle.playerHp|0) + max * 0.1));
          updateHpUI();
        }
      } catch(_){ }
    }
  }

  function rebuildPool(){ pool = shuffle(LEVELS[levelIndex].words.slice()); }
  function pickWord(){ if (!pool.length) rebuildPool(); return pool.pop(); }
  function setPrompt(w){
    currentBase = w; current = { k:w.k, r: toScheme(w.r) };
    elKana.textContent = current.k;
    elRomaji.textContent = current.r;
    elInput.value = '';
    elInput.classList.remove('good','bad');
    elHint.textContent = 'ローマ字で入力してね';
  }

  // ===== Game loop =====
  function startGame(continueMode=false){
    if (running) return;
    running = true;
    try { sfx.play('start'); } catch(_){ }
    if (window.__battle && window.__battle.player){ limitSeconds = null; timeLeft = Infinity; }
    if (!continueMode){
      score=0; misses=0; typedTotal=0; typedCorrect=0; levelIndex=0;
    }
    timeLeft = (limitSeconds==null?Infinity:limitSeconds);
    setStats(); setTimeUI(); setLevelUI(); rebuildPool(); setPrompt(pickWord());
    elInput.disabled = false; elInput.focus();
    btnStart.disabled = true; btnRestart.disabled = false;
    if (window.__battle && window.__battle.player){ ensureSideFrames(); updateSideFrames(); updateHpUI(); startEnemyAttacks(); }
    const t0 = performance.now();
    timerId = setInterval(() => {
      if (limitSeconds!=null){
        const elapsed = (performance.now()-t0)/1000;
        timeLeft = Math.max(0, limitSeconds - elapsed);
        setTimeUI(); if (timeLeft<=0){ endGame(); }
      }
    }, 100);
  }
  function endGame(){
    running = false;
    if (timerId){ clearInterval(timerId); timerId=null; }
    elInput.disabled = true; btnStart.disabled = false; btnRestart.disabled = false;
  }
  let continuesUsed = 0; // コンテニュー回数（最大2）
  function restartGame(){
    if (timerId){ clearInterval(timerId); timerId=null; }
    // hide overlays if visible
    try { const ov = document.getElementById('gameOverOverlay'); if (ov) ov.classList.add('hidden'); } catch(_){}
    try { const res = document.getElementById('results'); if (res) res.classList.add('hidden'); } catch(_){}
    running=false;
    // 直前が敗北ならコンテニュー処理
    if (lastResultWin === false){
      if (continuesUsed < 2){
        continuesUsed++;
        try {
          if (window.__battle && window.__battle.player){
            const max = window.__battle.player.maxHP|0;
            window.__battle.playerHp = Math.round(max * 0.5);
            updateHpUI();
          }
        } catch(_){}
        startGame(true);
        return;
      } else {
        // 3回目の敗北: 最初から（キャラ未選択状態）
        continuesUsed = 0; lastResultWin = null;
        try { window.__battle = { player:null, enemy:null, playerHp:0, enemyHp:0, enemyIntervalMs:getEnemyIntervalMs(), enemyTimer:null }; } catch(_){}
        btnStart.disabled = false;
        elInput.disabled = true;
        return;
      }
    }
    startGame(false);
  }

  // ===== Input =====
  elInput.addEventListener('input', (e) => {
    if (!running || !current) return;
    const target = current.r;
    let val = (e.target.value||'').toLowerCase().replace(/[^a-z]/g,'');
    // update stats by delta
    const delta = Math.max(0, val.length - (elInput._lastLen||0));
    let playedMiss = false;
    for(let i=0;i<delta;i++){
      const pos = (elInput._lastLen||0) + i; typedTotal++;
      if (target[pos] === val[pos]) {
        typedCorrect++;
      } else {
        misses++; missesThisWord++;
        if (!playedMiss) { try { sfx.play('miss'); } catch(_){} playedMiss = true; }
      }
    }
    elInput._lastLen = val.length;
    e.target.value = val;
    const isPrefix = target.startsWith(val);
    elInput.classList.toggle('good', isPrefix);
    elInput.classList.toggle('bad', !isPrefix);
    setStats();
    if (val === target){
      score++;
      let dmg = (window.__battle && window.__battle.player ? (window.__battle.player.atk|0) : 0) + target.length;
      if (missesThisWord === 0) { perfectStreak++; } else { perfectStreak = 0; }
      if (perfectStreak >= 3){
        dmg *= 2; perfectStreak = 0;
        try {
          sfx.play('critical');
          if (window.__battle && window.__battle.player && window.__battle.enemy){
            flashFrame('right','fx-knockback-right');
            // CRITICAL! のフロート表示
            const el = document.getElementById('sideFrameRight');
            if (el){ const d = document.createElement('div'); d.className='crit-float'; d.textContent='CRITICAL!'; el.appendChild(d); setTimeout(()=>{ try{ el.removeChild(d); }catch(_){} }, 800); }
          }
        } catch(_){ }
      } else {
        try { sfx.play('slash'); } catch(_){ }
      }
    if (window.__battle && window.__battle.player && window.__battle.enemy){ try { spawnSlash('right','red'); } catch(_){ } dealEnemyDamage(dmg); }
    // Lv10 で15回正解したらクリア
    if (levelIndex === LEVELS.length - 1){
      level10Count++;
      if (level10Count >= 15){ endBattle(true); return; }
    }
    setStats(); updateLevelByScore(); setPrompt(pickWord()); elInput._lastLen = 0;
    }
  });

  // ===== Mode controls =====
  function setModeFromButton(btn){
    const val = btn.getAttribute('data-seconds');
    modeButtons.forEach(b => b.classList.toggle('on', b===btn));
    if (val==='unlimited'){ limitSeconds = null; elModeLabel.textContent='無制限モード'; timeLeft=Infinity; }
    else { const s = parseInt(val,10)||60; limitSeconds=s; elModeLabel.textContent = s+'秒チャレンジ'; timeLeft=s; }
    if (!running) setTimeUI();
  }
  if (modeButtons.length){
    modeButtons.forEach(b => b.addEventListener('click', ()=>{ if(!running) setModeFromButton(b); }));
    const initial = modeButtons.find(b=>b.classList.contains('on')) || modeButtons[1];
    if (initial) setModeFromButton(initial);
  }
  setCustomBtn.addEventListener('click', ()=>{ if (running) return; const v = parseInt(customSecondsInput.value,10); if (Number.isFinite(v)&&v>0){ limitSeconds = Math.min(9999, Math.floor(v)); elModeLabel.textContent = limitSeconds+'秒チャレンジ'; timeLeft=limitSeconds; setTimeUI(); }});

  // ===== Romanization controls =====
  const labelHep = radioHepburn ? radioHepburn.closest('label') : null;
  const labelKun = radioKunrei ? radioKunrei.closest('label') : null;
  function updateRomanUI(){
    try {
      if (labelHep) labelHep.classList.toggle('on', romanScheme==='hepburn');
      if (labelKun) labelKun.classList.toggle('on', romanScheme==='kunrei');
    } catch(_){}
  }
  function applySchemeFromUI(){
    romanScheme = (radioKunrei && radioKunrei.checked) ? 'kunrei':'hepburn';
    localStorage.setItem('romanScheme', romanScheme);
    updateRomanUI();
    if (!running && currentBase) setPrompt(currentBase);
  }
  if (radioHepburn) radioHepburn.addEventListener('change', applySchemeFromUI);
  if (radioKunrei) radioKunrei.addEventListener('change', applySchemeFromUI);
  try {
    if (radioHepburn) radioHepburn.checked = (romanScheme === 'hepburn');
    if (radioKunrei) radioKunrei.checked = (romanScheme === 'kunrei');
  } catch(_){}
  updateRomanUI();

  // Romanization help toggle
  if (btnRomanHelp && boxRomanHelp){
    btnRomanHelp.addEventListener('click', () => {
      try {
        const isHidden = boxRomanHelp.classList.contains('hidden');
        boxRomanHelp.classList.toggle('hidden');
        btnRomanHelp.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
      } catch(_){}
    });
  }
  if (btnRomanHelpClose && boxRomanHelp){
    btnRomanHelpClose.addEventListener('click', () => {
      try { boxRomanHelp.classList.add('hidden'); if (btnRomanHelp) btnRomanHelp.setAttribute('aria-expanded','false'); } catch(_){}
    });
  }
  // removed the top-right close button (X); close via ? toggle or the bottom button

  // BGM select/volume (playback + persist)
  (function initBgmUI(){
    if (!bgmSelect || !bgmVolume) return;

    const BGM_TRACKS = {
      dennou: 'assets/audio/bgm/電脳忍法帖.mp3',
    };

    let bgmAudio = null;
    function disposeAudio(){
      try { if (bgmAudio) { bgmAudio.pause(); } } catch(_){}
      bgmAudio = null;
    }
    function createAudioFor(track){
      disposeAudio();
      if (!track || track === 'none') return;
      const src = BGM_TRACKS[track];
      if (!src) return;
      try {
        bgmAudio = new Audio(encodeURI(src));
        bgmAudio.loop = true;
        bgmAudio.preload = 'auto';
        const vol = parseFloat(bgmVolume.value || '0.5');
        bgmAudio.volume = Number.isFinite(vol) ? vol : 0.5;
      } catch(_) { bgmAudio = null; }
    }
    function tryPlay(){
      if (!bgmAudio) return;
      try {
        const vol = parseFloat(bgmVolume.value || '0.5');
        bgmAudio.volume = Number.isFinite(vol) ? vol : 0.5;
        bgmAudio.play().catch(()=>{});
      } catch(_){}
    }

    // Load saved state
    try {
      const savedTrackRaw = localStorage.getItem('bgm.track') || 'none';
      const savedTrack = (savedTrackRaw !== 'none' && !BGM_TRACKS[savedTrackRaw]) ? 'none' : savedTrackRaw;
      const savedVol = parseFloat(localStorage.getItem('bgm.volume') || '0.5');
      bgmSelect.value = savedTrack;
      if (!Number.isFinite(savedVol)) { throw new Error('invalid vol'); }
      bgmVolume.value = String(savedVol);
      if (savedTrack !== savedTrackRaw) {
        try { localStorage.setItem('bgm.track', savedTrack); } catch(_){}
      }
      if (savedTrack && savedTrack !== 'none') {
        createAudioFor(savedTrack);
      }
    } catch(_) {
      try { bgmSelect.value = 'none'; } catch(_){}
      try { bgmVolume.value = '0.5'; } catch(_){}
    }

    // Persist + apply on change
    bgmSelect.addEventListener('change', () => {
      try { localStorage.setItem('bgm.track', bgmSelect.value); } catch(_){}
      createAudioFor(bgmSelect.value);
      tryPlay();
    });
    bgmVolume.addEventListener('input', () => {
      try { localStorage.setItem('bgm.volume', bgmVolume.value); } catch(_){}
      if (bgmAudio) {
        const v = parseFloat(bgmVolume.value||'0.5');
        bgmAudio.volume = Number.isFinite(v) ? v : 0.5;
      }
    });

    // Help autoplay policies: try starting after explicit clicks
    try { if (btnStart) btnStart.addEventListener('click', tryPlay); } catch(_){}
    try { if (btnRestart) btnRestart.addEventListener('click', tryPlay); } catch(_){}
  })();

  // ===== SFX using audio files in assets/audio =====
  const sfx = (()=>{
    const files = {
      slash:    '剣で斬る3.mp3',
      enemy:    '打撃8.mp3',
      critical: '必殺技ヒット.mp3',
      level_up: 'レベルアップ.mp3',
      start:    'スタート.mp3',
      victory:  '勝利.mp3',
      defeat:   '敗北.mp3',
      miss:     '爆発1.mp3',
    };
    const pool = {};
    function ensure(name){
      if (pool[name]) return;
      const src = encodeURI(`assets/audio/${files[name]}`);
      pool[name] = Array.from({length: 3}, () => { const a = new Audio(src); a.preload='auto'; return a; });
    }
    function play(name, vol=1){
      if (name === 'miss'){
        const cands = ['爆発1.mp3','爆発１.mp3','打撃8.mp3'];
        let i = 0;
        const tryNext = () => {
          if (i >= cands.length) return;
          const a = new Audio(encodeURI('assets/audio/' + cands[i++]));
          a.volume = vol;
          a.onerror = tryNext;
          try { a.play().catch(()=>{}); } catch(_){}
        };
        tryNext();
        return;
      }
      ensure(name);
      const arr = pool[name] || [];
      const a = arr.find(x => x.paused) || arr[0];
      if (!a) return;
      try { a.currentTime = 0; a.volume = vol; a.play().catch(()=>{}); } catch(_){}
    }
    return { play };
  })();

  // ===== Characters & Battle (lightweight) =====
  const CHARACTERS = {
    balance: { id:'balance', name:'バランス', maxHP:120, atk:4, img:'assets/characters/game/assetscharactersgamebalance.png.png' },
    power:   { id:'power',   name:'火力',     maxHP:100, atk:6, img:'assets/characters/game/assetscharactersgamepower.png.png' },
    tank:    { id:'tank',    name:'耐久',     maxHP:150, atk:3, img:'assets/characters/game/assetscharactersgametank.png.png' },
    mage:    { id:'mage',    name:'まほう',   maxHP:110, atk:5, img:'assets/characters/game/assetscharactersgamemage.png.png' },
    rogue:   { id:'rogue',   name:'すばやい', maxHP:90,  atk:7, img:'assets/characters/game/assetscharactersgamerogue.png.png' },
    extra:   { id:'extra',   name:'エクストラ', maxHP:130, atk:4, img:'assets/characters/game/5b48b92f-d741-47dc-aafd-7f21905231941.png' },
  };
  // Replace default characters with 12 new ones
  (function(){
    try {
      Object.keys(CHARACTERS).forEach(k => { try { delete CHARACTERS[k]; } catch(_){} });
      Object.assign(CHARACTERS, {
        sattva:   { id:'sattva',   name:'サットヴァ', maxHP:120, atk:4, img:'assets/characters/game/サットヴァ.png' },
        ibuki:    { id:'ibuki',    name:'イブキ',     maxHP:95,  atk:7, img:'assets/characters/game/イブキ.png' },
        dan:      { id:'dan',      name:'断',         maxHP:105, atk:6, img:'assets/characters/game/断.png' },
        iwayaji:  { id:'iwayaji',  name:'岩爺',       maxHP:155, atk:3, img:'assets/characters/game/岩爺.png' },
        magoichi: { id:'magoichi', name:'孫市',       maxHP:110, atk:5, img:'assets/characters/game/孫市.png' },
        sakuya:   { id:'sakuya',   name:'咲耶',       maxHP:100, atk:6, img:'assets/characters/game/咲耶.png' },
        shaoran:  { id:'shaoran',  name:'シャオラン', maxHP:100, atk:6, img:'assets/characters/game/シャオラン.png' },
        sekishusai:{id:'sekishusai',name:'石舟斎',    maxHP:130, atk:4, img:'assets/characters/game/石舟斎.png' },
        shiba:    { id:'shiba',    name:'柴',         maxHP:115, atk:5, img:'assets/characters/game/柴.png' },
        oto:      { id:'oto',      name:'於兎',       maxHP:90,  atk:7, img:'assets/characters/game/於兎.png' },
        kinki:    { id:'kinki',    name:'金鬼',       maxHP:140, atk:5, img:'assets/characters/game/金鬼.png' },
        hinanojyo:{ id:'hinanojyo',name:'雛之丞',     maxHP:125, atk:4, img:'assets/characters/game/雛之丞.png' },
      });
    } catch(_){}
  })();
  window.__battle = window.__battle || { player:null, enemy:null, playerHp:0, enemyHp:0, enemyIntervalMs:getEnemyIntervalMs(), enemyTimer:null };

  function ensureBattleHud(){
    if (document.querySelector('.battle-hud')) return;
    const host = document.querySelector('.app');
    const hud = document.createElement('div');
    hud.className = 'battle-hud';
    hud.innerHTML = `
      <div class="hp player">
        <div class="hp-label"><span id="playerName">PLAYER</span><span id="playerHpText"></span></div>
        <div class="hp-bar"><div id="playerHpBar"></div></div>
      </div>
      <div class="hp enemy">
        <div class="hp-label"><span id="enemyName">ENEMY</span><span id="enemyHpText"></span></div>
        <div class="hp-bar"><div id="enemyHpBar"></div></div>
      </div>`;
    host.appendChild(hud);
  }
  function ensureSideFrames(){
    let left = document.getElementById('sideFrameLeft');
    let right = document.getElementById('sideFrameRight');
    if (!left){
      left = document.createElement('div');
      left.id='sideFrameLeft';
      left.className='side-frame left';
      left.innerHTML = (
        '<div class="hp-float player">'
        + '  <div class="hp-bar"><div id="playerHpBar"></div></div>'
        + '  <div class="hp-label"><span id="playerName">PLAYER</span><span id="playerHpText"></span></div>'
        + '</div>'
        + '<img alt="player">'
      );
      document.body.appendChild(left);
    }
    if (!right){
      right = document.createElement('div');
      right.id='sideFrameRight';
      right.className='side-frame right';
      right.innerHTML = (
        '<div class="hp-float enemy">'
        + '  <div class="hp-bar"><div id="enemyHpBar"></div></div>'
        + '  <div class="hp-label"><span id="enemyName">ENEMY</span><span id="enemyHpText"></span></div>'
        + '</div>'
        + '<img alt="enemy">'
      );
      document.body.appendChild(right);
    }
  }
  function updateSideFrames(){
    const left = document.getElementById('sideFrameLeft');
    const right = document.getElementById('sideFrameRight');
    if (left){ const img = left.querySelector('img'); if (img && window.__battle.player && window.__battle.player.img){ img.src = encodeURI(window.__battle.player.img); } }
    if (right){ const img = right.querySelector('img'); if (img && window.__battle.enemy && window.__battle.enemy.img){ img.src = encodeURI(window.__battle.enemy.img); } }
  }
  function flashFrame(which, fx){
    const el = document.getElementById(which==='left' ? 'sideFrameLeft' : 'sideFrameRight');
    if (!el) return; el.classList.remove('fx-blue','fx-red','fx-lunge-left','fx-lunge-right','fx-shake','fx-shake-strong','fx-knockback-left','fx-knockback-right');
    void el.offsetWidth; el.classList.add(fx);
    setTimeout(()=>{ try{ el.classList.remove(fx); }catch(_){} }, 320);
  }
  function spawnSlash(which, color){
    const el = document.getElementById(which==='left' ? 'sideFrameLeft' : 'sideFrameRight');
    if (!el) return; const d = document.createElement('div');
    d.className = 'slash' + (color==='red' ? ' red' : '');
    d.style.left = (20 + Math.random()*60) + '%';
    d.style.top = (20 + Math.random()*60) + '%';
    el.appendChild(d);
    setTimeout(()=>{ try{ el.removeChild(d); }catch(_){} }, 420);
  }
  function updateHpUI(){
    const pMax = window.__battle.player ? window.__battle.player.maxHP : 1;
    const eMax = window.__battle.enemy ? window.__battle.enemy.maxHP : 1;
    const pCur = Math.max(0, window.__battle.playerHp|0);
    const eCur = Math.max(0, window.__battle.enemyHp|0);
    const pBar = document.getElementById('playerHpBar');
    const eBar = document.getElementById('enemyHpBar');
    const pTxt = document.getElementById('playerHpText');
    const eTxt = document.getElementById('enemyHpText');
    const pName= document.getElementById('playerName');
    const eName= document.getElementById('enemyName');
    if (pBar) pBar.style.transform = 'scaleX(' + (pCur/pMax) + ')';
    if (eBar) eBar.style.transform = 'scaleX(' + (eCur/eMax) + ')';
    if (pTxt) pTxt.textContent = `${pCur} / ${pMax}`;
    if (eTxt) eTxt.textContent = `${eCur} / ${eMax}`;
    if (pName && window.__battle.player) pName.textContent = window.__battle.player.name;
    if (eName && window.__battle.enemy) eName.textContent = window.__battle.enemy.name;
  }
  function pickRandomEnemyExcluding(id){
    const list = Object.values(CHARACTERS).filter(c => c.id !== id);
    return list[Math.floor(Math.random()*list.length)];
  }
  function nextEnemy(){
    if (!window.__battle || !window.__battle.player) return;
    const next = pickRandomEnemyExcluding(window.__battle.player.id);
    window.__battle.enemy = { ...next };
    window.__battle.enemyHp = next.maxHP;
    updateHpUI();
    try { updateSideFrames(); flashFrame('right','fx-red'); } catch(_){}
  }
  function openCharSelect(){
    let panel = document.getElementById('charSelect');
    if (!panel){ panel = document.createElement('div'); panel.id='charSelect'; panel.className='select-modal'; document.body.appendChild(panel); }
    const buttons = Object.values(CHARACTERS).map(c => (
      `<button class="choice" data-id="${c.id}" title="ダブルクリックで開始">`
      + (c.img ? `<img alt="${c.name}" src="${encodeURI(c.img)}" style="width:120px;height:auto;display:block;margin:0 auto 6px;">` : '')
      + `<div class="ch-name">${c.name}</div>`
      + `<div class="ch-stats">HP ${c.maxHP} / ATK ${c.atk}</div>`
      + `</button>`
    )).join('');
    panel.innerHTML = `<div class="select-card"><h2>キャラクターを選択</h2><div class="choices player-choices" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;">${buttons}</div><div class="select-actions"><button id="confirmSelect" class="primary">スタート</button> <button id="cancelSelect" class="secondary">キャンセル</button></div></div>`;
    panel.classList.remove('hidden');
    let sel = null;
    panel.onclick = (e) => {
      const btn = e.target.closest('.choice');
      if (btn){ sel = btn.dataset.id; panel.querySelectorAll('.choice').forEach(b=>b.classList.toggle('selected', b===btn)); }
      if (e.target && e.target.id==='cancelSelect'){ panel.classList.add('hidden'); }
      if (e.target && e.target.id==='confirmSelect'){
        if (!sel) return;
        window.__battle.player = { ...CHARACTERS[sel] };
        window.__battle.enemy = { ...pickRandomEnemyExcluding(sel) };
        window.__battle.playerHp = window.__battle.player.maxHP;
        window.__battle.enemyHp = window.__battle.enemy.maxHP;
        panel.classList.add('hidden');
        startGame();
      }
    };
    panel.ondblclick = (e) => {
      const btn = e.target.closest('.choice');
      if (!btn) return;
      const pick = btn.dataset.id;
      if (!pick) return;
      panel.querySelectorAll('.choice').forEach(b=>b.classList.toggle('selected', b===btn));
      window.__battle.player = { ...CHARACTERS[pick] };
      window.__battle.enemy = { ...pickRandomEnemyExcluding(pick) };
      window.__battle.playerHp = window.__battle.player.maxHP;
      window.__battle.enemyHp = window.__battle.enemy.maxHP;
      panel.classList.add('hidden');
      startGame();
    };
  }
  function startEnemyAttacks(){
    stopEnemyAttacks();
    window.__battle.enemyIntervalMs = getEnemyIntervalMs();
    window.__battle.enemyTimer = setInterval(() => {
      if (!running || !window.__battle.enemy) return;
      window.__battle.playerHp = Math.max(0, (window.__battle.playerHp|0) - (window.__battle.enemy.atk|0));
      updateHpUI();
      try { flashFrame('left','fx-shake'); spawnSlash('left',''); sfx.play('enemy'); } catch(_){ }
      if (window.__battle.playerHp <= 0){ endBattle(false); }
    }, window.__battle.enemyIntervalMs);
  }
  function stopEnemyAttacks(){ if (window.__battle.enemyTimer){ clearInterval(window.__battle.enemyTimer); window.__battle.enemyTimer=null; } }
  function dealEnemyDamage(amount){
    window.__battle.enemyHp = Math.max(0, (window.__battle.enemyHp|0) - Math.max(0, amount|0));
    updateHpUI();
    try { flashFrame('right','fx-knockback-right'); spawnSlash('right','red'); } catch(_){ }
    if (window.__battle.enemyHp <= 0){
      // 敵撃破: プレイヤーを30%回復し、次の敵を出す
      try {
        if (window.__battle && window.__battle.player){
          const max = window.__battle.player.maxHP|0;
          window.__battle.playerHp = Math.min(max, Math.round((window.__battle.playerHp|0) + max * 0.3));
          updateHpUI();
        }
      } catch(_){}
      nextEnemy();
    }
  }
  let lastResultWin = null; // 直近の勝敗
  function endBattle(win){
    running = false; if (timerId){ clearInterval(timerId); timerId=null; }
    stopEnemyAttacks();
    elInput.disabled = true; btnStart.disabled = false; btnRestart.disabled = false;
    lastResultWin = !!win;
    try { sfx.play(win ? 'victory' : 'defeat'); } catch(_){ }
    const overlay = document.getElementById('gameOverOverlay');
    const title = overlay ? overlay.querySelector('.gameover-title') : null;
    if (title) title.textContent = win ? 'VICTORY' : 'GAME OVER';
    // Build/refresh continue UI on the overlay
    try {
      if (overlay){
        const card = overlay.querySelector('.gameover-card');
        if (card){
          // Hide old restart button if present
          const old = card.querySelector('#goRestartBtn'); if (old) old.style.display = 'none';
          // Ensure info
          let info = card.querySelector('.gameover-info');
          if (!info){
            info = document.createElement('div');
            info.className = 'gameover-info';
            info.innerHTML = '残りコンテニュー回数: <strong id="continuesLeft">2</strong>';
            const firstActions = card.querySelector('.gameover-actions');
            if (firstActions) { card.insertBefore(info, firstActions); } else { card.appendChild(info); }
          }
          elContinuesLeft = card.querySelector('#continuesLeft');
          // Ensure actions with two buttons
          let actions = card.querySelector('.gameover-actions');
          if (!actions){ actions = document.createElement('div'); actions.className = 'gameover-actions'; card.appendChild(actions); }
          actions.innerHTML = '';
          btnContinue = document.createElement('button'); btnContinue.id = 'continueBtn'; btnContinue.className = 'primary'; btnContinue.textContent = 'コンテニュー';
          btnStartOver = document.createElement('button'); btnStartOver.id = 'startOverBtn'; btnStartOver.className = 'secondary'; btnStartOver.textContent = '最初から';
          actions.appendChild(btnContinue); actions.appendChild(btnStartOver);

          // Wire events
          btnContinue.addEventListener('click', () => {
            const left = Math.max(0, 2 - continuesUsed);
            if (left <= 0) return;
            try { overlay.classList.add('hidden'); } catch(_){}
            restartGame(); // will consume a continue and set HP 50%
          });
          btnStartOver.addEventListener('click', () => {
            continuesUsed = 0; lastResultWin = null;
            try { window.__battle = { player:null, enemy:null, playerHp:0, enemyHp:0, enemyIntervalMs:getEnemyIntervalMs(), enemyTimer:null }; } catch(_){ }
            try { overlay.classList.add('hidden'); } catch(_){}
            // Return to ready state; user can press START to begin anew
            try { elInput.disabled = true; btnStart.disabled = false; btnRestart.disabled = false; } catch(_){}
          });

          // Update counts and button state
          const left = Math.max(0, 2 - continuesUsed);
          if (elContinuesLeft) elContinuesLeft.textContent = String(left);
          if (btnContinue) btnContinue.disabled = (left <= 0);
        }
        overlay.classList.remove('hidden');
      }
    } catch(_){ if (overlay) overlay.classList.remove('hidden'); }
  }

  // ===== Bind buttons =====
  btnStart.addEventListener('click', () => {
    if (!window.__battle.player) { openCharSelect(); return; }
    startGame();
  });
  btnRestart.addEventListener('click', restartGame);
  // Legacy restart button (hidden in overlay when continue UI is built)
  if (btnGoRestart) btnGoRestart.addEventListener('click', restartGame);
  if (btnCloseResults) btnCloseResults.addEventListener('click', restartGame);

  // ===== Init =====
  // Apply title and brighter text overrides
  try {
    document.title = 'クリプトニンジャバトルタイピング';
    const _h1 = document.querySelector('.header h1');
    if (_h1) _h1.textContent = 'クリプトニンジャバトルタイピング';
    const css = [
      '.kana{color:#fff!important;background:none!important;-webkit-background-clip:initial!important;background-clip:initial!important;text-shadow:0 4px 18px rgba(0,0,0,.6)!important;}',
      '.romaji{color:#f8fafc!important;background:#000!important;padding:6px 10px!important;border-radius:8px!important;text-shadow:0 2px 12px rgba(0,0,0,.6)!important;}',
      '.header h1{display:inline-block!important;position:relative!important;background:linear-gradient(90deg,#ff8bbb,#ffc58f,#fff4a8,#bbf7d0,#a5d8ff,#d8b4fe,#f9a8d4)!important;-webkit-background-clip:text!important;background-clip:text!important;color:transparent!important;-webkit-text-stroke:1.6px rgba(0,0,0,.55);text-shadow:0 1px 0 rgba(255,255,255,.4),0 2px 12px rgba(0,0,0,.55)!important;padding:4px 12px!important;border-radius:12px!important;}',
      '.header h1::before{content:"";position:absolute;inset:-2px -8px;border-radius:14px;background:rgba(255,255,255,.6);box-shadow:0 2px 12px rgba(0,0,0,.35);z-index:-1;}',
      '.time-text{color:#ffffff!important;}',
      '.stats div{color:#f1f5f9!important;}',
      '.stats span{color:#ffffff!important;}'
    ].join('');
    const style = document.createElement('style');
    style.setAttribute('data-injected','brighten');
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  } catch(_){ }
  setStats(); setTimeUI(); setLevelUI();
})();
