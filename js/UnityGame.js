      var myUnityGame;
      var buildUrl = "Build";
      var loaderUrl = buildUrl + "/BuildBase.loader.js";
      var config = {
        dataUrl: buildUrl + "/BuildBase.data",
        frameworkUrl: buildUrl + "/BuildBase.framework.js",
        codeUrl: buildUrl + "/BuildBase.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "DefaultCompany",
        productName: "WebGL SmartScreen",
        productVersion: "0.1",
      };

      var container = document.querySelector("#unity-container");
      var canvas = document.querySelector("#unity-canvas");
      var loadingBar = document.querySelector("#unity-loading-bar");
      var progressBarFull = document.querySelector("#unity-progress-bar-full");
      var fullscreenButton = document.querySelector("#unity-fullscreen-button");
      var mobileWarning = document.querySelector("#unity-mobile-warning");

      // By default Unity keeps WebGL canvas render target size matched with
      // the DOM size of the canvas element (scaled by window.devicePixelRatio)
      // Set this to false if you want to decouple this synchronization from
      // happening inside the engine, and you would instead like to size up
      // the canvas DOM size and WebGL render target sizes yourself.
      // config.matchWebGLToCanvasSize = false;

     if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        // Mobile device style: fill the whole browser client area with the game canvas:
 
        var meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes';
        document.getElementsByTagName('head')[0].appendChild(meta);
        container.className = "unity-mobile";
        // Avoid draining fillrate performance on mobile devices,
        // and default/override low DPI mode on mobile browsers.
        // config.devicePixelRatio = 1;
 
        // To lower canvas resolution on mobile devices to gain some
        // performance, uncomment the following line:
        //config.devicePixelRatio = 1;
 
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
        container.style.pointerEvents = "none";

      } else {
        canvas.style.width =  window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
      }
      loadingBar.style.display = "block";

      var script = document.createElement("script");
      script.src = loaderUrl;
      script.onload = () => {
        createUnityInstance(canvas, config, (progress) => {
          progressBarFull.style.width = 100 * progress + "%";
        }).then((unityInstance) => {
          loadingBar.style.display = "none";
          myUnityGame = unityInstance;

        }).catch((message) => {
          alert(message);
        });
      };
      document.body.appendChild(script);