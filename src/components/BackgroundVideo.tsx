import React, { useState, useEffect, useRef } from 'react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

interface BackgroundVideoProps {
  videoId?: string;
  videoUrl?: string;
  posterImage?: string;
  title?: string;
  overlayOpacity?: string;
  brightness?: number;
  contrast?: number;
}

// Global script loader helper for YouTube IFrame API
let ytScriptLoading = false;
const loadYTScript = (callback: () => void) => {
  if (typeof window === 'undefined') return;
  if (window.YT && window.YT.Player) {
    callback();
    return;
  }

  const existingCallbacks = (window as any)._ytCallbacks || [];
  existingCallbacks.push(callback);
  (window as any)._ytCallbacks = existingCallbacks;

  if (!ytScriptLoading) {
    ytScriptLoading = true;
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    tag.async = true;
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      const cbs = (window as any)._ytCallbacks || [];
      cbs.forEach((cb: () => void) => cb());
      (window as any)._ytCallbacks = [];
    };
  }
};

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoId,
  videoUrl,
  posterImage,
  title = 'Background Showcase Video',
  overlayOpacity = 'bg-black/20',
  brightness = 0.72,
  contrast = 1.08,
}) => {
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const loopIntervalRef = useRef<any>(null);

  // Direct HTML5 Video
  if (videoUrl) {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#090a0f]">
        {posterImage && (
          <div
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              isReady ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ backgroundImage: `url(${posterImage})` }}
          />
        )}
        <video
          src={videoUrl}
          poster={posterImage}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="auto"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover transition-opacity duration-700 pointer-events-none"
          style={{
            filter: `brightness(${brightness}) contrast(${contrast})`,
            opacity: isReady ? 1 : 0,
          }}
          onCanPlay={() => setIsReady(true)}
        />
        {/* Absolute Non-Interactive Transparent Shield */}
        <div className="absolute inset-0 z-10 pointer-events-auto cursor-default bg-transparent" />
        <div className={`absolute inset-0 z-10 ${overlayOpacity}`} />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#090a0f] via-transparent to-black/40 pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />
      </div>
    );
  }

  // YouTube Embed with Official YT.Player API
  useEffect(() => {
    if (!videoId) return;

    let isMounted = true;

    loadYTScript(() => {
      if (!isMounted || !containerRef.current) return;

      if (playerRef.current && playerRef.current.destroy) {
        try {
          playerRef.current.destroy();
        } catch {}
        playerRef.current = null;
      }

      const playerDiv = document.createElement('div');
      containerRef.current.innerHTML = '';
      containerRef.current.appendChild(playerDiv);

      playerRef.current = new window.YT.Player(playerDiv, {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          iv_load_policy: 3,
          disablekb: 1,
          modestbranding: 1,
          playsinline: 1,
          fs: 0,
          autohide: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (event: any) => {
            if (!isMounted) return;
            event.target.mute();
            event.target.playVideo();
            setTimeout(() => {
              if (isMounted) setIsReady(true);
            }, 300);

            // Active smooth loop monitor to restart video before pause/endscreen HUD can appear
            if (loopIntervalRef.current) clearInterval(loopIntervalRef.current);
            loopIntervalRef.current = setInterval(() => {
              try {
                if (event.target && event.target.getCurrentTime && event.target.getDuration) {
                  const current = event.target.getCurrentTime();
                  const duration = event.target.getDuration();
                  if (duration > 0 && current >= duration - 0.35) {
                    event.target.seekTo(0, true);
                    event.target.playVideo();
                  }
                }
              } catch {
                // Ignore API timing blips
              }
            }, 200);
          },
          onStateChange: (event: any) => {
            // When video finishes or pauses, immediately resume from start
            if (event.data === 0 || event.data === window.YT.PlayerState.ENDED || event.data === 2) {
              event.target.seekTo(0, true);
              event.target.playVideo();
            }
          },
        },
      });
    });

    return () => {
      isMounted = false;
      if (loopIntervalRef.current) clearInterval(loopIntervalRef.current);
      if (playerRef.current && playerRef.current.destroy) {
        try {
          playerRef.current.destroy();
        } catch {}
        playerRef.current = null;
      }
    };
  }, [videoId]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#090a0f]">
      {/* Fallback / Loading Poster Backdrop */}
      {posterImage && (
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            isReady ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ backgroundImage: `url(${posterImage})` }}
        />
      )}

      {/* Overscaled Container that pushes all YouTube HUD elements (headers, play/pause badges) outside bounds */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center transition-opacity duration-700 pointer-events-none select-none"
        style={{ opacity: isReady ? 1 : 0 }}
      >
        <div
          ref={containerRef}
          className="pointer-events-none select-none [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:pointer-events-none [&>iframe]:border-0"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '160vw',
            height: '160vh',
            minWidth: '150%',
            minHeight: '150%',
            transform: 'translate(-50%, -50%) scale(1.45)',
            filter: `brightness(${brightness}) contrast(${contrast})`,
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Physical Click & Interaction Shield: Intercepts all mouse/touch events so YouTube HUD can never trigger */}
      <div className="absolute inset-0 z-10 pointer-events-auto cursor-default bg-transparent" />

      {/* Luxury Vignettes & Atmosphere Gradients */}
      <div className={`absolute inset-0 z-10 ${overlayOpacity} pointer-events-none`} />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#090a0f] via-transparent to-black/40 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />
    </div>
  );
};
