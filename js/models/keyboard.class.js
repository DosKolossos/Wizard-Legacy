class Keyboard {
    LEFT = false;
    RIGHT = false;
    SPACE = false;
    W = false;
    E = false;
    R = false;
    ESC = false;
    ENTER = false;

    enabled = true;
    spellsAvailable = true;
    shieldAvailable = true;

    constructor() {
        this.bindBtsPressEvents();
      }
  /**
   * Binds key press events to update the keyboard state.
   */
    bindBtsPressEvents() {
        setTimeout(() => {
          bindButtonTouchEvents("btnleft", "LEFT", true);
          bindButtonTouchEvents("btnleft", "LEFT", false);
          bindButtonTouchEvents("btnright", "RIGHT", true);
          bindButtonTouchEvents("btnright", "RIGHT", false);
          bindButtonTouchEvents("btnSpellE", "E", true);
          bindButtonTouchEvents("btnSpellE", "E", false);
          bindButtonTouchEvents("btnSpellW", "W", true);
          bindButtonTouchEvents("btnSpellW", "W", false);
          bindButtonTouchEvents("btnSpellR", "R", true);
          bindButtonTouchEvents("btnSpellR", "R", false);
          bindButtonTouchEvents("btnjump", "SPACE", true);
          bindButtonTouchEvents("btnjump", "SPACE", false);
          bindButtonTouchEvents("mobileESCButton", "ESC", true);
          bindButtonTouchEvents("mobileESCButton", "ESC", false);
        }, 500);
    
        /**
         * Binds touch events for a specific button element.
         *
         * @param {string} buttonId - The ID of the button element.
         * @param {string} key - The corresponding keyboard key associated with the button.
         * @param {boolean} isPressed - True if the touchstart event, false if touchend event.
         */
        function bindButtonTouchEvents(buttonId, key, isPressed) {
          const button = document.getElementById(buttonId);
          button.addEventListener(isPressed ? "touchstart" : "touchend", (e) => {
            e.preventDefault();
            keyboard[key] = isPressed;
          });
        }
      }
    }
