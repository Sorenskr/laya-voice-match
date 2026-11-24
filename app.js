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
    peerVideoBlob: null,
    peerVideoMuted: false,
    selfVideoSource: 'none',    // 'none' | 'upload' | 'camera'
    selfVideoUrl: null,
    selfVideoBlob: null,
    selfVideoMuted: true,
    selfMirror: false,
    selfFacingMode: 'user',
    localStream: null,
    isSelfCameraOff: true,      // 默认我方关闭摄像头 -> 显示白色虚化背景+头像
    customAudioBlob: null,
    iphoneModel: '393x852',     // 默认苹果 iPhone 16 Pro / 15 Pro 真机尺寸

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
  let pendingAutoReplyTimers = [];

  function clearPendingAutoReplyTimers() {
    if (pendingAutoReplyTimers.length > 0) {
      pendingAutoReplyTimers.forEach((tid) => clearTimeout(tid));
      pendingAutoReplyTimers = [];
    }
    if (typingIndicator) {
      typingIndicator.classList.remove('visible');
    }
  }

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
    const wasEnded = state.isCallEnded;
    state.isCallEnded = false;
    hangupInfoEl.classList.remove('visible');
    hangupCircle.classList.remove('is-ended');
    hangupLabel.textContent = '掛斷';
    waveformBars.classList.toggle('paused', state.isMuted);
    avatarTrigger.classList.toggle('speaking-glow', !state.isMuted);
    renderTimer();

    // 若从已挂断状态重连/恢复通话，自动恢复视频画面与语音播放
    if (wasEnded) {
      if (state.callMode === 'video') {
        if (state.peerVideoUrl && peerVideoEl.paused) {
          safePlayVideo(peerVideoEl, state.peerVideoMuted);
        }
        const hasSelfVid =
          !state.isSelfCameraOff &&
          ((state.selfVideoSource === 'upload' && !!state.selfVideoUrl) ||
            (state.selfVideoSource === 'camera' && !!state.localStream));
        if (hasSelfVid && selfVideoEl.paused) {
          safePlayVideo(selfVideoEl, state.selfVideoSource === 'camera' ? true : state.selfVideoMuted);
        }
      }
      if (customAudioEl && customAudioEl.paused) {
        customAudioEl.play().catch(() => {});
      }
    }
    syncPcStudioUI();

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
    // 挂断电话后：立即暂停主画面视频、右上角小窗视频、语音音频与正在输入动画，画面彻底定格静止
    clearPendingAutoReplyTimers();
    if (peerVideoEl && !peerVideoEl.paused) {
      try { peerVideoEl.pause(); } catch (e) {}
    }
    if (selfVideoEl && !selfVideoEl.paused) {
      try { selfVideoEl.pause(); } catch (e) {}
    }
    if (customAudioEl && !customAudioEl.paused) {
      try { customAudioEl.pause(); } catch (e) {}
    }
    renderTimer();
    hangupInfoEl.classList.add('visible');
    hangupCircle.classList.add('is-ended');
    hangupLabel.textContent = '已掛斷(點此重連)';
    waveformBars.classList.add('paused');
    avatarTrigger.classList.remove('speaking-glow');
    resetWaveBarsToStatic();
    syncPcStudioUI();
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
      if (scriptRaw && !state.isCallEnded) {
        const lines = scriptRaw.split('/').map((s) => s.trim()).filter(Boolean);
        if (lines.length > 0) {
          const replyLine = lines[state.autoReplyIndex % lines.length];
          state.autoReplyIndex += 1;
          const t1 = setTimeout(() => {
            if (!state.isCallEnded) typingIndicator.classList.add('visible');
          }, 600);
          const t2 = setTimeout(() => {
            typingIndicator.classList.remove('visible');
            if (!state.isCallEnded) {
              appendChatBubble(replyLine, 'peer', nicknameDisplay.textContent || '對方');
            }
          }, 2200);
          pendingAutoReplyTimers.push(t1, t2);
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
      if (state.isCallEnded) {
        if (!peerVideoEl.paused) {
          try { peerVideoEl.pause(); } catch (e) {}
        }
      } else if (state.callMode === 'video' && peerVideoEl.paused) {
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
      if (state.isCallEnded) {
        if (!selfVideoEl.paused) {
          try { selfVideoEl.pause(); } catch (e) {}
        }
      } else if (state.callMode === 'video' && selfVideoEl.paused) {
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
    syncPcStudioUI();
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
    state.peerVideoBlob = file;
    state.peerVideoUrl = URL.createObjectURL(file);
    peerVideoEl.src = state.peerVideoUrl;
    if (!skipPersist) {
      state.peerVideoMuted = false;
      idbPutMedia('peerVideo', file);
      enterVideoMode();
      showPcToast('✅ 已加载主画面视频（原声已开启）');
    } else {
      updateCallModeUI();
    }
    if (state.callMode === 'video') {
      safePlayVideo(peerVideoEl, state.peerVideoMuted);
    }
    syncPcStudioUI();
  }

  function clearPeerVideo() {
    if (state.peerVideoUrl) {
      try { URL.revokeObjectURL(state.peerVideoUrl); } catch (e) {}
      state.peerVideoUrl = null;
    }
    state.peerVideoBlob = null;
    peerVideoEl.pause();
    peerVideoEl.removeAttribute('src');
    idbDeleteMedia('peerVideo');
    renderPeerStage();
    syncPcStudioUI();
  }

  function setSelfVideoFromFile(file, skipPersist) {
    if (!file) return;
    stopLocalCameraStream();
    if (state.selfVideoUrl) {
      try { URL.revokeObjectURL(state.selfVideoUrl); } catch (e) {}
    }
    state.selfVideoBlob = file;
    state.selfVideoUrl = URL.createObjectURL(file);
    state.selfVideoSource = 'upload';
    if (!skipPersist) {
      state.isSelfCameraOff = false;
      idbPutMedia('selfVideo', file);
      showPcToast('✅ 已加载右上角小窗视频');
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
    syncPcStudioUI();
  }

  function clearSelfVideo() {
    stopLocalCameraStream();
    if (state.selfVideoUrl) {
      try { URL.revokeObjectURL(state.selfVideoUrl); } catch (e) {}
      state.selfVideoUrl = null;
    }
    state.selfVideoBlob = null;
    state.selfVideoSource = 'none';
    state.isSelfCameraOff = true;
    selfVideoEl.pause();
    selfVideoEl.removeAttribute('src');
    idbDeleteMedia('selfVideo');
    updateCallModeUI();
    saveScreenState();
    syncPcStudioUI();
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
    const pcThumb = $('pcPeerAvatarThumb');
    if (pcThumb) pcThumb.src = finalUrl;
  }

  function setSelfAvatarDataUrl(url) {
    const finalUrl = url || DEFAULT_SELF_AVATAR;
    selfFrostedAvatarImg.src = finalUrl;
    selfFrostedAura.style.backgroundImage = `url("${finalUrl}")`;
    selfMiniAvatarPreview.src = finalUrl;
    const pcThumb = $('pcSelfAvatarThumb');
    if (pcThumb) pcThumb.src = finalUrl;
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

  function loadCustomAudioFromFile(file, skipToast) {
    if (!file) return;
    if (customAudioEl) customAudioEl.pause();
    state.customAudioBlob = file;
    const audioUrl = URL.createObjectURL(file);
    customAudioEl = new Audio(audioUrl);
    customAudioEl.loop = true;
    customAudioEl.play().catch(() => {});
    idbPutMedia('customAudio', file);
    if (!skipToast) showPcToast('🎵 已加载语音/背景音频（导出视频时将自动混入音轨）');
    syncPcStudioUI();
  }

  audioFileInput.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    loadCustomAudioFromFile(file, false);
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
    syncPcStudioUI();
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

  // ==================== 电脑端工作台、真机苹果尺寸与带声音视频导出引擎 ====================
  // 导出尺寸严格采用 16 倍数宏块对齐且高度 <= 1920（100% 兼容所有显卡/浏览器的 H.264 Level 4.0 硬件编码器，杜绝 2340 超高导致的编码失败）
  const IPHONE_MODELS = {
    '393x852': { w: 393, h: 852, outW: 880, outH: 1920, label: '🍎 iPhone 16 Pro / 15 Pro 真机尺寸 · 393 × 852 (导出 880 × 1920)' },
    '430x932': { w: 430, h: 932, outW: 880, outH: 1920, label: '🍎 iPhone 16 Pro Max 真机尺寸 · 430 × 932 (导出 880 × 1920)' },
    '390x844': { w: 390, h: 844, outW: 880, outH: 1920, label: '🍎 iPhone 16 / 15 / 14 真机尺寸 · 390 × 844 (导出 880 × 1920)' },
    '375x812': { w: 375, h: 812, outW: 880, outH: 1920, label: '🍎 iPhone 13 mini / 11 Pro / X · 375 × 812 (导出 880 × 1920)' },
    '375x667': { w: 375, h: 667, outW: 1088, outH: 1920, label: '🍎 iPhone SE / 8 经典苹果屏 · 375 × 667 (导出 1088 × 1920)' },
    '390x693': { w: 390, h: 693, outW: 1088, outH: 1920, label: '📱 短视频 9:16 标准竖屏 · 390 × 693 (导出 1088 × 1920)' }
  };

  // 内联零跨域安全 Laya 品牌 Logo（防止本地 file:/// 打开时 logo.png 污染 Canvas 导致导出报错）
  const SAFE_BRAND_LOGO_SVG_URL = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
      <rect width="1024" height="1024" rx="220" fill="#141418"/>
      <g transform="translate(64, 64) scale(0.875)" fill="#c084fc">
        <path d="M735.232 598.4256a668.672 668.672 0 0 0-67.84-43.52c-31.8464-17.408-53.248-24.32-72.448-24.32-30.208 0-56.1664 16.128-74.4448 43.6224-5.3248 8.0896-9.216 15.2576-13.9776 25.4976-28.928-19.712-122.2656-115.5072-139.264-141.568l-5.632-8.7552c8.5504-4.096 16.896-8.96 24.6784-14.4384 26.3168-18.9952 41.984-45.7728 41.984-77.1584 0-19.8656-6.7072-42.1888-23.4496-75.1616a704.1024 704.1024 0 0 0-41.8816-70.4512c-16.128-24.064-33.28-46.4896-50.2784-64.768-27.4944-29.696-52.1216-45.056-81.0496-45.056-29.184 0-55.296 15.2576-81.664 40.1408a337.1008 337.1008 0 0 0-40.448 46.6432C75.8272 235.8272 51.2 287.6416 51.2 340.6848c0 51.0976 23.9104 109.9776 62.0544 174.08 35.7376 60.0064 84.5312 124.1088 138.0864 180.992l17.3056 17.8176c55.296 55.9104 117.0432 106.5984 174.9504 143.5648 61.952 39.4752 118.528 64.4096 167.936 64.4096 51.0976 0 100.9152-25.4976 146.1248-60.4672 15.104-11.6736 30.8224-25.9584 44.9536-41.7792 24.064-27.2384 38.7072-54.272 38.7072-84.6848 0-29.952-14.848-55.4496-43.52-84.0704-17.8176-17.5616-39.5776-35.328-62.6176-52.1216z"/>
        <path d="M962.048 149.504a22.1696 22.1696 0 0 0-11.1104-2.9696 20.1216 20.1216 0 0 0-10.7008 2.8672l-76.288 56.32v-13.824a89.7024 89.7024 0 0 0-54.272-82.6368 86.8352 86.8352 0 0 0-33.7408-6.8096h-199.2704c-48.64 0-88.1152 40.0384-88.1152 89.6v134.3488c0 49.3568 39.424 89.5488 88.064 89.5488h199.0656c23.296 0 45.7728-9.3696 62.208-26.2144 16.5376-16.896 25.8048-39.5776 25.7536-63.232V312.832l76.288 56.1664a21.4016 21.4016 0 0 0 21.76-0.1536 23.1424 23.1424 0 0 0 11.1104-19.5584V168.8576a22.6816 22.6816 0 0 0-10.752-19.3024z"/>
      </g>
    </svg>
  `);
  const safeBrandLogoFallbackImg = new Image();
  safeBrandLogoFallbackImg.src = SAFE_BRAND_LOGO_SVG_URL;

  function isMediaCanvasClean(mediaEl) {
    if (!mediaEl) return false;
    try {
      const tc = document.createElement('canvas');
      tc.width = 2;
      tc.height = 2;
      const tCtx = tc.getContext('2d');
      tCtx.drawImage(mediaEl, 0, 0, 2, 2);
      tc.toDataURL();
      return true;
    } catch (e) {
      return false;
    }
  }

  let pcToastTimer = null;
  function showPcToast(msg) {
    const el = $('pcToast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    if (pcToastTimer) clearTimeout(pcToastTimer);
    pcToastTimer = setTimeout(() => {
      el.classList.remove('show');
    }, 2600);
  }

  function updatePcStageFitScale() {
    if (window.innerWidth < 820) {
      appContainer.style.removeProperty('--pc-stage-fit-scale');
      return;
    }
    const spec = IPHONE_MODELS[state.iphoneModel] || IPHONE_MODELS['393x852'];
    const viewportEl = $('pcStageViewport');
    const availH = (viewportEl ? viewportEl.clientHeight : window.innerHeight) - 68;
    const availW = (viewportEl ? viewportEl.clientWidth : (window.innerWidth - 440)) - 44;
    const scaleH = availH / spec.h;
    const scaleW = availW / spec.w;
    const fitScale = Math.min(1.08, Math.max(0.55, Math.min(scaleH, scaleW)));
    appContainer.style.setProperty('--pc-stage-fit-scale', fitScale.toFixed(3));
  }

  function applyIphoneModelSize(modelKey, shouldSave = true) {
    const key = IPHONE_MODELS[modelKey] ? modelKey : '393x852';
    state.iphoneModel = key;
    const spec = IPHONE_MODELS[key];
    appContainer.style.setProperty('--iphone-w', `${spec.w}px`);
    appContainer.style.setProperty('--iphone-h', `${spec.h}px`);
    const metaText = $('pcDeviceMetaText');
    if (metaText) metaText.textContent = spec.label;
    const sel = $('pcIphoneModelSelect');
    if (sel && sel.value !== key) sel.value = key;
    if (shouldSave) savePref('laya_iphone_model_v1', key);
    updatePcStageFitScale();
  }

  window.addEventListener('resize', updatePcStageFitScale);

  function syncPcStudioUI() {
    const isVideo = state.callMode === 'video';
    const pcModeVoiceBtn = $('pcModeVoiceBtn');
    const pcModeVideoBtn = $('pcModeVideoBtn');
    if (pcModeVoiceBtn) pcModeVoiceBtn.classList.toggle('active-opt', !isVideo);
    if (pcModeVideoBtn) pcModeVideoBtn.classList.toggle('active-opt', isVideo);

    const pcPeerVideoStatus = $('pcPeerVideoStatus');
    if (pcPeerVideoStatus) {
      pcPeerVideoStatus.textContent = state.peerVideoUrl
        ? (state.isViewSwapped ? '已在右上小窗' : '主画面播放中')
        : '未上传';
    }
    const pcTogglePeerAudioBtn = $('pcTogglePeerAudioBtn');
    if (pcTogglePeerAudioBtn) {
      pcTogglePeerAudioBtn.classList.toggle('active-opt', !state.peerVideoMuted);
      pcTogglePeerAudioBtn.textContent = state.peerVideoMuted ? '🔇 原声：静音' : '🔊 原声：开';
    }

    const pcSelfVideoStatus = $('pcSelfVideoStatus');
    if (pcSelfVideoStatus) {
      if (state.isSelfCameraOff) {
        pcSelfVideoStatus.textContent = '白底虚化头像';
      } else if (state.selfVideoSource === 'upload' && state.selfVideoUrl) {
        pcSelfVideoStatus.textContent = state.isViewSwapped ? '主画面播放中' : '右上小窗播放中';
      } else if (state.selfVideoSource === 'camera') {
        pcSelfVideoStatus.textContent = '真实摄像头中';
      } else {
        pcSelfVideoStatus.textContent = '白底虚化头像';
      }
    }

    const pcToggleSelfCamOffBtn = $('pcToggleSelfCamOffBtn');
    if (pcToggleSelfCamOffBtn) {
      pcToggleSelfCamOffBtn.classList.toggle('active-opt', state.isSelfCameraOff);
      pcToggleSelfCamOffBtn.textContent = state.isSelfCameraOff ? '🤍 已关摄像头(白底头像)' : '📹 显示右上角视频';
    }

    const pcToggleSelfAudioBtn = $('pcToggleSelfAudioBtn');
    if (pcToggleSelfAudioBtn) {
      pcToggleSelfAudioBtn.classList.toggle('active-opt', !state.selfVideoMuted);
      pcToggleSelfAudioBtn.textContent = state.selfVideoMuted ? '🔇 小窗声音：静音' : '🔊 小窗声音：开';
    }

    const pcToggleSelfMirrorBtn = $('pcToggleSelfMirrorBtn');
    if (pcToggleSelfMirrorBtn) {
      pcToggleSelfMirrorBtn.classList.toggle('active-opt', state.selfMirror);
      pcToggleSelfMirrorBtn.textContent = state.selfMirror ? '🪞 镜像：开' : '🪞 镜像：关';
    }

    const pcTogglePipVisBtn = $('pcTogglePipVisBtn');
    if (pcTogglePipVisBtn) {
      pcTogglePipVisBtn.classList.toggle('active-opt', !state.isPipHidden);
      pcTogglePipVisBtn.textContent = state.isPipHidden ? '🪟 小窗：隐藏' : '🪟 小窗：显示';
    }

    const pcPeerVidScaleRange = $('pcPeerVidScaleRange');
    const pcPeerVidScaleVal = $('pcPeerVidScaleVal');
    if (pcPeerVidScaleRange) pcPeerVidScaleRange.value = layoutConfig.peerMedia.scale;
    if (pcPeerVidScaleVal) pcPeerVidScaleVal.textContent = `${layoutConfig.peerMedia.scale}%`;

    const pcPipScaleRange = $('pcPipScaleRange');
    const pcPipScaleVal = $('pcPipScaleVal');
    if (pcPipScaleRange) pcPipScaleRange.value = layoutConfig.pip.scale;
    if (pcPipScaleVal) pcPipScaleVal.textContent = `${layoutConfig.pip.scale}%`;

    const pcSelfContentScaleRange = $('pcSelfContentScaleRange');
    const pcSelfContentScaleVal = $('pcSelfContentScaleVal');
    if (pcSelfContentScaleRange) pcSelfContentScaleRange.value = layoutConfig.selfMedia.scale;
    if (pcSelfContentScaleVal) pcSelfContentScaleVal.textContent = `${layoutConfig.selfMedia.scale}%`;

    const pcCustomAudioStatus = $('pcCustomAudioStatus');
    if (pcCustomAudioStatus) {
      pcCustomAudioStatus.textContent = customAudioEl
        ? (customAudioEl.paused ? '已上传 (已暂停)' : '🔊 正在播放语音')
        : '未上传音频';
    }

    const pcAudioStatusBadge = $('pcAudioStatusBadge');
    if (pcAudioStatusBadge) {
      const activeSources = [];
      if (isVideo && state.peerVideoUrl && !state.peerVideoMuted) activeSources.push('主视频原声');
      if (isVideo && !state.isSelfCameraOff && state.selfVideoSource === 'upload' && state.selfVideoUrl && !state.selfVideoMuted) activeSources.push('小窗视频声');
      if (customAudioEl && state.customAudioBlob) activeSources.push('语音音频');
      if (activeSources.length > 0) {
        pcAudioStatusBadge.classList.remove('muted');
        pcAudioStatusBadge.textContent = `🔊 导出含：${activeSources.join(' + ')}`;
      } else {
        pcAudioStatusBadge.classList.add('muted');
        pcAudioStatusBadge.textContent = isVideo
          ? '🔇 请上传主视频或开启原声'
          : '💡 上传语音/视频即可带声音导出';
      }
    }

    const pcNicknameInput = $('pcNicknameInput');
    if (pcNicknameInput && document.activeElement !== pcNicknameInput && nicknameInput) {
      pcNicknameInput.value = nicknameInput.value;
    }
    const pcBrandTitleInput = $('pcBrandTitleInput');
    if (pcBrandTitleInput && document.activeElement !== pcBrandTitleInput && brandTitleInput) {
      pcBrandTitleInput.value = brandTitleInput.value;
    }
    const pcProfileTagInput = $('pcProfileTagInput');
    if (pcProfileTagInput && document.activeElement !== pcProfileTagInput && profileTagInput) {
      pcProfileTagInput.value = profileTagInput.value;
    }
    const pcToggleTagVisBtn = $('pcToggleTagVisBtn');
    if (pcToggleTagVisBtn && profileTagsPill) {
      const hidden = profileTagsPill.classList.contains('hidden');
      pcToggleTagVisBtn.classList.toggle('active-opt', !hidden);
      pcToggleTagVisBtn.textContent = hidden ? '显示标签' : '已显示标签';
    }

    const pcTriggerHangupBtn = $('pcTriggerHangupBtn');
    if (pcTriggerHangupBtn) {
      pcTriggerHangupBtn.classList.toggle('active-opt', state.isCallEnded);
      pcTriggerHangupBtn.textContent = state.isCallEnded ? '🟢 恢复通话 (当前已挂断)' : '🔴 模拟挂断';
    }

    const pcToggleFreezeTimerBtn = $('pcToggleFreezeTimerBtn');
    if (pcToggleFreezeTimerBtn) {
      pcToggleFreezeTimerBtn.classList.toggle('active-opt', state.isTimerFrozen);
      pcToggleFreezeTimerBtn.textContent = state.isTimerFrozen ? '⏸️ 定格时间：开' : '⏸️ 定格时间：关';
    }

    const pcToggleLayoutEditBtn = $('pcToggleLayoutEditBtn');
    if (pcToggleLayoutEditBtn) {
      pcToggleLayoutEditBtn.classList.toggle('active-opt', state.isLayoutEditMode);
      pcToggleLayoutEditBtn.textContent = state.isLayoutEditMode ? '🔒 完成锁定位置' : '✋ 自由拖动元素位置';
    }

    const pcToggleCleanUiBtn = $('pcToggleCleanUiBtn');
    if (pcToggleCleanUiBtn) {
      pcToggleCleanUiBtn.classList.toggle('active-opt', state.isCleanUiMode);
      pcToggleCleanUiBtn.textContent = state.isCleanUiMode ? '👁️ 恢复前景UI' : '✨ 隐藏前景UI';
    }

    const pcBottomPadRange = $('pcBottomPadRange');
    const pcBottomPadVal = $('pcBottomPadVal');
    if (pcBottomPadRange && bottomPadRange) pcBottomPadRange.value = bottomPadRange.value;
    if (pcBottomPadVal && bottomPadRange) pcBottomPadVal.textContent = `${bottomPadRange.value}px`;
  }

  function bindPcStudioEvents() {
    const pcIphoneModelSelect = $('pcIphoneModelSelect');
    if (pcIphoneModelSelect) {
      pcIphoneModelSelect.addEventListener('change', (e) => {
        applyIphoneModelSize(e.target.value, true);
        showPcToast(`📱 已切换为 ${IPHONE_MODELS[state.iphoneModel].w} × ${IPHONE_MODELS[state.iphoneModel].h} 苹果真机尺寸`);
      });
    }

    const pcOpenTutorialBtn = $('pcOpenTutorialBtn');
    if (pcOpenTutorialBtn) {
      pcOpenTutorialBtn.addEventListener('click', () => {
        applyTutorialZoom(100);
        tutorialModal.classList.add('open');
      });
    }

    const pcExportDurationSelect = $('pcExportDurationSelect');
    const pcExportCustomSecInput = $('pcExportCustomSecInput');
    if (pcExportDurationSelect && pcExportCustomSecInput) {
      pcExportDurationSelect.addEventListener('change', () => {
        pcExportCustomSecInput.style.display = pcExportDurationSelect.value === 'custom' ? 'block' : 'none';
      });
    }

    $('pcModeVoiceBtn')?.addEventListener('click', switchToVoiceMode);
    $('pcModeVideoBtn')?.addEventListener('click', enterVideoMode);
    $('pcSwapViewBtn')?.addEventListener('click', () => {
      if (state.callMode !== 'video') state.callMode = 'video';
      state.isViewSwapped = !state.isViewSwapped;
      updateCallModeUI();
      saveScreenState();
    });

    $('pcUploadPeerVideoBtn')?.addEventListener('click', () => peerVideoFileInput.click());
    $('pcTogglePeerAudioBtn')?.addEventListener('click', () => togglePeerAudioBtn.click());
    $('pcClearPeerVideoBtn')?.addEventListener('click', clearPeerVideo);
    $('pcPeerVidScaleRange')?.addEventListener('input', (e) => {
      layoutConfig.peerMedia.scale = parseInt(e.target.value, 10) || 100;
      applyCustomLayout();
      saveCustomLayout();
    });

    $('pcUploadSelfVideoBtn')?.addEventListener('click', () => selfVideoFileInput.click());
    $('pcToggleSelfCamOffBtn')?.addEventListener('click', () => toggleSelfCamOffBtn.click());
    $('pcToggleSelfAudioBtn')?.addEventListener('click', () => toggleSelfAudioBtn.click());
    $('pcToggleSelfMirrorBtn')?.addEventListener('click', () => toggleSelfMirrorBtn.click());
    $('pcTogglePipVisBtn')?.addEventListener('click', () => togglePipVisBtn.click());
    $('pcClearSelfVideoBtn')?.addEventListener('click', clearSelfVideo);

    $('pcPipScaleRange')?.addEventListener('input', (e) => {
      layoutConfig.pip.scale = parseInt(e.target.value, 10) || 100;
      applyCustomLayout();
      saveCustomLayout();
    });
    $('pcSelfContentScaleRange')?.addEventListener('input', (e) => {
      layoutConfig.selfMedia.scale = parseInt(e.target.value, 10) || 100;
      applyCustomLayout();
      saveCustomLayout();
    });

    $('pcUploadPeerAvatarBtn')?.addEventListener('click', () => avatarFileInput.click());
    $('pcUploadSelfAvatarBtn')?.addEventListener('click', () => selfAvatarFileInput.click());
    $('pcPeerAvatarThumb')?.addEventListener('click', () => avatarFileInput.click());
    $('pcSelfAvatarThumb')?.addEventListener('click', () => selfAvatarFileInput.click());

    $('pcNicknameInput')?.addEventListener('input', (e) => updateNickname(e.target.value, true));
    $('pcBrandTitleInput')?.addEventListener('input', (e) => {
      brandTitleInput.value = e.target.value;
      brandTitleInput.dispatchEvent(new Event('input'));
    });
    $('pcProfileTagInput')?.addEventListener('input', (e) => {
      profileTagInput.value = e.target.value;
      profileTagInput.dispatchEvent(new Event('input'));
    });
    $('pcToggleTagVisBtn')?.addEventListener('click', () => {
      toggleTagVisBtn.click();
      syncPcStudioUI();
    });

    $('pcUploadAudioBtn')?.addEventListener('click', () => audioFileInput.click());
    $('pcTogglePlayAudioBtn')?.addEventListener('click', () => {
      if (!customAudioEl) {
        audioFileInput.click();
        return;
      }
      if (customAudioEl.paused) {
        customAudioEl.play().catch(() => {});
      } else {
        customAudioEl.pause();
      }
      syncPcStudioUI();
    });
    $('pcClearAudioBtn')?.addEventListener('click', () => {
      if (customAudioEl) {
        customAudioEl.pause();
        customAudioEl = null;
      }
      state.customAudioBlob = null;
      idbDeleteMedia('customAudio');
      syncPcStudioUI();
      showPcToast('已清空语音/背景音频');
    });

    $('pcApplyTimeBtn')?.addEventListener('click', () => {
      const inp = $('pcCustomTimeInput');
      if (!inp) return;
      customTimeStrInput.value = inp.value;
      applyTimeStrBtn.click();
    });
    $('pcRandomTimeBtn')?.addEventListener('click', () => {
      randomTimeBtn.click();
      const inp = $('pcCustomTimeInput');
      if (inp) inp.value = formatDuration(state.elapsedSeconds);
    });
    $('pcResetCallBtn')?.addEventListener('click', () => {
      silentResetCall();
      const inp = $('pcCustomTimeInput');
      if (inp) inp.value = '00:00';
      showPcToast('🔄 已重置为 00:00 通话状态');
    });
    $('pcTriggerHangupBtn')?.addEventListener('click', () => {
      hangupBtn.click();
    });
    $('pcToggleFreezeTimerBtn')?.addEventListener('click', () => {
      toggleFreezeTimerBtn.click();
      syncPcStudioUI();
    });

    const sendQuickChat = (asPeer) => {
      const inp = $('pcQuickChatInput');
      if (!inp || !inp.value.trim()) return;
      const raw = inp.value.trim();
      inp.value = '';
      if (asPeer) {
        appendChatBubble(raw, 'peer', nicknameDisplay.textContent || '對方');
      } else {
        appendChatBubble(raw, 'self');
      }
    };
    $('pcSendSelfChatBtn')?.addEventListener('click', () => sendQuickChat(false));
    $('pcSendPeerChatBtn')?.addEventListener('click', () => sendQuickChat(true));
    $('pcQuickChatInput')?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendQuickChat(false);
      }
    });
    $('pcClearChatBtn')?.addEventListener('click', () => {
      chatMessagesStream.innerHTML = '';
    });

    $('pcToggleLayoutEditBtn')?.addEventListener('click', () => {
      setLayoutEditMode(!state.isLayoutEditMode);
      syncPcStudioUI();
    });
    $('pcResetLayoutBtn')?.addEventListener('click', resetAllLayoutPositions);
    $('pcToggleCleanUiBtn')?.addEventListener('click', () => {
      toggleCleanUiBtn.click();
      syncPcStudioUI();
    });
    $('pcOpenFullSettingsBtn')?.addEventListener('click', openSettings);
    $('pcBottomPadRange')?.addEventListener('input', (e) => {
      bottomPadRange.value = e.target.value;
      bottomPadRange.dispatchEvent(new Event('input'));
      syncPcStudioUI();
    });

    // 支持电脑端直接拖拽视频或图片文件到舞台对应区域
    appContainer.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    appContainer.addEventListener('drop', (e) => {
      e.preventDefault();
      const file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
      if (!file) return;
      const targetPip = e.target.closest('.video-stage.is-pip-stage');
      if (file.type.startsWith('video/')) {
        if (targetPip === selfStage || (targetPip === peerStage && state.isViewSwapped)) {
          setSelfVideoFromFile(file);
        } else {
          setPeerVideoFromFile(file);
        }
      } else if (file.type.startsWith('image/')) {
        if (targetPip === selfStage) {
          readImageAsDataUrl(file, (dataUrl) => {
            setSelfAvatarDataUrl(dataUrl);
            savePref('laya_self_avatar', dataUrl);
            showPcToast('✅ 已更新右上角我的头像');
          });
        } else {
          readImageAsDataUrl(file, (dataUrl) => {
            setPeerAvatarDataUrl(dataUrl);
            savePref('laya_voice_avatar', dataUrl);
            showPcToast('✅ 已更新对方头像');
          });
        }
      } else if (file.type.startsWith('audio/')) {
        loadCustomAudioFromFile(file, false);
      }
    });
  }

  // ==================== 1080P 原生 Canvas 2D 真机画面合成渲染器 ====================
  function drawRoundedRectPath(ctx, x, y, w, h, r) {
    const radius = Math.max(0, Math.min(r, w / 2, h / 2));
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + w, y, x + w, y + h, radius);
    ctx.arcTo(x + w, y + h, x, y + h, radius);
    ctx.arcTo(x, y + h, x, y, radius);
    ctx.arcTo(x, y, x + w, y, radius);
    ctx.closePath();
  }

  function drawCoverMedia(ctx, mediaEl, boxX, boxY, boxW, boxH, offsetX, offsetY, scalePct, mirrorX) {
    if (!mediaEl) return;
    if (mediaEl.tagName === 'IMG' && !isMediaCanvasClean(mediaEl)) return;
    const mW = mediaEl.videoWidth || mediaEl.naturalWidth || boxW;
    const mH = mediaEl.videoHeight || mediaEl.naturalHeight || boxH;
    if (!mW || !mH) return;
    const baseScale = Math.max(boxW / mW, boxH / mH);
    const usrScale = (scalePct || 100) / 100;
    const drawW = mW * baseScale * usrScale;
    const drawH = mH * baseScale * usrScale;
    const cx = boxX + boxW / 2 + offsetX;
    const cy = boxY + boxH / 2 + offsetY;

    ctx.save();
    ctx.translate(cx, cy);
    if (mirrorX) ctx.scale(-1, 1);
    try {
      ctx.drawImage(mediaEl, -drawW / 2, -drawH / 2, drawW, drawH);
    } catch (e) {}
    ctx.restore();
  }

  function drawCircularImage(ctx, imgEl, cx, cy, radius, borderWidth, borderColor, glowColor, glowBlur) {
    if (glowColor && glowBlur > 0) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius + borderWidth, 0, Math.PI * 2);
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = glowBlur;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
      ctx.lineWidth = borderWidth * 1.4;
      ctx.stroke();
      ctx.restore();
    }

    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    ctx.fillStyle = '#1a1a1e';
    ctx.fillRect(cx - radius, cy - radius, radius * 2, radius * 2);
    if (imgEl && imgEl.complete && (imgEl.naturalWidth > 0 || imgEl.width > 0)) {
      drawCoverMedia(ctx, imgEl, cx - radius, cy - radius, radius * 2, radius * 2, 0, 0, 100, false);
    }
    ctx.restore();

    if (borderWidth > 0) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = borderColor || 'rgba(255, 255, 255, 0.92)';
      ctx.lineWidth = borderWidth;
      ctx.stroke();
      ctx.restore();
    }
  }

  function renderSingleVideoStageToCanvas(ctx, stageEl, box, scaleX, scaleY, isMainStage) {
    const isPeer = stageEl === peerStage;
    ctx.save();
    if (!isMainStage) {
      // 右上角悬浮小窗外发光与阴影（导出采用纯直角边）
      ctx.save();
      ctx.beginPath();
      ctx.rect(box.x, box.y, box.w, box.h);
      ctx.shadowColor = 'rgba(0, 0, 0, 0.68)';
      ctx.shadowBlur = 24 * scaleX;
      ctx.shadowOffsetY = 8 * scaleY;
      ctx.fillStyle = '#141418';
      ctx.fill();
      ctx.restore();

      ctx.beginPath();
      ctx.rect(box.x, box.y, box.w, box.h);
      ctx.clip();
    } else {
      ctx.beginPath();
      ctx.rect(box.x, box.y, box.w, box.h);
      ctx.clip();
    }

    if (isPeer) {
      if (state.peerVideoUrl && peerVideoEl.readyState >= 2 && peerVideoEl.videoWidth > 0) {
        ctx.fillStyle = '#07070b';
        ctx.fillRect(box.x, box.y, box.w, box.h);
        drawCoverMedia(
          ctx,
          peerVideoEl,
          box.x,
          box.y,
          box.w,
          box.h,
          layoutConfig.peerMedia.x * scaleX,
          layoutConfig.peerMedia.y * scaleY,
          layoutConfig.peerMedia.scale,
          false
        );
      } else {
        // 对方未上传视频时的黑紫氛围背景 + 居中圆形头像
        const grad = ctx.createRadialGradient(
          box.x + box.w * 0.5,
          box.y + box.h * 0.34,
          box.w * 0.05,
          box.x + box.w * 0.5,
          box.y + box.h * 0.5,
          Math.max(box.w, box.h) * 0.75
        );
        grad.addColorStop(0, 'rgba(92, 45, 145, 0.45)');
        grad.addColorStop(0.5, 'rgba(22, 13, 33, 0.92)');
        grad.addColorStop(1, '#050508');
        ctx.fillStyle = grad;
        ctx.fillRect(box.x, box.y, box.w, box.h);

        const avR = (isMainStage ? 48 : 25) * scaleX;
        drawCircularImage(
          ctx,
          peerFallbackAvatar,
          box.x + box.w / 2,
          box.y + box.h / 2,
          avR,
          (isMainStage ? 2 : 1.6) * scaleX,
          'rgba(255, 255, 255, 0.88)',
          'rgba(168, 85, 247, 0.5)',
          20 * scaleX
        );
      }
    } else {
      const hasSelfVid =
        !state.isSelfCameraOff &&
        ((state.selfVideoSource === 'upload' && state.selfVideoUrl) ||
          (state.selfVideoSource === 'camera' && state.localStream)) &&
        selfVideoEl.readyState >= 2 &&
        selfVideoEl.videoWidth > 0;

      if (hasSelfVid) {
        ctx.fillStyle = '#07070b';
        ctx.fillRect(box.x, box.y, box.w, box.h);
        const mirrorOn = state.selfMirror || state.selfVideoSource === 'camera';
        drawCoverMedia(
          ctx,
          selfVideoEl,
          box.x,
          box.y,
          box.w,
          box.h,
          layoutConfig.selfMedia.x * scaleX,
          layoutConfig.selfMedia.y * scaleY,
          layoutConfig.selfMedia.scale,
          mirrorOn
        );
      } else {
        // 关闭摄像头：奶白高透毛玻璃虚化背景 + 居中我的头像
        ctx.fillStyle = '#eff1f7';
        ctx.fillRect(box.x, box.y, box.w, box.h);

        if (selfFrostedAvatarImg && selfFrostedAvatarImg.complete) {
          ctx.save();
          ctx.filter = `blur(${Math.round(22 * scaleX)}px) brightness(1.32) saturate(0.45)`;
          ctx.globalAlpha = 0.46;
          drawCoverMedia(ctx, selfFrostedAvatarImg, box.x - box.w * 0.2, box.y - box.h * 0.2, box.w * 1.4, box.h * 1.4, 0, 0, 120, false);
          ctx.restore();
        }

        const veilGrad = ctx.createRadialGradient(
          box.x + box.w * 0.5,
          box.y + box.h * 0.38,
          box.w * 0.05,
          box.x + box.w * 0.5,
          box.y + box.h * 0.5,
          Math.max(box.w, box.h) * 0.75
        );
        veilGrad.addColorStop(0, 'rgba(255, 255, 255, 0.82)');
        veilGrad.addColorStop(0.55, 'rgba(248, 249, 253, 0.86)');
        veilGrad.addColorStop(1, 'rgba(238, 241, 249, 0.93)');
        ctx.fillStyle = veilGrad;
        ctx.fillRect(box.x, box.y, box.w, box.h);

        const usrScale = (layoutConfig.selfMedia.scale || 100) / 100;
        const baseR = (isMainStage ? 56 : 25) * scaleX * usrScale;
        const avCx = box.x + box.w / 2 + layoutConfig.selfAvatar.x * scaleX;
        const avCy = box.y + box.h * 0.48 + layoutConfig.selfAvatar.y * scaleY;

        // 柔和白环外衬
        ctx.save();
        ctx.beginPath();
        ctx.arc(avCx, avCy, baseR + (isMainStage ? 6 : 3.5) * scaleX, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.48)';
        ctx.fill();
        ctx.restore();

        drawCircularImage(
          ctx,
          selfFrostedAvatarImg,
          avCx,
          avCy,
          baseR,
          (isMainStage ? 2.6 : 2.0) * scaleX,
          'rgba(255, 255, 255, 0.98)',
          'rgba(34, 30, 56, 0.16)',
          14 * scaleX
        );
      }
    }

    // 主画面顶/底暗角渐变蒙层（还原真机可读性）
    if (isMainStage && !state.isCleanUiMode) {
      const vigGrad = ctx.createLinearGradient(0, box.y, 0, box.y + box.h);
      vigGrad.addColorStop(0, 'rgba(0, 0, 0, 0.44)');
      vigGrad.addColorStop(0.24, 'rgba(0, 0, 0, 0.04)');
      vigGrad.addColorStop(0.68, 'rgba(0, 0, 0, 0.04)');
      vigGrad.addColorStop(1, 'rgba(0, 0, 0, 0.66)');
      ctx.fillStyle = vigGrad;
      ctx.fillRect(box.x, box.y, box.w, box.h);
    }

    ctx.restore();

    // 右上角小窗精致直角描边
    if (!isMainStage) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(box.x, box.y, box.w, box.h);
      const isFrosted = stageEl === selfStage && state.isSelfCameraOff;
      ctx.strokeStyle = isFrosted ? 'rgba(255, 255, 255, 0.75)' : 'rgba(255, 255, 255, 0.38)';
      ctx.lineWidth = 1.5 * scaleX;
      ctx.stroke();
      ctx.restore();
    }
  }

  function renderAppStageToCanvas(ctx, outW, outH, hideTopRightIcons = true) {
    const appRect = appContainer.getBoundingClientRect();
    if (!appRect.width || !appRect.height) return;
    const scaleX = outW / appRect.width;
    const scaleY = outH / appRect.height;
    const fontStack = '-apple-system, BlinkMacSystemFont, "SF Pro Text", "PingFang TC", "PingFang SC", "Microsoft JhengHei", sans-serif';

    const relBox = (el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      if (!r.width || !r.height) return null;
      return {
        x: (r.left - appRect.left) * scaleX,
        y: (r.top - appRect.top) * scaleY,
        w: r.width * scaleX,
        h: r.height * scaleY,
        cx: (r.left - appRect.left + r.width / 2) * scaleX,
        cy: (r.top - appRect.top + r.height / 2) * scaleY
      };
    };

    // 0. 纯黑底色
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, outW, outH);

    // 1. 视频通话模式：绘制主画面舞台 + 右上角悬浮小窗舞台
    if (state.callMode === 'video') {
      const mainStageEl = state.isViewSwapped ? selfStage : peerStage;
      const pipStageEl = state.isViewSwapped ? peerStage : selfStage;
      renderSingleVideoStageToCanvas(ctx, mainStageEl, { x: 0, y: 0, w: outW, h: outH }, scaleX, scaleY, true);

      if (!state.isPipHidden) {
        const pipBox = relBox(pipStageEl);
        if (pipBox) {
          renderSingleVideoStageToCanvas(ctx, pipStageEl, pipBox, scaleX, scaleY, false);
        }
      }
    }

    // 2. 顶部栏：Laya Logo + 标题 + 右上角图标（自动检测防跨域污染，本地 file:/// 打开也可安全导出）
    const brandLogoEl = $('brandLogoImg');
    if (state.showLayaLogo) {
      const logoBox = relBox(brandLogoEl);
      if (logoBox) {
        const cleanLogoImg = (brandLogoEl && brandLogoEl.complete && isMediaCanvasClean(brandLogoEl))
          ? brandLogoEl
          : safeBrandLogoFallbackImg;
        ctx.save();
        drawRoundedRectPath(ctx, logoBox.x, logoBox.y, logoBox.w, logoBox.h, 7 * scaleX);
        ctx.shadowColor = 'rgba(196, 43, 179, 0.52)';
        ctx.shadowBlur = 10 * scaleX;
        ctx.clip();
        if (cleanLogoImg && cleanLogoImg.complete) {
          try {
            ctx.drawImage(cleanLogoImg, logoBox.x, logoBox.y, logoBox.w, logoBox.h);
          } catch (e) {}
        }
        ctx.restore();
      }
    }

    const showTitleNow = state.showBrandText && (!state.isCleanUiMode || state.keepTitleInClean);
    if (showTitleNow && brandTitleText) {
      const titleBox = relBox(brandTitleText);
      if (titleBox) {
        ctx.save();
        ctx.font = `600 ${Math.round(17.5 * scaleX)}px ${fontStack}`;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.96)';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.55)';
        ctx.shadowBlur = 6 * scaleX;
        ctx.fillText(brandTitleText.textContent || 'Laya-語音匹配', titleBox.x, titleBox.cy);
        ctx.restore();
      }
    }

    if (!state.isCleanUiMode && !hideTopRightIcons) {
      [quickCleanUiBtn, topRightSettingBtn].forEach((btnEl) => {
        const bBox = relBox(btnEl);
        if (!bBox) return;
        ctx.save();
        ctx.beginPath();
        ctx.arc(bBox.cx, bBox.cy, bBox.w / 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
        ctx.lineWidth = 1 * scaleX;
        ctx.stroke();
        ctx.restore();
      });
    }

    if (state.isCleanUiMode) return;

    // 3. 语音匹配模式：绘制中间头像、关注按钮、昵称、标签与 11 根跳动声波条
    if (state.callMode === 'voice') {
      if (addFriendBtn && !addFriendBtn.classList.contains('hidden')) {
        const afCircleBox = relBox(addFriendIcon);
        const afLabelBox = relBox(addFriendLabel);
        if (afCircleBox) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(afCircleBox.cx, afCircleBox.cy, afCircleBox.w / 2, 0, Math.PI * 2);
          ctx.fillStyle = state.isFollowed ? 'rgba(255, 255, 255, 0.14)' : 'rgba(255, 255, 255, 0.03)';
          ctx.fill();
          ctx.strokeStyle = state.isFollowed ? 'rgba(255, 255, 255, 0.65)' : 'rgba(255, 255, 255, 0.35)';
          ctx.lineWidth = 1.2 * scaleX;
          ctx.stroke();
          ctx.font = `400 ${Math.round(22 * scaleX)}px ${fontStack}`;
          ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(addFriendIcon.textContent || '+', afCircleBox.cx, afCircleBox.cy);
          ctx.restore();
        }
        if (afLabelBox) {
          ctx.save();
          ctx.font = `400 ${Math.round(12.5 * scaleX)}px ${fontStack}`;
          ctx.fillStyle = 'rgba(255, 255, 255, 0.58)';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(addFriendLabel.textContent || '添加好友/關注', afLabelBox.cx, afLabelBox.cy);
          ctx.restore();
        }
      }

      const avBox = relBox(avatarTrigger);
      if (avBox) {
        const hasGlow = avatarTrigger.classList.contains('speaking-glow');
        drawCircularImage(
          ctx,
          avatarImage,
          avBox.cx,
          avBox.cy,
          avBox.w / 2,
          2.2 * scaleX,
          'rgba(255, 255, 255, 0.9)',
          hasGlow ? 'rgba(196, 43, 179, 0.55)' : null,
          hasGlow ? 22 * scaleX : 0
        );
      }

      if (nicknameDisplay && !nicknameDisplay.classList.contains('hidden')) {
        const nkBox = relBox(nicknameDisplay);
        if (nkBox) {
          ctx.save();
          ctx.font = `600 ${Math.round(18 * scaleX)}px ${fontStack}`;
          ctx.fillStyle = '#ffffff';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(nicknameDisplay.textContent || '', nkBox.cx, nkBox.cy);
          ctx.restore();
        }
      }

      if (profileTagsPill && !profileTagsPill.classList.contains('hidden')) {
        const tagBox = relBox(profileTagsPill);
        if (tagBox) {
          ctx.save();
          drawRoundedRectPath(ctx, tagBox.x, tagBox.y, tagBox.w, tagBox.h, tagBox.h / 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.14)';
          ctx.lineWidth = 1 * scaleX;
          ctx.stroke();
          ctx.font = `400 ${Math.round(13 * scaleX)}px ${fontStack}`;
          ctx.fillStyle = 'rgba(255, 255, 255, 0.78)';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(profileTagsPill.textContent || '', tagBox.cx, tagBox.cy);
          ctx.restore();
        }
      }

      // 11 根白色语音声波条
      const isWavePaused = waveformBars.classList.contains('paused');
      waveBarElements.forEach((barEl) => {
        const bBox = relBox(barEl);
        if (!bBox) return;
        ctx.save();
        drawRoundedRectPath(ctx, bBox.x, bBox.y, bBox.w, bBox.h, bBox.w / 2);
        ctx.fillStyle = isWavePaused ? 'rgba(255, 255, 255, 0.35)' : '#ffffff';
        if (!isWavePaused) {
          ctx.shadowColor = 'rgba(255, 255, 255, 0.28)';
          ctx.shadowBlur = 6 * scaleX;
        }
        ctx.fill();
        ctx.restore();
      });

      if (typingIndicator && typingIndicator.classList.contains('visible')) {
        const typBox = relBox(typingIndicator);
        if (typBox) {
          ctx.save();
          ctx.font = `400 ${Math.round(11.5 * scaleX)}px ${fontStack}`;
          ctx.fillStyle = 'rgba(255, 255, 255, 0.62)';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(typingIndicator.textContent || '對方正在輸入...', typBox.cx, typBox.cy);
          ctx.restore();
        }
      }
    }

    // 4. 实时聊天弹幕气泡区
    const streamBox = relBox(chatMessagesStream);
    if (streamBox) {
      const bubbles = chatMessagesStream.querySelectorAll('.chat-bubble');
      if (bubbles.length > 0) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(streamBox.x, streamBox.y, streamBox.w, streamBox.h);
        ctx.clip();

        bubbles.forEach((bubEl) => {
          const bBox = relBox(bubEl);
          if (!bBox || bBox.y + bBox.h < streamBox.y || bBox.y > streamBox.y + streamBox.h) return;
          const isSelf = bubEl.classList.contains('self');
          const isSys = bubEl.classList.contains('system');

          ctx.save();
          drawRoundedRectPath(ctx, bBox.x, bBox.y, bBox.w, bBox.h, (isSys ? 18 : 16) * scaleX);
          ctx.fillStyle = isSelf
            ? 'rgba(168, 85, 247, 0.38)'
            : (isSys ? 'rgba(255, 255, 255, 0.14)' : 'rgba(255, 255, 255, 0.16)');
          ctx.fill();
          if (!isSys) {
            ctx.strokeStyle = isSelf ? 'rgba(168, 85, 247, 0.55)' : 'rgba(255, 255, 255, 0.24)';
            ctx.lineWidth = 1 * scaleX;
            ctx.stroke();
          }

          ctx.font = `${isSys ? 400 : 500} ${Math.round((isSys ? 12.5 : 15) * scaleX)}px ${fontStack}`;
          ctx.fillStyle = '#ffffff';
          ctx.textBaseline = 'middle';
          const fullTxt = (bubEl.textContent || '').trim();
          ctx.fillText(fullTxt, bBox.x + 13 * scaleX, bBox.cy);
          ctx.restore();
        });

        ctx.restore();
      }
    }

    // 5. 底部计时器 + 挂断状态信息
    const timerBox = relBox(callTimerEl);
    if (timerBox) {
      ctx.save();
      ctx.font = `700 ${Math.round(22 * scaleX)}px ${fontStack}`;
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.65)';
      ctx.shadowBlur = 8 * scaleX;
      ctx.fillText(callTimerEl.textContent || '00:22', timerBox.cx, timerBox.cy);
      ctx.restore();
    }

    if (hangupInfoEl && hangupInfoEl.classList.contains('visible')) {
      const badgeBox = relBox(hangupStatusBadge);
      const tsBox = relBox(hangupTimestamp);
      if (badgeBox && hangupStatusBadge.textContent) {
        ctx.save();
        ctx.font = `600 ${Math.round(15 * scaleX)}px ${fontStack}`;
        ctx.fillStyle = '#ff5b63';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(hangupStatusBadge.textContent, badgeBox.cx, badgeBox.cy);
        ctx.restore();
      }
      if (tsBox && hangupTimestamp.textContent) {
        ctx.save();
        ctx.font = `400 ${Math.round(13.5 * scaleX)}px ${fontStack}`;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.72)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(hangupTimestamp.textContent, tsBox.cx, tsBox.cy);
        ctx.restore();
      }
    }

    // 6. 底部三个圆形控制按钮（静音 / 挂断 / 开视频或开关摄像头）
    const isSingleBtnMode = actionButtonsRow.classList.contains('single-mode');

    const drawCtrlButton = (circleEl, labelEl, kind) => {
      const cBox = relBox(circleEl);
      const lBox = relBox(labelEl);
      if (!cBox) return;
      const r = cBox.w / 2;
      ctx.save();
      ctx.beginPath();
      ctx.arc(cBox.cx, cBox.cy, r, 0, Math.PI * 2);

      let iconColor = '#ffffff';
      if (kind === 'mute') {
        if (state.isMuted) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.94)';
          ctx.fill();
          iconColor = '#111115';
        } else {
          ctx.fillStyle = 'rgba(18, 16, 24, 0.44)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.lineWidth = 1.6 * scaleX;
          ctx.stroke();
        }
      } else if (kind === 'hangup') {
        if (state.isCallEnded) {
          ctx.fillStyle = '#2c2c30';
          ctx.fill();
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.24)';
          ctx.lineWidth = 1.5 * scaleX;
          ctx.stroke();
        } else {
          const g = ctx.createLinearGradient(0, cBox.y, 0, cBox.y + cBox.h);
          g.addColorStop(0, '#ff543e');
          g.addColorStop(1, '#e6353f');
          ctx.fillStyle = g;
          ctx.shadowColor = 'rgba(235, 58, 66, 0.48)';
          ctx.shadowBlur = 16 * scaleX;
          ctx.fill();
        }
      } else if (kind === 'video') {
        if (state.callMode === 'video' && !state.isSelfCameraOff) {
          const g = ctx.createLinearGradient(cBox.x, cBox.y, cBox.x + cBox.w, cBox.y + cBox.h);
          g.addColorStop(0, '#a855f7');
          g.addColorStop(1, '#ec4899');
          ctx.fillStyle = g;
          ctx.fill();
        } else if (state.callMode === 'video' && state.isSelfCameraOff) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.94)';
          ctx.fill();
          iconColor = '#1c1826';
        } else {
          ctx.fillStyle = 'rgba(18, 16, 24, 0.44)';
          ctx.fill();
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.lineWidth = 1.6 * scaleX;
          ctx.stroke();
        }
      }
      ctx.restore();

      // 绘制按钮中心矢量图标
      ctx.save();
      ctx.translate(cBox.cx, cBox.cy);
      ctx.strokeStyle = iconColor;
      ctx.fillStyle = iconColor;
      ctx.lineWidth = 1.9 * scaleX;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (kind === 'mute') {
        const s = scaleX * 0.92;
        ctx.beginPath();
        ctx.moveTo(-1 * s, -7 * s);
        ctx.lineTo(-6 * s, -3 * s);
        ctx.lineTo(-10 * s, -3 * s);
        ctx.lineTo(-10 * s, 3 * s);
        ctx.lineTo(-6 * s, 3 * s);
        ctx.lineTo(-1 * s, 7 * s);
        ctx.closePath();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(4 * s, -3 * s);
        ctx.lineTo(10 * s, 3 * s);
        ctx.moveTo(10 * s, -3 * s);
        ctx.lineTo(4 * s, 3 * s);
        ctx.stroke();
      } else if (kind === 'hangup') {
        const s = scaleX * 1.05;
        ctx.beginPath();
        ctx.arc(0, 2 * s, 10 * s, Math.PI * 1.15, Math.PI * 1.85);
        ctx.lineWidth = 3.6 * scaleX;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
      } else if (kind === 'video') {
        const s = scaleX * 0.92;
        drawRoundedRectPath(ctx, -10 * s, -6 * s, 13 * s, 12 * s, 2 * s);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(3 * s, -2 * s);
        ctx.lineTo(10 * s, -6 * s);
        ctx.lineTo(10 * s, 6 * s);
        ctx.lineTo(3 * s, 2 * s);
        ctx.closePath();
        ctx.stroke();
        if (state.callMode === 'video' && state.isSelfCameraOff) {
          ctx.beginPath();
          ctx.moveTo(-10 * s, -9 * s);
          ctx.lineTo(10 * s, 9 * s);
          ctx.stroke();
        }
      }
      ctx.restore();

      if (lBox && labelEl) {
        ctx.save();
        ctx.font = `500 ${Math.round(13.5 * scaleX)}px ${fontStack}`;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.88)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.72)';
        ctx.shadowBlur = 4 * scaleX;
        ctx.fillText(labelEl.textContent || '', lBox.cx, lBox.cy);
        ctx.restore();
      }
    };

    if (!isSingleBtnMode) {
      drawCtrlButton(muteCircle, muteLabel, 'mute');
      drawCtrlButton(videoCircle, videoLabel, 'video');
    }
    drawCtrlButton(hangupCircle, hangupLabel, 'hangup');

    // 7. 最底部多功能输入栏 (.bottom-dock)
    const roleBox = relBox(senderRoleToggleBtn);
    if (roleBox) {
      ctx.save();
      drawRoundedRectPath(ctx, roleBox.x, roleBox.y, roleBox.w, roleBox.h, roleBox.h / 2);
      ctx.fillStyle = state.sendAsPeer ? 'rgba(59, 130, 246, 0.38)' : 'rgba(255, 255, 255, 0.12)';
      ctx.fill();
      ctx.font = `500 ${Math.round(13.5 * scaleX)}px ${fontStack}`;
      ctx.fillStyle = state.sendAsPeer ? '#bfdbfe' : 'rgba(255, 255, 255, 0.92)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(senderRoleToggleBtn.textContent || '我', roleBox.cx, roleBox.cy);
      ctx.restore();
    }

    const qVidBox = relBox(dockVideoQuickBtn);
    if (qVidBox) {
      ctx.save();
      drawRoundedRectPath(ctx, qVidBox.x, qVidBox.y, qVidBox.w, qVidBox.h, qVidBox.h / 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.fill();
      const s = scaleX * 0.65;
      ctx.translate(qVidBox.cx, qVidBox.cy);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.92)';
      ctx.lineWidth = 1.8 * scaleX;
      drawRoundedRectPath(ctx, -10 * s, -6 * s, 13 * s, 12 * s, 2 * s);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(3 * s, -2 * s);
      ctx.lineTo(10 * s, -6 * s);
      ctx.lineTo(10 * s, 6 * s);
      ctx.lineTo(3 * s, 2 * s);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }

    const chatPillEl = document.querySelector('.chat-pill');
    const pillBox = relBox(chatPillEl);
    if (pillBox) {
      ctx.save();
      drawRoundedRectPath(ctx, pillBox.x, pillBox.y, pillBox.w, pillBox.h, pillBox.h / 2);
      ctx.fillStyle = 'rgba(29, 28, 35, 0.88)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1 * scaleX;
      ctx.stroke();

      const valTxt = (chatInputBox.value || '').trim();
      const dispTxt = valTxt || chatInputBox.getAttribute('placeholder') || '發文字...';
      ctx.font = `400 ${Math.round(15 * scaleX)}px ${fontStack}`;
      ctx.fillStyle = valTxt ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.42)';
      ctx.textBaseline = 'middle';
      ctx.fillText(dispTxt, pillBox.x + 16 * scaleX, pillBox.cy);

      const arrowBox = relBox(sendMsgBtn);
      if (arrowBox) {
        ctx.translate(arrowBox.cx, arrowBox.cy);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
        const s = scaleX * 0.72;
        ctx.beginPath();
        ctx.moveTo(-7 * s, 7 * s);
        ctx.lineTo(-7 * s, 1.5 * s);
        ctx.lineTo(1 * s, 0);
        ctx.lineTo(-7 * s, -1.5 * s);
        ctx.lineTo(-7 * s, -7 * s);
        ctx.lineTo(9 * s, 0);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    }

    const spkBox = relBox(dockSpeakerBtn);
    if (spkBox) {
      ctx.save();
      ctx.translate(spkBox.cx, spkBox.cy);
      const s = scaleX * 0.82;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.88)';
      ctx.lineWidth = 1.9 * scaleX;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(-1 * s, -6 * s);
      ctx.lineTo(-5 * s, -2.5 * s);
      ctx.lineTo(-8 * s, -2.5 * s);
      ctx.lineTo(-8 * s, 2.5 * s);
      ctx.lineTo(-5 * s, 2.5 * s);
      ctx.lineTo(-1 * s, 6 * s);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(1 * s, 0, 4.5 * s, -Math.PI * 0.28, Math.PI * 0.28);
      ctx.stroke();

      // 底部绿/红状态短条
      drawRoundedRectPath(ctx, -6 * scaleX, spkBox.h / 2 - 4 * scaleY, 12 * scaleX, 2 * scaleY, 1 * scaleX);
      ctx.fillStyle = state.isSpeakerOn ? '#34d399' : '#f87171';
      ctx.fill();
      ctx.restore();
    }
  }

  // ==================== 高清截图导出 ====================
  function exportHighDefScreenshot() {
    const spec = IPHONE_MODELS[state.iphoneModel] || IPHONE_MODELS['393x852'];
    const outW = spec.outW;
    const outH = spec.outH;
    const hideTopIcons = !!($('pcHideTopIconsOnExport')?.checked);

    const canvas = document.createElement('canvas');
    canvas.width = outW;
    canvas.height = outH;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    renderAppStageToCanvas(ctx, outW, outH, hideTopIcons);

    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `Laya_iPhone_${spec.w}x${spec.h}_${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        if (a.parentNode) a.parentNode.removeChild(a);
        URL.revokeObjectURL(url);
      }, 500);
      showPcToast(`📸 已保存 ${outW} × ${outH} 苹果真机超清截图！`);
    }, 'image/png', 1.0);
  }

  // ==================== 带多轨声音合成的 1080P MP4 录屏导出引擎（双引擎自动兜底，100% 稳定不报错） ====================
  let isExportRecording = false;
  let stopActiveExportFn = null;

  async function decodeBlobToAudioBuffer(blob, fallbackUrl) {
    let targetBlob = blob;
    if (!targetBlob && fallbackUrl) {
      try {
        const resp = await fetch(fallbackUrl);
        if (resp.ok) targetBlob = await resp.blob();
      } catch (e) {}
    }
    if (!targetBlob) return null;
    try {
      const arrBuf = await targetBlob.arrayBuffer();
      const decCtx = new (window.AudioContext || window.webkitAudioContext)();
      try {
        const audioBuf = await decCtx.decodeAudioData(arrBuf);
        return audioBuf;
      } catch (decErr) {
        return null;
      } finally {
        if (decCtx.close) decCtx.close().catch(() => {});
      }
    } catch (e) {
      return null;
    }
  }

  // 构建实时 WebAudio 混音输出流（供 MediaRecorder 降级引擎直接录制主视频+小窗视频+语音原声）
  function buildLiveWebAudioMixStream() {
    try {
      if (!window._layaMixCtx) {
        window._layaMixCtx = new (window.AudioContext || window.webkitAudioContext)();
        window._layaMixDest = window._layaMixCtx.createMediaStreamDestination();
        // 极微静音保活振荡器，确保录制音轨时钟全程连续不掉帧
        const osc = window._layaMixCtx.createOscillator();
        const silentGain = window._layaMixCtx.createGain();
        silentGain.gain.value = 0.00001;
        osc.connect(silentGain);
        silentGain.connect(window._layaMixDest);
        osc.start();
      }
      const actx = window._layaMixCtx;
      const dest = window._layaMixDest;
      if (actx.state === 'suspended') {
        actx.resume().catch(() => {});
      }

      const attachElem = (el, shouldPlaySound) => {
        if (!el) return;
        try {
          if (!el._layaSourceNode) {
            el._layaSourceNode = actx.createMediaElementSource(el);
            el._layaGainNode = actx.createGain();
            el._layaSourceNode.connect(el._layaGainNode);
            el._layaGainNode.connect(dest);
            el._layaGainNode.connect(actx.destination);
          }
          el._layaGainNode.gain.value = shouldPlaySound ? 1.0 : 0.0;
        } catch (e) {}
      };

      const peerSoundOn = !state.isCallEnded && state.callMode === 'video' && !!state.peerVideoUrl && !state.peerVideoMuted;
      const selfSoundOn = !state.isCallEnded && state.callMode === 'video' && !state.isSelfCameraOff && state.selfVideoSource === 'upload' && !!state.selfVideoUrl && !state.selfVideoMuted;
      const customSoundOn = !state.isCallEnded && !!customAudioEl && !customAudioEl.paused;

      attachElem(peerVideoEl, peerSoundOn);
      attachElem(selfVideoEl, selfSoundOn);
      if (customAudioEl) attachElem(customAudioEl, customSoundOn);

      const tracks = dest.stream.getAudioTracks().filter((t) => t.readyState === 'live');
      return tracks;
    } catch (e) {
      return [];
    }
  }

  async function exportVideoWithSound() {
    const btn = $('pcExportVideoBtn');
    const progWrap = $('pcExportProgressWrap');
    const progFill = $('pcExportProgressFill');

    if (isExportRecording && typeof stopActiveExportFn === 'function') {
      stopActiveExportFn();
      return;
    }

    const spec = IPHONE_MODELS[state.iphoneModel] || IPHONE_MODELS['393x852'];
    // 确保宽高严格为 16 的整数倍且高度 <= 1920，100% 适配所有显卡 H.264 编码器
    const outW = Math.round(spec.outW / 16) * 16;
    const outH = Math.round(spec.outH / 16) * 16;
    const hideTopIcons = !!($('pcHideTopIconsOnExport')?.checked);

    const durSel = $('pcExportDurationSelect')?.value || 'auto';
    let recordSeconds = 10;
    if (durSel === 'custom') {
      recordSeconds = Math.max(1, Math.min(600, parseFloat($('pcExportCustomSecInput')?.value) || 12));
    } else if (durSel !== 'auto') {
      recordSeconds = Math.max(1, parseFloat(durSel) || 10);
    } else {
      if (state.callMode === 'video' && state.peerVideoUrl && peerVideoEl.duration && isFinite(peerVideoEl.duration) && peerVideoEl.duration > 0) {
        recordSeconds = Math.min(180, Math.max(2, Number(peerVideoEl.duration.toFixed(2))));
      } else if (customAudioEl && customAudioEl.duration && isFinite(customAudioEl.duration) && customAudioEl.duration > 0) {
        recordSeconds = Math.min(180, Math.max(2, Number(customAudioEl.duration.toFixed(2))));
      } else if (state.callMode === 'video' && !state.isSelfCameraOff && state.selfVideoUrl && selfVideoEl.duration && isFinite(selfVideoEl.duration) && selfVideoEl.duration > 0) {
        recordSeconds = Math.min(180, Math.max(2, Number(selfVideoEl.duration.toFixed(2))));
      } else {
        recordSeconds = 10;
      }
    }

    isExportRecording = true;
    if (btn) {
      btn.classList.add('recording');
      btn.textContent = '⏳ 正在准备音视频合成器...';
    }
    if (progWrap) progWrap.style.display = 'block';
    if (progFill) progFill.style.width = '2%';

    const offCanvas = document.createElement('canvas');
    offCanvas.width = outW;
    offCanvas.height = outH;
    offCanvas.style.cssText = 'position:fixed;top:0;left:0;width:2px;height:2px;opacity:0.01;pointer-events:none;z-index:-9999;';
    document.body.appendChild(offCanvas);
    const ctx = offCanvas.getContext('2d', { alpha: false });
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    const resetExportUi = () => {
      isExportRecording = false;
      stopActiveExportFn = null;
      if (offCanvas.parentNode) offCanvas.parentNode.removeChild(offCanvas);
      if (btn) {
        btn.classList.remove('recording');
        btn.textContent = '🎥 录屏导出带声视频';
      }
      if (progWrap) progWrap.style.display = 'none';
      if (progFill) progFill.style.width = '0%';
    };

    try {
      // 仅在未挂断状态下启动视频和语音播放（若已挂断，则严格保持画面定格暂停状态！）
      if (!state.isCallEnded) {
        if (state.callMode === 'video') {
          if (state.peerVideoUrl) {
            if (durSel === 'auto') {
              try { peerVideoEl.currentTime = 0; } catch (e) {}
            }
            safePlayVideo(peerVideoEl, state.peerVideoMuted);
          }
          if (!state.isSelfCameraOff && state.selfVideoSource === 'upload' && state.selfVideoUrl) {
            if (durSel === 'auto') {
              try { selfVideoEl.currentTime = 0; } catch (e) {}
            }
            safePlayVideo(selfVideoEl, state.selfVideoMuted);
          }
        }
        if (customAudioEl) {
          if (durSel === 'auto') {
            try { customAudioEl.currentTime = 0; } catch (e) {}
          }
          if (customAudioEl.paused) {
            customAudioEl.play().catch(() => {});
          }
        }
      }

      const peerStartSec = (peerVideoEl && peerVideoEl.currentTime) ? peerVideoEl.currentTime : 0;
      const selfStartSec = (selfVideoEl && selfVideoEl.currentTime) ? selfVideoEl.currentTime : 0;
      const customAudioStartSec = (customAudioEl && customAudioEl.currentTime) ? customAudioEl.currentTime : 0;

      // 解码所有活跃音源（仅当通话未挂断时才混入原声）
      const activeAudioTracksToMix = [];
      if (!state.isCallEnded) {
        if (state.callMode === 'video' && (state.peerVideoBlob || state.peerVideoUrl) && !state.peerVideoMuted) {
          const buf = await decodeBlobToAudioBuffer(state.peerVideoBlob, state.peerVideoUrl);
          if (buf && buf.length > 0) activeAudioTracksToMix.push({ buffer: buf, startSec: peerStartSec, gain: 1.0 });
        }
        if (state.callMode === 'video' && !state.isSelfCameraOff && state.selfVideoSource === 'upload' && (state.selfVideoBlob || state.selfVideoUrl) && !state.selfVideoMuted) {
          const buf = await decodeBlobToAudioBuffer(state.selfVideoBlob, state.selfVideoUrl);
          if (buf && buf.length > 0) activeAudioTracksToMix.push({ buffer: buf, startSec: selfStartSec, gain: 0.9 });
        }
        if (state.customAudioBlob || (customAudioEl && customAudioEl.src)) {
          const buf = await decodeBlobToAudioBuffer(state.customAudioBlob, customAudioEl ? customAudioEl.src : null);
          if (buf && buf.length > 0) activeAudioTracksToMix.push({ buffer: buf, startSec: customAudioStartSec, gain: 1.0 });
        }
      }

      const TARGET_FPS = 30;
      const TARGET_VIDEO_BITRATE = 4_500_000;
      const TARGET_AUDIO_BITRATE = 128_000;
      const SAMPLE_RATE = activeAudioTracksToMix.length > 0
        ? (activeAudioTracksToMix[0].buffer.sampleRate || 48000)
        : 48000;
      const NUM_CHANNELS = 2;

      renderAppStageToCanvas(ctx, outW, outH, hideTopIcons);

      // ==================== 优先方案：WebCodecs (H.264 + AAC) + Mp4Muxer ====================
      let webCodecsReady = false;
      let selectedVideoConfig = null;
      let selectedAudioConfig = null;

      if (window.Mp4Muxer && typeof window.VideoEncoder === 'function' && typeof window.VideoFrame === 'function') {
        const h264Candidates = [
          'avc1.42e028',
          'avc1.4d0028',
          'avc1.420028',
          'avc1.640028',
          'avc1.4d002a',
          'avc1.640032'
        ];
        for (const codecStr of h264Candidates) {
          try {
            const cfg = {
              codec: codecStr,
              width: outW,
              height: outH,
              bitrate: TARGET_VIDEO_BITRATE,
              framerate: TARGET_FPS,
              latencyMode: 'quality',
              avc: { format: 'avc' }
            };
            const sup = await VideoEncoder.isConfigSupported(cfg);
            if (sup && sup.supported) {
              selectedVideoConfig = sup.config || cfg;
              webCodecsReady = true;
              break;
            }
          } catch (e) {}
        }
      }

      if (webCodecsReady && activeAudioTracksToMix.length > 0 && typeof window.AudioEncoder === 'function' && typeof window.AudioData === 'function') {
        try {
          const aCfg = {
            codec: 'mp4a.40.2',
            sampleRate: SAMPLE_RATE,
            numberOfChannels: NUM_CHANNELS,
            bitrate: TARGET_AUDIO_BITRATE
          };
          const aSup = await AudioEncoder.isConfigSupported(aCfg);
          if (aSup && aSup.supported) {
            selectedAudioConfig = aSup.config || aCfg;
          }
        } catch (e) {
          selectedAudioConfig = null;
        }
      }

      if (webCodecsReady && selectedVideoConfig) {
        const totalFrames = Math.max(1, Math.round(recordSeconds * TARGET_FPS));
        const frameDurationUs = Math.round(1_000_000 / TARGET_FPS);

        const muxerOpts = {
          target: new window.Mp4Muxer.ArrayBufferTarget(),
          video: {
            codec: 'avc',
            width: outW,
            height: outH,
            frameRate: TARGET_FPS
          },
          fastStart: 'in-memory',
          firstTimestampBehavior: 'offset'
        };
        if (selectedAudioConfig && activeAudioTracksToMix.length > 0) {
          muxerOpts.audio = {
            codec: 'aac',
            numberOfChannels: NUM_CHANNELS,
            sampleRate: SAMPLE_RATE
          };
        }

        const muxer = new window.Mp4Muxer.Muxer(muxerOpts);
        let encoderError = null;

        const videoEncoder = new VideoEncoder({
          output: (chunk, meta) => {
            try { muxer.addVideoChunk(chunk, meta); } catch (e) { encoderError = e; }
          },
          error: (e) => { encoderError = e; }
        });
        videoEncoder.configure(selectedVideoConfig);

        let audioEncoder = null;
        if (selectedAudioConfig && activeAudioTracksToMix.length > 0) {
          audioEncoder = new AudioEncoder({
            output: (chunk, meta) => {
              try { muxer.addAudioChunk(chunk, meta); } catch (e) {}
            },
            error: (e) => { console.warn('AudioEncoder warning:', e); }
          });
          audioEncoder.configure(selectedAudioConfig);
        }

        // 先试编码首帧，验证当前显卡硬件编码器不会抛错；若首帧报错则自动无缝切换至 MediaRecorder 引擎
        let firstFrameOk = false;
        try {
          const testFrame = new VideoFrame(offCanvas, { timestamp: 0, duration: frameDurationUs });
          videoEncoder.encode(testFrame, { keyFrame: true });
          testFrame.close();
          if (!encoderError) firstFrameOk = true;
        } catch (firstErr) {
          firstFrameOk = false;
        }

        if (firstFrameOk) {
          let encodedFrames = 1;
          let intervalId = null;
          let finishing = false;

          const finalizeMp4Export = async () => {
            if (finishing) return;
            finishing = true;
            stopActiveExportFn = null;
            if (intervalId) clearInterval(intervalId);

            try {
              if (btn) btn.textContent = '⏳ 正在合成音轨并封装 MP4...';
              const actualRecordedSec = Math.max(0.5, encodedFrames / TARGET_FPS);

              if (audioEncoder && activeAudioTracksToMix.length > 0) {
                try {
                  const totalSamples = Math.floor(actualRecordedSec * SAMPLE_RATE);
                  const chunkFrames = 1024;
                  for (let offset = 0; offset < totalSamples; offset += chunkFrames) {
                    const curFrames = Math.min(chunkFrames, totalSamples - offset);
                    if (curFrames <= 0) break;
                    const planarBuf = new Float32Array(curFrames * NUM_CHANNELS);

                    for (const track of activeAudioTracksToMix) {
                      const ab = track.buffer;
                      if (!ab || ab.length === 0) continue;
                      const ratio = ab.sampleRate / SAMPLE_RATE;
                      const startSampleInTrack = Math.floor(track.startSec * ab.sampleRate);
                      for (let ch = 0; ch < NUM_CHANNELS; ch++) {
                        const srcData = ab.getChannelData(Math.min(ch, ab.numberOfChannels - 1));
                        const dstOffset = ch * curFrames;
                        for (let i = 0; i < curFrames; i++) {
                          const srcIdx = (startSampleInTrack + Math.floor((offset + i) * ratio)) % ab.length;
                          const sample = srcData[srcIdx] * track.gain;
                          const combined = planarBuf[dstOffset + i] + sample;
                          planarBuf[dstOffset + i] = Math.max(-1, Math.min(1, combined));
                        }
                      }
                    }

                    const timestampUs = Math.round((offset / SAMPLE_RATE) * 1_000_000);
                    const audioData = new AudioData({
                      format: 'f32-planar',
                      sampleRate: SAMPLE_RATE,
                      numberOfFrames: curFrames,
                      numberOfChannels: NUM_CHANNELS,
                      timestamp: timestampUs,
                      data: planarBuf
                    });
                    audioEncoder.encode(audioData);
                    audioData.close();
                  }
                  await audioEncoder.flush();
                  audioEncoder.close();
                } catch (audErr) {
                  console.warn('Audio mux note:', audErr);
                }
              }

              await videoEncoder.flush();
              videoEncoder.close();
              muxer.finalize();

              if (encoderError) throw encoderError;

              const { buffer } = muxer.target;
              const blob = new Blob([buffer], { type: 'video/mp4' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.style.display = 'none';
              a.href = url;
              a.download = `Laya_iPhone_${spec.w}x${spec.h}_${actualRecordedSec.toFixed(1)}s_${Date.now()}.mp4`;
              document.body.appendChild(a);
              a.click();
              setTimeout(() => {
                if (a.parentNode) a.parentNode.removeChild(a);
                URL.revokeObjectURL(url);
              }, 800);

              const hasSoundMsg = activeAudioTracksToMix.length > 0 ? '含原声音轨' : '静音画面';
              showPcToast(`🎉 导出成功！(${outW}×${outH} · ${actualRecordedSec.toFixed(1)}秒 · ${hasSoundMsg})`);
            } catch (err) {
              console.error('Export error:', err);
              showPcToast(`❌ 导出失败：${err.message || '请重试'}`);
            } finally {
              resetExportUi();
            }
          };

          stopActiveExportFn = finalizeMp4Export;

          intervalId = setInterval(() => {
            if (finishing) return;
            renderAppStageToCanvas(ctx, outW, outH, hideTopIcons);

            try {
              const timestampUs = Math.round(encodedFrames * (1_000_000 / TARGET_FPS));
              const frame = new VideoFrame(offCanvas, {
                timestamp: timestampUs,
                duration: frameDurationUs
              });
              videoEncoder.encode(frame, { keyFrame: encodedFrames % TARGET_FPS === 0 });
              frame.close();
              encodedFrames += 1;
            } catch (fErr) {
              console.warn('Frame encode warning:', fErr);
            }

            const elapsed = encodedFrames / TARGET_FPS;
            const remain = Math.max(0, recordSeconds - elapsed);
            const pct = Math.min(99, Math.round((encodedFrames / totalFrames) * 100));
            if (progFill) progFill.style.width = `${pct}%`;
            if (btn) btn.textContent = `🔴 录制中 ${pct}% (剩 ${remain.toFixed(1)}s · 点击立即完成)`;

            if (encodedFrames >= totalFrames) {
              finalizeMp4Export();
            }
          }, Math.round(1000 / TARGET_FPS));

          return;
        } else {
          try { videoEncoder.close(); } catch (e) {}
          try { if (audioEncoder) audioEncoder.close(); } catch (e) {}
        }
      }

      // ==================== 通用实时录制方案：MediaRecorder + WebAudio 实时混音流 ====================
      const canvasStream = offCanvas.captureStream(TARGET_FPS);
      const liveAudioTracks = buildLiveWebAudioMixStream();
      const streamWithAudio = new MediaStream([
        ...canvasStream.getVideoTracks(),
        ...liveAudioTracks
      ]);
      const streamVideoOnly = new MediaStream([
        ...canvasStream.getVideoTracks()
      ]);

      const tryConfigs = [
        { stream: streamWithAudio, mime: 'video/mp4;codecs="avc1.42E01F, mp4a.40.2"', ext: 'mp4' },
        { stream: streamWithAudio, mime: 'video/mp4;codecs="avc1.4D401F, mp4a.40.2"', ext: 'mp4' },
        { stream: streamWithAudio, mime: 'video/mp4', ext: 'mp4' },
        { stream: streamWithAudio, mime: 'video/webm;codecs="h264,opus"', ext: 'mp4' },
        { stream: streamWithAudio, mime: 'video/webm;codecs="vp8,opus"', ext: 'webm' },
        { stream: streamWithAudio, mime: 'video/webm', ext: 'webm' },
        { stream: streamVideoOnly, mime: 'video/mp4', ext: 'mp4' },
        { stream: streamVideoOnly, mime: 'video/webm', ext: 'webm' },
        { stream: streamVideoOnly, mime: '', ext: 'mp4' }
      ];

      let recorder = null;
      let chosenExt = 'mp4';
      let chosenMime = 'video/mp4';
      const chunks = [];

      for (const cfg of tryConfigs) {
        if (cfg.mime && (!window.MediaRecorder || !MediaRecorder.isTypeSupported(cfg.mime))) {
          continue;
        }
        try {
          const opts = { videoBitsPerSecond: TARGET_VIDEO_BITRATE };
          if (cfg.mime) opts.mimeType = cfg.mime;
          const candidate = new MediaRecorder(cfg.stream, opts);
          candidate.ondataavailable = (e) => {
            if (e.data && e.data.size > 0) chunks.push(e.data);
          };
          candidate.start(200);
          recorder = candidate;
          chosenExt = cfg.ext;
          chosenMime = cfg.mime || candidate.mimeType || 'video/mp4';
          break;
        } catch (recErr) {}
      }

      if (!recorder) {
        throw new Error('当前浏览器不支持视频录制，请使用 Chrome 或 Edge 浏览器');
      }

      const recStart = performance.now();
      let timerId = null;

      const finishFallbackRec = () => {
        if (timerId) clearInterval(timerId);
        stopActiveExportFn = null;
        try {
          if (recorder && recorder.state !== 'inactive') recorder.stop();
        } catch (e) {
          resetExportUi();
        }
      };
      stopActiveExportFn = finishFallbackRec;

      recorder.onstop = () => {
        const actualSec = Math.max(0.5, (performance.now() - recStart) / 1000).toFixed(1);
        resetExportUi();
        if (chunks.length > 0) {
          const blob = new Blob(chunks, { type: chosenMime });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          a.download = `Laya_iPhone_${spec.w}x${spec.h}_${actualSec}s_${Date.now()}.${chosenExt}`;
          document.body.appendChild(a);
          a.click();
          setTimeout(() => {
            if (a.parentNode) a.parentNode.removeChild(a);
            URL.revokeObjectURL(url);
          }, 800);
          showPcToast(`🎉 视频导出成功！(${outW}×${outH} · ${actualSec}秒)`);
        }
      };

      timerId = setInterval(() => {
        const elapsed = (performance.now() - recStart) / 1000;
        if (elapsed >= recordSeconds) {
          finishFallbackRec();
          return;
        }
        renderAppStageToCanvas(ctx, outW, outH, hideTopIcons);
        const remain = Math.max(0, recordSeconds - elapsed);
        const pct = Math.min(99, Math.round((elapsed / recordSeconds) * 100));
        if (progFill) progFill.style.width = `${pct}%`;
        if (btn) btn.textContent = `🔴 录制中 ${pct}% (剩 ${remain.toFixed(1)}s · 点击立即完成)`;
      }, Math.round(1000 / TARGET_FPS));
    } catch (err) {
      console.error('Video export error:', err);
      resetExportUi();
      showPcToast(`❌ 导出失败：${err.message || '请重试'}`);
    }
  }

  // ==================== 初始化 ====================
  async function restoreSavedMediaBlobs() {
    const [savedPeerBlob, savedSelfBlob, savedAudioBlob] = await Promise.all([
      idbGetMedia('peerVideo'),
      idbGetMedia('selfVideo'),
      idbGetMedia('customAudio')
    ]);
    if (savedPeerBlob) {
      setPeerVideoFromFile(savedPeerBlob, true);
    }
    if (savedSelfBlob) {
      setSelfVideoFromFile(savedSelfBlob, true);
    }
    if (savedAudioBlob) {
      state.customAudioBlob = savedAudioBlob;
      const audioUrl = URL.createObjectURL(savedAudioBlob);
      customAudioEl = new Audio(audioUrl);
      customAudioEl.loop = true;
      syncPcStudioUI();
    }
  }

  function initApp() {
    loadScreenState();
    loadCustomLayout();
    applyCustomLayout();
    const savedModel = loadPref('laya_iphone_model_v1', '393x852');
    applyIphoneModelSize(savedModel, false);
    bindPcStudioEvents();
    $('pcExportImgBtn')?.addEventListener('click', exportHighDefScreenshot);
    $('pcExportVideoBtn')?.addEventListener('click', exportVideoWithSound);
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
