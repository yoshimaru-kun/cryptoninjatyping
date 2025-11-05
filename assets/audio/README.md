Audio assets for sound effects

Place your audio files in this folder. Supported formats: mp3, ogg, wav.

Default filenames the app will try to load automatically:
- slash_player.(mp3|ogg|wav)  // Played when the player hits the enemy
- slash_enemy.(mp3|ogg|wav)   // Played when the enemy hits the player
- level_up.(mp3|ogg|wav)      // Played when level increases
- victory.(mp3|ogg|wav)       // Played when the player wins
- defeat.(mp3|ogg|wav)        // Played when the player loses or time up
- start.(mp3|ogg|wav)         // Played when the game starts

Notes
- Files are loaded via fetch; when opening index.html directly from the filesystem, some browsers block fetch().
  If sounds do not play, serve the folder via a local HTTP server.
- If a file is missing, the game falls back to simple WebAudio beeps.

Japanese filename aliases also work out of the box:
- Player hit: 剣で斬る3.mp3
- Enemy hit: 打撃8.mp3
- Level up: レベルアップ.mp3
- Victory: 勝利.mp3
- Defeat: 敗北.mp3
- Start: スタート.mp3
