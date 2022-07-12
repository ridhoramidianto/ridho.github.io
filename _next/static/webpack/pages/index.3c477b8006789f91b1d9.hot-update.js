webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/framer-motion/dist/framer-motion.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/framer-motion/dist/framer-motion.es.js ***!
  \*************************************************************/
/*! exports provided: AnimateLayoutFeature, AnimatePresence, AnimateSharedLayout, AnimationControls, AnimationFeature, DragControls, DragFeature, ExitFeature, FramerTreeLayoutContext, GesturesFeature, HTMLVisualElement, MotionConfig, MotionConfigContext, MotionValue, PresenceContext, SharedLayoutContext, VisibilityAction, addScaleCorrection, animate, animationControls, createBatcher, createDomMotionComponent, createMotionComponent, isValidMotionProp, m, motion, motionValue, resolveMotionValue, startAnimation, startVisualElementAnimation, transform, useAnimatedState, useAnimation, useCycle, useDomEvent, useDragControls, useElementScroll, useExternalRef, useGestures, useInvertedScale, useIsPresent, useMotionTemplate, useMotionValue, usePanGesture, usePresence, useReducedMotion, useSpring, useTapGesture, useTransform, useViewportScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateLayoutFeature", function() { return AnimateLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatePresence", function() { return AnimatePresence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateSharedLayout", function() { return AnimateSharedLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationControls", function() { return AnimationControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationFeature", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragControls", function() { return DragControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragFeature", function() { return Drag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitFeature", function() { return Exit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FramerTreeLayoutContext", function() { return FramerTreeLayoutContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GesturesFeature", function() { return Gestures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLVisualElement", function() { return HTMLVisualElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionConfig", function() { return MotionConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionConfigContext", function() { return MotionConfigContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionValue", function() { return MotionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresenceContext", function() { return PresenceContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedLayoutContext", function() { return SharedLayoutContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibilityAction", function() { return VisibilityAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addScaleCorrection", function() { return addScaleCorrection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationControls", function() { return animationControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBatcher", function() { return createBatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDomMotionComponent", function() { return createDomMotionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMotionComponent", function() { return createMotionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidMotionProp", function() { return isValidMotionProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "motion", function() { return motion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "motionValue", function() { return motionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveMotionValue", function() { return resolveMotionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startAnimation", function() { return startAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startVisualElementAnimation", function() { return startVisualElementAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return transform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnimatedState", function() { return useAnimatedState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnimation", function() { return useAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCycle", function() { return useCycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDomEvent", function() { return useDomEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDragControls", function() { return useDragControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useElementScroll", function() { return useElementScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useExternalRef", function() { return useExternalRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useGestures", function() { return useGestures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInvertedScale", function() { return useInvertedScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsPresent", function() { return useIsPresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMotionTemplate", function() { return useMotionTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMotionValue", function() { return useMotionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePanGesture", function() { return usePanGesture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePresence", function() { return usePresence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducedMotion", function() { return useReducedMotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpring", function() { return useSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTapGesture", function() { return useTapGesture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransform", function() { return useTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useViewportScroll", function() { return useViewportScroll; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/framesync.es.js");
/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! popmotion */ "./node_modules/popmotion/dist/popmotion.es.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);







var isRefObject = function (ref) {
    return typeof ref === "object" && ref.hasOwnProperty("current");
};

/**
 * A generic subscription manager.
 */
var SubscriptionManager = /** @class */ (function () {
    function SubscriptionManager() {
        this.subscriptions = new Set();
    }
    SubscriptionManager.prototype.add = function (handler) {
        var _this = this;
        this.subscriptions.add(handler);
        return function () { return void _this.subscriptions.delete(handler); };
    };
    SubscriptionManager.prototype.notify = function (
    /**
     * Using ...args would be preferable but it's array creation and this
     * might be fired every frame.
     */
    a, b, c) {
        var e_1, _a;
        if (!this.subscriptions.size)
            return;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var handler = _c.value;
                handler(a, b, c);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    SubscriptionManager.prototype.clear = function () {
        this.subscriptions.clear();
    };
    return SubscriptionManager;
}());

var isFloat = function (value) {
    return !isNaN(parseFloat(value));
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */
var MotionValue = /** @class */ (function () {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */
    function MotionValue(init) {
        var _this = this;
        /**
         * Duration, in milliseconds, since last updating frame.
         *
         * @internal
         */
        this.timeDelta = 0;
        /**
         * Timestamp of the last time this `MotionValue` was updated.
         *
         * @internal
         */
        this.lastUpdated = 0;
        /**
         * Functions to notify when the `MotionValue` updates.
         *
         * @internal
         */
        this.updateSubscribers = new SubscriptionManager();
        /**
         * Functions to notify when the `MotionValue` updates and `render` is set to `true`.
         *
         * @internal
         */
        this.renderSubscribers = new SubscriptionManager();
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */
        this.canTrackVelocity = false;
        this.updateAndNotify = function (v, render) {
            if (render === void 0) { render = true; }
            _this.prev = _this.current;
            _this.current = v;
            if (_this.prev !== _this.current) {
                _this.updateSubscribers.notify(_this.current);
            }
            if (render) {
                _this.renderSubscribers.notify(_this.current);
            }
            // Update timestamp
            var _a = Object(framesync__WEBPACK_IMPORTED_MODULE_1__["getFrameData"])(), delta = _a.delta, timestamp = _a.timestamp;
            if (_this.lastUpdated !== timestamp) {
                _this.timeDelta = delta;
                _this.lastUpdated = timestamp;
                framesync__WEBPACK_IMPORTED_MODULE_1__["default"].postRender(_this.scheduleVelocityCheck);
            }
        };
        /**
         * Schedule a velocity check for the next frame.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.scheduleVelocityCheck = function () { return framesync__WEBPACK_IMPORTED_MODULE_1__["default"].postRender(_this.velocityCheck); };
        /**
         * Updates `prev` with `current` if the value hasn't been updated this frame.
         * This ensures velocity calculations return `0`.
         *
         * This is an instanced and bound function to prevent generating a new
         * function once per frame.
         *
         * @internal
         */
        this.velocityCheck = function (_a) {
            var timestamp = _a.timestamp;
            if (timestamp !== _this.lastUpdated) {
                _this.prev = _this.current;
            }
        };
        this.set(init, false);
        this.canTrackVelocity = isFloat(this.current);
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * @library
     *
     * ```jsx
     * function MyComponent() {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.onChange(updateOpacity)
     *     const unsubscribeY = y.onChange(updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <Frame x={x} />
     * }
     * ```
     *
     * @motion
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.onChange(updateOpacity)
     *     const unsubscribeY = y.onChange(updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @internalremarks
     *
     * We could look into a `useOnChange` hook if the above lifecycle management proves confusing.
     *
     * ```jsx
     * useOnChange(x, () => {})
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @public
     */
    MotionValue.prototype.onChange = function (subscription) {
        return this.updateSubscribers.add(subscription);
    };
    MotionValue.prototype.clearListeners = function () {
        this.updateSubscribers.clear();
    };
    /**
     * Adds a function that will be notified when the `MotionValue` requests a render.
     *
     * @param subscriber - A function that's provided the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @internal
     */
    MotionValue.prototype.onRenderRequest = function (subscription) {
        // Render immediately
        subscription(this.get());
        return this.renderSubscribers.add(subscription);
    };
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */
    MotionValue.prototype.attach = function (passiveEffect) {
        this.passiveEffect = passiveEffect;
    };
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    MotionValue.prototype.set = function (v, render) {
        if (render === void 0) { render = true; }
        if (!render || !this.passiveEffect) {
            this.updateAndNotify(v, render);
        }
        else {
            this.passiveEffect(v, this.updateAndNotify);
        }
    };
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    MotionValue.prototype.get = function () {
        return this.current;
    };
    /**
     * @public
     */
    MotionValue.prototype.getPrevious = function () {
        return this.prev;
    };
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    MotionValue.prototype.getVelocity = function () {
        // This could be isFloat(this.prev) && isFloat(this.current), but that would be wasteful
        return this.canTrackVelocity
            ? // These casts could be avoided if parseFloat would be typed better
                Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["velocityPerSecond"])(parseFloat(this.current) -
                    parseFloat(this.prev), this.timeDelta)
            : 0;
    };
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */
    MotionValue.prototype.start = function (animation) {
        var _this = this;
        this.stop();
        return new Promise(function (resolve) {
            _this.stopAnimation = animation(resolve);
        }).then(function () { return _this.clearAnimation(); });
    };
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    MotionValue.prototype.stop = function () {
        if (this.stopAnimation)
            this.stopAnimation();
        this.clearAnimation();
    };
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    MotionValue.prototype.isAnimating = function () {
        return !!this.stopAnimation;
    };
    MotionValue.prototype.clearAnimation = function () {
        this.stopAnimation = null;
    };
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    MotionValue.prototype.destroy = function () {
        this.updateSubscribers.clear();
        this.renderSubscribers.clear();
        this.stop();
    };
    return MotionValue;
}());
/**
 * @internal
 */
function motionValue(init) {
    return new MotionValue(init);
}

/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */
var secondsToMilliseconds = function (seconds) { return seconds * 1000; };

var easingLookup = {
    linear: popmotion__WEBPACK_IMPORTED_MODULE_2__["linear"],
    easeIn: popmotion__WEBPACK_IMPORTED_MODULE_2__["easeIn"],
    easeInOut: popmotion__WEBPACK_IMPORTED_MODULE_2__["easeInOut"],
    easeOut: popmotion__WEBPACK_IMPORTED_MODULE_2__["easeOut"],
    circIn: popmotion__WEBPACK_IMPORTED_MODULE_2__["circIn"],
    circInOut: popmotion__WEBPACK_IMPORTED_MODULE_2__["circInOut"],
    circOut: popmotion__WEBPACK_IMPORTED_MODULE_2__["circOut"],
    backIn: popmotion__WEBPACK_IMPORTED_MODULE_2__["backIn"],
    backInOut: popmotion__WEBPACK_IMPORTED_MODULE_2__["backInOut"],
    backOut: popmotion__WEBPACK_IMPORTED_MODULE_2__["backOut"],
    anticipate: popmotion__WEBPACK_IMPORTED_MODULE_2__["anticipate"],
    bounceIn: popmotion__WEBPACK_IMPORTED_MODULE_2__["bounceIn"],
    bounceInOut: popmotion__WEBPACK_IMPORTED_MODULE_2__["bounceInOut"],
    bounceOut: popmotion__WEBPACK_IMPORTED_MODULE_2__["bounceOut"],
};
var easingDefinitionToFunction = function (definition) {
    if (Array.isArray(definition)) {
        // If cubic bezier definition, create bezier curve
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(definition.length === 4, "Cubic bezier arrays must contain four numerical values.");
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(definition, 4), x1 = _a[0], y1 = _a[1], x2 = _a[2], y2 = _a[3];
        return Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["cubicBezier"])(x1, y1, x2, y2);
    }
    else if (typeof definition === "string") {
        // Else lookup from table
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(easingLookup[definition] !== undefined, "Invalid easing type '" + definition + "'");
        return easingLookup[definition];
    }
    return definition;
};
var isEasingArray = function (ease) {
    return Array.isArray(ease) && typeof ease[0] !== "number";
};

/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */
var isAnimatable = function (key, value) {
    // If the list of keys tat might be non-animatable grows, replace with Set
    if (key === "zIndex")
        return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value))
        return true;
    if (typeof value === "string" && // It's animatable if we have a string
        style_value_types__WEBPACK_IMPORTED_MODULE_4__["complex"].test(value) && // And it contains numbers and/or colors
        !value.startsWith("url(") // Unless it starts with "url("
    ) {
        return true;
    }
    return false;
};

var isKeyframesTarget = function (v) {
    return Array.isArray(v);
};

var underDampedSpring = function () { return ({
    type: "spring",
    stiffness: 500,
    damping: 25,
    restDelta: 0.5,
    restSpeed: 10,
}); };
var overDampedSpring = function (to) { return ({
    type: "spring",
    stiffness: 550,
    damping: to === 0 ? 100 : 30,
    restDelta: 0.01,
    restSpeed: 10,
}); };
var linearTween = function () { return ({
    type: "keyframes",
    ease: "linear",
    duration: 0.3,
}); };
var keyframes = function (values) { return ({
    type: "keyframes",
    duration: 0.8,
    values: values,
}); };
var defaultTransitions = {
    x: underDampedSpring,
    y: underDampedSpring,
    z: underDampedSpring,
    rotate: underDampedSpring,
    rotateX: underDampedSpring,
    rotateY: underDampedSpring,
    rotateZ: underDampedSpring,
    scaleX: overDampedSpring,
    scaleY: overDampedSpring,
    scale: overDampedSpring,
    opacity: linearTween,
    backgroundColor: linearTween,
    color: linearTween,
    default: overDampedSpring,
};
var getDefaultTransition = function (valueKey, to) {
    var transitionFactory;
    if (isKeyframesTarget(to)) {
        transitionFactory = keyframes;
    }
    else {
        transitionFactory =
            defaultTransitions[valueKey] || defaultTransitions.default;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ to: to }, transitionFactory(to));
};

/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */
function isTransitionDefined(_a) {
    var when = _a.when, delay = _a.delay, delayChildren = _a.delayChildren, staggerChildren = _a.staggerChildren, staggerDirection = _a.staggerDirection, repeat = _a.repeat, repeatType = _a.repeatType, repeatDelay = _a.repeatDelay, from = _a.from, transition = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
    return !!Object.keys(transition).length;
}
/**
 * Convert Framer Motion's Transition type into Popmotion-compatible options.
 */
function convertTransitionToAnimationOptions(_a) {
    var yoyo = _a.yoyo, loop = _a.loop, flip = _a.flip, ease = _a.ease, times = _a.times, transition = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["yoyo", "loop", "flip", "ease", "times"]);
    var options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transition);
    if (times) {
        options.offset = times;
    }
    /**
     * Convert any existing durations from seconds to milliseconds
     */
    if (transition.duration)
        options["duration"] = secondsToMilliseconds(transition.duration);
    if (transition.repeatDelay)
        options.repeatDelay = secondsToMilliseconds(transition.repeatDelay);
    /**
     * Map easing names to Popmotion's easing functions
     */
    if (ease) {
        options["ease"] = isEasingArray(ease)
            ? ease.map(easingDefinitionToFunction)
            : easingDefinitionToFunction(ease);
    }
    /**
     * Support legacy transition API
     */
    if (transition.type === "tween")
        options.type = "keyframes";
    if (yoyo) {
        options.repeatType = "reverse";
    }
    else if (loop) {
        options.repeatType = "loop";
    }
    else if (flip) {
        options.repeatType = "mirror";
    }
    options.repeat = loop || yoyo || flip || transition.repeat;
    /**
     * TODO: Popmotion 9 has the ability to automatically detect whether to use
     * a keyframes or spring animation, but does so by detecting velocity and other spring options.
     * It'd be good to introduce a similar thing here.
     */
    if (transition.type !== "spring")
        options.type = "keyframes";
    return options;
}
/**
 * Get the delay for a value by checking Transition with decreasing specificity.
 */
function getDelayFromTransition(transition, key) {
    var _a, _b, _c, _d, _e;
    return ((_e = (_d = (_b = (_a = transition[key]) === null || _a === void 0 ? void 0 : _a.delay) !== null && _b !== void 0 ? _b : (_c = transition["default"]) === null || _c === void 0 ? void 0 : _c.delay) !== null && _d !== void 0 ? _d : transition.delay) !== null && _e !== void 0 ? _e : 0);
}
function hydrateKeyframes(options) {
    if (Array.isArray(options.to) && options.to[0] === null) {
        options.to = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(options.to);
        options.to[0] = options.from;
    }
    return options;
}
function getPopmotionAnimationOptions(transition, options, key) {
    var _a;
    if (Array.isArray(options.to)) {
        (_a = transition.duration) !== null && _a !== void 0 ? _a : (transition.duration = 0.8);
    }
    hydrateKeyframes(options);
    /**
     * Get a default transition if none is determined to be defined.
     */
    if (!isTransitionDefined(transition)) {
        transition = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transition), getDefaultTransition(key, options.to));
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), convertTransitionToAnimationOptions(transition));
}
/**
 *
 */
function getAnimation(key, value, target, transition, onComplete) {
    var _a;
    var valueTransition = getValueTransition(transition, key);
    var origin = (_a = valueTransition.from) !== null && _a !== void 0 ? _a : value.get();
    var isTargetAnimatable = isAnimatable(key, target);
    /**
     * If we're trying to animate from "none", try and get an animatable version
     * of the target. This could be improved to work both ways.
     */
    if (origin === "none" && isTargetAnimatable && typeof target === "string") {
        origin = style_value_types__WEBPACK_IMPORTED_MODULE_4__["complex"].getAnimatableNone(target);
    }
    var isOriginAnimatable = isAnimatable(key, origin);
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["warning"])(isOriginAnimatable === isTargetAnimatable, "You are trying to animate " + key + " from \"" + origin + "\" to \"" + target + "\". " + origin + " is not an animatable value - to enable this animation set " + origin + " to a value animatable to " + target + " via the `style` property.");
    function start() {
        var options = {
            from: origin,
            to: target,
            velocity: value.getVelocity(),
            onComplete: onComplete,
            onUpdate: function (v) { return value.set(v); },
        };
        return valueTransition.type === "inertia" ||
            valueTransition.type === "decay"
            ? Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["inertia"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), valueTransition))
            : Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["animate"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, getPopmotionAnimationOptions(valueTransition, options, key)), { onUpdate: function (v) {
                    var _a;
                    options.onUpdate(v);
                    (_a = valueTransition.onUpdate) === null || _a === void 0 ? void 0 : _a.call(valueTransition, v);
                }, onComplete: function () {
                    var _a;
                    options.onComplete();
                    (_a = valueTransition.onComplete) === null || _a === void 0 ? void 0 : _a.call(valueTransition);
                } }));
    }
    function set() {
        var _a;
        value.set(target);
        onComplete();
        (_a = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onComplete) === null || _a === void 0 ? void 0 : _a.call(valueTransition);
        return { stop: function () { } };
    }
    return !isOriginAnimatable ||
        !isTargetAnimatable ||
        valueTransition.type === false
        ? set
        : start;
}
function getValueTransition(transition, key) {
    return transition[key] || transition["default"] || transition;
}
/**
 * Start animation on a MotionValue. This function is an interface between
 * Framer Motion and Popmotion
 *
 * @internal
 */
function startAnimation(key, value, target, transition) {
    if (transition === void 0) { transition = {}; }
    return value.start(function (onComplete) {
        var delayTimer;
        var controls;
        var animation = getAnimation(key, value, target, transition, onComplete);
        var delay = getDelayFromTransition(transition, key);
        var start = function () { return (controls = animation()); };
        if (delay) {
            delayTimer = setTimeout(start, secondsToMilliseconds(delay));
        }
        else {
            start();
        }
        return function () {
            clearTimeout(delayTimer);
            controls === null || controls === void 0 ? void 0 : controls.stop();
        };
    });
}

var isCustomValue = function (v) {
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = function (v) {
    // TODO maybe throw if v.length - 1 is placeholder token?
    return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};

/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */
var isNumericalString = function (v) { return /^\-?\d*\.?\d+$/.test(v); };

/**
 * ValueType for "auto"
 */
var auto = {
    test: function (v) { return v === "auto"; },
    parse: function (v) { return v; },
};
/**
 * ValueType for ints
 */
var int = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, style_value_types__WEBPACK_IMPORTED_MODULE_4__["number"]), { transform: Math.round });
/**
 * A map of default value types for common values
 */
var defaultValueTypes = {
    // Color props
    color: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    backgroundColor: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    outlineColor: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    fill: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    stroke: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    // Border props
    borderColor: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    borderTopColor: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    borderRightColor: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    borderBottomColor: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    borderLeftColor: style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"],
    borderWidth: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderTopWidth: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderRightWidth: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderBottomWidth: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderLeftWidth: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderRadius: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    radius: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderTopLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderTopRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderBottomRightRadius: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    borderBottomLeftRadius: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    // Positioning props
    width: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    maxWidth: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    height: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    maxHeight: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    size: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    top: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    right: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    bottom: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    left: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    // Spacing props
    padding: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    paddingTop: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    paddingRight: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    paddingBottom: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    paddingLeft: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    margin: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    marginTop: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    marginRight: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    marginBottom: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    marginLeft: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    // Transform props
    rotate: style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"],
    rotateX: style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"],
    rotateY: style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"],
    rotateZ: style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"],
    scale: style_value_types__WEBPACK_IMPORTED_MODULE_4__["scale"],
    scaleX: style_value_types__WEBPACK_IMPORTED_MODULE_4__["scale"],
    scaleY: style_value_types__WEBPACK_IMPORTED_MODULE_4__["scale"],
    scaleZ: style_value_types__WEBPACK_IMPORTED_MODULE_4__["scale"],
    skew: style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"],
    skewX: style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"],
    skewY: style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"],
    distance: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    translateX: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    translateY: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    translateZ: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    x: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    y: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    z: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    perspective: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    transformPerspective: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    opacity: style_value_types__WEBPACK_IMPORTED_MODULE_4__["alpha"],
    originX: style_value_types__WEBPACK_IMPORTED_MODULE_4__["progressPercentage"],
    originY: style_value_types__WEBPACK_IMPORTED_MODULE_4__["progressPercentage"],
    originZ: style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"],
    // Misc
    zIndex: int,
    // SVG
    fillOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_4__["alpha"],
    strokeOpacity: style_value_types__WEBPACK_IMPORTED_MODULE_4__["alpha"],
    numOctaves: int,
};
/**
 * A list of value types commonly used for dimensions
 */
var dimensionValueTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_4__["number"], style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"], style_value_types__WEBPACK_IMPORTED_MODULE_4__["percent"], style_value_types__WEBPACK_IMPORTED_MODULE_4__["degrees"], style_value_types__WEBPACK_IMPORTED_MODULE_4__["vw"], style_value_types__WEBPACK_IMPORTED_MODULE_4__["vh"], auto];
/**
 * Tests a provided value against a ValueType
 */
var testValueType = function (v) { return function (type) { return type.test(v); }; };
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */
var findDimensionValueType = function (v) {
    return dimensionValueTypes.find(testValueType(v));
};
/**
 * A list of all ValueTypes
 */
var valueTypes = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(dimensionValueTypes, [style_value_types__WEBPACK_IMPORTED_MODULE_4__["color"], style_value_types__WEBPACK_IMPORTED_MODULE_4__["complex"]]);
/**
 * Tests a value against the list of ValueTypes
 */
var findValueType = function (v) { return valueTypes.find(testValueType(v)); };
/**
 * Gets the default ValueType for the provided value key
 */
var getDefaultValueType = function (key) { return defaultValueTypes[key]; };
/**
 * Provided a value and a ValueType, returns the value as that value type.
 */
var getValueAsType = function (value, type) {
    return type && typeof value === "number"
        ? type.transform(value)
        : value;
};

/**
 * Decides if the supplied variable is a function that returns a variant
 */
function isVariantResolver(variant) {
    return typeof variant === "function";
}
/**
 * Decides if the supplied variable is an array of variant labels
 */
function isVariantLabels(v) {
    return Array.isArray(v);
}
/**
 * Decides if the supplied variable is variant label
 */
function isVariantLabel(v) {
    return typeof v === "string" || isVariantLabels(v);
}
/**
 * Creates an object containing the latest state of every MotionValue on a VisualElement
 */
function getCurrent(visualElement) {
    var current = {};
    visualElement.forEachValue(function (value, key) { return (current[key] = value.get()); });
    return current;
}
/**
 * Creates an object containing the latest velocity of every MotionValue on a VisualElement
 */
function getVelocity(visualElement) {
    var velocity = {};
    visualElement.forEachValue(function (value, key) { return (velocity[key] = value.getVelocity()); });
    return velocity;
}
/**
 * Resovles a variant if it's a variant resolver
 */
function resolveVariant(visualElement, variant, custom) {
    var resolved = {};
    if (!variant) {
        return resolved;
    }
    else if (isVariantResolver(variant)) {
        resolved = variant(custom !== null && custom !== void 0 ? custom : visualElement.getVariantPayload(), getCurrent(visualElement), getVelocity(visualElement));
    }
    else {
        resolved = variant;
    }
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ transition: visualElement.getDefaultTransition() }, resolved);
}

/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */
function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) {
        visualElement.getValue(key).set(value);
    }
    else {
        visualElement.addValue(key, motionValue(value));
    }
}
function setTarget(visualElement, definition, _a) {
    var priority = (_a === void 0 ? {} : _a).priority;
    var _b = visualElement.makeTargetAnimatable(resolveVariant(visualElement, definition), false), _c = _b.transitionEnd, transitionEnd = _c === void 0 ? {} : _c, transition = _b.transition, target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_b, ["transitionEnd", "transition"]);
    target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, target), transitionEnd);
    for (var key in target) {
        var value = resolveFinalValueInKeyframes(target[key]);
        setMotionValue(visualElement, key, value);
        if (!priority)
            visualElement.baseTarget[key] = value;
    }
}
function setVariants(visualElement, variantLabels) {
    var reversedLabels = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(variantLabels).reverse();
    reversedLabels.forEach(function (key) {
        var _a;
        setTarget(visualElement, visualElement.getVariant(key));
        (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
            setVariants(child, variantLabels);
        });
    });
}
function setValues(visualElement, definition) {
    if (Array.isArray(definition)) {
        return setVariants(visualElement, definition);
    }
    else if (typeof definition === "string") {
        return setVariants(visualElement, [definition]);
    }
    else {
        setTarget(visualElement, definition);
    }
}
function checkTargetForNewValues(visualElement, target, origin) {
    var _a, _b;
    var _c;
    var newValueKeys = Object.keys(target).filter(function (key) { return !visualElement.hasValue(key); });
    var numNewValues = newValueKeys.length;
    if (!numNewValues)
        return;
    for (var i = 0; i < numNewValues; i++) {
        var key = newValueKeys[i];
        var targetValue = target[key];
        var value = null;
        // If this is a keyframes value, we can attempt to use the first value in the
        // array as that's going to be the first value of the animation anyway
        if (Array.isArray(targetValue)) {
            value = targetValue[0];
        }
        // If it isn't a keyframes or the first keyframes value was set as `null`, read the
        // value from the DOM. It might be worth investigating whether to check props (for SVG)
        // or props.style (for HTML) if the value exists there before attempting to read.
        if (value === null) {
            var readValue = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readNativeValue(key);
            value = readValue !== undefined ? readValue : target[key];
            Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(value !== null, "No initial value for \"" + key + "\" can be inferred. Ensure an initial value for \"" + key + "\" is defined on the component.");
        }
        if (typeof value === "string" && isNumericalString(value)) {
            // If this is a number read as a string, ie "0" or "200", convert it to a number
            value = parseFloat(value);
        }
        else if (!findValueType(value) && style_value_types__WEBPACK_IMPORTED_MODULE_4__["complex"].test(targetValue)) {
            // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
            value = style_value_types__WEBPACK_IMPORTED_MODULE_4__["complex"].getAnimatableNone(targetValue);
        }
        visualElement.addValue(key, motionValue(value));
        (_b = (_c = origin)[key]) !== null && _b !== void 0 ? _b : (_c[key] = value);
        visualElement.baseTarget[key] = value;
    }
}
function getOriginFromTransition(key, transition) {
    if (!transition)
        return;
    var valueTransition = transition[key] || transition["default"] || transition;
    return valueTransition.from;
}
function getOrigin(target, transition, visualElement) {
    var _a, _b;
    var origin = {};
    for (var key in target) {
        origin[key] = (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0 ? _a : (_b = visualElement.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
    }
    return origin;
}

/**
 * @internal
 */
function startVisualElementAnimation(visualElement, definition, opts) {
    if (opts === void 0) { opts = {}; }
    if (opts.priority) {
        visualElement.activeOverrides.add(opts.priority);
    }
    visualElement.resetIsAnimating(opts.priority);
    var animation;
    if (isVariantLabels(definition)) {
        animation = animateVariantLabels(visualElement, definition, opts);
    }
    else if (isVariantLabel(definition)) {
        animation = animateVariant(visualElement, definition, opts);
    }
    else {
        animation = animateTarget(visualElement, definition, opts);
    }
    visualElement.onAnimationStart();
    return animation.then(function () { return visualElement.onAnimationComplete(); });
}
function animateVariantLabels(visualElement, variantLabels, opts) {
    var animations = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(variantLabels).reverse()
        .map(function (label) { return animateVariant(visualElement, label, opts); });
    return Promise.all(animations);
}
function animateVariant(visualElement, label, opts) {
    var _a;
    var priority = (opts && opts.priority) || 0;
    var variantDefinition = visualElement.getVariant(label);
    var variant = resolveVariant(visualElement, variantDefinition, opts && opts.custom);
    var transition = variant.transition || {};
    /**
     * If we have a variant, create a callback that runs it as an animation.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    var getAnimation = variantDefinition
        ? function () { return animateTarget(visualElement, variant, opts); }
        : function () { return Promise.resolve(); };
    /**
     * If we have children, create a callback that runs all their animations.
     * Otherwise, we resolve a Promise immediately for a composable no-op.
     */
    var getChildrenAnimations = ((_a = visualElement.variantChildrenOrder) === null || _a === void 0 ? void 0 : _a.size) ? function (forwardDelay) {
        if (forwardDelay === void 0) { forwardDelay = 0; }
        var _a = transition.delayChildren, delayChildren = _a === void 0 ? 0 : _a;
        return animateChildren(visualElement, label, delayChildren + forwardDelay, transition.staggerChildren, transition.staggerDirection, priority, opts === null || opts === void 0 ? void 0 : opts.custom);
    }
        : function () { return Promise.resolve(); };
    /**
     * If the transition explicitly defines a "when" option, we need to resolve either
     * this animation or all children animations before playing the other.
     */
    var when = transition.when;
    if (when) {
        var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(when === "beforeChildren"
            ? [getAnimation, getChildrenAnimations]
            : [getChildrenAnimations, getAnimation], 2), first = _b[0], last = _b[1];
        return first().then(last);
    }
    else {
        return Promise.all([getAnimation(), getChildrenAnimations(opts === null || opts === void 0 ? void 0 : opts.delay)]);
    }
}
function animateChildren(visualElement, variantLabel, delayChildren, staggerChildren, staggerDirection, priority, custom) {
    if (delayChildren === void 0) { delayChildren = 0; }
    if (staggerChildren === void 0) { staggerChildren = 0; }
    if (staggerDirection === void 0) { staggerDirection = 1; }
    if (priority === void 0) { priority = 0; }
    var animations = [];
    var maxStaggerDuration = (visualElement.variantChildrenOrder.size - 1) * staggerChildren;
    var generateStaggerDuration = staggerDirection === 1
        ? function (i) { return i * staggerChildren; }
        : function (i) { return maxStaggerDuration - i * staggerChildren; };
    Array.from(visualElement.variantChildrenOrder).forEach(function (child, i) {
        var animation = animateVariant(child, variantLabel, {
            priority: priority,
            delay: delayChildren + generateStaggerDuration(i),
            custom: custom,
        });
        animations.push(animation);
    });
    return Promise.all(animations);
}
function stopAnimation(visualElement) {
    visualElement.forEachValue(function (value) { return value.stop(); });
}
function animateTarget(visualElement, definition, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.delay, delay = _c === void 0 ? 0 : _c, _d = _b.priority, priority = _d === void 0 ? 0 : _d, transitionOverride = _b.transitionOverride, custom = _b.custom;
    var targetAndTransition = resolveVariant(visualElement, definition, custom);
    if (transitionOverride)
        targetAndTransition.transition = transitionOverride;
    var _e = visualElement.makeTargetAnimatable(targetAndTransition), transitionEnd = _e.transitionEnd, transition = _e.transition, target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_e, ["transitionEnd", "transition"]);
    if (priority)
        visualElement.resolvedOverrides[priority] = target;
    var animations = [];
    for (var key in target) {
        var value = visualElement.getValue(key);
        if (!value || !target || target[key] === undefined)
            continue;
        var valueTarget = target[key];
        if (!priority) {
            visualElement.baseTarget[key] = resolveFinalValueInKeyframes(valueTarget);
        }
        if (visualElement.isAnimating.has(key))
            continue;
        visualElement.isAnimating.add(key);
        animations.push(startAnimation(key, value, valueTarget, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ delay: delay }, transition)));
    }
    var allAnimations = Promise.all(animations);
    return transitionEnd
        ? allAnimations.then(function () {
            return setTarget(visualElement, transitionEnd, { priority: priority });
        })
        : allAnimations;
}

function setOverride(visualElement, definition, index) {
    var _a;
    visualElement.overrides[index] = definition;
    (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
        setOverride(child, definition, index);
    });
}
function startOverride(visualElement, index) {
    var override = visualElement.overrides[index];
    if (override) {
        return startVisualElementAnimation(visualElement, override, {
            priority: index,
        });
    }
}
function clearOverride(visualElement, index) {
    var _a;
    (_a = visualElement.variantChildrenOrder) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
        clearOverride(child, index);
    });
    var override = visualElement.overrides[index];
    if (!override)
        return;
    visualElement.activeOverrides.delete(index);
    var highest = getHighestOverridePriortiy(visualElement);
    visualElement.resetIsAnimating();
    if (highest) {
        var highestOverride = visualElement.overrides[highest];
        highestOverride && startOverride(visualElement, highest);
    }
    // Figure out which remaining values were affected by the override and animate those
    var overrideTarget = visualElement.resolvedOverrides[index];
    if (!overrideTarget)
        return;
    var remainingValues = {};
    for (var key in visualElement.baseTarget) {
        if (overrideTarget[key] !== undefined) {
            remainingValues[key] = visualElement.baseTarget[key];
        }
    }
    visualElement.onAnimationStart();
    animateTarget(visualElement, remainingValues).then(function () {
        visualElement.onAnimationComplete();
    });
}
function getHighestOverridePriortiy(visualElement) {
    if (!visualElement.activeOverrides.size)
        return 0;
    return Math.max.apply(Math, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(Array.from(visualElement.activeOverrides)));
}

/**
 * VisualElement is an abstract class that provides a generic animation-optimised interface to the
 * underlying renderer.
 *
 * Currently many features interact directly with HTMLVisualElement/SVGVisualElement
 * but the idea is we can create, for instance, a ThreeVisualElement that extends
 * VisualElement and we can quickly offer all the same features.
 */
var VisualElement = /** @class */ (function () {
    function VisualElement(parent, ref) {
        var _this = this;
        // An iterable list of current children
        this.children = new Set();
        /**
         * A set of values that we animate back to when a value is cleared of all overrides.
         */
        this.baseTarget = {};
        /**
         * A series of target overrides that we can animate to/from when overrides are set/cleared.
         */
        this.overrides = [];
        /**
         * A series of target overrides as they were originally resolved.
         */
        this.resolvedOverrides = [];
        /**
         * A Set of currently active override indexes
         */
        this.activeOverrides = new Set();
        /**
         * A Set of value keys that are currently animating.
         */
        this.isAnimating = new Set();
        // The latest resolved MotionValues
        this.latest = {};
        // A map of MotionValues used to animate this element
        this.values = new Map();
        // Unsubscription callbacks for MotionValue subscriptions
        this.valueSubscriptions = new Map();
        // A configuration for this VisualElement, each derived class can extend this.
        this.config = {};
        this.isMounted = false;
        // A pre-bound call to the user-provided `onUpdate` callback. This won't
        // be called more than once per frame.
        this.update = function () { return _this.config.onUpdate(_this.latest); };
        // Pre-bound version of render
        this.triggerRender = function () { return _this.render(); };
        // This function gets passed to the rendered component's `ref` prop
        // and is used to mount/unmount the VisualElement
        this.ref = function (element) {
            element ? _this.mount(element) : _this.unmount();
            if (!_this.externalRef)
                return;
            if (typeof _this.externalRef === "function") {
                _this.externalRef(element);
            }
            else if (isRefObject(_this.externalRef)) {
                _this.externalRef.current = element;
            }
        };
        // Create a relationship with the provided parent.
        this.parent = parent;
        this.rootParent = parent ? parent.rootParent : this;
        this.treePath = parent ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(parent.treePath, [parent]) : [];
        // Calculate the depth of this node in the VisualElement graph
        this.depth = parent ? parent.depth + 1 : 0;
        // A reference to any externally-defined React ref. This might live better
        // outside the VisualElement and be handled in a hook.
        this.externalRef = ref;
    }
    VisualElement.prototype.getVariantPayload = function () {
        return this.config.custom;
    };
    VisualElement.prototype.getVariant = function (label) {
        var _a;
        return (_a = this.config.variants) === null || _a === void 0 ? void 0 : _a[label];
    };
    VisualElement.prototype.addVariantChild = function (visualElement) {
        if (!this.variantChildren)
            this.variantChildren = new Set();
        this.variantChildren.add(visualElement);
    };
    VisualElement.prototype.addVariantChildOrder = function (visualElement) {
        if (!this.variantChildrenOrder)
            this.variantChildrenOrder = new Set();
        this.variantChildrenOrder.add(visualElement);
    };
    VisualElement.prototype.onAnimationStart = function () {
        var _a, _b;
        (_b = (_a = this.config).onAnimationStart) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    VisualElement.prototype.onAnimationComplete = function () {
        var _a, _b;
        this.isMounted && ((_b = (_a = this.config).onAnimationComplete) === null || _b === void 0 ? void 0 : _b.call(_a));
    };
    VisualElement.prototype.getDefaultTransition = function () {
        return this.config.transition;
    };
    VisualElement.prototype.resetIsAnimating = function (priority) {
        var _a;
        if (priority === void 0) { priority = 0; }
        this.isAnimating.clear();
        // If this isn't the highest priority gesture, block the animation
        // of anything that's currently being animated
        if (priority < getHighestOverridePriortiy(this)) {
            this.checkOverrideIsAnimating(priority);
        }
        (_a = this.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
            return child.resetIsAnimating(priority);
        });
    };
    VisualElement.prototype.checkOverrideIsAnimating = function (priority) {
        var numOverrides = this.overrides.length;
        for (var i = priority + 1; i < numOverrides; i++) {
            var resolvedOverride = this.resolvedOverrides[i];
            if (resolvedOverride) {
                for (var key in resolvedOverride) {
                    this.isAnimating.add(key);
                }
            }
        }
    };
    VisualElement.prototype.subscribe = function (child) {
        var _this = this;
        this.children.add(child);
        return function () { return _this.children.delete(child); };
    };
    // Check whether this element has a MotionValue of the provided key
    VisualElement.prototype.hasValue = function (key) {
        return this.values.has(key);
    };
    // Add a MotionValue
    VisualElement.prototype.addValue = function (key, value) {
        if (this.hasValue(key))
            this.removeValue(key);
        this.values.set(key, value);
        this.setSingleStaticValue(key, value.get());
        this.subscribeToValue(key, value);
    };
    // Remove a MotionValue
    VisualElement.prototype.removeValue = function (key) {
        var _a;
        (_a = this.valueSubscriptions.get(key)) === null || _a === void 0 ? void 0 : _a();
        this.valueSubscriptions.delete(key);
        this.values.delete(key);
        delete this.latest[key];
    };
    VisualElement.prototype.getValue = function (key, defaultValue) {
        var value = this.values.get(key);
        if (value === undefined && defaultValue !== undefined) {
            value = new MotionValue(defaultValue);
            this.addValue(key, value);
        }
        return value;
    };
    // Iterate over all MotionValues
    VisualElement.prototype.forEachValue = function (callback) {
        this.values.forEach(callback);
    };
    // Get the underlying rendered instance of this VisualElement. For instance in
    // HTMLVisualElement this will be a HTMLElement.
    VisualElement.prototype.getInstance = function () {
        return this.element;
    };
    VisualElement.prototype.updateConfig = function (config) {
        if (config === void 0) { config = {}; }
        this.config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, config);
    };
    // Set a single `latest` value
    VisualElement.prototype.setSingleStaticValue = function (key, value) {
        this.latest[key] = value;
    };
    // Statically set values to `latest` without needing a MotionValue
    VisualElement.prototype.setStaticValues = function (values, value) {
        if (typeof values === "string") {
            this.setSingleStaticValue(values, value);
        }
        else {
            for (var key in values) {
                this.setSingleStaticValue(key, values[key]);
            }
        }
    };
    VisualElement.prototype.scheduleRender = function () {
        framesync__WEBPACK_IMPORTED_MODULE_1__["default"].render(this.triggerRender, false, true);
    };
    VisualElement.prototype.scheduleUpdateLayoutDelta = function () {
        framesync__WEBPACK_IMPORTED_MODULE_1__["default"].preRender(this.rootParent.updateLayoutDelta, false, true);
    };
    VisualElement.prototype.subscribeToValue = function (key, value) {
        var _this = this;
        var onChange = function (latest) {
            _this.setSingleStaticValue(key, latest);
            // Schedule onUpdate if we have an onUpdate listener and the component has mounted
            _this.element &&
                _this.config.onUpdate &&
                framesync__WEBPACK_IMPORTED_MODULE_1__["default"].update(_this.update, false, true);
        };
        var onRender = function () {
            _this.element && _this.scheduleRender();
        };
        var unsubscribeOnChange = value.onChange(onChange);
        var unsubscribeOnRender = value.onRenderRequest(onRender);
        this.valueSubscriptions.set(key, function () {
            unsubscribeOnChange();
            unsubscribeOnRender();
        });
    };
    // Mount the VisualElement with the actual DOM element
    VisualElement.prototype.mount = function (element) {
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(!!element, "No ref found. Ensure components created with motion.custom forward refs using React.forwardRef");
        if (this.parent) {
            this.removeFromParent = this.parent.subscribe(this);
        }
        /**
         * Save the element to this.element as a semantic API, this.current to the VisualElement
         * is compatible with existing RefObject APIs.
         */
        this.element = this.current = element;
    };
    // Unmount the VisualElement and cancel any scheduled updates
    VisualElement.prototype.unmount = function () {
        var _this = this;
        this.forEachValue(function (_, key) { return _this.removeValue(key); });
        framesync__WEBPACK_IMPORTED_MODULE_1__["cancelSync"].update(this.update);
        framesync__WEBPACK_IMPORTED_MODULE_1__["cancelSync"].render(this.render);
        this.removeFromParent && this.removeFromParent();
    };
    return VisualElement;
}());

function noop(any) {
    return any;
}

/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */
function convertBoundingBoxToAxisBox(_a) {
    var top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
    return {
        x: { min: left, max: right },
        y: { min: top, max: bottom },
    };
}
function convertAxisBoxToBoundingBox(_a) {
    var x = _a.x, y = _a.y;
    return {
        top: y.min,
        bottom: y.max,
        left: x.min,
        right: x.max,
    };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */
function transformBoundingBox(_a, transformPoint) {
    var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
    if (transformPoint === void 0) { transformPoint = noop; }
    var topLeft = transformPoint({ x: left, y: top });
    var bottomRight = transformPoint({ x: right, y: bottom });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x,
    };
}
/**
 * Create an empty axis box of zero size
 */
function axisBox() {
    return { x: { min: 0, max: 1 }, y: { min: 0, max: 1 } };
}
function copyAxisBox(box) {
    return {
        x: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, box.x),
        y: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, box.y),
    };
}
/**
 * Create an empty box delta
 */
var zeroDelta = {
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0,
};
function delta() {
    return {
        x: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, zeroDelta),
        y: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, zeroDelta),
    };
}

/**
 * A list of all transformable axes. We'll use this list to generated a version
 * of each axes for each transform.
 */
var transformAxes = ["", "X", "Y", "Z"];
/**
 * An ordered array of each transformable value. By default, transform values
 * will be sorted to this order.
 */
var order = ["perspective", "translate", "scale", "rotate", "skew"];
/**
 * Used to store the keys of all transforms that will distorted a measured bounding box.
 */
var boxDistortingKeys = new Set();
/**
 * Generate a list of every possible transform key.
 */
var transformProps = ["transformPerspective", "x", "y", "z"];
order.forEach(function (operationKey) {
    var isDistorting = new Set(["rotate", "skew"]).has(operationKey);
    transformAxes.forEach(function (axesKey) {
        var key = operationKey + axesKey;
        transformProps.push(key);
        isDistorting && boxDistortingKeys.add(key);
    });
});
/**
 * A function to use with Array.sort to sort transform keys by their default order.
 */
function sortTransformProps(a, b) {
    return transformProps.indexOf(a) - transformProps.indexOf(b);
}
/**
 * A quick lookup for transform props.
 */
var transformPropSet = new Set(transformProps);
function isTransformProp(key) {
    return transformPropSet.has(key);
}
/**
 * A quick lookup for transform origin props
 */
var transformOriginProps = new Set(["originX", "originY", "originZ"]);
function isTransformOriginProp(key) {
    return transformOriginProps.has(key);
}

var translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
};
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */
function buildTransform(transform, transformKeys, transformTemplate, transformIsDefault, enableHardwareAcceleration, allowTransformNone) {
    if (enableHardwareAcceleration === void 0) { enableHardwareAcceleration = true; }
    if (allowTransformNone === void 0) { allowTransformNone = true; }
    // The transform string we're going to build into.
    var transformString = "";
    // Transform keys into their default order - this will determine the output order.
    transformKeys.sort(sortTransformProps);
    // Track whether the defined transform has a defined z so we don't add a
    // second to enable hardware acceleration
    var transformHasZ = false;
    // Loop over each transform and build them into transformString
    var numTransformKeys = transformKeys.length;
    for (var i = 0; i < numTransformKeys; i++) {
        var key = transformKeys[i];
        transformString += (translateAlias[key] || key) + "(" + transform[key] + ") ";
        if (key === "z")
            transformHasZ = true;
    }
    if (!transformHasZ && enableHardwareAcceleration) {
        transformString += "translateZ(0)";
    }
    else {
        transformString = transformString.trim();
    }
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) {
        transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    }
    else if (allowTransformNone && transformIsDefault) {
        transformString = "none";
    }
    return transformString;
}
/**
 * Build a transformOrigin style. Uses the same defaults as the browser for
 * undefined origins.
 */
function buildTransformOrigin(_a) {
    var _b = _a.originX, originX = _b === void 0 ? "50%" : _b, _c = _a.originY, originY = _c === void 0 ? "50%" : _c, _d = _a.originZ, originZ = _d === void 0 ? 0 : _d;
    return originX + " " + originY + " " + originZ;
}
/**
 * Build a transform style that takes a calculated delta between the element's current
 * space on screen and projects it into the desired space.
 */
function buildLayoutProjectionTransform(_a, treeScale) {
    var x = _a.x, y = _a.y;
    /**
     * The translations we use to calculate are always relative to the viewport coordinate space.
     * But when we apply scales, we also scale the coordinate space of an element and its children.
     * For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
     * to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
     */
    var xTranslate = x.translate / treeScale.x;
    var yTranslate = y.translate / treeScale.y;
    return "translate3d(" + xTranslate + "px, " + yTranslate + "px, 0) scale(" + x.scale + ", " + y.scale + ")";
}
var identityProjection = buildLayoutProjectionTransform(delta(), {
    x: 1,
    y: 1,
});
/**
 * Take the calculated delta origin and apply it as a transform string.
 */
function buildLayoutProjectionTransformOrigin(_a) {
    var x = _a.x, y = _a.y;
    return x.origin * 100 + "% " + y.origin * 100 + "% 0";
}
/**
 * Build a transform string only from the properties that distort bounding box measurements
 * (rotate and skew)
 */
function buildBoxDistortingTransforms(transform, transformKeys) {
    var transformString = "";
    transformKeys.sort(sortTransformProps);
    var numTransformKeys = transformKeys.length;
    for (var i = 0; i < numTransformKeys; i++) {
        var key = transformKeys[i];
        if (boxDistortingKeys.has(key)) {
            transformString += key + "(" + transform[key] + ") ";
        }
    }
    return transformString;
}

/**
 * Returns true if the provided key is a CSS variable
 */
function isCSSVariable(key) {
    return key.startsWith("--");
}

function isCSSVariable$1(value) {
    return typeof value === "string" && value.startsWith("var(--");
}
/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
    var match = cssVariableRegex.exec(current);
    if (!match)
        return [,];
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(match, 3), token = _a[1], fallback = _a[2];
    return [token, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth) {
    if (depth === void 0) { depth = 1; }
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(depth <= maxDepth, "Max CSS variable fallback depth detected in property \"" + current + "\". This may indicate a circular fallback dependency.");
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(parseCSSVariable(current), 2), token = _a[0], fallback = _a[1];
    // No CSS variable detected
    if (!token)
        return;
    // Attempt to read this CSS variable off the element
    var resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        return resolved.trim();
    }
    else if (isCSSVariable$1(fallback)) {
        // The fallback might itself be a CSS variable, in which case we attempt to resolve it too.
        return getVariableValue(fallback, element, depth + 1);
    }
    else {
        return fallback;
    }
}
/**
 * Resolve CSS variables from
 *
 * @internal
 */
function resolveCSSVariables(visualElement, _a, transitionEnd) {
    var _b;
    var target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, []);
    var element = visualElement.getInstance();
    if (!(element instanceof HTMLElement))
        return { target: target, transitionEnd: transitionEnd };
    // If `transitionEnd` isn't `undefined`, clone it. We could clone `target` and `transitionEnd`
    // only if they change but I think this reads clearer and this isn't a performance-critical path.
    if (transitionEnd) {
        transitionEnd = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transitionEnd);
    }
    // Go through existing `MotionValue`s and ensure any existing CSS variables are resolved
    visualElement.forEachValue(function (value) {
        var current = value.get();
        if (!isCSSVariable$1(current))
            return;
        var resolved = getVariableValue(current, element);
        if (resolved)
            value.set(resolved);
    });
    // Cycle through every target property and resolve CSS variables. Currently
    // we only read single-var properties like `var(--foo)`, not `calc(var(--foo) + 20px)`
    for (var key in target) {
        var current = target[key];
        if (!isCSSVariable$1(current))
            continue;
        var resolved = getVariableValue(current, element);
        if (!resolved)
            continue;
        // Clone target if it hasn't already been
        target[key] = resolved;
        // If the user hasn't already set this key on `transitionEnd`, set it to the unresolved
        // CSS variable. This will ensure that after the animation the component will reflect
        // changes in the value of the CSS variable.
        if (transitionEnd)
            (_b = transitionEnd[key]) !== null && _b !== void 0 ? _b : (transitionEnd[key] = current);
    }
    return { target: target, transitionEnd: transitionEnd };
}

function pixelsToPercent(pixels, axis) {
    return (pixels / (axis.max - axis.min)) * 100;
}
/**
 * We always correct borderRadius as a percentage rather than pixels to reduce paints.
 * For example, if you are projecting a box that is 100px wide with a 10px borderRadius
 * into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
 * borderRadius in both states. If we animate between the two in pixels that will trigger
 * a paint each time. If we animate between the two in percentage we'll avoid a paint.
 */
function correctBorderRadius(latest, viewportBox) {
    /**
     * If latest is a string, if it's a percentage we can return immediately as it's
     * going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
     */
    if (typeof latest === "string") {
        if (style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"].test(latest)) {
            latest = parseFloat(latest);
        }
        else {
            return latest;
        }
    }
    /**
     * If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
     * pixel value as a percentage of each axis
     */
    var x = pixelsToPercent(latest, viewportBox.x);
    var y = pixelsToPercent(latest, viewportBox.y);
    return x + "% " + y + "%";
}
var varToken = "_$css";
function correctBoxShadow(latest, _viewportBox, delta, treeScale) {
    var original = latest;
    /**
     * We need to first strip and store CSS variables from the string.
     */
    var containsCSSVariables = latest.includes("var(");
    var cssVariables = [];
    if (containsCSSVariables) {
        latest = latest.replace(cssVariableRegex, function (match) {
            cssVariables.push(match);
            return varToken;
        });
    }
    var shadow = style_value_types__WEBPACK_IMPORTED_MODULE_4__["complex"].parse(latest);
    // TODO: Doesn't support multiple shadows
    if (shadow.length > 5)
        return original;
    var template = style_value_types__WEBPACK_IMPORTED_MODULE_4__["complex"].createTransformer(latest);
    var offset = typeof shadow[0] !== "number" ? 1 : 0;
    // Calculate the overall context scale
    var xScale = delta.x.scale * treeScale.x;
    var yScale = delta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    /**
     * Ideally we'd correct x and y scales individually, but because blur and
     * spread apply to both we have to take a scale average and apply that instead.
     * We could potentially improve the outcome of this by incorporating the ratio between
     * the two scales.
     */
    var averageScale = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(xScale, yScale, 0.5);
    // Blur
    if (typeof shadow[2 + offset] === "number")
        shadow[2 + offset] /= averageScale;
    // Spread
    if (typeof shadow[3 + offset] === "number")
        shadow[3 + offset] /= averageScale;
    var output = template(shadow);
    if (containsCSSVariables) {
        var i_1 = 0;
        output = output.replace(varToken, function () {
            var cssVariable = cssVariables[i_1];
            i_1++;
            return cssVariable;
        });
    }
    return output;
}
var borderCorrectionDefinition = {
    process: correctBorderRadius,
};
var valueScaleCorrection = {
    borderRadius: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, borderCorrectionDefinition), { applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
        ] }),
    borderTopLeftRadius: borderCorrectionDefinition,
    borderTopRightRadius: borderCorrectionDefinition,
    borderBottomLeftRadius: borderCorrectionDefinition,
    borderBottomRightRadius: borderCorrectionDefinition,
    boxShadow: {
        process: correctBoxShadow,
    },
};
/**
 * @internal
 */
function addScaleCorrection(correctors) {
    for (var key in correctors) {
        valueScaleCorrection[key] = correctors[key];
    }
}

/**
 * Build style and CSS variables
 *
 * This function converts a Motion style prop:
 *
 * { x: 100, width: 100, originX: 0.5 }
 *
 * Into an object with default value types applied and default
 * transform order set:
 *
 * {
 *   transform: 'translateX(100px) translateZ(0)`,
 *   width: '100px',
 *   transformOrigin: '50% 50%'
 * }
 *
 * Styles are saved to `style` and CSS vars to `vars`.
 *
 * This function works with mutative data structures.
 */
function buildHTMLStyles(latest, style, vars, transform, transformOrigin, transformKeys, _a, isLayoutProjectionEnabled, delta, deltaFinal, treeScale, targetBox) {
    var enableHardwareAcceleration = _a.enableHardwareAcceleration, transformTemplate = _a.transformTemplate, allowTransformNone = _a.allowTransformNone;
    // Empty the transformKeys array. As we're throwing out refs to its items
    // this might not be as cheap as suspected. Maybe using the array as a buffer
    // with a manual incrementation would be better.
    transformKeys.length = 0;
    // Track whether we encounter any transform or transformOrigin values.
    var hasTransform = false;
    var hasTransformOrigin = false;
    // Does the calculated transform essentially equal "none"?
    var transformIsNone = true;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable. Transforms and transform origins are kept seperately
     * for further processing
     */
    for (var key in latest) {
        var value = latest[key];
        // Convert the value to its default value type, ie 0 -> "0px"
        var valueType = getDefaultValueType(key);
        var valueAsType = getValueAsType(value, valueType);
        if (isTransformProp(key)) {
            // If this is a transform, flag and enable further transform processing
            hasTransform = true;
            transform[key] = valueAsType;
            transformKeys.push(key);
            if (!transformIsNone)
                continue;
            // If all the transform keys we've so far encountered are their default value
            // then check to see if this one isn't
            var defaultValue = valueType.default !== undefined ? valueType.default : 0;
            if (value !== defaultValue)
                transformIsNone = false;
        }
        else if (isTransformOriginProp(key)) {
            // If this is a transform origin, flag and enable further transform-origin processing
            transformOrigin[key] = valueAsType;
            hasTransformOrigin = true;
        }
        else if (key !== "transform" || typeof value !== "function") {
            // Handle all remaining values. Decide which map to save to depending
            // on whether this is a CSS variable
            var bucket = isCSSVariable(key) ? vars : style;
            // If we need to perform scale correction, and we have a handler for this
            // value type (ie borderRadius), perform it
            if (isLayoutProjectionEnabled && valueScaleCorrection[key]) {
                var corrected = valueScaleCorrection[key].process(value, targetBox, delta, treeScale);
                /**
                 * Scale-correctable values can define a number of other values to break
                 * down into. For instance borderRadius needs applying to borderBottomLeftRadius etc
                 */
                var applyTo = valueScaleCorrection[key].applyTo;
                if (applyTo) {
                    var num = applyTo.length;
                    for (var i = 0; i < num; i++) {
                        bucket[applyTo[i]] = corrected;
                    }
                }
                else {
                    bucket[key] = corrected;
                }
            }
            else {
                bucket[key] = valueAsType;
            }
        }
    }
    /**
     * Build transform and transformOrigin. If we're performing layout projection these need
     * to be based off the deltaFinal data. Any user-set origins will have been pre-baked
     * into the deltaFinal.
     */
    if (isLayoutProjectionEnabled) {
        style.transform = buildLayoutProjectionTransform(deltaFinal, treeScale);
        if (style.transform === identityProjection)
            style.transform = "";
        /**
         * If we have transform styles, build only those that distort bounding boxes (rotate/skew)
         * as translations and scales will already have been used to calculate deltaFinal.
         */
        if (hasTransform) {
            style.transform +=
                " " + buildBoxDistortingTransforms(transform, transformKeys);
            style.transform = style.transform.trim();
        }
        if (transformTemplate) {
            style.transform = transformTemplate(transform, style.transform);
        }
        style.transformOrigin = buildLayoutProjectionTransformOrigin(deltaFinal);
    }
    else {
        if (hasTransform) {
            style.transform = buildTransform(transform, transformKeys, transformTemplate, transformIsNone, enableHardwareAcceleration, allowTransformNone);
        }
        if (hasTransformOrigin) {
            style.transformOrigin = buildTransformOrigin(transformOrigin);
        }
    }
}

/**
 * Reset an axis to the provided origin box.
 *
 * This is a mutative operation.
 */
function resetAxis(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
}
/**
 * Reset a box to the provided origin box.
 *
 * This is a mutative operation.
 */
function resetBox(box, originBox) {
    resetAxis(box.x, originBox.x);
    resetAxis(box.y, originBox.y);
}
/**
 * Scales a point based on a factor and an originPoint
 */
function scalePoint(point, scale, originPoint) {
    var distanceFromOrigin = point - originPoint;
    var scaled = scale * distanceFromOrigin;
    return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */
function applyPointDelta(point, translate, scale, originPoint, boxScale) {
    if (boxScale !== undefined) {
        point = scalePoint(point, boxScale, originPoint);
    }
    return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */
function applyAxisDelta(axis, translate, scale, originPoint, boxScale) {
    if (translate === void 0) { translate = 0; }
    if (scale === void 0) { scale = 1; }
    axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */
function applyBoxDelta(box, _a) {
    var x = _a.x, y = _a.y;
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */
function applyAxisTransforms(final, axis, transforms, _a) {
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
    // Copy the current axis to the final axis before mutation
    final.min = axis.min;
    final.max = axis.max;
    var axisOrigin = transforms[originKey] !== undefined ? transforms[originKey] : 0.5;
    var originPoint = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(axis.min, axis.max, axisOrigin);
    // Apply the axis delta to the final axis
    applyAxisDelta(final, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
/**
 * The names of the motion values we want to apply as translation, scale and origin.
 */
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
/**
 * Apply a transform to a box from the latest resolved motion values.
 */
function applyBoxTransforms(finalBox, box, transforms) {
    applyAxisTransforms(finalBox.x, box.x, transforms, xKeys);
    applyAxisTransforms(finalBox.y, box.y, transforms, yKeys);
}
/**
 * Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
 */
function removePointDelta(point, translate, scale, originPoint, boxScale) {
    point -= translate;
    point = scalePoint(point, 1 / scale, originPoint);
    if (boxScale !== undefined) {
        point = scalePoint(point, 1 / boxScale, originPoint);
    }
    return point;
}
/**
 * Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
 */
function removeAxisDelta(axis, translate, scale, origin, boxScale) {
    if (translate === void 0) { translate = 0; }
    if (scale === void 0) { scale = 1; }
    if (origin === void 0) { origin = 0.5; }
    var originPoint = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(axis.min, axis.max, origin) - translate;
    axis.min = removePointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeAxisTransforms(axis, transforms, _a) {
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale);
}
/**
 * Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
 * and acts as a bridge between motion values and removeAxisDelta
 */
function removeBoxTransforms(box, transforms) {
    removeAxisTransforms(box.x, transforms, xKeys);
    removeAxisTransforms(box.y, transforms, yKeys);
}
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within HTMLVisualElement.updateLayoutDelta
 */
function applyTreeDeltas(box, treePath) {
    var treeLength = treePath.length;
    for (var i = 0; i < treeLength; i++) {
        applyBoxDelta(box, treePath[i].delta);
    }
}

var clampProgress = function (v) { return Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["clamp"])(0, 1, v); };
/**
 * Returns true if the provided value is within maxDistance of the provided target
 */
function isNear(value, target, maxDistance) {
    if (target === void 0) { target = 0; }
    if (maxDistance === void 0) { maxDistance = 0.01; }
    return Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["distance"])(value, target) < maxDistance;
}
function calcLength(axis) {
    return axis.max - axis.min;
}
/**
 * Calculate a transform origin relative to the source axis, between 0-1, that results
 * in an asthetically pleasing scale/transform needed to project from source to target.
 */
function calcOrigin(source, target) {
    var origin = 0.5;
    var sourceLength = calcLength(source);
    var targetLength = calcLength(target);
    if (targetLength > sourceLength) {
        origin = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["progress"])(target.min, target.max - sourceLength, source.min);
    }
    else if (sourceLength > targetLength) {
        origin = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["progress"])(source.min, source.max - targetLength, target.min);
    }
    return clampProgress(origin);
}
/**
 * Update the AxisDelta with a transform that projects source into target.
 *
 * The transform `origin` is optional. If not provided, it'll be automatically
 * calculated based on the relative positions of the two bounding boxes.
 */
function updateAxisDelta(delta, source, target, origin) {
    delta.origin = origin === undefined ? calcOrigin(source, target) : origin;
    delta.originPoint = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    if (isNear(delta.scale, 1, 0.0001))
        delta.scale = 1;
    delta.translate =
        Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(target.min, target.max, delta.origin) - delta.originPoint;
    if (isNear(delta.translate))
        delta.translate = 0;
}
/**
 * Update the BoxDelta with a transform that projects the source into the target.
 *
 * The transform `origin` is optional. If not provided, it'll be automatically
 * calculated based on the relative positions of the two bounding boxes.
 */
function updateBoxDelta(delta, source, target, origin) {
    updateAxisDelta(delta.x, source.x, target.x, origin);
    updateAxisDelta(delta.y, source.y, target.y, origin);
}
/**
 * Update the treeScale by incorporating the parent's latest scale into its treeScale.
 */
function updateTreeScale(treeScale, parentTreeScale, parentDelta) {
    treeScale.x = parentTreeScale.x * parentDelta.x.scale;
    treeScale.y = parentTreeScale.y * parentDelta.y.scale;
}

// Call a handler once for each axis
function eachAxis(handler) {
    return [handler("x"), handler("y")];
}

/**
 * Measure and return the element bounding box.
 *
 * We convert the box into an AxisBox2D to make it easier to work with each axis
 * individually and programmatically.
 *
 * This function optionally accepts a transformPagePoint function which allows us to compensate
 * for, for instance, measuring the element within a scaled plane like a Framer devivce preview component.
 */
function getBoundingBox(element, transformPagePoint) {
    var box = element.getBoundingClientRect();
    return convertBoundingBoxToAxisBox(transformBoundingBox(box, transformPagePoint));
}

var positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
]);
var isPositionalKey = function (key) { return positionalKeys.has(key); };
var hasPositionalKey = function (target) {
    return Object.keys(target).some(isPositionalKey);
};
var setAndResetVelocity = function (value, to) {
    // Looks odd but setting it twice doesn't render, it'll just
    // set both prev and current to the latest value
    value.set(to, false);
    value.set(to);
};
var isNumOrPxType = function (v) {
    return v === style_value_types__WEBPACK_IMPORTED_MODULE_4__["number"] || v === style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"];
};
var BoundingBoxDimension;
(function (BoundingBoxDimension) {
    BoundingBoxDimension["width"] = "width";
    BoundingBoxDimension["height"] = "height";
    BoundingBoxDimension["left"] = "left";
    BoundingBoxDimension["right"] = "right";
    BoundingBoxDimension["top"] = "top";
    BoundingBoxDimension["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = function (matrix, pos) {
    return parseFloat(matrix.split(", ")[pos]);
};
var getTranslateFromMatrix = function (pos2, pos3) { return function (_bbox, _a) {
    var transform = _a.transform;
    if (transform === "none" || !transform)
        return 0;
    var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
        return getPosFromMatrix(matrix3d[1], pos3);
    }
    else {
        var matrix = transform.match(/^matrix\((.+)\)$/);
        if (matrix) {
            return getPosFromMatrix(matrix[1], pos2);
        }
        else {
            return 0;
        }
    }
}; };
var transformKeys = new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformProps.filter(function (key) { return !transformKeys.has(key); });
function removeNonTranslationalTransform(visualElement) {
    var removedTransforms = [];
    nonTranslationalTransformKeys.forEach(function (key) {
        var value = visualElement.getValue(key);
        if (value !== undefined) {
            removedTransforms.push([key, value.get()]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    // Apply changes to element before measurement
    if (removedTransforms.length)
        visualElement.render();
    return removedTransforms;
}
var positionalValues = {
    // Dimensions
    width: function (_a) {
        var x = _a.x;
        return x.max - x.min;
    },
    height: function (_a) {
        var y = _a.y;
        return y.max - y.min;
    },
    top: function (_bbox, _a) {
        var top = _a.top;
        return parseFloat(top);
    },
    left: function (_bbox, _a) {
        var left = _a.left;
        return parseFloat(left);
    },
    bottom: function (_a, _b) {
        var y = _a.y;
        var top = _b.top;
        return parseFloat(top) + (y.max - y.min);
    },
    right: function (_a, _b) {
        var x = _a.x;
        var left = _b.left;
        return parseFloat(left) + (x.max - x.min);
    },
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14),
};
var convertChangedValueTypes = function (target, visualElement, changedKeys) {
    var originBbox = visualElement.getBoundingBox();
    var elementComputedStyle = visualElement.getComputedStyle();
    var display = elementComputedStyle.display, top = elementComputedStyle.top, left = elementComputedStyle.left, bottom = elementComputedStyle.bottom, right = elementComputedStyle.right, transform = elementComputedStyle.transform;
    var originComputedStyle = { top: top, left: left, bottom: bottom, right: right, transform: transform };
    // If the element is currently set to display: "none", make it visible before
    // measuring the target bounding box
    if (display === "none") {
        visualElement.setStaticValues("display", target.display || "block");
    }
    // Apply the latest values (as set in checkAndConvertChangedValueTypes)
    visualElement.render();
    var targetBbox = visualElement.getBoundingBox();
    changedKeys.forEach(function (key) {
        // Restore styles to their **calculated computed style**, not their actual
        // originally set style. This allows us to animate between equivalent pixel units.
        var value = visualElement.getValue(key);
        setAndResetVelocity(value, positionalValues[key](originBbox, originComputedStyle));
        target[key] = positionalValues[key](targetBbox, elementComputedStyle);
    });
    return target;
};
var checkAndConvertChangedValueTypes = function (visualElement, target, origin, transitionEnd) {
    if (origin === void 0) { origin = {}; }
    if (transitionEnd === void 0) { transitionEnd = {}; }
    target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, target);
    transitionEnd = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transitionEnd);
    var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
    // We want to remove any transform values that could affect the element's bounding box before
    // it's measured. We'll reapply these later.
    var removedTransformValues = [];
    var hasAttemptedToRemoveTransformValues = false;
    var changedValueTypeKeys = [];
    targetPositionalKeys.forEach(function (key) {
        var value = visualElement.getValue(key);
        if (!visualElement.hasValue(key))
            return;
        var from = origin[key];
        var to = target[key];
        var fromType = findDimensionValueType(from);
        var toType;
        // TODO: The current implementation of this basically throws an error
        // if you try and do value conversion via keyframes. There's probably
        // a way of doing this but the performance implications would need greater scrutiny,
        // as it'd be doing multiple resize-remeasure operations.
        if (isKeyframesTarget(to)) {
            var numKeyframes = to.length;
            for (var i = to[0] === null ? 1 : 0; i < numKeyframes; i++) {
                if (!toType) {
                    toType = findDimensionValueType(to[i]);
                    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(toType === fromType ||
                        (isNumOrPxType(fromType) && isNumOrPxType(toType)), "Keyframes must be of the same dimension as the current value");
                }
                else {
                    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(findDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
                }
            }
        }
        else {
            toType = findDimensionValueType(to);
        }
        if (fromType !== toType) {
            // If they're both just number or px, convert them both to numbers rather than
            // relying on resize/remeasure to convert (which is wasteful in this situation)
            if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
                var current = value.get();
                if (typeof current === "string") {
                    value.set(parseFloat(current));
                }
                if (typeof to === "string") {
                    target[key] = parseFloat(to);
                }
                else if (Array.isArray(to) && toType === style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"]) {
                    target[key] = to.map(parseFloat);
                }
            }
            else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) &&
                (from === 0 || to === 0)) {
                // If one or the other value is 0, it's safe to coerce it to the
                // type of the other without measurement
                if (from === 0) {
                    value.set(toType.transform(from));
                }
                else {
                    target[key] = fromType.transform(to);
                }
            }
            else {
                // If we're going to do value conversion via DOM measurements, we first
                // need to remove non-positional transform values that could affect the bbox measurements.
                if (!hasAttemptedToRemoveTransformValues) {
                    removedTransformValues = removeNonTranslationalTransform(visualElement);
                    hasAttemptedToRemoveTransformValues = true;
                }
                changedValueTypeKeys.push(key);
                transitionEnd[key] =
                    transitionEnd[key] !== undefined
                        ? transitionEnd[key]
                        : target[key];
                setAndResetVelocity(value, to);
            }
        }
    });
    if (changedValueTypeKeys.length) {
        var convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
        // If we removed transform values, reapply them before the next render
        if (removedTransformValues.length) {
            removedTransformValues.forEach(function (_a) {
                var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), key = _b[0], value = _b[1];
                visualElement.getValue(key).set(value);
            });
        }
        // Reapply original values
        visualElement.render();
        return { target: convertedTarget, transitionEnd: transitionEnd };
    }
    else {
        return { target: target, transitionEnd: transitionEnd };
    }
};
/**
 * Convert value types for x/y/width/height/top/left/bottom/right
 *
 * Allows animation between `'auto'` -> `'100%'` or `0` -> `'calc(50% - 10vw)'`
 *
 * @internal
 */
function unitConversion(visualElement, target, origin, transitionEnd) {
    return hasPositionalKey(target)
        ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd)
        : { target: target, transitionEnd: transitionEnd };
}

/**
 * Parse a DOM variant to make it animatable. This involves resolving CSS variables
 * and ensuring animations like "20%" => "calc(50vw)" are performed in pixels.
 */
var parseDomVariant = function (visualElement, target, origin, transitionEnd) {
    var resolved = resolveCSSVariables(visualElement, target, transitionEnd);
    target = resolved.target;
    transitionEnd = resolved.transitionEnd;
    return unitConversion(visualElement, target, origin, transitionEnd);
};

/**
 * A VisualElement for HTMLElements
 */
var HTMLVisualElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HTMLVisualElement, _super);
    function HTMLVisualElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         *
         */
        _this.defaultConfig = {
            enableHardwareAcceleration: true,
            allowTransformNone: true,
        };
        /**
         * A mutable record of styles we want to apply directly to the rendered Element
         * every frame. We use a mutable data structure to reduce GC during animations.
         */
        _this.style = {};
        /**
         * A record of styles we only want to apply via React. This gets set in useMotionValues
         * and applied in the render function. I'd prefer this to live somewhere else to decouple
         * VisualElement from React but works for now.
         */
        _this.reactStyle = {};
        /**
         * A mutable record of CSS variables we want to apply directly to the rendered Element
         * every frame. We use a mutable data structure to reduce GC during animations.
         */
        _this.vars = {};
        /**
         * A mutable record of transforms we want to apply directly to the rendered Element
         * every frame. We use a mutable data structure to reduce GC during animations.
         */
        _this.transform = {};
        /**
         * A mutable record of transform origins we want to apply directly to the rendered Element
         * every frame. We use a mutable data structure to reduce GC during animations.
         */
        _this.transformOrigin = {};
        /**
         * A mutable record of transform keys we want to apply to the rendered Element. We order
         * this to order transforms in the desired order. We use a mutable data structure to reduce GC during animations.
         */
        _this.transformKeys = [];
        _this.config = _this.defaultConfig;
        /**
         * ========================================
         * Layout
         * ========================================
         */
        _this.isLayoutProjectionEnabled = false;
        /**
         * A set of layout update event handlers. These are only called once all layouts have been read,
         * making it safe to perform DOM write operations.
         */
        _this.layoutUpdateListeners = new SubscriptionManager();
        _this.layoutMeasureListeners = new SubscriptionManager();
        _this.viewportBoxUpdateListeners = new SubscriptionManager();
        /**
         * Keep track of whether the viewport box has been updated since the last render.
         * If it has, we want to fire the onViewportBoxUpdate listener.
         */
        _this.hasViewportBoxUpdated = false;
        /**
         * The visual target we want to project our component into on a given frame
         * before applying transforms defined in `animate` or `style`.
         *
         * This is considered mutable to avoid object creation on each frame.
         */
        _this.targetBoxFinal = axisBox();
        /**
         * The overall scale of the local coordinate system as transformed by all parents
         * of this component. We use this for scale correction on our calculated layouts
         * and scale-affected values like `boxShadow`.
         *
         * This is considered mutable to avoid object creation on each frame.
         */
        _this.treeScale = { x: 1, y: 1 };
        _this.prevTreeScale = { x: 1, y: 1 };
        /**
         * The delta between the boxCorrected and the desired
         * targetBox (before user-set transforms are applied). The calculated output will be
         * handed to the renderer and used as part of the style correction calculations, for
         * instance calculating how to display the desired border-radius correctly.
         *
         * This is considered mutable to avoid object creation on each frame.
         */
        _this.delta = delta();
        /**
         * The delta between the boxCorrected and the desired targetBoxFinal. The calculated
         * output will be handed to the renderer and used to project the boxCorrected into
         * the targetBoxFinal.
         *
         * This is considered mutable to avoid object creation on each frame.
         */
        _this.deltaFinal = delta();
        /**
         * The computed transform string to apply deltaFinal to the element. Currently this is only
         * being used to diff and decide whether to render on the current frame, but a minor optimisation
         * could be to provide this to the buildHTMLStyle function.
         */
        _this.deltaTransform = identityProjection;
        /**
         *
         */
        _this.stopLayoutAxisAnimation = {
            x: function () { },
            y: function () { },
        };
        _this.isTargetBoxLocked = false;
        /**
         *
         */
        _this.axisProgress = {
            x: motionValue(0),
            y: motionValue(0),
        };
        _this.updateLayoutDelta = function () {
            _this.isLayoutProjectionEnabled && _this.box && _this.updateLayoutDeltas();
            /**
             * Ensure all children layouts are also updated.
             *
             * This uses a pre-bound function executor rather than a lamda to avoid creating a new function
             * multiple times per frame (source of mid-animation GC)
             */
            _this.children.forEach(fireUpdateLayoutDelta);
        };
        return _this;
    }
    /**
     * When a value is removed, we want to make sure it's removed from all rendered data structures.
     */
    HTMLVisualElement.prototype.removeValue = function (key) {
        _super.prototype.removeValue.call(this, key);
        delete this.vars[key];
        delete this.style[key];
    };
    /**
     * Empty the mutable data structures by re-creating them. We can do this every React render
     * as the comparative workload to the rest of the render is very low and this is also when
     * we want to reflect values that might have been removed by the render.
     */
    HTMLVisualElement.prototype.clean = function () {
        this.style = {};
        this.vars = {};
        this.transform = {};
    };
    HTMLVisualElement.prototype.updateConfig = function (config) {
        if (config === void 0) { config = {}; }
        this.config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.defaultConfig), config);
    };
    /**
     * Read a value directly from the HTMLElement style.
     */
    HTMLVisualElement.prototype.read = function (key) {
        return this.getComputedStyle()[key] || 0;
    };
    HTMLVisualElement.prototype.addValue = function (key, value) {
        _super.prototype.addValue.call(this, key, value);
        // If we have rotate values we want to foce the layoutOrigin used in layout projection
        // to the center of the element.
        if (key.startsWith("rotate"))
            this.layoutOrigin = 0.5;
    };
    /**
     * Read a value directly from the HTMLElement in case it's not defined by a Motion
     * prop. If it's a transform, we just return a pre-defined default value as reading these
     * out of a matrix is either error-prone or can incur a big payload for little benefit.
     */
    HTMLVisualElement.prototype.readNativeValue = function (key) {
        if (isTransformProp(key)) {
            var defaultValueType = getDefaultValueType(key);
            return defaultValueType ? defaultValueType.default || 0 : 0;
        }
        else {
            return this.read(key);
        }
    };
    /**
     * Ensure that HTML and Framer-specific value types like `px`->`%` and `Color`
     * can be animated by Motion.
     */
    HTMLVisualElement.prototype.makeTargetAnimatable = function (_a, parseDOMValues) {
        if (parseDOMValues === void 0) { parseDOMValues = true; }
        var transition = _a.transition, transitionEnd = _a.transitionEnd, target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["transition", "transitionEnd"]);
        var transformValues = this.config.transformValues;
        var origin = getOrigin(target, transition || {}, this);
        /**
         * If Framer has provided a function to convert `Color` etc value types, convert them
         */
        if (transformValues) {
            if (transitionEnd)
                transitionEnd = transformValues(transitionEnd);
            if (target)
                target = transformValues(target);
            if (origin)
                origin = transformValues(origin);
        }
        if (parseDOMValues) {
            checkTargetForNewValues(this, target, origin);
            var parsed = parseDomVariant(this, target, origin, transitionEnd);
            transitionEnd = parsed.transitionEnd;
            target = parsed.target;
        }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ transition: transition,
            transitionEnd: transitionEnd }, target);
    };
    HTMLVisualElement.prototype.enableLayoutProjection = function () {
        this.isLayoutProjectionEnabled = true;
    };
    HTMLVisualElement.prototype.hide = function () {
        if (this.isVisible === false)
            return;
        this.isVisible = false;
        this.scheduleRender();
    };
    HTMLVisualElement.prototype.show = function () {
        if (this.isVisible === true)
            return;
        this.isVisible = true;
        this.scheduleRender();
    };
    /**
     * Register an event listener to fire when the layout is updated. We might want to expose support
     * for this via a `motion` prop.
     */
    HTMLVisualElement.prototype.onLayoutUpdate = function (callback) {
        return this.layoutUpdateListeners.add(callback);
    };
    HTMLVisualElement.prototype.onLayoutMeasure = function (callback) {
        return this.layoutMeasureListeners.add(callback);
    };
    HTMLVisualElement.prototype.onViewportBoxUpdate = function (callback) {
        return this.viewportBoxUpdateListeners.add(callback);
    };
    /**
     * To be called when all layouts are successfully updated. In turn we can notify layoutUpdate
     * subscribers.
     */
    HTMLVisualElement.prototype.layoutReady = function (config) {
        this.layoutUpdateListeners.notify(this.box, this.prevViewportBox || this.box, config);
    };
    /**
     * Measure and return the Element's bounding box. We convert it to a AxisBox2D
     * structure to make it easier to work on each individual axis generically.
     */
    HTMLVisualElement.prototype.getBoundingBox = function () {
        var transformPagePoint = this.config.transformPagePoint;
        return getBoundingBox(this.element, transformPagePoint);
    };
    HTMLVisualElement.prototype.getBoundingBoxWithoutTransforms = function () {
        var bbox = this.getBoundingBox();
        removeBoxTransforms(bbox, this.latest);
        return bbox;
    };
    /**
     * Return the computed style after a render.
     */
    HTMLVisualElement.prototype.getComputedStyle = function () {
        return window.getComputedStyle(this.element);
    };
    /**
     * Record the bounding box as it exists before a re-render.
     */
    HTMLVisualElement.prototype.snapshotBoundingBox = function () {
        this.prevViewportBox = this.getBoundingBoxWithoutTransforms();
        /**
         * Update targetBox to match the prevViewportBox. This is just to ensure
         * that targetBox is affected by scroll in the same way as the measured box
         */
        this.rebaseTargetBox(false, this.prevViewportBox);
    };
    HTMLVisualElement.prototype.rebaseTargetBox = function (force, box) {
        var _this = this;
        if (force === void 0) { force = false; }
        if (box === void 0) { box = this.box; }
        var _a = this.axisProgress, x = _a.x, y = _a.y;
        var shouldRebase = this.box &&
            !this.isTargetBoxLocked &&
            !x.isAnimating() &&
            !y.isAnimating();
        if (force || shouldRebase) {
            eachAxis(function (axis) {
                var _a = box[axis], min = _a.min, max = _a.max;
                _this.setAxisTarget(axis, min, max);
            });
        }
    };
    HTMLVisualElement.prototype.measureLayout = function () {
        var _this = this;
        this.box = this.getBoundingBox();
        this.boxCorrected = copyAxisBox(this.box);
        if (!this.targetBox)
            this.targetBox = copyAxisBox(this.box);
        this.layoutMeasureListeners.notify(this.box, this.prevViewportBox || this.box);
        framesync__WEBPACK_IMPORTED_MODULE_1__["default"].update(function () { return _this.rebaseTargetBox(); });
    };
    HTMLVisualElement.prototype.lockTargetBox = function () {
        this.isTargetBoxLocked = true;
    };
    HTMLVisualElement.prototype.unlockTargetBox = function () {
        this.stopLayoutAnimation();
        this.isTargetBoxLocked = false;
    };
    /**
     * Reset the transform on the current Element. This is called as part
     * of a batched process across the entire layout tree. To remove this write
     * cycle it'd be interesting to see if it's possible to "undo" all the current
     * layout transforms up the tree in the same way this.getBoundingBoxWithoutTransforms
     * works
     */
    HTMLVisualElement.prototype.resetTransform = function () {
        var transformTemplate = this.config.transformTemplate;
        this.element.style.transform = transformTemplate
            ? transformTemplate({}, "")
            : "none";
        // Ensure that whatever happens next, we restore our transform
        this.scheduleRender();
    };
    /**
     * Set new min/max boundaries to project an axis into
     */
    HTMLVisualElement.prototype.setAxisTarget = function (axis, min, max) {
        var targetAxis = this.targetBox[axis];
        targetAxis.min = min;
        targetAxis.max = max;
        // Flag that we want to fire the onViewportBoxUpdate event handler
        this.hasViewportBoxUpdated = true;
        this.rootParent.scheduleUpdateLayoutDelta();
    };
    /**
     *
     */
    HTMLVisualElement.prototype.startLayoutAxisAnimation = function (axis, transition) {
        var _this = this;
        var _a;
        var progress = this.axisProgress[axis];
        var _b = this.targetBox[axis], min = _b.min, max = _b.max;
        var length = max - min;
        progress.clearListeners();
        progress.set(min);
        progress.set(min); // Set twice to hard-reset velocity
        progress.onChange(function (v) { return _this.setAxisTarget(axis, v, v + length); });
        return (_a = this.animateMotionValue) === null || _a === void 0 ? void 0 : _a.call(this, axis, progress, 0, transition);
    };
    HTMLVisualElement.prototype.stopLayoutAnimation = function () {
        var _this = this;
        eachAxis(function (axis) { return _this.axisProgress[axis].stop(); });
    };
    /**
     * Update the layout deltas to reflect the relative positions of the layout
     * and the desired target box
     */
    HTMLVisualElement.prototype.updateLayoutDeltas = function () {
        /**
         * Reset the corrected box with the latest values from box, as we're then going
         * to perform mutative operations on it.
         */
        resetBox(this.boxCorrected, this.box);
        /**
         * If this component has a parent, update this treeScale by incorporating the parent's
         * delta into its treeScale.
         */
        if (this.parent) {
            this.prevTreeScale.x = this.treeScale.x;
            this.prevTreeScale.y = this.treeScale.y;
            updateTreeScale(this.treeScale, this.parent.treeScale, this.parent.delta);
        }
        /**
         * Apply all the parent deltas to this box to produce the corrected box. This
         * is the layout box, as it will appear on screen as a result of the transforms of its parents.
         */
        applyTreeDeltas(this.boxCorrected, this.treePath);
        /**
         * Update the delta between the corrected box and the target box before user-set transforms were applied.
         * This will allow us to calculate the corrected borderRadius and boxShadow to compensate
         * for our layout reprojection, but still allow them to be scaled correctly by the user.
         * It might be that to simplify this we may want to accept that user-set scale is also corrected
         * and we wouldn't have to keep and calc both deltas, OR we could support a user setting
         * to allow people to choose whether these styles are corrected based on just the
         * layout reprojection or the final bounding box.
         */
        updateBoxDelta(this.delta, this.boxCorrected, this.targetBox, this.layoutOrigin);
        /**
         * If we have a listener for the viewport box, fire it.
         */
        this.hasViewportBoxUpdated &&
            this.viewportBoxUpdateListeners.notify(this.targetBox, this.delta);
        this.hasViewportBoxUpdated = false;
        /**
         * Ensure this element renders on the next frame if the projection transform has changed.
         */
        var deltaTransform = buildLayoutProjectionTransform(this.delta, this.treeScale);
        if (deltaTransform !== this.deltaTransform ||
            // Also compare calculated treeScale, for values that rely on only this for scale correction.
            this.prevTreeScale.x !== this.treeScale.x ||
            this.prevTreeScale.y !== this.treeScale.y) {
            this.scheduleRender();
        }
        this.deltaTransform = deltaTransform;
    };
    HTMLVisualElement.prototype.updateTransformDeltas = function () {
        if (!this.isLayoutProjectionEnabled || !this.box)
            return;
        /**
         * Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
         * This is the final box that we will then project into by calculating a transform delta and
         * applying it to the corrected box.
         */
        applyBoxTransforms(this.targetBoxFinal, this.targetBox, this.latest);
        /**
         * Update the delta between the corrected box and the final target box, after
         * user-set transforms are applied to it. This will be used by the renderer to
         * create a transform style that will reproject the element from its actual layout
         * into the desired bounding box.
         */
        updateBoxDelta(this.deltaFinal, this.boxCorrected, this.targetBoxFinal, this.layoutOrigin);
    };
    /**
     * ========================================
     * Build & render
     * ========================================
     */
    /**
     * Build a style prop using the latest resolved MotionValues
     */
    HTMLVisualElement.prototype.build = function () {
        this.updateTransformDeltas();
        if (this.isVisible !== undefined) {
            this.style.visibility = this.isVisible ? "visible" : "hidden";
        }
        buildHTMLStyles(this.latest, this.style, this.vars, this.transform, this.transformOrigin, this.transformKeys, this.config, this.isLayoutProjectionEnabled && !!this.box, this.delta, this.deltaFinal, this.treeScale, this.targetBoxFinal);
    };
    /**
     * Render the Element by rebuilding and applying the latest styles and vars.
     */
    HTMLVisualElement.prototype.render = function () {
        // Rebuild the latest animated values into style and vars caches.
        this.build();
        // Directly assign style into the Element's style prop. In tests Object.assign is the
        // fastest way to assign styles.
        Object.assign(this.element.style, this.style);
        // Loop over any CSS variables and assign those.
        for (var key in this.vars) {
            this.element.style.setProperty(key, this.vars[key]);
        }
    };
    return HTMLVisualElement;
}(VisualElement));
/**
 * Pre-bound version of updateLayoutDelta so we're not creating a new function multiple
 * times per frame.
 */
var fireUpdateLayoutDelta = function (child) {
    return child.updateLayoutDelta();
};

/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConstant(init) {
    var ref = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
    if (ref.current === null) {
        ref.current = init();
    }
    return ref.current;
}

function calcOrigin$1(origin, offset, size) {
    return typeof origin === "string"
        ? origin
        : style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"].transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */
function calcSVGTransformOrigin(dimensions, originX, originY) {
    var pxOriginX = calcOrigin$1(originX, dimensions.x, dimensions.width);
    var pxOriginY = calcOrigin$1(originY, dimensions.y, dimensions.height);
    return pxOriginX + " " + pxOriginY;
}

// Convert a progress 0-1 to a pixels value based on the provided length
var progressToPixels = function (progress, length) {
    return style_value_types__WEBPACK_IMPORTED_MODULE_4__["px"].transform(progress * length);
};
var dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray",
};
var camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray",
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */
function buildSVGPath(attrs, totalLength, length, spacing, offset, useDashCase) {
    if (spacing === void 0) { spacing = 1; }
    if (offset === void 0) { offset = 0; }
    if (useDashCase === void 0) { useDashCase = true; }
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    var keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset
    attrs[keys.offset] = progressToPixels(-offset, totalLength);
    // Build the dash array
    var pathLength = progressToPixels(length, totalLength);
    var pathSpacing = progressToPixels(spacing, totalLength);
    attrs[keys.array] = pathLength + " " + pathSpacing;
}

var unmeasured = { x: 0, y: 0, width: 0, height: 0 };
/**
 * Build SVG visual attrbutes, like cx and style.transform
 */
function buildSVGAttrs(_a, style, vars, attrs, transform, transformOrigin, transformKeys, config, dimensions, totalPathLength, isLayoutProjectionEnabled, delta, deltaFinal, treeScale, targetBox) {
    var attrX = _a.attrX, attrY = _a.attrY, originX = _a.originX, originY = _a.originY, pathLength = _a.pathLength, _b = _a.pathSpacing, pathSpacing = _b === void 0 ? 1 : _b, _c = _a.pathOffset, pathOffset = _c === void 0 ? 0 : _c, 
    // This is object creation, which we try to avoid per-frame.
    latest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
    /**
     * With SVG we treat all animated values as attributes rather than CSS, so we build into attrs
     */
    buildHTMLStyles(latest, attrs, vars, transform, transformOrigin, transformKeys, config, isLayoutProjectionEnabled, delta, deltaFinal, treeScale, targetBox);
    /**
     * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
     * and copy it into style.
     */
    if (attrs.transform) {
        style.transform = attrs.transform;
        delete attrs.transform;
    }
    // Parse transformOrigin
    if (originX !== undefined || originY !== undefined || style.transform) {
        style.transformOrigin = calcSVGTransformOrigin(dimensions || unmeasured, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
    }
    // Treat x/y not as shortcuts but as actual attributes
    if (attrX !== undefined)
        attrs.x = attrX;
    if (attrY !== undefined)
        attrs.y = attrY;
    // Build SVG path if one has been measured
    if (totalPathLength !== undefined && pathLength !== undefined) {
        buildSVGPath(attrs, totalPathLength, pathLength, pathSpacing, pathOffset, false);
    }
    return attrs;
}

/**
 * A set of attribute names that are always read/written as camel case.
 */
var camelCaseAttributes = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
]);

var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = "$1-$2";
/**
 * Convert camelCase to dash-case properties.
 */
var camelToDash = function (str) {
    return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};

/**
 * A VisualElement for SVGElements. Inherits from and extends HTMLVisualElement as the two
 * share data structures.
 */
var SVGVisualElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SVGVisualElement, _super);
    function SVGVisualElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * A mutable record of attributes we want to apply directly to the rendered Element
         * every frame. We use a mutable data structure to reduce GC during animations.
         */
        _this.attrs = {};
        /**
         * We disable hardware acceleration for SVG transforms as they're not currently able to be accelerated.
         */
        _this.defaultConfig = {
            enableHardwareAcceleration: false,
        };
        /**
         * Without duplicating this call from HTMLVisualElement we end up with HTMLVisualElement.defaultConfig
         * being assigned to config
         */
        _this.config = _this.defaultConfig;
        return _this;
    }
    /**
     * Measure the SVG element on mount. This can affect page rendering so there might be a
     * better time to perform this - for instance dynamically only if there's a transform-origin dependent
     * transform being set (like rotate)
     */
    SVGVisualElement.prototype.mount = function (element) {
        _super.prototype.mount.call(this, element);
        this.measure();
    };
    /**
     * Update the SVG dimensions and path length
     */
    SVGVisualElement.prototype.measure = function () {
        try {
            this.dimensions =
                typeof this.element.getBBox ===
                    "function"
                    ? this.element.getBBox()
                    : this.element.getBoundingClientRect();
        }
        catch (e) {
            // Most likely trying to measure an unrendered element under Firefox
            this.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
        if (isPath(this.element)) {
            this.totalPathLength = this.element.getTotalLength();
        }
    };
    /**
     * Empty the mutable data structures in case attrs have been removed between renders.
     */
    SVGVisualElement.prototype.clean = function () {
        _super.prototype.clean.call(this);
        this.attrs = {};
    };
    /**
     * Read an attribute directly from the SVGElement
     */
    SVGVisualElement.prototype.read = function (key) {
        key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
        return this.element.getAttribute(key);
    };
    SVGVisualElement.prototype.build = function () {
        this.updateTransformDeltas();
        buildSVGAttrs(this.latest, this.style, this.vars, this.attrs, this.transform, this.transformOrigin, this.transformKeys, this.config, this.dimensions, this.totalPathLength, this.isLayoutProjectionEnabled && !!this.box, this.delta, this.deltaFinal, this.treeScale, this.targetBoxFinal);
    };
    SVGVisualElement.prototype.render = function () {
        // Update HTML styles and CSS variables
        _super.prototype.render.call(this);
        // Loop through attributes and apply them to the SVGElement
        for (var key in this.attrs) {
            this.element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, this.attrs[key]);
        }
    };
    return SVGVisualElement;
}(HTMLVisualElement));
function isPath(element) {
    return element.tagName === "path";
}

/**
 * @internal
 */
/**
 * @internal
 */
var svgElements = [
    "animate",
    "circle",
    "clipPath",
    "defs",
    "desc",
    "ellipse",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "filter",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "switch",
    "symbol",
    "text",
    "textPath",
    "tspan",
    "use",
    "view",
];

var svgTagNames = new Set(svgElements);
/**
 * Determine whether this is a HTML or SVG component based on if the provided
 * Component is a string and a recognised SVG tag. A potentially better way to
 * do this would be to offer a `motion.customSVG` function and determine this
 * when we generate the `motion.circle` etc components.
 */
function isSVGComponent(Component) {
    return typeof Component === "string" && svgTagNames.has(Component);
}

/**
 * @public
 */
var PresenceContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["createContext"])(null);

var MotionContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["createContext"])({
    variantContext: {},
});
function useVariantContext() {
    return Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionContext).variantContext;
}
function useVisualElementContext() {
    return Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionContext).visualElement;
}

/**
 * DOM-flavoured variation of the useVisualElement hook. Used to create either a HTMLVisualElement
 * or SVGVisualElement for the component.
 *
 */
var useDomVisualElement = function (Component, props, isStatic, ref) {
    var parent = useVisualElementContext();
    var visualElement = useConstant(function () {
        var DOMVisualElement = isSVGComponent(Component)
            ? SVGVisualElement
            : HTMLVisualElement;
        return new DOMVisualElement(parent, ref);
    });
    visualElement.updateConfig(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, visualElement.config), { enableHardwareAcceleration: !isStatic }), props));
    visualElement.layoutId = props.layoutId;
    var presenceContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(PresenceContext);
    /**
     * Update VisualElement with presence data.
     */
    var isPresent = presenceContext === null ? true : presenceContext.isPresent;
    visualElement.isPresent =
        props.isPresent !== undefined ? props.isPresent : isPresent;
    /**
     *
     */
    var presenceId = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id;
    visualElement.isPresenceRoot = !parent || parent.presenceId !== presenceId;
    /**
     * TODO: Investigate if we need this
     */
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        if (props.onViewportBoxUpdate) {
            return visualElement.onViewportBoxUpdate(props.onViewportBoxUpdate);
        }
    }, [props.onViewportBoxUpdate]);
    return visualElement;
};

/**
 * A list of all valid MotionProps.
 *
 * @internalremarks
 * This doesn't throw if a `MotionProp` name is missing - it should.
 */
var validMotionProps = new Set([
    "initial",
    "animate",
    "exit",
    "style",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "layout",
    "layoutId",
    "onLayoutAnimationComplete",
    "onViewportBoxUpdate",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "drag",
    "dragControls",
    "dragListener",
    "dragConstraints",
    "dragDirectionLock",
    "_dragX",
    "_dragY",
    "dragElastic",
    "dragMomentum",
    "dragPropagation",
    "dragTransition",
    "onPan",
    "onPanStart",
    "onPanEnd",
    "onPanSessionStart",
    "onTap",
    "onTapStart",
    "onTapCancel",
    "whileHover",
    "whileTap",
    "onHoverEnd",
    "onHoverStart",
]);
/**
 * Check whether a prop name is a valid `MotionProp` key.
 *
 * @param key - Name of the property to check
 * @returns `true` is key is a valid `MotionProp`.
 *
 * @public
 */
function isValidMotionProp(key) {
    return validMotionProps.has(key);
}

var isPropValid = function (key) { return !isValidMotionProp(key); };
/**
 * Emotion and Styled Components both allow users to pass through arbitrary props to their components
 * to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
 * of these should be passed to the underlying DOM node.
 *
 * However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
 * as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
 * passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
 * `@emotion/is-prop-valid`, however to fix this problem we need to use it.
 *
 * By making it an optionalDependency we can offer this functionality only in the situations where it's
 * actually required.
 */
try {
    var emotionIsPropValid_1 = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js").default;
    isPropValid = function (key) {
        // Handle events explicitly as Emotion validates them all as true
        if (key.startsWith("on")) {
            return !isValidMotionProp(key);
        }
        else {
            return emotionIsPropValid_1(key);
        }
    };
}
catch (_a) {
    // We don't need to actually do anything here - the fallback is the existing `isPropValid`.
}
function filterProps(props) {
    var domProps = {};
    for (var key in props) {
        if (isPropValid(key))
            domProps[key] = props[key];
    }
    return domProps;
}

function buildHTMLProps(visualElement, _a) {
    var drag = _a.drag;
    // The `any` isn't ideal but it is the type of createElement props argument
    var htmlProps = {
        style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, visualElement.reactStyle), visualElement.style), visualElement.vars),
    };
    if (!!drag) {
        // Disable the ghost element when a user drags
        htmlProps.draggable = false;
        // Disable text selection
        htmlProps.style.userSelect = "none";
        // Disable scrolling on the draggable direction
        htmlProps.style.touchAction =
            drag === true ? "none" : "pan-" + (drag === "x" ? "y" : "x");
    }
    return htmlProps;
}

/**
 * Build React props for SVG elements
 */
function buildSVGProps(visualElement) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, visualElement.attrs), { style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, visualElement.reactStyle) });
}

function render(Component, props, visualElement) {
    // Only filter props from components we control, ie `motion.div`. If this
    // is a custom component pass along everything provided to it.
    var forwardedProps = typeof Component === "string" ? filterProps(props) : props;
    /**
     * Every render, empty and rebuild the animated values to be applied to our Element.
     * During animation these data structures are used in a mutable fashion to reduce
     * garbage collection, but between renders we can flush them to remove values
     * that might have been taken out of the provided props.
     */
    visualElement.clean();
    visualElement.build();
    // Generate props to visually render this component
    var visualProps = isSVGComponent(Component)
        ? buildSVGProps(visualElement)
        : buildHTMLProps(visualElement, props);
    return Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, forwardedProps), { ref: visualElement.ref }), visualProps));
}

var isMotionValue = function (value) {
    return value instanceof MotionValue;
};

function isForcedMotionValue(key, _a) {
    var layout = _a.layout, layoutId = _a.layoutId;
    return (isTransformProp(key) ||
        isTransformOriginProp(key) ||
        ((layout || layoutId !== undefined) && !!valueScaleCorrection[key]));
}
/**
 * Scrape props for MotionValues and add/remove them to this component's
 * VisualElement
 */
function useMotionValues(visualElement, props) {
    var prev = useConstant(empty);
    /**
     * Remove MotionValues that are no longer present
     */
    for (var key in prev) {
        var isForced = isForcedMotionValue(key, props);
        var existsAsProp = props[key] !== undefined;
        var existsAsStyle = props.style && props.style[key] !== undefined;
        var propIsMotionValue = existsAsProp && isMotionValue(props[key]);
        var styleIsMotionValue = existsAsStyle && isMotionValue(props.style[key]);
        var transformRemoved = isForced && !existsAsProp && !existsAsStyle;
        var motionValueRemoved = !isForced && !propIsMotionValue && !styleIsMotionValue;
        if (transformRemoved || motionValueRemoved) {
            visualElement.removeValue(key);
            delete prev[key];
        }
    }
    /**
     * Add incoming MotionValues
     */
    addMotionValues(visualElement, prev, props, false, props);
    if (props.style)
        addMotionValues(visualElement, prev, props.style, true, props);
    /**
     * Transform custom values if provided a handler, ie size -> width/height
     * Ideally we'd ditch this by removing support for size and other custom values from Framer.
     */
    if (props.transformValues) {
        visualElement.reactStyle = props.transformValues(visualElement.reactStyle);
    }
}
/**
 * Add incoming MotionValues
 *
 * TODO: Type the VisualElements properly
 */
function addMotionValues(visualElement, prev, source, isStyle, props) {
    if (isStyle === void 0) { isStyle = false; }
    if (isStyle)
        visualElement.reactStyle = {};
    for (var key in source) {
        var value = source[key];
        var foundMotionValue = false;
        if (isMotionValue(value)) {
            // If this is a MotionValue, add it if it isn't a reserved key
            if (!reservedNames.has(key)) {
                visualElement.addValue(key, value);
                foundMotionValue = true;
            }
        }
        else if (isForcedMotionValue(key, props)) {
            // If this is a transform prop, always create a MotionValue
            // to ensure we can reconcile them all together.
            if (!visualElement.hasValue(key)) {
                visualElement.addValue(key, motionValue(value));
            }
            else if (value !== prev[key]) {
                if (isMotionValue(prev[key])) {
                    /**
                     * If the previous value was a MotionValue, and this value isn't,
                     * we want to create a new MotionValue rather than update one that's been removed.
                     */
                    visualElement.addValue(key, motionValue(value));
                }
                else {
                    /**
                     * Otherwise, we just want to ensure the MotionValue is of the latest value.
                     */
                    var motion = visualElement.getValue(key);
                    motion.set(value);
                }
            }
            foundMotionValue = true;
        }
        else if (isStyle) {
            visualElement.reactStyle[key] = value;
        }
        if (foundMotionValue)
            prev[key] = value;
    }
}
/**
 * These are props we accept as MotionValues but don't want to add
 * to the VisualElement
 */
var reservedNames = new Set([]);
var empty = function () { return ({}); };

/**
 * @public
 */
var MotionConfigContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["createContext"])({
    transformPagePoint: function (p) { return p; },
    features: [],
    isStatic: false,
});
/**
 * MotionConfig can be used in combination with the `m` component to cut bundle size
 * and dynamically load only the features you use.
 *
 * ```jsx
 * import {
 *   m as motion,
 *   AnimationFeature,
 *   MotionConfig
 * } from "framer-motion"
 *
 * export function App() {
 *   return (
 *     <MotionConfig features={[AnimationFeature]}>
 *       <motion.div animate={{ x: 100 }} />
 *     </MotionConfig>
 *   )
 * }
 * ```
 *
 * @public
 */
function MotionConfig(_a) {
    var children = _a.children, _b = _a.features, features = _b === void 0 ? [] : _b, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["children", "features"]);
    var pluginContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionConfigContext);
    var loadedFeatures = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(pluginContext.features, features);
    // We do want to rerender children when the number of loaded features changes
    var value = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () { return ({ features: loadedFeatures }); }, [
        loadedFeatures.length,
    ]);
    // Mutative to prevent triggering rerenders in all listening
    // components every time this component renders
    for (var key in props) {
        value[key] = props[key];
    }
    return (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(MotionConfigContext.Provider, { value: value }, children));
}

function checkShouldInheritVariant(_a) {
    var animate = _a.animate, variants = _a.variants, inherit = _a.inherit;
    return inherit === undefined ? !!variants && !animate : inherit;
}

/**
 * Load features via renderless components based on the provided MotionProps
 */
function useFeatures(defaultFeatures, isStatic, visualElement, props) {
    var plugins = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionConfigContext);
    // If this is a static component, or we're rendering on the server, we don't load
    // any feature components
    if (isStatic || typeof window === "undefined")
        return null;
    var allFeatures = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(defaultFeatures, plugins.features);
    var numFeatures = allFeatures.length;
    var features = [];
    // Decide which features we should render and add them to the returned array
    for (var i = 0; i < numFeatures; i++) {
        var _a = allFeatures[i], shouldRender = _a.shouldRender, key = _a.key, getComponent = _a.getComponent;
        if (shouldRender(props)) {
            var Component = getComponent(props);
            Component &&
                features.push(Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ key: key }, props, { visualElement: visualElement, inherit: checkShouldInheritVariant(props) })));
        }
    }
    return features;
}

var Presence;
(function (Presence) {
    Presence[Presence["Entering"] = 0] = "Entering";
    Presence[Presence["Present"] = 1] = "Present";
    Presence[Presence["Exiting"] = 2] = "Exiting";
})(Presence || (Presence = {}));
var VisibilityAction;
(function (VisibilityAction) {
    VisibilityAction[VisibilityAction["Hide"] = 0] = "Hide";
    VisibilityAction[VisibilityAction["Show"] = 1] = "Show";
})(VisibilityAction || (VisibilityAction = {}));

/**
 * Default handlers for batching VisualElements
 */
var defaultHandler = {
    measureLayout: function (child) { return child.measureLayout(); },
    layoutReady: function (child) { return child.layoutReady(); },
};
/**
 * Sort VisualElements by tree depth, so we process the highest elements first.
 */
var sortByDepth = function (a, b) {
    return a.depth - b.depth;
};
/**
 * Create a batcher to process VisualElements
 */
function createBatcher() {
    var queue = new Set();
    var add = function (child) { return queue.add(child); };
    var flush = function (_a) {
        var _b = _a === void 0 ? defaultHandler : _a, measureLayout = _b.measureLayout, layoutReady = _b.layoutReady;
        var order = Array.from(queue).sort(sortByDepth);
        /**
         * Write: Reset any transforms on children elements so we can read their actual layout
         */
        order.forEach(function (child) { return child.resetTransform(); });
        /**
         * Read: Measure the actual layout
         */
        order.forEach(measureLayout);
        /**
         * Write: Notify the VisualElements they're ready for further write operations.
         */
        order.forEach(layoutReady);
        /**
         * After all children have started animating, ensure any Entering components are set to Present.
         * If we add deferred animations (set up all animations and then start them in two loops) this
         * could be moved to the start loop. But it needs to happen after all the animations configs
         * are generated in AnimateSharedLayout as this relies on presence data
         */
        order.forEach(function (child) {
            if (child.isPresent)
                child.presence = Presence.Present;
        });
        queue.clear();
    };
    return { add: add, flush: flush };
}
function isSharedLayout(context) {
    return !!context.forceUpdate;
}
var SharedLayoutContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["createContext"])(createBatcher());
/**
 * @internal
 */
var FramerTreeLayoutContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["createContext"])(createBatcher());

var isBrowser = typeof window !== "undefined";
var useIsomorphicLayoutEffect = isBrowser ? react__WEBPACK_IMPORTED_MODULE_5__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_5__["useEffect"];

function useSnapshotOnUnmount(visualElement) {
    var syncLayout = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(SharedLayoutContext);
    var framerSyncLayout = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(FramerTreeLayoutContext);
    useIsomorphicLayoutEffect(function () { return function () {
        if (isSharedLayout(syncLayout)) {
            syncLayout.remove(visualElement);
        }
        if (isSharedLayout(framerSyncLayout)) {
            framerSyncLayout.remove(visualElement);
        }
    }; }, []);
}

/**
 * When a component is the child of `AnimatePresence`, it can use `usePresence`
 * to access information about whether it's still present in the React tree.
 *
 * ```jsx
 * import { usePresence } from "framer-motion"
 *
 * export const Component = () => {
 *   const [isPresent, safeToRemove] = usePresence()
 *
 *   useEffect(() => {
 *     !isPresent && setTimeout(safeToRemove, 1000)
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * If `isPresent` is `false`, it means that a component has been removed the tree, but
 * `AnimatePresence` won't really remove it until `safeToRemove` has been called.
 *
 * @public
 */
function usePresence() {
    var context = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(PresenceContext);
    if (context === null)
        return [true, null];
    var isPresent = context.isPresent, onExitComplete = context.onExitComplete, register = context.register;
    // It's safe to call the following hooks conditionally (after an early return) because the context will always
    // either be null or non-null for the lifespan of the component.
    // Replace with useOpaqueId when released in React
    var id = useUniqueId();
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () { return register(id); }, []);
    var safeToRemove = function () { return onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete(id); };
    return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}
/**
 * Similar to `usePresence`, except `useIsPresent` simply returns whether or not the component is present.
 * There is no `safeToRemove` function.
 *
 * ```jsx
 * import { useIsPresent } from "framer-motion"
 *
 * export const Component = () => {
 *   const isPresent = useIsPresent()
 *
 *   useEffect(() => {
 *     !isPresent && console.log("I've been removed!")
 *   }, [isPresent])
 *
 *   return <div />
 * }
 * ```
 *
 * @public
 */
function useIsPresent() {
    return isPresent(Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(PresenceContext));
}
function isPresent(context) {
    return context === null ? true : context.isPresent;
}
var counter = 0;
var incrementId = function () { return counter++; };
var useUniqueId = function () { return useConstant(incrementId); };

/**
 * Use callback either only on the initial render or on all renders. In concurrent mode
 * the "initial" render might run multiple times
 *
 * @param callback - Callback to run
 * @param isInitialOnly - Set to `true` to only run on initial render, or `false` for all renders. Defaults to `false`.
 *
 * @public
 */
function useInitialOrEveryRender(callback, isInitialOnly) {
    if (isInitialOnly === void 0) { isInitialOnly = false; }
    var isInitialRender = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(true);
    if (!isInitialOnly || (isInitialOnly && isInitialRender.current)) {
        callback();
    }
    isInitialRender.current = false;
}

/**
 * This hook is resonsible for creating the variant-propagation tree
 * relationship between VisualElements.
 */
function useVariants(visualElement, _a, isStatic) {
    var _b, _c;
    var variants = _a.variants, initial = _a.initial, animate = _a.animate, whileTap = _a.whileTap, whileHover = _a.whileHover;
    var _d = useVariantContext(), parent = _d.parent, parentInitial = _d.initial, parentAnimate = _d.animate;
    var presenceContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(PresenceContext);
    /**
     * We only add this VisualElement to the variant tree *if* we're:
     * 1. Being provided a variants prop
     * 2. Being used to control variants (ie animate, whileHover etc)
     * 3. Or being passed animation controls, which we have to assume may control variants
     * Otherwise this component should be "invisible" to variant propagation. This is a concession
     * to Framer which uses a `motion` component in every `Frame` and it might be if we change that
     * in the future that this restriction is removed.
     */
    var controlsVariants = isVariantLabel$1(animate) ||
        isVariantLabel$1(whileTap) ||
        isVariantLabel$1(whileHover) ||
        isAnimationControls(animate);
    var isVariantNode = variants || controlsVariants;
    /**
     * Override initial with one from a parent `AnimatePresence`, if present
     */
    initial = (_b = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) !== null && _b !== void 0 ? _b : initial;
    /**
     * If initial is false, and animate isn't animation controls, we assign animate
     * to initial and set our values to that for the initial render.
     */
    if (initial === false && !isAnimationControls(animate)) {
        initial = animate;
    }
    var context = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () { return ({
        parent: isVariantNode ? visualElement : parent,
        initial: isVariantLabel$1(initial) ? initial : parentInitial,
        animate: isVariantLabel$1(animate) ? animate : parentAnimate,
    }); }, 
    /**
     * Only create a new context value (thereby re-rendering children) if this
     * is a static component and `initial` changes.
     */
    [isStatic ? initial : null]);
    // Set initial state. If this is a static component (ie in Framer canvas), respond to updates
    // in `initial`.
    useInitialOrEveryRender(function () {
        var initialToApply = initial || parentInitial;
        initialToApply && setValues(visualElement, initialToApply);
    }, !isStatic);
    /**
     * Subscribe to the parent visualElement if this is a participant in the variant tree
     */
    isVariantNode && !controlsVariants && (parent === null || parent === void 0 ? void 0 : parent.addVariantChild(visualElement));
    /**
     * If this component isn't exiting the tree, clear all the children in the render phase.
     * This will allow children to resubscribe in the correct order to ensure the correct stagger order.
     */
    isPresent(presenceContext) && ((_c = visualElement.variantChildrenOrder) === null || _c === void 0 ? void 0 : _c.clear());
    /**
     * Subscribe to the propagated parent.
     */
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        isVariantNode && (parent === null || parent === void 0 ? void 0 : parent.addVariantChildOrder(visualElement));
    });
    /**
     * Track mount status so children can detect whether they were present during the
     * component's initial mount.
     */
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        visualElement.isMounted = true;
        return function () {
            var _a;
            visualElement.isMounted = false;
            (_a = parent === null || parent === void 0 ? void 0 : parent.variantChildren) === null || _a === void 0 ? void 0 : _a.delete(visualElement);
        };
    }, []);
    /**
     * We want to update the "base" (or fallback) value on the initial render.
     */
    useInitialOrEveryRender(function () {
        visualElement.forEachValue(function (value, key) {
            visualElement.baseTarget[key] = value.get();
        });
    }, true);
    return context;
}
function isVariantLabel$1(v) {
    return typeof v === "string" || Array.isArray(v);
}
function isAnimationControls(v) {
    return typeof v === "object" && typeof v.start === "function";
}

/**
 * Create a `motion` component.
 *
 * This function accepts a Component argument, which can be either a string (ie "div"
 * for `motion.div`), or an actual React component.
 *
 * Alongside this is a config option which provides a way of rendering the provided
 * component "offline", or outside the React render cycle.
 *
 * @internal
 */
function createMotionComponent(Component, _a) {
    var defaultFeatures = _a.defaultFeatures, useVisualElement = _a.useVisualElement, render = _a.render;
    function MotionComponent(props, externalRef) {
        /**
         * If a component is static, we only visually update it as a
         * result of a React re-render, rather than any interactions or animations.
         * If this component or any ancestor is static, we disable hardware acceleration
         * and don't load any additional functionality.
         */
        var isStatic = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionConfigContext).isStatic;
        /**
         * Create a VisualElement for this component. A VisualElement provides a common
         * interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
         * providing a way of rendering to these APIs outside of the React render loop
         * for more performant animations and interactions
         */
        var visualElement = useVisualElement(Component, props, isStatic, externalRef);
        /**
         * Scrape MotionValues from props and add/remove them to/from the VisualElement.
         */
        useMotionValues(visualElement, props);
        /**
         * Add the visualElement as a node in the variant tree.
         */
        var variantContext = useVariants(visualElement, props, isStatic);
        /**
         * Load features as renderless components unless the component isStatic
         */
        var features = useFeatures(defaultFeatures, isStatic, visualElement, props);
        /**
         * Only create a new context value when the sub-contexts change.
         */
        var context = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () { return ({ visualElement: visualElement, variantContext: variantContext }); }, [
            visualElement,
            variantContext,
        ]);
        var component = render(Component, props, visualElement);
        /**
         * If this component is a child of AnimateSharedLayout, we need to snapshot the component
         * before it's unmounted. This lives here rather than in features/layout/Measure because
         * as a child component its unmount effect runs after this component has been unmounted.
         */
        useSnapshotOnUnmount(visualElement);
        // The mount order and hierarchy is specific to ensure our element ref is hydrated by the time
        // all plugins and features has to execute.
        return (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null,
            Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(MotionContext.Provider, { value: context }, component),
            features));
    }
    return Object(react__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(MotionComponent);
}

function createLock(name) {
    var lock = null;
    return function () {
        var openLock = function () {
            lock = null;
        };
        if (lock === null) {
            lock = name;
            return openLock;
        }
        return false;
    };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag) {
    var lock = false;
    if (drag === "y") {
        lock = globalVerticalLock();
    }
    else if (drag === "x") {
        lock = globalHorizontalLock();
    }
    else {
        var openHorizontal_1 = globalHorizontalLock();
        var openVertical_1 = globalVerticalLock();
        if (openHorizontal_1 && openVertical_1) {
            lock = function () {
                openHorizontal_1();
                openVertical_1();
            };
        }
        else {
            // Release the locks because we don't use them
            if (openHorizontal_1)
                openHorizontal_1();
            if (openVertical_1)
                openVertical_1();
        }
    }
    return lock;
}

function addDomEvent(target, eventName, handler, options) {
    target.addEventListener(eventName, handler, options);
    return function () { return target.removeEventListener(eventName, handler, options); };
}
/**
 * Attaches an event listener directly to the provided DOM element.
 *
 * Bypassing React's event system can be desirable, for instance when attaching non-passive
 * event handlers.
 *
 * ```jsx
 * const ref = useRef(null)
 *
 * useDomEvent(ref, 'wheel', onWheel, { passive: false })
 *
 * return <div ref={ref} />
 * ```
 *
 * @param ref - React.RefObject that's been provided to the element you want to bind the listener to.
 * @param eventName - Name of the event you want listen for.
 * @param handler - Function to fire when receiving the event.
 * @param options - Options to pass to `Event.addEventListener`.
 *
 * @public
 */
function useDomEvent(ref, eventName, handler, options) {
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        var element = ref.current;
        if (handler && element) {
            return addDomEvent(element, eventName, handler, options);
        }
    }, [ref, eventName, handler, options]);
}

function isMouseEvent(event) {
    // PointerEvent inherits from MouseEvent so we can't use a straight instanceof check.
    if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
        return !!(event.pointerType === "mouse");
    }
    return event instanceof MouseEvent;
}
function isTouchEvent(event) {
    var hasTouches = !!event.touches;
    return hasTouches;
}

/**
 * Filters out events not attached to the primary pointer (currently left mouse button)
 * @param eventHandler
 */
function filterPrimaryPointer(eventHandler) {
    return function (event) {
        var isMouseEvent = event instanceof MouseEvent;
        var isPrimaryPointer = !isMouseEvent ||
            (isMouseEvent && event.button === 0);
        if (isPrimaryPointer) {
            eventHandler(event);
        }
    };
}
var defaultPagePoint = { pageX: 0, pageY: 0 };
function pointFromTouch(e, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    var primaryTouch = e.touches[0] || e.changedTouches[0];
    var point = primaryTouch || defaultPagePoint;
    return {
        x: point[pointType + "X"],
        y: point[pointType + "Y"],
    };
}
function pointFromMouse(point, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    return {
        x: point[pointType + "X"],
        y: point[pointType + "Y"],
    };
}
function extractEventInfo(event, pointType) {
    if (pointType === void 0) { pointType = "page"; }
    return {
        point: isTouchEvent(event)
            ? pointFromTouch(event, pointType)
            : pointFromMouse(event, pointType),
    };
}
function getViewportPointFromEvent(event) {
    return extractEventInfo(event, "client");
}
var wrapHandler = function (handler, shouldFilterPrimaryPointer) {
    if (shouldFilterPrimaryPointer === void 0) { shouldFilterPrimaryPointer = false; }
    var listener = function (event) {
        return handler(event, extractEventInfo(event));
    };
    return shouldFilterPrimaryPointer
        ? filterPrimaryPointer(listener)
        : listener;
};

var isBrowser$1 = typeof window !== "undefined";
// We check for event support via functions in case they've been mocked by a testing suite.
var supportsPointerEvents = function () {
    return isBrowser$1 && window.onpointerdown === null;
};
var supportsTouchEvents = function () {
    return isBrowser$1 && window.ontouchstart === null;
};
var supportsMouseEvents = function () {
    return isBrowser$1 && window.onmousedown === null;
};

var mouseEventNames = {
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointercancel: "mousecancel",
    pointerover: "mouseover",
    pointerout: "mouseout",
    pointerenter: "mouseenter",
    pointerleave: "mouseleave",
};
var touchEventNames = {
    pointerdown: "touchstart",
    pointermove: "touchmove",
    pointerup: "touchend",
    pointercancel: "touchcancel",
};
function getPointerEventName(name) {
    if (supportsPointerEvents()) {
        return name;
    }
    else if (supportsTouchEvents()) {
        return touchEventNames[name];
    }
    else if (supportsMouseEvents()) {
        return mouseEventNames[name];
    }
    return name;
}
function addPointerEvent(target, eventName, handler, options) {
    return addDomEvent(target, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}
function usePointerEvent(ref, eventName, handler, options) {
    return useDomEvent(ref, getPointerEventName(eventName), handler && wrapHandler(handler, eventName === "pointerdown"), options);
}

/**
 * @internal
 */
var PanSession = /** @class */ (function () {
    function PanSession(event, handlers, _a) {
        var _this = this;
        var transformPagePoint = (_a === void 0 ? {} : _a).transformPagePoint;
        /**
         * @internal
         */
        this.startEvent = null;
        /**
         * @internal
         */
        this.lastMoveEvent = null;
        /**
         * @internal
         */
        this.lastMoveEventInfo = null;
        /**
         * @internal
         */
        this.handlers = {};
        this.updatePoint = function () {
            if (!(_this.lastMoveEvent && _this.lastMoveEventInfo))
                return;
            var info = getPanInfo(_this.lastMoveEventInfo, _this.history);
            var isPanStarted = _this.startEvent !== null;
            // Only start panning if the offset is larger than 3 pixels. If we make it
            // any larger than this we'll want to reset the pointer history
            // on the first update to avoid visual snapping to the cursoe.
            var isDistancePastThreshold = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["distance"])(info.offset, { x: 0, y: 0 }) >= 3;
            if (!isPanStarted && !isDistancePastThreshold)
                return;
            var point = info.point;
            var timestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_1__["getFrameData"])().timestamp;
            _this.history.push(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, point), { timestamp: timestamp }));
            var _a = _this.handlers, onStart = _a.onStart, onMove = _a.onMove;
            if (!isPanStarted) {
                onStart && onStart(_this.lastMoveEvent, info);
                _this.startEvent = _this.lastMoveEvent;
            }
            onMove && onMove(_this.lastMoveEvent, info);
        };
        this.handlePointerMove = function (event, info) {
            _this.lastMoveEvent = event;
            _this.lastMoveEventInfo = transformPoint(info, _this.transformPagePoint);
            // Because Safari doesn't trigger mouseup events when it's above a `<select>`
            if (isMouseEvent(event) && event.buttons === 0) {
                _this.handlePointerUp(event, info);
                return;
            }
            // Throttle mouse move event to once per frame
            framesync__WEBPACK_IMPORTED_MODULE_1__["default"].update(_this.updatePoint, true);
        };
        this.handlePointerUp = function (event, info) {
            _this.end();
            var onEnd = _this.handlers.onEnd;
            if (!onEnd)
                return;
            var panInfo = getPanInfo(transformPoint(info, _this.transformPagePoint), _this.history);
            onEnd && onEnd(event, panInfo);
        };
        // If we have more than one touch, don't start detecting this gesture
        if (isTouchEvent(event) && event.touches.length > 1)
            return;
        this.handlers = handlers;
        this.transformPagePoint = transformPagePoint;
        var info = extractEventInfo(event);
        var initialInfo = transformPoint(info, this.transformPagePoint);
        var point = initialInfo.point;
        var timestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_1__["getFrameData"])().timestamp;
        this.history = [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, point), { timestamp: timestamp })];
        var onSessionStart = handlers.onSessionStart;
        onSessionStart &&
            onSessionStart(event, getPanInfo(initialInfo, this.history));
        this.removeListeners = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["pipe"])(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp));
    }
    PanSession.prototype.updateHandlers = function (handlers) {
        this.handlers = handlers;
    };
    PanSession.prototype.end = function () {
        this.removeListeners && this.removeListeners();
        framesync__WEBPACK_IMPORTED_MODULE_1__["cancelSync"].update(this.updatePoint);
    };
    return PanSession;
}());
function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
    return { x: a.x - b.x, y: a.y - b.y };
}
function getPanInfo(_a, history) {
    var point = _a.point;
    return {
        point: point,
        delta: subtractPoint(point, lastDevicePoint(history)),
        offset: subtractPoint(point, startDevicePoint(history)),
        velocity: getVelocity$1(history, 0.1),
    };
}
function startDevicePoint(history) {
    return history[0];
}
function lastDevicePoint(history) {
    return history[history.length - 1];
}
function getVelocity$1(history, timeDelta) {
    if (history.length < 2) {
        return { x: 0, y: 0 };
    }
    var i = history.length - 1;
    var timestampedPoint = null;
    var lastPoint = lastDevicePoint(history);
    while (i >= 0) {
        timestampedPoint = history[i];
        if (lastPoint.timestamp - timestampedPoint.timestamp >
            secondsToMilliseconds(timeDelta)) {
            break;
        }
        i--;
    }
    if (!timestampedPoint) {
        return { x: 0, y: 0 };
    }
    var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1000;
    if (time === 0) {
        return { x: 0, y: 0 };
    }
    var currentVelocity = {
        x: (lastPoint.x - timestampedPoint.x) / time,
        y: (lastPoint.y - timestampedPoint.y) / time,
    };
    if (currentVelocity.x === Infinity) {
        currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
        currentVelocity.y = 0;
    }
    return currentVelocity;
}

/**
 * Apply constraints to a point. These constraints are both physical along an
 * axis, and an elastic factor that determines how much to constrain the point
 * by if it does lie outside the defined parameters.
 */
function applyConstraints(point, _a, elastic) {
    var min = _a.min, max = _a.max;
    if (min !== undefined && point < min) {
        // If we have a min point defined, and this is outside of that, constrain
        point = elastic ? Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(min, point, elastic) : Math.max(point, min);
    }
    else if (max !== undefined && point > max) {
        // If we have a max point defined, and this is outside of that, constrain
        point = elastic ? Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(max, point, elastic) : Math.min(point, max);
    }
    return point;
}
/**
 * Calculates a min projection point based on a pointer, pointer progress
 * within the drag target, and constraints.
 *
 * For instance if an element was 100px width, we were dragging from 0.25
 * along this axis, the pointer is at 200px, and there were no constraints,
 * we would calculate a min projection point of 175px.
 */
function calcConstrainedMinPoint(point, length, progress, constraints, elastic) {
    // Calculate a min point for this axis and apply it to the current pointer
    var min = point - length * progress;
    return constraints ? applyConstraints(min, constraints, elastic) : min;
}
/**
 * Calculate constraints in terms of the viewport when defined relatively to the
 * measured axis. This is measured from the nearest edge, so a max constraint of 200
 * on an axis with a max value of 300 would return a constraint of 500 - axis length
 */
function calcRelativeAxisConstraints(axis, min, max) {
    return {
        min: min !== undefined ? axis.min + min : undefined,
        max: max !== undefined
            ? axis.max + max - (axis.max - axis.min)
            : undefined,
    };
}
/**
 * Calculate constraints in terms of the viewport when
 * defined relatively to the measured bounding box.
 */
function calcRelativeConstraints(layoutBox, _a) {
    var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
    return {
        x: calcRelativeAxisConstraints(layoutBox.x, left, right),
        y: calcRelativeAxisConstraints(layoutBox.y, top, bottom),
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative axis
 */
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    var _a;
    var min = constraintsAxis.min - layoutAxis.min;
    var max = constraintsAxis.max - layoutAxis.max;
    // If the constraints axis is actually smaller than the layout axis then we can
    // flip the constraints
    if (constraintsAxis.max - constraintsAxis.min <
        layoutAxis.max - layoutAxis.min) {
        _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])([max, min], 2), min = _a[0], max = _a[1];
    }
    return {
        min: layoutAxis.min + min,
        max: layoutAxis.min + max,
    };
}
/**
 * Calculate viewport constraints when defined as another viewport-relative box
 */
function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
        x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
        y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y),
    };
}
/**
 * Calculate the an axis position based on two axes and a progress value.
 */
function calcPositionFromProgress(axis, constraints, progress) {
    var axisLength = axis.max - axis.min;
    var min = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(constraints.min, constraints.max - axisLength, progress);
    return { min: min, max: min + axisLength };
}
/**
 * Rebase the calculated viewport constraints relative to the layout.min point.
 */
function rebaseAxisConstraints(layout, constraints) {
    var relativeConstraints = {};
    if (constraints.min !== undefined) {
        relativeConstraints.min = constraints.min - layout.min;
    }
    if (constraints.max !== undefined) {
        relativeConstraints.max = constraints.max - layout.min;
    }
    return relativeConstraints;
}

var elementDragControls = new WeakMap();
/**
 *
 */
var lastPointerEvent;
var VisualElementDragControls = /** @class */ (function () {
    function VisualElementDragControls(_a) {
        var visualElement = _a.visualElement;
        /**
         * Track whether we're currently dragging.
         *
         * @internal
         */
        this.isDragging = false;
        /**
         * The current direction of drag, or `null` if both.
         *
         * @internal
         */
        this.currentDirection = null;
        /**
         * The permitted boundaries of travel, in pixels.
         *
         * @internal
         */
        this.constraints = false;
        /**
         * A reference to the host component's latest props.
         *
         * @internal
         */
        this.props = {};
        /**
         * @internal
         */
        this.hasMutatedConstraints = false;
        /**
         * Track the initial position of the cursor relative to the dragging element
         * when dragging starts as a value of 0-1 on each axis. We then use this to calculate
         * an ideal bounding box for the VisualElement renderer to project into every frame.
         *
         * @internal
         */
        this.cursorProgress = {
            x: 0.5,
            y: 0.5,
        };
        // When updating _dragX, or _dragY instead of the VisualElement,
        // persist their values between drag gestures.
        this.originPoint = {};
        // This is a reference to the global drag gesture lock, ensuring only one component
        // can "capture" the drag of one or both axes.
        // TODO: Look into moving this into pansession?
        this.openGlobalLock = null;
        /**
         * @internal
         */
        this.panSession = null;
        this.visualElement = visualElement;
        this.visualElement.enableLayoutProjection();
        elementDragControls.set(visualElement, this);
    }
    /**
     * Instantiate a PanSession for the drag gesture
     *
     * @public
     */
    VisualElementDragControls.prototype.start = function (originEvent, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, _c = _b.snapToCursor, snapToCursor = _c === void 0 ? false : _c, cursorProgress = _b.cursorProgress;
        /**
         * If this drag session has been manually triggered by the user, it might be from an event
         * outside the draggable element. If snapToCursor is set to true, we need to measure the position
         * of the element and snap it to the cursor.
         */
        snapToCursor && this.snapToCursor(originEvent);
        var onSessionStart = function () {
            // Stop any animations on both axis values immediately. This allows the user to throw and catch
            // the component.
            _this.stopMotion();
        };
        var onStart = function (event, info) {
            var _a, _b;
            // Attempt to grab the global drag gesture lock - maybe make this part of PanSession
            var _c = _this.props, drag = _c.drag, dragPropagation = _c.dragPropagation;
            if (drag && !dragPropagation) {
                if (_this.openGlobalLock)
                    _this.openGlobalLock();
                _this.openGlobalLock = getGlobalLock(drag);
                // If we don 't have the lock, don't start dragging
                if (!_this.openGlobalLock)
                    return;
            }
            /**
             * Record the progress of the mouse within the draggable element on each axis.
             * onPan, we're going to use this to calculate a new bounding box for the element to
             * project into. This will ensure that even if the DOM element moves via a relayout, it'll
             * stick to the correct place under the pointer.
             */
            _this.prepareBoundingBox();
            _this.visualElement.lockTargetBox();
            /**
             * Resolve the drag constraints. These are either set as top/right/bottom/left constraints
             * relative to the element's layout, or a ref to another element. Both need converting to
             * viewport coordinates.
             */
            _this.resolveDragConstraints();
            /**
             * When dragging starts, we want to find where the cursor is relative to the bounding box
             * of the element. Every frame, we calculate a new bounding box using this relative position
             * and let the visualElement renderer figure out how to reproject the element into this bounding
             * box.
             *
             * By doing it this way, rather than applying an x/y transform directly to the element,
             * we can ensure the component always visually sticks to the cursor as we'd expect, even
             * if the DOM element itself changes layout as a result of React updates the user might
             * make based on the drag position.
             */
            var point = getViewportPointFromEvent(event).point;
            eachAxis(function (axis) {
                var _a = _this.visualElement.targetBox[axis], min = _a.min, max = _a.max;
                _this.cursorProgress[axis] = cursorProgress
                    ? cursorProgress[axis]
                    : Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["progress"])(min, max, point[axis]);
                /**
                 * If we have external drag MotionValues, record their origin point. On pointermove
                 * we'll apply the pan gesture offset directly to this value.
                 */
                var axisValue = _this.getAxisMotionValue(axis);
                if (axisValue) {
                    _this.originPoint[axis] = axisValue.get();
                }
            });
            // Set current drag status
            _this.isDragging = true;
            _this.currentDirection = null;
            // Fire onDragStart event
            (_b = (_a = _this.props).onDragStart) === null || _b === void 0 ? void 0 : _b.call(_a, event, info);
        };
        var onMove = function (event, info) {
            var _a, _b, _c, _d;
            var _e = _this.props, dragPropagation = _e.dragPropagation, dragDirectionLock = _e.dragDirectionLock;
            // If we didn't successfully receive the gesture lock, early return.
            if (!dragPropagation && !_this.openGlobalLock)
                return;
            var offset = info.offset;
            // Attempt to detect drag direction if directionLock is true
            if (dragDirectionLock && _this.currentDirection === null) {
                _this.currentDirection = getCurrentDirection(offset);
                // If we've successfully set a direction, notify listener
                if (_this.currentDirection !== null) {
                    (_b = (_a = _this.props).onDirectionLock) === null || _b === void 0 ? void 0 : _b.call(_a, _this.currentDirection);
                }
                return;
            }
            // Update each point with the latest position
            _this.updateAxis("x", event, offset);
            _this.updateAxis("y", event, offset);
            // Fire onDrag event
            (_d = (_c = _this.props).onDrag) === null || _d === void 0 ? void 0 : _d.call(_c, event, info);
            // Update the last pointer event
            lastPointerEvent = event;
        };
        var onEnd = function (event, info) { return _this.stop(event, info); };
        var transformPagePoint = this.props.transformPagePoint;
        this.panSession = new PanSession(originEvent, {
            onSessionStart: onSessionStart,
            onStart: onStart,
            onMove: onMove,
            onEnd: onEnd,
        }, { transformPagePoint: transformPagePoint });
    };
    /**
     * Ensure the component's layout and target bounding boxes are up-to-date.
     */
    VisualElementDragControls.prototype.prepareBoundingBox = function () {
        var element = this.visualElement.getInstance();
        var transform = element.style.transform;
        this.visualElement.resetTransform();
        this.visualElement.measureLayout();
        element.style.transform = transform;
        this.visualElement.rebaseTargetBox(true, this.visualElement.getBoundingBoxWithoutTransforms());
    };
    VisualElementDragControls.prototype.resolveDragConstraints = function () {
        var _this = this;
        var dragConstraints = this.props.dragConstraints;
        if (dragConstraints) {
            this.constraints = isRefObject(dragConstraints)
                ? this.resolveRefConstraints(this.visualElement.box, dragConstraints)
                : calcRelativeConstraints(this.visualElement.box, dragConstraints);
        }
        else {
            this.constraints = false;
        }
        /**
         * If we're outputting to external MotionValues, we want to rebase the measured constraints
         * from viewport-relative to component-relative.
         */
        if (this.constraints && !this.hasMutatedConstraints) {
            eachAxis(function (axis) {
                if (_this.getAxisMotionValue(axis)) {
                    _this.constraints[axis] = rebaseAxisConstraints(_this.visualElement.box[axis], _this.constraints[axis]);
                }
            });
        }
    };
    VisualElementDragControls.prototype.resolveRefConstraints = function (layoutBox, constraints) {
        var _a = this.props, onMeasureDragConstraints = _a.onMeasureDragConstraints, transformPagePoint = _a.transformPagePoint;
        var constraintsElement = constraints.current;
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
        this.constraintsBox = getBoundingBox(constraintsElement, transformPagePoint);
        var measuredConstraints = calcViewportConstraints(layoutBox, this.constraintsBox);
        /**
         * If there's an onMeasureDragConstraints listener we call it and
         * if different constraints are returned, set constraints to that
         */
        if (onMeasureDragConstraints) {
            var userConstraints = onMeasureDragConstraints(convertAxisBoxToBoundingBox(measuredConstraints));
            this.hasMutatedConstraints = !!userConstraints;
            if (userConstraints) {
                measuredConstraints = convertBoundingBoxToAxisBox(userConstraints);
            }
        }
        return measuredConstraints;
    };
    VisualElementDragControls.prototype.cancelDrag = function () {
        this.isDragging = false;
        this.panSession && this.panSession.end();
        this.panSession = null;
        if (!this.props.dragPropagation && this.openGlobalLock) {
            this.openGlobalLock();
            this.openGlobalLock = null;
        }
    };
    VisualElementDragControls.prototype.stop = function (event, info) {
        var _a;
        this.visualElement.unlockTargetBox();
        (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
        this.panSession = null;
        var isDragging = this.isDragging;
        this.cancelDrag();
        if (!isDragging)
            return;
        var _b = this.props, dragMomentum = _b.dragMomentum, dragElastic = _b.dragElastic, onDragEnd = _b.onDragEnd;
        if (dragMomentum || dragElastic) {
            var velocity = info.velocity;
            this.animateDragEnd(velocity);
        }
        onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(event, info);
    };
    VisualElementDragControls.prototype.snapToCursor = function (event) {
        var _this = this;
        this.prepareBoundingBox();
        eachAxis(function (axis) {
            var axisValue = _this.getAxisMotionValue(axis);
            if (axisValue) {
                var point = getViewportPointFromEvent(event).point;
                var box = _this.visualElement.box;
                var length_1 = box[axis].max - box[axis].min;
                var center = box[axis].min + length_1 / 2;
                var offset = point[axis] - center;
                _this.originPoint[axis] = point[axis];
                axisValue.set(offset);
            }
            else {
                _this.cursorProgress[axis] = 0.5;
                _this.updateVisualElementAxis(axis, event);
            }
        });
    };
    /**
     * Update the specified axis with the latest pointer information.
     */
    VisualElementDragControls.prototype.updateAxis = function (axis, event, offset) {
        var drag = this.props.drag;
        // If we're not dragging this axis, do an early return.
        if (!shouldDrag(axis, drag, this.currentDirection))
            return;
        return this.getAxisMotionValue(axis)
            ? this.updateAxisMotionValue(axis, offset)
            : this.updateVisualElementAxis(axis, event);
    };
    VisualElementDragControls.prototype.updateAxisMotionValue = function (axis, offset) {
        var axisValue = this.getAxisMotionValue(axis);
        if (!offset || !axisValue)
            return;
        var dragElastic = this.props.dragElastic;
        var nextValue = this.originPoint[axis] + offset[axis];
        var update = this.constraints
            ? applyConstraints(nextValue, this.constraints[axis], dragElastic)
            : nextValue;
        axisValue.set(update);
    };
    VisualElementDragControls.prototype.updateVisualElementAxis = function (axis, event) {
        var _a;
        var dragElastic = this.props.dragElastic;
        // Get the actual layout bounding box of the element
        var axisLayout = this.visualElement.box[axis];
        // Calculate its current length. In the future we might want to lerp this to animate
        // between lengths if the layout changes as we change the DOM
        var axisLength = axisLayout.max - axisLayout.min;
        // Get the initial progress that the pointer sat on this axis on gesture start.
        var axisProgress = this.cursorProgress[axis];
        var point = getViewportPointFromEvent(event).point;
        // Calculate a new min point based on the latest pointer position, constraints and elastic
        var min = calcConstrainedMinPoint(point[axis], axisLength, axisProgress, (_a = this.constraints) === null || _a === void 0 ? void 0 : _a[axis], dragElastic);
        // Update the axis viewport target with this new min and the length
        this.visualElement.setAxisTarget(axis, min, min + axisLength);
    };
    VisualElementDragControls.prototype.updateProps = function (_a) {
        var _b = _a.drag, drag = _b === void 0 ? false : _b, _c = _a.dragDirectionLock, dragDirectionLock = _c === void 0 ? false : _c, _d = _a.dragPropagation, dragPropagation = _d === void 0 ? false : _d, _e = _a.dragConstraints, dragConstraints = _e === void 0 ? false : _e, _f = _a.dragElastic, dragElastic = _f === void 0 ? 0.35 : _f, _g = _a.dragMomentum, dragMomentum = _g === void 0 ? true : _g, remainingProps = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["drag", "dragDirectionLock", "dragPropagation", "dragConstraints", "dragElastic", "dragMomentum"]);
        this.props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ drag: drag,
            dragDirectionLock: dragDirectionLock,
            dragPropagation: dragPropagation,
            dragConstraints: dragConstraints,
            dragElastic: dragElastic,
            dragMomentum: dragMomentum }, remainingProps);
    };
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - If the component will perform layout animations, we output the gesture to the component's
     *      visual bounding box
     * - Otherwise, we apply the delta to the x/y motion values.
     */
    VisualElementDragControls.prototype.getAxisMotionValue = function (axis) {
        var _a = this.props, layout = _a.layout, layoutId = _a.layoutId;
        var dragKey = "_drag" + axis.toUpperCase();
        if (this.props[dragKey]) {
            return this.props[dragKey];
        }
        else if (!layout && layoutId === undefined) {
            return this.visualElement.getValue(axis, 0);
        }
    };
    VisualElementDragControls.prototype.animateDragEnd = function (velocity) {
        var _this = this;
        var _a = this.props, drag = _a.drag, dragMomentum = _a.dragMomentum, dragElastic = _a.dragElastic, dragTransition = _a.dragTransition;
        var momentumAnimations = eachAxis(function (axis) {
            if (!shouldDrag(axis, drag, _this.currentDirection)) {
                return;
            }
            var transition = _this.constraints ? _this.constraints[axis] : {};
            /**
             * Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
             * of spring animations so we should look into adding a disable spring option to `inertia`.
             * We could do something here where we affect the `bounceStiffness` and `bounceDamping`
             * using the value of `dragElastic`.
             */
            var bounceStiffness = dragElastic ? 200 : 1000000;
            var bounceDamping = dragElastic ? 40 : 10000000;
            var inertia = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "inertia", velocity: dragMomentum ? velocity[axis] : 0, bounceStiffness: bounceStiffness,
                bounceDamping: bounceDamping, timeConstant: 750, restDelta: 1, restSpeed: 10 }, dragTransition), transition);
            // If we're not animating on an externally-provided `MotionValue` we can use the
            // component's animation controls which will handle interactions with whileHover (etc),
            // otherwise we just have to animate the `MotionValue` itself.
            return _this.getAxisMotionValue(axis)
                ? _this.startAxisValueAnimation(axis, inertia)
                : _this.visualElement.startLayoutAxisAnimation(axis, inertia);
        });
        // Run all animations and then resolve the new drag constraints.
        return Promise.all(momentumAnimations).then(function () {
            var _a, _b;
            (_b = (_a = _this.props).onDragTransitionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
    };
    VisualElementDragControls.prototype.stopMotion = function () {
        var _this = this;
        eachAxis(function (axis) {
            var axisValue = _this.getAxisMotionValue(axis);
            axisValue
                ? axisValue.stop()
                : _this.visualElement.stopLayoutAnimation();
        });
    };
    VisualElementDragControls.prototype.startAxisValueAnimation = function (axis, transition) {
        var axisValue = this.getAxisMotionValue(axis);
        if (!axisValue)
            return;
        var currentValue = axisValue.get();
        axisValue.set(currentValue);
        axisValue.set(currentValue); // Set twice to hard-reset velocity
        return startAnimation(axis, axisValue, 0, transition);
    };
    VisualElementDragControls.prototype.scalePoint = function () {
        var _this = this;
        var _a = this.props, drag = _a.drag, dragConstraints = _a.dragConstraints;
        if (!isRefObject(dragConstraints) || !this.constraintsBox)
            return;
        // Stop any current animations as there can be some visual glitching if we resize mid animation
        this.stopMotion();
        // Record the relative progress of the targetBox relative to the constraintsBox
        var boxProgress = { x: 0, y: 0 };
        eachAxis(function (axis) {
            boxProgress[axis] = calcOrigin(_this.visualElement.targetBox[axis], _this.constraintsBox[axis]);
        });
        /**
         * For each axis, calculate the current progress of the layout axis within the constraints.
         * Then, using the latest layout and constraints measurements, reposition the new layout axis
         * proportionally within the constraints.
         */
        this.prepareBoundingBox();
        this.resolveDragConstraints();
        eachAxis(function (axis) {
            if (!shouldDrag(axis, drag, null))
                return;
            // Calculate the position of the targetBox relative to the constraintsBox using the
            // previously calculated progress
            var _a = calcPositionFromProgress(_this.visualElement.targetBox[axis], _this.constraintsBox[axis], boxProgress[axis]), min = _a.min, max = _a.max;
            _this.visualElement.setAxisTarget(axis, min, max);
        });
    };
    VisualElementDragControls.prototype.mount = function (visualElement) {
        var _this = this;
        var element = visualElement.getInstance();
        /**
         * Attach a pointerdown event listener on this DOM element to initiate drag tracking.
         */
        var stopPointerListener = addPointerEvent(element, "pointerdown", function (event) {
            var _a = _this.props, drag = _a.drag, _b = _a.dragListener, dragListener = _b === void 0 ? true : _b;
            drag && dragListener && _this.start(event);
        });
        /**
         * Attach a window resize listener to scale the draggable target within its defined
         * constraints as the window resizes.
         */
        var stopResizeListener = addDomEvent(window, "resize", function () {
            _this.scalePoint();
        });
        /**
         * Ensure drag constraints are resolved correctly relative to the dragging element
         * whenever its layout changes.
         */
        var stopLayoutUpdateListener = visualElement.onLayoutUpdate(function () {
            if (_this.isDragging)
                _this.resolveDragConstraints();
        });
        /**
         * If the previous component with this same layoutId was dragging at the time
         * it was unmounted, we want to continue the same gesture on this component.
         */
        var prevSnapshot = visualElement.prevSnapshot;
        (prevSnapshot === null || prevSnapshot === void 0 ? void 0 : prevSnapshot.isDragging) &&
            this.start(lastPointerEvent, {
                cursorProgress: prevSnapshot.cursorProgress,
            });
        /**
         * Return a function that will teardown the drag gesture
         */
        return function () {
            stopPointerListener === null || stopPointerListener === void 0 ? void 0 : stopPointerListener();
            stopResizeListener === null || stopResizeListener === void 0 ? void 0 : stopResizeListener();
            stopLayoutUpdateListener === null || stopLayoutUpdateListener === void 0 ? void 0 : stopLayoutUpdateListener();
            _this.cancelDrag();
        };
    };
    return VisualElementDragControls;
}());
function shouldDrag(direction, drag, currentDirection) {
    return ((drag === true || drag === direction) &&
        (currentDirection === null || currentDirection === direction));
}
/**
 * Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
 * than the provided threshold, return `null`.
 *
 * @param offset - The x/y offset from origin.
 * @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
 */
function getCurrentDirection(offset, lockThreshold) {
    if (lockThreshold === void 0) { lockThreshold = 10; }
    var direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
        direction = "y";
    }
    else if (Math.abs(offset.x) > lockThreshold) {
        direction = "x";
    }
    return direction;
}

/**
 * A hook that allows an element to be dragged.
 *
 * @internal
 */
function useDrag(props, visualElement) {
    var groupDragControls = props.dragControls;
    var transformPagePoint = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionConfigContext).transformPagePoint;
    var dragControls = useConstant(function () {
        return new VisualElementDragControls({
            visualElement: visualElement,
        });
    });
    dragControls.updateProps(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props), { transformPagePoint: transformPagePoint }));
    // If we've been provided a DragControls for manual control over the drag gesture,
    // subscribe this component to it on mount.
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () { return groupDragControls && groupDragControls.subscribe(dragControls); }, [dragControls]);
    // Mount the drag controls with the visualElement
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () { return dragControls.mount(visualElement); }, []);
}

var makeRenderlessComponent = function (hook) { return function (props) {
    hook(props);
    return null;
}; };

var Component = makeRenderlessComponent(function (_a) {
    var visualElement = _a.visualElement, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["visualElement"]);
    return useDrag(props, visualElement);
});
/**
 * @public
 */
var Drag = {
    key: "drag",
    shouldRender: function (props) { return !!props.drag || !!props.dragControls; },
    getComponent: function () { return Component; },
};

function useUnmountEffect(callback) {
    return Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () { return function () { return callback(); }; }, []);
}

/**
 *
 * @param handlers -
 * @param ref -
 *
 * @internalremarks
 * Currently this sets new pan gesture functions every render. The memo route has been explored
 * in the past but ultimately we're still creating new functions every render. An optimisation
 * to explore is creating the pan gestures and loading them into a `ref`.
 *
 * @internal
 */
function usePanGesture(_a, ref) {
    var onPan = _a.onPan, onPanStart = _a.onPanStart, onPanEnd = _a.onPanEnd, onPanSessionStart = _a.onPanSessionStart;
    var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
    var panSession = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
    var transformPagePoint = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(MotionConfigContext).transformPagePoint;
    var handlers = {
        onSessionStart: onPanSessionStart,
        onStart: onPanStart,
        onMove: onPan,
        onEnd: function (event, info) {
            panSession.current = null;
            onPanEnd && onPanEnd(event, info);
        },
    };
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        if (panSession.current !== null) {
            panSession.current.updateHandlers(handlers);
        }
    });
    function onPointerDown(event) {
        panSession.current = new PanSession(event, handlers, {
            transformPagePoint: transformPagePoint,
        });
    }
    usePointerEvent(ref, "pointerdown", hasPanEvents && onPointerDown);
    useUnmountEffect(function () { return panSession.current && panSession.current.end(); });
}

/**
 * Recursively traverse up the tree to check whether the provided child node
 * is the parent or a descendant of it.
 *
 * @param parent - Element to find
 * @param child - Element to test against parent
 */
var isNodeOrChild = function (parent, child) {
    if (!child) {
        return false;
    }
    else if (parent === child) {
        return true;
    }
    else {
        return isNodeOrChild(parent, child.parentElement);
    }
};

var order$1 = ["whileHover", "whileTap", "whileDrag"];
var getGesturePriority = function (gesture) {
    return order$1.indexOf(gesture) + 1;
};

var tapGesturePriority = getGesturePriority("whileTap");
/**
 * @param handlers -
 * @internal
 */
function useTapGesture(_a, visualElement) {
    var onTap = _a.onTap, onTapStart = _a.onTapStart, onTapCancel = _a.onTapCancel, whileTap = _a.whileTap;
    var hasTapListeners = onTap || onTapStart || onTapCancel || whileTap;
    var isTapping = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(false);
    var cancelPointerEventListener = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
    function removePointerUp() {
        var _a;
        (_a = cancelPointerEventListener.current) === null || _a === void 0 ? void 0 : _a.call(cancelPointerEventListener);
        cancelPointerEventListener.current = null;
    }
    whileTap && setOverride(visualElement, whileTap, tapGesturePriority);
    // We load this event handler into a ref so we can later refer to
    // onPointerUp.current which will always have reference to the latest props
    var onPointerUp = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
    onPointerUp.current = function (event, info) {
        var element = visualElement.getInstance();
        removePointerUp();
        if (!isTapping.current || !element)
            return;
        isTapping.current = false;
        whileTap && clearOverride(visualElement, tapGesturePriority);
        // Check the gesture lock - if we get it, it means no drag gesture is active
        // and we can safely fire the tap gesture.
        var openGestureLock = getGlobalLock(true);
        if (!openGestureLock)
            return;
        openGestureLock();
        if (!isNodeOrChild(element, event.target)) {
            onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info);
        }
        else {
            onTap === null || onTap === void 0 ? void 0 : onTap(event, info);
        }
    };
    function onPointerDown(event, info) {
        removePointerUp();
        cancelPointerEventListener.current = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["pipe"])(addPointerEvent(window, "pointerup", function (event, info) { var _a; return (_a = onPointerUp.current) === null || _a === void 0 ? void 0 : _a.call(onPointerUp, event, info); }), addPointerEvent(window, "pointercancel", function (event, info) { var _a; return (_a = onPointerUp.current) === null || _a === void 0 ? void 0 : _a.call(onPointerUp, event, info); }));
        var element = visualElement.getInstance();
        if (!element || isTapping.current)
            return;
        isTapping.current = true;
        onTapStart === null || onTapStart === void 0 ? void 0 : onTapStart(event, info);
        whileTap && startOverride(visualElement, tapGesturePriority);
    }
    usePointerEvent(visualElement, "pointerdown", hasTapListeners ? onPointerDown : undefined);
    useUnmountEffect(removePointerUp);
}

var hoverPriority = getGesturePriority("whileHover");
var filterTouch = function (listener) { return function (event, info) {
    if (isMouseEvent(event))
        listener(event, info);
}; };
/**
 *
 * @param props
 * @param ref
 * @internal
 */
function useHoverGesture(_a, visualElement) {
    var whileHover = _a.whileHover, onHoverStart = _a.onHoverStart, onHoverEnd = _a.onHoverEnd;
    if (whileHover) {
        setOverride(visualElement, whileHover, hoverPriority);
    }
    usePointerEvent(visualElement, "pointerenter", filterTouch(function (event, info) {
        onHoverStart === null || onHoverStart === void 0 ? void 0 : onHoverStart(event, info);
        whileHover && startOverride(visualElement, hoverPriority);
    }));
    usePointerEvent(visualElement, "pointerleave", filterTouch(function (event, info) {
        onHoverEnd === null || onHoverEnd === void 0 ? void 0 : onHoverEnd(event, info);
        whileHover && clearOverride(visualElement, hoverPriority);
    }));
}

/**
 * Add pan and tap gesture recognition to an element.
 *
 * @param props - Gesture event handlers
 * @param ref - React `ref` containing a DOM `Element`
 * @public
 */
function useGestures(props, visualElement) {
    usePanGesture(props, visualElement);
    useTapGesture(props, visualElement);
    useHoverGesture(props, visualElement);
}

var gestureProps = [
    "onPan",
    "onPanStart",
    "onPanEnd",
    "onPanSessionStart",
    "onTap",
    "onTapStart",
    "onTapCancel",
    "whileTap",
    "whileHover",
    "onHoverStart",
    "onHoverEnd",
];
var GestureComponent = makeRenderlessComponent(function (_a) {
    var visualElement = _a.visualElement, props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["visualElement"]);
    useGestures(props, visualElement);
});
/**
 * @public
 */
var Gestures = {
    key: "gestures",
    shouldRender: function (props) {
        return gestureProps.some(function (key) { return props.hasOwnProperty(key); });
    },
    getComponent: function () { return GestureComponent; },
};

/**
 * Control animations on one or more components.
 *
 * @public
 */
var AnimationControls = /** @class */ (function () {
    function AnimationControls() {
        /**
         * Track whether the host component has mounted.
         *
         * @internal
         */
        this.hasMounted = false;
        /**
         * Pending animations that are started before a component is mounted.
         *
         * @internal
         */
        this.pendingAnimations = [];
        /**
         * A collection of linked component animation controls.
         *
         * @internal
         */
        this.subscribers = new Set();
    }
    /**
     * Subscribes a component's animation controls to this.
     *
     * @param controls - The controls to subscribe
     * @returns An unsubscribe function.
     *
     * @internal
     */
    AnimationControls.prototype.subscribe = function (visualElement) {
        var _this = this;
        this.subscribers.add(visualElement);
        return function () { return _this.subscribers.delete(visualElement); };
    };
    /**
     * Starts an animation on all linked components.
     *
     * @remarks
     *
     * ```jsx
     * controls.start("variantLabel")
     * controls.start({
     *   x: 0,
     *   transition: { duration: 1 }
     * })
     * ```
     *
     * @param definition - Properties or variant label to animate to
     * @param transition - Optional `transtion` to apply to a variant
     * @returns - A `Promise` that resolves when all animations have completed.
     *
     * @public
     */
    AnimationControls.prototype.start = function (definition, transitionOverride) {
        var _this = this;
        if (this.hasMounted) {
            var animations_1 = [];
            this.subscribers.forEach(function (visualElement) {
                var animation = startVisualElementAnimation(visualElement, definition, { transitionOverride: transitionOverride });
                animations_1.push(animation);
            });
            return Promise.all(animations_1);
        }
        else {
            return new Promise(function (resolve) {
                _this.pendingAnimations.push({
                    animation: [definition, transitionOverride],
                    resolve: resolve,
                });
            });
        }
    };
    /**
     * Instantly set to a set of properties or a variant.
     *
     * ```jsx
     * // With properties
     * controls.set({ opacity: 0 })
     *
     * // With variants
     * controls.set("hidden")
     * ```
     *
     * @internalremarks
     * We could perform a similar trick to `.start` where this can be called before mount
     * and we maintain a list of of pending actions that get applied on mount. But the
     * expectation of `set` is that it happens synchronously and this would be difficult
     * to do before any children have even attached themselves. It's also poor practise
     * and we should discourage render-synchronous `.start` calls rather than lean into this.
     *
     * @public
     */
    AnimationControls.prototype.set = function (definition) {
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(this.hasMounted, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.");
        return this.subscribers.forEach(function (visualElement) {
            setValues(visualElement, definition);
        });
    };
    /**
     * Stops animations on all linked components.
     *
     * ```jsx
     * controls.stop()
     * ```
     *
     * @public
     */
    AnimationControls.prototype.stop = function () {
        this.subscribers.forEach(function (visualElement) {
            stopAnimation(visualElement);
        });
    };
    /**
     * Initialises the animation controls.
     *
     * @internal
     */
    AnimationControls.prototype.mount = function () {
        var _this = this;
        this.hasMounted = true;
        this.pendingAnimations.forEach(function (_a) {
            var animation = _a.animation, resolve = _a.resolve;
            _this.start.apply(_this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(animation)).then(resolve);
        });
    };
    /**
     * Stops all child animations when the host component unmounts.
     *
     * @internal
     */
    AnimationControls.prototype.unmount = function () {
        this.hasMounted = false;
        this.stop();
    };
    return AnimationControls;
}());
/**
 * @internal
 */
var animationControls = function () { return new AnimationControls(); };

var ExitComponent = makeRenderlessComponent(function (props) {
    var animate = props.animate, exit = props.exit, visualElement = props.visualElement;
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(usePresence(), 2), isPresent = _a[0], onExitComplete = _a[1];
    var presenceContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(PresenceContext);
    var isPlayingExitAnimation = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(false);
    var custom = (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.custom) !== undefined
        ? presenceContext.custom
        : props.custom;
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        if (!isPresent) {
            if (!isPlayingExitAnimation.current && exit) {
                startVisualElementAnimation(visualElement, exit, {
                    custom: custom,
                }).then(onExitComplete);
            }
            isPlayingExitAnimation.current = true;
        }
        else if (isPlayingExitAnimation.current &&
            animate &&
            typeof animate !== "boolean" &&
            !(animate instanceof AnimationControls)) {
            startVisualElementAnimation(visualElement, animate);
        }
        if (isPresent) {
            isPlayingExitAnimation.current = false;
        }
    }, [animate, custom, exit, isPresent, onExitComplete, props]);
});
/**
 * @public
 */
var Exit = {
    key: "exit",
    shouldRender: function (props) { return !!props.exit && !checkShouldInheritVariant(props); },
    getComponent: function () { return ExitComponent; },
};

function shallowCompare(next, prev) {
    if (prev === null)
        return false;
    var prevLength = prev.length;
    if (prevLength !== next.length)
        return false;
    for (var i = 0; i < prevLength; i++) {
        if (prev[i] !== next[i])
            return false;
    }
    return true;
}

var hasUpdated = function (prev, next) {
    return (next !== undefined &&
        (Array.isArray(prev) && Array.isArray(next)
            ? !shallowCompare(next, prev)
            : prev !== next));
};
function targetWithoutTransition(_a, mergeTransitionEnd) {
    if (mergeTransitionEnd === void 0) { mergeTransitionEnd = false; }
    var transition = _a.transition, transitionEnd = _a.transitionEnd, target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["transition", "transitionEnd"]);
    return mergeTransitionEnd
        ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, target), transitionEnd)
        : target;
}
/**
 * Handle the `animate` prop when its an object of values, ie:
 *
 * ```jsx
 * <motion.div animate={{ opacity: 1 }} />
 * ```
 *
 * @internalremarks
 * It might be worth consolidating this with `use-variants`
 *
 * ```jsx
 * <motion.div animate="visible" />
 * ```
 *
 * @param target
 * @param controls
 * @param values
 * @param transition
 *
 * @internal
 */
function useAnimateProp(visualElement, targetAndTransition, defaultTransition) {
    var isInitialRender = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(true);
    var prevValues = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
    if (!prevValues.current) {
        prevValues.current = targetWithoutTransition(targetAndTransition, true);
    }
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        var targetToAnimate = {};
        // These are the values we're actually animating
        var animatingTarget = targetWithoutTransition(targetAndTransition);
        // This is the target as it'll be once transitionEnd values are applied
        var finalTarget = targetWithoutTransition(targetAndTransition, true);
        // Detect which values have changed between renders
        for (var key in animatingTarget) {
            // This value should animate on mount if this value doesn't already exist (wasn't
            // defined in `style` or `initial`) or if it does exist and it's already changed.
            var shouldAnimateOnMount = isInitialRender.current &&
                (!visualElement.hasValue(key) ||
                    visualElement.getValue(key).get() !== finalTarget[key]);
            // If this value has updated between renders or it's we're animating this value on mount,
            // add it to the animate target.
            var isValidValue = finalTarget[key] !== null;
            var valueHasUpdated = hasUpdated(prevValues.current[key], finalTarget[key]);
            if (isValidValue && (valueHasUpdated || shouldAnimateOnMount)) {
                targetToAnimate[key] = animatingTarget[key];
            }
        }
        isInitialRender.current = false;
        prevValues.current = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prevValues.current), finalTarget);
        if (Object.keys(targetToAnimate).length) {
            startVisualElementAnimation(visualElement, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, targetToAnimate), { transition: targetAndTransition.transition || defaultTransition, transitionEnd: targetAndTransition.transitionEnd }));
        }
    }, [targetAndTransition]);
}

var labelsToArray = function (label) {
    if (!label) {
        return [];
    }
    if (Array.isArray(label)) {
        return label;
    }
    return [label];
};
var resolveVariantLabels = function (variant) {
    var unresolvedVariant = variant instanceof MotionValue ? variant.get() : variant;
    return Array.from(new Set(labelsToArray(unresolvedVariant)));
};
/**
 * Hooks in React sometimes accept a dependency array as their final argument. (ie useEffect/useMemo)
 * When values in this array change, React re-runs the dependency. However if the array
 * contains a variable number of items, React throws an error.
 */
var asDependencyList = function (list) { return [
    list.join(","),
]; };

var hasVariantChanged = function (oldVariant, newVariant) {
    return oldVariant.join(",") !== newVariant.join(",");
};
/**
 * Handle variants and the `animate` prop when its set as variant labels.
 *
 * @param initial - Initial variant(s)
 * @param animate - Variant(s) to animate to
 * @param inherit - `true` is inheriting animations from parent
 * @param controls - Animation controls
 *
 * @internal
 */
function useVariantAnimations(visualElement, initial, animate, inherit) {
    var _a;
    var targetVariants = resolveVariantLabels(animate);
    var context = useVariantContext();
    var parentAlreadyMounted = (_a = context.parent) === null || _a === void 0 ? void 0 : _a.isMounted;
    var hasMounted = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(false);
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        var shouldAnimate = false;
        if (inherit) {
            // If we're inheriting variant changes and the parent has already
            // mounted when this component loads, we need to manually trigger
            // this animation.
            shouldAnimate = !!parentAlreadyMounted;
            targetVariants = resolveVariantLabels(context.animate);
        }
        else {
            shouldAnimate =
                hasMounted.current ||
                    hasVariantChanged(resolveVariantLabels(initial), targetVariants);
        }
        shouldAnimate &&
            startVisualElementAnimation(visualElement, targetVariants);
        hasMounted.current = true;
    }, asDependencyList(targetVariants));
}

/**
 * `useAnimationGroupSubscription` allows a component to subscribe to an
 * externally-created `AnimationControls`, created by the `useAnimation` hook.
 *
 * @param animation
 * @param controls
 *
 * @internal
 */
function useAnimationGroupSubscription(visualElement, animation) {
    var unsubscribe = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () { return animation.subscribe(visualElement); }, [
        animation,
    ]);
    useUnmountEffect(function () { return unsubscribe === null || unsubscribe === void 0 ? void 0 : unsubscribe(); });
}

var target = {
    shouldRender: function (props) {
        return props.animate !== undefined &&
            !isVariantLabel(props.animate) &&
            !isAnimationControls(props.animate);
    },
    Component: makeRenderlessComponent(function (_a) {
        var animate = _a.animate, visualElement = _a.visualElement, transition = _a.transition;
        return useAnimateProp(visualElement, animate, transition);
    }),
};
var variant = {
    shouldRender: function (props) {
        return (props.variants && !isAnimationControls(props.animate)) ||
            isVariantLabel(props.animate);
    },
    Component: makeRenderlessComponent(function (_a) {
        var animate = _a.animate, _b = _a.inherit, inherit = _b === void 0 ? true : _b, visualElement = _a.visualElement, initial = _a.initial;
        return useVariantAnimations(visualElement, initial, animate, inherit);
    }),
};
var controls = {
    shouldRender: function (props) { return isAnimationControls(props.animate); },
    Component: makeRenderlessComponent(function (_a) {
        var animate = _a.animate, visualElement = _a.visualElement;
        return useAnimationGroupSubscription(visualElement, animate);
    }),
};
var getAnimationComponent = function (props) {
    if (target.shouldRender(props)) {
        return target.Component;
    }
    else if (variant.shouldRender(props)) {
        return variant.Component;
    }
    else if (controls.shouldRender(props)) {
        return controls.Component;
    }
};
/**
 * @public
 */
var Animation = {
    key: "animation",
    shouldRender: function () { return true; },
    getComponent: getAnimationComponent,
};

function tweenAxis(target, prev, next, p) {
    target.min = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(prev.min, next.min, p);
    target.max = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(prev.max, next.max, p);
}

var progressTarget = 1000;
var Animate = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Animate, _super);
    function Animate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.frameTarget = {
            x: { min: 0, max: 0 },
            y: { min: 0, max: 0 },
        };
        _this.stopAxisAnimation = {
            x: undefined,
            y: undefined,
        };
        _this.animate = function (target, origin, _a) {
            if (_a === void 0) { _a = {}; }
            var originBox = _a.originBox, targetBox = _a.targetBox, visibilityAction = _a.visibilityAction, shouldStackAnimate = _a.shouldStackAnimate, config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["originBox", "targetBox", "visibilityAction", "shouldStackAnimate"]);
            var _b = _this.props, visualElement = _b.visualElement, layout = _b.layout;
            /**
             * Early return if we've been instructed not to animate this render.
             */
            if (shouldStackAnimate === false)
                return _this.safeToRemove();
            /**
             * Allow the measured origin (prev bounding box) and target (actual layout) to be
             * overridden by the provided config.
             */
            origin = originBox || origin;
            target = targetBox || target;
            var boxHasMoved = hasMoved(origin, target);
            var animations = eachAxis(function (axis) {
                /**
                 * If layout is set to "position", we can resize the origin box based on the target
                 * box and only animate its position.
                 */
                if (layout === "position") {
                    var targetLength = target[axis].max - target[axis].min;
                    origin[axis].max = origin[axis].min + targetLength;
                }
                if (visualElement.isTargetBoxLocked) {
                    return;
                }
                else if (visibilityAction !== undefined) {
                    // If we're meant to show/hide the visualElement, do so
                    visibilityAction === VisibilityAction.Hide
                        ? visualElement.hide()
                        : visualElement.show();
                }
                else if (boxHasMoved) {
                    // If the box has moved, animate between it's current visual state and its
                    // final state
                    return _this.animateAxis(axis, target[axis], origin[axis], config);
                }
                else {
                    // If the box has remained in the same place, immediately set the axis target
                    // to the final desired state
                    return visualElement.setAxisTarget(axis, target[axis].min, target[axis].max);
                }
            });
            // Force a render to ensure there's no flash of uncorrected bounding box.
            visualElement.render();
            /**
             * If this visualElement isn't present (ie it's been removed from the tree by the user but
             * kept in by the tree by AnimatePresence) then call safeToRemove when all axis animations
             * have successfully finished.
             */
            return Promise.all(animations).then(function () {
                var _a, _b;
                (_b = (_a = _this.props).onLayoutAnimationComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
                if (visualElement.isPresent) {
                    visualElement.presence = Presence.Present;
                }
                else {
                    _this.safeToRemove();
                }
            });
        };
        return _this;
    }
    Animate.prototype.componentDidMount = function () {
        var _this = this;
        var visualElement = this.props.visualElement;
        visualElement.animateMotionValue = startAnimation;
        visualElement.enableLayoutProjection();
        this.unsubLayoutReady = visualElement.onLayoutUpdate(this.animate);
        visualElement.updateConfig(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, visualElement.config), { safeToRemove: function () { return _this.safeToRemove(); } }));
    };
    Animate.prototype.componentWillUnmount = function () {
        var _this = this;
        this.unsubLayoutReady();
        eachAxis(function (axis) { var _a, _b; return (_b = (_a = _this.stopAxisAnimation)[axis]) === null || _b === void 0 ? void 0 : _b.call(_a); });
    };
    /**
     * TODO: This manually performs animations on the visualElement's layout progress
     * values. It'd be preferable to amend the HTMLVisualElement.startLayoutAxisAnimation
     * API to accept more custom animations like this.
     */
    Animate.prototype.animateAxis = function (axis, target, origin, _a) {
        var _b, _c;
        var _d = _a === void 0 ? {} : _a, transition = _d.transition, crossfadeOpacity = _d.crossfadeOpacity;
        (_c = (_b = this.stopAxisAnimation)[axis]) === null || _c === void 0 ? void 0 : _c.call(_b);
        var visualElement = this.props.visualElement;
        var frameTarget = this.frameTarget[axis];
        var layoutProgress = visualElement.axisProgress[axis];
        /**
         * Set layout progress back to 0. We set it twice to hard-reset any velocity that might
         * be re-incoporated into a subsequent spring animation.
         */
        layoutProgress.clearListeners();
        layoutProgress.set(0);
        layoutProgress.set(0);
        /**
         * If this is a crossfade animation, create a function that updates both the opacity of this component
         * and the one being crossfaded out.
         */
        var crossfade;
        if (crossfadeOpacity) {
            crossfade = this.createCrossfadeAnimation(crossfadeOpacity);
            visualElement.show();
        }
        /**
         * Create an animation function to run once per frame. This will tween the visual bounding box from
         * origin to target using the latest progress value.
         */
        var frame = function () {
            // Convert the latest layoutProgress, which is a value from 0-1000, into a 0-1 progress
            var p = layoutProgress.get() / progressTarget;
            // Tween the axis and update the visualElement with the latest values
            tweenAxis(frameTarget, origin, target, p);
            visualElement.setAxisTarget(axis, frameTarget.min, frameTarget.max);
            // If this is a crossfade animation, update both elements.
            crossfade === null || crossfade === void 0 ? void 0 : crossfade(p);
        };
        // Synchronously run a frame to ensure there's no flash of the uncorrected bounding box.
        frame();
        // Ensure that the layout delta is updated for this frame.
        visualElement.updateLayoutDelta();
        // Create a function to stop animation on this specific axis
        var unsubscribeProgress = layoutProgress.onChange(frame);
        // Start the animation on this axis
        var animation = startAnimation(axis === "x" ? "layoutX" : "layoutY", layoutProgress, progressTarget, transition || this.props.transition || defaultTransition).then(unsubscribeProgress);
        this.stopAxisAnimation[axis] = function () {
            layoutProgress.stop();
            unsubscribeProgress();
        };
        return animation;
    };
    Animate.prototype.createCrossfadeAnimation = function (crossfadeOpacity) {
        var visualElement = this.props.visualElement;
        var opacity = visualElement.getValue("opacity", 0);
        return function (p) {
            opacity.set(easeCrossfadeIn(Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(0, 1, p)));
            crossfadeOpacity.set(easeCrossfadeOut(Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["mix"])(1, 0, p)));
        };
    };
    Animate.prototype.safeToRemove = function () {
        var _a, _b;
        (_b = (_a = this.props).safeToRemove) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    Animate.prototype.render = function () {
        return null;
    };
    return Animate;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]));
function AnimateLayoutContextProvider(props) {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(usePresence(), 2), safeToRemove = _a[1];
    return Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Animate, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { safeToRemove: safeToRemove }));
}
function hasMoved(a, b) {
    return hasAxisMoved(a.x, b.x) || hasAxisMoved(a.y, b.y);
}
function hasAxisMoved(a, b) {
    return a.min !== b.min || a.max !== b.max;
}
var defaultTransition = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1],
};
function compress(min, max, easing) {
    return function (p) {
        // Could replace ifs with clamp
        if (p < min)
            return 0;
        if (p > max)
            return 1;
        return easing(Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["progress"])(min, max, p));
    };
}
var easeCrossfadeIn = compress(0, 0.5, popmotion__WEBPACK_IMPORTED_MODULE_2__["circOut"]);
var easeCrossfadeOut = compress(0.5, 0.95, popmotion__WEBPACK_IMPORTED_MODULE_2__["linear"]);
/**
 * @public
 */
var AnimateLayout = {
    key: "animate-layout",
    shouldRender: function (props) { return !!props.layout || !!props.layoutId; },
    getComponent: function () { return AnimateLayoutContextProvider; },
};

/**
 * This component is responsible for scheduling the measuring of the motion component
 */
var Measure = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Measure, _super);
    function Measure() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * If this is a child of a SyncContext, register the VisualElement with it on mount.
     */
    Measure.prototype.componentDidMount = function () {
        var _a = this.props, syncLayout = _a.syncLayout, framerSyncLayout = _a.framerSyncLayout, visualElement = _a.visualElement;
        isSharedLayout(syncLayout) && syncLayout.register(visualElement);
        isSharedLayout(framerSyncLayout) &&
            framerSyncLayout.register(visualElement);
    };
    /**
     * If this is a child of a SyncContext, notify it that it needs to re-render. It will then
     * handle the snapshotting.
     *
     * If it is stand-alone component, add it to the batcher.
     */
    Measure.prototype.getSnapshotBeforeUpdate = function () {
        var _a = this.props, syncLayout = _a.syncLayout, visualElement = _a.visualElement;
        if (isSharedLayout(syncLayout)) {
            syncLayout.syncUpdate();
        }
        else {
            visualElement.snapshotBoundingBox();
            syncLayout.add(visualElement);
        }
        return null;
    };
    Measure.prototype.componentDidUpdate = function () {
        var _a = this.props, syncLayout = _a.syncLayout, visualElement = _a.visualElement;
        if (!isSharedLayout(syncLayout))
            syncLayout.flush();
        /**
         * If this axis isn't animating as a result of this render we want to reset the targetBox
         * to the measured box
         */
        visualElement.rebaseTargetBox();
    };
    Measure.prototype.render = function () {
        return null;
    };
    return Measure;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component));
function MeasureContextProvider(props) {
    var syncLayout = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(SharedLayoutContext);
    var framerSyncLayout = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(FramerTreeLayoutContext);
    return (react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Measure, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props, { syncLayout: syncLayout, framerSyncLayout: framerSyncLayout })));
}
var MeasureLayout = {
    key: "measure-layout",
    shouldRender: function (props) {
        return !!props.drag || !!props.layout || !!props.layoutId;
    },
    getComponent: function () { return MeasureContextProvider; },
};

var allMotionFeatures = [
    MeasureLayout,
    Animation,
    Drag,
    Gestures,
    Exit,
    AnimateLayout,
];
var domBaseConfig = {
    useVisualElement: useDomVisualElement,
    render: render,
};
/**
 * Convert any React component into a `motion` component. The provided component
 * **must** use `React.forwardRef` to the underlying DOM component you want to animate.
 *
 * ```jsx
 * const Component = React.forwardRef((props, ref) => {
 *   return <div ref={ref} />
 * })
 *
 * const MotionComponent = motion.custom(Component)
 * ```
 *
 * @public
 */
function createMotionProxy(defaultFeatures) {
    var config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, domBaseConfig), { defaultFeatures: defaultFeatures });
    function custom(Component) {
        return createMotionComponent(Component, config);
    }
    var componentCache = new Map();
    function get(target, key) {
        if (key === "custom")
            return target.custom;
        if (!componentCache.has(key)) {
            componentCache.set(key, createMotionComponent(key, config));
        }
        return componentCache.get(key);
    }
    return new Proxy({ custom: custom }, { get: get });
}
/**
 * HTML & SVG components, optimised for use with gestures and animation. These can be used as
 * drop-in replacements for any HTML & SVG component, all CSS & SVG properties are supported.
 *
 * @public
 */
var motion = /*@__PURE__*/ createMotionProxy(allMotionFeatures);
/**
 * Create a DOM `motion` component with the provided string. This is primarily intended
 * as a full alternative to `motion` for consumers who have to support environments that don't
 * support `Proxy`.
 *
 * ```javascript
 * import { createDomMotionComponent } from "framer-motion"
 *
 * const motion = {
 *   div: createDomMotionComponent('div')
 * }
 * ```
 *
 * @public
 */
function createDomMotionComponent(key) {
    return createMotionComponent(key, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, domBaseConfig), { defaultFeatures: allMotionFeatures }));
}

/**
 * @public
 */
var m = /*@__PURE__*/ createMotionProxy([MeasureLayout]);

function useForceUpdate() {
    var unloadingRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(false);
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0), 2), forcedRenderCount = _a[0], setForcedRenderCount = _a[1];
    useUnmountEffect(function () { return (unloadingRef.current = true); });
    return Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function () {
        !unloadingRef.current && setForcedRenderCount(forcedRenderCount + 1);
    }, [forcedRenderCount]);
}

var presenceId = 0;
function getPresenceId() {
    var id = presenceId;
    presenceId++;
    return id;
}
var PresenceChild = function (_a) {
    var children = _a.children, initial = _a.initial, isPresent = _a.isPresent, onExitComplete = _a.onExitComplete, custom = _a.custom, presenceAffectsLayout = _a.presenceAffectsLayout;
    var presenceChildren = useConstant(newChildrenMap);
    var id = useConstant(getPresenceId);
    var context = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
        return {
            id: id,
            initial: initial,
            isPresent: isPresent,
            custom: custom,
            onExitComplete: function (childId) {
                presenceChildren.set(childId, true);
                var allComplete = true;
                presenceChildren.forEach(function (isComplete) {
                    if (!isComplete)
                        allComplete = false;
                });
                allComplete && (onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete());
            },
            register: function (childId) {
                presenceChildren.set(childId, false);
                return function () { return presenceChildren.delete(childId); };
            },
        };
    }, 
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    presenceAffectsLayout ? undefined : [isPresent]);
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
        presenceChildren.forEach(function (_, key) { return presenceChildren.set(key, false); });
    }, [isPresent]);
    return (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PresenceContext.Provider, { value: context }, children));
};
function newChildrenMap() {
    return new Map();
}

function getChildKey(child) {
    return child.key || "";
}
function updateChildLookup(children, allChildren) {
    var seenChildren =  true ? new Set() : undefined;
    children.forEach(function (child) {
        var key = getChildKey(child);
        if ( true && seenChildren) {
            if (seenChildren.has(key)) {
                console.warn("Children of AnimatePresence require unique keys. \"" + key + "\" is a duplicate.");
            }
            seenChildren.add(key);
        }
        allChildren.set(key, child);
    });
}
function onlyElements(children) {
    var filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    react__WEBPACK_IMPORTED_MODULE_5__["Children"].forEach(children, function (child) {
        if (Object(react__WEBPACK_IMPORTED_MODULE_5__["isValidElement"])(child))
            filtered.push(child);
    });
    return filtered;
}
/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * @library
 *
 * Any `Frame` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { Frame, AnimatePresence } from 'framer'
 *
 * // As items are added and removed from `items`
 * export function Items({ items }) {
 *   return (
 *     <AnimatePresence>
 *       {items.map(item => (
 *         <Frame
 *           key={item.id}
 *           initial={{ opacity: 0 }}
 *           animate={{ opacity: 1 }}
 *           exit={{ opacity: 0 }}
 *         />
 *       ))}
 *     </AnimatePresence>
 *   )
 * }
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * @motion
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */
var AnimatePresence = function (_a) {
    var children = _a.children, custom = _a.custom, _b = _a.initial, initial = _b === void 0 ? true : _b, onExitComplete = _a.onExitComplete, exitBeforeEnter = _a.exitBeforeEnter, _c = _a.presenceAffectsLayout, presenceAffectsLayout = _c === void 0 ? true : _c;
    // We want to force a re-render once all exiting animations have finished. We
    // either use a local forceRender function, or one from a parent context if it exists.
    var forceRender = useForceUpdate();
    var layoutContext = Object(react__WEBPACK_IMPORTED_MODULE_5__["useContext"])(SharedLayoutContext);
    if (isSharedLayout(layoutContext)) {
        forceRender = layoutContext.forceUpdate;
    }
    var isInitialRender = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(true);
    // Filter out any children that aren't ReactElements. We can only track ReactElements with a props.key
    var filteredChildren = onlyElements(children);
    // Keep a living record of the children we're actually rendering so we
    // can diff to figure out which are entering and exiting
    var presentChildren = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(filteredChildren);
    // A lookup table to quickly reference components by key
    var allChildren = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(new Map())
        .current;
    // A living record of all currently exiting components.
    var exiting = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(new Set()).current;
    updateChildLookup(filteredChildren, allChildren);
    // If this is the initial component render, just deal with logic surrounding whether
    // we play onMount animations or not.
    if (isInitialRender.current) {
        isInitialRender.current = false;
        return (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, filteredChildren.map(function (child) { return (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PresenceChild, { key: getChildKey(child), isPresent: true, initial: initial ? undefined : false, presenceAffectsLayout: presenceAffectsLayout }, child)); })));
    }
    // If this is a subsequent render, deal with entering and exiting children
    var childrenToRender = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(filteredChildren);
    // Diff the keys of the currently-present and target children to update our
    // exiting list.
    var presentKeys = presentChildren.current.map(getChildKey);
    var targetKeys = filteredChildren.map(getChildKey);
    // Diff the present children with our target children and mark those that are exiting
    var numPresent = presentKeys.length;
    for (var i = 0; i < numPresent; i++) {
        var key = presentKeys[i];
        if (targetKeys.indexOf(key) === -1) {
            exiting.add(key);
        }
        else {
            // In case this key has re-entered, remove from the exiting list
            exiting.delete(key);
        }
    }
    // If we currently have exiting children, and we're deferring rendering incoming children
    // until after all current children have exiting, empty the childrenToRender array
    if (exitBeforeEnter && exiting.size) {
        childrenToRender = [];
    }
    // Loop through all currently exiting components and clone them to overwrite `animate`
    // with any `exit` prop they might have defined.
    exiting.forEach(function (key) {
        // If this component is actually entering again, early return
        if (targetKeys.indexOf(key) !== -1)
            return;
        var child = allChildren.get(key);
        if (!child)
            return;
        var insertionIndex = presentKeys.indexOf(key);
        var onExit = function () {
            allChildren.delete(key);
            exiting.delete(key);
            // Remove this child from the present children
            var removeIndex = presentChildren.current.findIndex(function (presentChild) { return presentChild.key === key; });
            presentChildren.current.splice(removeIndex, 1);
            // Defer re-rendering until all exiting children have indeed left
            if (!exiting.size) {
                presentChildren.current = filteredChildren;
                forceRender();
                onExitComplete && onExitComplete();
            }
        };
        childrenToRender.splice(insertionIndex, 0, Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PresenceChild, { key: getChildKey(child), isPresent: false, onExitComplete: onExit, custom: custom, presenceAffectsLayout: presenceAffectsLayout }, child));
    });
    // Add `MotionContext` even to children that don't need it to ensure we're rendering
    // the same tree between renders
    childrenToRender = childrenToRender.map(function (child) {
        var key = child.key;
        return exiting.has(key) ? (child) : (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PresenceChild, { key: getChildKey(child), isPresent: true, presenceAffectsLayout: presenceAffectsLayout }, child));
    });
    presentChildren.current = childrenToRender;
    if ( true &&
        exitBeforeEnter &&
        childrenToRender.length > 1) {
        console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour.");
    }
    return (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, exiting.size
        ? childrenToRender
        : childrenToRender.map(function (child) { return Object(react__WEBPACK_IMPORTED_MODULE_5__["cloneElement"])(child); })));
};

function createSwitchAnimation(child, stack) {
    if (stack && child !== stack.lead) {
        return { visibilityAction: VisibilityAction.Hide };
    }
    else if (stack &&
        child.presence !== Presence.Entering &&
        child === stack.lead &&
        stack.lead !== stack.prevLead) {
        return { visibilityAction: VisibilityAction.Show };
    }
    var originBox;
    var targetBox;
    if (child.presence === Presence.Entering) {
        originBox = stack === null || stack === void 0 ? void 0 : stack.getFollowOrigin();
    }
    else if (child.presence === Presence.Exiting) {
        targetBox = stack === null || stack === void 0 ? void 0 : stack.getFollowTarget();
    }
    return { originBox: originBox, targetBox: targetBox };
}
function createCrossfadeAnimation(child, stack) {
    var _a, _b, _c;
    var config = {};
    var stackLead = stack && stack.lead;
    var stackLeadPresence = stackLead === null || stackLead === void 0 ? void 0 : stackLead.presence;
    if (stack && child === stackLead) {
        if (child.presence === Presence.Entering) {
            config.originBox = stack.getFollowOrigin();
        }
        else if (child.presence === Presence.Exiting) {
            config.targetBox = stack.getFollowTarget();
        }
    }
    else if (stack && child === stack.follow) {
        config.transition = stack.getLeadTransition();
        if (stackLeadPresence === Presence.Entering) {
            config.targetBox = stack.getLeadTarget();
        }
        else if (stackLeadPresence === Presence.Exiting) {
            config.originBox = stack.getLeadOrigin();
        }
    }
    // If neither the lead or follow component is the root child of AnimatePresence,
    // don't handle crossfade animations
    if (!((_a = stack === null || stack === void 0 ? void 0 : stack.follow) === null || _a === void 0 ? void 0 : _a.isPresenceRoot) && !(stackLead === null || stackLead === void 0 ? void 0 : stackLead.isPresenceRoot)) {
        return config;
    }
    if (!stack || child === stackLead) {
        if (child.presence === Presence.Entering) {
            config.crossfadeOpacity = (_b = stack === null || stack === void 0 ? void 0 : stack.follow) === null || _b === void 0 ? void 0 : _b.getValue("opacity", 0);
        }
    }
    else if (stack && child === stack.follow) {
        if (!stackLead || stackLeadPresence === Presence.Entering) ;
        else if (stackLeadPresence === Presence.Exiting) {
            config.crossfadeOpacity = (_c = stack === null || stack === void 0 ? void 0 : stack.lead) === null || _c === void 0 ? void 0 : _c.getValue("opacity", 1);
        }
    }
    else {
        config.visibilityAction = VisibilityAction.Hide;
    }
    return config;
}

/**
 * For each layout animation, we want to identify two components
 * within a stack that will serve as the "lead" and "follow" components.
 *
 * In the switch animation, the lead component performs the entire animation.
 * It uses the follow bounding box to animate out from and back to. The follow
 * component is hidden.
 *
 * In the crossfade animation, both the lead and follow components perform
 * the entire animation, animating from the follow origin bounding box to the lead
 * target bounding box.
 *
 * Generalising a stack as First In Last Out, *searching from the end* we can
 * generally consider the lead component to be:
 *  - If the last child is present, the last child
 *  - If the last child is exiting, the last *encountered* exiting component
 */
function findLeadAndFollow(stack, _a) {
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 2), prevLead = _b[0], prevFollow = _b[1];
    var lead = undefined;
    var leadIndex = 0;
    var follow = undefined;
    // Find the lead child first
    var numInStack = stack.length;
    var lastIsPresent = false;
    for (var i = numInStack - 1; i >= 0; i--) {
        var child = stack[i];
        var isLastInStack = i === numInStack - 1;
        if (isLastInStack)
            lastIsPresent = child.isPresent;
        if (lastIsPresent) {
            lead = child;
        }
        else {
            // If the child before this will be present, make this the
            // lead.
            var prev = stack[i - 1];
            if (prev && prev.isPresent)
                lead = child;
        }
        if (lead) {
            leadIndex = i;
            break;
        }
    }
    if (!lead)
        lead = stack[0];
    // Find the follow child
    follow = stack[leadIndex - 1];
    // If the lead component is exiting, find the closest follow
    // present component
    if (lead) {
        for (var i = leadIndex - 1; i >= 0; i--) {
            var child = stack[i];
            if (child.isPresent) {
                follow = child;
                break;
            }
        }
    }
    // If the lead has changed and the previous lead still exists in the
    // stack, set it to the previous lead. This allows us to differentiate between
    // a, b, c(exit) -> a, b(exit), c(exit)
    // and
    // a, b(exit), c -> a, b(exit), c(exit)
    if (lead !== prevLead &&
        !lastIsPresent &&
        follow === prevFollow &&
        stack.find(function (stackChild) { return stackChild === prevLead; })) {
        lead = prevLead;
    }
    return [lead, follow];
}
var LayoutStack = /** @class */ (function () {
    function LayoutStack() {
        this.order = [];
        // Track whether we've ever had a child
        this.hasChildren = false;
    }
    LayoutStack.prototype.add = function (child) {
        var _a;
        this.order.push(child);
        // Load previous values from snapshot into this child
        // TODO Neaten up
        // TODO Double check when reimplementing move
        // TODO Add isDragging status and
        if (this.snapshot) {
            child.prevSnapshot = this.snapshot;
            // TODO Remove in favour of above
            child.prevViewportBox = this.snapshot.boundingBox;
            var latest = this.snapshot.latestMotionValues;
            for (var key in latest) {
                if (!child.hasValue(key)) {
                    child.addValue(key, motionValue(latest[key]));
                }
                else {
                    (_a = child.getValue(key)) === null || _a === void 0 ? void 0 : _a.set(latest[key]);
                }
            }
        }
        this.hasChildren = true;
    };
    LayoutStack.prototype.remove = function (child) {
        var index = this.order.findIndex(function (stackChild) { return child === stackChild; });
        if (index !== -1)
            this.order.splice(index, 1);
    };
    LayoutStack.prototype.updateLeadAndFollow = function () {
        this.prevLead = this.lead;
        this.prevFollow = this.follow;
        var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(findLeadAndFollow(this.order, [
            this.lead,
            this.follow,
        ]), 2), lead = _a[0], follow = _a[1];
        this.lead = lead;
        this.follow = follow;
    };
    LayoutStack.prototype.updateSnapshot = function () {
        if (!this.lead)
            return;
        var snapshot = {
            boundingBox: this.lead.prevViewportBox,
            latestMotionValues: {},
        };
        this.lead.forEachValue(function (value, key) {
            var latest = value.get();
            if (!isTransformProp(latest)) {
                snapshot.latestMotionValues[key] = latest;
            }
        });
        var dragControls = elementDragControls.get(this.lead);
        if (dragControls && dragControls.isDragging) {
            snapshot.isDragging = true;
            snapshot.cursorProgress = dragControls.cursorProgress;
        }
        this.snapshot = snapshot;
    };
    LayoutStack.prototype.isLeadPresent = function () {
        var _a;
        return this.lead && ((_a = this.lead) === null || _a === void 0 ? void 0 : _a.presence) !== Presence.Exiting;
    };
    LayoutStack.prototype.getFollowOrigin = function () {
        var _a;
        return this.follow
            ? this.follow.prevViewportBox
            : (_a = this.snapshot) === null || _a === void 0 ? void 0 : _a.boundingBox;
    };
    LayoutStack.prototype.getFollowTarget = function () {
        var _a;
        return (_a = this.follow) === null || _a === void 0 ? void 0 : _a.box;
    };
    LayoutStack.prototype.getLeadOrigin = function () {
        var _a;
        return (_a = this.lead) === null || _a === void 0 ? void 0 : _a.prevViewportBox;
    };
    LayoutStack.prototype.getLeadTarget = function () {
        var _a;
        return (_a = this.lead) === null || _a === void 0 ? void 0 : _a.box;
    };
    LayoutStack.prototype.getLeadTransition = function () {
        var _a;
        return (_a = this.lead) === null || _a === void 0 ? void 0 : _a.config.transition;
    };
    return LayoutStack;
}());

/**
 * @public
 */
var AnimateSharedLayout = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AnimateSharedLayout, _super);
    function AnimateSharedLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * A list of all the children in the shared layout
         */
        _this.children = new Set();
        /**
         * As animate components with a defined `layoutId` are added/removed to the tree,
         * we store them in order. When one is added, it will animate out from the
         * previous one, and when it's removed, it'll animate to the previous one.
         */
        _this.stacks = new Map();
        /**
         * Track whether the component has mounted. If it hasn't, the presence of added children
         * are set to Present, whereas if it has they're considered Entering
         */
        _this.hasMounted = false;
        /**
         * Track whether we already have an update scheduled. If we don't, we'll run snapshots
         * and schedule one.
         */
        _this.updateScheduled = false;
        /**
         * Tracks whether we already have a render scheduled. If we don't, we'll force one with this.forceRender
         */
        _this.renderScheduled = false;
        /**
         * The methods provided to all children in the shared layout tree.
         */
        _this.syncContext = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, createBatcher()), { syncUpdate: function (force) { return _this.scheduleUpdate(force); }, forceUpdate: function () {
                // By copying syncContext to itself, when this component re-renders it'll also re-render
                // all children subscribed to the SharedLayout context.
                _this.syncContext = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.syncContext);
                _this.scheduleUpdate(true);
            }, register: function (child) { return _this.addChild(child); }, remove: function (child) { return _this.removeChild(child); } });
        return _this;
    }
    AnimateSharedLayout.prototype.componentDidMount = function () {
        this.hasMounted = true;
        this.updateStacks();
    };
    AnimateSharedLayout.prototype.componentDidUpdate = function () {
        this.startLayoutAnimation();
    };
    AnimateSharedLayout.prototype.shouldComponentUpdate = function () {
        this.renderScheduled = true;
        return true;
    };
    AnimateSharedLayout.prototype.startLayoutAnimation = function () {
        var _this = this;
        /**
         * Reset update and render scheduled status
         */
        this.renderScheduled = this.updateScheduled = false;
        var type = this.props.type;
        /**
         * Update presence metadata based on the latest AnimatePresence status.
         * This is a kind of goofy way of dealing with this, perhaps there's a better model to find.
         */
        this.children.forEach(function (child) {
            if (!child.isPresent) {
                child.presence = Presence.Exiting;
            }
            else if (child.presence !== Presence.Entering) {
                child.presence =
                    child.presence === Presence.Exiting
                        ? Presence.Entering
                        : Presence.Present;
            }
        });
        /**
         * In every layoutId stack, nominate a component to lead the animation and another
         * to follow
         */
        this.updateStacks();
        /**
         * Decide which animation to use between shared layoutId components
         */
        var createAnimation = type === "crossfade"
            ? createCrossfadeAnimation
            : createSwitchAnimation;
        /**
         * Create a handler which we can use to flush the children animations
         */
        var handler = {
            measureLayout: function (child) { return child.measureLayout(); },
            layoutReady: function (child) {
                var layoutId = child.layoutId;
                child.layoutReady(createAnimation(child, _this.getStack(layoutId)));
            },
        };
        /**
         * Shared layout animations can be used without the AnimateSharedLayout wrapping component.
         * This requires some co-ordination across components to stop layout thrashing
         * and ensure measurements are taken at the correct time.
         *
         * Here we use that same mechanism of schedule/flush.
         */
        this.children.forEach(function (child) { return _this.syncContext.add(child); });
        this.syncContext.flush(handler);
        /**
         * Clear snapshots so subsequent rerenders don't retain memory of outgoing components
         */
        this.stacks.forEach(function (stack) { return (stack.snapshot = undefined); });
    };
    AnimateSharedLayout.prototype.updateStacks = function () {
        this.stacks.forEach(function (stack) { return stack.updateLeadAndFollow(); });
    };
    AnimateSharedLayout.prototype.scheduleUpdate = function (force) {
        if (force === void 0) { force = false; }
        if (!(force || !this.updateScheduled))
            return;
        /**
         * Flag we've scheduled an update
         */
        this.updateScheduled = true;
        /**
         * Read: Snapshot children
         */
        this.children.forEach(function (child) { return child.snapshotBoundingBox(); });
        /**
         * Every child keeps a local snapshot, but we also want to record
         * snapshots of the visible children as, if they're are being removed
         * in this render, we can still access them.
         */
        this.stacks.forEach(function (stack) { return stack.updateSnapshot(); });
        /**
         * Force a rerender by setting state if we aren't already going to render.
         */
        if (force || !this.renderScheduled) {
            this.renderScheduled = true;
            this.forceUpdate();
        }
    };
    AnimateSharedLayout.prototype.addChild = function (child) {
        this.children.add(child);
        this.addToStack(child);
        child.presence = this.hasMounted ? Presence.Entering : Presence.Present;
    };
    AnimateSharedLayout.prototype.removeChild = function (child) {
        this.scheduleUpdate();
        this.children.delete(child);
        this.removeFromStack(child);
    };
    AnimateSharedLayout.prototype.addToStack = function (child) {
        var stack = this.getStack(child.layoutId);
        stack === null || stack === void 0 ? void 0 : stack.add(child);
    };
    AnimateSharedLayout.prototype.removeFromStack = function (child) {
        var stack = this.getStack(child.layoutId);
        stack === null || stack === void 0 ? void 0 : stack.remove(child);
    };
    /**
     * Return a stack of animate children based on the provided layoutId.
     * Will create a stack if none currently exists with that layoutId.
     */
    AnimateSharedLayout.prototype.getStack = function (id) {
        if (id === undefined)
            return;
        // Create stack if it doesn't already exist
        !this.stacks.has(id) && this.stacks.set(id, new LayoutStack());
        return this.stacks.get(id);
    };
    AnimateSharedLayout.prototype.render = function () {
        return (Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SharedLayoutContext.Provider, { value: this.syncContext }, this.props.children));
    };
    return AnimateSharedLayout;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]));

/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * @library
 *
 * ```jsx
 * export function MyComponent() {
 *   const scale = useMotionValue(1)
 *
 *   return <Frame scale={scale} />
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */
function useMotionValue(initial) {
    return useConstant(function () { return motionValue(initial); });
}

function useOnChange(value, callback) {
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        return isMotionValue(value) ? value.onChange(callback) : undefined;
    });
}
function useMultiOnChange(values, handler) {
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        var subscriptions = values.map(function (value) { return value.onChange(handler); });
        return function () { return subscriptions.forEach(function (unsubscribe) { return unsubscribe(); }); };
    });
}

function useCombineMotionValues(values, combineValues) {
    /**
     * Initialise the returned motion value. This remains the same between renders.
     */
    var value = useMotionValue(combineValues());
    /**
     * Create a function that will update the template motion value with the latest values.
     * This is pre-bound so whenever a motion value updates it can schedule its
     * execution in Framesync. If it's already been scheduled it won't be fired twice
     * in a single frame.
     */
    var updateValue = function () { return value.set(combineValues()); };
    /**
     * Synchronously update the motion value with the latest values during the render.
     * This ensures that within a React render, the styles applied to the DOM are up-to-date.
     */
    updateValue();
    /**
     * Subscribe to all motion values found within the template. Whenever any of them change,
     * schedule an update.
     */
    useMultiOnChange(values, function () { return framesync__WEBPACK_IMPORTED_MODULE_1__["default"].update(updateValue, false, true); });
    return value;
}

/**
 * Combine multiple motion values into a new one using a string template literal.
 *
 * ```jsx
 * import {
 *   motion,
 *   useSpring,
 *   useMotionValue,
 *   useMotionTemplate
 * } from "framer-motion"
 *
 * function Component() {
 *   const shadowX = useSpring(0)
 *   const shadowY = useMotionValue(0)
 *   const shadow = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.3))`
 *
 *   return <motion.div style={{ filter: shadow }} />
 * }
 * ```
 *
 * @public
 */
function useMotionTemplate(fragments) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    /**
     * Create a function that will build a string from the latest motion values.
     */
    var numFragments = fragments.length;
    function buildValue() {
        var output = "";
        for (var i = 0; i < numFragments; i++) {
            output += fragments[i];
            var value = values[i];
            if (value)
                output += values[i].get();
        }
        return output;
    }
    return useCombineMotionValues(values, buildValue);
}

/**
 * If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
 *
 * TODO: Remove and move to library
 *
 * @internal
 */
function resolveMotionValue(value) {
    var unwrappedValue = value instanceof MotionValue ? value.get() : value;
    return isCustomValue(unwrappedValue)
        ? unwrappedValue.toValue()
        : unwrappedValue;
}

var isCustomValueType = function (v) {
    return typeof v === "object" && v.mix;
};
var getMixer = function (v) { return (isCustomValueType(v) ? v.mix : undefined); };
function transform() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var useImmediate = !Array.isArray(args[0]);
    var argOffset = useImmediate ? 0 : -1;
    var inputValue = args[0 + argOffset];
    var inputRange = args[1 + argOffset];
    var outputRange = args[2 + argOffset];
    var options = args[3 + argOffset];
    var interpolator = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["interpolate"])(inputRange, outputRange, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ mixer: getMixer(outputRange[0]) }, options));
    return useImmediate ? interpolator(inputValue) : interpolator;
}

function useTransform(input, inputRangeOrTransformer, outputRange, options) {
    var transformer = typeof inputRangeOrTransformer === "function"
        ? inputRangeOrTransformer
        : transform(inputRangeOrTransformer, outputRange, options);
    return Array.isArray(input)
        ? useListTransform(input, transformer)
        : useListTransform([input], function (_a) {
            var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_a, 1), latest = _b[0];
            return transformer(latest);
        });
}
function useListTransform(values, transformer) {
    var latest = useConstant(function () { return []; });
    return useCombineMotionValues(values, function () {
        latest.length = 0;
        var numValues = values.length;
        for (var i = 0; i < numValues; i++) {
            latest[i] = values[i].get();
        }
        return transformer(latest);
    });
}

// Keep things reasonable and avoid scale: Infinity. In practise we might need
// to add another value, opacity, that could interpolate scaleX/Y [0,0.01] => [0,1]
// to simply hide content at unreasonable scales.
var maxScale = 100000;
var invertScale = function (scale) {
    return scale > 0.001 ? 1 / scale : maxScale;
};
var hasWarned = false;
/**
 * Returns a `MotionValue` each for `scaleX` and `scaleY` that update with the inverse
 * of their respective parent scales.
 *
 * This is useful for undoing the distortion of content when scaling a parent component.
 *
 * By default, `useInvertedScale` will automatically fetch `scaleX` and `scaleY` from the nearest parent.
 * By passing other `MotionValue`s in as `useInvertedScale({ scaleX, scaleY })`, it will invert the output
 * of those instead.
 *
 * @motion
 *
 * ```jsx
 * const MyComponent = () => {
 *   const { scaleX, scaleY } = useInvertedScale()
 *   return <motion.div style={{ scaleX, scaleY }} />
 * }
 * ```
 *
 * @library
 *
 * ```jsx
 * function MyComponent() {
 *   const { scaleX, scaleY } = useInvertedScale()
 *   return <Frame scaleX={scaleX} scaleY={scaleY} />
 * }
 * ```
 *
 * @deprecated
 */
function useInvertedScale(scale) {
    var parentScaleX = useMotionValue(1);
    var parentScaleY = useMotionValue(1);
    var visualElement = useVisualElementContext();
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(!!(scale || visualElement), "If no scale values are provided, useInvertedScale must be used within a child of another motion component.");
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["warning"])(hasWarned, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead.");
    hasWarned = true;
    if (scale) {
        parentScaleX = scale.scaleX || parentScaleX;
        parentScaleY = scale.scaleY || parentScaleY;
    }
    else if (visualElement) {
        parentScaleX = visualElement.getValue("scaleX", 1);
        parentScaleY = visualElement.getValue("scaleY", 1);
    }
    var scaleX = useTransform(parentScaleX, invertScale);
    var scaleY = useTransform(parentScaleY, invertScale);
    return { scaleX: scaleX, scaleY: scaleY };
}

/**
 * Creates a `MotionValue` that, when `set`, will use a spring animation to animate to its new state.
 *
 * It can either work as a stand-alone `MotionValue` by initialising it with a value, or as a subscriber
 * to another `MotionValue`.
 *
 * @remarks
 *
 * ```jsx
 * const x = useSpring(0, { stiffness: 300 })
 * const y = useSpring(x, { damping: 10 })
 * ```
 *
 * @param inputValue - `MotionValue` or number. If provided a `MotionValue`, when the input `MotionValue` changes, the created `MotionValue` will spring towards that value.
 * @param springConfig - Configuration options for the spring.
 * @returns `MotionValue`
 *
 * @public
 */
function useSpring(source, config) {
    if (config === void 0) { config = {}; }
    var activeSpringAnimation = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
    var value = useMotionValue(isMotionValue(source) ? source.get() : source);
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
        return value.attach(function (v, set) {
            if (activeSpringAnimation.current) {
                activeSpringAnimation.current.stop();
            }
            activeSpringAnimation.current = Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["animate"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ from: value.get(), to: v, velocity: value.getVelocity() }, config), { onUpdate: set }));
            return value.get();
        });
    }, Object.values(config));
    useOnChange(source, function (v) { return value.set(parseFloat(v)); });
    return value;
}

function createScrollMotionValues() {
    return {
        scrollX: motionValue(0),
        scrollY: motionValue(0),
        scrollXProgress: motionValue(0),
        scrollYProgress: motionValue(0),
    };
}
function setProgress(offset, maxOffset, value) {
    value.set(!offset || !maxOffset ? 0 : offset / maxOffset);
}
function createScrollUpdater(values, getOffsets) {
    var update = function () {
        var _a = getOffsets(), xOffset = _a.xOffset, yOffset = _a.yOffset, xMaxOffset = _a.xMaxOffset, yMaxOffset = _a.yMaxOffset;
        // Set absolute positions
        values.scrollX.set(xOffset);
        values.scrollY.set(yOffset);
        // Set 0-1 progress
        setProgress(xOffset, xMaxOffset, values.scrollXProgress);
        setProgress(yOffset, yMaxOffset, values.scrollYProgress);
    };
    update();
    return update;
}

var getElementScrollOffsets = function (element) { return function () {
    return {
        xOffset: element.scrollLeft,
        yOffset: element.scrollTop,
        xMaxOffset: element.scrollWidth - element.offsetWidth,
        yMaxOffset: element.scrollHeight - element.offsetHeight,
    };
}; };
/**
 * Returns MotionValues that update when the provided element scrolls:
 *
 * - `scrollX` — Horizontal scroll distance in pixels.
 * - `scrollY` — Vertical scroll distance in pixels.
 * - `scrollXProgress` — Horizontal scroll progress between `0` and `1`.
 * - `scrollYProgress` — Vertical scroll progress between `0` and `1`.
 *
 * This element must be set to `overflow: scroll` on either or both axes to report scroll offset.
 *
 * @library
 *
 * ```jsx
 * import * as React from "react"
 * import {
 *   Frame,
 *   useElementScroll,
 *   useTransform
 * } from "framer"
 *
 * export function MyComponent() {
 *   const ref = React.useRef()
 *   const { scrollYProgress } = useElementScroll(ref)
 *
 *   return (
 *     <Frame ref={ref}>
 *       <Frame scaleX={scrollYProgress} />
 *     </Frame>
 *   )
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const ref = useRef()
 *   const { scrollYProgress } = useElementScroll(ref)
 *
 *   return (
 *     <div ref={ref}>
 *       <motion.div style={{ scaleX: scrollYProgress }} />
 *     </div>
 *   )
 * }
 * ```
 *
 * @public
 */
function useElementScroll(ref) {
    var values = useConstant(createScrollMotionValues);
    useIsomorphicLayoutEffect(function () {
        var element = ref.current;
        Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["invariant"])(!!element, "ref provided to useScroll must be passed into a HTML element.");
        if (!element)
            return;
        var updateScrollValues = createScrollUpdater(values, getElementScrollOffsets(element));
        var scrollListener = addDomEvent(element, "scroll", updateScrollValues, { passive: true });
        var resizeListener = addDomEvent(element, "resize", updateScrollValues);
        return function () {
            scrollListener && scrollListener();
            resizeListener && resizeListener();
        };
    }, []);
    return values;
}

var viewportScrollValues = createScrollMotionValues();
function getViewportScrollOffsets() {
    return {
        xOffset: window.pageXOffset,
        yOffset: window.pageYOffset,
        xMaxOffset: document.body.clientWidth - window.innerWidth,
        yMaxOffset: document.body.clientHeight - window.innerHeight,
    };
}
var hasListeners = false;
function addEventListeners() {
    hasListeners = true;
    if (typeof window === "undefined")
        return;
    var updateScrollValues = createScrollUpdater(viewportScrollValues, getViewportScrollOffsets);
    addDomEvent(window, "scroll", updateScrollValues, { passive: true });
    addDomEvent(window, "resize", updateScrollValues);
}
/**
 * Returns MotionValues that update when the viewport scrolls:
 *
 * - `scrollX` — Horizontal scroll distance in pixels.
 * - `scrollY` — Vertical scroll distance in pixels.
 * - `scrollXProgress` — Horizontal scroll progress between `0` and `1`.
 * - `scrollYProgress` — Vertical scroll progress between `0` and `1`.
 *
 * @library
 *
 * ```jsx
 * import * as React from "react"
 * import {
 *   Frame,
 *   useViewportScroll,
 *   useTransform
 * } from "framer"
 *
 * export function MyComponent() {
 *   const { scrollYProgress } = useViewportScroll()
 *   return <Frame scaleX={scrollYProgress} />
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const { scrollYProgress } = useViewportScroll()
 *   return <motion.div style={{ scaleX: scrollYProgress }} />
 * }
 * ```
 *
 * @public
 */
function useViewportScroll() {
    useIsomorphicLayoutEffect(function () {
        !hasListeners && addEventListeners();
    }, []);
    return viewportScrollValues;
}

// Does this device prefer reduced motion? Returns `null` server-side.
var prefersReducedMotion = motionValue(null);
if (typeof window !== "undefined") {
    if (window.matchMedia) {
        var motionMediaQuery_1 = window.matchMedia("(prefers-reduced-motion)");
        var setReducedMotionPreferences = function () {
            return prefersReducedMotion.set(motionMediaQuery_1.matches);
        };
        motionMediaQuery_1.addListener(setReducedMotionPreferences);
        setReducedMotionPreferences();
    }
    else {
        prefersReducedMotion.set(false);
    }
}
/**
 * A hook that returns `true` if we should be using reduced motion based on the current device's Reduced Motion setting.
 *
 * This can be used to implement changes to your UI based on Reduced Motion. For instance, replacing motion-sickness inducing
 * `x`/`y` animations with `opacity`, disabling the autoplay of background videos, or turning off parallax motion.
 *
 * It will actively respond to changes and re-render your components with the latest setting.
 *
 * ```jsx
 * export function Sidebar({ isOpen }) {
 *   const shouldReduceMotion = useReducedMotion()
 *   const closedX = shouldReduceMotion ? 0 : "-100%"
 *
 *   return (
 *     <motion.div animate={{
 *       opacity: isOpen ? 1 : 0,
 *       x: isOpen ? 0 : closedX
 *     }} />
 *   )
 * }
 * ```
 *
 * @return boolean
 *
 * @public
 */
function useReducedMotion() {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(prefersReducedMotion.get()), 2), shouldReduceMotion = _a[0], setShouldReduceMotion = _a[1];
    useOnChange(prefersReducedMotion, setShouldReduceMotion);
    return shouldReduceMotion;
}

/**
 * Creates `AnimationControls`, which can be used to manually start, stop
 * and sequence animations on one or more components.
 *
 * The returned `AnimationControls` should be passed to the `animate` property
 * of the components you want to animate.
 *
 * These components can then be animated with the `start` method.
 *
 * @library
 *
 * ```jsx
 * import * as React from 'react'
 * import { Frame, useAnimation } from 'framer'
 *
 * export function MyComponent(props) {
 *    const controls = useAnimation()
 *
 *    controls.start({
 *        x: 100,
 *        transition: { duration: 0.5 },
 *    })
 *
 *    return <Frame animate={controls} />
 * }
 * ```
 *
 * @motion
 *
 * ```jsx
 * import * as React from 'react'
 * import { motion, useAnimation } from 'framer-motion'
 *
 * export function MyComponent(props) {
 *    const controls = useAnimation()
 *
 *    controls.start({
 *        x: 100,
 *        transition: { duration: 0.5 },
 *    })
 *
 *    return <motion.div animate={controls} />
 * }
 * ```
 *
 * @returns Animation controller with `start` and `stop` methods
 *
 * @public
 */
function useAnimation() {
    var animationControls = useConstant(function () { return new AnimationControls(); });
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        animationControls.mount();
        return function () { return animationControls.unmount(); };
    }, []);
    return animationControls;
}

/**
 * Animate a single value or a `MotionValue`.
 *
 * The first argument is either a `MotionValue` to animate, or an initial animation value.
 *
 * The second is either a value to animate to, or an array of keyframes to animate through.
 *
 * The third argument can be either tween or spring options, and optional lifecycle methods: `onUpdate`, `onPlay`, `onComplete`, `onRepeat` and `onStop`.
 *
 * Returns `PlaybackControls`, currently just a `stop` method.
 *
 * ```javascript
 * const x = useMotionValue(0)
 *
 * useEffect(() => {
 *   const controls = animate(x, 100, {
 *     type: "spring",
 *     stiffness: 2000,
 *     onComplete: v => {}
 *   })
 *
 *   return controls.stop
 * })
 * ```
 *
 * @public
 */
function animate(from, to, transition) {
    if (transition === void 0) { transition = {}; }
    var value = isMotionValue(from) ? from : motionValue(from);
    startAnimation("", value, to, transition);
    return {
        stop: function () { return value.stop(); },
    };
}

/**
 * Cycles through a series of visual properties. Can be used to toggle between or cycle through animations. It works similar to `useState` in React. It is provided an initial array of possible states, and returns an array of two arguments.
 *
 * @library
 *
 * ```jsx
 * import * as React from "react"
 * import { Frame, useCycle } from "framer"
 *
 * export function MyComponent() {
 *   const [x, cycleX] = useCycle(0, 50, 100)
 *
 *   return (
 *     <Frame
 *       animate={{ x: x }}
 *       onTap={() => cycleX()}
 *      />
 *    )
 * }
 * ```
 *
 * @motion
 *
 * An index value can be passed to the returned `cycle` function to cycle to a specific index.
 *
 * ```jsx
 * import * as React from "react"
 * import { motion, useCycle } from "framer-motion"
 *
 * export const MyComponent = () => {
 *   const [x, cycleX] = useCycle(0, 50, 100)
 *
 *   return (
 *     <motion.div
 *       animate={{ x: x }}
 *       onTap={() => cycleX()}
 *      />
 *    )
 * }
 * ```
 *
 * @param items - items to cycle through
 * @returns [currentState, cycleState]
 *
 * @public
 */
function useCycle() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    // TODO: After Framer X beta, remove this warning
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_3__["warning"])(items.length > 1, "useCycle syntax has changed. `useCycle([0, 1, 2])` becomes `useCycle(0, 1, 2)`");
    var index = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(0);
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(items[index.current]), 2), item = _a[0], setItem = _a[1];
    return [
        item,
        function (next) {
            index.current =
                typeof next !== "number"
                    ? Object(popmotion__WEBPACK_IMPORTED_MODULE_2__["wrap"])(0, items.length, index.current + 1)
                    : next;
            setItem(items[index.current]);
        },
    ];
}

/**
 * Can manually trigger a drag gesture on one or more `drag`-enabled `motion` components.
 *
 * @library
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <Frame onTapStart={startDrag} />
 *     <Frame drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @motion
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <div onPointerDown={startDrag} />
 *     <motion.div drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @public
 */
var DragControls = /** @class */ (function () {
    function DragControls() {
        this.componentControls = new Set();
    }
    /**
     * Subscribe a component's internal `VisualElementDragControls` to the user-facing API.
     *
     * @internal
     */
    DragControls.prototype.subscribe = function (controls) {
        var _this = this;
        this.componentControls.add(controls);
        return function () { return _this.componentControls.delete(controls); };
    };
    /**
     * Start a drag gesture on every `motion` component that has this set of drag controls
     * passed into it via the `dragControls` prop.
     *
     * ```jsx
     * dragControls.start(e, {
     *   snapToCursor: true
     * })
     * ```
     *
     * @param event - PointerEvent
     * @param options - Options
     *
     * @public
     */
    DragControls.prototype.start = function (event, options) {
        this.componentControls.forEach(function (controls) {
            controls.start(event.nativeEvent || event, options);
        });
    };
    DragControls.prototype.updateConstraints = function () {
        this.componentControls.forEach(function (controls) {
            controls.prepareBoundingBox();
            controls.resolveDragConstraints();
        });
    };
    return DragControls;
}());
var createDragControls = function () { return new DragControls(); };
/**
 * Usually, dragging is initiated by pressing down on a `motion` component with a `drag` prop
 * and moving it. For some use-cases, for instance clicking at an arbitrary point on a video scrubber, we
 * might want to initiate that dragging from a different component than the draggable one.
 *
 * By creating a `dragControls` using the `useDragControls` hook, we can pass this into
 * the draggable component's `dragControls` prop. It exposes a `start` method
 * that can start dragging from pointer events on other components.
 *
 * @library
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <Frame onTapStart={startDrag} />
 *     <Frame drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @motion
 *
 * ```jsx
 * const dragControls = useDragControls()
 *
 * function startDrag(event) {
 *   dragControls.start(event, { snapToCursor: true })
 * }
 *
 * return (
 *   <>
 *     <div onPointerDown={startDrag} />
 *     <motion.div drag="x" dragControls={dragControls} />
 *   </>
 * )
 * ```
 *
 * @public
 */
function useDragControls() {
    return useConstant(createDragControls);
}

/**
 * Uses the ref that is passed in, or creates a new one
 * @param external - External ref
 * @internal
 */
function useExternalRef(externalRef) {
    // We're conditionally calling `useRef` here which is sort of naughty as hooks
    // shouldn't be called conditionally. However, Framer Motion will break if this
    // condition changes anyway. It might be possible to use an invariant here to
    // make it explicit, but I expect changing `ref` is not normal behaviour.
    var ref = !externalRef || typeof externalRef === "function"
        ? Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null)
        : externalRef;
    // Handle `ref` functions. Again, calling the hook conditionally is kind of naughty
    // but `ref` types changing between renders would break Motion anyway. If we receive
    // bug reports about this, we should track the provided ref and throw an invariant
    // rather than move the conditional to inside the useEffect as this will be fired
    // for every Frame component within Framer.
    if (externalRef && typeof externalRef === "function") {
        Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
            externalRef(ref.current);
            return function () { return externalRef(null); };
        }, []);
    }
    return ref;
}

/**
 * This is just a very basic VisualElement, more of a hack to keep supporting useAnimatedState with
 * the latest APIs.
 */
var StateVisualElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StateVisualElement, _super);
    function StateVisualElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.initialState = {};
        return _this;
    }
    StateVisualElement.prototype.updateLayoutDelta = function () { };
    StateVisualElement.prototype.build = function () { };
    StateVisualElement.prototype.clean = function () { };
    StateVisualElement.prototype.makeTargetAnimatable = function (_a) {
        var transition = _a.transition, transitionEnd = _a.transitionEnd, target = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["transition", "transitionEnd"]);
        var origin = getOrigin(target, transition || {}, this);
        checkTargetForNewValues(this, target, origin);
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ transition: transition, transitionEnd: transitionEnd }, target);
    };
    StateVisualElement.prototype.getBoundingBox = function () {
        return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
    };
    StateVisualElement.prototype.readNativeValue = function (key) {
        return this.initialState[key] || 0;
    };
    StateVisualElement.prototype.render = function () {
        this.build();
    };
    return StateVisualElement;
}(VisualElement));
/**
 * This is not an officially supported API and may be removed
 * on any version.
 * @internal
 */
function useAnimatedState(initialState) {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(initialState), 2), animationState = _a[0], setAnimationState = _a[1];
    var visualElement = useConstant(function () { return new StateVisualElement(); });
    visualElement.updateConfig({
        onUpdate: function (v) { return setAnimationState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, v)); },
    });
    visualElement.initialState = initialState;
    Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
        visualElement.mount({});
        return function () { return visualElement.unmount(); };
    }, []);
    var startAnimation = useConstant(function () { return function (animationDefinition) {
        return startVisualElementAnimation(visualElement, animationDefinition);
    }; });
    return [animationState, startAnimation];
}




/***/ }),

/***/ "./node_modules/framesync/dist/framesync.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/framesync/dist/framesync.es.js ***!
  \*****************************************************/
/*! exports provided: default, cancelSync, getFrameData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelSync", function() { return cancelSync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrameData", function() { return getFrameData; });
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");


var prevTime = 0;
var onNextFrame = typeof window !== 'undefined' && window.requestAnimationFrame !== undefined ? function (callback) {
    return window.requestAnimationFrame(callback);
} : function (callback) {
    var timestamp = Date.now();
    var timeToCall = Math.max(0, 16.7 - (timestamp - prevTime));
    prevTime = timestamp + timeToCall;
    setTimeout(function () {
        return callback(prevTime);
    }, timeToCall);
};

var createStep = function (setRunNextFrame) {
    var processToRun = [];
    var processToRunNextFrame = [];
    var numThisFrame = 0;
    var isProcessing = false;
    var i = 0;
    var cancelled = new WeakSet();
    var toKeepAlive = new WeakSet();
    var renderStep = {
        cancel: function (process) {
            var indexOfCallback = processToRunNextFrame.indexOf(process);
            cancelled.add(process);
            if (indexOfCallback !== -1) {
                processToRunNextFrame.splice(indexOfCallback, 1);
            }
        },
        process: function (frame) {
            var _a;
            isProcessing = true;
            _a = [processToRunNextFrame, processToRun], processToRun = _a[0], processToRunNextFrame = _a[1];
            processToRunNextFrame.length = 0;
            numThisFrame = processToRun.length;
            if (numThisFrame) {
                var process_1;
                for (i = 0; i < numThisFrame; i++) {
                    process_1 = processToRun[i];
                    process_1(frame);
                    if (toKeepAlive.has(process_1) === true && !cancelled.has(process_1)) {
                        renderStep.schedule(process_1);
                        setRunNextFrame(true);
                    }
                }
            }
            isProcessing = false;
        },
        schedule: function (process, keepAlive, immediate) {
            if (keepAlive === void 0) {
                keepAlive = false;
            }
            if (immediate === void 0) {
                immediate = false;
            }
            Object(hey_listen__WEBPACK_IMPORTED_MODULE_0__["invariant"])(typeof process === "function", "Argument must be a function");
            var addToCurrentBuffer = immediate && isProcessing;
            var buffer = addToCurrentBuffer ? processToRun : processToRunNextFrame;
            cancelled.delete(process);
            if (keepAlive) toKeepAlive.add(process);
            if (buffer.indexOf(process) === -1) {
                buffer.push(process);
                if (addToCurrentBuffer) numThisFrame = processToRun.length;
            }
        }
    };
    return renderStep;
};

var maxElapsed = 40;
var defaultElapsed = 1 / 60 * 1000;
var useDefaultElapsed = true;
var willRunNextFrame = false;
var isProcessing = false;
var frame = {
    delta: 0,
    timestamp: 0
};
var stepsOrder = ["read", "update", "preRender", "render", "postRender"];
var setWillRunNextFrame = function (willRun) {
    return willRunNextFrame = willRun;
};
var steps = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
    acc[key] = createStep(setWillRunNextFrame);
    return acc;
}, {});
var sync = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
    var step = steps[key];
    acc[key] = function (process, keepAlive, immediate) {
        if (keepAlive === void 0) {
            keepAlive = false;
        }
        if (immediate === void 0) {
            immediate = false;
        }
        if (!willRunNextFrame) startLoop();
        step.schedule(process, keepAlive, immediate);
        return process;
    };
    return acc;
}, {});
var cancelSync = /*#__PURE__*/stepsOrder.reduce(function (acc, key) {
    acc[key] = steps[key].cancel;
    return acc;
}, {});
var processStep = function (stepId) {
    return steps[stepId].process(frame);
};
var processFrame = function (timestamp) {
    willRunNextFrame = false;
    frame.delta = useDefaultElapsed ? defaultElapsed : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
    if (!useDefaultElapsed) defaultElapsed = frame.delta;
    frame.timestamp = timestamp;
    isProcessing = true;
    stepsOrder.forEach(processStep);
    isProcessing = false;
    if (willRunNextFrame) {
        useDefaultElapsed = false;
        onNextFrame(processFrame);
    }
};
var startLoop = function () {
    willRunNextFrame = true;
    useDefaultElapsed = true;
    if (!isProcessing) onNextFrame(processFrame);
};
var getFrameData = function () {
    return frame;
};

/* harmony default export */ __webpack_exports__["default"] = (sync);



/***/ }),

/***/ "./node_modules/hey-listen/dist/hey-listen.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/hey-listen/dist/hey-listen.es.js ***!
  \*******************************************************/
/*! exports provided: invariant, warning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warning", function() { return warning; });
var warning = function () { };
var invariant = function () { };
if (true) {
    warning = function (check, message) {
        if (!check && typeof console !== 'undefined') {
            console.warn(message);
        }
    };
    invariant = function (check, message) {
        if (!check) {
            throw new Error(message);
        }
    };
}




/***/ }),

/***/ "./node_modules/polished/dist/polished.esm.js":
false,

/***/ "./node_modules/polished/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/polished/node_modules/@babel/runtime/helpers/esm/construct.js":
false,

/***/ "./node_modules/polished/node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/polished/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
false,

/***/ "./node_modules/polished/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
false,

/***/ "./node_modules/polished/node_modules/@babel/runtime/helpers/esm/isNativeFunction.js":
false,

/***/ "./node_modules/polished/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/polished/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/polished/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js":
false,

/***/ "./node_modules/polished/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js":
false,

/***/ "./node_modules/popmotion/dist/popmotion.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/popmotion/dist/popmotion.es.js ***!
  \*****************************************************/
/*! exports provided: angle, animate, anticipate, applyOffset, attract, attractExpo, backIn, backInOut, backOut, bounceIn, bounceInOut, bounceOut, circIn, circInOut, circOut, clamp, createAnticipate, createAttractor, createBackIn, createExpoIn, cubicBezier, decay, degreesToRadians, distance, easeIn, easeInOut, easeOut, inertia, interpolate, isPoint, isPoint3D, keyframes, linear, mirrorEasing, mix, mixColor, mixComplex, pipe, pointFromVector, progress, radiansToDegrees, reverseEasing, smooth, smoothFrame, snap, spring, steps, toDecimal, velocityPerFrame, velocityPerSecond, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anticipate", function() { return anticipate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyOffset", function() { return applyOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attract", function() { return attract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attractExpo", function() { return attractExpo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backIn", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backInOut", function() { return backInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backOut", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceIn", function() { return bounceIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceInOut", function() { return bounceInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOut", function() { return bounceOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circIn", function() { return circIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circInOut", function() { return circInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circOut", function() { return circOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAnticipate", function() { return createAnticipate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAttractor", function() { return createAttractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBackIn", function() { return createBackIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExpoIn", function() { return createExpoIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubicBezier", function() { return cubicBezier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decay", function() { return decay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degreesToRadians", function() { return degreesToRadians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeIn", function() { return easeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOut", function() { return easeInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOut", function() { return easeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inertia", function() { return inertia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPoint", function() { return isPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPoint3D", function() { return isPoint3D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mirrorEasing", function() { return mirrorEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return mix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixColor", function() { return mixColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixComplex", function() { return mixComplex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointFromVector", function() { return pointFromVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progress", function() { return progress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radiansToDegrees", function() { return radiansToDegrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseEasing", function() { return reverseEasing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smooth", function() { return smooth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothFrame", function() { return smoothFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snap", function() { return snap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spring", function() { return spring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "steps", function() { return steps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDecimal", function() { return toDecimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "velocityPerFrame", function() { return velocityPerFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "velocityPerSecond", function() { return velocityPerSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hey_listen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hey-listen */ "./node_modules/hey-listen/dist/hey-listen.es.js");
/* harmony import */ var style_value_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! style-value-types */ "./node_modules/style-value-types/dist/style-value-types.es.js");
/* harmony import */ var framesync__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framesync */ "./node_modules/framesync/dist/framesync.es.js");





var clamp = function (min, max, v) {
    return Math.min(Math.max(v, min), max);
};

var safeMin = 0.001;
var minDuration = 0.01;
var maxDuration = 10.0;
var minDamping = 0.05;
var maxDamping = 1;
function findSpring(_a) {
    var _b = _a.duration,
        duration = _b === void 0 ? 800 : _b,
        _c = _a.bounce,
        bounce = _c === void 0 ? 0.25 : _c,
        _d = _a.velocity,
        velocity = _d === void 0 ? 0 : _d,
        _e = _a.mass,
        mass = _e === void 0 ? 1 : _e;
    var envelope;
    var derivative;
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["warning"])(duration <= maxDuration * 1000, "Spring duration must be 10 seconds or less");
    var dampingRatio = 1 - bounce;
    dampingRatio = clamp(minDamping, maxDamping, dampingRatio);
    duration = clamp(minDuration, maxDuration, duration / 1000);
    if (dampingRatio < 1) {
        envelope = function (undampedFreq) {
            var exponentialDecay = undampedFreq * dampingRatio;
            var delta = exponentialDecay * duration;
            var a = exponentialDecay - velocity;
            var b = calcAngularFreq(undampedFreq, dampingRatio);
            var c = Math.exp(-delta);
            return safeMin - a / b * c;
        };
        derivative = function (undampedFreq) {
            var exponentialDecay = undampedFreq * dampingRatio;
            var delta = exponentialDecay * duration;
            var d = delta * velocity + velocity;
            var e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
            var f = Math.exp(-delta);
            var g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
            var factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
            return factor * ((d - e) * f) / g;
        };
    } else {
        envelope = function (undampedFreq) {
            var a = Math.exp(-undampedFreq * duration);
            var b = (undampedFreq - velocity) * duration + 1;
            return -safeMin + a * b;
        };
        derivative = function (undampedFreq) {
            var a = Math.exp(-undampedFreq * duration);
            var b = (velocity - undampedFreq) * (duration * duration);
            return a * b;
        };
    }
    var initialGuess = 5 / duration;
    var undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    if (isNaN(undampedFreq)) {
        return {
            stiffness: 100,
            damping: 10
        };
    } else {
        var stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
            stiffness: stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness)
        };
    }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
    var result = initialGuess;
    for (var i = 1; i < rootIterations; i++) {
        result = result - envelope(result) / derivative(result);
    }
    return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
    return keys.some(function (key) {
        return options[key] !== undefined;
    });
}
function getSpringOptions(options) {
    var springOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ velocity: 0.0, stiffness: 100, damping: 10, mass: 1.0, isResolvedFromDuration: false }, options);
    if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
        var derived = findSpring(options);
        springOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, springOptions), derived), { velocity: 0.0, mass: 1.0 });
        springOptions.isResolvedFromDuration = true;
    }
    return springOptions;
}
function spring(_a) {
    var _b = _a.from,
        from = _b === void 0 ? 0.0 : _b,
        _c = _a.to,
        to = _c === void 0 ? 1.0 : _c,
        _d = _a.restSpeed,
        restSpeed = _d === void 0 ? 2 : _d,
        restDelta = _a.restDelta,
        options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["from", "to", "restSpeed", "restDelta"]);
    var state = { done: false, value: from };
    var _e = getSpringOptions(options),
        stiffness = _e.stiffness,
        damping = _e.damping,
        mass = _e.mass,
        velocity = _e.velocity,
        isResolvedFromDuration = _e.isResolvedFromDuration;
    var resolveSpring = zero;
    var resolveVelocity = zero;
    function createSpring() {
        var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
        var initialDelta = to - from;
        var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
        var undampedAngularFreq = Math.sqrt(stiffness / mass) / 1000;
        restDelta !== null && restDelta !== void 0 ? restDelta : restDelta = Math.abs(to - from) <= 1 ? 0.01 : 0.4;
        if (dampingRatio < 1) {
            var angularFreq_1 = calcAngularFreq(undampedAngularFreq, dampingRatio);
            resolveSpring = function (t) {
                var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq_1 * Math.sin(angularFreq_1 * t) + initialDelta * Math.cos(angularFreq_1 * t));
            };
            resolveVelocity = function (t) {
                var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq_1 * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq_1 + initialDelta * Math.cos(angularFreq_1 * t)) - envelope * (Math.cos(angularFreq_1 * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq_1 * initialDelta * Math.sin(angularFreq_1 * t));
            };
        } else if (dampingRatio === 1) {
            resolveSpring = function (t) {
                return to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
            };
        } else {
            var dampedAngularFreq_1 = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
            resolveSpring = function (t) {
                var envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
                var freqForT = Math.min(dampedAngularFreq_1 * t, 300);
                return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq_1 * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq_1;
            };
        }
    }
    createSpring();
    return {
        next: function (t) {
            var current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                var currentVelocity = resolveVelocity(t) * 1000;
                var isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
                var isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
                state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
            } else {
                state.done = t >= options.duration;
            }
            state.value = state.done ? to : current;
            return state;
        },
        flipTarget: function () {
            var _a;
            velocity = -velocity;
            _a = [to, from], from = _a[0], to = _a[1];
            createSpring();
        }
    };
}
spring.needsInterpolation = function (a, b) {
    return typeof a === "string" || typeof b === "string";
};
var zero = function (_t) {
    return 0;
};

var progress = function (from, to, value) {
    var toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

var mix = function (from, to, progress) {
    return -progress * from + progress * to + from;
};

var mixLinearColor = function (from, to, v) {
    var fromExpo = from * from;
    var toExpo = to * to;
    return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
var colorTypes = [style_value_types__WEBPACK_IMPORTED_MODULE_2__["hex"], style_value_types__WEBPACK_IMPORTED_MODULE_2__["rgba"], style_value_types__WEBPACK_IMPORTED_MODULE_2__["hsla"]];
var getColorType = function (v) {
    return colorTypes.find(function (type) {
        return type.test(v);
    });
};
var notAnimatable = function (color) {
    return "'" + color + "' is not an animatable color. Use the equivalent color code instead.";
};
var mixColor = function (from, to) {
    var fromColorType = getColorType(from);
    var toColorType = getColorType(to);
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!!fromColorType, notAnimatable(from));
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!!toColorType, notAnimatable(to));
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fromColorType.transform === toColorType.transform, 'Both colors must be hex/RGBA, OR both must be HSLA.');
    var fromColor = fromColorType.parse(from);
    var toColor = toColorType.parse(to);
    var blended = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fromColor);
    var mixFunc = fromColorType === style_value_types__WEBPACK_IMPORTED_MODULE_2__["hsla"] ? mix : mixLinearColor;
    return function (v) {
        for (var key in blended) {
            if (key !== 'alpha') {
                blended[key] = mixFunc(fromColor[key], toColor[key], v);
            }
        }
        blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
        return fromColorType.transform(blended);
    };
};

var zeroPoint = {
    x: 0,
    y: 0,
    z: 0
};
var isNum = function (v) {
    return typeof v === 'number';
};

var combineFunctions = function (a, b) {
    return function (v) {
        return b(a(v));
    };
};
var pipe = function () {
    var transformers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        transformers[_i] = arguments[_i];
    }
    return transformers.reduce(combineFunctions);
};

function getMixer(origin, target) {
    if (isNum(origin)) {
        return function (v) {
            return mix(origin, target, v);
        };
    } else if (style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"].test(origin)) {
        return mixColor(origin, target);
    } else {
        return mixComplex(origin, target);
    }
}
var mixArray = function (from, to) {
    var output = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(from);
    var numValues = output.length;
    var blendValue = from.map(function (fromThis, i) {
        return getMixer(fromThis, to[i]);
    });
    return function (v) {
        for (var i = 0; i < numValues; i++) {
            output[i] = blendValue[i](v);
        }
        return output;
    };
};
var mixObject = function (origin, target) {
    var output = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, origin), target);
    var blendValue = {};
    for (var key in output) {
        if (origin[key] !== undefined && target[key] !== undefined) {
            blendValue[key] = getMixer(origin[key], target[key]);
        }
    }
    return function (v) {
        for (var key in blendValue) {
            output[key] = blendValue[key](v);
        }
        return output;
    };
};
function analyse(value) {
    var parsed = style_value_types__WEBPACK_IMPORTED_MODULE_2__["complex"].parse(value);
    var numValues = parsed.length;
    var numNumbers = 0;
    var numRGB = 0;
    var numHSL = 0;
    for (var i = 0; i < numValues; i++) {
        if (numNumbers || typeof parsed[i] === 'number') {
            numNumbers++;
        } else {
            if (parsed[i].hue !== undefined) {
                numHSL++;
            } else {
                numRGB++;
            }
        }
    }
    return { parsed: parsed, numNumbers: numNumbers, numRGB: numRGB, numHSL: numHSL };
}
var mixComplex = function (origin, target) {
    var template = style_value_types__WEBPACK_IMPORTED_MODULE_2__["complex"].createTransformer(target);
    var originStats = analyse(origin);
    var targetStats = analyse(target);
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers, "Complex values '" + origin + "' and '" + target + "' too different to mix. Ensure all colors are of the same type.");
    return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
};

var mixNumber = function (from, to) {
    return function (p) {
        return mix(from, to, p);
    };
};
function detectMixerFactory(v) {
    if (typeof v === 'number') {
        return mixNumber;
    } else if (typeof v === 'string') {
        if (style_value_types__WEBPACK_IMPORTED_MODULE_2__["color"].test(v)) {
            return mixColor;
        } else {
            return mixComplex;
        }
    } else if (Array.isArray(v)) {
        return mixArray;
    } else if (typeof v === 'object') {
        return mixObject;
    }
}
function createMixers(output, ease, customMixer) {
    var mixers = [];
    var mixerFactory = customMixer || detectMixerFactory(output[0]);
    var numMixers = output.length - 1;
    for (var i = 0; i < numMixers; i++) {
        var mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            var easingFunction = Array.isArray(ease) ? ease[i] : ease;
            mixer = pipe(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
function fastInterpolate(_a, _b) {
    var from = _a[0],
        to = _a[1];
    var mixer = _b[0];
    return function (v) {
        return mixer(progress(from, to, v));
    };
}
function slowInterpolate(input, mixers) {
    var inputLength = input.length;
    var lastInputIndex = inputLength - 1;
    return function (v) {
        var mixerIndex = 0;
        var foundMixerIndex = false;
        if (v <= input[0]) {
            foundMixerIndex = true;
        } else if (v >= input[lastInputIndex]) {
            mixerIndex = lastInputIndex - 1;
            foundMixerIndex = true;
        }
        if (!foundMixerIndex) {
            var i = 1;
            for (; i < inputLength; i++) {
                if (input[i] > v || i === lastInputIndex) {
                    break;
                }
            }
            mixerIndex = i - 1;
        }
        var progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
        return mixers[mixerIndex](progressInRange);
    };
}
function interpolate(input, output, _a) {
    var _b = _a === void 0 ? {} : _a,
        _c = _b.clamp,
        isClamp = _c === void 0 ? true : _c,
        ease = _b.ease,
        mixer = _b.mixer;
    var inputLength = input.length;
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(inputLength === output.length, 'Both input and output ranges must be the same length');
    Object(hey_listen__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, 'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.');
    if (input[0] > input[inputLength - 1]) {
        input = [].concat(input);
        output = [].concat(output);
        input.reverse();
        output.reverse();
    }
    var mixers = createMixers(output, ease, mixer);
    var interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
    return isClamp ? function (v) {
        return interpolator(clamp(input[0], input[inputLength - 1], v));
    } : interpolator;
}

var reverseEasing = function (easing) {
    return function (p) {
        return 1 - easing(1 - p);
    };
};
var mirrorEasing = function (easing) {
    return function (p) {
        return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
    };
};
var createExpoIn = function (power) {
    return function (p) {
        return Math.pow(p, power);
    };
};
var createBackIn = function (power) {
    return function (p) {
        return p * p * ((power + 1) * p - power);
    };
};
var createAnticipate = function (power) {
    var backEasing = createBackIn(power);
    return function (p) {
        return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
    };
};

var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var BOUNCE_FIRST_THRESHOLD = 4.0 / 11.0;
var BOUNCE_SECOND_THRESHOLD = 8.0 / 11.0;
var BOUNCE_THIRD_THRESHOLD = 9.0 / 10.0;
var linear = function (p) {
    return p;
};
var easeIn = /*#__PURE__*/createExpoIn(2);
var easeOut = /*#__PURE__*/reverseEasing(easeIn);
var easeInOut = /*#__PURE__*/mirrorEasing(easeIn);
var circIn = function (p) {
    return 1 - Math.sin(Math.acos(p));
};
var circOut = /*#__PURE__*/reverseEasing(circIn);
var circInOut = /*#__PURE__*/mirrorEasing(circOut);
var backIn = /*#__PURE__*/createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = /*#__PURE__*/reverseEasing(backIn);
var backInOut = /*#__PURE__*/mirrorEasing(backIn);
var anticipate = /*#__PURE__*/createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
var ca = 4356.0 / 361.0;
var cb = 35442.0 / 1805.0;
var cc = 16061.0 / 1805.0;
var bounceOut = function (p) {
    if (p === 1 || p === 0) return p;
    var p2 = p * p;
    return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
};
var bounceIn = /*#__PURE__*/reverseEasing(bounceOut);
var bounceInOut = function (p) {
    return p < 0.5 ? 0.5 * (1.0 - bounceOut(1.0 - p * 2.0)) : 0.5 * bounceOut(p * 2.0 - 1.0) + 0.5;
};

function defaultEasing(values, easing) {
    return values.map(function () {
        return easing || easeInOut;
    }).splice(0, values.length - 1);
}
function defaultOffset(values) {
    var numValues = values.length;
    return values.map(function (_value, i) {
        return i !== 0 ? i / (numValues - 1) : 0;
    });
}
function convertOffsetToTimes(offset, duration) {
    return offset.map(function (o) {
        return o * duration;
    });
}
function keyframes(_a) {
    var _b = _a.from,
        from = _b === void 0 ? 0 : _b,
        _c = _a.to,
        to = _c === void 0 ? 1 : _c,
        ease = _a.ease,
        offset = _a.offset,
        _d = _a.duration,
        duration = _d === void 0 ? 300 : _d;
    var state = { done: false, value: from };
    var values = Array.isArray(to) ? to : [from, to];
    var times = convertOffsetToTimes(offset !== null && offset !== void 0 ? offset : defaultOffset(values), duration);
    function createInterpolator() {
        return interpolate(times, values, {
            ease: Array.isArray(ease) ? ease : defaultEasing(values, ease)
        });
    }
    var interpolator = createInterpolator();
    return {
        next: function (t) {
            state.value = interpolator(t);
            state.done = t >= duration;
            return state;
        },
        flipTarget: function () {
            values.reverse();
            interpolator = createInterpolator();
        }
    };
}

function decay(_a) {
    var _b = _a.velocity,
        velocity = _b === void 0 ? 0 : _b,
        _c = _a.from,
        from = _c === void 0 ? 0 : _c,
        _d = _a.power,
        power = _d === void 0 ? 0.8 : _d,
        _e = _a.timeConstant,
        timeConstant = _e === void 0 ? 350 : _e,
        _f = _a.restDelta,
        restDelta = _f === void 0 ? 0.5 : _f,
        modifyTarget = _a.modifyTarget;
    var state = { done: false, value: from };
    var amplitude = power * velocity;
    var ideal = from + amplitude;
    var target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    if (target !== ideal) amplitude = target - from;
    return {
        next: function (t) {
            var delta = -amplitude * Math.exp(-t / timeConstant);
            state.done = !(delta > restDelta || delta < -restDelta);
            state.value = state.done ? target : target + delta;
            return state;
        },
        flipTarget: function () {}
    };
}

var types = { keyframes: keyframes, spring: spring, decay: decay };
function detectAnimationFromOptions(config) {
    if (Array.isArray(config.to)) {
        return keyframes;
    } else if (types[config.type]) {
        return types[config.type];
    }
    var keys = new Set(Object.keys(config));
    if (keys.has("ease") || keys.has("duration") && !keys.has("dampingRatio")) {
        return keyframes;
    } else if (keys.has("dampingRatio") || keys.has("stiffness") || keys.has("mass") || keys.has("damping") || keys.has("restSpeed") || keys.has("restDelta")) {
        return spring;
    }
    return keyframes;
}

function loopElapsed(elapsed, duration, delay) {
    if (delay === void 0) {
        delay = 0;
    }
    return elapsed - duration - delay;
}
function reverseElapsed(elapsed, duration, delay, isForwardPlayback) {
    if (delay === void 0) {
        delay = 0;
    }
    if (isForwardPlayback === void 0) {
        isForwardPlayback = true;
    }
    return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay) : duration - (elapsed - duration) + delay;
}
function hasRepeatDelayElapsed(elapsed, duration, delay, isForwardPlayback) {
    return isForwardPlayback ? elapsed >= duration + delay : elapsed <= -delay;
}

var framesync = function (update) {
    var passTimestamp = function (_a) {
        var delta = _a.delta;
        return update(delta);
    };
    return {
        start: function () {
            return framesync__WEBPACK_IMPORTED_MODULE_3__["default"].update(passTimestamp, true, true);
        },
        stop: function () {
            return framesync__WEBPACK_IMPORTED_MODULE_3__["cancelSync"].update(passTimestamp);
        }
    };
};
function animate(_a) {
    var _b, _c;
    var from = _a.from,
        _d = _a.autoplay,
        autoplay = _d === void 0 ? true : _d,
        _e = _a.driver,
        driver = _e === void 0 ? framesync : _e,
        _f = _a.elapsed,
        elapsed = _f === void 0 ? 0 : _f,
        _g = _a.repeat,
        repeatMax = _g === void 0 ? 0 : _g,
        _h = _a.repeatType,
        repeatType = _h === void 0 ? "loop" : _h,
        _j = _a.repeatDelay,
        repeatDelay = _j === void 0 ? 0 : _j,
        onPlay = _a.onPlay,
        onStop = _a.onStop,
        onComplete = _a.onComplete,
        onRepeat = _a.onRepeat,
        onUpdate = _a.onUpdate,
        options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
    var to = options.to;
    var driverControls;
    var repeatCount = 0;
    var computedDuration = options.duration;
    var latest;
    var isComplete = false;
    var isForwardPlayback = true;
    var interpolateFromNumber;
    var animator = detectAnimationFromOptions(options);
    if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
        interpolateFromNumber = interpolate([0, 100], [from, to], {
            clamp: false
        });
        from = 0;
        to = 100;
    }
    var animation = animator(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { from: from, to: to }));
    function repeat() {
        repeatCount++;
        if (repeatType === "reverse") {
            isForwardPlayback = repeatCount % 2 === 0;
            elapsed = reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
        } else {
            elapsed = loopElapsed(elapsed, computedDuration, repeatDelay);
            if (repeatType === "mirror") animation.flipTarget();
        }
        isComplete = false;
        onRepeat && onRepeat();
    }
    function complete() {
        driverControls.stop();
        onComplete && onComplete();
    }
    function update(delta) {
        if (!isForwardPlayback) delta = -delta;
        elapsed += delta;
        if (!isComplete) {
            var state = animation.next(Math.max(0, elapsed));
            latest = state.value;
            if (interpolateFromNumber) latest = interpolateFromNumber(latest);
            isComplete = isForwardPlayback ? state.done : elapsed <= 0;
        }
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
        if (isComplete) {
            if (repeatCount === 0) computedDuration !== null && computedDuration !== void 0 ? computedDuration : computedDuration = elapsed;
            if (repeatCount < repeatMax) {
                hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
            } else {
                complete();
            }
        }
    }
    function play() {
        onPlay === null || onPlay === void 0 ? void 0 : onPlay();
        driverControls = driver(update);
        driverControls.start();
    }
    autoplay && play();
    return {
        stop: function () {
            onStop === null || onStop === void 0 ? void 0 : onStop();
            driverControls.stop();
        }
    };
}

function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}

function inertia(_a) {
    var _b = _a.from,
        from = _b === void 0 ? 0 : _b,
        _c = _a.velocity,
        velocity = _c === void 0 ? 0 : _c,
        min = _a.min,
        max = _a.max,
        _d = _a.power,
        power = _d === void 0 ? 0.8 : _d,
        _e = _a.timeConstant,
        timeConstant = _e === void 0 ? 750 : _e,
        _f = _a.bounceStiffness,
        bounceStiffness = _f === void 0 ? 500 : _f,
        _g = _a.bounceDamping,
        bounceDamping = _g === void 0 ? 10 : _g,
        _h = _a.restDelta,
        restDelta = _h === void 0 ? 1 : _h,
        modifyTarget = _a.modifyTarget,
        driver = _a.driver,
        onUpdate = _a.onUpdate,
        onComplete = _a.onComplete;
    var currentAnimation;
    function isOutOfBounds(v) {
        return min !== undefined && v < min || max !== undefined && v > max;
    }
    function boundaryNearest(v) {
        if (min === undefined) return max;
        if (max === undefined) return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    }
    function startAnimation(options) {
        currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
        currentAnimation = animate(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), { driver: driver, onUpdate: function (v) {
                var _a;
                onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
                (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
            }, onComplete: onComplete }));
    }
    function startSpring(options) {
        startAnimation(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({ type: "spring", stiffness: bounceStiffness, damping: bounceDamping, restDelta: restDelta }, options));
    }
    if (isOutOfBounds(from)) {
        startSpring({ from: from, velocity: velocity, to: boundaryNearest(from) });
    } else {
        var target = power * velocity + from;
        if (typeof modifyTarget !== "undefined") target = modifyTarget(target);
        var boundary_1 = boundaryNearest(target);
        var heading_1 = boundary_1 === min ? -1 : 1;
        var prev_1;
        var current_1;
        var checkBoundary = function (v) {
            prev_1 = current_1;
            current_1 = v;
            velocity = velocityPerSecond(v - prev_1, Object(framesync__WEBPACK_IMPORTED_MODULE_3__["getFrameData"])().delta);
            if (heading_1 === 1 && v > boundary_1 || heading_1 === -1 && v < boundary_1) {
                startSpring({ from: v, to: boundary_1, velocity: velocity });
            }
        };
        startAnimation({
            type: "decay",
            from: from,
            velocity: velocity,
            timeConstant: timeConstant,
            power: power,
            restDelta: restDelta,
            modifyTarget: modifyTarget,
            onUpdate: isOutOfBounds(target) ? checkBoundary : undefined
        });
    }
    return {
        stop: function () {
            return currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
        }
    };
}

var radiansToDegrees = function (radians) {
    return radians * 180 / Math.PI;
};

var angle = function (a, b) {
    if (b === void 0) {
        b = zeroPoint;
    }
    return radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
};

var applyOffset = function (from, to) {
    var hasReceivedFrom = true;
    if (to === undefined) {
        to = from;
        hasReceivedFrom = false;
    }
    return function (v) {
        if (hasReceivedFrom) {
            return v - from + to;
        } else {
            from = v;
            hasReceivedFrom = true;
            return to;
        }
    };
};

var identity = function (v) {
    return v;
};
var createAttractor = function (alterDisplacement) {
    if (alterDisplacement === void 0) {
        alterDisplacement = identity;
    }
    return function (constant, origin, v) {
        var displacement = origin - v;
        var springModifiedDisplacement = -(0 - constant + 1) * (0 - alterDisplacement(Math.abs(displacement)));
        return displacement <= 0 ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
    };
};
var attract = /*#__PURE__*/createAttractor();
var attractExpo = /*#__PURE__*/createAttractor(Math.sqrt);

var degreesToRadians = function (degrees) {
    return degrees * Math.PI / 180;
};

var isPoint = function (point) {
    return point.hasOwnProperty('x') && point.hasOwnProperty('y');
};

var isPoint3D = function (point) {
    return isPoint(point) && point.hasOwnProperty('z');
};

var distance1D = function (a, b) {
    return Math.abs(a - b);
};
function distance(a, b) {
    if (isNum(a) && isNum(b)) {
        return distance1D(a, b);
    } else if (isPoint(a) && isPoint(b)) {
        var xDelta = distance1D(a.x, b.x);
        var yDelta = distance1D(a.y, b.y);
        var zDelta = isPoint3D(a) && isPoint3D(b) ? distance1D(a.z, b.z) : 0;
        return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
    }
}

var pointFromVector = function (origin, angle, distance) {
    angle = degreesToRadians(angle);
    return {
        x: distance * Math.cos(angle) + origin.x,
        y: distance * Math.sin(angle) + origin.y
    };
};

var toDecimal = function (num, precision) {
    if (precision === void 0) {
        precision = 2;
    }
    precision = Math.pow(10, precision);
    return Math.round(num * precision) / precision;
};

var smoothFrame = function (prevValue, nextValue, duration, smoothing) {
    if (smoothing === void 0) {
        smoothing = 0;
    }
    return toDecimal(prevValue + duration * (nextValue - prevValue) / Math.max(smoothing, duration));
};

var smooth = function (strength) {
    if (strength === void 0) {
        strength = 50;
    }
    var previousValue = 0;
    var lastUpdated = 0;
    return function (v) {
        var currentFramestamp = Object(framesync__WEBPACK_IMPORTED_MODULE_3__["getFrameData"])().timestamp;
        var timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
        var newValue = timeDelta ? smoothFrame(previousValue, v, timeDelta, strength) : previousValue;
        lastUpdated = currentFramestamp;
        previousValue = newValue;
        return newValue;
    };
};

var snap = function (points) {
    if (typeof points === 'number') {
        return function (v) {
            return Math.round(v / points) * points;
        };
    } else {
        var i_1 = 0;
        var numPoints_1 = points.length;
        return function (v) {
            var lastDistance = Math.abs(points[0] - v);
            for (i_1 = 1; i_1 < numPoints_1; i_1++) {
                var point = points[i_1];
                var distance = Math.abs(point - v);
                if (distance === 0) return point;
                if (distance > lastDistance) return points[i_1 - 1];
                if (i_1 === numPoints_1 - 1) return point;
                lastDistance = distance;
            }
        };
    }
};

function velocityPerFrame(xps, frameDuration) {
    return xps / (1000 / frameDuration);
}

var wrap = function (min, max, v) {
    var rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

var a = function (a1, a2) {
    return 1.0 - 3.0 * a2 + 3.0 * a1;
};
var b = function (a1, a2) {
    return 3.0 * a2 - 6.0 * a1;
};
var c = function (a1) {
    return 3.0 * a1;
};
var calcBezier = function (t, a1, a2) {
    return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
};
var getSlope = function (t, a1, a2) {
    return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
};
var subdivisionPrecision = 0.0000001;
var subdivisionMaxIterations = 10;
function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX;
    var currentT;
    var i = 0;
    do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0.0) {
            aB = currentT;
        } else {
            aA = currentT;
        }
    } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
    return currentT;
}
var newtonIterations = 8;
var newtonMinSlope = 0.001;
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < newtonIterations; ++i) {
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) {
            return aGuessT;
        }
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
}
var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
function cubicBezier(mX1, mY1, mX2, mY2) {
    if (mX1 === mY1 && mX2 === mY2) return linear;
    var sampleValues = new Float32Array(kSplineTableSize);
    for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
    function getTForX(aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
            intervalStart += kSampleStepSize;
        }
        --currentSample;
        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= newtonMinSlope) {
            return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        } else if (initialSlope === 0.0) {
            return guessForT;
        } else {
            return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
    }
    return function (t) {
        return t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
    };
}

var steps = function (steps, direction) {
    if (direction === void 0) {
        direction = 'end';
    }
    return function (progress) {
        progress = direction === 'end' ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
        var expanded = progress * steps;
        var rounded = direction === 'end' ? Math.floor(expanded) : Math.ceil(expanded);
        return clamp(0, 1, rounded / steps);
    };
};




/***/ }),

/***/ "./node_modules/style-value-types/dist/style-value-types.es.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-value-types/dist/style-value-types.es.js ***!
  \*********************************************************************/
/*! exports provided: alpha, color, complex, degrees, hex, hsla, number, percent, progressPercentage, px, rgbUnit, rgba, scale, vh, vw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complex", function() { return complex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex", function() { return hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsla", function() { return hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percent", function() { return percent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressPercentage", function() { return progressPercentage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "px", function() { return px; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbUnit", function() { return rgbUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgba", function() { return rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vh", function() { return vh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vw", function() { return vw; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var clamp = function (min, max) { return function (v) {
    return Math.max(Math.min(v, max), min);
}; };
var sanitize = function (v) { return (v % 1 ? Number(v.toFixed(5)) : v); };
var floatRegex = /(-)?(\d[\d\.]*)/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;

var number = {
    test: function (v) { return typeof v === 'number'; },
    parse: parseFloat,
    transform: function (v) { return v; }
};
var alpha = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, number), { transform: clamp(0, 1) });
var scale = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, number), { default: 1 });

var createUnitType = function (unit) { return ({
    test: function (v) {
        return typeof v === 'string' && v.endsWith(unit) && v.split(' ').length === 1;
    },
    parse: parseFloat,
    transform: function (v) { return "" + v + unit; }
}); };
var degrees = createUnitType('deg');
var percent = createUnitType('%');
var px = createUnitType('px');
var vh = createUnitType('vh');
var vw = createUnitType('vw');
var progressPercentage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, percent), { parse: function (v) { return percent.parse(v) / 100; }, transform: function (v) { return percent.transform(v * 100); } });

var getValueFromFunctionString = function (value) {
    return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
};
var clampRgbUnit = clamp(0, 255);
var isRgba = function (v) { return v.red !== undefined; };
var isHsla = function (v) { return v.hue !== undefined; };
function getValuesAsArray(value) {
    return getValueFromFunctionString(value)
        .replace(/(,|\/)/g, ' ')
        .split(/ \s*/);
}
var splitColorValues = function (terms) {
    return function (v) {
        if (typeof v !== 'string')
            return v;
        var values = {};
        var valuesArray = getValuesAsArray(v);
        for (var i = 0; i < 4; i++) {
            values[terms[i]] =
                valuesArray[i] !== undefined ? parseFloat(valuesArray[i]) : 1;
        }
        return values;
    };
};
var rgbaTemplate = function (_a) {
    var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha = _b === void 0 ? 1 : _b;
    return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
};
var hslaTemplate = function (_a) {
    var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha = _b === void 0 ? 1 : _b;
    return "hsla(" + hue + ", " + saturation + ", " + lightness + ", " + alpha + ")";
};
var rgbUnit = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, number), { transform: function (v) { return Math.round(clampRgbUnit(v)); } });
function isColorString(color, colorType) {
    return color.startsWith(colorType) && singleColorRegex.test(color);
}
var rgba = {
    test: function (v) { return (typeof v === 'string' ? isColorString(v, 'rgb') : isRgba(v)); },
    parse: splitColorValues(['red', 'green', 'blue', 'alpha']),
    transform: function (_a) {
        var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha$1 = _b === void 0 ? 1 : _b;
        return rgbaTemplate({
            red: rgbUnit.transform(red),
            green: rgbUnit.transform(green),
            blue: rgbUnit.transform(blue),
            alpha: sanitize(alpha.transform(alpha$1))
        });
    }
};
var hsla = {
    test: function (v) { return (typeof v === 'string' ? isColorString(v, 'hsl') : isHsla(v)); },
    parse: splitColorValues(['hue', 'saturation', 'lightness', 'alpha']),
    transform: function (_a) {
        var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha$1 = _b === void 0 ? 1 : _b;
        return hslaTemplate({
            hue: Math.round(hue),
            saturation: percent.transform(sanitize(saturation)),
            lightness: percent.transform(sanitize(lightness)),
            alpha: sanitize(alpha.transform(alpha$1))
        });
    }
};
var hex = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, rgba), { test: function (v) { return typeof v === 'string' && isColorString(v, '#'); }, parse: function (v) {
        var r = '';
        var g = '';
        var b = '';
        if (v.length > 4) {
            r = v.substr(1, 2);
            g = v.substr(3, 2);
            b = v.substr(5, 2);
        }
        else {
            r = v.substr(1, 1);
            g = v.substr(2, 1);
            b = v.substr(3, 1);
            r += r;
            g += g;
            b += b;
        }
        return {
            red: parseInt(r, 16),
            green: parseInt(g, 16),
            blue: parseInt(b, 16),
            alpha: 1
        };
    } });
var color = {
    test: function (v) {
        return (typeof v === 'string' && singleColorRegex.test(v)) ||
            isRgba(v) ||
            isHsla(v);
    },
    parse: function (v) {
        if (rgba.test(v)) {
            return rgba.parse(v);
        }
        else if (hsla.test(v)) {
            return hsla.parse(v);
        }
        else if (hex.test(v)) {
            return hex.parse(v);
        }
        return v;
    },
    transform: function (v) {
        if (isRgba(v)) {
            return rgba.transform(v);
        }
        else if (isHsla(v)) {
            return hsla.transform(v);
        }
        return v;
    }
};

var COLOR_TOKEN = '${c}';
var NUMBER_TOKEN = '${n}';
var convertNumbersToZero = function (v) {
    return typeof v === 'number' ? 0 : v;
};
var complex = {
    test: function (v) {
        if (typeof v !== 'string' || !isNaN(v))
            return false;
        var numValues = 0;
        var foundNumbers = v.match(floatRegex);
        var foundColors = v.match(colorRegex);
        if (foundNumbers)
            numValues += foundNumbers.length;
        if (foundColors)
            numValues += foundColors.length;
        return numValues > 0;
    },
    parse: function (v) {
        var input = v;
        var parsed = [];
        var foundColors = input.match(colorRegex);
        if (foundColors) {
            input = input.replace(colorRegex, COLOR_TOKEN);
            parsed.push.apply(parsed, foundColors.map(color.parse));
        }
        var foundNumbers = input.match(floatRegex);
        if (foundNumbers) {
            parsed.push.apply(parsed, foundNumbers.map(number.parse));
        }
        return parsed;
    },
    createTransformer: function (prop) {
        var template = prop;
        var token = 0;
        var foundColors = prop.match(colorRegex);
        var numColors = foundColors ? foundColors.length : 0;
        if (foundColors) {
            for (var i = 0; i < numColors; i++) {
                template = template.replace(foundColors[i], COLOR_TOKEN);
                token++;
            }
        }
        var foundNumbers = template.match(floatRegex);
        var numNumbers = foundNumbers ? foundNumbers.length : 0;
        if (foundNumbers) {
            for (var i = 0; i < numNumbers; i++) {
                template = template.replace(foundNumbers[i], NUMBER_TOKEN);
                token++;
            }
        }
        return function (v) {
            var output = template;
            for (var i = 0; i < token; i++) {
                output = output.replace(i < numColors ? COLOR_TOKEN : NUMBER_TOKEN, i < numColors ? color.transform(v[i]) : sanitize(v[i]));
            }
            return output;
        };
    },
    getAnimatableNone: function (target) {
        var parsedTarget = complex.parse(target);
        var targetTransformer = complex.createTransformer(target);
        return targetTransformer(parsedTarget.map(convertNumbersToZero));
    }
};




/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/assets/accordion-arrow-e.svg":
/*!******************************************!*\
  !*** ./src/assets/accordion-arrow-e.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDE2IDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik04LjMyODQxIDguNzc0MjFDOC4wNTk2NSA4Ljc2ODIyIDcuNzkzMjEgOC42NTk2MiA3LjU5Mjg2IDguNDUwMjRMMS4yODg0NSAxLjg1ODQ0QzAuODg3NDA0IDEuNDM5MTIgMC45MDIyMiAwLjc3NDA4MSAxLjMyMTU0IDAuMzczMjA0QzEuNzQwNjkgLTAuMDI3Njc3MSAyLjQwNTU5IC0wLjAxMjg2MzMgMi44MDY2NyAwLjQwNjI5Mkw4LjM4NDkgNi4yMzkwOEwxNC4yMTc0IDAuNjYwNzE2QzE0LjYzNjcgMC4yNTk4MzkgMTUuMzAxNSAwLjI3NDY1MSAxNS43MDI0IDAuNjkzODAyQzE2LjEwMzYgMS4xMTI5NiAxNi4wODg4IDEuNzc4IDE1LjY2OTMgMi4xNzkwNEw5LjA3NzY2IDguNDgzNTJDOC44NjgwOSA4LjY4MzggOC41OTcwOCA4Ljc4MDIgOC4zMjg0MSA4Ljc3NDIxWiIgZmlsbD0iIzAyMDczRSIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./src/assets/accordion-arrow.svg":
/*!****************************************!*\
  !*** ./src/assets/accordion-arrow.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDkgMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik04LjY5ODg4IDcuNTAwMDNDOC42OTg4OCA3Ljc2ODg2IDguNTk2MjMgOC4wMzc2NSA4LjM5MTM3IDguMjQyNjFMMS45NDE2MyAxNC42OTIzQzEuNTMxMzUgMTUuMTAyNiAwLjg2NjE0MyAxNS4xMDI2IDAuNDU2MDI2IDE0LjY5MjNDMC4wNDU5MDgxIDE0LjI4MjIgMC4wNDU5MDgxIDEzLjYxNzEgMC40NTYwMjYgMTMuMjA2OEw2LjE2MzExIDcuNTAwMDNMMC40NTYyMjUgMS43OTMyNEMwLjA0NjEwNzQgMS4zODI5NSAwLjA0NjEwNzQgMC43MTc5NDggMC40NTYyMjUgMC4zMDc4NjNDMC44NjYzNDMgLTAuMTAyNjE5IDEuNTMxNTUgLTAuMTAyNjE5IDEuOTQxODMgMC4zMDc4NjNMOC4zOTE1NyA2Ljc1NzQ0QzguNTk2NDYgNi45NjI1IDguNjk4ODggNy4yMzEyOSA4LjY5ODg4IDcuNTAwMDNaIiBmaWxsPSIjMDIwNzNFIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/assets/images/server-rack.png":
false,

/***/ "./src/components/accordion/accordion.js":
/*!***********************************************!*\
  !*** ./src/components/accordion/accordion.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _base_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-accordion */ "./src/components/accordion/base-accordion.js");
/* harmony import */ var assets_accordion_arrow_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/accordion-arrow.svg */ "./src/assets/accordion-arrow.svg");
/* harmony import */ var assets_accordion_arrow_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_accordion_arrow_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_accordion_arrow_e_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/accordion-arrow-e.svg */ "./src/assets/accordion-arrow-e.svg");
/* harmony import */ var assets_accordion_arrow_e_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_accordion_arrow_e_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared */ "./src/components/accordion/shared.js");


var _jsxFileName = "D:\\Portal E-Device\\Sample1\\nextjs_landing_page\\nextjs_landing_page\\src\\components\\accordion\\accordion.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






function Accordion(_ref) {
  var _this = this;

  var items = _ref.items,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["items"]);

  var openIcon = __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: assets_accordion_arrow_e_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "open icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 20
    }
  });

  var closeIcon = __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: assets_accordion_arrow_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "close icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  });

  return __jsx(_base_accordion__WEBPACK_IMPORTED_MODULE_4__["BaseAccordion"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    stateReducer: Object(_shared__WEBPACK_IMPORTED_MODULE_7__["combineReducers"])(_shared__WEBPACK_IMPORTED_MODULE_7__["single"], _shared__WEBPACK_IMPORTED_MODULE_7__["preventClose"])
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }), function (_ref2) {
    var openIndexes = _ref2.openIndexes,
        handleItemClick = _ref2.handleItemClick;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, items.map(function (item, index) {
      return __jsx(_shared__WEBPACK_IMPORTED_MODULE_7__["AccordionItem"], {
        key: item.title,
        isOpen: openIndexes.includes(index),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 13
        }
      }, __jsx(_shared__WEBPACK_IMPORTED_MODULE_7__["AccordionButton"], {
        onClick: function onClick() {
          return handleItemClick(index);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 15
        }
      }, __jsx("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }
      }, openIndexes.includes(index) ? openIcon : closeIcon), item.title), __jsx(_shared__WEBPACK_IMPORTED_MODULE_7__["AccordionContents"], {
        isOpen: openIndexes.includes(index),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 15
        }
      }, item.contents));
    }));
  });
}
_c = Accordion;

var _c;

$RefreshReg$(_c, "Accordion");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/accordion/base-accordion.js":
/*!****************************************************!*\
  !*** ./src/components/accordion/base-accordion.js ***!
  \****************************************************/
/*! exports provided: BaseAccordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAccordion", function() { return BaseAccordion; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var BaseAccordion = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(BaseAccordion, _React$Component);

  var _super = _createSuper(BaseAccordion);

  function BaseAccordion() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BaseAccordion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      openIndexes: [0]
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleItemClick", function (index) {
      _this.internalSetState(function (state) {
        var closing = state.openIndexes.includes(index);
        return {
          type: closing ? 'closing' : 'opening',
          openIndexes: closing ? state.openIndexes.filter(function (i) {
            return i !== index;
          }) : [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.openIndexes), [index])
        };
      });

      console.log('clicked');
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(BaseAccordion, [{
    key: "getState",
    value: function getState() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
      return {
        openIndexes: this.props.openIndexes === undefined ? state.openIndexes : this.props.openIndexes
      };
    }
  }, {
    key: "internalSetState",
    value: function internalSetState(changes) {
      var _this2 = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var allChanges;
      this.setState(function (state) {
        var actualState = _this2.getState(state);

        var changesObject = typeof changes === 'function' ? changes(actualState) : changes;
        allChanges = _this2.props.stateReducer(actualState, changesObject);
        return allChanges;
      }, function () {
        _this2.props.onStateChange(allChanges);

        callback();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children({
        openIndexes: this.getState().openIndexes,
        handleItemClick: this.handleItemClick
      });
    }
  }]);

  return BaseAccordion;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(BaseAccordion, "defaultProps", {
  stateReducer: function stateReducer(state, changes) {
    return changes;
  },
  onStateChange: function onStateChange() {}
});



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/accordion/shared.js":
/*!********************************************!*\
  !*** ./src/components/accordion/shared.js ***!
  \********************************************/
/*! exports provided: AccordionButton, AccordionContents, AccordionItem, preventClose, single, combineReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionButton", function() { return AccordionButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionContents", function() { return AccordionContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return AccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventClose", function() { return preventClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");




var _this = undefined,
    _jsxFileName = "D:\\Portal E-Device\\Sample1\\nextjs_landing_page\\nextjs_landing_page\\src\\components\\accordion\\shared.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/** @jsx jsx */


var AccordionButton = function AccordionButton(_ref) {
  var children = _ref.children,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: {
      display: 'flex',
      alignItems: 'center',
      letterSpacing: '-0.2px',
      cursor: 'pointer',
      fontSize: '17px',
      lineHeight: 1.5,
      fontWeight: '500',
      border: 'none',
      paddingTop: '10px',
      paddingBottom: '10px',
      paddingLeft: '15px',
      paddingRight: '30px',
      position: 'relative',
      color: '#0F2137',
      '@media(min-width: 768px)': {
        paddingLeft: '30px',
        paddingRight: '30px',
        paddingTop: '20px',
        paddingBottom: '20px',
        fontSize: '15px'
      },
      ':focus': {
        outline: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.4)'
      },
      span: {
        position: 'absolute',
        top: '50%',
        right: '20px',
        transform: 'translateY(-50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        color: '#fff',
        '@media(min-width: 768px)': {
          right: '30px'
        },
        img: {
          width: '7px',
          '@media(min-width: 768px)': {
            width: 'auto'
          }
        }
      }
    }
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }), children);
};
_c = AccordionButton;
var variants = {
  open: {
    // maxHeight: 200,
    height: 'auto',
    marginBottom: 10,
    '@media(min-width: 768px)': {
      marginBottom: 30
    }
  },
  closed: {
    height: 0,
    marginTop: 0,
    marginBottom: 0
  }
};
function AccordionContents(_ref2) {
  var isOpen = _ref2.isOpen,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, ["isOpen"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].div, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    initial: "closed",
    animate: isOpen ? 'open' : 'closed',
    variants: variants,
    css: {
      overflowY: 'hidden',
      fontSize: 15,
      padding: '0 15px',
      paddingRight: '40px',
      lineHeight: '30px',
      color: '#343D48',
      '@media(min-width: 768px)': {
        padding: '0 30px'
      }
    }
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }));
}
_c2 = AccordionContents;
var AccordionItem = function AccordionItem(_ref3) {
  var isOpen = _ref3.isOpen,
      children = _ref3.children,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, ["isOpen", "children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    css: {
      borderRadius: 5,
      marginBottom: 10,
      border: '1px solid #EDEFF2',
      padding: 0,
      overflow: 'hidden'
    }
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 3
    }
  }), children);
};
_c3 = AccordionItem;
var preventClose = function preventClose(state, changes) {
  return changes.type === 'closing' && state.openIndexes.length < 2 ? _objectSpread(_objectSpread({}, changes), {}, {
    openIndexes: state.openIndexes
  }) : changes;
};
var single = function single(state, changes) {
  return changes.type === 'opening' ? _objectSpread(_objectSpread({}, changes), {}, {
    openIndexes: changes.openIndexes.slice(-1)
  }) : changes;
};
var combineReducers = function combineReducers() {
  for (var _len = arguments.length, reducers = new Array(_len), _key = 0; _key < _len; _key++) {
    reducers[_key] = arguments[_key];
  }

  return function (state, changes) {
    return reducers.reduce(function (acc, reducer) {
      return reducer(state, acc);
    }, changes);
  };
};

var _c, _c2, _c3;

$RefreshReg$(_c, "AccordionButton");
$RefreshReg$(_c2, "AccordionContents");
$RefreshReg$(_c3, "AccordionItem");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/image.js":
false,

/***/ "./src/sections/contact.js":
/*!*********************************!*\
  !*** ./src/sections/contact.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/accordion/accordion */ "./src/components/accordion/accordion.js");
var _jsxFileName = "D:\\Portal E-Device\\Sample1\\nextjs_landing_page\\nextjs_landing_page\\src\\sections\\contact.js",
    _this = undefined;


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var accordionData = [{
  isExpanded: false,
  title: 'How much does it cost to be a credit card merchant?',
  contents: __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend")
}, {
  isExpanded: true,
  title: 'How can I open a merchant account?',
  contents: __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend")
}, {
  isExpanded: false,
  title: 'How long does the application take?',
  contents: __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend")
}, {
  isExpanded: false,
  title: 'Can I make payment outside of Hong Kong?',
  contents: __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend")
}, {
  isExpanded: false,
  title: 'How do I get the payment complete?',
  contents: __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend")
}];

var Contact = function Contact() {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, __jsx(_components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Beberapa pertanyaan umum",
    title: "Frequently Asked Question",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: styles.flex,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.faqWrapper,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx(components_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: accordionData,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, "Punya pertanyaan lain?"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, "Silahkan ajukan pertanyaan anda melalui halaman  ", __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "/contact",
    sx: styles.contact,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 64
    }
  }, "Contact Us"), ".")))));
};

_c = Contact;
/* harmony default export */ __webpack_exports__["default"] = (Contact);
var styles = {
  contact: {
    textDecoration: 'none',
    color: '#0C606A',
    '&:hover': {
      color: '#000'
    }
  },
  flex: {
    flexWrap: 'wrap',
    flexDirection: ['column', null, null, null, null, 'row-reverse'],
    pb: ['70px', null, null, null, '90px', null, '130px']
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 33.333%'],
    maxWidth: ['100%', null, null, '450px', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['0px', null, null, null, '0'],
    textAlign: ['center', null, null, null, null, 'left'],
    mt: ['40px', null, null, null, null, '0'],
    h3: {
      fontSize: ['23px', null, null, null, '24px'],
      lineHeight: [1.5, null, null, null, 1.67],
      color: 'black',
      fontWeight: 700,
      letterSpacing: '-1.5px',
      mt: '-5px',
      pr: ['0', null, null, null, null, '30px']
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48',
      opacity: 0.7,
      mt: '10px',
      pr: ['0', null, null, null, null, '80px']
    }
  },
  askButton: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#02073E',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    p: '6.5px 19px',
    letterSpacing: '-0.16px',
    mt: '25px',
    transition: 'all 500ms ease',
    '&:hover': {
      opacity: 0.8
    }
  },
  faqWrapper: {
    flex: ['0 0 100%', null, null, null, '0 0 66.666%']
  }
};

var _c;

$RefreshReg$(_c, "Contact");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2ZyYW1lci1tb3Rpb24vZGlzdC9mcmFtZXItbW90aW9uLmVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2Rpc3QvZnJhbWVzeW5jLmVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaGV5LWxpc3Rlbi9kaXN0L2hleS1saXN0ZW4uZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wb3Btb3Rpb24vZGlzdC9wb3Btb3Rpb24uZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zdHlsZS12YWx1ZS10eXBlcy9kaXN0L3N0eWxlLXZhbHVlLXR5cGVzLmVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvYXNzZXRzL2FjY29yZGlvbi1hcnJvdy1lLnN2ZyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Fzc2V0cy9hY2NvcmRpb24tYXJyb3cuc3ZnIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYmFzZS1hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zZWN0aW9ucy9jb250YWN0LmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvbiIsIml0ZW1zIiwicHJvcHMiLCJvcGVuSWNvbiIsImFjY29yZGlvbkljb25PcGVuIiwiY2xvc2VJY29uIiwiYWNjb3JkaW9uSWNvbkNsb3NlIiwiY29tYmluZVJlZHVjZXJzIiwic2luZ2xlIiwicHJldmVudENsb3NlIiwib3BlbkluZGV4ZXMiLCJoYW5kbGVJdGVtQ2xpY2siLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0aXRsZSIsImluY2x1ZGVzIiwiY29udGVudHMiLCJCYXNlQWNjb3JkaW9uIiwiaW50ZXJuYWxTZXRTdGF0ZSIsInN0YXRlIiwiY2xvc2luZyIsInR5cGUiLCJmaWx0ZXIiLCJpIiwiY29uc29sZSIsImxvZyIsInVuZGVmaW5lZCIsImNoYW5nZXMiLCJjYWxsYmFjayIsImFsbENoYW5nZXMiLCJzZXRTdGF0ZSIsImFjdHVhbFN0YXRlIiwiZ2V0U3RhdGUiLCJjaGFuZ2VzT2JqZWN0Iiwic3RhdGVSZWR1Y2VyIiwib25TdGF0ZUNoYW5nZSIsImNoaWxkcmVuIiwiUmVhY3QiLCJDb21wb25lbnQiLCJBY2NvcmRpb25CdXR0b24iLCJyZXN0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJsZXR0ZXJTcGFjaW5nIiwiY3Vyc29yIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCIsImJvcmRlciIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJwb3NpdGlvbiIsImNvbG9yIiwib3V0bGluZSIsImJhY2tncm91bmRDb2xvciIsInNwYW4iLCJ0b3AiLCJyaWdodCIsInRyYW5zZm9ybSIsImp1c3RpZnlDb250ZW50IiwiYm9yZGVyUmFkaXVzIiwiaW1nIiwid2lkdGgiLCJ2YXJpYW50cyIsIm9wZW4iLCJoZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJjbG9zZWQiLCJtYXJnaW5Ub3AiLCJBY2NvcmRpb25Db250ZW50cyIsImlzT3BlbiIsIm92ZXJmbG93WSIsInBhZGRpbmciLCJBY2NvcmRpb25JdGVtIiwib3ZlcmZsb3ciLCJsZW5ndGgiLCJzbGljZSIsInJlZHVjZXJzIiwicmVkdWNlIiwiYWNjIiwicmVkdWNlciIsImFjY29yZGlvbkRhdGEiLCJpc0V4cGFuZGVkIiwiQ29udGFjdCIsInN0eWxlcyIsImZsZXgiLCJmYXFXcmFwcGVyIiwiY29udGVudCIsImNvbnRhY3QiLCJ0ZXh0RGVjb3JhdGlvbiIsImZsZXhXcmFwIiwiZmxleERpcmVjdGlvbiIsInBiIiwibWF4V2lkdGgiLCJteCIsIm1iIiwidGV4dEFsaWduIiwibXQiLCJoMyIsInByIiwicCIsIm9wYWNpdHkiLCJhc2tCdXR0b24iLCJ2ZXJ0aWNhbEFsaWduIiwidHJhbnNpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBZTtBQUNmOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBa0Q7QUFDbkM7QUFDZixpQ0FBaUMsaUVBQWdCO0FBQ2pELEM7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixlQUFlO0FBQzlDLDJCQUEyQixXQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG9EQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFEQUFHO0FBQ3pCO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsb0RBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvREFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxxREFBRztBQUNqQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwREFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxnQ0FBZ0M7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxHQUFHLHlDQUF5QztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDREQUFTO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFRO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsUUFBUTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZ0NBQWdDLEVBQUU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsNkJBQTZCLEVBQUU7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG9EQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LGtCQUFrQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDREQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsSUFBSTtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLElBQUk7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDLElBQUk7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRUFBQztBQUNnQjs7Ozs7Ozs7Ozs7OztBQ3BJcEM7QUFBQTtBQUFBO0FBQUEsMkJBQTJCO0FBQzNCLDZCQUE2QjtBQUM3QixJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRThCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlEQUFJO0FBQ3ZCLFNBQVM7QUFDVDtBQUNBLG1CQUFtQixvREFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9EQUFNO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsc0RBQVEsQ0FBQyxzREFBUSxHQUFHLGFBQWEscUJBQXFCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsc0RBQVEsQ0FBQyxzREFBUSxHQUFHLGFBQWE7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSwwQkFBMEI7QUFDdkM7QUFDQTtBQUNBLHVCQUF1QixzREFBUSxFQUFFLDJGQUEyRjtBQUM1SDtBQUNBO0FBQ0EscUJBQXFCLDREQUE0RDtBQUNqRixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELDhEQUFZO0FBQ2pFO0FBQ0EsNkJBQTZCLDhDQUE4QztBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsOERBQVk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtQkFBbUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LEVBQUUsT0FITDtBQUlGUCxnQkFBVSxFQUFFLEdBSlY7QUFLRkosbUJBQWEsRUFBRSxRQUxiO0FBTUZ3RCxRQUFFLEVBQUUsTUFORjtBQU9GRSxRQUFFLEVBQUUsQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLElBQVosRUFBa0IsSUFBbEIsRUFBd0IsSUFBeEIsRUFBOEIsTUFBOUI7QUFQRixLQVBHO0FBZ0JQQyxLQUFDLEVBQUU7QUFDRHpELGNBQVEsRUFBRSxNQURUO0FBRURDLGdCQUFVLEVBQUUsSUFGWDtBQUdEUSxXQUFLLEVBQUUsU0FITjtBQUlEaUQsYUFBTyxFQUFFLEdBSlI7QUFLREosUUFBRSxFQUFFLE1BTEg7QUFNREUsUUFBRSxFQUFFLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQThCLE1BQTlCO0FBTkg7QUFoQkksR0FkSTtBQXVDYkcsV0FBUyxFQUFFO0FBQ1QvRCxXQUFPLEVBQUUsY0FEQTtBQUVUZ0UsaUJBQWEsRUFBRSxRQUZOO0FBR1RqRCxtQkFBZSxFQUFFLFNBSFI7QUFJVEYsU0FBSyxFQUFFLE1BSkU7QUFLVFEsZ0JBQVksRUFBRSxLQUxMO0FBTVRqQixZQUFRLEVBQUUsTUFORDtBQU9URSxjQUFVLEVBQUUsR0FQSDtBQVFUdUQsS0FBQyxFQUFFLFlBUk07QUFTVDNELGlCQUFhLEVBQUUsU0FUTjtBQVVUd0QsTUFBRSxFQUFFLE1BVks7QUFXVE8sY0FBVSxFQUFFLGdCQVhIO0FBWVQsZUFBVztBQUNUSCxhQUFPLEVBQUU7QUFEQTtBQVpGLEdBdkNFO0FBdURiZixZQUFVLEVBQUU7QUFDVkQsUUFBSSxFQUFFLENBQUMsVUFBRCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsRUFBK0IsYUFBL0I7QUFESTtBQXZEQyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNjNDc3YjgwMDY3ODlmOTFiMWQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsImltcG9ydCB7IF9fdmFsdWVzLCBfX3JlYWQsIF9fYXNzaWduLCBfX3Jlc3QsIF9fc3ByZWFkLCBfX2V4dGVuZHMgfSBmcm9tICd0c2xpYic7XG5pbXBvcnQgc3luYywgeyBnZXRGcmFtZURhdGEsIGNhbmNlbFN5bmMgfSBmcm9tICdmcmFtZXN5bmMnO1xuaW1wb3J0IHsgdmVsb2NpdHlQZXJTZWNvbmQsIGN1YmljQmV6aWVyLCBsaW5lYXIsIGVhc2VJbiwgZWFzZUluT3V0LCBlYXNlT3V0LCBjaXJjSW4sIGNpcmNJbk91dCwgY2lyY091dCwgYmFja0luLCBiYWNrSW5PdXQsIGJhY2tPdXQsIGFudGljaXBhdGUsIGJvdW5jZUluLCBib3VuY2VJbk91dCwgYm91bmNlT3V0LCBpbmVydGlhLCBhbmltYXRlIGFzIGFuaW1hdGUkMSwgbWl4LCBjbGFtcCwgZGlzdGFuY2UsIHByb2dyZXNzLCBwaXBlLCBpbnRlcnBvbGF0ZSwgd3JhcCB9IGZyb20gJ3BvcG1vdGlvbic7XG5pbXBvcnQgeyBpbnZhcmlhbnQsIHdhcm5pbmcgfSBmcm9tICdoZXktbGlzdGVuJztcbmltcG9ydCB7IGNvbXBsZXgsIG51bWJlciwgY29sb3IsIHB4LCBwZXJjZW50LCBkZWdyZWVzLCB2dywgdmgsIHNjYWxlLCBhbHBoYSwgcHJvZ3Jlc3NQZXJjZW50YWdlIH0gZnJvbSAnc3R5bGUtdmFsdWUtdHlwZXMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCBjcmVhdGVFbGVtZW50LCB1c2VNZW1vLCB1c2VMYXlvdXRFZmZlY3QsIGZvcndhcmRSZWYsIEZyYWdtZW50LCBDb21wb25lbnQgYXMgQ29tcG9uZW50JDEsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgY2xvbmVFbGVtZW50LCBDaGlsZHJlbiwgaXNWYWxpZEVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5cbnZhciBpc1JlZk9iamVjdCA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICByZXR1cm4gdHlwZW9mIHJlZiA9PT0gXCJvYmplY3RcIiAmJiByZWYuaGFzT3duUHJvcGVydHkoXCJjdXJyZW50XCIpO1xufTtcblxuLyoqXG4gKiBBIGdlbmVyaWMgc3Vic2NyaXB0aW9uIG1hbmFnZXIuXG4gKi9cbnZhciBTdWJzY3JpcHRpb25NYW5hZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN1YnNjcmlwdGlvbk1hbmFnZXIoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IG5ldyBTZXQoKTtcbiAgICB9XG4gICAgU3Vic2NyaXB0aW9uTWFuYWdlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChoYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZvaWQgX3RoaXMuc3Vic2NyaXB0aW9ucy5kZWxldGUoaGFuZGxlcik7IH07XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb25NYW5hZ2VyLnByb3RvdHlwZS5ub3RpZnkgPSBmdW5jdGlvbiAoXG4gICAgLyoqXG4gICAgICogVXNpbmcgLi4uYXJncyB3b3VsZCBiZSBwcmVmZXJhYmxlIGJ1dCBpdCdzIGFycmF5IGNyZWF0aW9uIGFuZCB0aGlzXG4gICAgICogbWlnaHQgYmUgZmlyZWQgZXZlcnkgZnJhbWUuXG4gICAgICovXG4gICAgYSwgYiwgYykge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgaWYgKCF0aGlzLnN1YnNjcmlwdGlvbnMuc2l6ZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXModGhpcy5zdWJzY3JpcHRpb25zKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihhLCBiLCBjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb25NYW5hZ2VyLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmNsZWFyKCk7XG4gICAgfTtcbiAgICByZXR1cm4gU3Vic2NyaXB0aW9uTWFuYWdlcjtcbn0oKSk7XG5cbnZhciBpc0Zsb2F0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KHZhbHVlKSk7XG59O1xuLyoqXG4gKiBgTW90aW9uVmFsdWVgIGlzIHVzZWQgdG8gdHJhY2sgdGhlIHN0YXRlIGFuZCB2ZWxvY2l0eSBvZiBtb3Rpb24gdmFsdWVzLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xudmFyIE1vdGlvblZhbHVlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBpbml0IC0gVGhlIGluaXRpYXRpbmcgdmFsdWVcbiAgICAgKiBAcGFyYW0gY29uZmlnIC0gT3B0aW9uYWwgY29uZmlndXJhdGlvbiBvcHRpb25zXG4gICAgICpcbiAgICAgKiAtICBgdHJhbnNmb3JtZXJgOiBBIGZ1bmN0aW9uIHRvIHRyYW5zZm9ybSBpbmNvbWluZyB2YWx1ZXMgd2l0aC5cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIE1vdGlvblZhbHVlKGluaXQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIER1cmF0aW9uLCBpbiBtaWxsaXNlY29uZHMsIHNpbmNlIGxhc3QgdXBkYXRpbmcgZnJhbWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50aW1lRGVsdGEgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGltZXN0YW1wIG9mIHRoZSBsYXN0IHRpbWUgdGhpcyBgTW90aW9uVmFsdWVgIHdhcyB1cGRhdGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubGFzdFVwZGF0ZWQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogRnVuY3Rpb25zIHRvIG5vdGlmeSB3aGVuIHRoZSBgTW90aW9uVmFsdWVgIHVwZGF0ZXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51cGRhdGVTdWJzY3JpYmVycyA9IG5ldyBTdWJzY3JpcHRpb25NYW5hZ2VyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGdW5jdGlvbnMgdG8gbm90aWZ5IHdoZW4gdGhlIGBNb3Rpb25WYWx1ZWAgdXBkYXRlcyBhbmQgYHJlbmRlcmAgaXMgc2V0IHRvIGB0cnVlYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnJlbmRlclN1YnNjcmliZXJzID0gbmV3IFN1YnNjcmlwdGlvbk1hbmFnZXIoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRyYWNrcyB3aGV0aGVyIHRoaXMgdmFsdWUgY2FuIG91dHB1dCBhIHZlbG9jaXR5LiBDdXJyZW50bHkgdGhpcyBpcyBvbmx5IHRydWVcbiAgICAgICAgICogaWYgdGhlIHZhbHVlIGlzIG51bWVyaWNhbCwgYnV0IHdlIG1pZ2h0IGJlIGFibGUgdG8gd2lkZW4gdGhlIHNjb3BlIGhlcmUgYW5kIHN1cHBvcnRcbiAgICAgICAgICogb3RoZXIgdmFsdWUgdHlwZXMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jYW5UcmFja1ZlbG9jaXR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXBkYXRlQW5kTm90aWZ5ID0gZnVuY3Rpb24gKHYsIHJlbmRlcikge1xuICAgICAgICAgICAgaWYgKHJlbmRlciA9PT0gdm9pZCAwKSB7IHJlbmRlciA9IHRydWU7IH1cbiAgICAgICAgICAgIF90aGlzLnByZXYgPSBfdGhpcy5jdXJyZW50O1xuICAgICAgICAgICAgX3RoaXMuY3VycmVudCA9IHY7XG4gICAgICAgICAgICBpZiAoX3RoaXMucHJldiAhPT0gX3RoaXMuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVN1YnNjcmliZXJzLm5vdGlmeShfdGhpcy5jdXJyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZW5kZXIpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW5kZXJTdWJzY3JpYmVycy5ub3RpZnkoX3RoaXMuY3VycmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgdGltZXN0YW1wXG4gICAgICAgICAgICB2YXIgX2EgPSBnZXRGcmFtZURhdGEoKSwgZGVsdGEgPSBfYS5kZWx0YSwgdGltZXN0YW1wID0gX2EudGltZXN0YW1wO1xuICAgICAgICAgICAgaWYgKF90aGlzLmxhc3RVcGRhdGVkICE9PSB0aW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy50aW1lRGVsdGEgPSBkZWx0YTtcbiAgICAgICAgICAgICAgICBfdGhpcy5sYXN0VXBkYXRlZCA9IHRpbWVzdGFtcDtcbiAgICAgICAgICAgICAgICBzeW5jLnBvc3RSZW5kZXIoX3RoaXMuc2NoZWR1bGVWZWxvY2l0eUNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNjaGVkdWxlIGEgdmVsb2NpdHkgY2hlY2sgZm9yIHRoZSBuZXh0IGZyYW1lLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGlzIGFuIGluc3RhbmNlZCBhbmQgYm91bmQgZnVuY3Rpb24gdG8gcHJldmVudCBnZW5lcmF0aW5nIGEgbmV3XG4gICAgICAgICAqIGZ1bmN0aW9uIG9uY2UgcGVyIGZyYW1lLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2NoZWR1bGVWZWxvY2l0eUNoZWNrID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc3luYy5wb3N0UmVuZGVyKF90aGlzLnZlbG9jaXR5Q2hlY2spOyB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVXBkYXRlcyBgcHJldmAgd2l0aCBgY3VycmVudGAgaWYgdGhlIHZhbHVlIGhhc24ndCBiZWVuIHVwZGF0ZWQgdGhpcyBmcmFtZS5cbiAgICAgICAgICogVGhpcyBlbnN1cmVzIHZlbG9jaXR5IGNhbGN1bGF0aW9ucyByZXR1cm4gYDBgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGlzIGFuIGluc3RhbmNlZCBhbmQgYm91bmQgZnVuY3Rpb24gdG8gcHJldmVudCBnZW5lcmF0aW5nIGEgbmV3XG4gICAgICAgICAqIGZ1bmN0aW9uIG9uY2UgcGVyIGZyYW1lLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMudmVsb2NpdHlDaGVjayA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIHRpbWVzdGFtcCA9IF9hLnRpbWVzdGFtcDtcbiAgICAgICAgICAgIGlmICh0aW1lc3RhbXAgIT09IF90aGlzLmxhc3RVcGRhdGVkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucHJldiA9IF90aGlzLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0KGluaXQsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jYW5UcmFja1ZlbG9jaXR5ID0gaXNGbG9hdCh0aGlzLmN1cnJlbnQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIG5vdGlmaWVkIHdoZW4gdGhlIGBNb3Rpb25WYWx1ZWAgaXMgdXBkYXRlZC5cbiAgICAgKlxuICAgICAqIEl0IHJldHVybnMgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCwgd2lsbCBjYW5jZWwgdGhlIHN1YnNjcmlwdGlvbi5cbiAgICAgKlxuICAgICAqIFdoZW4gY2FsbGluZyBgb25DaGFuZ2VgIGluc2lkZSBhIFJlYWN0IGNvbXBvbmVudCwgaXQgc2hvdWxkIGJlIHdyYXBwZWQgd2l0aCB0aGVcbiAgICAgKiBgdXNlRWZmZWN0YCBob29rLiBBcyBpdCByZXR1cm5zIGFuIHVuc3Vic2NyaWJlIGZ1bmN0aW9uLCB0aGlzIHNob3VsZCBiZSByZXR1cm5lZFxuICAgICAqIGZyb20gdGhlIGB1c2VFZmZlY3RgIGZ1bmN0aW9uIHRvIGVuc3VyZSB5b3UgZG9uJ3QgYWRkIGR1cGxpY2F0ZSBzdWJzY3JpYmVycy4uXG4gICAgICpcbiAgICAgKiBAbGlicmFyeVxuICAgICAqXG4gICAgICogYGBganN4XG4gICAgICogZnVuY3Rpb24gTXlDb21wb25lbnQoKSB7XG4gICAgICogICBjb25zdCB4ID0gdXNlTW90aW9uVmFsdWUoMClcbiAgICAgKiAgIGNvbnN0IHkgPSB1c2VNb3Rpb25WYWx1ZSgwKVxuICAgICAqICAgY29uc3Qgb3BhY2l0eSA9IHVzZU1vdGlvblZhbHVlKDEpXG4gICAgICpcbiAgICAgKiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICogICAgIGZ1bmN0aW9uIHVwZGF0ZU9wYWNpdHkoKSB7XG4gICAgICogICAgICAgY29uc3QgbWF4WFkgPSBNYXRoLm1heCh4LmdldCgpLCB5LmdldCgpKVxuICAgICAqICAgICAgIGNvbnN0IG5ld09wYWNpdHkgPSB0cmFuc2Zvcm0obWF4WFksIFswLCAxMDBdLCBbMSwgMF0pXG4gICAgICogICAgICAgb3BhY2l0eS5zZXQobmV3T3BhY2l0eSlcbiAgICAgKiAgICAgfVxuICAgICAqXG4gICAgICogICAgIGNvbnN0IHVuc3Vic2NyaWJlWCA9IHgub25DaGFuZ2UodXBkYXRlT3BhY2l0eSlcbiAgICAgKiAgICAgY29uc3QgdW5zdWJzY3JpYmVZID0geS5vbkNoYW5nZSh1cGRhdGVPcGFjaXR5KVxuICAgICAqXG4gICAgICogICAgIHJldHVybiAoKSA9PiB7XG4gICAgICogICAgICAgdW5zdWJzY3JpYmVYKClcbiAgICAgKiAgICAgICB1bnN1YnNjcmliZVkoKVxuICAgICAqICAgICB9XG4gICAgICogICB9LCBbXSlcbiAgICAgKlxuICAgICAqICAgcmV0dXJuIDxGcmFtZSB4PXt4fSAvPlxuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBtb3Rpb25cbiAgICAgKlxuICAgICAqIGBgYGpzeFxuICAgICAqIGV4cG9ydCBjb25zdCBNeUNvbXBvbmVudCA9ICgpID0+IHtcbiAgICAgKiAgIGNvbnN0IHggPSB1c2VNb3Rpb25WYWx1ZSgwKVxuICAgICAqICAgY29uc3QgeSA9IHVzZU1vdGlvblZhbHVlKDApXG4gICAgICogICBjb25zdCBvcGFjaXR5ID0gdXNlTW90aW9uVmFsdWUoMSlcbiAgICAgKlxuICAgICAqICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgKiAgICAgZnVuY3Rpb24gdXBkYXRlT3BhY2l0eSgpIHtcbiAgICAgKiAgICAgICBjb25zdCBtYXhYWSA9IE1hdGgubWF4KHguZ2V0KCksIHkuZ2V0KCkpXG4gICAgICogICAgICAgY29uc3QgbmV3T3BhY2l0eSA9IHRyYW5zZm9ybShtYXhYWSwgWzAsIDEwMF0sIFsxLCAwXSlcbiAgICAgKiAgICAgICBvcGFjaXR5LnNldChuZXdPcGFjaXR5KVxuICAgICAqICAgICB9XG4gICAgICpcbiAgICAgKiAgICAgY29uc3QgdW5zdWJzY3JpYmVYID0geC5vbkNoYW5nZSh1cGRhdGVPcGFjaXR5KVxuICAgICAqICAgICBjb25zdCB1bnN1YnNjcmliZVkgPSB5Lm9uQ2hhbmdlKHVwZGF0ZU9wYWNpdHkpXG4gICAgICpcbiAgICAgKiAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgKiAgICAgICB1bnN1YnNjcmliZVgoKVxuICAgICAqICAgICAgIHVuc3Vic2NyaWJlWSgpXG4gICAgICogICAgIH1cbiAgICAgKiAgIH0sIFtdKVxuICAgICAqXG4gICAgICogICByZXR1cm4gPG1vdGlvbi5kaXYgc3R5bGU9e3sgeCB9fSAvPlxuICAgICAqIH1cbiAgICAgKiBgYGBcbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbHJlbWFya3NcbiAgICAgKlxuICAgICAqIFdlIGNvdWxkIGxvb2sgaW50byBhIGB1c2VPbkNoYW5nZWAgaG9vayBpZiB0aGUgYWJvdmUgbGlmZWN5Y2xlIG1hbmFnZW1lbnQgcHJvdmVzIGNvbmZ1c2luZy5cbiAgICAgKlxuICAgICAqIGBgYGpzeFxuICAgICAqIHVzZU9uQ2hhbmdlKHgsICgpID0+IHt9KVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHBhcmFtIHN1YnNjcmliZXIgLSBBIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgdGhlIGxhdGVzdCB2YWx1ZS5cbiAgICAgKiBAcmV0dXJucyBBIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLCB3aWxsIGNhbmNlbCB0aGlzIHN1YnNjcmlwdGlvbi5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBNb3Rpb25WYWx1ZS5wcm90b3R5cGUub25DaGFuZ2UgPSBmdW5jdGlvbiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZVN1YnNjcmliZXJzLmFkZChzdWJzY3JpcHRpb24pO1xuICAgIH07XG4gICAgTW90aW9uVmFsdWUucHJvdG90eXBlLmNsZWFyTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN1YnNjcmliZXJzLmNsZWFyKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGRzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIG5vdGlmaWVkIHdoZW4gdGhlIGBNb3Rpb25WYWx1ZWAgcmVxdWVzdHMgYSByZW5kZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3Vic2NyaWJlciAtIEEgZnVuY3Rpb24gdGhhdCdzIHByb3ZpZGVkIHRoZSBsYXRlc3QgdmFsdWUuXG4gICAgICogQHJldHVybnMgQSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCwgd2lsbCBjYW5jZWwgdGhpcyBzdWJzY3JpcHRpb24uXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBNb3Rpb25WYWx1ZS5wcm90b3R5cGUub25SZW5kZXJSZXF1ZXN0ID0gZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xuICAgICAgICAvLyBSZW5kZXIgaW1tZWRpYXRlbHlcbiAgICAgICAgc3Vic2NyaXB0aW9uKHRoaXMuZ2V0KCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJTdWJzY3JpYmVycy5hZGQoc3Vic2NyaXB0aW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIGEgcGFzc2l2ZSBlZmZlY3QgdG8gdGhlIGBNb3Rpb25WYWx1ZWAuXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBNb3Rpb25WYWx1ZS5wcm90b3R5cGUuYXR0YWNoID0gZnVuY3Rpb24gKHBhc3NpdmVFZmZlY3QpIHtcbiAgICAgICAgdGhpcy5wYXNzaXZlRWZmZWN0ID0gcGFzc2l2ZUVmZmVjdDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHN0YXRlIG9mIHRoZSBgTW90aW9uVmFsdWVgLlxuICAgICAqXG4gICAgICogQHJlbWFya3NcbiAgICAgKlxuICAgICAqIGBgYGpzeFxuICAgICAqIGNvbnN0IHggPSB1c2VNb3Rpb25WYWx1ZSgwKVxuICAgICAqIHguc2V0KDEwKVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHBhcmFtIGxhdGVzdCAtIExhdGVzdCB2YWx1ZSB0byBzZXQuXG4gICAgICogQHBhcmFtIHJlbmRlciAtIFdoZXRoZXIgdG8gbm90aWZ5IHJlbmRlciBzdWJzY3JpYmVycy4gRGVmYXVsdHMgdG8gYHRydWVgXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgTW90aW9uVmFsdWUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh2LCByZW5kZXIpIHtcbiAgICAgICAgaWYgKHJlbmRlciA9PT0gdm9pZCAwKSB7IHJlbmRlciA9IHRydWU7IH1cbiAgICAgICAgaWYgKCFyZW5kZXIgfHwgIXRoaXMucGFzc2l2ZUVmZmVjdCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVBbmROb3RpZnkodiwgcmVuZGVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGFzc2l2ZUVmZmVjdCh2LCB0aGlzLnVwZGF0ZUFuZE5vdGlmeSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhdGVzdCBzdGF0ZSBvZiBgTW90aW9uVmFsdWVgXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyAtIFRoZSBsYXRlc3Qgc3RhdGUgb2YgYE1vdGlvblZhbHVlYFxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIE1vdGlvblZhbHVlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgTW90aW9uVmFsdWUucHJvdG90eXBlLmdldFByZXZpb3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmV2O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGF0ZXN0IHZlbG9jaXR5IG9mIGBNb3Rpb25WYWx1ZWBcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIC0gVGhlIGxhdGVzdCB2ZWxvY2l0eSBvZiBgTW90aW9uVmFsdWVgLiBSZXR1cm5zIGAwYCBpZiB0aGUgc3RhdGUgaXMgbm9uLW51bWVyaWNhbC5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBNb3Rpb25WYWx1ZS5wcm90b3R5cGUuZ2V0VmVsb2NpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFRoaXMgY291bGQgYmUgaXNGbG9hdCh0aGlzLnByZXYpICYmIGlzRmxvYXQodGhpcy5jdXJyZW50KSwgYnV0IHRoYXQgd291bGQgYmUgd2FzdGVmdWxcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FuVHJhY2tWZWxvY2l0eVxuICAgICAgICAgICAgPyAvLyBUaGVzZSBjYXN0cyBjb3VsZCBiZSBhdm9pZGVkIGlmIHBhcnNlRmxvYXQgd291bGQgYmUgdHlwZWQgYmV0dGVyXG4gICAgICAgICAgICAgICAgdmVsb2NpdHlQZXJTZWNvbmQocGFyc2VGbG9hdCh0aGlzLmN1cnJlbnQpIC1cbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdCh0aGlzLnByZXYpLCB0aGlzLnRpbWVEZWx0YSlcbiAgICAgICAgICAgIDogMDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhIG5ldyBhbmltYXRpb24gdG8gY29udHJvbCB0aGlzIGBNb3Rpb25WYWx1ZWAuIE9ubHkgb25lXG4gICAgICogYW5pbWF0aW9uIGNhbiBkcml2ZSBhIGBNb3Rpb25WYWx1ZWAgYXQgb25lIHRpbWUuXG4gICAgICpcbiAgICAgKiBgYGBqc3hcbiAgICAgKiB2YWx1ZS5zdGFydCgpXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uIC0gQSBmdW5jdGlvbiB0aGF0IHN0YXJ0cyB0aGUgcHJvdmlkZWQgYW5pbWF0aW9uXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBNb3Rpb25WYWx1ZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoYW5pbWF0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIF90aGlzLnN0b3BBbmltYXRpb24gPSBhbmltYXRpb24ocmVzb2x2ZSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuY2xlYXJBbmltYXRpb24oKTsgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdG9wIHRoZSBjdXJyZW50bHkgYWN0aXZlIGFuaW1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBNb3Rpb25WYWx1ZS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RvcEFuaW1hdGlvbilcbiAgICAgICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbigpO1xuICAgICAgICB0aGlzLmNsZWFyQW5pbWF0aW9uKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGlzIHZhbHVlIGlzIGN1cnJlbnRseSBhbmltYXRpbmcuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgTW90aW9uVmFsdWUucHJvdG90eXBlLmlzQW5pbWF0aW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLnN0b3BBbmltYXRpb247XG4gICAgfTtcbiAgICBNb3Rpb25WYWx1ZS5wcm90b3R5cGUuY2xlYXJBbmltYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RvcEFuaW1hdGlvbiA9IG51bGw7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZXN0cm95IGFuZCBjbGVhbiB1cCBzdWJzY3JpYmVycyB0byB0aGlzIGBNb3Rpb25WYWx1ZWAuXG4gICAgICpcbiAgICAgKiBUaGUgYE1vdGlvblZhbHVlYCBob29rcyBsaWtlIGB1c2VNb3Rpb25WYWx1ZWAgYW5kIGB1c2VUcmFuc2Zvcm1gIGF1dG9tYXRpY2FsbHlcbiAgICAgKiBoYW5kbGUgdGhlIGxpZmVjeWNsZSBvZiB0aGUgcmV0dXJuZWQgYE1vdGlvblZhbHVlYCwgc28gdGhpcyBtZXRob2QgaXMgb25seSBuZWNlc3NhcnkgaWYgeW91J3ZlIG1hbnVhbGx5XG4gICAgICogY3JlYXRlZCBhIGBNb3Rpb25WYWx1ZWAgdmlhIHRoZSBgbW90aW9uVmFsdWVgIGZ1bmN0aW9uLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIE1vdGlvblZhbHVlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN1YnNjcmliZXJzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucmVuZGVyU3Vic2NyaWJlcnMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfTtcbiAgICByZXR1cm4gTW90aW9uVmFsdWU7XG59KCkpO1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gbW90aW9uVmFsdWUoaW5pdCkge1xuICAgIHJldHVybiBuZXcgTW90aW9uVmFsdWUoaW5pdCk7XG59XG5cbi8qKlxuICogQ29udmVydHMgc2Vjb25kcyB0byBtaWxsaXNlY29uZHNcbiAqXG4gKiBAcGFyYW0gc2Vjb25kcyAtIFRpbWUgaW4gc2Vjb25kcy5cbiAqIEByZXR1cm4gbWlsbGlzZWNvbmRzIC0gQ29udmVydGVkIHRpbWUgaW4gbWlsbGlzZWNvbmRzLlxuICovXG52YXIgc2Vjb25kc1RvTWlsbGlzZWNvbmRzID0gZnVuY3Rpb24gKHNlY29uZHMpIHsgcmV0dXJuIHNlY29uZHMgKiAxMDAwOyB9O1xuXG52YXIgZWFzaW5nTG9va3VwID0ge1xuICAgIGxpbmVhcjogbGluZWFyLFxuICAgIGVhc2VJbjogZWFzZUluLFxuICAgIGVhc2VJbk91dDogZWFzZUluT3V0LFxuICAgIGVhc2VPdXQ6IGVhc2VPdXQsXG4gICAgY2lyY0luOiBjaXJjSW4sXG4gICAgY2lyY0luT3V0OiBjaXJjSW5PdXQsXG4gICAgY2lyY091dDogY2lyY091dCxcbiAgICBiYWNrSW46IGJhY2tJbixcbiAgICBiYWNrSW5PdXQ6IGJhY2tJbk91dCxcbiAgICBiYWNrT3V0OiBiYWNrT3V0LFxuICAgIGFudGljaXBhdGU6IGFudGljaXBhdGUsXG4gICAgYm91bmNlSW46IGJvdW5jZUluLFxuICAgIGJvdW5jZUluT3V0OiBib3VuY2VJbk91dCxcbiAgICBib3VuY2VPdXQ6IGJvdW5jZU91dCxcbn07XG52YXIgZWFzaW5nRGVmaW5pdGlvblRvRnVuY3Rpb24gPSBmdW5jdGlvbiAoZGVmaW5pdGlvbikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRlZmluaXRpb24pKSB7XG4gICAgICAgIC8vIElmIGN1YmljIGJlemllciBkZWZpbml0aW9uLCBjcmVhdGUgYmV6aWVyIGN1cnZlXG4gICAgICAgIGludmFyaWFudChkZWZpbml0aW9uLmxlbmd0aCA9PT0gNCwgXCJDdWJpYyBiZXppZXIgYXJyYXlzIG11c3QgY29udGFpbiBmb3VyIG51bWVyaWNhbCB2YWx1ZXMuXCIpO1xuICAgICAgICB2YXIgX2EgPSBfX3JlYWQoZGVmaW5pdGlvbiwgNCksIHgxID0gX2FbMF0sIHkxID0gX2FbMV0sIHgyID0gX2FbMl0sIHkyID0gX2FbM107XG4gICAgICAgIHJldHVybiBjdWJpY0Jlemllcih4MSwgeTEsIHgyLCB5Mik7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBkZWZpbml0aW9uID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIC8vIEVsc2UgbG9va3VwIGZyb20gdGFibGVcbiAgICAgICAgaW52YXJpYW50KGVhc2luZ0xvb2t1cFtkZWZpbml0aW9uXSAhPT0gdW5kZWZpbmVkLCBcIkludmFsaWQgZWFzaW5nIHR5cGUgJ1wiICsgZGVmaW5pdGlvbiArIFwiJ1wiKTtcbiAgICAgICAgcmV0dXJuIGVhc2luZ0xvb2t1cFtkZWZpbml0aW9uXTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmluaXRpb247XG59O1xudmFyIGlzRWFzaW5nQXJyYXkgPSBmdW5jdGlvbiAoZWFzZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGVhc2UpICYmIHR5cGVvZiBlYXNlWzBdICE9PSBcIm51bWJlclwiO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhIHZhbHVlIGlzIGFuaW1hdGFibGUuIEV4YW1wbGVzOlxuICpcbiAqIOKchTogMTAwLCBcIjEwMHB4XCIsIFwiI2ZmZlwiXG4gKiDinYw6IFwiYmxvY2tcIiwgXCJ1cmwoMi5qcGcpXCJcbiAqIEBwYXJhbSB2YWx1ZVxuICpcbiAqIEBpbnRlcm5hbFxuICovXG52YXIgaXNBbmltYXRhYmxlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAvLyBJZiB0aGUgbGlzdCBvZiBrZXlzIHRhdCBtaWdodCBiZSBub24tYW5pbWF0YWJsZSBncm93cywgcmVwbGFjZSB3aXRoIFNldFxuICAgIGlmIChrZXkgPT09IFwiekluZGV4XCIpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyBJZiBpdCdzIGEgbnVtYmVyIG9yIGEga2V5ZnJhbWVzIGFycmF5LCB3ZSBjYW4gYW5pbWF0ZSBpdC4gV2UgbWlnaHQgYXQgc29tZSBwb2ludFxuICAgIC8vIG5lZWQgdG8gZG8gYSBkZWVwIGlzQW5pbWF0YWJsZSBjaGVjayBvZiBrZXlmcmFtZXMsIG9yIGxldCBQb3Btb3Rpb24gaGFuZGxlIHRoaXMsXG4gICAgLy8gYnV0IGZvciBub3cgbGV0cyBsZWF2ZSBpdCBsaWtlIHRoaXMgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIC8vIEl0J3MgYW5pbWF0YWJsZSBpZiB3ZSBoYXZlIGEgc3RyaW5nXG4gICAgICAgIGNvbXBsZXgudGVzdCh2YWx1ZSkgJiYgLy8gQW5kIGl0IGNvbnRhaW5zIG51bWJlcnMgYW5kL29yIGNvbG9yc1xuICAgICAgICAhdmFsdWUuc3RhcnRzV2l0aChcInVybChcIikgLy8gVW5sZXNzIGl0IHN0YXJ0cyB3aXRoIFwidXJsKFwiXG4gICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgaXNLZXlmcmFtZXNUYXJnZXQgPSBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHYpO1xufTtcblxudmFyIHVuZGVyRGFtcGVkU3ByaW5nID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcbiAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgIHN0aWZmbmVzczogNTAwLFxuICAgIGRhbXBpbmc6IDI1LFxuICAgIHJlc3REZWx0YTogMC41LFxuICAgIHJlc3RTcGVlZDogMTAsXG59KTsgfTtcbnZhciBvdmVyRGFtcGVkU3ByaW5nID0gZnVuY3Rpb24gKHRvKSB7IHJldHVybiAoe1xuICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgc3RpZmZuZXNzOiA1NTAsXG4gICAgZGFtcGluZzogdG8gPT09IDAgPyAxMDAgOiAzMCxcbiAgICByZXN0RGVsdGE6IDAuMDEsXG4gICAgcmVzdFNwZWVkOiAxMCxcbn0pOyB9O1xudmFyIGxpbmVhclR3ZWVuID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKHtcbiAgICB0eXBlOiBcImtleWZyYW1lc1wiLFxuICAgIGVhc2U6IFwibGluZWFyXCIsXG4gICAgZHVyYXRpb246IDAuMyxcbn0pOyB9O1xudmFyIGtleWZyYW1lcyA9IGZ1bmN0aW9uICh2YWx1ZXMpIHsgcmV0dXJuICh7XG4gICAgdHlwZTogXCJrZXlmcmFtZXNcIixcbiAgICBkdXJhdGlvbjogMC44LFxuICAgIHZhbHVlczogdmFsdWVzLFxufSk7IH07XG52YXIgZGVmYXVsdFRyYW5zaXRpb25zID0ge1xuICAgIHg6IHVuZGVyRGFtcGVkU3ByaW5nLFxuICAgIHk6IHVuZGVyRGFtcGVkU3ByaW5nLFxuICAgIHo6IHVuZGVyRGFtcGVkU3ByaW5nLFxuICAgIHJvdGF0ZTogdW5kZXJEYW1wZWRTcHJpbmcsXG4gICAgcm90YXRlWDogdW5kZXJEYW1wZWRTcHJpbmcsXG4gICAgcm90YXRlWTogdW5kZXJEYW1wZWRTcHJpbmcsXG4gICAgcm90YXRlWjogdW5kZXJEYW1wZWRTcHJpbmcsXG4gICAgc2NhbGVYOiBvdmVyRGFtcGVkU3ByaW5nLFxuICAgIHNjYWxlWTogb3ZlckRhbXBlZFNwcmluZyxcbiAgICBzY2FsZTogb3ZlckRhbXBlZFNwcmluZyxcbiAgICBvcGFjaXR5OiBsaW5lYXJUd2VlbixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGxpbmVhclR3ZWVuLFxuICAgIGNvbG9yOiBsaW5lYXJUd2VlbixcbiAgICBkZWZhdWx0OiBvdmVyRGFtcGVkU3ByaW5nLFxufTtcbnZhciBnZXREZWZhdWx0VHJhbnNpdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZUtleSwgdG8pIHtcbiAgICB2YXIgdHJhbnNpdGlvbkZhY3Rvcnk7XG4gICAgaWYgKGlzS2V5ZnJhbWVzVGFyZ2V0KHRvKSkge1xuICAgICAgICB0cmFuc2l0aW9uRmFjdG9yeSA9IGtleWZyYW1lcztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRyYW5zaXRpb25GYWN0b3J5ID1cbiAgICAgICAgICAgIGRlZmF1bHRUcmFuc2l0aW9uc1t2YWx1ZUtleV0gfHwgZGVmYXVsdFRyYW5zaXRpb25zLmRlZmF1bHQ7XG4gICAgfVxuICAgIHJldHVybiBfX2Fzc2lnbih7IHRvOiB0byB9LCB0cmFuc2l0aW9uRmFjdG9yeSh0bykpO1xufTtcblxuLyoqXG4gKiBEZWNpZGUgd2hldGhlciBhIHRyYW5zaXRpb24gaXMgZGVmaW5lZCBvbiBhIGdpdmVuIFRyYW5zaXRpb24uXG4gKiBUaGlzIGZpbHRlcnMgb3V0IG9yY2hlc3RyYXRpb24gb3B0aW9ucyBhbmQgcmV0dXJucyB0cnVlXG4gKiBpZiBhbnkgb3B0aW9ucyBhcmUgbGVmdC5cbiAqL1xuZnVuY3Rpb24gaXNUcmFuc2l0aW9uRGVmaW5lZChfYSkge1xuICAgIHZhciB3aGVuID0gX2Eud2hlbiwgZGVsYXkgPSBfYS5kZWxheSwgZGVsYXlDaGlsZHJlbiA9IF9hLmRlbGF5Q2hpbGRyZW4sIHN0YWdnZXJDaGlsZHJlbiA9IF9hLnN0YWdnZXJDaGlsZHJlbiwgc3RhZ2dlckRpcmVjdGlvbiA9IF9hLnN0YWdnZXJEaXJlY3Rpb24sIHJlcGVhdCA9IF9hLnJlcGVhdCwgcmVwZWF0VHlwZSA9IF9hLnJlcGVhdFR5cGUsIHJlcGVhdERlbGF5ID0gX2EucmVwZWF0RGVsYXksIGZyb20gPSBfYS5mcm9tLCB0cmFuc2l0aW9uID0gX19yZXN0KF9hLCBbXCJ3aGVuXCIsIFwiZGVsYXlcIiwgXCJkZWxheUNoaWxkcmVuXCIsIFwic3RhZ2dlckNoaWxkcmVuXCIsIFwic3RhZ2dlckRpcmVjdGlvblwiLCBcInJlcGVhdFwiLCBcInJlcGVhdFR5cGVcIiwgXCJyZXBlYXREZWxheVwiLCBcImZyb21cIl0pO1xuICAgIHJldHVybiAhIU9iamVjdC5rZXlzKHRyYW5zaXRpb24pLmxlbmd0aDtcbn1cbi8qKlxuICogQ29udmVydCBGcmFtZXIgTW90aW9uJ3MgVHJhbnNpdGlvbiB0eXBlIGludG8gUG9wbW90aW9uLWNvbXBhdGlibGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gY29udmVydFRyYW5zaXRpb25Ub0FuaW1hdGlvbk9wdGlvbnMoX2EpIHtcbiAgICB2YXIgeW95byA9IF9hLnlveW8sIGxvb3AgPSBfYS5sb29wLCBmbGlwID0gX2EuZmxpcCwgZWFzZSA9IF9hLmVhc2UsIHRpbWVzID0gX2EudGltZXMsIHRyYW5zaXRpb24gPSBfX3Jlc3QoX2EsIFtcInlveW9cIiwgXCJsb29wXCIsIFwiZmxpcFwiLCBcImVhc2VcIiwgXCJ0aW1lc1wiXSk7XG4gICAgdmFyIG9wdGlvbnMgPSBfX2Fzc2lnbih7fSwgdHJhbnNpdGlvbik7XG4gICAgaWYgKHRpbWVzKSB7XG4gICAgICAgIG9wdGlvbnMub2Zmc2V0ID0gdGltZXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYW55IGV4aXN0aW5nIGR1cmF0aW9ucyBmcm9tIHNlY29uZHMgdG8gbWlsbGlzZWNvbmRzXG4gICAgICovXG4gICAgaWYgKHRyYW5zaXRpb24uZHVyYXRpb24pXG4gICAgICAgIG9wdGlvbnNbXCJkdXJhdGlvblwiXSA9IHNlY29uZHNUb01pbGxpc2Vjb25kcyh0cmFuc2l0aW9uLmR1cmF0aW9uKTtcbiAgICBpZiAodHJhbnNpdGlvbi5yZXBlYXREZWxheSlcbiAgICAgICAgb3B0aW9ucy5yZXBlYXREZWxheSA9IHNlY29uZHNUb01pbGxpc2Vjb25kcyh0cmFuc2l0aW9uLnJlcGVhdERlbGF5KTtcbiAgICAvKipcbiAgICAgKiBNYXAgZWFzaW5nIG5hbWVzIHRvIFBvcG1vdGlvbidzIGVhc2luZyBmdW5jdGlvbnNcbiAgICAgKi9cbiAgICBpZiAoZWFzZSkge1xuICAgICAgICBvcHRpb25zW1wiZWFzZVwiXSA9IGlzRWFzaW5nQXJyYXkoZWFzZSlcbiAgICAgICAgICAgID8gZWFzZS5tYXAoZWFzaW5nRGVmaW5pdGlvblRvRnVuY3Rpb24pXG4gICAgICAgICAgICA6IGVhc2luZ0RlZmluaXRpb25Ub0Z1bmN0aW9uKGVhc2UpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdXBwb3J0IGxlZ2FjeSB0cmFuc2l0aW9uIEFQSVxuICAgICAqL1xuICAgIGlmICh0cmFuc2l0aW9uLnR5cGUgPT09IFwidHdlZW5cIilcbiAgICAgICAgb3B0aW9ucy50eXBlID0gXCJrZXlmcmFtZXNcIjtcbiAgICBpZiAoeW95bykge1xuICAgICAgICBvcHRpb25zLnJlcGVhdFR5cGUgPSBcInJldmVyc2VcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAobG9vcCkge1xuICAgICAgICBvcHRpb25zLnJlcGVhdFR5cGUgPSBcImxvb3BcIjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxpcCkge1xuICAgICAgICBvcHRpb25zLnJlcGVhdFR5cGUgPSBcIm1pcnJvclwiO1xuICAgIH1cbiAgICBvcHRpb25zLnJlcGVhdCA9IGxvb3AgfHwgeW95byB8fCBmbGlwIHx8IHRyYW5zaXRpb24ucmVwZWF0O1xuICAgIC8qKlxuICAgICAqIFRPRE86IFBvcG1vdGlvbiA5IGhhcyB0aGUgYWJpbGl0eSB0byBhdXRvbWF0aWNhbGx5IGRldGVjdCB3aGV0aGVyIHRvIHVzZVxuICAgICAqIGEga2V5ZnJhbWVzIG9yIHNwcmluZyBhbmltYXRpb24sIGJ1dCBkb2VzIHNvIGJ5IGRldGVjdGluZyB2ZWxvY2l0eSBhbmQgb3RoZXIgc3ByaW5nIG9wdGlvbnMuXG4gICAgICogSXQnZCBiZSBnb29kIHRvIGludHJvZHVjZSBhIHNpbWlsYXIgdGhpbmcgaGVyZS5cbiAgICAgKi9cbiAgICBpZiAodHJhbnNpdGlvbi50eXBlICE9PSBcInNwcmluZ1wiKVxuICAgICAgICBvcHRpb25zLnR5cGUgPSBcImtleWZyYW1lc1wiO1xuICAgIHJldHVybiBvcHRpb25zO1xufVxuLyoqXG4gKiBHZXQgdGhlIGRlbGF5IGZvciBhIHZhbHVlIGJ5IGNoZWNraW5nIFRyYW5zaXRpb24gd2l0aCBkZWNyZWFzaW5nIHNwZWNpZmljaXR5LlxuICovXG5mdW5jdGlvbiBnZXREZWxheUZyb21UcmFuc2l0aW9uKHRyYW5zaXRpb24sIGtleSkge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gICAgcmV0dXJuICgoX2UgPSAoX2QgPSAoX2IgPSAoX2EgPSB0cmFuc2l0aW9uW2tleV0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kZWxheSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogKF9jID0gdHJhbnNpdGlvbltcImRlZmF1bHRcIl0pID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5kZWxheSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogdHJhbnNpdGlvbi5kZWxheSkgIT09IG51bGwgJiYgX2UgIT09IHZvaWQgMCA/IF9lIDogMCk7XG59XG5mdW5jdGlvbiBoeWRyYXRlS2V5ZnJhbWVzKG9wdGlvbnMpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLnRvKSAmJiBvcHRpb25zLnRvWzBdID09PSBudWxsKSB7XG4gICAgICAgIG9wdGlvbnMudG8gPSBfX3NwcmVhZChvcHRpb25zLnRvKTtcbiAgICAgICAgb3B0aW9ucy50b1swXSA9IG9wdGlvbnMuZnJvbTtcbiAgICB9XG4gICAgcmV0dXJuIG9wdGlvbnM7XG59XG5mdW5jdGlvbiBnZXRQb3Btb3Rpb25BbmltYXRpb25PcHRpb25zKHRyYW5zaXRpb24sIG9wdGlvbnMsIGtleSkge1xuICAgIHZhciBfYTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zLnRvKSkge1xuICAgICAgICAoX2EgPSB0cmFuc2l0aW9uLmR1cmF0aW9uKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAodHJhbnNpdGlvbi5kdXJhdGlvbiA9IDAuOCk7XG4gICAgfVxuICAgIGh5ZHJhdGVLZXlmcmFtZXMob3B0aW9ucyk7XG4gICAgLyoqXG4gICAgICogR2V0IGEgZGVmYXVsdCB0cmFuc2l0aW9uIGlmIG5vbmUgaXMgZGV0ZXJtaW5lZCB0byBiZSBkZWZpbmVkLlxuICAgICAqL1xuICAgIGlmICghaXNUcmFuc2l0aW9uRGVmaW5lZCh0cmFuc2l0aW9uKSkge1xuICAgICAgICB0cmFuc2l0aW9uID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHRyYW5zaXRpb24pLCBnZXREZWZhdWx0VHJhbnNpdGlvbihrZXksIG9wdGlvbnMudG8pKTtcbiAgICB9XG4gICAgcmV0dXJuIF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zKSwgY29udmVydFRyYW5zaXRpb25Ub0FuaW1hdGlvbk9wdGlvbnModHJhbnNpdGlvbikpO1xufVxuLyoqXG4gKlxuICovXG5mdW5jdGlvbiBnZXRBbmltYXRpb24oa2V5LCB2YWx1ZSwgdGFyZ2V0LCB0cmFuc2l0aW9uLCBvbkNvbXBsZXRlKSB7XG4gICAgdmFyIF9hO1xuICAgIHZhciB2YWx1ZVRyYW5zaXRpb24gPSBnZXRWYWx1ZVRyYW5zaXRpb24odHJhbnNpdGlvbiwga2V5KTtcbiAgICB2YXIgb3JpZ2luID0gKF9hID0gdmFsdWVUcmFuc2l0aW9uLmZyb20pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHZhbHVlLmdldCgpO1xuICAgIHZhciBpc1RhcmdldEFuaW1hdGFibGUgPSBpc0FuaW1hdGFibGUoa2V5LCB0YXJnZXQpO1xuICAgIC8qKlxuICAgICAqIElmIHdlJ3JlIHRyeWluZyB0byBhbmltYXRlIGZyb20gXCJub25lXCIsIHRyeSBhbmQgZ2V0IGFuIGFuaW1hdGFibGUgdmVyc2lvblxuICAgICAqIG9mIHRoZSB0YXJnZXQuIFRoaXMgY291bGQgYmUgaW1wcm92ZWQgdG8gd29yayBib3RoIHdheXMuXG4gICAgICovXG4gICAgaWYgKG9yaWdpbiA9PT0gXCJub25lXCIgJiYgaXNUYXJnZXRBbmltYXRhYmxlICYmIHR5cGVvZiB0YXJnZXQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgb3JpZ2luID0gY29tcGxleC5nZXRBbmltYXRhYmxlTm9uZSh0YXJnZXQpO1xuICAgIH1cbiAgICB2YXIgaXNPcmlnaW5BbmltYXRhYmxlID0gaXNBbmltYXRhYmxlKGtleSwgb3JpZ2luKTtcbiAgICB3YXJuaW5nKGlzT3JpZ2luQW5pbWF0YWJsZSA9PT0gaXNUYXJnZXRBbmltYXRhYmxlLCBcIllvdSBhcmUgdHJ5aW5nIHRvIGFuaW1hdGUgXCIgKyBrZXkgKyBcIiBmcm9tIFxcXCJcIiArIG9yaWdpbiArIFwiXFxcIiB0byBcXFwiXCIgKyB0YXJnZXQgKyBcIlxcXCIuIFwiICsgb3JpZ2luICsgXCIgaXMgbm90IGFuIGFuaW1hdGFibGUgdmFsdWUgLSB0byBlbmFibGUgdGhpcyBhbmltYXRpb24gc2V0IFwiICsgb3JpZ2luICsgXCIgdG8gYSB2YWx1ZSBhbmltYXRhYmxlIHRvIFwiICsgdGFyZ2V0ICsgXCIgdmlhIHRoZSBgc3R5bGVgIHByb3BlcnR5LlwiKTtcbiAgICBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBmcm9tOiBvcmlnaW4sXG4gICAgICAgICAgICB0bzogdGFyZ2V0LFxuICAgICAgICAgICAgdmVsb2NpdHk6IHZhbHVlLmdldFZlbG9jaXR5KCksXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiBvbkNvbXBsZXRlLFxuICAgICAgICAgICAgb25VcGRhdGU6IGZ1bmN0aW9uICh2KSB7IHJldHVybiB2YWx1ZS5zZXQodik7IH0sXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB2YWx1ZVRyYW5zaXRpb24udHlwZSA9PT0gXCJpbmVydGlhXCIgfHxcbiAgICAgICAgICAgIHZhbHVlVHJhbnNpdGlvbi50eXBlID09PSBcImRlY2F5XCJcbiAgICAgICAgICAgID8gaW5lcnRpYShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIHZhbHVlVHJhbnNpdGlvbikpXG4gICAgICAgICAgICA6IGFuaW1hdGUkMShfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZ2V0UG9wbW90aW9uQW5pbWF0aW9uT3B0aW9ucyh2YWx1ZVRyYW5zaXRpb24sIG9wdGlvbnMsIGtleSkpLCB7IG9uVXBkYXRlOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25VcGRhdGUodik7XG4gICAgICAgICAgICAgICAgICAgIChfYSA9IHZhbHVlVHJhbnNpdGlvbi5vblVwZGF0ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwodmFsdWVUcmFuc2l0aW9uLCB2KTtcbiAgICAgICAgICAgICAgICB9LCBvbkNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5vbkNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIChfYSA9IHZhbHVlVHJhbnNpdGlvbi5vbkNvbXBsZXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh2YWx1ZVRyYW5zaXRpb24pO1xuICAgICAgICAgICAgICAgIH0gfSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXQoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdmFsdWUuc2V0KHRhcmdldCk7XG4gICAgICAgIG9uQ29tcGxldGUoKTtcbiAgICAgICAgKF9hID0gdmFsdWVUcmFuc2l0aW9uID09PSBudWxsIHx8IHZhbHVlVHJhbnNpdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsdWVUcmFuc2l0aW9uLm9uQ29tcGxldGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHZhbHVlVHJhbnNpdGlvbik7XG4gICAgICAgIHJldHVybiB7IHN0b3A6IGZ1bmN0aW9uICgpIHsgfSB9O1xuICAgIH1cbiAgICByZXR1cm4gIWlzT3JpZ2luQW5pbWF0YWJsZSB8fFxuICAgICAgICAhaXNUYXJnZXRBbmltYXRhYmxlIHx8XG4gICAgICAgIHZhbHVlVHJhbnNpdGlvbi50eXBlID09PSBmYWxzZVxuICAgICAgICA/IHNldFxuICAgICAgICA6IHN0YXJ0O1xufVxuZnVuY3Rpb24gZ2V0VmFsdWVUcmFuc2l0aW9uKHRyYW5zaXRpb24sIGtleSkge1xuICAgIHJldHVybiB0cmFuc2l0aW9uW2tleV0gfHwgdHJhbnNpdGlvbltcImRlZmF1bHRcIl0gfHwgdHJhbnNpdGlvbjtcbn1cbi8qKlxuICogU3RhcnQgYW5pbWF0aW9uIG9uIGEgTW90aW9uVmFsdWUuIFRoaXMgZnVuY3Rpb24gaXMgYW4gaW50ZXJmYWNlIGJldHdlZW5cbiAqIEZyYW1lciBNb3Rpb24gYW5kIFBvcG1vdGlvblxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiBzdGFydEFuaW1hdGlvbihrZXksIHZhbHVlLCB0YXJnZXQsIHRyYW5zaXRpb24pIHtcbiAgICBpZiAodHJhbnNpdGlvbiA9PT0gdm9pZCAwKSB7IHRyYW5zaXRpb24gPSB7fTsgfVxuICAgIHJldHVybiB2YWx1ZS5zdGFydChmdW5jdGlvbiAob25Db21wbGV0ZSkge1xuICAgICAgICB2YXIgZGVsYXlUaW1lcjtcbiAgICAgICAgdmFyIGNvbnRyb2xzO1xuICAgICAgICB2YXIgYW5pbWF0aW9uID0gZ2V0QW5pbWF0aW9uKGtleSwgdmFsdWUsIHRhcmdldCwgdHJhbnNpdGlvbiwgb25Db21wbGV0ZSk7XG4gICAgICAgIHZhciBkZWxheSA9IGdldERlbGF5RnJvbVRyYW5zaXRpb24odHJhbnNpdGlvbiwga2V5KTtcbiAgICAgICAgdmFyIHN0YXJ0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKGNvbnRyb2xzID0gYW5pbWF0aW9uKCkpOyB9O1xuICAgICAgICBpZiAoZGVsYXkpIHtcbiAgICAgICAgICAgIGRlbGF5VGltZXIgPSBzZXRUaW1lb3V0KHN0YXJ0LCBzZWNvbmRzVG9NaWxsaXNlY29uZHMoZGVsYXkpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChkZWxheVRpbWVyKTtcbiAgICAgICAgICAgIGNvbnRyb2xzID09PSBudWxsIHx8IGNvbnRyb2xzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb250cm9scy5zdG9wKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cbnZhciBpc0N1c3RvbVZhbHVlID0gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gQm9vbGVhbih2ICYmIHR5cGVvZiB2ID09PSBcIm9iamVjdFwiICYmIHYubWl4ICYmIHYudG9WYWx1ZSk7XG59O1xudmFyIHJlc29sdmVGaW5hbFZhbHVlSW5LZXlmcmFtZXMgPSBmdW5jdGlvbiAodikge1xuICAgIC8vIFRPRE8gbWF5YmUgdGhyb3cgaWYgdi5sZW5ndGggLSAxIGlzIHBsYWNlaG9sZGVyIHRva2VuP1xuICAgIHJldHVybiBpc0tleWZyYW1lc1RhcmdldCh2KSA/IHZbdi5sZW5ndGggLSAxXSB8fCAwIDogdjtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdmFsdWUgaXMgYSBudW1lcmljYWwgc3RyaW5nLCBpZSBhIHN0cmluZyB0aGF0IGlzIHB1cmVseSBhIG51bWJlciBlZyBcIjEwMFwiIG9yIFwiLTEwMC4xXCJcbiAqL1xudmFyIGlzTnVtZXJpY2FsU3RyaW5nID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIC9eXFwtP1xcZCpcXC4/XFxkKyQvLnRlc3Qodik7IH07XG5cbi8qKlxuICogVmFsdWVUeXBlIGZvciBcImF1dG9cIlxuICovXG52YXIgYXV0byA9IHtcbiAgICB0ZXN0OiBmdW5jdGlvbiAodikgeyByZXR1cm4gdiA9PT0gXCJhdXRvXCI7IH0sXG4gICAgcGFyc2U6IGZ1bmN0aW9uICh2KSB7IHJldHVybiB2OyB9LFxufTtcbi8qKlxuICogVmFsdWVUeXBlIGZvciBpbnRzXG4gKi9cbnZhciBpbnQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbnVtYmVyKSwgeyB0cmFuc2Zvcm06IE1hdGgucm91bmQgfSk7XG4vKipcbiAqIEEgbWFwIG9mIGRlZmF1bHQgdmFsdWUgdHlwZXMgZm9yIGNvbW1vbiB2YWx1ZXNcbiAqL1xudmFyIGRlZmF1bHRWYWx1ZVR5cGVzID0ge1xuICAgIC8vIENvbG9yIHByb3BzXG4gICAgY29sb3I6IGNvbG9yLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgb3V0bGluZUNvbG9yOiBjb2xvcixcbiAgICBmaWxsOiBjb2xvcixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIC8vIEJvcmRlciBwcm9wc1xuICAgIGJvcmRlckNvbG9yOiBjb2xvcixcbiAgICBib3JkZXJUb3BDb2xvcjogY29sb3IsXG4gICAgYm9yZGVyUmlnaHRDb2xvcjogY29sb3IsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IGNvbG9yLFxuICAgIGJvcmRlckxlZnRDb2xvcjogY29sb3IsXG4gICAgYm9yZGVyV2lkdGg6IHB4LFxuICAgIGJvcmRlclRvcFdpZHRoOiBweCxcbiAgICBib3JkZXJSaWdodFdpZHRoOiBweCxcbiAgICBib3JkZXJCb3R0b21XaWR0aDogcHgsXG4gICAgYm9yZGVyTGVmdFdpZHRoOiBweCxcbiAgICBib3JkZXJSYWRpdXM6IHB4LFxuICAgIHJhZGl1czogcHgsXG4gICAgYm9yZGVyVG9wTGVmdFJhZGl1czogcHgsXG4gICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IHB4LFxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiBweCxcbiAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiBweCxcbiAgICAvLyBQb3NpdGlvbmluZyBwcm9wc1xuICAgIHdpZHRoOiBweCxcbiAgICBtYXhXaWR0aDogcHgsXG4gICAgaGVpZ2h0OiBweCxcbiAgICBtYXhIZWlnaHQ6IHB4LFxuICAgIHNpemU6IHB4LFxuICAgIHRvcDogcHgsXG4gICAgcmlnaHQ6IHB4LFxuICAgIGJvdHRvbTogcHgsXG4gICAgbGVmdDogcHgsXG4gICAgLy8gU3BhY2luZyBwcm9wc1xuICAgIHBhZGRpbmc6IHB4LFxuICAgIHBhZGRpbmdUb3A6IHB4LFxuICAgIHBhZGRpbmdSaWdodDogcHgsXG4gICAgcGFkZGluZ0JvdHRvbTogcHgsXG4gICAgcGFkZGluZ0xlZnQ6IHB4LFxuICAgIG1hcmdpbjogcHgsXG4gICAgbWFyZ2luVG9wOiBweCxcbiAgICBtYXJnaW5SaWdodDogcHgsXG4gICAgbWFyZ2luQm90dG9tOiBweCxcbiAgICBtYXJnaW5MZWZ0OiBweCxcbiAgICAvLyBUcmFuc2Zvcm0gcHJvcHNcbiAgICByb3RhdGU6IGRlZ3JlZXMsXG4gICAgcm90YXRlWDogZGVncmVlcyxcbiAgICByb3RhdGVZOiBkZWdyZWVzLFxuICAgIHJvdGF0ZVo6IGRlZ3JlZXMsXG4gICAgc2NhbGU6IHNjYWxlLFxuICAgIHNjYWxlWDogc2NhbGUsXG4gICAgc2NhbGVZOiBzY2FsZSxcbiAgICBzY2FsZVo6IHNjYWxlLFxuICAgIHNrZXc6IGRlZ3JlZXMsXG4gICAgc2tld1g6IGRlZ3JlZXMsXG4gICAgc2tld1k6IGRlZ3JlZXMsXG4gICAgZGlzdGFuY2U6IHB4LFxuICAgIHRyYW5zbGF0ZVg6IHB4LFxuICAgIHRyYW5zbGF0ZVk6IHB4LFxuICAgIHRyYW5zbGF0ZVo6IHB4LFxuICAgIHg6IHB4LFxuICAgIHk6IHB4LFxuICAgIHo6IHB4LFxuICAgIHBlcnNwZWN0aXZlOiBweCxcbiAgICB0cmFuc2Zvcm1QZXJzcGVjdGl2ZTogcHgsXG4gICAgb3BhY2l0eTogYWxwaGEsXG4gICAgb3JpZ2luWDogcHJvZ3Jlc3NQZXJjZW50YWdlLFxuICAgIG9yaWdpblk6IHByb2dyZXNzUGVyY2VudGFnZSxcbiAgICBvcmlnaW5aOiBweCxcbiAgICAvLyBNaXNjXG4gICAgekluZGV4OiBpbnQsXG4gICAgLy8gU1ZHXG4gICAgZmlsbE9wYWNpdHk6IGFscGhhLFxuICAgIHN0cm9rZU9wYWNpdHk6IGFscGhhLFxuICAgIG51bU9jdGF2ZXM6IGludCxcbn07XG4vKipcbiAqIEEgbGlzdCBvZiB2YWx1ZSB0eXBlcyBjb21tb25seSB1c2VkIGZvciBkaW1lbnNpb25zXG4gKi9cbnZhciBkaW1lbnNpb25WYWx1ZVR5cGVzID0gW251bWJlciwgcHgsIHBlcmNlbnQsIGRlZ3JlZXMsIHZ3LCB2aCwgYXV0b107XG4vKipcbiAqIFRlc3RzIGEgcHJvdmlkZWQgdmFsdWUgYWdhaW5zdCBhIFZhbHVlVHlwZVxuICovXG52YXIgdGVzdFZhbHVlVHlwZSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBmdW5jdGlvbiAodHlwZSkgeyByZXR1cm4gdHlwZS50ZXN0KHYpOyB9OyB9O1xuLyoqXG4gKiBUZXN0cyBhIGRpbWVuc2lvbmFsIHZhbHVlIGFnYWluc3QgdGhlIGxpc3Qgb2YgZGltZW5zaW9uIFZhbHVlVHlwZXNcbiAqL1xudmFyIGZpbmREaW1lbnNpb25WYWx1ZVR5cGUgPSBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiBkaW1lbnNpb25WYWx1ZVR5cGVzLmZpbmQodGVzdFZhbHVlVHlwZSh2KSk7XG59O1xuLyoqXG4gKiBBIGxpc3Qgb2YgYWxsIFZhbHVlVHlwZXNcbiAqL1xudmFyIHZhbHVlVHlwZXMgPSBfX3NwcmVhZChkaW1lbnNpb25WYWx1ZVR5cGVzLCBbY29sb3IsIGNvbXBsZXhdKTtcbi8qKlxuICogVGVzdHMgYSB2YWx1ZSBhZ2FpbnN0IHRoZSBsaXN0IG9mIFZhbHVlVHlwZXNcbiAqL1xudmFyIGZpbmRWYWx1ZVR5cGUgPSBmdW5jdGlvbiAodikgeyByZXR1cm4gdmFsdWVUeXBlcy5maW5kKHRlc3RWYWx1ZVR5cGUodikpOyB9O1xuLyoqXG4gKiBHZXRzIHRoZSBkZWZhdWx0IFZhbHVlVHlwZSBmb3IgdGhlIHByb3ZpZGVkIHZhbHVlIGtleVxuICovXG52YXIgZ2V0RGVmYXVsdFZhbHVlVHlwZSA9IGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGRlZmF1bHRWYWx1ZVR5cGVzW2tleV07IH07XG4vKipcbiAqIFByb3ZpZGVkIGEgdmFsdWUgYW5kIGEgVmFsdWVUeXBlLCByZXR1cm5zIHRoZSB2YWx1ZSBhcyB0aGF0IHZhbHVlIHR5cGUuXG4gKi9cbnZhciBnZXRWYWx1ZUFzVHlwZSA9IGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSkge1xuICAgIHJldHVybiB0eXBlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIlxuICAgICAgICA/IHR5cGUudHJhbnNmb3JtKHZhbHVlKVxuICAgICAgICA6IHZhbHVlO1xufTtcblxuLyoqXG4gKiBEZWNpZGVzIGlmIHRoZSBzdXBwbGllZCB2YXJpYWJsZSBpcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHZhcmlhbnRcbiAqL1xuZnVuY3Rpb24gaXNWYXJpYW50UmVzb2x2ZXIodmFyaWFudCkge1xuICAgIHJldHVybiB0eXBlb2YgdmFyaWFudCA9PT0gXCJmdW5jdGlvblwiO1xufVxuLyoqXG4gKiBEZWNpZGVzIGlmIHRoZSBzdXBwbGllZCB2YXJpYWJsZSBpcyBhbiBhcnJheSBvZiB2YXJpYW50IGxhYmVsc1xuICovXG5mdW5jdGlvbiBpc1ZhcmlhbnRMYWJlbHModikge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHYpO1xufVxuLyoqXG4gKiBEZWNpZGVzIGlmIHRoZSBzdXBwbGllZCB2YXJpYWJsZSBpcyB2YXJpYW50IGxhYmVsXG4gKi9cbmZ1bmN0aW9uIGlzVmFyaWFudExhYmVsKHYpIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09IFwic3RyaW5nXCIgfHwgaXNWYXJpYW50TGFiZWxzKHYpO1xufVxuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBsYXRlc3Qgc3RhdGUgb2YgZXZlcnkgTW90aW9uVmFsdWUgb24gYSBWaXN1YWxFbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGdldEN1cnJlbnQodmlzdWFsRWxlbWVudCkge1xuICAgIHZhciBjdXJyZW50ID0ge307XG4gICAgdmlzdWFsRWxlbWVudC5mb3JFYWNoVmFsdWUoZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHsgcmV0dXJuIChjdXJyZW50W2tleV0gPSB2YWx1ZS5nZXQoKSk7IH0pO1xuICAgIHJldHVybiBjdXJyZW50O1xufVxuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCBjb250YWluaW5nIHRoZSBsYXRlc3QgdmVsb2NpdHkgb2YgZXZlcnkgTW90aW9uVmFsdWUgb24gYSBWaXN1YWxFbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGdldFZlbG9jaXR5KHZpc3VhbEVsZW1lbnQpIHtcbiAgICB2YXIgdmVsb2NpdHkgPSB7fTtcbiAgICB2aXN1YWxFbGVtZW50LmZvckVhY2hWYWx1ZShmdW5jdGlvbiAodmFsdWUsIGtleSkgeyByZXR1cm4gKHZlbG9jaXR5W2tleV0gPSB2YWx1ZS5nZXRWZWxvY2l0eSgpKTsgfSk7XG4gICAgcmV0dXJuIHZlbG9jaXR5O1xufVxuLyoqXG4gKiBSZXNvdmxlcyBhIHZhcmlhbnQgaWYgaXQncyBhIHZhcmlhbnQgcmVzb2x2ZXJcbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZVZhcmlhbnQodmlzdWFsRWxlbWVudCwgdmFyaWFudCwgY3VzdG9tKSB7XG4gICAgdmFyIHJlc29sdmVkID0ge307XG4gICAgaWYgKCF2YXJpYW50KSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlZDtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNWYXJpYW50UmVzb2x2ZXIodmFyaWFudCkpIHtcbiAgICAgICAgcmVzb2x2ZWQgPSB2YXJpYW50KGN1c3RvbSAhPT0gbnVsbCAmJiBjdXN0b20gIT09IHZvaWQgMCA/IGN1c3RvbSA6IHZpc3VhbEVsZW1lbnQuZ2V0VmFyaWFudFBheWxvYWQoKSwgZ2V0Q3VycmVudCh2aXN1YWxFbGVtZW50KSwgZ2V0VmVsb2NpdHkodmlzdWFsRWxlbWVudCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZWQgPSB2YXJpYW50O1xuICAgIH1cbiAgICByZXR1cm4gX19hc3NpZ24oeyB0cmFuc2l0aW9uOiB2aXN1YWxFbGVtZW50LmdldERlZmF1bHRUcmFuc2l0aW9uKCkgfSwgcmVzb2x2ZWQpO1xufVxuXG4vKipcbiAqIFNldCBWaXN1YWxFbGVtZW50J3MgTW90aW9uVmFsdWUsIGNyZWF0aW5nIGEgbmV3IE1vdGlvblZhbHVlIGZvciBpdCBpZlxuICogaXQgZG9lc24ndCBleGlzdC5cbiAqL1xuZnVuY3Rpb24gc2V0TW90aW9uVmFsdWUodmlzdWFsRWxlbWVudCwga2V5LCB2YWx1ZSkge1xuICAgIGlmICh2aXN1YWxFbGVtZW50Lmhhc1ZhbHVlKGtleSkpIHtcbiAgICAgICAgdmlzdWFsRWxlbWVudC5nZXRWYWx1ZShrZXkpLnNldCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2aXN1YWxFbGVtZW50LmFkZFZhbHVlKGtleSwgbW90aW9uVmFsdWUodmFsdWUpKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZXRUYXJnZXQodmlzdWFsRWxlbWVudCwgZGVmaW5pdGlvbiwgX2EpIHtcbiAgICB2YXIgcHJpb3JpdHkgPSAoX2EgPT09IHZvaWQgMCA/IHt9IDogX2EpLnByaW9yaXR5O1xuICAgIHZhciBfYiA9IHZpc3VhbEVsZW1lbnQubWFrZVRhcmdldEFuaW1hdGFibGUocmVzb2x2ZVZhcmlhbnQodmlzdWFsRWxlbWVudCwgZGVmaW5pdGlvbiksIGZhbHNlKSwgX2MgPSBfYi50cmFuc2l0aW9uRW5kLCB0cmFuc2l0aW9uRW5kID0gX2MgPT09IHZvaWQgMCA/IHt9IDogX2MsIHRyYW5zaXRpb24gPSBfYi50cmFuc2l0aW9uLCB0YXJnZXQgPSBfX3Jlc3QoX2IsIFtcInRyYW5zaXRpb25FbmRcIiwgXCJ0cmFuc2l0aW9uXCJdKTtcbiAgICB0YXJnZXQgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGFyZ2V0KSwgdHJhbnNpdGlvbkVuZCk7XG4gICAgZm9yICh2YXIga2V5IGluIHRhcmdldCkge1xuICAgICAgICB2YXIgdmFsdWUgPSByZXNvbHZlRmluYWxWYWx1ZUluS2V5ZnJhbWVzKHRhcmdldFtrZXldKTtcbiAgICAgICAgc2V0TW90aW9uVmFsdWUodmlzdWFsRWxlbWVudCwga2V5LCB2YWx1ZSk7XG4gICAgICAgIGlmICghcHJpb3JpdHkpXG4gICAgICAgICAgICB2aXN1YWxFbGVtZW50LmJhc2VUYXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldFZhcmlhbnRzKHZpc3VhbEVsZW1lbnQsIHZhcmlhbnRMYWJlbHMpIHtcbiAgICB2YXIgcmV2ZXJzZWRMYWJlbHMgPSBfX3NwcmVhZCh2YXJpYW50TGFiZWxzKS5yZXZlcnNlKCk7XG4gICAgcmV2ZXJzZWRMYWJlbHMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgc2V0VGFyZ2V0KHZpc3VhbEVsZW1lbnQsIHZpc3VhbEVsZW1lbnQuZ2V0VmFyaWFudChrZXkpKTtcbiAgICAgICAgKF9hID0gdmlzdWFsRWxlbWVudC52YXJpYW50Q2hpbGRyZW4pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgc2V0VmFyaWFudHMoY2hpbGQsIHZhcmlhbnRMYWJlbHMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHNldFZhbHVlcyh2aXN1YWxFbGVtZW50LCBkZWZpbml0aW9uKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGVmaW5pdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIHNldFZhcmlhbnRzKHZpc3VhbEVsZW1lbnQsIGRlZmluaXRpb24pO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5pdGlvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gc2V0VmFyaWFudHModmlzdWFsRWxlbWVudCwgW2RlZmluaXRpb25dKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNldFRhcmdldCh2aXN1YWxFbGVtZW50LCBkZWZpbml0aW9uKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjaGVja1RhcmdldEZvck5ld1ZhbHVlcyh2aXN1YWxFbGVtZW50LCB0YXJnZXQsIG9yaWdpbikge1xuICAgIHZhciBfYSwgX2I7XG4gICAgdmFyIF9jO1xuICAgIHZhciBuZXdWYWx1ZUtleXMgPSBPYmplY3Qua2V5cyh0YXJnZXQpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAhdmlzdWFsRWxlbWVudC5oYXNWYWx1ZShrZXkpOyB9KTtcbiAgICB2YXIgbnVtTmV3VmFsdWVzID0gbmV3VmFsdWVLZXlzLmxlbmd0aDtcbiAgICBpZiAoIW51bU5ld1ZhbHVlcylcbiAgICAgICAgcmV0dXJuO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtTmV3VmFsdWVzOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IG5ld1ZhbHVlS2V5c1tpXTtcbiAgICAgICAgdmFyIHRhcmdldFZhbHVlID0gdGFyZ2V0W2tleV07XG4gICAgICAgIHZhciB2YWx1ZSA9IG51bGw7XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSBrZXlmcmFtZXMgdmFsdWUsIHdlIGNhbiBhdHRlbXB0IHRvIHVzZSB0aGUgZmlyc3QgdmFsdWUgaW4gdGhlXG4gICAgICAgIC8vIGFycmF5IGFzIHRoYXQncyBnb2luZyB0byBiZSB0aGUgZmlyc3QgdmFsdWUgb2YgdGhlIGFuaW1hdGlvbiBhbnl3YXlcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0VmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRhcmdldFZhbHVlWzBdO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGl0IGlzbid0IGEga2V5ZnJhbWVzIG9yIHRoZSBmaXJzdCBrZXlmcmFtZXMgdmFsdWUgd2FzIHNldCBhcyBgbnVsbGAsIHJlYWQgdGhlXG4gICAgICAgIC8vIHZhbHVlIGZyb20gdGhlIERPTS4gSXQgbWlnaHQgYmUgd29ydGggaW52ZXN0aWdhdGluZyB3aGV0aGVyIHRvIGNoZWNrIHByb3BzIChmb3IgU1ZHKVxuICAgICAgICAvLyBvciBwcm9wcy5zdHlsZSAoZm9yIEhUTUwpIGlmIHRoZSB2YWx1ZSBleGlzdHMgdGhlcmUgYmVmb3JlIGF0dGVtcHRpbmcgdG8gcmVhZC5cbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgcmVhZFZhbHVlID0gKF9hID0gb3JpZ2luW2tleV0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHZpc3VhbEVsZW1lbnQucmVhZE5hdGl2ZVZhbHVlKGtleSk7XG4gICAgICAgICAgICB2YWx1ZSA9IHJlYWRWYWx1ZSAhPT0gdW5kZWZpbmVkID8gcmVhZFZhbHVlIDogdGFyZ2V0W2tleV07XG4gICAgICAgICAgICBpbnZhcmlhbnQodmFsdWUgIT09IG51bGwsIFwiTm8gaW5pdGlhbCB2YWx1ZSBmb3IgXFxcIlwiICsga2V5ICsgXCJcXFwiIGNhbiBiZSBpbmZlcnJlZC4gRW5zdXJlIGFuIGluaXRpYWwgdmFsdWUgZm9yIFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBkZWZpbmVkIG9uIHRoZSBjb21wb25lbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgaXNOdW1lcmljYWxTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgbnVtYmVyIHJlYWQgYXMgYSBzdHJpbmcsIGllIFwiMFwiIG9yIFwiMjAwXCIsIGNvbnZlcnQgaXQgdG8gYSBudW1iZXJcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWZpbmRWYWx1ZVR5cGUodmFsdWUpICYmIGNvbXBsZXgudGVzdCh0YXJnZXRWYWx1ZSkpIHtcbiAgICAgICAgICAgIC8vIElmIHZhbHVlIGlzIG5vdCByZWNvZ25pc2VkIGFzIGFuaW1hdGFibGUsIGllIFwibm9uZVwiLCBjcmVhdGUgYW4gYW5pbWF0YWJsZSB2ZXJzaW9uIG9yaWdpbiBiYXNlZCBvbiB0aGUgdGFyZ2V0XG4gICAgICAgICAgICB2YWx1ZSA9IGNvbXBsZXguZ2V0QW5pbWF0YWJsZU5vbmUodGFyZ2V0VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHZpc3VhbEVsZW1lbnQuYWRkVmFsdWUoa2V5LCBtb3Rpb25WYWx1ZSh2YWx1ZSkpO1xuICAgICAgICAoX2IgPSAoX2MgPSBvcmlnaW4pW2tleV0pICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IChfY1trZXldID0gdmFsdWUpO1xuICAgICAgICB2aXN1YWxFbGVtZW50LmJhc2VUYXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldE9yaWdpbkZyb21UcmFuc2l0aW9uKGtleSwgdHJhbnNpdGlvbikge1xuICAgIGlmICghdHJhbnNpdGlvbilcbiAgICAgICAgcmV0dXJuO1xuICAgIHZhciB2YWx1ZVRyYW5zaXRpb24gPSB0cmFuc2l0aW9uW2tleV0gfHwgdHJhbnNpdGlvbltcImRlZmF1bHRcIl0gfHwgdHJhbnNpdGlvbjtcbiAgICByZXR1cm4gdmFsdWVUcmFuc2l0aW9uLmZyb207XG59XG5mdW5jdGlvbiBnZXRPcmlnaW4odGFyZ2V0LCB0cmFuc2l0aW9uLCB2aXN1YWxFbGVtZW50KSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICB2YXIgb3JpZ2luID0ge307XG4gICAgZm9yICh2YXIga2V5IGluIHRhcmdldCkge1xuICAgICAgICBvcmlnaW5ba2V5XSA9IChfYSA9IGdldE9yaWdpbkZyb21UcmFuc2l0aW9uKGtleSwgdHJhbnNpdGlvbikpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IChfYiA9IHZpc3VhbEVsZW1lbnQuZ2V0VmFsdWUoa2V5KSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdldCgpO1xuICAgIH1cbiAgICByZXR1cm4gb3JpZ2luO1xufVxuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiBzdGFydFZpc3VhbEVsZW1lbnRBbmltYXRpb24odmlzdWFsRWxlbWVudCwgZGVmaW5pdGlvbiwgb3B0cykge1xuICAgIGlmIChvcHRzID09PSB2b2lkIDApIHsgb3B0cyA9IHt9OyB9XG4gICAgaWYgKG9wdHMucHJpb3JpdHkpIHtcbiAgICAgICAgdmlzdWFsRWxlbWVudC5hY3RpdmVPdmVycmlkZXMuYWRkKG9wdHMucHJpb3JpdHkpO1xuICAgIH1cbiAgICB2aXN1YWxFbGVtZW50LnJlc2V0SXNBbmltYXRpbmcob3B0cy5wcmlvcml0eSk7XG4gICAgdmFyIGFuaW1hdGlvbjtcbiAgICBpZiAoaXNWYXJpYW50TGFiZWxzKGRlZmluaXRpb24pKSB7XG4gICAgICAgIGFuaW1hdGlvbiA9IGFuaW1hdGVWYXJpYW50TGFiZWxzKHZpc3VhbEVsZW1lbnQsIGRlZmluaXRpb24sIG9wdHMpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1ZhcmlhbnRMYWJlbChkZWZpbml0aW9uKSkge1xuICAgICAgICBhbmltYXRpb24gPSBhbmltYXRlVmFyaWFudCh2aXN1YWxFbGVtZW50LCBkZWZpbml0aW9uLCBvcHRzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFuaW1hdGlvbiA9IGFuaW1hdGVUYXJnZXQodmlzdWFsRWxlbWVudCwgZGVmaW5pdGlvbiwgb3B0cyk7XG4gICAgfVxuICAgIHZpc3VhbEVsZW1lbnQub25BbmltYXRpb25TdGFydCgpO1xuICAgIHJldHVybiBhbmltYXRpb24udGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB2aXN1YWxFbGVtZW50Lm9uQW5pbWF0aW9uQ29tcGxldGUoKTsgfSk7XG59XG5mdW5jdGlvbiBhbmltYXRlVmFyaWFudExhYmVscyh2aXN1YWxFbGVtZW50LCB2YXJpYW50TGFiZWxzLCBvcHRzKSB7XG4gICAgdmFyIGFuaW1hdGlvbnMgPSBfX3NwcmVhZCh2YXJpYW50TGFiZWxzKS5yZXZlcnNlKClcbiAgICAgICAgLm1hcChmdW5jdGlvbiAobGFiZWwpIHsgcmV0dXJuIGFuaW1hdGVWYXJpYW50KHZpc3VhbEVsZW1lbnQsIGxhYmVsLCBvcHRzKTsgfSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKGFuaW1hdGlvbnMpO1xufVxuZnVuY3Rpb24gYW5pbWF0ZVZhcmlhbnQodmlzdWFsRWxlbWVudCwgbGFiZWwsIG9wdHMpIHtcbiAgICB2YXIgX2E7XG4gICAgdmFyIHByaW9yaXR5ID0gKG9wdHMgJiYgb3B0cy5wcmlvcml0eSkgfHwgMDtcbiAgICB2YXIgdmFyaWFudERlZmluaXRpb24gPSB2aXN1YWxFbGVtZW50LmdldFZhcmlhbnQobGFiZWwpO1xuICAgIHZhciB2YXJpYW50ID0gcmVzb2x2ZVZhcmlhbnQodmlzdWFsRWxlbWVudCwgdmFyaWFudERlZmluaXRpb24sIG9wdHMgJiYgb3B0cy5jdXN0b20pO1xuICAgIHZhciB0cmFuc2l0aW9uID0gdmFyaWFudC50cmFuc2l0aW9uIHx8IHt9O1xuICAgIC8qKlxuICAgICAqIElmIHdlIGhhdmUgYSB2YXJpYW50LCBjcmVhdGUgYSBjYWxsYmFjayB0aGF0IHJ1bnMgaXQgYXMgYW4gYW5pbWF0aW9uLlxuICAgICAqIE90aGVyd2lzZSwgd2UgcmVzb2x2ZSBhIFByb21pc2UgaW1tZWRpYXRlbHkgZm9yIGEgY29tcG9zYWJsZSBuby1vcC5cbiAgICAgKi9cbiAgICB2YXIgZ2V0QW5pbWF0aW9uID0gdmFyaWFudERlZmluaXRpb25cbiAgICAgICAgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBhbmltYXRlVGFyZ2V0KHZpc3VhbEVsZW1lbnQsIHZhcmlhbnQsIG9wdHMpOyB9XG4gICAgICAgIDogZnVuY3Rpb24gKCkgeyByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7IH07XG4gICAgLyoqXG4gICAgICogSWYgd2UgaGF2ZSBjaGlsZHJlbiwgY3JlYXRlIGEgY2FsbGJhY2sgdGhhdCBydW5zIGFsbCB0aGVpciBhbmltYXRpb25zLlxuICAgICAqIE90aGVyd2lzZSwgd2UgcmVzb2x2ZSBhIFByb21pc2UgaW1tZWRpYXRlbHkgZm9yIGEgY29tcG9zYWJsZSBuby1vcC5cbiAgICAgKi9cbiAgICB2YXIgZ2V0Q2hpbGRyZW5BbmltYXRpb25zID0gKChfYSA9IHZpc3VhbEVsZW1lbnQudmFyaWFudENoaWxkcmVuT3JkZXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zaXplKSA/IGZ1bmN0aW9uIChmb3J3YXJkRGVsYXkpIHtcbiAgICAgICAgaWYgKGZvcndhcmREZWxheSA9PT0gdm9pZCAwKSB7IGZvcndhcmREZWxheSA9IDA7IH1cbiAgICAgICAgdmFyIF9hID0gdHJhbnNpdGlvbi5kZWxheUNoaWxkcmVuLCBkZWxheUNoaWxkcmVuID0gX2EgPT09IHZvaWQgMCA/IDAgOiBfYTtcbiAgICAgICAgcmV0dXJuIGFuaW1hdGVDaGlsZHJlbih2aXN1YWxFbGVtZW50LCBsYWJlbCwgZGVsYXlDaGlsZHJlbiArIGZvcndhcmREZWxheSwgdHJhbnNpdGlvbi5zdGFnZ2VyQ2hpbGRyZW4sIHRyYW5zaXRpb24uc3RhZ2dlckRpcmVjdGlvbiwgcHJpb3JpdHksIG9wdHMgPT09IG51bGwgfHwgb3B0cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0cy5jdXN0b20pO1xuICAgIH1cbiAgICAgICAgOiBmdW5jdGlvbiAoKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUoKTsgfTtcbiAgICAvKipcbiAgICAgKiBJZiB0aGUgdHJhbnNpdGlvbiBleHBsaWNpdGx5IGRlZmluZXMgYSBcIndoZW5cIiBvcHRpb24sIHdlIG5lZWQgdG8gcmVzb2x2ZSBlaXRoZXJcbiAgICAgKiB0aGlzIGFuaW1hdGlvbiBvciBhbGwgY2hpbGRyZW4gYW5pbWF0aW9ucyBiZWZvcmUgcGxheWluZyB0aGUgb3RoZXIuXG4gICAgICovXG4gICAgdmFyIHdoZW4gPSB0cmFuc2l0aW9uLndoZW47XG4gICAgaWYgKHdoZW4pIHtcbiAgICAgICAgdmFyIF9iID0gX19yZWFkKHdoZW4gPT09IFwiYmVmb3JlQ2hpbGRyZW5cIlxuICAgICAgICAgICAgPyBbZ2V0QW5pbWF0aW9uLCBnZXRDaGlsZHJlbkFuaW1hdGlvbnNdXG4gICAgICAgICAgICA6IFtnZXRDaGlsZHJlbkFuaW1hdGlvbnMsIGdldEFuaW1hdGlvbl0sIDIpLCBmaXJzdCA9IF9iWzBdLCBsYXN0ID0gX2JbMV07XG4gICAgICAgIHJldHVybiBmaXJzdCgpLnRoZW4obGFzdCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2dldEFuaW1hdGlvbigpLCBnZXRDaGlsZHJlbkFuaW1hdGlvbnMob3B0cyA9PT0gbnVsbCB8fCBvcHRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRzLmRlbGF5KV0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFuaW1hdGVDaGlsZHJlbih2aXN1YWxFbGVtZW50LCB2YXJpYW50TGFiZWwsIGRlbGF5Q2hpbGRyZW4sIHN0YWdnZXJDaGlsZHJlbiwgc3RhZ2dlckRpcmVjdGlvbiwgcHJpb3JpdHksIGN1c3RvbSkge1xuICAgIGlmIChkZWxheUNoaWxkcmVuID09PSB2b2lkIDApIHsgZGVsYXlDaGlsZHJlbiA9IDA7IH1cbiAgICBpZiAoc3RhZ2dlckNoaWxkcmVuID09PSB2b2lkIDApIHsgc3RhZ2dlckNoaWxkcmVuID0gMDsgfVxuICAgIGlmIChzdGFnZ2VyRGlyZWN0aW9uID09PSB2b2lkIDApIHsgc3RhZ2dlckRpcmVjdGlvbiA9IDE7IH1cbiAgICBpZiAocHJpb3JpdHkgPT09IHZvaWQgMCkgeyBwcmlvcml0eSA9IDA7IH1cbiAgICB2YXIgYW5pbWF0aW9ucyA9IFtdO1xuICAgIHZhciBtYXhTdGFnZ2VyRHVyYXRpb24gPSAodmlzdWFsRWxlbWVudC52YXJpYW50Q2hpbGRyZW5PcmRlci5zaXplIC0gMSkgKiBzdGFnZ2VyQ2hpbGRyZW47XG4gICAgdmFyIGdlbmVyYXRlU3RhZ2dlckR1cmF0aW9uID0gc3RhZ2dlckRpcmVjdGlvbiA9PT0gMVxuICAgICAgICA/IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpICogc3RhZ2dlckNoaWxkcmVuOyB9XG4gICAgICAgIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIG1heFN0YWdnZXJEdXJhdGlvbiAtIGkgKiBzdGFnZ2VyQ2hpbGRyZW47IH07XG4gICAgQXJyYXkuZnJvbSh2aXN1YWxFbGVtZW50LnZhcmlhbnRDaGlsZHJlbk9yZGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaSkge1xuICAgICAgICB2YXIgYW5pbWF0aW9uID0gYW5pbWF0ZVZhcmlhbnQoY2hpbGQsIHZhcmlhbnRMYWJlbCwge1xuICAgICAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgICAgICAgICAgZGVsYXk6IGRlbGF5Q2hpbGRyZW4gKyBnZW5lcmF0ZVN0YWdnZXJEdXJhdGlvbihpKSxcbiAgICAgICAgICAgIGN1c3RvbTogY3VzdG9tLFxuICAgICAgICB9KTtcbiAgICAgICAgYW5pbWF0aW9ucy5wdXNoKGFuaW1hdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKGFuaW1hdGlvbnMpO1xufVxuZnVuY3Rpb24gc3RvcEFuaW1hdGlvbih2aXN1YWxFbGVtZW50KSB7XG4gICAgdmlzdWFsRWxlbWVudC5mb3JFYWNoVmFsdWUoZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB2YWx1ZS5zdG9wKCk7IH0pO1xufVxuZnVuY3Rpb24gYW5pbWF0ZVRhcmdldCh2aXN1YWxFbGVtZW50LCBkZWZpbml0aW9uLCBfYSkge1xuICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBfYyA9IF9iLmRlbGF5LCBkZWxheSA9IF9jID09PSB2b2lkIDAgPyAwIDogX2MsIF9kID0gX2IucHJpb3JpdHksIHByaW9yaXR5ID0gX2QgPT09IHZvaWQgMCA/IDAgOiBfZCwgdHJhbnNpdGlvbk92ZXJyaWRlID0gX2IudHJhbnNpdGlvbk92ZXJyaWRlLCBjdXN0b20gPSBfYi5jdXN0b207XG4gICAgdmFyIHRhcmdldEFuZFRyYW5zaXRpb24gPSByZXNvbHZlVmFyaWFudCh2aXN1YWxFbGVtZW50LCBkZWZpbml0aW9uLCBjdXN0b20pO1xuICAgIGlmICh0cmFuc2l0aW9uT3ZlcnJpZGUpXG4gICAgICAgIHRhcmdldEFuZFRyYW5zaXRpb24udHJhbnNpdGlvbiA9IHRyYW5zaXRpb25PdmVycmlkZTtcbiAgICB2YXIgX2UgPSB2aXN1YWxFbGVtZW50Lm1ha2VUYXJnZXRBbmltYXRhYmxlKHRhcmdldEFuZFRyYW5zaXRpb24pLCB0cmFuc2l0aW9uRW5kID0gX2UudHJhbnNpdGlvbkVuZCwgdHJhbnNpdGlvbiA9IF9lLnRyYW5zaXRpb24sIHRhcmdldCA9IF9fcmVzdChfZSwgW1widHJhbnNpdGlvbkVuZFwiLCBcInRyYW5zaXRpb25cIl0pO1xuICAgIGlmIChwcmlvcml0eSlcbiAgICAgICAgdmlzdWFsRWxlbWVudC5yZXNvbHZlZE92ZXJyaWRlc1twcmlvcml0eV0gPSB0YXJnZXQ7XG4gICAgdmFyIGFuaW1hdGlvbnMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHZpc3VhbEVsZW1lbnQuZ2V0VmFsdWUoa2V5KTtcbiAgICAgICAgaWYgKCF2YWx1ZSB8fCAhdGFyZ2V0IHx8IHRhcmdldFtrZXldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgdmFyIHZhbHVlVGFyZ2V0ID0gdGFyZ2V0W2tleV07XG4gICAgICAgIGlmICghcHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHZpc3VhbEVsZW1lbnQuYmFzZVRhcmdldFtrZXldID0gcmVzb2x2ZUZpbmFsVmFsdWVJbktleWZyYW1lcyh2YWx1ZVRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZpc3VhbEVsZW1lbnQuaXNBbmltYXRpbmcuaGFzKGtleSkpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgdmlzdWFsRWxlbWVudC5pc0FuaW1hdGluZy5hZGQoa2V5KTtcbiAgICAgICAgYW5pbWF0aW9ucy5wdXNoKHN0YXJ0QW5pbWF0aW9uKGtleSwgdmFsdWUsIHZhbHVlVGFyZ2V0LCBfX2Fzc2lnbih7IGRlbGF5OiBkZWxheSB9LCB0cmFuc2l0aW9uKSkpO1xuICAgIH1cbiAgICB2YXIgYWxsQW5pbWF0aW9ucyA9IFByb21pc2UuYWxsKGFuaW1hdGlvbnMpO1xuICAgIHJldHVybiB0cmFuc2l0aW9uRW5kXG4gICAgICAgID8gYWxsQW5pbWF0aW9ucy50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXRUYXJnZXQodmlzdWFsRWxlbWVudCwgdHJhbnNpdGlvbkVuZCwgeyBwcmlvcml0eTogcHJpb3JpdHkgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIDogYWxsQW5pbWF0aW9ucztcbn1cblxuZnVuY3Rpb24gc2V0T3ZlcnJpZGUodmlzdWFsRWxlbWVudCwgZGVmaW5pdGlvbiwgaW5kZXgpIHtcbiAgICB2YXIgX2E7XG4gICAgdmlzdWFsRWxlbWVudC5vdmVycmlkZXNbaW5kZXhdID0gZGVmaW5pdGlvbjtcbiAgICAoX2EgPSB2aXN1YWxFbGVtZW50LnZhcmlhbnRDaGlsZHJlbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHNldE92ZXJyaWRlKGNoaWxkLCBkZWZpbml0aW9uLCBpbmRleCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzdGFydE92ZXJyaWRlKHZpc3VhbEVsZW1lbnQsIGluZGV4KSB7XG4gICAgdmFyIG92ZXJyaWRlID0gdmlzdWFsRWxlbWVudC5vdmVycmlkZXNbaW5kZXhdO1xuICAgIGlmIChvdmVycmlkZSkge1xuICAgICAgICByZXR1cm4gc3RhcnRWaXN1YWxFbGVtZW50QW5pbWF0aW9uKHZpc3VhbEVsZW1lbnQsIG92ZXJyaWRlLCB7XG4gICAgICAgICAgICBwcmlvcml0eTogaW5kZXgsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsZWFyT3ZlcnJpZGUodmlzdWFsRWxlbWVudCwgaW5kZXgpIHtcbiAgICB2YXIgX2E7XG4gICAgKF9hID0gdmlzdWFsRWxlbWVudC52YXJpYW50Q2hpbGRyZW5PcmRlcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGNsZWFyT3ZlcnJpZGUoY2hpbGQsIGluZGV4KTtcbiAgICB9KTtcbiAgICB2YXIgb3ZlcnJpZGUgPSB2aXN1YWxFbGVtZW50Lm92ZXJyaWRlc1tpbmRleF07XG4gICAgaWYgKCFvdmVycmlkZSlcbiAgICAgICAgcmV0dXJuO1xuICAgIHZpc3VhbEVsZW1lbnQuYWN0aXZlT3ZlcnJpZGVzLmRlbGV0ZShpbmRleCk7XG4gICAgdmFyIGhpZ2hlc3QgPSBnZXRIaWdoZXN0T3ZlcnJpZGVQcmlvcnRpeSh2aXN1YWxFbGVtZW50KTtcbiAgICB2aXN1YWxFbGVtZW50LnJlc2V0SXNBbmltYXRpbmcoKTtcbiAgICBpZiAoaGlnaGVzdCkge1xuICAgICAgICB2YXIgaGlnaGVzdE92ZXJyaWRlID0gdmlzdWFsRWxlbWVudC5vdmVycmlkZXNbaGlnaGVzdF07XG4gICAgICAgIGhpZ2hlc3RPdmVycmlkZSAmJiBzdGFydE92ZXJyaWRlKHZpc3VhbEVsZW1lbnQsIGhpZ2hlc3QpO1xuICAgIH1cbiAgICAvLyBGaWd1cmUgb3V0IHdoaWNoIHJlbWFpbmluZyB2YWx1ZXMgd2VyZSBhZmZlY3RlZCBieSB0aGUgb3ZlcnJpZGUgYW5kIGFuaW1hdGUgdGhvc2VcbiAgICB2YXIgb3ZlcnJpZGVUYXJnZXQgPSB2aXN1YWxFbGVtZW50LnJlc29sdmVkT3ZlcnJpZGVzW2luZGV4XTtcbiAgICBpZiAoIW92ZXJyaWRlVGFyZ2V0KVxuICAgICAgICByZXR1cm47XG4gICAgdmFyIHJlbWFpbmluZ1ZhbHVlcyA9IHt9O1xuICAgIGZvciAodmFyIGtleSBpbiB2aXN1YWxFbGVtZW50LmJhc2VUYXJnZXQpIHtcbiAgICAgICAgaWYgKG92ZXJyaWRlVGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVtYWluaW5nVmFsdWVzW2tleV0gPSB2aXN1YWxFbGVtZW50LmJhc2VUYXJnZXRba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2aXN1YWxFbGVtZW50Lm9uQW5pbWF0aW9uU3RhcnQoKTtcbiAgICBhbmltYXRlVGFyZ2V0KHZpc3VhbEVsZW1lbnQsIHJlbWFpbmluZ1ZhbHVlcykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZpc3VhbEVsZW1lbnQub25BbmltYXRpb25Db21wbGV0ZSgpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0SGlnaGVzdE92ZXJyaWRlUHJpb3J0aXkodmlzdWFsRWxlbWVudCkge1xuICAgIGlmICghdmlzdWFsRWxlbWVudC5hY3RpdmVPdmVycmlkZXMuc2l6ZSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KE1hdGgsIF9fc3ByZWFkKEFycmF5LmZyb20odmlzdWFsRWxlbWVudC5hY3RpdmVPdmVycmlkZXMpKSk7XG59XG5cbi8qKlxuICogVmlzdWFsRWxlbWVudCBpcyBhbiBhYnN0cmFjdCBjbGFzcyB0aGF0IHByb3ZpZGVzIGEgZ2VuZXJpYyBhbmltYXRpb24tb3B0aW1pc2VkIGludGVyZmFjZSB0byB0aGVcbiAqIHVuZGVybHlpbmcgcmVuZGVyZXIuXG4gKlxuICogQ3VycmVudGx5IG1hbnkgZmVhdHVyZXMgaW50ZXJhY3QgZGlyZWN0bHkgd2l0aCBIVE1MVmlzdWFsRWxlbWVudC9TVkdWaXN1YWxFbGVtZW50XG4gKiBidXQgdGhlIGlkZWEgaXMgd2UgY2FuIGNyZWF0ZSwgZm9yIGluc3RhbmNlLCBhIFRocmVlVmlzdWFsRWxlbWVudCB0aGF0IGV4dGVuZHNcbiAqIFZpc3VhbEVsZW1lbnQgYW5kIHdlIGNhbiBxdWlja2x5IG9mZmVyIGFsbCB0aGUgc2FtZSBmZWF0dXJlcy5cbiAqL1xudmFyIFZpc3VhbEVsZW1lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVmlzdWFsRWxlbWVudChwYXJlbnQsIHJlZikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBBbiBpdGVyYWJsZSBsaXN0IG9mIGN1cnJlbnQgY2hpbGRyZW5cbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IG5ldyBTZXQoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgc2V0IG9mIHZhbHVlcyB0aGF0IHdlIGFuaW1hdGUgYmFjayB0byB3aGVuIGEgdmFsdWUgaXMgY2xlYXJlZCBvZiBhbGwgb3ZlcnJpZGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5iYXNlVGFyZ2V0ID0ge307XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHNlcmllcyBvZiB0YXJnZXQgb3ZlcnJpZGVzIHRoYXQgd2UgY2FuIGFuaW1hdGUgdG8vZnJvbSB3aGVuIG92ZXJyaWRlcyBhcmUgc2V0L2NsZWFyZWQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLm92ZXJyaWRlcyA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBzZXJpZXMgb2YgdGFyZ2V0IG92ZXJyaWRlcyBhcyB0aGV5IHdlcmUgb3JpZ2luYWxseSByZXNvbHZlZC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucmVzb2x2ZWRPdmVycmlkZXMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgU2V0IG9mIGN1cnJlbnRseSBhY3RpdmUgb3ZlcnJpZGUgaW5kZXhlc1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5hY3RpdmVPdmVycmlkZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIFNldCBvZiB2YWx1ZSBrZXlzIHRoYXQgYXJlIGN1cnJlbnRseSBhbmltYXRpbmcuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nID0gbmV3IFNldCgpO1xuICAgICAgICAvLyBUaGUgbGF0ZXN0IHJlc29sdmVkIE1vdGlvblZhbHVlc1xuICAgICAgICB0aGlzLmxhdGVzdCA9IHt9O1xuICAgICAgICAvLyBBIG1hcCBvZiBNb3Rpb25WYWx1ZXMgdXNlZCB0byBhbmltYXRlIHRoaXMgZWxlbWVudFxuICAgICAgICB0aGlzLnZhbHVlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgLy8gVW5zdWJzY3JpcHRpb24gY2FsbGJhY2tzIGZvciBNb3Rpb25WYWx1ZSBzdWJzY3JpcHRpb25zXG4gICAgICAgIHRoaXMudmFsdWVTdWJzY3JpcHRpb25zID0gbmV3IE1hcCgpO1xuICAgICAgICAvLyBBIGNvbmZpZ3VyYXRpb24gZm9yIHRoaXMgVmlzdWFsRWxlbWVudCwgZWFjaCBkZXJpdmVkIGNsYXNzIGNhbiBleHRlbmQgdGhpcy5cbiAgICAgICAgdGhpcy5jb25maWcgPSB7fTtcbiAgICAgICAgdGhpcy5pc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gQSBwcmUtYm91bmQgY2FsbCB0byB0aGUgdXNlci1wcm92aWRlZCBgb25VcGRhdGVgIGNhbGxiYWNrLiBUaGlzIHdvbid0XG4gICAgICAgIC8vIGJlIGNhbGxlZCBtb3JlIHRoYW4gb25jZSBwZXIgZnJhbWUuXG4gICAgICAgIHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuY29uZmlnLm9uVXBkYXRlKF90aGlzLmxhdGVzdCk7IH07XG4gICAgICAgIC8vIFByZS1ib3VuZCB2ZXJzaW9uIG9mIHJlbmRlclxuICAgICAgICB0aGlzLnRyaWdnZXJSZW5kZXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5yZW5kZXIoKTsgfTtcbiAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBnZXRzIHBhc3NlZCB0byB0aGUgcmVuZGVyZWQgY29tcG9uZW50J3MgYHJlZmAgcHJvcFxuICAgICAgICAvLyBhbmQgaXMgdXNlZCB0byBtb3VudC91bm1vdW50IHRoZSBWaXN1YWxFbGVtZW50XG4gICAgICAgIHRoaXMucmVmID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPyBfdGhpcy5tb3VudChlbGVtZW50KSA6IF90aGlzLnVubW91bnQoKTtcbiAgICAgICAgICAgIGlmICghX3RoaXMuZXh0ZXJuYWxSZWYpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5leHRlcm5hbFJlZiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZXh0ZXJuYWxSZWYoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc1JlZk9iamVjdChfdGhpcy5leHRlcm5hbFJlZikpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5leHRlcm5hbFJlZi5jdXJyZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQ3JlYXRlIGEgcmVsYXRpb25zaGlwIHdpdGggdGhlIHByb3ZpZGVkIHBhcmVudC5cbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMucm9vdFBhcmVudCA9IHBhcmVudCA/IHBhcmVudC5yb290UGFyZW50IDogdGhpcztcbiAgICAgICAgdGhpcy50cmVlUGF0aCA9IHBhcmVudCA/IF9fc3ByZWFkKHBhcmVudC50cmVlUGF0aCwgW3BhcmVudF0pIDogW107XG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGVwdGggb2YgdGhpcyBub2RlIGluIHRoZSBWaXN1YWxFbGVtZW50IGdyYXBoXG4gICAgICAgIHRoaXMuZGVwdGggPSBwYXJlbnQgPyBwYXJlbnQuZGVwdGggKyAxIDogMDtcbiAgICAgICAgLy8gQSByZWZlcmVuY2UgdG8gYW55IGV4dGVybmFsbHktZGVmaW5lZCBSZWFjdCByZWYuIFRoaXMgbWlnaHQgbGl2ZSBiZXR0ZXJcbiAgICAgICAgLy8gb3V0c2lkZSB0aGUgVmlzdWFsRWxlbWVudCBhbmQgYmUgaGFuZGxlZCBpbiBhIGhvb2suXG4gICAgICAgIHRoaXMuZXh0ZXJuYWxSZWYgPSByZWY7XG4gICAgfVxuICAgIFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLmdldFZhcmlhbnRQYXlsb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuY3VzdG9tO1xuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuZ2V0VmFyaWFudCA9IGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoX2EgPSB0aGlzLmNvbmZpZy52YXJpYW50cykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW2xhYmVsXTtcbiAgICB9O1xuICAgIFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLmFkZFZhcmlhbnRDaGlsZCA9IGZ1bmN0aW9uICh2aXN1YWxFbGVtZW50KSB7XG4gICAgICAgIGlmICghdGhpcy52YXJpYW50Q2hpbGRyZW4pXG4gICAgICAgICAgICB0aGlzLnZhcmlhbnRDaGlsZHJlbiA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy52YXJpYW50Q2hpbGRyZW4uYWRkKHZpc3VhbEVsZW1lbnQpO1xuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuYWRkVmFyaWFudENoaWxkT3JkZXIgPSBmdW5jdGlvbiAodmlzdWFsRWxlbWVudCkge1xuICAgICAgICBpZiAoIXRoaXMudmFyaWFudENoaWxkcmVuT3JkZXIpXG4gICAgICAgICAgICB0aGlzLnZhcmlhbnRDaGlsZHJlbk9yZGVyID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLnZhcmlhbnRDaGlsZHJlbk9yZGVyLmFkZCh2aXN1YWxFbGVtZW50KTtcbiAgICB9O1xuICAgIFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLm9uQW5pbWF0aW9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMuY29uZmlnKS5vbkFuaW1hdGlvblN0YXJ0KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSk7XG4gICAgfTtcbiAgICBWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5vbkFuaW1hdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB0aGlzLmlzTW91bnRlZCAmJiAoKF9iID0gKF9hID0gdGhpcy5jb25maWcpLm9uQW5pbWF0aW9uQ29tcGxldGUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hKSk7XG4gICAgfTtcbiAgICBWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5nZXREZWZhdWx0VHJhbnNpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnLnRyYW5zaXRpb247XG4gICAgfTtcbiAgICBWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5yZXNldElzQW5pbWF0aW5nID0gZnVuY3Rpb24gKHByaW9yaXR5KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSB2b2lkIDApIHsgcHJpb3JpdHkgPSAwOyB9XG4gICAgICAgIHRoaXMuaXNBbmltYXRpbmcuY2xlYXIoKTtcbiAgICAgICAgLy8gSWYgdGhpcyBpc24ndCB0aGUgaGlnaGVzdCBwcmlvcml0eSBnZXN0dXJlLCBibG9jayB0aGUgYW5pbWF0aW9uXG4gICAgICAgIC8vIG9mIGFueXRoaW5nIHRoYXQncyBjdXJyZW50bHkgYmVpbmcgYW5pbWF0ZWRcbiAgICAgICAgaWYgKHByaW9yaXR5IDwgZ2V0SGlnaGVzdE92ZXJyaWRlUHJpb3J0aXkodGhpcykpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tPdmVycmlkZUlzQW5pbWF0aW5nKHByaW9yaXR5KTtcbiAgICAgICAgfVxuICAgICAgICAoX2EgPSB0aGlzLnZhcmlhbnRDaGlsZHJlbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGQucmVzZXRJc0FuaW1hdGluZyhwcmlvcml0eSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuY2hlY2tPdmVycmlkZUlzQW5pbWF0aW5nID0gZnVuY3Rpb24gKHByaW9yaXR5KSB7XG4gICAgICAgIHZhciBudW1PdmVycmlkZXMgPSB0aGlzLm92ZXJyaWRlcy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSBwcmlvcml0eSArIDE7IGkgPCBudW1PdmVycmlkZXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIHJlc29sdmVkT3ZlcnJpZGUgPSB0aGlzLnJlc29sdmVkT3ZlcnJpZGVzW2ldO1xuICAgICAgICAgICAgaWYgKHJlc29sdmVkT3ZlcnJpZGUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gcmVzb2x2ZWRPdmVycmlkZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQW5pbWF0aW5nLmFkZChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uYWRkKGNoaWxkKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmNoaWxkcmVuLmRlbGV0ZShjaGlsZCk7IH07XG4gICAgfTtcbiAgICAvLyBDaGVjayB3aGV0aGVyIHRoaXMgZWxlbWVudCBoYXMgYSBNb3Rpb25WYWx1ZSBvZiB0aGUgcHJvdmlkZWQga2V5XG4gICAgVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuaGFzVmFsdWUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlcy5oYXMoa2V5KTtcbiAgICB9O1xuICAgIC8vIEFkZCBhIE1vdGlvblZhbHVlXG4gICAgVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuYWRkVmFsdWUgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5oYXNWYWx1ZShrZXkpKVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVWYWx1ZShrZXkpO1xuICAgICAgICB0aGlzLnZhbHVlcy5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0U2luZ2xlU3RhdGljVmFsdWUoa2V5LCB2YWx1ZS5nZXQoKSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVG9WYWx1ZShrZXksIHZhbHVlKTtcbiAgICB9O1xuICAgIC8vIFJlbW92ZSBhIE1vdGlvblZhbHVlXG4gICAgVmlzdWFsRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlVmFsdWUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy52YWx1ZVN1YnNjcmlwdGlvbnMuZ2V0KGtleSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYSgpO1xuICAgICAgICB0aGlzLnZhbHVlU3Vic2NyaXB0aW9ucy5kZWxldGUoa2V5KTtcbiAgICAgICAgdGhpcy52YWx1ZXMuZGVsZXRlKGtleSk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmxhdGVzdFtrZXldO1xuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoa2V5LCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXMuZ2V0KGtleSk7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ldyBNb3Rpb25WYWx1ZShkZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5hZGRWYWx1ZShrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIE1vdGlvblZhbHVlc1xuICAgIFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLmZvckVhY2hWYWx1ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnZhbHVlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIC8vIEdldCB0aGUgdW5kZXJseWluZyByZW5kZXJlZCBpbnN0YW5jZSBvZiB0aGlzIFZpc3VhbEVsZW1lbnQuIEZvciBpbnN0YW5jZSBpblxuICAgIC8vIEhUTUxWaXN1YWxFbGVtZW50IHRoaXMgd2lsbCBiZSBhIEhUTUxFbGVtZW50LlxuICAgIFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLmdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudC5wcm90b3R5cGUudXBkYXRlQ29uZmlnID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHsgY29uZmlnID0ge307IH1cbiAgICAgICAgdGhpcy5jb25maWcgPSBfX2Fzc2lnbih7fSwgY29uZmlnKTtcbiAgICB9O1xuICAgIC8vIFNldCBhIHNpbmdsZSBgbGF0ZXN0YCB2YWx1ZVxuICAgIFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLnNldFNpbmdsZVN0YXRpY1ZhbHVlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5sYXRlc3Rba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gICAgLy8gU3RhdGljYWxseSBzZXQgdmFsdWVzIHRvIGBsYXRlc3RgIHdpdGhvdXQgbmVlZGluZyBhIE1vdGlvblZhbHVlXG4gICAgVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuc2V0U3RhdGljVmFsdWVzID0gZnVuY3Rpb24gKHZhbHVlcywgdmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2luZ2xlU3RhdGljVmFsdWUodmFsdWVzLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTaW5nbGVTdGF0aWNWYWx1ZShrZXksIHZhbHVlc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuc2NoZWR1bGVSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN5bmMucmVuZGVyKHRoaXMudHJpZ2dlclJlbmRlciwgZmFsc2UsIHRydWUpO1xuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuc2NoZWR1bGVVcGRhdGVMYXlvdXREZWx0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3luYy5wcmVSZW5kZXIodGhpcy5yb290UGFyZW50LnVwZGF0ZUxheW91dERlbHRhLCBmYWxzZSwgdHJ1ZSk7XG4gICAgfTtcbiAgICBWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5zdWJzY3JpYmVUb1ZhbHVlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG9uQ2hhbmdlID0gZnVuY3Rpb24gKGxhdGVzdCkge1xuICAgICAgICAgICAgX3RoaXMuc2V0U2luZ2xlU3RhdGljVmFsdWUoa2V5LCBsYXRlc3QpO1xuICAgICAgICAgICAgLy8gU2NoZWR1bGUgb25VcGRhdGUgaWYgd2UgaGF2ZSBhbiBvblVwZGF0ZSBsaXN0ZW5lciBhbmQgdGhlIGNvbXBvbmVudCBoYXMgbW91bnRlZFxuICAgICAgICAgICAgX3RoaXMuZWxlbWVudCAmJlxuICAgICAgICAgICAgICAgIF90aGlzLmNvbmZpZy5vblVwZGF0ZSAmJlxuICAgICAgICAgICAgICAgIHN5bmMudXBkYXRlKF90aGlzLnVwZGF0ZSwgZmFsc2UsIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25SZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5lbGVtZW50ICYmIF90aGlzLnNjaGVkdWxlUmVuZGVyKCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB1bnN1YnNjcmliZU9uQ2hhbmdlID0gdmFsdWUub25DaGFuZ2Uob25DaGFuZ2UpO1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmVPblJlbmRlciA9IHZhbHVlLm9uUmVuZGVyUmVxdWVzdChvblJlbmRlcik7XG4gICAgICAgIHRoaXMudmFsdWVTdWJzY3JpcHRpb25zLnNldChrZXksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlT25DaGFuZ2UoKTtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlT25SZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBNb3VudCB0aGUgVmlzdWFsRWxlbWVudCB3aXRoIHRoZSBhY3R1YWwgRE9NIGVsZW1lbnRcbiAgICBWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGludmFyaWFudCghIWVsZW1lbnQsIFwiTm8gcmVmIGZvdW5kLiBFbnN1cmUgY29tcG9uZW50cyBjcmVhdGVkIHdpdGggbW90aW9uLmN1c3RvbSBmb3J3YXJkIHJlZnMgdXNpbmcgUmVhY3QuZm9yd2FyZFJlZlwiKTtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUZyb21QYXJlbnQgPSB0aGlzLnBhcmVudC5zdWJzY3JpYmUodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNhdmUgdGhlIGVsZW1lbnQgdG8gdGhpcy5lbGVtZW50IGFzIGEgc2VtYW50aWMgQVBJLCB0aGlzLmN1cnJlbnQgdG8gdGhlIFZpc3VhbEVsZW1lbnRcbiAgICAgICAgICogaXMgY29tcGF0aWJsZSB3aXRoIGV4aXN0aW5nIFJlZk9iamVjdCBBUElzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5jdXJyZW50ID0gZWxlbWVudDtcbiAgICB9O1xuICAgIC8vIFVubW91bnQgdGhlIFZpc3VhbEVsZW1lbnQgYW5kIGNhbmNlbCBhbnkgc2NoZWR1bGVkIHVwZGF0ZXNcbiAgICBWaXN1YWxFbGVtZW50LnByb3RvdHlwZS51bm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmZvckVhY2hWYWx1ZShmdW5jdGlvbiAoXywga2V5KSB7IHJldHVybiBfdGhpcy5yZW1vdmVWYWx1ZShrZXkpOyB9KTtcbiAgICAgICAgY2FuY2VsU3luYy51cGRhdGUodGhpcy51cGRhdGUpO1xuICAgICAgICBjYW5jZWxTeW5jLnJlbmRlcih0aGlzLnJlbmRlcik7XG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbVBhcmVudCAmJiB0aGlzLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICB9O1xuICAgIHJldHVybiBWaXN1YWxFbGVtZW50O1xufSgpKTtcblxuZnVuY3Rpb24gbm9vcChhbnkpIHtcbiAgICByZXR1cm4gYW55O1xufVxuXG4vKipcbiAqIEJvdW5kaW5nIGJveGVzIHRlbmQgdG8gYmUgZGVmaW5lZCBhcyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20uIEZvciB2YXJpb3VzIG9wZXJhdGlvbnNcbiAqIGl0J3MgZWFzaWVyIHRvIGNvbnNpZGVyIGVhY2ggYXhpcyBpbmRpdmlkdWFsbHkuIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhIGJvdW5kaW5nIGJveFxuICogYXMgYSBtYXAgb2Ygc2luZ2xlLWF4aXMgbWluL21heCB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRCb3VuZGluZ0JveFRvQXhpc0JveChfYSkge1xuICAgIHZhciB0b3AgPSBfYS50b3AsIGxlZnQgPSBfYS5sZWZ0LCByaWdodCA9IF9hLnJpZ2h0LCBib3R0b20gPSBfYS5ib3R0b207XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogeyBtaW46IGxlZnQsIG1heDogcmlnaHQgfSxcbiAgICAgICAgeTogeyBtaW46IHRvcCwgbWF4OiBib3R0b20gfSxcbiAgICB9O1xufVxuZnVuY3Rpb24gY29udmVydEF4aXNCb3hUb0JvdW5kaW5nQm94KF9hKSB7XG4gICAgdmFyIHggPSBfYS54LCB5ID0gX2EueTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IHkubWluLFxuICAgICAgICBib3R0b206IHkubWF4LFxuICAgICAgICBsZWZ0OiB4Lm1pbixcbiAgICAgICAgcmlnaHQ6IHgubWF4LFxuICAgIH07XG59XG4vKipcbiAqIEFwcGxpZXMgYSBUcmFuc2Zvcm1Qb2ludCBmdW5jdGlvbiB0byBhIGJvdW5kaW5nIGJveC4gVHJhbnNmb3JtUG9pbnQgaXMgdXN1YWxseSBhIGZ1bmN0aW9uXG4gKiBwcm92aWRlZCBieSBGcmFtZXIgdG8gYWxsb3cgbWVhc3VyZWQgcG9pbnRzIHRvIGJlIGNvcnJlY3RlZCBmb3IgZGV2aWNlIHNjYWxpbmcuIFRoaXMgaXMgdXNlZFxuICogd2hlbiBtZWFzdXJpbmcgRE9NIGVsZW1lbnRzIGFuZCBET00gZXZlbnQgcG9pbnRzLlxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1Cb3VuZGluZ0JveChfYSwgdHJhbnNmb3JtUG9pbnQpIHtcbiAgICB2YXIgdG9wID0gX2EudG9wLCBsZWZ0ID0gX2EubGVmdCwgYm90dG9tID0gX2EuYm90dG9tLCByaWdodCA9IF9hLnJpZ2h0O1xuICAgIGlmICh0cmFuc2Zvcm1Qb2ludCA9PT0gdm9pZCAwKSB7IHRyYW5zZm9ybVBvaW50ID0gbm9vcDsgfVxuICAgIHZhciB0b3BMZWZ0ID0gdHJhbnNmb3JtUG9pbnQoeyB4OiBsZWZ0LCB5OiB0b3AgfSk7XG4gICAgdmFyIGJvdHRvbVJpZ2h0ID0gdHJhbnNmb3JtUG9pbnQoeyB4OiByaWdodCwgeTogYm90dG9tIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogdG9wTGVmdC55LFxuICAgICAgICBsZWZ0OiB0b3BMZWZ0LngsXG4gICAgICAgIGJvdHRvbTogYm90dG9tUmlnaHQueSxcbiAgICAgICAgcmlnaHQ6IGJvdHRvbVJpZ2h0LngsXG4gICAgfTtcbn1cbi8qKlxuICogQ3JlYXRlIGFuIGVtcHR5IGF4aXMgYm94IG9mIHplcm8gc2l6ZVxuICovXG5mdW5jdGlvbiBheGlzQm94KCkge1xuICAgIHJldHVybiB7IHg6IHsgbWluOiAwLCBtYXg6IDEgfSwgeTogeyBtaW46IDAsIG1heDogMSB9IH07XG59XG5mdW5jdGlvbiBjb3B5QXhpc0JveChib3gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBfX2Fzc2lnbih7fSwgYm94LngpLFxuICAgICAgICB5OiBfX2Fzc2lnbih7fSwgYm94LnkpLFxuICAgIH07XG59XG4vKipcbiAqIENyZWF0ZSBhbiBlbXB0eSBib3ggZGVsdGFcbiAqL1xudmFyIHplcm9EZWx0YSA9IHtcbiAgICB0cmFuc2xhdGU6IDAsXG4gICAgc2NhbGU6IDEsXG4gICAgb3JpZ2luOiAwLFxuICAgIG9yaWdpblBvaW50OiAwLFxufTtcbmZ1bmN0aW9uIGRlbHRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IF9fYXNzaWduKHt9LCB6ZXJvRGVsdGEpLFxuICAgICAgICB5OiBfX2Fzc2lnbih7fSwgemVyb0RlbHRhKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgbGlzdCBvZiBhbGwgdHJhbnNmb3JtYWJsZSBheGVzLiBXZSdsbCB1c2UgdGhpcyBsaXN0IHRvIGdlbmVyYXRlZCBhIHZlcnNpb25cbiAqIG9mIGVhY2ggYXhlcyBmb3IgZWFjaCB0cmFuc2Zvcm0uXG4gKi9cbnZhciB0cmFuc2Zvcm1BeGVzID0gW1wiXCIsIFwiWFwiLCBcIllcIiwgXCJaXCJdO1xuLyoqXG4gKiBBbiBvcmRlcmVkIGFycmF5IG9mIGVhY2ggdHJhbnNmb3JtYWJsZSB2YWx1ZS4gQnkgZGVmYXVsdCwgdHJhbnNmb3JtIHZhbHVlc1xuICogd2lsbCBiZSBzb3J0ZWQgdG8gdGhpcyBvcmRlci5cbiAqL1xudmFyIG9yZGVyID0gW1wicGVyc3BlY3RpdmVcIiwgXCJ0cmFuc2xhdGVcIiwgXCJzY2FsZVwiLCBcInJvdGF0ZVwiLCBcInNrZXdcIl07XG4vKipcbiAqIFVzZWQgdG8gc3RvcmUgdGhlIGtleXMgb2YgYWxsIHRyYW5zZm9ybXMgdGhhdCB3aWxsIGRpc3RvcnRlZCBhIG1lYXN1cmVkIGJvdW5kaW5nIGJveC5cbiAqL1xudmFyIGJveERpc3RvcnRpbmdLZXlzID0gbmV3IFNldCgpO1xuLyoqXG4gKiBHZW5lcmF0ZSBhIGxpc3Qgb2YgZXZlcnkgcG9zc2libGUgdHJhbnNmb3JtIGtleS5cbiAqL1xudmFyIHRyYW5zZm9ybVByb3BzID0gW1widHJhbnNmb3JtUGVyc3BlY3RpdmVcIiwgXCJ4XCIsIFwieVwiLCBcInpcIl07XG5vcmRlci5mb3JFYWNoKGZ1bmN0aW9uIChvcGVyYXRpb25LZXkpIHtcbiAgICB2YXIgaXNEaXN0b3J0aW5nID0gbmV3IFNldChbXCJyb3RhdGVcIiwgXCJza2V3XCJdKS5oYXMob3BlcmF0aW9uS2V5KTtcbiAgICB0cmFuc2Zvcm1BeGVzLmZvckVhY2goZnVuY3Rpb24gKGF4ZXNLZXkpIHtcbiAgICAgICAgdmFyIGtleSA9IG9wZXJhdGlvbktleSArIGF4ZXNLZXk7XG4gICAgICAgIHRyYW5zZm9ybVByb3BzLnB1c2goa2V5KTtcbiAgICAgICAgaXNEaXN0b3J0aW5nICYmIGJveERpc3RvcnRpbmdLZXlzLmFkZChrZXkpO1xuICAgIH0pO1xufSk7XG4vKipcbiAqIEEgZnVuY3Rpb24gdG8gdXNlIHdpdGggQXJyYXkuc29ydCB0byBzb3J0IHRyYW5zZm9ybSBrZXlzIGJ5IHRoZWlyIGRlZmF1bHQgb3JkZXIuXG4gKi9cbmZ1bmN0aW9uIHNvcnRUcmFuc2Zvcm1Qcm9wcyhhLCBiKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybVByb3BzLmluZGV4T2YoYSkgLSB0cmFuc2Zvcm1Qcm9wcy5pbmRleE9mKGIpO1xufVxuLyoqXG4gKiBBIHF1aWNrIGxvb2t1cCBmb3IgdHJhbnNmb3JtIHByb3BzLlxuICovXG52YXIgdHJhbnNmb3JtUHJvcFNldCA9IG5ldyBTZXQodHJhbnNmb3JtUHJvcHMpO1xuZnVuY3Rpb24gaXNUcmFuc2Zvcm1Qcm9wKGtleSkge1xuICAgIHJldHVybiB0cmFuc2Zvcm1Qcm9wU2V0LmhhcyhrZXkpO1xufVxuLyoqXG4gKiBBIHF1aWNrIGxvb2t1cCBmb3IgdHJhbnNmb3JtIG9yaWdpbiBwcm9wc1xuICovXG52YXIgdHJhbnNmb3JtT3JpZ2luUHJvcHMgPSBuZXcgU2V0KFtcIm9yaWdpblhcIiwgXCJvcmlnaW5ZXCIsIFwib3JpZ2luWlwiXSk7XG5mdW5jdGlvbiBpc1RyYW5zZm9ybU9yaWdpblByb3Aoa2V5KSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybU9yaWdpblByb3BzLmhhcyhrZXkpO1xufVxuXG52YXIgdHJhbnNsYXRlQWxpYXMgPSB7XG4gICAgeDogXCJ0cmFuc2xhdGVYXCIsXG4gICAgeTogXCJ0cmFuc2xhdGVZXCIsXG4gICAgejogXCJ0cmFuc2xhdGVaXCIsXG4gICAgdHJhbnNmb3JtUGVyc3BlY3RpdmU6IFwicGVyc3BlY3RpdmVcIixcbn07XG4vKipcbiAqIEJ1aWxkIGEgQ1NTIHRyYW5zZm9ybSBzdHlsZSBmcm9tIGluZGl2aWR1YWwgeC95L3NjYWxlIGV0YyBwcm9wZXJ0aWVzLlxuICpcbiAqIFRoaXMgb3V0cHV0cyB3aXRoIGEgZGVmYXVsdCBvcmRlciBvZiB0cmFuc2Zvcm1zL3NjYWxlcy9yb3RhdGlvbnMsIHRoaXMgY2FuIGJlIGN1c3RvbWlzZWQgYnlcbiAqIHByb3ZpZGluZyBhIHRyYW5zZm9ybVRlbXBsYXRlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBidWlsZFRyYW5zZm9ybSh0cmFuc2Zvcm0sIHRyYW5zZm9ybUtleXMsIHRyYW5zZm9ybVRlbXBsYXRlLCB0cmFuc2Zvcm1Jc0RlZmF1bHQsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uLCBhbGxvd1RyYW5zZm9ybU5vbmUpIHtcbiAgICBpZiAoZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24gPT09IHZvaWQgMCkgeyBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbiA9IHRydWU7IH1cbiAgICBpZiAoYWxsb3dUcmFuc2Zvcm1Ob25lID09PSB2b2lkIDApIHsgYWxsb3dUcmFuc2Zvcm1Ob25lID0gdHJ1ZTsgfVxuICAgIC8vIFRoZSB0cmFuc2Zvcm0gc3RyaW5nIHdlJ3JlIGdvaW5nIHRvIGJ1aWxkIGludG8uXG4gICAgdmFyIHRyYW5zZm9ybVN0cmluZyA9IFwiXCI7XG4gICAgLy8gVHJhbnNmb3JtIGtleXMgaW50byB0aGVpciBkZWZhdWx0IG9yZGVyIC0gdGhpcyB3aWxsIGRldGVybWluZSB0aGUgb3V0cHV0IG9yZGVyLlxuICAgIHRyYW5zZm9ybUtleXMuc29ydChzb3J0VHJhbnNmb3JtUHJvcHMpO1xuICAgIC8vIFRyYWNrIHdoZXRoZXIgdGhlIGRlZmluZWQgdHJhbnNmb3JtIGhhcyBhIGRlZmluZWQgeiBzbyB3ZSBkb24ndCBhZGQgYVxuICAgIC8vIHNlY29uZCB0byBlbmFibGUgaGFyZHdhcmUgYWNjZWxlcmF0aW9uXG4gICAgdmFyIHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcbiAgICAvLyBMb29wIG92ZXIgZWFjaCB0cmFuc2Zvcm0gYW5kIGJ1aWxkIHRoZW0gaW50byB0cmFuc2Zvcm1TdHJpbmdcbiAgICB2YXIgbnVtVHJhbnNmb3JtS2V5cyA9IHRyYW5zZm9ybUtleXMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVHJhbnNmb3JtS2V5czsgaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSB0cmFuc2Zvcm1LZXlzW2ldO1xuICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0gKHRyYW5zbGF0ZUFsaWFzW2tleV0gfHwga2V5KSArIFwiKFwiICsgdHJhbnNmb3JtW2tleV0gKyBcIikgXCI7XG4gICAgICAgIGlmIChrZXkgPT09IFwielwiKVxuICAgICAgICAgICAgdHJhbnNmb3JtSGFzWiA9IHRydWU7XG4gICAgfVxuICAgIGlmICghdHJhbnNmb3JtSGFzWiAmJiBlbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0gXCJ0cmFuc2xhdGVaKDApXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgPSB0cmFuc2Zvcm1TdHJpbmcudHJpbSgpO1xuICAgIH1cbiAgICAvLyBJZiB3ZSBoYXZlIGEgY3VzdG9tIGB0cmFuc2Zvcm1gIHRlbXBsYXRlLCBwYXNzIG91ciB0cmFuc2Zvcm0gdmFsdWVzIGFuZFxuICAgIC8vIGdlbmVyYXRlZCB0cmFuc2Zvcm1TdHJpbmcgdG8gdGhhdCBiZWZvcmUgcmV0dXJuaW5nXG4gICAgaWYgKHRyYW5zZm9ybVRlbXBsYXRlKSB7XG4gICAgICAgIHRyYW5zZm9ybVN0cmluZyA9IHRyYW5zZm9ybVRlbXBsYXRlKHRyYW5zZm9ybSwgdHJhbnNmb3JtSXNEZWZhdWx0ID8gXCJcIiA6IHRyYW5zZm9ybVN0cmluZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGFsbG93VHJhbnNmb3JtTm9uZSAmJiB0cmFuc2Zvcm1Jc0RlZmF1bHQpIHtcbiAgICAgICAgdHJhbnNmb3JtU3RyaW5nID0gXCJub25lXCI7XG4gICAgfVxuICAgIHJldHVybiB0cmFuc2Zvcm1TdHJpbmc7XG59XG4vKipcbiAqIEJ1aWxkIGEgdHJhbnNmb3JtT3JpZ2luIHN0eWxlLiBVc2VzIHRoZSBzYW1lIGRlZmF1bHRzIGFzIHRoZSBicm93c2VyIGZvclxuICogdW5kZWZpbmVkIG9yaWdpbnMuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkVHJhbnNmb3JtT3JpZ2luKF9hKSB7XG4gICAgdmFyIF9iID0gX2Eub3JpZ2luWCwgb3JpZ2luWCA9IF9iID09PSB2b2lkIDAgPyBcIjUwJVwiIDogX2IsIF9jID0gX2Eub3JpZ2luWSwgb3JpZ2luWSA9IF9jID09PSB2b2lkIDAgPyBcIjUwJVwiIDogX2MsIF9kID0gX2Eub3JpZ2luWiwgb3JpZ2luWiA9IF9kID09PSB2b2lkIDAgPyAwIDogX2Q7XG4gICAgcmV0dXJuIG9yaWdpblggKyBcIiBcIiArIG9yaWdpblkgKyBcIiBcIiArIG9yaWdpblo7XG59XG4vKipcbiAqIEJ1aWxkIGEgdHJhbnNmb3JtIHN0eWxlIHRoYXQgdGFrZXMgYSBjYWxjdWxhdGVkIGRlbHRhIGJldHdlZW4gdGhlIGVsZW1lbnQncyBjdXJyZW50XG4gKiBzcGFjZSBvbiBzY3JlZW4gYW5kIHByb2plY3RzIGl0IGludG8gdGhlIGRlc2lyZWQgc3BhY2UuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTGF5b3V0UHJvamVjdGlvblRyYW5zZm9ybShfYSwgdHJlZVNjYWxlKSB7XG4gICAgdmFyIHggPSBfYS54LCB5ID0gX2EueTtcbiAgICAvKipcbiAgICAgKiBUaGUgdHJhbnNsYXRpb25zIHdlIHVzZSB0byBjYWxjdWxhdGUgYXJlIGFsd2F5cyByZWxhdGl2ZSB0byB0aGUgdmlld3BvcnQgY29vcmRpbmF0ZSBzcGFjZS5cbiAgICAgKiBCdXQgd2hlbiB3ZSBhcHBseSBzY2FsZXMsIHdlIGFsc28gc2NhbGUgdGhlIGNvb3JkaW5hdGUgc3BhY2Ugb2YgYW4gZWxlbWVudCBhbmQgaXRzIGNoaWxkcmVuLlxuICAgICAqIEZvciBpbnN0YW5jZSBpZiB3ZSBoYXZlIGEgdHJlZVNjYWxlICh0aGUgY3VsbWluYXRpb24gb2YgYWxsIHBhcmVudCBzY2FsZXMpIG9mIDAuNSBhbmQgd2UgbmVlZFxuICAgICAqIHRvIG1vdmUgYW4gZWxlbWVudCAxMDAgcGl4ZWxzLCB3ZSBhY3R1YWxseSBuZWVkIHRvIG1vdmUgaXQgMjAwIGluIHdpdGhpbiB0aGF0IHNjYWxlZCBzcGFjZS5cbiAgICAgKi9cbiAgICB2YXIgeFRyYW5zbGF0ZSA9IHgudHJhbnNsYXRlIC8gdHJlZVNjYWxlLng7XG4gICAgdmFyIHlUcmFuc2xhdGUgPSB5LnRyYW5zbGF0ZSAvIHRyZWVTY2FsZS55O1xuICAgIHJldHVybiBcInRyYW5zbGF0ZTNkKFwiICsgeFRyYW5zbGF0ZSArIFwicHgsIFwiICsgeVRyYW5zbGF0ZSArIFwicHgsIDApIHNjYWxlKFwiICsgeC5zY2FsZSArIFwiLCBcIiArIHkuc2NhbGUgKyBcIilcIjtcbn1cbnZhciBpZGVudGl0eVByb2plY3Rpb24gPSBidWlsZExheW91dFByb2plY3Rpb25UcmFuc2Zvcm0oZGVsdGEoKSwge1xuICAgIHg6IDEsXG4gICAgeTogMSxcbn0pO1xuLyoqXG4gKiBUYWtlIHRoZSBjYWxjdWxhdGVkIGRlbHRhIG9yaWdpbiBhbmQgYXBwbHkgaXQgYXMgYSB0cmFuc2Zvcm0gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBidWlsZExheW91dFByb2plY3Rpb25UcmFuc2Zvcm1PcmlnaW4oX2EpIHtcbiAgICB2YXIgeCA9IF9hLngsIHkgPSBfYS55O1xuICAgIHJldHVybiB4Lm9yaWdpbiAqIDEwMCArIFwiJSBcIiArIHkub3JpZ2luICogMTAwICsgXCIlIDBcIjtcbn1cbi8qKlxuICogQnVpbGQgYSB0cmFuc2Zvcm0gc3RyaW5nIG9ubHkgZnJvbSB0aGUgcHJvcGVydGllcyB0aGF0IGRpc3RvcnQgYm91bmRpbmcgYm94IG1lYXN1cmVtZW50c1xuICogKHJvdGF0ZSBhbmQgc2tldylcbiAqL1xuZnVuY3Rpb24gYnVpbGRCb3hEaXN0b3J0aW5nVHJhbnNmb3Jtcyh0cmFuc2Zvcm0sIHRyYW5zZm9ybUtleXMpIHtcbiAgICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gXCJcIjtcbiAgICB0cmFuc2Zvcm1LZXlzLnNvcnQoc29ydFRyYW5zZm9ybVByb3BzKTtcbiAgICB2YXIgbnVtVHJhbnNmb3JtS2V5cyA9IHRyYW5zZm9ybUtleXMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVHJhbnNmb3JtS2V5czsgaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSB0cmFuc2Zvcm1LZXlzW2ldO1xuICAgICAgICBpZiAoYm94RGlzdG9ydGluZ0tleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBrZXkgKyBcIihcIiArIHRyYW5zZm9ybVtrZXldICsgXCIpIFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cmFuc2Zvcm1TdHJpbmc7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm92aWRlZCBrZXkgaXMgYSBDU1MgdmFyaWFibGVcbiAqL1xuZnVuY3Rpb24gaXNDU1NWYXJpYWJsZShrZXkpIHtcbiAgICByZXR1cm4ga2V5LnN0YXJ0c1dpdGgoXCItLVwiKTtcbn1cblxuZnVuY3Rpb24gaXNDU1NWYXJpYWJsZSQxKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZS5zdGFydHNXaXRoKFwidmFyKC0tXCIpO1xufVxuLyoqXG4gKiBQYXJzZSBGcmFtZXIncyBzcGVjaWFsIENTUyB2YXJpYWJsZSBmb3JtYXQgaW50byBhIENTUyB0b2tlbiBhbmQgYSBmYWxsYmFjay5cbiAqXG4gKiBgYGBcbiAqIGB2YXIoLS1mb28sICNmZmYpYCA9PiBbYC0tZm9vYCwgJyNmZmYnXVxuICogYGBgXG4gKlxuICogQHBhcmFtIGN1cnJlbnRcbiAqL1xudmFyIGNzc1ZhcmlhYmxlUmVnZXggPSAvdmFyXFwoKC0tW2EtekEtWjAtOS1fXSspLD8gPyhbYS16QS1aMC05ICgpJSMuLC1dKyk/XFwpLztcbmZ1bmN0aW9uIHBhcnNlQ1NTVmFyaWFibGUoY3VycmVudCkge1xuICAgIHZhciBtYXRjaCA9IGNzc1ZhcmlhYmxlUmVnZXguZXhlYyhjdXJyZW50KTtcbiAgICBpZiAoIW1hdGNoKVxuICAgICAgICByZXR1cm4gWyxdO1xuICAgIHZhciBfYSA9IF9fcmVhZChtYXRjaCwgMyksIHRva2VuID0gX2FbMV0sIGZhbGxiYWNrID0gX2FbMl07XG4gICAgcmV0dXJuIFt0b2tlbiwgZmFsbGJhY2tdO1xufVxudmFyIG1heERlcHRoID0gNDtcbmZ1bmN0aW9uIGdldFZhcmlhYmxlVmFsdWUoY3VycmVudCwgZWxlbWVudCwgZGVwdGgpIHtcbiAgICBpZiAoZGVwdGggPT09IHZvaWQgMCkgeyBkZXB0aCA9IDE7IH1cbiAgICBpbnZhcmlhbnQoZGVwdGggPD0gbWF4RGVwdGgsIFwiTWF4IENTUyB2YXJpYWJsZSBmYWxsYmFjayBkZXB0aCBkZXRlY3RlZCBpbiBwcm9wZXJ0eSBcXFwiXCIgKyBjdXJyZW50ICsgXCJcXFwiLiBUaGlzIG1heSBpbmRpY2F0ZSBhIGNpcmN1bGFyIGZhbGxiYWNrIGRlcGVuZGVuY3kuXCIpO1xuICAgIHZhciBfYSA9IF9fcmVhZChwYXJzZUNTU1ZhcmlhYmxlKGN1cnJlbnQpLCAyKSwgdG9rZW4gPSBfYVswXSwgZmFsbGJhY2sgPSBfYVsxXTtcbiAgICAvLyBObyBDU1MgdmFyaWFibGUgZGV0ZWN0ZWRcbiAgICBpZiAoIXRva2VuKVxuICAgICAgICByZXR1cm47XG4gICAgLy8gQXR0ZW1wdCB0byByZWFkIHRoaXMgQ1NTIHZhcmlhYmxlIG9mZiB0aGUgZWxlbWVudFxuICAgIHZhciByZXNvbHZlZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUodG9rZW4pO1xuICAgIGlmIChyZXNvbHZlZCkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWQudHJpbSgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0NTU1ZhcmlhYmxlJDEoZmFsbGJhY2spKSB7XG4gICAgICAgIC8vIFRoZSBmYWxsYmFjayBtaWdodCBpdHNlbGYgYmUgYSBDU1MgdmFyaWFibGUsIGluIHdoaWNoIGNhc2Ugd2UgYXR0ZW1wdCB0byByZXNvbHZlIGl0IHRvby5cbiAgICAgICAgcmV0dXJuIGdldFZhcmlhYmxlVmFsdWUoZmFsbGJhY2ssIGVsZW1lbnQsIGRlcHRoICsgMSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsbGJhY2s7XG4gICAgfVxufVxuLyoqXG4gKiBSZXNvbHZlIENTUyB2YXJpYWJsZXMgZnJvbVxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiByZXNvbHZlQ1NTVmFyaWFibGVzKHZpc3VhbEVsZW1lbnQsIF9hLCB0cmFuc2l0aW9uRW5kKSB7XG4gICAgdmFyIF9iO1xuICAgIHZhciB0YXJnZXQgPSBfX3Jlc3QoX2EsIFtdKTtcbiAgICB2YXIgZWxlbWVudCA9IHZpc3VhbEVsZW1lbnQuZ2V0SW5zdGFuY2UoKTtcbiAgICBpZiAoIShlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKVxuICAgICAgICByZXR1cm4geyB0YXJnZXQ6IHRhcmdldCwgdHJhbnNpdGlvbkVuZDogdHJhbnNpdGlvbkVuZCB9O1xuICAgIC8vIElmIGB0cmFuc2l0aW9uRW5kYCBpc24ndCBgdW5kZWZpbmVkYCwgY2xvbmUgaXQuIFdlIGNvdWxkIGNsb25lIGB0YXJnZXRgIGFuZCBgdHJhbnNpdGlvbkVuZGBcbiAgICAvLyBvbmx5IGlmIHRoZXkgY2hhbmdlIGJ1dCBJIHRoaW5rIHRoaXMgcmVhZHMgY2xlYXJlciBhbmQgdGhpcyBpc24ndCBhIHBlcmZvcm1hbmNlLWNyaXRpY2FsIHBhdGguXG4gICAgaWYgKHRyYW5zaXRpb25FbmQpIHtcbiAgICAgICAgdHJhbnNpdGlvbkVuZCA9IF9fYXNzaWduKHt9LCB0cmFuc2l0aW9uRW5kKTtcbiAgICB9XG4gICAgLy8gR28gdGhyb3VnaCBleGlzdGluZyBgTW90aW9uVmFsdWVgcyBhbmQgZW5zdXJlIGFueSBleGlzdGluZyBDU1MgdmFyaWFibGVzIGFyZSByZXNvbHZlZFxuICAgIHZpc3VhbEVsZW1lbnQuZm9yRWFjaFZhbHVlKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgY3VycmVudCA9IHZhbHVlLmdldCgpO1xuICAgICAgICBpZiAoIWlzQ1NTVmFyaWFibGUkMShjdXJyZW50KSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHJlc29sdmVkID0gZ2V0VmFyaWFibGVWYWx1ZShjdXJyZW50LCBlbGVtZW50KTtcbiAgICAgICAgaWYgKHJlc29sdmVkKVxuICAgICAgICAgICAgdmFsdWUuc2V0KHJlc29sdmVkKTtcbiAgICB9KTtcbiAgICAvLyBDeWNsZSB0aHJvdWdoIGV2ZXJ5IHRhcmdldCBwcm9wZXJ0eSBhbmQgcmVzb2x2ZSBDU1MgdmFyaWFibGVzLiBDdXJyZW50bHlcbiAgICAvLyB3ZSBvbmx5IHJlYWQgc2luZ2xlLXZhciBwcm9wZXJ0aWVzIGxpa2UgYHZhcigtLWZvbylgLCBub3QgYGNhbGModmFyKC0tZm9vKSArIDIwcHgpYFxuICAgIGZvciAodmFyIGtleSBpbiB0YXJnZXQpIHtcbiAgICAgICAgdmFyIGN1cnJlbnQgPSB0YXJnZXRba2V5XTtcbiAgICAgICAgaWYgKCFpc0NTU1ZhcmlhYmxlJDEoY3VycmVudCkpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgdmFyIHJlc29sdmVkID0gZ2V0VmFyaWFibGVWYWx1ZShjdXJyZW50LCBlbGVtZW50KTtcbiAgICAgICAgaWYgKCFyZXNvbHZlZClcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAvLyBDbG9uZSB0YXJnZXQgaWYgaXQgaGFzbid0IGFscmVhZHkgYmVlblxuICAgICAgICB0YXJnZXRba2V5XSA9IHJlc29sdmVkO1xuICAgICAgICAvLyBJZiB0aGUgdXNlciBoYXNuJ3QgYWxyZWFkeSBzZXQgdGhpcyBrZXkgb24gYHRyYW5zaXRpb25FbmRgLCBzZXQgaXQgdG8gdGhlIHVucmVzb2x2ZWRcbiAgICAgICAgLy8gQ1NTIHZhcmlhYmxlLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgYWZ0ZXIgdGhlIGFuaW1hdGlvbiB0aGUgY29tcG9uZW50IHdpbGwgcmVmbGVjdFxuICAgICAgICAvLyBjaGFuZ2VzIGluIHRoZSB2YWx1ZSBvZiB0aGUgQ1NTIHZhcmlhYmxlLlxuICAgICAgICBpZiAodHJhbnNpdGlvbkVuZClcbiAgICAgICAgICAgIChfYiA9IHRyYW5zaXRpb25FbmRba2V5XSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogKHRyYW5zaXRpb25FbmRba2V5XSA9IGN1cnJlbnQpO1xuICAgIH1cbiAgICByZXR1cm4geyB0YXJnZXQ6IHRhcmdldCwgdHJhbnNpdGlvbkVuZDogdHJhbnNpdGlvbkVuZCB9O1xufVxuXG5mdW5jdGlvbiBwaXhlbHNUb1BlcmNlbnQocGl4ZWxzLCBheGlzKSB7XG4gICAgcmV0dXJuIChwaXhlbHMgLyAoYXhpcy5tYXggLSBheGlzLm1pbikpICogMTAwO1xufVxuLyoqXG4gKiBXZSBhbHdheXMgY29ycmVjdCBib3JkZXJSYWRpdXMgYXMgYSBwZXJjZW50YWdlIHJhdGhlciB0aGFuIHBpeGVscyB0byByZWR1Y2UgcGFpbnRzLlxuICogRm9yIGV4YW1wbGUsIGlmIHlvdSBhcmUgcHJvamVjdGluZyBhIGJveCB0aGF0IGlzIDEwMHB4IHdpZGUgd2l0aCBhIDEwcHggYm9yZGVyUmFkaXVzXG4gKiBpbnRvIGEgYm94IHRoYXQgaXMgMjAwcHggd2lkZSB3aXRoIGEgMjBweCBib3JkZXJSYWRpdXMsIHRoYXQgaXMgYWN0dWFsbHkgYSAxMCVcbiAqIGJvcmRlclJhZGl1cyBpbiBib3RoIHN0YXRlcy4gSWYgd2UgYW5pbWF0ZSBiZXR3ZWVuIHRoZSB0d28gaW4gcGl4ZWxzIHRoYXQgd2lsbCB0cmlnZ2VyXG4gKiBhIHBhaW50IGVhY2ggdGltZS4gSWYgd2UgYW5pbWF0ZSBiZXR3ZWVuIHRoZSB0d28gaW4gcGVyY2VudGFnZSB3ZSdsbCBhdm9pZCBhIHBhaW50LlxuICovXG5mdW5jdGlvbiBjb3JyZWN0Qm9yZGVyUmFkaXVzKGxhdGVzdCwgdmlld3BvcnRCb3gpIHtcbiAgICAvKipcbiAgICAgKiBJZiBsYXRlc3QgaXMgYSBzdHJpbmcsIGlmIGl0J3MgYSBwZXJjZW50YWdlIHdlIGNhbiByZXR1cm4gaW1tZWRpYXRlbHkgYXMgaXQnc1xuICAgICAqIGdvaW5nIHRvIGJlIHN0cmV0Y2hlZCBhcHByb3ByaWF0ZWx5LiBPdGhlcndpc2UsIGlmIGl0J3MgYSBwaXhlbCwgY29udmVydCBpdCB0byBhIG51bWJlci5cbiAgICAgKi9cbiAgICBpZiAodHlwZW9mIGxhdGVzdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAocHgudGVzdChsYXRlc3QpKSB7XG4gICAgICAgICAgICBsYXRlc3QgPSBwYXJzZUZsb2F0KGxhdGVzdCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbGF0ZXN0O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIElmIGxhdGVzdCBpcyBhIG51bWJlciwgaXQncyBhIHBpeGVsIHZhbHVlLiBXZSB1c2UgdGhlIGN1cnJlbnQgdmlld3BvcnRCb3ggdG8gY2FsY3VsYXRlIHRoYXRcbiAgICAgKiBwaXhlbCB2YWx1ZSBhcyBhIHBlcmNlbnRhZ2Ugb2YgZWFjaCBheGlzXG4gICAgICovXG4gICAgdmFyIHggPSBwaXhlbHNUb1BlcmNlbnQobGF0ZXN0LCB2aWV3cG9ydEJveC54KTtcbiAgICB2YXIgeSA9IHBpeGVsc1RvUGVyY2VudChsYXRlc3QsIHZpZXdwb3J0Qm94LnkpO1xuICAgIHJldHVybiB4ICsgXCIlIFwiICsgeSArIFwiJVwiO1xufVxudmFyIHZhclRva2VuID0gXCJfJGNzc1wiO1xuZnVuY3Rpb24gY29ycmVjdEJveFNoYWRvdyhsYXRlc3QsIF92aWV3cG9ydEJveCwgZGVsdGEsIHRyZWVTY2FsZSkge1xuICAgIHZhciBvcmlnaW5hbCA9IGxhdGVzdDtcbiAgICAvKipcbiAgICAgKiBXZSBuZWVkIHRvIGZpcnN0IHN0cmlwIGFuZCBzdG9yZSBDU1MgdmFyaWFibGVzIGZyb20gdGhlIHN0cmluZy5cbiAgICAgKi9cbiAgICB2YXIgY29udGFpbnNDU1NWYXJpYWJsZXMgPSBsYXRlc3QuaW5jbHVkZXMoXCJ2YXIoXCIpO1xuICAgIHZhciBjc3NWYXJpYWJsZXMgPSBbXTtcbiAgICBpZiAoY29udGFpbnNDU1NWYXJpYWJsZXMpIHtcbiAgICAgICAgbGF0ZXN0ID0gbGF0ZXN0LnJlcGxhY2UoY3NzVmFyaWFibGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICBjc3NWYXJpYWJsZXMucHVzaChtYXRjaCk7XG4gICAgICAgICAgICByZXR1cm4gdmFyVG9rZW47XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgc2hhZG93ID0gY29tcGxleC5wYXJzZShsYXRlc3QpO1xuICAgIC8vIFRPRE86IERvZXNuJ3Qgc3VwcG9ydCBtdWx0aXBsZSBzaGFkb3dzXG4gICAgaWYgKHNoYWRvdy5sZW5ndGggPiA1KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWw7XG4gICAgdmFyIHRlbXBsYXRlID0gY29tcGxleC5jcmVhdGVUcmFuc2Zvcm1lcihsYXRlc3QpO1xuICAgIHZhciBvZmZzZXQgPSB0eXBlb2Ygc2hhZG93WzBdICE9PSBcIm51bWJlclwiID8gMSA6IDA7XG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBvdmVyYWxsIGNvbnRleHQgc2NhbGVcbiAgICB2YXIgeFNjYWxlID0gZGVsdGEueC5zY2FsZSAqIHRyZWVTY2FsZS54O1xuICAgIHZhciB5U2NhbGUgPSBkZWx0YS55LnNjYWxlICogdHJlZVNjYWxlLnk7XG4gICAgc2hhZG93WzAgKyBvZmZzZXRdIC89IHhTY2FsZTtcbiAgICBzaGFkb3dbMSArIG9mZnNldF0gLz0geVNjYWxlO1xuICAgIC8qKlxuICAgICAqIElkZWFsbHkgd2UnZCBjb3JyZWN0IHggYW5kIHkgc2NhbGVzIGluZGl2aWR1YWxseSwgYnV0IGJlY2F1c2UgYmx1ciBhbmRcbiAgICAgKiBzcHJlYWQgYXBwbHkgdG8gYm90aCB3ZSBoYXZlIHRvIHRha2UgYSBzY2FsZSBhdmVyYWdlIGFuZCBhcHBseSB0aGF0IGluc3RlYWQuXG4gICAgICogV2UgY291bGQgcG90ZW50aWFsbHkgaW1wcm92ZSB0aGUgb3V0Y29tZSBvZiB0aGlzIGJ5IGluY29ycG9yYXRpbmcgdGhlIHJhdGlvIGJldHdlZW5cbiAgICAgKiB0aGUgdHdvIHNjYWxlcy5cbiAgICAgKi9cbiAgICB2YXIgYXZlcmFnZVNjYWxlID0gbWl4KHhTY2FsZSwgeVNjYWxlLCAwLjUpO1xuICAgIC8vIEJsdXJcbiAgICBpZiAodHlwZW9mIHNoYWRvd1syICsgb2Zmc2V0XSA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgc2hhZG93WzIgKyBvZmZzZXRdIC89IGF2ZXJhZ2VTY2FsZTtcbiAgICAvLyBTcHJlYWRcbiAgICBpZiAodHlwZW9mIHNoYWRvd1szICsgb2Zmc2V0XSA9PT0gXCJudW1iZXJcIilcbiAgICAgICAgc2hhZG93WzMgKyBvZmZzZXRdIC89IGF2ZXJhZ2VTY2FsZTtcbiAgICB2YXIgb3V0cHV0ID0gdGVtcGxhdGUoc2hhZG93KTtcbiAgICBpZiAoY29udGFpbnNDU1NWYXJpYWJsZXMpIHtcbiAgICAgICAgdmFyIGlfMSA9IDA7XG4gICAgICAgIG91dHB1dCA9IG91dHB1dC5yZXBsYWNlKHZhclRva2VuLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY3NzVmFyaWFibGUgPSBjc3NWYXJpYWJsZXNbaV8xXTtcbiAgICAgICAgICAgIGlfMSsrO1xuICAgICAgICAgICAgcmV0dXJuIGNzc1ZhcmlhYmxlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbnZhciBib3JkZXJDb3JyZWN0aW9uRGVmaW5pdGlvbiA9IHtcbiAgICBwcm9jZXNzOiBjb3JyZWN0Qm9yZGVyUmFkaXVzLFxufTtcbnZhciB2YWx1ZVNjYWxlQ29ycmVjdGlvbiA9IHtcbiAgICBib3JkZXJSYWRpdXM6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBib3JkZXJDb3JyZWN0aW9uRGVmaW5pdGlvbiksIHsgYXBwbHlUbzogW1xuICAgICAgICAgICAgXCJib3JkZXJUb3BMZWZ0UmFkaXVzXCIsXG4gICAgICAgICAgICBcImJvcmRlclRvcFJpZ2h0UmFkaXVzXCIsXG4gICAgICAgICAgICBcImJvcmRlckJvdHRvbUxlZnRSYWRpdXNcIixcbiAgICAgICAgICAgIFwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIixcbiAgICAgICAgXSB9KSxcbiAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiBib3JkZXJDb3JyZWN0aW9uRGVmaW5pdGlvbixcbiAgICBib3JkZXJUb3BSaWdodFJhZGl1czogYm9yZGVyQ29ycmVjdGlvbkRlZmluaXRpb24sXG4gICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogYm9yZGVyQ29ycmVjdGlvbkRlZmluaXRpb24sXG4gICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IGJvcmRlckNvcnJlY3Rpb25EZWZpbml0aW9uLFxuICAgIGJveFNoYWRvdzoge1xuICAgICAgICBwcm9jZXNzOiBjb3JyZWN0Qm94U2hhZG93LFxuICAgIH0sXG59O1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gYWRkU2NhbGVDb3JyZWN0aW9uKGNvcnJlY3RvcnMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gY29ycmVjdG9ycykge1xuICAgICAgICB2YWx1ZVNjYWxlQ29ycmVjdGlvbltrZXldID0gY29ycmVjdG9yc1trZXldO1xuICAgIH1cbn1cblxuLyoqXG4gKiBCdWlsZCBzdHlsZSBhbmQgQ1NTIHZhcmlhYmxlc1xuICpcbiAqIFRoaXMgZnVuY3Rpb24gY29udmVydHMgYSBNb3Rpb24gc3R5bGUgcHJvcDpcbiAqXG4gKiB7IHg6IDEwMCwgd2lkdGg6IDEwMCwgb3JpZ2luWDogMC41IH1cbiAqXG4gKiBJbnRvIGFuIG9iamVjdCB3aXRoIGRlZmF1bHQgdmFsdWUgdHlwZXMgYXBwbGllZCBhbmQgZGVmYXVsdFxuICogdHJhbnNmb3JtIG9yZGVyIHNldDpcbiAqXG4gKiB7XG4gKiAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwcHgpIHRyYW5zbGF0ZVooMClgLFxuICogICB3aWR0aDogJzEwMHB4JyxcbiAqICAgdHJhbnNmb3JtT3JpZ2luOiAnNTAlIDUwJSdcbiAqIH1cbiAqXG4gKiBTdHlsZXMgYXJlIHNhdmVkIHRvIGBzdHlsZWAgYW5kIENTUyB2YXJzIHRvIGB2YXJzYC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHdvcmtzIHdpdGggbXV0YXRpdmUgZGF0YSBzdHJ1Y3R1cmVzLlxuICovXG5mdW5jdGlvbiBidWlsZEhUTUxTdHlsZXMobGF0ZXN0LCBzdHlsZSwgdmFycywgdHJhbnNmb3JtLCB0cmFuc2Zvcm1PcmlnaW4sIHRyYW5zZm9ybUtleXMsIF9hLCBpc0xheW91dFByb2plY3Rpb25FbmFibGVkLCBkZWx0YSwgZGVsdGFGaW5hbCwgdHJlZVNjYWxlLCB0YXJnZXRCb3gpIHtcbiAgICB2YXIgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24gPSBfYS5lbmFibGVIYXJkd2FyZUFjY2VsZXJhdGlvbiwgdHJhbnNmb3JtVGVtcGxhdGUgPSBfYS50cmFuc2Zvcm1UZW1wbGF0ZSwgYWxsb3dUcmFuc2Zvcm1Ob25lID0gX2EuYWxsb3dUcmFuc2Zvcm1Ob25lO1xuICAgIC8vIEVtcHR5IHRoZSB0cmFuc2Zvcm1LZXlzIGFycmF5LiBBcyB3ZSdyZSB0aHJvd2luZyBvdXQgcmVmcyB0byBpdHMgaXRlbXNcbiAgICAvLyB0aGlzIG1pZ2h0IG5vdCBiZSBhcyBjaGVhcCBhcyBzdXNwZWN0ZWQuIE1heWJlIHVzaW5nIHRoZSBhcnJheSBhcyBhIGJ1ZmZlclxuICAgIC8vIHdpdGggYSBtYW51YWwgaW5jcmVtZW50YXRpb24gd291bGQgYmUgYmV0dGVyLlxuICAgIHRyYW5zZm9ybUtleXMubGVuZ3RoID0gMDtcbiAgICAvLyBUcmFjayB3aGV0aGVyIHdlIGVuY291bnRlciBhbnkgdHJhbnNmb3JtIG9yIHRyYW5zZm9ybU9yaWdpbiB2YWx1ZXMuXG4gICAgdmFyIGhhc1RyYW5zZm9ybSA9IGZhbHNlO1xuICAgIHZhciBoYXNUcmFuc2Zvcm1PcmlnaW4gPSBmYWxzZTtcbiAgICAvLyBEb2VzIHRoZSBjYWxjdWxhdGVkIHRyYW5zZm9ybSBlc3NlbnRpYWxseSBlcXVhbCBcIm5vbmVcIj9cbiAgICB2YXIgdHJhbnNmb3JtSXNOb25lID0gdHJ1ZTtcbiAgICAvKipcbiAgICAgKiBMb29wIG92ZXIgYWxsIG91ciBsYXRlc3QgYW5pbWF0ZWQgdmFsdWVzIGFuZCBkZWNpZGUgd2hldGhlciB0byBoYW5kbGUgdGhlbVxuICAgICAqIGFzIGEgc3R5bGUgb3IgQ1NTIHZhcmlhYmxlLiBUcmFuc2Zvcm1zIGFuZCB0cmFuc2Zvcm0gb3JpZ2lucyBhcmUga2VwdCBzZXBlcmF0ZWx5XG4gICAgICogZm9yIGZ1cnRoZXIgcHJvY2Vzc2luZ1xuICAgICAqL1xuICAgIGZvciAodmFyIGtleSBpbiBsYXRlc3QpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gbGF0ZXN0W2tleV07XG4gICAgICAgIC8vIENvbnZlcnQgdGhlIHZhbHVlIHRvIGl0cyBkZWZhdWx0IHZhbHVlIHR5cGUsIGllIDAgLT4gXCIwcHhcIlxuICAgICAgICB2YXIgdmFsdWVUeXBlID0gZ2V0RGVmYXVsdFZhbHVlVHlwZShrZXkpO1xuICAgICAgICB2YXIgdmFsdWVBc1R5cGUgPSBnZXRWYWx1ZUFzVHlwZSh2YWx1ZSwgdmFsdWVUeXBlKTtcbiAgICAgICAgaWYgKGlzVHJhbnNmb3JtUHJvcChrZXkpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgdHJhbnNmb3JtLCBmbGFnIGFuZCBlbmFibGUgZnVydGhlciB0cmFuc2Zvcm0gcHJvY2Vzc2luZ1xuICAgICAgICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgICAgICAgIHRyYW5zZm9ybVtrZXldID0gdmFsdWVBc1R5cGU7XG4gICAgICAgICAgICB0cmFuc2Zvcm1LZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgIGlmICghdHJhbnNmb3JtSXNOb25lKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgLy8gSWYgYWxsIHRoZSB0cmFuc2Zvcm0ga2V5cyB3ZSd2ZSBzbyBmYXIgZW5jb3VudGVyZWQgYXJlIHRoZWlyIGRlZmF1bHQgdmFsdWVcbiAgICAgICAgICAgIC8vIHRoZW4gY2hlY2sgdG8gc2VlIGlmIHRoaXMgb25lIGlzbid0XG4gICAgICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gdmFsdWVUeXBlLmRlZmF1bHQgIT09IHVuZGVmaW5lZCA/IHZhbHVlVHlwZS5kZWZhdWx0IDogMDtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gZGVmYXVsdFZhbHVlKVxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUlzTm9uZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzVHJhbnNmb3JtT3JpZ2luUHJvcChrZXkpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgdHJhbnNmb3JtIG9yaWdpbiwgZmxhZyBhbmQgZW5hYmxlIGZ1cnRoZXIgdHJhbnNmb3JtLW9yaWdpbiBwcm9jZXNzaW5nXG4gICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW5ba2V5XSA9IHZhbHVlQXNUeXBlO1xuICAgICAgICAgICAgaGFzVHJhbnNmb3JtT3JpZ2luID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChrZXkgIT09IFwidHJhbnNmb3JtXCIgfHwgdHlwZW9mIHZhbHVlICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBhbGwgcmVtYWluaW5nIHZhbHVlcy4gRGVjaWRlIHdoaWNoIG1hcCB0byBzYXZlIHRvIGRlcGVuZGluZ1xuICAgICAgICAgICAgLy8gb24gd2hldGhlciB0aGlzIGlzIGEgQ1NTIHZhcmlhYmxlXG4gICAgICAgICAgICB2YXIgYnVja2V0ID0gaXNDU1NWYXJpYWJsZShrZXkpID8gdmFycyA6IHN0eWxlO1xuICAgICAgICAgICAgLy8gSWYgd2UgbmVlZCB0byBwZXJmb3JtIHNjYWxlIGNvcnJlY3Rpb24sIGFuZCB3ZSBoYXZlIGEgaGFuZGxlciBmb3IgdGhpc1xuICAgICAgICAgICAgLy8gdmFsdWUgdHlwZSAoaWUgYm9yZGVyUmFkaXVzKSwgcGVyZm9ybSBpdFxuICAgICAgICAgICAgaWYgKGlzTGF5b3V0UHJvamVjdGlvbkVuYWJsZWQgJiYgdmFsdWVTY2FsZUNvcnJlY3Rpb25ba2V5XSkge1xuICAgICAgICAgICAgICAgIHZhciBjb3JyZWN0ZWQgPSB2YWx1ZVNjYWxlQ29ycmVjdGlvbltrZXldLnByb2Nlc3ModmFsdWUsIHRhcmdldEJveCwgZGVsdGEsIHRyZWVTY2FsZSk7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogU2NhbGUtY29ycmVjdGFibGUgdmFsdWVzIGNhbiBkZWZpbmUgYSBudW1iZXIgb2Ygb3RoZXIgdmFsdWVzIHRvIGJyZWFrXG4gICAgICAgICAgICAgICAgICogZG93biBpbnRvLiBGb3IgaW5zdGFuY2UgYm9yZGVyUmFkaXVzIG5lZWRzIGFwcGx5aW5nIHRvIGJvcmRlckJvdHRvbUxlZnRSYWRpdXMgZXRjXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgdmFyIGFwcGx5VG8gPSB2YWx1ZVNjYWxlQ29ycmVjdGlvbltrZXldLmFwcGx5VG87XG4gICAgICAgICAgICAgICAgaWYgKGFwcGx5VG8pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG51bSA9IGFwcGx5VG8ubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWNrZXRbYXBwbHlUb1tpXV0gPSBjb3JyZWN0ZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1Y2tldFtrZXldID0gY29ycmVjdGVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1Y2tldFtrZXldID0gdmFsdWVBc1R5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQnVpbGQgdHJhbnNmb3JtIGFuZCB0cmFuc2Zvcm1PcmlnaW4uIElmIHdlJ3JlIHBlcmZvcm1pbmcgbGF5b3V0IHByb2plY3Rpb24gdGhlc2UgbmVlZFxuICAgICAqIHRvIGJlIGJhc2VkIG9mZiB0aGUgZGVsdGFGaW5hbCBkYXRhLiBBbnkgdXNlci1zZXQgb3JpZ2lucyB3aWxsIGhhdmUgYmVlbiBwcmUtYmFrZWRcbiAgICAgKiBpbnRvIHRoZSBkZWx0YUZpbmFsLlxuICAgICAqL1xuICAgIGlmIChpc0xheW91dFByb2plY3Rpb25FbmFibGVkKSB7XG4gICAgICAgIHN0eWxlLnRyYW5zZm9ybSA9IGJ1aWxkTGF5b3V0UHJvamVjdGlvblRyYW5zZm9ybShkZWx0YUZpbmFsLCB0cmVlU2NhbGUpO1xuICAgICAgICBpZiAoc3R5bGUudHJhbnNmb3JtID09PSBpZGVudGl0eVByb2plY3Rpb24pXG4gICAgICAgICAgICBzdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgd2UgaGF2ZSB0cmFuc2Zvcm0gc3R5bGVzLCBidWlsZCBvbmx5IHRob3NlIHRoYXQgZGlzdG9ydCBib3VuZGluZyBib3hlcyAocm90YXRlL3NrZXcpXG4gICAgICAgICAqIGFzIHRyYW5zbGF0aW9ucyBhbmQgc2NhbGVzIHdpbGwgYWxyZWFkeSBoYXZlIGJlZW4gdXNlZCB0byBjYWxjdWxhdGUgZGVsdGFGaW5hbC5cbiAgICAgICAgICovXG4gICAgICAgIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIHN0eWxlLnRyYW5zZm9ybSArPVxuICAgICAgICAgICAgICAgIFwiIFwiICsgYnVpbGRCb3hEaXN0b3J0aW5nVHJhbnNmb3Jtcyh0cmFuc2Zvcm0sIHRyYW5zZm9ybUtleXMpO1xuICAgICAgICAgICAgc3R5bGUudHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHJhbnNmb3JtVGVtcGxhdGUpIHtcbiAgICAgICAgICAgIHN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVRlbXBsYXRlKHRyYW5zZm9ybSwgc3R5bGUudHJhbnNmb3JtKTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBidWlsZExheW91dFByb2plY3Rpb25UcmFuc2Zvcm1PcmlnaW4oZGVsdGFGaW5hbCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgICAgICAgICBzdHlsZS50cmFuc2Zvcm0gPSBidWlsZFRyYW5zZm9ybSh0cmFuc2Zvcm0sIHRyYW5zZm9ybUtleXMsIHRyYW5zZm9ybVRlbXBsYXRlLCB0cmFuc2Zvcm1Jc05vbmUsIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uLCBhbGxvd1RyYW5zZm9ybU5vbmUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNUcmFuc2Zvcm1PcmlnaW4pIHtcbiAgICAgICAgICAgIHN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IGJ1aWxkVHJhbnNmb3JtT3JpZ2luKHRyYW5zZm9ybU9yaWdpbik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogUmVzZXQgYW4gYXhpcyB0byB0aGUgcHJvdmlkZWQgb3JpZ2luIGJveC5cbiAqXG4gKiBUaGlzIGlzIGEgbXV0YXRpdmUgb3BlcmF0aW9uLlxuICovXG5mdW5jdGlvbiByZXNldEF4aXMoYXhpcywgb3JpZ2luQXhpcykge1xuICAgIGF4aXMubWluID0gb3JpZ2luQXhpcy5taW47XG4gICAgYXhpcy5tYXggPSBvcmlnaW5BeGlzLm1heDtcbn1cbi8qKlxuICogUmVzZXQgYSBib3ggdG8gdGhlIHByb3ZpZGVkIG9yaWdpbiBib3guXG4gKlxuICogVGhpcyBpcyBhIG11dGF0aXZlIG9wZXJhdGlvbi5cbiAqL1xuZnVuY3Rpb24gcmVzZXRCb3goYm94LCBvcmlnaW5Cb3gpIHtcbiAgICByZXNldEF4aXMoYm94LngsIG9yaWdpbkJveC54KTtcbiAgICByZXNldEF4aXMoYm94LnksIG9yaWdpbkJveC55KTtcbn1cbi8qKlxuICogU2NhbGVzIGEgcG9pbnQgYmFzZWQgb24gYSBmYWN0b3IgYW5kIGFuIG9yaWdpblBvaW50XG4gKi9cbmZ1bmN0aW9uIHNjYWxlUG9pbnQocG9pbnQsIHNjYWxlLCBvcmlnaW5Qb2ludCkge1xuICAgIHZhciBkaXN0YW5jZUZyb21PcmlnaW4gPSBwb2ludCAtIG9yaWdpblBvaW50O1xuICAgIHZhciBzY2FsZWQgPSBzY2FsZSAqIGRpc3RhbmNlRnJvbU9yaWdpbjtcbiAgICByZXR1cm4gb3JpZ2luUG9pbnQgKyBzY2FsZWQ7XG59XG4vKipcbiAqIEFwcGxpZXMgYSB0cmFuc2xhdGUvc2NhbGUgZGVsdGEgdG8gYSBwb2ludFxuICovXG5mdW5jdGlvbiBhcHBseVBvaW50RGVsdGEocG9pbnQsIHRyYW5zbGF0ZSwgc2NhbGUsIG9yaWdpblBvaW50LCBib3hTY2FsZSkge1xuICAgIGlmIChib3hTY2FsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBvaW50ID0gc2NhbGVQb2ludChwb2ludCwgYm94U2NhbGUsIG9yaWdpblBvaW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHNjYWxlUG9pbnQocG9pbnQsIHNjYWxlLCBvcmlnaW5Qb2ludCkgKyB0cmFuc2xhdGU7XG59XG4vKipcbiAqIEFwcGxpZXMgYSB0cmFuc2xhdGUvc2NhbGUgZGVsdGEgdG8gYW4gYXhpc1xuICovXG5mdW5jdGlvbiBhcHBseUF4aXNEZWx0YShheGlzLCB0cmFuc2xhdGUsIHNjYWxlLCBvcmlnaW5Qb2ludCwgYm94U2NhbGUpIHtcbiAgICBpZiAodHJhbnNsYXRlID09PSB2b2lkIDApIHsgdHJhbnNsYXRlID0gMDsgfVxuICAgIGlmIChzY2FsZSA9PT0gdm9pZCAwKSB7IHNjYWxlID0gMTsgfVxuICAgIGF4aXMubWluID0gYXBwbHlQb2ludERlbHRhKGF4aXMubWluLCB0cmFuc2xhdGUsIHNjYWxlLCBvcmlnaW5Qb2ludCwgYm94U2NhbGUpO1xuICAgIGF4aXMubWF4ID0gYXBwbHlQb2ludERlbHRhKGF4aXMubWF4LCB0cmFuc2xhdGUsIHNjYWxlLCBvcmlnaW5Qb2ludCwgYm94U2NhbGUpO1xufVxuLyoqXG4gKiBBcHBsaWVzIGEgdHJhbnNsYXRlL3NjYWxlIGRlbHRhIHRvIGEgYm94XG4gKi9cbmZ1bmN0aW9uIGFwcGx5Qm94RGVsdGEoYm94LCBfYSkge1xuICAgIHZhciB4ID0gX2EueCwgeSA9IF9hLnk7XG4gICAgYXBwbHlBeGlzRGVsdGEoYm94LngsIHgudHJhbnNsYXRlLCB4LnNjYWxlLCB4Lm9yaWdpblBvaW50KTtcbiAgICBhcHBseUF4aXNEZWx0YShib3gueSwgeS50cmFuc2xhdGUsIHkuc2NhbGUsIHkub3JpZ2luUG9pbnQpO1xufVxuLyoqXG4gKiBBcHBseSBhIHRyYW5zZm9ybSB0byBhbiBheGlzIGZyb20gdGhlIGxhdGVzdCByZXNvbHZlZCBtb3Rpb24gdmFsdWVzLlxuICogVGhpcyBmdW5jdGlvbiBiYXNpY2FsbHkgYWN0cyBhcyBhIGJyaWRnZSBiZXR3ZWVuIGEgZmxhdCBtb3Rpb24gdmFsdWUgbWFwXG4gKiBhbmQgYXBwbHlBeGlzRGVsdGFcbiAqL1xuZnVuY3Rpb24gYXBwbHlBeGlzVHJhbnNmb3JtcyhmaW5hbCwgYXhpcywgdHJhbnNmb3JtcywgX2EpIHtcbiAgICB2YXIgX2IgPSBfX3JlYWQoX2EsIDMpLCBrZXkgPSBfYlswXSwgc2NhbGVLZXkgPSBfYlsxXSwgb3JpZ2luS2V5ID0gX2JbMl07XG4gICAgLy8gQ29weSB0aGUgY3VycmVudCBheGlzIHRvIHRoZSBmaW5hbCBheGlzIGJlZm9yZSBtdXRhdGlvblxuICAgIGZpbmFsLm1pbiA9IGF4aXMubWluO1xuICAgIGZpbmFsLm1heCA9IGF4aXMubWF4O1xuICAgIHZhciBheGlzT3JpZ2luID0gdHJhbnNmb3Jtc1tvcmlnaW5LZXldICE9PSB1bmRlZmluZWQgPyB0cmFuc2Zvcm1zW29yaWdpbktleV0gOiAwLjU7XG4gICAgdmFyIG9yaWdpblBvaW50ID0gbWl4KGF4aXMubWluLCBheGlzLm1heCwgYXhpc09yaWdpbik7XG4gICAgLy8gQXBwbHkgdGhlIGF4aXMgZGVsdGEgdG8gdGhlIGZpbmFsIGF4aXNcbiAgICBhcHBseUF4aXNEZWx0YShmaW5hbCwgdHJhbnNmb3Jtc1trZXldLCB0cmFuc2Zvcm1zW3NjYWxlS2V5XSwgb3JpZ2luUG9pbnQsIHRyYW5zZm9ybXMuc2NhbGUpO1xufVxuLyoqXG4gKiBUaGUgbmFtZXMgb2YgdGhlIG1vdGlvbiB2YWx1ZXMgd2Ugd2FudCB0byBhcHBseSBhcyB0cmFuc2xhdGlvbiwgc2NhbGUgYW5kIG9yaWdpbi5cbiAqL1xudmFyIHhLZXlzID0gW1wieFwiLCBcInNjYWxlWFwiLCBcIm9yaWdpblhcIl07XG52YXIgeUtleXMgPSBbXCJ5XCIsIFwic2NhbGVZXCIsIFwib3JpZ2luWVwiXTtcbi8qKlxuICogQXBwbHkgYSB0cmFuc2Zvcm0gdG8gYSBib3ggZnJvbSB0aGUgbGF0ZXN0IHJlc29sdmVkIG1vdGlvbiB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5Qm94VHJhbnNmb3JtcyhmaW5hbEJveCwgYm94LCB0cmFuc2Zvcm1zKSB7XG4gICAgYXBwbHlBeGlzVHJhbnNmb3JtcyhmaW5hbEJveC54LCBib3gueCwgdHJhbnNmb3JtcywgeEtleXMpO1xuICAgIGFwcGx5QXhpc1RyYW5zZm9ybXMoZmluYWxCb3gueSwgYm94LnksIHRyYW5zZm9ybXMsIHlLZXlzKTtcbn1cbi8qKlxuICogUmVtb3ZlIGEgZGVsdGEgZnJvbSBhIHBvaW50LiBUaGlzIGlzIGVzc2VudGlhbGx5IHRoZSBzdGVwcyBvZiBhcHBseVBvaW50RGVsdGEgaW4gcmV2ZXJzZVxuICovXG5mdW5jdGlvbiByZW1vdmVQb2ludERlbHRhKHBvaW50LCB0cmFuc2xhdGUsIHNjYWxlLCBvcmlnaW5Qb2ludCwgYm94U2NhbGUpIHtcbiAgICBwb2ludCAtPSB0cmFuc2xhdGU7XG4gICAgcG9pbnQgPSBzY2FsZVBvaW50KHBvaW50LCAxIC8gc2NhbGUsIG9yaWdpblBvaW50KTtcbiAgICBpZiAoYm94U2NhbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwb2ludCA9IHNjYWxlUG9pbnQocG9pbnQsIDEgLyBib3hTY2FsZSwgb3JpZ2luUG9pbnQpO1xuICAgIH1cbiAgICByZXR1cm4gcG9pbnQ7XG59XG4vKipcbiAqIFJlbW92ZSBhIGRlbHRhIGZyb20gYW4gYXhpcy4gVGhpcyBpcyBlc3NlbnRpYWxseSB0aGUgc3RlcHMgb2YgYXBwbHlBeGlzRGVsdGEgaW4gcmV2ZXJzZVxuICovXG5mdW5jdGlvbiByZW1vdmVBeGlzRGVsdGEoYXhpcywgdHJhbnNsYXRlLCBzY2FsZSwgb3JpZ2luLCBib3hTY2FsZSkge1xuICAgIGlmICh0cmFuc2xhdGUgPT09IHZvaWQgMCkgeyB0cmFuc2xhdGUgPSAwOyB9XG4gICAgaWYgKHNjYWxlID09PSB2b2lkIDApIHsgc2NhbGUgPSAxOyB9XG4gICAgaWYgKG9yaWdpbiA9PT0gdm9pZCAwKSB7IG9yaWdpbiA9IDAuNTsgfVxuICAgIHZhciBvcmlnaW5Qb2ludCA9IG1peChheGlzLm1pbiwgYXhpcy5tYXgsIG9yaWdpbikgLSB0cmFuc2xhdGU7XG4gICAgYXhpcy5taW4gPSByZW1vdmVQb2ludERlbHRhKGF4aXMubWluLCB0cmFuc2xhdGUsIHNjYWxlLCBvcmlnaW5Qb2ludCwgYm94U2NhbGUpO1xuICAgIGF4aXMubWF4ID0gcmVtb3ZlUG9pbnREZWx0YShheGlzLm1heCwgdHJhbnNsYXRlLCBzY2FsZSwgb3JpZ2luUG9pbnQsIGJveFNjYWxlKTtcbn1cbi8qKlxuICogUmVtb3ZlIGEgdHJhbnNmb3JtcyBmcm9tIGFuIGF4aXMuIFRoaXMgaXMgZXNzZW50aWFsbHkgdGhlIHN0ZXBzIG9mIGFwcGx5QXhpc1RyYW5zZm9ybXMgaW4gcmV2ZXJzZVxuICogYW5kIGFjdHMgYXMgYSBicmlkZ2UgYmV0d2VlbiBtb3Rpb24gdmFsdWVzIGFuZCByZW1vdmVBeGlzRGVsdGFcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlQXhpc1RyYW5zZm9ybXMoYXhpcywgdHJhbnNmb3JtcywgX2EpIHtcbiAgICB2YXIgX2IgPSBfX3JlYWQoX2EsIDMpLCBrZXkgPSBfYlswXSwgc2NhbGVLZXkgPSBfYlsxXSwgb3JpZ2luS2V5ID0gX2JbMl07XG4gICAgcmVtb3ZlQXhpc0RlbHRhKGF4aXMsIHRyYW5zZm9ybXNba2V5XSwgdHJhbnNmb3Jtc1tzY2FsZUtleV0sIHRyYW5zZm9ybXNbb3JpZ2luS2V5XSwgdHJhbnNmb3Jtcy5zY2FsZSk7XG59XG4vKipcbiAqIFJlbW92ZSBhIHRyYW5zZm9ybXMgZnJvbSBhbiBib3guIFRoaXMgaXMgZXNzZW50aWFsbHkgdGhlIHN0ZXBzIG9mIGFwcGx5QXhpc0JveCBpbiByZXZlcnNlXG4gKiBhbmQgYWN0cyBhcyBhIGJyaWRnZSBiZXR3ZWVuIG1vdGlvbiB2YWx1ZXMgYW5kIHJlbW92ZUF4aXNEZWx0YVxuICovXG5mdW5jdGlvbiByZW1vdmVCb3hUcmFuc2Zvcm1zKGJveCwgdHJhbnNmb3Jtcykge1xuICAgIHJlbW92ZUF4aXNUcmFuc2Zvcm1zKGJveC54LCB0cmFuc2Zvcm1zLCB4S2V5cyk7XG4gICAgcmVtb3ZlQXhpc1RyYW5zZm9ybXMoYm94LnksIHRyYW5zZm9ybXMsIHlLZXlzKTtcbn1cbi8qKlxuICogQXBwbHkgYSB0cmVlIG9mIGRlbHRhcyB0byBhIGJveC4gV2UgZG8gdGhpcyB0byBjYWxjdWxhdGUgdGhlIGVmZmVjdCBvZiBhbGwgdGhlIHRyYW5zZm9ybXNcbiAqIGluIGEgdHJlZSB1cG9uIG91ciBib3ggYmVmb3JlIHRoZW4gY2FsY3VsYXRpbmcgaG93IHRvIHByb2plY3QgaXQgaW50byBvdXIgZGVzaXJlZCB2aWV3cG9ydC1yZWxhdGl2ZSBib3hcbiAqXG4gKiBUaGlzIGlzIHRoZSBmaW5hbCBuZXN0ZWQgbG9vcCB3aXRoaW4gSFRNTFZpc3VhbEVsZW1lbnQudXBkYXRlTGF5b3V0RGVsdGFcbiAqL1xuZnVuY3Rpb24gYXBwbHlUcmVlRGVsdGFzKGJveCwgdHJlZVBhdGgpIHtcbiAgICB2YXIgdHJlZUxlbmd0aCA9IHRyZWVQYXRoLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyZWVMZW5ndGg7IGkrKykge1xuICAgICAgICBhcHBseUJveERlbHRhKGJveCwgdHJlZVBhdGhbaV0uZGVsdGEpO1xuICAgIH1cbn1cblxudmFyIGNsYW1wUHJvZ3Jlc3MgPSBmdW5jdGlvbiAodikgeyByZXR1cm4gY2xhbXAoMCwgMSwgdik7IH07XG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgd2l0aGluIG1heERpc3RhbmNlIG9mIHRoZSBwcm92aWRlZCB0YXJnZXRcbiAqL1xuZnVuY3Rpb24gaXNOZWFyKHZhbHVlLCB0YXJnZXQsIG1heERpc3RhbmNlKSB7XG4gICAgaWYgKHRhcmdldCA9PT0gdm9pZCAwKSB7IHRhcmdldCA9IDA7IH1cbiAgICBpZiAobWF4RGlzdGFuY2UgPT09IHZvaWQgMCkgeyBtYXhEaXN0YW5jZSA9IDAuMDE7IH1cbiAgICByZXR1cm4gZGlzdGFuY2UodmFsdWUsIHRhcmdldCkgPCBtYXhEaXN0YW5jZTtcbn1cbmZ1bmN0aW9uIGNhbGNMZW5ndGgoYXhpcykge1xuICAgIHJldHVybiBheGlzLm1heCAtIGF4aXMubWluO1xufVxuLyoqXG4gKiBDYWxjdWxhdGUgYSB0cmFuc2Zvcm0gb3JpZ2luIHJlbGF0aXZlIHRvIHRoZSBzb3VyY2UgYXhpcywgYmV0d2VlbiAwLTEsIHRoYXQgcmVzdWx0c1xuICogaW4gYW4gYXN0aGV0aWNhbGx5IHBsZWFzaW5nIHNjYWxlL3RyYW5zZm9ybSBuZWVkZWQgdG8gcHJvamVjdCBmcm9tIHNvdXJjZSB0byB0YXJnZXQuXG4gKi9cbmZ1bmN0aW9uIGNhbGNPcmlnaW4oc291cmNlLCB0YXJnZXQpIHtcbiAgICB2YXIgb3JpZ2luID0gMC41O1xuICAgIHZhciBzb3VyY2VMZW5ndGggPSBjYWxjTGVuZ3RoKHNvdXJjZSk7XG4gICAgdmFyIHRhcmdldExlbmd0aCA9IGNhbGNMZW5ndGgodGFyZ2V0KTtcbiAgICBpZiAodGFyZ2V0TGVuZ3RoID4gc291cmNlTGVuZ3RoKSB7XG4gICAgICAgIG9yaWdpbiA9IHByb2dyZXNzKHRhcmdldC5taW4sIHRhcmdldC5tYXggLSBzb3VyY2VMZW5ndGgsIHNvdXJjZS5taW4pO1xuICAgIH1cbiAgICBlbHNlIGlmIChzb3VyY2VMZW5ndGggPiB0YXJnZXRMZW5ndGgpIHtcbiAgICAgICAgb3JpZ2luID0gcHJvZ3Jlc3Moc291cmNlLm1pbiwgc291cmNlLm1heCAtIHRhcmdldExlbmd0aCwgdGFyZ2V0Lm1pbik7XG4gICAgfVxuICAgIHJldHVybiBjbGFtcFByb2dyZXNzKG9yaWdpbik7XG59XG4vKipcbiAqIFVwZGF0ZSB0aGUgQXhpc0RlbHRhIHdpdGggYSB0cmFuc2Zvcm0gdGhhdCBwcm9qZWN0cyBzb3VyY2UgaW50byB0YXJnZXQuXG4gKlxuICogVGhlIHRyYW5zZm9ybSBgb3JpZ2luYCBpcyBvcHRpb25hbC4gSWYgbm90IHByb3ZpZGVkLCBpdCdsbCBiZSBhdXRvbWF0aWNhbGx5XG4gKiBjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSByZWxhdGl2ZSBwb3NpdGlvbnMgb2YgdGhlIHR3byBib3VuZGluZyBib3hlcy5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlQXhpc0RlbHRhKGRlbHRhLCBzb3VyY2UsIHRhcmdldCwgb3JpZ2luKSB7XG4gICAgZGVsdGEub3JpZ2luID0gb3JpZ2luID09PSB1bmRlZmluZWQgPyBjYWxjT3JpZ2luKHNvdXJjZSwgdGFyZ2V0KSA6IG9yaWdpbjtcbiAgICBkZWx0YS5vcmlnaW5Qb2ludCA9IG1peChzb3VyY2UubWluLCBzb3VyY2UubWF4LCBkZWx0YS5vcmlnaW4pO1xuICAgIGRlbHRhLnNjYWxlID0gY2FsY0xlbmd0aCh0YXJnZXQpIC8gY2FsY0xlbmd0aChzb3VyY2UpO1xuICAgIGlmIChpc05lYXIoZGVsdGEuc2NhbGUsIDEsIDAuMDAwMSkpXG4gICAgICAgIGRlbHRhLnNjYWxlID0gMTtcbiAgICBkZWx0YS50cmFuc2xhdGUgPVxuICAgICAgICBtaXgodGFyZ2V0Lm1pbiwgdGFyZ2V0Lm1heCwgZGVsdGEub3JpZ2luKSAtIGRlbHRhLm9yaWdpblBvaW50O1xuICAgIGlmIChpc05lYXIoZGVsdGEudHJhbnNsYXRlKSlcbiAgICAgICAgZGVsdGEudHJhbnNsYXRlID0gMDtcbn1cbi8qKlxuICogVXBkYXRlIHRoZSBCb3hEZWx0YSB3aXRoIGEgdHJhbnNmb3JtIHRoYXQgcHJvamVjdHMgdGhlIHNvdXJjZSBpbnRvIHRoZSB0YXJnZXQuXG4gKlxuICogVGhlIHRyYW5zZm9ybSBgb3JpZ2luYCBpcyBvcHRpb25hbC4gSWYgbm90IHByb3ZpZGVkLCBpdCdsbCBiZSBhdXRvbWF0aWNhbGx5XG4gKiBjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSByZWxhdGl2ZSBwb3NpdGlvbnMgb2YgdGhlIHR3byBib3VuZGluZyBib3hlcy5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlQm94RGVsdGEoZGVsdGEsIHNvdXJjZSwgdGFyZ2V0LCBvcmlnaW4pIHtcbiAgICB1cGRhdGVBeGlzRGVsdGEoZGVsdGEueCwgc291cmNlLngsIHRhcmdldC54LCBvcmlnaW4pO1xuICAgIHVwZGF0ZUF4aXNEZWx0YShkZWx0YS55LCBzb3VyY2UueSwgdGFyZ2V0LnksIG9yaWdpbik7XG59XG4vKipcbiAqIFVwZGF0ZSB0aGUgdHJlZVNjYWxlIGJ5IGluY29ycG9yYXRpbmcgdGhlIHBhcmVudCdzIGxhdGVzdCBzY2FsZSBpbnRvIGl0cyB0cmVlU2NhbGUuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVRyZWVTY2FsZSh0cmVlU2NhbGUsIHBhcmVudFRyZWVTY2FsZSwgcGFyZW50RGVsdGEpIHtcbiAgICB0cmVlU2NhbGUueCA9IHBhcmVudFRyZWVTY2FsZS54ICogcGFyZW50RGVsdGEueC5zY2FsZTtcbiAgICB0cmVlU2NhbGUueSA9IHBhcmVudFRyZWVTY2FsZS55ICogcGFyZW50RGVsdGEueS5zY2FsZTtcbn1cblxuLy8gQ2FsbCBhIGhhbmRsZXIgb25jZSBmb3IgZWFjaCBheGlzXG5mdW5jdGlvbiBlYWNoQXhpcyhoYW5kbGVyKSB7XG4gICAgcmV0dXJuIFtoYW5kbGVyKFwieFwiKSwgaGFuZGxlcihcInlcIildO1xufVxuXG4vKipcbiAqIE1lYXN1cmUgYW5kIHJldHVybiB0aGUgZWxlbWVudCBib3VuZGluZyBib3guXG4gKlxuICogV2UgY29udmVydCB0aGUgYm94IGludG8gYW4gQXhpc0JveDJEIHRvIG1ha2UgaXQgZWFzaWVyIHRvIHdvcmsgd2l0aCBlYWNoIGF4aXNcbiAqIGluZGl2aWR1YWxseSBhbmQgcHJvZ3JhbW1hdGljYWxseS5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIG9wdGlvbmFsbHkgYWNjZXB0cyBhIHRyYW5zZm9ybVBhZ2VQb2ludCBmdW5jdGlvbiB3aGljaCBhbGxvd3MgdXMgdG8gY29tcGVuc2F0ZVxuICogZm9yLCBmb3IgaW5zdGFuY2UsIG1lYXN1cmluZyB0aGUgZWxlbWVudCB3aXRoaW4gYSBzY2FsZWQgcGxhbmUgbGlrZSBhIEZyYW1lciBkZXZpdmNlIHByZXZpZXcgY29tcG9uZW50LlxuICovXG5mdW5jdGlvbiBnZXRCb3VuZGluZ0JveChlbGVtZW50LCB0cmFuc2Zvcm1QYWdlUG9pbnQpIHtcbiAgICB2YXIgYm94ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gY29udmVydEJvdW5kaW5nQm94VG9BeGlzQm94KHRyYW5zZm9ybUJvdW5kaW5nQm94KGJveCwgdHJhbnNmb3JtUGFnZVBvaW50KSk7XG59XG5cbnZhciBwb3NpdGlvbmFsS2V5cyA9IG5ldyBTZXQoW1xuICAgIFwid2lkdGhcIixcbiAgICBcImhlaWdodFwiLFxuICAgIFwidG9wXCIsXG4gICAgXCJsZWZ0XCIsXG4gICAgXCJyaWdodFwiLFxuICAgIFwiYm90dG9tXCIsXG4gICAgXCJ4XCIsXG4gICAgXCJ5XCIsXG5dKTtcbnZhciBpc1Bvc2l0aW9uYWxLZXkgPSBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBwb3NpdGlvbmFsS2V5cy5oYXMoa2V5KTsgfTtcbnZhciBoYXNQb3NpdGlvbmFsS2V5ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0YXJnZXQpLnNvbWUoaXNQb3NpdGlvbmFsS2V5KTtcbn07XG52YXIgc2V0QW5kUmVzZXRWZWxvY2l0eSA9IGZ1bmN0aW9uICh2YWx1ZSwgdG8pIHtcbiAgICAvLyBMb29rcyBvZGQgYnV0IHNldHRpbmcgaXQgdHdpY2UgZG9lc24ndCByZW5kZXIsIGl0J2xsIGp1c3RcbiAgICAvLyBzZXQgYm90aCBwcmV2IGFuZCBjdXJyZW50IHRvIHRoZSBsYXRlc3QgdmFsdWVcbiAgICB2YWx1ZS5zZXQodG8sIGZhbHNlKTtcbiAgICB2YWx1ZS5zZXQodG8pO1xufTtcbnZhciBpc051bU9yUHhUeXBlID0gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdiA9PT0gbnVtYmVyIHx8IHYgPT09IHB4O1xufTtcbnZhciBCb3VuZGluZ0JveERpbWVuc2lvbjtcbihmdW5jdGlvbiAoQm91bmRpbmdCb3hEaW1lbnNpb24pIHtcbiAgICBCb3VuZGluZ0JveERpbWVuc2lvbltcIndpZHRoXCJdID0gXCJ3aWR0aFwiO1xuICAgIEJvdW5kaW5nQm94RGltZW5zaW9uW1wiaGVpZ2h0XCJdID0gXCJoZWlnaHRcIjtcbiAgICBCb3VuZGluZ0JveERpbWVuc2lvbltcImxlZnRcIl0gPSBcImxlZnRcIjtcbiAgICBCb3VuZGluZ0JveERpbWVuc2lvbltcInJpZ2h0XCJdID0gXCJyaWdodFwiO1xuICAgIEJvdW5kaW5nQm94RGltZW5zaW9uW1widG9wXCJdID0gXCJ0b3BcIjtcbiAgICBCb3VuZGluZ0JveERpbWVuc2lvbltcImJvdHRvbVwiXSA9IFwiYm90dG9tXCI7XG59KShCb3VuZGluZ0JveERpbWVuc2lvbiB8fCAoQm91bmRpbmdCb3hEaW1lbnNpb24gPSB7fSkpO1xudmFyIGdldFBvc0Zyb21NYXRyaXggPSBmdW5jdGlvbiAobWF0cml4LCBwb3MpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChtYXRyaXguc3BsaXQoXCIsIFwiKVtwb3NdKTtcbn07XG52YXIgZ2V0VHJhbnNsYXRlRnJvbU1hdHJpeCA9IGZ1bmN0aW9uIChwb3MyLCBwb3MzKSB7IHJldHVybiBmdW5jdGlvbiAoX2Jib3gsIF9hKSB7XG4gICAgdmFyIHRyYW5zZm9ybSA9IF9hLnRyYW5zZm9ybTtcbiAgICBpZiAodHJhbnNmb3JtID09PSBcIm5vbmVcIiB8fCAhdHJhbnNmb3JtKVxuICAgICAgICByZXR1cm4gMDtcbiAgICB2YXIgbWF0cml4M2QgPSB0cmFuc2Zvcm0ubWF0Y2goL15tYXRyaXgzZFxcKCguKylcXCkkLyk7XG4gICAgaWYgKG1hdHJpeDNkKSB7XG4gICAgICAgIHJldHVybiBnZXRQb3NGcm9tTWF0cml4KG1hdHJpeDNkWzFdLCBwb3MzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBtYXRyaXggPSB0cmFuc2Zvcm0ubWF0Y2goL15tYXRyaXhcXCgoLispXFwpJC8pO1xuICAgICAgICBpZiAobWF0cml4KSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0UG9zRnJvbU1hdHJpeChtYXRyaXhbMV0sIHBvczIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICB9XG59OyB9O1xudmFyIHRyYW5zZm9ybUtleXMgPSBuZXcgU2V0KFtcInhcIiwgXCJ5XCIsIFwielwiXSk7XG52YXIgbm9uVHJhbnNsYXRpb25hbFRyYW5zZm9ybUtleXMgPSB0cmFuc2Zvcm1Qcm9wcy5maWx0ZXIoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gIXRyYW5zZm9ybUtleXMuaGFzKGtleSk7IH0pO1xuZnVuY3Rpb24gcmVtb3ZlTm9uVHJhbnNsYXRpb25hbFRyYW5zZm9ybSh2aXN1YWxFbGVtZW50KSB7XG4gICAgdmFyIHJlbW92ZWRUcmFuc2Zvcm1zID0gW107XG4gICAgbm9uVHJhbnNsYXRpb25hbFRyYW5zZm9ybUtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHZpc3VhbEVsZW1lbnQuZ2V0VmFsdWUoa2V5KTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlbW92ZWRUcmFuc2Zvcm1zLnB1c2goW2tleSwgdmFsdWUuZ2V0KCldKTtcbiAgICAgICAgICAgIHZhbHVlLnNldChrZXkuc3RhcnRzV2l0aChcInNjYWxlXCIpID8gMSA6IDApO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gQXBwbHkgY2hhbmdlcyB0byBlbGVtZW50IGJlZm9yZSBtZWFzdXJlbWVudFxuICAgIGlmIChyZW1vdmVkVHJhbnNmb3Jtcy5sZW5ndGgpXG4gICAgICAgIHZpc3VhbEVsZW1lbnQucmVuZGVyKCk7XG4gICAgcmV0dXJuIHJlbW92ZWRUcmFuc2Zvcm1zO1xufVxudmFyIHBvc2l0aW9uYWxWYWx1ZXMgPSB7XG4gICAgLy8gRGltZW5zaW9uc1xuICAgIHdpZHRoOiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIHggPSBfYS54O1xuICAgICAgICByZXR1cm4geC5tYXggLSB4Lm1pbjtcbiAgICB9LFxuICAgIGhlaWdodDogZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciB5ID0gX2EueTtcbiAgICAgICAgcmV0dXJuIHkubWF4IC0geS5taW47XG4gICAgfSxcbiAgICB0b3A6IGZ1bmN0aW9uIChfYmJveCwgX2EpIHtcbiAgICAgICAgdmFyIHRvcCA9IF9hLnRvcDtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodG9wKTtcbiAgICB9LFxuICAgIGxlZnQ6IGZ1bmN0aW9uIChfYmJveCwgX2EpIHtcbiAgICAgICAgdmFyIGxlZnQgPSBfYS5sZWZ0O1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChsZWZ0KTtcbiAgICB9LFxuICAgIGJvdHRvbTogZnVuY3Rpb24gKF9hLCBfYikge1xuICAgICAgICB2YXIgeSA9IF9hLnk7XG4gICAgICAgIHZhciB0b3AgPSBfYi50b3A7XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHRvcCkgKyAoeS5tYXggLSB5Lm1pbik7XG4gICAgfSxcbiAgICByaWdodDogZnVuY3Rpb24gKF9hLCBfYikge1xuICAgICAgICB2YXIgeCA9IF9hLng7XG4gICAgICAgIHZhciBsZWZ0ID0gX2IubGVmdDtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQobGVmdCkgKyAoeC5tYXggLSB4Lm1pbik7XG4gICAgfSxcbiAgICAvLyBUcmFuc2Zvcm1cbiAgICB4OiBnZXRUcmFuc2xhdGVGcm9tTWF0cml4KDQsIDEzKSxcbiAgICB5OiBnZXRUcmFuc2xhdGVGcm9tTWF0cml4KDUsIDE0KSxcbn07XG52YXIgY29udmVydENoYW5nZWRWYWx1ZVR5cGVzID0gZnVuY3Rpb24gKHRhcmdldCwgdmlzdWFsRWxlbWVudCwgY2hhbmdlZEtleXMpIHtcbiAgICB2YXIgb3JpZ2luQmJveCA9IHZpc3VhbEVsZW1lbnQuZ2V0Qm91bmRpbmdCb3goKTtcbiAgICB2YXIgZWxlbWVudENvbXB1dGVkU3R5bGUgPSB2aXN1YWxFbGVtZW50LmdldENvbXB1dGVkU3R5bGUoKTtcbiAgICB2YXIgZGlzcGxheSA9IGVsZW1lbnRDb21wdXRlZFN0eWxlLmRpc3BsYXksIHRvcCA9IGVsZW1lbnRDb21wdXRlZFN0eWxlLnRvcCwgbGVmdCA9IGVsZW1lbnRDb21wdXRlZFN0eWxlLmxlZnQsIGJvdHRvbSA9IGVsZW1lbnRDb21wdXRlZFN0eWxlLmJvdHRvbSwgcmlnaHQgPSBlbGVtZW50Q29tcHV0ZWRTdHlsZS5yaWdodCwgdHJhbnNmb3JtID0gZWxlbWVudENvbXB1dGVkU3R5bGUudHJhbnNmb3JtO1xuICAgIHZhciBvcmlnaW5Db21wdXRlZFN0eWxlID0geyB0b3A6IHRvcCwgbGVmdDogbGVmdCwgYm90dG9tOiBib3R0b20sIHJpZ2h0OiByaWdodCwgdHJhbnNmb3JtOiB0cmFuc2Zvcm0gfTtcbiAgICAvLyBJZiB0aGUgZWxlbWVudCBpcyBjdXJyZW50bHkgc2V0IHRvIGRpc3BsYXk6IFwibm9uZVwiLCBtYWtlIGl0IHZpc2libGUgYmVmb3JlXG4gICAgLy8gbWVhc3VyaW5nIHRoZSB0YXJnZXQgYm91bmRpbmcgYm94XG4gICAgaWYgKGRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAgIHZpc3VhbEVsZW1lbnQuc2V0U3RhdGljVmFsdWVzKFwiZGlzcGxheVwiLCB0YXJnZXQuZGlzcGxheSB8fCBcImJsb2NrXCIpO1xuICAgIH1cbiAgICAvLyBBcHBseSB0aGUgbGF0ZXN0IHZhbHVlcyAoYXMgc2V0IGluIGNoZWNrQW5kQ29udmVydENoYW5nZWRWYWx1ZVR5cGVzKVxuICAgIHZpc3VhbEVsZW1lbnQucmVuZGVyKCk7XG4gICAgdmFyIHRhcmdldEJib3ggPSB2aXN1YWxFbGVtZW50LmdldEJvdW5kaW5nQm94KCk7XG4gICAgY2hhbmdlZEtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIC8vIFJlc3RvcmUgc3R5bGVzIHRvIHRoZWlyICoqY2FsY3VsYXRlZCBjb21wdXRlZCBzdHlsZSoqLCBub3QgdGhlaXIgYWN0dWFsXG4gICAgICAgIC8vIG9yaWdpbmFsbHkgc2V0IHN0eWxlLiBUaGlzIGFsbG93cyB1cyB0byBhbmltYXRlIGJldHdlZW4gZXF1aXZhbGVudCBwaXhlbCB1bml0cy5cbiAgICAgICAgdmFyIHZhbHVlID0gdmlzdWFsRWxlbWVudC5nZXRWYWx1ZShrZXkpO1xuICAgICAgICBzZXRBbmRSZXNldFZlbG9jaXR5KHZhbHVlLCBwb3NpdGlvbmFsVmFsdWVzW2tleV0ob3JpZ2luQmJveCwgb3JpZ2luQ29tcHV0ZWRTdHlsZSkpO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHBvc2l0aW9uYWxWYWx1ZXNba2V5XSh0YXJnZXRCYm94LCBlbGVtZW50Q29tcHV0ZWRTdHlsZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRhcmdldDtcbn07XG52YXIgY2hlY2tBbmRDb252ZXJ0Q2hhbmdlZFZhbHVlVHlwZXMgPSBmdW5jdGlvbiAodmlzdWFsRWxlbWVudCwgdGFyZ2V0LCBvcmlnaW4sIHRyYW5zaXRpb25FbmQpIHtcbiAgICBpZiAob3JpZ2luID09PSB2b2lkIDApIHsgb3JpZ2luID0ge307IH1cbiAgICBpZiAodHJhbnNpdGlvbkVuZCA9PT0gdm9pZCAwKSB7IHRyYW5zaXRpb25FbmQgPSB7fTsgfVxuICAgIHRhcmdldCA9IF9fYXNzaWduKHt9LCB0YXJnZXQpO1xuICAgIHRyYW5zaXRpb25FbmQgPSBfX2Fzc2lnbih7fSwgdHJhbnNpdGlvbkVuZCk7XG4gICAgdmFyIHRhcmdldFBvc2l0aW9uYWxLZXlzID0gT2JqZWN0LmtleXModGFyZ2V0KS5maWx0ZXIoaXNQb3NpdGlvbmFsS2V5KTtcbiAgICAvLyBXZSB3YW50IHRvIHJlbW92ZSBhbnkgdHJhbnNmb3JtIHZhbHVlcyB0aGF0IGNvdWxkIGFmZmVjdCB0aGUgZWxlbWVudCdzIGJvdW5kaW5nIGJveCBiZWZvcmVcbiAgICAvLyBpdCdzIG1lYXN1cmVkLiBXZSdsbCByZWFwcGx5IHRoZXNlIGxhdGVyLlxuICAgIHZhciByZW1vdmVkVHJhbnNmb3JtVmFsdWVzID0gW107XG4gICAgdmFyIGhhc0F0dGVtcHRlZFRvUmVtb3ZlVHJhbnNmb3JtVmFsdWVzID0gZmFsc2U7XG4gICAgdmFyIGNoYW5nZWRWYWx1ZVR5cGVLZXlzID0gW107XG4gICAgdGFyZ2V0UG9zaXRpb25hbEtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHZpc3VhbEVsZW1lbnQuZ2V0VmFsdWUoa2V5KTtcbiAgICAgICAgaWYgKCF2aXN1YWxFbGVtZW50Lmhhc1ZhbHVlKGtleSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBmcm9tID0gb3JpZ2luW2tleV07XG4gICAgICAgIHZhciB0byA9IHRhcmdldFtrZXldO1xuICAgICAgICB2YXIgZnJvbVR5cGUgPSBmaW5kRGltZW5zaW9uVmFsdWVUeXBlKGZyb20pO1xuICAgICAgICB2YXIgdG9UeXBlO1xuICAgICAgICAvLyBUT0RPOiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGJhc2ljYWxseSB0aHJvd3MgYW4gZXJyb3JcbiAgICAgICAgLy8gaWYgeW91IHRyeSBhbmQgZG8gdmFsdWUgY29udmVyc2lvbiB2aWEga2V5ZnJhbWVzLiBUaGVyZSdzIHByb2JhYmx5XG4gICAgICAgIC8vIGEgd2F5IG9mIGRvaW5nIHRoaXMgYnV0IHRoZSBwZXJmb3JtYW5jZSBpbXBsaWNhdGlvbnMgd291bGQgbmVlZCBncmVhdGVyIHNjcnV0aW55LFxuICAgICAgICAvLyBhcyBpdCdkIGJlIGRvaW5nIG11bHRpcGxlIHJlc2l6ZS1yZW1lYXN1cmUgb3BlcmF0aW9ucy5cbiAgICAgICAgaWYgKGlzS2V5ZnJhbWVzVGFyZ2V0KHRvKSkge1xuICAgICAgICAgICAgdmFyIG51bUtleWZyYW1lcyA9IHRvLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSB0b1swXSA9PT0gbnVsbCA/IDEgOiAwOyBpIDwgbnVtS2V5ZnJhbWVzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRvVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICB0b1R5cGUgPSBmaW5kRGltZW5zaW9uVmFsdWVUeXBlKHRvW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgaW52YXJpYW50KHRvVHlwZSA9PT0gZnJvbVR5cGUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChpc051bU9yUHhUeXBlKGZyb21UeXBlKSAmJiBpc051bU9yUHhUeXBlKHRvVHlwZSkpLCBcIktleWZyYW1lcyBtdXN0IGJlIG9mIHRoZSBzYW1lIGRpbWVuc2lvbiBhcyB0aGUgY3VycmVudCB2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGludmFyaWFudChmaW5kRGltZW5zaW9uVmFsdWVUeXBlKHRvW2ldKSA9PT0gdG9UeXBlLCBcIkFsbCBrZXlmcmFtZXMgbXVzdCBiZSBvZiB0aGUgc2FtZSB0eXBlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvVHlwZSA9IGZpbmREaW1lbnNpb25WYWx1ZVR5cGUodG8pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmcm9tVHlwZSAhPT0gdG9UeXBlKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGV5J3JlIGJvdGgganVzdCBudW1iZXIgb3IgcHgsIGNvbnZlcnQgdGhlbSBib3RoIHRvIG51bWJlcnMgcmF0aGVyIHRoYW5cbiAgICAgICAgICAgIC8vIHJlbHlpbmcgb24gcmVzaXplL3JlbWVhc3VyZSB0byBjb252ZXJ0ICh3aGljaCBpcyB3YXN0ZWZ1bCBpbiB0aGlzIHNpdHVhdGlvbilcbiAgICAgICAgICAgIGlmIChpc051bU9yUHhUeXBlKGZyb21UeXBlKSAmJiBpc051bU9yUHhUeXBlKHRvVHlwZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudCA9IHZhbHVlLmdldCgpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zZXQocGFyc2VGbG9hdChjdXJyZW50KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG8gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBwYXJzZUZsb2F0KHRvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0bykgJiYgdG9UeXBlID09PSBweCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHRvLm1hcChwYXJzZUZsb2F0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgoZnJvbVR5cGUgPT09IG51bGwgfHwgZnJvbVR5cGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZyb21UeXBlLnRyYW5zZm9ybSkgJiYgKHRvVHlwZSA9PT0gbnVsbCB8fCB0b1R5cGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRvVHlwZS50cmFuc2Zvcm0pICYmXG4gICAgICAgICAgICAgICAgKGZyb20gPT09IDAgfHwgdG8gPT09IDApKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgb25lIG9yIHRoZSBvdGhlciB2YWx1ZSBpcyAwLCBpdCdzIHNhZmUgdG8gY29lcmNlIGl0IHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIHR5cGUgb2YgdGhlIG90aGVyIHdpdGhvdXQgbWVhc3VyZW1lbnRcbiAgICAgICAgICAgICAgICBpZiAoZnJvbSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zZXQodG9UeXBlLnRyYW5zZm9ybShmcm9tKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IGZyb21UeXBlLnRyYW5zZm9ybSh0byk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgZ29pbmcgdG8gZG8gdmFsdWUgY29udmVyc2lvbiB2aWEgRE9NIG1lYXN1cmVtZW50cywgd2UgZmlyc3RcbiAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIHJlbW92ZSBub24tcG9zaXRpb25hbCB0cmFuc2Zvcm0gdmFsdWVzIHRoYXQgY291bGQgYWZmZWN0IHRoZSBiYm94IG1lYXN1cmVtZW50cy5cbiAgICAgICAgICAgICAgICBpZiAoIWhhc0F0dGVtcHRlZFRvUmVtb3ZlVHJhbnNmb3JtVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZWRUcmFuc2Zvcm1WYWx1ZXMgPSByZW1vdmVOb25UcmFuc2xhdGlvbmFsVHJhbnNmb3JtKHZpc3VhbEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBoYXNBdHRlbXB0ZWRUb1JlbW92ZVRyYW5zZm9ybVZhbHVlcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoYW5nZWRWYWx1ZVR5cGVLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRW5kW2tleV0gPVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRW5kW2tleV0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0cmFuc2l0aW9uRW5kW2tleV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGFyZ2V0W2tleV07XG4gICAgICAgICAgICAgICAgc2V0QW5kUmVzZXRWZWxvY2l0eSh2YWx1ZSwgdG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGNoYW5nZWRWYWx1ZVR5cGVLZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIgY29udmVydGVkVGFyZ2V0ID0gY29udmVydENoYW5nZWRWYWx1ZVR5cGVzKHRhcmdldCwgdmlzdWFsRWxlbWVudCwgY2hhbmdlZFZhbHVlVHlwZUtleXMpO1xuICAgICAgICAvLyBJZiB3ZSByZW1vdmVkIHRyYW5zZm9ybSB2YWx1ZXMsIHJlYXBwbHkgdGhlbSBiZWZvcmUgdGhlIG5leHQgcmVuZGVyXG4gICAgICAgIGlmIChyZW1vdmVkVHJhbnNmb3JtVmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVtb3ZlZFRyYW5zZm9ybVZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHZhciBfYiA9IF9fcmVhZChfYSwgMiksIGtleSA9IF9iWzBdLCB2YWx1ZSA9IF9iWzFdO1xuICAgICAgICAgICAgICAgIHZpc3VhbEVsZW1lbnQuZ2V0VmFsdWUoa2V5KS5zZXQodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVhcHBseSBvcmlnaW5hbCB2YWx1ZXNcbiAgICAgICAgdmlzdWFsRWxlbWVudC5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuIHsgdGFyZ2V0OiBjb252ZXJ0ZWRUYXJnZXQsIHRyYW5zaXRpb25FbmQ6IHRyYW5zaXRpb25FbmQgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7IHRhcmdldDogdGFyZ2V0LCB0cmFuc2l0aW9uRW5kOiB0cmFuc2l0aW9uRW5kIH07XG4gICAgfVxufTtcbi8qKlxuICogQ29udmVydCB2YWx1ZSB0eXBlcyBmb3IgeC95L3dpZHRoL2hlaWdodC90b3AvbGVmdC9ib3R0b20vcmlnaHRcbiAqXG4gKiBBbGxvd3MgYW5pbWF0aW9uIGJldHdlZW4gYCdhdXRvJ2AgLT4gYCcxMDAlJ2Agb3IgYDBgIC0+IGAnY2FsYyg1MCUgLSAxMHZ3KSdgXG4gKlxuICogQGludGVybmFsXG4gKi9cbmZ1bmN0aW9uIHVuaXRDb252ZXJzaW9uKHZpc3VhbEVsZW1lbnQsIHRhcmdldCwgb3JpZ2luLCB0cmFuc2l0aW9uRW5kKSB7XG4gICAgcmV0dXJuIGhhc1Bvc2l0aW9uYWxLZXkodGFyZ2V0KVxuICAgICAgICA/IGNoZWNrQW5kQ29udmVydENoYW5nZWRWYWx1ZVR5cGVzKHZpc3VhbEVsZW1lbnQsIHRhcmdldCwgb3JpZ2luLCB0cmFuc2l0aW9uRW5kKVxuICAgICAgICA6IHsgdGFyZ2V0OiB0YXJnZXQsIHRyYW5zaXRpb25FbmQ6IHRyYW5zaXRpb25FbmQgfTtcbn1cblxuLyoqXG4gKiBQYXJzZSBhIERPTSB2YXJpYW50IHRvIG1ha2UgaXQgYW5pbWF0YWJsZS4gVGhpcyBpbnZvbHZlcyByZXNvbHZpbmcgQ1NTIHZhcmlhYmxlc1xuICogYW5kIGVuc3VyaW5nIGFuaW1hdGlvbnMgbGlrZSBcIjIwJVwiID0+IFwiY2FsYyg1MHZ3KVwiIGFyZSBwZXJmb3JtZWQgaW4gcGl4ZWxzLlxuICovXG52YXIgcGFyc2VEb21WYXJpYW50ID0gZnVuY3Rpb24gKHZpc3VhbEVsZW1lbnQsIHRhcmdldCwgb3JpZ2luLCB0cmFuc2l0aW9uRW5kKSB7XG4gICAgdmFyIHJlc29sdmVkID0gcmVzb2x2ZUNTU1ZhcmlhYmxlcyh2aXN1YWxFbGVtZW50LCB0YXJnZXQsIHRyYW5zaXRpb25FbmQpO1xuICAgIHRhcmdldCA9IHJlc29sdmVkLnRhcmdldDtcbiAgICB0cmFuc2l0aW9uRW5kID0gcmVzb2x2ZWQudHJhbnNpdGlvbkVuZDtcbiAgICByZXR1cm4gdW5pdENvbnZlcnNpb24odmlzdWFsRWxlbWVudCwgdGFyZ2V0LCBvcmlnaW4sIHRyYW5zaXRpb25FbmQpO1xufTtcblxuLyoqXG4gKiBBIFZpc3VhbEVsZW1lbnQgZm9yIEhUTUxFbGVtZW50c1xuICovXG52YXIgSFRNTFZpc3VhbEVsZW1lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEhUTUxWaXN1YWxFbGVtZW50LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEhUTUxWaXN1YWxFbGVtZW50KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5kZWZhdWx0Q29uZmlnID0ge1xuICAgICAgICAgICAgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb246IHRydWUsXG4gICAgICAgICAgICBhbGxvd1RyYW5zZm9ybU5vbmU6IHRydWUsXG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIG11dGFibGUgcmVjb3JkIG9mIHN0eWxlcyB3ZSB3YW50IHRvIGFwcGx5IGRpcmVjdGx5IHRvIHRoZSByZW5kZXJlZCBFbGVtZW50XG4gICAgICAgICAqIGV2ZXJ5IGZyYW1lLiBXZSB1c2UgYSBtdXRhYmxlIGRhdGEgc3RydWN0dXJlIHRvIHJlZHVjZSBHQyBkdXJpbmcgYW5pbWF0aW9ucy5cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLnN0eWxlID0ge307XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHJlY29yZCBvZiBzdHlsZXMgd2Ugb25seSB3YW50IHRvIGFwcGx5IHZpYSBSZWFjdC4gVGhpcyBnZXRzIHNldCBpbiB1c2VNb3Rpb25WYWx1ZXNcbiAgICAgICAgICogYW5kIGFwcGxpZWQgaW4gdGhlIHJlbmRlciBmdW5jdGlvbi4gSSdkIHByZWZlciB0aGlzIHRvIGxpdmUgc29tZXdoZXJlIGVsc2UgdG8gZGVjb3VwbGVcbiAgICAgICAgICogVmlzdWFsRWxlbWVudCBmcm9tIFJlYWN0IGJ1dCB3b3JrcyBmb3Igbm93LlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMucmVhY3RTdHlsZSA9IHt9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBtdXRhYmxlIHJlY29yZCBvZiBDU1MgdmFyaWFibGVzIHdlIHdhbnQgdG8gYXBwbHkgZGlyZWN0bHkgdG8gdGhlIHJlbmRlcmVkIEVsZW1lbnRcbiAgICAgICAgICogZXZlcnkgZnJhbWUuIFdlIHVzZSBhIG11dGFibGUgZGF0YSBzdHJ1Y3R1cmUgdG8gcmVkdWNlIEdDIGR1cmluZyBhbmltYXRpb25zLlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMudmFycyA9IHt9O1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBtdXRhYmxlIHJlY29yZCBvZiB0cmFuc2Zvcm1zIHdlIHdhbnQgdG8gYXBwbHkgZGlyZWN0bHkgdG8gdGhlIHJlbmRlcmVkIEVsZW1lbnRcbiAgICAgICAgICogZXZlcnkgZnJhbWUuIFdlIHVzZSBhIG11dGFibGUgZGF0YSBzdHJ1Y3R1cmUgdG8gcmVkdWNlIEdDIGR1cmluZyBhbmltYXRpb25zLlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMudHJhbnNmb3JtID0ge307XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIG11dGFibGUgcmVjb3JkIG9mIHRyYW5zZm9ybSBvcmlnaW5zIHdlIHdhbnQgdG8gYXBwbHkgZGlyZWN0bHkgdG8gdGhlIHJlbmRlcmVkIEVsZW1lbnRcbiAgICAgICAgICogZXZlcnkgZnJhbWUuIFdlIHVzZSBhIG11dGFibGUgZGF0YSBzdHJ1Y3R1cmUgdG8gcmVkdWNlIEdDIGR1cmluZyBhbmltYXRpb25zLlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMudHJhbnNmb3JtT3JpZ2luID0ge307XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIG11dGFibGUgcmVjb3JkIG9mIHRyYW5zZm9ybSBrZXlzIHdlIHdhbnQgdG8gYXBwbHkgdG8gdGhlIHJlbmRlcmVkIEVsZW1lbnQuIFdlIG9yZGVyXG4gICAgICAgICAqIHRoaXMgdG8gb3JkZXIgdHJhbnNmb3JtcyBpbiB0aGUgZGVzaXJlZCBvcmRlci4gV2UgdXNlIGEgbXV0YWJsZSBkYXRhIHN0cnVjdHVyZSB0byByZWR1Y2UgR0MgZHVyaW5nIGFuaW1hdGlvbnMuXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy50cmFuc2Zvcm1LZXlzID0gW107XG4gICAgICAgIF90aGlzLmNvbmZpZyA9IF90aGlzLmRlZmF1bHRDb25maWc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAqIExheW91dFxuICAgICAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5pc0xheW91dFByb2plY3Rpb25FbmFibGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHNldCBvZiBsYXlvdXQgdXBkYXRlIGV2ZW50IGhhbmRsZXJzLiBUaGVzZSBhcmUgb25seSBjYWxsZWQgb25jZSBhbGwgbGF5b3V0cyBoYXZlIGJlZW4gcmVhZCxcbiAgICAgICAgICogbWFraW5nIGl0IHNhZmUgdG8gcGVyZm9ybSBET00gd3JpdGUgb3BlcmF0aW9ucy5cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLmxheW91dFVwZGF0ZUxpc3RlbmVycyA9IG5ldyBTdWJzY3JpcHRpb25NYW5hZ2VyKCk7XG4gICAgICAgIF90aGlzLmxheW91dE1lYXN1cmVMaXN0ZW5lcnMgPSBuZXcgU3Vic2NyaXB0aW9uTWFuYWdlcigpO1xuICAgICAgICBfdGhpcy52aWV3cG9ydEJveFVwZGF0ZUxpc3RlbmVycyA9IG5ldyBTdWJzY3JpcHRpb25NYW5hZ2VyKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBLZWVwIHRyYWNrIG9mIHdoZXRoZXIgdGhlIHZpZXdwb3J0IGJveCBoYXMgYmVlbiB1cGRhdGVkIHNpbmNlIHRoZSBsYXN0IHJlbmRlci5cbiAgICAgICAgICogSWYgaXQgaGFzLCB3ZSB3YW50IHRvIGZpcmUgdGhlIG9uVmlld3BvcnRCb3hVcGRhdGUgbGlzdGVuZXIuXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5oYXNWaWV3cG9ydEJveFVwZGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2aXN1YWwgdGFyZ2V0IHdlIHdhbnQgdG8gcHJvamVjdCBvdXIgY29tcG9uZW50IGludG8gb24gYSBnaXZlbiBmcmFtZVxuICAgICAgICAgKiBiZWZvcmUgYXBwbHlpbmcgdHJhbnNmb3JtcyBkZWZpbmVkIGluIGBhbmltYXRlYCBvciBgc3R5bGVgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGlzIGlzIGNvbnNpZGVyZWQgbXV0YWJsZSB0byBhdm9pZCBvYmplY3QgY3JlYXRpb24gb24gZWFjaCBmcmFtZS5cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLnRhcmdldEJveEZpbmFsID0gYXhpc0JveCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG92ZXJhbGwgc2NhbGUgb2YgdGhlIGxvY2FsIGNvb3JkaW5hdGUgc3lzdGVtIGFzIHRyYW5zZm9ybWVkIGJ5IGFsbCBwYXJlbnRzXG4gICAgICAgICAqIG9mIHRoaXMgY29tcG9uZW50LiBXZSB1c2UgdGhpcyBmb3Igc2NhbGUgY29ycmVjdGlvbiBvbiBvdXIgY2FsY3VsYXRlZCBsYXlvdXRzXG4gICAgICAgICAqIGFuZCBzY2FsZS1hZmZlY3RlZCB2YWx1ZXMgbGlrZSBgYm94U2hhZG93YC5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBpcyBjb25zaWRlcmVkIG11dGFibGUgdG8gYXZvaWQgb2JqZWN0IGNyZWF0aW9uIG9uIGVhY2ggZnJhbWUuXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy50cmVlU2NhbGUgPSB7IHg6IDEsIHk6IDEgfTtcbiAgICAgICAgX3RoaXMucHJldlRyZWVTY2FsZSA9IHsgeDogMSwgeTogMSB9O1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRlbHRhIGJldHdlZW4gdGhlIGJveENvcnJlY3RlZCBhbmQgdGhlIGRlc2lyZWRcbiAgICAgICAgICogdGFyZ2V0Qm94IChiZWZvcmUgdXNlci1zZXQgdHJhbnNmb3JtcyBhcmUgYXBwbGllZCkuIFRoZSBjYWxjdWxhdGVkIG91dHB1dCB3aWxsIGJlXG4gICAgICAgICAqIGhhbmRlZCB0byB0aGUgcmVuZGVyZXIgYW5kIHVzZWQgYXMgcGFydCBvZiB0aGUgc3R5bGUgY29ycmVjdGlvbiBjYWxjdWxhdGlvbnMsIGZvclxuICAgICAgICAgKiBpbnN0YW5jZSBjYWxjdWxhdGluZyBob3cgdG8gZGlzcGxheSB0aGUgZGVzaXJlZCBib3JkZXItcmFkaXVzIGNvcnJlY3RseS5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBpcyBjb25zaWRlcmVkIG11dGFibGUgdG8gYXZvaWQgb2JqZWN0IGNyZWF0aW9uIG9uIGVhY2ggZnJhbWUuXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5kZWx0YSA9IGRlbHRhKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGVsdGEgYmV0d2VlbiB0aGUgYm94Q29ycmVjdGVkIGFuZCB0aGUgZGVzaXJlZCB0YXJnZXRCb3hGaW5hbC4gVGhlIGNhbGN1bGF0ZWRcbiAgICAgICAgICogb3V0cHV0IHdpbGwgYmUgaGFuZGVkIHRvIHRoZSByZW5kZXJlciBhbmQgdXNlZCB0byBwcm9qZWN0IHRoZSBib3hDb3JyZWN0ZWQgaW50b1xuICAgICAgICAgKiB0aGUgdGFyZ2V0Qm94RmluYWwuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgaXMgY29uc2lkZXJlZCBtdXRhYmxlIHRvIGF2b2lkIG9iamVjdCBjcmVhdGlvbiBvbiBlYWNoIGZyYW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuZGVsdGFGaW5hbCA9IGRlbHRhKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY29tcHV0ZWQgdHJhbnNmb3JtIHN0cmluZyB0byBhcHBseSBkZWx0YUZpbmFsIHRvIHRoZSBlbGVtZW50LiBDdXJyZW50bHkgdGhpcyBpcyBvbmx5XG4gICAgICAgICAqIGJlaW5nIHVzZWQgdG8gZGlmZiBhbmQgZGVjaWRlIHdoZXRoZXIgdG8gcmVuZGVyIG9uIHRoZSBjdXJyZW50IGZyYW1lLCBidXQgYSBtaW5vciBvcHRpbWlzYXRpb25cbiAgICAgICAgICogY291bGQgYmUgdG8gcHJvdmlkZSB0aGlzIHRvIHRoZSBidWlsZEhUTUxTdHlsZSBmdW5jdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLmRlbHRhVHJhbnNmb3JtID0gaWRlbnRpdHlQcm9qZWN0aW9uO1xuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLnN0b3BMYXlvdXRBeGlzQW5pbWF0aW9uID0ge1xuICAgICAgICAgICAgeDogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICAgICAgeTogZnVuY3Rpb24gKCkgeyB9LFxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5pc1RhcmdldEJveExvY2tlZCA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLmF4aXNQcm9ncmVzcyA9IHtcbiAgICAgICAgICAgIHg6IG1vdGlvblZhbHVlKDApLFxuICAgICAgICAgICAgeTogbW90aW9uVmFsdWUoMCksXG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnVwZGF0ZUxheW91dERlbHRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaXNMYXlvdXRQcm9qZWN0aW9uRW5hYmxlZCAmJiBfdGhpcy5ib3ggJiYgX3RoaXMudXBkYXRlTGF5b3V0RGVsdGFzKCk7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEVuc3VyZSBhbGwgY2hpbGRyZW4gbGF5b3V0cyBhcmUgYWxzbyB1cGRhdGVkLlxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIFRoaXMgdXNlcyBhIHByZS1ib3VuZCBmdW5jdGlvbiBleGVjdXRvciByYXRoZXIgdGhhbiBhIGxhbWRhIHRvIGF2b2lkIGNyZWF0aW5nIGEgbmV3IGZ1bmN0aW9uXG4gICAgICAgICAgICAgKiBtdWx0aXBsZSB0aW1lcyBwZXIgZnJhbWUgKHNvdXJjZSBvZiBtaWQtYW5pbWF0aW9uIEdDKVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBfdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZpcmVVcGRhdGVMYXlvdXREZWx0YSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogV2hlbiBhIHZhbHVlIGlzIHJlbW92ZWQsIHdlIHdhbnQgdG8gbWFrZSBzdXJlIGl0J3MgcmVtb3ZlZCBmcm9tIGFsbCByZW5kZXJlZCBkYXRhIHN0cnVjdHVyZXMuXG4gICAgICovXG4gICAgSFRNTFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLnJlbW92ZVZhbHVlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbW92ZVZhbHVlLmNhbGwodGhpcywga2V5KTtcbiAgICAgICAgZGVsZXRlIHRoaXMudmFyc1trZXldO1xuICAgICAgICBkZWxldGUgdGhpcy5zdHlsZVtrZXldO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRW1wdHkgdGhlIG11dGFibGUgZGF0YSBzdHJ1Y3R1cmVzIGJ5IHJlLWNyZWF0aW5nIHRoZW0uIFdlIGNhbiBkbyB0aGlzIGV2ZXJ5IFJlYWN0IHJlbmRlclxuICAgICAqIGFzIHRoZSBjb21wYXJhdGl2ZSB3b3JrbG9hZCB0byB0aGUgcmVzdCBvZiB0aGUgcmVuZGVyIGlzIHZlcnkgbG93IGFuZCB0aGlzIGlzIGFsc28gd2hlblxuICAgICAqIHdlIHdhbnQgdG8gcmVmbGVjdCB2YWx1ZXMgdGhhdCBtaWdodCBoYXZlIGJlZW4gcmVtb3ZlZCBieSB0aGUgcmVuZGVyLlxuICAgICAqL1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5jbGVhbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zdHlsZSA9IHt9O1xuICAgICAgICB0aGlzLnZhcnMgPSB7fTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSB7fTtcbiAgICB9O1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS51cGRhdGVDb25maWcgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkgeyBjb25maWcgPSB7fTsgfVxuICAgICAgICB0aGlzLmNvbmZpZyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRDb25maWcpLCBjb25maWcpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVhZCBhIHZhbHVlIGRpcmVjdGx5IGZyb20gdGhlIEhUTUxFbGVtZW50IHN0eWxlLlxuICAgICAqL1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb21wdXRlZFN0eWxlKClba2V5XSB8fCAwO1xuICAgIH07XG4gICAgSFRNTFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLmFkZFZhbHVlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5hZGRWYWx1ZS5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIHJvdGF0ZSB2YWx1ZXMgd2Ugd2FudCB0byBmb2NlIHRoZSBsYXlvdXRPcmlnaW4gdXNlZCBpbiBsYXlvdXQgcHJvamVjdGlvblxuICAgICAgICAvLyB0byB0aGUgY2VudGVyIG9mIHRoZSBlbGVtZW50LlxuICAgICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoXCJyb3RhdGVcIikpXG4gICAgICAgICAgICB0aGlzLmxheW91dE9yaWdpbiA9IDAuNTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlYWQgYSB2YWx1ZSBkaXJlY3RseSBmcm9tIHRoZSBIVE1MRWxlbWVudCBpbiBjYXNlIGl0J3Mgbm90IGRlZmluZWQgYnkgYSBNb3Rpb25cbiAgICAgKiBwcm9wLiBJZiBpdCdzIGEgdHJhbnNmb3JtLCB3ZSBqdXN0IHJldHVybiBhIHByZS1kZWZpbmVkIGRlZmF1bHQgdmFsdWUgYXMgcmVhZGluZyB0aGVzZVxuICAgICAqIG91dCBvZiBhIG1hdHJpeCBpcyBlaXRoZXIgZXJyb3ItcHJvbmUgb3IgY2FuIGluY3VyIGEgYmlnIHBheWxvYWQgZm9yIGxpdHRsZSBiZW5lZml0LlxuICAgICAqL1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5yZWFkTmF0aXZlVmFsdWUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChpc1RyYW5zZm9ybVByb3Aoa2V5KSkge1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZVR5cGUgPSBnZXREZWZhdWx0VmFsdWVUeXBlKGtleSk7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlVHlwZSA/IGRlZmF1bHRWYWx1ZVR5cGUuZGVmYXVsdCB8fCAwIDogMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlYWQoa2V5KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogRW5zdXJlIHRoYXQgSFRNTCBhbmQgRnJhbWVyLXNwZWNpZmljIHZhbHVlIHR5cGVzIGxpa2UgYHB4YC0+YCVgIGFuZCBgQ29sb3JgXG4gICAgICogY2FuIGJlIGFuaW1hdGVkIGJ5IE1vdGlvbi5cbiAgICAgKi9cbiAgICBIVE1MVmlzdWFsRWxlbWVudC5wcm90b3R5cGUubWFrZVRhcmdldEFuaW1hdGFibGUgPSBmdW5jdGlvbiAoX2EsIHBhcnNlRE9NVmFsdWVzKSB7XG4gICAgICAgIGlmIChwYXJzZURPTVZhbHVlcyA9PT0gdm9pZCAwKSB7IHBhcnNlRE9NVmFsdWVzID0gdHJ1ZTsgfVxuICAgICAgICB2YXIgdHJhbnNpdGlvbiA9IF9hLnRyYW5zaXRpb24sIHRyYW5zaXRpb25FbmQgPSBfYS50cmFuc2l0aW9uRW5kLCB0YXJnZXQgPSBfX3Jlc3QoX2EsIFtcInRyYW5zaXRpb25cIiwgXCJ0cmFuc2l0aW9uRW5kXCJdKTtcbiAgICAgICAgdmFyIHRyYW5zZm9ybVZhbHVlcyA9IHRoaXMuY29uZmlnLnRyYW5zZm9ybVZhbHVlcztcbiAgICAgICAgdmFyIG9yaWdpbiA9IGdldE9yaWdpbih0YXJnZXQsIHRyYW5zaXRpb24gfHwge30sIHRoaXMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgRnJhbWVyIGhhcyBwcm92aWRlZCBhIGZ1bmN0aW9uIHRvIGNvbnZlcnQgYENvbG9yYCBldGMgdmFsdWUgdHlwZXMsIGNvbnZlcnQgdGhlbVxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHRyYW5zZm9ybVZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHRyYW5zaXRpb25FbmQpXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVuZCA9IHRyYW5zZm9ybVZhbHVlcyh0cmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQpXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdHJhbnNmb3JtVmFsdWVzKHRhcmdldCk7XG4gICAgICAgICAgICBpZiAob3JpZ2luKVxuICAgICAgICAgICAgICAgIG9yaWdpbiA9IHRyYW5zZm9ybVZhbHVlcyhvcmlnaW4pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJzZURPTVZhbHVlcykge1xuICAgICAgICAgICAgY2hlY2tUYXJnZXRGb3JOZXdWYWx1ZXModGhpcywgdGFyZ2V0LCBvcmlnaW4pO1xuICAgICAgICAgICAgdmFyIHBhcnNlZCA9IHBhcnNlRG9tVmFyaWFudCh0aGlzLCB0YXJnZXQsIG9yaWdpbiwgdHJhbnNpdGlvbkVuZCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uRW5kID0gcGFyc2VkLnRyYW5zaXRpb25FbmQ7XG4gICAgICAgICAgICB0YXJnZXQgPSBwYXJzZWQudGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7IHRyYW5zaXRpb246IHRyYW5zaXRpb24sXG4gICAgICAgICAgICB0cmFuc2l0aW9uRW5kOiB0cmFuc2l0aW9uRW5kIH0sIHRhcmdldCk7XG4gICAgfTtcbiAgICBIVE1MVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuZW5hYmxlTGF5b3V0UHJvamVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pc0xheW91dFByb2plY3Rpb25FbmFibGVkID0gdHJ1ZTtcbiAgICB9O1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUgPT09IGZhbHNlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlUmVuZGVyKCk7XG4gICAgfTtcbiAgICBIVE1MVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlID09PSB0cnVlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVSZW5kZXIoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGZpcmUgd2hlbiB0aGUgbGF5b3V0IGlzIHVwZGF0ZWQuIFdlIG1pZ2h0IHdhbnQgdG8gZXhwb3NlIHN1cHBvcnRcbiAgICAgKiBmb3IgdGhpcyB2aWEgYSBgbW90aW9uYCBwcm9wLlxuICAgICAqL1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5vbkxheW91dFVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXRVcGRhdGVMaXN0ZW5lcnMuYWRkKGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5vbkxheW91dE1lYXN1cmUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5b3V0TWVhc3VyZUxpc3RlbmVycy5hZGQoY2FsbGJhY2spO1xuICAgIH07XG4gICAgSFRNTFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLm9uVmlld3BvcnRCb3hVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlld3BvcnRCb3hVcGRhdGVMaXN0ZW5lcnMuYWRkKGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRvIGJlIGNhbGxlZCB3aGVuIGFsbCBsYXlvdXRzIGFyZSBzdWNjZXNzZnVsbHkgdXBkYXRlZC4gSW4gdHVybiB3ZSBjYW4gbm90aWZ5IGxheW91dFVwZGF0ZVxuICAgICAqIHN1YnNjcmliZXJzLlxuICAgICAqL1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5sYXlvdXRSZWFkeSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgdGhpcy5sYXlvdXRVcGRhdGVMaXN0ZW5lcnMubm90aWZ5KHRoaXMuYm94LCB0aGlzLnByZXZWaWV3cG9ydEJveCB8fCB0aGlzLmJveCwgY29uZmlnKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIE1lYXN1cmUgYW5kIHJldHVybiB0aGUgRWxlbWVudCdzIGJvdW5kaW5nIGJveC4gV2UgY29udmVydCBpdCB0byBhIEF4aXNCb3gyRFxuICAgICAqIHN0cnVjdHVyZSB0byBtYWtlIGl0IGVhc2llciB0byB3b3JrIG9uIGVhY2ggaW5kaXZpZHVhbCBheGlzIGdlbmVyaWNhbGx5LlxuICAgICAqL1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5nZXRCb3VuZGluZ0JveCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRyYW5zZm9ybVBhZ2VQb2ludCA9IHRoaXMuY29uZmlnLnRyYW5zZm9ybVBhZ2VQb2ludDtcbiAgICAgICAgcmV0dXJuIGdldEJvdW5kaW5nQm94KHRoaXMuZWxlbWVudCwgdHJhbnNmb3JtUGFnZVBvaW50KTtcbiAgICB9O1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5nZXRCb3VuZGluZ0JveFdpdGhvdXRUcmFuc2Zvcm1zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYmJveCA9IHRoaXMuZ2V0Qm91bmRpbmdCb3goKTtcbiAgICAgICAgcmVtb3ZlQm94VHJhbnNmb3JtcyhiYm94LCB0aGlzLmxhdGVzdCk7XG4gICAgICAgIHJldHVybiBiYm94O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBjb21wdXRlZCBzdHlsZSBhZnRlciBhIHJlbmRlci5cbiAgICAgKi9cbiAgICBIVE1MVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuZ2V0Q29tcHV0ZWRTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZWNvcmQgdGhlIGJvdW5kaW5nIGJveCBhcyBpdCBleGlzdHMgYmVmb3JlIGEgcmUtcmVuZGVyLlxuICAgICAqL1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5zbmFwc2hvdEJvdW5kaW5nQm94ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnByZXZWaWV3cG9ydEJveCA9IHRoaXMuZ2V0Qm91bmRpbmdCb3hXaXRob3V0VHJhbnNmb3JtcygpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVXBkYXRlIHRhcmdldEJveCB0byBtYXRjaCB0aGUgcHJldlZpZXdwb3J0Qm94LiBUaGlzIGlzIGp1c3QgdG8gZW5zdXJlXG4gICAgICAgICAqIHRoYXQgdGFyZ2V0Qm94IGlzIGFmZmVjdGVkIGJ5IHNjcm9sbCBpbiB0aGUgc2FtZSB3YXkgYXMgdGhlIG1lYXN1cmVkIGJveFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZWJhc2VUYXJnZXRCb3goZmFsc2UsIHRoaXMucHJldlZpZXdwb3J0Qm94KTtcbiAgICB9O1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5yZWJhc2VUYXJnZXRCb3ggPSBmdW5jdGlvbiAoZm9yY2UsIGJveCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoZm9yY2UgPT09IHZvaWQgMCkgeyBmb3JjZSA9IGZhbHNlOyB9XG4gICAgICAgIGlmIChib3ggPT09IHZvaWQgMCkgeyBib3ggPSB0aGlzLmJveDsgfVxuICAgICAgICB2YXIgX2EgPSB0aGlzLmF4aXNQcm9ncmVzcywgeCA9IF9hLngsIHkgPSBfYS55O1xuICAgICAgICB2YXIgc2hvdWxkUmViYXNlID0gdGhpcy5ib3ggJiZcbiAgICAgICAgICAgICF0aGlzLmlzVGFyZ2V0Qm94TG9ja2VkICYmXG4gICAgICAgICAgICAheC5pc0FuaW1hdGluZygpICYmXG4gICAgICAgICAgICAheS5pc0FuaW1hdGluZygpO1xuICAgICAgICBpZiAoZm9yY2UgfHwgc2hvdWxkUmViYXNlKSB7XG4gICAgICAgICAgICBlYWNoQXhpcyhmdW5jdGlvbiAoYXhpcykge1xuICAgICAgICAgICAgICAgIHZhciBfYSA9IGJveFtheGlzXSwgbWluID0gX2EubWluLCBtYXggPSBfYS5tYXg7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0QXhpc1RhcmdldChheGlzLCBtaW4sIG1heCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgSFRNTFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLm1lYXN1cmVMYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYm94ID0gdGhpcy5nZXRCb3VuZGluZ0JveCgpO1xuICAgICAgICB0aGlzLmJveENvcnJlY3RlZCA9IGNvcHlBeGlzQm94KHRoaXMuYm94KTtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldEJveClcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Qm94ID0gY29weUF4aXNCb3godGhpcy5ib3gpO1xuICAgICAgICB0aGlzLmxheW91dE1lYXN1cmVMaXN0ZW5lcnMubm90aWZ5KHRoaXMuYm94LCB0aGlzLnByZXZWaWV3cG9ydEJveCB8fCB0aGlzLmJveCk7XG4gICAgICAgIHN5bmMudXBkYXRlKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnJlYmFzZVRhcmdldEJveCgpOyB9KTtcbiAgICB9O1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5sb2NrVGFyZ2V0Qm94ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzVGFyZ2V0Qm94TG9ja2VkID0gdHJ1ZTtcbiAgICB9O1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS51bmxvY2tUYXJnZXRCb3ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RvcExheW91dEFuaW1hdGlvbigpO1xuICAgICAgICB0aGlzLmlzVGFyZ2V0Qm94TG9ja2VkID0gZmFsc2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgdHJhbnNmb3JtIG9uIHRoZSBjdXJyZW50IEVsZW1lbnQuIFRoaXMgaXMgY2FsbGVkIGFzIHBhcnRcbiAgICAgKiBvZiBhIGJhdGNoZWQgcHJvY2VzcyBhY3Jvc3MgdGhlIGVudGlyZSBsYXlvdXQgdHJlZS4gVG8gcmVtb3ZlIHRoaXMgd3JpdGVcbiAgICAgKiBjeWNsZSBpdCdkIGJlIGludGVyZXN0aW5nIHRvIHNlZSBpZiBpdCdzIHBvc3NpYmxlIHRvIFwidW5kb1wiIGFsbCB0aGUgY3VycmVudFxuICAgICAqIGxheW91dCB0cmFuc2Zvcm1zIHVwIHRoZSB0cmVlIGluIHRoZSBzYW1lIHdheSB0aGlzLmdldEJvdW5kaW5nQm94V2l0aG91dFRyYW5zZm9ybXNcbiAgICAgKiB3b3Jrc1xuICAgICAqL1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5yZXNldFRyYW5zZm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRyYW5zZm9ybVRlbXBsYXRlID0gdGhpcy5jb25maWcudHJhbnNmb3JtVGVtcGxhdGU7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1UZW1wbGF0ZVxuICAgICAgICAgICAgPyB0cmFuc2Zvcm1UZW1wbGF0ZSh7fSwgXCJcIilcbiAgICAgICAgICAgIDogXCJub25lXCI7XG4gICAgICAgIC8vIEVuc3VyZSB0aGF0IHdoYXRldmVyIGhhcHBlbnMgbmV4dCwgd2UgcmVzdG9yZSBvdXIgdHJhbnNmb3JtXG4gICAgICAgIHRoaXMuc2NoZWR1bGVSZW5kZXIoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldCBuZXcgbWluL21heCBib3VuZGFyaWVzIHRvIHByb2plY3QgYW4gYXhpcyBpbnRvXG4gICAgICovXG4gICAgSFRNTFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLnNldEF4aXNUYXJnZXQgPSBmdW5jdGlvbiAoYXhpcywgbWluLCBtYXgpIHtcbiAgICAgICAgdmFyIHRhcmdldEF4aXMgPSB0aGlzLnRhcmdldEJveFtheGlzXTtcbiAgICAgICAgdGFyZ2V0QXhpcy5taW4gPSBtaW47XG4gICAgICAgIHRhcmdldEF4aXMubWF4ID0gbWF4O1xuICAgICAgICAvLyBGbGFnIHRoYXQgd2Ugd2FudCB0byBmaXJlIHRoZSBvblZpZXdwb3J0Qm94VXBkYXRlIGV2ZW50IGhhbmRsZXJcbiAgICAgICAgdGhpcy5oYXNWaWV3cG9ydEJveFVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnJvb3RQYXJlbnQuc2NoZWR1bGVVcGRhdGVMYXlvdXREZWx0YSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBIVE1MVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuc3RhcnRMYXlvdXRBeGlzQW5pbWF0aW9uID0gZnVuY3Rpb24gKGF4aXMsIHRyYW5zaXRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB2YXIgcHJvZ3Jlc3MgPSB0aGlzLmF4aXNQcm9ncmVzc1theGlzXTtcbiAgICAgICAgdmFyIF9iID0gdGhpcy50YXJnZXRCb3hbYXhpc10sIG1pbiA9IF9iLm1pbiwgbWF4ID0gX2IubWF4O1xuICAgICAgICB2YXIgbGVuZ3RoID0gbWF4IC0gbWluO1xuICAgICAgICBwcm9ncmVzcy5jbGVhckxpc3RlbmVycygpO1xuICAgICAgICBwcm9ncmVzcy5zZXQobWluKTtcbiAgICAgICAgcHJvZ3Jlc3Muc2V0KG1pbik7IC8vIFNldCB0d2ljZSB0byBoYXJkLXJlc2V0IHZlbG9jaXR5XG4gICAgICAgIHByb2dyZXNzLm9uQ2hhbmdlKGZ1bmN0aW9uICh2KSB7IHJldHVybiBfdGhpcy5zZXRBeGlzVGFyZ2V0KGF4aXMsIHYsIHYgKyBsZW5ndGgpOyB9KTtcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuYW5pbWF0ZU1vdGlvblZhbHVlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzLCBheGlzLCBwcm9ncmVzcywgMCwgdHJhbnNpdGlvbik7XG4gICAgfTtcbiAgICBIVE1MVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuc3RvcExheW91dEFuaW1hdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgZWFjaEF4aXMoZnVuY3Rpb24gKGF4aXMpIHsgcmV0dXJuIF90aGlzLmF4aXNQcm9ncmVzc1theGlzXS5zdG9wKCk7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBsYXlvdXQgZGVsdGFzIHRvIHJlZmxlY3QgdGhlIHJlbGF0aXZlIHBvc2l0aW9ucyBvZiB0aGUgbGF5b3V0XG4gICAgICogYW5kIHRoZSBkZXNpcmVkIHRhcmdldCBib3hcbiAgICAgKi9cbiAgICBIVE1MVmlzdWFsRWxlbWVudC5wcm90b3R5cGUudXBkYXRlTGF5b3V0RGVsdGFzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVzZXQgdGhlIGNvcnJlY3RlZCBib3ggd2l0aCB0aGUgbGF0ZXN0IHZhbHVlcyBmcm9tIGJveCwgYXMgd2UncmUgdGhlbiBnb2luZ1xuICAgICAgICAgKiB0byBwZXJmb3JtIG11dGF0aXZlIG9wZXJhdGlvbnMgb24gaXQuXG4gICAgICAgICAqL1xuICAgICAgICByZXNldEJveCh0aGlzLmJveENvcnJlY3RlZCwgdGhpcy5ib3gpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdGhpcyBjb21wb25lbnQgaGFzIGEgcGFyZW50LCB1cGRhdGUgdGhpcyB0cmVlU2NhbGUgYnkgaW5jb3Jwb3JhdGluZyB0aGUgcGFyZW50J3NcbiAgICAgICAgICogZGVsdGEgaW50byBpdHMgdHJlZVNjYWxlLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICB0aGlzLnByZXZUcmVlU2NhbGUueCA9IHRoaXMudHJlZVNjYWxlLng7XG4gICAgICAgICAgICB0aGlzLnByZXZUcmVlU2NhbGUueSA9IHRoaXMudHJlZVNjYWxlLnk7XG4gICAgICAgICAgICB1cGRhdGVUcmVlU2NhbGUodGhpcy50cmVlU2NhbGUsIHRoaXMucGFyZW50LnRyZWVTY2FsZSwgdGhpcy5wYXJlbnQuZGVsdGEpO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcHBseSBhbGwgdGhlIHBhcmVudCBkZWx0YXMgdG8gdGhpcyBib3ggdG8gcHJvZHVjZSB0aGUgY29ycmVjdGVkIGJveC4gVGhpc1xuICAgICAgICAgKiBpcyB0aGUgbGF5b3V0IGJveCwgYXMgaXQgd2lsbCBhcHBlYXIgb24gc2NyZWVuIGFzIGEgcmVzdWx0IG9mIHRoZSB0cmFuc2Zvcm1zIG9mIGl0cyBwYXJlbnRzLlxuICAgICAgICAgKi9cbiAgICAgICAgYXBwbHlUcmVlRGVsdGFzKHRoaXMuYm94Q29ycmVjdGVkLCB0aGlzLnRyZWVQYXRoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVwZGF0ZSB0aGUgZGVsdGEgYmV0d2VlbiB0aGUgY29ycmVjdGVkIGJveCBhbmQgdGhlIHRhcmdldCBib3ggYmVmb3JlIHVzZXItc2V0IHRyYW5zZm9ybXMgd2VyZSBhcHBsaWVkLlxuICAgICAgICAgKiBUaGlzIHdpbGwgYWxsb3cgdXMgdG8gY2FsY3VsYXRlIHRoZSBjb3JyZWN0ZWQgYm9yZGVyUmFkaXVzIGFuZCBib3hTaGFkb3cgdG8gY29tcGVuc2F0ZVxuICAgICAgICAgKiBmb3Igb3VyIGxheW91dCByZXByb2plY3Rpb24sIGJ1dCBzdGlsbCBhbGxvdyB0aGVtIHRvIGJlIHNjYWxlZCBjb3JyZWN0bHkgYnkgdGhlIHVzZXIuXG4gICAgICAgICAqIEl0IG1pZ2h0IGJlIHRoYXQgdG8gc2ltcGxpZnkgdGhpcyB3ZSBtYXkgd2FudCB0byBhY2NlcHQgdGhhdCB1c2VyLXNldCBzY2FsZSBpcyBhbHNvIGNvcnJlY3RlZFxuICAgICAgICAgKiBhbmQgd2Ugd291bGRuJ3QgaGF2ZSB0byBrZWVwIGFuZCBjYWxjIGJvdGggZGVsdGFzLCBPUiB3ZSBjb3VsZCBzdXBwb3J0IGEgdXNlciBzZXR0aW5nXG4gICAgICAgICAqIHRvIGFsbG93IHBlb3BsZSB0byBjaG9vc2Ugd2hldGhlciB0aGVzZSBzdHlsZXMgYXJlIGNvcnJlY3RlZCBiYXNlZCBvbiBqdXN0IHRoZVxuICAgICAgICAgKiBsYXlvdXQgcmVwcm9qZWN0aW9uIG9yIHRoZSBmaW5hbCBib3VuZGluZyBib3guXG4gICAgICAgICAqL1xuICAgICAgICB1cGRhdGVCb3hEZWx0YSh0aGlzLmRlbHRhLCB0aGlzLmJveENvcnJlY3RlZCwgdGhpcy50YXJnZXRCb3gsIHRoaXMubGF5b3V0T3JpZ2luKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHdlIGhhdmUgYSBsaXN0ZW5lciBmb3IgdGhlIHZpZXdwb3J0IGJveCwgZmlyZSBpdC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaGFzVmlld3BvcnRCb3hVcGRhdGVkICYmXG4gICAgICAgICAgICB0aGlzLnZpZXdwb3J0Qm94VXBkYXRlTGlzdGVuZXJzLm5vdGlmeSh0aGlzLnRhcmdldEJveCwgdGhpcy5kZWx0YSk7XG4gICAgICAgIHRoaXMuaGFzVmlld3BvcnRCb3hVcGRhdGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFbnN1cmUgdGhpcyBlbGVtZW50IHJlbmRlcnMgb24gdGhlIG5leHQgZnJhbWUgaWYgdGhlIHByb2plY3Rpb24gdHJhbnNmb3JtIGhhcyBjaGFuZ2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGRlbHRhVHJhbnNmb3JtID0gYnVpbGRMYXlvdXRQcm9qZWN0aW9uVHJhbnNmb3JtKHRoaXMuZGVsdGEsIHRoaXMudHJlZVNjYWxlKTtcbiAgICAgICAgaWYgKGRlbHRhVHJhbnNmb3JtICE9PSB0aGlzLmRlbHRhVHJhbnNmb3JtIHx8XG4gICAgICAgICAgICAvLyBBbHNvIGNvbXBhcmUgY2FsY3VsYXRlZCB0cmVlU2NhbGUsIGZvciB2YWx1ZXMgdGhhdCByZWx5IG9uIG9ubHkgdGhpcyBmb3Igc2NhbGUgY29ycmVjdGlvbi5cbiAgICAgICAgICAgIHRoaXMucHJldlRyZWVTY2FsZS54ICE9PSB0aGlzLnRyZWVTY2FsZS54IHx8XG4gICAgICAgICAgICB0aGlzLnByZXZUcmVlU2NhbGUueSAhPT0gdGhpcy50cmVlU2NhbGUueSkge1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZVJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVsdGFUcmFuc2Zvcm0gPSBkZWx0YVRyYW5zZm9ybTtcbiAgICB9O1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS51cGRhdGVUcmFuc2Zvcm1EZWx0YXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0xheW91dFByb2plY3Rpb25FbmFibGVkIHx8ICF0aGlzLmJveClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFwcGx5IHRoZSBsYXRlc3QgdXNlci1zZXQgdHJhbnNmb3JtcyB0byB0aGUgdGFyZ2V0Qm94IHRvIHByb2R1Y2UgdGhlIHRhcmdldEJveEZpbmFsLlxuICAgICAgICAgKiBUaGlzIGlzIHRoZSBmaW5hbCBib3ggdGhhdCB3ZSB3aWxsIHRoZW4gcHJvamVjdCBpbnRvIGJ5IGNhbGN1bGF0aW5nIGEgdHJhbnNmb3JtIGRlbHRhIGFuZFxuICAgICAgICAgKiBhcHBseWluZyBpdCB0byB0aGUgY29ycmVjdGVkIGJveC5cbiAgICAgICAgICovXG4gICAgICAgIGFwcGx5Qm94VHJhbnNmb3Jtcyh0aGlzLnRhcmdldEJveEZpbmFsLCB0aGlzLnRhcmdldEJveCwgdGhpcy5sYXRlc3QpO1xuICAgICAgICAvKipcbiAgICAgICAgICogVXBkYXRlIHRoZSBkZWx0YSBiZXR3ZWVuIHRoZSBjb3JyZWN0ZWQgYm94IGFuZCB0aGUgZmluYWwgdGFyZ2V0IGJveCwgYWZ0ZXJcbiAgICAgICAgICogdXNlci1zZXQgdHJhbnNmb3JtcyBhcmUgYXBwbGllZCB0byBpdC4gVGhpcyB3aWxsIGJlIHVzZWQgYnkgdGhlIHJlbmRlcmVyIHRvXG4gICAgICAgICAqIGNyZWF0ZSBhIHRyYW5zZm9ybSBzdHlsZSB0aGF0IHdpbGwgcmVwcm9qZWN0IHRoZSBlbGVtZW50IGZyb20gaXRzIGFjdHVhbCBsYXlvdXRcbiAgICAgICAgICogaW50byB0aGUgZGVzaXJlZCBib3VuZGluZyBib3guXG4gICAgICAgICAqL1xuICAgICAgICB1cGRhdGVCb3hEZWx0YSh0aGlzLmRlbHRhRmluYWwsIHRoaXMuYm94Q29ycmVjdGVkLCB0aGlzLnRhcmdldEJveEZpbmFsLCB0aGlzLmxheW91dE9yaWdpbik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICogQnVpbGQgJiByZW5kZXJcbiAgICAgKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICovXG4gICAgLyoqXG4gICAgICogQnVpbGQgYSBzdHlsZSBwcm9wIHVzaW5nIHRoZSBsYXRlc3QgcmVzb2x2ZWQgTW90aW9uVmFsdWVzXG4gICAgICovXG4gICAgSFRNTFZpc3VhbEVsZW1lbnQucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVRyYW5zZm9ybURlbHRhcygpO1xuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zdHlsZS52aXNpYmlsaXR5ID0gdGhpcy5pc1Zpc2libGUgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCI7XG4gICAgICAgIH1cbiAgICAgICAgYnVpbGRIVE1MU3R5bGVzKHRoaXMubGF0ZXN0LCB0aGlzLnN0eWxlLCB0aGlzLnZhcnMsIHRoaXMudHJhbnNmb3JtLCB0aGlzLnRyYW5zZm9ybU9yaWdpbiwgdGhpcy50cmFuc2Zvcm1LZXlzLCB0aGlzLmNvbmZpZywgdGhpcy5pc0xheW91dFByb2plY3Rpb25FbmFibGVkICYmICEhdGhpcy5ib3gsIHRoaXMuZGVsdGEsIHRoaXMuZGVsdGFGaW5hbCwgdGhpcy50cmVlU2NhbGUsIHRoaXMudGFyZ2V0Qm94RmluYWwpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVuZGVyIHRoZSBFbGVtZW50IGJ5IHJlYnVpbGRpbmcgYW5kIGFwcGx5aW5nIHRoZSBsYXRlc3Qgc3R5bGVzIGFuZCB2YXJzLlxuICAgICAqL1xuICAgIEhUTUxWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFJlYnVpbGQgdGhlIGxhdGVzdCBhbmltYXRlZCB2YWx1ZXMgaW50byBzdHlsZSBhbmQgdmFycyBjYWNoZXMuXG4gICAgICAgIHRoaXMuYnVpbGQoKTtcbiAgICAgICAgLy8gRGlyZWN0bHkgYXNzaWduIHN0eWxlIGludG8gdGhlIEVsZW1lbnQncyBzdHlsZSBwcm9wLiBJbiB0ZXN0cyBPYmplY3QuYXNzaWduIGlzIHRoZVxuICAgICAgICAvLyBmYXN0ZXN0IHdheSB0byBhc3NpZ24gc3R5bGVzLlxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuZWxlbWVudC5zdHlsZSwgdGhpcy5zdHlsZSk7XG4gICAgICAgIC8vIExvb3Agb3ZlciBhbnkgQ1NTIHZhcmlhYmxlcyBhbmQgYXNzaWduIHRob3NlLlxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy52YXJzKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB0aGlzLnZhcnNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBIVE1MVmlzdWFsRWxlbWVudDtcbn0oVmlzdWFsRWxlbWVudCkpO1xuLyoqXG4gKiBQcmUtYm91bmQgdmVyc2lvbiBvZiB1cGRhdGVMYXlvdXREZWx0YSBzbyB3ZSdyZSBub3QgY3JlYXRpbmcgYSBuZXcgZnVuY3Rpb24gbXVsdGlwbGVcbiAqIHRpbWVzIHBlciBmcmFtZS5cbiAqL1xudmFyIGZpcmVVcGRhdGVMYXlvdXREZWx0YSA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZC51cGRhdGVMYXlvdXREZWx0YSgpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY29uc3RhbnQgdmFsdWUgb3ZlciB0aGUgbGlmZWN5Y2xlIG9mIGEgY29tcG9uZW50LlxuICpcbiAqIEV2ZW4gaWYgYHVzZU1lbW9gIGlzIHByb3ZpZGVkIGFuIGVtcHR5IGFycmF5IGFzIGl0cyBmaW5hbCBhcmd1bWVudCwgaXQgZG9lc24ndCBvZmZlclxuICogYSBndWFyYW50ZWUgdGhhdCBpdCB3b24ndCByZS1ydW4gZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMgbGF0ZXIgb24uIEJ5IHVzaW5nIGB1c2VDb25zdGFudGBcbiAqIHlvdSBjYW4gZW5zdXJlIHRoYXQgaW5pdGlhbGlzZXJzIGRvbid0IGV4ZWN1dGUgdHdpY2Ugb3IgbW9yZS5cbiAqL1xuZnVuY3Rpb24gdXNlQ29uc3RhbnQoaW5pdCkge1xuICAgIHZhciByZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgaWYgKHJlZi5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gaW5pdCgpO1xuICAgIH1cbiAgICByZXR1cm4gcmVmLmN1cnJlbnQ7XG59XG5cbmZ1bmN0aW9uIGNhbGNPcmlnaW4kMShvcmlnaW4sIG9mZnNldCwgc2l6ZSkge1xuICAgIHJldHVybiB0eXBlb2Ygb3JpZ2luID09PSBcInN0cmluZ1wiXG4gICAgICAgID8gb3JpZ2luXG4gICAgICAgIDogcHgudHJhbnNmb3JtKG9mZnNldCArIHNpemUgKiBvcmlnaW4pO1xufVxuLyoqXG4gKiBUaGUgU1ZHIHRyYW5zZm9ybSBvcmlnaW4gZGVmYXVsdHMgYXJlIGRpZmZlcmVudCB0byBDU1MgYW5kIGlzIGxlc3MgaW50dWl0aXZlLFxuICogc28gd2UgdXNlIHRoZSBtZWFzdXJlZCBkaW1lbnNpb25zIG9mIHRoZSBTVkcgdG8gcmVjb25jaWxlIHRoZXNlLlxuICovXG5mdW5jdGlvbiBjYWxjU1ZHVHJhbnNmb3JtT3JpZ2luKGRpbWVuc2lvbnMsIG9yaWdpblgsIG9yaWdpblkpIHtcbiAgICB2YXIgcHhPcmlnaW5YID0gY2FsY09yaWdpbiQxKG9yaWdpblgsIGRpbWVuc2lvbnMueCwgZGltZW5zaW9ucy53aWR0aCk7XG4gICAgdmFyIHB4T3JpZ2luWSA9IGNhbGNPcmlnaW4kMShvcmlnaW5ZLCBkaW1lbnNpb25zLnksIGRpbWVuc2lvbnMuaGVpZ2h0KTtcbiAgICByZXR1cm4gcHhPcmlnaW5YICsgXCIgXCIgKyBweE9yaWdpblk7XG59XG5cbi8vIENvbnZlcnQgYSBwcm9ncmVzcyAwLTEgdG8gYSBwaXhlbHMgdmFsdWUgYmFzZWQgb24gdGhlIHByb3ZpZGVkIGxlbmd0aFxudmFyIHByb2dyZXNzVG9QaXhlbHMgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIGxlbmd0aCkge1xuICAgIHJldHVybiBweC50cmFuc2Zvcm0ocHJvZ3Jlc3MgKiBsZW5ndGgpO1xufTtcbnZhciBkYXNoS2V5cyA9IHtcbiAgICBvZmZzZXQ6IFwic3Ryb2tlLWRhc2hvZmZzZXRcIixcbiAgICBhcnJheTogXCJzdHJva2UtZGFzaGFycmF5XCIsXG59O1xudmFyIGNhbWVsS2V5cyA9IHtcbiAgICBvZmZzZXQ6IFwic3Ryb2tlRGFzaG9mZnNldFwiLFxuICAgIGFycmF5OiBcInN0cm9rZURhc2hhcnJheVwiLFxufTtcbi8qKlxuICogQnVpbGQgU1ZHIHBhdGggcHJvcGVydGllcy4gVXNlcyB0aGUgcGF0aCdzIG1lYXN1cmVkIGxlbmd0aCB0byBjb252ZXJ0XG4gKiBvdXIgY3VzdG9tIHBhdGhMZW5ndGgsIHBhdGhTcGFjaW5nIGFuZCBwYXRoT2Zmc2V0IGludG8gc3Ryb2tlLWRhc2hvZmZzZXRcbiAqIGFuZCBzdHJva2UtZGFzaGFycmF5IGF0dHJpYnV0ZXMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBtdXRhdGl2ZSB0byByZWR1Y2UgcGVyLWZyYW1lIEdDLlxuICovXG5mdW5jdGlvbiBidWlsZFNWR1BhdGgoYXR0cnMsIHRvdGFsTGVuZ3RoLCBsZW5ndGgsIHNwYWNpbmcsIG9mZnNldCwgdXNlRGFzaENhc2UpIHtcbiAgICBpZiAoc3BhY2luZyA9PT0gdm9pZCAwKSB7IHNwYWNpbmcgPSAxOyB9XG4gICAgaWYgKG9mZnNldCA9PT0gdm9pZCAwKSB7IG9mZnNldCA9IDA7IH1cbiAgICBpZiAodXNlRGFzaENhc2UgPT09IHZvaWQgMCkgeyB1c2VEYXNoQ2FzZSA9IHRydWU7IH1cbiAgICAvLyBXZSB1c2UgZGFzaCBjYXNlIHdoZW4gc2V0dGluZyBhdHRyaWJ1dGVzIGRpcmVjdGx5IHRvIHRoZSBET00gbm9kZSBhbmQgY2FtZWwgY2FzZVxuICAgIC8vIHdoZW4gZGVmaW5pbmcgcHJvcHMgb24gYSBSZWFjdCBjb21wb25lbnQuXG4gICAgdmFyIGtleXMgPSB1c2VEYXNoQ2FzZSA/IGRhc2hLZXlzIDogY2FtZWxLZXlzO1xuICAgIC8vIEJ1aWxkIHRoZSBkYXNoIG9mZnNldFxuICAgIGF0dHJzW2tleXMub2Zmc2V0XSA9IHByb2dyZXNzVG9QaXhlbHMoLW9mZnNldCwgdG90YWxMZW5ndGgpO1xuICAgIC8vIEJ1aWxkIHRoZSBkYXNoIGFycmF5XG4gICAgdmFyIHBhdGhMZW5ndGggPSBwcm9ncmVzc1RvUGl4ZWxzKGxlbmd0aCwgdG90YWxMZW5ndGgpO1xuICAgIHZhciBwYXRoU3BhY2luZyA9IHByb2dyZXNzVG9QaXhlbHMoc3BhY2luZywgdG90YWxMZW5ndGgpO1xuICAgIGF0dHJzW2tleXMuYXJyYXldID0gcGF0aExlbmd0aCArIFwiIFwiICsgcGF0aFNwYWNpbmc7XG59XG5cbnZhciB1bm1lYXN1cmVkID0geyB4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwIH07XG4vKipcbiAqIEJ1aWxkIFNWRyB2aXN1YWwgYXR0cmJ1dGVzLCBsaWtlIGN4IGFuZCBzdHlsZS50cmFuc2Zvcm1cbiAqL1xuZnVuY3Rpb24gYnVpbGRTVkdBdHRycyhfYSwgc3R5bGUsIHZhcnMsIGF0dHJzLCB0cmFuc2Zvcm0sIHRyYW5zZm9ybU9yaWdpbiwgdHJhbnNmb3JtS2V5cywgY29uZmlnLCBkaW1lbnNpb25zLCB0b3RhbFBhdGhMZW5ndGgsIGlzTGF5b3V0UHJvamVjdGlvbkVuYWJsZWQsIGRlbHRhLCBkZWx0YUZpbmFsLCB0cmVlU2NhbGUsIHRhcmdldEJveCkge1xuICAgIHZhciBhdHRyWCA9IF9hLmF0dHJYLCBhdHRyWSA9IF9hLmF0dHJZLCBvcmlnaW5YID0gX2Eub3JpZ2luWCwgb3JpZ2luWSA9IF9hLm9yaWdpblksIHBhdGhMZW5ndGggPSBfYS5wYXRoTGVuZ3RoLCBfYiA9IF9hLnBhdGhTcGFjaW5nLCBwYXRoU3BhY2luZyA9IF9iID09PSB2b2lkIDAgPyAxIDogX2IsIF9jID0gX2EucGF0aE9mZnNldCwgcGF0aE9mZnNldCA9IF9jID09PSB2b2lkIDAgPyAwIDogX2MsIFxuICAgIC8vIFRoaXMgaXMgb2JqZWN0IGNyZWF0aW9uLCB3aGljaCB3ZSB0cnkgdG8gYXZvaWQgcGVyLWZyYW1lLlxuICAgIGxhdGVzdCA9IF9fcmVzdChfYSwgW1wiYXR0clhcIiwgXCJhdHRyWVwiLCBcIm9yaWdpblhcIiwgXCJvcmlnaW5ZXCIsIFwicGF0aExlbmd0aFwiLCBcInBhdGhTcGFjaW5nXCIsIFwicGF0aE9mZnNldFwiXSk7XG4gICAgLyoqXG4gICAgICogV2l0aCBTVkcgd2UgdHJlYXQgYWxsIGFuaW1hdGVkIHZhbHVlcyBhcyBhdHRyaWJ1dGVzIHJhdGhlciB0aGFuIENTUywgc28gd2UgYnVpbGQgaW50byBhdHRyc1xuICAgICAqL1xuICAgIGJ1aWxkSFRNTFN0eWxlcyhsYXRlc3QsIGF0dHJzLCB2YXJzLCB0cmFuc2Zvcm0sIHRyYW5zZm9ybU9yaWdpbiwgdHJhbnNmb3JtS2V5cywgY29uZmlnLCBpc0xheW91dFByb2plY3Rpb25FbmFibGVkLCBkZWx0YSwgZGVsdGFGaW5hbCwgdHJlZVNjYWxlLCB0YXJnZXRCb3gpO1xuICAgIC8qKlxuICAgICAqIEhvd2V2ZXIsIHdlIGFwcGx5IHRyYW5zZm9ybXMgYXMgQ1NTIHRyYW5zZm9ybXMuIFNvIGlmIHdlIGRldGVjdCBhIHRyYW5zZm9ybSB3ZSB0YWtlIGl0IGZyb20gYXR0cnNcbiAgICAgKiBhbmQgY29weSBpdCBpbnRvIHN0eWxlLlxuICAgICAqL1xuICAgIGlmIChhdHRycy50cmFuc2Zvcm0pIHtcbiAgICAgICAgc3R5bGUudHJhbnNmb3JtID0gYXR0cnMudHJhbnNmb3JtO1xuICAgICAgICBkZWxldGUgYXR0cnMudHJhbnNmb3JtO1xuICAgIH1cbiAgICAvLyBQYXJzZSB0cmFuc2Zvcm1PcmlnaW5cbiAgICBpZiAob3JpZ2luWCAhPT0gdW5kZWZpbmVkIHx8IG9yaWdpblkgIT09IHVuZGVmaW5lZCB8fCBzdHlsZS50cmFuc2Zvcm0pIHtcbiAgICAgICAgc3R5bGUudHJhbnNmb3JtT3JpZ2luID0gY2FsY1NWR1RyYW5zZm9ybU9yaWdpbihkaW1lbnNpb25zIHx8IHVubWVhc3VyZWQsIG9yaWdpblggIT09IHVuZGVmaW5lZCA/IG9yaWdpblggOiAwLjUsIG9yaWdpblkgIT09IHVuZGVmaW5lZCA/IG9yaWdpblkgOiAwLjUpO1xuICAgIH1cbiAgICAvLyBUcmVhdCB4L3kgbm90IGFzIHNob3J0Y3V0cyBidXQgYXMgYWN0dWFsIGF0dHJpYnV0ZXNcbiAgICBpZiAoYXR0clggIT09IHVuZGVmaW5lZClcbiAgICAgICAgYXR0cnMueCA9IGF0dHJYO1xuICAgIGlmIChhdHRyWSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICBhdHRycy55ID0gYXR0clk7XG4gICAgLy8gQnVpbGQgU1ZHIHBhdGggaWYgb25lIGhhcyBiZWVuIG1lYXN1cmVkXG4gICAgaWYgKHRvdGFsUGF0aExlbmd0aCAhPT0gdW5kZWZpbmVkICYmIHBhdGhMZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBidWlsZFNWR1BhdGgoYXR0cnMsIHRvdGFsUGF0aExlbmd0aCwgcGF0aExlbmd0aCwgcGF0aFNwYWNpbmcsIHBhdGhPZmZzZXQsIGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dHJzO1xufVxuXG4vKipcbiAqIEEgc2V0IG9mIGF0dHJpYnV0ZSBuYW1lcyB0aGF0IGFyZSBhbHdheXMgcmVhZC93cml0dGVuIGFzIGNhbWVsIGNhc2UuXG4gKi9cbnZhciBjYW1lbENhc2VBdHRyaWJ1dGVzID0gbmV3IFNldChbXG4gICAgXCJiYXNlRnJlcXVlbmN5XCIsXG4gICAgXCJkaWZmdXNlQ29uc3RhbnRcIixcbiAgICBcImtlcm5lbE1hdHJpeFwiLFxuICAgIFwia2VybmVsVW5pdExlbmd0aFwiLFxuICAgIFwia2V5U3BsaW5lc1wiLFxuICAgIFwia2V5VGltZXNcIixcbiAgICBcImxpbWl0aW5nQ29uZUFuZ2xlXCIsXG4gICAgXCJtYXJrZXJIZWlnaHRcIixcbiAgICBcIm1hcmtlcldpZHRoXCIsXG4gICAgXCJudW1PY3RhdmVzXCIsXG4gICAgXCJ0YXJnZXRYXCIsXG4gICAgXCJ0YXJnZXRZXCIsXG4gICAgXCJzdXJmYWNlU2NhbGVcIixcbiAgICBcInNwZWN1bGFyQ29uc3RhbnRcIixcbiAgICBcInNwZWN1bGFyRXhwb25lbnRcIixcbiAgICBcInN0ZERldmlhdGlvblwiLFxuICAgIFwidGFibGVWYWx1ZXNcIixcbiAgICBcInZpZXdCb3hcIixcbl0pO1xuXG52YXIgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG52YXIgUkVQTEFDRV9URU1QTEFURSA9IFwiJDEtJDJcIjtcbi8qKlxuICogQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlIHByb3BlcnRpZXMuXG4gKi9cbnZhciBjYW1lbFRvRGFzaCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoQ0FNRUxfQ0FTRV9QQVRURVJOLCBSRVBMQUNFX1RFTVBMQVRFKS50b0xvd2VyQ2FzZSgpO1xufTtcblxuLyoqXG4gKiBBIFZpc3VhbEVsZW1lbnQgZm9yIFNWR0VsZW1lbnRzLiBJbmhlcml0cyBmcm9tIGFuZCBleHRlbmRzIEhUTUxWaXN1YWxFbGVtZW50IGFzIHRoZSB0d29cbiAqIHNoYXJlIGRhdGEgc3RydWN0dXJlcy5cbiAqL1xudmFyIFNWR1Zpc3VhbEVsZW1lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNWR1Zpc3VhbEVsZW1lbnQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU1ZHVmlzdWFsRWxlbWVudCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIG11dGFibGUgcmVjb3JkIG9mIGF0dHJpYnV0ZXMgd2Ugd2FudCB0byBhcHBseSBkaXJlY3RseSB0byB0aGUgcmVuZGVyZWQgRWxlbWVudFxuICAgICAgICAgKiBldmVyeSBmcmFtZS4gV2UgdXNlIGEgbXV0YWJsZSBkYXRhIHN0cnVjdHVyZSB0byByZWR1Y2UgR0MgZHVyaW5nIGFuaW1hdGlvbnMuXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5hdHRycyA9IHt9O1xuICAgICAgICAvKipcbiAgICAgICAgICogV2UgZGlzYWJsZSBoYXJkd2FyZSBhY2NlbGVyYXRpb24gZm9yIFNWRyB0cmFuc2Zvcm1zIGFzIHRoZXkncmUgbm90IGN1cnJlbnRseSBhYmxlIHRvIGJlIGFjY2VsZXJhdGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuZGVmYXVsdENvbmZpZyA9IHtcbiAgICAgICAgICAgIGVuYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdpdGhvdXQgZHVwbGljYXRpbmcgdGhpcyBjYWxsIGZyb20gSFRNTFZpc3VhbEVsZW1lbnQgd2UgZW5kIHVwIHdpdGggSFRNTFZpc3VhbEVsZW1lbnQuZGVmYXVsdENvbmZpZ1xuICAgICAgICAgKiBiZWluZyBhc3NpZ25lZCB0byBjb25maWdcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLmNvbmZpZyA9IF90aGlzLmRlZmF1bHRDb25maWc7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWVhc3VyZSB0aGUgU1ZHIGVsZW1lbnQgb24gbW91bnQuIFRoaXMgY2FuIGFmZmVjdCBwYWdlIHJlbmRlcmluZyBzbyB0aGVyZSBtaWdodCBiZSBhXG4gICAgICogYmV0dGVyIHRpbWUgdG8gcGVyZm9ybSB0aGlzIC0gZm9yIGluc3RhbmNlIGR5bmFtaWNhbGx5IG9ubHkgaWYgdGhlcmUncyBhIHRyYW5zZm9ybS1vcmlnaW4gZGVwZW5kZW50XG4gICAgICogdHJhbnNmb3JtIGJlaW5nIHNldCAobGlrZSByb3RhdGUpXG4gICAgICovXG4gICAgU1ZHVmlzdWFsRWxlbWVudC5wcm90b3R5cGUubW91bnQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLm1vdW50LmNhbGwodGhpcywgZWxlbWVudCk7XG4gICAgICAgIHRoaXMubWVhc3VyZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBTVkcgZGltZW5zaW9ucyBhbmQgcGF0aCBsZW5ndGhcbiAgICAgKi9cbiAgICBTVkdWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5tZWFzdXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zID1cbiAgICAgICAgICAgICAgICB0eXBlb2YgdGhpcy5lbGVtZW50LmdldEJCb3ggPT09XG4gICAgICAgICAgICAgICAgICAgIFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuZWxlbWVudC5nZXRCQm94KClcbiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIE1vc3QgbGlrZWx5IHRyeWluZyB0byBtZWFzdXJlIGFuIHVucmVuZGVyZWQgZWxlbWVudCB1bmRlciBGaXJlZm94XG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7IHg6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQYXRoKHRoaXMuZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMudG90YWxQYXRoTGVuZ3RoID0gdGhpcy5lbGVtZW50LmdldFRvdGFsTGVuZ3RoKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEVtcHR5IHRoZSBtdXRhYmxlIGRhdGEgc3RydWN0dXJlcyBpbiBjYXNlIGF0dHJzIGhhdmUgYmVlbiByZW1vdmVkIGJldHdlZW4gcmVuZGVycy5cbiAgICAgKi9cbiAgICBTVkdWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5jbGVhbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5jbGVhbi5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmF0dHJzID0ge307XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZWFkIGFuIGF0dHJpYnV0ZSBkaXJlY3RseSBmcm9tIHRoZSBTVkdFbGVtZW50XG4gICAgICovXG4gICAgU1ZHVmlzdWFsRWxlbWVudC5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAga2V5ID0gIWNhbWVsQ2FzZUF0dHJpYnV0ZXMuaGFzKGtleSkgPyBjYW1lbFRvRGFzaChrZXkpIDoga2V5O1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xuICAgIH07XG4gICAgU1ZHVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVHJhbnNmb3JtRGVsdGFzKCk7XG4gICAgICAgIGJ1aWxkU1ZHQXR0cnModGhpcy5sYXRlc3QsIHRoaXMuc3R5bGUsIHRoaXMudmFycywgdGhpcy5hdHRycywgdGhpcy50cmFuc2Zvcm0sIHRoaXMudHJhbnNmb3JtT3JpZ2luLCB0aGlzLnRyYW5zZm9ybUtleXMsIHRoaXMuY29uZmlnLCB0aGlzLmRpbWVuc2lvbnMsIHRoaXMudG90YWxQYXRoTGVuZ3RoLCB0aGlzLmlzTGF5b3V0UHJvamVjdGlvbkVuYWJsZWQgJiYgISF0aGlzLmJveCwgdGhpcy5kZWx0YSwgdGhpcy5kZWx0YUZpbmFsLCB0aGlzLnRyZWVTY2FsZSwgdGhpcy50YXJnZXRCb3hGaW5hbCk7XG4gICAgfTtcbiAgICBTVkdWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFVwZGF0ZSBIVE1MIHN0eWxlcyBhbmQgQ1NTIHZhcmlhYmxlc1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggYXR0cmlidXRlcyBhbmQgYXBwbHkgdGhlbSB0byB0aGUgU1ZHRWxlbWVudFxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5hdHRycykge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSghY2FtZWxDYXNlQXR0cmlidXRlcy5oYXMoa2V5KSA/IGNhbWVsVG9EYXNoKGtleSkgOiBrZXksIHRoaXMuYXR0cnNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBTVkdWaXN1YWxFbGVtZW50O1xufShIVE1MVmlzdWFsRWxlbWVudCkpO1xuZnVuY3Rpb24gaXNQYXRoKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC50YWdOYW1lID09PSBcInBhdGhcIjtcbn1cblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIHN2Z0VsZW1lbnRzID0gW1xuICAgIFwiYW5pbWF0ZVwiLFxuICAgIFwiY2lyY2xlXCIsXG4gICAgXCJjbGlwUGF0aFwiLFxuICAgIFwiZGVmc1wiLFxuICAgIFwiZGVzY1wiLFxuICAgIFwiZWxsaXBzZVwiLFxuICAgIFwiZmVCbGVuZFwiLFxuICAgIFwiZmVDb2xvck1hdHJpeFwiLFxuICAgIFwiZmVDb21wb25lbnRUcmFuc2ZlclwiLFxuICAgIFwiZmVDb21wb3NpdGVcIixcbiAgICBcImZlQ29udm9sdmVNYXRyaXhcIixcbiAgICBcImZlRGlmZnVzZUxpZ2h0aW5nXCIsXG4gICAgXCJmZURpc3BsYWNlbWVudE1hcFwiLFxuICAgIFwiZmVEaXN0YW50TGlnaHRcIixcbiAgICBcImZlRHJvcFNoYWRvd1wiLFxuICAgIFwiZmVGbG9vZFwiLFxuICAgIFwiZmVGdW5jQVwiLFxuICAgIFwiZmVGdW5jQlwiLFxuICAgIFwiZmVGdW5jR1wiLFxuICAgIFwiZmVGdW5jUlwiLFxuICAgIFwiZmVHYXVzc2lhbkJsdXJcIixcbiAgICBcImZlSW1hZ2VcIixcbiAgICBcImZlTWVyZ2VcIixcbiAgICBcImZlTWVyZ2VOb2RlXCIsXG4gICAgXCJmZU1vcnBob2xvZ3lcIixcbiAgICBcImZlT2Zmc2V0XCIsXG4gICAgXCJmZVBvaW50TGlnaHRcIixcbiAgICBcImZlU3BlY3VsYXJMaWdodGluZ1wiLFxuICAgIFwiZmVTcG90TGlnaHRcIixcbiAgICBcImZlVGlsZVwiLFxuICAgIFwiZmVUdXJidWxlbmNlXCIsXG4gICAgXCJmaWx0ZXJcIixcbiAgICBcImZvcmVpZ25PYmplY3RcIixcbiAgICBcImdcIixcbiAgICBcImltYWdlXCIsXG4gICAgXCJsaW5lXCIsXG4gICAgXCJsaW5lYXJHcmFkaWVudFwiLFxuICAgIFwibWFya2VyXCIsXG4gICAgXCJtYXNrXCIsXG4gICAgXCJtZXRhZGF0YVwiLFxuICAgIFwicGF0aFwiLFxuICAgIFwicGF0dGVyblwiLFxuICAgIFwicG9seWdvblwiLFxuICAgIFwicG9seWxpbmVcIixcbiAgICBcInJhZGlhbEdyYWRpZW50XCIsXG4gICAgXCJyZWN0XCIsXG4gICAgXCJzdG9wXCIsXG4gICAgXCJzdmdcIixcbiAgICBcInN3aXRjaFwiLFxuICAgIFwic3ltYm9sXCIsXG4gICAgXCJ0ZXh0XCIsXG4gICAgXCJ0ZXh0UGF0aFwiLFxuICAgIFwidHNwYW5cIixcbiAgICBcInVzZVwiLFxuICAgIFwidmlld1wiLFxuXTtcblxudmFyIHN2Z1RhZ05hbWVzID0gbmV3IFNldChzdmdFbGVtZW50cyk7XG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoaXMgaXMgYSBIVE1MIG9yIFNWRyBjb21wb25lbnQgYmFzZWQgb24gaWYgdGhlIHByb3ZpZGVkXG4gKiBDb21wb25lbnQgaXMgYSBzdHJpbmcgYW5kIGEgcmVjb2duaXNlZCBTVkcgdGFnLiBBIHBvdGVudGlhbGx5IGJldHRlciB3YXkgdG9cbiAqIGRvIHRoaXMgd291bGQgYmUgdG8gb2ZmZXIgYSBgbW90aW9uLmN1c3RvbVNWR2AgZnVuY3Rpb24gYW5kIGRldGVybWluZSB0aGlzXG4gKiB3aGVuIHdlIGdlbmVyYXRlIHRoZSBgbW90aW9uLmNpcmNsZWAgZXRjIGNvbXBvbmVudHMuXG4gKi9cbmZ1bmN0aW9uIGlzU1ZHQ29tcG9uZW50KENvbXBvbmVudCkge1xuICAgIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSBcInN0cmluZ1wiICYmIHN2Z1RhZ05hbWVzLmhhcyhDb21wb25lbnQpO1xufVxuXG4vKipcbiAqIEBwdWJsaWNcbiAqL1xudmFyIFByZXNlbmNlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbnZhciBNb3Rpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gICAgdmFyaWFudENvbnRleHQ6IHt9LFxufSk7XG5mdW5jdGlvbiB1c2VWYXJpYW50Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChNb3Rpb25Db250ZXh0KS52YXJpYW50Q29udGV4dDtcbn1cbmZ1bmN0aW9uIHVzZVZpc3VhbEVsZW1lbnRDb250ZXh0KCkge1xuICAgIHJldHVybiB1c2VDb250ZXh0KE1vdGlvbkNvbnRleHQpLnZpc3VhbEVsZW1lbnQ7XG59XG5cbi8qKlxuICogRE9NLWZsYXZvdXJlZCB2YXJpYXRpb24gb2YgdGhlIHVzZVZpc3VhbEVsZW1lbnQgaG9vay4gVXNlZCB0byBjcmVhdGUgZWl0aGVyIGEgSFRNTFZpc3VhbEVsZW1lbnRcbiAqIG9yIFNWR1Zpc3VhbEVsZW1lbnQgZm9yIHRoZSBjb21wb25lbnQuXG4gKlxuICovXG52YXIgdXNlRG9tVmlzdWFsRWxlbWVudCA9IGZ1bmN0aW9uIChDb21wb25lbnQsIHByb3BzLCBpc1N0YXRpYywgcmVmKSB7XG4gICAgdmFyIHBhcmVudCA9IHVzZVZpc3VhbEVsZW1lbnRDb250ZXh0KCk7XG4gICAgdmFyIHZpc3VhbEVsZW1lbnQgPSB1c2VDb25zdGFudChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBET01WaXN1YWxFbGVtZW50ID0gaXNTVkdDb21wb25lbnQoQ29tcG9uZW50KVxuICAgICAgICAgICAgPyBTVkdWaXN1YWxFbGVtZW50XG4gICAgICAgICAgICA6IEhUTUxWaXN1YWxFbGVtZW50O1xuICAgICAgICByZXR1cm4gbmV3IERPTVZpc3VhbEVsZW1lbnQocGFyZW50LCByZWYpO1xuICAgIH0pO1xuICAgIHZpc3VhbEVsZW1lbnQudXBkYXRlQ29uZmlnKF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHt9LCB2aXN1YWxFbGVtZW50LmNvbmZpZyksIHsgZW5hYmxlSGFyZHdhcmVBY2NlbGVyYXRpb246ICFpc1N0YXRpYyB9KSwgcHJvcHMpKTtcbiAgICB2aXN1YWxFbGVtZW50LmxheW91dElkID0gcHJvcHMubGF5b3V0SWQ7XG4gICAgdmFyIHByZXNlbmNlQ29udGV4dCA9IHVzZUNvbnRleHQoUHJlc2VuY2VDb250ZXh0KTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgVmlzdWFsRWxlbWVudCB3aXRoIHByZXNlbmNlIGRhdGEuXG4gICAgICovXG4gICAgdmFyIGlzUHJlc2VudCA9IHByZXNlbmNlQ29udGV4dCA9PT0gbnVsbCA/IHRydWUgOiBwcmVzZW5jZUNvbnRleHQuaXNQcmVzZW50O1xuICAgIHZpc3VhbEVsZW1lbnQuaXNQcmVzZW50ID1cbiAgICAgICAgcHJvcHMuaXNQcmVzZW50ICE9PSB1bmRlZmluZWQgPyBwcm9wcy5pc1ByZXNlbnQgOiBpc1ByZXNlbnQ7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICB2YXIgcHJlc2VuY2VJZCA9IHByZXNlbmNlQ29udGV4dCA9PT0gbnVsbCB8fCBwcmVzZW5jZUNvbnRleHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByZXNlbmNlQ29udGV4dC5pZDtcbiAgICB2aXN1YWxFbGVtZW50LmlzUHJlc2VuY2VSb290ID0gIXBhcmVudCB8fCBwYXJlbnQucHJlc2VuY2VJZCAhPT0gcHJlc2VuY2VJZDtcbiAgICAvKipcbiAgICAgKiBUT0RPOiBJbnZlc3RpZ2F0ZSBpZiB3ZSBuZWVkIHRoaXNcbiAgICAgKi9cbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAocHJvcHMub25WaWV3cG9ydEJveFVwZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZpc3VhbEVsZW1lbnQub25WaWV3cG9ydEJveFVwZGF0ZShwcm9wcy5vblZpZXdwb3J0Qm94VXBkYXRlKTtcbiAgICAgICAgfVxuICAgIH0sIFtwcm9wcy5vblZpZXdwb3J0Qm94VXBkYXRlXSk7XG4gICAgcmV0dXJuIHZpc3VhbEVsZW1lbnQ7XG59O1xuXG4vKipcbiAqIEEgbGlzdCBvZiBhbGwgdmFsaWQgTW90aW9uUHJvcHMuXG4gKlxuICogQGludGVybmFscmVtYXJrc1xuICogVGhpcyBkb2Vzbid0IHRocm93IGlmIGEgYE1vdGlvblByb3BgIG5hbWUgaXMgbWlzc2luZyAtIGl0IHNob3VsZC5cbiAqL1xudmFyIHZhbGlkTW90aW9uUHJvcHMgPSBuZXcgU2V0KFtcbiAgICBcImluaXRpYWxcIixcbiAgICBcImFuaW1hdGVcIixcbiAgICBcImV4aXRcIixcbiAgICBcInN0eWxlXCIsXG4gICAgXCJ2YXJpYW50c1wiLFxuICAgIFwidHJhbnNpdGlvblwiLFxuICAgIFwidHJhbnNmb3JtVGVtcGxhdGVcIixcbiAgICBcInRyYW5zZm9ybVZhbHVlc1wiLFxuICAgIFwiY3VzdG9tXCIsXG4gICAgXCJpbmhlcml0XCIsXG4gICAgXCJsYXlvdXRcIixcbiAgICBcImxheW91dElkXCIsXG4gICAgXCJvbkxheW91dEFuaW1hdGlvbkNvbXBsZXRlXCIsXG4gICAgXCJvblZpZXdwb3J0Qm94VXBkYXRlXCIsXG4gICAgXCJvbkFuaW1hdGlvblN0YXJ0XCIsXG4gICAgXCJvbkFuaW1hdGlvbkNvbXBsZXRlXCIsXG4gICAgXCJvblVwZGF0ZVwiLFxuICAgIFwib25EcmFnU3RhcnRcIixcbiAgICBcIm9uRHJhZ1wiLFxuICAgIFwib25EcmFnRW5kXCIsXG4gICAgXCJvbk1lYXN1cmVEcmFnQ29uc3RyYWludHNcIixcbiAgICBcIm9uRGlyZWN0aW9uTG9ja1wiLFxuICAgIFwib25EcmFnVHJhbnNpdGlvbkVuZFwiLFxuICAgIFwiZHJhZ1wiLFxuICAgIFwiZHJhZ0NvbnRyb2xzXCIsXG4gICAgXCJkcmFnTGlzdGVuZXJcIixcbiAgICBcImRyYWdDb25zdHJhaW50c1wiLFxuICAgIFwiZHJhZ0RpcmVjdGlvbkxvY2tcIixcbiAgICBcIl9kcmFnWFwiLFxuICAgIFwiX2RyYWdZXCIsXG4gICAgXCJkcmFnRWxhc3RpY1wiLFxuICAgIFwiZHJhZ01vbWVudHVtXCIsXG4gICAgXCJkcmFnUHJvcGFnYXRpb25cIixcbiAgICBcImRyYWdUcmFuc2l0aW9uXCIsXG4gICAgXCJvblBhblwiLFxuICAgIFwib25QYW5TdGFydFwiLFxuICAgIFwib25QYW5FbmRcIixcbiAgICBcIm9uUGFuU2Vzc2lvblN0YXJ0XCIsXG4gICAgXCJvblRhcFwiLFxuICAgIFwib25UYXBTdGFydFwiLFxuICAgIFwib25UYXBDYW5jZWxcIixcbiAgICBcIndoaWxlSG92ZXJcIixcbiAgICBcIndoaWxlVGFwXCIsXG4gICAgXCJvbkhvdmVyRW5kXCIsXG4gICAgXCJvbkhvdmVyU3RhcnRcIixcbl0pO1xuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGEgcHJvcCBuYW1lIGlzIGEgdmFsaWQgYE1vdGlvblByb3BgIGtleS5cbiAqXG4gKiBAcGFyYW0ga2V5IC0gTmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gY2hlY2tcbiAqIEByZXR1cm5zIGB0cnVlYCBpcyBrZXkgaXMgYSB2YWxpZCBgTW90aW9uUHJvcGAuXG4gKlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBpc1ZhbGlkTW90aW9uUHJvcChrZXkpIHtcbiAgICByZXR1cm4gdmFsaWRNb3Rpb25Qcm9wcy5oYXMoa2V5KTtcbn1cblxudmFyIGlzUHJvcFZhbGlkID0gZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gIWlzVmFsaWRNb3Rpb25Qcm9wKGtleSk7IH07XG4vKipcbiAqIEVtb3Rpb24gYW5kIFN0eWxlZCBDb21wb25lbnRzIGJvdGggYWxsb3cgdXNlcnMgdG8gcGFzcyB0aHJvdWdoIGFyYml0cmFyeSBwcm9wcyB0byB0aGVpciBjb21wb25lbnRzXG4gKiB0byBkeW5hbWljYWxseSBnZW5lcmF0ZSBDU1MuIFRoZXkgYm90aCB1c2UgdGhlIGBAZW1vdGlvbi9pcy1wcm9wLXZhbGlkYCBwYWNrYWdlIHRvIGRldGVybWluZSB3aGljaFxuICogb2YgdGhlc2Ugc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgdW5kZXJseWluZyBET00gbm9kZS5cbiAqXG4gKiBIb3dldmVyLCB3aGVuIHN0eWxpbmcgYSBNb3Rpb24gY29tcG9uZW50IGBzdHlsZWQobW90aW9uLmRpdilgLCBib3RoIHBhY2thZ2VzIHBhc3MgdGhyb3VnaCAqYWxsKiBwcm9wc1xuICogYXMgaXQncyBzZWVuIGFzIGFuIGFyYml0cmFyeSBjb21wb25lbnQgcmF0aGVyIHRoYW4gYSBET00gbm9kZS4gTW90aW9uIG9ubHkgYWxsb3dzIGFyYml0cmFyeSBwcm9wc1xuICogcGFzc2VkIHRocm91Z2ggdGhlIGBjdXN0b21gIHByb3Agc28gaXQgZG9lc24ndCAqbmVlZCogdGhlIHBheWxvYWQgb3IgY29tcHV0YXRpb25hbCBvdmVyaGVhZCBvZlxuICogYEBlbW90aW9uL2lzLXByb3AtdmFsaWRgLCBob3dldmVyIHRvIGZpeCB0aGlzIHByb2JsZW0gd2UgbmVlZCB0byB1c2UgaXQuXG4gKlxuICogQnkgbWFraW5nIGl0IGFuIG9wdGlvbmFsRGVwZW5kZW5jeSB3ZSBjYW4gb2ZmZXIgdGhpcyBmdW5jdGlvbmFsaXR5IG9ubHkgaW4gdGhlIHNpdHVhdGlvbnMgd2hlcmUgaXQnc1xuICogYWN0dWFsbHkgcmVxdWlyZWQuXG4gKi9cbnRyeSB7XG4gICAgdmFyIGVtb3Rpb25Jc1Byb3BWYWxpZF8xID0gcmVxdWlyZShcIkBlbW90aW9uL2lzLXByb3AtdmFsaWRcIikuZGVmYXVsdDtcbiAgICBpc1Byb3BWYWxpZCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgLy8gSGFuZGxlIGV2ZW50cyBleHBsaWNpdGx5IGFzIEVtb3Rpb24gdmFsaWRhdGVzIHRoZW0gYWxsIGFzIHRydWVcbiAgICAgICAgaWYgKGtleS5zdGFydHNXaXRoKFwib25cIikpIHtcbiAgICAgICAgICAgIHJldHVybiAhaXNWYWxpZE1vdGlvblByb3Aoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBlbW90aW9uSXNQcm9wVmFsaWRfMShrZXkpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNhdGNoIChfYSkge1xuICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gYWN0dWFsbHkgZG8gYW55dGhpbmcgaGVyZSAtIHRoZSBmYWxsYmFjayBpcyB0aGUgZXhpc3RpbmcgYGlzUHJvcFZhbGlkYC5cbn1cbmZ1bmN0aW9uIGZpbHRlclByb3BzKHByb3BzKSB7XG4gICAgdmFyIGRvbVByb3BzID0ge307XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgIGlmIChpc1Byb3BWYWxpZChrZXkpKVxuICAgICAgICAgICAgZG9tUHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gICAgfVxuICAgIHJldHVybiBkb21Qcm9wcztcbn1cblxuZnVuY3Rpb24gYnVpbGRIVE1MUHJvcHModmlzdWFsRWxlbWVudCwgX2EpIHtcbiAgICB2YXIgZHJhZyA9IF9hLmRyYWc7XG4gICAgLy8gVGhlIGBhbnlgIGlzbid0IGlkZWFsIGJ1dCBpdCBpcyB0aGUgdHlwZSBvZiBjcmVhdGVFbGVtZW50IHByb3BzIGFyZ3VtZW50XG4gICAgdmFyIGh0bWxQcm9wcyA9IHtcbiAgICAgICAgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKF9fYXNzaWduKHt9LCB2aXN1YWxFbGVtZW50LnJlYWN0U3R5bGUpLCB2aXN1YWxFbGVtZW50LnN0eWxlKSwgdmlzdWFsRWxlbWVudC52YXJzKSxcbiAgICB9O1xuICAgIGlmICghIWRyYWcpIHtcbiAgICAgICAgLy8gRGlzYWJsZSB0aGUgZ2hvc3QgZWxlbWVudCB3aGVuIGEgdXNlciBkcmFnc1xuICAgICAgICBodG1sUHJvcHMuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgIC8vIERpc2FibGUgdGV4dCBzZWxlY3Rpb25cbiAgICAgICAgaHRtbFByb3BzLnN0eWxlLnVzZXJTZWxlY3QgPSBcIm5vbmVcIjtcbiAgICAgICAgLy8gRGlzYWJsZSBzY3JvbGxpbmcgb24gdGhlIGRyYWdnYWJsZSBkaXJlY3Rpb25cbiAgICAgICAgaHRtbFByb3BzLnN0eWxlLnRvdWNoQWN0aW9uID1cbiAgICAgICAgICAgIGRyYWcgPT09IHRydWUgPyBcIm5vbmVcIiA6IFwicGFuLVwiICsgKGRyYWcgPT09IFwieFwiID8gXCJ5XCIgOiBcInhcIik7XG4gICAgfVxuICAgIHJldHVybiBodG1sUHJvcHM7XG59XG5cbi8qKlxuICogQnVpbGQgUmVhY3QgcHJvcHMgZm9yIFNWRyBlbGVtZW50c1xuICovXG5mdW5jdGlvbiBidWlsZFNWR1Byb3BzKHZpc3VhbEVsZW1lbnQpIHtcbiAgICByZXR1cm4gX19hc3NpZ24oX19hc3NpZ24oe30sIHZpc3VhbEVsZW1lbnQuYXR0cnMpLCB7IHN0eWxlOiBfX2Fzc2lnbih7fSwgdmlzdWFsRWxlbWVudC5yZWFjdFN0eWxlKSB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyKENvbXBvbmVudCwgcHJvcHMsIHZpc3VhbEVsZW1lbnQpIHtcbiAgICAvLyBPbmx5IGZpbHRlciBwcm9wcyBmcm9tIGNvbXBvbmVudHMgd2UgY29udHJvbCwgaWUgYG1vdGlvbi5kaXZgLiBJZiB0aGlzXG4gICAgLy8gaXMgYSBjdXN0b20gY29tcG9uZW50IHBhc3MgYWxvbmcgZXZlcnl0aGluZyBwcm92aWRlZCB0byBpdC5cbiAgICB2YXIgZm9yd2FyZGVkUHJvcHMgPSB0eXBlb2YgQ29tcG9uZW50ID09PSBcInN0cmluZ1wiID8gZmlsdGVyUHJvcHMocHJvcHMpIDogcHJvcHM7XG4gICAgLyoqXG4gICAgICogRXZlcnkgcmVuZGVyLCBlbXB0eSBhbmQgcmVidWlsZCB0aGUgYW5pbWF0ZWQgdmFsdWVzIHRvIGJlIGFwcGxpZWQgdG8gb3VyIEVsZW1lbnQuXG4gICAgICogRHVyaW5nIGFuaW1hdGlvbiB0aGVzZSBkYXRhIHN0cnVjdHVyZXMgYXJlIHVzZWQgaW4gYSBtdXRhYmxlIGZhc2hpb24gdG8gcmVkdWNlXG4gICAgICogZ2FyYmFnZSBjb2xsZWN0aW9uLCBidXQgYmV0d2VlbiByZW5kZXJzIHdlIGNhbiBmbHVzaCB0aGVtIHRvIHJlbW92ZSB2YWx1ZXNcbiAgICAgKiB0aGF0IG1pZ2h0IGhhdmUgYmVlbiB0YWtlbiBvdXQgb2YgdGhlIHByb3ZpZGVkIHByb3BzLlxuICAgICAqL1xuICAgIHZpc3VhbEVsZW1lbnQuY2xlYW4oKTtcbiAgICB2aXN1YWxFbGVtZW50LmJ1aWxkKCk7XG4gICAgLy8gR2VuZXJhdGUgcHJvcHMgdG8gdmlzdWFsbHkgcmVuZGVyIHRoaXMgY29tcG9uZW50XG4gICAgdmFyIHZpc3VhbFByb3BzID0gaXNTVkdDb21wb25lbnQoQ29tcG9uZW50KVxuICAgICAgICA/IGJ1aWxkU1ZHUHJvcHModmlzdWFsRWxlbWVudClcbiAgICAgICAgOiBidWlsZEhUTUxQcm9wcyh2aXN1YWxFbGVtZW50LCBwcm9wcyk7XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfX2Fzc2lnbihfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZm9yd2FyZGVkUHJvcHMpLCB7IHJlZjogdmlzdWFsRWxlbWVudC5yZWYgfSksIHZpc3VhbFByb3BzKSk7XG59XG5cbnZhciBpc01vdGlvblZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgTW90aW9uVmFsdWU7XG59O1xuXG5mdW5jdGlvbiBpc0ZvcmNlZE1vdGlvblZhbHVlKGtleSwgX2EpIHtcbiAgICB2YXIgbGF5b3V0ID0gX2EubGF5b3V0LCBsYXlvdXRJZCA9IF9hLmxheW91dElkO1xuICAgIHJldHVybiAoaXNUcmFuc2Zvcm1Qcm9wKGtleSkgfHxcbiAgICAgICAgaXNUcmFuc2Zvcm1PcmlnaW5Qcm9wKGtleSkgfHxcbiAgICAgICAgKChsYXlvdXQgfHwgbGF5b3V0SWQgIT09IHVuZGVmaW5lZCkgJiYgISF2YWx1ZVNjYWxlQ29ycmVjdGlvbltrZXldKSk7XG59XG4vKipcbiAqIFNjcmFwZSBwcm9wcyBmb3IgTW90aW9uVmFsdWVzIGFuZCBhZGQvcmVtb3ZlIHRoZW0gdG8gdGhpcyBjb21wb25lbnQnc1xuICogVmlzdWFsRWxlbWVudFxuICovXG5mdW5jdGlvbiB1c2VNb3Rpb25WYWx1ZXModmlzdWFsRWxlbWVudCwgcHJvcHMpIHtcbiAgICB2YXIgcHJldiA9IHVzZUNvbnN0YW50KGVtcHR5KTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgTW90aW9uVmFsdWVzIHRoYXQgYXJlIG5vIGxvbmdlciBwcmVzZW50XG4gICAgICovXG4gICAgZm9yICh2YXIga2V5IGluIHByZXYpIHtcbiAgICAgICAgdmFyIGlzRm9yY2VkID0gaXNGb3JjZWRNb3Rpb25WYWx1ZShrZXksIHByb3BzKTtcbiAgICAgICAgdmFyIGV4aXN0c0FzUHJvcCA9IHByb3BzW2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGV4aXN0c0FzU3R5bGUgPSBwcm9wcy5zdHlsZSAmJiBwcm9wcy5zdHlsZVtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBwcm9wSXNNb3Rpb25WYWx1ZSA9IGV4aXN0c0FzUHJvcCAmJiBpc01vdGlvblZhbHVlKHByb3BzW2tleV0pO1xuICAgICAgICB2YXIgc3R5bGVJc01vdGlvblZhbHVlID0gZXhpc3RzQXNTdHlsZSAmJiBpc01vdGlvblZhbHVlKHByb3BzLnN0eWxlW2tleV0pO1xuICAgICAgICB2YXIgdHJhbnNmb3JtUmVtb3ZlZCA9IGlzRm9yY2VkICYmICFleGlzdHNBc1Byb3AgJiYgIWV4aXN0c0FzU3R5bGU7XG4gICAgICAgIHZhciBtb3Rpb25WYWx1ZVJlbW92ZWQgPSAhaXNGb3JjZWQgJiYgIXByb3BJc01vdGlvblZhbHVlICYmICFzdHlsZUlzTW90aW9uVmFsdWU7XG4gICAgICAgIGlmICh0cmFuc2Zvcm1SZW1vdmVkIHx8IG1vdGlvblZhbHVlUmVtb3ZlZCkge1xuICAgICAgICAgICAgdmlzdWFsRWxlbWVudC5yZW1vdmVWYWx1ZShrZXkpO1xuICAgICAgICAgICAgZGVsZXRlIHByZXZba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGQgaW5jb21pbmcgTW90aW9uVmFsdWVzXG4gICAgICovXG4gICAgYWRkTW90aW9uVmFsdWVzKHZpc3VhbEVsZW1lbnQsIHByZXYsIHByb3BzLCBmYWxzZSwgcHJvcHMpO1xuICAgIGlmIChwcm9wcy5zdHlsZSlcbiAgICAgICAgYWRkTW90aW9uVmFsdWVzKHZpc3VhbEVsZW1lbnQsIHByZXYsIHByb3BzLnN0eWxlLCB0cnVlLCBwcm9wcyk7XG4gICAgLyoqXG4gICAgICogVHJhbnNmb3JtIGN1c3RvbSB2YWx1ZXMgaWYgcHJvdmlkZWQgYSBoYW5kbGVyLCBpZSBzaXplIC0+IHdpZHRoL2hlaWdodFxuICAgICAqIElkZWFsbHkgd2UnZCBkaXRjaCB0aGlzIGJ5IHJlbW92aW5nIHN1cHBvcnQgZm9yIHNpemUgYW5kIG90aGVyIGN1c3RvbSB2YWx1ZXMgZnJvbSBGcmFtZXIuXG4gICAgICovXG4gICAgaWYgKHByb3BzLnRyYW5zZm9ybVZhbHVlcykge1xuICAgICAgICB2aXN1YWxFbGVtZW50LnJlYWN0U3R5bGUgPSBwcm9wcy50cmFuc2Zvcm1WYWx1ZXModmlzdWFsRWxlbWVudC5yZWFjdFN0eWxlKTtcbiAgICB9XG59XG4vKipcbiAqIEFkZCBpbmNvbWluZyBNb3Rpb25WYWx1ZXNcbiAqXG4gKiBUT0RPOiBUeXBlIHRoZSBWaXN1YWxFbGVtZW50cyBwcm9wZXJseVxuICovXG5mdW5jdGlvbiBhZGRNb3Rpb25WYWx1ZXModmlzdWFsRWxlbWVudCwgcHJldiwgc291cmNlLCBpc1N0eWxlLCBwcm9wcykge1xuICAgIGlmIChpc1N0eWxlID09PSB2b2lkIDApIHsgaXNTdHlsZSA9IGZhbHNlOyB9XG4gICAgaWYgKGlzU3R5bGUpXG4gICAgICAgIHZpc3VhbEVsZW1lbnQucmVhY3RTdHlsZSA9IHt9O1xuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc291cmNlW2tleV07XG4gICAgICAgIHZhciBmb3VuZE1vdGlvblZhbHVlID0gZmFsc2U7XG4gICAgICAgIGlmIChpc01vdGlvblZhbHVlKHZhbHVlKSkge1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIE1vdGlvblZhbHVlLCBhZGQgaXQgaWYgaXQgaXNuJ3QgYSByZXNlcnZlZCBrZXlcbiAgICAgICAgICAgIGlmICghcmVzZXJ2ZWROYW1lcy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZpc3VhbEVsZW1lbnQuYWRkVmFsdWUoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgZm91bmRNb3Rpb25WYWx1ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNGb3JjZWRNb3Rpb25WYWx1ZShrZXksIHByb3BzKSkge1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHRyYW5zZm9ybSBwcm9wLCBhbHdheXMgY3JlYXRlIGEgTW90aW9uVmFsdWVcbiAgICAgICAgICAgIC8vIHRvIGVuc3VyZSB3ZSBjYW4gcmVjb25jaWxlIHRoZW0gYWxsIHRvZ2V0aGVyLlxuICAgICAgICAgICAgaWYgKCF2aXN1YWxFbGVtZW50Lmhhc1ZhbHVlKGtleSkpIHtcbiAgICAgICAgICAgICAgICB2aXN1YWxFbGVtZW50LmFkZFZhbHVlKGtleSwgbW90aW9uVmFsdWUodmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlICE9PSBwcmV2W2tleV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNNb3Rpb25WYWx1ZShwcmV2W2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBJZiB0aGUgcHJldmlvdXMgdmFsdWUgd2FzIGEgTW90aW9uVmFsdWUsIGFuZCB0aGlzIHZhbHVlIGlzbid0LFxuICAgICAgICAgICAgICAgICAgICAgKiB3ZSB3YW50IHRvIGNyZWF0ZSBhIG5ldyBNb3Rpb25WYWx1ZSByYXRoZXIgdGhhbiB1cGRhdGUgb25lIHRoYXQncyBiZWVuIHJlbW92ZWQuXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICB2aXN1YWxFbGVtZW50LmFkZFZhbHVlKGtleSwgbW90aW9uVmFsdWUodmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiBPdGhlcndpc2UsIHdlIGp1c3Qgd2FudCB0byBlbnN1cmUgdGhlIE1vdGlvblZhbHVlIGlzIG9mIHRoZSBsYXRlc3QgdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICB2YXIgbW90aW9uID0gdmlzdWFsRWxlbWVudC5nZXRWYWx1ZShrZXkpO1xuICAgICAgICAgICAgICAgICAgICBtb3Rpb24uc2V0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3VuZE1vdGlvblZhbHVlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1N0eWxlKSB7XG4gICAgICAgICAgICB2aXN1YWxFbGVtZW50LnJlYWN0U3R5bGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmb3VuZE1vdGlvblZhbHVlKVxuICAgICAgICAgICAgcHJldltrZXldID0gdmFsdWU7XG4gICAgfVxufVxuLyoqXG4gKiBUaGVzZSBhcmUgcHJvcHMgd2UgYWNjZXB0IGFzIE1vdGlvblZhbHVlcyBidXQgZG9uJ3Qgd2FudCB0byBhZGRcbiAqIHRvIHRoZSBWaXN1YWxFbGVtZW50XG4gKi9cbnZhciByZXNlcnZlZE5hbWVzID0gbmV3IFNldChbXSk7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoe30pOyB9O1xuXG4vKipcbiAqIEBwdWJsaWNcbiAqL1xudmFyIE1vdGlvbkNvbmZpZ0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgICB0cmFuc2Zvcm1QYWdlUG9pbnQ6IGZ1bmN0aW9uIChwKSB7IHJldHVybiBwOyB9LFxuICAgIGZlYXR1cmVzOiBbXSxcbiAgICBpc1N0YXRpYzogZmFsc2UsXG59KTtcbi8qKlxuICogTW90aW9uQ29uZmlnIGNhbiBiZSB1c2VkIGluIGNvbWJpbmF0aW9uIHdpdGggdGhlIGBtYCBjb21wb25lbnQgdG8gY3V0IGJ1bmRsZSBzaXplXG4gKiBhbmQgZHluYW1pY2FsbHkgbG9hZCBvbmx5IHRoZSBmZWF0dXJlcyB5b3UgdXNlLlxuICpcbiAqIGBgYGpzeFxuICogaW1wb3J0IHtcbiAqICAgbSBhcyBtb3Rpb24sXG4gKiAgIEFuaW1hdGlvbkZlYXR1cmUsXG4gKiAgIE1vdGlvbkNvbmZpZ1xuICogfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG4gKlxuICogZXhwb3J0IGZ1bmN0aW9uIEFwcCgpIHtcbiAqICAgcmV0dXJuIChcbiAqICAgICA8TW90aW9uQ29uZmlnIGZlYXR1cmVzPXtbQW5pbWF0aW9uRmVhdHVyZV19PlxuICogICAgICAgPG1vdGlvbi5kaXYgYW5pbWF0ZT17eyB4OiAxMDAgfX0gLz5cbiAqICAgICA8L01vdGlvbkNvbmZpZz5cbiAqICAgKVxuICogfVxuICogYGBgXG4gKlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBNb3Rpb25Db25maWcoX2EpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbiwgX2IgPSBfYS5mZWF0dXJlcywgZmVhdHVyZXMgPSBfYiA9PT0gdm9pZCAwID8gW10gOiBfYiwgcHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCIsIFwiZmVhdHVyZXNcIl0pO1xuICAgIHZhciBwbHVnaW5Db250ZXh0ID0gdXNlQ29udGV4dChNb3Rpb25Db25maWdDb250ZXh0KTtcbiAgICB2YXIgbG9hZGVkRmVhdHVyZXMgPSBfX3NwcmVhZChwbHVnaW5Db250ZXh0LmZlYXR1cmVzLCBmZWF0dXJlcyk7XG4gICAgLy8gV2UgZG8gd2FudCB0byByZXJlbmRlciBjaGlsZHJlbiB3aGVuIHRoZSBudW1iZXIgb2YgbG9hZGVkIGZlYXR1cmVzIGNoYW5nZXNcbiAgICB2YXIgdmFsdWUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IGZlYXR1cmVzOiBsb2FkZWRGZWF0dXJlcyB9KTsgfSwgW1xuICAgICAgICBsb2FkZWRGZWF0dXJlcy5sZW5ndGgsXG4gICAgXSk7XG4gICAgLy8gTXV0YXRpdmUgdG8gcHJldmVudCB0cmlnZ2VyaW5nIHJlcmVuZGVycyBpbiBhbGwgbGlzdGVuaW5nXG4gICAgLy8gY29tcG9uZW50cyBldmVyeSB0aW1lIHRoaXMgY29tcG9uZW50IHJlbmRlcnNcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgdmFsdWVba2V5XSA9IHByb3BzW2tleV07XG4gICAgfVxuICAgIHJldHVybiAoY3JlYXRlRWxlbWVudChNb3Rpb25Db25maWdDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB2YWx1ZSB9LCBjaGlsZHJlbikpO1xufVxuXG5mdW5jdGlvbiBjaGVja1Nob3VsZEluaGVyaXRWYXJpYW50KF9hKSB7XG4gICAgdmFyIGFuaW1hdGUgPSBfYS5hbmltYXRlLCB2YXJpYW50cyA9IF9hLnZhcmlhbnRzLCBpbmhlcml0ID0gX2EuaW5oZXJpdDtcbiAgICByZXR1cm4gaW5oZXJpdCA9PT0gdW5kZWZpbmVkID8gISF2YXJpYW50cyAmJiAhYW5pbWF0ZSA6IGluaGVyaXQ7XG59XG5cbi8qKlxuICogTG9hZCBmZWF0dXJlcyB2aWEgcmVuZGVybGVzcyBjb21wb25lbnRzIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBNb3Rpb25Qcm9wc1xuICovXG5mdW5jdGlvbiB1c2VGZWF0dXJlcyhkZWZhdWx0RmVhdHVyZXMsIGlzU3RhdGljLCB2aXN1YWxFbGVtZW50LCBwcm9wcykge1xuICAgIHZhciBwbHVnaW5zID0gdXNlQ29udGV4dChNb3Rpb25Db25maWdDb250ZXh0KTtcbiAgICAvLyBJZiB0aGlzIGlzIGEgc3RhdGljIGNvbXBvbmVudCwgb3Igd2UncmUgcmVuZGVyaW5nIG9uIHRoZSBzZXJ2ZXIsIHdlIGRvbid0IGxvYWRcbiAgICAvLyBhbnkgZmVhdHVyZSBjb21wb25lbnRzXG4gICAgaWYgKGlzU3RhdGljIHx8IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIHZhciBhbGxGZWF0dXJlcyA9IF9fc3ByZWFkKGRlZmF1bHRGZWF0dXJlcywgcGx1Z2lucy5mZWF0dXJlcyk7XG4gICAgdmFyIG51bUZlYXR1cmVzID0gYWxsRmVhdHVyZXMubGVuZ3RoO1xuICAgIHZhciBmZWF0dXJlcyA9IFtdO1xuICAgIC8vIERlY2lkZSB3aGljaCBmZWF0dXJlcyB3ZSBzaG91bGQgcmVuZGVyIGFuZCBhZGQgdGhlbSB0byB0aGUgcmV0dXJuZWQgYXJyYXlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUZlYXR1cmVzOyBpKyspIHtcbiAgICAgICAgdmFyIF9hID0gYWxsRmVhdHVyZXNbaV0sIHNob3VsZFJlbmRlciA9IF9hLnNob3VsZFJlbmRlciwga2V5ID0gX2Eua2V5LCBnZXRDb21wb25lbnQgPSBfYS5nZXRDb21wb25lbnQ7XG4gICAgICAgIGlmIChzaG91bGRSZW5kZXIocHJvcHMpKSB7XG4gICAgICAgICAgICB2YXIgQ29tcG9uZW50ID0gZ2V0Q29tcG9uZW50KHByb3BzKTtcbiAgICAgICAgICAgIENvbXBvbmVudCAmJlxuICAgICAgICAgICAgICAgIGZlYXR1cmVzLnB1c2goY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9fYXNzaWduKHsga2V5OiBrZXkgfSwgcHJvcHMsIHsgdmlzdWFsRWxlbWVudDogdmlzdWFsRWxlbWVudCwgaW5oZXJpdDogY2hlY2tTaG91bGRJbmhlcml0VmFyaWFudChwcm9wcykgfSkpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmVhdHVyZXM7XG59XG5cbnZhciBQcmVzZW5jZTtcbihmdW5jdGlvbiAoUHJlc2VuY2UpIHtcbiAgICBQcmVzZW5jZVtQcmVzZW5jZVtcIkVudGVyaW5nXCJdID0gMF0gPSBcIkVudGVyaW5nXCI7XG4gICAgUHJlc2VuY2VbUHJlc2VuY2VbXCJQcmVzZW50XCJdID0gMV0gPSBcIlByZXNlbnRcIjtcbiAgICBQcmVzZW5jZVtQcmVzZW5jZVtcIkV4aXRpbmdcIl0gPSAyXSA9IFwiRXhpdGluZ1wiO1xufSkoUHJlc2VuY2UgfHwgKFByZXNlbmNlID0ge30pKTtcbnZhciBWaXNpYmlsaXR5QWN0aW9uO1xuKGZ1bmN0aW9uIChWaXNpYmlsaXR5QWN0aW9uKSB7XG4gICAgVmlzaWJpbGl0eUFjdGlvbltWaXNpYmlsaXR5QWN0aW9uW1wiSGlkZVwiXSA9IDBdID0gXCJIaWRlXCI7XG4gICAgVmlzaWJpbGl0eUFjdGlvbltWaXNpYmlsaXR5QWN0aW9uW1wiU2hvd1wiXSA9IDFdID0gXCJTaG93XCI7XG59KShWaXNpYmlsaXR5QWN0aW9uIHx8IChWaXNpYmlsaXR5QWN0aW9uID0ge30pKTtcblxuLyoqXG4gKiBEZWZhdWx0IGhhbmRsZXJzIGZvciBiYXRjaGluZyBWaXN1YWxFbGVtZW50c1xuICovXG52YXIgZGVmYXVsdEhhbmRsZXIgPSB7XG4gICAgbWVhc3VyZUxheW91dDogZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBjaGlsZC5tZWFzdXJlTGF5b3V0KCk7IH0sXG4gICAgbGF5b3V0UmVhZHk6IGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQubGF5b3V0UmVhZHkoKTsgfSxcbn07XG4vKipcbiAqIFNvcnQgVmlzdWFsRWxlbWVudHMgYnkgdHJlZSBkZXB0aCwgc28gd2UgcHJvY2VzcyB0aGUgaGlnaGVzdCBlbGVtZW50cyBmaXJzdC5cbiAqL1xudmFyIHNvcnRCeURlcHRoID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYS5kZXB0aCAtIGIuZGVwdGg7XG59O1xuLyoqXG4gKiBDcmVhdGUgYSBiYXRjaGVyIHRvIHByb2Nlc3MgVmlzdWFsRWxlbWVudHNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmF0Y2hlcigpIHtcbiAgICB2YXIgcXVldWUgPSBuZXcgU2V0KCk7XG4gICAgdmFyIGFkZCA9IGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gcXVldWUuYWRkKGNoaWxkKTsgfTtcbiAgICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IGRlZmF1bHRIYW5kbGVyIDogX2EsIG1lYXN1cmVMYXlvdXQgPSBfYi5tZWFzdXJlTGF5b3V0LCBsYXlvdXRSZWFkeSA9IF9iLmxheW91dFJlYWR5O1xuICAgICAgICB2YXIgb3JkZXIgPSBBcnJheS5mcm9tKHF1ZXVlKS5zb3J0KHNvcnRCeURlcHRoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdyaXRlOiBSZXNldCBhbnkgdHJhbnNmb3JtcyBvbiBjaGlsZHJlbiBlbGVtZW50cyBzbyB3ZSBjYW4gcmVhZCB0aGVpciBhY3R1YWwgbGF5b3V0XG4gICAgICAgICAqL1xuICAgICAgICBvcmRlci5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQucmVzZXRUcmFuc2Zvcm0oKTsgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWFkOiBNZWFzdXJlIHRoZSBhY3R1YWwgbGF5b3V0XG4gICAgICAgICAqL1xuICAgICAgICBvcmRlci5mb3JFYWNoKG1lYXN1cmVMYXlvdXQpO1xuICAgICAgICAvKipcbiAgICAgICAgICogV3JpdGU6IE5vdGlmeSB0aGUgVmlzdWFsRWxlbWVudHMgdGhleSdyZSByZWFkeSBmb3IgZnVydGhlciB3cml0ZSBvcGVyYXRpb25zLlxuICAgICAgICAgKi9cbiAgICAgICAgb3JkZXIuZm9yRWFjaChsYXlvdXRSZWFkeSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZnRlciBhbGwgY2hpbGRyZW4gaGF2ZSBzdGFydGVkIGFuaW1hdGluZywgZW5zdXJlIGFueSBFbnRlcmluZyBjb21wb25lbnRzIGFyZSBzZXQgdG8gUHJlc2VudC5cbiAgICAgICAgICogSWYgd2UgYWRkIGRlZmVycmVkIGFuaW1hdGlvbnMgKHNldCB1cCBhbGwgYW5pbWF0aW9ucyBhbmQgdGhlbiBzdGFydCB0aGVtIGluIHR3byBsb29wcykgdGhpc1xuICAgICAgICAgKiBjb3VsZCBiZSBtb3ZlZCB0byB0aGUgc3RhcnQgbG9vcC4gQnV0IGl0IG5lZWRzIHRvIGhhcHBlbiBhZnRlciBhbGwgdGhlIGFuaW1hdGlvbnMgY29uZmlnc1xuICAgICAgICAgKiBhcmUgZ2VuZXJhdGVkIGluIEFuaW1hdGVTaGFyZWRMYXlvdXQgYXMgdGhpcyByZWxpZXMgb24gcHJlc2VuY2UgZGF0YVxuICAgICAgICAgKi9cbiAgICAgICAgb3JkZXIuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5pc1ByZXNlbnQpXG4gICAgICAgICAgICAgICAgY2hpbGQucHJlc2VuY2UgPSBQcmVzZW5jZS5QcmVzZW50O1xuICAgICAgICB9KTtcbiAgICAgICAgcXVldWUuY2xlYXIoKTtcbiAgICB9O1xuICAgIHJldHVybiB7IGFkZDogYWRkLCBmbHVzaDogZmx1c2ggfTtcbn1cbmZ1bmN0aW9uIGlzU2hhcmVkTGF5b3V0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gISFjb250ZXh0LmZvcmNlVXBkYXRlO1xufVxudmFyIFNoYXJlZExheW91dENvbnRleHQgPSBjcmVhdGVDb250ZXh0KGNyZWF0ZUJhdGNoZXIoKSk7XG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG52YXIgRnJhbWVyVHJlZUxheW91dENvbnRleHQgPSBjcmVhdGVDb250ZXh0KGNyZWF0ZUJhdGNoZXIoKSk7XG5cbnZhciBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xudmFyIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPSBpc0Jyb3dzZXIgPyB1c2VMYXlvdXRFZmZlY3QgOiB1c2VFZmZlY3Q7XG5cbmZ1bmN0aW9uIHVzZVNuYXBzaG90T25Vbm1vdW50KHZpc3VhbEVsZW1lbnQpIHtcbiAgICB2YXIgc3luY0xheW91dCA9IHVzZUNvbnRleHQoU2hhcmVkTGF5b3V0Q29udGV4dCk7XG4gICAgdmFyIGZyYW1lclN5bmNMYXlvdXQgPSB1c2VDb250ZXh0KEZyYW1lclRyZWVMYXlvdXRDb250ZXh0KTtcbiAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzU2hhcmVkTGF5b3V0KHN5bmNMYXlvdXQpKSB7XG4gICAgICAgICAgICBzeW5jTGF5b3V0LnJlbW92ZSh2aXN1YWxFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTaGFyZWRMYXlvdXQoZnJhbWVyU3luY0xheW91dCkpIHtcbiAgICAgICAgICAgIGZyYW1lclN5bmNMYXlvdXQucmVtb3ZlKHZpc3VhbEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfTsgfSwgW10pO1xufVxuXG4vKipcbiAqIFdoZW4gYSBjb21wb25lbnQgaXMgdGhlIGNoaWxkIG9mIGBBbmltYXRlUHJlc2VuY2VgLCBpdCBjYW4gdXNlIGB1c2VQcmVzZW5jZWBcbiAqIHRvIGFjY2VzcyBpbmZvcm1hdGlvbiBhYm91dCB3aGV0aGVyIGl0J3Mgc3RpbGwgcHJlc2VudCBpbiB0aGUgUmVhY3QgdHJlZS5cbiAqXG4gKiBgYGBqc3hcbiAqIGltcG9ydCB7IHVzZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuICpcbiAqIGV4cG9ydCBjb25zdCBDb21wb25lbnQgPSAoKSA9PiB7XG4gKiAgIGNvbnN0IFtpc1ByZXNlbnQsIHNhZmVUb1JlbW92ZV0gPSB1c2VQcmVzZW5jZSgpXG4gKlxuICogICB1c2VFZmZlY3QoKCkgPT4ge1xuICogICAgICFpc1ByZXNlbnQgJiYgc2V0VGltZW91dChzYWZlVG9SZW1vdmUsIDEwMDApXG4gKiAgIH0sIFtpc1ByZXNlbnRdKVxuICpcbiAqICAgcmV0dXJuIDxkaXYgLz5cbiAqIH1cbiAqIGBgYFxuICpcbiAqIElmIGBpc1ByZXNlbnRgIGlzIGBmYWxzZWAsIGl0IG1lYW5zIHRoYXQgYSBjb21wb25lbnQgaGFzIGJlZW4gcmVtb3ZlZCB0aGUgdHJlZSwgYnV0XG4gKiBgQW5pbWF0ZVByZXNlbmNlYCB3b24ndCByZWFsbHkgcmVtb3ZlIGl0IHVudGlsIGBzYWZlVG9SZW1vdmVgIGhhcyBiZWVuIGNhbGxlZC5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHVzZVByZXNlbmNlKCkge1xuICAgIHZhciBjb250ZXh0ID0gdXNlQ29udGV4dChQcmVzZW5jZUNvbnRleHQpO1xuICAgIGlmIChjb250ZXh0ID09PSBudWxsKVxuICAgICAgICByZXR1cm4gW3RydWUsIG51bGxdO1xuICAgIHZhciBpc1ByZXNlbnQgPSBjb250ZXh0LmlzUHJlc2VudCwgb25FeGl0Q29tcGxldGUgPSBjb250ZXh0Lm9uRXhpdENvbXBsZXRlLCByZWdpc3RlciA9IGNvbnRleHQucmVnaXN0ZXI7XG4gICAgLy8gSXQncyBzYWZlIHRvIGNhbGwgdGhlIGZvbGxvd2luZyBob29rcyBjb25kaXRpb25hbGx5IChhZnRlciBhbiBlYXJseSByZXR1cm4pIGJlY2F1c2UgdGhlIGNvbnRleHQgd2lsbCBhbHdheXNcbiAgICAvLyBlaXRoZXIgYmUgbnVsbCBvciBub24tbnVsbCBmb3IgdGhlIGxpZmVzcGFuIG9mIHRoZSBjb21wb25lbnQuXG4gICAgLy8gUmVwbGFjZSB3aXRoIHVzZU9wYXF1ZUlkIHdoZW4gcmVsZWFzZWQgaW4gUmVhY3RcbiAgICB2YXIgaWQgPSB1c2VVbmlxdWVJZCgpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7IHJldHVybiByZWdpc3RlcihpZCk7IH0sIFtdKTtcbiAgICB2YXIgc2FmZVRvUmVtb3ZlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gb25FeGl0Q29tcGxldGUgPT09IG51bGwgfHwgb25FeGl0Q29tcGxldGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uRXhpdENvbXBsZXRlKGlkKTsgfTtcbiAgICByZXR1cm4gIWlzUHJlc2VudCAmJiBvbkV4aXRDb21wbGV0ZSA/IFtmYWxzZSwgc2FmZVRvUmVtb3ZlXSA6IFt0cnVlXTtcbn1cbi8qKlxuICogU2ltaWxhciB0byBgdXNlUHJlc2VuY2VgLCBleGNlcHQgYHVzZUlzUHJlc2VudGAgc2ltcGx5IHJldHVybnMgd2hldGhlciBvciBub3QgdGhlIGNvbXBvbmVudCBpcyBwcmVzZW50LlxuICogVGhlcmUgaXMgbm8gYHNhZmVUb1JlbW92ZWAgZnVuY3Rpb24uXG4gKlxuICogYGBganN4XG4gKiBpbXBvcnQgeyB1c2VJc1ByZXNlbnQgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG4gKlxuICogZXhwb3J0IGNvbnN0IENvbXBvbmVudCA9ICgpID0+IHtcbiAqICAgY29uc3QgaXNQcmVzZW50ID0gdXNlSXNQcmVzZW50KClcbiAqXG4gKiAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gKiAgICAgIWlzUHJlc2VudCAmJiBjb25zb2xlLmxvZyhcIkkndmUgYmVlbiByZW1vdmVkIVwiKVxuICogICB9LCBbaXNQcmVzZW50XSlcbiAqXG4gKiAgIHJldHVybiA8ZGl2IC8+XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHVzZUlzUHJlc2VudCgpIHtcbiAgICByZXR1cm4gaXNQcmVzZW50KHVzZUNvbnRleHQoUHJlc2VuY2VDb250ZXh0KSk7XG59XG5mdW5jdGlvbiBpc1ByZXNlbnQoY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0ID09PSBudWxsID8gdHJ1ZSA6IGNvbnRleHQuaXNQcmVzZW50O1xufVxudmFyIGNvdW50ZXIgPSAwO1xudmFyIGluY3JlbWVudElkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY291bnRlcisrOyB9O1xudmFyIHVzZVVuaXF1ZUlkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdXNlQ29uc3RhbnQoaW5jcmVtZW50SWQpOyB9O1xuXG4vKipcbiAqIFVzZSBjYWxsYmFjayBlaXRoZXIgb25seSBvbiB0aGUgaW5pdGlhbCByZW5kZXIgb3Igb24gYWxsIHJlbmRlcnMuIEluIGNvbmN1cnJlbnQgbW9kZVxuICogdGhlIFwiaW5pdGlhbFwiIHJlbmRlciBtaWdodCBydW4gbXVsdGlwbGUgdGltZXNcbiAqXG4gKiBAcGFyYW0gY2FsbGJhY2sgLSBDYWxsYmFjayB0byBydW5cbiAqIEBwYXJhbSBpc0luaXRpYWxPbmx5IC0gU2V0IHRvIGB0cnVlYCB0byBvbmx5IHJ1biBvbiBpbml0aWFsIHJlbmRlciwgb3IgYGZhbHNlYCBmb3IgYWxsIHJlbmRlcnMuIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gKlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiB1c2VJbml0aWFsT3JFdmVyeVJlbmRlcihjYWxsYmFjaywgaXNJbml0aWFsT25seSkge1xuICAgIGlmIChpc0luaXRpYWxPbmx5ID09PSB2b2lkIDApIHsgaXNJbml0aWFsT25seSA9IGZhbHNlOyB9XG4gICAgdmFyIGlzSW5pdGlhbFJlbmRlciA9IHVzZVJlZih0cnVlKTtcbiAgICBpZiAoIWlzSW5pdGlhbE9ubHkgfHwgKGlzSW5pdGlhbE9ubHkgJiYgaXNJbml0aWFsUmVuZGVyLmN1cnJlbnQpKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIGlzSW5pdGlhbFJlbmRlci5jdXJyZW50ID0gZmFsc2U7XG59XG5cbi8qKlxuICogVGhpcyBob29rIGlzIHJlc29uc2libGUgZm9yIGNyZWF0aW5nIHRoZSB2YXJpYW50LXByb3BhZ2F0aW9uIHRyZWVcbiAqIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIFZpc3VhbEVsZW1lbnRzLlxuICovXG5mdW5jdGlvbiB1c2VWYXJpYW50cyh2aXN1YWxFbGVtZW50LCBfYSwgaXNTdGF0aWMpIHtcbiAgICB2YXIgX2IsIF9jO1xuICAgIHZhciB2YXJpYW50cyA9IF9hLnZhcmlhbnRzLCBpbml0aWFsID0gX2EuaW5pdGlhbCwgYW5pbWF0ZSA9IF9hLmFuaW1hdGUsIHdoaWxlVGFwID0gX2Eud2hpbGVUYXAsIHdoaWxlSG92ZXIgPSBfYS53aGlsZUhvdmVyO1xuICAgIHZhciBfZCA9IHVzZVZhcmlhbnRDb250ZXh0KCksIHBhcmVudCA9IF9kLnBhcmVudCwgcGFyZW50SW5pdGlhbCA9IF9kLmluaXRpYWwsIHBhcmVudEFuaW1hdGUgPSBfZC5hbmltYXRlO1xuICAgIHZhciBwcmVzZW5jZUNvbnRleHQgPSB1c2VDb250ZXh0KFByZXNlbmNlQ29udGV4dCk7XG4gICAgLyoqXG4gICAgICogV2Ugb25seSBhZGQgdGhpcyBWaXN1YWxFbGVtZW50IHRvIHRoZSB2YXJpYW50IHRyZWUgKmlmKiB3ZSdyZTpcbiAgICAgKiAxLiBCZWluZyBwcm92aWRlZCBhIHZhcmlhbnRzIHByb3BcbiAgICAgKiAyLiBCZWluZyB1c2VkIHRvIGNvbnRyb2wgdmFyaWFudHMgKGllIGFuaW1hdGUsIHdoaWxlSG92ZXIgZXRjKVxuICAgICAqIDMuIE9yIGJlaW5nIHBhc3NlZCBhbmltYXRpb24gY29udHJvbHMsIHdoaWNoIHdlIGhhdmUgdG8gYXNzdW1lIG1heSBjb250cm9sIHZhcmlhbnRzXG4gICAgICogT3RoZXJ3aXNlIHRoaXMgY29tcG9uZW50IHNob3VsZCBiZSBcImludmlzaWJsZVwiIHRvIHZhcmlhbnQgcHJvcGFnYXRpb24uIFRoaXMgaXMgYSBjb25jZXNzaW9uXG4gICAgICogdG8gRnJhbWVyIHdoaWNoIHVzZXMgYSBgbW90aW9uYCBjb21wb25lbnQgaW4gZXZlcnkgYEZyYW1lYCBhbmQgaXQgbWlnaHQgYmUgaWYgd2UgY2hhbmdlIHRoYXRcbiAgICAgKiBpbiB0aGUgZnV0dXJlIHRoYXQgdGhpcyByZXN0cmljdGlvbiBpcyByZW1vdmVkLlxuICAgICAqL1xuICAgIHZhciBjb250cm9sc1ZhcmlhbnRzID0gaXNWYXJpYW50TGFiZWwkMShhbmltYXRlKSB8fFxuICAgICAgICBpc1ZhcmlhbnRMYWJlbCQxKHdoaWxlVGFwKSB8fFxuICAgICAgICBpc1ZhcmlhbnRMYWJlbCQxKHdoaWxlSG92ZXIpIHx8XG4gICAgICAgIGlzQW5pbWF0aW9uQ29udHJvbHMoYW5pbWF0ZSk7XG4gICAgdmFyIGlzVmFyaWFudE5vZGUgPSB2YXJpYW50cyB8fCBjb250cm9sc1ZhcmlhbnRzO1xuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIGluaXRpYWwgd2l0aCBvbmUgZnJvbSBhIHBhcmVudCBgQW5pbWF0ZVByZXNlbmNlYCwgaWYgcHJlc2VudFxuICAgICAqL1xuICAgIGluaXRpYWwgPSAoX2IgPSBwcmVzZW5jZUNvbnRleHQgPT09IG51bGwgfHwgcHJlc2VuY2VDb250ZXh0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcmVzZW5jZUNvbnRleHQuaW5pdGlhbCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogaW5pdGlhbDtcbiAgICAvKipcbiAgICAgKiBJZiBpbml0aWFsIGlzIGZhbHNlLCBhbmQgYW5pbWF0ZSBpc24ndCBhbmltYXRpb24gY29udHJvbHMsIHdlIGFzc2lnbiBhbmltYXRlXG4gICAgICogdG8gaW5pdGlhbCBhbmQgc2V0IG91ciB2YWx1ZXMgdG8gdGhhdCBmb3IgdGhlIGluaXRpYWwgcmVuZGVyLlxuICAgICAqL1xuICAgIGlmIChpbml0aWFsID09PSBmYWxzZSAmJiAhaXNBbmltYXRpb25Db250cm9scyhhbmltYXRlKSkge1xuICAgICAgICBpbml0aWFsID0gYW5pbWF0ZTtcbiAgICB9XG4gICAgdmFyIGNvbnRleHQgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7XG4gICAgICAgIHBhcmVudDogaXNWYXJpYW50Tm9kZSA/IHZpc3VhbEVsZW1lbnQgOiBwYXJlbnQsXG4gICAgICAgIGluaXRpYWw6IGlzVmFyaWFudExhYmVsJDEoaW5pdGlhbCkgPyBpbml0aWFsIDogcGFyZW50SW5pdGlhbCxcbiAgICAgICAgYW5pbWF0ZTogaXNWYXJpYW50TGFiZWwkMShhbmltYXRlKSA/IGFuaW1hdGUgOiBwYXJlbnRBbmltYXRlLFxuICAgIH0pOyB9LCBcbiAgICAvKipcbiAgICAgKiBPbmx5IGNyZWF0ZSBhIG5ldyBjb250ZXh0IHZhbHVlICh0aGVyZWJ5IHJlLXJlbmRlcmluZyBjaGlsZHJlbikgaWYgdGhpc1xuICAgICAqIGlzIGEgc3RhdGljIGNvbXBvbmVudCBhbmQgYGluaXRpYWxgIGNoYW5nZXMuXG4gICAgICovXG4gICAgW2lzU3RhdGljID8gaW5pdGlhbCA6IG51bGxdKTtcbiAgICAvLyBTZXQgaW5pdGlhbCBzdGF0ZS4gSWYgdGhpcyBpcyBhIHN0YXRpYyBjb21wb25lbnQgKGllIGluIEZyYW1lciBjYW52YXMpLCByZXNwb25kIHRvIHVwZGF0ZXNcbiAgICAvLyBpbiBgaW5pdGlhbGAuXG4gICAgdXNlSW5pdGlhbE9yRXZlcnlSZW5kZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5pdGlhbFRvQXBwbHkgPSBpbml0aWFsIHx8IHBhcmVudEluaXRpYWw7XG4gICAgICAgIGluaXRpYWxUb0FwcGx5ICYmIHNldFZhbHVlcyh2aXN1YWxFbGVtZW50LCBpbml0aWFsVG9BcHBseSk7XG4gICAgfSwgIWlzU3RhdGljKTtcbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmUgdG8gdGhlIHBhcmVudCB2aXN1YWxFbGVtZW50IGlmIHRoaXMgaXMgYSBwYXJ0aWNpcGFudCBpbiB0aGUgdmFyaWFudCB0cmVlXG4gICAgICovXG4gICAgaXNWYXJpYW50Tm9kZSAmJiAhY29udHJvbHNWYXJpYW50cyAmJiAocGFyZW50ID09PSBudWxsIHx8IHBhcmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50LmFkZFZhcmlhbnRDaGlsZCh2aXN1YWxFbGVtZW50KSk7XG4gICAgLyoqXG4gICAgICogSWYgdGhpcyBjb21wb25lbnQgaXNuJ3QgZXhpdGluZyB0aGUgdHJlZSwgY2xlYXIgYWxsIHRoZSBjaGlsZHJlbiBpbiB0aGUgcmVuZGVyIHBoYXNlLlxuICAgICAqIFRoaXMgd2lsbCBhbGxvdyBjaGlsZHJlbiB0byByZXN1YnNjcmliZSBpbiB0aGUgY29ycmVjdCBvcmRlciB0byBlbnN1cmUgdGhlIGNvcnJlY3Qgc3RhZ2dlciBvcmRlci5cbiAgICAgKi9cbiAgICBpc1ByZXNlbnQocHJlc2VuY2VDb250ZXh0KSAmJiAoKF9jID0gdmlzdWFsRWxlbWVudC52YXJpYW50Q2hpbGRyZW5PcmRlcikgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNsZWFyKCkpO1xuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSB0byB0aGUgcHJvcGFnYXRlZCBwYXJlbnQuXG4gICAgICovXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaXNWYXJpYW50Tm9kZSAmJiAocGFyZW50ID09PSBudWxsIHx8IHBhcmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50LmFkZFZhcmlhbnRDaGlsZE9yZGVyKHZpc3VhbEVsZW1lbnQpKTtcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBUcmFjayBtb3VudCBzdGF0dXMgc28gY2hpbGRyZW4gY2FuIGRldGVjdCB3aGV0aGVyIHRoZXkgd2VyZSBwcmVzZW50IGR1cmluZyB0aGVcbiAgICAgKiBjb21wb25lbnQncyBpbml0aWFsIG1vdW50LlxuICAgICAqL1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZpc3VhbEVsZW1lbnQuaXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIHZpc3VhbEVsZW1lbnQuaXNNb3VudGVkID0gZmFsc2U7XG4gICAgICAgICAgICAoX2EgPSBwYXJlbnQgPT09IG51bGwgfHwgcGFyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJlbnQudmFyaWFudENoaWxkcmVuKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZGVsZXRlKHZpc3VhbEVsZW1lbnQpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICAvKipcbiAgICAgKiBXZSB3YW50IHRvIHVwZGF0ZSB0aGUgXCJiYXNlXCIgKG9yIGZhbGxiYWNrKSB2YWx1ZSBvbiB0aGUgaW5pdGlhbCByZW5kZXIuXG4gICAgICovXG4gICAgdXNlSW5pdGlhbE9yRXZlcnlSZW5kZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICB2aXN1YWxFbGVtZW50LmZvckVhY2hWYWx1ZShmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgdmlzdWFsRWxlbWVudC5iYXNlVGFyZ2V0W2tleV0gPSB2YWx1ZS5nZXQoKTtcbiAgICAgICAgfSk7XG4gICAgfSwgdHJ1ZSk7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG59XG5mdW5jdGlvbiBpc1ZhcmlhbnRMYWJlbCQxKHYpIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09IFwic3RyaW5nXCIgfHwgQXJyYXkuaXNBcnJheSh2KTtcbn1cbmZ1bmN0aW9uIGlzQW5pbWF0aW9uQ29udHJvbHModikge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygdi5zdGFydCA9PT0gXCJmdW5jdGlvblwiO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGBtb3Rpb25gIGNvbXBvbmVudC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYSBDb21wb25lbnQgYXJndW1lbnQsIHdoaWNoIGNhbiBiZSBlaXRoZXIgYSBzdHJpbmcgKGllIFwiZGl2XCJcbiAqIGZvciBgbW90aW9uLmRpdmApLCBvciBhbiBhY3R1YWwgUmVhY3QgY29tcG9uZW50LlxuICpcbiAqIEFsb25nc2lkZSB0aGlzIGlzIGEgY29uZmlnIG9wdGlvbiB3aGljaCBwcm92aWRlcyBhIHdheSBvZiByZW5kZXJpbmcgdGhlIHByb3ZpZGVkXG4gKiBjb21wb25lbnQgXCJvZmZsaW5lXCIsIG9yIG91dHNpZGUgdGhlIFJlYWN0IHJlbmRlciBjeWNsZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gY3JlYXRlTW90aW9uQ29tcG9uZW50KENvbXBvbmVudCwgX2EpIHtcbiAgICB2YXIgZGVmYXVsdEZlYXR1cmVzID0gX2EuZGVmYXVsdEZlYXR1cmVzLCB1c2VWaXN1YWxFbGVtZW50ID0gX2EudXNlVmlzdWFsRWxlbWVudCwgcmVuZGVyID0gX2EucmVuZGVyO1xuICAgIGZ1bmN0aW9uIE1vdGlvbkNvbXBvbmVudChwcm9wcywgZXh0ZXJuYWxSZWYpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGEgY29tcG9uZW50IGlzIHN0YXRpYywgd2Ugb25seSB2aXN1YWxseSB1cGRhdGUgaXQgYXMgYVxuICAgICAgICAgKiByZXN1bHQgb2YgYSBSZWFjdCByZS1yZW5kZXIsIHJhdGhlciB0aGFuIGFueSBpbnRlcmFjdGlvbnMgb3IgYW5pbWF0aW9ucy5cbiAgICAgICAgICogSWYgdGhpcyBjb21wb25lbnQgb3IgYW55IGFuY2VzdG9yIGlzIHN0YXRpYywgd2UgZGlzYWJsZSBoYXJkd2FyZSBhY2NlbGVyYXRpb25cbiAgICAgICAgICogYW5kIGRvbid0IGxvYWQgYW55IGFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eS5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBpc1N0YXRpYyA9IHVzZUNvbnRleHQoTW90aW9uQ29uZmlnQ29udGV4dCkuaXNTdGF0aWM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGUgYSBWaXN1YWxFbGVtZW50IGZvciB0aGlzIGNvbXBvbmVudC4gQSBWaXN1YWxFbGVtZW50IHByb3ZpZGVzIGEgY29tbW9uXG4gICAgICAgICAqIGludGVyZmFjZSB0byByZW5kZXJlci1zcGVjaWZpYyBBUElzIChpZSBET00vVGhyZWUuanMgZXRjKSBhcyB3ZWxsIGFzXG4gICAgICAgICAqIHByb3ZpZGluZyBhIHdheSBvZiByZW5kZXJpbmcgdG8gdGhlc2UgQVBJcyBvdXRzaWRlIG9mIHRoZSBSZWFjdCByZW5kZXIgbG9vcFxuICAgICAgICAgKiBmb3IgbW9yZSBwZXJmb3JtYW50IGFuaW1hdGlvbnMgYW5kIGludGVyYWN0aW9uc1xuICAgICAgICAgKi9cbiAgICAgICAgdmFyIHZpc3VhbEVsZW1lbnQgPSB1c2VWaXN1YWxFbGVtZW50KENvbXBvbmVudCwgcHJvcHMsIGlzU3RhdGljLCBleHRlcm5hbFJlZik7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTY3JhcGUgTW90aW9uVmFsdWVzIGZyb20gcHJvcHMgYW5kIGFkZC9yZW1vdmUgdGhlbSB0by9mcm9tIHRoZSBWaXN1YWxFbGVtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgdXNlTW90aW9uVmFsdWVzKHZpc3VhbEVsZW1lbnQsIHByb3BzKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCB0aGUgdmlzdWFsRWxlbWVudCBhcyBhIG5vZGUgaW4gdGhlIHZhcmlhbnQgdHJlZS5cbiAgICAgICAgICovXG4gICAgICAgIHZhciB2YXJpYW50Q29udGV4dCA9IHVzZVZhcmlhbnRzKHZpc3VhbEVsZW1lbnQsIHByb3BzLCBpc1N0YXRpYyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMb2FkIGZlYXR1cmVzIGFzIHJlbmRlcmxlc3MgY29tcG9uZW50cyB1bmxlc3MgdGhlIGNvbXBvbmVudCBpc1N0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGZlYXR1cmVzID0gdXNlRmVhdHVyZXMoZGVmYXVsdEZlYXR1cmVzLCBpc1N0YXRpYywgdmlzdWFsRWxlbWVudCwgcHJvcHMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogT25seSBjcmVhdGUgYSBuZXcgY29udGV4dCB2YWx1ZSB3aGVuIHRoZSBzdWItY29udGV4dHMgY2hhbmdlLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGNvbnRleHQgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHZpc3VhbEVsZW1lbnQ6IHZpc3VhbEVsZW1lbnQsIHZhcmlhbnRDb250ZXh0OiB2YXJpYW50Q29udGV4dCB9KTsgfSwgW1xuICAgICAgICAgICAgdmlzdWFsRWxlbWVudCxcbiAgICAgICAgICAgIHZhcmlhbnRDb250ZXh0LFxuICAgICAgICBdKTtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IHJlbmRlcihDb21wb25lbnQsIHByb3BzLCB2aXN1YWxFbGVtZW50KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRoaXMgY29tcG9uZW50IGlzIGEgY2hpbGQgb2YgQW5pbWF0ZVNoYXJlZExheW91dCwgd2UgbmVlZCB0byBzbmFwc2hvdCB0aGUgY29tcG9uZW50XG4gICAgICAgICAqIGJlZm9yZSBpdCdzIHVubW91bnRlZC4gVGhpcyBsaXZlcyBoZXJlIHJhdGhlciB0aGFuIGluIGZlYXR1cmVzL2xheW91dC9NZWFzdXJlIGJlY2F1c2VcbiAgICAgICAgICogYXMgYSBjaGlsZCBjb21wb25lbnQgaXRzIHVubW91bnQgZWZmZWN0IHJ1bnMgYWZ0ZXIgdGhpcyBjb21wb25lbnQgaGFzIGJlZW4gdW5tb3VudGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgdXNlU25hcHNob3RPblVubW91bnQodmlzdWFsRWxlbWVudCk7XG4gICAgICAgIC8vIFRoZSBtb3VudCBvcmRlciBhbmQgaGllcmFyY2h5IGlzIHNwZWNpZmljIHRvIGVuc3VyZSBvdXIgZWxlbWVudCByZWYgaXMgaHlkcmF0ZWQgYnkgdGhlIHRpbWVcbiAgICAgICAgLy8gYWxsIHBsdWdpbnMgYW5kIGZlYXR1cmVzIGhhcyB0byBleGVjdXRlLlxuICAgICAgICByZXR1cm4gKGNyZWF0ZUVsZW1lbnQoRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICBjcmVhdGVFbGVtZW50KE1vdGlvbkNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IGNvbnRleHQgfSwgY29tcG9uZW50KSxcbiAgICAgICAgICAgIGZlYXR1cmVzKSk7XG4gICAgfVxuICAgIHJldHVybiBmb3J3YXJkUmVmKE1vdGlvbkNvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvY2sobmFtZSkge1xuICAgIHZhciBsb2NrID0gbnVsbDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3BlbkxvY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsb2NrID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGxvY2sgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGxvY2sgPSBuYW1lO1xuICAgICAgICAgICAgcmV0dXJuIG9wZW5Mb2NrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xufVxudmFyIGdsb2JhbEhvcml6b250YWxMb2NrID0gY3JlYXRlTG9jayhcImRyYWdIb3Jpem9udGFsXCIpO1xudmFyIGdsb2JhbFZlcnRpY2FsTG9jayA9IGNyZWF0ZUxvY2soXCJkcmFnVmVydGljYWxcIik7XG5mdW5jdGlvbiBnZXRHbG9iYWxMb2NrKGRyYWcpIHtcbiAgICB2YXIgbG9jayA9IGZhbHNlO1xuICAgIGlmIChkcmFnID09PSBcInlcIikge1xuICAgICAgICBsb2NrID0gZ2xvYmFsVmVydGljYWxMb2NrKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRyYWcgPT09IFwieFwiKSB7XG4gICAgICAgIGxvY2sgPSBnbG9iYWxIb3Jpem9udGFsTG9jaygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIG9wZW5Ib3Jpem9udGFsXzEgPSBnbG9iYWxIb3Jpem9udGFsTG9jaygpO1xuICAgICAgICB2YXIgb3BlblZlcnRpY2FsXzEgPSBnbG9iYWxWZXJ0aWNhbExvY2soKTtcbiAgICAgICAgaWYgKG9wZW5Ib3Jpem9udGFsXzEgJiYgb3BlblZlcnRpY2FsXzEpIHtcbiAgICAgICAgICAgIGxvY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb3Blbkhvcml6b250YWxfMSgpO1xuICAgICAgICAgICAgICAgIG9wZW5WZXJ0aWNhbF8xKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gUmVsZWFzZSB0aGUgbG9ja3MgYmVjYXVzZSB3ZSBkb24ndCB1c2UgdGhlbVxuICAgICAgICAgICAgaWYgKG9wZW5Ib3Jpem9udGFsXzEpXG4gICAgICAgICAgICAgICAgb3Blbkhvcml6b250YWxfMSgpO1xuICAgICAgICAgICAgaWYgKG9wZW5WZXJ0aWNhbF8xKVxuICAgICAgICAgICAgICAgIG9wZW5WZXJ0aWNhbF8xKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGxvY2s7XG59XG5cbmZ1bmN0aW9uIGFkZERvbUV2ZW50KHRhcmdldCwgZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKTsgfTtcbn1cbi8qKlxuICogQXR0YWNoZXMgYW4gZXZlbnQgbGlzdGVuZXIgZGlyZWN0bHkgdG8gdGhlIHByb3ZpZGVkIERPTSBlbGVtZW50LlxuICpcbiAqIEJ5cGFzc2luZyBSZWFjdCdzIGV2ZW50IHN5c3RlbSBjYW4gYmUgZGVzaXJhYmxlLCBmb3IgaW5zdGFuY2Ugd2hlbiBhdHRhY2hpbmcgbm9uLXBhc3NpdmVcbiAqIGV2ZW50IGhhbmRsZXJzLlxuICpcbiAqIGBgYGpzeFxuICogY29uc3QgcmVmID0gdXNlUmVmKG51bGwpXG4gKlxuICogdXNlRG9tRXZlbnQocmVmLCAnd2hlZWwnLCBvbldoZWVsLCB7IHBhc3NpdmU6IGZhbHNlIH0pXG4gKlxuICogcmV0dXJuIDxkaXYgcmVmPXtyZWZ9IC8+XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gcmVmIC0gUmVhY3QuUmVmT2JqZWN0IHRoYXQncyBiZWVuIHByb3ZpZGVkIHRvIHRoZSBlbGVtZW50IHlvdSB3YW50IHRvIGJpbmQgdGhlIGxpc3RlbmVyIHRvLlxuICogQHBhcmFtIGV2ZW50TmFtZSAtIE5hbWUgb2YgdGhlIGV2ZW50IHlvdSB3YW50IGxpc3RlbiBmb3IuXG4gKiBAcGFyYW0gaGFuZGxlciAtIEZ1bmN0aW9uIHRvIGZpcmUgd2hlbiByZWNlaXZpbmcgdGhlIGV2ZW50LlxuICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25zIHRvIHBhc3MgdG8gYEV2ZW50LmFkZEV2ZW50TGlzdGVuZXJgLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdXNlRG9tRXZlbnQocmVmLCBldmVudE5hbWUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHJlZi5jdXJyZW50O1xuICAgICAgICBpZiAoaGFuZGxlciAmJiBlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gYWRkRG9tRXZlbnQoZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH0sIFtyZWYsIGV2ZW50TmFtZSwgaGFuZGxlciwgb3B0aW9uc10pO1xufVxuXG5mdW5jdGlvbiBpc01vdXNlRXZlbnQoZXZlbnQpIHtcbiAgICAvLyBQb2ludGVyRXZlbnQgaW5oZXJpdHMgZnJvbSBNb3VzZUV2ZW50IHNvIHdlIGNhbid0IHVzZSBhIHN0cmFpZ2h0IGluc3RhbmNlb2YgY2hlY2suXG4gICAgaWYgKHR5cGVvZiBQb2ludGVyRXZlbnQgIT09IFwidW5kZWZpbmVkXCIgJiYgZXZlbnQgaW5zdGFuY2VvZiBQb2ludGVyRXZlbnQpIHtcbiAgICAgICAgcmV0dXJuICEhKGV2ZW50LnBvaW50ZXJUeXBlID09PSBcIm1vdXNlXCIpO1xuICAgIH1cbiAgICByZXR1cm4gZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50O1xufVxuZnVuY3Rpb24gaXNUb3VjaEV2ZW50KGV2ZW50KSB7XG4gICAgdmFyIGhhc1RvdWNoZXMgPSAhIWV2ZW50LnRvdWNoZXM7XG4gICAgcmV0dXJuIGhhc1RvdWNoZXM7XG59XG5cbi8qKlxuICogRmlsdGVycyBvdXQgZXZlbnRzIG5vdCBhdHRhY2hlZCB0byB0aGUgcHJpbWFyeSBwb2ludGVyIChjdXJyZW50bHkgbGVmdCBtb3VzZSBidXR0b24pXG4gKiBAcGFyYW0gZXZlbnRIYW5kbGVyXG4gKi9cbmZ1bmN0aW9uIGZpbHRlclByaW1hcnlQb2ludGVyKGV2ZW50SGFuZGxlcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIGlzTW91c2VFdmVudCA9IGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudDtcbiAgICAgICAgdmFyIGlzUHJpbWFyeVBvaW50ZXIgPSAhaXNNb3VzZUV2ZW50IHx8XG4gICAgICAgICAgICAoaXNNb3VzZUV2ZW50ICYmIGV2ZW50LmJ1dHRvbiA9PT0gMCk7XG4gICAgICAgIGlmIChpc1ByaW1hcnlQb2ludGVyKSB7XG4gICAgICAgICAgICBldmVudEhhbmRsZXIoZXZlbnQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbnZhciBkZWZhdWx0UGFnZVBvaW50ID0geyBwYWdlWDogMCwgcGFnZVk6IDAgfTtcbmZ1bmN0aW9uIHBvaW50RnJvbVRvdWNoKGUsIHBvaW50VHlwZSkge1xuICAgIGlmIChwb2ludFR5cGUgPT09IHZvaWQgMCkgeyBwb2ludFR5cGUgPSBcInBhZ2VcIjsgfVxuICAgIHZhciBwcmltYXJ5VG91Y2ggPSBlLnRvdWNoZXNbMF0gfHwgZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICB2YXIgcG9pbnQgPSBwcmltYXJ5VG91Y2ggfHwgZGVmYXVsdFBhZ2VQb2ludDtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBwb2ludFtwb2ludFR5cGUgKyBcIlhcIl0sXG4gICAgICAgIHk6IHBvaW50W3BvaW50VHlwZSArIFwiWVwiXSxcbiAgICB9O1xufVxuZnVuY3Rpb24gcG9pbnRGcm9tTW91c2UocG9pbnQsIHBvaW50VHlwZSkge1xuICAgIGlmIChwb2ludFR5cGUgPT09IHZvaWQgMCkgeyBwb2ludFR5cGUgPSBcInBhZ2VcIjsgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHg6IHBvaW50W3BvaW50VHlwZSArIFwiWFwiXSxcbiAgICAgICAgeTogcG9pbnRbcG9pbnRUeXBlICsgXCJZXCJdLFxuICAgIH07XG59XG5mdW5jdGlvbiBleHRyYWN0RXZlbnRJbmZvKGV2ZW50LCBwb2ludFR5cGUpIHtcbiAgICBpZiAocG9pbnRUeXBlID09PSB2b2lkIDApIHsgcG9pbnRUeXBlID0gXCJwYWdlXCI7IH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwb2ludDogaXNUb3VjaEV2ZW50KGV2ZW50KVxuICAgICAgICAgICAgPyBwb2ludEZyb21Ub3VjaChldmVudCwgcG9pbnRUeXBlKVxuICAgICAgICAgICAgOiBwb2ludEZyb21Nb3VzZShldmVudCwgcG9pbnRUeXBlKSxcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRQb2ludEZyb21FdmVudChldmVudCkge1xuICAgIHJldHVybiBleHRyYWN0RXZlbnRJbmZvKGV2ZW50LCBcImNsaWVudFwiKTtcbn1cbnZhciB3cmFwSGFuZGxlciA9IGZ1bmN0aW9uIChoYW5kbGVyLCBzaG91bGRGaWx0ZXJQcmltYXJ5UG9pbnRlcikge1xuICAgIGlmIChzaG91bGRGaWx0ZXJQcmltYXJ5UG9pbnRlciA9PT0gdm9pZCAwKSB7IHNob3VsZEZpbHRlclByaW1hcnlQb2ludGVyID0gZmFsc2U7IH1cbiAgICB2YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIoZXZlbnQsIGV4dHJhY3RFdmVudEluZm8oZXZlbnQpKTtcbiAgICB9O1xuICAgIHJldHVybiBzaG91bGRGaWx0ZXJQcmltYXJ5UG9pbnRlclxuICAgICAgICA/IGZpbHRlclByaW1hcnlQb2ludGVyKGxpc3RlbmVyKVxuICAgICAgICA6IGxpc3RlbmVyO1xufTtcblxudmFyIGlzQnJvd3NlciQxID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcbi8vIFdlIGNoZWNrIGZvciBldmVudCBzdXBwb3J0IHZpYSBmdW5jdGlvbnMgaW4gY2FzZSB0aGV5J3ZlIGJlZW4gbW9ja2VkIGJ5IGEgdGVzdGluZyBzdWl0ZS5cbnZhciBzdXBwb3J0c1BvaW50ZXJFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzQnJvd3NlciQxICYmIHdpbmRvdy5vbnBvaW50ZXJkb3duID09PSBudWxsO1xufTtcbnZhciBzdXBwb3J0c1RvdWNoRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBpc0Jyb3dzZXIkMSAmJiB3aW5kb3cub250b3VjaHN0YXJ0ID09PSBudWxsO1xufTtcbnZhciBzdXBwb3J0c01vdXNlRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBpc0Jyb3dzZXIkMSAmJiB3aW5kb3cub25tb3VzZWRvd24gPT09IG51bGw7XG59O1xuXG52YXIgbW91c2VFdmVudE5hbWVzID0ge1xuICAgIHBvaW50ZXJkb3duOiBcIm1vdXNlZG93blwiLFxuICAgIHBvaW50ZXJtb3ZlOiBcIm1vdXNlbW92ZVwiLFxuICAgIHBvaW50ZXJ1cDogXCJtb3VzZXVwXCIsXG4gICAgcG9pbnRlcmNhbmNlbDogXCJtb3VzZWNhbmNlbFwiLFxuICAgIHBvaW50ZXJvdmVyOiBcIm1vdXNlb3ZlclwiLFxuICAgIHBvaW50ZXJvdXQ6IFwibW91c2VvdXRcIixcbiAgICBwb2ludGVyZW50ZXI6IFwibW91c2VlbnRlclwiLFxuICAgIHBvaW50ZXJsZWF2ZTogXCJtb3VzZWxlYXZlXCIsXG59O1xudmFyIHRvdWNoRXZlbnROYW1lcyA9IHtcbiAgICBwb2ludGVyZG93bjogXCJ0b3VjaHN0YXJ0XCIsXG4gICAgcG9pbnRlcm1vdmU6IFwidG91Y2htb3ZlXCIsXG4gICAgcG9pbnRlcnVwOiBcInRvdWNoZW5kXCIsXG4gICAgcG9pbnRlcmNhbmNlbDogXCJ0b3VjaGNhbmNlbFwiLFxufTtcbmZ1bmN0aW9uIGdldFBvaW50ZXJFdmVudE5hbWUobmFtZSkge1xuICAgIGlmIChzdXBwb3J0c1BvaW50ZXJFdmVudHMoKSkge1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3VwcG9ydHNUb3VjaEV2ZW50cygpKSB7XG4gICAgICAgIHJldHVybiB0b3VjaEV2ZW50TmFtZXNbbmFtZV07XG4gICAgfVxuICAgIGVsc2UgaWYgKHN1cHBvcnRzTW91c2VFdmVudHMoKSkge1xuICAgICAgICByZXR1cm4gbW91c2VFdmVudE5hbWVzW25hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gbmFtZTtcbn1cbmZ1bmN0aW9uIGFkZFBvaW50ZXJFdmVudCh0YXJnZXQsIGV2ZW50TmFtZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgIHJldHVybiBhZGREb21FdmVudCh0YXJnZXQsIGdldFBvaW50ZXJFdmVudE5hbWUoZXZlbnROYW1lKSwgd3JhcEhhbmRsZXIoaGFuZGxlciwgZXZlbnROYW1lID09PSBcInBvaW50ZXJkb3duXCIpLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHVzZVBvaW50ZXJFdmVudChyZWYsIGV2ZW50TmFtZSwgaGFuZGxlciwgb3B0aW9ucykge1xuICAgIHJldHVybiB1c2VEb21FdmVudChyZWYsIGdldFBvaW50ZXJFdmVudE5hbWUoZXZlbnROYW1lKSwgaGFuZGxlciAmJiB3cmFwSGFuZGxlcihoYW5kbGVyLCBldmVudE5hbWUgPT09IFwicG9pbnRlcmRvd25cIiksIG9wdGlvbnMpO1xufVxuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG52YXIgUGFuU2Vzc2lvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBQYW5TZXNzaW9uKGV2ZW50LCBoYW5kbGVycywgX2EpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHRyYW5zZm9ybVBhZ2VQb2ludCA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkudHJhbnNmb3JtUGFnZVBvaW50O1xuICAgICAgICAvKipcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN0YXJ0RXZlbnQgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxhc3RNb3ZlRXZlbnQgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmxhc3RNb3ZlRXZlbnRJbmZvID0gbnVsbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IHt9O1xuICAgICAgICB0aGlzLnVwZGF0ZVBvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCEoX3RoaXMubGFzdE1vdmVFdmVudCAmJiBfdGhpcy5sYXN0TW92ZUV2ZW50SW5mbykpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIGluZm8gPSBnZXRQYW5JbmZvKF90aGlzLmxhc3RNb3ZlRXZlbnRJbmZvLCBfdGhpcy5oaXN0b3J5KTtcbiAgICAgICAgICAgIHZhciBpc1BhblN0YXJ0ZWQgPSBfdGhpcy5zdGFydEV2ZW50ICE9PSBudWxsO1xuICAgICAgICAgICAgLy8gT25seSBzdGFydCBwYW5uaW5nIGlmIHRoZSBvZmZzZXQgaXMgbGFyZ2VyIHRoYW4gMyBwaXhlbHMuIElmIHdlIG1ha2UgaXRcbiAgICAgICAgICAgIC8vIGFueSBsYXJnZXIgdGhhbiB0aGlzIHdlJ2xsIHdhbnQgdG8gcmVzZXQgdGhlIHBvaW50ZXIgaGlzdG9yeVxuICAgICAgICAgICAgLy8gb24gdGhlIGZpcnN0IHVwZGF0ZSB0byBhdm9pZCB2aXN1YWwgc25hcHBpbmcgdG8gdGhlIGN1cnNvZS5cbiAgICAgICAgICAgIHZhciBpc0Rpc3RhbmNlUGFzdFRocmVzaG9sZCA9IGRpc3RhbmNlKGluZm8ub2Zmc2V0LCB7IHg6IDAsIHk6IDAgfSkgPj0gMztcbiAgICAgICAgICAgIGlmICghaXNQYW5TdGFydGVkICYmICFpc0Rpc3RhbmNlUGFzdFRocmVzaG9sZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB2YXIgcG9pbnQgPSBpbmZvLnBvaW50O1xuICAgICAgICAgICAgdmFyIHRpbWVzdGFtcCA9IGdldEZyYW1lRGF0YSgpLnRpbWVzdGFtcDtcbiAgICAgICAgICAgIF90aGlzLmhpc3RvcnkucHVzaChfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcG9pbnQpLCB7IHRpbWVzdGFtcDogdGltZXN0YW1wIH0pKTtcbiAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLmhhbmRsZXJzLCBvblN0YXJ0ID0gX2Eub25TdGFydCwgb25Nb3ZlID0gX2Eub25Nb3ZlO1xuICAgICAgICAgICAgaWYgKCFpc1BhblN0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICBvblN0YXJ0ICYmIG9uU3RhcnQoX3RoaXMubGFzdE1vdmVFdmVudCwgaW5mbyk7XG4gICAgICAgICAgICAgICAgX3RoaXMuc3RhcnRFdmVudCA9IF90aGlzLmxhc3RNb3ZlRXZlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbk1vdmUgJiYgb25Nb3ZlKF90aGlzLmxhc3RNb3ZlRXZlbnQsIGluZm8pO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZVBvaW50ZXJNb3ZlID0gZnVuY3Rpb24gKGV2ZW50LCBpbmZvKSB7XG4gICAgICAgICAgICBfdGhpcy5sYXN0TW92ZUV2ZW50ID0gZXZlbnQ7XG4gICAgICAgICAgICBfdGhpcy5sYXN0TW92ZUV2ZW50SW5mbyA9IHRyYW5zZm9ybVBvaW50KGluZm8sIF90aGlzLnRyYW5zZm9ybVBhZ2VQb2ludCk7XG4gICAgICAgICAgICAvLyBCZWNhdXNlIFNhZmFyaSBkb2Vzbid0IHRyaWdnZXIgbW91c2V1cCBldmVudHMgd2hlbiBpdCdzIGFib3ZlIGEgYDxzZWxlY3Q+YFxuICAgICAgICAgICAgaWYgKGlzTW91c2VFdmVudChldmVudCkgJiYgZXZlbnQuYnV0dG9ucyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZVBvaW50ZXJVcChldmVudCwgaW5mbyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVGhyb3R0bGUgbW91c2UgbW92ZSBldmVudCB0byBvbmNlIHBlciBmcmFtZVxuICAgICAgICAgICAgc3luYy51cGRhdGUoX3RoaXMudXBkYXRlUG9pbnQsIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhhbmRsZVBvaW50ZXJVcCA9IGZ1bmN0aW9uIChldmVudCwgaW5mbykge1xuICAgICAgICAgICAgX3RoaXMuZW5kKCk7XG4gICAgICAgICAgICB2YXIgb25FbmQgPSBfdGhpcy5oYW5kbGVycy5vbkVuZDtcbiAgICAgICAgICAgIGlmICghb25FbmQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIHBhbkluZm8gPSBnZXRQYW5JbmZvKHRyYW5zZm9ybVBvaW50KGluZm8sIF90aGlzLnRyYW5zZm9ybVBhZ2VQb2ludCksIF90aGlzLmhpc3RvcnkpO1xuICAgICAgICAgICAgb25FbmQgJiYgb25FbmQoZXZlbnQsIHBhbkluZm8pO1xuICAgICAgICB9O1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIG1vcmUgdGhhbiBvbmUgdG91Y2gsIGRvbid0IHN0YXJ0IGRldGVjdGluZyB0aGlzIGdlc3R1cmVcbiAgICAgICAgaWYgKGlzVG91Y2hFdmVudChldmVudCkgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtUGFnZVBvaW50ID0gdHJhbnNmb3JtUGFnZVBvaW50O1xuICAgICAgICB2YXIgaW5mbyA9IGV4dHJhY3RFdmVudEluZm8oZXZlbnQpO1xuICAgICAgICB2YXIgaW5pdGlhbEluZm8gPSB0cmFuc2Zvcm1Qb2ludChpbmZvLCB0aGlzLnRyYW5zZm9ybVBhZ2VQb2ludCk7XG4gICAgICAgIHZhciBwb2ludCA9IGluaXRpYWxJbmZvLnBvaW50O1xuICAgICAgICB2YXIgdGltZXN0YW1wID0gZ2V0RnJhbWVEYXRhKCkudGltZXN0YW1wO1xuICAgICAgICB0aGlzLmhpc3RvcnkgPSBbX19hc3NpZ24oX19hc3NpZ24oe30sIHBvaW50KSwgeyB0aW1lc3RhbXA6IHRpbWVzdGFtcCB9KV07XG4gICAgICAgIHZhciBvblNlc3Npb25TdGFydCA9IGhhbmRsZXJzLm9uU2Vzc2lvblN0YXJ0O1xuICAgICAgICBvblNlc3Npb25TdGFydCAmJlxuICAgICAgICAgICAgb25TZXNzaW9uU3RhcnQoZXZlbnQsIGdldFBhbkluZm8oaW5pdGlhbEluZm8sIHRoaXMuaGlzdG9yeSkpO1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycyA9IHBpcGUoYWRkUG9pbnRlckV2ZW50KHdpbmRvdywgXCJwb2ludGVybW92ZVwiLCB0aGlzLmhhbmRsZVBvaW50ZXJNb3ZlKSwgYWRkUG9pbnRlckV2ZW50KHdpbmRvdywgXCJwb2ludGVydXBcIiwgdGhpcy5oYW5kbGVQb2ludGVyVXApLCBhZGRQb2ludGVyRXZlbnQod2luZG93LCBcInBvaW50ZXJjYW5jZWxcIiwgdGhpcy5oYW5kbGVQb2ludGVyVXApKTtcbiAgICB9XG4gICAgUGFuU2Vzc2lvbi5wcm90b3R5cGUudXBkYXRlSGFuZGxlcnMgPSBmdW5jdGlvbiAoaGFuZGxlcnMpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IGhhbmRsZXJzO1xuICAgIH07XG4gICAgUGFuU2Vzc2lvbi5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycyAmJiB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICAgICAgICBjYW5jZWxTeW5jLnVwZGF0ZSh0aGlzLnVwZGF0ZVBvaW50KTtcbiAgICB9O1xuICAgIHJldHVybiBQYW5TZXNzaW9uO1xufSgpKTtcbmZ1bmN0aW9uIHRyYW5zZm9ybVBvaW50KGluZm8sIHRyYW5zZm9ybVBhZ2VQb2ludCkge1xuICAgIHJldHVybiB0cmFuc2Zvcm1QYWdlUG9pbnQgPyB7IHBvaW50OiB0cmFuc2Zvcm1QYWdlUG9pbnQoaW5mby5wb2ludCkgfSA6IGluZm87XG59XG5mdW5jdGlvbiBzdWJ0cmFjdFBvaW50KGEsIGIpIHtcbiAgICByZXR1cm4geyB4OiBhLnggLSBiLngsIHk6IGEueSAtIGIueSB9O1xufVxuZnVuY3Rpb24gZ2V0UGFuSW5mbyhfYSwgaGlzdG9yeSkge1xuICAgIHZhciBwb2ludCA9IF9hLnBvaW50O1xuICAgIHJldHVybiB7XG4gICAgICAgIHBvaW50OiBwb2ludCxcbiAgICAgICAgZGVsdGE6IHN1YnRyYWN0UG9pbnQocG9pbnQsIGxhc3REZXZpY2VQb2ludChoaXN0b3J5KSksXG4gICAgICAgIG9mZnNldDogc3VidHJhY3RQb2ludChwb2ludCwgc3RhcnREZXZpY2VQb2ludChoaXN0b3J5KSksXG4gICAgICAgIHZlbG9jaXR5OiBnZXRWZWxvY2l0eSQxKGhpc3RvcnksIDAuMSksXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHN0YXJ0RGV2aWNlUG9pbnQoaGlzdG9yeSkge1xuICAgIHJldHVybiBoaXN0b3J5WzBdO1xufVxuZnVuY3Rpb24gbGFzdERldmljZVBvaW50KGhpc3RvcnkpIHtcbiAgICByZXR1cm4gaGlzdG9yeVtoaXN0b3J5Lmxlbmd0aCAtIDFdO1xufVxuZnVuY3Rpb24gZ2V0VmVsb2NpdHkkMShoaXN0b3J5LCB0aW1lRGVsdGEpIHtcbiAgICBpZiAoaGlzdG9yeS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICB9XG4gICAgdmFyIGkgPSBoaXN0b3J5Lmxlbmd0aCAtIDE7XG4gICAgdmFyIHRpbWVzdGFtcGVkUG9pbnQgPSBudWxsO1xuICAgIHZhciBsYXN0UG9pbnQgPSBsYXN0RGV2aWNlUG9pbnQoaGlzdG9yeSk7XG4gICAgd2hpbGUgKGkgPj0gMCkge1xuICAgICAgICB0aW1lc3RhbXBlZFBvaW50ID0gaGlzdG9yeVtpXTtcbiAgICAgICAgaWYgKGxhc3RQb2ludC50aW1lc3RhbXAgLSB0aW1lc3RhbXBlZFBvaW50LnRpbWVzdGFtcCA+XG4gICAgICAgICAgICBzZWNvbmRzVG9NaWxsaXNlY29uZHModGltZURlbHRhKSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaS0tO1xuICAgIH1cbiAgICBpZiAoIXRpbWVzdGFtcGVkUG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgIH1cbiAgICB2YXIgdGltZSA9IChsYXN0UG9pbnQudGltZXN0YW1wIC0gdGltZXN0YW1wZWRQb2ludC50aW1lc3RhbXApIC8gMTAwMDtcbiAgICBpZiAodGltZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgfVxuICAgIHZhciBjdXJyZW50VmVsb2NpdHkgPSB7XG4gICAgICAgIHg6IChsYXN0UG9pbnQueCAtIHRpbWVzdGFtcGVkUG9pbnQueCkgLyB0aW1lLFxuICAgICAgICB5OiAobGFzdFBvaW50LnkgLSB0aW1lc3RhbXBlZFBvaW50LnkpIC8gdGltZSxcbiAgICB9O1xuICAgIGlmIChjdXJyZW50VmVsb2NpdHkueCA9PT0gSW5maW5pdHkpIHtcbiAgICAgICAgY3VycmVudFZlbG9jaXR5LnggPSAwO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFZlbG9jaXR5LnkgPT09IEluZmluaXR5KSB7XG4gICAgICAgIGN1cnJlbnRWZWxvY2l0eS55ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnRWZWxvY2l0eTtcbn1cblxuLyoqXG4gKiBBcHBseSBjb25zdHJhaW50cyB0byBhIHBvaW50LiBUaGVzZSBjb25zdHJhaW50cyBhcmUgYm90aCBwaHlzaWNhbCBhbG9uZyBhblxuICogYXhpcywgYW5kIGFuIGVsYXN0aWMgZmFjdG9yIHRoYXQgZGV0ZXJtaW5lcyBob3cgbXVjaCB0byBjb25zdHJhaW4gdGhlIHBvaW50XG4gKiBieSBpZiBpdCBkb2VzIGxpZSBvdXRzaWRlIHRoZSBkZWZpbmVkIHBhcmFtZXRlcnMuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5Q29uc3RyYWludHMocG9pbnQsIF9hLCBlbGFzdGljKSB7XG4gICAgdmFyIG1pbiA9IF9hLm1pbiwgbWF4ID0gX2EubWF4O1xuICAgIGlmIChtaW4gIT09IHVuZGVmaW5lZCAmJiBwb2ludCA8IG1pbikge1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgbWluIHBvaW50IGRlZmluZWQsIGFuZCB0aGlzIGlzIG91dHNpZGUgb2YgdGhhdCwgY29uc3RyYWluXG4gICAgICAgIHBvaW50ID0gZWxhc3RpYyA/IG1peChtaW4sIHBvaW50LCBlbGFzdGljKSA6IE1hdGgubWF4KHBvaW50LCBtaW4pO1xuICAgIH1cbiAgICBlbHNlIGlmIChtYXggIT09IHVuZGVmaW5lZCAmJiBwb2ludCA+IG1heCkge1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgbWF4IHBvaW50IGRlZmluZWQsIGFuZCB0aGlzIGlzIG91dHNpZGUgb2YgdGhhdCwgY29uc3RyYWluXG4gICAgICAgIHBvaW50ID0gZWxhc3RpYyA/IG1peChtYXgsIHBvaW50LCBlbGFzdGljKSA6IE1hdGgubWluKHBvaW50LCBtYXgpO1xuICAgIH1cbiAgICByZXR1cm4gcG9pbnQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZXMgYSBtaW4gcHJvamVjdGlvbiBwb2ludCBiYXNlZCBvbiBhIHBvaW50ZXIsIHBvaW50ZXIgcHJvZ3Jlc3NcbiAqIHdpdGhpbiB0aGUgZHJhZyB0YXJnZXQsIGFuZCBjb25zdHJhaW50cy5cbiAqXG4gKiBGb3IgaW5zdGFuY2UgaWYgYW4gZWxlbWVudCB3YXMgMTAwcHggd2lkdGgsIHdlIHdlcmUgZHJhZ2dpbmcgZnJvbSAwLjI1XG4gKiBhbG9uZyB0aGlzIGF4aXMsIHRoZSBwb2ludGVyIGlzIGF0IDIwMHB4LCBhbmQgdGhlcmUgd2VyZSBubyBjb25zdHJhaW50cyxcbiAqIHdlIHdvdWxkIGNhbGN1bGF0ZSBhIG1pbiBwcm9qZWN0aW9uIHBvaW50IG9mIDE3NXB4LlxuICovXG5mdW5jdGlvbiBjYWxjQ29uc3RyYWluZWRNaW5Qb2ludChwb2ludCwgbGVuZ3RoLCBwcm9ncmVzcywgY29uc3RyYWludHMsIGVsYXN0aWMpIHtcbiAgICAvLyBDYWxjdWxhdGUgYSBtaW4gcG9pbnQgZm9yIHRoaXMgYXhpcyBhbmQgYXBwbHkgaXQgdG8gdGhlIGN1cnJlbnQgcG9pbnRlclxuICAgIHZhciBtaW4gPSBwb2ludCAtIGxlbmd0aCAqIHByb2dyZXNzO1xuICAgIHJldHVybiBjb25zdHJhaW50cyA/IGFwcGx5Q29uc3RyYWludHMobWluLCBjb25zdHJhaW50cywgZWxhc3RpYykgOiBtaW47XG59XG4vKipcbiAqIENhbGN1bGF0ZSBjb25zdHJhaW50cyBpbiB0ZXJtcyBvZiB0aGUgdmlld3BvcnQgd2hlbiBkZWZpbmVkIHJlbGF0aXZlbHkgdG8gdGhlXG4gKiBtZWFzdXJlZCBheGlzLiBUaGlzIGlzIG1lYXN1cmVkIGZyb20gdGhlIG5lYXJlc3QgZWRnZSwgc28gYSBtYXggY29uc3RyYWludCBvZiAyMDBcbiAqIG9uIGFuIGF4aXMgd2l0aCBhIG1heCB2YWx1ZSBvZiAzMDAgd291bGQgcmV0dXJuIGEgY29uc3RyYWludCBvZiA1MDAgLSBheGlzIGxlbmd0aFxuICovXG5mdW5jdGlvbiBjYWxjUmVsYXRpdmVBeGlzQ29uc3RyYWludHMoYXhpcywgbWluLCBtYXgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBtaW46IG1pbiAhPT0gdW5kZWZpbmVkID8gYXhpcy5taW4gKyBtaW4gOiB1bmRlZmluZWQsXG4gICAgICAgIG1heDogbWF4ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXhpcy5tYXggKyBtYXggLSAoYXhpcy5tYXggLSBheGlzLm1pbilcbiAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgIH07XG59XG4vKipcbiAqIENhbGN1bGF0ZSBjb25zdHJhaW50cyBpbiB0ZXJtcyBvZiB0aGUgdmlld3BvcnQgd2hlblxuICogZGVmaW5lZCByZWxhdGl2ZWx5IHRvIHRoZSBtZWFzdXJlZCBib3VuZGluZyBib3guXG4gKi9cbmZ1bmN0aW9uIGNhbGNSZWxhdGl2ZUNvbnN0cmFpbnRzKGxheW91dEJveCwgX2EpIHtcbiAgICB2YXIgdG9wID0gX2EudG9wLCBsZWZ0ID0gX2EubGVmdCwgYm90dG9tID0gX2EuYm90dG9tLCByaWdodCA9IF9hLnJpZ2h0O1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGNhbGNSZWxhdGl2ZUF4aXNDb25zdHJhaW50cyhsYXlvdXRCb3gueCwgbGVmdCwgcmlnaHQpLFxuICAgICAgICB5OiBjYWxjUmVsYXRpdmVBeGlzQ29uc3RyYWludHMobGF5b3V0Qm94LnksIHRvcCwgYm90dG9tKSxcbiAgICB9O1xufVxuLyoqXG4gKiBDYWxjdWxhdGUgdmlld3BvcnQgY29uc3RyYWludHMgd2hlbiBkZWZpbmVkIGFzIGFub3RoZXIgdmlld3BvcnQtcmVsYXRpdmUgYXhpc1xuICovXG5mdW5jdGlvbiBjYWxjVmlld3BvcnRBeGlzQ29uc3RyYWludHMobGF5b3V0QXhpcywgY29uc3RyYWludHNBeGlzKSB7XG4gICAgdmFyIF9hO1xuICAgIHZhciBtaW4gPSBjb25zdHJhaW50c0F4aXMubWluIC0gbGF5b3V0QXhpcy5taW47XG4gICAgdmFyIG1heCA9IGNvbnN0cmFpbnRzQXhpcy5tYXggLSBsYXlvdXRBeGlzLm1heDtcbiAgICAvLyBJZiB0aGUgY29uc3RyYWludHMgYXhpcyBpcyBhY3R1YWxseSBzbWFsbGVyIHRoYW4gdGhlIGxheW91dCBheGlzIHRoZW4gd2UgY2FuXG4gICAgLy8gZmxpcCB0aGUgY29uc3RyYWludHNcbiAgICBpZiAoY29uc3RyYWludHNBeGlzLm1heCAtIGNvbnN0cmFpbnRzQXhpcy5taW4gPFxuICAgICAgICBsYXlvdXRBeGlzLm1heCAtIGxheW91dEF4aXMubWluKSB7XG4gICAgICAgIF9hID0gX19yZWFkKFttYXgsIG1pbl0sIDIpLCBtaW4gPSBfYVswXSwgbWF4ID0gX2FbMV07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIG1pbjogbGF5b3V0QXhpcy5taW4gKyBtaW4sXG4gICAgICAgIG1heDogbGF5b3V0QXhpcy5taW4gKyBtYXgsXG4gICAgfTtcbn1cbi8qKlxuICogQ2FsY3VsYXRlIHZpZXdwb3J0IGNvbnN0cmFpbnRzIHdoZW4gZGVmaW5lZCBhcyBhbm90aGVyIHZpZXdwb3J0LXJlbGF0aXZlIGJveFxuICovXG5mdW5jdGlvbiBjYWxjVmlld3BvcnRDb25zdHJhaW50cyhsYXlvdXRCb3gsIGNvbnN0cmFpbnRzQm94KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogY2FsY1ZpZXdwb3J0QXhpc0NvbnN0cmFpbnRzKGxheW91dEJveC54LCBjb25zdHJhaW50c0JveC54KSxcbiAgICAgICAgeTogY2FsY1ZpZXdwb3J0QXhpc0NvbnN0cmFpbnRzKGxheW91dEJveC55LCBjb25zdHJhaW50c0JveC55KSxcbiAgICB9O1xufVxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIGFuIGF4aXMgcG9zaXRpb24gYmFzZWQgb24gdHdvIGF4ZXMgYW5kIGEgcHJvZ3Jlc3MgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGNhbGNQb3NpdGlvbkZyb21Qcm9ncmVzcyhheGlzLCBjb25zdHJhaW50cywgcHJvZ3Jlc3MpIHtcbiAgICB2YXIgYXhpc0xlbmd0aCA9IGF4aXMubWF4IC0gYXhpcy5taW47XG4gICAgdmFyIG1pbiA9IG1peChjb25zdHJhaW50cy5taW4sIGNvbnN0cmFpbnRzLm1heCAtIGF4aXNMZW5ndGgsIHByb2dyZXNzKTtcbiAgICByZXR1cm4geyBtaW46IG1pbiwgbWF4OiBtaW4gKyBheGlzTGVuZ3RoIH07XG59XG4vKipcbiAqIFJlYmFzZSB0aGUgY2FsY3VsYXRlZCB2aWV3cG9ydCBjb25zdHJhaW50cyByZWxhdGl2ZSB0byB0aGUgbGF5b3V0Lm1pbiBwb2ludC5cbiAqL1xuZnVuY3Rpb24gcmViYXNlQXhpc0NvbnN0cmFpbnRzKGxheW91dCwgY29uc3RyYWludHMpIHtcbiAgICB2YXIgcmVsYXRpdmVDb25zdHJhaW50cyA9IHt9O1xuICAgIGlmIChjb25zdHJhaW50cy5taW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZWxhdGl2ZUNvbnN0cmFpbnRzLm1pbiA9IGNvbnN0cmFpbnRzLm1pbiAtIGxheW91dC5taW47XG4gICAgfVxuICAgIGlmIChjb25zdHJhaW50cy5tYXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZWxhdGl2ZUNvbnN0cmFpbnRzLm1heCA9IGNvbnN0cmFpbnRzLm1heCAtIGxheW91dC5taW47XG4gICAgfVxuICAgIHJldHVybiByZWxhdGl2ZUNvbnN0cmFpbnRzO1xufVxuXG52YXIgZWxlbWVudERyYWdDb250cm9scyA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqXG4gKi9cbnZhciBsYXN0UG9pbnRlckV2ZW50O1xudmFyIFZpc3VhbEVsZW1lbnREcmFnQ29udHJvbHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVmlzdWFsRWxlbWVudERyYWdDb250cm9scyhfYSkge1xuICAgICAgICB2YXIgdmlzdWFsRWxlbWVudCA9IF9hLnZpc3VhbEVsZW1lbnQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcmFjayB3aGV0aGVyIHdlJ3JlIGN1cnJlbnRseSBkcmFnZ2luZy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjdXJyZW50IGRpcmVjdGlvbiBvZiBkcmFnLCBvciBgbnVsbGAgaWYgYm90aC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHBlcm1pdHRlZCBib3VuZGFyaWVzIG9mIHRyYXZlbCwgaW4gcGl4ZWxzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29uc3RyYWludHMgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBob3N0IGNvbXBvbmVudCdzIGxhdGVzdCBwcm9wcy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnByb3BzID0ge307XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaGFzTXV0YXRlZENvbnN0cmFpbnRzID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcmFjayB0aGUgaW5pdGlhbCBwb3NpdGlvbiBvZiB0aGUgY3Vyc29yIHJlbGF0aXZlIHRvIHRoZSBkcmFnZ2luZyBlbGVtZW50XG4gICAgICAgICAqIHdoZW4gZHJhZ2dpbmcgc3RhcnRzIGFzIGEgdmFsdWUgb2YgMC0xIG9uIGVhY2ggYXhpcy4gV2UgdGhlbiB1c2UgdGhpcyB0byBjYWxjdWxhdGVcbiAgICAgICAgICogYW4gaWRlYWwgYm91bmRpbmcgYm94IGZvciB0aGUgVmlzdWFsRWxlbWVudCByZW5kZXJlciB0byBwcm9qZWN0IGludG8gZXZlcnkgZnJhbWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBpbnRlcm5hbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jdXJzb3JQcm9ncmVzcyA9IHtcbiAgICAgICAgICAgIHg6IDAuNSxcbiAgICAgICAgICAgIHk6IDAuNSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2hlbiB1cGRhdGluZyBfZHJhZ1gsIG9yIF9kcmFnWSBpbnN0ZWFkIG9mIHRoZSBWaXN1YWxFbGVtZW50LFxuICAgICAgICAvLyBwZXJzaXN0IHRoZWlyIHZhbHVlcyBiZXR3ZWVuIGRyYWcgZ2VzdHVyZXMuXG4gICAgICAgIHRoaXMub3JpZ2luUG9pbnQgPSB7fTtcbiAgICAgICAgLy8gVGhpcyBpcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIGRyYWcgZ2VzdHVyZSBsb2NrLCBlbnN1cmluZyBvbmx5IG9uZSBjb21wb25lbnRcbiAgICAgICAgLy8gY2FuIFwiY2FwdHVyZVwiIHRoZSBkcmFnIG9mIG9uZSBvciBib3RoIGF4ZXMuXG4gICAgICAgIC8vIFRPRE86IExvb2sgaW50byBtb3ZpbmcgdGhpcyBpbnRvIHBhbnNlc3Npb24/XG4gICAgICAgIHRoaXMub3Blbkdsb2JhbExvY2sgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBhblNlc3Npb24gPSBudWxsO1xuICAgICAgICB0aGlzLnZpc3VhbEVsZW1lbnQgPSB2aXN1YWxFbGVtZW50O1xuICAgICAgICB0aGlzLnZpc3VhbEVsZW1lbnQuZW5hYmxlTGF5b3V0UHJvamVjdGlvbigpO1xuICAgICAgICBlbGVtZW50RHJhZ0NvbnRyb2xzLnNldCh2aXN1YWxFbGVtZW50LCB0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5zdGFudGlhdGUgYSBQYW5TZXNzaW9uIGZvciB0aGUgZHJhZyBnZXN0dXJlXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgVmlzdWFsRWxlbWVudERyYWdDb250cm9scy5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAob3JpZ2luRXZlbnQsIF9hKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCBfYyA9IF9iLnNuYXBUb0N1cnNvciwgc25hcFRvQ3Vyc29yID0gX2MgPT09IHZvaWQgMCA/IGZhbHNlIDogX2MsIGN1cnNvclByb2dyZXNzID0gX2IuY3Vyc29yUHJvZ3Jlc3M7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGlzIGRyYWcgc2Vzc2lvbiBoYXMgYmVlbiBtYW51YWxseSB0cmlnZ2VyZWQgYnkgdGhlIHVzZXIsIGl0IG1pZ2h0IGJlIGZyb20gYW4gZXZlbnRcbiAgICAgICAgICogb3V0c2lkZSB0aGUgZHJhZ2dhYmxlIGVsZW1lbnQuIElmIHNuYXBUb0N1cnNvciBpcyBzZXQgdG8gdHJ1ZSwgd2UgbmVlZCB0byBtZWFzdXJlIHRoZSBwb3NpdGlvblxuICAgICAgICAgKiBvZiB0aGUgZWxlbWVudCBhbmQgc25hcCBpdCB0byB0aGUgY3Vyc29yLlxuICAgICAgICAgKi9cbiAgICAgICAgc25hcFRvQ3Vyc29yICYmIHRoaXMuc25hcFRvQ3Vyc29yKG9yaWdpbkV2ZW50KTtcbiAgICAgICAgdmFyIG9uU2Vzc2lvblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gU3RvcCBhbnkgYW5pbWF0aW9ucyBvbiBib3RoIGF4aXMgdmFsdWVzIGltbWVkaWF0ZWx5LiBUaGlzIGFsbG93cyB0aGUgdXNlciB0byB0aHJvdyBhbmQgY2F0Y2hcbiAgICAgICAgICAgIC8vIHRoZSBjb21wb25lbnQuXG4gICAgICAgICAgICBfdGhpcy5zdG9wTW90aW9uKCk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvblN0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50LCBpbmZvKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgLy8gQXR0ZW1wdCB0byBncmFiIHRoZSBnbG9iYWwgZHJhZyBnZXN0dXJlIGxvY2sgLSBtYXliZSBtYWtlIHRoaXMgcGFydCBvZiBQYW5TZXNzaW9uXG4gICAgICAgICAgICB2YXIgX2MgPSBfdGhpcy5wcm9wcywgZHJhZyA9IF9jLmRyYWcsIGRyYWdQcm9wYWdhdGlvbiA9IF9jLmRyYWdQcm9wYWdhdGlvbjtcbiAgICAgICAgICAgIGlmIChkcmFnICYmICFkcmFnUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMub3Blbkdsb2JhbExvY2spXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9wZW5HbG9iYWxMb2NrKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMub3Blbkdsb2JhbExvY2sgPSBnZXRHbG9iYWxMb2NrKGRyYWcpO1xuICAgICAgICAgICAgICAgIC8vIElmIHdlIGRvbiAndCBoYXZlIHRoZSBsb2NrLCBkb24ndCBzdGFydCBkcmFnZ2luZ1xuICAgICAgICAgICAgICAgIGlmICghX3RoaXMub3Blbkdsb2JhbExvY2spXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogUmVjb3JkIHRoZSBwcm9ncmVzcyBvZiB0aGUgbW91c2Ugd2l0aGluIHRoZSBkcmFnZ2FibGUgZWxlbWVudCBvbiBlYWNoIGF4aXMuXG4gICAgICAgICAgICAgKiBvblBhbiwgd2UncmUgZ29pbmcgdG8gdXNlIHRoaXMgdG8gY2FsY3VsYXRlIGEgbmV3IGJvdW5kaW5nIGJveCBmb3IgdGhlIGVsZW1lbnQgdG9cbiAgICAgICAgICAgICAqIHByb2plY3QgaW50by4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IGV2ZW4gaWYgdGhlIERPTSBlbGVtZW50IG1vdmVzIHZpYSBhIHJlbGF5b3V0LCBpdCdsbFxuICAgICAgICAgICAgICogc3RpY2sgdG8gdGhlIGNvcnJlY3QgcGxhY2UgdW5kZXIgdGhlIHBvaW50ZXIuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIF90aGlzLnByZXBhcmVCb3VuZGluZ0JveCgpO1xuICAgICAgICAgICAgX3RoaXMudmlzdWFsRWxlbWVudC5sb2NrVGFyZ2V0Qm94KCk7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJlc29sdmUgdGhlIGRyYWcgY29uc3RyYWludHMuIFRoZXNlIGFyZSBlaXRoZXIgc2V0IGFzIHRvcC9yaWdodC9ib3R0b20vbGVmdCBjb25zdHJhaW50c1xuICAgICAgICAgICAgICogcmVsYXRpdmUgdG8gdGhlIGVsZW1lbnQncyBsYXlvdXQsIG9yIGEgcmVmIHRvIGFub3RoZXIgZWxlbWVudC4gQm90aCBuZWVkIGNvbnZlcnRpbmcgdG9cbiAgICAgICAgICAgICAqIHZpZXdwb3J0IGNvb3JkaW5hdGVzLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBfdGhpcy5yZXNvbHZlRHJhZ0NvbnN0cmFpbnRzKCk7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFdoZW4gZHJhZ2dpbmcgc3RhcnRzLCB3ZSB3YW50IHRvIGZpbmQgd2hlcmUgdGhlIGN1cnNvciBpcyByZWxhdGl2ZSB0byB0aGUgYm91bmRpbmcgYm94XG4gICAgICAgICAgICAgKiBvZiB0aGUgZWxlbWVudC4gRXZlcnkgZnJhbWUsIHdlIGNhbGN1bGF0ZSBhIG5ldyBib3VuZGluZyBib3ggdXNpbmcgdGhpcyByZWxhdGl2ZSBwb3NpdGlvblxuICAgICAgICAgICAgICogYW5kIGxldCB0aGUgdmlzdWFsRWxlbWVudCByZW5kZXJlciBmaWd1cmUgb3V0IGhvdyB0byByZXByb2plY3QgdGhlIGVsZW1lbnQgaW50byB0aGlzIGJvdW5kaW5nXG4gICAgICAgICAgICAgKiBib3guXG4gICAgICAgICAgICAgKlxuICAgICAgICAgICAgICogQnkgZG9pbmcgaXQgdGhpcyB3YXksIHJhdGhlciB0aGFuIGFwcGx5aW5nIGFuIHgveSB0cmFuc2Zvcm0gZGlyZWN0bHkgdG8gdGhlIGVsZW1lbnQsXG4gICAgICAgICAgICAgKiB3ZSBjYW4gZW5zdXJlIHRoZSBjb21wb25lbnQgYWx3YXlzIHZpc3VhbGx5IHN0aWNrcyB0byB0aGUgY3Vyc29yIGFzIHdlJ2QgZXhwZWN0LCBldmVuXG4gICAgICAgICAgICAgKiBpZiB0aGUgRE9NIGVsZW1lbnQgaXRzZWxmIGNoYW5nZXMgbGF5b3V0IGFzIGEgcmVzdWx0IG9mIFJlYWN0IHVwZGF0ZXMgdGhlIHVzZXIgbWlnaHRcbiAgICAgICAgICAgICAqIG1ha2UgYmFzZWQgb24gdGhlIGRyYWcgcG9zaXRpb24uXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBwb2ludCA9IGdldFZpZXdwb3J0UG9pbnRGcm9tRXZlbnQoZXZlbnQpLnBvaW50O1xuICAgICAgICAgICAgZWFjaEF4aXMoZnVuY3Rpb24gKGF4aXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy52aXN1YWxFbGVtZW50LnRhcmdldEJveFtheGlzXSwgbWluID0gX2EubWluLCBtYXggPSBfYS5tYXg7XG4gICAgICAgICAgICAgICAgX3RoaXMuY3Vyc29yUHJvZ3Jlc3NbYXhpc10gPSBjdXJzb3JQcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICA/IGN1cnNvclByb2dyZXNzW2F4aXNdXG4gICAgICAgICAgICAgICAgICAgIDogcHJvZ3Jlc3MobWluLCBtYXgsIHBvaW50W2F4aXNdKTtcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBJZiB3ZSBoYXZlIGV4dGVybmFsIGRyYWcgTW90aW9uVmFsdWVzLCByZWNvcmQgdGhlaXIgb3JpZ2luIHBvaW50LiBPbiBwb2ludGVybW92ZVxuICAgICAgICAgICAgICAgICAqIHdlJ2xsIGFwcGx5IHRoZSBwYW4gZ2VzdHVyZSBvZmZzZXQgZGlyZWN0bHkgdG8gdGhpcyB2YWx1ZS5cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICB2YXIgYXhpc1ZhbHVlID0gX3RoaXMuZ2V0QXhpc01vdGlvblZhbHVlKGF4aXMpO1xuICAgICAgICAgICAgICAgIGlmIChheGlzVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMub3JpZ2luUG9pbnRbYXhpc10gPSBheGlzVmFsdWUuZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBTZXQgY3VycmVudCBkcmFnIHN0YXR1c1xuICAgICAgICAgICAgX3RoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICAgICAgICBfdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIC8vIEZpcmUgb25EcmFnU3RhcnQgZXZlbnRcbiAgICAgICAgICAgIChfYiA9IChfYSA9IF90aGlzLnByb3BzKS5vbkRyYWdTdGFydCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIGV2ZW50LCBpbmZvKTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG9uTW92ZSA9IGZ1bmN0aW9uIChldmVudCwgaW5mbykge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICAgICAgdmFyIF9lID0gX3RoaXMucHJvcHMsIGRyYWdQcm9wYWdhdGlvbiA9IF9lLmRyYWdQcm9wYWdhdGlvbiwgZHJhZ0RpcmVjdGlvbkxvY2sgPSBfZS5kcmFnRGlyZWN0aW9uTG9jaztcbiAgICAgICAgICAgIC8vIElmIHdlIGRpZG4ndCBzdWNjZXNzZnVsbHkgcmVjZWl2ZSB0aGUgZ2VzdHVyZSBsb2NrLCBlYXJseSByZXR1cm4uXG4gICAgICAgICAgICBpZiAoIWRyYWdQcm9wYWdhdGlvbiAmJiAhX3RoaXMub3Blbkdsb2JhbExvY2spXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IGluZm8ub2Zmc2V0O1xuICAgICAgICAgICAgLy8gQXR0ZW1wdCB0byBkZXRlY3QgZHJhZyBkaXJlY3Rpb24gaWYgZGlyZWN0aW9uTG9jayBpcyB0cnVlXG4gICAgICAgICAgICBpZiAoZHJhZ0RpcmVjdGlvbkxvY2sgJiYgX3RoaXMuY3VycmVudERpcmVjdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBnZXRDdXJyZW50RGlyZWN0aW9uKG9mZnNldCk7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UndmUgc3VjY2Vzc2Z1bGx5IHNldCBhIGRpcmVjdGlvbiwgbm90aWZ5IGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmN1cnJlbnREaXJlY3Rpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgKF9iID0gKF9hID0gX3RoaXMucHJvcHMpLm9uRGlyZWN0aW9uTG9jaykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EsIF90aGlzLmN1cnJlbnREaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVcGRhdGUgZWFjaCBwb2ludCB3aXRoIHRoZSBsYXRlc3QgcG9zaXRpb25cbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZUF4aXMoXCJ4XCIsIGV2ZW50LCBvZmZzZXQpO1xuICAgICAgICAgICAgX3RoaXMudXBkYXRlQXhpcyhcInlcIiwgZXZlbnQsIG9mZnNldCk7XG4gICAgICAgICAgICAvLyBGaXJlIG9uRHJhZyBldmVudFxuICAgICAgICAgICAgKF9kID0gKF9jID0gX3RoaXMucHJvcHMpLm9uRHJhZykgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmNhbGwoX2MsIGV2ZW50LCBpbmZvKTtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgbGFzdCBwb2ludGVyIGV2ZW50XG4gICAgICAgICAgICBsYXN0UG9pbnRlckV2ZW50ID0gZXZlbnQ7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbkVuZCA9IGZ1bmN0aW9uIChldmVudCwgaW5mbykgeyByZXR1cm4gX3RoaXMuc3RvcChldmVudCwgaW5mbyk7IH07XG4gICAgICAgIHZhciB0cmFuc2Zvcm1QYWdlUG9pbnQgPSB0aGlzLnByb3BzLnRyYW5zZm9ybVBhZ2VQb2ludDtcbiAgICAgICAgdGhpcy5wYW5TZXNzaW9uID0gbmV3IFBhblNlc3Npb24ob3JpZ2luRXZlbnQsIHtcbiAgICAgICAgICAgIG9uU2Vzc2lvblN0YXJ0OiBvblNlc3Npb25TdGFydCxcbiAgICAgICAgICAgIG9uU3RhcnQ6IG9uU3RhcnQsXG4gICAgICAgICAgICBvbk1vdmU6IG9uTW92ZSxcbiAgICAgICAgICAgIG9uRW5kOiBvbkVuZCxcbiAgICAgICAgfSwgeyB0cmFuc2Zvcm1QYWdlUG9pbnQ6IHRyYW5zZm9ybVBhZ2VQb2ludCB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEVuc3VyZSB0aGUgY29tcG9uZW50J3MgbGF5b3V0IGFuZCB0YXJnZXQgYm91bmRpbmcgYm94ZXMgYXJlIHVwLXRvLWRhdGUuXG4gICAgICovXG4gICAgVmlzdWFsRWxlbWVudERyYWdDb250cm9scy5wcm90b3R5cGUucHJlcGFyZUJvdW5kaW5nQm94ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMudmlzdWFsRWxlbWVudC5nZXRJbnN0YW5jZSgpO1xuICAgICAgICB2YXIgdHJhbnNmb3JtID0gZWxlbWVudC5zdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIHRoaXMudmlzdWFsRWxlbWVudC5yZXNldFRyYW5zZm9ybSgpO1xuICAgICAgICB0aGlzLnZpc3VhbEVsZW1lbnQubWVhc3VyZUxheW91dCgpO1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgdGhpcy52aXN1YWxFbGVtZW50LnJlYmFzZVRhcmdldEJveCh0cnVlLCB0aGlzLnZpc3VhbEVsZW1lbnQuZ2V0Qm91bmRpbmdCb3hXaXRob3V0VHJhbnNmb3JtcygpKTtcbiAgICB9O1xuICAgIFZpc3VhbEVsZW1lbnREcmFnQ29udHJvbHMucHJvdG90eXBlLnJlc29sdmVEcmFnQ29uc3RyYWludHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBkcmFnQ29uc3RyYWludHMgPSB0aGlzLnByb3BzLmRyYWdDb25zdHJhaW50cztcbiAgICAgICAgaWYgKGRyYWdDb25zdHJhaW50cykge1xuICAgICAgICAgICAgdGhpcy5jb25zdHJhaW50cyA9IGlzUmVmT2JqZWN0KGRyYWdDb25zdHJhaW50cylcbiAgICAgICAgICAgICAgICA/IHRoaXMucmVzb2x2ZVJlZkNvbnN0cmFpbnRzKHRoaXMudmlzdWFsRWxlbWVudC5ib3gsIGRyYWdDb25zdHJhaW50cylcbiAgICAgICAgICAgICAgICA6IGNhbGNSZWxhdGl2ZUNvbnN0cmFpbnRzKHRoaXMudmlzdWFsRWxlbWVudC5ib3gsIGRyYWdDb25zdHJhaW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbnN0cmFpbnRzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHdlJ3JlIG91dHB1dHRpbmcgdG8gZXh0ZXJuYWwgTW90aW9uVmFsdWVzLCB3ZSB3YW50IHRvIHJlYmFzZSB0aGUgbWVhc3VyZWQgY29uc3RyYWludHNcbiAgICAgICAgICogZnJvbSB2aWV3cG9ydC1yZWxhdGl2ZSB0byBjb21wb25lbnQtcmVsYXRpdmUuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAodGhpcy5jb25zdHJhaW50cyAmJiAhdGhpcy5oYXNNdXRhdGVkQ29uc3RyYWludHMpIHtcbiAgICAgICAgICAgIGVhY2hBeGlzKGZ1bmN0aW9uIChheGlzKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmdldEF4aXNNb3Rpb25WYWx1ZShheGlzKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb25zdHJhaW50c1theGlzXSA9IHJlYmFzZUF4aXNDb25zdHJhaW50cyhfdGhpcy52aXN1YWxFbGVtZW50LmJveFtheGlzXSwgX3RoaXMuY29uc3RyYWludHNbYXhpc10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBWaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzLnByb3RvdHlwZS5yZXNvbHZlUmVmQ29uc3RyYWludHMgPSBmdW5jdGlvbiAobGF5b3V0Qm94LCBjb25zdHJhaW50cykge1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBvbk1lYXN1cmVEcmFnQ29uc3RyYWludHMgPSBfYS5vbk1lYXN1cmVEcmFnQ29uc3RyYWludHMsIHRyYW5zZm9ybVBhZ2VQb2ludCA9IF9hLnRyYW5zZm9ybVBhZ2VQb2ludDtcbiAgICAgICAgdmFyIGNvbnN0cmFpbnRzRWxlbWVudCA9IGNvbnN0cmFpbnRzLmN1cnJlbnQ7XG4gICAgICAgIGludmFyaWFudChjb25zdHJhaW50c0VsZW1lbnQgIT09IG51bGwsIFwiSWYgYGRyYWdDb25zdHJhaW50c2AgaXMgc2V0IGFzIGEgUmVhY3QgcmVmLCB0aGF0IHJlZiBtdXN0IGJlIHBhc3NlZCB0byBhbm90aGVyIGNvbXBvbmVudCdzIGByZWZgIHByb3AuXCIpO1xuICAgICAgICB0aGlzLmNvbnN0cmFpbnRzQm94ID0gZ2V0Qm91bmRpbmdCb3goY29uc3RyYWludHNFbGVtZW50LCB0cmFuc2Zvcm1QYWdlUG9pbnQpO1xuICAgICAgICB2YXIgbWVhc3VyZWRDb25zdHJhaW50cyA9IGNhbGNWaWV3cG9ydENvbnN0cmFpbnRzKGxheW91dEJveCwgdGhpcy5jb25zdHJhaW50c0JveCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGVyZSdzIGFuIG9uTWVhc3VyZURyYWdDb25zdHJhaW50cyBsaXN0ZW5lciB3ZSBjYWxsIGl0IGFuZFxuICAgICAgICAgKiBpZiBkaWZmZXJlbnQgY29uc3RyYWludHMgYXJlIHJldHVybmVkLCBzZXQgY29uc3RyYWludHMgdG8gdGhhdFxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKG9uTWVhc3VyZURyYWdDb25zdHJhaW50cykge1xuICAgICAgICAgICAgdmFyIHVzZXJDb25zdHJhaW50cyA9IG9uTWVhc3VyZURyYWdDb25zdHJhaW50cyhjb252ZXJ0QXhpc0JveFRvQm91bmRpbmdCb3gobWVhc3VyZWRDb25zdHJhaW50cykpO1xuICAgICAgICAgICAgdGhpcy5oYXNNdXRhdGVkQ29uc3RyYWludHMgPSAhIXVzZXJDb25zdHJhaW50cztcbiAgICAgICAgICAgIGlmICh1c2VyQ29uc3RyYWludHMpIHtcbiAgICAgICAgICAgICAgICBtZWFzdXJlZENvbnN0cmFpbnRzID0gY29udmVydEJvdW5kaW5nQm94VG9BeGlzQm94KHVzZXJDb25zdHJhaW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1lYXN1cmVkQ29uc3RyYWludHM7XG4gICAgfTtcbiAgICBWaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzLnByb3RvdHlwZS5jYW5jZWxEcmFnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYW5TZXNzaW9uICYmIHRoaXMucGFuU2Vzc2lvbi5lbmQoKTtcbiAgICAgICAgdGhpcy5wYW5TZXNzaW9uID0gbnVsbDtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLmRyYWdQcm9wYWdhdGlvbiAmJiB0aGlzLm9wZW5HbG9iYWxMb2NrKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW5HbG9iYWxMb2NrKCk7XG4gICAgICAgICAgICB0aGlzLm9wZW5HbG9iYWxMb2NrID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudERyYWdDb250cm9scy5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIChldmVudCwgaW5mbykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMudmlzdWFsRWxlbWVudC51bmxvY2tUYXJnZXRCb3goKTtcbiAgICAgICAgKF9hID0gdGhpcy5wYW5TZXNzaW9uKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZW5kKCk7XG4gICAgICAgIHRoaXMucGFuU2Vzc2lvbiA9IG51bGw7XG4gICAgICAgIHZhciBpc0RyYWdnaW5nID0gdGhpcy5pc0RyYWdnaW5nO1xuICAgICAgICB0aGlzLmNhbmNlbERyYWcoKTtcbiAgICAgICAgaWYgKCFpc0RyYWdnaW5nKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLnByb3BzLCBkcmFnTW9tZW50dW0gPSBfYi5kcmFnTW9tZW50dW0sIGRyYWdFbGFzdGljID0gX2IuZHJhZ0VsYXN0aWMsIG9uRHJhZ0VuZCA9IF9iLm9uRHJhZ0VuZDtcbiAgICAgICAgaWYgKGRyYWdNb21lbnR1bSB8fCBkcmFnRWxhc3RpYykge1xuICAgICAgICAgICAgdmFyIHZlbG9jaXR5ID0gaW5mby52ZWxvY2l0eTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZURyYWdFbmQodmVsb2NpdHkpO1xuICAgICAgICB9XG4gICAgICAgIG9uRHJhZ0VuZCA9PT0gbnVsbCB8fCBvbkRyYWdFbmQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uRHJhZ0VuZChldmVudCwgaW5mbyk7XG4gICAgfTtcbiAgICBWaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzLnByb3RvdHlwZS5zbmFwVG9DdXJzb3IgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5wcmVwYXJlQm91bmRpbmdCb3goKTtcbiAgICAgICAgZWFjaEF4aXMoZnVuY3Rpb24gKGF4aXMpIHtcbiAgICAgICAgICAgIHZhciBheGlzVmFsdWUgPSBfdGhpcy5nZXRBeGlzTW90aW9uVmFsdWUoYXhpcyk7XG4gICAgICAgICAgICBpZiAoYXhpc1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBvaW50ID0gZ2V0Vmlld3BvcnRQb2ludEZyb21FdmVudChldmVudCkucG9pbnQ7XG4gICAgICAgICAgICAgICAgdmFyIGJveCA9IF90aGlzLnZpc3VhbEVsZW1lbnQuYm94O1xuICAgICAgICAgICAgICAgIHZhciBsZW5ndGhfMSA9IGJveFtheGlzXS5tYXggLSBib3hbYXhpc10ubWluO1xuICAgICAgICAgICAgICAgIHZhciBjZW50ZXIgPSBib3hbYXhpc10ubWluICsgbGVuZ3RoXzEgLyAyO1xuICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBwb2ludFtheGlzXSAtIGNlbnRlcjtcbiAgICAgICAgICAgICAgICBfdGhpcy5vcmlnaW5Qb2ludFtheGlzXSA9IHBvaW50W2F4aXNdO1xuICAgICAgICAgICAgICAgIGF4aXNWYWx1ZS5zZXQob2Zmc2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF90aGlzLmN1cnNvclByb2dyZXNzW2F4aXNdID0gMC41O1xuICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZVZpc3VhbEVsZW1lbnRBeGlzKGF4aXMsIGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHNwZWNpZmllZCBheGlzIHdpdGggdGhlIGxhdGVzdCBwb2ludGVyIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIFZpc3VhbEVsZW1lbnREcmFnQ29udHJvbHMucHJvdG90eXBlLnVwZGF0ZUF4aXMgPSBmdW5jdGlvbiAoYXhpcywgZXZlbnQsIG9mZnNldCkge1xuICAgICAgICB2YXIgZHJhZyA9IHRoaXMucHJvcHMuZHJhZztcbiAgICAgICAgLy8gSWYgd2UncmUgbm90IGRyYWdnaW5nIHRoaXMgYXhpcywgZG8gYW4gZWFybHkgcmV0dXJuLlxuICAgICAgICBpZiAoIXNob3VsZERyYWcoYXhpcywgZHJhZywgdGhpcy5jdXJyZW50RGlyZWN0aW9uKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXhpc01vdGlvblZhbHVlKGF4aXMpXG4gICAgICAgICAgICA/IHRoaXMudXBkYXRlQXhpc01vdGlvblZhbHVlKGF4aXMsIG9mZnNldClcbiAgICAgICAgICAgIDogdGhpcy51cGRhdGVWaXN1YWxFbGVtZW50QXhpcyhheGlzLCBldmVudCk7XG4gICAgfTtcbiAgICBWaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzLnByb3RvdHlwZS51cGRhdGVBeGlzTW90aW9uVmFsdWUgPSBmdW5jdGlvbiAoYXhpcywgb2Zmc2V0KSB7XG4gICAgICAgIHZhciBheGlzVmFsdWUgPSB0aGlzLmdldEF4aXNNb3Rpb25WYWx1ZShheGlzKTtcbiAgICAgICAgaWYgKCFvZmZzZXQgfHwgIWF4aXNWYWx1ZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIGRyYWdFbGFzdGljID0gdGhpcy5wcm9wcy5kcmFnRWxhc3RpYztcbiAgICAgICAgdmFyIG5leHRWYWx1ZSA9IHRoaXMub3JpZ2luUG9pbnRbYXhpc10gKyBvZmZzZXRbYXhpc107XG4gICAgICAgIHZhciB1cGRhdGUgPSB0aGlzLmNvbnN0cmFpbnRzXG4gICAgICAgICAgICA/IGFwcGx5Q29uc3RyYWludHMobmV4dFZhbHVlLCB0aGlzLmNvbnN0cmFpbnRzW2F4aXNdLCBkcmFnRWxhc3RpYylcbiAgICAgICAgICAgIDogbmV4dFZhbHVlO1xuICAgICAgICBheGlzVmFsdWUuc2V0KHVwZGF0ZSk7XG4gICAgfTtcbiAgICBWaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzLnByb3RvdHlwZS51cGRhdGVWaXN1YWxFbGVtZW50QXhpcyA9IGZ1bmN0aW9uIChheGlzLCBldmVudCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBkcmFnRWxhc3RpYyA9IHRoaXMucHJvcHMuZHJhZ0VsYXN0aWM7XG4gICAgICAgIC8vIEdldCB0aGUgYWN0dWFsIGxheW91dCBib3VuZGluZyBib3ggb2YgdGhlIGVsZW1lbnRcbiAgICAgICAgdmFyIGF4aXNMYXlvdXQgPSB0aGlzLnZpc3VhbEVsZW1lbnQuYm94W2F4aXNdO1xuICAgICAgICAvLyBDYWxjdWxhdGUgaXRzIGN1cnJlbnQgbGVuZ3RoLiBJbiB0aGUgZnV0dXJlIHdlIG1pZ2h0IHdhbnQgdG8gbGVycCB0aGlzIHRvIGFuaW1hdGVcbiAgICAgICAgLy8gYmV0d2VlbiBsZW5ndGhzIGlmIHRoZSBsYXlvdXQgY2hhbmdlcyBhcyB3ZSBjaGFuZ2UgdGhlIERPTVxuICAgICAgICB2YXIgYXhpc0xlbmd0aCA9IGF4aXNMYXlvdXQubWF4IC0gYXhpc0xheW91dC5taW47XG4gICAgICAgIC8vIEdldCB0aGUgaW5pdGlhbCBwcm9ncmVzcyB0aGF0IHRoZSBwb2ludGVyIHNhdCBvbiB0aGlzIGF4aXMgb24gZ2VzdHVyZSBzdGFydC5cbiAgICAgICAgdmFyIGF4aXNQcm9ncmVzcyA9IHRoaXMuY3Vyc29yUHJvZ3Jlc3NbYXhpc107XG4gICAgICAgIHZhciBwb2ludCA9IGdldFZpZXdwb3J0UG9pbnRGcm9tRXZlbnQoZXZlbnQpLnBvaW50O1xuICAgICAgICAvLyBDYWxjdWxhdGUgYSBuZXcgbWluIHBvaW50IGJhc2VkIG9uIHRoZSBsYXRlc3QgcG9pbnRlciBwb3NpdGlvbiwgY29uc3RyYWludHMgYW5kIGVsYXN0aWNcbiAgICAgICAgdmFyIG1pbiA9IGNhbGNDb25zdHJhaW5lZE1pblBvaW50KHBvaW50W2F4aXNdLCBheGlzTGVuZ3RoLCBheGlzUHJvZ3Jlc3MsIChfYSA9IHRoaXMuY29uc3RyYWludHMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtheGlzXSwgZHJhZ0VsYXN0aWMpO1xuICAgICAgICAvLyBVcGRhdGUgdGhlIGF4aXMgdmlld3BvcnQgdGFyZ2V0IHdpdGggdGhpcyBuZXcgbWluIGFuZCB0aGUgbGVuZ3RoXG4gICAgICAgIHRoaXMudmlzdWFsRWxlbWVudC5zZXRBeGlzVGFyZ2V0KGF4aXMsIG1pbiwgbWluICsgYXhpc0xlbmd0aCk7XG4gICAgfTtcbiAgICBWaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzLnByb3RvdHlwZS51cGRhdGVQcm9wcyA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgX2IgPSBfYS5kcmFnLCBkcmFnID0gX2IgPT09IHZvaWQgMCA/IGZhbHNlIDogX2IsIF9jID0gX2EuZHJhZ0RpcmVjdGlvbkxvY2ssIGRyYWdEaXJlY3Rpb25Mb2NrID0gX2MgPT09IHZvaWQgMCA/IGZhbHNlIDogX2MsIF9kID0gX2EuZHJhZ1Byb3BhZ2F0aW9uLCBkcmFnUHJvcGFnYXRpb24gPSBfZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfZCwgX2UgPSBfYS5kcmFnQ29uc3RyYWludHMsIGRyYWdDb25zdHJhaW50cyA9IF9lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9lLCBfZiA9IF9hLmRyYWdFbGFzdGljLCBkcmFnRWxhc3RpYyA9IF9mID09PSB2b2lkIDAgPyAwLjM1IDogX2YsIF9nID0gX2EuZHJhZ01vbWVudHVtLCBkcmFnTW9tZW50dW0gPSBfZyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9nLCByZW1haW5pbmdQcm9wcyA9IF9fcmVzdChfYSwgW1wiZHJhZ1wiLCBcImRyYWdEaXJlY3Rpb25Mb2NrXCIsIFwiZHJhZ1Byb3BhZ2F0aW9uXCIsIFwiZHJhZ0NvbnN0cmFpbnRzXCIsIFwiZHJhZ0VsYXN0aWNcIiwgXCJkcmFnTW9tZW50dW1cIl0pO1xuICAgICAgICB0aGlzLnByb3BzID0gX19hc3NpZ24oeyBkcmFnOiBkcmFnLFxuICAgICAgICAgICAgZHJhZ0RpcmVjdGlvbkxvY2s6IGRyYWdEaXJlY3Rpb25Mb2NrLFxuICAgICAgICAgICAgZHJhZ1Byb3BhZ2F0aW9uOiBkcmFnUHJvcGFnYXRpb24sXG4gICAgICAgICAgICBkcmFnQ29uc3RyYWludHM6IGRyYWdDb25zdHJhaW50cyxcbiAgICAgICAgICAgIGRyYWdFbGFzdGljOiBkcmFnRWxhc3RpYyxcbiAgICAgICAgICAgIGRyYWdNb21lbnR1bTogZHJhZ01vbWVudHVtIH0sIHJlbWFpbmluZ1Byb3BzKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERyYWcgd29ya3MgZGlmZmVyZW50bHkgZGVwZW5kaW5nIG9uIHdoaWNoIHByb3BzIGFyZSBwcm92aWRlZC5cbiAgICAgKlxuICAgICAqIC0gSWYgX2RyYWdYIGFuZCBfZHJhZ1kgYXJlIHByb3ZpZGVkLCB3ZSBvdXRwdXQgdGhlIGdlc3R1cmUgZGVsdGEgZGlyZWN0bHkgdG8gdGhvc2UgbW90aW9uIHZhbHVlcy5cbiAgICAgKiAtIElmIHRoZSBjb21wb25lbnQgd2lsbCBwZXJmb3JtIGxheW91dCBhbmltYXRpb25zLCB3ZSBvdXRwdXQgdGhlIGdlc3R1cmUgdG8gdGhlIGNvbXBvbmVudCdzXG4gICAgICogICAgICB2aXN1YWwgYm91bmRpbmcgYm94XG4gICAgICogLSBPdGhlcndpc2UsIHdlIGFwcGx5IHRoZSBkZWx0YSB0byB0aGUgeC95IG1vdGlvbiB2YWx1ZXMuXG4gICAgICovXG4gICAgVmlzdWFsRWxlbWVudERyYWdDb250cm9scy5wcm90b3R5cGUuZ2V0QXhpc01vdGlvblZhbHVlID0gZnVuY3Rpb24gKGF4aXMpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgbGF5b3V0ID0gX2EubGF5b3V0LCBsYXlvdXRJZCA9IF9hLmxheW91dElkO1xuICAgICAgICB2YXIgZHJhZ0tleSA9IFwiX2RyYWdcIiArIGF4aXMudG9VcHBlckNhc2UoKTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHNbZHJhZ0tleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzW2RyYWdLZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFsYXlvdXQgJiYgbGF5b3V0SWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmlzdWFsRWxlbWVudC5nZXRWYWx1ZShheGlzLCAwKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudERyYWdDb250cm9scy5wcm90b3R5cGUuYW5pbWF0ZURyYWdFbmQgPSBmdW5jdGlvbiAodmVsb2NpdHkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgZHJhZyA9IF9hLmRyYWcsIGRyYWdNb21lbnR1bSA9IF9hLmRyYWdNb21lbnR1bSwgZHJhZ0VsYXN0aWMgPSBfYS5kcmFnRWxhc3RpYywgZHJhZ1RyYW5zaXRpb24gPSBfYS5kcmFnVHJhbnNpdGlvbjtcbiAgICAgICAgdmFyIG1vbWVudHVtQW5pbWF0aW9ucyA9IGVhY2hBeGlzKGZ1bmN0aW9uIChheGlzKSB7XG4gICAgICAgICAgICBpZiAoIXNob3VsZERyYWcoYXhpcywgZHJhZywgX3RoaXMuY3VycmVudERpcmVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdHJhbnNpdGlvbiA9IF90aGlzLmNvbnN0cmFpbnRzID8gX3RoaXMuY29uc3RyYWludHNbYXhpc10gOiB7fTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogT3ZlcmRhbXAgdGhlIGJvdW5kYXJ5IHNwcmluZyBpZiBgZHJhZ0VsYXN0aWNgIGlzIGRpc2FibGVkLiBUaGVyZSdzIHN0aWxsIGEgZnJhbWVcbiAgICAgICAgICAgICAqIG9mIHNwcmluZyBhbmltYXRpb25zIHNvIHdlIHNob3VsZCBsb29rIGludG8gYWRkaW5nIGEgZGlzYWJsZSBzcHJpbmcgb3B0aW9uIHRvIGBpbmVydGlhYC5cbiAgICAgICAgICAgICAqIFdlIGNvdWxkIGRvIHNvbWV0aGluZyBoZXJlIHdoZXJlIHdlIGFmZmVjdCB0aGUgYGJvdW5jZVN0aWZmbmVzc2AgYW5kIGBib3VuY2VEYW1waW5nYFxuICAgICAgICAgICAgICogdXNpbmcgdGhlIHZhbHVlIG9mIGBkcmFnRWxhc3RpY2AuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBib3VuY2VTdGlmZm5lc3MgPSBkcmFnRWxhc3RpYyA/IDIwMCA6IDEwMDAwMDA7XG4gICAgICAgICAgICB2YXIgYm91bmNlRGFtcGluZyA9IGRyYWdFbGFzdGljID8gNDAgOiAxMDAwMDAwMDtcbiAgICAgICAgICAgIHZhciBpbmVydGlhID0gX19hc3NpZ24oX19hc3NpZ24oeyB0eXBlOiBcImluZXJ0aWFcIiwgdmVsb2NpdHk6IGRyYWdNb21lbnR1bSA/IHZlbG9jaXR5W2F4aXNdIDogMCwgYm91bmNlU3RpZmZuZXNzOiBib3VuY2VTdGlmZm5lc3MsXG4gICAgICAgICAgICAgICAgYm91bmNlRGFtcGluZzogYm91bmNlRGFtcGluZywgdGltZUNvbnN0YW50OiA3NTAsIHJlc3REZWx0YTogMSwgcmVzdFNwZWVkOiAxMCB9LCBkcmFnVHJhbnNpdGlvbiksIHRyYW5zaXRpb24pO1xuICAgICAgICAgICAgLy8gSWYgd2UncmUgbm90IGFuaW1hdGluZyBvbiBhbiBleHRlcm5hbGx5LXByb3ZpZGVkIGBNb3Rpb25WYWx1ZWAgd2UgY2FuIHVzZSB0aGVcbiAgICAgICAgICAgIC8vIGNvbXBvbmVudCdzIGFuaW1hdGlvbiBjb250cm9scyB3aGljaCB3aWxsIGhhbmRsZSBpbnRlcmFjdGlvbnMgd2l0aCB3aGlsZUhvdmVyIChldGMpLFxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIHdlIGp1c3QgaGF2ZSB0byBhbmltYXRlIHRoZSBgTW90aW9uVmFsdWVgIGl0c2VsZi5cbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5nZXRBeGlzTW90aW9uVmFsdWUoYXhpcylcbiAgICAgICAgICAgICAgICA/IF90aGlzLnN0YXJ0QXhpc1ZhbHVlQW5pbWF0aW9uKGF4aXMsIGluZXJ0aWEpXG4gICAgICAgICAgICAgICAgOiBfdGhpcy52aXN1YWxFbGVtZW50LnN0YXJ0TGF5b3V0QXhpc0FuaW1hdGlvbihheGlzLCBpbmVydGlhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFJ1biBhbGwgYW5pbWF0aW9ucyBhbmQgdGhlbiByZXNvbHZlIHRoZSBuZXcgZHJhZyBjb25zdHJhaW50cy5cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKG1vbWVudHVtQW5pbWF0aW9ucykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgKF9iID0gKF9hID0gX3RoaXMucHJvcHMpLm9uRHJhZ1RyYW5zaXRpb25FbmQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jYWxsKF9hKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBWaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzLnByb3RvdHlwZS5zdG9wTW90aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBlYWNoQXhpcyhmdW5jdGlvbiAoYXhpcykge1xuICAgICAgICAgICAgdmFyIGF4aXNWYWx1ZSA9IF90aGlzLmdldEF4aXNNb3Rpb25WYWx1ZShheGlzKTtcbiAgICAgICAgICAgIGF4aXNWYWx1ZVxuICAgICAgICAgICAgICAgID8gYXhpc1ZhbHVlLnN0b3AoKVxuICAgICAgICAgICAgICAgIDogX3RoaXMudmlzdWFsRWxlbWVudC5zdG9wTGF5b3V0QW5pbWF0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVmlzdWFsRWxlbWVudERyYWdDb250cm9scy5wcm90b3R5cGUuc3RhcnRBeGlzVmFsdWVBbmltYXRpb24gPSBmdW5jdGlvbiAoYXhpcywgdHJhbnNpdGlvbikge1xuICAgICAgICB2YXIgYXhpc1ZhbHVlID0gdGhpcy5nZXRBeGlzTW90aW9uVmFsdWUoYXhpcyk7XG4gICAgICAgIGlmICghYXhpc1ZhbHVlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgY3VycmVudFZhbHVlID0gYXhpc1ZhbHVlLmdldCgpO1xuICAgICAgICBheGlzVmFsdWUuc2V0KGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIGF4aXNWYWx1ZS5zZXQoY3VycmVudFZhbHVlKTsgLy8gU2V0IHR3aWNlIHRvIGhhcmQtcmVzZXQgdmVsb2NpdHlcbiAgICAgICAgcmV0dXJuIHN0YXJ0QW5pbWF0aW9uKGF4aXMsIGF4aXNWYWx1ZSwgMCwgdHJhbnNpdGlvbik7XG4gICAgfTtcbiAgICBWaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzLnByb3RvdHlwZS5zY2FsZVBvaW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLCBkcmFnID0gX2EuZHJhZywgZHJhZ0NvbnN0cmFpbnRzID0gX2EuZHJhZ0NvbnN0cmFpbnRzO1xuICAgICAgICBpZiAoIWlzUmVmT2JqZWN0KGRyYWdDb25zdHJhaW50cykgfHwgIXRoaXMuY29uc3RyYWludHNCb3gpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIFN0b3AgYW55IGN1cnJlbnQgYW5pbWF0aW9ucyBhcyB0aGVyZSBjYW4gYmUgc29tZSB2aXN1YWwgZ2xpdGNoaW5nIGlmIHdlIHJlc2l6ZSBtaWQgYW5pbWF0aW9uXG4gICAgICAgIHRoaXMuc3RvcE1vdGlvbigpO1xuICAgICAgICAvLyBSZWNvcmQgdGhlIHJlbGF0aXZlIHByb2dyZXNzIG9mIHRoZSB0YXJnZXRCb3ggcmVsYXRpdmUgdG8gdGhlIGNvbnN0cmFpbnRzQm94XG4gICAgICAgIHZhciBib3hQcm9ncmVzcyA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICBlYWNoQXhpcyhmdW5jdGlvbiAoYXhpcykge1xuICAgICAgICAgICAgYm94UHJvZ3Jlc3NbYXhpc10gPSBjYWxjT3JpZ2luKF90aGlzLnZpc3VhbEVsZW1lbnQudGFyZ2V0Qm94W2F4aXNdLCBfdGhpcy5jb25zdHJhaW50c0JveFtheGlzXSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogRm9yIGVhY2ggYXhpcywgY2FsY3VsYXRlIHRoZSBjdXJyZW50IHByb2dyZXNzIG9mIHRoZSBsYXlvdXQgYXhpcyB3aXRoaW4gdGhlIGNvbnN0cmFpbnRzLlxuICAgICAgICAgKiBUaGVuLCB1c2luZyB0aGUgbGF0ZXN0IGxheW91dCBhbmQgY29uc3RyYWludHMgbWVhc3VyZW1lbnRzLCByZXBvc2l0aW9uIHRoZSBuZXcgbGF5b3V0IGF4aXNcbiAgICAgICAgICogcHJvcG9ydGlvbmFsbHkgd2l0aGluIHRoZSBjb25zdHJhaW50cy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucHJlcGFyZUJvdW5kaW5nQm94KCk7XG4gICAgICAgIHRoaXMucmVzb2x2ZURyYWdDb25zdHJhaW50cygpO1xuICAgICAgICBlYWNoQXhpcyhmdW5jdGlvbiAoYXhpcykge1xuICAgICAgICAgICAgaWYgKCFzaG91bGREcmFnKGF4aXMsIGRyYWcsIG51bGwpKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIHRhcmdldEJveCByZWxhdGl2ZSB0byB0aGUgY29uc3RyYWludHNCb3ggdXNpbmcgdGhlXG4gICAgICAgICAgICAvLyBwcmV2aW91c2x5IGNhbGN1bGF0ZWQgcHJvZ3Jlc3NcbiAgICAgICAgICAgIHZhciBfYSA9IGNhbGNQb3NpdGlvbkZyb21Qcm9ncmVzcyhfdGhpcy52aXN1YWxFbGVtZW50LnRhcmdldEJveFtheGlzXSwgX3RoaXMuY29uc3RyYWludHNCb3hbYXhpc10sIGJveFByb2dyZXNzW2F4aXNdKSwgbWluID0gX2EubWluLCBtYXggPSBfYS5tYXg7XG4gICAgICAgICAgICBfdGhpcy52aXN1YWxFbGVtZW50LnNldEF4aXNUYXJnZXQoYXhpcywgbWluLCBtYXgpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFZpc3VhbEVsZW1lbnREcmFnQ29udHJvbHMucHJvdG90eXBlLm1vdW50ID0gZnVuY3Rpb24gKHZpc3VhbEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB2aXN1YWxFbGVtZW50LmdldEluc3RhbmNlKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBdHRhY2ggYSBwb2ludGVyZG93biBldmVudCBsaXN0ZW5lciBvbiB0aGlzIERPTSBlbGVtZW50IHRvIGluaXRpYXRlIGRyYWcgdHJhY2tpbmcuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgc3RvcFBvaW50ZXJMaXN0ZW5lciA9IGFkZFBvaW50ZXJFdmVudChlbGVtZW50LCBcInBvaW50ZXJkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsIGRyYWcgPSBfYS5kcmFnLCBfYiA9IF9hLmRyYWdMaXN0ZW5lciwgZHJhZ0xpc3RlbmVyID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAgICAgICAgIGRyYWcgJiYgZHJhZ0xpc3RlbmVyICYmIF90aGlzLnN0YXJ0KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBdHRhY2ggYSB3aW5kb3cgcmVzaXplIGxpc3RlbmVyIHRvIHNjYWxlIHRoZSBkcmFnZ2FibGUgdGFyZ2V0IHdpdGhpbiBpdHMgZGVmaW5lZFxuICAgICAgICAgKiBjb25zdHJhaW50cyBhcyB0aGUgd2luZG93IHJlc2l6ZXMuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgc3RvcFJlc2l6ZUxpc3RlbmVyID0gYWRkRG9tRXZlbnQod2luZG93LCBcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zY2FsZVBvaW50KCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogRW5zdXJlIGRyYWcgY29uc3RyYWludHMgYXJlIHJlc29sdmVkIGNvcnJlY3RseSByZWxhdGl2ZSB0byB0aGUgZHJhZ2dpbmcgZWxlbWVudFxuICAgICAgICAgKiB3aGVuZXZlciBpdHMgbGF5b3V0IGNoYW5nZXMuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgc3RvcExheW91dFVwZGF0ZUxpc3RlbmVyID0gdmlzdWFsRWxlbWVudC5vbkxheW91dFVwZGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuaXNEcmFnZ2luZylcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXNvbHZlRHJhZ0NvbnN0cmFpbnRzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdGhlIHByZXZpb3VzIGNvbXBvbmVudCB3aXRoIHRoaXMgc2FtZSBsYXlvdXRJZCB3YXMgZHJhZ2dpbmcgYXQgdGhlIHRpbWVcbiAgICAgICAgICogaXQgd2FzIHVubW91bnRlZCwgd2Ugd2FudCB0byBjb250aW51ZSB0aGUgc2FtZSBnZXN0dXJlIG9uIHRoaXMgY29tcG9uZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIHByZXZTbmFwc2hvdCA9IHZpc3VhbEVsZW1lbnQucHJldlNuYXBzaG90O1xuICAgICAgICAocHJldlNuYXBzaG90ID09PSBudWxsIHx8IHByZXZTbmFwc2hvdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJldlNuYXBzaG90LmlzRHJhZ2dpbmcpICYmXG4gICAgICAgICAgICB0aGlzLnN0YXJ0KGxhc3RQb2ludGVyRXZlbnQsIHtcbiAgICAgICAgICAgICAgICBjdXJzb3JQcm9ncmVzczogcHJldlNuYXBzaG90LmN1cnNvclByb2dyZXNzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXR1cm4gYSBmdW5jdGlvbiB0aGF0IHdpbGwgdGVhcmRvd24gdGhlIGRyYWcgZ2VzdHVyZVxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHN0b3BQb2ludGVyTGlzdGVuZXIgPT09IG51bGwgfHwgc3RvcFBvaW50ZXJMaXN0ZW5lciA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RvcFBvaW50ZXJMaXN0ZW5lcigpO1xuICAgICAgICAgICAgc3RvcFJlc2l6ZUxpc3RlbmVyID09PSBudWxsIHx8IHN0b3BSZXNpemVMaXN0ZW5lciA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RvcFJlc2l6ZUxpc3RlbmVyKCk7XG4gICAgICAgICAgICBzdG9wTGF5b3V0VXBkYXRlTGlzdGVuZXIgPT09IG51bGwgfHwgc3RvcExheW91dFVwZGF0ZUxpc3RlbmVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdG9wTGF5b3V0VXBkYXRlTGlzdGVuZXIoKTtcbiAgICAgICAgICAgIF90aGlzLmNhbmNlbERyYWcoKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBWaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzO1xufSgpKTtcbmZ1bmN0aW9uIHNob3VsZERyYWcoZGlyZWN0aW9uLCBkcmFnLCBjdXJyZW50RGlyZWN0aW9uKSB7XG4gICAgcmV0dXJuICgoZHJhZyA9PT0gdHJ1ZSB8fCBkcmFnID09PSBkaXJlY3Rpb24pICYmXG4gICAgICAgIChjdXJyZW50RGlyZWN0aW9uID09PSBudWxsIHx8IGN1cnJlbnREaXJlY3Rpb24gPT09IGRpcmVjdGlvbikpO1xufVxuLyoqXG4gKiBCYXNlZCBvbiBhbiB4L3kgb2Zmc2V0IGRldGVybWluZSB0aGUgY3VycmVudCBkcmFnIGRpcmVjdGlvbi4gSWYgYm90aCBheGlzJyBvZmZzZXRzIGFyZSBsb3dlclxuICogdGhhbiB0aGUgcHJvdmlkZWQgdGhyZXNob2xkLCByZXR1cm4gYG51bGxgLlxuICpcbiAqIEBwYXJhbSBvZmZzZXQgLSBUaGUgeC95IG9mZnNldCBmcm9tIG9yaWdpbi5cbiAqIEBwYXJhbSBsb2NrVGhyZXNob2xkIC0gKE9wdGlvbmFsKSAtIHRoZSBtaW5pbXVtIGFic29sdXRlIG9mZnNldCBiZWZvcmUgd2UgY2FuIGRldGVybWluZSBhIGRyYWcgZGlyZWN0aW9uLlxuICovXG5mdW5jdGlvbiBnZXRDdXJyZW50RGlyZWN0aW9uKG9mZnNldCwgbG9ja1RocmVzaG9sZCkge1xuICAgIGlmIChsb2NrVGhyZXNob2xkID09PSB2b2lkIDApIHsgbG9ja1RocmVzaG9sZCA9IDEwOyB9XG4gICAgdmFyIGRpcmVjdGlvbiA9IG51bGw7XG4gICAgaWYgKE1hdGguYWJzKG9mZnNldC55KSA+IGxvY2tUaHJlc2hvbGQpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gXCJ5XCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKE1hdGguYWJzKG9mZnNldC54KSA+IGxvY2tUaHJlc2hvbGQpIHtcbiAgICAgICAgZGlyZWN0aW9uID0gXCJ4XCI7XG4gICAgfVxuICAgIHJldHVybiBkaXJlY3Rpb247XG59XG5cbi8qKlxuICogQSBob29rIHRoYXQgYWxsb3dzIGFuIGVsZW1lbnQgdG8gYmUgZHJhZ2dlZC5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gdXNlRHJhZyhwcm9wcywgdmlzdWFsRWxlbWVudCkge1xuICAgIHZhciBncm91cERyYWdDb250cm9scyA9IHByb3BzLmRyYWdDb250cm9scztcbiAgICB2YXIgdHJhbnNmb3JtUGFnZVBvaW50ID0gdXNlQ29udGV4dChNb3Rpb25Db25maWdDb250ZXh0KS50cmFuc2Zvcm1QYWdlUG9pbnQ7XG4gICAgdmFyIGRyYWdDb250cm9scyA9IHVzZUNvbnN0YW50KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzKHtcbiAgICAgICAgICAgIHZpc3VhbEVsZW1lbnQ6IHZpc3VhbEVsZW1lbnQsXG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRyYWdDb250cm9scy51cGRhdGVQcm9wcyhfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJvcHMpLCB7IHRyYW5zZm9ybVBhZ2VQb2ludDogdHJhbnNmb3JtUGFnZVBvaW50IH0pKTtcbiAgICAvLyBJZiB3ZSd2ZSBiZWVuIHByb3ZpZGVkIGEgRHJhZ0NvbnRyb2xzIGZvciBtYW51YWwgY29udHJvbCBvdmVyIHRoZSBkcmFnIGdlc3R1cmUsXG4gICAgLy8gc3Vic2NyaWJlIHRoaXMgY29tcG9uZW50IHRvIGl0IG9uIG1vdW50LlxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7IHJldHVybiBncm91cERyYWdDb250cm9scyAmJiBncm91cERyYWdDb250cm9scy5zdWJzY3JpYmUoZHJhZ0NvbnRyb2xzKTsgfSwgW2RyYWdDb250cm9sc10pO1xuICAgIC8vIE1vdW50IHRoZSBkcmFnIGNvbnRyb2xzIHdpdGggdGhlIHZpc3VhbEVsZW1lbnRcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkgeyByZXR1cm4gZHJhZ0NvbnRyb2xzLm1vdW50KHZpc3VhbEVsZW1lbnQpOyB9LCBbXSk7XG59XG5cbnZhciBtYWtlUmVuZGVybGVzc0NvbXBvbmVudCA9IGZ1bmN0aW9uIChob29rKSB7IHJldHVybiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICBob29rKHByb3BzKTtcbiAgICByZXR1cm4gbnVsbDtcbn07IH07XG5cbnZhciBDb21wb25lbnQgPSBtYWtlUmVuZGVybGVzc0NvbXBvbmVudChmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgdmlzdWFsRWxlbWVudCA9IF9hLnZpc3VhbEVsZW1lbnQsIHByb3BzID0gX19yZXN0KF9hLCBbXCJ2aXN1YWxFbGVtZW50XCJdKTtcbiAgICByZXR1cm4gdXNlRHJhZyhwcm9wcywgdmlzdWFsRWxlbWVudCk7XG59KTtcbi8qKlxuICogQHB1YmxpY1xuICovXG52YXIgRHJhZyA9IHtcbiAgICBrZXk6IFwiZHJhZ1wiLFxuICAgIHNob3VsZFJlbmRlcjogZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAhIXByb3BzLmRyYWcgfHwgISFwcm9wcy5kcmFnQ29udHJvbHM7IH0sXG4gICAgZ2V0Q29tcG9uZW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiBDb21wb25lbnQ7IH0sXG59O1xuXG5mdW5jdGlvbiB1c2VVbm1vdW50RWZmZWN0KGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBjYWxsYmFjaygpOyB9OyB9LCBbXSk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBoYW5kbGVycyAtXG4gKiBAcGFyYW0gcmVmIC1cbiAqXG4gKiBAaW50ZXJuYWxyZW1hcmtzXG4gKiBDdXJyZW50bHkgdGhpcyBzZXRzIG5ldyBwYW4gZ2VzdHVyZSBmdW5jdGlvbnMgZXZlcnkgcmVuZGVyLiBUaGUgbWVtbyByb3V0ZSBoYXMgYmVlbiBleHBsb3JlZFxuICogaW4gdGhlIHBhc3QgYnV0IHVsdGltYXRlbHkgd2UncmUgc3RpbGwgY3JlYXRpbmcgbmV3IGZ1bmN0aW9ucyBldmVyeSByZW5kZXIuIEFuIG9wdGltaXNhdGlvblxuICogdG8gZXhwbG9yZSBpcyBjcmVhdGluZyB0aGUgcGFuIGdlc3R1cmVzIGFuZCBsb2FkaW5nIHRoZW0gaW50byBhIGByZWZgLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiB1c2VQYW5HZXN0dXJlKF9hLCByZWYpIHtcbiAgICB2YXIgb25QYW4gPSBfYS5vblBhbiwgb25QYW5TdGFydCA9IF9hLm9uUGFuU3RhcnQsIG9uUGFuRW5kID0gX2Eub25QYW5FbmQsIG9uUGFuU2Vzc2lvblN0YXJ0ID0gX2Eub25QYW5TZXNzaW9uU3RhcnQ7XG4gICAgdmFyIGhhc1BhbkV2ZW50cyA9IG9uUGFuIHx8IG9uUGFuU3RhcnQgfHwgb25QYW5FbmQgfHwgb25QYW5TZXNzaW9uU3RhcnQ7XG4gICAgdmFyIHBhblNlc3Npb24gPSB1c2VSZWYobnVsbCk7XG4gICAgdmFyIHRyYW5zZm9ybVBhZ2VQb2ludCA9IHVzZUNvbnRleHQoTW90aW9uQ29uZmlnQ29udGV4dCkudHJhbnNmb3JtUGFnZVBvaW50O1xuICAgIHZhciBoYW5kbGVycyA9IHtcbiAgICAgICAgb25TZXNzaW9uU3RhcnQ6IG9uUGFuU2Vzc2lvblN0YXJ0LFxuICAgICAgICBvblN0YXJ0OiBvblBhblN0YXJ0LFxuICAgICAgICBvbk1vdmU6IG9uUGFuLFxuICAgICAgICBvbkVuZDogZnVuY3Rpb24gKGV2ZW50LCBpbmZvKSB7XG4gICAgICAgICAgICBwYW5TZXNzaW9uLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICAgICAgb25QYW5FbmQgJiYgb25QYW5FbmQoZXZlbnQsIGluZm8pO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHBhblNlc3Npb24uY3VycmVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcGFuU2Vzc2lvbi5jdXJyZW50LnVwZGF0ZUhhbmRsZXJzKGhhbmRsZXJzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGZ1bmN0aW9uIG9uUG9pbnRlckRvd24oZXZlbnQpIHtcbiAgICAgICAgcGFuU2Vzc2lvbi5jdXJyZW50ID0gbmV3IFBhblNlc3Npb24oZXZlbnQsIGhhbmRsZXJzLCB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1QYWdlUG9pbnQ6IHRyYW5zZm9ybVBhZ2VQb2ludCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHVzZVBvaW50ZXJFdmVudChyZWYsIFwicG9pbnRlcmRvd25cIiwgaGFzUGFuRXZlbnRzICYmIG9uUG9pbnRlckRvd24pO1xuICAgIHVzZVVubW91bnRFZmZlY3QoZnVuY3Rpb24gKCkgeyByZXR1cm4gcGFuU2Vzc2lvbi5jdXJyZW50ICYmIHBhblNlc3Npb24uY3VycmVudC5lbmQoKTsgfSk7XG59XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgdHJhdmVyc2UgdXAgdGhlIHRyZWUgdG8gY2hlY2sgd2hldGhlciB0aGUgcHJvdmlkZWQgY2hpbGQgbm9kZVxuICogaXMgdGhlIHBhcmVudCBvciBhIGRlc2NlbmRhbnQgb2YgaXQuXG4gKlxuICogQHBhcmFtIHBhcmVudCAtIEVsZW1lbnQgdG8gZmluZFxuICogQHBhcmFtIGNoaWxkIC0gRWxlbWVudCB0byB0ZXN0IGFnYWluc3QgcGFyZW50XG4gKi9cbnZhciBpc05vZGVPckNoaWxkID0gZnVuY3Rpb24gKHBhcmVudCwgY2hpbGQpIHtcbiAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAocGFyZW50ID09PSBjaGlsZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBpc05vZGVPckNoaWxkKHBhcmVudCwgY2hpbGQucGFyZW50RWxlbWVudCk7XG4gICAgfVxufTtcblxudmFyIG9yZGVyJDEgPSBbXCJ3aGlsZUhvdmVyXCIsIFwid2hpbGVUYXBcIiwgXCJ3aGlsZURyYWdcIl07XG52YXIgZ2V0R2VzdHVyZVByaW9yaXR5ID0gZnVuY3Rpb24gKGdlc3R1cmUpIHtcbiAgICByZXR1cm4gb3JkZXIkMS5pbmRleE9mKGdlc3R1cmUpICsgMTtcbn07XG5cbnZhciB0YXBHZXN0dXJlUHJpb3JpdHkgPSBnZXRHZXN0dXJlUHJpb3JpdHkoXCJ3aGlsZVRhcFwiKTtcbi8qKlxuICogQHBhcmFtIGhhbmRsZXJzIC1cbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiB1c2VUYXBHZXN0dXJlKF9hLCB2aXN1YWxFbGVtZW50KSB7XG4gICAgdmFyIG9uVGFwID0gX2Eub25UYXAsIG9uVGFwU3RhcnQgPSBfYS5vblRhcFN0YXJ0LCBvblRhcENhbmNlbCA9IF9hLm9uVGFwQ2FuY2VsLCB3aGlsZVRhcCA9IF9hLndoaWxlVGFwO1xuICAgIHZhciBoYXNUYXBMaXN0ZW5lcnMgPSBvblRhcCB8fCBvblRhcFN0YXJ0IHx8IG9uVGFwQ2FuY2VsIHx8IHdoaWxlVGFwO1xuICAgIHZhciBpc1RhcHBpbmcgPSB1c2VSZWYoZmFsc2UpO1xuICAgIHZhciBjYW5jZWxQb2ludGVyRXZlbnRMaXN0ZW5lciA9IHVzZVJlZihudWxsKTtcbiAgICBmdW5jdGlvbiByZW1vdmVQb2ludGVyVXAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gY2FuY2VsUG9pbnRlckV2ZW50TGlzdGVuZXIuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwoY2FuY2VsUG9pbnRlckV2ZW50TGlzdGVuZXIpO1xuICAgICAgICBjYW5jZWxQb2ludGVyRXZlbnRMaXN0ZW5lci5jdXJyZW50ID0gbnVsbDtcbiAgICB9XG4gICAgd2hpbGVUYXAgJiYgc2V0T3ZlcnJpZGUodmlzdWFsRWxlbWVudCwgd2hpbGVUYXAsIHRhcEdlc3R1cmVQcmlvcml0eSk7XG4gICAgLy8gV2UgbG9hZCB0aGlzIGV2ZW50IGhhbmRsZXIgaW50byBhIHJlZiBzbyB3ZSBjYW4gbGF0ZXIgcmVmZXIgdG9cbiAgICAvLyBvblBvaW50ZXJVcC5jdXJyZW50IHdoaWNoIHdpbGwgYWx3YXlzIGhhdmUgcmVmZXJlbmNlIHRvIHRoZSBsYXRlc3QgcHJvcHNcbiAgICB2YXIgb25Qb2ludGVyVXAgPSB1c2VSZWYobnVsbCk7XG4gICAgb25Qb2ludGVyVXAuY3VycmVudCA9IGZ1bmN0aW9uIChldmVudCwgaW5mbykge1xuICAgICAgICB2YXIgZWxlbWVudCA9IHZpc3VhbEVsZW1lbnQuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgcmVtb3ZlUG9pbnRlclVwKCk7XG4gICAgICAgIGlmICghaXNUYXBwaW5nLmN1cnJlbnQgfHwgIWVsZW1lbnQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlzVGFwcGluZy5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIHdoaWxlVGFwICYmIGNsZWFyT3ZlcnJpZGUodmlzdWFsRWxlbWVudCwgdGFwR2VzdHVyZVByaW9yaXR5KTtcbiAgICAgICAgLy8gQ2hlY2sgdGhlIGdlc3R1cmUgbG9jayAtIGlmIHdlIGdldCBpdCwgaXQgbWVhbnMgbm8gZHJhZyBnZXN0dXJlIGlzIGFjdGl2ZVxuICAgICAgICAvLyBhbmQgd2UgY2FuIHNhZmVseSBmaXJlIHRoZSB0YXAgZ2VzdHVyZS5cbiAgICAgICAgdmFyIG9wZW5HZXN0dXJlTG9jayA9IGdldEdsb2JhbExvY2sodHJ1ZSk7XG4gICAgICAgIGlmICghb3Blbkdlc3R1cmVMb2NrKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBvcGVuR2VzdHVyZUxvY2soKTtcbiAgICAgICAgaWYgKCFpc05vZGVPckNoaWxkKGVsZW1lbnQsIGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIG9uVGFwQ2FuY2VsID09PSBudWxsIHx8IG9uVGFwQ2FuY2VsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvblRhcENhbmNlbChldmVudCwgaW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvblRhcCA9PT0gbnVsbCB8fCBvblRhcCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25UYXAoZXZlbnQsIGluZm8pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBvblBvaW50ZXJEb3duKGV2ZW50LCBpbmZvKSB7XG4gICAgICAgIHJlbW92ZVBvaW50ZXJVcCgpO1xuICAgICAgICBjYW5jZWxQb2ludGVyRXZlbnRMaXN0ZW5lci5jdXJyZW50ID0gcGlwZShhZGRQb2ludGVyRXZlbnQod2luZG93LCBcInBvaW50ZXJ1cFwiLCBmdW5jdGlvbiAoZXZlbnQsIGluZm8pIHsgdmFyIF9hOyByZXR1cm4gKF9hID0gb25Qb2ludGVyVXAuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwob25Qb2ludGVyVXAsIGV2ZW50LCBpbmZvKTsgfSksIGFkZFBvaW50ZXJFdmVudCh3aW5kb3csIFwicG9pbnRlcmNhbmNlbFwiLCBmdW5jdGlvbiAoZXZlbnQsIGluZm8pIHsgdmFyIF9hOyByZXR1cm4gKF9hID0gb25Qb2ludGVyVXAuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwob25Qb2ludGVyVXAsIGV2ZW50LCBpbmZvKTsgfSkpO1xuICAgICAgICB2YXIgZWxlbWVudCA9IHZpc3VhbEVsZW1lbnQuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgaWYgKCFlbGVtZW50IHx8IGlzVGFwcGluZy5jdXJyZW50KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpc1RhcHBpbmcuY3VycmVudCA9IHRydWU7XG4gICAgICAgIG9uVGFwU3RhcnQgPT09IG51bGwgfHwgb25UYXBTdGFydCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25UYXBTdGFydChldmVudCwgaW5mbyk7XG4gICAgICAgIHdoaWxlVGFwICYmIHN0YXJ0T3ZlcnJpZGUodmlzdWFsRWxlbWVudCwgdGFwR2VzdHVyZVByaW9yaXR5KTtcbiAgICB9XG4gICAgdXNlUG9pbnRlckV2ZW50KHZpc3VhbEVsZW1lbnQsIFwicG9pbnRlcmRvd25cIiwgaGFzVGFwTGlzdGVuZXJzID8gb25Qb2ludGVyRG93biA6IHVuZGVmaW5lZCk7XG4gICAgdXNlVW5tb3VudEVmZmVjdChyZW1vdmVQb2ludGVyVXApO1xufVxuXG52YXIgaG92ZXJQcmlvcml0eSA9IGdldEdlc3R1cmVQcmlvcml0eShcIndoaWxlSG92ZXJcIik7XG52YXIgZmlsdGVyVG91Y2ggPSBmdW5jdGlvbiAobGlzdGVuZXIpIHsgcmV0dXJuIGZ1bmN0aW9uIChldmVudCwgaW5mbykge1xuICAgIGlmIChpc01vdXNlRXZlbnQoZXZlbnQpKVxuICAgICAgICBsaXN0ZW5lcihldmVudCwgaW5mbyk7XG59OyB9O1xuLyoqXG4gKlxuICogQHBhcmFtIHByb3BzXG4gKiBAcGFyYW0gcmVmXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gdXNlSG92ZXJHZXN0dXJlKF9hLCB2aXN1YWxFbGVtZW50KSB7XG4gICAgdmFyIHdoaWxlSG92ZXIgPSBfYS53aGlsZUhvdmVyLCBvbkhvdmVyU3RhcnQgPSBfYS5vbkhvdmVyU3RhcnQsIG9uSG92ZXJFbmQgPSBfYS5vbkhvdmVyRW5kO1xuICAgIGlmICh3aGlsZUhvdmVyKSB7XG4gICAgICAgIHNldE92ZXJyaWRlKHZpc3VhbEVsZW1lbnQsIHdoaWxlSG92ZXIsIGhvdmVyUHJpb3JpdHkpO1xuICAgIH1cbiAgICB1c2VQb2ludGVyRXZlbnQodmlzdWFsRWxlbWVudCwgXCJwb2ludGVyZW50ZXJcIiwgZmlsdGVyVG91Y2goZnVuY3Rpb24gKGV2ZW50LCBpbmZvKSB7XG4gICAgICAgIG9uSG92ZXJTdGFydCA9PT0gbnVsbCB8fCBvbkhvdmVyU3RhcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uSG92ZXJTdGFydChldmVudCwgaW5mbyk7XG4gICAgICAgIHdoaWxlSG92ZXIgJiYgc3RhcnRPdmVycmlkZSh2aXN1YWxFbGVtZW50LCBob3ZlclByaW9yaXR5KTtcbiAgICB9KSk7XG4gICAgdXNlUG9pbnRlckV2ZW50KHZpc3VhbEVsZW1lbnQsIFwicG9pbnRlcmxlYXZlXCIsIGZpbHRlclRvdWNoKGZ1bmN0aW9uIChldmVudCwgaW5mbykge1xuICAgICAgICBvbkhvdmVyRW5kID09PSBudWxsIHx8IG9uSG92ZXJFbmQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uSG92ZXJFbmQoZXZlbnQsIGluZm8pO1xuICAgICAgICB3aGlsZUhvdmVyICYmIGNsZWFyT3ZlcnJpZGUodmlzdWFsRWxlbWVudCwgaG92ZXJQcmlvcml0eSk7XG4gICAgfSkpO1xufVxuXG4vKipcbiAqIEFkZCBwYW4gYW5kIHRhcCBnZXN0dXJlIHJlY29nbml0aW9uIHRvIGFuIGVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHByb3BzIC0gR2VzdHVyZSBldmVudCBoYW5kbGVyc1xuICogQHBhcmFtIHJlZiAtIFJlYWN0IGByZWZgIGNvbnRhaW5pbmcgYSBET00gYEVsZW1lbnRgXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHVzZUdlc3R1cmVzKHByb3BzLCB2aXN1YWxFbGVtZW50KSB7XG4gICAgdXNlUGFuR2VzdHVyZShwcm9wcywgdmlzdWFsRWxlbWVudCk7XG4gICAgdXNlVGFwR2VzdHVyZShwcm9wcywgdmlzdWFsRWxlbWVudCk7XG4gICAgdXNlSG92ZXJHZXN0dXJlKHByb3BzLCB2aXN1YWxFbGVtZW50KTtcbn1cblxudmFyIGdlc3R1cmVQcm9wcyA9IFtcbiAgICBcIm9uUGFuXCIsXG4gICAgXCJvblBhblN0YXJ0XCIsXG4gICAgXCJvblBhbkVuZFwiLFxuICAgIFwib25QYW5TZXNzaW9uU3RhcnRcIixcbiAgICBcIm9uVGFwXCIsXG4gICAgXCJvblRhcFN0YXJ0XCIsXG4gICAgXCJvblRhcENhbmNlbFwiLFxuICAgIFwid2hpbGVUYXBcIixcbiAgICBcIndoaWxlSG92ZXJcIixcbiAgICBcIm9uSG92ZXJTdGFydFwiLFxuICAgIFwib25Ib3ZlckVuZFwiLFxuXTtcbnZhciBHZXN0dXJlQ29tcG9uZW50ID0gbWFrZVJlbmRlcmxlc3NDb21wb25lbnQoZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHZpc3VhbEVsZW1lbnQgPSBfYS52aXN1YWxFbGVtZW50LCBwcm9wcyA9IF9fcmVzdChfYSwgW1widmlzdWFsRWxlbWVudFwiXSk7XG4gICAgdXNlR2VzdHVyZXMocHJvcHMsIHZpc3VhbEVsZW1lbnQpO1xufSk7XG4vKipcbiAqIEBwdWJsaWNcbiAqL1xudmFyIEdlc3R1cmVzID0ge1xuICAgIGtleTogXCJnZXN0dXJlc1wiLFxuICAgIHNob3VsZFJlbmRlcjogZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBnZXN0dXJlUHJvcHMuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpOyB9KTtcbiAgICB9LFxuICAgIGdldENvbXBvbmVudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gR2VzdHVyZUNvbXBvbmVudDsgfSxcbn07XG5cbi8qKlxuICogQ29udHJvbCBhbmltYXRpb25zIG9uIG9uZSBvciBtb3JlIGNvbXBvbmVudHMuXG4gKlxuICogQHB1YmxpY1xuICovXG52YXIgQW5pbWF0aW9uQ29udHJvbHMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQW5pbWF0aW9uQ29udHJvbHMoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcmFjayB3aGV0aGVyIHRoZSBob3N0IGNvbXBvbmVudCBoYXMgbW91bnRlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmhhc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBlbmRpbmcgYW5pbWF0aW9ucyB0aGF0IGFyZSBzdGFydGVkIGJlZm9yZSBhIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAaW50ZXJuYWxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucGVuZGluZ0FuaW1hdGlvbnMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgY29sbGVjdGlvbiBvZiBsaW5rZWQgY29tcG9uZW50IGFuaW1hdGlvbiBjb250cm9scy5cbiAgICAgICAgICpcbiAgICAgICAgICogQGludGVybmFsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnN1YnNjcmliZXJzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIGEgY29tcG9uZW50J3MgYW5pbWF0aW9uIGNvbnRyb2xzIHRvIHRoaXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29udHJvbHMgLSBUaGUgY29udHJvbHMgdG8gc3Vic2NyaWJlXG4gICAgICogQHJldHVybnMgQW4gdW5zdWJzY3JpYmUgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBBbmltYXRpb25Db250cm9scy5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKHZpc3VhbEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVycy5hZGQodmlzdWFsRWxlbWVudCk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zdWJzY3JpYmVycy5kZWxldGUodmlzdWFsRWxlbWVudCk7IH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdGFydHMgYW4gYW5pbWF0aW9uIG9uIGFsbCBsaW5rZWQgY29tcG9uZW50cy5cbiAgICAgKlxuICAgICAqIEByZW1hcmtzXG4gICAgICpcbiAgICAgKiBgYGBqc3hcbiAgICAgKiBjb250cm9scy5zdGFydChcInZhcmlhbnRMYWJlbFwiKVxuICAgICAqIGNvbnRyb2xzLnN0YXJ0KHtcbiAgICAgKiAgIHg6IDAsXG4gICAgICogICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAxIH1cbiAgICAgKiB9KVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHBhcmFtIGRlZmluaXRpb24gLSBQcm9wZXJ0aWVzIG9yIHZhcmlhbnQgbGFiZWwgdG8gYW5pbWF0ZSB0b1xuICAgICAqIEBwYXJhbSB0cmFuc2l0aW9uIC0gT3B0aW9uYWwgYHRyYW5zdGlvbmAgdG8gYXBwbHkgdG8gYSB2YXJpYW50XG4gICAgICogQHJldHVybnMgLSBBIGBQcm9taXNlYCB0aGF0IHJlc29sdmVzIHdoZW4gYWxsIGFuaW1hdGlvbnMgaGF2ZSBjb21wbGV0ZWQuXG4gICAgICpcbiAgICAgKiBAcHVibGljXG4gICAgICovXG4gICAgQW5pbWF0aW9uQ29udHJvbHMucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKGRlZmluaXRpb24sIHRyYW5zaXRpb25PdmVycmlkZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5oYXNNb3VudGVkKSB7XG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uc18xID0gW107XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHZpc3VhbEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gc3RhcnRWaXN1YWxFbGVtZW50QW5pbWF0aW9uKHZpc3VhbEVsZW1lbnQsIGRlZmluaXRpb24sIHsgdHJhbnNpdGlvbk92ZXJyaWRlOiB0cmFuc2l0aW9uT3ZlcnJpZGUgfSk7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uc18xLnB1c2goYW5pbWF0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGFuaW1hdGlvbnNfMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5wZW5kaW5nQW5pbWF0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBbZGVmaW5pdGlvbiwgdHJhbnNpdGlvbk92ZXJyaWRlXSxcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbnN0YW50bHkgc2V0IHRvIGEgc2V0IG9mIHByb3BlcnRpZXMgb3IgYSB2YXJpYW50LlxuICAgICAqXG4gICAgICogYGBganN4XG4gICAgICogLy8gV2l0aCBwcm9wZXJ0aWVzXG4gICAgICogY29udHJvbHMuc2V0KHsgb3BhY2l0eTogMCB9KVxuICAgICAqXG4gICAgICogLy8gV2l0aCB2YXJpYW50c1xuICAgICAqIGNvbnRyb2xzLnNldChcImhpZGRlblwiKVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQGludGVybmFscmVtYXJrc1xuICAgICAqIFdlIGNvdWxkIHBlcmZvcm0gYSBzaW1pbGFyIHRyaWNrIHRvIGAuc3RhcnRgIHdoZXJlIHRoaXMgY2FuIGJlIGNhbGxlZCBiZWZvcmUgbW91bnRcbiAgICAgKiBhbmQgd2UgbWFpbnRhaW4gYSBsaXN0IG9mIG9mIHBlbmRpbmcgYWN0aW9ucyB0aGF0IGdldCBhcHBsaWVkIG9uIG1vdW50LiBCdXQgdGhlXG4gICAgICogZXhwZWN0YXRpb24gb2YgYHNldGAgaXMgdGhhdCBpdCBoYXBwZW5zIHN5bmNocm9ub3VzbHkgYW5kIHRoaXMgd291bGQgYmUgZGlmZmljdWx0XG4gICAgICogdG8gZG8gYmVmb3JlIGFueSBjaGlsZHJlbiBoYXZlIGV2ZW4gYXR0YWNoZWQgdGhlbXNlbHZlcy4gSXQncyBhbHNvIHBvb3IgcHJhY3Rpc2VcbiAgICAgKiBhbmQgd2Ugc2hvdWxkIGRpc2NvdXJhZ2UgcmVuZGVyLXN5bmNocm9ub3VzIGAuc3RhcnRgIGNhbGxzIHJhdGhlciB0aGFuIGxlYW4gaW50byB0aGlzLlxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIEFuaW1hdGlvbkNvbnRyb2xzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoZGVmaW5pdGlvbikge1xuICAgICAgICBpbnZhcmlhbnQodGhpcy5oYXNNb3VudGVkLCBcImNvbnRyb2xzLnNldCgpIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBhZnRlciBhIGNvbXBvbmVudCBoYXMgbW91bnRlZC4gQ29uc2lkZXIgY2FsbGluZyB3aXRoaW4gYSB1c2VFZmZlY3QgaG9vay5cIik7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHZpc3VhbEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHNldFZhbHVlcyh2aXN1YWxFbGVtZW50LCBkZWZpbml0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdG9wcyBhbmltYXRpb25zIG9uIGFsbCBsaW5rZWQgY29tcG9uZW50cy5cbiAgICAgKlxuICAgICAqIGBgYGpzeFxuICAgICAqIGNvbnRyb2xzLnN0b3AoKVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogQHB1YmxpY1xuICAgICAqL1xuICAgIEFuaW1hdGlvbkNvbnRyb2xzLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN1YnNjcmliZXJzLmZvckVhY2goZnVuY3Rpb24gKHZpc3VhbEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHN0b3BBbmltYXRpb24odmlzdWFsRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZXMgdGhlIGFuaW1hdGlvbiBjb250cm9scy5cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEFuaW1hdGlvbkNvbnRyb2xzLnByb3RvdHlwZS5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5oYXNNb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wZW5kaW5nQW5pbWF0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbiA9IF9hLmFuaW1hdGlvbiwgcmVzb2x2ZSA9IF9hLnJlc29sdmU7XG4gICAgICAgICAgICBfdGhpcy5zdGFydC5hcHBseShfdGhpcywgX19zcHJlYWQoYW5pbWF0aW9uKSkudGhlbihyZXNvbHZlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdG9wcyBhbGwgY2hpbGQgYW5pbWF0aW9ucyB3aGVuIHRoZSBob3N0IGNvbXBvbmVudCB1bm1vdW50cy5cbiAgICAgKlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIEFuaW1hdGlvbkNvbnRyb2xzLnByb3RvdHlwZS51bm1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmhhc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgfTtcbiAgICByZXR1cm4gQW5pbWF0aW9uQ29udHJvbHM7XG59KCkpO1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xudmFyIGFuaW1hdGlvbkNvbnRyb2xzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IEFuaW1hdGlvbkNvbnRyb2xzKCk7IH07XG5cbnZhciBFeGl0Q29tcG9uZW50ID0gbWFrZVJlbmRlcmxlc3NDb21wb25lbnQoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGFuaW1hdGUgPSBwcm9wcy5hbmltYXRlLCBleGl0ID0gcHJvcHMuZXhpdCwgdmlzdWFsRWxlbWVudCA9IHByb3BzLnZpc3VhbEVsZW1lbnQ7XG4gICAgdmFyIF9hID0gX19yZWFkKHVzZVByZXNlbmNlKCksIDIpLCBpc1ByZXNlbnQgPSBfYVswXSwgb25FeGl0Q29tcGxldGUgPSBfYVsxXTtcbiAgICB2YXIgcHJlc2VuY2VDb250ZXh0ID0gdXNlQ29udGV4dChQcmVzZW5jZUNvbnRleHQpO1xuICAgIHZhciBpc1BsYXlpbmdFeGl0QW5pbWF0aW9uID0gdXNlUmVmKGZhbHNlKTtcbiAgICB2YXIgY3VzdG9tID0gKHByZXNlbmNlQ29udGV4dCA9PT0gbnVsbCB8fCBwcmVzZW5jZUNvbnRleHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByZXNlbmNlQ29udGV4dC5jdXN0b20pICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBwcmVzZW5jZUNvbnRleHQuY3VzdG9tXG4gICAgICAgIDogcHJvcHMuY3VzdG9tO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNQcmVzZW50KSB7XG4gICAgICAgICAgICBpZiAoIWlzUGxheWluZ0V4aXRBbmltYXRpb24uY3VycmVudCAmJiBleGl0KSB7XG4gICAgICAgICAgICAgICAgc3RhcnRWaXN1YWxFbGVtZW50QW5pbWF0aW9uKHZpc3VhbEVsZW1lbnQsIGV4aXQsIHtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tOiBjdXN0b20sXG4gICAgICAgICAgICAgICAgfSkudGhlbihvbkV4aXRDb21wbGV0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc1BsYXlpbmdFeGl0QW5pbWF0aW9uLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzUGxheWluZ0V4aXRBbmltYXRpb24uY3VycmVudCAmJlxuICAgICAgICAgICAgYW5pbWF0ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIGFuaW1hdGUgIT09IFwiYm9vbGVhblwiICYmXG4gICAgICAgICAgICAhKGFuaW1hdGUgaW5zdGFuY2VvZiBBbmltYXRpb25Db250cm9scykpIHtcbiAgICAgICAgICAgIHN0YXJ0VmlzdWFsRWxlbWVudEFuaW1hdGlvbih2aXN1YWxFbGVtZW50LCBhbmltYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQcmVzZW50KSB7XG4gICAgICAgICAgICBpc1BsYXlpbmdFeGl0QW5pbWF0aW9uLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sIFthbmltYXRlLCBjdXN0b20sIGV4aXQsIGlzUHJlc2VudCwgb25FeGl0Q29tcGxldGUsIHByb3BzXSk7XG59KTtcbi8qKlxuICogQHB1YmxpY1xuICovXG52YXIgRXhpdCA9IHtcbiAgICBrZXk6IFwiZXhpdFwiLFxuICAgIHNob3VsZFJlbmRlcjogZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiAhIXByb3BzLmV4aXQgJiYgIWNoZWNrU2hvdWxkSW5oZXJpdFZhcmlhbnQocHJvcHMpOyB9LFxuICAgIGdldENvbXBvbmVudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gRXhpdENvbXBvbmVudDsgfSxcbn07XG5cbmZ1bmN0aW9uIHNoYWxsb3dDb21wYXJlKG5leHQsIHByZXYpIHtcbiAgICBpZiAocHJldiA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBwcmV2TGVuZ3RoID0gcHJldi5sZW5ndGg7XG4gICAgaWYgKHByZXZMZW5ndGggIT09IG5leHQubGVuZ3RoKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmV2TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHByZXZbaV0gIT09IG5leHRbaV0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG52YXIgaGFzVXBkYXRlZCA9IGZ1bmN0aW9uIChwcmV2LCBuZXh0KSB7XG4gICAgcmV0dXJuIChuZXh0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgKEFycmF5LmlzQXJyYXkocHJldikgJiYgQXJyYXkuaXNBcnJheShuZXh0KVxuICAgICAgICAgICAgPyAhc2hhbGxvd0NvbXBhcmUobmV4dCwgcHJldilcbiAgICAgICAgICAgIDogcHJldiAhPT0gbmV4dCkpO1xufTtcbmZ1bmN0aW9uIHRhcmdldFdpdGhvdXRUcmFuc2l0aW9uKF9hLCBtZXJnZVRyYW5zaXRpb25FbmQpIHtcbiAgICBpZiAobWVyZ2VUcmFuc2l0aW9uRW5kID09PSB2b2lkIDApIHsgbWVyZ2VUcmFuc2l0aW9uRW5kID0gZmFsc2U7IH1cbiAgICB2YXIgdHJhbnNpdGlvbiA9IF9hLnRyYW5zaXRpb24sIHRyYW5zaXRpb25FbmQgPSBfYS50cmFuc2l0aW9uRW5kLCB0YXJnZXQgPSBfX3Jlc3QoX2EsIFtcInRyYW5zaXRpb25cIiwgXCJ0cmFuc2l0aW9uRW5kXCJdKTtcbiAgICByZXR1cm4gbWVyZ2VUcmFuc2l0aW9uRW5kXG4gICAgICAgID8gX19hc3NpZ24oX19hc3NpZ24oe30sIHRhcmdldCksIHRyYW5zaXRpb25FbmQpXG4gICAgICAgIDogdGFyZ2V0O1xufVxuLyoqXG4gKiBIYW5kbGUgdGhlIGBhbmltYXRlYCBwcm9wIHdoZW4gaXRzIGFuIG9iamVjdCBvZiB2YWx1ZXMsIGllOlxuICpcbiAqIGBgYGpzeFxuICogPG1vdGlvbi5kaXYgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19IC8+XG4gKiBgYGBcbiAqXG4gKiBAaW50ZXJuYWxyZW1hcmtzXG4gKiBJdCBtaWdodCBiZSB3b3J0aCBjb25zb2xpZGF0aW5nIHRoaXMgd2l0aCBgdXNlLXZhcmlhbnRzYFxuICpcbiAqIGBgYGpzeFxuICogPG1vdGlvbi5kaXYgYW5pbWF0ZT1cInZpc2libGVcIiAvPlxuICogYGBgXG4gKlxuICogQHBhcmFtIHRhcmdldFxuICogQHBhcmFtIGNvbnRyb2xzXG4gKiBAcGFyYW0gdmFsdWVzXG4gKiBAcGFyYW0gdHJhbnNpdGlvblxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiB1c2VBbmltYXRlUHJvcCh2aXN1YWxFbGVtZW50LCB0YXJnZXRBbmRUcmFuc2l0aW9uLCBkZWZhdWx0VHJhbnNpdGlvbikge1xuICAgIHZhciBpc0luaXRpYWxSZW5kZXIgPSB1c2VSZWYodHJ1ZSk7XG4gICAgdmFyIHByZXZWYWx1ZXMgPSB1c2VSZWYobnVsbCk7XG4gICAgaWYgKCFwcmV2VmFsdWVzLmN1cnJlbnQpIHtcbiAgICAgICAgcHJldlZhbHVlcy5jdXJyZW50ID0gdGFyZ2V0V2l0aG91dFRyYW5zaXRpb24odGFyZ2V0QW5kVHJhbnNpdGlvbiwgdHJ1ZSk7XG4gICAgfVxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0YXJnZXRUb0FuaW1hdGUgPSB7fTtcbiAgICAgICAgLy8gVGhlc2UgYXJlIHRoZSB2YWx1ZXMgd2UncmUgYWN0dWFsbHkgYW5pbWF0aW5nXG4gICAgICAgIHZhciBhbmltYXRpbmdUYXJnZXQgPSB0YXJnZXRXaXRob3V0VHJhbnNpdGlvbih0YXJnZXRBbmRUcmFuc2l0aW9uKTtcbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgdGFyZ2V0IGFzIGl0J2xsIGJlIG9uY2UgdHJhbnNpdGlvbkVuZCB2YWx1ZXMgYXJlIGFwcGxpZWRcbiAgICAgICAgdmFyIGZpbmFsVGFyZ2V0ID0gdGFyZ2V0V2l0aG91dFRyYW5zaXRpb24odGFyZ2V0QW5kVHJhbnNpdGlvbiwgdHJ1ZSk7XG4gICAgICAgIC8vIERldGVjdCB3aGljaCB2YWx1ZXMgaGF2ZSBjaGFuZ2VkIGJldHdlZW4gcmVuZGVyc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYW5pbWF0aW5nVGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBUaGlzIHZhbHVlIHNob3VsZCBhbmltYXRlIG9uIG1vdW50IGlmIHRoaXMgdmFsdWUgZG9lc24ndCBhbHJlYWR5IGV4aXN0ICh3YXNuJ3RcbiAgICAgICAgICAgIC8vIGRlZmluZWQgaW4gYHN0eWxlYCBvciBgaW5pdGlhbGApIG9yIGlmIGl0IGRvZXMgZXhpc3QgYW5kIGl0J3MgYWxyZWFkeSBjaGFuZ2VkLlxuICAgICAgICAgICAgdmFyIHNob3VsZEFuaW1hdGVPbk1vdW50ID0gaXNJbml0aWFsUmVuZGVyLmN1cnJlbnQgJiZcbiAgICAgICAgICAgICAgICAoIXZpc3VhbEVsZW1lbnQuaGFzVmFsdWUoa2V5KSB8fFxuICAgICAgICAgICAgICAgICAgICB2aXN1YWxFbGVtZW50LmdldFZhbHVlKGtleSkuZ2V0KCkgIT09IGZpbmFsVGFyZ2V0W2tleV0pO1xuICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBoYXMgdXBkYXRlZCBiZXR3ZWVuIHJlbmRlcnMgb3IgaXQncyB3ZSdyZSBhbmltYXRpbmcgdGhpcyB2YWx1ZSBvbiBtb3VudCxcbiAgICAgICAgICAgIC8vIGFkZCBpdCB0byB0aGUgYW5pbWF0ZSB0YXJnZXQuXG4gICAgICAgICAgICB2YXIgaXNWYWxpZFZhbHVlID0gZmluYWxUYXJnZXRba2V5XSAhPT0gbnVsbDtcbiAgICAgICAgICAgIHZhciB2YWx1ZUhhc1VwZGF0ZWQgPSBoYXNVcGRhdGVkKHByZXZWYWx1ZXMuY3VycmVudFtrZXldLCBmaW5hbFRhcmdldFtrZXldKTtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkVmFsdWUgJiYgKHZhbHVlSGFzVXBkYXRlZCB8fCBzaG91bGRBbmltYXRlT25Nb3VudCkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRUb0FuaW1hdGVba2V5XSA9IGFuaW1hdGluZ1RhcmdldFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlzSW5pdGlhbFJlbmRlci5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIHByZXZWYWx1ZXMuY3VycmVudCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcmV2VmFsdWVzLmN1cnJlbnQpLCBmaW5hbFRhcmdldCk7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0YXJnZXRUb0FuaW1hdGUpLmxlbmd0aCkge1xuICAgICAgICAgICAgc3RhcnRWaXN1YWxFbGVtZW50QW5pbWF0aW9uKHZpc3VhbEVsZW1lbnQsIF9fYXNzaWduKF9fYXNzaWduKHt9LCB0YXJnZXRUb0FuaW1hdGUpLCB7IHRyYW5zaXRpb246IHRhcmdldEFuZFRyYW5zaXRpb24udHJhbnNpdGlvbiB8fCBkZWZhdWx0VHJhbnNpdGlvbiwgdHJhbnNpdGlvbkVuZDogdGFyZ2V0QW5kVHJhbnNpdGlvbi50cmFuc2l0aW9uRW5kIH0pKTtcbiAgICAgICAgfVxuICAgIH0sIFt0YXJnZXRBbmRUcmFuc2l0aW9uXSk7XG59XG5cbnZhciBsYWJlbHNUb0FycmF5ID0gZnVuY3Rpb24gKGxhYmVsKSB7XG4gICAgaWYgKCFsYWJlbCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGxhYmVsKSkge1xuICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuICAgIHJldHVybiBbbGFiZWxdO1xufTtcbnZhciByZXNvbHZlVmFyaWFudExhYmVscyA9IGZ1bmN0aW9uICh2YXJpYW50KSB7XG4gICAgdmFyIHVucmVzb2x2ZWRWYXJpYW50ID0gdmFyaWFudCBpbnN0YW5jZW9mIE1vdGlvblZhbHVlID8gdmFyaWFudC5nZXQoKSA6IHZhcmlhbnQ7XG4gICAgcmV0dXJuIEFycmF5LmZyb20obmV3IFNldChsYWJlbHNUb0FycmF5KHVucmVzb2x2ZWRWYXJpYW50KSkpO1xufTtcbi8qKlxuICogSG9va3MgaW4gUmVhY3Qgc29tZXRpbWVzIGFjY2VwdCBhIGRlcGVuZGVuY3kgYXJyYXkgYXMgdGhlaXIgZmluYWwgYXJndW1lbnQuIChpZSB1c2VFZmZlY3QvdXNlTWVtbylcbiAqIFdoZW4gdmFsdWVzIGluIHRoaXMgYXJyYXkgY2hhbmdlLCBSZWFjdCByZS1ydW5zIHRoZSBkZXBlbmRlbmN5LiBIb3dldmVyIGlmIHRoZSBhcnJheVxuICogY29udGFpbnMgYSB2YXJpYWJsZSBudW1iZXIgb2YgaXRlbXMsIFJlYWN0IHRocm93cyBhbiBlcnJvci5cbiAqL1xudmFyIGFzRGVwZW5kZW5jeUxpc3QgPSBmdW5jdGlvbiAobGlzdCkgeyByZXR1cm4gW1xuICAgIGxpc3Quam9pbihcIixcIiksXG5dOyB9O1xuXG52YXIgaGFzVmFyaWFudENoYW5nZWQgPSBmdW5jdGlvbiAob2xkVmFyaWFudCwgbmV3VmFyaWFudCkge1xuICAgIHJldHVybiBvbGRWYXJpYW50LmpvaW4oXCIsXCIpICE9PSBuZXdWYXJpYW50LmpvaW4oXCIsXCIpO1xufTtcbi8qKlxuICogSGFuZGxlIHZhcmlhbnRzIGFuZCB0aGUgYGFuaW1hdGVgIHByb3Agd2hlbiBpdHMgc2V0IGFzIHZhcmlhbnQgbGFiZWxzLlxuICpcbiAqIEBwYXJhbSBpbml0aWFsIC0gSW5pdGlhbCB2YXJpYW50KHMpXG4gKiBAcGFyYW0gYW5pbWF0ZSAtIFZhcmlhbnQocykgdG8gYW5pbWF0ZSB0b1xuICogQHBhcmFtIGluaGVyaXQgLSBgdHJ1ZWAgaXMgaW5oZXJpdGluZyBhbmltYXRpb25zIGZyb20gcGFyZW50XG4gKiBAcGFyYW0gY29udHJvbHMgLSBBbmltYXRpb24gY29udHJvbHNcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gdXNlVmFyaWFudEFuaW1hdGlvbnModmlzdWFsRWxlbWVudCwgaW5pdGlhbCwgYW5pbWF0ZSwgaW5oZXJpdCkge1xuICAgIHZhciBfYTtcbiAgICB2YXIgdGFyZ2V0VmFyaWFudHMgPSByZXNvbHZlVmFyaWFudExhYmVscyhhbmltYXRlKTtcbiAgICB2YXIgY29udGV4dCA9IHVzZVZhcmlhbnRDb250ZXh0KCk7XG4gICAgdmFyIHBhcmVudEFscmVhZHlNb3VudGVkID0gKF9hID0gY29udGV4dC5wYXJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pc01vdW50ZWQ7XG4gICAgdmFyIGhhc01vdW50ZWQgPSB1c2VSZWYoZmFsc2UpO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzaG91bGRBbmltYXRlID0gZmFsc2U7XG4gICAgICAgIGlmIChpbmhlcml0KSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBpbmhlcml0aW5nIHZhcmlhbnQgY2hhbmdlcyBhbmQgdGhlIHBhcmVudCBoYXMgYWxyZWFkeVxuICAgICAgICAgICAgLy8gbW91bnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGxvYWRzLCB3ZSBuZWVkIHRvIG1hbnVhbGx5IHRyaWdnZXJcbiAgICAgICAgICAgIC8vIHRoaXMgYW5pbWF0aW9uLlxuICAgICAgICAgICAgc2hvdWxkQW5pbWF0ZSA9ICEhcGFyZW50QWxyZWFkeU1vdW50ZWQ7XG4gICAgICAgICAgICB0YXJnZXRWYXJpYW50cyA9IHJlc29sdmVWYXJpYW50TGFiZWxzKGNvbnRleHQuYW5pbWF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzaG91bGRBbmltYXRlID1cbiAgICAgICAgICAgICAgICBoYXNNb3VudGVkLmN1cnJlbnQgfHxcbiAgICAgICAgICAgICAgICAgICAgaGFzVmFyaWFudENoYW5nZWQocmVzb2x2ZVZhcmlhbnRMYWJlbHMoaW5pdGlhbCksIHRhcmdldFZhcmlhbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBzaG91bGRBbmltYXRlICYmXG4gICAgICAgICAgICBzdGFydFZpc3VhbEVsZW1lbnRBbmltYXRpb24odmlzdWFsRWxlbWVudCwgdGFyZ2V0VmFyaWFudHMpO1xuICAgICAgICBoYXNNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgIH0sIGFzRGVwZW5kZW5jeUxpc3QodGFyZ2V0VmFyaWFudHMpKTtcbn1cblxuLyoqXG4gKiBgdXNlQW5pbWF0aW9uR3JvdXBTdWJzY3JpcHRpb25gIGFsbG93cyBhIGNvbXBvbmVudCB0byBzdWJzY3JpYmUgdG8gYW5cbiAqIGV4dGVybmFsbHktY3JlYXRlZCBgQW5pbWF0aW9uQ29udHJvbHNgLCBjcmVhdGVkIGJ5IHRoZSBgdXNlQW5pbWF0aW9uYCBob29rLlxuICpcbiAqIEBwYXJhbSBhbmltYXRpb25cbiAqIEBwYXJhbSBjb250cm9sc1xuICpcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiB1c2VBbmltYXRpb25Hcm91cFN1YnNjcmlwdGlvbih2aXN1YWxFbGVtZW50LCBhbmltYXRpb24pIHtcbiAgICB2YXIgdW5zdWJzY3JpYmUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFuaW1hdGlvbi5zdWJzY3JpYmUodmlzdWFsRWxlbWVudCk7IH0sIFtcbiAgICAgICAgYW5pbWF0aW9uLFxuICAgIF0pO1xuICAgIHVzZVVubW91bnRFZmZlY3QoZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5zdWJzY3JpYmUgPT09IG51bGwgfHwgdW5zdWJzY3JpYmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHVuc3Vic2NyaWJlKCk7IH0pO1xufVxuXG52YXIgdGFyZ2V0ID0ge1xuICAgIHNob3VsZFJlbmRlcjogZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBwcm9wcy5hbmltYXRlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICFpc1ZhcmlhbnRMYWJlbChwcm9wcy5hbmltYXRlKSAmJlxuICAgICAgICAgICAgIWlzQW5pbWF0aW9uQ29udHJvbHMocHJvcHMuYW5pbWF0ZSk7XG4gICAgfSxcbiAgICBDb21wb25lbnQ6IG1ha2VSZW5kZXJsZXNzQ29tcG9uZW50KGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgYW5pbWF0ZSA9IF9hLmFuaW1hdGUsIHZpc3VhbEVsZW1lbnQgPSBfYS52aXN1YWxFbGVtZW50LCB0cmFuc2l0aW9uID0gX2EudHJhbnNpdGlvbjtcbiAgICAgICAgcmV0dXJuIHVzZUFuaW1hdGVQcm9wKHZpc3VhbEVsZW1lbnQsIGFuaW1hdGUsIHRyYW5zaXRpb24pO1xuICAgIH0pLFxufTtcbnZhciB2YXJpYW50ID0ge1xuICAgIHNob3VsZFJlbmRlcjogZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgIHJldHVybiAocHJvcHMudmFyaWFudHMgJiYgIWlzQW5pbWF0aW9uQ29udHJvbHMocHJvcHMuYW5pbWF0ZSkpIHx8XG4gICAgICAgICAgICBpc1ZhcmlhbnRMYWJlbChwcm9wcy5hbmltYXRlKTtcbiAgICB9LFxuICAgIENvbXBvbmVudDogbWFrZVJlbmRlcmxlc3NDb21wb25lbnQoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBhbmltYXRlID0gX2EuYW5pbWF0ZSwgX2IgPSBfYS5pbmhlcml0LCBpbmhlcml0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgdmlzdWFsRWxlbWVudCA9IF9hLnZpc3VhbEVsZW1lbnQsIGluaXRpYWwgPSBfYS5pbml0aWFsO1xuICAgICAgICByZXR1cm4gdXNlVmFyaWFudEFuaW1hdGlvbnModmlzdWFsRWxlbWVudCwgaW5pdGlhbCwgYW5pbWF0ZSwgaW5oZXJpdCk7XG4gICAgfSksXG59O1xudmFyIGNvbnRyb2xzID0ge1xuICAgIHNob3VsZFJlbmRlcjogZnVuY3Rpb24gKHByb3BzKSB7IHJldHVybiBpc0FuaW1hdGlvbkNvbnRyb2xzKHByb3BzLmFuaW1hdGUpOyB9LFxuICAgIENvbXBvbmVudDogbWFrZVJlbmRlcmxlc3NDb21wb25lbnQoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBhbmltYXRlID0gX2EuYW5pbWF0ZSwgdmlzdWFsRWxlbWVudCA9IF9hLnZpc3VhbEVsZW1lbnQ7XG4gICAgICAgIHJldHVybiB1c2VBbmltYXRpb25Hcm91cFN1YnNjcmlwdGlvbih2aXN1YWxFbGVtZW50LCBhbmltYXRlKTtcbiAgICB9KSxcbn07XG52YXIgZ2V0QW5pbWF0aW9uQ29tcG9uZW50ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgaWYgKHRhcmdldC5zaG91bGRSZW5kZXIocHJvcHMpKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQuQ29tcG9uZW50O1xuICAgIH1cbiAgICBlbHNlIGlmICh2YXJpYW50LnNob3VsZFJlbmRlcihwcm9wcykpIHtcbiAgICAgICAgcmV0dXJuIHZhcmlhbnQuQ29tcG9uZW50O1xuICAgIH1cbiAgICBlbHNlIGlmIChjb250cm9scy5zaG91bGRSZW5kZXIocHJvcHMpKSB7XG4gICAgICAgIHJldHVybiBjb250cm9scy5Db21wb25lbnQ7XG4gICAgfVxufTtcbi8qKlxuICogQHB1YmxpY1xuICovXG52YXIgQW5pbWF0aW9uID0ge1xuICAgIGtleTogXCJhbmltYXRpb25cIixcbiAgICBzaG91bGRSZW5kZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgZ2V0Q29tcG9uZW50OiBnZXRBbmltYXRpb25Db21wb25lbnQsXG59O1xuXG5mdW5jdGlvbiB0d2VlbkF4aXModGFyZ2V0LCBwcmV2LCBuZXh0LCBwKSB7XG4gICAgdGFyZ2V0Lm1pbiA9IG1peChwcmV2Lm1pbiwgbmV4dC5taW4sIHApO1xuICAgIHRhcmdldC5tYXggPSBtaXgocHJldi5tYXgsIG5leHQubWF4LCBwKTtcbn1cblxudmFyIHByb2dyZXNzVGFyZ2V0ID0gMTAwMDtcbnZhciBBbmltYXRlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBbmltYXRlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFuaW1hdGUoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5mcmFtZVRhcmdldCA9IHtcbiAgICAgICAgICAgIHg6IHsgbWluOiAwLCBtYXg6IDAgfSxcbiAgICAgICAgICAgIHk6IHsgbWluOiAwLCBtYXg6IDAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc3RvcEF4aXNBbmltYXRpb24gPSB7XG4gICAgICAgICAgICB4OiB1bmRlZmluZWQsXG4gICAgICAgICAgICB5OiB1bmRlZmluZWQsXG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmFuaW1hdGUgPSBmdW5jdGlvbiAodGFyZ2V0LCBvcmlnaW4sIF9hKSB7XG4gICAgICAgICAgICBpZiAoX2EgPT09IHZvaWQgMCkgeyBfYSA9IHt9OyB9XG4gICAgICAgICAgICB2YXIgb3JpZ2luQm94ID0gX2Eub3JpZ2luQm94LCB0YXJnZXRCb3ggPSBfYS50YXJnZXRCb3gsIHZpc2liaWxpdHlBY3Rpb24gPSBfYS52aXNpYmlsaXR5QWN0aW9uLCBzaG91bGRTdGFja0FuaW1hdGUgPSBfYS5zaG91bGRTdGFja0FuaW1hdGUsIGNvbmZpZyA9IF9fcmVzdChfYSwgW1wib3JpZ2luQm94XCIsIFwidGFyZ2V0Qm94XCIsIFwidmlzaWJpbGl0eUFjdGlvblwiLCBcInNob3VsZFN0YWNrQW5pbWF0ZVwiXSk7XG4gICAgICAgICAgICB2YXIgX2IgPSBfdGhpcy5wcm9wcywgdmlzdWFsRWxlbWVudCA9IF9iLnZpc3VhbEVsZW1lbnQsIGxheW91dCA9IF9iLmxheW91dDtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogRWFybHkgcmV0dXJuIGlmIHdlJ3ZlIGJlZW4gaW5zdHJ1Y3RlZCBub3QgdG8gYW5pbWF0ZSB0aGlzIHJlbmRlci5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKHNob3VsZFN0YWNrQW5pbWF0ZSA9PT0gZmFsc2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNhZmVUb1JlbW92ZSgpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBbGxvdyB0aGUgbWVhc3VyZWQgb3JpZ2luIChwcmV2IGJvdW5kaW5nIGJveCkgYW5kIHRhcmdldCAoYWN0dWFsIGxheW91dCkgdG8gYmVcbiAgICAgICAgICAgICAqIG92ZXJyaWRkZW4gYnkgdGhlIHByb3ZpZGVkIGNvbmZpZy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgb3JpZ2luID0gb3JpZ2luQm94IHx8IG9yaWdpbjtcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldEJveCB8fCB0YXJnZXQ7XG4gICAgICAgICAgICB2YXIgYm94SGFzTW92ZWQgPSBoYXNNb3ZlZChvcmlnaW4sIHRhcmdldCk7XG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9ucyA9IGVhY2hBeGlzKGZ1bmN0aW9uIChheGlzKSB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogSWYgbGF5b3V0IGlzIHNldCB0byBcInBvc2l0aW9uXCIsIHdlIGNhbiByZXNpemUgdGhlIG9yaWdpbiBib3ggYmFzZWQgb24gdGhlIHRhcmdldFxuICAgICAgICAgICAgICAgICAqIGJveCBhbmQgb25seSBhbmltYXRlIGl0cyBwb3NpdGlvbi5cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBpZiAobGF5b3V0ID09PSBcInBvc2l0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldExlbmd0aCA9IHRhcmdldFtheGlzXS5tYXggLSB0YXJnZXRbYXhpc10ubWluO1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5bYXhpc10ubWF4ID0gb3JpZ2luW2F4aXNdLm1pbiArIHRhcmdldExlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZpc3VhbEVsZW1lbnQuaXNUYXJnZXRCb3hMb2NrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2aXNpYmlsaXR5QWN0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UncmUgbWVhbnQgdG8gc2hvdy9oaWRlIHRoZSB2aXN1YWxFbGVtZW50LCBkbyBzb1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5QWN0aW9uID09PSBWaXNpYmlsaXR5QWN0aW9uLkhpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdmlzdWFsRWxlbWVudC5oaWRlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdmlzdWFsRWxlbWVudC5zaG93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJveEhhc01vdmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBib3ggaGFzIG1vdmVkLCBhbmltYXRlIGJldHdlZW4gaXQncyBjdXJyZW50IHZpc3VhbCBzdGF0ZSBhbmQgaXRzXG4gICAgICAgICAgICAgICAgICAgIC8vIGZpbmFsIHN0YXRlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5hbmltYXRlQXhpcyhheGlzLCB0YXJnZXRbYXhpc10sIG9yaWdpbltheGlzXSwgY29uZmlnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBib3ggaGFzIHJlbWFpbmVkIGluIHRoZSBzYW1lIHBsYWNlLCBpbW1lZGlhdGVseSBzZXQgdGhlIGF4aXMgdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIHRoZSBmaW5hbCBkZXNpcmVkIHN0YXRlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2aXN1YWxFbGVtZW50LnNldEF4aXNUYXJnZXQoYXhpcywgdGFyZ2V0W2F4aXNdLm1pbiwgdGFyZ2V0W2F4aXNdLm1heCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBGb3JjZSBhIHJlbmRlciB0byBlbnN1cmUgdGhlcmUncyBubyBmbGFzaCBvZiB1bmNvcnJlY3RlZCBib3VuZGluZyBib3guXG4gICAgICAgICAgICB2aXN1YWxFbGVtZW50LnJlbmRlcigpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJZiB0aGlzIHZpc3VhbEVsZW1lbnQgaXNuJ3QgcHJlc2VudCAoaWUgaXQncyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgdHJlZSBieSB0aGUgdXNlciBidXRcbiAgICAgICAgICAgICAqIGtlcHQgaW4gYnkgdGhlIHRyZWUgYnkgQW5pbWF0ZVByZXNlbmNlKSB0aGVuIGNhbGwgc2FmZVRvUmVtb3ZlIHdoZW4gYWxsIGF4aXMgYW5pbWF0aW9uc1xuICAgICAgICAgICAgICogaGF2ZSBzdWNjZXNzZnVsbHkgZmluaXNoZWQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChhbmltYXRpb25zKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgIChfYiA9IChfYSA9IF90aGlzLnByb3BzKS5vbkxheW91dEFuaW1hdGlvbkNvbXBsZXRlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSk7XG4gICAgICAgICAgICAgICAgaWYgKHZpc3VhbEVsZW1lbnQuaXNQcmVzZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZpc3VhbEVsZW1lbnQucHJlc2VuY2UgPSBQcmVzZW5jZS5QcmVzZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2FmZVRvUmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQW5pbWF0ZS5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciB2aXN1YWxFbGVtZW50ID0gdGhpcy5wcm9wcy52aXN1YWxFbGVtZW50O1xuICAgICAgICB2aXN1YWxFbGVtZW50LmFuaW1hdGVNb3Rpb25WYWx1ZSA9IHN0YXJ0QW5pbWF0aW9uO1xuICAgICAgICB2aXN1YWxFbGVtZW50LmVuYWJsZUxheW91dFByb2plY3Rpb24oKTtcbiAgICAgICAgdGhpcy51bnN1YkxheW91dFJlYWR5ID0gdmlzdWFsRWxlbWVudC5vbkxheW91dFVwZGF0ZSh0aGlzLmFuaW1hdGUpO1xuICAgICAgICB2aXN1YWxFbGVtZW50LnVwZGF0ZUNvbmZpZyhfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdmlzdWFsRWxlbWVudC5jb25maWcpLCB7IHNhZmVUb1JlbW92ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuc2FmZVRvUmVtb3ZlKCk7IH0gfSkpO1xuICAgIH07XG4gICAgQW5pbWF0ZS5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMudW5zdWJMYXlvdXRSZWFkeSgpO1xuICAgICAgICBlYWNoQXhpcyhmdW5jdGlvbiAoYXhpcykgeyB2YXIgX2EsIF9iOyByZXR1cm4gKF9iID0gKF9hID0gX3RoaXMuc3RvcEF4aXNBbmltYXRpb24pW2F4aXNdKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSk7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVE9ETzogVGhpcyBtYW51YWxseSBwZXJmb3JtcyBhbmltYXRpb25zIG9uIHRoZSB2aXN1YWxFbGVtZW50J3MgbGF5b3V0IHByb2dyZXNzXG4gICAgICogdmFsdWVzLiBJdCdkIGJlIHByZWZlcmFibGUgdG8gYW1lbmQgdGhlIEhUTUxWaXN1YWxFbGVtZW50LnN0YXJ0TGF5b3V0QXhpc0FuaW1hdGlvblxuICAgICAqIEFQSSB0byBhY2NlcHQgbW9yZSBjdXN0b20gYW5pbWF0aW9ucyBsaWtlIHRoaXMuXG4gICAgICovXG4gICAgQW5pbWF0ZS5wcm90b3R5cGUuYW5pbWF0ZUF4aXMgPSBmdW5jdGlvbiAoYXhpcywgdGFyZ2V0LCBvcmlnaW4sIF9hKSB7XG4gICAgICAgIHZhciBfYiwgX2M7XG4gICAgICAgIHZhciBfZCA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLCB0cmFuc2l0aW9uID0gX2QudHJhbnNpdGlvbiwgY3Jvc3NmYWRlT3BhY2l0eSA9IF9kLmNyb3NzZmFkZU9wYWNpdHk7XG4gICAgICAgIChfYyA9IChfYiA9IHRoaXMuc3RvcEF4aXNBbmltYXRpb24pW2F4aXNdKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY2FsbChfYik7XG4gICAgICAgIHZhciB2aXN1YWxFbGVtZW50ID0gdGhpcy5wcm9wcy52aXN1YWxFbGVtZW50O1xuICAgICAgICB2YXIgZnJhbWVUYXJnZXQgPSB0aGlzLmZyYW1lVGFyZ2V0W2F4aXNdO1xuICAgICAgICB2YXIgbGF5b3V0UHJvZ3Jlc3MgPSB2aXN1YWxFbGVtZW50LmF4aXNQcm9ncmVzc1theGlzXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCBsYXlvdXQgcHJvZ3Jlc3MgYmFjayB0byAwLiBXZSBzZXQgaXQgdHdpY2UgdG8gaGFyZC1yZXNldCBhbnkgdmVsb2NpdHkgdGhhdCBtaWdodFxuICAgICAgICAgKiBiZSByZS1pbmNvcG9yYXRlZCBpbnRvIGEgc3Vic2VxdWVudCBzcHJpbmcgYW5pbWF0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0UHJvZ3Jlc3MuY2xlYXJMaXN0ZW5lcnMoKTtcbiAgICAgICAgbGF5b3V0UHJvZ3Jlc3Muc2V0KDApO1xuICAgICAgICBsYXlvdXRQcm9ncmVzcy5zZXQoMCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGlzIGlzIGEgY3Jvc3NmYWRlIGFuaW1hdGlvbiwgY3JlYXRlIGEgZnVuY3Rpb24gdGhhdCB1cGRhdGVzIGJvdGggdGhlIG9wYWNpdHkgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgICAgICogYW5kIHRoZSBvbmUgYmVpbmcgY3Jvc3NmYWRlZCBvdXQuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgY3Jvc3NmYWRlO1xuICAgICAgICBpZiAoY3Jvc3NmYWRlT3BhY2l0eSkge1xuICAgICAgICAgICAgY3Jvc3NmYWRlID0gdGhpcy5jcmVhdGVDcm9zc2ZhZGVBbmltYXRpb24oY3Jvc3NmYWRlT3BhY2l0eSk7XG4gICAgICAgICAgICB2aXN1YWxFbGVtZW50LnNob3coKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlIGFuIGFuaW1hdGlvbiBmdW5jdGlvbiB0byBydW4gb25jZSBwZXIgZnJhbWUuIFRoaXMgd2lsbCB0d2VlbiB0aGUgdmlzdWFsIGJvdW5kaW5nIGJveCBmcm9tXG4gICAgICAgICAqIG9yaWdpbiB0byB0YXJnZXQgdXNpbmcgdGhlIGxhdGVzdCBwcm9ncmVzcyB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBmcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIGxhdGVzdCBsYXlvdXRQcm9ncmVzcywgd2hpY2ggaXMgYSB2YWx1ZSBmcm9tIDAtMTAwMCwgaW50byBhIDAtMSBwcm9ncmVzc1xuICAgICAgICAgICAgdmFyIHAgPSBsYXlvdXRQcm9ncmVzcy5nZXQoKSAvIHByb2dyZXNzVGFyZ2V0O1xuICAgICAgICAgICAgLy8gVHdlZW4gdGhlIGF4aXMgYW5kIHVwZGF0ZSB0aGUgdmlzdWFsRWxlbWVudCB3aXRoIHRoZSBsYXRlc3QgdmFsdWVzXG4gICAgICAgICAgICB0d2VlbkF4aXMoZnJhbWVUYXJnZXQsIG9yaWdpbiwgdGFyZ2V0LCBwKTtcbiAgICAgICAgICAgIHZpc3VhbEVsZW1lbnQuc2V0QXhpc1RhcmdldChheGlzLCBmcmFtZVRhcmdldC5taW4sIGZyYW1lVGFyZ2V0Lm1heCk7XG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgY3Jvc3NmYWRlIGFuaW1hdGlvbiwgdXBkYXRlIGJvdGggZWxlbWVudHMuXG4gICAgICAgICAgICBjcm9zc2ZhZGUgPT09IG51bGwgfHwgY3Jvc3NmYWRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjcm9zc2ZhZGUocCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIFN5bmNocm9ub3VzbHkgcnVuIGEgZnJhbWUgdG8gZW5zdXJlIHRoZXJlJ3Mgbm8gZmxhc2ggb2YgdGhlIHVuY29ycmVjdGVkIGJvdW5kaW5nIGJveC5cbiAgICAgICAgZnJhbWUoKTtcbiAgICAgICAgLy8gRW5zdXJlIHRoYXQgdGhlIGxheW91dCBkZWx0YSBpcyB1cGRhdGVkIGZvciB0aGlzIGZyYW1lLlxuICAgICAgICB2aXN1YWxFbGVtZW50LnVwZGF0ZUxheW91dERlbHRhKCk7XG4gICAgICAgIC8vIENyZWF0ZSBhIGZ1bmN0aW9uIHRvIHN0b3AgYW5pbWF0aW9uIG9uIHRoaXMgc3BlY2lmaWMgYXhpc1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmVQcm9ncmVzcyA9IGxheW91dFByb2dyZXNzLm9uQ2hhbmdlKGZyYW1lKTtcbiAgICAgICAgLy8gU3RhcnQgdGhlIGFuaW1hdGlvbiBvbiB0aGlzIGF4aXNcbiAgICAgICAgdmFyIGFuaW1hdGlvbiA9IHN0YXJ0QW5pbWF0aW9uKGF4aXMgPT09IFwieFwiID8gXCJsYXlvdXRYXCIgOiBcImxheW91dFlcIiwgbGF5b3V0UHJvZ3Jlc3MsIHByb2dyZXNzVGFyZ2V0LCB0cmFuc2l0aW9uIHx8IHRoaXMucHJvcHMudHJhbnNpdGlvbiB8fCBkZWZhdWx0VHJhbnNpdGlvbikudGhlbih1bnN1YnNjcmliZVByb2dyZXNzKTtcbiAgICAgICAgdGhpcy5zdG9wQXhpc0FuaW1hdGlvbltheGlzXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxheW91dFByb2dyZXNzLnN0b3AoKTtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlUHJvZ3Jlc3MoKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvbjtcbiAgICB9O1xuICAgIEFuaW1hdGUucHJvdG90eXBlLmNyZWF0ZUNyb3NzZmFkZUFuaW1hdGlvbiA9IGZ1bmN0aW9uIChjcm9zc2ZhZGVPcGFjaXR5KSB7XG4gICAgICAgIHZhciB2aXN1YWxFbGVtZW50ID0gdGhpcy5wcm9wcy52aXN1YWxFbGVtZW50O1xuICAgICAgICB2YXIgb3BhY2l0eSA9IHZpc3VhbEVsZW1lbnQuZ2V0VmFsdWUoXCJvcGFjaXR5XCIsIDApO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgIG9wYWNpdHkuc2V0KGVhc2VDcm9zc2ZhZGVJbihtaXgoMCwgMSwgcCkpKTtcbiAgICAgICAgICAgIGNyb3NzZmFkZU9wYWNpdHkuc2V0KGVhc2VDcm9zc2ZhZGVPdXQobWl4KDEsIDAsIHApKSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBBbmltYXRlLnByb3RvdHlwZS5zYWZlVG9SZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIChfYiA9IChfYSA9IHRoaXMucHJvcHMpLnNhZmVUb1JlbW92ZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EpO1xuICAgIH07XG4gICAgQW5pbWF0ZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBBbmltYXRlO1xufShDb21wb25lbnQkMSkpO1xuZnVuY3Rpb24gQW5pbWF0ZUxheW91dENvbnRleHRQcm92aWRlcihwcm9wcykge1xuICAgIHZhciBfYSA9IF9fcmVhZCh1c2VQcmVzZW5jZSgpLCAyKSwgc2FmZVRvUmVtb3ZlID0gX2FbMV07XG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoQW5pbWF0ZSwgX19hc3NpZ24oe30sIHByb3BzLCB7IHNhZmVUb1JlbW92ZTogc2FmZVRvUmVtb3ZlIH0pKTtcbn1cbmZ1bmN0aW9uIGhhc01vdmVkKGEsIGIpIHtcbiAgICByZXR1cm4gaGFzQXhpc01vdmVkKGEueCwgYi54KSB8fCBoYXNBeGlzTW92ZWQoYS55LCBiLnkpO1xufVxuZnVuY3Rpb24gaGFzQXhpc01vdmVkKGEsIGIpIHtcbiAgICByZXR1cm4gYS5taW4gIT09IGIubWluIHx8IGEubWF4ICE9PSBiLm1heDtcbn1cbnZhciBkZWZhdWx0VHJhbnNpdGlvbiA9IHtcbiAgICBkdXJhdGlvbjogMC40NSxcbiAgICBlYXNlOiBbMC40LCAwLCAwLjEsIDFdLFxufTtcbmZ1bmN0aW9uIGNvbXByZXNzKG1pbiwgbWF4LCBlYXNpbmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICAgICAgLy8gQ291bGQgcmVwbGFjZSBpZnMgd2l0aCBjbGFtcFxuICAgICAgICBpZiAocCA8IG1pbilcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICBpZiAocCA+IG1heClcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICByZXR1cm4gZWFzaW5nKHByb2dyZXNzKG1pbiwgbWF4LCBwKSk7XG4gICAgfTtcbn1cbnZhciBlYXNlQ3Jvc3NmYWRlSW4gPSBjb21wcmVzcygwLCAwLjUsIGNpcmNPdXQpO1xudmFyIGVhc2VDcm9zc2ZhZGVPdXQgPSBjb21wcmVzcygwLjUsIDAuOTUsIGxpbmVhcik7XG4vKipcbiAqIEBwdWJsaWNcbiAqL1xudmFyIEFuaW1hdGVMYXlvdXQgPSB7XG4gICAga2V5OiBcImFuaW1hdGUtbGF5b3V0XCIsXG4gICAgc2hvdWxkUmVuZGVyOiBmdW5jdGlvbiAocHJvcHMpIHsgcmV0dXJuICEhcHJvcHMubGF5b3V0IHx8ICEhcHJvcHMubGF5b3V0SWQ7IH0sXG4gICAgZ2V0Q29tcG9uZW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiBBbmltYXRlTGF5b3V0Q29udGV4dFByb3ZpZGVyOyB9LFxufTtcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBpcyByZXNwb25zaWJsZSBmb3Igc2NoZWR1bGluZyB0aGUgbWVhc3VyaW5nIG9mIHRoZSBtb3Rpb24gY29tcG9uZW50XG4gKi9cbnZhciBNZWFzdXJlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNZWFzdXJlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1lYXN1cmUoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogSWYgdGhpcyBpcyBhIGNoaWxkIG9mIGEgU3luY0NvbnRleHQsIHJlZ2lzdGVyIHRoZSBWaXN1YWxFbGVtZW50IHdpdGggaXQgb24gbW91bnQuXG4gICAgICovXG4gICAgTWVhc3VyZS5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsIHN5bmNMYXlvdXQgPSBfYS5zeW5jTGF5b3V0LCBmcmFtZXJTeW5jTGF5b3V0ID0gX2EuZnJhbWVyU3luY0xheW91dCwgdmlzdWFsRWxlbWVudCA9IF9hLnZpc3VhbEVsZW1lbnQ7XG4gICAgICAgIGlzU2hhcmVkTGF5b3V0KHN5bmNMYXlvdXQpICYmIHN5bmNMYXlvdXQucmVnaXN0ZXIodmlzdWFsRWxlbWVudCk7XG4gICAgICAgIGlzU2hhcmVkTGF5b3V0KGZyYW1lclN5bmNMYXlvdXQpICYmXG4gICAgICAgICAgICBmcmFtZXJTeW5jTGF5b3V0LnJlZ2lzdGVyKHZpc3VhbEVsZW1lbnQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSWYgdGhpcyBpcyBhIGNoaWxkIG9mIGEgU3luY0NvbnRleHQsIG5vdGlmeSBpdCB0aGF0IGl0IG5lZWRzIHRvIHJlLXJlbmRlci4gSXQgd2lsbCB0aGVuXG4gICAgICogaGFuZGxlIHRoZSBzbmFwc2hvdHRpbmcuXG4gICAgICpcbiAgICAgKiBJZiBpdCBpcyBzdGFuZC1hbG9uZSBjb21wb25lbnQsIGFkZCBpdCB0byB0aGUgYmF0Y2hlci5cbiAgICAgKi9cbiAgICBNZWFzdXJlLnByb3RvdHlwZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgc3luY0xheW91dCA9IF9hLnN5bmNMYXlvdXQsIHZpc3VhbEVsZW1lbnQgPSBfYS52aXN1YWxFbGVtZW50O1xuICAgICAgICBpZiAoaXNTaGFyZWRMYXlvdXQoc3luY0xheW91dCkpIHtcbiAgICAgICAgICAgIHN5bmNMYXlvdXQuc3luY1VwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmlzdWFsRWxlbWVudC5zbmFwc2hvdEJvdW5kaW5nQm94KCk7XG4gICAgICAgICAgICBzeW5jTGF5b3V0LmFkZCh2aXN1YWxFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIE1lYXN1cmUucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcywgc3luY0xheW91dCA9IF9hLnN5bmNMYXlvdXQsIHZpc3VhbEVsZW1lbnQgPSBfYS52aXN1YWxFbGVtZW50O1xuICAgICAgICBpZiAoIWlzU2hhcmVkTGF5b3V0KHN5bmNMYXlvdXQpKVxuICAgICAgICAgICAgc3luY0xheW91dC5mbHVzaCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdGhpcyBheGlzIGlzbid0IGFuaW1hdGluZyBhcyBhIHJlc3VsdCBvZiB0aGlzIHJlbmRlciB3ZSB3YW50IHRvIHJlc2V0IHRoZSB0YXJnZXRCb3hcbiAgICAgICAgICogdG8gdGhlIG1lYXN1cmVkIGJveFxuICAgICAgICAgKi9cbiAgICAgICAgdmlzdWFsRWxlbWVudC5yZWJhc2VUYXJnZXRCb3goKTtcbiAgICB9O1xuICAgIE1lYXN1cmUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gTWVhc3VyZTtcbn0oUmVhY3QuQ29tcG9uZW50KSk7XG5mdW5jdGlvbiBNZWFzdXJlQ29udGV4dFByb3ZpZGVyKHByb3BzKSB7XG4gICAgdmFyIHN5bmNMYXlvdXQgPSB1c2VDb250ZXh0KFNoYXJlZExheW91dENvbnRleHQpO1xuICAgIHZhciBmcmFtZXJTeW5jTGF5b3V0ID0gdXNlQ29udGV4dChGcmFtZXJUcmVlTGF5b3V0Q29udGV4dCk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KE1lYXN1cmUsIF9fYXNzaWduKHt9LCBwcm9wcywgeyBzeW5jTGF5b3V0OiBzeW5jTGF5b3V0LCBmcmFtZXJTeW5jTGF5b3V0OiBmcmFtZXJTeW5jTGF5b3V0IH0pKSk7XG59XG52YXIgTWVhc3VyZUxheW91dCA9IHtcbiAgICBrZXk6IFwibWVhc3VyZS1sYXlvdXRcIixcbiAgICBzaG91bGRSZW5kZXI6IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICByZXR1cm4gISFwcm9wcy5kcmFnIHx8ICEhcHJvcHMubGF5b3V0IHx8ICEhcHJvcHMubGF5b3V0SWQ7XG4gICAgfSxcbiAgICBnZXRDb21wb25lbnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1lYXN1cmVDb250ZXh0UHJvdmlkZXI7IH0sXG59O1xuXG52YXIgYWxsTW90aW9uRmVhdHVyZXMgPSBbXG4gICAgTWVhc3VyZUxheW91dCxcbiAgICBBbmltYXRpb24sXG4gICAgRHJhZyxcbiAgICBHZXN0dXJlcyxcbiAgICBFeGl0LFxuICAgIEFuaW1hdGVMYXlvdXQsXG5dO1xudmFyIGRvbUJhc2VDb25maWcgPSB7XG4gICAgdXNlVmlzdWFsRWxlbWVudDogdXNlRG9tVmlzdWFsRWxlbWVudCxcbiAgICByZW5kZXI6IHJlbmRlcixcbn07XG4vKipcbiAqIENvbnZlcnQgYW55IFJlYWN0IGNvbXBvbmVudCBpbnRvIGEgYG1vdGlvbmAgY29tcG9uZW50LiBUaGUgcHJvdmlkZWQgY29tcG9uZW50XG4gKiAqKm11c3QqKiB1c2UgYFJlYWN0LmZvcndhcmRSZWZgIHRvIHRoZSB1bmRlcmx5aW5nIERPTSBjb21wb25lbnQgeW91IHdhbnQgdG8gYW5pbWF0ZS5cbiAqXG4gKiBgYGBqc3hcbiAqIGNvbnN0IENvbXBvbmVudCA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAqICAgcmV0dXJuIDxkaXYgcmVmPXtyZWZ9IC8+XG4gKiB9KVxuICpcbiAqIGNvbnN0IE1vdGlvbkNvbXBvbmVudCA9IG1vdGlvbi5jdXN0b20oQ29tcG9uZW50KVxuICogYGBgXG4gKlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBjcmVhdGVNb3Rpb25Qcm94eShkZWZhdWx0RmVhdHVyZXMpIHtcbiAgICB2YXIgY29uZmlnID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGRvbUJhc2VDb25maWcpLCB7IGRlZmF1bHRGZWF0dXJlczogZGVmYXVsdEZlYXR1cmVzIH0pO1xuICAgIGZ1bmN0aW9uIGN1c3RvbShDb21wb25lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZU1vdGlvbkNvbXBvbmVudChDb21wb25lbnQsIGNvbmZpZyk7XG4gICAgfVxuICAgIHZhciBjb21wb25lbnRDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBnZXQodGFyZ2V0LCBrZXkpIHtcbiAgICAgICAgaWYgKGtleSA9PT0gXCJjdXN0b21cIilcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQuY3VzdG9tO1xuICAgICAgICBpZiAoIWNvbXBvbmVudENhY2hlLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICBjb21wb25lbnRDYWNoZS5zZXQoa2V5LCBjcmVhdGVNb3Rpb25Db21wb25lbnQoa2V5LCBjb25maWcpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50Q2FjaGUuZ2V0KGtleSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJveHkoeyBjdXN0b206IGN1c3RvbSB9LCB7IGdldDogZ2V0IH0pO1xufVxuLyoqXG4gKiBIVE1MICYgU1ZHIGNvbXBvbmVudHMsIG9wdGltaXNlZCBmb3IgdXNlIHdpdGggZ2VzdHVyZXMgYW5kIGFuaW1hdGlvbi4gVGhlc2UgY2FuIGJlIHVzZWQgYXNcbiAqIGRyb3AtaW4gcmVwbGFjZW1lbnRzIGZvciBhbnkgSFRNTCAmIFNWRyBjb21wb25lbnQsIGFsbCBDU1MgJiBTVkcgcHJvcGVydGllcyBhcmUgc3VwcG9ydGVkLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xudmFyIG1vdGlvbiA9IC8qQF9fUFVSRV9fKi8gY3JlYXRlTW90aW9uUHJveHkoYWxsTW90aW9uRmVhdHVyZXMpO1xuLyoqXG4gKiBDcmVhdGUgYSBET00gYG1vdGlvbmAgY29tcG9uZW50IHdpdGggdGhlIHByb3ZpZGVkIHN0cmluZy4gVGhpcyBpcyBwcmltYXJpbHkgaW50ZW5kZWRcbiAqIGFzIGEgZnVsbCBhbHRlcm5hdGl2ZSB0byBgbW90aW9uYCBmb3IgY29uc3VtZXJzIHdobyBoYXZlIHRvIHN1cHBvcnQgZW52aXJvbm1lbnRzIHRoYXQgZG9uJ3RcbiAqIHN1cHBvcnQgYFByb3h5YC5cbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBpbXBvcnQgeyBjcmVhdGVEb21Nb3Rpb25Db21wb25lbnQgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG4gKlxuICogY29uc3QgbW90aW9uID0ge1xuICogICBkaXY6IGNyZWF0ZURvbU1vdGlvbkNvbXBvbmVudCgnZGl2JylcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRG9tTW90aW9uQ29tcG9uZW50KGtleSkge1xuICAgIHJldHVybiBjcmVhdGVNb3Rpb25Db21wb25lbnQoa2V5LCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZG9tQmFzZUNvbmZpZyksIHsgZGVmYXVsdEZlYXR1cmVzOiBhbGxNb3Rpb25GZWF0dXJlcyB9KSk7XG59XG5cbi8qKlxuICogQHB1YmxpY1xuICovXG52YXIgbSA9IC8qQF9fUFVSRV9fKi8gY3JlYXRlTW90aW9uUHJveHkoW01lYXN1cmVMYXlvdXRdKTtcblxuZnVuY3Rpb24gdXNlRm9yY2VVcGRhdGUoKSB7XG4gICAgdmFyIHVubG9hZGluZ1JlZiA9IHVzZVJlZihmYWxzZSk7XG4gICAgdmFyIF9hID0gX19yZWFkKHVzZVN0YXRlKDApLCAyKSwgZm9yY2VkUmVuZGVyQ291bnQgPSBfYVswXSwgc2V0Rm9yY2VkUmVuZGVyQ291bnQgPSBfYVsxXTtcbiAgICB1c2VVbm1vdW50RWZmZWN0KGZ1bmN0aW9uICgpIHsgcmV0dXJuICh1bmxvYWRpbmdSZWYuY3VycmVudCA9IHRydWUpOyB9KTtcbiAgICByZXR1cm4gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAhdW5sb2FkaW5nUmVmLmN1cnJlbnQgJiYgc2V0Rm9yY2VkUmVuZGVyQ291bnQoZm9yY2VkUmVuZGVyQ291bnQgKyAxKTtcbiAgICB9LCBbZm9yY2VkUmVuZGVyQ291bnRdKTtcbn1cblxudmFyIHByZXNlbmNlSWQgPSAwO1xuZnVuY3Rpb24gZ2V0UHJlc2VuY2VJZCgpIHtcbiAgICB2YXIgaWQgPSBwcmVzZW5jZUlkO1xuICAgIHByZXNlbmNlSWQrKztcbiAgICByZXR1cm4gaWQ7XG59XG52YXIgUHJlc2VuY2VDaGlsZCA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLCBpbml0aWFsID0gX2EuaW5pdGlhbCwgaXNQcmVzZW50ID0gX2EuaXNQcmVzZW50LCBvbkV4aXRDb21wbGV0ZSA9IF9hLm9uRXhpdENvbXBsZXRlLCBjdXN0b20gPSBfYS5jdXN0b20sIHByZXNlbmNlQWZmZWN0c0xheW91dCA9IF9hLnByZXNlbmNlQWZmZWN0c0xheW91dDtcbiAgICB2YXIgcHJlc2VuY2VDaGlsZHJlbiA9IHVzZUNvbnN0YW50KG5ld0NoaWxkcmVuTWFwKTtcbiAgICB2YXIgaWQgPSB1c2VDb25zdGFudChnZXRQcmVzZW5jZUlkKTtcbiAgICB2YXIgY29udGV4dCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgaW5pdGlhbDogaW5pdGlhbCxcbiAgICAgICAgICAgIGlzUHJlc2VudDogaXNQcmVzZW50LFxuICAgICAgICAgICAgY3VzdG9tOiBjdXN0b20sXG4gICAgICAgICAgICBvbkV4aXRDb21wbGV0ZTogZnVuY3Rpb24gKGNoaWxkSWQpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW5jZUNoaWxkcmVuLnNldChjaGlsZElkLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB2YXIgYWxsQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHByZXNlbmNlQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzQ29tcGxldGUpXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGFsbENvbXBsZXRlICYmIChvbkV4aXRDb21wbGV0ZSA9PT0gbnVsbCB8fCBvbkV4aXRDb21wbGV0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25FeGl0Q29tcGxldGUoKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVnaXN0ZXI6IGZ1bmN0aW9uIChjaGlsZElkKSB7XG4gICAgICAgICAgICAgICAgcHJlc2VuY2VDaGlsZHJlbi5zZXQoY2hpbGRJZCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBwcmVzZW5jZUNoaWxkcmVuLmRlbGV0ZShjaGlsZElkKTsgfTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfSwgXG4gICAgLyoqXG4gICAgICogSWYgdGhlIHByZXNlbmNlIG9mIGEgY2hpbGQgYWZmZWN0cyB0aGUgbGF5b3V0IG9mIHRoZSBjb21wb25lbnRzIGFyb3VuZCBpdCxcbiAgICAgKiB3ZSB3YW50IHRvIG1ha2UgYSBuZXcgY29udGV4dCB2YWx1ZSB0byBlbnN1cmUgdGhleSBnZXQgcmUtcmVuZGVyZWRcbiAgICAgKiBzbyB0aGV5IGNhbiBkZXRlY3QgdGhhdCBsYXlvdXQgY2hhbmdlLlxuICAgICAqL1xuICAgIHByZXNlbmNlQWZmZWN0c0xheW91dCA/IHVuZGVmaW5lZCA6IFtpc1ByZXNlbnRdKTtcbiAgICB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcHJlc2VuY2VDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChfLCBrZXkpIHsgcmV0dXJuIHByZXNlbmNlQ2hpbGRyZW4uc2V0KGtleSwgZmFsc2UpOyB9KTtcbiAgICB9LCBbaXNQcmVzZW50XSk7XG4gICAgcmV0dXJuIChjcmVhdGVFbGVtZW50KFByZXNlbmNlQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogY29udGV4dCB9LCBjaGlsZHJlbikpO1xufTtcbmZ1bmN0aW9uIG5ld0NoaWxkcmVuTWFwKCkge1xuICAgIHJldHVybiBuZXcgTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGdldENoaWxkS2V5KGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkLmtleSB8fCBcIlwiO1xufVxuZnVuY3Rpb24gdXBkYXRlQ2hpbGRMb29rdXAoY2hpbGRyZW4sIGFsbENoaWxkcmVuKSB7XG4gICAgdmFyIHNlZW5DaGlsZHJlbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IG5ldyBTZXQoKSA6IG51bGw7XG4gICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdmFyIGtleSA9IGdldENoaWxkS2V5KGNoaWxkKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiAmJiBzZWVuQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGlmIChzZWVuQ2hpbGRyZW4uaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJDaGlsZHJlbiBvZiBBbmltYXRlUHJlc2VuY2UgcmVxdWlyZSB1bmlxdWUga2V5cy4gXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGEgZHVwbGljYXRlLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlZW5DaGlsZHJlbi5hZGQoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBhbGxDaGlsZHJlbi5zZXQoa2V5LCBjaGlsZCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBvbmx5RWxlbWVudHMoY2hpbGRyZW4pIHtcbiAgICB2YXIgZmlsdGVyZWQgPSBbXTtcbiAgICAvLyBXZSB1c2UgZm9yRWFjaCBoZXJlIGluc3RlYWQgb2YgbWFwIGFzIG1hcCBtdXRhdGVzIHRoZSBjb21wb25lbnQga2V5IGJ5IHByZXByZW5kaW5nIGAuJGBcbiAgICBDaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSlcbiAgICAgICAgICAgIGZpbHRlcmVkLnB1c2goY2hpbGQpO1xuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZDtcbn1cbi8qKlxuICogYEFuaW1hdGVQcmVzZW5jZWAgZW5hYmxlcyB0aGUgYW5pbWF0aW9uIG9mIGNvbXBvbmVudHMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSB0cmVlLlxuICpcbiAqIFdoZW4gYWRkaW5nL3JlbW92aW5nIG1vcmUgdGhhbiBhIHNpbmdsZSBjaGlsZCwgZXZlcnkgY2hpbGQgKiptdXN0KiogYmUgZ2l2ZW4gYSB1bmlxdWUgYGtleWAgcHJvcC5cbiAqXG4gKiBAbGlicmFyeVxuICpcbiAqIEFueSBgRnJhbWVgIGNvbXBvbmVudHMgdGhhdCBoYXZlIGFuIGBleGl0YCBwcm9wZXJ0eSBkZWZpbmVkIHdpbGwgYW5pbWF0ZSBvdXQgd2hlbiByZW1vdmVkIGZyb21cbiAqIHRoZSB0cmVlLlxuICpcbiAqIGBgYGpzeFxuICogaW1wb3J0IHsgRnJhbWUsIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lcidcbiAqXG4gKiAvLyBBcyBpdGVtcyBhcmUgYWRkZWQgYW5kIHJlbW92ZWQgZnJvbSBgaXRlbXNgXG4gKiBleHBvcnQgZnVuY3Rpb24gSXRlbXMoeyBpdGVtcyB9KSB7XG4gKiAgIHJldHVybiAoXG4gKiAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAqICAgICAgIHtpdGVtcy5tYXAoaXRlbSA9PiAoXG4gKiAgICAgICAgIDxGcmFtZVxuICogICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAqICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAqICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAqICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cbiAqICAgICAgICAgLz5cbiAqICAgICAgICkpfVxuICogICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICogICApXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBZb3UgY2FuIHNlcXVlbmNlIGV4aXQgYW5pbWF0aW9ucyB0aHJvdWdob3V0IGEgdHJlZSB1c2luZyB2YXJpYW50cy5cbiAqXG4gKiBAbW90aW9uXG4gKlxuICogQW55IGBtb3Rpb25gIGNvbXBvbmVudHMgdGhhdCBoYXZlIGFuIGBleGl0YCBwcm9wZXJ0eSBkZWZpbmVkIHdpbGwgYW5pbWF0ZSBvdXQgd2hlbiByZW1vdmVkIGZyb21cbiAqIHRoZSB0cmVlLlxuICpcbiAqIGBgYGpzeFxuICogaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuICpcbiAqIGV4cG9ydCBjb25zdCBJdGVtcyA9ICh7IGl0ZW1zIH0pID0+IChcbiAqICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAqICAgICB7aXRlbXMubWFwKGl0ZW0gPT4gKFxuICogICAgICAgPG1vdGlvbi5kaXZcbiAqICAgICAgICAga2V5PXtpdGVtLmlkfVxuICogICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAqICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gKiAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuICogICAgICAgLz5cbiAqICAgICApKX1cbiAqICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gKiApXG4gKiBgYGBcbiAqXG4gKiBZb3UgY2FuIHNlcXVlbmNlIGV4aXQgYW5pbWF0aW9ucyB0aHJvdWdob3V0IGEgdHJlZSB1c2luZyB2YXJpYW50cy5cbiAqXG4gKiBJZiBhIGNoaWxkIGNvbnRhaW5zIG11bHRpcGxlIGBtb3Rpb25gIGNvbXBvbmVudHMgd2l0aCBgZXhpdGAgcHJvcHMsIGl0IHdpbGwgb25seSB1bm1vdW50IHRoZSBjaGlsZFxuICogb25jZSBhbGwgYG1vdGlvbmAgY29tcG9uZW50cyBoYXZlIGZpbmlzaGVkIGFuaW1hdGluZyBvdXQuIExpa2V3aXNlLCBhbnkgY29tcG9uZW50cyB1c2luZ1xuICogYHVzZVByZXNlbmNlYCBhbGwgbmVlZCB0byBjYWxsIGBzYWZlVG9SZW1vdmVgLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xudmFyIEFuaW1hdGVQcmVzZW5jZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLCBjdXN0b20gPSBfYS5jdXN0b20sIF9iID0gX2EuaW5pdGlhbCwgaW5pdGlhbCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIG9uRXhpdENvbXBsZXRlID0gX2Eub25FeGl0Q29tcGxldGUsIGV4aXRCZWZvcmVFbnRlciA9IF9hLmV4aXRCZWZvcmVFbnRlciwgX2MgPSBfYS5wcmVzZW5jZUFmZmVjdHNMYXlvdXQsIHByZXNlbmNlQWZmZWN0c0xheW91dCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2M7XG4gICAgLy8gV2Ugd2FudCB0byBmb3JjZSBhIHJlLXJlbmRlciBvbmNlIGFsbCBleGl0aW5nIGFuaW1hdGlvbnMgaGF2ZSBmaW5pc2hlZC4gV2VcbiAgICAvLyBlaXRoZXIgdXNlIGEgbG9jYWwgZm9yY2VSZW5kZXIgZnVuY3Rpb24sIG9yIG9uZSBmcm9tIGEgcGFyZW50IGNvbnRleHQgaWYgaXQgZXhpc3RzLlxuICAgIHZhciBmb3JjZVJlbmRlciA9IHVzZUZvcmNlVXBkYXRlKCk7XG4gICAgdmFyIGxheW91dENvbnRleHQgPSB1c2VDb250ZXh0KFNoYXJlZExheW91dENvbnRleHQpO1xuICAgIGlmIChpc1NoYXJlZExheW91dChsYXlvdXRDb250ZXh0KSkge1xuICAgICAgICBmb3JjZVJlbmRlciA9IGxheW91dENvbnRleHQuZm9yY2VVcGRhdGU7XG4gICAgfVxuICAgIHZhciBpc0luaXRpYWxSZW5kZXIgPSB1c2VSZWYodHJ1ZSk7XG4gICAgLy8gRmlsdGVyIG91dCBhbnkgY2hpbGRyZW4gdGhhdCBhcmVuJ3QgUmVhY3RFbGVtZW50cy4gV2UgY2FuIG9ubHkgdHJhY2sgUmVhY3RFbGVtZW50cyB3aXRoIGEgcHJvcHMua2V5XG4gICAgdmFyIGZpbHRlcmVkQ2hpbGRyZW4gPSBvbmx5RWxlbWVudHMoY2hpbGRyZW4pO1xuICAgIC8vIEtlZXAgYSBsaXZpbmcgcmVjb3JkIG9mIHRoZSBjaGlsZHJlbiB3ZSdyZSBhY3R1YWxseSByZW5kZXJpbmcgc28gd2VcbiAgICAvLyBjYW4gZGlmZiB0byBmaWd1cmUgb3V0IHdoaWNoIGFyZSBlbnRlcmluZyBhbmQgZXhpdGluZ1xuICAgIHZhciBwcmVzZW50Q2hpbGRyZW4gPSB1c2VSZWYoZmlsdGVyZWRDaGlsZHJlbik7XG4gICAgLy8gQSBsb29rdXAgdGFibGUgdG8gcXVpY2tseSByZWZlcmVuY2UgY29tcG9uZW50cyBieSBrZXlcbiAgICB2YXIgYWxsQ2hpbGRyZW4gPSB1c2VSZWYobmV3IE1hcCgpKVxuICAgICAgICAuY3VycmVudDtcbiAgICAvLyBBIGxpdmluZyByZWNvcmQgb2YgYWxsIGN1cnJlbnRseSBleGl0aW5nIGNvbXBvbmVudHMuXG4gICAgdmFyIGV4aXRpbmcgPSB1c2VSZWYobmV3IFNldCgpKS5jdXJyZW50O1xuICAgIHVwZGF0ZUNoaWxkTG9va3VwKGZpbHRlcmVkQ2hpbGRyZW4sIGFsbENoaWxkcmVuKTtcbiAgICAvLyBJZiB0aGlzIGlzIHRoZSBpbml0aWFsIGNvbXBvbmVudCByZW5kZXIsIGp1c3QgZGVhbCB3aXRoIGxvZ2ljIHN1cnJvdW5kaW5nIHdoZXRoZXJcbiAgICAvLyB3ZSBwbGF5IG9uTW91bnQgYW5pbWF0aW9ucyBvciBub3QuXG4gICAgaWYgKGlzSW5pdGlhbFJlbmRlci5jdXJyZW50KSB7XG4gICAgICAgIGlzSW5pdGlhbFJlbmRlci5jdXJyZW50ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiAoY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgZmlsdGVyZWRDaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiAoY3JlYXRlRWxlbWVudChQcmVzZW5jZUNoaWxkLCB7IGtleTogZ2V0Q2hpbGRLZXkoY2hpbGQpLCBpc1ByZXNlbnQ6IHRydWUsIGluaXRpYWw6IGluaXRpYWwgPyB1bmRlZmluZWQgOiBmYWxzZSwgcHJlc2VuY2VBZmZlY3RzTGF5b3V0OiBwcmVzZW5jZUFmZmVjdHNMYXlvdXQgfSwgY2hpbGQpKTsgfSkpKTtcbiAgICB9XG4gICAgLy8gSWYgdGhpcyBpcyBhIHN1YnNlcXVlbnQgcmVuZGVyLCBkZWFsIHdpdGggZW50ZXJpbmcgYW5kIGV4aXRpbmcgY2hpbGRyZW5cbiAgICB2YXIgY2hpbGRyZW5Ub1JlbmRlciA9IF9fc3ByZWFkKGZpbHRlcmVkQ2hpbGRyZW4pO1xuICAgIC8vIERpZmYgdGhlIGtleXMgb2YgdGhlIGN1cnJlbnRseS1wcmVzZW50IGFuZCB0YXJnZXQgY2hpbGRyZW4gdG8gdXBkYXRlIG91clxuICAgIC8vIGV4aXRpbmcgbGlzdC5cbiAgICB2YXIgcHJlc2VudEtleXMgPSBwcmVzZW50Q2hpbGRyZW4uY3VycmVudC5tYXAoZ2V0Q2hpbGRLZXkpO1xuICAgIHZhciB0YXJnZXRLZXlzID0gZmlsdGVyZWRDaGlsZHJlbi5tYXAoZ2V0Q2hpbGRLZXkpO1xuICAgIC8vIERpZmYgdGhlIHByZXNlbnQgY2hpbGRyZW4gd2l0aCBvdXIgdGFyZ2V0IGNoaWxkcmVuIGFuZCBtYXJrIHRob3NlIHRoYXQgYXJlIGV4aXRpbmdcbiAgICB2YXIgbnVtUHJlc2VudCA9IHByZXNlbnRLZXlzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVByZXNlbnQ7IGkrKykge1xuICAgICAgICB2YXIga2V5ID0gcHJlc2VudEtleXNbaV07XG4gICAgICAgIGlmICh0YXJnZXRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGV4aXRpbmcuYWRkKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBJbiBjYXNlIHRoaXMga2V5IGhhcyByZS1lbnRlcmVkLCByZW1vdmUgZnJvbSB0aGUgZXhpdGluZyBsaXN0XG4gICAgICAgICAgICBleGl0aW5nLmRlbGV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIElmIHdlIGN1cnJlbnRseSBoYXZlIGV4aXRpbmcgY2hpbGRyZW4sIGFuZCB3ZSdyZSBkZWZlcnJpbmcgcmVuZGVyaW5nIGluY29taW5nIGNoaWxkcmVuXG4gICAgLy8gdW50aWwgYWZ0ZXIgYWxsIGN1cnJlbnQgY2hpbGRyZW4gaGF2ZSBleGl0aW5nLCBlbXB0eSB0aGUgY2hpbGRyZW5Ub1JlbmRlciBhcnJheVxuICAgIGlmIChleGl0QmVmb3JlRW50ZXIgJiYgZXhpdGluZy5zaXplKSB7XG4gICAgICAgIGNoaWxkcmVuVG9SZW5kZXIgPSBbXTtcbiAgICB9XG4gICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBjdXJyZW50bHkgZXhpdGluZyBjb21wb25lbnRzIGFuZCBjbG9uZSB0aGVtIHRvIG92ZXJ3cml0ZSBgYW5pbWF0ZWBcbiAgICAvLyB3aXRoIGFueSBgZXhpdGAgcHJvcCB0aGV5IG1pZ2h0IGhhdmUgZGVmaW5lZC5cbiAgICBleGl0aW5nLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAvLyBJZiB0aGlzIGNvbXBvbmVudCBpcyBhY3R1YWxseSBlbnRlcmluZyBhZ2FpbiwgZWFybHkgcmV0dXJuXG4gICAgICAgIGlmICh0YXJnZXRLZXlzLmluZGV4T2Yoa2V5KSAhPT0gLTEpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBjaGlsZCA9IGFsbENoaWxkcmVuLmdldChrZXkpO1xuICAgICAgICBpZiAoIWNoaWxkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgaW5zZXJ0aW9uSW5kZXggPSBwcmVzZW50S2V5cy5pbmRleE9mKGtleSk7XG4gICAgICAgIHZhciBvbkV4aXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhbGxDaGlsZHJlbi5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIGV4aXRpbmcuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhpcyBjaGlsZCBmcm9tIHRoZSBwcmVzZW50IGNoaWxkcmVuXG4gICAgICAgICAgICB2YXIgcmVtb3ZlSW5kZXggPSBwcmVzZW50Q2hpbGRyZW4uY3VycmVudC5maW5kSW5kZXgoZnVuY3Rpb24gKHByZXNlbnRDaGlsZCkgeyByZXR1cm4gcHJlc2VudENoaWxkLmtleSA9PT0ga2V5OyB9KTtcbiAgICAgICAgICAgIHByZXNlbnRDaGlsZHJlbi5jdXJyZW50LnNwbGljZShyZW1vdmVJbmRleCwgMSk7XG4gICAgICAgICAgICAvLyBEZWZlciByZS1yZW5kZXJpbmcgdW50aWwgYWxsIGV4aXRpbmcgY2hpbGRyZW4gaGF2ZSBpbmRlZWQgbGVmdFxuICAgICAgICAgICAgaWYgKCFleGl0aW5nLnNpemUpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW50Q2hpbGRyZW4uY3VycmVudCA9IGZpbHRlcmVkQ2hpbGRyZW47XG4gICAgICAgICAgICAgICAgZm9yY2VSZW5kZXIoKTtcbiAgICAgICAgICAgICAgICBvbkV4aXRDb21wbGV0ZSAmJiBvbkV4aXRDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjaGlsZHJlblRvUmVuZGVyLnNwbGljZShpbnNlcnRpb25JbmRleCwgMCwgY3JlYXRlRWxlbWVudChQcmVzZW5jZUNoaWxkLCB7IGtleTogZ2V0Q2hpbGRLZXkoY2hpbGQpLCBpc1ByZXNlbnQ6IGZhbHNlLCBvbkV4aXRDb21wbGV0ZTogb25FeGl0LCBjdXN0b206IGN1c3RvbSwgcHJlc2VuY2VBZmZlY3RzTGF5b3V0OiBwcmVzZW5jZUFmZmVjdHNMYXlvdXQgfSwgY2hpbGQpKTtcbiAgICB9KTtcbiAgICAvLyBBZGQgYE1vdGlvbkNvbnRleHRgIGV2ZW4gdG8gY2hpbGRyZW4gdGhhdCBkb24ndCBuZWVkIGl0IHRvIGVuc3VyZSB3ZSdyZSByZW5kZXJpbmdcbiAgICAvLyB0aGUgc2FtZSB0cmVlIGJldHdlZW4gcmVuZGVyc1xuICAgIGNoaWxkcmVuVG9SZW5kZXIgPSBjaGlsZHJlblRvUmVuZGVyLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdmFyIGtleSA9IGNoaWxkLmtleTtcbiAgICAgICAgcmV0dXJuIGV4aXRpbmcuaGFzKGtleSkgPyAoY2hpbGQpIDogKGNyZWF0ZUVsZW1lbnQoUHJlc2VuY2VDaGlsZCwgeyBrZXk6IGdldENoaWxkS2V5KGNoaWxkKSwgaXNQcmVzZW50OiB0cnVlLCBwcmVzZW5jZUFmZmVjdHNMYXlvdXQ6IHByZXNlbmNlQWZmZWN0c0xheW91dCB9LCBjaGlsZCkpO1xuICAgIH0pO1xuICAgIHByZXNlbnRDaGlsZHJlbi5jdXJyZW50ID0gY2hpbGRyZW5Ub1JlbmRlcjtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiICYmXG4gICAgICAgIGV4aXRCZWZvcmVFbnRlciAmJlxuICAgICAgICBjaGlsZHJlblRvUmVuZGVyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiWW91J3JlIGF0dGVtcHRpbmcgdG8gYW5pbWF0ZSBtdWx0aXBsZSBjaGlsZHJlbiB3aXRoaW4gQW5pbWF0ZVByZXNlbmNlLCBidXQgaXRzIGV4aXRCZWZvcmVFbnRlciBwcm9wIGlzIHNldCB0byB0cnVlLiBUaGlzIHdpbGwgbGVhZCB0byBvZGQgdmlzdWFsIGJlaGF2aW91ci5cIik7XG4gICAgfVxuICAgIHJldHVybiAoY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgZXhpdGluZy5zaXplXG4gICAgICAgID8gY2hpbGRyZW5Ub1JlbmRlclxuICAgICAgICA6IGNoaWxkcmVuVG9SZW5kZXIubWFwKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2xvbmVFbGVtZW50KGNoaWxkKTsgfSkpKTtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVN3aXRjaEFuaW1hdGlvbihjaGlsZCwgc3RhY2spIHtcbiAgICBpZiAoc3RhY2sgJiYgY2hpbGQgIT09IHN0YWNrLmxlYWQpIHtcbiAgICAgICAgcmV0dXJuIHsgdmlzaWJpbGl0eUFjdGlvbjogVmlzaWJpbGl0eUFjdGlvbi5IaWRlIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKHN0YWNrICYmXG4gICAgICAgIGNoaWxkLnByZXNlbmNlICE9PSBQcmVzZW5jZS5FbnRlcmluZyAmJlxuICAgICAgICBjaGlsZCA9PT0gc3RhY2subGVhZCAmJlxuICAgICAgICBzdGFjay5sZWFkICE9PSBzdGFjay5wcmV2TGVhZCkge1xuICAgICAgICByZXR1cm4geyB2aXNpYmlsaXR5QWN0aW9uOiBWaXNpYmlsaXR5QWN0aW9uLlNob3cgfTtcbiAgICB9XG4gICAgdmFyIG9yaWdpbkJveDtcbiAgICB2YXIgdGFyZ2V0Qm94O1xuICAgIGlmIChjaGlsZC5wcmVzZW5jZSA9PT0gUHJlc2VuY2UuRW50ZXJpbmcpIHtcbiAgICAgICAgb3JpZ2luQm94ID0gc3RhY2sgPT09IG51bGwgfHwgc3RhY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0YWNrLmdldEZvbGxvd09yaWdpbigpO1xuICAgIH1cbiAgICBlbHNlIGlmIChjaGlsZC5wcmVzZW5jZSA9PT0gUHJlc2VuY2UuRXhpdGluZykge1xuICAgICAgICB0YXJnZXRCb3ggPSBzdGFjayA9PT0gbnVsbCB8fCBzdGFjayA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RhY2suZ2V0Rm9sbG93VGFyZ2V0KCk7XG4gICAgfVxuICAgIHJldHVybiB7IG9yaWdpbkJveDogb3JpZ2luQm94LCB0YXJnZXRCb3g6IHRhcmdldEJveCB9O1xufVxuZnVuY3Rpb24gY3JlYXRlQ3Jvc3NmYWRlQW5pbWF0aW9uKGNoaWxkLCBzdGFjaykge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIHZhciBjb25maWcgPSB7fTtcbiAgICB2YXIgc3RhY2tMZWFkID0gc3RhY2sgJiYgc3RhY2subGVhZDtcbiAgICB2YXIgc3RhY2tMZWFkUHJlc2VuY2UgPSBzdGFja0xlYWQgPT09IG51bGwgfHwgc3RhY2tMZWFkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdGFja0xlYWQucHJlc2VuY2U7XG4gICAgaWYgKHN0YWNrICYmIGNoaWxkID09PSBzdGFja0xlYWQpIHtcbiAgICAgICAgaWYgKGNoaWxkLnByZXNlbmNlID09PSBQcmVzZW5jZS5FbnRlcmluZykge1xuICAgICAgICAgICAgY29uZmlnLm9yaWdpbkJveCA9IHN0YWNrLmdldEZvbGxvd09yaWdpbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoaWxkLnByZXNlbmNlID09PSBQcmVzZW5jZS5FeGl0aW5nKSB7XG4gICAgICAgICAgICBjb25maWcudGFyZ2V0Qm94ID0gc3RhY2suZ2V0Rm9sbG93VGFyZ2V0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoc3RhY2sgJiYgY2hpbGQgPT09IHN0YWNrLmZvbGxvdykge1xuICAgICAgICBjb25maWcudHJhbnNpdGlvbiA9IHN0YWNrLmdldExlYWRUcmFuc2l0aW9uKCk7XG4gICAgICAgIGlmIChzdGFja0xlYWRQcmVzZW5jZSA9PT0gUHJlc2VuY2UuRW50ZXJpbmcpIHtcbiAgICAgICAgICAgIGNvbmZpZy50YXJnZXRCb3ggPSBzdGFjay5nZXRMZWFkVGFyZ2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc3RhY2tMZWFkUHJlc2VuY2UgPT09IFByZXNlbmNlLkV4aXRpbmcpIHtcbiAgICAgICAgICAgIGNvbmZpZy5vcmlnaW5Cb3ggPSBzdGFjay5nZXRMZWFkT3JpZ2luKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSWYgbmVpdGhlciB0aGUgbGVhZCBvciBmb2xsb3cgY29tcG9uZW50IGlzIHRoZSByb290IGNoaWxkIG9mIEFuaW1hdGVQcmVzZW5jZSxcbiAgICAvLyBkb24ndCBoYW5kbGUgY3Jvc3NmYWRlIGFuaW1hdGlvbnNcbiAgICBpZiAoISgoX2EgPSBzdGFjayA9PT0gbnVsbCB8fCBzdGFjayA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RhY2suZm9sbG93KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaXNQcmVzZW5jZVJvb3QpICYmICEoc3RhY2tMZWFkID09PSBudWxsIHx8IHN0YWNrTGVhZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RhY2tMZWFkLmlzUHJlc2VuY2VSb290KSkge1xuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cbiAgICBpZiAoIXN0YWNrIHx8IGNoaWxkID09PSBzdGFja0xlYWQpIHtcbiAgICAgICAgaWYgKGNoaWxkLnByZXNlbmNlID09PSBQcmVzZW5jZS5FbnRlcmluZykge1xuICAgICAgICAgICAgY29uZmlnLmNyb3NzZmFkZU9wYWNpdHkgPSAoX2IgPSBzdGFjayA9PT0gbnVsbCB8fCBzdGFjayA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RhY2suZm9sbG93KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZ2V0VmFsdWUoXCJvcGFjaXR5XCIsIDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHN0YWNrICYmIGNoaWxkID09PSBzdGFjay5mb2xsb3cpIHtcbiAgICAgICAgaWYgKCFzdGFja0xlYWQgfHwgc3RhY2tMZWFkUHJlc2VuY2UgPT09IFByZXNlbmNlLkVudGVyaW5nKSA7XG4gICAgICAgIGVsc2UgaWYgKHN0YWNrTGVhZFByZXNlbmNlID09PSBQcmVzZW5jZS5FeGl0aW5nKSB7XG4gICAgICAgICAgICBjb25maWcuY3Jvc3NmYWRlT3BhY2l0eSA9IChfYyA9IHN0YWNrID09PSBudWxsIHx8IHN0YWNrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdGFjay5sZWFkKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuZ2V0VmFsdWUoXCJvcGFjaXR5XCIsIDEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25maWcudmlzaWJpbGl0eUFjdGlvbiA9IFZpc2liaWxpdHlBY3Rpb24uSGlkZTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbmZpZztcbn1cblxuLyoqXG4gKiBGb3IgZWFjaCBsYXlvdXQgYW5pbWF0aW9uLCB3ZSB3YW50IHRvIGlkZW50aWZ5IHR3byBjb21wb25lbnRzXG4gKiB3aXRoaW4gYSBzdGFjayB0aGF0IHdpbGwgc2VydmUgYXMgdGhlIFwibGVhZFwiIGFuZCBcImZvbGxvd1wiIGNvbXBvbmVudHMuXG4gKlxuICogSW4gdGhlIHN3aXRjaCBhbmltYXRpb24sIHRoZSBsZWFkIGNvbXBvbmVudCBwZXJmb3JtcyB0aGUgZW50aXJlIGFuaW1hdGlvbi5cbiAqIEl0IHVzZXMgdGhlIGZvbGxvdyBib3VuZGluZyBib3ggdG8gYW5pbWF0ZSBvdXQgZnJvbSBhbmQgYmFjayB0by4gVGhlIGZvbGxvd1xuICogY29tcG9uZW50IGlzIGhpZGRlbi5cbiAqXG4gKiBJbiB0aGUgY3Jvc3NmYWRlIGFuaW1hdGlvbiwgYm90aCB0aGUgbGVhZCBhbmQgZm9sbG93IGNvbXBvbmVudHMgcGVyZm9ybVxuICogdGhlIGVudGlyZSBhbmltYXRpb24sIGFuaW1hdGluZyBmcm9tIHRoZSBmb2xsb3cgb3JpZ2luIGJvdW5kaW5nIGJveCB0byB0aGUgbGVhZFxuICogdGFyZ2V0IGJvdW5kaW5nIGJveC5cbiAqXG4gKiBHZW5lcmFsaXNpbmcgYSBzdGFjayBhcyBGaXJzdCBJbiBMYXN0IE91dCwgKnNlYXJjaGluZyBmcm9tIHRoZSBlbmQqIHdlIGNhblxuICogZ2VuZXJhbGx5IGNvbnNpZGVyIHRoZSBsZWFkIGNvbXBvbmVudCB0byBiZTpcbiAqICAtIElmIHRoZSBsYXN0IGNoaWxkIGlzIHByZXNlbnQsIHRoZSBsYXN0IGNoaWxkXG4gKiAgLSBJZiB0aGUgbGFzdCBjaGlsZCBpcyBleGl0aW5nLCB0aGUgbGFzdCAqZW5jb3VudGVyZWQqIGV4aXRpbmcgY29tcG9uZW50XG4gKi9cbmZ1bmN0aW9uIGZpbmRMZWFkQW5kRm9sbG93KHN0YWNrLCBfYSkge1xuICAgIHZhciBfYiA9IF9fcmVhZChfYSwgMiksIHByZXZMZWFkID0gX2JbMF0sIHByZXZGb2xsb3cgPSBfYlsxXTtcbiAgICB2YXIgbGVhZCA9IHVuZGVmaW5lZDtcbiAgICB2YXIgbGVhZEluZGV4ID0gMDtcbiAgICB2YXIgZm9sbG93ID0gdW5kZWZpbmVkO1xuICAgIC8vIEZpbmQgdGhlIGxlYWQgY2hpbGQgZmlyc3RcbiAgICB2YXIgbnVtSW5TdGFjayA9IHN0YWNrLmxlbmd0aDtcbiAgICB2YXIgbGFzdElzUHJlc2VudCA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSBudW1JblN0YWNrIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdmFyIGNoaWxkID0gc3RhY2tbaV07XG4gICAgICAgIHZhciBpc0xhc3RJblN0YWNrID0gaSA9PT0gbnVtSW5TdGFjayAtIDE7XG4gICAgICAgIGlmIChpc0xhc3RJblN0YWNrKVxuICAgICAgICAgICAgbGFzdElzUHJlc2VudCA9IGNoaWxkLmlzUHJlc2VudDtcbiAgICAgICAgaWYgKGxhc3RJc1ByZXNlbnQpIHtcbiAgICAgICAgICAgIGxlYWQgPSBjaGlsZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBjaGlsZCBiZWZvcmUgdGhpcyB3aWxsIGJlIHByZXNlbnQsIG1ha2UgdGhpcyB0aGVcbiAgICAgICAgICAgIC8vIGxlYWQuXG4gICAgICAgICAgICB2YXIgcHJldiA9IHN0YWNrW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChwcmV2ICYmIHByZXYuaXNQcmVzZW50KVxuICAgICAgICAgICAgICAgIGxlYWQgPSBjaGlsZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVhZCkge1xuICAgICAgICAgICAgbGVhZEluZGV4ID0gaTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghbGVhZClcbiAgICAgICAgbGVhZCA9IHN0YWNrWzBdO1xuICAgIC8vIEZpbmQgdGhlIGZvbGxvdyBjaGlsZFxuICAgIGZvbGxvdyA9IHN0YWNrW2xlYWRJbmRleCAtIDFdO1xuICAgIC8vIElmIHRoZSBsZWFkIGNvbXBvbmVudCBpcyBleGl0aW5nLCBmaW5kIHRoZSBjbG9zZXN0IGZvbGxvd1xuICAgIC8vIHByZXNlbnQgY29tcG9uZW50XG4gICAgaWYgKGxlYWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IGxlYWRJbmRleCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBzdGFja1tpXTtcbiAgICAgICAgICAgIGlmIChjaGlsZC5pc1ByZXNlbnQpIHtcbiAgICAgICAgICAgICAgICBmb2xsb3cgPSBjaGlsZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBJZiB0aGUgbGVhZCBoYXMgY2hhbmdlZCBhbmQgdGhlIHByZXZpb3VzIGxlYWQgc3RpbGwgZXhpc3RzIGluIHRoZVxuICAgIC8vIHN0YWNrLCBzZXQgaXQgdG8gdGhlIHByZXZpb3VzIGxlYWQuIFRoaXMgYWxsb3dzIHVzIHRvIGRpZmZlcmVudGlhdGUgYmV0d2VlblxuICAgIC8vIGEsIGIsIGMoZXhpdCkgLT4gYSwgYihleGl0KSwgYyhleGl0KVxuICAgIC8vIGFuZFxuICAgIC8vIGEsIGIoZXhpdCksIGMgLT4gYSwgYihleGl0KSwgYyhleGl0KVxuICAgIGlmIChsZWFkICE9PSBwcmV2TGVhZCAmJlxuICAgICAgICAhbGFzdElzUHJlc2VudCAmJlxuICAgICAgICBmb2xsb3cgPT09IHByZXZGb2xsb3cgJiZcbiAgICAgICAgc3RhY2suZmluZChmdW5jdGlvbiAoc3RhY2tDaGlsZCkgeyByZXR1cm4gc3RhY2tDaGlsZCA9PT0gcHJldkxlYWQ7IH0pKSB7XG4gICAgICAgIGxlYWQgPSBwcmV2TGVhZDtcbiAgICB9XG4gICAgcmV0dXJuIFtsZWFkLCBmb2xsb3ddO1xufVxudmFyIExheW91dFN0YWNrID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExheW91dFN0YWNrKCkge1xuICAgICAgICB0aGlzLm9yZGVyID0gW107XG4gICAgICAgIC8vIFRyYWNrIHdoZXRoZXIgd2UndmUgZXZlciBoYWQgYSBjaGlsZFxuICAgICAgICB0aGlzLmhhc0NoaWxkcmVuID0gZmFsc2U7XG4gICAgfVxuICAgIExheW91dFN0YWNrLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLm9yZGVyLnB1c2goY2hpbGQpO1xuICAgICAgICAvLyBMb2FkIHByZXZpb3VzIHZhbHVlcyBmcm9tIHNuYXBzaG90IGludG8gdGhpcyBjaGlsZFxuICAgICAgICAvLyBUT0RPIE5lYXRlbiB1cFxuICAgICAgICAvLyBUT0RPIERvdWJsZSBjaGVjayB3aGVuIHJlaW1wbGVtZW50aW5nIG1vdmVcbiAgICAgICAgLy8gVE9ETyBBZGQgaXNEcmFnZ2luZyBzdGF0dXMgYW5kXG4gICAgICAgIGlmICh0aGlzLnNuYXBzaG90KSB7XG4gICAgICAgICAgICBjaGlsZC5wcmV2U25hcHNob3QgPSB0aGlzLnNuYXBzaG90O1xuICAgICAgICAgICAgLy8gVE9ETyBSZW1vdmUgaW4gZmF2b3VyIG9mIGFib3ZlXG4gICAgICAgICAgICBjaGlsZC5wcmV2Vmlld3BvcnRCb3ggPSB0aGlzLnNuYXBzaG90LmJvdW5kaW5nQm94O1xuICAgICAgICAgICAgdmFyIGxhdGVzdCA9IHRoaXMuc25hcHNob3QubGF0ZXN0TW90aW9uVmFsdWVzO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGxhdGVzdCkge1xuICAgICAgICAgICAgICAgIGlmICghY2hpbGQuaGFzVmFsdWUoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5hZGRWYWx1ZShrZXksIG1vdGlvblZhbHVlKGxhdGVzdFtrZXldKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAoX2EgPSBjaGlsZC5nZXRWYWx1ZShrZXkpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2V0KGxhdGVzdFtrZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYXNDaGlsZHJlbiA9IHRydWU7XG4gICAgfTtcbiAgICBMYXlvdXRTdGFjay5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMub3JkZXIuZmluZEluZGV4KGZ1bmN0aW9uIChzdGFja0NoaWxkKSB7IHJldHVybiBjaGlsZCA9PT0gc3RhY2tDaGlsZDsgfSk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICB0aGlzLm9yZGVyLnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcbiAgICBMYXlvdXRTdGFjay5wcm90b3R5cGUudXBkYXRlTGVhZEFuZEZvbGxvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wcmV2TGVhZCA9IHRoaXMubGVhZDtcbiAgICAgICAgdGhpcy5wcmV2Rm9sbG93ID0gdGhpcy5mb2xsb3c7XG4gICAgICAgIHZhciBfYSA9IF9fcmVhZChmaW5kTGVhZEFuZEZvbGxvdyh0aGlzLm9yZGVyLCBbXG4gICAgICAgICAgICB0aGlzLmxlYWQsXG4gICAgICAgICAgICB0aGlzLmZvbGxvdyxcbiAgICAgICAgXSksIDIpLCBsZWFkID0gX2FbMF0sIGZvbGxvdyA9IF9hWzFdO1xuICAgICAgICB0aGlzLmxlYWQgPSBsZWFkO1xuICAgICAgICB0aGlzLmZvbGxvdyA9IGZvbGxvdztcbiAgICB9O1xuICAgIExheW91dFN0YWNrLnByb3RvdHlwZS51cGRhdGVTbmFwc2hvdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxlYWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBzbmFwc2hvdCA9IHtcbiAgICAgICAgICAgIGJvdW5kaW5nQm94OiB0aGlzLmxlYWQucHJldlZpZXdwb3J0Qm94LFxuICAgICAgICAgICAgbGF0ZXN0TW90aW9uVmFsdWVzOiB7fSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5sZWFkLmZvckVhY2hWYWx1ZShmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgdmFyIGxhdGVzdCA9IHZhbHVlLmdldCgpO1xuICAgICAgICAgICAgaWYgKCFpc1RyYW5zZm9ybVByb3AobGF0ZXN0KSkge1xuICAgICAgICAgICAgICAgIHNuYXBzaG90LmxhdGVzdE1vdGlvblZhbHVlc1trZXldID0gbGF0ZXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGRyYWdDb250cm9scyA9IGVsZW1lbnREcmFnQ29udHJvbHMuZ2V0KHRoaXMubGVhZCk7XG4gICAgICAgIGlmIChkcmFnQ29udHJvbHMgJiYgZHJhZ0NvbnRyb2xzLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgICAgIHNuYXBzaG90LmlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICAgICAgc25hcHNob3QuY3Vyc29yUHJvZ3Jlc3MgPSBkcmFnQ29udHJvbHMuY3Vyc29yUHJvZ3Jlc3M7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zbmFwc2hvdCA9IHNuYXBzaG90O1xuICAgIH07XG4gICAgTGF5b3V0U3RhY2sucHJvdG90eXBlLmlzTGVhZFByZXNlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVhZCAmJiAoKF9hID0gdGhpcy5sZWFkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucHJlc2VuY2UpICE9PSBQcmVzZW5jZS5FeGl0aW5nO1xuICAgIH07XG4gICAgTGF5b3V0U3RhY2sucHJvdG90eXBlLmdldEZvbGxvd09yaWdpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gdGhpcy5mb2xsb3dcbiAgICAgICAgICAgID8gdGhpcy5mb2xsb3cucHJldlZpZXdwb3J0Qm94XG4gICAgICAgICAgICA6IChfYSA9IHRoaXMuc25hcHNob3QpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ib3VuZGluZ0JveDtcbiAgICB9O1xuICAgIExheW91dFN0YWNrLnByb3RvdHlwZS5nZXRGb2xsb3dUYXJnZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuZm9sbG93KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYm94O1xuICAgIH07XG4gICAgTGF5b3V0U3RhY2sucHJvdG90eXBlLmdldExlYWRPcmlnaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMubGVhZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnByZXZWaWV3cG9ydEJveDtcbiAgICB9O1xuICAgIExheW91dFN0YWNrLnByb3RvdHlwZS5nZXRMZWFkVGFyZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHJldHVybiAoX2EgPSB0aGlzLmxlYWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ib3g7XG4gICAgfTtcbiAgICBMYXlvdXRTdGFjay5wcm90b3R5cGUuZ2V0TGVhZFRyYW5zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMubGVhZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbmZpZy50cmFuc2l0aW9uO1xuICAgIH07XG4gICAgcmV0dXJuIExheW91dFN0YWNrO1xufSgpKTtcblxuLyoqXG4gKiBAcHVibGljXG4gKi9cbnZhciBBbmltYXRlU2hhcmVkTGF5b3V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBbmltYXRlU2hhcmVkTGF5b3V0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFuaW1hdGVTaGFyZWRMYXlvdXQoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBsaXN0IG9mIGFsbCB0aGUgY2hpbGRyZW4gaW4gdGhlIHNoYXJlZCBsYXlvdXRcbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLmNoaWxkcmVuID0gbmV3IFNldCgpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQXMgYW5pbWF0ZSBjb21wb25lbnRzIHdpdGggYSBkZWZpbmVkIGBsYXlvdXRJZGAgYXJlIGFkZGVkL3JlbW92ZWQgdG8gdGhlIHRyZWUsXG4gICAgICAgICAqIHdlIHN0b3JlIHRoZW0gaW4gb3JkZXIuIFdoZW4gb25lIGlzIGFkZGVkLCBpdCB3aWxsIGFuaW1hdGUgb3V0IGZyb20gdGhlXG4gICAgICAgICAqIHByZXZpb3VzIG9uZSwgYW5kIHdoZW4gaXQncyByZW1vdmVkLCBpdCdsbCBhbmltYXRlIHRvIHRoZSBwcmV2aW91cyBvbmUuXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5zdGFja3MgPSBuZXcgTWFwKCk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcmFjayB3aGV0aGVyIHRoZSBjb21wb25lbnQgaGFzIG1vdW50ZWQuIElmIGl0IGhhc24ndCwgdGhlIHByZXNlbmNlIG9mIGFkZGVkIGNoaWxkcmVuXG4gICAgICAgICAqIGFyZSBzZXQgdG8gUHJlc2VudCwgd2hlcmVhcyBpZiBpdCBoYXMgdGhleSdyZSBjb25zaWRlcmVkIEVudGVyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5oYXNNb3VudGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcmFjayB3aGV0aGVyIHdlIGFscmVhZHkgaGF2ZSBhbiB1cGRhdGUgc2NoZWR1bGVkLiBJZiB3ZSBkb24ndCwgd2UnbGwgcnVuIHNuYXBzaG90c1xuICAgICAgICAgKiBhbmQgc2NoZWR1bGUgb25lLlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMudXBkYXRlU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcmFja3Mgd2hldGhlciB3ZSBhbHJlYWR5IGhhdmUgYSByZW5kZXIgc2NoZWR1bGVkLiBJZiB3ZSBkb24ndCwgd2UnbGwgZm9yY2Ugb25lIHdpdGggdGhpcy5mb3JjZVJlbmRlclxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMucmVuZGVyU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbWV0aG9kcyBwcm92aWRlZCB0byBhbGwgY2hpbGRyZW4gaW4gdGhlIHNoYXJlZCBsYXlvdXQgdHJlZS5cbiAgICAgICAgICovXG4gICAgICAgIF90aGlzLnN5bmNDb250ZXh0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIGNyZWF0ZUJhdGNoZXIoKSksIHsgc3luY1VwZGF0ZTogZnVuY3Rpb24gKGZvcmNlKSB7IHJldHVybiBfdGhpcy5zY2hlZHVsZVVwZGF0ZShmb3JjZSk7IH0sIGZvcmNlVXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gQnkgY29weWluZyBzeW5jQ29udGV4dCB0byBpdHNlbGYsIHdoZW4gdGhpcyBjb21wb25lbnQgcmUtcmVuZGVycyBpdCdsbCBhbHNvIHJlLXJlbmRlclxuICAgICAgICAgICAgICAgIC8vIGFsbCBjaGlsZHJlbiBzdWJzY3JpYmVkIHRvIHRoZSBTaGFyZWRMYXlvdXQgY29udGV4dC5cbiAgICAgICAgICAgICAgICBfdGhpcy5zeW5jQ29udGV4dCA9IF9fYXNzaWduKHt9LCBfdGhpcy5zeW5jQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2NoZWR1bGVVcGRhdGUodHJ1ZSk7XG4gICAgICAgICAgICB9LCByZWdpc3RlcjogZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBfdGhpcy5hZGRDaGlsZChjaGlsZCk7IH0sIHJlbW92ZTogZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBfdGhpcy5yZW1vdmVDaGlsZChjaGlsZCk7IH0gfSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQW5pbWF0ZVNoYXJlZExheW91dC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaGFzTW91bnRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudXBkYXRlU3RhY2tzKCk7XG4gICAgfTtcbiAgICBBbmltYXRlU2hhcmVkTGF5b3V0LnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RhcnRMYXlvdXRBbmltYXRpb24oKTtcbiAgICB9O1xuICAgIEFuaW1hdGVTaGFyZWRMYXlvdXQucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJTY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIEFuaW1hdGVTaGFyZWRMYXlvdXQucHJvdG90eXBlLnN0YXJ0TGF5b3V0QW5pbWF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVzZXQgdXBkYXRlIGFuZCByZW5kZXIgc2NoZWR1bGVkIHN0YXR1c1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5yZW5kZXJTY2hlZHVsZWQgPSB0aGlzLnVwZGF0ZVNjaGVkdWxlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgdHlwZSA9IHRoaXMucHJvcHMudHlwZTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVwZGF0ZSBwcmVzZW5jZSBtZXRhZGF0YSBiYXNlZCBvbiB0aGUgbGF0ZXN0IEFuaW1hdGVQcmVzZW5jZSBzdGF0dXMuXG4gICAgICAgICAqIFRoaXMgaXMgYSBraW5kIG9mIGdvb2Z5IHdheSBvZiBkZWFsaW5nIHdpdGggdGhpcywgcGVyaGFwcyB0aGVyZSdzIGEgYmV0dGVyIG1vZGVsIHRvIGZpbmQuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBpZiAoIWNoaWxkLmlzUHJlc2VudCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByZXNlbmNlID0gUHJlc2VuY2UuRXhpdGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkLnByZXNlbmNlICE9PSBQcmVzZW5jZS5FbnRlcmluZykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByZXNlbmNlID1cbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucHJlc2VuY2UgPT09IFByZXNlbmNlLkV4aXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gUHJlc2VuY2UuRW50ZXJpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogUHJlc2VuY2UuUHJlc2VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbiBldmVyeSBsYXlvdXRJZCBzdGFjaywgbm9taW5hdGUgYSBjb21wb25lbnQgdG8gbGVhZCB0aGUgYW5pbWF0aW9uIGFuZCBhbm90aGVyXG4gICAgICAgICAqIHRvIGZvbGxvd1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51cGRhdGVTdGFja3MoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlY2lkZSB3aGljaCBhbmltYXRpb24gdG8gdXNlIGJldHdlZW4gc2hhcmVkIGxheW91dElkIGNvbXBvbmVudHNcbiAgICAgICAgICovXG4gICAgICAgIHZhciBjcmVhdGVBbmltYXRpb24gPSB0eXBlID09PSBcImNyb3NzZmFkZVwiXG4gICAgICAgICAgICA/IGNyZWF0ZUNyb3NzZmFkZUFuaW1hdGlvblxuICAgICAgICAgICAgOiBjcmVhdGVTd2l0Y2hBbmltYXRpb247XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGUgYSBoYW5kbGVyIHdoaWNoIHdlIGNhbiB1c2UgdG8gZmx1c2ggdGhlIGNoaWxkcmVuIGFuaW1hdGlvbnNcbiAgICAgICAgICovXG4gICAgICAgIHZhciBoYW5kbGVyID0ge1xuICAgICAgICAgICAgbWVhc3VyZUxheW91dDogZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBjaGlsZC5tZWFzdXJlTGF5b3V0KCk7IH0sXG4gICAgICAgICAgICBsYXlvdXRSZWFkeTogZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxheW91dElkID0gY2hpbGQubGF5b3V0SWQ7XG4gICAgICAgICAgICAgICAgY2hpbGQubGF5b3V0UmVhZHkoY3JlYXRlQW5pbWF0aW9uKGNoaWxkLCBfdGhpcy5nZXRTdGFjayhsYXlvdXRJZCkpKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaGFyZWQgbGF5b3V0IGFuaW1hdGlvbnMgY2FuIGJlIHVzZWQgd2l0aG91dCB0aGUgQW5pbWF0ZVNoYXJlZExheW91dCB3cmFwcGluZyBjb21wb25lbnQuXG4gICAgICAgICAqIFRoaXMgcmVxdWlyZXMgc29tZSBjby1vcmRpbmF0aW9uIGFjcm9zcyBjb21wb25lbnRzIHRvIHN0b3AgbGF5b3V0IHRocmFzaGluZ1xuICAgICAgICAgKiBhbmQgZW5zdXJlIG1lYXN1cmVtZW50cyBhcmUgdGFrZW4gYXQgdGhlIGNvcnJlY3QgdGltZS5cbiAgICAgICAgICpcbiAgICAgICAgICogSGVyZSB3ZSB1c2UgdGhhdCBzYW1lIG1lY2hhbmlzbSBvZiBzY2hlZHVsZS9mbHVzaC5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIF90aGlzLnN5bmNDb250ZXh0LmFkZChjaGlsZCk7IH0pO1xuICAgICAgICB0aGlzLnN5bmNDb250ZXh0LmZsdXNoKGhhbmRsZXIpO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2xlYXIgc25hcHNob3RzIHNvIHN1YnNlcXVlbnQgcmVyZW5kZXJzIGRvbid0IHJldGFpbiBtZW1vcnkgb2Ygb3V0Z29pbmcgY29tcG9uZW50c1xuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zdGFja3MuZm9yRWFjaChmdW5jdGlvbiAoc3RhY2spIHsgcmV0dXJuIChzdGFjay5zbmFwc2hvdCA9IHVuZGVmaW5lZCk7IH0pO1xuICAgIH07XG4gICAgQW5pbWF0ZVNoYXJlZExheW91dC5wcm90b3R5cGUudXBkYXRlU3RhY2tzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0YWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChzdGFjaykgeyByZXR1cm4gc3RhY2sudXBkYXRlTGVhZEFuZEZvbGxvdygpOyB9KTtcbiAgICB9O1xuICAgIEFuaW1hdGVTaGFyZWRMYXlvdXQucHJvdG90eXBlLnNjaGVkdWxlVXBkYXRlID0gZnVuY3Rpb24gKGZvcmNlKSB7XG4gICAgICAgIGlmIChmb3JjZSA9PT0gdm9pZCAwKSB7IGZvcmNlID0gZmFsc2U7IH1cbiAgICAgICAgaWYgKCEoZm9yY2UgfHwgIXRoaXMudXBkYXRlU2NoZWR1bGVkKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZsYWcgd2UndmUgc2NoZWR1bGVkIGFuIHVwZGF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy51cGRhdGVTY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVhZDogU25hcHNob3QgY2hpbGRyZW5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkLnNuYXBzaG90Qm91bmRpbmdCb3goKTsgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVyeSBjaGlsZCBrZWVwcyBhIGxvY2FsIHNuYXBzaG90LCBidXQgd2UgYWxzbyB3YW50IHRvIHJlY29yZFxuICAgICAgICAgKiBzbmFwc2hvdHMgb2YgdGhlIHZpc2libGUgY2hpbGRyZW4gYXMsIGlmIHRoZXkncmUgYXJlIGJlaW5nIHJlbW92ZWRcbiAgICAgICAgICogaW4gdGhpcyByZW5kZXIsIHdlIGNhbiBzdGlsbCBhY2Nlc3MgdGhlbS5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc3RhY2tzLmZvckVhY2goZnVuY3Rpb24gKHN0YWNrKSB7IHJldHVybiBzdGFjay51cGRhdGVTbmFwc2hvdCgpOyB9KTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcmNlIGEgcmVyZW5kZXIgYnkgc2V0dGluZyBzdGF0ZSBpZiB3ZSBhcmVuJ3QgYWxyZWFkeSBnb2luZyB0byByZW5kZXIuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAoZm9yY2UgfHwgIXRoaXMucmVuZGVyU2NoZWR1bGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclNjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFuaW1hdGVTaGFyZWRMYXlvdXQucHJvdG90eXBlLmFkZENoaWxkID0gZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uYWRkKGNoaWxkKTtcbiAgICAgICAgdGhpcy5hZGRUb1N0YWNrKGNoaWxkKTtcbiAgICAgICAgY2hpbGQucHJlc2VuY2UgPSB0aGlzLmhhc01vdW50ZWQgPyBQcmVzZW5jZS5FbnRlcmluZyA6IFByZXNlbmNlLlByZXNlbnQ7XG4gICAgfTtcbiAgICBBbmltYXRlU2hhcmVkTGF5b3V0LnByb3RvdHlwZS5yZW1vdmVDaGlsZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlVXBkYXRlKCk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZGVsZXRlKGNoaWxkKTtcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tU3RhY2soY2hpbGQpO1xuICAgIH07XG4gICAgQW5pbWF0ZVNoYXJlZExheW91dC5wcm90b3R5cGUuYWRkVG9TdGFjayA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICB2YXIgc3RhY2sgPSB0aGlzLmdldFN0YWNrKGNoaWxkLmxheW91dElkKTtcbiAgICAgICAgc3RhY2sgPT09IG51bGwgfHwgc3RhY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0YWNrLmFkZChjaGlsZCk7XG4gICAgfTtcbiAgICBBbmltYXRlU2hhcmVkTGF5b3V0LnByb3RvdHlwZS5yZW1vdmVGcm9tU3RhY2sgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgdmFyIHN0YWNrID0gdGhpcy5nZXRTdGFjayhjaGlsZC5sYXlvdXRJZCk7XG4gICAgICAgIHN0YWNrID09PSBudWxsIHx8IHN0YWNrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdGFjay5yZW1vdmUoY2hpbGQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJuIGEgc3RhY2sgb2YgYW5pbWF0ZSBjaGlsZHJlbiBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgbGF5b3V0SWQuXG4gICAgICogV2lsbCBjcmVhdGUgYSBzdGFjayBpZiBub25lIGN1cnJlbnRseSBleGlzdHMgd2l0aCB0aGF0IGxheW91dElkLlxuICAgICAqL1xuICAgIEFuaW1hdGVTaGFyZWRMYXlvdXQucHJvdG90eXBlLmdldFN0YWNrID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGlmIChpZCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBDcmVhdGUgc3RhY2sgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0XG4gICAgICAgICF0aGlzLnN0YWNrcy5oYXMoaWQpICYmIHRoaXMuc3RhY2tzLnNldChpZCwgbmV3IExheW91dFN0YWNrKCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFja3MuZ2V0KGlkKTtcbiAgICB9O1xuICAgIEFuaW1hdGVTaGFyZWRMYXlvdXQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChjcmVhdGVFbGVtZW50KFNoYXJlZExheW91dENvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHRoaXMuc3luY0NvbnRleHQgfSwgdGhpcy5wcm9wcy5jaGlsZHJlbikpO1xuICAgIH07XG4gICAgcmV0dXJuIEFuaW1hdGVTaGFyZWRMYXlvdXQ7XG59KENvbXBvbmVudCQxKSk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGBNb3Rpb25WYWx1ZWAgdG8gdHJhY2sgdGhlIHN0YXRlIGFuZCB2ZWxvY2l0eSBvZiBhIHZhbHVlLlxuICpcbiAqIFVzdWFsbHksIHRoZXNlIGFyZSBjcmVhdGVkIGF1dG9tYXRpY2FsbHkuIEZvciBhZHZhbmNlZCB1c2UtY2FzZXMsIGxpa2UgdXNlIHdpdGggYHVzZVRyYW5zZm9ybWAsIHlvdSBjYW4gY3JlYXRlIGBNb3Rpb25WYWx1ZWBzIGV4dGVybmFsbHkgYW5kIHBhc3MgdGhlbSBpbnRvIHRoZSBhbmltYXRlZCBjb21wb25lbnQgdmlhIHRoZSBgc3R5bGVgIHByb3AuXG4gKlxuICogQGxpYnJhcnlcbiAqXG4gKiBgYGBqc3hcbiAqIGV4cG9ydCBmdW5jdGlvbiBNeUNvbXBvbmVudCgpIHtcbiAqICAgY29uc3Qgc2NhbGUgPSB1c2VNb3Rpb25WYWx1ZSgxKVxuICpcbiAqICAgcmV0dXJuIDxGcmFtZSBzY2FsZT17c2NhbGV9IC8+XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAbW90aW9uXG4gKlxuICogYGBganN4XG4gKiBleHBvcnQgY29uc3QgTXlDb21wb25lbnQgPSAoKSA9PiB7XG4gKiAgIGNvbnN0IHNjYWxlID0gdXNlTW90aW9uVmFsdWUoMSlcbiAqXG4gKiAgIHJldHVybiA8bW90aW9uLmRpdiBzdHlsZT17eyBzY2FsZSB9fSAvPlxuICogfVxuICogYGBgXG4gKlxuICogQHBhcmFtIGluaXRpYWwgLSBUaGUgaW5pdGlhbCBzdGF0ZS5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHVzZU1vdGlvblZhbHVlKGluaXRpYWwpIHtcbiAgICByZXR1cm4gdXNlQ29uc3RhbnQoZnVuY3Rpb24gKCkgeyByZXR1cm4gbW90aW9uVmFsdWUoaW5pdGlhbCk7IH0pO1xufVxuXG5mdW5jdGlvbiB1c2VPbkNoYW5nZSh2YWx1ZSwgY2FsbGJhY2spIHtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaXNNb3Rpb25WYWx1ZSh2YWx1ZSkgPyB2YWx1ZS5vbkNoYW5nZShjYWxsYmFjaykgOiB1bmRlZmluZWQ7XG4gICAgfSk7XG59XG5mdW5jdGlvbiB1c2VNdWx0aU9uQ2hhbmdlKHZhbHVlcywgaGFuZGxlcikge1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdWJzY3JpcHRpb25zID0gdmFsdWVzLm1hcChmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHZhbHVlLm9uQ2hhbmdlKGhhbmRsZXIpOyB9KTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN1YnNjcmlwdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAodW5zdWJzY3JpYmUpIHsgcmV0dXJuIHVuc3Vic2NyaWJlKCk7IH0pOyB9O1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB1c2VDb21iaW5lTW90aW9uVmFsdWVzKHZhbHVlcywgY29tYmluZVZhbHVlcykge1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2UgdGhlIHJldHVybmVkIG1vdGlvbiB2YWx1ZS4gVGhpcyByZW1haW5zIHRoZSBzYW1lIGJldHdlZW4gcmVuZGVycy5cbiAgICAgKi9cbiAgICB2YXIgdmFsdWUgPSB1c2VNb3Rpb25WYWx1ZShjb21iaW5lVmFsdWVzKCkpO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgd2lsbCB1cGRhdGUgdGhlIHRlbXBsYXRlIG1vdGlvbiB2YWx1ZSB3aXRoIHRoZSBsYXRlc3QgdmFsdWVzLlxuICAgICAqIFRoaXMgaXMgcHJlLWJvdW5kIHNvIHdoZW5ldmVyIGEgbW90aW9uIHZhbHVlIHVwZGF0ZXMgaXQgY2FuIHNjaGVkdWxlIGl0c1xuICAgICAqIGV4ZWN1dGlvbiBpbiBGcmFtZXN5bmMuIElmIGl0J3MgYWxyZWFkeSBiZWVuIHNjaGVkdWxlZCBpdCB3b24ndCBiZSBmaXJlZCB0d2ljZVxuICAgICAqIGluIGEgc2luZ2xlIGZyYW1lLlxuICAgICAqL1xuICAgIHZhciB1cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZhbHVlLnNldChjb21iaW5lVmFsdWVzKCkpOyB9O1xuICAgIC8qKlxuICAgICAqIFN5bmNocm9ub3VzbHkgdXBkYXRlIHRoZSBtb3Rpb24gdmFsdWUgd2l0aCB0aGUgbGF0ZXN0IHZhbHVlcyBkdXJpbmcgdGhlIHJlbmRlci5cbiAgICAgKiBUaGlzIGVuc3VyZXMgdGhhdCB3aXRoaW4gYSBSZWFjdCByZW5kZXIsIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgRE9NIGFyZSB1cC10by1kYXRlLlxuICAgICAqL1xuICAgIHVwZGF0ZVZhbHVlKCk7XG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlIHRvIGFsbCBtb3Rpb24gdmFsdWVzIGZvdW5kIHdpdGhpbiB0aGUgdGVtcGxhdGUuIFdoZW5ldmVyIGFueSBvZiB0aGVtIGNoYW5nZSxcbiAgICAgKiBzY2hlZHVsZSBhbiB1cGRhdGUuXG4gICAgICovXG4gICAgdXNlTXVsdGlPbkNoYW5nZSh2YWx1ZXMsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN5bmMudXBkYXRlKHVwZGF0ZVZhbHVlLCBmYWxzZSwgdHJ1ZSk7IH0pO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBDb21iaW5lIG11bHRpcGxlIG1vdGlvbiB2YWx1ZXMgaW50byBhIG5ldyBvbmUgdXNpbmcgYSBzdHJpbmcgdGVtcGxhdGUgbGl0ZXJhbC5cbiAqXG4gKiBgYGBqc3hcbiAqIGltcG9ydCB7XG4gKiAgIG1vdGlvbixcbiAqICAgdXNlU3ByaW5nLFxuICogICB1c2VNb3Rpb25WYWx1ZSxcbiAqICAgdXNlTW90aW9uVGVtcGxhdGVcbiAqIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuICpcbiAqIGZ1bmN0aW9uIENvbXBvbmVudCgpIHtcbiAqICAgY29uc3Qgc2hhZG93WCA9IHVzZVNwcmluZygwKVxuICogICBjb25zdCBzaGFkb3dZID0gdXNlTW90aW9uVmFsdWUoMClcbiAqICAgY29uc3Qgc2hhZG93ID0gdXNlTW90aW9uVGVtcGxhdGVgZHJvcC1zaGFkb3coJHtzaGFkb3dYfXB4ICR7c2hhZG93WX1weCAyMHB4IHJnYmEoMCwwLDAsMC4zKSlgXG4gKlxuICogICByZXR1cm4gPG1vdGlvbi5kaXYgc3R5bGU9e3sgZmlsdGVyOiBzaGFkb3cgfX0gLz5cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdXNlTW90aW9uVGVtcGxhdGUoZnJhZ21lbnRzKSB7XG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhbHVlc1tfaSAtIDFdID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJ1aWxkIGEgc3RyaW5nIGZyb20gdGhlIGxhdGVzdCBtb3Rpb24gdmFsdWVzLlxuICAgICAqL1xuICAgIHZhciBudW1GcmFnbWVudHMgPSBmcmFnbWVudHMubGVuZ3RoO1xuICAgIGZ1bmN0aW9uIGJ1aWxkVmFsdWUoKSB7XG4gICAgICAgIHZhciBvdXRwdXQgPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUZyYWdtZW50czsgaSsrKSB7XG4gICAgICAgICAgICBvdXRwdXQgKz0gZnJhZ21lbnRzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzW2ldO1xuICAgICAgICAgICAgaWYgKHZhbHVlKVxuICAgICAgICAgICAgICAgIG91dHB1dCArPSB2YWx1ZXNbaV0uZ2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG4gICAgcmV0dXJuIHVzZUNvbWJpbmVNb3Rpb25WYWx1ZXModmFsdWVzLCBidWlsZFZhbHVlKTtcbn1cblxuLyoqXG4gKiBJZiB0aGUgcHJvdmlkZWQgdmFsdWUgaXMgYSBNb3Rpb25WYWx1ZSwgdGhpcyByZXR1cm5zIHRoZSBhY3R1YWwgdmFsdWUsIG90aGVyd2lzZSBqdXN0IHRoZSB2YWx1ZSBpdHNlbGZcbiAqXG4gKiBUT0RPOiBSZW1vdmUgYW5kIG1vdmUgdG8gbGlicmFyeVxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiByZXNvbHZlTW90aW9uVmFsdWUodmFsdWUpIHtcbiAgICB2YXIgdW53cmFwcGVkVmFsdWUgPSB2YWx1ZSBpbnN0YW5jZW9mIE1vdGlvblZhbHVlID8gdmFsdWUuZ2V0KCkgOiB2YWx1ZTtcbiAgICByZXR1cm4gaXNDdXN0b21WYWx1ZSh1bndyYXBwZWRWYWx1ZSlcbiAgICAgICAgPyB1bndyYXBwZWRWYWx1ZS50b1ZhbHVlKClcbiAgICAgICAgOiB1bndyYXBwZWRWYWx1ZTtcbn1cblxudmFyIGlzQ3VzdG9tVmFsdWVUeXBlID0gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09IFwib2JqZWN0XCIgJiYgdi5taXg7XG59O1xudmFyIGdldE1peGVyID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChpc0N1c3RvbVZhbHVlVHlwZSh2KSA/IHYubWl4IDogdW5kZWZpbmVkKTsgfTtcbmZ1bmN0aW9uIHRyYW5zZm9ybSgpIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgdmFyIHVzZUltbWVkaWF0ZSA9ICFBcnJheS5pc0FycmF5KGFyZ3NbMF0pO1xuICAgIHZhciBhcmdPZmZzZXQgPSB1c2VJbW1lZGlhdGUgPyAwIDogLTE7XG4gICAgdmFyIGlucHV0VmFsdWUgPSBhcmdzWzAgKyBhcmdPZmZzZXRdO1xuICAgIHZhciBpbnB1dFJhbmdlID0gYXJnc1sxICsgYXJnT2Zmc2V0XTtcbiAgICB2YXIgb3V0cHV0UmFuZ2UgPSBhcmdzWzIgKyBhcmdPZmZzZXRdO1xuICAgIHZhciBvcHRpb25zID0gYXJnc1szICsgYXJnT2Zmc2V0XTtcbiAgICB2YXIgaW50ZXJwb2xhdG9yID0gaW50ZXJwb2xhdGUoaW5wdXRSYW5nZSwgb3V0cHV0UmFuZ2UsIF9fYXNzaWduKHsgbWl4ZXI6IGdldE1peGVyKG91dHB1dFJhbmdlWzBdKSB9LCBvcHRpb25zKSk7XG4gICAgcmV0dXJuIHVzZUltbWVkaWF0ZSA/IGludGVycG9sYXRvcihpbnB1dFZhbHVlKSA6IGludGVycG9sYXRvcjtcbn1cblxuZnVuY3Rpb24gdXNlVHJhbnNmb3JtKGlucHV0LCBpbnB1dFJhbmdlT3JUcmFuc2Zvcm1lciwgb3V0cHV0UmFuZ2UsIG9wdGlvbnMpIHtcbiAgICB2YXIgdHJhbnNmb3JtZXIgPSB0eXBlb2YgaW5wdXRSYW5nZU9yVHJhbnNmb3JtZXIgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/IGlucHV0UmFuZ2VPclRyYW5zZm9ybWVyXG4gICAgICAgIDogdHJhbnNmb3JtKGlucHV0UmFuZ2VPclRyYW5zZm9ybWVyLCBvdXRwdXRSYW5nZSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaW5wdXQpXG4gICAgICAgID8gdXNlTGlzdFRyYW5zZm9ybShpbnB1dCwgdHJhbnNmb3JtZXIpXG4gICAgICAgIDogdXNlTGlzdFRyYW5zZm9ybShbaW5wdXRdLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBfYiA9IF9fcmVhZChfYSwgMSksIGxhdGVzdCA9IF9iWzBdO1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zZm9ybWVyKGxhdGVzdCk7XG4gICAgICAgIH0pO1xufVxuZnVuY3Rpb24gdXNlTGlzdFRyYW5zZm9ybSh2YWx1ZXMsIHRyYW5zZm9ybWVyKSB7XG4gICAgdmFyIGxhdGVzdCA9IHVzZUNvbnN0YW50KGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9KTtcbiAgICByZXR1cm4gdXNlQ29tYmluZU1vdGlvblZhbHVlcyh2YWx1ZXMsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGF0ZXN0Lmxlbmd0aCA9IDA7XG4gICAgICAgIHZhciBudW1WYWx1ZXMgPSB2YWx1ZXMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVZhbHVlczsgaSsrKSB7XG4gICAgICAgICAgICBsYXRlc3RbaV0gPSB2YWx1ZXNbaV0uZ2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRyYW5zZm9ybWVyKGxhdGVzdCk7XG4gICAgfSk7XG59XG5cbi8vIEtlZXAgdGhpbmdzIHJlYXNvbmFibGUgYW5kIGF2b2lkIHNjYWxlOiBJbmZpbml0eS4gSW4gcHJhY3Rpc2Ugd2UgbWlnaHQgbmVlZFxuLy8gdG8gYWRkIGFub3RoZXIgdmFsdWUsIG9wYWNpdHksIHRoYXQgY291bGQgaW50ZXJwb2xhdGUgc2NhbGVYL1kgWzAsMC4wMV0gPT4gWzAsMV1cbi8vIHRvIHNpbXBseSBoaWRlIGNvbnRlbnQgYXQgdW5yZWFzb25hYmxlIHNjYWxlcy5cbnZhciBtYXhTY2FsZSA9IDEwMDAwMDtcbnZhciBpbnZlcnRTY2FsZSA9IGZ1bmN0aW9uIChzY2FsZSkge1xuICAgIHJldHVybiBzY2FsZSA+IDAuMDAxID8gMSAvIHNjYWxlIDogbWF4U2NhbGU7XG59O1xudmFyIGhhc1dhcm5lZCA9IGZhbHNlO1xuLyoqXG4gKiBSZXR1cm5zIGEgYE1vdGlvblZhbHVlYCBlYWNoIGZvciBgc2NhbGVYYCBhbmQgYHNjYWxlWWAgdGhhdCB1cGRhdGUgd2l0aCB0aGUgaW52ZXJzZVxuICogb2YgdGhlaXIgcmVzcGVjdGl2ZSBwYXJlbnQgc2NhbGVzLlxuICpcbiAqIFRoaXMgaXMgdXNlZnVsIGZvciB1bmRvaW5nIHRoZSBkaXN0b3J0aW9uIG9mIGNvbnRlbnQgd2hlbiBzY2FsaW5nIGEgcGFyZW50IGNvbXBvbmVudC5cbiAqXG4gKiBCeSBkZWZhdWx0LCBgdXNlSW52ZXJ0ZWRTY2FsZWAgd2lsbCBhdXRvbWF0aWNhbGx5IGZldGNoIGBzY2FsZVhgIGFuZCBgc2NhbGVZYCBmcm9tIHRoZSBuZWFyZXN0IHBhcmVudC5cbiAqIEJ5IHBhc3Npbmcgb3RoZXIgYE1vdGlvblZhbHVlYHMgaW4gYXMgYHVzZUludmVydGVkU2NhbGUoeyBzY2FsZVgsIHNjYWxlWSB9KWAsIGl0IHdpbGwgaW52ZXJ0IHRoZSBvdXRwdXRcbiAqIG9mIHRob3NlIGluc3RlYWQuXG4gKlxuICogQG1vdGlvblxuICpcbiAqIGBgYGpzeFxuICogY29uc3QgTXlDb21wb25lbnQgPSAoKSA9PiB7XG4gKiAgIGNvbnN0IHsgc2NhbGVYLCBzY2FsZVkgfSA9IHVzZUludmVydGVkU2NhbGUoKVxuICogICByZXR1cm4gPG1vdGlvbi5kaXYgc3R5bGU9e3sgc2NhbGVYLCBzY2FsZVkgfX0gLz5cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBsaWJyYXJ5XG4gKlxuICogYGBganN4XG4gKiBmdW5jdGlvbiBNeUNvbXBvbmVudCgpIHtcbiAqICAgY29uc3QgeyBzY2FsZVgsIHNjYWxlWSB9ID0gdXNlSW52ZXJ0ZWRTY2FsZSgpXG4gKiAgIHJldHVybiA8RnJhbWUgc2NhbGVYPXtzY2FsZVh9IHNjYWxlWT17c2NhbGVZfSAvPlxuICogfVxuICogYGBgXG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuZnVuY3Rpb24gdXNlSW52ZXJ0ZWRTY2FsZShzY2FsZSkge1xuICAgIHZhciBwYXJlbnRTY2FsZVggPSB1c2VNb3Rpb25WYWx1ZSgxKTtcbiAgICB2YXIgcGFyZW50U2NhbGVZID0gdXNlTW90aW9uVmFsdWUoMSk7XG4gICAgdmFyIHZpc3VhbEVsZW1lbnQgPSB1c2VWaXN1YWxFbGVtZW50Q29udGV4dCgpO1xuICAgIGludmFyaWFudCghIShzY2FsZSB8fCB2aXN1YWxFbGVtZW50KSwgXCJJZiBubyBzY2FsZSB2YWx1ZXMgYXJlIHByb3ZpZGVkLCB1c2VJbnZlcnRlZFNjYWxlIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBjaGlsZCBvZiBhbm90aGVyIG1vdGlvbiBjb21wb25lbnQuXCIpO1xuICAgIHdhcm5pbmcoaGFzV2FybmVkLCBcInVzZUludmVydGVkU2NhbGUgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIDMuMC4gVXNlIHRoZSBsYXlvdXQgcHJvcCBpbnN0ZWFkLlwiKTtcbiAgICBoYXNXYXJuZWQgPSB0cnVlO1xuICAgIGlmIChzY2FsZSkge1xuICAgICAgICBwYXJlbnRTY2FsZVggPSBzY2FsZS5zY2FsZVggfHwgcGFyZW50U2NhbGVYO1xuICAgICAgICBwYXJlbnRTY2FsZVkgPSBzY2FsZS5zY2FsZVkgfHwgcGFyZW50U2NhbGVZO1xuICAgIH1cbiAgICBlbHNlIGlmICh2aXN1YWxFbGVtZW50KSB7XG4gICAgICAgIHBhcmVudFNjYWxlWCA9IHZpc3VhbEVsZW1lbnQuZ2V0VmFsdWUoXCJzY2FsZVhcIiwgMSk7XG4gICAgICAgIHBhcmVudFNjYWxlWSA9IHZpc3VhbEVsZW1lbnQuZ2V0VmFsdWUoXCJzY2FsZVlcIiwgMSk7XG4gICAgfVxuICAgIHZhciBzY2FsZVggPSB1c2VUcmFuc2Zvcm0ocGFyZW50U2NhbGVYLCBpbnZlcnRTY2FsZSk7XG4gICAgdmFyIHNjYWxlWSA9IHVzZVRyYW5zZm9ybShwYXJlbnRTY2FsZVksIGludmVydFNjYWxlKTtcbiAgICByZXR1cm4geyBzY2FsZVg6IHNjYWxlWCwgc2NhbGVZOiBzY2FsZVkgfTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgYE1vdGlvblZhbHVlYCB0aGF0LCB3aGVuIGBzZXRgLCB3aWxsIHVzZSBhIHNwcmluZyBhbmltYXRpb24gdG8gYW5pbWF0ZSB0byBpdHMgbmV3IHN0YXRlLlxuICpcbiAqIEl0IGNhbiBlaXRoZXIgd29yayBhcyBhIHN0YW5kLWFsb25lIGBNb3Rpb25WYWx1ZWAgYnkgaW5pdGlhbGlzaW5nIGl0IHdpdGggYSB2YWx1ZSwgb3IgYXMgYSBzdWJzY3JpYmVyXG4gKiB0byBhbm90aGVyIGBNb3Rpb25WYWx1ZWAuXG4gKlxuICogQHJlbWFya3NcbiAqXG4gKiBgYGBqc3hcbiAqIGNvbnN0IHggPSB1c2VTcHJpbmcoMCwgeyBzdGlmZm5lc3M6IDMwMCB9KVxuICogY29uc3QgeSA9IHVzZVNwcmluZyh4LCB7IGRhbXBpbmc6IDEwIH0pXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gaW5wdXRWYWx1ZSAtIGBNb3Rpb25WYWx1ZWAgb3IgbnVtYmVyLiBJZiBwcm92aWRlZCBhIGBNb3Rpb25WYWx1ZWAsIHdoZW4gdGhlIGlucHV0IGBNb3Rpb25WYWx1ZWAgY2hhbmdlcywgdGhlIGNyZWF0ZWQgYE1vdGlvblZhbHVlYCB3aWxsIHNwcmluZyB0b3dhcmRzIHRoYXQgdmFsdWUuXG4gKiBAcGFyYW0gc3ByaW5nQ29uZmlnIC0gQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgc3ByaW5nLlxuICogQHJldHVybnMgYE1vdGlvblZhbHVlYFxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdXNlU3ByaW5nKHNvdXJjZSwgY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHt9OyB9XG4gICAgdmFyIGFjdGl2ZVNwcmluZ0FuaW1hdGlvbiA9IHVzZVJlZihudWxsKTtcbiAgICB2YXIgdmFsdWUgPSB1c2VNb3Rpb25WYWx1ZShpc01vdGlvblZhbHVlKHNvdXJjZSkgPyBzb3VyY2UuZ2V0KCkgOiBzb3VyY2UpO1xuICAgIHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmFsdWUuYXR0YWNoKGZ1bmN0aW9uICh2LCBzZXQpIHtcbiAgICAgICAgICAgIGlmIChhY3RpdmVTcHJpbmdBbmltYXRpb24uY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVNwcmluZ0FuaW1hdGlvbi5jdXJyZW50LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdGl2ZVNwcmluZ0FuaW1hdGlvbi5jdXJyZW50ID0gYW5pbWF0ZSQxKF9fYXNzaWduKF9fYXNzaWduKHsgZnJvbTogdmFsdWUuZ2V0KCksIHRvOiB2LCB2ZWxvY2l0eTogdmFsdWUuZ2V0VmVsb2NpdHkoKSB9LCBjb25maWcpLCB7IG9uVXBkYXRlOiBzZXQgfSkpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmdldCgpO1xuICAgICAgICB9KTtcbiAgICB9LCBPYmplY3QudmFsdWVzKGNvbmZpZykpO1xuICAgIHVzZU9uQ2hhbmdlKHNvdXJjZSwgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHZhbHVlLnNldChwYXJzZUZsb2F0KHYpKTsgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTY3JvbGxNb3Rpb25WYWx1ZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2Nyb2xsWDogbW90aW9uVmFsdWUoMCksXG4gICAgICAgIHNjcm9sbFk6IG1vdGlvblZhbHVlKDApLFxuICAgICAgICBzY3JvbGxYUHJvZ3Jlc3M6IG1vdGlvblZhbHVlKDApLFxuICAgICAgICBzY3JvbGxZUHJvZ3Jlc3M6IG1vdGlvblZhbHVlKDApLFxuICAgIH07XG59XG5mdW5jdGlvbiBzZXRQcm9ncmVzcyhvZmZzZXQsIG1heE9mZnNldCwgdmFsdWUpIHtcbiAgICB2YWx1ZS5zZXQoIW9mZnNldCB8fCAhbWF4T2Zmc2V0ID8gMCA6IG9mZnNldCAvIG1heE9mZnNldCk7XG59XG5mdW5jdGlvbiBjcmVhdGVTY3JvbGxVcGRhdGVyKHZhbHVlcywgZ2V0T2Zmc2V0cykge1xuICAgIHZhciB1cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IGdldE9mZnNldHMoKSwgeE9mZnNldCA9IF9hLnhPZmZzZXQsIHlPZmZzZXQgPSBfYS55T2Zmc2V0LCB4TWF4T2Zmc2V0ID0gX2EueE1heE9mZnNldCwgeU1heE9mZnNldCA9IF9hLnlNYXhPZmZzZXQ7XG4gICAgICAgIC8vIFNldCBhYnNvbHV0ZSBwb3NpdGlvbnNcbiAgICAgICAgdmFsdWVzLnNjcm9sbFguc2V0KHhPZmZzZXQpO1xuICAgICAgICB2YWx1ZXMuc2Nyb2xsWS5zZXQoeU9mZnNldCk7XG4gICAgICAgIC8vIFNldCAwLTEgcHJvZ3Jlc3NcbiAgICAgICAgc2V0UHJvZ3Jlc3MoeE9mZnNldCwgeE1heE9mZnNldCwgdmFsdWVzLnNjcm9sbFhQcm9ncmVzcyk7XG4gICAgICAgIHNldFByb2dyZXNzKHlPZmZzZXQsIHlNYXhPZmZzZXQsIHZhbHVlcy5zY3JvbGxZUHJvZ3Jlc3MpO1xuICAgIH07XG4gICAgdXBkYXRlKCk7XG4gICAgcmV0dXJuIHVwZGF0ZTtcbn1cblxudmFyIGdldEVsZW1lbnRTY3JvbGxPZmZzZXRzID0gZnVuY3Rpb24gKGVsZW1lbnQpIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4T2Zmc2V0OiBlbGVtZW50LnNjcm9sbExlZnQsXG4gICAgICAgIHlPZmZzZXQ6IGVsZW1lbnQuc2Nyb2xsVG9wLFxuICAgICAgICB4TWF4T2Zmc2V0OiBlbGVtZW50LnNjcm9sbFdpZHRoIC0gZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgeU1heE9mZnNldDogZWxlbWVudC5zY3JvbGxIZWlnaHQgLSBlbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICB9O1xufTsgfTtcbi8qKlxuICogUmV0dXJucyBNb3Rpb25WYWx1ZXMgdGhhdCB1cGRhdGUgd2hlbiB0aGUgcHJvdmlkZWQgZWxlbWVudCBzY3JvbGxzOlxuICpcbiAqIC0gYHNjcm9sbFhgIOKAlCBIb3Jpem9udGFsIHNjcm9sbCBkaXN0YW5jZSBpbiBwaXhlbHMuXG4gKiAtIGBzY3JvbGxZYCDigJQgVmVydGljYWwgc2Nyb2xsIGRpc3RhbmNlIGluIHBpeGVscy5cbiAqIC0gYHNjcm9sbFhQcm9ncmVzc2Ag4oCUIEhvcml6b250YWwgc2Nyb2xsIHByb2dyZXNzIGJldHdlZW4gYDBgIGFuZCBgMWAuXG4gKiAtIGBzY3JvbGxZUHJvZ3Jlc3NgIOKAlCBWZXJ0aWNhbCBzY3JvbGwgcHJvZ3Jlc3MgYmV0d2VlbiBgMGAgYW5kIGAxYC5cbiAqXG4gKiBUaGlzIGVsZW1lbnQgbXVzdCBiZSBzZXQgdG8gYG92ZXJmbG93OiBzY3JvbGxgIG9uIGVpdGhlciBvciBib3RoIGF4ZXMgdG8gcmVwb3J0IHNjcm9sbCBvZmZzZXQuXG4gKlxuICogQGxpYnJhcnlcbiAqXG4gKiBgYGBqc3hcbiAqIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG4gKiBpbXBvcnQge1xuICogICBGcmFtZSxcbiAqICAgdXNlRWxlbWVudFNjcm9sbCxcbiAqICAgdXNlVHJhbnNmb3JtXG4gKiB9IGZyb20gXCJmcmFtZXJcIlxuICpcbiAqIGV4cG9ydCBmdW5jdGlvbiBNeUNvbXBvbmVudCgpIHtcbiAqICAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKClcbiAqICAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZUVsZW1lbnRTY3JvbGwocmVmKVxuICpcbiAqICAgcmV0dXJuIChcbiAqICAgICA8RnJhbWUgcmVmPXtyZWZ9PlxuICogICAgICAgPEZyYW1lIHNjYWxlWD17c2Nyb2xsWVByb2dyZXNzfSAvPlxuICogICAgIDwvRnJhbWU+XG4gKiAgIClcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBtb3Rpb25cbiAqXG4gKiBgYGBqc3hcbiAqIGV4cG9ydCBjb25zdCBNeUNvbXBvbmVudCA9ICgpID0+IHtcbiAqICAgY29uc3QgcmVmID0gdXNlUmVmKClcbiAqICAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZUVsZW1lbnRTY3JvbGwocmVmKVxuICpcbiAqICAgcmV0dXJuIChcbiAqICAgICA8ZGl2IHJlZj17cmVmfT5cbiAqICAgICAgIDxtb3Rpb24uZGl2IHN0eWxlPXt7IHNjYWxlWDogc2Nyb2xsWVByb2dyZXNzIH19IC8+XG4gKiAgICAgPC9kaXY+XG4gKiAgIClcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdXNlRWxlbWVudFNjcm9sbChyZWYpIHtcbiAgICB2YXIgdmFsdWVzID0gdXNlQ29uc3RhbnQoY3JlYXRlU2Nyb2xsTW90aW9uVmFsdWVzKTtcbiAgICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSByZWYuY3VycmVudDtcbiAgICAgICAgaW52YXJpYW50KCEhZWxlbWVudCwgXCJyZWYgcHJvdmlkZWQgdG8gdXNlU2Nyb2xsIG11c3QgYmUgcGFzc2VkIGludG8gYSBIVE1MIGVsZW1lbnQuXCIpO1xuICAgICAgICBpZiAoIWVsZW1lbnQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciB1cGRhdGVTY3JvbGxWYWx1ZXMgPSBjcmVhdGVTY3JvbGxVcGRhdGVyKHZhbHVlcywgZ2V0RWxlbWVudFNjcm9sbE9mZnNldHMoZWxlbWVudCkpO1xuICAgICAgICB2YXIgc2Nyb2xsTGlzdGVuZXIgPSBhZGREb21FdmVudChlbGVtZW50LCBcInNjcm9sbFwiLCB1cGRhdGVTY3JvbGxWYWx1ZXMsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgdmFyIHJlc2l6ZUxpc3RlbmVyID0gYWRkRG9tRXZlbnQoZWxlbWVudCwgXCJyZXNpemVcIiwgdXBkYXRlU2Nyb2xsVmFsdWVzKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNjcm9sbExpc3RlbmVyICYmIHNjcm9sbExpc3RlbmVyKCk7XG4gICAgICAgICAgICByZXNpemVMaXN0ZW5lciAmJiByZXNpemVMaXN0ZW5lcigpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gdmFsdWVzO1xufVxuXG52YXIgdmlld3BvcnRTY3JvbGxWYWx1ZXMgPSBjcmVhdGVTY3JvbGxNb3Rpb25WYWx1ZXMoKTtcbmZ1bmN0aW9uIGdldFZpZXdwb3J0U2Nyb2xsT2Zmc2V0cygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4T2Zmc2V0OiB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgICAgIHlPZmZzZXQ6IHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICAgeE1heE9mZnNldDogZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICB5TWF4T2Zmc2V0OiBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICB9O1xufVxudmFyIGhhc0xpc3RlbmVycyA9IGZhbHNlO1xuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaGFzTGlzdGVuZXJzID0gdHJ1ZTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgcmV0dXJuO1xuICAgIHZhciB1cGRhdGVTY3JvbGxWYWx1ZXMgPSBjcmVhdGVTY3JvbGxVcGRhdGVyKHZpZXdwb3J0U2Nyb2xsVmFsdWVzLCBnZXRWaWV3cG9ydFNjcm9sbE9mZnNldHMpO1xuICAgIGFkZERvbUV2ZW50KHdpbmRvdywgXCJzY3JvbGxcIiwgdXBkYXRlU2Nyb2xsVmFsdWVzLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgYWRkRG9tRXZlbnQod2luZG93LCBcInJlc2l6ZVwiLCB1cGRhdGVTY3JvbGxWYWx1ZXMpO1xufVxuLyoqXG4gKiBSZXR1cm5zIE1vdGlvblZhbHVlcyB0aGF0IHVwZGF0ZSB3aGVuIHRoZSB2aWV3cG9ydCBzY3JvbGxzOlxuICpcbiAqIC0gYHNjcm9sbFhgIOKAlCBIb3Jpem9udGFsIHNjcm9sbCBkaXN0YW5jZSBpbiBwaXhlbHMuXG4gKiAtIGBzY3JvbGxZYCDigJQgVmVydGljYWwgc2Nyb2xsIGRpc3RhbmNlIGluIHBpeGVscy5cbiAqIC0gYHNjcm9sbFhQcm9ncmVzc2Ag4oCUIEhvcml6b250YWwgc2Nyb2xsIHByb2dyZXNzIGJldHdlZW4gYDBgIGFuZCBgMWAuXG4gKiAtIGBzY3JvbGxZUHJvZ3Jlc3NgIOKAlCBWZXJ0aWNhbCBzY3JvbGwgcHJvZ3Jlc3MgYmV0d2VlbiBgMGAgYW5kIGAxYC5cbiAqXG4gKiBAbGlicmFyeVxuICpcbiAqIGBgYGpzeFxuICogaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbiAqIGltcG9ydCB7XG4gKiAgIEZyYW1lLFxuICogICB1c2VWaWV3cG9ydFNjcm9sbCxcbiAqICAgdXNlVHJhbnNmb3JtXG4gKiB9IGZyb20gXCJmcmFtZXJcIlxuICpcbiAqIGV4cG9ydCBmdW5jdGlvbiBNeUNvbXBvbmVudCgpIHtcbiAqICAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKClcbiAqICAgcmV0dXJuIDxGcmFtZSBzY2FsZVg9e3Njcm9sbFlQcm9ncmVzc30gLz5cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBtb3Rpb25cbiAqXG4gKiBgYGBqc3hcbiAqIGV4cG9ydCBjb25zdCBNeUNvbXBvbmVudCA9ICgpID0+IHtcbiAqICAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKClcbiAqICAgcmV0dXJuIDxtb3Rpb24uZGl2IHN0eWxlPXt7IHNjYWxlWDogc2Nyb2xsWVByb2dyZXNzIH19IC8+XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHVzZVZpZXdwb3J0U2Nyb2xsKCkge1xuICAgIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICAhaGFzTGlzdGVuZXJzICYmIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiB2aWV3cG9ydFNjcm9sbFZhbHVlcztcbn1cblxuLy8gRG9lcyB0aGlzIGRldmljZSBwcmVmZXIgcmVkdWNlZCBtb3Rpb24/IFJldHVybnMgYG51bGxgIHNlcnZlci1zaWRlLlxudmFyIHByZWZlcnNSZWR1Y2VkTW90aW9uID0gbW90aW9uVmFsdWUobnVsbCk7XG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSkge1xuICAgICAgICB2YXIgbW90aW9uTWVkaWFRdWVyeV8xID0gd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1yZWR1Y2VkLW1vdGlvbilcIik7XG4gICAgICAgIHZhciBzZXRSZWR1Y2VkTW90aW9uUHJlZmVyZW5jZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZmVyc1JlZHVjZWRNb3Rpb24uc2V0KG1vdGlvbk1lZGlhUXVlcnlfMS5tYXRjaGVzKTtcbiAgICAgICAgfTtcbiAgICAgICAgbW90aW9uTWVkaWFRdWVyeV8xLmFkZExpc3RlbmVyKHNldFJlZHVjZWRNb3Rpb25QcmVmZXJlbmNlcyk7XG4gICAgICAgIHNldFJlZHVjZWRNb3Rpb25QcmVmZXJlbmNlcygpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcHJlZmVyc1JlZHVjZWRNb3Rpb24uc2V0KGZhbHNlKTtcbiAgICB9XG59XG4vKipcbiAqIEEgaG9vayB0aGF0IHJldHVybnMgYHRydWVgIGlmIHdlIHNob3VsZCBiZSB1c2luZyByZWR1Y2VkIG1vdGlvbiBiYXNlZCBvbiB0aGUgY3VycmVudCBkZXZpY2UncyBSZWR1Y2VkIE1vdGlvbiBzZXR0aW5nLlxuICpcbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gaW1wbGVtZW50IGNoYW5nZXMgdG8geW91ciBVSSBiYXNlZCBvbiBSZWR1Y2VkIE1vdGlvbi4gRm9yIGluc3RhbmNlLCByZXBsYWNpbmcgbW90aW9uLXNpY2tuZXNzIGluZHVjaW5nXG4gKiBgeGAvYHlgIGFuaW1hdGlvbnMgd2l0aCBgb3BhY2l0eWAsIGRpc2FibGluZyB0aGUgYXV0b3BsYXkgb2YgYmFja2dyb3VuZCB2aWRlb3MsIG9yIHR1cm5pbmcgb2ZmIHBhcmFsbGF4IG1vdGlvbi5cbiAqXG4gKiBJdCB3aWxsIGFjdGl2ZWx5IHJlc3BvbmQgdG8gY2hhbmdlcyBhbmQgcmUtcmVuZGVyIHlvdXIgY29tcG9uZW50cyB3aXRoIHRoZSBsYXRlc3Qgc2V0dGluZy5cbiAqXG4gKiBgYGBqc3hcbiAqIGV4cG9ydCBmdW5jdGlvbiBTaWRlYmFyKHsgaXNPcGVuIH0pIHtcbiAqICAgY29uc3Qgc2hvdWxkUmVkdWNlTW90aW9uID0gdXNlUmVkdWNlZE1vdGlvbigpXG4gKiAgIGNvbnN0IGNsb3NlZFggPSBzaG91bGRSZWR1Y2VNb3Rpb24gPyAwIDogXCItMTAwJVwiXG4gKlxuICogICByZXR1cm4gKFxuICogICAgIDxtb3Rpb24uZGl2IGFuaW1hdGU9e3tcbiAqICAgICAgIG9wYWNpdHk6IGlzT3BlbiA/IDEgOiAwLFxuICogICAgICAgeDogaXNPcGVuID8gMCA6IGNsb3NlZFhcbiAqICAgICB9fSAvPlxuICogICApXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcmV0dXJuIGJvb2xlYW5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHVzZVJlZHVjZWRNb3Rpb24oKSB7XG4gICAgdmFyIF9hID0gX19yZWFkKHVzZVN0YXRlKHByZWZlcnNSZWR1Y2VkTW90aW9uLmdldCgpKSwgMiksIHNob3VsZFJlZHVjZU1vdGlvbiA9IF9hWzBdLCBzZXRTaG91bGRSZWR1Y2VNb3Rpb24gPSBfYVsxXTtcbiAgICB1c2VPbkNoYW5nZShwcmVmZXJzUmVkdWNlZE1vdGlvbiwgc2V0U2hvdWxkUmVkdWNlTW90aW9uKTtcbiAgICByZXR1cm4gc2hvdWxkUmVkdWNlTW90aW9uO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYEFuaW1hdGlvbkNvbnRyb2xzYCwgd2hpY2ggY2FuIGJlIHVzZWQgdG8gbWFudWFsbHkgc3RhcnQsIHN0b3BcbiAqIGFuZCBzZXF1ZW5jZSBhbmltYXRpb25zIG9uIG9uZSBvciBtb3JlIGNvbXBvbmVudHMuXG4gKlxuICogVGhlIHJldHVybmVkIGBBbmltYXRpb25Db250cm9sc2Agc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgYGFuaW1hdGVgIHByb3BlcnR5XG4gKiBvZiB0aGUgY29tcG9uZW50cyB5b3Ugd2FudCB0byBhbmltYXRlLlxuICpcbiAqIFRoZXNlIGNvbXBvbmVudHMgY2FuIHRoZW4gYmUgYW5pbWF0ZWQgd2l0aCB0aGUgYHN0YXJ0YCBtZXRob2QuXG4gKlxuICogQGxpYnJhcnlcbiAqXG4gKiBgYGBqc3hcbiAqIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuICogaW1wb3J0IHsgRnJhbWUsIHVzZUFuaW1hdGlvbiB9IGZyb20gJ2ZyYW1lcidcbiAqXG4gKiBleHBvcnQgZnVuY3Rpb24gTXlDb21wb25lbnQocHJvcHMpIHtcbiAqICAgIGNvbnN0IGNvbnRyb2xzID0gdXNlQW5pbWF0aW9uKClcbiAqXG4gKiAgICBjb250cm9scy5zdGFydCh7XG4gKiAgICAgICAgeDogMTAwLFxuICogICAgICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDAuNSB9LFxuICogICAgfSlcbiAqXG4gKiAgICByZXR1cm4gPEZyYW1lIGFuaW1hdGU9e2NvbnRyb2xzfSAvPlxuICogfVxuICogYGBgXG4gKlxuICogQG1vdGlvblxuICpcbiAqIGBgYGpzeFxuICogaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG4gKiBpbXBvcnQgeyBtb3Rpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG4gKlxuICogZXhwb3J0IGZ1bmN0aW9uIE15Q29tcG9uZW50KHByb3BzKSB7XG4gKiAgICBjb25zdCBjb250cm9scyA9IHVzZUFuaW1hdGlvbigpXG4gKlxuICogICAgY29udHJvbHMuc3RhcnQoe1xuICogICAgICAgIHg6IDEwMCxcbiAqICAgICAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjUgfSxcbiAqICAgIH0pXG4gKlxuICogICAgcmV0dXJuIDxtb3Rpb24uZGl2IGFuaW1hdGU9e2NvbnRyb2xzfSAvPlxuICogfVxuICogYGBgXG4gKlxuICogQHJldHVybnMgQW5pbWF0aW9uIGNvbnRyb2xsZXIgd2l0aCBgc3RhcnRgIGFuZCBgc3RvcGAgbWV0aG9kc1xuICpcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdXNlQW5pbWF0aW9uKCkge1xuICAgIHZhciBhbmltYXRpb25Db250cm9scyA9IHVzZUNvbnN0YW50KGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBBbmltYXRpb25Db250cm9scygpOyB9KTtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBhbmltYXRpb25Db250cm9scy5tb3VudCgpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gYW5pbWF0aW9uQ29udHJvbHMudW5tb3VudCgpOyB9O1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gYW5pbWF0aW9uQ29udHJvbHM7XG59XG5cbi8qKlxuICogQW5pbWF0ZSBhIHNpbmdsZSB2YWx1ZSBvciBhIGBNb3Rpb25WYWx1ZWAuXG4gKlxuICogVGhlIGZpcnN0IGFyZ3VtZW50IGlzIGVpdGhlciBhIGBNb3Rpb25WYWx1ZWAgdG8gYW5pbWF0ZSwgb3IgYW4gaW5pdGlhbCBhbmltYXRpb24gdmFsdWUuXG4gKlxuICogVGhlIHNlY29uZCBpcyBlaXRoZXIgYSB2YWx1ZSB0byBhbmltYXRlIHRvLCBvciBhbiBhcnJheSBvZiBrZXlmcmFtZXMgdG8gYW5pbWF0ZSB0aHJvdWdoLlxuICpcbiAqIFRoZSB0aGlyZCBhcmd1bWVudCBjYW4gYmUgZWl0aGVyIHR3ZWVuIG9yIHNwcmluZyBvcHRpb25zLCBhbmQgb3B0aW9uYWwgbGlmZWN5Y2xlIG1ldGhvZHM6IGBvblVwZGF0ZWAsIGBvblBsYXlgLCBgb25Db21wbGV0ZWAsIGBvblJlcGVhdGAgYW5kIGBvblN0b3BgLlxuICpcbiAqIFJldHVybnMgYFBsYXliYWNrQ29udHJvbHNgLCBjdXJyZW50bHkganVzdCBhIGBzdG9wYCBtZXRob2QuXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogY29uc3QgeCA9IHVzZU1vdGlvblZhbHVlKDApXG4gKlxuICogdXNlRWZmZWN0KCgpID0+IHtcbiAqICAgY29uc3QgY29udHJvbHMgPSBhbmltYXRlKHgsIDEwMCwge1xuICogICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gKiAgICAgc3RpZmZuZXNzOiAyMDAwLFxuICogICAgIG9uQ29tcGxldGU6IHYgPT4ge31cbiAqICAgfSlcbiAqXG4gKiAgIHJldHVybiBjb250cm9scy5zdG9wXG4gKiB9KVxuICogYGBgXG4gKlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBhbmltYXRlKGZyb20sIHRvLCB0cmFuc2l0aW9uKSB7XG4gICAgaWYgKHRyYW5zaXRpb24gPT09IHZvaWQgMCkgeyB0cmFuc2l0aW9uID0ge307IH1cbiAgICB2YXIgdmFsdWUgPSBpc01vdGlvblZhbHVlKGZyb20pID8gZnJvbSA6IG1vdGlvblZhbHVlKGZyb20pO1xuICAgIHN0YXJ0QW5pbWF0aW9uKFwiXCIsIHZhbHVlLCB0bywgdHJhbnNpdGlvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RvcDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdmFsdWUuc3RvcCgpOyB9LFxuICAgIH07XG59XG5cbi8qKlxuICogQ3ljbGVzIHRocm91Z2ggYSBzZXJpZXMgb2YgdmlzdWFsIHByb3BlcnRpZXMuIENhbiBiZSB1c2VkIHRvIHRvZ2dsZSBiZXR3ZWVuIG9yIGN5Y2xlIHRocm91Z2ggYW5pbWF0aW9ucy4gSXQgd29ya3Mgc2ltaWxhciB0byBgdXNlU3RhdGVgIGluIFJlYWN0LiBJdCBpcyBwcm92aWRlZCBhbiBpbml0aWFsIGFycmF5IG9mIHBvc3NpYmxlIHN0YXRlcywgYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgdHdvIGFyZ3VtZW50cy5cbiAqXG4gKiBAbGlicmFyeVxuICpcbiAqIGBgYGpzeFxuICogaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbiAqIGltcG9ydCB7IEZyYW1lLCB1c2VDeWNsZSB9IGZyb20gXCJmcmFtZXJcIlxuICpcbiAqIGV4cG9ydCBmdW5jdGlvbiBNeUNvbXBvbmVudCgpIHtcbiAqICAgY29uc3QgW3gsIGN5Y2xlWF0gPSB1c2VDeWNsZSgwLCA1MCwgMTAwKVxuICpcbiAqICAgcmV0dXJuIChcbiAqICAgICA8RnJhbWVcbiAqICAgICAgIGFuaW1hdGU9e3sgeDogeCB9fVxuICogICAgICAgb25UYXA9eygpID0+IGN5Y2xlWCgpfVxuICogICAgICAvPlxuICogICAgKVxuICogfVxuICogYGBgXG4gKlxuICogQG1vdGlvblxuICpcbiAqIEFuIGluZGV4IHZhbHVlIGNhbiBiZSBwYXNzZWQgdG8gdGhlIHJldHVybmVkIGBjeWNsZWAgZnVuY3Rpb24gdG8gY3ljbGUgdG8gYSBzcGVjaWZpYyBpbmRleC5cbiAqXG4gKiBgYGBqc3hcbiAqIGltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG4gKiBpbXBvcnQgeyBtb3Rpb24sIHVzZUN5Y2xlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuICpcbiAqIGV4cG9ydCBjb25zdCBNeUNvbXBvbmVudCA9ICgpID0+IHtcbiAqICAgY29uc3QgW3gsIGN5Y2xlWF0gPSB1c2VDeWNsZSgwLCA1MCwgMTAwKVxuICpcbiAqICAgcmV0dXJuIChcbiAqICAgICA8bW90aW9uLmRpdlxuICogICAgICAgYW5pbWF0ZT17eyB4OiB4IH19XG4gKiAgICAgICBvblRhcD17KCkgPT4gY3ljbGVYKCl9XG4gKiAgICAgIC8+XG4gKiAgICApXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0gaXRlbXMgLSBpdGVtcyB0byBjeWNsZSB0aHJvdWdoXG4gKiBAcmV0dXJucyBbY3VycmVudFN0YXRlLCBjeWNsZVN0YXRlXVxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdXNlQ3ljbGUoKSB7XG4gICAgdmFyIGl0ZW1zID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgaXRlbXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICB9XG4gICAgLy8gVE9ETzogQWZ0ZXIgRnJhbWVyIFggYmV0YSwgcmVtb3ZlIHRoaXMgd2FybmluZ1xuICAgIHdhcm5pbmcoaXRlbXMubGVuZ3RoID4gMSwgXCJ1c2VDeWNsZSBzeW50YXggaGFzIGNoYW5nZWQuIGB1c2VDeWNsZShbMCwgMSwgMl0pYCBiZWNvbWVzIGB1c2VDeWNsZSgwLCAxLCAyKWBcIik7XG4gICAgdmFyIGluZGV4ID0gdXNlUmVmKDApO1xuICAgIHZhciBfYSA9IF9fcmVhZCh1c2VTdGF0ZShpdGVtc1tpbmRleC5jdXJyZW50XSksIDIpLCBpdGVtID0gX2FbMF0sIHNldEl0ZW0gPSBfYVsxXTtcbiAgICByZXR1cm4gW1xuICAgICAgICBpdGVtLFxuICAgICAgICBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICAgICAgaW5kZXguY3VycmVudCA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIG5leHQgIT09IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgPyB3cmFwKDAsIGl0ZW1zLmxlbmd0aCwgaW5kZXguY3VycmVudCArIDEpXG4gICAgICAgICAgICAgICAgICAgIDogbmV4dDtcbiAgICAgICAgICAgIHNldEl0ZW0oaXRlbXNbaW5kZXguY3VycmVudF0pO1xuICAgICAgICB9LFxuICAgIF07XG59XG5cbi8qKlxuICogQ2FuIG1hbnVhbGx5IHRyaWdnZXIgYSBkcmFnIGdlc3R1cmUgb24gb25lIG9yIG1vcmUgYGRyYWdgLWVuYWJsZWQgYG1vdGlvbmAgY29tcG9uZW50cy5cbiAqXG4gKiBAbGlicmFyeVxuICpcbiAqIGBgYGpzeFxuICogY29uc3QgZHJhZ0NvbnRyb2xzID0gdXNlRHJhZ0NvbnRyb2xzKClcbiAqXG4gKiBmdW5jdGlvbiBzdGFydERyYWcoZXZlbnQpIHtcbiAqICAgZHJhZ0NvbnRyb2xzLnN0YXJ0KGV2ZW50LCB7IHNuYXBUb0N1cnNvcjogdHJ1ZSB9KVxuICogfVxuICpcbiAqIHJldHVybiAoXG4gKiAgIDw+XG4gKiAgICAgPEZyYW1lIG9uVGFwU3RhcnQ9e3N0YXJ0RHJhZ30gLz5cbiAqICAgICA8RnJhbWUgZHJhZz1cInhcIiBkcmFnQ29udHJvbHM9e2RyYWdDb250cm9sc30gLz5cbiAqICAgPC8+XG4gKiApXG4gKiBgYGBcbiAqXG4gKiBAbW90aW9uXG4gKlxuICogYGBganN4XG4gKiBjb25zdCBkcmFnQ29udHJvbHMgPSB1c2VEcmFnQ29udHJvbHMoKVxuICpcbiAqIGZ1bmN0aW9uIHN0YXJ0RHJhZyhldmVudCkge1xuICogICBkcmFnQ29udHJvbHMuc3RhcnQoZXZlbnQsIHsgc25hcFRvQ3Vyc29yOiB0cnVlIH0pXG4gKiB9XG4gKlxuICogcmV0dXJuIChcbiAqICAgPD5cbiAqICAgICA8ZGl2IG9uUG9pbnRlckRvd249e3N0YXJ0RHJhZ30gLz5cbiAqICAgICA8bW90aW9uLmRpdiBkcmFnPVwieFwiIGRyYWdDb250cm9scz17ZHJhZ0NvbnRyb2xzfSAvPlxuICogICA8Lz5cbiAqIClcbiAqIGBgYFxuICpcbiAqIEBwdWJsaWNcbiAqL1xudmFyIERyYWdDb250cm9scyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEcmFnQ29udHJvbHMoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50Q29udHJvbHMgPSBuZXcgU2V0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZSBhIGNvbXBvbmVudCdzIGludGVybmFsIGBWaXN1YWxFbGVtZW50RHJhZ0NvbnRyb2xzYCB0byB0aGUgdXNlci1mYWNpbmcgQVBJLlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgRHJhZ0NvbnRyb2xzLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoY29udHJvbHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5jb21wb25lbnRDb250cm9scy5hZGQoY29udHJvbHMpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuY29tcG9uZW50Q29udHJvbHMuZGVsZXRlKGNvbnRyb2xzKTsgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFN0YXJ0IGEgZHJhZyBnZXN0dXJlIG9uIGV2ZXJ5IGBtb3Rpb25gIGNvbXBvbmVudCB0aGF0IGhhcyB0aGlzIHNldCBvZiBkcmFnIGNvbnRyb2xzXG4gICAgICogcGFzc2VkIGludG8gaXQgdmlhIHRoZSBgZHJhZ0NvbnRyb2xzYCBwcm9wLlxuICAgICAqXG4gICAgICogYGBganN4XG4gICAgICogZHJhZ0NvbnRyb2xzLnN0YXJ0KGUsIHtcbiAgICAgKiAgIHNuYXBUb0N1cnNvcjogdHJ1ZVxuICAgICAqIH0pXG4gICAgICogYGBgXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnQgLSBQb2ludGVyRXZlbnRcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbnNcbiAgICAgKlxuICAgICAqIEBwdWJsaWNcbiAgICAgKi9cbiAgICBEcmFnQ29udHJvbHMucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKGV2ZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50Q29udHJvbHMuZm9yRWFjaChmdW5jdGlvbiAoY29udHJvbHMpIHtcbiAgICAgICAgICAgIGNvbnRyb2xzLnN0YXJ0KGV2ZW50Lm5hdGl2ZUV2ZW50IHx8IGV2ZW50LCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBEcmFnQ29udHJvbHMucHJvdG90eXBlLnVwZGF0ZUNvbnN0cmFpbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudENvbnRyb2xzLmZvckVhY2goZnVuY3Rpb24gKGNvbnRyb2xzKSB7XG4gICAgICAgICAgICBjb250cm9scy5wcmVwYXJlQm91bmRpbmdCb3goKTtcbiAgICAgICAgICAgIGNvbnRyb2xzLnJlc29sdmVEcmFnQ29uc3RyYWludHMoKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gRHJhZ0NvbnRyb2xzO1xufSgpKTtcbnZhciBjcmVhdGVEcmFnQ29udHJvbHMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgRHJhZ0NvbnRyb2xzKCk7IH07XG4vKipcbiAqIFVzdWFsbHksIGRyYWdnaW5nIGlzIGluaXRpYXRlZCBieSBwcmVzc2luZyBkb3duIG9uIGEgYG1vdGlvbmAgY29tcG9uZW50IHdpdGggYSBgZHJhZ2AgcHJvcFxuICogYW5kIG1vdmluZyBpdC4gRm9yIHNvbWUgdXNlLWNhc2VzLCBmb3IgaW5zdGFuY2UgY2xpY2tpbmcgYXQgYW4gYXJiaXRyYXJ5IHBvaW50IG9uIGEgdmlkZW8gc2NydWJiZXIsIHdlXG4gKiBtaWdodCB3YW50IHRvIGluaXRpYXRlIHRoYXQgZHJhZ2dpbmcgZnJvbSBhIGRpZmZlcmVudCBjb21wb25lbnQgdGhhbiB0aGUgZHJhZ2dhYmxlIG9uZS5cbiAqXG4gKiBCeSBjcmVhdGluZyBhIGBkcmFnQ29udHJvbHNgIHVzaW5nIHRoZSBgdXNlRHJhZ0NvbnRyb2xzYCBob29rLCB3ZSBjYW4gcGFzcyB0aGlzIGludG9cbiAqIHRoZSBkcmFnZ2FibGUgY29tcG9uZW50J3MgYGRyYWdDb250cm9sc2AgcHJvcC4gSXQgZXhwb3NlcyBhIGBzdGFydGAgbWV0aG9kXG4gKiB0aGF0IGNhbiBzdGFydCBkcmFnZ2luZyBmcm9tIHBvaW50ZXIgZXZlbnRzIG9uIG90aGVyIGNvbXBvbmVudHMuXG4gKlxuICogQGxpYnJhcnlcbiAqXG4gKiBgYGBqc3hcbiAqIGNvbnN0IGRyYWdDb250cm9scyA9IHVzZURyYWdDb250cm9scygpXG4gKlxuICogZnVuY3Rpb24gc3RhcnREcmFnKGV2ZW50KSB7XG4gKiAgIGRyYWdDb250cm9scy5zdGFydChldmVudCwgeyBzbmFwVG9DdXJzb3I6IHRydWUgfSlcbiAqIH1cbiAqXG4gKiByZXR1cm4gKFxuICogICA8PlxuICogICAgIDxGcmFtZSBvblRhcFN0YXJ0PXtzdGFydERyYWd9IC8+XG4gKiAgICAgPEZyYW1lIGRyYWc9XCJ4XCIgZHJhZ0NvbnRyb2xzPXtkcmFnQ29udHJvbHN9IC8+XG4gKiAgIDwvPlxuICogKVxuICogYGBgXG4gKlxuICogQG1vdGlvblxuICpcbiAqIGBgYGpzeFxuICogY29uc3QgZHJhZ0NvbnRyb2xzID0gdXNlRHJhZ0NvbnRyb2xzKClcbiAqXG4gKiBmdW5jdGlvbiBzdGFydERyYWcoZXZlbnQpIHtcbiAqICAgZHJhZ0NvbnRyb2xzLnN0YXJ0KGV2ZW50LCB7IHNuYXBUb0N1cnNvcjogdHJ1ZSB9KVxuICogfVxuICpcbiAqIHJldHVybiAoXG4gKiAgIDw+XG4gKiAgICAgPGRpdiBvblBvaW50ZXJEb3duPXtzdGFydERyYWd9IC8+XG4gKiAgICAgPG1vdGlvbi5kaXYgZHJhZz1cInhcIiBkcmFnQ29udHJvbHM9e2RyYWdDb250cm9sc30gLz5cbiAqICAgPC8+XG4gKiApXG4gKiBgYGBcbiAqXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHVzZURyYWdDb250cm9scygpIHtcbiAgICByZXR1cm4gdXNlQ29uc3RhbnQoY3JlYXRlRHJhZ0NvbnRyb2xzKTtcbn1cblxuLyoqXG4gKiBVc2VzIHRoZSByZWYgdGhhdCBpcyBwYXNzZWQgaW4sIG9yIGNyZWF0ZXMgYSBuZXcgb25lXG4gKiBAcGFyYW0gZXh0ZXJuYWwgLSBFeHRlcm5hbCByZWZcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiB1c2VFeHRlcm5hbFJlZihleHRlcm5hbFJlZikge1xuICAgIC8vIFdlJ3JlIGNvbmRpdGlvbmFsbHkgY2FsbGluZyBgdXNlUmVmYCBoZXJlIHdoaWNoIGlzIHNvcnQgb2YgbmF1Z2h0eSBhcyBob29rc1xuICAgIC8vIHNob3VsZG4ndCBiZSBjYWxsZWQgY29uZGl0aW9uYWxseS4gSG93ZXZlciwgRnJhbWVyIE1vdGlvbiB3aWxsIGJyZWFrIGlmIHRoaXNcbiAgICAvLyBjb25kaXRpb24gY2hhbmdlcyBhbnl3YXkuIEl0IG1pZ2h0IGJlIHBvc3NpYmxlIHRvIHVzZSBhbiBpbnZhcmlhbnQgaGVyZSB0b1xuICAgIC8vIG1ha2UgaXQgZXhwbGljaXQsIGJ1dCBJIGV4cGVjdCBjaGFuZ2luZyBgcmVmYCBpcyBub3Qgbm9ybWFsIGJlaGF2aW91ci5cbiAgICB2YXIgcmVmID0gIWV4dGVybmFsUmVmIHx8IHR5cGVvZiBleHRlcm5hbFJlZiA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgID8gdXNlUmVmKG51bGwpXG4gICAgICAgIDogZXh0ZXJuYWxSZWY7XG4gICAgLy8gSGFuZGxlIGByZWZgIGZ1bmN0aW9ucy4gQWdhaW4sIGNhbGxpbmcgdGhlIGhvb2sgY29uZGl0aW9uYWxseSBpcyBraW5kIG9mIG5hdWdodHlcbiAgICAvLyBidXQgYHJlZmAgdHlwZXMgY2hhbmdpbmcgYmV0d2VlbiByZW5kZXJzIHdvdWxkIGJyZWFrIE1vdGlvbiBhbnl3YXkuIElmIHdlIHJlY2VpdmVcbiAgICAvLyBidWcgcmVwb3J0cyBhYm91dCB0aGlzLCB3ZSBzaG91bGQgdHJhY2sgdGhlIHByb3ZpZGVkIHJlZiBhbmQgdGhyb3cgYW4gaW52YXJpYW50XG4gICAgLy8gcmF0aGVyIHRoYW4gbW92ZSB0aGUgY29uZGl0aW9uYWwgdG8gaW5zaWRlIHRoZSB1c2VFZmZlY3QgYXMgdGhpcyB3aWxsIGJlIGZpcmVkXG4gICAgLy8gZm9yIGV2ZXJ5IEZyYW1lIGNvbXBvbmVudCB3aXRoaW4gRnJhbWVyLlxuICAgIGlmIChleHRlcm5hbFJlZiAmJiB0eXBlb2YgZXh0ZXJuYWxSZWYgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZXh0ZXJuYWxSZWYocmVmLmN1cnJlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGV4dGVybmFsUmVmKG51bGwpOyB9O1xuICAgICAgICB9LCBbXSk7XG4gICAgfVxuICAgIHJldHVybiByZWY7XG59XG5cbi8qKlxuICogVGhpcyBpcyBqdXN0IGEgdmVyeSBiYXNpYyBWaXN1YWxFbGVtZW50LCBtb3JlIG9mIGEgaGFjayB0byBrZWVwIHN1cHBvcnRpbmcgdXNlQW5pbWF0ZWRTdGF0ZSB3aXRoXG4gKiB0aGUgbGF0ZXN0IEFQSXMuXG4gKi9cbnZhciBTdGF0ZVZpc3VhbEVsZW1lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFN0YXRlVmlzdWFsRWxlbWVudCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdGF0ZVZpc3VhbEVsZW1lbnQoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pbml0aWFsU3RhdGUgPSB7fTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTdGF0ZVZpc3VhbEVsZW1lbnQucHJvdG90eXBlLnVwZGF0ZUxheW91dERlbHRhID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgIFN0YXRlVmlzdWFsRWxlbWVudC5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgU3RhdGVWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5jbGVhbiA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICBTdGF0ZVZpc3VhbEVsZW1lbnQucHJvdG90eXBlLm1ha2VUYXJnZXRBbmltYXRhYmxlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uID0gX2EudHJhbnNpdGlvbiwgdHJhbnNpdGlvbkVuZCA9IF9hLnRyYW5zaXRpb25FbmQsIHRhcmdldCA9IF9fcmVzdChfYSwgW1widHJhbnNpdGlvblwiLCBcInRyYW5zaXRpb25FbmRcIl0pO1xuICAgICAgICB2YXIgb3JpZ2luID0gZ2V0T3JpZ2luKHRhcmdldCwgdHJhbnNpdGlvbiB8fCB7fSwgdGhpcyk7XG4gICAgICAgIGNoZWNrVGFyZ2V0Rm9yTmV3VmFsdWVzKHRoaXMsIHRhcmdldCwgb3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKHsgdHJhbnNpdGlvbjogdHJhbnNpdGlvbiwgdHJhbnNpdGlvbkVuZDogdHJhbnNpdGlvbkVuZCB9LCB0YXJnZXQpO1xuICAgIH07XG4gICAgU3RhdGVWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5nZXRCb3VuZGluZ0JveCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogeyBtaW46IDAsIG1heDogMCB9LCB5OiB7IG1pbjogMCwgbWF4OiAwIH0gfTtcbiAgICB9O1xuICAgIFN0YXRlVmlzdWFsRWxlbWVudC5wcm90b3R5cGUucmVhZE5hdGl2ZVZhbHVlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbml0aWFsU3RhdGVba2V5XSB8fCAwO1xuICAgIH07XG4gICAgU3RhdGVWaXN1YWxFbGVtZW50LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYnVpbGQoKTtcbiAgICB9O1xuICAgIHJldHVybiBTdGF0ZVZpc3VhbEVsZW1lbnQ7XG59KFZpc3VhbEVsZW1lbnQpKTtcbi8qKlxuICogVGhpcyBpcyBub3QgYW4gb2ZmaWNpYWxseSBzdXBwb3J0ZWQgQVBJIGFuZCBtYXkgYmUgcmVtb3ZlZFxuICogb24gYW55IHZlcnNpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gdXNlQW5pbWF0ZWRTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgICB2YXIgX2EgPSBfX3JlYWQodXNlU3RhdGUoaW5pdGlhbFN0YXRlKSwgMiksIGFuaW1hdGlvblN0YXRlID0gX2FbMF0sIHNldEFuaW1hdGlvblN0YXRlID0gX2FbMV07XG4gICAgdmFyIHZpc3VhbEVsZW1lbnQgPSB1c2VDb25zdGFudChmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgU3RhdGVWaXN1YWxFbGVtZW50KCk7IH0pO1xuICAgIHZpc3VhbEVsZW1lbnQudXBkYXRlQ29uZmlnKHtcbiAgICAgICAgb25VcGRhdGU6IGZ1bmN0aW9uICh2KSB7IHJldHVybiBzZXRBbmltYXRpb25TdGF0ZShfX2Fzc2lnbih7fSwgdikpOyB9LFxuICAgIH0pO1xuICAgIHZpc3VhbEVsZW1lbnQuaW5pdGlhbFN0YXRlID0gaW5pdGlhbFN0YXRlO1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZpc3VhbEVsZW1lbnQubW91bnQoe30pO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gdmlzdWFsRWxlbWVudC51bm1vdW50KCk7IH07XG4gICAgfSwgW10pO1xuICAgIHZhciBzdGFydEFuaW1hdGlvbiA9IHVzZUNvbnN0YW50KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uIChhbmltYXRpb25EZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiBzdGFydFZpc3VhbEVsZW1lbnRBbmltYXRpb24odmlzdWFsRWxlbWVudCwgYW5pbWF0aW9uRGVmaW5pdGlvbik7XG4gICAgfTsgfSk7XG4gICAgcmV0dXJuIFthbmltYXRpb25TdGF0ZSwgc3RhcnRBbmltYXRpb25dO1xufVxuXG5leHBvcnQgeyBBbmltYXRlTGF5b3V0IGFzIEFuaW1hdGVMYXlvdXRGZWF0dXJlLCBBbmltYXRlUHJlc2VuY2UsIEFuaW1hdGVTaGFyZWRMYXlvdXQsIEFuaW1hdGlvbkNvbnRyb2xzLCBBbmltYXRpb24gYXMgQW5pbWF0aW9uRmVhdHVyZSwgRHJhZ0NvbnRyb2xzLCBEcmFnIGFzIERyYWdGZWF0dXJlLCBFeGl0IGFzIEV4aXRGZWF0dXJlLCBGcmFtZXJUcmVlTGF5b3V0Q29udGV4dCwgR2VzdHVyZXMgYXMgR2VzdHVyZXNGZWF0dXJlLCBIVE1MVmlzdWFsRWxlbWVudCwgTW90aW9uQ29uZmlnLCBNb3Rpb25Db25maWdDb250ZXh0LCBNb3Rpb25WYWx1ZSwgUHJlc2VuY2VDb250ZXh0LCBTaGFyZWRMYXlvdXRDb250ZXh0LCBWaXNpYmlsaXR5QWN0aW9uLCBhZGRTY2FsZUNvcnJlY3Rpb24sIGFuaW1hdGUsIGFuaW1hdGlvbkNvbnRyb2xzLCBjcmVhdGVCYXRjaGVyLCBjcmVhdGVEb21Nb3Rpb25Db21wb25lbnQsIGNyZWF0ZU1vdGlvbkNvbXBvbmVudCwgaXNWYWxpZE1vdGlvblByb3AsIG0sIG1vdGlvbiwgbW90aW9uVmFsdWUsIHJlc29sdmVNb3Rpb25WYWx1ZSwgc3RhcnRBbmltYXRpb24sIHN0YXJ0VmlzdWFsRWxlbWVudEFuaW1hdGlvbiwgdHJhbnNmb3JtLCB1c2VBbmltYXRlZFN0YXRlLCB1c2VBbmltYXRpb24sIHVzZUN5Y2xlLCB1c2VEb21FdmVudCwgdXNlRHJhZ0NvbnRyb2xzLCB1c2VFbGVtZW50U2Nyb2xsLCB1c2VFeHRlcm5hbFJlZiwgdXNlR2VzdHVyZXMsIHVzZUludmVydGVkU2NhbGUsIHVzZUlzUHJlc2VudCwgdXNlTW90aW9uVGVtcGxhdGUsIHVzZU1vdGlvblZhbHVlLCB1c2VQYW5HZXN0dXJlLCB1c2VQcmVzZW5jZSwgdXNlUmVkdWNlZE1vdGlvbiwgdXNlU3ByaW5nLCB1c2VUYXBHZXN0dXJlLCB1c2VUcmFuc2Zvcm0sIHVzZVZpZXdwb3J0U2Nyb2xsIH07XG4iLCJpbXBvcnQgeyBpbnZhcmlhbnQgfSBmcm9tICdoZXktbGlzdGVuJztcblxudmFyIHByZXZUaW1lID0gMDtcbnZhciBvbk5leHRGcmFtZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbn0gOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB2YXIgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2LjcgLSAodGltZXN0YW1wIC0gcHJldlRpbWUpKTtcbiAgICBwcmV2VGltZSA9IHRpbWVzdGFtcCArIHRpbWVUb0NhbGw7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhwcmV2VGltZSk7XG4gICAgfSwgdGltZVRvQ2FsbCk7XG59O1xuXG52YXIgY3JlYXRlU3RlcCA9IGZ1bmN0aW9uIChzZXRSdW5OZXh0RnJhbWUpIHtcbiAgICB2YXIgcHJvY2Vzc1RvUnVuID0gW107XG4gICAgdmFyIHByb2Nlc3NUb1J1bk5leHRGcmFtZSA9IFtdO1xuICAgIHZhciBudW1UaGlzRnJhbWUgPSAwO1xuICAgIHZhciBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGNhbmNlbGxlZCA9IG5ldyBXZWFrU2V0KCk7XG4gICAgdmFyIHRvS2VlcEFsaXZlID0gbmV3IFdlYWtTZXQoKTtcbiAgICB2YXIgcmVuZGVyU3RlcCA9IHtcbiAgICAgICAgY2FuY2VsOiBmdW5jdGlvbiAocHJvY2Vzcykge1xuICAgICAgICAgICAgdmFyIGluZGV4T2ZDYWxsYmFjayA9IHByb2Nlc3NUb1J1bk5leHRGcmFtZS5pbmRleE9mKHByb2Nlc3MpO1xuICAgICAgICAgICAgY2FuY2VsbGVkLmFkZChwcm9jZXNzKTtcbiAgICAgICAgICAgIGlmIChpbmRleE9mQ2FsbGJhY2sgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzc1RvUnVuTmV4dEZyYW1lLnNwbGljZShpbmRleE9mQ2FsbGJhY2ssIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcm9jZXNzOiBmdW5jdGlvbiAoZnJhbWUpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlzUHJvY2Vzc2luZyA9IHRydWU7XG4gICAgICAgICAgICBfYSA9IFtwcm9jZXNzVG9SdW5OZXh0RnJhbWUsIHByb2Nlc3NUb1J1bl0sIHByb2Nlc3NUb1J1biA9IF9hWzBdLCBwcm9jZXNzVG9SdW5OZXh0RnJhbWUgPSBfYVsxXTtcbiAgICAgICAgICAgIHByb2Nlc3NUb1J1bk5leHRGcmFtZS5sZW5ndGggPSAwO1xuICAgICAgICAgICAgbnVtVGhpc0ZyYW1lID0gcHJvY2Vzc1RvUnVuLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChudW1UaGlzRnJhbWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvY2Vzc18xO1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1UaGlzRnJhbWU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzXzEgPSBwcm9jZXNzVG9SdW5baV07XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NfMShmcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b0tlZXBBbGl2ZS5oYXMocHJvY2Vzc18xKSA9PT0gdHJ1ZSAmJiAhY2FuY2VsbGVkLmhhcyhwcm9jZXNzXzEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJTdGVwLnNjaGVkdWxlKHByb2Nlc3NfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSdW5OZXh0RnJhbWUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2NoZWR1bGU6IGZ1bmN0aW9uIChwcm9jZXNzLCBrZWVwQWxpdmUsIGltbWVkaWF0ZSkge1xuICAgICAgICAgICAgaWYgKGtlZXBBbGl2ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAga2VlcEFsaXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW1tZWRpYXRlID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICBpbW1lZGlhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGludmFyaWFudCh0eXBlb2YgcHJvY2VzcyA9PT0gXCJmdW5jdGlvblwiLCBcIkFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgICAgIHZhciBhZGRUb0N1cnJlbnRCdWZmZXIgPSBpbW1lZGlhdGUgJiYgaXNQcm9jZXNzaW5nO1xuICAgICAgICAgICAgdmFyIGJ1ZmZlciA9IGFkZFRvQ3VycmVudEJ1ZmZlciA/IHByb2Nlc3NUb1J1biA6IHByb2Nlc3NUb1J1bk5leHRGcmFtZTtcbiAgICAgICAgICAgIGNhbmNlbGxlZC5kZWxldGUocHJvY2Vzcyk7XG4gICAgICAgICAgICBpZiAoa2VlcEFsaXZlKSB0b0tlZXBBbGl2ZS5hZGQocHJvY2Vzcyk7XG4gICAgICAgICAgICBpZiAoYnVmZmVyLmluZGV4T2YocHJvY2VzcykgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1c2gocHJvY2Vzcyk7XG4gICAgICAgICAgICAgICAgaWYgKGFkZFRvQ3VycmVudEJ1ZmZlcikgbnVtVGhpc0ZyYW1lID0gcHJvY2Vzc1RvUnVuLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHJlbmRlclN0ZXA7XG59O1xuXG52YXIgbWF4RWxhcHNlZCA9IDQwO1xudmFyIGRlZmF1bHRFbGFwc2VkID0gMSAvIDYwICogMTAwMDtcbnZhciB1c2VEZWZhdWx0RWxhcHNlZCA9IHRydWU7XG52YXIgd2lsbFJ1bk5leHRGcmFtZSA9IGZhbHNlO1xudmFyIGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xudmFyIGZyYW1lID0ge1xuICAgIGRlbHRhOiAwLFxuICAgIHRpbWVzdGFtcDogMFxufTtcbnZhciBzdGVwc09yZGVyID0gW1wicmVhZFwiLCBcInVwZGF0ZVwiLCBcInByZVJlbmRlclwiLCBcInJlbmRlclwiLCBcInBvc3RSZW5kZXJcIl07XG52YXIgc2V0V2lsbFJ1bk5leHRGcmFtZSA9IGZ1bmN0aW9uICh3aWxsUnVuKSB7XG4gICAgcmV0dXJuIHdpbGxSdW5OZXh0RnJhbWUgPSB3aWxsUnVuO1xufTtcbnZhciBzdGVwcyA9IC8qI19fUFVSRV9fKi9zdGVwc09yZGVyLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICBhY2Nba2V5XSA9IGNyZWF0ZVN0ZXAoc2V0V2lsbFJ1bk5leHRGcmFtZSk7XG4gICAgcmV0dXJuIGFjYztcbn0sIHt9KTtcbnZhciBzeW5jID0gLyojX19QVVJFX18qL3N0ZXBzT3JkZXIucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgIHZhciBzdGVwID0gc3RlcHNba2V5XTtcbiAgICBhY2Nba2V5XSA9IGZ1bmN0aW9uIChwcm9jZXNzLCBrZWVwQWxpdmUsIGltbWVkaWF0ZSkge1xuICAgICAgICBpZiAoa2VlcEFsaXZlID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGtlZXBBbGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbW1lZGlhdGUgPT09IHZvaWQgMCkge1xuICAgICAgICAgICAgaW1tZWRpYXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF3aWxsUnVuTmV4dEZyYW1lKSBzdGFydExvb3AoKTtcbiAgICAgICAgc3RlcC5zY2hlZHVsZShwcm9jZXNzLCBrZWVwQWxpdmUsIGltbWVkaWF0ZSk7XG4gICAgICAgIHJldHVybiBwcm9jZXNzO1xuICAgIH07XG4gICAgcmV0dXJuIGFjYztcbn0sIHt9KTtcbnZhciBjYW5jZWxTeW5jID0gLyojX19QVVJFX18qL3N0ZXBzT3JkZXIucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgIGFjY1trZXldID0gc3RlcHNba2V5XS5jYW5jZWw7XG4gICAgcmV0dXJuIGFjYztcbn0sIHt9KTtcbnZhciBwcm9jZXNzU3RlcCA9IGZ1bmN0aW9uIChzdGVwSWQpIHtcbiAgICByZXR1cm4gc3RlcHNbc3RlcElkXS5wcm9jZXNzKGZyYW1lKTtcbn07XG52YXIgcHJvY2Vzc0ZyYW1lID0gZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xuICAgIHdpbGxSdW5OZXh0RnJhbWUgPSBmYWxzZTtcbiAgICBmcmFtZS5kZWx0YSA9IHVzZURlZmF1bHRFbGFwc2VkID8gZGVmYXVsdEVsYXBzZWQgOiBNYXRoLm1heChNYXRoLm1pbih0aW1lc3RhbXAgLSBmcmFtZS50aW1lc3RhbXAsIG1heEVsYXBzZWQpLCAxKTtcbiAgICBpZiAoIXVzZURlZmF1bHRFbGFwc2VkKSBkZWZhdWx0RWxhcHNlZCA9IGZyYW1lLmRlbHRhO1xuICAgIGZyYW1lLnRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcbiAgICBpc1Byb2Nlc3NpbmcgPSB0cnVlO1xuICAgIHN0ZXBzT3JkZXIuZm9yRWFjaChwcm9jZXNzU3RlcCk7XG4gICAgaXNQcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgaWYgKHdpbGxSdW5OZXh0RnJhbWUpIHtcbiAgICAgICAgdXNlRGVmYXVsdEVsYXBzZWQgPSBmYWxzZTtcbiAgICAgICAgb25OZXh0RnJhbWUocHJvY2Vzc0ZyYW1lKTtcbiAgICB9XG59O1xudmFyIHN0YXJ0TG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB3aWxsUnVuTmV4dEZyYW1lID0gdHJ1ZTtcbiAgICB1c2VEZWZhdWx0RWxhcHNlZCA9IHRydWU7XG4gICAgaWYgKCFpc1Byb2Nlc3NpbmcpIG9uTmV4dEZyYW1lKHByb2Nlc3NGcmFtZSk7XG59O1xudmFyIGdldEZyYW1lRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnJhbWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzeW5jO1xuZXhwb3J0IHsgY2FuY2VsU3luYywgZ2V0RnJhbWVEYXRhIH07XG4iLCJ2YXIgd2FybmluZyA9IGZ1bmN0aW9uICgpIHsgfTtcclxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uICgpIHsgfTtcclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgIHdhcm5pbmcgPSBmdW5jdGlvbiAoY2hlY2ssIG1lc3NhZ2UpIHtcclxuICAgICAgICBpZiAoIWNoZWNrICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGludmFyaWFudCA9IGZ1bmN0aW9uIChjaGVjaywgbWVzc2FnZSkge1xyXG4gICAgICAgIGlmICghY2hlY2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cblxuZXhwb3J0IHsgaW52YXJpYW50LCB3YXJuaW5nIH07XG4iLCJpbXBvcnQgeyBfX3Jlc3QsIF9fYXNzaWduLCBfX3NwcmVhZEFycmF5cyB9IGZyb20gJ3RzbGliJztcbmltcG9ydCB7IHdhcm5pbmcsIGludmFyaWFudCB9IGZyb20gJ2hleS1saXN0ZW4nO1xuaW1wb3J0IHsgaGV4LCByZ2JhLCBoc2xhLCBjb21wbGV4LCBjb2xvciB9IGZyb20gJ3N0eWxlLXZhbHVlLXR5cGVzJztcbmltcG9ydCBzeW5jLCB7IGNhbmNlbFN5bmMsIGdldEZyYW1lRGF0YSB9IGZyb20gJ2ZyYW1lc3luYyc7XG5cbnZhciBjbGFtcCA9IGZ1bmN0aW9uIChtaW4sIG1heCwgdikge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2LCBtaW4pLCBtYXgpO1xufTtcblxudmFyIHNhZmVNaW4gPSAwLjAwMTtcbnZhciBtaW5EdXJhdGlvbiA9IDAuMDE7XG52YXIgbWF4RHVyYXRpb24gPSAxMC4wO1xudmFyIG1pbkRhbXBpbmcgPSAwLjA1O1xudmFyIG1heERhbXBpbmcgPSAxO1xuZnVuY3Rpb24gZmluZFNwcmluZyhfYSkge1xuICAgIHZhciBfYiA9IF9hLmR1cmF0aW9uLFxuICAgICAgICBkdXJhdGlvbiA9IF9iID09PSB2b2lkIDAgPyA4MDAgOiBfYixcbiAgICAgICAgX2MgPSBfYS5ib3VuY2UsXG4gICAgICAgIGJvdW5jZSA9IF9jID09PSB2b2lkIDAgPyAwLjI1IDogX2MsXG4gICAgICAgIF9kID0gX2EudmVsb2NpdHksXG4gICAgICAgIHZlbG9jaXR5ID0gX2QgPT09IHZvaWQgMCA/IDAgOiBfZCxcbiAgICAgICAgX2UgPSBfYS5tYXNzLFxuICAgICAgICBtYXNzID0gX2UgPT09IHZvaWQgMCA/IDEgOiBfZTtcbiAgICB2YXIgZW52ZWxvcGU7XG4gICAgdmFyIGRlcml2YXRpdmU7XG4gICAgd2FybmluZyhkdXJhdGlvbiA8PSBtYXhEdXJhdGlvbiAqIDEwMDAsIFwiU3ByaW5nIGR1cmF0aW9uIG11c3QgYmUgMTAgc2Vjb25kcyBvciBsZXNzXCIpO1xuICAgIHZhciBkYW1waW5nUmF0aW8gPSAxIC0gYm91bmNlO1xuICAgIGRhbXBpbmdSYXRpbyA9IGNsYW1wKG1pbkRhbXBpbmcsIG1heERhbXBpbmcsIGRhbXBpbmdSYXRpbyk7XG4gICAgZHVyYXRpb24gPSBjbGFtcChtaW5EdXJhdGlvbiwgbWF4RHVyYXRpb24sIGR1cmF0aW9uIC8gMTAwMCk7XG4gICAgaWYgKGRhbXBpbmdSYXRpbyA8IDEpIHtcbiAgICAgICAgZW52ZWxvcGUgPSBmdW5jdGlvbiAodW5kYW1wZWRGcmVxKSB7XG4gICAgICAgICAgICB2YXIgZXhwb25lbnRpYWxEZWNheSA9IHVuZGFtcGVkRnJlcSAqIGRhbXBpbmdSYXRpbztcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IGV4cG9uZW50aWFsRGVjYXkgKiBkdXJhdGlvbjtcbiAgICAgICAgICAgIHZhciBhID0gZXhwb25lbnRpYWxEZWNheSAtIHZlbG9jaXR5O1xuICAgICAgICAgICAgdmFyIGIgPSBjYWxjQW5ndWxhckZyZXEodW5kYW1wZWRGcmVxLCBkYW1waW5nUmF0aW8pO1xuICAgICAgICAgICAgdmFyIGMgPSBNYXRoLmV4cCgtZGVsdGEpO1xuICAgICAgICAgICAgcmV0dXJuIHNhZmVNaW4gLSBhIC8gYiAqIGM7XG4gICAgICAgIH07XG4gICAgICAgIGRlcml2YXRpdmUgPSBmdW5jdGlvbiAodW5kYW1wZWRGcmVxKSB7XG4gICAgICAgICAgICB2YXIgZXhwb25lbnRpYWxEZWNheSA9IHVuZGFtcGVkRnJlcSAqIGRhbXBpbmdSYXRpbztcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IGV4cG9uZW50aWFsRGVjYXkgKiBkdXJhdGlvbjtcbiAgICAgICAgICAgIHZhciBkID0gZGVsdGEgKiB2ZWxvY2l0eSArIHZlbG9jaXR5O1xuICAgICAgICAgICAgdmFyIGUgPSBNYXRoLnBvdyhkYW1waW5nUmF0aW8sIDIpICogTWF0aC5wb3codW5kYW1wZWRGcmVxLCAyKSAqIGR1cmF0aW9uO1xuICAgICAgICAgICAgdmFyIGYgPSBNYXRoLmV4cCgtZGVsdGEpO1xuICAgICAgICAgICAgdmFyIGcgPSBjYWxjQW5ndWxhckZyZXEoTWF0aC5wb3codW5kYW1wZWRGcmVxLCAyKSwgZGFtcGluZ1JhdGlvKTtcbiAgICAgICAgICAgIHZhciBmYWN0b3IgPSAtZW52ZWxvcGUodW5kYW1wZWRGcmVxKSArIHNhZmVNaW4gPiAwID8gLTEgOiAxO1xuICAgICAgICAgICAgcmV0dXJuIGZhY3RvciAqICgoZCAtIGUpICogZikgLyBnO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVudmVsb3BlID0gZnVuY3Rpb24gKHVuZGFtcGVkRnJlcSkge1xuICAgICAgICAgICAgdmFyIGEgPSBNYXRoLmV4cCgtdW5kYW1wZWRGcmVxICogZHVyYXRpb24pO1xuICAgICAgICAgICAgdmFyIGIgPSAodW5kYW1wZWRGcmVxIC0gdmVsb2NpdHkpICogZHVyYXRpb24gKyAxO1xuICAgICAgICAgICAgcmV0dXJuIC1zYWZlTWluICsgYSAqIGI7XG4gICAgICAgIH07XG4gICAgICAgIGRlcml2YXRpdmUgPSBmdW5jdGlvbiAodW5kYW1wZWRGcmVxKSB7XG4gICAgICAgICAgICB2YXIgYSA9IE1hdGguZXhwKC11bmRhbXBlZEZyZXEgKiBkdXJhdGlvbik7XG4gICAgICAgICAgICB2YXIgYiA9ICh2ZWxvY2l0eSAtIHVuZGFtcGVkRnJlcSkgKiAoZHVyYXRpb24gKiBkdXJhdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gYSAqIGI7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBpbml0aWFsR3Vlc3MgPSA1IC8gZHVyYXRpb247XG4gICAgdmFyIHVuZGFtcGVkRnJlcSA9IGFwcHJveGltYXRlUm9vdChlbnZlbG9wZSwgZGVyaXZhdGl2ZSwgaW5pdGlhbEd1ZXNzKTtcbiAgICBpZiAoaXNOYU4odW5kYW1wZWRGcmVxKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RpZmZuZXNzOiAxMDAsXG4gICAgICAgICAgICBkYW1waW5nOiAxMFxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzdGlmZm5lc3MgPSBNYXRoLnBvdyh1bmRhbXBlZEZyZXEsIDIpICogbWFzcztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0aWZmbmVzczogc3RpZmZuZXNzLFxuICAgICAgICAgICAgZGFtcGluZzogZGFtcGluZ1JhdGlvICogMiAqIE1hdGguc3FydChtYXNzICogc3RpZmZuZXNzKVxuICAgICAgICB9O1xuICAgIH1cbn1cbnZhciByb290SXRlcmF0aW9ucyA9IDEyO1xuZnVuY3Rpb24gYXBwcm94aW1hdGVSb290KGVudmVsb3BlLCBkZXJpdmF0aXZlLCBpbml0aWFsR3Vlc3MpIHtcbiAgICB2YXIgcmVzdWx0ID0gaW5pdGlhbEd1ZXNzO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcm9vdEl0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgICByZXN1bHQgPSByZXN1bHQgLSBlbnZlbG9wZShyZXN1bHQpIC8gZGVyaXZhdGl2ZShyZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY2FsY0FuZ3VsYXJGcmVxKHVuZGFtcGVkRnJlcSwgZGFtcGluZ1JhdGlvKSB7XG4gICAgcmV0dXJuIHVuZGFtcGVkRnJlcSAqIE1hdGguc3FydCgxIC0gZGFtcGluZ1JhdGlvICogZGFtcGluZ1JhdGlvKTtcbn1cblxudmFyIGR1cmF0aW9uS2V5cyA9IFtcImR1cmF0aW9uXCIsIFwiYm91bmNlXCJdO1xudmFyIHBoeXNpY3NLZXlzID0gW1wic3RpZmZuZXNzXCIsIFwiZGFtcGluZ1wiLCBcIm1hc3NcIl07XG5mdW5jdGlvbiBpc1NwcmluZ1R5cGUob3B0aW9ucywga2V5cykge1xuICAgIHJldHVybiBrZXlzLnNvbWUoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4gb3B0aW9uc1trZXldICE9PSB1bmRlZmluZWQ7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRTcHJpbmdPcHRpb25zKG9wdGlvbnMpIHtcbiAgICB2YXIgc3ByaW5nT3B0aW9ucyA9IF9fYXNzaWduKHsgdmVsb2NpdHk6IDAuMCwgc3RpZmZuZXNzOiAxMDAsIGRhbXBpbmc6IDEwLCBtYXNzOiAxLjAsIGlzUmVzb2x2ZWRGcm9tRHVyYXRpb246IGZhbHNlIH0sIG9wdGlvbnMpO1xuICAgIGlmICghaXNTcHJpbmdUeXBlKG9wdGlvbnMsIHBoeXNpY3NLZXlzKSAmJiBpc1NwcmluZ1R5cGUob3B0aW9ucywgZHVyYXRpb25LZXlzKSkge1xuICAgICAgICB2YXIgZGVyaXZlZCA9IGZpbmRTcHJpbmcob3B0aW9ucyk7XG4gICAgICAgIHNwcmluZ09wdGlvbnMgPSBfX2Fzc2lnbihfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc3ByaW5nT3B0aW9ucyksIGRlcml2ZWQpLCB7IHZlbG9jaXR5OiAwLjAsIG1hc3M6IDEuMCB9KTtcbiAgICAgICAgc3ByaW5nT3B0aW9ucy5pc1Jlc29sdmVkRnJvbUR1cmF0aW9uID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHNwcmluZ09wdGlvbnM7XG59XG5mdW5jdGlvbiBzcHJpbmcoX2EpIHtcbiAgICB2YXIgX2IgPSBfYS5mcm9tLFxuICAgICAgICBmcm9tID0gX2IgPT09IHZvaWQgMCA/IDAuMCA6IF9iLFxuICAgICAgICBfYyA9IF9hLnRvLFxuICAgICAgICB0byA9IF9jID09PSB2b2lkIDAgPyAxLjAgOiBfYyxcbiAgICAgICAgX2QgPSBfYS5yZXN0U3BlZWQsXG4gICAgICAgIHJlc3RTcGVlZCA9IF9kID09PSB2b2lkIDAgPyAyIDogX2QsXG4gICAgICAgIHJlc3REZWx0YSA9IF9hLnJlc3REZWx0YSxcbiAgICAgICAgb3B0aW9ucyA9IF9fcmVzdChfYSwgW1wiZnJvbVwiLCBcInRvXCIsIFwicmVzdFNwZWVkXCIsIFwicmVzdERlbHRhXCJdKTtcbiAgICB2YXIgc3RhdGUgPSB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogZnJvbSB9O1xuICAgIHZhciBfZSA9IGdldFNwcmluZ09wdGlvbnMob3B0aW9ucyksXG4gICAgICAgIHN0aWZmbmVzcyA9IF9lLnN0aWZmbmVzcyxcbiAgICAgICAgZGFtcGluZyA9IF9lLmRhbXBpbmcsXG4gICAgICAgIG1hc3MgPSBfZS5tYXNzLFxuICAgICAgICB2ZWxvY2l0eSA9IF9lLnZlbG9jaXR5LFxuICAgICAgICBpc1Jlc29sdmVkRnJvbUR1cmF0aW9uID0gX2UuaXNSZXNvbHZlZEZyb21EdXJhdGlvbjtcbiAgICB2YXIgcmVzb2x2ZVNwcmluZyA9IHplcm87XG4gICAgdmFyIHJlc29sdmVWZWxvY2l0eSA9IHplcm87XG4gICAgZnVuY3Rpb24gY3JlYXRlU3ByaW5nKCkge1xuICAgICAgICB2YXIgaW5pdGlhbFZlbG9jaXR5ID0gdmVsb2NpdHkgPyAtKHZlbG9jaXR5IC8gMTAwMCkgOiAwLjA7XG4gICAgICAgIHZhciBpbml0aWFsRGVsdGEgPSB0byAtIGZyb207XG4gICAgICAgIHZhciBkYW1waW5nUmF0aW8gPSBkYW1waW5nIC8gKDIgKiBNYXRoLnNxcnQoc3RpZmZuZXNzICogbWFzcykpO1xuICAgICAgICB2YXIgdW5kYW1wZWRBbmd1bGFyRnJlcSA9IE1hdGguc3FydChzdGlmZm5lc3MgLyBtYXNzKSAvIDEwMDA7XG4gICAgICAgIHJlc3REZWx0YSAhPT0gbnVsbCAmJiByZXN0RGVsdGEgIT09IHZvaWQgMCA/IHJlc3REZWx0YSA6IHJlc3REZWx0YSA9IE1hdGguYWJzKHRvIC0gZnJvbSkgPD0gMSA/IDAuMDEgOiAwLjQ7XG4gICAgICAgIGlmIChkYW1waW5nUmF0aW8gPCAxKSB7XG4gICAgICAgICAgICB2YXIgYW5ndWxhckZyZXFfMSA9IGNhbGNBbmd1bGFyRnJlcSh1bmRhbXBlZEFuZ3VsYXJGcmVxLCBkYW1waW5nUmF0aW8pO1xuICAgICAgICAgICAgcmVzb2x2ZVNwcmluZyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGVudmVsb3BlID0gTWF0aC5leHAoLWRhbXBpbmdSYXRpbyAqIHVuZGFtcGVkQW5ndWxhckZyZXEgKiB0KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG8gLSBlbnZlbG9wZSAqICgoaW5pdGlhbFZlbG9jaXR5ICsgZGFtcGluZ1JhdGlvICogdW5kYW1wZWRBbmd1bGFyRnJlcSAqIGluaXRpYWxEZWx0YSkgLyBhbmd1bGFyRnJlcV8xICogTWF0aC5zaW4oYW5ndWxhckZyZXFfMSAqIHQpICsgaW5pdGlhbERlbHRhICogTWF0aC5jb3MoYW5ndWxhckZyZXFfMSAqIHQpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXNvbHZlVmVsb2NpdHkgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHZhciBlbnZlbG9wZSA9IE1hdGguZXhwKC1kYW1waW5nUmF0aW8gKiB1bmRhbXBlZEFuZ3VsYXJGcmVxICogdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhbXBpbmdSYXRpbyAqIHVuZGFtcGVkQW5ndWxhckZyZXEgKiBlbnZlbG9wZSAqIChNYXRoLnNpbihhbmd1bGFyRnJlcV8xICogdCkgKiAoaW5pdGlhbFZlbG9jaXR5ICsgZGFtcGluZ1JhdGlvICogdW5kYW1wZWRBbmd1bGFyRnJlcSAqIGluaXRpYWxEZWx0YSkgLyBhbmd1bGFyRnJlcV8xICsgaW5pdGlhbERlbHRhICogTWF0aC5jb3MoYW5ndWxhckZyZXFfMSAqIHQpKSAtIGVudmVsb3BlICogKE1hdGguY29zKGFuZ3VsYXJGcmVxXzEgKiB0KSAqIChpbml0aWFsVmVsb2NpdHkgKyBkYW1waW5nUmF0aW8gKiB1bmRhbXBlZEFuZ3VsYXJGcmVxICogaW5pdGlhbERlbHRhKSAtIGFuZ3VsYXJGcmVxXzEgKiBpbml0aWFsRGVsdGEgKiBNYXRoLnNpbihhbmd1bGFyRnJlcV8xICogdCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChkYW1waW5nUmF0aW8gPT09IDEpIHtcbiAgICAgICAgICAgIHJlc29sdmVTcHJpbmcgPSBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0byAtIE1hdGguZXhwKC11bmRhbXBlZEFuZ3VsYXJGcmVxICogdCkgKiAoaW5pdGlhbERlbHRhICsgKGluaXRpYWxWZWxvY2l0eSArIHVuZGFtcGVkQW5ndWxhckZyZXEgKiBpbml0aWFsRGVsdGEpICogdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGRhbXBlZEFuZ3VsYXJGcmVxXzEgPSB1bmRhbXBlZEFuZ3VsYXJGcmVxICogTWF0aC5zcXJ0KGRhbXBpbmdSYXRpbyAqIGRhbXBpbmdSYXRpbyAtIDEpO1xuICAgICAgICAgICAgcmVzb2x2ZVNwcmluZyA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGVudmVsb3BlID0gTWF0aC5leHAoLWRhbXBpbmdSYXRpbyAqIHVuZGFtcGVkQW5ndWxhckZyZXEgKiB0KTtcbiAgICAgICAgICAgICAgICB2YXIgZnJlcUZvclQgPSBNYXRoLm1pbihkYW1wZWRBbmd1bGFyRnJlcV8xICogdCwgMzAwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG8gLSBlbnZlbG9wZSAqICgoaW5pdGlhbFZlbG9jaXR5ICsgZGFtcGluZ1JhdGlvICogdW5kYW1wZWRBbmd1bGFyRnJlcSAqIGluaXRpYWxEZWx0YSkgKiBNYXRoLnNpbmgoZnJlcUZvclQpICsgZGFtcGVkQW5ndWxhckZyZXFfMSAqIGluaXRpYWxEZWx0YSAqIE1hdGguY29zaChmcmVxRm9yVCkpIC8gZGFtcGVkQW5ndWxhckZyZXFfMTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlU3ByaW5nKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gcmVzb2x2ZVNwcmluZyh0KTtcbiAgICAgICAgICAgIGlmICghaXNSZXNvbHZlZEZyb21EdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VmVsb2NpdHkgPSByZXNvbHZlVmVsb2NpdHkodCkgKiAxMDAwO1xuICAgICAgICAgICAgICAgIHZhciBpc0JlbG93VmVsb2NpdHlUaHJlc2hvbGQgPSBNYXRoLmFicyhjdXJyZW50VmVsb2NpdHkpIDw9IHJlc3RTcGVlZDtcbiAgICAgICAgICAgICAgICB2YXIgaXNCZWxvd0Rpc3BsYWNlbWVudFRocmVzaG9sZCA9IE1hdGguYWJzKHRvIC0gY3VycmVudCkgPD0gcmVzdERlbHRhO1xuICAgICAgICAgICAgICAgIHN0YXRlLmRvbmUgPSBpc0JlbG93VmVsb2NpdHlUaHJlc2hvbGQgJiYgaXNCZWxvd0Rpc3BsYWNlbWVudFRocmVzaG9sZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuZG9uZSA9IHQgPj0gb3B0aW9ucy5kdXJhdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXRlLnZhbHVlID0gc3RhdGUuZG9uZSA/IHRvIDogY3VycmVudDtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZmxpcFRhcmdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgdmVsb2NpdHkgPSAtdmVsb2NpdHk7XG4gICAgICAgICAgICBfYSA9IFt0bywgZnJvbV0sIGZyb20gPSBfYVswXSwgdG8gPSBfYVsxXTtcbiAgICAgICAgICAgIGNyZWF0ZVNwcmluZygpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbnNwcmluZy5uZWVkc0ludGVycG9sYXRpb24gPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiB0eXBlb2YgYSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgYiA9PT0gXCJzdHJpbmdcIjtcbn07XG52YXIgemVybyA9IGZ1bmN0aW9uIChfdCkge1xuICAgIHJldHVybiAwO1xufTtcblxudmFyIHByb2dyZXNzID0gZnVuY3Rpb24gKGZyb20sIHRvLCB2YWx1ZSkge1xuICAgIHZhciB0b0Zyb21EaWZmZXJlbmNlID0gdG8gLSBmcm9tO1xuICAgIHJldHVybiB0b0Zyb21EaWZmZXJlbmNlID09PSAwID8gMSA6ICh2YWx1ZSAtIGZyb20pIC8gdG9Gcm9tRGlmZmVyZW5jZTtcbn07XG5cbnZhciBtaXggPSBmdW5jdGlvbiAoZnJvbSwgdG8sIHByb2dyZXNzKSB7XG4gICAgcmV0dXJuIC1wcm9ncmVzcyAqIGZyb20gKyBwcm9ncmVzcyAqIHRvICsgZnJvbTtcbn07XG5cbnZhciBtaXhMaW5lYXJDb2xvciA9IGZ1bmN0aW9uIChmcm9tLCB0bywgdikge1xuICAgIHZhciBmcm9tRXhwbyA9IGZyb20gKiBmcm9tO1xuICAgIHZhciB0b0V4cG8gPSB0byAqIHRvO1xuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5tYXgoMCwgdiAqICh0b0V4cG8gLSBmcm9tRXhwbykgKyBmcm9tRXhwbykpO1xufTtcbnZhciBjb2xvclR5cGVzID0gW2hleCwgcmdiYSwgaHNsYV07XG52YXIgZ2V0Q29sb3JUeXBlID0gZnVuY3Rpb24gKHYpIHtcbiAgICByZXR1cm4gY29sb3JUeXBlcy5maW5kKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0eXBlLnRlc3Qodik7XG4gICAgfSk7XG59O1xudmFyIG5vdEFuaW1hdGFibGUgPSBmdW5jdGlvbiAoY29sb3IpIHtcbiAgICByZXR1cm4gXCInXCIgKyBjb2xvciArIFwiJyBpcyBub3QgYW4gYW5pbWF0YWJsZSBjb2xvci4gVXNlIHRoZSBlcXVpdmFsZW50IGNvbG9yIGNvZGUgaW5zdGVhZC5cIjtcbn07XG52YXIgbWl4Q29sb3IgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgICB2YXIgZnJvbUNvbG9yVHlwZSA9IGdldENvbG9yVHlwZShmcm9tKTtcbiAgICB2YXIgdG9Db2xvclR5cGUgPSBnZXRDb2xvclR5cGUodG8pO1xuICAgIGludmFyaWFudCghIWZyb21Db2xvclR5cGUsIG5vdEFuaW1hdGFibGUoZnJvbSkpO1xuICAgIGludmFyaWFudCghIXRvQ29sb3JUeXBlLCBub3RBbmltYXRhYmxlKHRvKSk7XG4gICAgaW52YXJpYW50KGZyb21Db2xvclR5cGUudHJhbnNmb3JtID09PSB0b0NvbG9yVHlwZS50cmFuc2Zvcm0sICdCb3RoIGNvbG9ycyBtdXN0IGJlIGhleC9SR0JBLCBPUiBib3RoIG11c3QgYmUgSFNMQS4nKTtcbiAgICB2YXIgZnJvbUNvbG9yID0gZnJvbUNvbG9yVHlwZS5wYXJzZShmcm9tKTtcbiAgICB2YXIgdG9Db2xvciA9IHRvQ29sb3JUeXBlLnBhcnNlKHRvKTtcbiAgICB2YXIgYmxlbmRlZCA9IF9fYXNzaWduKHt9LCBmcm9tQ29sb3IpO1xuICAgIHZhciBtaXhGdW5jID0gZnJvbUNvbG9yVHlwZSA9PT0gaHNsYSA/IG1peCA6IG1peExpbmVhckNvbG9yO1xuICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYmxlbmRlZCkge1xuICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2FscGhhJykge1xuICAgICAgICAgICAgICAgIGJsZW5kZWRba2V5XSA9IG1peEZ1bmMoZnJvbUNvbG9yW2tleV0sIHRvQ29sb3Jba2V5XSwgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYmxlbmRlZC5hbHBoYSA9IG1peChmcm9tQ29sb3IuYWxwaGEsIHRvQ29sb3IuYWxwaGEsIHYpO1xuICAgICAgICByZXR1cm4gZnJvbUNvbG9yVHlwZS50cmFuc2Zvcm0oYmxlbmRlZCk7XG4gICAgfTtcbn07XG5cbnZhciB6ZXJvUG9pbnQgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHo6IDBcbn07XG52YXIgaXNOdW0gPSBmdW5jdGlvbiAodikge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ251bWJlcic7XG59O1xuXG52YXIgY29tYmluZUZ1bmN0aW9ucyA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBiKGEodikpO1xuICAgIH07XG59O1xudmFyIHBpcGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRyYW5zZm9ybWVycyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHRyYW5zZm9ybWVyc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gdHJhbnNmb3JtZXJzLnJlZHVjZShjb21iaW5lRnVuY3Rpb25zKTtcbn07XG5cbmZ1bmN0aW9uIGdldE1peGVyKG9yaWdpbiwgdGFyZ2V0KSB7XG4gICAgaWYgKGlzTnVtKG9yaWdpbikpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICByZXR1cm4gbWl4KG9yaWdpbiwgdGFyZ2V0LCB2KTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGNvbG9yLnRlc3Qob3JpZ2luKSkge1xuICAgICAgICByZXR1cm4gbWl4Q29sb3Iob3JpZ2luLCB0YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtaXhDb21wbGV4KG9yaWdpbiwgdGFyZ2V0KTtcbiAgICB9XG59XG52YXIgbWl4QXJyYXkgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgICB2YXIgb3V0cHV0ID0gX19zcHJlYWRBcnJheXMoZnJvbSk7XG4gICAgdmFyIG51bVZhbHVlcyA9IG91dHB1dC5sZW5ndGg7XG4gICAgdmFyIGJsZW5kVmFsdWUgPSBmcm9tLm1hcChmdW5jdGlvbiAoZnJvbVRoaXMsIGkpIHtcbiAgICAgICAgcmV0dXJuIGdldE1peGVyKGZyb21UaGlzLCB0b1tpXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVmFsdWVzOyBpKyspIHtcbiAgICAgICAgICAgIG91dHB1dFtpXSA9IGJsZW5kVmFsdWVbaV0odik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xufTtcbnZhciBtaXhPYmplY3QgPSBmdW5jdGlvbiAob3JpZ2luLCB0YXJnZXQpIHtcbiAgICB2YXIgb3V0cHV0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG9yaWdpbiksIHRhcmdldCk7XG4gICAgdmFyIGJsZW5kVmFsdWUgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb3V0cHV0KSB7XG4gICAgICAgIGlmIChvcmlnaW5ba2V5XSAhPT0gdW5kZWZpbmVkICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGJsZW5kVmFsdWVba2V5XSA9IGdldE1peGVyKG9yaWdpbltrZXldLCB0YXJnZXRba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBibGVuZFZhbHVlKSB7XG4gICAgICAgICAgICBvdXRwdXRba2V5XSA9IGJsZW5kVmFsdWVba2V5XSh2KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG59O1xuZnVuY3Rpb24gYW5hbHlzZSh2YWx1ZSkge1xuICAgIHZhciBwYXJzZWQgPSBjb21wbGV4LnBhcnNlKHZhbHVlKTtcbiAgICB2YXIgbnVtVmFsdWVzID0gcGFyc2VkLmxlbmd0aDtcbiAgICB2YXIgbnVtTnVtYmVycyA9IDA7XG4gICAgdmFyIG51bVJHQiA9IDA7XG4gICAgdmFyIG51bUhTTCA9IDA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1WYWx1ZXM7IGkrKykge1xuICAgICAgICBpZiAobnVtTnVtYmVycyB8fCB0eXBlb2YgcGFyc2VkW2ldID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgbnVtTnVtYmVycysrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHBhcnNlZFtpXS5odWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIG51bUhTTCsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBudW1SR0IrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBwYXJzZWQ6IHBhcnNlZCwgbnVtTnVtYmVyczogbnVtTnVtYmVycywgbnVtUkdCOiBudW1SR0IsIG51bUhTTDogbnVtSFNMIH07XG59XG52YXIgbWl4Q29tcGxleCA9IGZ1bmN0aW9uIChvcmlnaW4sIHRhcmdldCkge1xuICAgIHZhciB0ZW1wbGF0ZSA9IGNvbXBsZXguY3JlYXRlVHJhbnNmb3JtZXIodGFyZ2V0KTtcbiAgICB2YXIgb3JpZ2luU3RhdHMgPSBhbmFseXNlKG9yaWdpbik7XG4gICAgdmFyIHRhcmdldFN0YXRzID0gYW5hbHlzZSh0YXJnZXQpO1xuICAgIGludmFyaWFudChvcmlnaW5TdGF0cy5udW1IU0wgPT09IHRhcmdldFN0YXRzLm51bUhTTCAmJiBvcmlnaW5TdGF0cy5udW1SR0IgPT09IHRhcmdldFN0YXRzLm51bVJHQiAmJiBvcmlnaW5TdGF0cy5udW1OdW1iZXJzID49IHRhcmdldFN0YXRzLm51bU51bWJlcnMsIFwiQ29tcGxleCB2YWx1ZXMgJ1wiICsgb3JpZ2luICsgXCInIGFuZCAnXCIgKyB0YXJnZXQgKyBcIicgdG9vIGRpZmZlcmVudCB0byBtaXguIEVuc3VyZSBhbGwgY29sb3JzIGFyZSBvZiB0aGUgc2FtZSB0eXBlLlwiKTtcbiAgICByZXR1cm4gcGlwZShtaXhBcnJheShvcmlnaW5TdGF0cy5wYXJzZWQsIHRhcmdldFN0YXRzLnBhcnNlZCksIHRlbXBsYXRlKTtcbn07XG5cbnZhciBtaXhOdW1iZXIgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHApIHtcbiAgICAgICAgcmV0dXJuIG1peChmcm9tLCB0bywgcCk7XG4gICAgfTtcbn07XG5mdW5jdGlvbiBkZXRlY3RNaXhlckZhY3Rvcnkodikge1xuICAgIGlmICh0eXBlb2YgdiA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIG1peE51bWJlcjtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2ID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoY29sb3IudGVzdCh2KSkge1xuICAgICAgICAgICAgcmV0dXJuIG1peENvbG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG1peENvbXBsZXg7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodikpIHtcbiAgICAgICAgcmV0dXJuIG1peEFycmF5O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBtaXhPYmplY3Q7XG4gICAgfVxufVxuZnVuY3Rpb24gY3JlYXRlTWl4ZXJzKG91dHB1dCwgZWFzZSwgY3VzdG9tTWl4ZXIpIHtcbiAgICB2YXIgbWl4ZXJzID0gW107XG4gICAgdmFyIG1peGVyRmFjdG9yeSA9IGN1c3RvbU1peGVyIHx8IGRldGVjdE1peGVyRmFjdG9yeShvdXRwdXRbMF0pO1xuICAgIHZhciBudW1NaXhlcnMgPSBvdXRwdXQubGVuZ3RoIC0gMTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bU1peGVyczsgaSsrKSB7XG4gICAgICAgIHZhciBtaXhlciA9IG1peGVyRmFjdG9yeShvdXRwdXRbaV0sIG91dHB1dFtpICsgMV0pO1xuICAgICAgICBpZiAoZWFzZSkge1xuICAgICAgICAgICAgdmFyIGVhc2luZ0Z1bmN0aW9uID0gQXJyYXkuaXNBcnJheShlYXNlKSA/IGVhc2VbaV0gOiBlYXNlO1xuICAgICAgICAgICAgbWl4ZXIgPSBwaXBlKGVhc2luZ0Z1bmN0aW9uLCBtaXhlcik7XG4gICAgICAgIH1cbiAgICAgICAgbWl4ZXJzLnB1c2gobWl4ZXIpO1xuICAgIH1cbiAgICByZXR1cm4gbWl4ZXJzO1xufVxuZnVuY3Rpb24gZmFzdEludGVycG9sYXRlKF9hLCBfYikge1xuICAgIHZhciBmcm9tID0gX2FbMF0sXG4gICAgICAgIHRvID0gX2FbMV07XG4gICAgdmFyIG1peGVyID0gX2JbMF07XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBtaXhlcihwcm9ncmVzcyhmcm9tLCB0bywgdikpO1xuICAgIH07XG59XG5mdW5jdGlvbiBzbG93SW50ZXJwb2xhdGUoaW5wdXQsIG1peGVycykge1xuICAgIHZhciBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgICB2YXIgbGFzdElucHV0SW5kZXggPSBpbnB1dExlbmd0aCAtIDE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHZhciBtaXhlckluZGV4ID0gMDtcbiAgICAgICAgdmFyIGZvdW5kTWl4ZXJJbmRleCA9IGZhbHNlO1xuICAgICAgICBpZiAodiA8PSBpbnB1dFswXSkge1xuICAgICAgICAgICAgZm91bmRNaXhlckluZGV4ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh2ID49IGlucHV0W2xhc3RJbnB1dEluZGV4XSkge1xuICAgICAgICAgICAgbWl4ZXJJbmRleCA9IGxhc3RJbnB1dEluZGV4IC0gMTtcbiAgICAgICAgICAgIGZvdW5kTWl4ZXJJbmRleCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmb3VuZE1peGVySW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBpID0gMTtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgaW5wdXRMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpbnB1dFtpXSA+IHYgfHwgaSA9PT0gbGFzdElucHV0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWl4ZXJJbmRleCA9IGkgLSAxO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcm9ncmVzc0luUmFuZ2UgPSBwcm9ncmVzcyhpbnB1dFttaXhlckluZGV4XSwgaW5wdXRbbWl4ZXJJbmRleCArIDFdLCB2KTtcbiAgICAgICAgcmV0dXJuIG1peGVyc1ttaXhlckluZGV4XShwcm9ncmVzc0luUmFuZ2UpO1xuICAgIH07XG59XG5mdW5jdGlvbiBpbnRlcnBvbGF0ZShpbnB1dCwgb3V0cHV0LCBfYSkge1xuICAgIHZhciBfYiA9IF9hID09PSB2b2lkIDAgPyB7fSA6IF9hLFxuICAgICAgICBfYyA9IF9iLmNsYW1wLFxuICAgICAgICBpc0NsYW1wID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYyxcbiAgICAgICAgZWFzZSA9IF9iLmVhc2UsXG4gICAgICAgIG1peGVyID0gX2IubWl4ZXI7XG4gICAgdmFyIGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICAgIGludmFyaWFudChpbnB1dExlbmd0aCA9PT0gb3V0cHV0Lmxlbmd0aCwgJ0JvdGggaW5wdXQgYW5kIG91dHB1dCByYW5nZXMgbXVzdCBiZSB0aGUgc2FtZSBsZW5ndGgnKTtcbiAgICBpbnZhcmlhbnQoIWVhc2UgfHwgIUFycmF5LmlzQXJyYXkoZWFzZSkgfHwgZWFzZS5sZW5ndGggPT09IGlucHV0TGVuZ3RoIC0gMSwgJ0FycmF5IG9mIGVhc2luZyBmdW5jdGlvbnMgbXVzdCBiZSBvZiBsZW5ndGggYGlucHV0Lmxlbmd0aCAtIDFgLCBhcyBpdCBhcHBsaWVzIHRvIHRoZSB0cmFuc2l0aW9ucyAqKmJldHdlZW4qKiB0aGUgZGVmaW5lZCB2YWx1ZXMuJyk7XG4gICAgaWYgKGlucHV0WzBdID4gaW5wdXRbaW5wdXRMZW5ndGggLSAxXSkge1xuICAgICAgICBpbnB1dCA9IFtdLmNvbmNhdChpbnB1dCk7XG4gICAgICAgIG91dHB1dCA9IFtdLmNvbmNhdChvdXRwdXQpO1xuICAgICAgICBpbnB1dC5yZXZlcnNlKCk7XG4gICAgICAgIG91dHB1dC5yZXZlcnNlKCk7XG4gICAgfVxuICAgIHZhciBtaXhlcnMgPSBjcmVhdGVNaXhlcnMob3V0cHV0LCBlYXNlLCBtaXhlcik7XG4gICAgdmFyIGludGVycG9sYXRvciA9IGlucHV0TGVuZ3RoID09PSAyID8gZmFzdEludGVycG9sYXRlKGlucHV0LCBtaXhlcnMpIDogc2xvd0ludGVycG9sYXRlKGlucHV0LCBtaXhlcnMpO1xuICAgIHJldHVybiBpc0NsYW1wID8gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIGludGVycG9sYXRvcihjbGFtcChpbnB1dFswXSwgaW5wdXRbaW5wdXRMZW5ndGggLSAxXSwgdikpO1xuICAgIH0gOiBpbnRlcnBvbGF0b3I7XG59XG5cbnZhciByZXZlcnNlRWFzaW5nID0gZnVuY3Rpb24gKGVhc2luZykge1xuICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgICAgICByZXR1cm4gMSAtIGVhc2luZygxIC0gcCk7XG4gICAgfTtcbn07XG52YXIgbWlycm9yRWFzaW5nID0gZnVuY3Rpb24gKGVhc2luZykge1xuICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgICAgICByZXR1cm4gcCA8PSAwLjUgPyBlYXNpbmcoMiAqIHApIC8gMiA6ICgyIC0gZWFzaW5nKDIgKiAoMSAtIHApKSkgLyAyO1xuICAgIH07XG59O1xudmFyIGNyZWF0ZUV4cG9JbiA9IGZ1bmN0aW9uIChwb3dlcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3cocCwgcG93ZXIpO1xuICAgIH07XG59O1xudmFyIGNyZWF0ZUJhY2tJbiA9IGZ1bmN0aW9uIChwb3dlcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAocCkge1xuICAgICAgICByZXR1cm4gcCAqIHAgKiAoKHBvd2VyICsgMSkgKiBwIC0gcG93ZXIpO1xuICAgIH07XG59O1xudmFyIGNyZWF0ZUFudGljaXBhdGUgPSBmdW5jdGlvbiAocG93ZXIpIHtcbiAgICB2YXIgYmFja0Vhc2luZyA9IGNyZWF0ZUJhY2tJbihwb3dlcik7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwKSB7XG4gICAgICAgIHJldHVybiAocCAqPSAyKSA8IDEgPyAwLjUgKiBiYWNrRWFzaW5nKHApIDogMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocCAtIDEpKSk7XG4gICAgfTtcbn07XG5cbnZhciBERUZBVUxUX09WRVJTSE9PVF9TVFJFTkdUSCA9IDEuNTI1O1xudmFyIEJPVU5DRV9GSVJTVF9USFJFU0hPTEQgPSA0LjAgLyAxMS4wO1xudmFyIEJPVU5DRV9TRUNPTkRfVEhSRVNIT0xEID0gOC4wIC8gMTEuMDtcbnZhciBCT1VOQ0VfVEhJUkRfVEhSRVNIT0xEID0gOS4wIC8gMTAuMDtcbnZhciBsaW5lYXIgPSBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwO1xufTtcbnZhciBlYXNlSW4gPSAvKiNfX1BVUkVfXyovY3JlYXRlRXhwb0luKDIpO1xudmFyIGVhc2VPdXQgPSAvKiNfX1BVUkVfXyovcmV2ZXJzZUVhc2luZyhlYXNlSW4pO1xudmFyIGVhc2VJbk91dCA9IC8qI19fUFVSRV9fKi9taXJyb3JFYXNpbmcoZWFzZUluKTtcbnZhciBjaXJjSW4gPSBmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHApKTtcbn07XG52YXIgY2lyY091dCA9IC8qI19fUFVSRV9fKi9yZXZlcnNlRWFzaW5nKGNpcmNJbik7XG52YXIgY2lyY0luT3V0ID0gLyojX19QVVJFX18qL21pcnJvckVhc2luZyhjaXJjT3V0KTtcbnZhciBiYWNrSW4gPSAvKiNfX1BVUkVfXyovY3JlYXRlQmFja0luKERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIKTtcbnZhciBiYWNrT3V0ID0gLyojX19QVVJFX18qL3JldmVyc2VFYXNpbmcoYmFja0luKTtcbnZhciBiYWNrSW5PdXQgPSAvKiNfX1BVUkVfXyovbWlycm9yRWFzaW5nKGJhY2tJbik7XG52YXIgYW50aWNpcGF0ZSA9IC8qI19fUFVSRV9fKi9jcmVhdGVBbnRpY2lwYXRlKERFRkFVTFRfT1ZFUlNIT09UX1NUUkVOR1RIKTtcbnZhciBjYSA9IDQzNTYuMCAvIDM2MS4wO1xudmFyIGNiID0gMzU0NDIuMCAvIDE4MDUuMDtcbnZhciBjYyA9IDE2MDYxLjAgLyAxODA1LjA7XG52YXIgYm91bmNlT3V0ID0gZnVuY3Rpb24gKHApIHtcbiAgICBpZiAocCA9PT0gMSB8fCBwID09PSAwKSByZXR1cm4gcDtcbiAgICB2YXIgcDIgPSBwICogcDtcbiAgICByZXR1cm4gcCA8IEJPVU5DRV9GSVJTVF9USFJFU0hPTEQgPyA3LjU2MjUgKiBwMiA6IHAgPCBCT1VOQ0VfU0VDT05EX1RIUkVTSE9MRCA/IDkuMDc1ICogcDIgLSA5LjkgKiBwICsgMy40IDogcCA8IEJPVU5DRV9USElSRF9USFJFU0hPTEQgPyBjYSAqIHAyIC0gY2IgKiBwICsgY2MgOiAxMC44ICogcCAqIHAgLSAyMC41MiAqIHAgKyAxMC43Mjtcbn07XG52YXIgYm91bmNlSW4gPSAvKiNfX1BVUkVfXyovcmV2ZXJzZUVhc2luZyhib3VuY2VPdXQpO1xudmFyIGJvdW5jZUluT3V0ID0gZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcCA8IDAuNSA/IDAuNSAqICgxLjAgLSBib3VuY2VPdXQoMS4wIC0gcCAqIDIuMCkpIDogMC41ICogYm91bmNlT3V0KHAgKiAyLjAgLSAxLjApICsgMC41O1xufTtcblxuZnVuY3Rpb24gZGVmYXVsdEVhc2luZyh2YWx1ZXMsIGVhc2luZykge1xuICAgIHJldHVybiB2YWx1ZXMubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGVhc2luZyB8fCBlYXNlSW5PdXQ7XG4gICAgfSkuc3BsaWNlKDAsIHZhbHVlcy5sZW5ndGggLSAxKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRPZmZzZXQodmFsdWVzKSB7XG4gICAgdmFyIG51bVZhbHVlcyA9IHZhbHVlcy5sZW5ndGg7XG4gICAgcmV0dXJuIHZhbHVlcy5tYXAoZnVuY3Rpb24gKF92YWx1ZSwgaSkge1xuICAgICAgICByZXR1cm4gaSAhPT0gMCA/IGkgLyAobnVtVmFsdWVzIC0gMSkgOiAwO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY29udmVydE9mZnNldFRvVGltZXMob2Zmc2V0LCBkdXJhdGlvbikge1xuICAgIHJldHVybiBvZmZzZXQubWFwKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHJldHVybiBvICogZHVyYXRpb247XG4gICAgfSk7XG59XG5mdW5jdGlvbiBrZXlmcmFtZXMoX2EpIHtcbiAgICB2YXIgX2IgPSBfYS5mcm9tLFxuICAgICAgICBmcm9tID0gX2IgPT09IHZvaWQgMCA/IDAgOiBfYixcbiAgICAgICAgX2MgPSBfYS50byxcbiAgICAgICAgdG8gPSBfYyA9PT0gdm9pZCAwID8gMSA6IF9jLFxuICAgICAgICBlYXNlID0gX2EuZWFzZSxcbiAgICAgICAgb2Zmc2V0ID0gX2Eub2Zmc2V0LFxuICAgICAgICBfZCA9IF9hLmR1cmF0aW9uLFxuICAgICAgICBkdXJhdGlvbiA9IF9kID09PSB2b2lkIDAgPyAzMDAgOiBfZDtcbiAgICB2YXIgc3RhdGUgPSB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogZnJvbSB9O1xuICAgIHZhciB2YWx1ZXMgPSBBcnJheS5pc0FycmF5KHRvKSA/IHRvIDogW2Zyb20sIHRvXTtcbiAgICB2YXIgdGltZXMgPSBjb252ZXJ0T2Zmc2V0VG9UaW1lcyhvZmZzZXQgIT09IG51bGwgJiYgb2Zmc2V0ICE9PSB2b2lkIDAgPyBvZmZzZXQgOiBkZWZhdWx0T2Zmc2V0KHZhbHVlcyksIGR1cmF0aW9uKTtcbiAgICBmdW5jdGlvbiBjcmVhdGVJbnRlcnBvbGF0b3IoKSB7XG4gICAgICAgIHJldHVybiBpbnRlcnBvbGF0ZSh0aW1lcywgdmFsdWVzLCB7XG4gICAgICAgICAgICBlYXNlOiBBcnJheS5pc0FycmF5KGVhc2UpID8gZWFzZSA6IGRlZmF1bHRFYXNpbmcodmFsdWVzLCBlYXNlKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFyIGludGVycG9sYXRvciA9IGNyZWF0ZUludGVycG9sYXRvcigpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSA9IGludGVycG9sYXRvcih0KTtcbiAgICAgICAgICAgIHN0YXRlLmRvbmUgPSB0ID49IGR1cmF0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9LFxuICAgICAgICBmbGlwVGFyZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YWx1ZXMucmV2ZXJzZSgpO1xuICAgICAgICAgICAgaW50ZXJwb2xhdG9yID0gY3JlYXRlSW50ZXJwb2xhdG9yKCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBkZWNheShfYSkge1xuICAgIHZhciBfYiA9IF9hLnZlbG9jaXR5LFxuICAgICAgICB2ZWxvY2l0eSA9IF9iID09PSB2b2lkIDAgPyAwIDogX2IsXG4gICAgICAgIF9jID0gX2EuZnJvbSxcbiAgICAgICAgZnJvbSA9IF9jID09PSB2b2lkIDAgPyAwIDogX2MsXG4gICAgICAgIF9kID0gX2EucG93ZXIsXG4gICAgICAgIHBvd2VyID0gX2QgPT09IHZvaWQgMCA/IDAuOCA6IF9kLFxuICAgICAgICBfZSA9IF9hLnRpbWVDb25zdGFudCxcbiAgICAgICAgdGltZUNvbnN0YW50ID0gX2UgPT09IHZvaWQgMCA/IDM1MCA6IF9lLFxuICAgICAgICBfZiA9IF9hLnJlc3REZWx0YSxcbiAgICAgICAgcmVzdERlbHRhID0gX2YgPT09IHZvaWQgMCA/IDAuNSA6IF9mLFxuICAgICAgICBtb2RpZnlUYXJnZXQgPSBfYS5tb2RpZnlUYXJnZXQ7XG4gICAgdmFyIHN0YXRlID0geyBkb25lOiBmYWxzZSwgdmFsdWU6IGZyb20gfTtcbiAgICB2YXIgYW1wbGl0dWRlID0gcG93ZXIgKiB2ZWxvY2l0eTtcbiAgICB2YXIgaWRlYWwgPSBmcm9tICsgYW1wbGl0dWRlO1xuICAgIHZhciB0YXJnZXQgPSBtb2RpZnlUYXJnZXQgPT09IHVuZGVmaW5lZCA/IGlkZWFsIDogbW9kaWZ5VGFyZ2V0KGlkZWFsKTtcbiAgICBpZiAodGFyZ2V0ICE9PSBpZGVhbCkgYW1wbGl0dWRlID0gdGFyZ2V0IC0gZnJvbTtcbiAgICByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgdmFyIGRlbHRhID0gLWFtcGxpdHVkZSAqIE1hdGguZXhwKC10IC8gdGltZUNvbnN0YW50KTtcbiAgICAgICAgICAgIHN0YXRlLmRvbmUgPSAhKGRlbHRhID4gcmVzdERlbHRhIHx8IGRlbHRhIDwgLXJlc3REZWx0YSk7XG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSA9IHN0YXRlLmRvbmUgPyB0YXJnZXQgOiB0YXJnZXQgKyBkZWx0YTtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZmxpcFRhcmdldDogZnVuY3Rpb24gKCkge31cbiAgICB9O1xufVxuXG52YXIgdHlwZXMgPSB7IGtleWZyYW1lczoga2V5ZnJhbWVzLCBzcHJpbmc6IHNwcmluZywgZGVjYXk6IGRlY2F5IH07XG5mdW5jdGlvbiBkZXRlY3RBbmltYXRpb25Gcm9tT3B0aW9ucyhjb25maWcpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjb25maWcudG8pKSB7XG4gICAgICAgIHJldHVybiBrZXlmcmFtZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlc1tjb25maWcudHlwZV0pIHtcbiAgICAgICAgcmV0dXJuIHR5cGVzW2NvbmZpZy50eXBlXTtcbiAgICB9XG4gICAgdmFyIGtleXMgPSBuZXcgU2V0KE9iamVjdC5rZXlzKGNvbmZpZykpO1xuICAgIGlmIChrZXlzLmhhcyhcImVhc2VcIikgfHwga2V5cy5oYXMoXCJkdXJhdGlvblwiKSAmJiAha2V5cy5oYXMoXCJkYW1waW5nUmF0aW9cIikpIHtcbiAgICAgICAgcmV0dXJuIGtleWZyYW1lcztcbiAgICB9IGVsc2UgaWYgKGtleXMuaGFzKFwiZGFtcGluZ1JhdGlvXCIpIHx8IGtleXMuaGFzKFwic3RpZmZuZXNzXCIpIHx8IGtleXMuaGFzKFwibWFzc1wiKSB8fCBrZXlzLmhhcyhcImRhbXBpbmdcIikgfHwga2V5cy5oYXMoXCJyZXN0U3BlZWRcIikgfHwga2V5cy5oYXMoXCJyZXN0RGVsdGFcIikpIHtcbiAgICAgICAgcmV0dXJuIHNwcmluZztcbiAgICB9XG4gICAgcmV0dXJuIGtleWZyYW1lcztcbn1cblxuZnVuY3Rpb24gbG9vcEVsYXBzZWQoZWxhcHNlZCwgZHVyYXRpb24sIGRlbGF5KSB7XG4gICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICAgICAgZGVsYXkgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gZWxhcHNlZCAtIGR1cmF0aW9uIC0gZGVsYXk7XG59XG5mdW5jdGlvbiByZXZlcnNlRWxhcHNlZChlbGFwc2VkLCBkdXJhdGlvbiwgZGVsYXksIGlzRm9yd2FyZFBsYXliYWNrKSB7XG4gICAgaWYgKGRlbGF5ID09PSB2b2lkIDApIHtcbiAgICAgICAgZGVsYXkgPSAwO1xuICAgIH1cbiAgICBpZiAoaXNGb3J3YXJkUGxheWJhY2sgPT09IHZvaWQgMCkge1xuICAgICAgICBpc0ZvcndhcmRQbGF5YmFjayA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBpc0ZvcndhcmRQbGF5YmFjayA/IGxvb3BFbGFwc2VkKGR1cmF0aW9uICsgLWVsYXBzZWQsIGR1cmF0aW9uLCBkZWxheSkgOiBkdXJhdGlvbiAtIChlbGFwc2VkIC0gZHVyYXRpb24pICsgZGVsYXk7XG59XG5mdW5jdGlvbiBoYXNSZXBlYXREZWxheUVsYXBzZWQoZWxhcHNlZCwgZHVyYXRpb24sIGRlbGF5LCBpc0ZvcndhcmRQbGF5YmFjaykge1xuICAgIHJldHVybiBpc0ZvcndhcmRQbGF5YmFjayA/IGVsYXBzZWQgPj0gZHVyYXRpb24gKyBkZWxheSA6IGVsYXBzZWQgPD0gLWRlbGF5O1xufVxuXG52YXIgZnJhbWVzeW5jID0gZnVuY3Rpb24gKHVwZGF0ZSkge1xuICAgIHZhciBwYXNzVGltZXN0YW1wID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBkZWx0YSA9IF9hLmRlbHRhO1xuICAgICAgICByZXR1cm4gdXBkYXRlKGRlbHRhKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3luYy51cGRhdGUocGFzc1RpbWVzdGFtcCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjYW5jZWxTeW5jLnVwZGF0ZShwYXNzVGltZXN0YW1wKTtcbiAgICAgICAgfVxuICAgIH07XG59O1xuZnVuY3Rpb24gYW5pbWF0ZShfYSkge1xuICAgIHZhciBfYiwgX2M7XG4gICAgdmFyIGZyb20gPSBfYS5mcm9tLFxuICAgICAgICBfZCA9IF9hLmF1dG9wbGF5LFxuICAgICAgICBhdXRvcGxheSA9IF9kID09PSB2b2lkIDAgPyB0cnVlIDogX2QsXG4gICAgICAgIF9lID0gX2EuZHJpdmVyLFxuICAgICAgICBkcml2ZXIgPSBfZSA9PT0gdm9pZCAwID8gZnJhbWVzeW5jIDogX2UsXG4gICAgICAgIF9mID0gX2EuZWxhcHNlZCxcbiAgICAgICAgZWxhcHNlZCA9IF9mID09PSB2b2lkIDAgPyAwIDogX2YsXG4gICAgICAgIF9nID0gX2EucmVwZWF0LFxuICAgICAgICByZXBlYXRNYXggPSBfZyA9PT0gdm9pZCAwID8gMCA6IF9nLFxuICAgICAgICBfaCA9IF9hLnJlcGVhdFR5cGUsXG4gICAgICAgIHJlcGVhdFR5cGUgPSBfaCA9PT0gdm9pZCAwID8gXCJsb29wXCIgOiBfaCxcbiAgICAgICAgX2ogPSBfYS5yZXBlYXREZWxheSxcbiAgICAgICAgcmVwZWF0RGVsYXkgPSBfaiA9PT0gdm9pZCAwID8gMCA6IF9qLFxuICAgICAgICBvblBsYXkgPSBfYS5vblBsYXksXG4gICAgICAgIG9uU3RvcCA9IF9hLm9uU3RvcCxcbiAgICAgICAgb25Db21wbGV0ZSA9IF9hLm9uQ29tcGxldGUsXG4gICAgICAgIG9uUmVwZWF0ID0gX2Eub25SZXBlYXQsXG4gICAgICAgIG9uVXBkYXRlID0gX2Eub25VcGRhdGUsXG4gICAgICAgIG9wdGlvbnMgPSBfX3Jlc3QoX2EsIFtcImZyb21cIiwgXCJhdXRvcGxheVwiLCBcImRyaXZlclwiLCBcImVsYXBzZWRcIiwgXCJyZXBlYXRcIiwgXCJyZXBlYXRUeXBlXCIsIFwicmVwZWF0RGVsYXlcIiwgXCJvblBsYXlcIiwgXCJvblN0b3BcIiwgXCJvbkNvbXBsZXRlXCIsIFwib25SZXBlYXRcIiwgXCJvblVwZGF0ZVwiXSk7XG4gICAgdmFyIHRvID0gb3B0aW9ucy50bztcbiAgICB2YXIgZHJpdmVyQ29udHJvbHM7XG4gICAgdmFyIHJlcGVhdENvdW50ID0gMDtcbiAgICB2YXIgY29tcHV0ZWREdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb247XG4gICAgdmFyIGxhdGVzdDtcbiAgICB2YXIgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIHZhciBpc0ZvcndhcmRQbGF5YmFjayA9IHRydWU7XG4gICAgdmFyIGludGVycG9sYXRlRnJvbU51bWJlcjtcbiAgICB2YXIgYW5pbWF0b3IgPSBkZXRlY3RBbmltYXRpb25Gcm9tT3B0aW9ucyhvcHRpb25zKTtcbiAgICBpZiAoKF9jID0gKF9iID0gYW5pbWF0b3IpLm5lZWRzSW50ZXJwb2xhdGlvbikgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNhbGwoX2IsIGZyb20sIHRvKSkge1xuICAgICAgICBpbnRlcnBvbGF0ZUZyb21OdW1iZXIgPSBpbnRlcnBvbGF0ZShbMCwgMTAwXSwgW2Zyb20sIHRvXSwge1xuICAgICAgICAgICAgY2xhbXA6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBmcm9tID0gMDtcbiAgICAgICAgdG8gPSAxMDA7XG4gICAgfVxuICAgIHZhciBhbmltYXRpb24gPSBhbmltYXRvcihfX2Fzc2lnbihfX2Fzc2lnbih7fSwgb3B0aW9ucyksIHsgZnJvbTogZnJvbSwgdG86IHRvIH0pKTtcbiAgICBmdW5jdGlvbiByZXBlYXQoKSB7XG4gICAgICAgIHJlcGVhdENvdW50Kys7XG4gICAgICAgIGlmIChyZXBlYXRUeXBlID09PSBcInJldmVyc2VcIikge1xuICAgICAgICAgICAgaXNGb3J3YXJkUGxheWJhY2sgPSByZXBlYXRDb3VudCAlIDIgPT09IDA7XG4gICAgICAgICAgICBlbGFwc2VkID0gcmV2ZXJzZUVsYXBzZWQoZWxhcHNlZCwgY29tcHV0ZWREdXJhdGlvbiwgcmVwZWF0RGVsYXksIGlzRm9yd2FyZFBsYXliYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsYXBzZWQgPSBsb29wRWxhcHNlZChlbGFwc2VkLCBjb21wdXRlZER1cmF0aW9uLCByZXBlYXREZWxheSk7XG4gICAgICAgICAgICBpZiAocmVwZWF0VHlwZSA9PT0gXCJtaXJyb3JcIikgYW5pbWF0aW9uLmZsaXBUYXJnZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBpc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIG9uUmVwZWF0ICYmIG9uUmVwZWF0KCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBkcml2ZXJDb250cm9scy5zdG9wKCk7XG4gICAgICAgIG9uQ29tcGxldGUgJiYgb25Db21wbGV0ZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGUoZGVsdGEpIHtcbiAgICAgICAgaWYgKCFpc0ZvcndhcmRQbGF5YmFjaykgZGVsdGEgPSAtZGVsdGE7XG4gICAgICAgIGVsYXBzZWQgKz0gZGVsdGE7XG4gICAgICAgIGlmICghaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gYW5pbWF0aW9uLm5leHQoTWF0aC5tYXgoMCwgZWxhcHNlZCkpO1xuICAgICAgICAgICAgbGF0ZXN0ID0gc3RhdGUudmFsdWU7XG4gICAgICAgICAgICBpZiAoaW50ZXJwb2xhdGVGcm9tTnVtYmVyKSBsYXRlc3QgPSBpbnRlcnBvbGF0ZUZyb21OdW1iZXIobGF0ZXN0KTtcbiAgICAgICAgICAgIGlzQ29tcGxldGUgPSBpc0ZvcndhcmRQbGF5YmFjayA/IHN0YXRlLmRvbmUgOiBlbGFwc2VkIDw9IDA7XG4gICAgICAgIH1cbiAgICAgICAgb25VcGRhdGUgPT09IG51bGwgfHwgb25VcGRhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uVXBkYXRlKGxhdGVzdCk7XG4gICAgICAgIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICBpZiAocmVwZWF0Q291bnQgPT09IDApIGNvbXB1dGVkRHVyYXRpb24gIT09IG51bGwgJiYgY29tcHV0ZWREdXJhdGlvbiAhPT0gdm9pZCAwID8gY29tcHV0ZWREdXJhdGlvbiA6IGNvbXB1dGVkRHVyYXRpb24gPSBlbGFwc2VkO1xuICAgICAgICAgICAgaWYgKHJlcGVhdENvdW50IDwgcmVwZWF0TWF4KSB7XG4gICAgICAgICAgICAgICAgaGFzUmVwZWF0RGVsYXlFbGFwc2VkKGVsYXBzZWQsIGNvbXB1dGVkRHVyYXRpb24sIHJlcGVhdERlbGF5LCBpc0ZvcndhcmRQbGF5YmFjaykgJiYgcmVwZWF0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgb25QbGF5ID09PSBudWxsIHx8IG9uUGxheSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25QbGF5KCk7XG4gICAgICAgIGRyaXZlckNvbnRyb2xzID0gZHJpdmVyKHVwZGF0ZSk7XG4gICAgICAgIGRyaXZlckNvbnRyb2xzLnN0YXJ0KCk7XG4gICAgfVxuICAgIGF1dG9wbGF5ICYmIHBsYXkoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBvblN0b3AgPT09IG51bGwgfHwgb25TdG9wID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvblN0b3AoKTtcbiAgICAgICAgICAgIGRyaXZlckNvbnRyb2xzLnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHZlbG9jaXR5UGVyU2Vjb25kKHZlbG9jaXR5LCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgcmV0dXJuIGZyYW1lRHVyYXRpb24gPyB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xufVxuXG5mdW5jdGlvbiBpbmVydGlhKF9hKSB7XG4gICAgdmFyIF9iID0gX2EuZnJvbSxcbiAgICAgICAgZnJvbSA9IF9iID09PSB2b2lkIDAgPyAwIDogX2IsXG4gICAgICAgIF9jID0gX2EudmVsb2NpdHksXG4gICAgICAgIHZlbG9jaXR5ID0gX2MgPT09IHZvaWQgMCA/IDAgOiBfYyxcbiAgICAgICAgbWluID0gX2EubWluLFxuICAgICAgICBtYXggPSBfYS5tYXgsXG4gICAgICAgIF9kID0gX2EucG93ZXIsXG4gICAgICAgIHBvd2VyID0gX2QgPT09IHZvaWQgMCA/IDAuOCA6IF9kLFxuICAgICAgICBfZSA9IF9hLnRpbWVDb25zdGFudCxcbiAgICAgICAgdGltZUNvbnN0YW50ID0gX2UgPT09IHZvaWQgMCA/IDc1MCA6IF9lLFxuICAgICAgICBfZiA9IF9hLmJvdW5jZVN0aWZmbmVzcyxcbiAgICAgICAgYm91bmNlU3RpZmZuZXNzID0gX2YgPT09IHZvaWQgMCA/IDUwMCA6IF9mLFxuICAgICAgICBfZyA9IF9hLmJvdW5jZURhbXBpbmcsXG4gICAgICAgIGJvdW5jZURhbXBpbmcgPSBfZyA9PT0gdm9pZCAwID8gMTAgOiBfZyxcbiAgICAgICAgX2ggPSBfYS5yZXN0RGVsdGEsXG4gICAgICAgIHJlc3REZWx0YSA9IF9oID09PSB2b2lkIDAgPyAxIDogX2gsXG4gICAgICAgIG1vZGlmeVRhcmdldCA9IF9hLm1vZGlmeVRhcmdldCxcbiAgICAgICAgZHJpdmVyID0gX2EuZHJpdmVyLFxuICAgICAgICBvblVwZGF0ZSA9IF9hLm9uVXBkYXRlLFxuICAgICAgICBvbkNvbXBsZXRlID0gX2Eub25Db21wbGV0ZTtcbiAgICB2YXIgY3VycmVudEFuaW1hdGlvbjtcbiAgICBmdW5jdGlvbiBpc091dE9mQm91bmRzKHYpIHtcbiAgICAgICAgcmV0dXJuIG1pbiAhPT0gdW5kZWZpbmVkICYmIHYgPCBtaW4gfHwgbWF4ICE9PSB1bmRlZmluZWQgJiYgdiA+IG1heDtcbiAgICB9XG4gICAgZnVuY3Rpb24gYm91bmRhcnlOZWFyZXN0KHYpIHtcbiAgICAgICAgaWYgKG1pbiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbWF4O1xuICAgICAgICBpZiAobWF4ID09PSB1bmRlZmluZWQpIHJldHVybiBtaW47XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhtaW4gLSB2KSA8IE1hdGguYWJzKG1heCAtIHYpID8gbWluIDogbWF4O1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdGFydEFuaW1hdGlvbihvcHRpb25zKSB7XG4gICAgICAgIGN1cnJlbnRBbmltYXRpb24gPT09IG51bGwgfHwgY3VycmVudEFuaW1hdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudEFuaW1hdGlvbi5zdG9wKCk7XG4gICAgICAgIGN1cnJlbnRBbmltYXRpb24gPSBhbmltYXRlKF9fYXNzaWduKF9fYXNzaWduKHt9LCBvcHRpb25zKSwgeyBkcml2ZXI6IGRyaXZlciwgb25VcGRhdGU6IGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIG9uVXBkYXRlID09PSBudWxsIHx8IG9uVXBkYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvblVwZGF0ZSh2KTtcbiAgICAgICAgICAgICAgICAoX2EgPSBvcHRpb25zLm9uVXBkYXRlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChvcHRpb25zLCB2KTtcbiAgICAgICAgICAgIH0sIG9uQ29tcGxldGU6IG9uQ29tcGxldGUgfSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdGFydFNwcmluZyhvcHRpb25zKSB7XG4gICAgICAgIHN0YXJ0QW5pbWF0aW9uKF9fYXNzaWduKHsgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiBib3VuY2VTdGlmZm5lc3MsIGRhbXBpbmc6IGJvdW5jZURhbXBpbmcsIHJlc3REZWx0YTogcmVzdERlbHRhIH0sIG9wdGlvbnMpKTtcbiAgICB9XG4gICAgaWYgKGlzT3V0T2ZCb3VuZHMoZnJvbSkpIHtcbiAgICAgICAgc3RhcnRTcHJpbmcoeyBmcm9tOiBmcm9tLCB2ZWxvY2l0eTogdmVsb2NpdHksIHRvOiBib3VuZGFyeU5lYXJlc3QoZnJvbSkgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHBvd2VyICogdmVsb2NpdHkgKyBmcm9tO1xuICAgICAgICBpZiAodHlwZW9mIG1vZGlmeVRhcmdldCAhPT0gXCJ1bmRlZmluZWRcIikgdGFyZ2V0ID0gbW9kaWZ5VGFyZ2V0KHRhcmdldCk7XG4gICAgICAgIHZhciBib3VuZGFyeV8xID0gYm91bmRhcnlOZWFyZXN0KHRhcmdldCk7XG4gICAgICAgIHZhciBoZWFkaW5nXzEgPSBib3VuZGFyeV8xID09PSBtaW4gPyAtMSA6IDE7XG4gICAgICAgIHZhciBwcmV2XzE7XG4gICAgICAgIHZhciBjdXJyZW50XzE7XG4gICAgICAgIHZhciBjaGVja0JvdW5kYXJ5ID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHByZXZfMSA9IGN1cnJlbnRfMTtcbiAgICAgICAgICAgIGN1cnJlbnRfMSA9IHY7XG4gICAgICAgICAgICB2ZWxvY2l0eSA9IHZlbG9jaXR5UGVyU2Vjb25kKHYgLSBwcmV2XzEsIGdldEZyYW1lRGF0YSgpLmRlbHRhKTtcbiAgICAgICAgICAgIGlmIChoZWFkaW5nXzEgPT09IDEgJiYgdiA+IGJvdW5kYXJ5XzEgfHwgaGVhZGluZ18xID09PSAtMSAmJiB2IDwgYm91bmRhcnlfMSkge1xuICAgICAgICAgICAgICAgIHN0YXJ0U3ByaW5nKHsgZnJvbTogdiwgdG86IGJvdW5kYXJ5XzEsIHZlbG9jaXR5OiB2ZWxvY2l0eSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgc3RhcnRBbmltYXRpb24oe1xuICAgICAgICAgICAgdHlwZTogXCJkZWNheVwiLFxuICAgICAgICAgICAgZnJvbTogZnJvbSxcbiAgICAgICAgICAgIHZlbG9jaXR5OiB2ZWxvY2l0eSxcbiAgICAgICAgICAgIHRpbWVDb25zdGFudDogdGltZUNvbnN0YW50LFxuICAgICAgICAgICAgcG93ZXI6IHBvd2VyLFxuICAgICAgICAgICAgcmVzdERlbHRhOiByZXN0RGVsdGEsXG4gICAgICAgICAgICBtb2RpZnlUYXJnZXQ6IG1vZGlmeVRhcmdldCxcbiAgICAgICAgICAgIG9uVXBkYXRlOiBpc091dE9mQm91bmRzKHRhcmdldCkgPyBjaGVja0JvdW5kYXJ5IDogdW5kZWZpbmVkXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEFuaW1hdGlvbiA9PT0gbnVsbCB8fCBjdXJyZW50QW5pbWF0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50QW5pbWF0aW9uLnN0b3AoKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbnZhciByYWRpYW5zVG9EZWdyZWVzID0gZnVuY3Rpb24gKHJhZGlhbnMpIHtcbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG59O1xuXG52YXIgYW5nbGUgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIGlmIChiID09PSB2b2lkIDApIHtcbiAgICAgICAgYiA9IHplcm9Qb2ludDtcbiAgICB9XG4gICAgcmV0dXJuIHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihiLnkgLSBhLnksIGIueCAtIGEueCkpO1xufTtcblxudmFyIGFwcGx5T2Zmc2V0ID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gICAgdmFyIGhhc1JlY2VpdmVkRnJvbSA9IHRydWU7XG4gICAgaWYgKHRvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdG8gPSBmcm9tO1xuICAgICAgICBoYXNSZWNlaXZlZEZyb20gPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGlmIChoYXNSZWNlaXZlZEZyb20pIHtcbiAgICAgICAgICAgIHJldHVybiB2IC0gZnJvbSArIHRvO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZnJvbSA9IHY7XG4gICAgICAgICAgICBoYXNSZWNlaXZlZEZyb20gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRvO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5cbnZhciBpZGVudGl0eSA9IGZ1bmN0aW9uICh2KSB7XG4gICAgcmV0dXJuIHY7XG59O1xudmFyIGNyZWF0ZUF0dHJhY3RvciA9IGZ1bmN0aW9uIChhbHRlckRpc3BsYWNlbWVudCkge1xuICAgIGlmIChhbHRlckRpc3BsYWNlbWVudCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGFsdGVyRGlzcGxhY2VtZW50ID0gaWRlbnRpdHk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoY29uc3RhbnQsIG9yaWdpbiwgdikge1xuICAgICAgICB2YXIgZGlzcGxhY2VtZW50ID0gb3JpZ2luIC0gdjtcbiAgICAgICAgdmFyIHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50ID0gLSgwIC0gY29uc3RhbnQgKyAxKSAqICgwIC0gYWx0ZXJEaXNwbGFjZW1lbnQoTWF0aC5hYnMoZGlzcGxhY2VtZW50KSkpO1xuICAgICAgICByZXR1cm4gZGlzcGxhY2VtZW50IDw9IDAgPyBvcmlnaW4gKyBzcHJpbmdNb2RpZmllZERpc3BsYWNlbWVudCA6IG9yaWdpbiAtIHNwcmluZ01vZGlmaWVkRGlzcGxhY2VtZW50O1xuICAgIH07XG59O1xudmFyIGF0dHJhY3QgPSAvKiNfX1BVUkVfXyovY3JlYXRlQXR0cmFjdG9yKCk7XG52YXIgYXR0cmFjdEV4cG8gPSAvKiNfX1BVUkVfXyovY3JlYXRlQXR0cmFjdG9yKE1hdGguc3FydCk7XG5cbnZhciBkZWdyZWVzVG9SYWRpYW5zID0gZnVuY3Rpb24gKGRlZ3JlZXMpIHtcbiAgICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG59O1xuXG52YXIgaXNQb2ludCA9IGZ1bmN0aW9uIChwb2ludCkge1xuICAgIHJldHVybiBwb2ludC5oYXNPd25Qcm9wZXJ0eSgneCcpICYmIHBvaW50Lmhhc093blByb3BlcnR5KCd5Jyk7XG59O1xuXG52YXIgaXNQb2ludDNEID0gZnVuY3Rpb24gKHBvaW50KSB7XG4gICAgcmV0dXJuIGlzUG9pbnQocG9pbnQpICYmIHBvaW50Lmhhc093blByb3BlcnR5KCd6Jyk7XG59O1xuXG52YXIgZGlzdGFuY2UxRCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKGEgLSBiKTtcbn07XG5mdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gICAgaWYgKGlzTnVtKGEpICYmIGlzTnVtKGIpKSB7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuICAgIH0gZWxzZSBpZiAoaXNQb2ludChhKSAmJiBpc1BvaW50KGIpKSB7XG4gICAgICAgIHZhciB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICAgICAgdmFyIHlEZWx0YSA9IGRpc3RhbmNlMUQoYS55LCBiLnkpO1xuICAgICAgICB2YXIgekRlbHRhID0gaXNQb2ludDNEKGEpICYmIGlzUG9pbnQzRChiKSA/IGRpc3RhbmNlMUQoYS56LCBiLnopIDogMDtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4RGVsdGEsIDIpICsgTWF0aC5wb3coeURlbHRhLCAyKSArIE1hdGgucG93KHpEZWx0YSwgMikpO1xuICAgIH1cbn1cblxudmFyIHBvaW50RnJvbVZlY3RvciA9IGZ1bmN0aW9uIChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkge1xuICAgIGFuZ2xlID0gZGVncmVlc1RvUmFkaWFucyhhbmdsZSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICAgICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICAgIH07XG59O1xuXG52YXIgdG9EZWNpbWFsID0gZnVuY3Rpb24gKG51bSwgcHJlY2lzaW9uKSB7XG4gICAgaWYgKHByZWNpc2lvbiA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHByZWNpc2lvbiA9IDI7XG4gICAgfVxuICAgIHByZWNpc2lvbiA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuXG52YXIgc21vb3RoRnJhbWUgPSBmdW5jdGlvbiAocHJldlZhbHVlLCBuZXh0VmFsdWUsIGR1cmF0aW9uLCBzbW9vdGhpbmcpIHtcbiAgICBpZiAoc21vb3RoaW5nID09PSB2b2lkIDApIHtcbiAgICAgICAgc21vb3RoaW5nID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHRvRGVjaW1hbChwcmV2VmFsdWUgKyBkdXJhdGlvbiAqIChuZXh0VmFsdWUgLSBwcmV2VmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpO1xufTtcblxudmFyIHNtb290aCA9IGZ1bmN0aW9uIChzdHJlbmd0aCkge1xuICAgIGlmIChzdHJlbmd0aCA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHN0cmVuZ3RoID0gNTA7XG4gICAgfVxuICAgIHZhciBwcmV2aW91c1ZhbHVlID0gMDtcbiAgICB2YXIgbGFzdFVwZGF0ZWQgPSAwO1xuICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICB2YXIgY3VycmVudEZyYW1lc3RhbXAgPSBnZXRGcmFtZURhdGEoKS50aW1lc3RhbXA7XG4gICAgICAgIHZhciB0aW1lRGVsdGEgPSBjdXJyZW50RnJhbWVzdGFtcCAhPT0gbGFzdFVwZGF0ZWQgPyBjdXJyZW50RnJhbWVzdGFtcCAtIGxhc3RVcGRhdGVkIDogMDtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdGltZURlbHRhID8gc21vb3RoRnJhbWUocHJldmlvdXNWYWx1ZSwgdiwgdGltZURlbHRhLCBzdHJlbmd0aCkgOiBwcmV2aW91c1ZhbHVlO1xuICAgICAgICBsYXN0VXBkYXRlZCA9IGN1cnJlbnRGcmFtZXN0YW1wO1xuICAgICAgICBwcmV2aW91c1ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgICB9O1xufTtcblxudmFyIHNuYXAgPSBmdW5jdGlvbiAocG9pbnRzKSB7XG4gICAgaWYgKHR5cGVvZiBwb2ludHMgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodiAvIHBvaW50cykgKiBwb2ludHM7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGlfMSA9IDA7XG4gICAgICAgIHZhciBudW1Qb2ludHNfMSA9IHBvaW50cy5sZW5ndGg7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgdmFyIGxhc3REaXN0YW5jZSA9IE1hdGguYWJzKHBvaW50c1swXSAtIHYpO1xuICAgICAgICAgICAgZm9yIChpXzEgPSAxOyBpXzEgPCBudW1Qb2ludHNfMTsgaV8xKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9pbnQgPSBwb2ludHNbaV8xXTtcbiAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBNYXRoLmFicyhwb2ludCAtIHYpO1xuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA9PT0gMCkgcmV0dXJuIHBvaW50O1xuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA+IGxhc3REaXN0YW5jZSkgcmV0dXJuIHBvaW50c1tpXzEgLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAoaV8xID09PSBudW1Qb2ludHNfMSAtIDEpIHJldHVybiBwb2ludDtcbiAgICAgICAgICAgICAgICBsYXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiB2ZWxvY2l0eVBlckZyYW1lKHhwcywgZnJhbWVEdXJhdGlvbikge1xuICAgIHJldHVybiB4cHMgLyAoMTAwMCAvIGZyYW1lRHVyYXRpb24pO1xufVxuXG52YXIgd3JhcCA9IGZ1bmN0aW9uIChtaW4sIG1heCwgdikge1xuICAgIHZhciByYW5nZVNpemUgPSBtYXggLSBtaW47XG4gICAgcmV0dXJuICgodiAtIG1pbikgJSByYW5nZVNpemUgKyByYW5nZVNpemUpICUgcmFuZ2VTaXplICsgbWluO1xufTtcblxudmFyIGEgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgcmV0dXJuIDEuMCAtIDMuMCAqIGEyICsgMy4wICogYTE7XG59O1xudmFyIGIgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgcmV0dXJuIDMuMCAqIGEyIC0gNi4wICogYTE7XG59O1xudmFyIGMgPSBmdW5jdGlvbiAoYTEpIHtcbiAgICByZXR1cm4gMy4wICogYTE7XG59O1xudmFyIGNhbGNCZXppZXIgPSBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG4gICAgcmV0dXJuICgoYShhMSwgYTIpICogdCArIGIoYTEsIGEyKSkgKiB0ICsgYyhhMSkpICogdDtcbn07XG52YXIgZ2V0U2xvcGUgPSBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG4gICAgcmV0dXJuIDMuMCAqIGEoYTEsIGEyKSAqIHQgKiB0ICsgMi4wICogYihhMSwgYTIpICogdCArIGMoYTEpO1xufTtcbnZhciBzdWJkaXZpc2lvblByZWNpc2lvbiA9IDAuMDAwMDAwMTtcbnZhciBzdWJkaXZpc2lvbk1heEl0ZXJhdGlvbnMgPSAxMDtcbmZ1bmN0aW9uIGJpbmFyeVN1YmRpdmlkZShhWCwgYUEsIGFCLCBtWDEsIG1YMikge1xuICAgIHZhciBjdXJyZW50WDtcbiAgICB2YXIgY3VycmVudFQ7XG4gICAgdmFyIGkgPSAwO1xuICAgIGRvIHtcbiAgICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7XG4gICAgICAgICAgICBhQiA9IGN1cnJlbnRUO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYUEgPSBjdXJyZW50VDtcbiAgICAgICAgfVxuICAgIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IHN1YmRpdmlzaW9uUHJlY2lzaW9uICYmICsraSA8IHN1YmRpdmlzaW9uTWF4SXRlcmF0aW9ucyk7XG4gICAgcmV0dXJuIGN1cnJlbnRUO1xufVxudmFyIG5ld3Rvbkl0ZXJhdGlvbnMgPSA4O1xudmFyIG5ld3Rvbk1pblNsb3BlID0gMC4wMDE7XG5mdW5jdGlvbiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgYUd1ZXNzVCwgbVgxLCBtWDIpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld3Rvbkl0ZXJhdGlvbnM7ICsraSkge1xuICAgICAgICB2YXIgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuICAgICAgICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gICAgfVxuICAgIHJldHVybiBhR3Vlc3NUO1xufVxudmFyIGtTcGxpbmVUYWJsZVNpemUgPSAxMTtcbnZhciBrU2FtcGxlU3RlcFNpemUgPSAxLjAgLyAoa1NwbGluZVRhYmxlU2l6ZSAtIDEuMCk7XG5mdW5jdGlvbiBjdWJpY0JlemllcihtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcbiAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHJldHVybiBsaW5lYXI7XG4gICAgdmFyIHNhbXBsZVZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkoa1NwbGluZVRhYmxlU2l6ZSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrU3BsaW5lVGFibGVTaXplOyArK2kpIHtcbiAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICoga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFRGb3JYKGFYKSB7XG4gICAgICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wO1xuICAgICAgICB2YXIgY3VycmVudFNhbXBsZSA9IDE7XG4gICAgICAgIHZhciBsYXN0U2FtcGxlID0ga1NwbGluZVRhYmxlU2l6ZSAtIDE7XG4gICAgICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9PSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IGtTYW1wbGVTdGVwU2l6ZTtcbiAgICAgICAgfVxuICAgICAgICAtLWN1cnJlbnRTYW1wbGU7XG4gICAgICAgIHZhciBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgICAgdmFyIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICoga1NhbXBsZVN0ZXBTaXplO1xuICAgICAgICB2YXIgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG4gICAgICAgIGlmIChpbml0aWFsU2xvcGUgPj0gbmV3dG9uTWluU2xvcGUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsga1NhbXBsZVN0ZXBTaXplLCBtWDEsIG1YMik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiB0ID09PSAwIHx8IHQgPT09IDEgPyB0IDogY2FsY0JlemllcihnZXRURm9yWCh0KSwgbVkxLCBtWTIpO1xuICAgIH07XG59XG5cbnZhciBzdGVwcyA9IGZ1bmN0aW9uIChzdGVwcywgZGlyZWN0aW9uKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGRpcmVjdGlvbiA9ICdlbmQnO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHByb2dyZXNzID0gZGlyZWN0aW9uID09PSAnZW5kJyA/IE1hdGgubWluKHByb2dyZXNzLCAwLjk5OSkgOiBNYXRoLm1heChwcm9ncmVzcywgMC4wMDEpO1xuICAgICAgICB2YXIgZXhwYW5kZWQgPSBwcm9ncmVzcyAqIHN0ZXBzO1xuICAgICAgICB2YXIgcm91bmRlZCA9IGRpcmVjdGlvbiA9PT0gJ2VuZCcgPyBNYXRoLmZsb29yKGV4cGFuZGVkKSA6IE1hdGguY2VpbChleHBhbmRlZCk7XG4gICAgICAgIHJldHVybiBjbGFtcCgwLCAxLCByb3VuZGVkIC8gc3RlcHMpO1xuICAgIH07XG59O1xuXG5leHBvcnQgeyBhbmdsZSwgYW5pbWF0ZSwgYW50aWNpcGF0ZSwgYXBwbHlPZmZzZXQsIGF0dHJhY3QsIGF0dHJhY3RFeHBvLCBiYWNrSW4sIGJhY2tJbk91dCwgYmFja091dCwgYm91bmNlSW4sIGJvdW5jZUluT3V0LCBib3VuY2VPdXQsIGNpcmNJbiwgY2lyY0luT3V0LCBjaXJjT3V0LCBjbGFtcCwgY3JlYXRlQW50aWNpcGF0ZSwgY3JlYXRlQXR0cmFjdG9yLCBjcmVhdGVCYWNrSW4sIGNyZWF0ZUV4cG9JbiwgY3ViaWNCZXppZXIsIGRlY2F5LCBkZWdyZWVzVG9SYWRpYW5zLCBkaXN0YW5jZSwgZWFzZUluLCBlYXNlSW5PdXQsIGVhc2VPdXQsIGluZXJ0aWEsIGludGVycG9sYXRlLCBpc1BvaW50LCBpc1BvaW50M0QsIGtleWZyYW1lcywgbGluZWFyLCBtaXJyb3JFYXNpbmcsIG1peCwgbWl4Q29sb3IsIG1peENvbXBsZXgsIHBpcGUsIHBvaW50RnJvbVZlY3RvciwgcHJvZ3Jlc3MsIHJhZGlhbnNUb0RlZ3JlZXMsIHJldmVyc2VFYXNpbmcsIHNtb290aCwgc21vb3RoRnJhbWUsIHNuYXAsIHNwcmluZywgc3RlcHMsIHRvRGVjaW1hbCwgdmVsb2NpdHlQZXJGcmFtZSwgdmVsb2NpdHlQZXJTZWNvbmQsIHdyYXAgfTtcbiIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSAndHNsaWInO1xuXG52YXIgY2xhbXAgPSBmdW5jdGlvbiAobWluLCBtYXgpIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4odiwgbWF4KSwgbWluKTtcclxufTsgfTtcclxudmFyIHNhbml0aXplID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuICh2ICUgMSA/IE51bWJlcih2LnRvRml4ZWQoNSkpIDogdik7IH07XHJcbnZhciBmbG9hdFJlZ2V4ID0gLygtKT8oXFxkW1xcZFxcLl0qKS9nO1xyXG52YXIgY29sb3JSZWdleCA9IC8oI1swLTlhLWZdezZ9fCNbMC05YS1mXXszfXwjKD86WzAtOWEtZl17Mn0pezIsNH18KHJnYnxoc2wpYT9cXCgoLT9bXFxkXFwuXSslP1ssXFxzXSspezIsM31cXHMqXFwvKlxccypbXFxkXFwuXSslP1xcKSkvZ2k7XHJcbnZhciBzaW5nbGVDb2xvclJlZ2V4ID0gL14oI1swLTlhLWZdezN9fCMoPzpbMC05YS1mXXsyfSl7Miw0fXwocmdifGhzbClhP1xcKCgtP1tcXGRcXC5dKyU/WyxcXHNdKyl7MiwzfVxccypcXC8qXFxzKltcXGRcXC5dKyU/XFwpKSQvaTtcblxudmFyIG51bWJlciA9IHtcclxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2KSB7IHJldHVybiB0eXBlb2YgdiA9PT0gJ251bWJlcic7IH0sXHJcbiAgICBwYXJzZTogcGFyc2VGbG9hdCxcclxuICAgIHRyYW5zZm9ybTogZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHY7IH1cclxufTtcclxudmFyIGFscGhhID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG51bWJlciksIHsgdHJhbnNmb3JtOiBjbGFtcCgwLCAxKSB9KTtcclxudmFyIHNjYWxlID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG51bWJlciksIHsgZGVmYXVsdDogMSB9KTtcblxudmFyIGNyZWF0ZVVuaXRUeXBlID0gZnVuY3Rpb24gKHVuaXQpIHsgcmV0dXJuICh7XHJcbiAgICB0ZXN0OiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ3N0cmluZycgJiYgdi5lbmRzV2l0aCh1bml0KSAmJiB2LnNwbGl0KCcgJykubGVuZ3RoID09PSAxO1xyXG4gICAgfSxcclxuICAgIHBhcnNlOiBwYXJzZUZsb2F0LFxyXG4gICAgdHJhbnNmb3JtOiBmdW5jdGlvbiAodikgeyByZXR1cm4gXCJcIiArIHYgKyB1bml0OyB9XHJcbn0pOyB9O1xyXG52YXIgZGVncmVlcyA9IGNyZWF0ZVVuaXRUeXBlKCdkZWcnKTtcclxudmFyIHBlcmNlbnQgPSBjcmVhdGVVbml0VHlwZSgnJScpO1xyXG52YXIgcHggPSBjcmVhdGVVbml0VHlwZSgncHgnKTtcclxudmFyIHZoID0gY3JlYXRlVW5pdFR5cGUoJ3ZoJyk7XHJcbnZhciB2dyA9IGNyZWF0ZVVuaXRUeXBlKCd2dycpO1xyXG52YXIgcHJvZ3Jlc3NQZXJjZW50YWdlID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHBlcmNlbnQpLCB7IHBhcnNlOiBmdW5jdGlvbiAodikgeyByZXR1cm4gcGVyY2VudC5wYXJzZSh2KSAvIDEwMDsgfSwgdHJhbnNmb3JtOiBmdW5jdGlvbiAodikgeyByZXR1cm4gcGVyY2VudC50cmFuc2Zvcm0odiAqIDEwMCk7IH0gfSk7XG5cbnZhciBnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcclxufTtcclxudmFyIGNsYW1wUmdiVW5pdCA9IGNsYW1wKDAsIDI1NSk7XHJcbnZhciBpc1JnYmEgPSBmdW5jdGlvbiAodikgeyByZXR1cm4gdi5yZWQgIT09IHVuZGVmaW5lZDsgfTtcclxudmFyIGlzSHNsYSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiB2Lmh1ZSAhPT0gdW5kZWZpbmVkOyB9O1xyXG5mdW5jdGlvbiBnZXRWYWx1ZXNBc0FycmF5KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodmFsdWUpXHJcbiAgICAgICAgLnJlcGxhY2UoLygsfFxcLykvZywgJyAnKVxyXG4gICAgICAgIC5zcGxpdCgvIFxccyovKTtcclxufVxyXG52YXIgc3BsaXRDb2xvclZhbHVlcyA9IGZ1bmN0aW9uICh0ZXJtcykge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2ICE9PSAnc3RyaW5nJylcclxuICAgICAgICAgICAgcmV0dXJuIHY7XHJcbiAgICAgICAgdmFyIHZhbHVlcyA9IHt9O1xyXG4gICAgICAgIHZhciB2YWx1ZXNBcnJheSA9IGdldFZhbHVlc0FzQXJyYXkodik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgdmFsdWVzW3Rlcm1zW2ldXSA9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNBcnJheVtpXSAhPT0gdW5kZWZpbmVkID8gcGFyc2VGbG9hdCh2YWx1ZXNBcnJheVtpXSkgOiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWVzO1xyXG4gICAgfTtcclxufTtcclxudmFyIHJnYmFUZW1wbGF0ZSA9IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgdmFyIHJlZCA9IF9hLnJlZCwgZ3JlZW4gPSBfYS5ncmVlbiwgYmx1ZSA9IF9hLmJsdWUsIF9iID0gX2EuYWxwaGEsIGFscGhhID0gX2IgPT09IHZvaWQgMCA/IDEgOiBfYjtcclxuICAgIHJldHVybiBcInJnYmEoXCIgKyByZWQgKyBcIiwgXCIgKyBncmVlbiArIFwiLCBcIiArIGJsdWUgKyBcIiwgXCIgKyBhbHBoYSArIFwiKVwiO1xyXG59O1xyXG52YXIgaHNsYVRlbXBsYXRlID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICB2YXIgaHVlID0gX2EuaHVlLCBzYXR1cmF0aW9uID0gX2Euc2F0dXJhdGlvbiwgbGlnaHRuZXNzID0gX2EubGlnaHRuZXNzLCBfYiA9IF9hLmFscGhhLCBhbHBoYSA9IF9iID09PSB2b2lkIDAgPyAxIDogX2I7XHJcbiAgICByZXR1cm4gXCJoc2xhKFwiICsgaHVlICsgXCIsIFwiICsgc2F0dXJhdGlvbiArIFwiLCBcIiArIGxpZ2h0bmVzcyArIFwiLCBcIiArIGFscGhhICsgXCIpXCI7XHJcbn07XHJcbnZhciByZ2JVbml0ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG51bWJlciksIHsgdHJhbnNmb3JtOiBmdW5jdGlvbiAodikgeyByZXR1cm4gTWF0aC5yb3VuZChjbGFtcFJnYlVuaXQodikpOyB9IH0pO1xyXG5mdW5jdGlvbiBpc0NvbG9yU3RyaW5nKGNvbG9yLCBjb2xvclR5cGUpIHtcclxuICAgIHJldHVybiBjb2xvci5zdGFydHNXaXRoKGNvbG9yVHlwZSkgJiYgc2luZ2xlQ29sb3JSZWdleC50ZXN0KGNvbG9yKTtcclxufVxyXG52YXIgcmdiYSA9IHtcclxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2KSB7IHJldHVybiAodHlwZW9mIHYgPT09ICdzdHJpbmcnID8gaXNDb2xvclN0cmluZyh2LCAncmdiJykgOiBpc1JnYmEodikpOyB9LFxyXG4gICAgcGFyc2U6IHNwbGl0Q29sb3JWYWx1ZXMoWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZScsICdhbHBoYSddKSxcclxuICAgIHRyYW5zZm9ybTogZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIHJlZCA9IF9hLnJlZCwgZ3JlZW4gPSBfYS5ncmVlbiwgYmx1ZSA9IF9hLmJsdWUsIF9iID0gX2EuYWxwaGEsIGFscGhhJDEgPSBfYiA9PT0gdm9pZCAwID8gMSA6IF9iO1xyXG4gICAgICAgIHJldHVybiByZ2JhVGVtcGxhdGUoe1xyXG4gICAgICAgICAgICByZWQ6IHJnYlVuaXQudHJhbnNmb3JtKHJlZCksXHJcbiAgICAgICAgICAgIGdyZWVuOiByZ2JVbml0LnRyYW5zZm9ybShncmVlbiksXHJcbiAgICAgICAgICAgIGJsdWU6IHJnYlVuaXQudHJhbnNmb3JtKGJsdWUpLFxyXG4gICAgICAgICAgICBhbHBoYTogc2FuaXRpemUoYWxwaGEudHJhbnNmb3JtKGFscGhhJDEpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG52YXIgaHNsYSA9IHtcclxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2KSB7IHJldHVybiAodHlwZW9mIHYgPT09ICdzdHJpbmcnID8gaXNDb2xvclN0cmluZyh2LCAnaHNsJykgOiBpc0hzbGEodikpOyB9LFxyXG4gICAgcGFyc2U6IHNwbGl0Q29sb3JWYWx1ZXMoWydodWUnLCAnc2F0dXJhdGlvbicsICdsaWdodG5lc3MnLCAnYWxwaGEnXSksXHJcbiAgICB0cmFuc2Zvcm06IGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgIHZhciBodWUgPSBfYS5odWUsIHNhdHVyYXRpb24gPSBfYS5zYXR1cmF0aW9uLCBsaWdodG5lc3MgPSBfYS5saWdodG5lc3MsIF9iID0gX2EuYWxwaGEsIGFscGhhJDEgPSBfYiA9PT0gdm9pZCAwID8gMSA6IF9iO1xyXG4gICAgICAgIHJldHVybiBoc2xhVGVtcGxhdGUoe1xyXG4gICAgICAgICAgICBodWU6IE1hdGgucm91bmQoaHVlKSxcclxuICAgICAgICAgICAgc2F0dXJhdGlvbjogcGVyY2VudC50cmFuc2Zvcm0oc2FuaXRpemUoc2F0dXJhdGlvbikpLFxyXG4gICAgICAgICAgICBsaWdodG5lc3M6IHBlcmNlbnQudHJhbnNmb3JtKHNhbml0aXplKGxpZ2h0bmVzcykpLFxyXG4gICAgICAgICAgICBhbHBoYTogc2FuaXRpemUoYWxwaGEudHJhbnNmb3JtKGFscGhhJDEpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG52YXIgaGV4ID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHJnYmEpLCB7IHRlc3Q6IGZ1bmN0aW9uICh2KSB7IHJldHVybiB0eXBlb2YgdiA9PT0gJ3N0cmluZycgJiYgaXNDb2xvclN0cmluZyh2LCAnIycpOyB9LCBwYXJzZTogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgciA9ICcnO1xyXG4gICAgICAgIHZhciBnID0gJyc7XHJcbiAgICAgICAgdmFyIGIgPSAnJztcclxuICAgICAgICBpZiAodi5sZW5ndGggPiA0KSB7XHJcbiAgICAgICAgICAgIHIgPSB2LnN1YnN0cigxLCAyKTtcclxuICAgICAgICAgICAgZyA9IHYuc3Vic3RyKDMsIDIpO1xyXG4gICAgICAgICAgICBiID0gdi5zdWJzdHIoNSwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByID0gdi5zdWJzdHIoMSwgMSk7XHJcbiAgICAgICAgICAgIGcgPSB2LnN1YnN0cigyLCAxKTtcclxuICAgICAgICAgICAgYiA9IHYuc3Vic3RyKDMsIDEpO1xyXG4gICAgICAgICAgICByICs9IHI7XHJcbiAgICAgICAgICAgIGcgKz0gZztcclxuICAgICAgICAgICAgYiArPSBiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZWQ6IHBhcnNlSW50KHIsIDE2KSxcclxuICAgICAgICAgICAgZ3JlZW46IHBhcnNlSW50KGcsIDE2KSxcclxuICAgICAgICAgICAgYmx1ZTogcGFyc2VJbnQoYiwgMTYpLFxyXG4gICAgICAgICAgICBhbHBoYTogMVxyXG4gICAgICAgIH07XHJcbiAgICB9IH0pO1xyXG52YXIgY29sb3IgPSB7XHJcbiAgICB0ZXN0OiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiAodHlwZW9mIHYgPT09ICdzdHJpbmcnICYmIHNpbmdsZUNvbG9yUmVnZXgudGVzdCh2KSkgfHxcclxuICAgICAgICAgICAgaXNSZ2JhKHYpIHx8XHJcbiAgICAgICAgICAgIGlzSHNsYSh2KTtcclxuICAgIH0sXHJcbiAgICBwYXJzZTogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICBpZiAocmdiYS50ZXN0KHYpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZ2JhLnBhcnNlKHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChoc2xhLnRlc3QodikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGhzbGEucGFyc2Uodik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGhleC50ZXN0KHYpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBoZXgucGFyc2Uodik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgfSxcclxuICAgIHRyYW5zZm9ybTogZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICBpZiAoaXNSZ2JhKHYpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZ2JhLnRyYW5zZm9ybSh2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNIc2xhKHYpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBoc2xhLnRyYW5zZm9ybSh2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICB9XHJcbn07XG5cbnZhciBDT0xPUl9UT0tFTiA9ICcke2N9JztcclxudmFyIE5VTUJFUl9UT0tFTiA9ICcke259JztcclxudmFyIGNvbnZlcnROdW1iZXJzVG9aZXJvID0gZnVuY3Rpb24gKHYpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ251bWJlcicgPyAwIDogdjtcclxufTtcclxudmFyIGNvbXBsZXggPSB7XHJcbiAgICB0ZXN0OiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdiAhPT0gJ3N0cmluZycgfHwgIWlzTmFOKHYpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdmFyIG51bVZhbHVlcyA9IDA7XHJcbiAgICAgICAgdmFyIGZvdW5kTnVtYmVycyA9IHYubWF0Y2goZmxvYXRSZWdleCk7XHJcbiAgICAgICAgdmFyIGZvdW5kQ29sb3JzID0gdi5tYXRjaChjb2xvclJlZ2V4KTtcclxuICAgICAgICBpZiAoZm91bmROdW1iZXJzKVxyXG4gICAgICAgICAgICBudW1WYWx1ZXMgKz0gZm91bmROdW1iZXJzLmxlbmd0aDtcclxuICAgICAgICBpZiAoZm91bmRDb2xvcnMpXHJcbiAgICAgICAgICAgIG51bVZhbHVlcyArPSBmb3VuZENvbG9ycy5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIG51bVZhbHVlcyA+IDA7XHJcbiAgICB9LFxyXG4gICAgcGFyc2U6IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gdjtcclxuICAgICAgICB2YXIgcGFyc2VkID0gW107XHJcbiAgICAgICAgdmFyIGZvdW5kQ29sb3JzID0gaW5wdXQubWF0Y2goY29sb3JSZWdleCk7XHJcbiAgICAgICAgaWYgKGZvdW5kQ29sb3JzKSB7XHJcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZShjb2xvclJlZ2V4LCBDT0xPUl9UT0tFTik7XHJcbiAgICAgICAgICAgIHBhcnNlZC5wdXNoLmFwcGx5KHBhcnNlZCwgZm91bmRDb2xvcnMubWFwKGNvbG9yLnBhcnNlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBmb3VuZE51bWJlcnMgPSBpbnB1dC5tYXRjaChmbG9hdFJlZ2V4KTtcclxuICAgICAgICBpZiAoZm91bmROdW1iZXJzKSB7XHJcbiAgICAgICAgICAgIHBhcnNlZC5wdXNoLmFwcGx5KHBhcnNlZCwgZm91bmROdW1iZXJzLm1hcChudW1iZXIucGFyc2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlZDtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVUcmFuc2Zvcm1lcjogZnVuY3Rpb24gKHByb3ApIHtcclxuICAgICAgICB2YXIgdGVtcGxhdGUgPSBwcm9wO1xyXG4gICAgICAgIHZhciB0b2tlbiA9IDA7XHJcbiAgICAgICAgdmFyIGZvdW5kQ29sb3JzID0gcHJvcC5tYXRjaChjb2xvclJlZ2V4KTtcclxuICAgICAgICB2YXIgbnVtQ29sb3JzID0gZm91bmRDb2xvcnMgPyBmb3VuZENvbG9ycy5sZW5ndGggOiAwO1xyXG4gICAgICAgIGlmIChmb3VuZENvbG9ycykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNvbG9yczsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoZm91bmRDb2xvcnNbaV0sIENPTE9SX1RPS0VOKTtcclxuICAgICAgICAgICAgICAgIHRva2VuKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGZvdW5kTnVtYmVycyA9IHRlbXBsYXRlLm1hdGNoKGZsb2F0UmVnZXgpO1xyXG4gICAgICAgIHZhciBudW1OdW1iZXJzID0gZm91bmROdW1iZXJzID8gZm91bmROdW1iZXJzLmxlbmd0aCA6IDA7XHJcbiAgICAgICAgaWYgKGZvdW5kTnVtYmVycykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bU51bWJlcnM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKGZvdW5kTnVtYmVyc1tpXSwgTlVNQkVSX1RPS0VOKTtcclxuICAgICAgICAgICAgICAgIHRva2VuKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgICAgIHZhciBvdXRwdXQgPSB0ZW1wbGF0ZTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQucmVwbGFjZShpIDwgbnVtQ29sb3JzID8gQ09MT1JfVE9LRU4gOiBOVU1CRVJfVE9LRU4sIGkgPCBudW1Db2xvcnMgPyBjb2xvci50cmFuc2Zvcm0odltpXSkgOiBzYW5pdGl6ZSh2W2ldKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGdldEFuaW1hdGFibGVOb25lOiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIHBhcnNlZFRhcmdldCA9IGNvbXBsZXgucGFyc2UodGFyZ2V0KTtcclxuICAgICAgICB2YXIgdGFyZ2V0VHJhbnNmb3JtZXIgPSBjb21wbGV4LmNyZWF0ZVRyYW5zZm9ybWVyKHRhcmdldCk7XHJcbiAgICAgICAgcmV0dXJuIHRhcmdldFRyYW5zZm9ybWVyKHBhcnNlZFRhcmdldC5tYXAoY29udmVydE51bWJlcnNUb1plcm8pKTtcclxuICAgIH1cclxufTtcblxuZXhwb3J0IHsgYWxwaGEsIGNvbG9yLCBjb21wbGV4LCBkZWdyZWVzLCBoZXgsIGhzbGEsIG51bWJlciwgcGVyY2VudCwgcHJvZ3Jlc3NQZXJjZW50YWdlLCBweCwgcmdiVW5pdCwgcmdiYSwgc2NhbGUsIHZoLCB2dyB9O1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY3JlYXRlQmluZGluZyhvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UWWlJR2hsYVdkb2REMGlPU0lnZG1sbGQwSnZlRDBpTUNBd0lERTJJRGtpSUdacGJHdzlJbTV2Ym1VaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK0NqeHdZWFJvSUdROUlrMDRMak15T0RReElEZ3VOemMwTWpGRE9DNHdOVGsyTlNBNExqYzJPREl5SURjdU56a3pNakVnT0M0Mk5UazJNaUEzTGpVNU1qZzJJRGd1TkRVd01qUk1NUzR5T0RnME5TQXhMamcxT0RRMFF6QXVPRGczTkRBMElERXVORE01TVRJZ01DNDVNREl5TWlBd0xqYzNOREE0TVNBeExqTXlNVFUwSURBdU16Y3pNakEwUXpFdU56UXdOamtnTFRBdU1ESTNOamMzTVNBeUxqUXdOVFU1SUMwd0xqQXhNamcyTXpNZ01pNDRNRFkyTnlBd0xqUXdOakk1TWt3NExqTTRORGtnTmk0eU16a3dPRXd4TkM0eU1UYzBJREF1TmpZd056RTJRekUwTGpZek5qY2dNQzR5TlRrNE16a2dNVFV1TXpBeE5TQXdMakkzTkRZMU1TQXhOUzQzTURJMElEQXVOamt6T0RBeVF6RTJMakV3TXpZZ01TNHhNVEk1TmlBeE5pNHdPRGc0SURFdU56YzRJREUxTGpZMk9UTWdNaTR4Tnprd05FdzVMakEzTnpZMklEZ3VORGd6TlRKRE9DNDROamd3T1NBNExqWTRNemdnT0M0MU9UY3dPQ0E0TGpjNE1ESWdPQzR6TWpnME1TQTRMamMzTkRJeFdpSWdabWxzYkQwaUl6QXlNRGN6UlNJdlBnbzhMM04yWno0S1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9TSWdhR1ZwWjJoMFBTSXhOU0lnZG1sbGQwSnZlRDBpTUNBd0lEa2dNVFVpSUdacGJHdzlJbTV2Ym1VaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK0NqeHdZWFJvSUdROUlrMDRMalk1T0RnNElEY3VOVEF3TURORE9DNDJPVGc0T0NBM0xqYzJPRGcySURndU5UazJNak1nT0M0d016YzJOU0E0TGpNNU1UTTNJRGd1TWpReU5qRk1NUzQ1TkRFMk15QXhOQzQyT1RJelF6RXVOVE14TXpVZ01UVXVNVEF5TmlBd0xqZzJOakUwTXlBeE5TNHhNREkySURBdU5EVTJNREkySURFMExqWTVNak5ETUM0d05EVTVNRGd4SURFMExqSTRNaklnTUM0d05EVTVNRGd4SURFekxqWXhOekVnTUM0ME5UWXdNallnTVRNdU1qQTJPRXcyTGpFMk16RXhJRGN1TlRBd01ETk1NQzQwTlRZeU1qVWdNUzQzT1RNeU5FTXdMakEwTmpFd056UWdNUzR6T0RJNU5TQXdMakEwTmpFd056UWdNQzQzTVRjNU5EZ2dNQzQwTlRZeU1qVWdNQzR6TURjNE5qTkRNQzQ0TmpZek5ETWdMVEF1TVRBeU5qRTVJREV1TlRNeE5UVWdMVEF1TVRBeU5qRTVJREV1T1RReE9ETWdNQzR6TURjNE5qTk1PQzR6T1RFMU55QTJMamMxTnpRMFF6Z3VOVGsyTkRZZ05pNDVOakkxSURndU5qazRPRGdnTnk0eU16RXlPU0E0TGpZNU9EZzRJRGN1TlRBd01ETmFJaUJtYVd4c1BTSWpNREl3TnpORklpOCtDand2YzNablBnbz1cIiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IEJhc2VBY2NvcmRpb24gfSBmcm9tICcuL2Jhc2UtYWNjb3JkaW9uJztcbmltcG9ydCBhY2NvcmRpb25JY29uQ2xvc2UgZnJvbSAnYXNzZXRzL2FjY29yZGlvbi1hcnJvdy5zdmcnO1xuaW1wb3J0IGFjY29yZGlvbkljb25PcGVuIGZyb20gJ2Fzc2V0cy9hY2NvcmRpb24tYXJyb3ctZS5zdmcnO1xuaW1wb3J0IHtcbiAgQWNjb3JkaW9uQnV0dG9uLFxuICBBY2NvcmRpb25JdGVtLFxuICBBY2NvcmRpb25Db250ZW50cyxcbiAgc2luZ2xlLFxuICBwcmV2ZW50Q2xvc2UsXG4gIGNvbWJpbmVSZWR1Y2Vycyxcbn0gZnJvbSAnLi9zaGFyZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvcmRpb24oeyBpdGVtcywgLi4ucHJvcHMgfSkge1xuICBjb25zdCBvcGVuSWNvbiA9IDxJbWFnZSBzcmM9e2FjY29yZGlvbkljb25PcGVufSBhbHQ9XCJvcGVuIGljb25cIiAvPjtcbiAgY29uc3QgY2xvc2VJY29uID0gPEltYWdlIHNyYz17YWNjb3JkaW9uSWNvbkNsb3NlfSBhbHQ9XCJjbG9zZSBpY29uXCIgLz47XG4gIHJldHVybiAoXG4gICAgPEJhc2VBY2NvcmRpb25cbiAgICAgIHN0YXRlUmVkdWNlcj17Y29tYmluZVJlZHVjZXJzKHNpbmdsZSwgcHJldmVudENsb3NlKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICB7KHsgb3BlbkluZGV4ZXMsIGhhbmRsZUl0ZW1DbGljayB9KSA9PiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtXG4gICAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgaXNPcGVuPXtvcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBY2NvcmRpb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKGluZGV4KX0+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICB7b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpID8gb3Blbkljb24gOiBjbG9zZUljb259XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgPEFjY29yZGlvbkNvbnRlbnRzIGlzT3Blbj17b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpfT5cbiAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50c31cbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25Db250ZW50cz5cbiAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvQmFzZUFjY29yZGlvbj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEJhc2VBY2NvcmRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHN0YXRlUmVkdWNlcjogKHN0YXRlLCBjaGFuZ2VzKSA9PiBjaGFuZ2VzLFxuICAgIG9uU3RhdGVDaGFuZ2U6ICgpID0+IHt9LFxuICB9O1xuICBzdGF0ZSA9IHsgb3BlbkluZGV4ZXM6IFswXSB9O1xuICBnZXRTdGF0ZShzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BlbkluZGV4ZXM6XG4gICAgICAgIHRoaXMucHJvcHMub3BlbkluZGV4ZXMgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gc3RhdGUub3BlbkluZGV4ZXNcbiAgICAgICAgICA6IHRoaXMucHJvcHMub3BlbkluZGV4ZXMsXG4gICAgfTtcbiAgfVxuICBpbnRlcm5hbFNldFN0YXRlKGNoYW5nZXMsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcbiAgICBsZXQgYWxsQ2hhbmdlcztcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAgKHN0YXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdHVhbFN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSk7XG4gICAgICAgIGNvbnN0IGNoYW5nZXNPYmplY3QgPVxuICAgICAgICAgIHR5cGVvZiBjaGFuZ2VzID09PSAnZnVuY3Rpb24nID8gY2hhbmdlcyhhY3R1YWxTdGF0ZSkgOiBjaGFuZ2VzO1xuICAgICAgICBhbGxDaGFuZ2VzID0gdGhpcy5wcm9wcy5zdGF0ZVJlZHVjZXIoYWN0dWFsU3RhdGUsIGNoYW5nZXNPYmplY3QpO1xuICAgICAgICByZXR1cm4gYWxsQ2hhbmdlcztcbiAgICAgIH0sXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMucHJvcHMub25TdGF0ZUNoYW5nZShhbGxDaGFuZ2VzKTtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG4gIGhhbmRsZUl0ZW1DbGljayA9IChpbmRleCkgPT4ge1xuICAgIHRoaXMuaW50ZXJuYWxTZXRTdGF0ZSgoc3RhdGUpID0+IHtcbiAgICAgIGNvbnN0IGNsb3NpbmcgPSBzdGF0ZS5vcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBjbG9zaW5nID8gJ2Nsb3NpbmcnIDogJ29wZW5pbmcnLFxuICAgICAgICBvcGVuSW5kZXhlczogY2xvc2luZ1xuICAgICAgICAgID8gc3RhdGUub3BlbkluZGV4ZXMuZmlsdGVyKChpKSA9PiBpICE9PSBpbmRleClcbiAgICAgICAgICA6IFsuLi5zdGF0ZS5vcGVuSW5kZXhlcywgaW5kZXhdLFxuICAgICAgfTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4oe1xuICAgICAgb3BlbkluZGV4ZXM6IHRoaXMuZ2V0U3RhdGUoKS5vcGVuSW5kZXhlcyxcbiAgICAgIGhhbmRsZUl0ZW1DbGljazogdGhpcy5oYW5kbGVJdGVtQ2xpY2ssXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgQmFzZUFjY29yZGlvbiB9O1xuIiwiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuZXhwb3J0IGNvbnN0IEFjY29yZGlvbkJ1dHRvbiA9ICh7IGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IChcbiAgPGRpdlxuICAgIGNzcz17e1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMnB4JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgZm9udFNpemU6ICcxN3B4JyxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBwYWRkaW5nVG9wOiAnMTBweCcsXG4gICAgICBwYWRkaW5nQm90dG9tOiAnMTBweCcsXG4gICAgICBwYWRkaW5nTGVmdDogJzE1cHgnLFxuICAgICAgcGFkZGluZ1JpZ2h0OiAnMzBweCcsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXG4gICAgICAnQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpJzoge1xuICAgICAgICBwYWRkaW5nTGVmdDogJzMwcHgnLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6ICczMHB4JyxcbiAgICAgICAgcGFkZGluZ1RvcDogJzIwcHgnLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiAnMjBweCcsXG4gICAgICAgIGZvbnRTaXplOiAnMTVweCcsXG4gICAgICB9LFxuXG4gICAgICAnOmZvY3VzJzoge1xuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC40KScsXG4gICAgICB9LFxuICAgICAgc3Bhbjoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgcmlnaHQ6ICcyMHB4JyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgJ0BtZWRpYShtaW4td2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgICAgICByaWdodDogJzMwcHgnLFxuICAgICAgICB9LFxuICAgICAgICBpbWc6IHtcbiAgICAgICAgICB3aWR0aDogJzdweCcsXG4gICAgICAgICAgJ0BtZWRpYShtaW4td2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfX1cbiAgICB7Li4ucmVzdH1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCB2YXJpYW50cyA9IHtcbiAgb3Blbjoge1xuICAgIC8vIG1heEhlaWdodDogMjAwLFxuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIG1hcmdpbkJvdHRvbTogMTAsXG4gICAgJ0BtZWRpYShtaW4td2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogMzAsXG4gICAgfSxcbiAgfSxcbiAgY2xvc2VkOiB7IGhlaWdodDogMCwgbWFyZ2luVG9wOiAwLCBtYXJnaW5Cb3R0b206IDAgfSxcbn07XG5leHBvcnQgZnVuY3Rpb24gQWNjb3JkaW9uQ29udGVudHMoeyBpc09wZW4sIC4uLnByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXG4gICAgICBhbmltYXRlPXtpc09wZW4gPyAnb3BlbicgOiAnY2xvc2VkJ31cbiAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgIGNzcz17e1xuICAgICAgICBvdmVyZmxvd1k6ICdoaWRkZW4nLFxuICAgICAgICBmb250U2l6ZTogMTUsXG4gICAgICAgIHBhZGRpbmc6ICcwIDE1cHgnLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6ICc0MHB4JyxcbiAgICAgICAgbGluZUhlaWdodDogJzMwcHgnLFxuICAgICAgICBjb2xvcjogJyMzNDNENDgnLFxuICAgICAgICAnQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpJzoge1xuICAgICAgICAgIHBhZGRpbmc6ICcwIDMwcHgnLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgQWNjb3JkaW9uSXRlbSA9ICh7IGlzT3BlbiwgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4gKFxuICA8ZGl2XG4gICAgY3NzPXt7XG4gICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgICBtYXJnaW5Cb3R0b206IDEwLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNFREVGRjInLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB9fVxuICAgIHsuLi5yZXN0fVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBjb25zdCBwcmV2ZW50Q2xvc2UgPSAoc3RhdGUsIGNoYW5nZXMpID0+XG4gIGNoYW5nZXMudHlwZSA9PT0gJ2Nsb3NpbmcnICYmIHN0YXRlLm9wZW5JbmRleGVzLmxlbmd0aCA8IDJcbiAgICA/IHsgLi4uY2hhbmdlcywgb3BlbkluZGV4ZXM6IHN0YXRlLm9wZW5JbmRleGVzIH1cbiAgICA6IGNoYW5nZXM7XG5cbmV4cG9ydCBjb25zdCBzaW5nbGUgPSAoc3RhdGUsIGNoYW5nZXMpID0+XG4gIGNoYW5nZXMudHlwZSA9PT0gJ29wZW5pbmcnXG4gICAgPyB7IC4uLmNoYW5nZXMsIG9wZW5JbmRleGVzOiBjaGFuZ2VzLm9wZW5JbmRleGVzLnNsaWNlKC0xKSB9XG4gICAgOiBjaGFuZ2VzO1xuXG5leHBvcnQgY29uc3QgY29tYmluZVJlZHVjZXJzID0gKC4uLnJlZHVjZXJzKSA9PiAoc3RhdGUsIGNoYW5nZXMpID0+XG4gIHJlZHVjZXJzLnJlZHVjZSgoYWNjLCByZWR1Y2VyKSA9PiByZWR1Y2VyKHN0YXRlLCBhY2MpLCBjaGFuZ2VzKTtcbiIsIlxuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIEZsZXgsIFRleHQsIEhlYWRpbmcsIExpbmsgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uJztcblxuY29uc3QgYWNjb3JkaW9uRGF0YSA9IFtcbiAge1xuICAgIGlzRXhwYW5kZWQ6IGZhbHNlLFxuICAgIHRpdGxlOiAnSG93IG11Y2ggZG9lcyBpdCBjb3N0IHRvIGJlIGEgY3JlZGl0IGNhcmQgbWVyY2hhbnQ/JyxcbiAgICBjb250ZW50czogKFxuICAgICAgPGRpdj5cbiAgICAgICAgRm9yIG91ciByZWNlbnQgdHJpcCB0byBTLkEuIEkgYm9va2VkIHNldmVyYWwgYWNjb21tb2RhdGlvbiB0aHJ1IFNBXG4gICAgICAgIFBsYWNlcy4gSSBqdXN0IHdhbnRlZCB0byB0ZWxsIHlvdSB0aGF0IGV2ZXJ5dGhpbmcgd29ya2VkIG91dCBwZXJmZWN0bHlcbiAgICAgICAgd2l0aCBhbGwgdGhlIGJvb2tpbmdzIGFuZCBhbHNvIHlvdXIgYm9va2luZyB3YXMgdmVyeSBxdWljayBhbmRcbiAgICAgICAgcHJvZmVzc2lvbmFsLiBJIGhvcGUgSSBoYXZlIHRoZSBvcHBvcnR1bml0eSB0byByZS12aXNpdCBTb3V0aCBBZnJpY2FcbiAgICAgICAgc29vbiwgSSB3aWxsIHRoZW4gbWFrZSBteSBib29raW5ncyB3aXRoIHlvdXIgY29tcGFueSBhZ2Fpbi4gSSB3aWxsIGFsc29cbiAgICAgICAgcmVjb21tZW5kXG4gICAgICA8L2Rpdj5cbiAgICApLFxuICB9LFxuICB7XG4gICAgaXNFeHBhbmRlZDogdHJ1ZSxcbiAgICB0aXRsZTogJ0hvdyBjYW4gSSBvcGVuIGEgbWVyY2hhbnQgYWNjb3VudD8nLFxuICAgIGNvbnRlbnRzOiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBGb3Igb3VyIHJlY2VudCB0cmlwIHRvIFMuQS4gSSBib29rZWQgc2V2ZXJhbCBhY2NvbW1vZGF0aW9uIHRocnUgU0FcbiAgICAgICAgUGxhY2VzLiBJIGp1c3Qgd2FudGVkIHRvIHRlbGwgeW91IHRoYXQgZXZlcnl0aGluZyB3b3JrZWQgb3V0IHBlcmZlY3RseVxuICAgICAgICB3aXRoIGFsbCB0aGUgYm9va2luZ3MgYW5kIGFsc28geW91ciBib29raW5nIHdhcyB2ZXJ5IHF1aWNrIGFuZFxuICAgICAgICBwcm9mZXNzaW9uYWwuIEkgaG9wZSBJIGhhdmUgdGhlIG9wcG9ydHVuaXR5IHRvIHJlLXZpc2l0IFNvdXRoIEFmcmljYVxuICAgICAgICBzb29uLCBJIHdpbGwgdGhlbiBtYWtlIG15IGJvb2tpbmdzIHdpdGggeW91ciBjb21wYW55IGFnYWluLiBJIHdpbGwgYWxzb1xuICAgICAgICByZWNvbW1lbmRcbiAgICAgIDwvZGl2PlxuICAgICksXG4gIH0sXG4gIHtcbiAgICBpc0V4cGFuZGVkOiBmYWxzZSxcbiAgICB0aXRsZTogJ0hvdyBsb25nIGRvZXMgdGhlIGFwcGxpY2F0aW9uIHRha2U/JyxcbiAgICBjb250ZW50czogKFxuICAgICAgPGRpdj5cbiAgICAgICAgRm9yIG91ciByZWNlbnQgdHJpcCB0byBTLkEuIEkgYm9va2VkIHNldmVyYWwgYWNjb21tb2RhdGlvbiB0aHJ1IFNBXG4gICAgICAgIFBsYWNlcy4gSSBqdXN0IHdhbnRlZCB0byB0ZWxsIHlvdSB0aGF0IGV2ZXJ5dGhpbmcgd29ya2VkIG91dCBwZXJmZWN0bHlcbiAgICAgICAgd2l0aCBhbGwgdGhlIGJvb2tpbmdzIGFuZCBhbHNvIHlvdXIgYm9va2luZyB3YXMgdmVyeSBxdWljayBhbmRcbiAgICAgICAgcHJvZmVzc2lvbmFsLiBJIGhvcGUgSSBoYXZlIHRoZSBvcHBvcnR1bml0eSB0byByZS12aXNpdCBTb3V0aCBBZnJpY2FcbiAgICAgICAgc29vbiwgSSB3aWxsIHRoZW4gbWFrZSBteSBib29raW5ncyB3aXRoIHlvdXIgY29tcGFueSBhZ2Fpbi4gSSB3aWxsIGFsc29cbiAgICAgICAgcmVjb21tZW5kXG4gICAgICA8L2Rpdj5cbiAgICApLFxuICB9LFxuICB7XG4gICAgaXNFeHBhbmRlZDogZmFsc2UsXG4gICAgdGl0bGU6ICdDYW4gSSBtYWtlIHBheW1lbnQgb3V0c2lkZSBvZiBIb25nIEtvbmc/JyxcbiAgICBjb250ZW50czogKFxuICAgICAgPGRpdj5cbiAgICAgICAgRm9yIG91ciByZWNlbnQgdHJpcCB0byBTLkEuIEkgYm9va2VkIHNldmVyYWwgYWNjb21tb2RhdGlvbiB0aHJ1IFNBXG4gICAgICAgIFBsYWNlcy4gSSBqdXN0IHdhbnRlZCB0byB0ZWxsIHlvdSB0aGF0IGV2ZXJ5dGhpbmcgd29ya2VkIG91dCBwZXJmZWN0bHlcbiAgICAgICAgd2l0aCBhbGwgdGhlIGJvb2tpbmdzIGFuZCBhbHNvIHlvdXIgYm9va2luZyB3YXMgdmVyeSBxdWljayBhbmRcbiAgICAgICAgcHJvZmVzc2lvbmFsLiBJIGhvcGUgSSBoYXZlIHRoZSBvcHBvcnR1bml0eSB0byByZS12aXNpdCBTb3V0aCBBZnJpY2FcbiAgICAgICAgc29vbiwgSSB3aWxsIHRoZW4gbWFrZSBteSBib29raW5ncyB3aXRoIHlvdXIgY29tcGFueSBhZ2Fpbi4gSSB3aWxsIGFsc29cbiAgICAgICAgcmVjb21tZW5kXG4gICAgICA8L2Rpdj5cbiAgICApLFxuICB9LFxuICB7XG4gICAgaXNFeHBhbmRlZDogZmFsc2UsXG4gICAgdGl0bGU6ICdIb3cgZG8gSSBnZXQgdGhlIHBheW1lbnQgY29tcGxldGU/JyxcbiAgICBjb250ZW50czogKFxuICAgICAgPGRpdj5cbiAgICAgICAgRm9yIG91ciByZWNlbnQgdHJpcCB0byBTLkEuIEkgYm9va2VkIHNldmVyYWwgYWNjb21tb2RhdGlvbiB0aHJ1IFNBXG4gICAgICAgIFBsYWNlcy4gSSBqdXN0IHdhbnRlZCB0byB0ZWxsIHlvdSB0aGF0IGV2ZXJ5dGhpbmcgd29ya2VkIG91dCBwZXJmZWN0bHlcbiAgICAgICAgd2l0aCBhbGwgdGhlIGJvb2tpbmdzIGFuZCBhbHNvIHlvdXIgYm9va2luZyB3YXMgdmVyeSBxdWljayBhbmRcbiAgICAgICAgcHJvZmVzc2lvbmFsLiBJIGhvcGUgSSBoYXZlIHRoZSBvcHBvcnR1bml0eSB0byByZS12aXNpdCBTb3V0aCBBZnJpY2FcbiAgICAgICAgc29vbiwgSSB3aWxsIHRoZW4gbWFrZSBteSBib29raW5ncyB3aXRoIHlvdXIgY29tcGFueSBhZ2Fpbi4gSSB3aWxsIGFsc29cbiAgICAgICAgcmVjb21tZW5kXG4gICAgICA8L2Rpdj5cbiAgICApLFxuICB9LFxuXTtcblxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICBzbG9nYW49XCJCZWJlcmFwYSBwZXJ0YW55YWFuIHVtdW1cIlxuICAgICAgdGl0bGU9XCJGcmVxdWVudGx5IEFza2VkIFF1ZXN0aW9uXCI+XG4gICAgICA8L1NlY3Rpb25IZWFkZXI+XG4gICAgICAgIDxGbGV4IHN4PXtzdHlsZXMuZmxleH0+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmZhcVdyYXBwZXJ9PlxuICAgICAgICAgICAgPEFjY29yZGlvbiBpdGVtcz17YWNjb3JkaW9uRGF0YX0gLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCI+XG4gICAgICAgICAgICAgIFB1bnlhIHBlcnRhbnlhYW4gbGFpbj8gIFxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPFRleHQgYXM9XCJwXCI+XG4gICAgICAgICAgICAgIFNpbGFoa2FuIGFqdWthbiBwZXJ0YW55YWFuIGFuZGEgbWVsYWx1aSBoYWxhbWFuICA8TGluayBocmVmPVwiL2NvbnRhY3RcIiBzeD17c3R5bGVzLmNvbnRhY3R9ID5Db250YWN0IFVzPC9MaW5rPi5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvbnRhY3Q6e1xuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgY29sb3I6JyMwQzYwNkEnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgY29sb3I6JyMwMDAnLFxuICAgIH1cbiAgXG4gIH0sXG4gIGZsZXg6IHtcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ3Jvdy1yZXZlcnNlJ10sXG4gICAgcGI6IFsnNzBweCcsIG51bGwsIG51bGwsIG51bGwsICc5MHB4JywgbnVsbCwgJzEzMHB4J10sXG4gIH0sXG4gIGNvbnRlbnQ6IHtcbiAgICBmbGV4OiBbJzAgMCAxMDAlJywgbnVsbCwgbnVsbCwgbnVsbCwgJzAgMCAzMy4zMzMlJ10sXG4gICAgbWF4V2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsICc0NTBweCcsICcxMDAlJ10sXG4gICAgbXg6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsICcwJ10sXG4gICAgbWI6IFsnMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzAnXSxcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcbiAgICBtdDogWyc0MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzAnXSxcbiAgICBoMzoge1xuICAgICAgZm9udFNpemU6IFsnMjNweCcsIG51bGwsIG51bGwsIG51bGwsICcyNHB4J10sXG4gICAgICBsaW5lSGVpZ2h0OiBbMS41LCBudWxsLCBudWxsLCBudWxsLCAxLjY3XSxcbiAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgbGV0dGVyU3BhY2luZzogJy0xLjVweCcsXG4gICAgICBtdDogJy01cHgnLFxuICAgICAgcHI6IFsnMCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICczMHB4J10sXG4gICAgfSxcbiAgICBwOiB7XG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgbGluZUhlaWdodDogMS44NyxcbiAgICAgIGNvbG9yOiAnIzM0M0Q0OCcsXG4gICAgICBvcGFjaXR5OiAwLjcsXG4gICAgICBtdDogJzEwcHgnLFxuICAgICAgcHI6IFsnMCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc4MHB4J10sXG4gICAgfSxcbiAgfSxcbiAgYXNrQnV0dG9uOiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAyMDczRScsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIHA6ICc2LjVweCAxOXB4JyxcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMTZweCcsXG4gICAgbXQ6ICcyNXB4JyxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDUwMG1zIGVhc2UnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgb3BhY2l0eTogMC44LFxuICAgIH0sXG4gIH0sXG4gIGZhcVdyYXBwZXI6IHtcbiAgICBmbGV4OiBbJzAgMCAxMDAlJywgbnVsbCwgbnVsbCwgbnVsbCwgJzAgMCA2Ni42NjYlJ10sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==