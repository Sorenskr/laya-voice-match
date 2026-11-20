(() => {
  'use strict';

  // 常用简繁自动转换字典
  const SIMP_TO_TRAD_MAP = {
    '语':'語','音':'音','匹':'匹','配':'配','添':'添','加':'加','好':'好','友':'友','关':'關','注':'注',
    '他':'他','超':'超','爱':'愛','了':'了','温':'溫','柔':'柔','晚':'晚','风':'風','腹':'腹','肌':'肌',
    '男':'男','女':'女','挂':'掛','断':'斷','已':'已','通':'通','话':'話','时':'時','长':'長','间':'間',
    '点':'點','此':'此','重':'重','连':'連','静':'靜','免':'免','提':'提','开':'開','视':'視','频':'頻',
    '发':'發','文':'文','字':'字','说':'說','什':'什','么':'麼','正':'正','在':'在','等':'等','待':'待',
    '对':'對','方':'方','接':'接','受':'受','邀':'邀','请':'請','取':'取','消':'消','头':'頭','像':'像',
    '昵':'暱','称':'稱','设':'設','置':'置','完':'完','成':'成','上':'上','传':'傳','手':'手','机':'機',
    '相':'相','册':'冊','输':'輸','入':'入','留':'留','空':'空','则':'則','隐':'隱','藏':'藏','界':'界',
    '面':'面','布':'佈','局':'局','样':'樣','式':'式','切':'切','换':'換','单':'單','键':'鍵','经':'經',
    '典':'典','版':'版','三':'三','细':'細','节':'節','元':'元','素':'素','显':'顯','示':'示','底':'底',
    '部':'部','左':'左','侧':'側','右':'右','图':'圖','标':'標','顶':'頂','题':'題','计':'計','秒':'秒',
    '数':'數','始':'始','应':'應','用':'用','并':'並','从':'從','自':'自','定':'定','义':'義','当':'當',
    '前':'前','系':'係','统':'統','击':'擊','改':'改','名':'名','随':'隨','呼':'呼','出':'出','你':'你',
    '我':'我','们':'們','干':'幹','嘛':'嘛','呢':'呢','吗':'嗎','刚':'剛','洗':'洗','澡':'澡','睡':'睡',
    '觉':'覺','吃':'吃','饭':'飯','没':'沒','有':'有','看':'看','见':'見','听':'聽','声':'聲','喜':'喜',
    '欢':'歡','聊':'聊','天':'天','宝':'寶','贝':'貝','哥':'哥','姐':'姐','弟':'弟','妹':'妹','帅':'帥',
    '美':'美','恋':'戀','网':'網','络':'絡','房':'房','号':'號','清':'清','气':'氣','泡':'泡','向':'向',
    '起':'起','拒':'拒','绝':'絕','同':'同','意':'意','线':'線','麦':'麥','克':'克','扬':'揚','器':'器',
    '岁':'歲','座':'座','蝎':'蠍','狮':'獅','处':'處','双':'雙','鱼':'魚','羊':'羊','牛':'牛','蟹':'蟹',
    '秤':'秤','射':'射','瓶':'瓶','呗':'唄','哈':'哈','啰':'囉','真':'真','呀':'呀','摄':'攝','像':'像',
    '虚':'虛','化':'化','白':'白','色':'色','背':'背','景':'景','闭':'閉','后':'後','置':'置','镜':'鏡',
    '只':'只','留':'留','全':'全','屏':'屏','小':'小','窗':'窗','调':'調','随':'隨','机':'機','分':'分',
    '钟':'鐘','定':'定','格':'格','热':'熱','门':'門','刚':'剛','打':'打','卡':'卡','画':'畫','原':'原'
  };

  function toTraditional(str) {
    if (!str) return '';
    let out = '';
    for (let i = 0; i < str.length; i++) {
      const ch = str[i];
      out += SIMP_TO_TRAD_MAP[ch] || ch;
    }
    return out;
  }

  const DEFAULT_PEER_AVATAR = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
      <defs>
        <radialGradient id="pg" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stop-color="#383842"/>
          <stop offset="100%" stop-color="#0d0d11"/>
        </radialGradient>
      </defs>
      <rect width="240" height="240" fill="url(#pg)"/>
      <circle cx="96" cy="94" r="34" fill="#f3edea"/>
      <circle cx="152" cy="102" r="31" fill="#e8dfd9"/>
      <path d="M40 230 C52 162, 128 162, 138 230 Z" fill="#18181f"/>
      <path d="M108 230 C118 170, 186 170, 202 230 Z" fill="#23232d"/>
    </svg>
  `);

  const DEFAULT_SELF_AVATAR = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
      <defs>
        <linearGradient id="sg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f3e8ff"/>
          <stop offset="55%" stop-color="#e9d5ff"/>
          <stop offset="100%" stop-color="#fbcfe8"/>
        </linearGradient>
      </defs>
      <rect width="240" height="240" fill="url(#sg)"/>
      <circle cx="120" cy="96" r="40" fill="#7c3aed" opacity="0.88"/>
      <path d="M48 228 C58 158, 182 158, 192 228 Z" fill="#9333ea" opacity="0.82"/>
    </svg>
  `);

  const SVG_VIDEO_CAM_ON = `
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="23 7 16 12 23 17 23 7"></polygon>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
    </svg>
  `;

  const SVG_VIDEO_CAM_OFF = `
    <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
  `;

  // DOM 元素集中索引
  const $ = (id) => document.getElementById(id);

  const appContainer = $('appContainer');
  const peerStage = $('peerStage');
  const selfStage = $('selfStage');
  const peerVideoEl = $('peerVideoEl');
  const selfVideoEl = $('selfVideoEl');
  const peerEmptyFallback = $('peerEmptyFallback');
  const peerFallbackAvatar = $('peerFallbackAvatar');
  const selfCameraOffView = $('selfCameraOffView');
  const selfFrostedAura = $('selfFrostedAura');
  const selfFrostedAvatarImg = $('selfFrostedAvatarImg');
  const peerPipHint = $('peerPipHint');
  const selfPipHint = $('selfPipHint');

  const topHeader = $('topHeader');
  const brandTitleText = $('brandTitleText');
  const secretResetCorner = $('secretResetCorner');
  const quickCleanUiBtn = $('quickCleanUiBtn');
  const topRightSettingBtn = $('topRightSettingBtn');
  const layoutEditBanner = $('layoutEditBanner');
  const bannerResetLayoutBtn = $('bannerResetLayoutBtn');
  const bannerFinishLayoutBtn = $('bannerFinishLayoutBtn');

  const avatarTrigger = $('avatarTrigger');
  const avatarImage = $('avatarImage');
  const addFriendBtn = $('addFriendBtn');
  const addFriendIcon = $('addFriendIcon');
  const addFriendLabel = $('addFriendLabel');
  const nicknameTrigger = $('nicknameTrigger');
  const nicknameDisplay = $('nicknameDisplay');
  const profileTagsPill = $('profileTagsPill');

  const waveformSection = $('waveformSection');
  const waveformBars = $('waveformBars');
  const waveBarElements = Array.from(waveformBars.querySelectorAll('.wave-bar'));
  const typingIndicator = $('typingIndicator');

  const chatMessagesStream = $('chatMessagesStream');
  const chatInputBox = $('chatInputBox');
  const sendMsgBtn = $('sendMsgBtn');
  const senderRoleToggleBtn = $('senderRoleToggleBtn');
  const dockVideoQuickBtn = $('dockVideoQuickBtn');
  const dockSpeakerBtn = $('dockSpeakerBtn');

  const timerTrigger = $('timerTrigger');
  const callTimerEl = $('callTimer');
  const hangupInfoEl = $('hangupInfo');
  const hangupStatusBadge = $('hangupStatusBadge');
  const hangupTimestamp = $('hangupTimestamp');

  const actionButtonsRow = $('actionButtonsRow');
  const muteBtn = $('muteBtn');
  const muteCircle = $('muteCircle');
  const muteLabel = $('muteLabel');
  const hangupBtn = $('hangupBtn');
  const hangupCircle = $('hangupCircle');
  const hangupLabel = $('hangupLabel');
  const videoCallBtn = $('videoCallBtn');
  const videoCircle = $('videoCircle');
  const videoLabel = $('videoLabel');

  const avatarFileInput = $('avatarFileInput');
  const selfAvatarFileInput = $('selfAvatarFileInput');
  const peerVideoFileInput = $('peerVideoFileInput');
  const selfVideoFileInput = $('selfVideoFileInput');
  const audioFileInput = $('audioFileInput');

  // 底部操作菜单
  const videoActionSheet = $('videoActionSheet');
  const sheetActionEnterVideoBtn = $('sheetActionEnterVideoBtn');
  const sheetActionUploadPeerVideoBtn = $('sheetActionUploadPeerVideoBtn');
  const sheetActionUploadSelfVideoBtn = $('sheetActionUploadSelfVideoBtn');
  const sheetActionLiveCameraBtn = $('sheetActionLiveCameraBtn');
  const sheetActionFlipCameraBtn = $('sheetActionFlipCameraBtn');
  const sheetActionToggleSelfCamOffBtn = $('sheetActionToggleSelfCamOffBtn');
  const sheetActionSwapViewBtn = $('sheetActionSwapViewBtn');
  const sheetActionTogglePipBtn = $('sheetActionTogglePipBtn');
  const sheetActionCleanUiBtn = $('sheetActionCleanUiBtn');
  const sheetActionLayoutEditBtn = $('sheetActionLayoutEditBtn');
  const sheetActionSwitchVoiceBtn = $('sheetActionSwitchVoiceBtn');
  const cancelVideoSheetBtn = $('cancelVideoSheetBtn');

  // 匹配雷达动画
  const matchingOverlay = $('matchingOverlay');
  const matchingStatusText = $('matchingStatusText');

  // 后台设置面板元素
  const settingsModal = $('settingsModal');
  const openTutorialBtn = $('openTutorialBtn');
  const closeSettingsBtn = $('closeSettingsBtn');

  const modeVoiceBtn = $('modeVoiceBtn');
  const modeVideoBtn = $('modeVideoBtn');
  const swapViewBtn = $('swapViewBtn');
  const togglePipVisBtn = $('togglePipVisBtn');
  const uploadPeerVideoBtn = $('uploadPeerVideoBtn');
  const togglePeerAudioBtn = $('togglePeerAudioBtn');
  const clearPeerVideoBtn = $('clearPeerVideoBtn');
  const uploadSelfVideoBtn = $('uploadSelfVideoBtn');
  const useLiveCamBtn = $('useLiveCamBtn');
  const toggleSelfCamOffBtn = $('toggleSelfCamOffBtn');
  const toggleSelfAudioBtn = $('toggleSelfAudioBtn');
  const toggleSelfMirrorBtn = $('toggleSelfMirrorBtn');
  const clearSelfVideoBtn = $('clearSelfVideoBtn');

  const peerMiniAvatarPreview = $('peerMiniAvatarPreview');
  const selfMiniAvatarPreview = $('selfMiniAvatarPreview');
  const sheetUploadAvatarBtn = $('sheetUploadAvatarBtn');
  const sheetUploadSelfAvatarBtn = $('sheetUploadSelfAvatarBtn');
  const nicknameInput = $('nicknameInput');
  const profileTagInput = $('profileTagInput');
  const toggleTagVisBtn = $('toggleTagVisBtn');

  const toggleCleanUiBtn = $('toggleCleanUiBtn');
  const toggleLogoVisBtn = $('toggleLogoVisBtn');
  const toggleBrandTextVisBtn = $('toggleBrandTextVisBtn');
  const toggleKeepTitleInCleanBtn = $('toggleKeepTitleInCleanBtn');
  const brandTitleInput = $('brandTitleInput');

  const startLayoutEditBtn = $('startLayoutEditBtn');
  const resetAllLayoutBtn = $('resetAllLayoutBtn');
  const pipScaleRange = $('pipScaleRange');
  const pipScaleValLabel = $('pipScaleValLabel');
  const peerVidScaleRange = $('peerVidScaleRange');
  const peerVidScaleValLabel = $('peerVidScaleValLabel');
  const selfContentScaleRange = $('selfContentScaleRange');
  const selfContentScaleValLabel = $('selfContentScaleValLabel');

  const customTimeStrInput = $('customTimeStrInput');
  const applyTimeStrBtn = $('applyTimeStrBtn');
  const toggleFreezeTimerBtn = $('toggleFreezeTimerBtn');
  const resetZeroBtn = $('resetZeroBtn');
  const randomMinInput = $('randomMinInput');
  const randomMaxInput = $('randomMaxInput');
  const randomTimeBtn = $('randomTimeBtn');
  const presetQuickShortBtn = $('presetQuickShortBtn');
  const presetQuickMidBtn = $('presetQuickMidBtn');
  const presetQuickLongBtn = $('presetQuickLongBtn');
  const toggleAutoRandomBtn = $('toggleAutoRandomBtn');
  const customHangupTimeInput = $('customHangupTimeInput');
  const randomHangupTimeBtn = $('randomHangupTimeBtn');
  const clearHangupTimeBtn = $('clearHangupTimeBtn');

  const sheetUploadAudioBtn = $('sheetUploadAudioBtn');
  const playMatchIntroBtn = $('playMatchIntroBtn');
  const autoReplyScriptInput = $('autoReplyScriptInput');
  const roomCodeInput = $('roomCodeInput');
  const clearChatBtn = $('clearChatBtn');
  const styleTripleBtn = $('styleTripleBtn');
  const styleSingleBtn = $('styleSingleBtn');
  const toggleAddFriendVisBtn = $('toggleAddFriendVisBtn');
  const bottomPadRange = $('bottomPadRange');
  const bottomPadValLabel = $('bottomPadValLabel');

  const tutorialModal = $('tutorialModal');
  const closeTutorialBtn = $('closeTutorialBtn');
  const zoomInTutorialBtn = $('zoomInTutorialBtn');
  const zoomOutTutorialBtn = $('zoomOutTutorialBtn');
  const zoomResetTutorialBtn = $('zoomResetTutorialBtn');
  const tutorialZoomInner = $('tutorialZoomInner');
  const tutorialStepImgs = Array.from(document.querySelectorAll('.tutorial-step-img'));

  // ==================== 全局应用状态 ====================
  const state = {
    callMode: 'voice',          // 'voice' | 'video'
    isViewSwapped: false,       // false: 对方全屏 + 我方小窗; true: 我方全屏 + 对方小窗
    isPipHidden: false,         // 是否隐藏右上角悬浮小窗
    peerVideoUrl: null,
    peerVideoMuted: false,
    selfVideoSource: 'none',    // 'none' | 'upload' | 'camera'
    selfVideoUrl: null,
    selfVideoMuted: true,
    selfMirror: false,
    selfFacingMode: 'user',
    localStream: null,
    isSelfCameraOff: true,      // 默认我方关闭摄像头 -> 显示白色虚化背景+头像

    isCleanUiMode: false,       // 隐藏前景文字与操作UI
    showLayaLogo: true,         // 独立控制 Laya Logo 显隐
    showBrandText: true,        // 正常模式下顶部文字显隐
    keepTitleInClean: false,    // 隐藏UI模式下是否保留文字（默认仅留Logo）

    elapsedSeconds: 22,
    isTimerFrozen: false,
    autoRandomOnStart: false,
    isCallEnded: false,
    isMuted: false,
    isSpeakerOn: true,
    isFollowed: false,
    sendAsPeer: false,
    autoReplyIndex: 0,
    isLayoutEditMode: false
  };

  function getDefaultLayout() {
    return {
      items: {},
      pip: { x: 0, y: 0, scale: 100 },
      peerMedia: { x: 0, y: 0, scale: 100 },
      selfMedia: { x: 0, y: 0, scale: 100 },
      selfAvatar: { x: 0, y: 0 }
    };
  }
  let layoutConfig = getDefaultLayout();

  let customAudioEl = null;
  let timerInterval = null;
  let waveInterval = null;

  const clientId = 'laya_' + Math.random().toString(36).slice(2, 10);
  let currentRoom = 'laya888';
  let mqttClient = null;
  let bcChannel = null;

  function savePref(key, val) {
    try { localStorage.setItem(key, String(val)); } catch (e) {}
  }

  function loadPref(key, fallback) {
    try {
      const val = localStorage.getItem(key);
      return val === null ? fallback : val;
    } catch (e) {
      return fallback;
    }
  }

  function removePref(key) {
    try { localStorage.removeItem(key); } catch (e) {}
  }

  function saveScreenState() {
    const payload = {
      callMode: state.callMode,
      isViewSwapped: state.isViewSwapped,
      isPipHidden: state.isPipHidden,
      peerVideoMuted: state.peerVideoMuted,
      selfVideoSource: state.selfVideoSource === 'upload' ? 'upload' : 'none',
      selfVideoMuted: state.selfVideoMuted,
      selfMirror: state.selfMirror,
      isSelfCameraOff: state.isSelfCameraOff,
      isCleanUiMode: state.isCleanUiMode
    };
    savePref('laya_screen_state_v1', JSON.stringify(payload));
  }

  function loadScreenState() {
    const raw = loadPref('laya_screen_state_v1', '');
    if (!raw) return;
    try {
      const saved = JSON.parse(raw);
      if (saved.callMode === 'video' || saved.callMode === 'voice') state.callMode = saved.callMode;
      if (typeof saved.isViewSwapped === 'boolean') state.isViewSwapped = saved.isViewSwapped;
      if (typeof saved.isPipHidden === 'boolean') state.isPipHidden = saved.isPipHidden;
      if (typeof saved.peerVideoMuted === 'boolean') state.peerVideoMuted = saved.peerVideoMuted;
      if (saved.selfVideoSource === 'upload') state.selfVideoSource = 'upload';
      if (typeof saved.selfVideoMuted === 'boolean') state.selfVideoMuted = saved.selfVideoMuted;
      if (typeof saved.selfMirror === 'boolean') state.selfMirror = saved.selfMirror;
      if (typeof saved.isSelfCameraOff === 'boolean') state.isSelfCameraOff = saved.isSelfCameraOff;
      if (typeof saved.isCleanUiMode === 'boolean') state.isCleanUiMode = saved.isCleanUiMode;
    } catch (e) {}
  }

  // IndexedDB 轻量存储（用于下次打开页面继续播放之前上传的对方/我方视频）
  function openMediaDb() {
    return new Promise((resolve, reject) => {
      if (!window.indexedDB) {
        reject(new Error('no indexedDB'));
        return;
      }
      const req = window.indexedDB.open('laya_media_db_v1', 1);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains('media')) {
          db.createObjectStore('media');
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async function idbPutMedia(key, blob) {
    try {
      const db = await openMediaDb();
      return await new Promise((resolve) => {
        const tx = db.transaction('media', 'readwrite');
        tx.objectStore('media').put(blob, key);
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
      });
    } catch (e) {
      return false;
    }
  }

  async function idbGetMedia(key) {
    try {
      const db = await openMediaDb();
      return await new Promise((resolve) => {
        const tx = db.transaction('media', 'readonly');
        const req = tx.objectStore('media').get(key);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => resolve(null);
      });
    } catch (e) {
      return null;
    }
  }

  async function idbDeleteMedia(key) {
    try {
      const db = await openMediaDb();
      return await new Promise((resolve) => {
        const tx = db.transaction('media', 'readwrite');
        tx.objectStore('media').delete(key);
        tx.oncomplete = () => resolve(true);
        tx.onerror = () => resolve(false);
      });
    } catch (e) {
      return false;
    }
  }

  // ==================== 通话时间格式化、解析与随机 ====================
  function formatDuration(totalSeconds) {
    const sec = Math.max(0, Math.floor(totalSeconds));
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;
    const mm = String(minutes).padStart(2, '0');
    const ss = String(seconds).padStart(2, '0');
    if (hours > 0) {
      const hh = String(hours).padStart(2, '0');
      return `${hh}:${mm}:${ss}`;
    }
    return `${mm}:${ss}`;
  }

  function parseTimeStringToSeconds(raw) {
    if (!raw) return NaN;
    const cleaned = String(raw).trim().replace(/[：]/g, ':');
    if (/^\d+$/.test(cleaned)) {
      return Math.max(0, parseInt(cleaned, 10));
    }
    const parts = cleaned.split(':').map((p) => parseInt(p, 10));
    if (parts.some((n) => isNaN(n) || n < 0)) return NaN;
    if (parts.length === 2) {
      return parts[0] * 60 + parts[1];
    }
    if (parts.length === 3) {
      return parts[0] * 3600 + parts[1] * 60 + parts[2];
    }
    return NaN;
  }

  function getHangupClockStr() {
    const customVal = customHangupTimeInput.value.trim();
    if (customVal) return customVal;
    const now = new Date();
    return [
      String(now.getHours()).padStart(2, '0'),
      String(now.getMinutes()).padStart(2, '0'),
      String(now.getSeconds()).padStart(2, '0')
    ].join(':');
  }

  function renderTimer() {
    const formatted = formatDuration(state.elapsedSeconds);
    callTimerEl.textContent = formatted;
    if (document.activeElement !== customTimeStrInput) {
      customTimeStrInput.value = formatted;
    }
    if (state.isCallEnded) {
      hangupStatusBadge.textContent = `已掛斷 · 通話時長 ${formatted}`;
      hangupTimestamp.textContent = `掛斷時間 ${getHangupClockStr()}`;
    }
  }

  function startCallTimer() {
    if (timerInterval) clearInterval(timerInterval);
    state.isCallEnded = false;
    hangupInfoEl.classList.remove('visible');
    hangupCircle.classList.remove('is-ended');
    hangupLabel.textContent = '掛斷';
    waveformBars.classList.toggle('paused', state.isMuted);
    avatarTrigger.classList.toggle('speaking-glow', !state.isMuted);
    renderTimer();

    timerInterval = setInterval(() => {
      if (!state.isCallEnded && !state.isTimerFrozen) {
        state.elapsedSeconds += 1;
        renderTimer();
      }
    }, 1000);
  }

  function generateRandomSeconds(minSec, maxSec) {
    const low = Math.max(0, Math.min(minSec, maxSec));
    const high = Math.max(low, Math.max(minSec, maxSec));
    return Math.floor(Math.random() * (high - low + 1)) + low;
  }

  function applyRandomMinutesRange(minMin, maxMin) {
    const minSec = Math.round(Math.max(0, minMin) * 60);
    const maxSec = Math.round(Math.max(minMin, maxMin) * 60);
    state.elapsedSeconds = generateRandomSeconds(minSec, maxSec);
    renderTimer();
  }

  function triggerHangup() {
    state.isCallEnded = true;
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    if (customAudioEl && !customAudioEl.paused) {
      customAudioEl.pause();
    }
    renderTimer();
    hangupInfoEl.classList.add('visible');
    hangupCircle.classList.add('is-ended');
    hangupLabel.textContent = '已掛斷(點此重連)';
    waveformBars.classList.add('paused');
    avatarTrigger.classList.remove('speaking-glow');
    resetWaveBarsToStatic();
  }

  // ==================== 11根梭形声波动画 ====================
  const baseEnvelope = [7, 14, 24, 34, 44, 52, 44, 34, 24, 14, 7];

  function resetWaveBarsToStatic() {
    waveBarElements.forEach((bar, i) => {
      bar.style.height = `${Math.max(5, Math.round(baseEnvelope[i] * 0.35))}px`;
    });
  }

  function stepWaveformOnce() {
    waveBarElements.forEach((bar, i) => {
      const base = baseEnvelope[i];
      if (i === 0 || i === waveBarElements.length - 1) {
        bar.style.height = `${5 + Math.floor(Math.random() * 4)}px`;
      } else {
        const factor = 0.55 + Math.random() * 0.65;
        const h = Math.max(7, Math.min(54, Math.round(base * factor)));
        bar.style.height = `${h}px`;
      }
    });
  }

  function animateWaveform() {
    if (waveInterval) clearInterval(waveInterval);
    waveInterval = setInterval(() => {
      if (state.isCallEnded || state.isMuted) {
        resetWaveBarsToStatic();
        return;
      }
      stepWaveformOnce();
    }, 140);
  }

  // 隐形重置通话
  function silentResetCall() {
    state.isCallEnded = false;
    state.isMuted = false;
    if (state.autoRandomOnStart) {
      const minM = parseFloat(randomMinInput.value) || 1;
      const maxM = parseFloat(randomMaxInput.value) || 45;
      applyRandomMinutesRange(minM, maxM);
    } else {
      state.elapsedSeconds = 0;
    }

    hangupInfoEl.classList.remove('visible');
    hangupStatusBadge.textContent = '';
    hangupTimestamp.textContent = '';

    muteCircle.classList.remove('active-toggle');
    muteLabel.textContent = '靜音';
    hangupCircle.classList.remove('is-ended');
    hangupLabel.textContent = '掛斷';
    avatarTrigger.classList.add('speaking-glow');

    waveformBars.classList.remove('paused');
    startCallTimer();
    stepWaveformOnce();
    animateWaveform();

    if (customAudioEl) {
      try {
        customAudioEl.currentTime = 0;
        customAudioEl.play().catch(() => {});
      } catch (e) {}
    }
  }

  // ==================== 聊天弹幕与实时双机同步 ====================
  function appendChatBubble(text, type, senderName) {
    const tcText = toTraditional(text);
    const row = document.createElement('div');
    row.className = `chat-bubble-row ${type}`;

    const bubble = document.createElement('div');
    bubble.className = `chat-bubble ${type}`;

    if (type === 'system') {
      bubble.textContent = tcText;
    } else {
      const senderSpan = document.createElement('span');
      senderSpan.className = 'bubble-sender';
      const label = type === 'self' ? '我：' : `${toTraditional(senderName || nicknameDisplay.textContent || '對方')}：`;
      senderSpan.textContent = label;
      bubble.appendChild(senderSpan);
      bubble.appendChild(document.createTextNode(tcText));
    }

    row.appendChild(bubble);
    chatMessagesStream.appendChild(row);
    chatMessagesStream.scrollTop = chatMessagesStream.scrollHeight;
  }

  function broadcastPayload(payload) {
    const msgStr = JSON.stringify({ ...payload, senderId: clientId, room: currentRoom });
    if (bcChannel) {
      try { bcChannel.postMessage(msgStr); } catch (e) {}
    }
    if (mqttClient && mqttClient.connected) {
      try {
        mqttClient.publish(`laya/voice/room/${currentRoom}`, msgStr);
      } catch (e) {}
    }
  }

  function handleIncomingPayload(rawStr) {
    try {
      const data = typeof rawStr === 'string' ? JSON.parse(rawStr) : rawStr;
      if (!data || data.senderId === clientId || data.room !== currentRoom) return;
      if (data.kind === 'chat') {
        appendChatBubble(data.text, 'peer', data.nickname || nicknameDisplay.textContent || '對方');
      }
    } catch (e) {}
  }

  function setupRealtimeSync() {
    if ('BroadcastChannel' in window) {
      bcChannel = new BroadcastChannel('laya_voice_channel');
      bcChannel.onmessage = (ev) => handleIncomingPayload(ev.data);
    }
    if (window.mqtt) {
      try {
        mqttClient = window.mqtt.connect('wss://broker.emqx.io:8084/mqtt', {
          clientId: clientId,
          clean: true,
          connectTimeout: 4000,
          reconnectPeriod: 3000
        });
        mqttClient.on('connect', () => {
          mqttClient.subscribe(`laya/voice/room/${currentRoom}`);
        });
        mqttClient.on('message', (topic, message) => {
          handleIncomingPayload(message.toString());
        });
      } catch (err) {}
    }
  }

  function sendChatMessage() {
    const raw = chatInputBox.value.trim();
    if (!raw) return;
    const tcMsg = toTraditional(raw);
    chatInputBox.value = '';

    if (state.sendAsPeer) {
      appendChatBubble(tcMsg, 'peer', nicknameDisplay.textContent || '對方');
    } else {
      appendChatBubble(tcMsg, 'self');
      broadcastPayload({
        kind: 'chat',
        text: tcMsg,
        nickname: nicknameDisplay.textContent || '他超愛了'
      });

      const scriptRaw = autoReplyScriptInput.value.trim();
      if (scriptRaw) {
        const lines = scriptRaw.split('/').map((s) => s.trim()).filter(Boolean);
        if (lines.length > 0) {
          const replyLine = lines[state.autoReplyIndex % lines.length];
          state.autoReplyIndex += 1;
          setTimeout(() => {
            typingIndicator.classList.add('visible');
          }, 600);
          setTimeout(() => {
            typingIndicator.classList.remove('visible');
            appendChatBubble(replyLine, 'peer', nicknameDisplay.textContent || '對方');
          }, 2200);
        }
      }
    }
  }

  // ==================== 双端视频通话舞台与白色虚化头像控制 ====================
  function safePlayVideo(videoEl, preferMuted) {
    if (!videoEl) return;
    videoEl.muted = !!preferMuted;
    const playPromise = videoEl.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        videoEl.muted = true;
        videoEl.play().catch(() => {});
      });
    }
  }

  function stopLocalCameraStream() {
    if (state.localStream) {
      state.localStream.getTracks().forEach((t) => t.stop());
      state.localStream = null;
    }
    if (selfVideoEl.srcObject) {
      selfVideoEl.srcObject = null;
    }
  }

  function updateStageLayoutClasses() {
    if (state.isViewSwapped) {
      peerStage.classList.remove('is-main-stage');
      peerStage.classList.add('is-pip-stage');
      selfStage.classList.remove('is-pip-stage');
      selfStage.classList.add('is-main-stage');
    } else {
      peerStage.classList.remove('is-pip-stage');
      peerStage.classList.add('is-main-stage');
      selfStage.classList.remove('is-main-stage');
      selfStage.classList.add('is-pip-stage');
    }
    appContainer.classList.toggle('hide-pip-window', state.isPipHidden);
    togglePipVisBtn.classList.toggle('active-opt', !state.isPipHidden);
    togglePipVisBtn.textContent = state.isPipHidden ? '隐藏小窗' : '显示小窗';
  }

  function renderPeerStage() {
    if (state.peerVideoUrl) {
      peerEmptyFallback.classList.remove('active');
      peerVideoEl.style.display = 'block';
      peerVideoEl.muted = state.peerVideoMuted;
      if (state.callMode === 'video' && peerVideoEl.paused) {
        safePlayVideo(peerVideoEl, state.peerVideoMuted);
      }
    } else {
      peerVideoEl.style.display = 'none';
      peerEmptyFallback.classList.add('active');
    }
    togglePeerAudioBtn.classList.toggle('active-opt', !state.peerVideoMuted);
    togglePeerAudioBtn.textContent = state.peerVideoMuted ? '对方视频原声：静音' : '对方视频原声：开';
  }

  function renderSelfStage() {
    const hasVideoSource =
      (state.selfVideoSource === 'upload' && !!state.selfVideoUrl) ||
      (state.selfVideoSource === 'camera' && !!state.localStream);

    const showFrostedAvatar = state.isSelfCameraOff || !hasVideoSource;

    if (showFrostedAvatar) {
      selfVideoEl.style.display = 'none';
      selfCameraOffView.classList.add('active');
    } else {
      selfCameraOffView.classList.remove('active');
      selfVideoEl.style.display = 'block';
      const mirrorOn = state.selfMirror || state.selfVideoSource === 'camera';
      selfVideoEl.style.setProperty('--self-mirror-x', mirrorOn ? '-1' : '1');
      selfVideoEl.muted = state.selfVideoSource === 'camera' ? true : state.selfVideoMuted;
      if (state.callMode === 'video' && selfVideoEl.paused) {
        safePlayVideo(selfVideoEl, selfVideoEl.muted);
      }
    }

    toggleSelfCamOffBtn.classList.toggle('active-opt', state.isSelfCameraOff);
    toggleSelfCamOffBtn.textContent = state.isSelfCameraOff ? '摄像头已关(白底虚化)' : '关摄像头(白底虚化)';

    toggleSelfAudioBtn.classList.toggle('active-opt', !state.selfVideoMuted);
    toggleSelfAudioBtn.textContent = state.selfVideoMuted ? '我的视频声音：静音' : '我的视频声音：开';

    toggleSelfMirrorBtn.classList.toggle('active-opt', state.selfMirror);
    toggleSelfMirrorBtn.textContent = state.selfMirror ? '我的画面镜像：开' : '我的画面镜像：关';
  }

  function updateCallModeUI() {
    const isVideo = state.callMode === 'video';
    appContainer.classList.toggle('mode-video', isVideo);

    modeVoiceBtn.classList.toggle('active-opt', !isVideo);
    modeVideoBtn.classList.toggle('active-opt', isVideo);

    if (isVideo) {
      videoCircle.classList.toggle('active-toggle', !state.isSelfCameraOff);
      videoCircle.classList.toggle('cam-off-state', state.isSelfCameraOff);
      videoCircle.innerHTML = state.isSelfCameraOff ? SVG_VIDEO_CAM_OFF : SVG_VIDEO_CAM_ON;
      videoLabel.textContent = state.isSelfCameraOff ? '開攝像頭' : '關攝像頭';
    } else {
      videoCircle.classList.remove('active-toggle', 'cam-off-state');
      videoCircle.innerHTML = SVG_VIDEO_CAM_ON;
      videoLabel.textContent = '開視頻';
    }

    updateStageLayoutClasses();
    renderPeerStage();
    renderSelfStage();
  }

  function enterVideoMode() {
    state.callMode = 'video';
    updateCallModeUI();
    saveScreenState();
  }

  function switchToVoiceMode() {
    state.callMode = 'voice';
    if (!peerVideoEl.paused) peerVideoEl.pause();
    if (!selfVideoEl.paused) selfVideoEl.pause();
    updateCallModeUI();
    saveScreenState();
  }

  function setPeerVideoFromFile(file, skipPersist) {
    if (!file) return;
    if (state.peerVideoUrl) {
      try { URL.revokeObjectURL(state.peerVideoUrl); } catch (e) {}
    }
    state.peerVideoUrl = URL.createObjectURL(file);
    peerVideoEl.src = state.peerVideoUrl;
    if (!skipPersist) {
      idbPutMedia('peerVideo', file);
      enterVideoMode();
    } else {
      updateCallModeUI();
    }
    if (state.callMode === 'video') {
      safePlayVideo(peerVideoEl, state.peerVideoMuted);
    }
  }

  function clearPeerVideo() {
    if (state.peerVideoUrl) {
      try { URL.revokeObjectURL(state.peerVideoUrl); } catch (e) {}
      state.peerVideoUrl = null;
    }
    peerVideoEl.pause();
    peerVideoEl.removeAttribute('src');
    idbDeleteMedia('peerVideo');
    renderPeerStage();
  }

  function setSelfVideoFromFile(file, skipPersist) {
    if (!file) return;
    stopLocalCameraStream();
    if (state.selfVideoUrl) {
      try { URL.revokeObjectURL(state.selfVideoUrl); } catch (e) {}
    }
    state.selfVideoUrl = URL.createObjectURL(file);
    state.selfVideoSource = 'upload';
    if (!skipPersist) {
      state.isSelfCameraOff = false;
      idbPutMedia('selfVideo', file);
    }
    selfVideoEl.srcObject = null;
    selfVideoEl.src = state.selfVideoUrl;
    if (!skipPersist) {
      enterVideoMode();
    } else {
      updateCallModeUI();
    }
    if (state.callMode === 'video' && !state.isSelfCameraOff) {
      safePlayVideo(selfVideoEl, state.selfVideoMuted);
    }
  }

  function clearSelfVideo() {
    stopLocalCameraStream();
    if (state.selfVideoUrl) {
      try { URL.revokeObjectURL(state.selfVideoUrl); } catch (e) {}
      state.selfVideoUrl = null;
    }
    state.selfVideoSource = 'none';
    state.isSelfCameraOff = true;
    selfVideoEl.pause();
    selfVideoEl.removeAttribute('src');
    idbDeleteMedia('selfVideo');
    updateCallModeUI();
    saveScreenState();
  }

  async function startRealCamera(facingMode) {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      state.isSelfCameraOff = true;
      enterVideoMode();
      return;
    }
    try {
      stopLocalCameraStream();
      const targetFacing = facingMode || state.selfFacingMode || 'user';
      state.selfFacingMode = targetFacing;
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: targetFacing },
        audio: false
      });
      state.localStream = stream;
      state.selfVideoSource = 'camera';
      state.isSelfCameraOff = false;
      selfVideoEl.removeAttribute('src');
      selfVideoEl.srcObject = stream;
      enterVideoMode();
      safePlayVideo(selfVideoEl, true);
    } catch (err) {
      state.isSelfCameraOff = true;
      enterVideoMode();
    }
  }

  function toggleSelfCameraOff(forceOff) {
    const nextOff = typeof forceOff === 'boolean' ? forceOff : !state.isSelfCameraOff;
    state.isSelfCameraOff = nextOff;
    if (!nextOff) {
      const hasReadyVideo =
        (state.selfVideoSource === 'upload' && !!state.selfVideoUrl) ||
        (state.selfVideoSource === 'camera' && !!state.localStream);
      if (!hasReadyVideo) {
        startRealCamera(state.selfFacingMode);
        return;
      }
      if (state.selfVideoSource === 'upload' && selfVideoEl.paused) {
        safePlayVideo(selfVideoEl, state.selfVideoMuted);
      }
    }
    updateCallModeUI();
    saveScreenState();
  }

  // ==================== 前景文字 / UI 隐藏与 Laya Logo 独立显隐 ====================
  function applyUiVisibilityState() {
    appContainer.classList.toggle('clean-ui-mode', state.isCleanUiMode);
    appContainer.classList.toggle('hide-laya-logo', !state.showLayaLogo);
    appContainer.classList.toggle('hide-brand-text', !state.showBrandText);
    appContainer.classList.toggle('keep-title-in-clean', state.keepTitleInClean);

    toggleCleanUiBtn.classList.toggle('active-opt', state.isCleanUiMode);
    toggleCleanUiBtn.textContent = state.isCleanUiMode ? '隐藏前景文字与UI：开' : '隐藏前景文字与UI：关';

    toggleLogoVisBtn.classList.toggle('active-opt', state.showLayaLogo);
    toggleLogoVisBtn.textContent = state.showLayaLogo ? 'Laya Logo：显示' : 'Laya Logo：隐藏';

    toggleBrandTextVisBtn.classList.toggle('active-opt', state.showBrandText);
    toggleBrandTextVisBtn.textContent = state.showBrandText ? '顶部标题文字：显示' : '顶部标题文字：隐藏';

    toggleKeepTitleInCleanBtn.classList.toggle('active-opt', state.keepTitleInClean);
    toggleKeepTitleInCleanBtn.textContent = state.keepTitleInClean ? '隐藏UI时保留文字：开' : '隐藏UI时保留文字：关';

    savePref('laya_show_logo_v4', state.showLayaLogo ? '1' : '0');
    savePref('laya_show_brand_text_v4', state.showBrandText ? '1' : '0');
    savePref('laya_keep_title_clean_v4', state.keepTitleInClean ? '1' : '0');
  }

  // 双端头像更新辅助
  function setPeerAvatarDataUrl(url) {
    const finalUrl = url || DEFAULT_PEER_AVATAR;
    avatarImage.src = finalUrl;
    peerFallbackAvatar.src = finalUrl;
    peerMiniAvatarPreview.src = finalUrl;
  }

  function setSelfAvatarDataUrl(url) {
    const finalUrl = url || DEFAULT_SELF_AVATAR;
    selfFrostedAvatarImg.src = finalUrl;
    selfFrostedAura.style.backgroundImage = `url("${finalUrl}")`;
    selfMiniAvatarPreview.src = finalUrl;
  }

  function readImageAsDataUrl(file, callback) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => callback(e.target.result);
    reader.readAsDataURL(file);
  }

  // ==================== 快捷菜单与主界面交互 ====================
  function openVideoActionSheet() {
    const isVideo = state.callMode === 'video';
    sheetActionEnterVideoBtn.style.display = isVideo ? 'none' : 'flex';
    sheetActionSwitchVoiceBtn.style.display = isVideo ? 'flex' : 'none';
    sheetActionFlipCameraBtn.style.display = state.selfVideoSource === 'camera' && !state.isSelfCameraOff ? 'flex' : 'none';
    sheetActionToggleSelfCamOffBtn.innerHTML = state.isSelfCameraOff
      ? '<span>📷 开启我的视频 / 摄像头画面</span>'
      : '<span>🤍 关闭我的摄像头（白色虚化背景+头像）</span>';
    sheetActionTogglePipBtn.innerHTML = state.isPipHidden
      ? '<span>🪟 显示右上角悬浮小窗</span>'
      : '<span>🪟 隐藏右上角悬浮小窗</span>';
    sheetActionCleanUiBtn.innerHTML = state.isCleanUiMode
      ? '<span>👁️ 恢复显示前景文字与操作UI</span>'
      : '<span>✨ 隐藏前景文字与UI（仅留 Laya Logo）</span>';
    sheetActionLayoutEditBtn.innerHTML = state.isLayoutEditMode
      ? '<span>🔒 完成并锁定当前画面位置</span>'
      : '<span>✋ 自由拖动调整画面位置</span>';

    videoActionSheet.classList.add('open');
  }

  function closeVideoActionSheet() {
    videoActionSheet.classList.remove('open');
  }

  // 右侧圆形主按钮：语音模式下弹出视频菜单；视频模式下直接切换开关摄像头（白色虚化头像 <-> 视频画面）
  videoCallBtn.addEventListener('click', () => {
    if (state.callMode === 'video') {
      toggleSelfCameraOff();
    } else {
      openVideoActionSheet();
    }
  });

  dockVideoQuickBtn.addEventListener('click', openVideoActionSheet);
  cancelVideoSheetBtn.addEventListener('click', closeVideoActionSheet);
  videoActionSheet.addEventListener('click', (e) => {
    if (e.target === videoActionSheet) closeVideoActionSheet();
  });

  // 菜单内各个操作
  sheetActionEnterVideoBtn.addEventListener('click', () => {
    closeVideoActionSheet();
    enterVideoMode();
  });
  sheetActionSwitchVoiceBtn.addEventListener('click', () => {
    closeVideoActionSheet();
    switchToVoiceMode();
  });
  sheetActionUploadPeerVideoBtn.addEventListener('click', () => {
    closeVideoActionSheet();
    peerVideoFileInput.click();
  });
  sheetActionUploadSelfVideoBtn.addEventListener('click', () => {
    closeVideoActionSheet();
    selfVideoFileInput.click();
  });
  sheetActionLiveCameraBtn.addEventListener('click', () => {
    closeVideoActionSheet();
    startRealCamera('user');
  });
  sheetActionFlipCameraBtn.addEventListener('click', () => {
    closeVideoActionSheet();
    const nextFacing = state.selfFacingMode === 'user' ? 'environment' : 'user';
    startRealCamera(nextFacing);
  });
  sheetActionToggleSelfCamOffBtn.addEventListener('click', () => {
    closeVideoActionSheet();
    if (state.callMode !== 'video') state.callMode = 'video';
    toggleSelfCameraOff();
  });
  sheetActionSwapViewBtn.addEventListener('click', () => {
    closeVideoActionSheet();
    if (state.callMode !== 'video') state.callMode = 'video';
    state.isViewSwapped = !state.isViewSwapped;
    updateCallModeUI();
    saveScreenState();
  });
  sheetActionTogglePipBtn.addEventListener('click', () => {
    closeVideoActionSheet();
    state.isPipHidden = !state.isPipHidden;
    updateStageLayoutClasses();
    saveScreenState();
  });
  sheetActionCleanUiBtn.addEventListener('click', () => {
    closeVideoActionSheet();
    state.isCleanUiMode = !state.isCleanUiMode;
    applyUiVisibilityState();
    saveScreenState();
  });
  sheetActionLayoutEditBtn.addEventListener('click', () => {
    closeVideoActionSheet();
    setLayoutEditMode(!state.isLayoutEditMode);
  });

  // 点击右上角悬浮小窗 -> 对调主副视角（若刚拖动结束则忽略本次 click）
  let lastDragMovedTs = 0;
  function handleStageTap(stageEl) {
    if (state.isLayoutEditMode) return;
    if (Date.now() - lastDragMovedTs < 350) return;
    if (stageEl.classList.contains('is-pip-stage')) {
      state.isViewSwapped = !state.isViewSwapped;
      updateStageLayoutClasses();
      saveScreenState();
    }
  }
  peerStage.addEventListener('click', (e) => {
    if (peerStage.classList.contains('is-pip-stage')) {
      e.stopPropagation();
      handleStageTap(peerStage);
    }
  });
  selfStage.addEventListener('click', (e) => {
    if (selfStage.classList.contains('is-pip-stage')) {
      e.stopPropagation();
      handleStageTap(selfStage);
    }
  });

  // 顶部快捷眼睛图标：一键隐藏前景文字与 UI
  quickCleanUiBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    state.isCleanUiMode = !state.isCleanUiMode;
    applyUiVisibilityState();
    saveScreenState();
  });

  // 隐藏前景 UI 模式后，双击屏幕空白处无痕恢复 / 切换
  let lastBgTapTs = 0;
  appContainer.addEventListener('click', (e) => {
    if (!state.isCleanUiMode) return;
    if (e.target.closest('#topHeader') || e.target.closest('#secretResetCorner')) return;
    const now = Date.now();
    if (now - lastBgTapTs < 340) {
      lastBgTapTs = 0;
      state.isCleanUiMode = false;
      applyUiVisibilityState();
      saveScreenState();
    } else {
      lastBgTapTs = now;
    }
  });

  // ==================== 文件上传监听 ====================
  peerVideoFileInput.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) setPeerVideoFromFile(file);
    peerVideoFileInput.value = '';
  });

  selfVideoFileInput.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) setSelfVideoFromFile(file);
    selfVideoFileInput.value = '';
  });

  avatarFileInput.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      readImageAsDataUrl(file, (dataUrl) => {
        setPeerAvatarDataUrl(dataUrl);
        savePref('laya_voice_avatar', dataUrl);
      });
    }
    avatarFileInput.value = '';
  });

  selfAvatarFileInput.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      readImageAsDataUrl(file, (dataUrl) => {
        setSelfAvatarDataUrl(dataUrl);
        savePref('laya_self_avatar', dataUrl);
      });
    }
    selfAvatarFileInput.value = '';
  });

  // ==================== 聊天、静音、挂断、关注与声波 ====================
  sendMsgBtn.addEventListener('click', sendChatMessage);
  chatInputBox.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendChatMessage();
    }
  });

  let roleTapCount = 0;
  let roleTapTimer = null;
  let roleTapInitialSendAsPeer = false;

  function applySenderRoleUI() {
    senderRoleToggleBtn.classList.toggle('peer-mode', state.sendAsPeer);
    senderRoleToggleBtn.textContent = state.sendAsPeer ? '對方' : '我';
    chatInputBox.placeholder = state.sendAsPeer ? '輸入對方回覆的文字...' : '發文字...';
  }

  function handleRoleBtnTap() {
    if (roleTapCount === 0) {
      roleTapInitialSendAsPeer = state.sendAsPeer;
    }
    roleTapCount += 1;
    if (roleTapTimer) clearTimeout(roleTapTimer);

    if (roleTapCount >= 3) {
      roleTapCount = 0;
      state.sendAsPeer = roleTapInitialSendAsPeer;
      applySenderRoleUI();
      setLayoutEditMode(!state.isLayoutEditMode);
      return;
    }

    roleTapTimer = setTimeout(() => {
      roleTapCount = 0;
    }, 850);

    if (!state.isLayoutEditMode) {
      state.sendAsPeer = !state.sendAsPeer;
      applySenderRoleUI();
    }
  }

  senderRoleToggleBtn.addEventListener('click', handleRoleBtnTap);

  dockSpeakerBtn.addEventListener('click', () => {
    state.isSpeakerOn = !state.isSpeakerOn;
    dockSpeakerBtn.classList.toggle('speaker-off', !state.isSpeakerOn);
  });

  addFriendBtn.addEventListener('click', () => {
    state.isFollowed = !state.isFollowed;
    addFriendBtn.classList.toggle('followed', state.isFollowed);
    addFriendIcon.textContent = state.isFollowed ? '✓' : '+';
    addFriendLabel.textContent = state.isFollowed ? '已發送申請' : '添加好友/關注';
  });

  hangupBtn.addEventListener('click', () => {
    if (!state.isCallEnded) {
      triggerHangup();
    } else {
      startCallTimer();
    }
  });

  muteBtn.addEventListener('click', () => {
    state.isMuted = !state.isMuted;
    muteCircle.classList.toggle('active-toggle', state.isMuted);
    muteLabel.textContent = state.isMuted ? '已靜音' : '靜音';
    waveformBars.classList.toggle('paused', state.isMuted || state.isCallEnded);
    avatarTrigger.classList.toggle('speaking-glow', !state.isMuted && !state.isCallEnded);
  });

  // ==================== 后台设置面板控制 ====================
  function openSettings() {
    customTimeStrInput.value = formatDuration(state.elapsedSeconds);
    settingsModal.classList.add('open');
  }

  function closeSettings() {
    settingsModal.classList.remove('open');
  }

  topRightSettingBtn.addEventListener('click', openSettings);
  timerTrigger.addEventListener('click', openSettings);
  closeSettingsBtn.addEventListener('click', closeSettings);
  settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) closeSettings();
  });

  // 卡片 1：模式与双端视频控制
  modeVoiceBtn.addEventListener('click', switchToVoiceMode);
  modeVideoBtn.addEventListener('click', enterVideoMode);
  swapViewBtn.addEventListener('click', () => {
    if (state.callMode !== 'video') state.callMode = 'video';
    state.isViewSwapped = !state.isViewSwapped;
    updateCallModeUI();
    saveScreenState();
  });
  togglePipVisBtn.addEventListener('click', () => {
    state.isPipHidden = !state.isPipHidden;
    updateStageLayoutClasses();
    saveScreenState();
  });

  uploadPeerVideoBtn.addEventListener('click', () => peerVideoFileInput.click());
  togglePeerAudioBtn.addEventListener('click', () => {
    state.peerVideoMuted = !state.peerVideoMuted;
    peerVideoEl.muted = state.peerVideoMuted;
    renderPeerStage();
    saveScreenState();
  });
  clearPeerVideoBtn.addEventListener('click', clearPeerVideo);

  uploadSelfVideoBtn.addEventListener('click', () => selfVideoFileInput.click());
  useLiveCamBtn.addEventListener('click', () => startRealCamera(state.selfFacingMode));
  toggleSelfCamOffBtn.addEventListener('click', () => {
    if (state.callMode !== 'video') state.callMode = 'video';
    toggleSelfCameraOff();
  });
  toggleSelfAudioBtn.addEventListener('click', () => {
    state.selfVideoMuted = !state.selfVideoMuted;
    if (state.selfVideoSource === 'upload') {
      selfVideoEl.muted = state.selfVideoMuted;
    }
    renderSelfStage();
    saveScreenState();
  });
  toggleSelfMirrorBtn.addEventListener('click', () => {
    state.selfMirror = !state.selfMirror;
    renderSelfStage();
    saveScreenState();
  });
  clearSelfVideoBtn.addEventListener('click', clearSelfVideo);

  // 卡片 2：双端头像、昵称与个人标签
  avatarTrigger.addEventListener('click', () => avatarFileInput.click());
  sheetUploadAvatarBtn.addEventListener('click', () => avatarFileInput.click());
  sheetUploadSelfAvatarBtn.addEventListener('click', () => selfAvatarFileInput.click());

  function updateNickname(val, syncInput) {
    const rawVal = (val || '').trim();
    const tcVal = toTraditional(rawVal);
    if (syncInput !== false) {
      nicknameInput.value = rawVal;
    }
    if (tcVal) {
      nicknameDisplay.textContent = tcVal;
      nicknameDisplay.classList.remove('hidden');
    } else {
      nicknameDisplay.textContent = '';
      nicknameDisplay.classList.add('hidden');
    }
    savePref('laya_voice_nickname_raw_v4', rawVal);
    savePref('laya_voice_nickname_tc_v2', tcVal);
  }

  nicknameTrigger.addEventListener('click', () => {
    const current = loadPref('laya_voice_nickname_raw_v4', loadPref('laya_voice_nickname_tc_v2', '他超爱了'));
    const next = prompt('请输入要显示的昵称（前台会自动转为繁体，留空可隐藏）：', current);
    if (next !== null) updateNickname(next, true);
  });
  nicknameInput.addEventListener('input', (e) => updateNickname(e.target.value, false));

  profileTagInput.addEventListener('input', (e) => {
    profileTagsPill.textContent = toTraditional(e.target.value.trim());
  });
  toggleTagVisBtn.addEventListener('click', () => {
    const hidden = profileTagsPill.classList.toggle('hidden');
    toggleTagVisBtn.classList.toggle('active-opt', !hidden);
    toggleTagVisBtn.textContent = hidden ? '显示标签' : '已显示标签';
  });

  // 卡片 3：前景文字 / UI 与 Laya Logo 控制
  toggleCleanUiBtn.addEventListener('click', () => {
    state.isCleanUiMode = !state.isCleanUiMode;
    applyUiVisibilityState();
    saveScreenState();
  });
  toggleLogoVisBtn.addEventListener('click', () => {
    state.showLayaLogo = !state.showLayaLogo;
    applyUiVisibilityState();
  });
  toggleBrandTextVisBtn.addEventListener('click', () => {
    state.showBrandText = !state.showBrandText;
    applyUiVisibilityState();
  });
  toggleKeepTitleInCleanBtn.addEventListener('click', () => {
    state.keepTitleInClean = !state.keepTitleInClean;
    applyUiVisibilityState();
  });
  brandTitleInput.addEventListener('input', (e) => {
    const rawTitle = e.target.value || 'Laya-语音匹配';
    const val = toTraditional(rawTitle);
    brandTitleText.textContent = val;
    document.title = val;
    savePref('laya_voice_title_raw_v4', rawTitle);
    savePref('laya_voice_title_tc_v2', val);
  });

  // 卡片 4：通话时间自定义与随机
  applyTimeStrBtn.addEventListener('click', () => {
    const parsed = parseTimeStringToSeconds(customTimeStrInput.value);
    if (!isNaN(parsed)) {
      state.elapsedSeconds = parsed;
      startCallTimer();
    }
  });

  toggleFreezeTimerBtn.addEventListener('click', () => {
    state.isTimerFrozen = !state.isTimerFrozen;
    toggleFreezeTimerBtn.classList.toggle('active-opt', state.isTimerFrozen);
    toggleFreezeTimerBtn.textContent = state.isTimerFrozen ? '定格时间：开' : '定格时间：关';
    savePref('laya_timer_frozen_v4', state.isTimerFrozen ? '1' : '0');
  });

  resetZeroBtn.addEventListener('click', () => {
    state.elapsedSeconds = 0;
    startCallTimer();
  });

  randomTimeBtn.addEventListener('click', () => {
    const minM = Math.max(0, parseFloat(randomMinInput.value) || 0);
    const maxM = Math.max(minM, parseFloat(randomMaxInput.value) || 45);
    applyRandomMinutesRange(minM, maxM);
  });

  presetQuickShortBtn.addEventListener('click', () => {
    state.elapsedSeconds = generateRandomSeconds(5, 120);
    renderTimer();
  });
  presetQuickMidBtn.addEventListener('click', () => {
    applyRandomMinutesRange(3, 30);
  });
  presetQuickLongBtn.addEventListener('click', () => {
    applyRandomMinutesRange(30, 120);
  });

  toggleAutoRandomBtn.addEventListener('click', () => {
    state.autoRandomOnStart = !state.autoRandomOnStart;
    toggleAutoRandomBtn.classList.toggle('active-opt', state.autoRandomOnStart);
    toggleAutoRandomBtn.textContent = state.autoRandomOnStart ? '打开自动随机：开' : '打开自动随机：关';
    savePref('laya_auto_random_v4', state.autoRandomOnStart ? '1' : '0');
  });

  customHangupTimeInput.addEventListener('input', () => renderTimer());

  randomHangupTimeBtn.addEventListener('click', () => {
    const hh = String(Math.floor(Math.random() * 24)).padStart(2, '0');
    const mm = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    const ss = String(Math.floor(Math.random() * 60)).padStart(2, '0');
    customHangupTimeInput.value = `${hh}:${mm}:${ss}`;
    renderTimer();
  });

  clearHangupTimeBtn.addEventListener('click', () => {
    customHangupTimeInput.value = '';
    renderTimer();
  });

  // 卡片 5：音频素材、3秒动画、房间号、布局与底部距离
  sheetUploadAudioBtn.addEventListener('click', () => {
    closeSettings();
    audioFileInput.click();
  });

  audioFileInput.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (customAudioEl) customAudioEl.pause();
    const audioUrl = URL.createObjectURL(file);
    customAudioEl = new Audio(audioUrl);
    customAudioEl.loop = false;
    customAudioEl.play().catch(() => {});
    audioFileInput.value = '';
  });

  waveformSection.addEventListener('click', () => {
    if (!customAudioEl) return;
    if (customAudioEl.paused) {
      customAudioEl.play().catch(() => {});
    } else {
      customAudioEl.pause();
    }
  });

  playMatchIntroBtn.addEventListener('click', () => {
    closeSettings();
    matchingStatusText.textContent = '正在為您語音匹配中...';
    matchingOverlay.classList.add('active');
    setTimeout(() => {
      matchingStatusText.textContent = `匹配成功！正在接通「${nicknameDisplay.textContent || '他超愛了'}」...`;
    }, 1700);
    setTimeout(() => {
      matchingOverlay.classList.remove('active');
      state.elapsedSeconds = 0;
      startCallTimer();
    }, 2800);
  });

  roomCodeInput.addEventListener('change', (e) => {
    const nextRoom = e.target.value.trim() || 'laya888';
    if (mqttClient && mqttClient.connected) {
      try { mqttClient.unsubscribe(`laya/voice/room/${currentRoom}`); } catch (err) {}
      currentRoom = nextRoom;
      try { mqttClient.subscribe(`laya/voice/room/${currentRoom}`); } catch (err) {}
    } else {
      currentRoom = nextRoom;
    }
  });

  clearChatBtn.addEventListener('click', () => {
    chatMessagesStream.innerHTML = '';
    closeSettings();
  });

  styleSingleBtn.addEventListener('click', () => {
    actionButtonsRow.classList.add('single-mode');
    styleSingleBtn.classList.add('active-opt');
    styleTripleBtn.classList.remove('active-opt');
  });

  styleTripleBtn.addEventListener('click', () => {
    actionButtonsRow.classList.remove('single-mode');
    styleTripleBtn.classList.add('active-opt');
    styleSingleBtn.classList.remove('active-opt');
  });

  toggleAddFriendVisBtn.addEventListener('click', () => {
    const hidden = addFriendBtn.classList.toggle('hidden');
    toggleAddFriendVisBtn.classList.toggle('active-opt', !hidden);
    toggleAddFriendVisBtn.textContent = hidden ? '已隐藏“+ 添加好友”' : '显示“+ 添加好友”';
  });

  bottomPadRange.addEventListener('input', (e) => {
    const px = e.target.value;
    bottomPadValLabel.textContent = px + 'px';
    appContainer.style.setProperty('--custom-bottom-pad', px + 'px');
    savePref('laya_bottom_pad_v3', px);
  });

  // 隐藏入口 1 & 2：标题连击 5 次 / 右上角隐形热区静默重置
  let headerSecretTapCount = 0;
  let headerSecretTapTimer = null;
  topHeader.addEventListener('click', (e) => {
    e.stopPropagation();
    headerSecretTapCount += 1;
    if (headerSecretTapTimer) clearTimeout(headerSecretTapTimer);
    if (headerSecretTapCount >= 5) {
      headerSecretTapCount = 0;
      silentResetCall();
      return;
    }
    headerSecretTapTimer = setTimeout(() => {
      headerSecretTapCount = 0;
    }, 1800);
  });

  secretResetCorner.addEventListener('click', (e) => {
    e.stopPropagation();
    silentResetCall();
  });

  // ==================== 使用教程弹窗放大缩小 ====================
  let tutorialZoomPercent = 100;
  function applyTutorialZoom(percent) {
    tutorialZoomPercent = Math.max(50, Math.min(300, percent));
    tutorialZoomInner.style.width = tutorialZoomPercent + '%';
    zoomResetTutorialBtn.textContent = tutorialZoomPercent + '%';
    tutorialStepImgs.forEach((img) => {
      img.style.cursor = tutorialZoomPercent > 100 ? 'zoom-out' : 'zoom-in';
    });
  }

  openTutorialBtn.addEventListener('click', () => {
    applyTutorialZoom(100);
    tutorialModal.classList.add('open');
  });
  closeTutorialBtn.addEventListener('click', () => tutorialModal.classList.remove('open'));
  zoomInTutorialBtn.addEventListener('click', () => applyTutorialZoom(tutorialZoomPercent + 25));
  zoomOutTutorialBtn.addEventListener('click', () => applyTutorialZoom(tutorialZoomPercent - 25));
  zoomResetTutorialBtn.addEventListener('click', () => applyTutorialZoom(100));
  tutorialStepImgs.forEach((img) => {
    img.addEventListener('click', () => {
      applyTutorialZoom(tutorialZoomPercent === 100 ? 175 : 100);
    });
  });

  // ==================== 画面位置自由拖动与缩放微调 ====================
  const draggableUiItems = Array.from(document.querySelectorAll('.draggable-ui-item'));

  function saveCustomLayout() {
    savePref('laya_custom_layout_v1', JSON.stringify(layoutConfig));
  }

  function loadCustomLayout() {
    const raw = loadPref('laya_custom_layout_v1', '');
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      const base = getDefaultLayout();
      layoutConfig = {
        items: parsed.items && typeof parsed.items === 'object' ? parsed.items : {},
        pip: { ...base.pip, ...(parsed.pip || {}) },
        peerMedia: { ...base.peerMedia, ...(parsed.peerMedia || {}) },
        selfMedia: { ...base.selfMedia, ...(parsed.selfMedia || {}) },
        selfAvatar: { ...base.selfAvatar, ...(parsed.selfAvatar || {}) }
      };
    } catch (e) {
      layoutConfig = getDefaultLayout();
    }
  }

  function applyCustomLayout() {
    draggableUiItems.forEach((el) => {
      const key = el.dataset.dragKey;
      const pos = (key && layoutConfig.items[key]) || { x: 0, y: 0 };
      el.style.setProperty('--drag-x', `${Math.round(pos.x)}px`);
      el.style.setProperty('--drag-y', `${Math.round(pos.y)}px`);
    });

    appContainer.style.setProperty('--pip-dx', `${Math.round(layoutConfig.pip.x)}px`);
    appContainer.style.setProperty('--pip-dy', `${Math.round(layoutConfig.pip.y)}px`);
    appContainer.style.setProperty('--pip-scale', (layoutConfig.pip.scale / 100).toFixed(2));

    appContainer.style.setProperty('--peer-vid-x', `${Math.round(layoutConfig.peerMedia.x)}px`);
    appContainer.style.setProperty('--peer-vid-y', `${Math.round(layoutConfig.peerMedia.y)}px`);
    appContainer.style.setProperty('--peer-vid-scale', (layoutConfig.peerMedia.scale / 100).toFixed(2));

    appContainer.style.setProperty('--self-vid-x', `${Math.round(layoutConfig.selfMedia.x)}px`);
    appContainer.style.setProperty('--self-vid-y', `${Math.round(layoutConfig.selfMedia.y)}px`);
    appContainer.style.setProperty('--self-vid-scale', (layoutConfig.selfMedia.scale / 100).toFixed(2));

    appContainer.style.setProperty('--self-avatar-x', `${Math.round(layoutConfig.selfAvatar.x)}px`);
    appContainer.style.setProperty('--self-avatar-y', `${Math.round(layoutConfig.selfAvatar.y)}px`);
    appContainer.style.setProperty('--self-avatar-scale', (layoutConfig.selfMedia.scale / 100).toFixed(2));

    pipScaleRange.value = layoutConfig.pip.scale;
    pipScaleValLabel.textContent = `${layoutConfig.pip.scale}%`;
    peerVidScaleRange.value = layoutConfig.peerMedia.scale;
    peerVidScaleValLabel.textContent = `${layoutConfig.peerMedia.scale}%`;
    selfContentScaleRange.value = layoutConfig.selfMedia.scale;
    selfContentScaleValLabel.textContent = `${layoutConfig.selfMedia.scale}%`;
  }

  function resetAllLayoutPositions() {
    layoutConfig = getDefaultLayout();
    removePref('laya_custom_layout_v1');
    state.isViewSwapped = false;
    state.isPipHidden = false;
    applyCustomLayout();
    updateCallModeUI();
    saveScreenState();
    setLayoutEditMode(false);
  }

  function setLayoutEditMode(enabled) {
    state.isLayoutEditMode = !!enabled;
    appContainer.classList.toggle('layout-edit-mode', state.isLayoutEditMode);
  }

  startLayoutEditBtn.addEventListener('click', () => {
    closeSettings();
    setLayoutEditMode(true);
  });

  bannerFinishLayoutBtn.addEventListener('click', () => setLayoutEditMode(false));
  bannerResetLayoutBtn.addEventListener('click', resetAllLayoutPositions);
  resetAllLayoutBtn.addEventListener('click', resetAllLayoutPositions);

  pipScaleRange.addEventListener('input', (e) => {
    layoutConfig.pip.scale = parseInt(e.target.value, 10) || 100;
    applyCustomLayout();
    saveCustomLayout();
  });

  peerVidScaleRange.addEventListener('input', (e) => {
    layoutConfig.peerMedia.scale = parseInt(e.target.value, 10) || 100;
    applyCustomLayout();
    saveCustomLayout();
  });

  selfContentScaleRange.addEventListener('input', (e) => {
    layoutConfig.selfMedia.scale = parseInt(e.target.value, 10) || 100;
    applyCustomLayout();
    saveCustomLayout();
  });

  // 通用流畅指针拖拽引擎（日常支持直接拖动小窗；编辑模式下支持拖动全部元素、视频与虚化头像）
  let activeDrag = null;

  appContainer.addEventListener('pointerdown', (e) => {
    if (e.button && e.button !== 0) return;
    if (e.target.closest('#layoutEditBanner')) return;

    const pipTarget = e.target.closest('.video-stage.is-pip-stage');
    if (!state.isLayoutEditMode) {
      if (!pipTarget || state.callMode !== 'video') return;
      activeDrag = {
        kind: 'pip',
        el: pipTarget,
        startX: e.clientX,
        startY: e.clientY,
        baseX: layoutConfig.pip.x,
        baseY: layoutConfig.pip.y,
        moved: false
      };
      return;
    }

    let dragSpec = null;
    if (pipTarget) {
      dragSpec = { kind: 'pip', el: pipTarget, baseX: layoutConfig.pip.x, baseY: layoutConfig.pip.y };
    } else {
      const uiItem = e.target.closest('.draggable-ui-item');
      if (uiItem) {
        const key = uiItem.dataset.dragKey;
        const prev = layoutConfig.items[key] || { x: 0, y: 0 };
        dragSpec = { kind: 'item', key, el: uiItem, baseX: prev.x, baseY: prev.y };
      } else {
        const mainStage = e.target.closest('.video-stage.is-main-stage');
        if (mainStage === peerStage) {
          dragSpec = { kind: 'peerMedia', el: peerVideoEl, baseX: layoutConfig.peerMedia.x, baseY: layoutConfig.peerMedia.y };
        } else if (mainStage === selfStage) {
          if (selfCameraOffView.classList.contains('active')) {
            dragSpec = { kind: 'selfAvatar', el: selfFrostedAvatarImg, baseX: layoutConfig.selfAvatar.x, baseY: layoutConfig.selfAvatar.y };
          } else {
            dragSpec = { kind: 'selfMedia', el: selfVideoEl, baseX: layoutConfig.selfMedia.x, baseY: layoutConfig.selfMedia.y };
          }
        }
      }
    }

    if (!dragSpec) return;
    activeDrag = { ...dragSpec, startX: e.clientX, startY: e.clientY, moved: false };
    dragSpec.el.classList.add('is-dragging-now');
  });

  window.addEventListener('pointermove', (e) => {
    if (!activeDrag) return;
    const dx = e.clientX - activeDrag.startX;
    const dy = e.clientY - activeDrag.startY;
    if (!activeDrag.moved && Math.hypot(dx, dy) >= 5) {
      activeDrag.moved = true;
      activeDrag.el.classList.add('is-dragging-now');
    }
    if (!activeDrag.moved) return;

    const nx = Math.round(activeDrag.baseX + dx);
    const ny = Math.round(activeDrag.baseY + dy);

    if (activeDrag.kind === 'pip') {
      layoutConfig.pip.x = nx;
      layoutConfig.pip.y = ny;
    } else if (activeDrag.kind === 'item') {
      layoutConfig.items[activeDrag.key] = { x: nx, y: ny };
    } else if (activeDrag.kind === 'peerMedia') {
      layoutConfig.peerMedia.x = nx;
      layoutConfig.peerMedia.y = ny;
    } else if (activeDrag.kind === 'selfMedia') {
      layoutConfig.selfMedia.x = nx;
      layoutConfig.selfMedia.y = ny;
    } else if (activeDrag.kind === 'selfAvatar') {
      layoutConfig.selfAvatar.x = nx;
      layoutConfig.selfAvatar.y = ny;
    }
    applyCustomLayout();
  });

  function finishActiveDrag() {
    if (!activeDrag) return;
    activeDrag.el.classList.remove('is-dragging-now');
    if (activeDrag.moved) {
      lastDragMovedTs = Date.now();
      saveCustomLayout();
    }
    activeDrag = null;
  }

  window.addEventListener('pointerup', finishActiveDrag);
  window.addEventListener('pointercancel', finishActiveDrag);

  // 编辑模式下及刚拖完小窗的一瞬间，阻止子按钮触发点击事件，但放行“我”连击3次用于退出锁定
  appContainer.addEventListener('click', (e) => {
    if (e.target.closest('#layoutEditBanner')) return;
    if (state.isLayoutEditMode) {
      if (e.target.closest('#senderRoleToggleBtn') && Date.now() - lastDragMovedTs >= 350) {
        handleRoleBtnTap();
      }
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    if (Date.now() - lastDragMovedTs < 350) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  // ==================== 初始化 ====================
  async function restoreSavedMediaBlobs() {
    const [savedPeerBlob, savedSelfBlob] = await Promise.all([
      idbGetMedia('peerVideo'),
      idbGetMedia('selfVideo')
    ]);
    if (savedPeerBlob) {
      setPeerVideoFromFile(savedPeerBlob, true);
    }
    if (savedSelfBlob) {
      setSelfVideoFromFile(savedSelfBlob, true);
    }
  }

  function initApp() {
    loadScreenState();
    loadCustomLayout();
    applyCustomLayout();
    const savedPad = loadPref('laya_bottom_pad_v3', '50');
    bottomPadRange.value = savedPad;
    bottomPadValLabel.textContent = savedPad + 'px';
    appContainer.style.setProperty('--custom-bottom-pad', savedPad + 'px');

    setPeerAvatarDataUrl(loadPref('laya_voice_avatar', ''));
    setSelfAvatarDataUrl(loadPref('laya_self_avatar', ''));

    const savedNickname = loadPref('laya_voice_nickname_raw_v4', loadPref('laya_voice_nickname_tc_v2', '他超爱了'));
    updateNickname(savedNickname, true);

    const savedRawTitle = loadPref('laya_voice_title_raw_v4', 'Laya-语音匹配');
    const savedTcTitle = toTraditional(loadPref('laya_voice_title_tc_v2', savedRawTitle)) || 'Laya-語音匹配';
    brandTitleText.textContent = savedTcTitle;
    brandTitleInput.value = savedRawTitle;
    document.title = savedTcTitle;

    state.showLayaLogo = loadPref('laya_show_logo_v4', '1') === '1';
    state.showBrandText = loadPref('laya_show_brand_text_v4', '1') === '1';
    state.keepTitleInClean = loadPref('laya_keep_title_clean_v4', '0') === '1';
    applyUiVisibilityState();

    state.isTimerFrozen = loadPref('laya_timer_frozen_v4', '0') === '1';
    toggleFreezeTimerBtn.classList.toggle('active-opt', state.isTimerFrozen);
    toggleFreezeTimerBtn.textContent = state.isTimerFrozen ? '定格时间：开' : '定格时间：关';

    state.autoRandomOnStart = loadPref('laya_auto_random_v4', '0') === '1';
    toggleAutoRandomBtn.classList.toggle('active-opt', state.autoRandomOnStart);
    toggleAutoRandomBtn.textContent = state.autoRandomOnStart ? '打开自动随机：开' : '打开自动随机：关';

    if (state.autoRandomOnStart) {
      applyRandomMinutesRange(1, 45);
    }

    updateCallModeUI();
    startCallTimer();
    animateWaveform();
    setupRealtimeSync();
    restoreSavedMediaBlobs();
  }

  initApp();
})();
