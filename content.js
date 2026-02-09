const SKIP_SELECTORS = [
  ".ytp-ad-skip-button",
  ".ytp-ad-skip-button-modern",
  ".ytp-ad-skip-button-container button"
];

const AD_OVERLAY_SELECTORS = [
  "#player-ads",
  "#masthead-ad",
  "ytd-ad-slot-renderer",
  "ytd-companion-slot-renderer",
  "ytd-display-ad-renderer",
  "ytd-promoted-sparkles-web-renderer",
  "ytd-promoted-video-renderer",
  "ytd-banner-promo-renderer",
  "ytd-action-companion-ad-renderer",
  ".ytp-ad-overlay-container"
];

const state = {
  inAd: false,
  rate: 1,
  muted: false
};

function getPlayer() {
  return document.querySelector(".html5-video-player");
}

function getVideo() {
  return document.querySelector("video");
}

function isAdShowing() {
  const player = getPlayer();
  if (player && player.classList.contains("ad-showing")) return true;
  if (document.querySelector(".ytp-ad-player-overlay")) return true;
  if (document.querySelector(".ytp-ad-text")) return true;
  return false;
}

function clickSkip() {
  for (const sel of SKIP_SELECTORS) {
    const btn = document.querySelector(sel);
    if (btn) {
      btn.click();
      return true;
    }
  }
  return false;
}

function hideOverlays() {
  for (const sel of AD_OVERLAY_SELECTORS) {
    const nodes = document.querySelectorAll(sel);
    if (!nodes.length) continue;
    for (const el of nodes) {
      if (el.style.display !== "none") {
        el.style.display = "none";
      }
    }
  }
}

function handleAdPlayback(isAd) {
  const video = getVideo();
  if (!video) return;

  if (isAd) {
    if (!state.inAd) {
      state.inAd = true;
      state.rate = video.playbackRate || 1;
      state.muted = video.muted;
    }
    video.playbackRate = 16;
    video.muted = true;
    clickSkip();
    return;
  }

  if (state.inAd) {
    state.inAd = false;
    video.playbackRate = state.rate || 1;
    video.muted = state.muted || false;
  }
}

function tick() {
  hideOverlays();
  const isAd = isAdShowing();
  handleAdPlayback(isAd);
  clickSkip();
}

const observer = new MutationObserver(() => tick());
observer.observe(document.documentElement, { subtree: true, childList: true });

setInterval(tick, 500);

document.addEventListener("yt-navigate-finish", () => {
  setTimeout(tick, 200);
});
