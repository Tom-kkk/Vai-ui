import {
  EncodedTokenMetadata,
  FontStyle,
  INITIAL,
  Registry,
  Theme,
  toHtml
} from "./chunk-UFSOVTIJ.js";
import {
  Fragment,
  Transition,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createStaticVNode,
  createTextVNode,
  createVNode,
  defineComponent,
  inject,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onMounted,
  onUnmounted,
  openBlock,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  watch,
  watchEffect,
  withCtx
} from "./chunk-S2LUX3PK.js";
import {
  __commonJS,
  __publicField,
  __toESM
} from "./chunk-B4Q33VKO.js";

// ../node_modules/path-browserify/index.js
var require_path_browserify = __commonJS({
  "../node_modules/path-browserify/index.js"(exports, module) {
    "use strict";
    function assertPath(path) {
      if (typeof path !== "string") {
        throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
      }
    }
    function normalizeStringPosix(path, allowAboveRoot) {
      var res = "";
      var lastSegmentLength = 0;
      var lastSlash = -1;
      var dots = 0;
      var code;
      for (var i = 0; i <= path.length; ++i) {
        if (i < path.length)
          code = path.charCodeAt(i);
        else if (code === 47)
          break;
        else
          code = 47;
        if (code === 47) {
          if (lastSlash === i - 1 || dots === 1) {
          } else if (lastSlash !== i - 1 && dots === 2) {
            if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
              if (res.length > 2) {
                var lastSlashIndex = res.lastIndexOf("/");
                if (lastSlashIndex !== res.length - 1) {
                  if (lastSlashIndex === -1) {
                    res = "";
                    lastSegmentLength = 0;
                  } else {
                    res = res.slice(0, lastSlashIndex);
                    lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                  }
                  lastSlash = i;
                  dots = 0;
                  continue;
                }
              } else if (res.length === 2 || res.length === 1) {
                res = "";
                lastSegmentLength = 0;
                lastSlash = i;
                dots = 0;
                continue;
              }
            }
            if (allowAboveRoot) {
              if (res.length > 0)
                res += "/..";
              else
                res = "..";
              lastSegmentLength = 2;
            }
          } else {
            if (res.length > 0)
              res += "/" + path.slice(lastSlash + 1, i);
            else
              res = path.slice(lastSlash + 1, i);
            lastSegmentLength = i - lastSlash - 1;
          }
          lastSlash = i;
          dots = 0;
        } else if (code === 46 && dots !== -1) {
          ++dots;
        } else {
          dots = -1;
        }
      }
      return res;
    }
    function _format(sep, pathObject) {
      var dir = pathObject.dir || pathObject.root;
      var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
      if (!dir) {
        return base;
      }
      if (dir === pathObject.root) {
        return dir + base;
      }
      return dir + sep + base;
    }
    var posix = {
      // path.resolve([from ...], to)
      resolve: function resolve() {
        var resolvedPath = "";
        var resolvedAbsolute = false;
        var cwd;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path;
          if (i >= 0)
            path = arguments[i];
          else {
            if (cwd === void 0)
              cwd = process.cwd();
            path = cwd;
          }
          assertPath(path);
          if (path.length === 0) {
            continue;
          }
          resolvedPath = path + "/" + resolvedPath;
          resolvedAbsolute = path.charCodeAt(0) === 47;
        }
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
          if (resolvedPath.length > 0)
            return "/" + resolvedPath;
          else
            return "/";
        } else if (resolvedPath.length > 0) {
          return resolvedPath;
        } else {
          return ".";
        }
      },
      normalize: function normalize(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var isAbsolute = path.charCodeAt(0) === 47;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47;
        path = normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = ".";
        if (path.length > 0 && trailingSeparator) path += "/";
        if (isAbsolute) return "/" + path;
        return path;
      },
      isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47;
      },
      join: function join() {
        if (arguments.length === 0)
          return ".";
        var joined;
        for (var i = 0; i < arguments.length; ++i) {
          var arg = arguments[i];
          assertPath(arg);
          if (arg.length > 0) {
            if (joined === void 0)
              joined = arg;
            else
              joined += "/" + arg;
          }
        }
        if (joined === void 0)
          return ".";
        return posix.normalize(joined);
      },
      relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to) return "";
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) return "";
        var fromStart = 1;
        for (; fromStart < from.length; ++fromStart) {
          if (from.charCodeAt(fromStart) !== 47)
            break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        var toStart = 1;
        for (; toStart < to.length; ++toStart) {
          if (to.charCodeAt(toStart) !== 47)
            break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for (; i <= length; ++i) {
          if (i === length) {
            if (toLen > length) {
              if (to.charCodeAt(toStart + i) === 47) {
                return to.slice(toStart + i + 1);
              } else if (i === 0) {
                return to.slice(toStart + i);
              }
            } else if (fromLen > length) {
              if (from.charCodeAt(fromStart + i) === 47) {
                lastCommonSep = i;
              } else if (i === 0) {
                lastCommonSep = 0;
              }
            }
            break;
          }
          var fromCode = from.charCodeAt(fromStart + i);
          var toCode = to.charCodeAt(toStart + i);
          if (fromCode !== toCode)
            break;
          else if (fromCode === 47)
            lastCommonSep = i;
        }
        var out = "";
        for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
          if (i === fromEnd || from.charCodeAt(i) === 47) {
            if (out.length === 0)
              out += "..";
            else
              out += "/..";
          }
        }
        if (out.length > 0)
          return out + to.slice(toStart + lastCommonSep);
        else {
          toStart += lastCommonSep;
          if (to.charCodeAt(toStart) === 47)
            ++toStart;
          return to.slice(toStart);
        }
      },
      _makeLong: function _makeLong(path) {
        return path;
      },
      dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var code = path.charCodeAt(0);
        var hasRoot = code === 47;
        var end = -1;
        var matchedSlash = true;
        for (var i = path.length - 1; i >= 1; --i) {
          code = path.charCodeAt(i);
          if (code === 47) {
            if (!matchedSlash) {
              end = i;
              break;
            }
          } else {
            matchedSlash = false;
          }
        }
        if (end === -1) return hasRoot ? "/" : ".";
        if (hasRoot && end === 1) return "//";
        return path.slice(0, end);
      },
      basename: function basename(path, ext) {
        if (ext !== void 0 && typeof ext !== "string") throw new TypeError('"ext" argument must be a string');
        assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== void 0 && ext.length > 0 && ext.length <= path.length) {
          if (ext.length === path.length && ext === path) return "";
          var extIdx = ext.length - 1;
          var firstNonSlashEnd = -1;
          for (i = path.length - 1; i >= 0; --i) {
            var code = path.charCodeAt(i);
            if (code === 47) {
              if (!matchedSlash) {
                start = i + 1;
                break;
              }
            } else {
              if (firstNonSlashEnd === -1) {
                matchedSlash = false;
                firstNonSlashEnd = i + 1;
              }
              if (extIdx >= 0) {
                if (code === ext.charCodeAt(extIdx)) {
                  if (--extIdx === -1) {
                    end = i;
                  }
                } else {
                  extIdx = -1;
                  end = firstNonSlashEnd;
                }
              }
            }
          }
          if (start === end) end = firstNonSlashEnd;
          else if (end === -1) end = path.length;
          return path.slice(start, end);
        } else {
          for (i = path.length - 1; i >= 0; --i) {
            if (path.charCodeAt(i) === 47) {
              if (!matchedSlash) {
                start = i + 1;
                break;
              }
            } else if (end === -1) {
              matchedSlash = false;
              end = i + 1;
            }
          }
          if (end === -1) return "";
          return path.slice(start, end);
        }
      },
      extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var preDotState = 0;
        for (var i = path.length - 1; i >= 0; --i) {
          var code = path.charCodeAt(i);
          if (code === 47) {
            if (!matchedSlash) {
              startPart = i + 1;
              break;
            }
            continue;
          }
          if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
          if (code === 46) {
            if (startDot === -1)
              startDot = i;
            else if (preDotState !== 1)
              preDotState = 1;
          } else if (startDot !== -1) {
            preDotState = -1;
          }
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
          return "";
        }
        return path.slice(startDot, end);
      },
      format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== "object") {
          throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        }
        return _format("/", pathObject);
      },
      parse: function parse(path) {
        assertPath(path);
        var ret = { root: "", dir: "", base: "", ext: "", name: "" };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47;
        var start;
        if (isAbsolute) {
          ret.root = "/";
          start = 1;
        } else {
          start = 0;
        }
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        var preDotState = 0;
        for (; i >= start; --i) {
          code = path.charCodeAt(i);
          if (code === 47) {
            if (!matchedSlash) {
              startPart = i + 1;
              break;
            }
            continue;
          }
          if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
          if (code === 46) {
            if (startDot === -1) startDot = i;
            else if (preDotState !== 1) preDotState = 1;
          } else if (startDot !== -1) {
            preDotState = -1;
          }
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
          if (end !== -1) {
            if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
            else ret.base = ret.name = path.slice(startPart, end);
          }
        } else {
          if (startPart === 0 && isAbsolute) {
            ret.name = path.slice(1, startDot);
            ret.base = path.slice(1, end);
          } else {
            ret.name = path.slice(startPart, startDot);
            ret.base = path.slice(startPart, end);
          }
          ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = "/";
        return ret;
      },
      sep: "/",
      delimiter: ":",
      win32: null,
      posix: null
    };
    posix.posix = posix;
    module.exports = posix;
  }
});

// ../node_modules/@shikijs/types/dist/index.mjs
var ShikiError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "ShikiError";
  }
};

// ../node_modules/@shikijs/engine-oniguruma/dist/index.mjs
var ShikiError2 = class extends Error {
  constructor(message) {
    super(message);
    this.name = "ShikiError";
  }
};
function getHeapMax() {
  return 2147483648;
}
function _emscripten_get_now() {
  return typeof performance !== "undefined" ? performance.now() : Date.now();
}
var alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
async function main(init) {
  let wasmMemory;
  let buffer;
  const binding = {};
  function updateGlobalBufferAndViews(buf) {
    buffer = buf;
    binding.HEAPU8 = new Uint8Array(buf);
    binding.HEAPU32 = new Uint32Array(buf);
  }
  function _emscripten_memcpy_big(dest, src, num) {
    binding.HEAPU8.copyWithin(dest, src, src + num);
  }
  function emscripten_realloc_buffer(size) {
    try {
      wasmMemory.grow(size - buffer.byteLength + 65535 >>> 16);
      updateGlobalBufferAndViews(wasmMemory.buffer);
      return 1;
    } catch {
    }
  }
  function _emscripten_resize_heap(requestedSize) {
    const oldSize = binding.HEAPU8.length;
    requestedSize = requestedSize >>> 0;
    const maxHeapSize = getHeapMax();
    if (requestedSize > maxHeapSize)
      return false;
    for (let cutDown = 1; cutDown <= 4; cutDown *= 2) {
      let overGrownHeapSize = oldSize * (1 + 0.2 / cutDown);
      overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
      const newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
      const replacement = emscripten_realloc_buffer(newSize);
      if (replacement)
        return true;
    }
    return false;
  }
  const UTF8Decoder = typeof TextDecoder != "undefined" ? new TextDecoder("utf8") : void 0;
  function UTF8ArrayToString(heapOrArray, idx, maxBytesToRead = 1024) {
    const endIdx = idx + maxBytesToRead;
    let endPtr = idx;
    while (heapOrArray[endPtr] && !(endPtr >= endIdx))
      ++endPtr;
    if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
      return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
    }
    let str = "";
    while (idx < endPtr) {
      let u0 = heapOrArray[idx++];
      if (!(u0 & 128)) {
        str += String.fromCharCode(u0);
        continue;
      }
      const u1 = heapOrArray[idx++] & 63;
      if ((u0 & 224) === 192) {
        str += String.fromCharCode((u0 & 31) << 6 | u1);
        continue;
      }
      const u2 = heapOrArray[idx++] & 63;
      if ((u0 & 240) === 224) {
        u0 = (u0 & 15) << 12 | u1 << 6 | u2;
      } else {
        u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
      }
      if (u0 < 65536) {
        str += String.fromCharCode(u0);
      } else {
        const ch = u0 - 65536;
        str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
      }
    }
    return str;
  }
  function UTF8ToString(ptr, maxBytesToRead) {
    return ptr ? UTF8ArrayToString(binding.HEAPU8, ptr, maxBytesToRead) : "";
  }
  const asmLibraryArg = {
    emscripten_get_now: _emscripten_get_now,
    emscripten_memcpy_big: _emscripten_memcpy_big,
    emscripten_resize_heap: _emscripten_resize_heap,
    fd_write: () => 0
  };
  async function createWasm() {
    const info = {
      env: asmLibraryArg,
      wasi_snapshot_preview1: asmLibraryArg
    };
    const exports = await init(info);
    wasmMemory = exports.memory;
    updateGlobalBufferAndViews(wasmMemory.buffer);
    Object.assign(binding, exports);
    binding.UTF8ToString = UTF8ToString;
  }
  await createWasm();
  return binding;
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField2 = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var onigBinding = null;
function throwLastOnigError(onigBinding2) {
  throw new ShikiError2(onigBinding2.UTF8ToString(onigBinding2.getLastOnigError()));
}
var UtfString = class _UtfString {
  constructor(str) {
    __publicField2(this, "utf16Length");
    __publicField2(this, "utf8Length");
    __publicField2(this, "utf16Value");
    __publicField2(this, "utf8Value");
    __publicField2(this, "utf16OffsetToUtf8");
    __publicField2(this, "utf8OffsetToUtf16");
    const utf16Length = str.length;
    const utf8Length = _UtfString._utf8ByteLength(str);
    const computeIndicesMapping = utf8Length !== utf16Length;
    const utf16OffsetToUtf8 = computeIndicesMapping ? new Uint32Array(utf16Length + 1) : null;
    if (computeIndicesMapping)
      utf16OffsetToUtf8[utf16Length] = utf8Length;
    const utf8OffsetToUtf16 = computeIndicesMapping ? new Uint32Array(utf8Length + 1) : null;
    if (computeIndicesMapping)
      utf8OffsetToUtf16[utf8Length] = utf16Length;
    const utf8Value = new Uint8Array(utf8Length);
    let i8 = 0;
    for (let i16 = 0; i16 < utf16Length; i16++) {
      const charCode = str.charCodeAt(i16);
      let codePoint = charCode;
      let wasSurrogatePair = false;
      if (charCode >= 55296 && charCode <= 56319) {
        if (i16 + 1 < utf16Length) {
          const nextCharCode = str.charCodeAt(i16 + 1);
          if (nextCharCode >= 56320 && nextCharCode <= 57343) {
            codePoint = (charCode - 55296 << 10) + 65536 | nextCharCode - 56320;
            wasSurrogatePair = true;
          }
        }
      }
      if (computeIndicesMapping) {
        utf16OffsetToUtf8[i16] = i8;
        if (wasSurrogatePair)
          utf16OffsetToUtf8[i16 + 1] = i8;
        if (codePoint <= 127) {
          utf8OffsetToUtf16[i8 + 0] = i16;
        } else if (codePoint <= 2047) {
          utf8OffsetToUtf16[i8 + 0] = i16;
          utf8OffsetToUtf16[i8 + 1] = i16;
        } else if (codePoint <= 65535) {
          utf8OffsetToUtf16[i8 + 0] = i16;
          utf8OffsetToUtf16[i8 + 1] = i16;
          utf8OffsetToUtf16[i8 + 2] = i16;
        } else {
          utf8OffsetToUtf16[i8 + 0] = i16;
          utf8OffsetToUtf16[i8 + 1] = i16;
          utf8OffsetToUtf16[i8 + 2] = i16;
          utf8OffsetToUtf16[i8 + 3] = i16;
        }
      }
      if (codePoint <= 127) {
        utf8Value[i8++] = codePoint;
      } else if (codePoint <= 2047) {
        utf8Value[i8++] = 192 | (codePoint & 1984) >>> 6;
        utf8Value[i8++] = 128 | (codePoint & 63) >>> 0;
      } else if (codePoint <= 65535) {
        utf8Value[i8++] = 224 | (codePoint & 61440) >>> 12;
        utf8Value[i8++] = 128 | (codePoint & 4032) >>> 6;
        utf8Value[i8++] = 128 | (codePoint & 63) >>> 0;
      } else {
        utf8Value[i8++] = 240 | (codePoint & 1835008) >>> 18;
        utf8Value[i8++] = 128 | (codePoint & 258048) >>> 12;
        utf8Value[i8++] = 128 | (codePoint & 4032) >>> 6;
        utf8Value[i8++] = 128 | (codePoint & 63) >>> 0;
      }
      if (wasSurrogatePair)
        i16++;
    }
    this.utf16Length = utf16Length;
    this.utf8Length = utf8Length;
    this.utf16Value = str;
    this.utf8Value = utf8Value;
    this.utf16OffsetToUtf8 = utf16OffsetToUtf8;
    this.utf8OffsetToUtf16 = utf8OffsetToUtf16;
  }
  static _utf8ByteLength(str) {
    let result = 0;
    for (let i = 0, len = str.length; i < len; i++) {
      const charCode = str.charCodeAt(i);
      let codepoint = charCode;
      let wasSurrogatePair = false;
      if (charCode >= 55296 && charCode <= 56319) {
        if (i + 1 < len) {
          const nextCharCode = str.charCodeAt(i + 1);
          if (nextCharCode >= 56320 && nextCharCode <= 57343) {
            codepoint = (charCode - 55296 << 10) + 65536 | nextCharCode - 56320;
            wasSurrogatePair = true;
          }
        }
      }
      if (codepoint <= 127)
        result += 1;
      else if (codepoint <= 2047)
        result += 2;
      else if (codepoint <= 65535)
        result += 3;
      else
        result += 4;
      if (wasSurrogatePair)
        i++;
    }
    return result;
  }
  createString(onigBinding2) {
    const result = onigBinding2.omalloc(this.utf8Length);
    onigBinding2.HEAPU8.set(this.utf8Value, result);
    return result;
  }
};
var _OnigString = class {
  constructor(str) {
    __publicField2(this, "id", ++_OnigString.LAST_ID);
    __publicField2(this, "_onigBinding");
    __publicField2(this, "content");
    __publicField2(this, "utf16Length");
    __publicField2(this, "utf8Length");
    __publicField2(this, "utf16OffsetToUtf8");
    __publicField2(this, "utf8OffsetToUtf16");
    __publicField2(this, "ptr");
    if (!onigBinding)
      throw new ShikiError2("Must invoke loadWasm first.");
    this._onigBinding = onigBinding;
    this.content = str;
    const utfString = new UtfString(str);
    this.utf16Length = utfString.utf16Length;
    this.utf8Length = utfString.utf8Length;
    this.utf16OffsetToUtf8 = utfString.utf16OffsetToUtf8;
    this.utf8OffsetToUtf16 = utfString.utf8OffsetToUtf16;
    if (this.utf8Length < 1e4 && !_OnigString._sharedPtrInUse) {
      if (!_OnigString._sharedPtr)
        _OnigString._sharedPtr = onigBinding.omalloc(1e4);
      _OnigString._sharedPtrInUse = true;
      onigBinding.HEAPU8.set(utfString.utf8Value, _OnigString._sharedPtr);
      this.ptr = _OnigString._sharedPtr;
    } else {
      this.ptr = utfString.createString(onigBinding);
    }
  }
  convertUtf8OffsetToUtf16(utf8Offset) {
    if (this.utf8OffsetToUtf16) {
      if (utf8Offset < 0)
        return 0;
      if (utf8Offset > this.utf8Length)
        return this.utf16Length;
      return this.utf8OffsetToUtf16[utf8Offset];
    }
    return utf8Offset;
  }
  convertUtf16OffsetToUtf8(utf16Offset) {
    if (this.utf16OffsetToUtf8) {
      if (utf16Offset < 0)
        return 0;
      if (utf16Offset > this.utf16Length)
        return this.utf8Length;
      return this.utf16OffsetToUtf8[utf16Offset];
    }
    return utf16Offset;
  }
  dispose() {
    if (this.ptr === _OnigString._sharedPtr)
      _OnigString._sharedPtrInUse = false;
    else
      this._onigBinding.ofree(this.ptr);
  }
};
var OnigString = _OnigString;
__publicField2(OnigString, "LAST_ID", 0);
__publicField2(OnigString, "_sharedPtr", 0);
__publicField2(OnigString, "_sharedPtrInUse", false);
var OnigScanner = class {
  constructor(patterns) {
    __publicField2(this, "_onigBinding");
    __publicField2(this, "_ptr");
    if (!onigBinding)
      throw new ShikiError2("Must invoke loadWasm first.");
    const strPtrsArr = [];
    const strLenArr = [];
    for (let i = 0, len = patterns.length; i < len; i++) {
      const utfString = new UtfString(patterns[i]);
      strPtrsArr[i] = utfString.createString(onigBinding);
      strLenArr[i] = utfString.utf8Length;
    }
    const strPtrsPtr = onigBinding.omalloc(4 * patterns.length);
    onigBinding.HEAPU32.set(strPtrsArr, strPtrsPtr / 4);
    const strLenPtr = onigBinding.omalloc(4 * patterns.length);
    onigBinding.HEAPU32.set(strLenArr, strLenPtr / 4);
    const scannerPtr = onigBinding.createOnigScanner(strPtrsPtr, strLenPtr, patterns.length);
    for (let i = 0, len = patterns.length; i < len; i++)
      onigBinding.ofree(strPtrsArr[i]);
    onigBinding.ofree(strLenPtr);
    onigBinding.ofree(strPtrsPtr);
    if (scannerPtr === 0)
      throwLastOnigError(onigBinding);
    this._onigBinding = onigBinding;
    this._ptr = scannerPtr;
  }
  dispose() {
    this._onigBinding.freeOnigScanner(this._ptr);
  }
  findNextMatchSync(string, startPosition, arg) {
    let options = 0;
    if (typeof arg === "number") {
      options = arg;
    }
    if (typeof string === "string") {
      string = new OnigString(string);
      const result = this._findNextMatchSync(string, startPosition, false, options);
      string.dispose();
      return result;
    }
    return this._findNextMatchSync(string, startPosition, false, options);
  }
  _findNextMatchSync(string, startPosition, debugCall, options) {
    const onigBinding2 = this._onigBinding;
    const resultPtr = onigBinding2.findNextOnigScannerMatch(this._ptr, string.id, string.ptr, string.utf8Length, string.convertUtf16OffsetToUtf8(startPosition), options);
    if (resultPtr === 0) {
      return null;
    }
    const HEAPU32 = onigBinding2.HEAPU32;
    let offset = resultPtr / 4;
    const index = HEAPU32[offset++];
    const count = HEAPU32[offset++];
    const captureIndices = [];
    for (let i = 0; i < count; i++) {
      const beg = string.convertUtf8OffsetToUtf16(HEAPU32[offset++]);
      const end = string.convertUtf8OffsetToUtf16(HEAPU32[offset++]);
      captureIndices[i] = {
        start: beg,
        end,
        length: end - beg
      };
    }
    return {
      index,
      captureIndices
    };
  }
};
function isInstantiatorOptionsObject(dataOrOptions) {
  return typeof dataOrOptions.instantiator === "function";
}
function isInstantiatorModule(dataOrOptions) {
  return typeof dataOrOptions.default === "function";
}
function isDataOptionsObject(dataOrOptions) {
  return typeof dataOrOptions.data !== "undefined";
}
function isResponse(dataOrOptions) {
  return typeof Response !== "undefined" && dataOrOptions instanceof Response;
}
function isArrayBuffer(data) {
  var _a;
  return typeof ArrayBuffer !== "undefined" && (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) || typeof Buffer !== "undefined" && ((_a = Buffer.isBuffer) == null ? void 0 : _a.call(Buffer, data)) || typeof SharedArrayBuffer !== "undefined" && data instanceof SharedArrayBuffer || typeof Uint32Array !== "undefined" && data instanceof Uint32Array;
}
var initPromise;
function loadWasm(options) {
  if (initPromise)
    return initPromise;
  async function _load() {
    onigBinding = await main(async (info) => {
      let instance = options;
      instance = await instance;
      if (typeof instance === "function")
        instance = await instance(info);
      if (typeof instance === "function")
        instance = await instance(info);
      if (isInstantiatorOptionsObject(instance)) {
        instance = await instance.instantiator(info);
      } else if (isInstantiatorModule(instance)) {
        instance = await instance.default(info);
      } else {
        if (isDataOptionsObject(instance))
          instance = instance.data;
        if (isResponse(instance)) {
          if (typeof WebAssembly.instantiateStreaming === "function")
            instance = await _makeResponseStreamingLoader(instance)(info);
          else
            instance = await _makeResponseNonStreamingLoader(instance)(info);
        } else if (isArrayBuffer(instance)) {
          instance = await _makeArrayBufferLoader(instance)(info);
        } else if (instance instanceof WebAssembly.Module) {
          instance = await _makeArrayBufferLoader(instance)(info);
        } else if ("default" in instance && instance.default instanceof WebAssembly.Module) {
          instance = await _makeArrayBufferLoader(instance.default)(info);
        }
      }
      if ("instance" in instance)
        instance = instance.instance;
      if ("exports" in instance)
        instance = instance.exports;
      return instance;
    });
  }
  initPromise = _load();
  return initPromise;
}
function _makeArrayBufferLoader(data) {
  return (importObject) => WebAssembly.instantiate(data, importObject);
}
function _makeResponseStreamingLoader(data) {
  return (importObject) => WebAssembly.instantiateStreaming(data, importObject);
}
function _makeResponseNonStreamingLoader(data) {
  return async (importObject) => {
    const arrayBuffer = await data.arrayBuffer();
    return WebAssembly.instantiate(arrayBuffer, importObject);
  };
}
var _defaultWasmLoader;
function getDefaultWasmLoader() {
  return _defaultWasmLoader;
}
async function createOnigurumaEngine(options) {
  if (options)
    await loadWasm(options);
  return {
    createScanner(patterns) {
      return new OnigScanner(patterns.map((p) => typeof p === "string" ? p : p.source));
    },
    createString(s) {
      return new OnigString(s);
    }
  };
}

// ../node_modules/@shikijs/core/dist/shared/core.5hv0Law9.mjs
var _emitDeprecation = 3;
var _emitError = false;
function warnDeprecated(message, version = 3) {
  if (!_emitDeprecation)
    return;
  if (typeof _emitDeprecation === "number" && version > _emitDeprecation)
    return;
  if (_emitError) {
    throw new Error(`[SHIKI DEPRECATE]: ${message}`);
  } else {
    console.trace(`[SHIKI DEPRECATE]: ${message}`);
  }
}

// ../node_modules/emoji-regex-xs/index.mjs
var r = String.raw;
var seq = r`(?:\p{Emoji}\uFE0F\u20E3?|\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation})`;
var sTags = r`\u{E0061}-\u{E007A}`;

// ../node_modules/oniguruma-to-es/dist/esm/index.js
var cp = String.fromCodePoint;
var r2 = String.raw;
var envFlags = {
  flagGroups: (() => {
    try {
      new RegExp("(?i:)");
    } catch {
      return false;
    }
    return true;
  })(),
  unicodeSets: (() => {
    try {
      new RegExp("", "v");
    } catch {
      return false;
    }
    return true;
  })()
};
envFlags.literalHyphenIncorrectlyCreatesRange = (() => {
  if (!envFlags.unicodeSets) {
    return false;
  }
  try {
    new RegExp(r2`[\d\-a]`, "v");
  } catch {
    return true;
  }
  return false;
})();
var CharsWithoutIgnoreCaseExpansion = /* @__PURE__ */ new Set([
  cp(304),
  // İ
  cp(305)
  // ı
]);
var JsUnicodeProperties = new Set(
  `C Other
Cc Control cntrl
Cf Format
Cn Unassigned
Co Private_Use
Cs Surrogate
L Letter
LC Cased_Letter
Ll Lowercase_Letter
Lm Modifier_Letter
Lo Other_Letter
Lt Titlecase_Letter
Lu Uppercase_Letter
M Mark Combining_Mark
Mc Spacing_Mark
Me Enclosing_Mark
Mn Nonspacing_Mark
N Number
Nd Decimal_Number digit
Nl Letter_Number
No Other_Number
P Punctuation punct
Pc Connector_Punctuation
Pd Dash_Punctuation
Pe Close_Punctuation
Pf Final_Punctuation
Pi Initial_Punctuation
Po Other_Punctuation
Ps Open_Punctuation
S Symbol
Sc Currency_Symbol
Sk Modifier_Symbol
Sm Math_Symbol
So Other_Symbol
Z Separator
Zl Line_Separator
Zp Paragraph_Separator
Zs Space_Separator
ASCII
ASCII_Hex_Digit AHex
Alphabetic Alpha
Any
Assigned
Bidi_Control Bidi_C
Bidi_Mirrored Bidi_M
Case_Ignorable CI
Cased
Changes_When_Casefolded CWCF
Changes_When_Casemapped CWCM
Changes_When_Lowercased CWL
Changes_When_NFKC_Casefolded CWKCF
Changes_When_Titlecased CWT
Changes_When_Uppercased CWU
Dash
Default_Ignorable_Code_Point DI
Deprecated Dep
Diacritic Dia
Emoji
Emoji_Component EComp
Emoji_Modifier EMod
Emoji_Modifier_Base EBase
Emoji_Presentation EPres
Extended_Pictographic ExtPict
Extender Ext
Grapheme_Base Gr_Base
Grapheme_Extend Gr_Ext
Hex_Digit Hex
IDS_Binary_Operator IDSB
IDS_Trinary_Operator IDST
ID_Continue IDC
ID_Start IDS
Ideographic Ideo
Join_Control Join_C
Logical_Order_Exception LOE
Lowercase Lower
Math
Noncharacter_Code_Point NChar
Pattern_Syntax Pat_Syn
Pattern_White_Space Pat_WS
Quotation_Mark QMark
Radical
Regional_Indicator RI
Sentence_Terminal STerm
Soft_Dotted SD
Terminal_Punctuation Term
Unified_Ideograph UIdeo
Uppercase Upper
Variation_Selector VS
White_Space space
XID_Continue XIDC
XID_Start XIDS`.split(/\s/)
);
var JsUnicodePropertiesMap = /* @__PURE__ */ new Map();
for (const p of JsUnicodeProperties) {
  JsUnicodePropertiesMap.set(slug(p), p);
}
var JsUnicodePropertiesOfStrings = /* @__PURE__ */ new Set([
  // ES2024 properties of strings; none are supported by Oniguruma
  "Basic_Emoji",
  "Emoji_Keycap_Sequence",
  "RGI_Emoji",
  "RGI_Emoji_Flag_Sequence",
  "RGI_Emoji_Modifier_Sequence",
  "RGI_Emoji_Tag_Sequence",
  "RGI_Emoji_ZWJ_Sequence"
]);
var JsUnicodePropertiesOfStringsMap = /* @__PURE__ */ new Map();
for (const p of JsUnicodePropertiesOfStrings) {
  JsUnicodePropertiesOfStringsMap.set(slug(p), p);
}
var LowerToAlternativeLowerCaseMap = /* @__PURE__ */ new Map([
  ["s", cp(383)],
  // s, ſ
  [cp(383), "s"]
  // ſ, s
]);
var LowerToAlternativeUpperCaseMap = /* @__PURE__ */ new Map([
  [cp(223), cp(7838)],
  // ß, ẞ
  [cp(107), cp(8490)],
  // k, K (Kelvin)
  [cp(229), cp(8491)],
  // å, Å (Angstrom)
  [cp(969), cp(8486)]
  // ω, Ω (Ohm)
]);
var LowerToTitleCaseMap = new Map([
  titleEntry(453),
  titleEntry(456),
  titleEntry(459),
  titleEntry(498),
  ...titleRange(8072, 8079),
  ...titleRange(8088, 8095),
  ...titleRange(8104, 8111),
  titleEntry(8124),
  titleEntry(8140),
  titleEntry(8188)
]);
var PosixClassesMap = /* @__PURE__ */ new Map([
  ["alnum", r2`[\p{Alpha}\p{Nd}]`],
  ["alpha", r2`\p{Alpha}`],
  ["ascii", r2`\p{ASCII}`],
  ["blank", r2`[\p{Zs}\t]`],
  ["cntrl", r2`\p{cntrl}`],
  ["digit", r2`\p{Nd}`],
  ["graph", r2`[\P{space}&&\P{cntrl}&&\P{Cn}&&\P{Cs}]`],
  ["lower", r2`\p{Lower}`],
  ["print", r2`[[\P{space}&&\P{cntrl}&&\P{Cn}&&\P{Cs}]\p{Zs}]`],
  ["punct", r2`[\p{P}\p{S}]`],
  // New value from Oniguruma 6.9.9
  ["space", r2`\p{space}`],
  ["upper", r2`\p{Upper}`],
  ["word", r2`[\p{Alpha}\p{M}\p{Nd}\p{Pc}]`],
  ["xdigit", r2`\p{AHex}`]
]);
function range(start, end) {
  const range2 = [];
  for (let i = start; i <= end; i++) {
    range2.push(i);
  }
  return range2;
}
function slug(name) {
  return name.replace(/[- _]+/g, "").toLowerCase();
}
function titleEntry(codePoint) {
  const char = cp(codePoint);
  return [char.toLowerCase(), char];
}
function titleRange(start, end) {
  return range(start, end).map((codePoint) => titleEntry(codePoint));
}
var charClassOpenPattern = r2`\[\^?`;
var sharedEscapesPattern = `${// Control char
"c.? | C(?:-.?)?"}|${// Unicode property; Onig considers `\p` an identity escape, but e.g. `\p{`, `\p{ ^L}`, and
// `\p{gc=L}` are invalid
r2`[pP]\{(?:\^?[-\x20_]*[A-Za-z][-\x20\w]*\})?`}|${// Hex encoded byte sequence; attempt match before other `\xNN` hex char
r2`x[89A-Fa-f]\p{AHex}(?:\\x[89A-Fa-f]\p{AHex})*`}|${// Hex char
r2`u(?:\p{AHex}{4})? | x\{[^\}]*\}? | x\p{AHex}{0,2}`}|${// Enclosed octal code point
r2`o\{[^\}]*\}?`}|${// Escaped number
r2`\d{1,3}`}`;
var quantifierRe = /[?*+][?+]?|\{(?:\d+(?:,\d*)?|,\d+)\}\??/;
var tokenRe = new RegExp(r2`
  \\ (?:
    ${sharedEscapesPattern}
    | [gk]<[^>]*>?
    | [gk]'[^']*'?
    | .
  )
  | \( (?:
    \? (?:
      [:=!>({]
      | <[=!]
      | <[^>]*>
      | '[^']*'
      | ~\|?
      | #(?:[^)\\]|\\.?)*
      | [^:)]*[:)]
    )?
    | \*
  )?
  | ${quantifierRe.source}
  | ${charClassOpenPattern}
  | .
`.replace(/\s+/g, ""), "gsu");
var charClassTokenRe = new RegExp(r2`
  \\ (?:
    ${sharedEscapesPattern}
    | .
  )
  | \[:(?:\^?\p{Alpha}+|\^):\]
  | ${charClassOpenPattern}
  | &&
  | .
`.replace(/\s+/g, ""), "gsu");
var defaultWordChar = r2`[\p{L}\p{M}\p{N}\p{Pc}]`;
var CharCodeEscapeMap = /* @__PURE__ */ new Map([
  [9, r2`\t`],
  // horizontal tab
  [10, r2`\n`],
  // line feed
  [11, r2`\v`],
  // vertical tab
  [12, r2`\f`],
  // form feed
  [13, r2`\r`],
  // carriage return
  [8232, r2`\u2028`],
  // line separator
  [8233, r2`\u2029`],
  // paragraph separator
  [65279, r2`\uFEFF`]
  // ZWNBSP/BOM
]);
var casedRe = new RegExp("^\\p{Cased}$", "u");

// ../node_modules/@shikijs/core/dist/index.mjs
function createOnigurumaEngine2(options) {
  warnDeprecated("import `createOnigurumaEngine` from `@shikijs/engine-oniguruma` or `shiki/engine/oniguruma` instead");
  return createOnigurumaEngine(options);
}
function resolveColorReplacements(theme, options) {
  const replacements = typeof theme === "string" ? {} : { ...theme.colorReplacements };
  const themeName = typeof theme === "string" ? theme : theme.name;
  for (const [key, value] of Object.entries((options == null ? void 0 : options.colorReplacements) || {})) {
    if (typeof value === "string")
      replacements[key] = value;
    else if (key === themeName)
      Object.assign(replacements, value);
  }
  return replacements;
}
function applyColorReplacements(color, replacements) {
  if (!color)
    return color;
  return (replacements == null ? void 0 : replacements[color == null ? void 0 : color.toLowerCase()]) || color;
}
function toArray(x) {
  return Array.isArray(x) ? x : [x];
}
async function normalizeGetter(p) {
  return Promise.resolve(typeof p === "function" ? p() : p).then((r3) => r3.default || r3);
}
function isPlainLang(lang) {
  return !lang || ["plaintext", "txt", "text", "plain"].includes(lang);
}
function isSpecialLang(lang) {
  return lang === "ansi" || isPlainLang(lang);
}
function isNoneTheme(theme) {
  return theme === "none";
}
function isSpecialTheme(theme) {
  return isNoneTheme(theme);
}
function addClassToHast(node, className) {
  var _a;
  if (!className)
    return node;
  node.properties || (node.properties = {});
  (_a = node.properties).class || (_a.class = []);
  if (typeof node.properties.class === "string")
    node.properties.class = node.properties.class.split(/\s+/g);
  if (!Array.isArray(node.properties.class))
    node.properties.class = [];
  const targets = Array.isArray(className) ? className : className.split(/\s+/g);
  for (const c of targets) {
    if (c && !node.properties.class.includes(c))
      node.properties.class.push(c);
  }
  return node;
}
function splitLines(code, preserveEnding = false) {
  var _a;
  const parts = code.split(/(\r?\n)/g);
  let index = 0;
  const lines = [];
  for (let i = 0; i < parts.length; i += 2) {
    const line = preserveEnding ? parts[i] + (parts[i + 1] || "") : parts[i];
    lines.push([line, index]);
    index += parts[i].length;
    index += ((_a = parts[i + 1]) == null ? void 0 : _a.length) || 0;
  }
  return lines;
}
function createPositionConverter(code) {
  const lines = splitLines(code, true).map(([line]) => line);
  function indexToPos(index) {
    if (index === code.length) {
      return {
        line: lines.length - 1,
        character: lines[lines.length - 1].length
      };
    }
    let character = index;
    let line = 0;
    for (const lineText of lines) {
      if (character < lineText.length)
        break;
      character -= lineText.length;
      line++;
    }
    return { line, character };
  }
  function posToIndex(line, character) {
    let index = 0;
    for (let i = 0; i < line; i++)
      index += lines[i].length;
    index += character;
    return index;
  }
  return {
    lines,
    indexToPos,
    posToIndex
  };
}
function guessEmbeddedLanguages(code, _lang, highlighter) {
  const langs = /* @__PURE__ */ new Set();
  for (const match of code.matchAll(/lang=["']([\w-]+)["']/g)) {
    langs.add(match[1]);
  }
  for (const match of code.matchAll(/(?:```|~~~)([\w-]+)/g)) {
    langs.add(match[1]);
  }
  for (const match of code.matchAll(/\\begin\{([\w-]+)\}/g)) {
    langs.add(match[1]);
  }
  if (!highlighter)
    return Array.from(langs);
  const bundle = highlighter.getBundledLanguages();
  return Array.from(langs).filter((l) => l && bundle[l]);
}
function splitToken(token, offsets) {
  let lastOffset = 0;
  const tokens = [];
  for (const offset of offsets) {
    if (offset > lastOffset) {
      tokens.push({
        ...token,
        content: token.content.slice(lastOffset, offset),
        offset: token.offset + lastOffset
      });
    }
    lastOffset = offset;
  }
  if (lastOffset < token.content.length) {
    tokens.push({
      ...token,
      content: token.content.slice(lastOffset),
      offset: token.offset + lastOffset
    });
  }
  return tokens;
}
function splitTokens(tokens, breakpoints) {
  const sorted = Array.from(breakpoints instanceof Set ? breakpoints : new Set(breakpoints)).sort((a, b) => a - b);
  if (!sorted.length)
    return tokens;
  return tokens.map((line) => {
    return line.flatMap((token) => {
      const breakpointsInToken = sorted.filter((i) => token.offset < i && i < token.offset + token.content.length).map((i) => i - token.offset).sort((a, b) => a - b);
      if (!breakpointsInToken.length)
        return token;
      return splitToken(token, breakpointsInToken);
    });
  });
}
function flatTokenVariants(merged, variantsOrder, cssVariablePrefix, defaultColor) {
  const token = {
    content: merged.content,
    explanation: merged.explanation,
    offset: merged.offset
  };
  const styles = variantsOrder.map((t) => getTokenStyleObject(merged.variants[t]));
  const styleKeys = new Set(styles.flatMap((t) => Object.keys(t)));
  const mergedStyles = {};
  styles.forEach((cur, idx) => {
    for (const key of styleKeys) {
      const value = cur[key] || "inherit";
      if (idx === 0 && defaultColor) {
        mergedStyles[key] = value;
      } else {
        const keyName = key === "color" ? "" : key === "background-color" ? "-bg" : `-${key}`;
        const varKey = cssVariablePrefix + variantsOrder[idx] + (key === "color" ? "" : keyName);
        mergedStyles[varKey] = value;
      }
    }
  });
  token.htmlStyle = mergedStyles;
  return token;
}
function getTokenStyleObject(token) {
  const styles = {};
  if (token.color)
    styles.color = token.color;
  if (token.bgColor)
    styles["background-color"] = token.bgColor;
  if (token.fontStyle) {
    if (token.fontStyle & FontStyle.Italic)
      styles["font-style"] = "italic";
    if (token.fontStyle & FontStyle.Bold)
      styles["font-weight"] = "bold";
    if (token.fontStyle & FontStyle.Underline)
      styles["text-decoration"] = "underline";
  }
  return styles;
}
function stringifyTokenStyle(token) {
  if (typeof token === "string")
    return token;
  return Object.entries(token).map(([key, value]) => `${key}:${value}`).join(";");
}
var _grammarStateMap = /* @__PURE__ */ new WeakMap();
function setLastGrammarStateToMap(keys, state) {
  _grammarStateMap.set(keys, state);
}
function getLastGrammarStateFromMap(keys) {
  return _grammarStateMap.get(keys);
}
var GrammarState = class _GrammarState {
  constructor(...args) {
    /**
     * Theme to Stack mapping
     */
    __publicField(this, "_stacks", {});
    __publicField(this, "lang");
    if (args.length === 2) {
      const [stacksMap, lang] = args;
      this.lang = lang;
      this._stacks = stacksMap;
    } else {
      const [stack, lang, theme] = args;
      this.lang = lang;
      this._stacks = { [theme]: stack };
    }
  }
  get themes() {
    return Object.keys(this._stacks);
  }
  get theme() {
    return this.themes[0];
  }
  get _stack() {
    return this._stacks[this.theme];
  }
  /**
   * Static method to create a initial grammar state.
   */
  static initial(lang, themes) {
    return new _GrammarState(
      Object.fromEntries(toArray(themes).map((theme) => [theme, INITIAL])),
      lang
    );
  }
  /**
   * Get the internal stack object.
   * @internal
   */
  getInternalStack(theme = this.theme) {
    return this._stacks[theme];
  }
  /**
   * @deprecated use `getScopes` instead
   */
  get scopes() {
    warnDeprecated("GrammarState.scopes is deprecated, use GrammarState.getScopes() instead");
    return getScopes(this._stacks[this.theme]);
  }
  getScopes(theme = this.theme) {
    return getScopes(this._stacks[theme]);
  }
  toJSON() {
    return {
      lang: this.lang,
      theme: this.theme,
      themes: this.themes,
      scopes: this.getScopes()
    };
  }
};
function getScopes(stack) {
  const scopes = [];
  const visited = /* @__PURE__ */ new Set();
  function pushScope(stack2) {
    var _a;
    if (visited.has(stack2))
      return;
    visited.add(stack2);
    const name = (_a = stack2 == null ? void 0 : stack2.nameScopesList) == null ? void 0 : _a.scopeName;
    if (name)
      scopes.push(name);
    if (stack2.parent)
      pushScope(stack2.parent);
  }
  pushScope(stack);
  return scopes;
}
function getGrammarStack(state, theme) {
  if (!(state instanceof GrammarState))
    throw new ShikiError("Invalid grammar state");
  return state.getInternalStack(theme);
}
function transformerDecorations() {
  const map = /* @__PURE__ */ new WeakMap();
  function getContext(shiki) {
    if (!map.has(shiki.meta)) {
      let normalizePosition = function(p) {
        if (typeof p === "number") {
          if (p < 0 || p > shiki.source.length)
            throw new ShikiError(`Invalid decoration offset: ${p}. Code length: ${shiki.source.length}`);
          return {
            ...converter.indexToPos(p),
            offset: p
          };
        } else {
          const line = converter.lines[p.line];
          if (line === void 0)
            throw new ShikiError(`Invalid decoration position ${JSON.stringify(p)}. Lines length: ${converter.lines.length}`);
          if (p.character < 0 || p.character > line.length)
            throw new ShikiError(`Invalid decoration position ${JSON.stringify(p)}. Line ${p.line} length: ${line.length}`);
          return {
            ...p,
            offset: converter.posToIndex(p.line, p.character)
          };
        }
      };
      const converter = createPositionConverter(shiki.source);
      const decorations2 = (shiki.options.decorations || []).map((d) => ({
        ...d,
        start: normalizePosition(d.start),
        end: normalizePosition(d.end)
      }));
      verifyIntersections(decorations2);
      map.set(shiki.meta, {
        decorations: decorations2,
        converter,
        source: shiki.source
      });
    }
    return map.get(shiki.meta);
  }
  return {
    name: "shiki:decorations",
    tokens(tokens) {
      var _a;
      if (!((_a = this.options.decorations) == null ? void 0 : _a.length))
        return;
      const ctx = getContext(this);
      const breakpoints = ctx.decorations.flatMap((d) => [d.start.offset, d.end.offset]);
      const splitted = splitTokens(tokens, breakpoints);
      return splitted;
    },
    code(codeEl) {
      var _a;
      if (!((_a = this.options.decorations) == null ? void 0 : _a.length))
        return;
      const ctx = getContext(this);
      const lines = Array.from(codeEl.children).filter((i) => i.type === "element" && i.tagName === "span");
      if (lines.length !== ctx.converter.lines.length)
        throw new ShikiError(`Number of lines in code element (${lines.length}) does not match the number of lines in the source (${ctx.converter.lines.length}). Failed to apply decorations.`);
      function applyLineSection(line, start, end, decoration) {
        const lineEl = lines[line];
        let text = "";
        let startIndex = -1;
        let endIndex = -1;
        if (start === 0)
          startIndex = 0;
        if (end === 0)
          endIndex = 0;
        if (end === Number.POSITIVE_INFINITY)
          endIndex = lineEl.children.length;
        if (startIndex === -1 || endIndex === -1) {
          for (let i = 0; i < lineEl.children.length; i++) {
            text += stringify(lineEl.children[i]);
            if (startIndex === -1 && text.length === start)
              startIndex = i + 1;
            if (endIndex === -1 && text.length === end)
              endIndex = i + 1;
          }
        }
        if (startIndex === -1)
          throw new ShikiError(`Failed to find start index for decoration ${JSON.stringify(decoration.start)}`);
        if (endIndex === -1)
          throw new ShikiError(`Failed to find end index for decoration ${JSON.stringify(decoration.end)}`);
        const children = lineEl.children.slice(startIndex, endIndex);
        if (!decoration.alwaysWrap && children.length === lineEl.children.length) {
          applyDecoration(lineEl, decoration, "line");
        } else if (!decoration.alwaysWrap && children.length === 1 && children[0].type === "element") {
          applyDecoration(children[0], decoration, "token");
        } else {
          const wrapper = {
            type: "element",
            tagName: "span",
            properties: {},
            children
          };
          applyDecoration(wrapper, decoration, "wrapper");
          lineEl.children.splice(startIndex, children.length, wrapper);
        }
      }
      function applyLine(line, decoration) {
        lines[line] = applyDecoration(lines[line], decoration, "line");
      }
      function applyDecoration(el, decoration, type) {
        var _a2;
        const properties = decoration.properties || {};
        const transform = decoration.transform || ((i) => i);
        el.tagName = decoration.tagName || "span";
        el.properties = {
          ...el.properties,
          ...properties,
          class: el.properties.class
        };
        if ((_a2 = decoration.properties) == null ? void 0 : _a2.class)
          addClassToHast(el, decoration.properties.class);
        el = transform(el, type) || el;
        return el;
      }
      const lineApplies = [];
      const sorted = ctx.decorations.sort((a, b) => b.start.offset - a.start.offset || a.end.offset - b.end.offset);
      for (const decoration of sorted) {
        const { start, end } = decoration;
        if (start.line === end.line) {
          applyLineSection(start.line, start.character, end.character, decoration);
        } else if (start.line < end.line) {
          applyLineSection(start.line, start.character, Number.POSITIVE_INFINITY, decoration);
          for (let i = start.line + 1; i < end.line; i++)
            lineApplies.unshift(() => applyLine(i, decoration));
          applyLineSection(end.line, 0, end.character, decoration);
        }
      }
      lineApplies.forEach((i) => i());
    }
  };
}
function verifyIntersections(items) {
  for (let i = 0; i < items.length; i++) {
    const foo = items[i];
    if (foo.start.offset > foo.end.offset)
      throw new ShikiError(`Invalid decoration range: ${JSON.stringify(foo.start)} - ${JSON.stringify(foo.end)}`);
    for (let j = i + 1; j < items.length; j++) {
      const bar = items[j];
      const isFooHasBarStart = foo.start.offset <= bar.start.offset && bar.start.offset < foo.end.offset;
      const isFooHasBarEnd = foo.start.offset < bar.end.offset && bar.end.offset <= foo.end.offset;
      const isBarHasFooStart = bar.start.offset <= foo.start.offset && foo.start.offset < bar.end.offset;
      const isBarHasFooEnd = bar.start.offset < foo.end.offset && foo.end.offset <= bar.end.offset;
      if (isFooHasBarStart || isFooHasBarEnd || isBarHasFooStart || isBarHasFooEnd) {
        if (isFooHasBarStart && isFooHasBarEnd)
          continue;
        if (isBarHasFooStart && isBarHasFooEnd)
          continue;
        throw new ShikiError(`Decorations ${JSON.stringify(foo.start)} and ${JSON.stringify(bar.start)} intersect.`);
      }
    }
  }
}
function stringify(el) {
  if (el.type === "text")
    return el.value;
  if (el.type === "element")
    return el.children.map(stringify).join("");
  return "";
}
var builtInTransformers = [
  transformerDecorations()
];
function getTransformers(options) {
  return [
    ...options.transformers || [],
    ...builtInTransformers
  ];
}
var namedColors = [
  "black",
  "red",
  "green",
  "yellow",
  "blue",
  "magenta",
  "cyan",
  "white",
  "brightBlack",
  "brightRed",
  "brightGreen",
  "brightYellow",
  "brightBlue",
  "brightMagenta",
  "brightCyan",
  "brightWhite"
];
var decorations = {
  1: "bold",
  2: "dim",
  3: "italic",
  4: "underline",
  7: "reverse",
  8: "hidden",
  9: "strikethrough"
};
function findSequence(value, position) {
  const nextEscape = value.indexOf("\x1B", position);
  if (nextEscape !== -1) {
    if (value[nextEscape + 1] === "[") {
      const nextClose = value.indexOf("m", nextEscape);
      if (nextClose !== -1) {
        return {
          sequence: value.substring(nextEscape + 2, nextClose).split(";"),
          startPosition: nextEscape,
          position: nextClose + 1
        };
      }
    }
  }
  return {
    position: value.length
  };
}
function parseColor(sequence) {
  const colorMode = sequence.shift();
  if (colorMode === "2") {
    const rgb = sequence.splice(0, 3).map((x) => Number.parseInt(x));
    if (rgb.length !== 3 || rgb.some((x) => Number.isNaN(x)))
      return;
    return {
      type: "rgb",
      rgb
    };
  } else if (colorMode === "5") {
    const index = sequence.shift();
    if (index) {
      return { type: "table", index: Number(index) };
    }
  }
}
function parseSequence(sequence) {
  const commands = [];
  while (sequence.length > 0) {
    const code = sequence.shift();
    if (!code)
      continue;
    const codeInt = Number.parseInt(code);
    if (Number.isNaN(codeInt))
      continue;
    if (codeInt === 0) {
      commands.push({ type: "resetAll" });
    } else if (codeInt <= 9) {
      const decoration = decorations[codeInt];
      if (decoration) {
        commands.push({
          type: "setDecoration",
          value: decorations[codeInt]
        });
      }
    } else if (codeInt <= 29) {
      const decoration = decorations[codeInt - 20];
      if (decoration) {
        commands.push({
          type: "resetDecoration",
          value: decoration
        });
        if (decoration === "dim") {
          commands.push({
            type: "resetDecoration",
            value: "bold"
          });
        }
      }
    } else if (codeInt <= 37) {
      commands.push({
        type: "setForegroundColor",
        value: { type: "named", name: namedColors[codeInt - 30] }
      });
    } else if (codeInt === 38) {
      const color = parseColor(sequence);
      if (color) {
        commands.push({
          type: "setForegroundColor",
          value: color
        });
      }
    } else if (codeInt === 39) {
      commands.push({
        type: "resetForegroundColor"
      });
    } else if (codeInt <= 47) {
      commands.push({
        type: "setBackgroundColor",
        value: { type: "named", name: namedColors[codeInt - 40] }
      });
    } else if (codeInt === 48) {
      const color = parseColor(sequence);
      if (color) {
        commands.push({
          type: "setBackgroundColor",
          value: color
        });
      }
    } else if (codeInt === 49) {
      commands.push({
        type: "resetBackgroundColor"
      });
    } else if (codeInt === 53) {
      commands.push({
        type: "setDecoration",
        value: "overline"
      });
    } else if (codeInt === 55) {
      commands.push({
        type: "resetDecoration",
        value: "overline"
      });
    } else if (codeInt >= 90 && codeInt <= 97) {
      commands.push({
        type: "setForegroundColor",
        value: { type: "named", name: namedColors[codeInt - 90 + 8] }
      });
    } else if (codeInt >= 100 && codeInt <= 107) {
      commands.push({
        type: "setBackgroundColor",
        value: { type: "named", name: namedColors[codeInt - 100 + 8] }
      });
    }
  }
  return commands;
}
function createAnsiSequenceParser() {
  let foreground = null;
  let background = null;
  let decorations2 = /* @__PURE__ */ new Set();
  return {
    parse(value) {
      const tokens = [];
      let position = 0;
      do {
        const findResult = findSequence(value, position);
        const text = findResult.sequence ? value.substring(position, findResult.startPosition) : value.substring(position);
        if (text.length > 0) {
          tokens.push({
            value: text,
            foreground,
            background,
            decorations: new Set(decorations2)
          });
        }
        if (findResult.sequence) {
          const commands = parseSequence(findResult.sequence);
          for (const styleToken of commands) {
            if (styleToken.type === "resetAll") {
              foreground = null;
              background = null;
              decorations2.clear();
            } else if (styleToken.type === "resetForegroundColor") {
              foreground = null;
            } else if (styleToken.type === "resetBackgroundColor") {
              background = null;
            } else if (styleToken.type === "resetDecoration") {
              decorations2.delete(styleToken.value);
            }
          }
          for (const styleToken of commands) {
            if (styleToken.type === "setForegroundColor") {
              foreground = styleToken.value;
            } else if (styleToken.type === "setBackgroundColor") {
              background = styleToken.value;
            } else if (styleToken.type === "setDecoration") {
              decorations2.add(styleToken.value);
            }
          }
        }
        position = findResult.position;
      } while (position < value.length);
      return tokens;
    }
  };
}
var defaultNamedColorsMap = {
  black: "#000000",
  red: "#bb0000",
  green: "#00bb00",
  yellow: "#bbbb00",
  blue: "#0000bb",
  magenta: "#ff00ff",
  cyan: "#00bbbb",
  white: "#eeeeee",
  brightBlack: "#555555",
  brightRed: "#ff5555",
  brightGreen: "#00ff00",
  brightYellow: "#ffff55",
  brightBlue: "#5555ff",
  brightMagenta: "#ff55ff",
  brightCyan: "#55ffff",
  brightWhite: "#ffffff"
};
function createColorPalette(namedColorsMap = defaultNamedColorsMap) {
  function namedColor(name) {
    return namedColorsMap[name];
  }
  function rgbColor(rgb) {
    return `#${rgb.map((x) => Math.max(0, Math.min(x, 255)).toString(16).padStart(2, "0")).join("")}`;
  }
  let colorTable;
  function getColorTable() {
    if (colorTable) {
      return colorTable;
    }
    colorTable = [];
    for (let i = 0; i < namedColors.length; i++) {
      colorTable.push(namedColor(namedColors[i]));
    }
    let levels = [0, 95, 135, 175, 215, 255];
    for (let r3 = 0; r3 < 6; r3++) {
      for (let g = 0; g < 6; g++) {
        for (let b = 0; b < 6; b++) {
          colorTable.push(rgbColor([levels[r3], levels[g], levels[b]]));
        }
      }
    }
    let level = 8;
    for (let i = 0; i < 24; i++, level += 10) {
      colorTable.push(rgbColor([level, level, level]));
    }
    return colorTable;
  }
  function tableColor(index) {
    return getColorTable()[index];
  }
  function value(color) {
    switch (color.type) {
      case "named":
        return namedColor(color.name);
      case "rgb":
        return rgbColor(color.rgb);
      case "table":
        return tableColor(color.index);
    }
  }
  return {
    value
  };
}
function tokenizeAnsiWithTheme(theme, fileContents, options) {
  const colorReplacements = resolveColorReplacements(theme, options);
  const lines = splitLines(fileContents);
  const colorPalette = createColorPalette(
    Object.fromEntries(
      namedColors.map((name) => {
        var _a;
        return [
          name,
          (_a = theme.colors) == null ? void 0 : _a[`terminal.ansi${name[0].toUpperCase()}${name.substring(1)}`]
        ];
      })
    )
  );
  const parser = createAnsiSequenceParser();
  return lines.map(
    (line) => parser.parse(line[0]).map((token) => {
      let color;
      let bgColor;
      if (token.decorations.has("reverse")) {
        color = token.background ? colorPalette.value(token.background) : theme.bg;
        bgColor = token.foreground ? colorPalette.value(token.foreground) : theme.fg;
      } else {
        color = token.foreground ? colorPalette.value(token.foreground) : theme.fg;
        bgColor = token.background ? colorPalette.value(token.background) : void 0;
      }
      color = applyColorReplacements(color, colorReplacements);
      bgColor = applyColorReplacements(bgColor, colorReplacements);
      if (token.decorations.has("dim"))
        color = dimColor(color);
      let fontStyle = FontStyle.None;
      if (token.decorations.has("bold"))
        fontStyle |= FontStyle.Bold;
      if (token.decorations.has("italic"))
        fontStyle |= FontStyle.Italic;
      if (token.decorations.has("underline"))
        fontStyle |= FontStyle.Underline;
      return {
        content: token.value,
        offset: line[1],
        // TODO: more accurate offset? might need to fork ansi-sequence-parser
        color,
        bgColor,
        fontStyle
      };
    })
  );
}
function dimColor(color) {
  const hexMatch = color.match(/#([0-9a-f]{3})([0-9a-f]{3})?([0-9a-f]{2})?/);
  if (hexMatch) {
    if (hexMatch[3]) {
      const alpha = Math.round(Number.parseInt(hexMatch[3], 16) / 2).toString(16).padStart(2, "0");
      return `#${hexMatch[1]}${hexMatch[2]}${alpha}`;
    } else if (hexMatch[2]) {
      return `#${hexMatch[1]}${hexMatch[2]}80`;
    } else {
      return `#${Array.from(hexMatch[1]).map((x) => `${x}${x}`).join("")}80`;
    }
  }
  const cssVarMatch = color.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);
  if (cssVarMatch)
    return `var(${cssVarMatch[1]}-dim)`;
  return color;
}
function codeToTokensBase(internal, code, options = {}) {
  const {
    lang = "text",
    theme: themeName = internal.getLoadedThemes()[0]
  } = options;
  if (isPlainLang(lang) || isNoneTheme(themeName))
    return splitLines(code).map((line) => [{ content: line[0], offset: line[1] }]);
  const { theme, colorMap } = internal.setTheme(themeName);
  if (lang === "ansi")
    return tokenizeAnsiWithTheme(theme, code, options);
  const _grammar = internal.getLanguage(lang);
  if (options.grammarState) {
    if (options.grammarState.lang !== _grammar.name) {
      throw new ShikiError(`Grammar state language "${options.grammarState.lang}" does not match highlight language "${_grammar.name}"`);
    }
    if (!options.grammarState.themes.includes(theme.name)) {
      throw new ShikiError(`Grammar state themes "${options.grammarState.themes}" do not contain highlight theme "${theme.name}"`);
    }
  }
  return tokenizeWithTheme(code, _grammar, theme, colorMap, options);
}
function getLastGrammarState(...args) {
  if (args.length === 2) {
    return getLastGrammarStateFromMap(args[1]);
  }
  const [internal, code, options = {}] = args;
  const {
    lang = "text",
    theme: themeName = internal.getLoadedThemes()[0]
  } = options;
  if (isPlainLang(lang) || isNoneTheme(themeName))
    throw new ShikiError("Plain language does not have grammar state");
  if (lang === "ansi")
    throw new ShikiError("ANSI language does not have grammar state");
  const { theme, colorMap } = internal.setTheme(themeName);
  const _grammar = internal.getLanguage(lang);
  return new GrammarState(
    _tokenizeWithTheme(code, _grammar, theme, colorMap, options).stateStack,
    _grammar.name,
    theme.name
  );
}
function tokenizeWithTheme(code, grammar, theme, colorMap, options) {
  const result = _tokenizeWithTheme(code, grammar, theme, colorMap, options);
  const grammarState = new GrammarState(
    _tokenizeWithTheme(code, grammar, theme, colorMap, options).stateStack,
    grammar.name,
    theme.name
  );
  setLastGrammarStateToMap(result.tokens, grammarState);
  return result.tokens;
}
function _tokenizeWithTheme(code, grammar, theme, colorMap, options) {
  const colorReplacements = resolveColorReplacements(theme, options);
  const {
    tokenizeMaxLineLength = 0,
    tokenizeTimeLimit = 500
  } = options;
  const lines = splitLines(code);
  let stateStack = options.grammarState ? getGrammarStack(options.grammarState, theme.name) ?? INITIAL : options.grammarContextCode != null ? _tokenizeWithTheme(
    options.grammarContextCode,
    grammar,
    theme,
    colorMap,
    {
      ...options,
      grammarState: void 0,
      grammarContextCode: void 0
    }
  ).stateStack : INITIAL;
  let actual = [];
  const final = [];
  for (let i = 0, len = lines.length; i < len; i++) {
    const [line, lineOffset] = lines[i];
    if (line === "") {
      actual = [];
      final.push([]);
      continue;
    }
    if (tokenizeMaxLineLength > 0 && line.length >= tokenizeMaxLineLength) {
      actual = [];
      final.push([{
        content: line,
        offset: lineOffset,
        color: "",
        fontStyle: 0
      }]);
      continue;
    }
    let resultWithScopes;
    let tokensWithScopes;
    let tokensWithScopesIndex;
    if (options.includeExplanation) {
      resultWithScopes = grammar.tokenizeLine(line, stateStack, tokenizeTimeLimit);
      tokensWithScopes = resultWithScopes.tokens;
      tokensWithScopesIndex = 0;
    }
    const result = grammar.tokenizeLine2(line, stateStack, tokenizeTimeLimit);
    const tokensLength = result.tokens.length / 2;
    for (let j = 0; j < tokensLength; j++) {
      const startIndex = result.tokens[2 * j];
      const nextStartIndex = j + 1 < tokensLength ? result.tokens[2 * j + 2] : line.length;
      if (startIndex === nextStartIndex)
        continue;
      const metadata = result.tokens[2 * j + 1];
      const color = applyColorReplacements(
        colorMap[EncodedTokenMetadata.getForeground(metadata)],
        colorReplacements
      );
      const fontStyle = EncodedTokenMetadata.getFontStyle(metadata);
      const token = {
        content: line.substring(startIndex, nextStartIndex),
        offset: lineOffset + startIndex,
        color,
        fontStyle
      };
      if (options.includeExplanation) {
        const themeSettingsSelectors = [];
        if (options.includeExplanation !== "scopeName") {
          for (const setting of theme.settings) {
            let selectors;
            switch (typeof setting.scope) {
              case "string":
                selectors = setting.scope.split(/,/).map((scope) => scope.trim());
                break;
              case "object":
                selectors = setting.scope;
                break;
              default:
                continue;
            }
            themeSettingsSelectors.push({
              settings: setting,
              selectors: selectors.map((selector) => selector.split(/ /))
            });
          }
        }
        token.explanation = [];
        let offset = 0;
        while (startIndex + offset < nextStartIndex) {
          const tokenWithScopes = tokensWithScopes[tokensWithScopesIndex];
          const tokenWithScopesText = line.substring(
            tokenWithScopes.startIndex,
            tokenWithScopes.endIndex
          );
          offset += tokenWithScopesText.length;
          token.explanation.push({
            content: tokenWithScopesText,
            scopes: options.includeExplanation === "scopeName" ? explainThemeScopesNameOnly(
              tokenWithScopes.scopes
            ) : explainThemeScopesFull(
              themeSettingsSelectors,
              tokenWithScopes.scopes
            )
          });
          tokensWithScopesIndex += 1;
        }
      }
      actual.push(token);
    }
    final.push(actual);
    actual = [];
    stateStack = result.ruleStack;
  }
  return {
    tokens: final,
    stateStack
  };
}
function explainThemeScopesNameOnly(scopes) {
  return scopes.map((scope) => ({ scopeName: scope }));
}
function explainThemeScopesFull(themeSelectors, scopes) {
  const result = [];
  for (let i = 0, len = scopes.length; i < len; i++) {
    const scope = scopes[i];
    result[i] = {
      scopeName: scope,
      themeMatches: explainThemeScope(themeSelectors, scope, scopes.slice(0, i))
    };
  }
  return result;
}
function matchesOne(selector, scope) {
  return selector === scope || scope.substring(0, selector.length) === selector && scope[selector.length] === ".";
}
function matches(selectors, scope, parentScopes) {
  if (!matchesOne(selectors[selectors.length - 1], scope))
    return false;
  let selectorParentIndex = selectors.length - 2;
  let parentIndex = parentScopes.length - 1;
  while (selectorParentIndex >= 0 && parentIndex >= 0) {
    if (matchesOne(selectors[selectorParentIndex], parentScopes[parentIndex]))
      selectorParentIndex -= 1;
    parentIndex -= 1;
  }
  if (selectorParentIndex === -1)
    return true;
  return false;
}
function explainThemeScope(themeSettingsSelectors, scope, parentScopes) {
  const result = [];
  for (const { selectors, settings } of themeSettingsSelectors) {
    for (const selectorPieces of selectors) {
      if (matches(selectorPieces, scope, parentScopes)) {
        result.push(settings);
        break;
      }
    }
  }
  return result;
}
function codeToTokensWithThemes(internal, code, options) {
  const themes = Object.entries(options.themes).filter((i) => i[1]).map((i) => ({ color: i[0], theme: i[1] }));
  const themedTokens = themes.map((t) => {
    const tokens2 = codeToTokensBase(internal, code, {
      ...options,
      theme: t.theme
    });
    const state = getLastGrammarStateFromMap(tokens2);
    const theme = typeof t.theme === "string" ? t.theme : t.theme.name;
    return {
      tokens: tokens2,
      state,
      theme
    };
  });
  const tokens = syncThemesTokenization(
    ...themedTokens.map((i) => i.tokens)
  );
  const mergedTokens = tokens[0].map(
    (line, lineIdx) => line.map((_token, tokenIdx) => {
      const mergedToken = {
        content: _token.content,
        variants: {},
        offset: _token.offset
      };
      if ("includeExplanation" in options && options.includeExplanation) {
        mergedToken.explanation = _token.explanation;
      }
      tokens.forEach((t, themeIdx) => {
        const {
          content: _,
          explanation: __,
          offset: ___,
          ...styles
        } = t[lineIdx][tokenIdx];
        mergedToken.variants[themes[themeIdx].color] = styles;
      });
      return mergedToken;
    })
  );
  const mergedGrammarState = themedTokens[0].state ? new GrammarState(
    Object.fromEntries(themedTokens.map((s) => {
      var _a;
      return [s.theme, (_a = s.state) == null ? void 0 : _a.getInternalStack(s.theme)];
    })),
    themedTokens[0].state.lang
  ) : void 0;
  if (mergedGrammarState)
    setLastGrammarStateToMap(mergedTokens, mergedGrammarState);
  return mergedTokens;
}
function syncThemesTokenization(...themes) {
  const outThemes = themes.map(() => []);
  const count = themes.length;
  for (let i = 0; i < themes[0].length; i++) {
    const lines = themes.map((t) => t[i]);
    const outLines = outThemes.map(() => []);
    outThemes.forEach((t, i2) => t.push(outLines[i2]));
    const indexes = lines.map(() => 0);
    const current = lines.map((l) => l[0]);
    while (current.every((t) => t)) {
      const minLength = Math.min(...current.map((t) => t.content.length));
      for (let n = 0; n < count; n++) {
        const token = current[n];
        if (token.content.length === minLength) {
          outLines[n].push(token);
          indexes[n] += 1;
          current[n] = lines[n][indexes[n]];
        } else {
          outLines[n].push({
            ...token,
            content: token.content.slice(0, minLength)
          });
          current[n] = {
            ...token,
            content: token.content.slice(minLength),
            offset: token.offset + minLength
          };
        }
      }
    }
  }
  return outThemes;
}
function codeToTokens(internal, code, options) {
  let bg;
  let fg;
  let tokens;
  let themeName;
  let rootStyle;
  let grammarState;
  if ("themes" in options) {
    const {
      defaultColor = "light",
      cssVariablePrefix = "--shiki-"
    } = options;
    const themes = Object.entries(options.themes).filter((i) => i[1]).map((i) => ({ color: i[0], theme: i[1] })).sort((a, b) => a.color === defaultColor ? -1 : b.color === defaultColor ? 1 : 0);
    if (themes.length === 0)
      throw new ShikiError("`themes` option must not be empty");
    const themeTokens = codeToTokensWithThemes(
      internal,
      code,
      options
    );
    grammarState = getLastGrammarStateFromMap(themeTokens);
    if (defaultColor && !themes.find((t) => t.color === defaultColor))
      throw new ShikiError(`\`themes\` option must contain the defaultColor key \`${defaultColor}\``);
    const themeRegs = themes.map((t) => internal.getTheme(t.theme));
    const themesOrder = themes.map((t) => t.color);
    tokens = themeTokens.map((line) => line.map((token) => flatTokenVariants(token, themesOrder, cssVariablePrefix, defaultColor)));
    if (grammarState)
      setLastGrammarStateToMap(tokens, grammarState);
    const themeColorReplacements = themes.map((t) => resolveColorReplacements(t.theme, options));
    fg = themes.map((t, idx) => (idx === 0 && defaultColor ? "" : `${cssVariablePrefix + t.color}:`) + (applyColorReplacements(themeRegs[idx].fg, themeColorReplacements[idx]) || "inherit")).join(";");
    bg = themes.map((t, idx) => (idx === 0 && defaultColor ? "" : `${cssVariablePrefix + t.color}-bg:`) + (applyColorReplacements(themeRegs[idx].bg, themeColorReplacements[idx]) || "inherit")).join(";");
    themeName = `shiki-themes ${themeRegs.map((t) => t.name).join(" ")}`;
    rootStyle = defaultColor ? void 0 : [fg, bg].join(";");
  } else if ("theme" in options) {
    const colorReplacements = resolveColorReplacements(options.theme, options);
    tokens = codeToTokensBase(
      internal,
      code,
      options
    );
    const _theme = internal.getTheme(options.theme);
    bg = applyColorReplacements(_theme.bg, colorReplacements);
    fg = applyColorReplacements(_theme.fg, colorReplacements);
    themeName = _theme.name;
    grammarState = getLastGrammarStateFromMap(tokens);
  } else {
    throw new ShikiError("Invalid options, either `theme` or `themes` must be provided");
  }
  return {
    tokens,
    fg,
    bg,
    themeName,
    rootStyle,
    grammarState
  };
}
function codeToHast(internal, code, options, transformerContext = {
  meta: {},
  options,
  codeToHast: (_code, _options) => codeToHast(internal, _code, _options),
  codeToTokens: (_code, _options) => codeToTokens(internal, _code, _options)
}) {
  var _a, _b;
  let input = code;
  for (const transformer of getTransformers(options))
    input = ((_a = transformer.preprocess) == null ? void 0 : _a.call(transformerContext, input, options)) || input;
  let {
    tokens,
    fg,
    bg,
    themeName,
    rootStyle,
    grammarState
  } = codeToTokens(internal, input, options);
  const {
    mergeWhitespaces = true
  } = options;
  if (mergeWhitespaces === true)
    tokens = mergeWhitespaceTokens(tokens);
  else if (mergeWhitespaces === "never")
    tokens = splitWhitespaceTokens(tokens);
  const contextSource = {
    ...transformerContext,
    get source() {
      return input;
    }
  };
  for (const transformer of getTransformers(options))
    tokens = ((_b = transformer.tokens) == null ? void 0 : _b.call(contextSource, tokens)) || tokens;
  return tokensToHast(
    tokens,
    {
      ...options,
      fg,
      bg,
      themeName,
      rootStyle
    },
    contextSource,
    grammarState
  );
}
function tokensToHast(tokens, options, transformerContext, grammarState = getLastGrammarStateFromMap(tokens)) {
  var _a, _b, _c;
  const transformers = getTransformers(options);
  const lines = [];
  const root = {
    type: "root",
    children: []
  };
  const {
    structure = "classic",
    tabindex = "0"
  } = options;
  let preNode = {
    type: "element",
    tagName: "pre",
    properties: {
      class: `shiki ${options.themeName || ""}`,
      style: options.rootStyle || `background-color:${options.bg};color:${options.fg}`,
      ...tabindex !== false && tabindex != null ? {
        tabindex: tabindex.toString()
      } : {},
      ...Object.fromEntries(
        Array.from(
          Object.entries(options.meta || {})
        ).filter(([key]) => !key.startsWith("_"))
      )
    },
    children: []
  };
  let codeNode = {
    type: "element",
    tagName: "code",
    properties: {},
    children: lines
  };
  const lineNodes = [];
  const context = {
    ...transformerContext,
    structure,
    addClassToHast,
    get source() {
      return transformerContext.source;
    },
    get tokens() {
      return tokens;
    },
    get options() {
      return options;
    },
    get root() {
      return root;
    },
    get pre() {
      return preNode;
    },
    get code() {
      return codeNode;
    },
    get lines() {
      return lineNodes;
    }
  };
  tokens.forEach((line, idx) => {
    var _a2, _b2;
    if (idx) {
      if (structure === "inline")
        root.children.push({ type: "element", tagName: "br", properties: {}, children: [] });
      else if (structure === "classic")
        lines.push({ type: "text", value: "\n" });
    }
    let lineNode = {
      type: "element",
      tagName: "span",
      properties: { class: "line" },
      children: []
    };
    let col = 0;
    for (const token of line) {
      let tokenNode = {
        type: "element",
        tagName: "span",
        properties: {
          ...token.htmlAttrs
        },
        children: [{ type: "text", value: token.content }]
      };
      if (typeof token.htmlStyle === "string")
        warnDeprecated("`htmlStyle` as a string is deprecated. Use an object instead.");
      const style = stringifyTokenStyle(token.htmlStyle || getTokenStyleObject(token));
      if (style)
        tokenNode.properties.style = style;
      for (const transformer of transformers)
        tokenNode = ((_a2 = transformer == null ? void 0 : transformer.span) == null ? void 0 : _a2.call(context, tokenNode, idx + 1, col, lineNode, token)) || tokenNode;
      if (structure === "inline")
        root.children.push(tokenNode);
      else if (structure === "classic")
        lineNode.children.push(tokenNode);
      col += token.content.length;
    }
    if (structure === "classic") {
      for (const transformer of transformers)
        lineNode = ((_b2 = transformer == null ? void 0 : transformer.line) == null ? void 0 : _b2.call(context, lineNode, idx + 1)) || lineNode;
      lineNodes.push(lineNode);
      lines.push(lineNode);
    }
  });
  if (structure === "classic") {
    for (const transformer of transformers)
      codeNode = ((_a = transformer == null ? void 0 : transformer.code) == null ? void 0 : _a.call(context, codeNode)) || codeNode;
    preNode.children.push(codeNode);
    for (const transformer of transformers)
      preNode = ((_b = transformer == null ? void 0 : transformer.pre) == null ? void 0 : _b.call(context, preNode)) || preNode;
    root.children.push(preNode);
  }
  let result = root;
  for (const transformer of transformers)
    result = ((_c = transformer == null ? void 0 : transformer.root) == null ? void 0 : _c.call(context, result)) || result;
  if (grammarState)
    setLastGrammarStateToMap(result, grammarState);
  return result;
}
function mergeWhitespaceTokens(tokens) {
  return tokens.map((line) => {
    const newLine = [];
    let carryOnContent = "";
    let firstOffset = 0;
    line.forEach((token, idx) => {
      const isUnderline = token.fontStyle && token.fontStyle & FontStyle.Underline;
      const couldMerge = !isUnderline;
      if (couldMerge && token.content.match(/^\s+$/) && line[idx + 1]) {
        if (!firstOffset)
          firstOffset = token.offset;
        carryOnContent += token.content;
      } else {
        if (carryOnContent) {
          if (couldMerge) {
            newLine.push({
              ...token,
              offset: firstOffset,
              content: carryOnContent + token.content
            });
          } else {
            newLine.push(
              {
                content: carryOnContent,
                offset: firstOffset
              },
              token
            );
          }
          firstOffset = 0;
          carryOnContent = "";
        } else {
          newLine.push(token);
        }
      }
    });
    return newLine;
  });
}
function splitWhitespaceTokens(tokens) {
  return tokens.map((line) => {
    return line.flatMap((token) => {
      if (token.content.match(/^\s+$/))
        return token;
      const match = token.content.match(/^(\s*)(.*?)(\s*)$/);
      if (!match)
        return token;
      const [, leading, content, trailing] = match;
      if (!leading && !trailing)
        return token;
      const expanded = [{
        ...token,
        offset: token.offset + leading.length,
        content
      }];
      if (leading) {
        expanded.unshift({
          content: leading,
          offset: token.offset
        });
      }
      if (trailing) {
        expanded.push({
          content: trailing,
          offset: token.offset + leading.length + content.length
        });
      }
      return expanded;
    });
  });
}
function codeToHtml(internal, code, options) {
  var _a;
  const context = {
    meta: {},
    options,
    codeToHast: (_code, _options) => codeToHast(internal, _code, _options),
    codeToTokens: (_code, _options) => codeToTokens(internal, _code, _options)
  };
  let result = toHtml(codeToHast(internal, code, options, context));
  for (const transformer of getTransformers(options))
    result = ((_a = transformer.postprocess) == null ? void 0 : _a.call(context, result, options)) || result;
  return result;
}
var VSCODE_FALLBACK_EDITOR_FG = { light: "#333333", dark: "#bbbbbb" };
var VSCODE_FALLBACK_EDITOR_BG = { light: "#fffffe", dark: "#1e1e1e" };
var RESOLVED_KEY = "__shiki_resolved";
function normalizeTheme(rawTheme) {
  var _a, _b, _c, _d, _e2;
  if (rawTheme == null ? void 0 : rawTheme[RESOLVED_KEY])
    return rawTheme;
  const theme = {
    ...rawTheme
  };
  if (theme.tokenColors && !theme.settings) {
    theme.settings = theme.tokenColors;
    delete theme.tokenColors;
  }
  theme.type || (theme.type = "dark");
  theme.colorReplacements = { ...theme.colorReplacements };
  theme.settings || (theme.settings = []);
  let { bg, fg } = theme;
  if (!bg || !fg) {
    const globalSetting = theme.settings ? theme.settings.find((s) => !s.name && !s.scope) : void 0;
    if ((_a = globalSetting == null ? void 0 : globalSetting.settings) == null ? void 0 : _a.foreground)
      fg = globalSetting.settings.foreground;
    if ((_b = globalSetting == null ? void 0 : globalSetting.settings) == null ? void 0 : _b.background)
      bg = globalSetting.settings.background;
    if (!fg && ((_c = theme == null ? void 0 : theme.colors) == null ? void 0 : _c["editor.foreground"]))
      fg = theme.colors["editor.foreground"];
    if (!bg && ((_d = theme == null ? void 0 : theme.colors) == null ? void 0 : _d["editor.background"]))
      bg = theme.colors["editor.background"];
    if (!fg)
      fg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_FG.light : VSCODE_FALLBACK_EDITOR_FG.dark;
    if (!bg)
      bg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_BG.light : VSCODE_FALLBACK_EDITOR_BG.dark;
    theme.fg = fg;
    theme.bg = bg;
  }
  if (!(theme.settings[0] && theme.settings[0].settings && !theme.settings[0].scope)) {
    theme.settings.unshift({
      settings: {
        foreground: theme.fg,
        background: theme.bg
      }
    });
  }
  let replacementCount = 0;
  const replacementMap = /* @__PURE__ */ new Map();
  function getReplacementColor(value) {
    var _a2;
    if (replacementMap.has(value))
      return replacementMap.get(value);
    replacementCount += 1;
    const hex = `#${replacementCount.toString(16).padStart(8, "0").toLowerCase()}`;
    if ((_a2 = theme.colorReplacements) == null ? void 0 : _a2[`#${hex}`])
      return getReplacementColor(value);
    replacementMap.set(value, hex);
    return hex;
  }
  theme.settings = theme.settings.map((setting) => {
    var _a2, _b2;
    const replaceFg = ((_a2 = setting.settings) == null ? void 0 : _a2.foreground) && !setting.settings.foreground.startsWith("#");
    const replaceBg = ((_b2 = setting.settings) == null ? void 0 : _b2.background) && !setting.settings.background.startsWith("#");
    if (!replaceFg && !replaceBg)
      return setting;
    const clone = {
      ...setting,
      settings: {
        ...setting.settings
      }
    };
    if (replaceFg) {
      const replacement = getReplacementColor(setting.settings.foreground);
      theme.colorReplacements[replacement] = setting.settings.foreground;
      clone.settings.foreground = replacement;
    }
    if (replaceBg) {
      const replacement = getReplacementColor(setting.settings.background);
      theme.colorReplacements[replacement] = setting.settings.background;
      clone.settings.background = replacement;
    }
    return clone;
  });
  for (const key of Object.keys(theme.colors || {})) {
    if (key === "editor.foreground" || key === "editor.background" || key.startsWith("terminal.ansi")) {
      if (!((_e2 = theme.colors[key]) == null ? void 0 : _e2.startsWith("#"))) {
        const replacement = getReplacementColor(theme.colors[key]);
        theme.colorReplacements[replacement] = theme.colors[key];
        theme.colors[key] = replacement;
      }
    }
  }
  Object.defineProperty(theme, RESOLVED_KEY, {
    enumerable: false,
    writable: false,
    value: true
  });
  return theme;
}
async function resolveLangs(langs) {
  return Array.from(new Set((await Promise.all(
    langs.filter((l) => !isSpecialLang(l)).map(async (lang) => await normalizeGetter(lang).then((r3) => Array.isArray(r3) ? r3 : [r3]))
  )).flat()));
}
async function resolveThemes(themes) {
  const resolved = await Promise.all(
    themes.map(
      async (theme) => isSpecialTheme(theme) ? null : normalizeTheme(await normalizeGetter(theme))
    )
  );
  return resolved.filter((i) => !!i);
}
var ShikiError3 = class extends Error {
  constructor(message) {
    super(message);
    this.name = "ShikiError";
  }
};
var Registry2 = class extends Registry {
  constructor(_resolver, _themes, _langs, _alias = {}) {
    super(_resolver);
    __publicField(this, "_resolvedThemes", /* @__PURE__ */ new Map());
    __publicField(this, "_resolvedGrammars", /* @__PURE__ */ new Map());
    __publicField(this, "_langMap", /* @__PURE__ */ new Map());
    __publicField(this, "_langGraph", /* @__PURE__ */ new Map());
    __publicField(this, "_textmateThemeCache", /* @__PURE__ */ new WeakMap());
    __publicField(this, "_loadedThemesCache", null);
    __publicField(this, "_loadedLanguagesCache", null);
    this._resolver = _resolver;
    this._themes = _themes;
    this._langs = _langs;
    this._alias = _alias;
    this._themes.map((t) => this.loadTheme(t));
    this.loadLanguages(this._langs);
  }
  getTheme(theme) {
    if (typeof theme === "string")
      return this._resolvedThemes.get(theme);
    else
      return this.loadTheme(theme);
  }
  loadTheme(theme) {
    const _theme = normalizeTheme(theme);
    if (_theme.name) {
      this._resolvedThemes.set(_theme.name, _theme);
      this._loadedThemesCache = null;
    }
    return _theme;
  }
  getLoadedThemes() {
    if (!this._loadedThemesCache)
      this._loadedThemesCache = [...this._resolvedThemes.keys()];
    return this._loadedThemesCache;
  }
  // Override and re-implement this method to cache the textmate themes as `TextMateTheme.createFromRawTheme`
  // is expensive. Themes can switch often especially for dual-theme support.
  //
  // The parent class also accepts `colorMap` as the second parameter, but since we don't use that,
  // we omit here so it's easier to cache the themes.
  setTheme(theme) {
    let textmateTheme = this._textmateThemeCache.get(theme);
    if (!textmateTheme) {
      textmateTheme = Theme.createFromRawTheme(theme);
      this._textmateThemeCache.set(theme, textmateTheme);
    }
    this._syncRegistry.setTheme(textmateTheme);
  }
  getGrammar(name) {
    if (this._alias[name]) {
      const resolved = /* @__PURE__ */ new Set([name]);
      while (this._alias[name]) {
        name = this._alias[name];
        if (resolved.has(name))
          throw new ShikiError3(`Circular alias \`${Array.from(resolved).join(" -> ")} -> ${name}\``);
        resolved.add(name);
      }
    }
    return this._resolvedGrammars.get(name);
  }
  loadLanguage(lang) {
    var _a, _b, _c, _d;
    if (this.getGrammar(lang.name))
      return;
    const embeddedLazilyBy = new Set(
      [...this._langMap.values()].filter((i) => {
        var _a2;
        return (_a2 = i.embeddedLangsLazy) == null ? void 0 : _a2.includes(lang.name);
      })
    );
    this._resolver.addLanguage(lang);
    const grammarConfig = {
      balancedBracketSelectors: lang.balancedBracketSelectors || ["*"],
      unbalancedBracketSelectors: lang.unbalancedBracketSelectors || []
    };
    this._syncRegistry._rawGrammars.set(lang.scopeName, lang);
    const g = this.loadGrammarWithConfiguration(lang.scopeName, 1, grammarConfig);
    g.name = lang.name;
    this._resolvedGrammars.set(lang.name, g);
    if (lang.aliases) {
      lang.aliases.forEach((alias) => {
        this._alias[alias] = lang.name;
      });
    }
    this._loadedLanguagesCache = null;
    if (embeddedLazilyBy.size) {
      for (const e of embeddedLazilyBy) {
        this._resolvedGrammars.delete(e.name);
        this._loadedLanguagesCache = null;
        (_b = (_a = this._syncRegistry) == null ? void 0 : _a._injectionGrammars) == null ? void 0 : _b.delete(e.scopeName);
        (_d = (_c = this._syncRegistry) == null ? void 0 : _c._grammars) == null ? void 0 : _d.delete(e.scopeName);
        this.loadLanguage(this._langMap.get(e.name));
      }
    }
  }
  dispose() {
    super.dispose();
    this._resolvedThemes.clear();
    this._resolvedGrammars.clear();
    this._langMap.clear();
    this._langGraph.clear();
    this._loadedThemesCache = null;
  }
  loadLanguages(langs) {
    for (const lang of langs)
      this.resolveEmbeddedLanguages(lang);
    const langsGraphArray = Array.from(this._langGraph.entries());
    const missingLangs = langsGraphArray.filter(([_, lang]) => !lang);
    if (missingLangs.length) {
      const dependents = langsGraphArray.filter(([_, lang]) => {
        var _a;
        return lang && ((_a = lang.embeddedLangs) == null ? void 0 : _a.some((l) => missingLangs.map(([name]) => name).includes(l)));
      }).filter((lang) => !missingLangs.includes(lang));
      throw new ShikiError3(`Missing languages ${missingLangs.map(([name]) => `\`${name}\``).join(", ")}, required by ${dependents.map(([name]) => `\`${name}\``).join(", ")}`);
    }
    for (const [_, lang] of langsGraphArray)
      this._resolver.addLanguage(lang);
    for (const [_, lang] of langsGraphArray)
      this.loadLanguage(lang);
  }
  getLoadedLanguages() {
    if (!this._loadedLanguagesCache) {
      this._loadedLanguagesCache = [
        .../* @__PURE__ */ new Set([...this._resolvedGrammars.keys(), ...Object.keys(this._alias)])
      ];
    }
    return this._loadedLanguagesCache;
  }
  resolveEmbeddedLanguages(lang) {
    this._langMap.set(lang.name, lang);
    this._langGraph.set(lang.name, lang);
    if (lang.embeddedLangs) {
      for (const embeddedLang of lang.embeddedLangs)
        this._langGraph.set(embeddedLang, this._langMap.get(embeddedLang));
    }
  }
};
var Resolver = class {
  constructor(engine, langs) {
    __publicField(this, "_langs", /* @__PURE__ */ new Map());
    __publicField(this, "_scopeToLang", /* @__PURE__ */ new Map());
    __publicField(this, "_injections", /* @__PURE__ */ new Map());
    __publicField(this, "_onigLib");
    this._onigLib = {
      createOnigScanner: (patterns) => engine.createScanner(patterns),
      createOnigString: (s) => engine.createString(s)
    };
    langs.forEach((i) => this.addLanguage(i));
  }
  get onigLib() {
    return this._onigLib;
  }
  getLangRegistration(langIdOrAlias) {
    return this._langs.get(langIdOrAlias);
  }
  loadGrammar(scopeName) {
    return this._scopeToLang.get(scopeName);
  }
  addLanguage(l) {
    this._langs.set(l.name, l);
    if (l.aliases) {
      l.aliases.forEach((a) => {
        this._langs.set(a, l);
      });
    }
    this._scopeToLang.set(l.scopeName, l);
    if (l.injectTo) {
      l.injectTo.forEach((i) => {
        if (!this._injections.get(i))
          this._injections.set(i, []);
        this._injections.get(i).push(l.scopeName);
      });
    }
  }
  getInjections(scopeName) {
    const scopeParts = scopeName.split(".");
    let injections = [];
    for (let i = 1; i <= scopeParts.length; i++) {
      const subScopeName = scopeParts.slice(0, i).join(".");
      injections = [...injections, ...this._injections.get(subScopeName) || []];
    }
    return injections;
  }
};
var instancesCount = 0;
function createShikiInternalSync(options) {
  instancesCount += 1;
  if (options.warnings !== false && instancesCount >= 10 && instancesCount % 10 === 0)
    console.warn(`[Shiki] ${instancesCount} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);
  let isDisposed = false;
  if (!options.engine)
    throw new ShikiError3("`engine` option is required for synchronous mode");
  const langs = (options.langs || []).flat(1);
  const themes = (options.themes || []).flat(1).map(normalizeTheme);
  const resolver = new Resolver(options.engine, langs);
  const _registry = new Registry2(resolver, themes, langs, options.langAlias);
  let _lastTheme;
  function getLanguage(name) {
    ensureNotDisposed();
    const _lang = _registry.getGrammar(typeof name === "string" ? name : name.name);
    if (!_lang)
      throw new ShikiError3(`Language \`${name}\` not found, you may need to load it first`);
    return _lang;
  }
  function getTheme(name) {
    if (name === "none")
      return { bg: "", fg: "", name: "none", settings: [], type: "dark" };
    ensureNotDisposed();
    const _theme = _registry.getTheme(name);
    if (!_theme)
      throw new ShikiError3(`Theme \`${name}\` not found, you may need to load it first`);
    return _theme;
  }
  function setTheme(name) {
    ensureNotDisposed();
    const theme = getTheme(name);
    if (_lastTheme !== name) {
      _registry.setTheme(theme);
      _lastTheme = name;
    }
    const colorMap = _registry.getColorMap();
    return {
      theme,
      colorMap
    };
  }
  function getLoadedThemes() {
    ensureNotDisposed();
    return _registry.getLoadedThemes();
  }
  function getLoadedLanguages() {
    ensureNotDisposed();
    return _registry.getLoadedLanguages();
  }
  function loadLanguageSync(...langs2) {
    ensureNotDisposed();
    _registry.loadLanguages(langs2.flat(1));
  }
  async function loadLanguage(...langs2) {
    return loadLanguageSync(await resolveLangs(langs2));
  }
  function loadThemeSync(...themes2) {
    ensureNotDisposed();
    for (const theme of themes2.flat(1)) {
      _registry.loadTheme(theme);
    }
  }
  async function loadTheme(...themes2) {
    ensureNotDisposed();
    return loadThemeSync(await resolveThemes(themes2));
  }
  function ensureNotDisposed() {
    if (isDisposed)
      throw new ShikiError3("Shiki instance has been disposed");
  }
  function dispose() {
    if (isDisposed)
      return;
    isDisposed = true;
    _registry.dispose();
    instancesCount -= 1;
  }
  return {
    setTheme,
    getTheme,
    getLanguage,
    getLoadedThemes,
    getLoadedLanguages,
    loadLanguage,
    loadLanguageSync,
    loadTheme,
    loadThemeSync,
    dispose,
    [Symbol.dispose]: dispose
  };
}
async function createShikiInternal(options) {
  if (options.loadWasm) {
    warnDeprecated("`loadWasm` option is deprecated. Use `engine: createOnigurumaEngine(loadWasm)` instead.");
  }
  if (!options.engine) {
    warnDeprecated("`engine` option is required. Use `createOnigurumaEngine` or `createJavaScriptRegexEngine` to create an engine.");
  }
  const [
    themes,
    langs,
    engine
  ] = await Promise.all([
    resolveThemes(options.themes || []),
    resolveLangs(options.langs || []),
    options.engine || createOnigurumaEngine(options.loadWasm || getDefaultWasmLoader())
  ]);
  return createShikiInternalSync({
    ...options,
    themes,
    langs,
    engine
  });
}
async function createHighlighterCore(options) {
  const internal = await createShikiInternal(options);
  return {
    getLastGrammarState: (...args) => getLastGrammarState(internal, ...args),
    codeToTokensBase: (code, options2) => codeToTokensBase(internal, code, options2),
    codeToTokensWithThemes: (code, options2) => codeToTokensWithThemes(internal, code, options2),
    codeToTokens: (code, options2) => codeToTokens(internal, code, options2),
    codeToHast: (code, options2) => codeToHast(internal, code, options2),
    codeToHtml: (code, options2) => codeToHtml(internal, code, options2),
    getBundledLanguages: () => ({}),
    getBundledThemes: () => ({}),
    ...internal,
    getInternalContext: () => internal
  };
}
function makeSingletonHighlighterCore(createHighlighter2) {
  let _shiki;
  async function getSingletonHighlighterCore2(options) {
    if (!_shiki) {
      _shiki = createHighlighter2({
        ...options,
        themes: options.themes || [],
        langs: options.langs || []
      });
      return _shiki;
    } else {
      const s = await _shiki;
      await Promise.all([
        s.loadTheme(...options.themes || []),
        s.loadLanguage(...options.langs || [])
      ]);
      return s;
    }
  }
  return getSingletonHighlighterCore2;
}
var getSingletonHighlighterCore = makeSingletonHighlighterCore(createHighlighterCore);
function createdBundledHighlighter(arg1, arg2, arg3) {
  let bundledLanguages2;
  let bundledThemes2;
  let engine;
  if (arg2) {
    warnDeprecated("`createdBundledHighlighter` signature with `bundledLanguages` and `bundledThemes` is deprecated. Use the options object signature instead.");
    bundledLanguages2 = arg1;
    bundledThemes2 = arg2;
    engine = () => createOnigurumaEngine2(arg3);
  } else {
    const options = arg1;
    bundledLanguages2 = options.langs;
    bundledThemes2 = options.themes;
    engine = options.engine;
  }
  async function createHighlighter2(options) {
    function resolveLang(lang) {
      if (typeof lang === "string") {
        if (isSpecialLang(lang))
          return [];
        const bundle = bundledLanguages2[lang];
        if (!bundle)
          throw new ShikiError(`Language \`${lang}\` is not included in this bundle. You may want to load it from external source.`);
        return bundle;
      }
      return lang;
    }
    function resolveTheme(theme) {
      if (isSpecialTheme(theme))
        return "none";
      if (typeof theme === "string") {
        const bundle = bundledThemes2[theme];
        if (!bundle)
          throw new ShikiError(`Theme \`${theme}\` is not included in this bundle. You may want to load it from external source.`);
        return bundle;
      }
      return theme;
    }
    const _themes = (options.themes ?? []).map((i) => resolveTheme(i));
    const langs = (options.langs ?? []).map((i) => resolveLang(i));
    const core = await createHighlighterCore({
      engine: options.engine ?? engine(),
      ...options,
      themes: _themes,
      langs
    });
    return {
      ...core,
      loadLanguage(...langs2) {
        return core.loadLanguage(...langs2.map(resolveLang));
      },
      loadTheme(...themes) {
        return core.loadTheme(...themes.map(resolveTheme));
      },
      getBundledLanguages() {
        return bundledLanguages2;
      },
      getBundledThemes() {
        return bundledThemes2;
      }
    };
  }
  return createHighlighter2;
}
function makeSingletonHighlighter(createHighlighter2) {
  let _shiki;
  async function getSingletonHighlighter2(options = {}) {
    if (!_shiki) {
      _shiki = createHighlighter2({
        ...options,
        themes: options.themes || [],
        langs: options.langs || []
      });
      return _shiki;
    } else {
      const s = await _shiki;
      await Promise.all([
        s.loadTheme(...options.themes || []),
        s.loadLanguage(...options.langs || [])
      ]);
      return s;
    }
  }
  return getSingletonHighlighter2;
}
function createSingletonShorthands(createHighlighter2, config) {
  const getSingletonHighlighter2 = makeSingletonHighlighter(createHighlighter2);
  async function get(code, options) {
    var _a;
    const shiki = await getSingletonHighlighter2({
      langs: [options.lang],
      themes: "theme" in options ? [options.theme] : Object.values(options.themes)
    });
    const langs = await ((_a = config == null ? void 0 : config.guessEmbeddedLanguages) == null ? void 0 : _a.call(config, code, options.lang, shiki));
    if (langs) {
      await shiki.loadLanguage(...langs);
    }
    return shiki;
  }
  return {
    getSingletonHighlighter(options) {
      return getSingletonHighlighter2(options);
    },
    async codeToHtml(code, options) {
      const shiki = await get(code, options);
      return shiki.codeToHtml(code, options);
    },
    async codeToHast(code, options) {
      const shiki = await get(code, options);
      return shiki.codeToHast(code, options);
    },
    async codeToTokens(code, options) {
      const shiki = await get(code, options);
      return shiki.codeToTokens(code, options);
    },
    async codeToTokensBase(code, options) {
      const shiki = await get(code, options);
      return shiki.codeToTokensBase(code, options);
    },
    async codeToTokensWithThemes(code, options) {
      const shiki = await get(code, options);
      return shiki.codeToTokensWithThemes(code, options);
    },
    async getLastGrammarState(code, options) {
      const shiki = await getSingletonHighlighter2({
        langs: [options.lang],
        themes: [options.theme]
      });
      return shiki.getLastGrammarState(code, options);
    }
  };
}

// ../node_modules/shiki/dist/langs.mjs
var bundledLanguagesInfo = [
  {
    "id": "abap",
    "name": "ABAP",
    "import": () => import("./abap-XXZF3CLU.js")
  },
  {
    "id": "actionscript-3",
    "name": "ActionScript",
    "import": () => import("./actionscript-3-STGOKAYE.js")
  },
  {
    "id": "ada",
    "name": "Ada",
    "import": () => import("./ada-HIK2FPRP.js")
  },
  {
    "id": "angular-html",
    "name": "Angular HTML",
    "import": () => import("./angular-html-E6POODZJ.js")
  },
  {
    "id": "angular-ts",
    "name": "Angular TypeScript",
    "import": () => import("./angular-ts-WY5APVLM.js")
  },
  {
    "id": "apache",
    "name": "Apache Conf",
    "import": () => import("./apache-A3M5ZRUL.js")
  },
  {
    "id": "apex",
    "name": "Apex",
    "import": () => import("./apex-UT3EM562.js")
  },
  {
    "id": "apl",
    "name": "APL",
    "import": () => import("./apl-4S2EPLJQ.js")
  },
  {
    "id": "applescript",
    "name": "AppleScript",
    "import": () => import("./applescript-RP7G33GT.js")
  },
  {
    "id": "ara",
    "name": "Ara",
    "import": () => import("./ara-KWYEFPAV.js")
  },
  {
    "id": "asciidoc",
    "name": "AsciiDoc",
    "aliases": [
      "adoc"
    ],
    "import": () => import("./asciidoc-AI3C4K7L.js")
  },
  {
    "id": "asm",
    "name": "Assembly",
    "import": () => import("./asm-SXKPLANW.js")
  },
  {
    "id": "astro",
    "name": "Astro",
    "import": () => import("./astro-IF6LLRWL.js")
  },
  {
    "id": "awk",
    "name": "AWK",
    "import": () => import("./awk-ZXVB6HLL.js")
  },
  {
    "id": "ballerina",
    "name": "Ballerina",
    "import": () => import("./ballerina-NNCVSRUK.js")
  },
  {
    "id": "bat",
    "name": "Batch File",
    "aliases": [
      "batch"
    ],
    "import": () => import("./bat-6V7FBHEM.js")
  },
  {
    "id": "beancount",
    "name": "Beancount",
    "import": () => import("./beancount-AWGGVKIT.js")
  },
  {
    "id": "berry",
    "name": "Berry",
    "aliases": [
      "be"
    ],
    "import": () => import("./berry-6O63HQF7.js")
  },
  {
    "id": "bibtex",
    "name": "BibTeX",
    "import": () => import("./bibtex-2B3U7G4T.js")
  },
  {
    "id": "bicep",
    "name": "Bicep",
    "import": () => import("./bicep-ROASYDYZ.js")
  },
  {
    "id": "blade",
    "name": "Blade",
    "import": () => import("./blade-LK275STH.js")
  },
  {
    "id": "bsl",
    "name": "1C (Enterprise)",
    "aliases": [
      "1c"
    ],
    "import": () => import("./bsl-4IX5IUAB.js")
  },
  {
    "id": "c",
    "name": "C",
    "import": () => import("./c-6BM3HXPA.js")
  },
  {
    "id": "cadence",
    "name": "Cadence",
    "aliases": [
      "cdc"
    ],
    "import": () => import("./cadence-3LLB3XU5.js")
  },
  {
    "id": "cairo",
    "name": "Cairo",
    "import": () => import("./cairo-OK6FJQR4.js")
  },
  {
    "id": "clarity",
    "name": "Clarity",
    "import": () => import("./clarity-NCX2ABSH.js")
  },
  {
    "id": "clojure",
    "name": "Clojure",
    "aliases": [
      "clj"
    ],
    "import": () => import("./clojure-F2GIP25R.js")
  },
  {
    "id": "cmake",
    "name": "CMake",
    "import": () => import("./cmake-CMWXFFYA.js")
  },
  {
    "id": "cobol",
    "name": "COBOL",
    "import": () => import("./cobol-2CJWCX77.js")
  },
  {
    "id": "codeowners",
    "name": "CODEOWNERS",
    "import": () => import("./codeowners-M73INTOP.js")
  },
  {
    "id": "codeql",
    "name": "CodeQL",
    "aliases": [
      "ql"
    ],
    "import": () => import("./codeql-7LRTZALM.js")
  },
  {
    "id": "coffee",
    "name": "CoffeeScript",
    "aliases": [
      "coffeescript"
    ],
    "import": () => import("./coffee-D3JC6GXT.js")
  },
  {
    "id": "common-lisp",
    "name": "Common Lisp",
    "aliases": [
      "lisp"
    ],
    "import": () => import("./common-lisp-IFNEOBYB.js")
  },
  {
    "id": "coq",
    "name": "Coq",
    "import": () => import("./coq-L27HCS2S.js")
  },
  {
    "id": "cpp",
    "name": "C++",
    "aliases": [
      "c++"
    ],
    "import": () => import("./cpp-JQKANA4X.js")
  },
  {
    "id": "crystal",
    "name": "Crystal",
    "import": () => import("./crystal-XSDISFJO.js")
  },
  {
    "id": "csharp",
    "name": "C#",
    "aliases": [
      "c#",
      "cs"
    ],
    "import": () => import("./csharp-K7X2Q42D.js")
  },
  {
    "id": "css",
    "name": "CSS",
    "import": () => import("./css-64YPUSBY.js")
  },
  {
    "id": "csv",
    "name": "CSV",
    "import": () => import("./csv-ROJMQ5QS.js")
  },
  {
    "id": "cue",
    "name": "CUE",
    "import": () => import("./cue-OWWXYWVC.js")
  },
  {
    "id": "cypher",
    "name": "Cypher",
    "aliases": [
      "cql"
    ],
    "import": () => import("./cypher-PDQ7PKD6.js")
  },
  {
    "id": "d",
    "name": "D",
    "import": () => import("./d-UY4EG4EJ.js")
  },
  {
    "id": "dart",
    "name": "Dart",
    "import": () => import("./dart-WJWCSPWP.js")
  },
  {
    "id": "dax",
    "name": "DAX",
    "import": () => import("./dax-DED5DROR.js")
  },
  {
    "id": "desktop",
    "name": "Desktop",
    "import": () => import("./desktop-WYJPFCBW.js")
  },
  {
    "id": "diff",
    "name": "Diff",
    "import": () => import("./diff-U2Y7276F.js")
  },
  {
    "id": "docker",
    "name": "Dockerfile",
    "aliases": [
      "dockerfile"
    ],
    "import": () => import("./docker-SWY4SSFF.js")
  },
  {
    "id": "dotenv",
    "name": "dotEnv",
    "import": () => import("./dotenv-LRNJRBIY.js")
  },
  {
    "id": "dream-maker",
    "name": "Dream Maker",
    "import": () => import("./dream-maker-BKLE3ABP.js")
  },
  {
    "id": "edge",
    "name": "Edge",
    "import": () => import("./edge-LFLFLZ62.js")
  },
  {
    "id": "elixir",
    "name": "Elixir",
    "import": () => import("./elixir-KHWSBT22.js")
  },
  {
    "id": "elm",
    "name": "Elm",
    "import": () => import("./elm-QOAKGIS2.js")
  },
  {
    "id": "emacs-lisp",
    "name": "Emacs Lisp",
    "aliases": [
      "elisp"
    ],
    "import": () => import("./emacs-lisp-JESXDE46.js")
  },
  {
    "id": "erb",
    "name": "ERB",
    "import": () => import("./erb-LJWJQDVW.js")
  },
  {
    "id": "erlang",
    "name": "Erlang",
    "aliases": [
      "erl"
    ],
    "import": () => import("./erlang-FCKG5WMO.js")
  },
  {
    "id": "fennel",
    "name": "Fennel",
    "import": () => import("./fennel-FF63FBT2.js")
  },
  {
    "id": "fish",
    "name": "Fish",
    "import": () => import("./fish-FDFSDFEB.js")
  },
  {
    "id": "fluent",
    "name": "Fluent",
    "aliases": [
      "ftl"
    ],
    "import": () => import("./fluent-7443S2WI.js")
  },
  {
    "id": "fortran-fixed-form",
    "name": "Fortran (Fixed Form)",
    "aliases": [
      "f",
      "for",
      "f77"
    ],
    "import": () => import("./fortran-fixed-form-55JQKBAN.js")
  },
  {
    "id": "fortran-free-form",
    "name": "Fortran (Free Form)",
    "aliases": [
      "f90",
      "f95",
      "f03",
      "f08",
      "f18"
    ],
    "import": () => import("./fortran-free-form-FY7GNSWU.js")
  },
  {
    "id": "fsharp",
    "name": "F#",
    "aliases": [
      "f#",
      "fs"
    ],
    "import": () => import("./fsharp-KMPUZVAN.js")
  },
  {
    "id": "gdresource",
    "name": "GDResource",
    "import": () => import("./gdresource-TYT7X55L.js")
  },
  {
    "id": "gdscript",
    "name": "GDScript",
    "import": () => import("./gdscript-A6DZLA2A.js")
  },
  {
    "id": "gdshader",
    "name": "GDShader",
    "import": () => import("./gdshader-TU53E3NF.js")
  },
  {
    "id": "genie",
    "name": "Genie",
    "import": () => import("./genie-QKE3AB5T.js")
  },
  {
    "id": "gherkin",
    "name": "Gherkin",
    "import": () => import("./gherkin-OPCOIRCD.js")
  },
  {
    "id": "git-commit",
    "name": "Git Commit Message",
    "import": () => import("./git-commit-ZCX7ELCZ.js")
  },
  {
    "id": "git-rebase",
    "name": "Git Rebase Message",
    "import": () => import("./git-rebase-SKLGYHBJ.js")
  },
  {
    "id": "gleam",
    "name": "Gleam",
    "import": () => import("./gleam-GUS56C43.js")
  },
  {
    "id": "glimmer-js",
    "name": "Glimmer JS",
    "aliases": [
      "gjs"
    ],
    "import": () => import("./glimmer-js-6P42CKYN.js")
  },
  {
    "id": "glimmer-ts",
    "name": "Glimmer TS",
    "aliases": [
      "gts"
    ],
    "import": () => import("./glimmer-ts-YS2ZUYUV.js")
  },
  {
    "id": "glsl",
    "name": "GLSL",
    "import": () => import("./glsl-MF6R66YT.js")
  },
  {
    "id": "gnuplot",
    "name": "Gnuplot",
    "import": () => import("./gnuplot-USKTE3NC.js")
  },
  {
    "id": "go",
    "name": "Go",
    "import": () => import("./go-ETJRO2FI.js")
  },
  {
    "id": "graphql",
    "name": "GraphQL",
    "aliases": [
      "gql"
    ],
    "import": () => import("./graphql-KP66PHGW.js")
  },
  {
    "id": "groovy",
    "name": "Groovy",
    "import": () => import("./groovy-4MBJNFCH.js")
  },
  {
    "id": "hack",
    "name": "Hack",
    "import": () => import("./hack-FNSIDYRQ.js")
  },
  {
    "id": "haml",
    "name": "Ruby Haml",
    "import": () => import("./haml-QJNAT4AN.js")
  },
  {
    "id": "handlebars",
    "name": "Handlebars",
    "aliases": [
      "hbs"
    ],
    "import": () => import("./handlebars-NPKBXLRW.js")
  },
  {
    "id": "haskell",
    "name": "Haskell",
    "aliases": [
      "hs"
    ],
    "import": () => import("./haskell-XQV43CYI.js")
  },
  {
    "id": "haxe",
    "name": "Haxe",
    "import": () => import("./haxe-VFPJQUQP.js")
  },
  {
    "id": "hcl",
    "name": "HashiCorp HCL",
    "import": () => import("./hcl-ABSINHHC.js")
  },
  {
    "id": "hjson",
    "name": "Hjson",
    "import": () => import("./hjson-TZQ6NED4.js")
  },
  {
    "id": "hlsl",
    "name": "HLSL",
    "import": () => import("./hlsl-V7FCFUSH.js")
  },
  {
    "id": "html",
    "name": "HTML",
    "import": () => import("./html-4H2J24GU.js")
  },
  {
    "id": "html-derivative",
    "name": "HTML (Derivative)",
    "import": () => import("./html-derivative-FLVTNP7Q.js")
  },
  {
    "id": "http",
    "name": "HTTP",
    "import": () => import("./http-DP5NJDFF.js")
  },
  {
    "id": "hxml",
    "name": "HXML",
    "import": () => import("./hxml-SIHUSYRX.js")
  },
  {
    "id": "hy",
    "name": "Hy",
    "import": () => import("./hy-O4JIXXSF.js")
  },
  {
    "id": "imba",
    "name": "Imba",
    "import": () => import("./imba-MYPMESGF.js")
  },
  {
    "id": "ini",
    "name": "INI",
    "aliases": [
      "properties"
    ],
    "import": () => import("./ini-ZDSJ4MBG.js")
  },
  {
    "id": "java",
    "name": "Java",
    "import": () => import("./java-NYT3DWFU.js")
  },
  {
    "id": "javascript",
    "name": "JavaScript",
    "aliases": [
      "js"
    ],
    "import": () => import("./javascript-DN3APAP6.js")
  },
  {
    "id": "jinja",
    "name": "Jinja",
    "import": () => import("./jinja-535ZMF7U.js")
  },
  {
    "id": "jison",
    "name": "Jison",
    "import": () => import("./jison-RDEGXI53.js")
  },
  {
    "id": "json",
    "name": "JSON",
    "import": () => import("./json-VHI4XJ3G.js")
  },
  {
    "id": "json5",
    "name": "JSON5",
    "import": () => import("./json5-ANBMH6TC.js")
  },
  {
    "id": "jsonc",
    "name": "JSON with Comments",
    "import": () => import("./jsonc-UHLPW4ZU.js")
  },
  {
    "id": "jsonl",
    "name": "JSON Lines",
    "import": () => import("./jsonl-34JFV7OH.js")
  },
  {
    "id": "jsonnet",
    "name": "Jsonnet",
    "import": () => import("./jsonnet-S2NAF6EV.js")
  },
  {
    "id": "jssm",
    "name": "JSSM",
    "aliases": [
      "fsl"
    ],
    "import": () => import("./jssm-SZIQ5KUS.js")
  },
  {
    "id": "jsx",
    "name": "JSX",
    "import": () => import("./jsx-K4KUR7VA.js")
  },
  {
    "id": "julia",
    "name": "Julia",
    "aliases": [
      "jl"
    ],
    "import": () => import("./julia-6KLQNF4D.js")
  },
  {
    "id": "kotlin",
    "name": "Kotlin",
    "aliases": [
      "kt",
      "kts"
    ],
    "import": () => import("./kotlin-34QPIXIJ.js")
  },
  {
    "id": "kusto",
    "name": "Kusto",
    "aliases": [
      "kql"
    ],
    "import": () => import("./kusto-EL5B73W4.js")
  },
  {
    "id": "latex",
    "name": "LaTeX",
    "import": () => import("./latex-MW2OJIO7.js")
  },
  {
    "id": "lean",
    "name": "Lean 4",
    "aliases": [
      "lean4"
    ],
    "import": () => import("./lean-QDYA6MX4.js")
  },
  {
    "id": "less",
    "name": "Less",
    "import": () => import("./less-A2EJ2ABS.js")
  },
  {
    "id": "liquid",
    "name": "Liquid",
    "import": () => import("./liquid-5M4QOXWN.js")
  },
  {
    "id": "log",
    "name": "Log file",
    "import": () => import("./log-SAN2RLZU.js")
  },
  {
    "id": "logo",
    "name": "Logo",
    "import": () => import("./logo-THHMIY23.js")
  },
  {
    "id": "lua",
    "name": "Lua",
    "import": () => import("./lua-NSDD6X6U.js")
  },
  {
    "id": "luau",
    "name": "Luau",
    "import": () => import("./luau-USGDGZGE.js")
  },
  {
    "id": "make",
    "name": "Makefile",
    "aliases": [
      "makefile"
    ],
    "import": () => import("./make-UI2C2HWT.js")
  },
  {
    "id": "markdown",
    "name": "Markdown",
    "aliases": [
      "md"
    ],
    "import": () => import("./markdown-3TEDIBXZ.js")
  },
  {
    "id": "marko",
    "name": "Marko",
    "import": () => import("./marko-NAKNXL66.js")
  },
  {
    "id": "matlab",
    "name": "MATLAB",
    "import": () => import("./matlab-6ZQ4DCHJ.js")
  },
  {
    "id": "mdc",
    "name": "MDC",
    "import": () => import("./mdc-35OYJGBG.js")
  },
  {
    "id": "mdx",
    "name": "MDX",
    "import": () => import("./mdx-URT27SY2.js")
  },
  {
    "id": "mermaid",
    "name": "Mermaid",
    "aliases": [
      "mmd"
    ],
    "import": () => import("./mermaid-YGPTFFPI.js")
  },
  {
    "id": "mipsasm",
    "name": "MIPS Assembly",
    "aliases": [
      "mips"
    ],
    "import": () => import("./mipsasm-5SG3CYVK.js")
  },
  {
    "id": "mojo",
    "name": "Mojo",
    "import": () => import("./mojo-MF7DTWPZ.js")
  },
  {
    "id": "move",
    "name": "Move",
    "import": () => import("./move-QTQJS5KG.js")
  },
  {
    "id": "narrat",
    "name": "Narrat Language",
    "aliases": [
      "nar"
    ],
    "import": () => import("./narrat-FH27VHRS.js")
  },
  {
    "id": "nextflow",
    "name": "Nextflow",
    "aliases": [
      "nf"
    ],
    "import": () => import("./nextflow-DSLE5WSS.js")
  },
  {
    "id": "nginx",
    "name": "Nginx",
    "import": () => import("./nginx-OQ6QAKDJ.js")
  },
  {
    "id": "nim",
    "name": "Nim",
    "import": () => import("./nim-5QPQMD7E.js")
  },
  {
    "id": "nix",
    "name": "Nix",
    "import": () => import("./nix-MGWALKXK.js")
  },
  {
    "id": "nushell",
    "name": "nushell",
    "aliases": [
      "nu"
    ],
    "import": () => import("./nushell-7HABUFSN.js")
  },
  {
    "id": "objective-c",
    "name": "Objective-C",
    "aliases": [
      "objc"
    ],
    "import": () => import("./objective-c-OO26YSVV.js")
  },
  {
    "id": "objective-cpp",
    "name": "Objective-C++",
    "import": () => import("./objective-cpp-UTDKZXFS.js")
  },
  {
    "id": "ocaml",
    "name": "OCaml",
    "import": () => import("./ocaml-KXZWCWPU.js")
  },
  {
    "id": "pascal",
    "name": "Pascal",
    "import": () => import("./pascal-35SZEV57.js")
  },
  {
    "id": "perl",
    "name": "Perl",
    "import": () => import("./perl-RWZTQCFT.js")
  },
  {
    "id": "php",
    "name": "PHP",
    "import": () => import("./php-ZDEXMA4Y.js")
  },
  {
    "id": "plsql",
    "name": "PL/SQL",
    "import": () => import("./plsql-4OZAB5HL.js")
  },
  {
    "id": "po",
    "name": "Gettext PO",
    "aliases": [
      "pot",
      "potx"
    ],
    "import": () => import("./po-XAD4S5TG.js")
  },
  {
    "id": "polar",
    "name": "Polar",
    "import": () => import("./polar-UY4Q7LFR.js")
  },
  {
    "id": "postcss",
    "name": "PostCSS",
    "import": () => import("./postcss-TS2F623J.js")
  },
  {
    "id": "powerquery",
    "name": "PowerQuery",
    "import": () => import("./powerquery-HSKHFHHX.js")
  },
  {
    "id": "powershell",
    "name": "PowerShell",
    "aliases": [
      "ps",
      "ps1"
    ],
    "import": () => import("./powershell-6JD6G3EO.js")
  },
  {
    "id": "prisma",
    "name": "Prisma",
    "import": () => import("./prisma-6RNOM6EH.js")
  },
  {
    "id": "prolog",
    "name": "Prolog",
    "import": () => import("./prolog-RB22COA7.js")
  },
  {
    "id": "proto",
    "name": "Protocol Buffer 3",
    "aliases": [
      "protobuf"
    ],
    "import": () => import("./proto-X6TLK66T.js")
  },
  {
    "id": "pug",
    "name": "Pug",
    "aliases": [
      "jade"
    ],
    "import": () => import("./pug-YIJCMTYZ.js")
  },
  {
    "id": "puppet",
    "name": "Puppet",
    "import": () => import("./puppet-2X44IKYK.js")
  },
  {
    "id": "purescript",
    "name": "PureScript",
    "import": () => import("./purescript-GW5AZBCV.js")
  },
  {
    "id": "python",
    "name": "Python",
    "aliases": [
      "py"
    ],
    "import": () => import("./python-JSHWVBI6.js")
  },
  {
    "id": "qml",
    "name": "QML",
    "import": () => import("./qml-WRQSXFIO.js")
  },
  {
    "id": "qmldir",
    "name": "QML Directory",
    "import": () => import("./qmldir-K7HVIID6.js")
  },
  {
    "id": "qss",
    "name": "Qt Style Sheets",
    "import": () => import("./qss-7QJFFQUP.js")
  },
  {
    "id": "r",
    "name": "R",
    "import": () => import("./r-LN2XOPZE.js")
  },
  {
    "id": "racket",
    "name": "Racket",
    "import": () => import("./racket-JBK2P5I7.js")
  },
  {
    "id": "raku",
    "name": "Raku",
    "aliases": [
      "perl6"
    ],
    "import": () => import("./raku-WDPCLOUX.js")
  },
  {
    "id": "razor",
    "name": "ASP.NET Razor",
    "import": () => import("./razor-MPBNTHCG.js")
  },
  {
    "id": "reg",
    "name": "Windows Registry Script",
    "import": () => import("./reg-I6JCFK3B.js")
  },
  {
    "id": "regexp",
    "name": "RegExp",
    "aliases": [
      "regex"
    ],
    "import": () => import("./regexp-ZKVNGHQR.js")
  },
  {
    "id": "rel",
    "name": "Rel",
    "import": () => import("./rel-TAMAOVOV.js")
  },
  {
    "id": "riscv",
    "name": "RISC-V",
    "import": () => import("./riscv-A4GCEMIF.js")
  },
  {
    "id": "rst",
    "name": "reStructuredText",
    "import": () => import("./rst-RMCNJDIB.js")
  },
  {
    "id": "ruby",
    "name": "Ruby",
    "aliases": [
      "rb"
    ],
    "import": () => import("./ruby-FMTUVJJO.js")
  },
  {
    "id": "rust",
    "name": "Rust",
    "aliases": [
      "rs"
    ],
    "import": () => import("./rust-JTVIFJYT.js")
  },
  {
    "id": "sas",
    "name": "SAS",
    "import": () => import("./sas-SWDMY5MG.js")
  },
  {
    "id": "sass",
    "name": "Sass",
    "import": () => import("./sass-UVWMU2GB.js")
  },
  {
    "id": "scala",
    "name": "Scala",
    "import": () => import("./scala-MA6FMX5L.js")
  },
  {
    "id": "scheme",
    "name": "Scheme",
    "import": () => import("./scheme-BCRZAOPM.js")
  },
  {
    "id": "scss",
    "name": "SCSS",
    "import": () => import("./scss-CM2XCDFE.js")
  },
  {
    "id": "sdbl",
    "name": "1C (Query)",
    "aliases": [
      "1c-query"
    ],
    "import": () => import("./sdbl-OK4M35KU.js")
  },
  {
    "id": "shaderlab",
    "name": "ShaderLab",
    "aliases": [
      "shader"
    ],
    "import": () => import("./shaderlab-2VHS7QFH.js")
  },
  {
    "id": "shellscript",
    "name": "Shell",
    "aliases": [
      "bash",
      "sh",
      "shell",
      "zsh"
    ],
    "import": () => import("./shellscript-JK5GCAKN.js")
  },
  {
    "id": "shellsession",
    "name": "Shell Session",
    "aliases": [
      "console"
    ],
    "import": () => import("./shellsession-UJIYS5SX.js")
  },
  {
    "id": "smalltalk",
    "name": "Smalltalk",
    "import": () => import("./smalltalk-S4CCKE3Y.js")
  },
  {
    "id": "solidity",
    "name": "Solidity",
    "import": () => import("./solidity-57BTG5GU.js")
  },
  {
    "id": "soy",
    "name": "Closure Templates",
    "aliases": [
      "closure-templates"
    ],
    "import": () => import("./soy-7QMM252W.js")
  },
  {
    "id": "sparql",
    "name": "SPARQL",
    "import": () => import("./sparql-26GB34IT.js")
  },
  {
    "id": "splunk",
    "name": "Splunk Query Language",
    "aliases": [
      "spl"
    ],
    "import": () => import("./splunk-NC5PPD2P.js")
  },
  {
    "id": "sql",
    "name": "SQL",
    "import": () => import("./sql-YC4YIOKY.js")
  },
  {
    "id": "ssh-config",
    "name": "SSH Config",
    "import": () => import("./ssh-config-32JSD5EM.js")
  },
  {
    "id": "stata",
    "name": "Stata",
    "import": () => import("./stata-IT6HWUAX.js")
  },
  {
    "id": "stylus",
    "name": "Stylus",
    "aliases": [
      "styl"
    ],
    "import": () => import("./stylus-6I7EXH3F.js")
  },
  {
    "id": "svelte",
    "name": "Svelte",
    "import": () => import("./svelte-MV7THQH4.js")
  },
  {
    "id": "swift",
    "name": "Swift",
    "import": () => import("./swift-ST2DTIR4.js")
  },
  {
    "id": "system-verilog",
    "name": "SystemVerilog",
    "import": () => import("./system-verilog-JHEAQD4F.js")
  },
  {
    "id": "systemd",
    "name": "Systemd Units",
    "import": () => import("./systemd-QC4BTDKV.js")
  },
  {
    "id": "talonscript",
    "name": "TalonScript",
    "aliases": [
      "talon"
    ],
    "import": () => import("./talonscript-V66ODYV6.js")
  },
  {
    "id": "tasl",
    "name": "Tasl",
    "import": () => import("./tasl-X2HBB6F7.js")
  },
  {
    "id": "tcl",
    "name": "Tcl",
    "import": () => import("./tcl-JOF7GU5M.js")
  },
  {
    "id": "templ",
    "name": "Templ",
    "import": () => import("./templ-CRQIMAKU.js")
  },
  {
    "id": "terraform",
    "name": "Terraform",
    "aliases": [
      "tf",
      "tfvars"
    ],
    "import": () => import("./terraform-G2S7L3R4.js")
  },
  {
    "id": "tex",
    "name": "TeX",
    "import": () => import("./tex-FWSUVANI.js")
  },
  {
    "id": "toml",
    "name": "TOML",
    "import": () => import("./toml-RMPNDSNZ.js")
  },
  {
    "id": "ts-tags",
    "name": "TypeScript with Tags",
    "aliases": [
      "lit"
    ],
    "import": () => import("./ts-tags-KENFWXLQ.js")
  },
  {
    "id": "tsv",
    "name": "TSV",
    "import": () => import("./tsv-6T4HL5ZT.js")
  },
  {
    "id": "tsx",
    "name": "TSX",
    "import": () => import("./tsx-7DITUDAN.js")
  },
  {
    "id": "turtle",
    "name": "Turtle",
    "import": () => import("./turtle-JUPAQBLI.js")
  },
  {
    "id": "twig",
    "name": "Twig",
    "import": () => import("./twig-6MCSCXAR.js")
  },
  {
    "id": "typescript",
    "name": "TypeScript",
    "aliases": [
      "ts"
    ],
    "import": () => import("./typescript-CRX6SQCB.js")
  },
  {
    "id": "typespec",
    "name": "TypeSpec",
    "aliases": [
      "tsp"
    ],
    "import": () => import("./typespec-DROIJQQZ.js")
  },
  {
    "id": "typst",
    "name": "Typst",
    "aliases": [
      "typ"
    ],
    "import": () => import("./typst-MKW7J3TE.js")
  },
  {
    "id": "v",
    "name": "V",
    "import": () => import("./v-GWP2G674.js")
  },
  {
    "id": "vala",
    "name": "Vala",
    "import": () => import("./vala-BBPH4GIM.js")
  },
  {
    "id": "vb",
    "name": "Visual Basic",
    "aliases": [
      "cmd"
    ],
    "import": () => import("./vb-6ANHKKHM.js")
  },
  {
    "id": "verilog",
    "name": "Verilog",
    "import": () => import("./verilog-4CR76Y7I.js")
  },
  {
    "id": "vhdl",
    "name": "VHDL",
    "import": () => import("./vhdl-IYJWJIDQ.js")
  },
  {
    "id": "viml",
    "name": "Vim Script",
    "aliases": [
      "vim",
      "vimscript"
    ],
    "import": () => import("./viml-7GNR4526.js")
  },
  {
    "id": "vue",
    "name": "Vue",
    "import": () => import("./vue-V73UYD2G.js")
  },
  {
    "id": "vue-html",
    "name": "Vue HTML",
    "import": () => import("./vue-html-JQCQKEMJ.js")
  },
  {
    "id": "vyper",
    "name": "Vyper",
    "aliases": [
      "vy"
    ],
    "import": () => import("./vyper-UZMC7DRL.js")
  },
  {
    "id": "wasm",
    "name": "WebAssembly",
    "import": () => import("./wasm-QD2DGUYK.js")
  },
  {
    "id": "wenyan",
    "name": "Wenyan",
    "aliases": [
      "文言"
    ],
    "import": () => import("./wenyan-TSYID3OH.js")
  },
  {
    "id": "wgsl",
    "name": "WGSL",
    "import": () => import("./wgsl-VT5K3WXE.js")
  },
  {
    "id": "wikitext",
    "name": "Wikitext",
    "aliases": [
      "mediawiki",
      "wiki"
    ],
    "import": () => import("./wikitext-AIZMXHHU.js")
  },
  {
    "id": "wolfram",
    "name": "Wolfram",
    "aliases": [
      "wl"
    ],
    "import": () => import("./wolfram-OPKTJ35L.js")
  },
  {
    "id": "xml",
    "name": "XML",
    "import": () => import("./xml-TZFDOXHO.js")
  },
  {
    "id": "xsl",
    "name": "XSL",
    "import": () => import("./xsl-HJU3D2Z4.js")
  },
  {
    "id": "yaml",
    "name": "YAML",
    "aliases": [
      "yml"
    ],
    "import": () => import("./yaml-7OUBHYJS.js")
  },
  {
    "id": "zenscript",
    "name": "ZenScript",
    "import": () => import("./zenscript-KJ52I3YR.js")
  },
  {
    "id": "zig",
    "name": "Zig",
    "import": () => import("./zig-PJCVNYZH.js")
  }
];
var bundledLanguagesBase = Object.fromEntries(bundledLanguagesInfo.map((i) => [i.id, i.import]));
var bundledLanguagesAlias = Object.fromEntries(bundledLanguagesInfo.flatMap((i) => {
  var _a;
  return ((_a = i.aliases) == null ? void 0 : _a.map((a) => [a, i.import])) || [];
}));
var bundledLanguages = {
  ...bundledLanguagesBase,
  ...bundledLanguagesAlias
};

// ../node_modules/shiki/dist/themes.mjs
var bundledThemesInfo = [
  {
    "id": "andromeeda",
    "displayName": "Andromeeda",
    "type": "dark",
    "import": () => import("./andromeeda-VA37DUDV.js")
  },
  {
    "id": "aurora-x",
    "displayName": "Aurora X",
    "type": "dark",
    "import": () => import("./aurora-x-HXVU2ESJ.js")
  },
  {
    "id": "ayu-dark",
    "displayName": "Ayu Dark",
    "type": "dark",
    "import": () => import("./ayu-dark-DWPIRTLJ.js")
  },
  {
    "id": "catppuccin-frappe",
    "displayName": "Catppuccin Frappé",
    "type": "dark",
    "import": () => import("./catppuccin-frappe-M4NXL6QX.js")
  },
  {
    "id": "catppuccin-latte",
    "displayName": "Catppuccin Latte",
    "type": "light",
    "import": () => import("./catppuccin-latte-25VLV75K.js")
  },
  {
    "id": "catppuccin-macchiato",
    "displayName": "Catppuccin Macchiato",
    "type": "dark",
    "import": () => import("./catppuccin-macchiato-OXSY3MVD.js")
  },
  {
    "id": "catppuccin-mocha",
    "displayName": "Catppuccin Mocha",
    "type": "dark",
    "import": () => import("./catppuccin-mocha-4JO6VEWP.js")
  },
  {
    "id": "dark-plus",
    "displayName": "Dark Plus",
    "type": "dark",
    "import": () => import("./dark-plus-IHFUBMJL.js")
  },
  {
    "id": "dracula",
    "displayName": "Dracula Theme",
    "type": "dark",
    "import": () => import("./dracula-J5OLA4QB.js")
  },
  {
    "id": "dracula-soft",
    "displayName": "Dracula Theme Soft",
    "type": "dark",
    "import": () => import("./dracula-soft-JKTTBXQ2.js")
  },
  {
    "id": "everforest-dark",
    "displayName": "Everforest Dark",
    "type": "dark",
    "import": () => import("./everforest-dark-EZGSCZC3.js")
  },
  {
    "id": "everforest-light",
    "displayName": "Everforest Light",
    "type": "light",
    "import": () => import("./everforest-light-YOBMNTSI.js")
  },
  {
    "id": "github-dark",
    "displayName": "GitHub Dark",
    "type": "dark",
    "import": () => import("./github-dark-Y2HOWQMH.js")
  },
  {
    "id": "github-dark-default",
    "displayName": "GitHub Dark Default",
    "type": "dark",
    "import": () => import("./github-dark-default-DOQMWADV.js")
  },
  {
    "id": "github-dark-dimmed",
    "displayName": "GitHub Dark Dimmed",
    "type": "dark",
    "import": () => import("./github-dark-dimmed-RHLYKESX.js")
  },
  {
    "id": "github-dark-high-contrast",
    "displayName": "GitHub Dark High Contrast",
    "type": "dark",
    "import": () => import("./github-dark-high-contrast-OTOTF72C.js")
  },
  {
    "id": "github-light",
    "displayName": "GitHub Light",
    "type": "light",
    "import": () => import("./github-light-E6YUINGU.js")
  },
  {
    "id": "github-light-default",
    "displayName": "GitHub Light Default",
    "type": "light",
    "import": () => import("./github-light-default-H2FCQDA2.js")
  },
  {
    "id": "github-light-high-contrast",
    "displayName": "GitHub Light High Contrast",
    "type": "light",
    "import": () => import("./github-light-high-contrast-KTE6MLZ7.js")
  },
  {
    "id": "houston",
    "displayName": "Houston",
    "type": "dark",
    "import": () => import("./houston-G3QULYIG.js")
  },
  {
    "id": "kanagawa-dragon",
    "displayName": "Kanagawa Dragon",
    "type": "dark",
    "import": () => import("./kanagawa-dragon-HEBKGOPP.js")
  },
  {
    "id": "kanagawa-lotus",
    "displayName": "Kanagawa Lotus",
    "type": "light",
    "import": () => import("./kanagawa-lotus-C55E2J7P.js")
  },
  {
    "id": "kanagawa-wave",
    "displayName": "Kanagawa Wave",
    "type": "dark",
    "import": () => import("./kanagawa-wave-BOKALNYF.js")
  },
  {
    "id": "laserwave",
    "displayName": "LaserWave",
    "type": "dark",
    "import": () => import("./laserwave-YCEUILJX.js")
  },
  {
    "id": "light-plus",
    "displayName": "Light Plus",
    "type": "light",
    "import": () => import("./light-plus-UBO4JMTC.js")
  },
  {
    "id": "material-theme",
    "displayName": "Material Theme",
    "type": "dark",
    "import": () => import("./material-theme-2U5AOHE4.js")
  },
  {
    "id": "material-theme-darker",
    "displayName": "Material Theme Darker",
    "type": "dark",
    "import": () => import("./material-theme-darker-Y5OC4S3F.js")
  },
  {
    "id": "material-theme-lighter",
    "displayName": "Material Theme Lighter",
    "type": "light",
    "import": () => import("./material-theme-lighter-JNWKYJHP.js")
  },
  {
    "id": "material-theme-ocean",
    "displayName": "Material Theme Ocean",
    "type": "dark",
    "import": () => import("./material-theme-ocean-65DDE5KO.js")
  },
  {
    "id": "material-theme-palenight",
    "displayName": "Material Theme Palenight",
    "type": "dark",
    "import": () => import("./material-theme-palenight-I5YJWDPL.js")
  },
  {
    "id": "min-dark",
    "displayName": "Min Dark",
    "type": "dark",
    "import": () => import("./min-dark-JFNSGUT2.js")
  },
  {
    "id": "min-light",
    "displayName": "Min Light",
    "type": "light",
    "import": () => import("./min-light-SYRBA2HU.js")
  },
  {
    "id": "monokai",
    "displayName": "Monokai",
    "type": "dark",
    "import": () => import("./monokai-JZGDTDXZ.js")
  },
  {
    "id": "night-owl",
    "displayName": "Night Owl",
    "type": "dark",
    "import": () => import("./night-owl-RYS2ZKIQ.js")
  },
  {
    "id": "nord",
    "displayName": "Nord",
    "type": "dark",
    "import": () => import("./nord-GGEUREZ4.js")
  },
  {
    "id": "one-dark-pro",
    "displayName": "One Dark Pro",
    "type": "dark",
    "import": () => import("./one-dark-pro-64Q4KEJT.js")
  },
  {
    "id": "one-light",
    "displayName": "One Light",
    "type": "light",
    "import": () => import("./one-light-LK4FWYPN.js")
  },
  {
    "id": "plastic",
    "displayName": "Plastic",
    "type": "dark",
    "import": () => import("./plastic-OUYNNS7G.js")
  },
  {
    "id": "poimandres",
    "displayName": "Poimandres",
    "type": "dark",
    "import": () => import("./poimandres-F4FKNFBM.js")
  },
  {
    "id": "red",
    "displayName": "Red",
    "type": "dark",
    "import": () => import("./red-ED3O7O3X.js")
  },
  {
    "id": "rose-pine",
    "displayName": "Rosé Pine",
    "type": "dark",
    "import": () => import("./rose-pine-CN5ZJR3U.js")
  },
  {
    "id": "rose-pine-dawn",
    "displayName": "Rosé Pine Dawn",
    "type": "light",
    "import": () => import("./rose-pine-dawn-OLSVSABP.js")
  },
  {
    "id": "rose-pine-moon",
    "displayName": "Rosé Pine Moon",
    "type": "dark",
    "import": () => import("./rose-pine-moon-VAQR54FG.js")
  },
  {
    "id": "slack-dark",
    "displayName": "Slack Dark",
    "type": "dark",
    "import": () => import("./slack-dark-WKFKBBCY.js")
  },
  {
    "id": "slack-ochin",
    "displayName": "Slack Ochin",
    "type": "light",
    "import": () => import("./slack-ochin-NAWE55RO.js")
  },
  {
    "id": "snazzy-light",
    "displayName": "Snazzy Light",
    "type": "light",
    "import": () => import("./snazzy-light-OXCM5WD7.js")
  },
  {
    "id": "solarized-dark",
    "displayName": "Solarized Dark",
    "type": "dark",
    "import": () => import("./solarized-dark-R5XSOP5Q.js")
  },
  {
    "id": "solarized-light",
    "displayName": "Solarized Light",
    "type": "light",
    "import": () => import("./solarized-light-YWXZRUDL.js")
  },
  {
    "id": "synthwave-84",
    "displayName": "Synthwave '84",
    "type": "dark",
    "import": () => import("./synthwave-84-23FZ4CSM.js")
  },
  {
    "id": "tokyo-night",
    "displayName": "Tokyo Night",
    "type": "dark",
    "import": () => import("./tokyo-night-QO2W76DW.js")
  },
  {
    "id": "vesper",
    "displayName": "Vesper",
    "type": "dark",
    "import": () => import("./vesper-WBZKM6YK.js")
  },
  {
    "id": "vitesse-black",
    "displayName": "Vitesse Black",
    "type": "dark",
    "import": () => import("./vitesse-black-3DK5RNMQ.js")
  },
  {
    "id": "vitesse-dark",
    "displayName": "Vitesse Dark",
    "type": "dark",
    "import": () => import("./vitesse-dark-WAZAWFNL.js")
  },
  {
    "id": "vitesse-light",
    "displayName": "Vitesse Light",
    "type": "light",
    "import": () => import("./vitesse-light-TBMWB72C.js")
  }
];
var bundledThemes = Object.fromEntries(bundledThemesInfo.map((i) => [i.id, i.import]));

// ../node_modules/shiki/dist/bundle-full.mjs
var createHighlighter = createdBundledHighlighter({
  langs: bundledLanguages,
  themes: bundledThemes,
  engine: () => createOnigurumaEngine(import("./wasm-R2LY47XV.js"))
});
var {
  codeToHtml: codeToHtml2,
  codeToHast: codeToHast2,
  codeToTokens: codeToTokens2,
  codeToTokensBase: codeToTokensBase2,
  codeToTokensWithThemes: codeToTokensWithThemes2,
  getSingletonHighlighter,
  getLastGrammarState: getLastGrammarState2
} = createSingletonShorthands(
  createHighlighter,
  { guessEmbeddedLanguages }
);

// ../node_modules/vitepress-demo-plugin/dist/index.js
var import_path = __toESM(require_path_browserify());

// .vitepress/fs-stub.js
var fs_stub_default = {};

// ../node_modules/vitepress-demo-plugin/dist/index.js
var et = (n, i) => {
  const e = n.__vccOpts || n;
  for (const [t, a] of i)
    e[t] = a;
  return e;
};
var Ui = {};
var Fi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "lucide lucide-code"
};
function zi(n, i) {
  return openBlock(), createElementBlock("svg", Fi, i[0] || (i[0] = [
    createBaseVNode("polyline", { points: "16 18 22 12 16 6" }, null, -1),
    createBaseVNode("polyline", { points: "8 6 2 12 8 18" }, null, -1)
  ]));
}
var Ki = et(Ui, [["render", zi]]);
var qi = {};
var Vi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "lucide lucide-code-xml"
};
function Gi(n, i) {
  return openBlock(), createElementBlock("svg", Vi, i[0] || (i[0] = [
    createBaseVNode("path", { d: "m18 16 4-4-4-4" }, null, -1),
    createBaseVNode("path", { d: "m6 8-4 4 4 4" }, null, -1),
    createBaseVNode("path", { d: "m14.5 4-5 16" }, null, -1)
  ]));
}
var Hi = et(qi, [["render", Gi]]);
var Xi = {};
var Qi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "lucide lucide-copy"
};
function Ji(n, i) {
  return openBlock(), createElementBlock("svg", Qi, i[0] || (i[0] = [
    createBaseVNode("rect", {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2"
    }, null, -1),
    createBaseVNode("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }, null, -1)
  ]));
}
var Zi = et(Xi, [["render", Ji]]);
var Yi = {};
var tn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "lucide lucide-arrow-up-from-line"
};
function en(n, i) {
  return openBlock(), createElementBlock("svg", tn, i[0] || (i[0] = [
    createBaseVNode("path", { d: "m18 9-6-6-6 6" }, null, -1),
    createBaseVNode("path", { d: "M12 3v14" }, null, -1),
    createBaseVNode("path", { d: "M5 21h14" }, null, -1)
  ]));
}
var nn = et(Yi, [["render", en]]);
function sn(n) {
  return n === "vue" ? "/src/Demo.vue" : n === "react" ? "/src/Demo.tsx" : "index.html";
}
var $ = ((n) => (n.VUE = "vue", n.REACT = "react", n.HTML = "html", n))($ || {});
var rt = ((n) => (n.STACKBLITZ = "stackblitz", n.CODESANDBOX = "codesandbox", n))(rt || {});
var di = "vitepress-demo";
var mi = "This is a demo from vitepress-demo-plugin";
var It = {};
var gi = { exports: {} };
(function(n) {
  var i = function() {
    var e = String.fromCharCode, t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", _ = {};
    function f(u, g) {
      if (!_[u]) {
        _[u] = {};
        for (var v = 0; v < u.length; v++)
          _[u][u.charAt(v)] = v;
      }
      return _[u][g];
    }
    var o = {
      compressToBase64: function(u) {
        if (u == null)
          return "";
        var g = o._compress(u, 6, function(v) {
          return t.charAt(v);
        });
        switch (g.length % 4) {
          default:
          case 0:
            return g;
          case 1:
            return g + "===";
          case 2:
            return g + "==";
          case 3:
            return g + "=";
        }
      },
      decompressFromBase64: function(u) {
        return u == null ? "" : u == "" ? null : o._decompress(u.length, 32, function(g) {
          return f(t, u.charAt(g));
        });
      },
      compressToUTF16: function(u) {
        return u == null ? "" : o._compress(u, 15, function(g) {
          return e(g + 32);
        }) + " ";
      },
      decompressFromUTF16: function(u) {
        return u == null ? "" : u == "" ? null : o._decompress(u.length, 16384, function(g) {
          return u.charCodeAt(g) - 32;
        });
      },
      compressToUint8Array: function(u) {
        for (var g = o.compress(u), v = new Uint8Array(g.length * 2), b = 0, c = g.length; b < c; b++) {
          var k = g.charCodeAt(b);
          v[b * 2] = k >>> 8, v[b * 2 + 1] = k % 256;
        }
        return v;
      },
      decompressFromUint8Array: function(u) {
        if (u == null)
          return o.decompress(u);
        for (var g = new Array(u.length / 2), v = 0, b = g.length; v < b; v++)
          g[v] = u[v * 2] * 256 + u[v * 2 + 1];
        var c = [];
        return g.forEach(function(k) {
          c.push(e(k));
        }), o.decompress(c.join(""));
      },
      compressToEncodedURIComponent: function(u) {
        return u == null ? "" : o._compress(u, 6, function(g) {
          return a.charAt(g);
        });
      },
      decompressFromEncodedURIComponent: function(u) {
        return u == null ? "" : u == "" ? null : (u = u.replace(/ /g, "+"), o._decompress(u.length, 32, function(g) {
          return f(a, u.charAt(g));
        }));
      },
      compress: function(u) {
        return o._compress(u, 16, function(g) {
          return e(g);
        });
      },
      _compress: function(u, g, v) {
        if (u == null)
          return "";
        var b, c, k = {}, C = {}, S = "", h = "", r3 = "", d = 2, T = 3, x = 2, E = [], l = 0, m = 0, p;
        for (p = 0; p < u.length; p += 1)
          if (S = u.charAt(p), Object.prototype.hasOwnProperty.call(k, S) || (k[S] = T++, C[S] = true), h = r3 + S, Object.prototype.hasOwnProperty.call(k, h))
            r3 = h;
          else {
            if (Object.prototype.hasOwnProperty.call(C, r3)) {
              if (r3.charCodeAt(0) < 256) {
                for (b = 0; b < x; b++)
                  l = l << 1, m == g - 1 ? (m = 0, E.push(v(l)), l = 0) : m++;
                for (c = r3.charCodeAt(0), b = 0; b < 8; b++)
                  l = l << 1 | c & 1, m == g - 1 ? (m = 0, E.push(v(l)), l = 0) : m++, c = c >> 1;
              } else {
                for (c = 1, b = 0; b < x; b++)
                  l = l << 1 | c, m == g - 1 ? (m = 0, E.push(v(l)), l = 0) : m++, c = 0;
                for (c = r3.charCodeAt(0), b = 0; b < 16; b++)
                  l = l << 1 | c & 1, m == g - 1 ? (m = 0, E.push(v(l)), l = 0) : m++, c = c >> 1;
              }
              d--, d == 0 && (d = Math.pow(2, x), x++), delete C[r3];
            } else
              for (c = k[r3], b = 0; b < x; b++)
                l = l << 1 | c & 1, m == g - 1 ? (m = 0, E.push(v(l)), l = 0) : m++, c = c >> 1;
            d--, d == 0 && (d = Math.pow(2, x), x++), k[h] = T++, r3 = String(S);
          }
        if (r3 !== "") {
          if (Object.prototype.hasOwnProperty.call(C, r3)) {
            if (r3.charCodeAt(0) < 256) {
              for (b = 0; b < x; b++)
                l = l << 1, m == g - 1 ? (m = 0, E.push(v(l)), l = 0) : m++;
              for (c = r3.charCodeAt(0), b = 0; b < 8; b++)
                l = l << 1 | c & 1, m == g - 1 ? (m = 0, E.push(v(l)), l = 0) : m++, c = c >> 1;
            } else {
              for (c = 1, b = 0; b < x; b++)
                l = l << 1 | c, m == g - 1 ? (m = 0, E.push(v(l)), l = 0) : m++, c = 0;
              for (c = r3.charCodeAt(0), b = 0; b < 16; b++)
                l = l << 1 | c & 1, m == g - 1 ? (m = 0, E.push(v(l)), l = 0) : m++, c = c >> 1;
            }
            d--, d == 0 && (d = Math.pow(2, x), x++), delete C[r3];
          } else
            for (c = k[r3], b = 0; b < x; b++)
              l = l << 1 | c & 1, m == g - 1 ? (m = 0, E.push(v(l)), l = 0) : m++, c = c >> 1;
          d--, d == 0 && (d = Math.pow(2, x), x++);
        }
        for (c = 2, b = 0; b < x; b++)
          l = l << 1 | c & 1, m == g - 1 ? (m = 0, E.push(v(l)), l = 0) : m++, c = c >> 1;
        for (; ; )
          if (l = l << 1, m == g - 1) {
            E.push(v(l));
            break;
          } else
            m++;
        return E.join("");
      },
      decompress: function(u) {
        return u == null ? "" : u == "" ? null : o._decompress(u.length, 32768, function(g) {
          return u.charCodeAt(g);
        });
      },
      _decompress: function(u, g, v) {
        var b = [], c = 4, k = 4, C = 3, S = "", h = [], r3, d, T, x, E, l, m, p = { val: v(0), position: g, index: 1 };
        for (r3 = 0; r3 < 3; r3 += 1)
          b[r3] = r3;
        for (T = 0, E = Math.pow(2, 2), l = 1; l != E; )
          x = p.val & p.position, p.position >>= 1, p.position == 0 && (p.position = g, p.val = v(p.index++)), T |= (x > 0 ? 1 : 0) * l, l <<= 1;
        switch (T) {
          case 0:
            for (T = 0, E = Math.pow(2, 8), l = 1; l != E; )
              x = p.val & p.position, p.position >>= 1, p.position == 0 && (p.position = g, p.val = v(p.index++)), T |= (x > 0 ? 1 : 0) * l, l <<= 1;
            m = e(T);
            break;
          case 1:
            for (T = 0, E = Math.pow(2, 16), l = 1; l != E; )
              x = p.val & p.position, p.position >>= 1, p.position == 0 && (p.position = g, p.val = v(p.index++)), T |= (x > 0 ? 1 : 0) * l, l <<= 1;
            m = e(T);
            break;
          case 2:
            return "";
        }
        for (b[3] = m, d = m, h.push(m); ; ) {
          if (p.index > u)
            return "";
          for (T = 0, E = Math.pow(2, C), l = 1; l != E; )
            x = p.val & p.position, p.position >>= 1, p.position == 0 && (p.position = g, p.val = v(p.index++)), T |= (x > 0 ? 1 : 0) * l, l <<= 1;
          switch (m = T) {
            case 0:
              for (T = 0, E = Math.pow(2, 8), l = 1; l != E; )
                x = p.val & p.position, p.position >>= 1, p.position == 0 && (p.position = g, p.val = v(p.index++)), T |= (x > 0 ? 1 : 0) * l, l <<= 1;
              b[k++] = e(T), m = k - 1, c--;
              break;
            case 1:
              for (T = 0, E = Math.pow(2, 16), l = 1; l != E; )
                x = p.val & p.position, p.position >>= 1, p.position == 0 && (p.position = g, p.val = v(p.index++)), T |= (x > 0 ? 1 : 0) * l, l <<= 1;
              b[k++] = e(T), m = k - 1, c--;
              break;
            case 2:
              return h.join("");
          }
          if (c == 0 && (c = Math.pow(2, C), C++), b[m])
            S = b[m];
          else if (m === k)
            S = d + d.charAt(0);
          else
            return null;
          h.push(S), b[k++] = d + S.charAt(0), c--, d = S, c == 0 && (c = Math.pow(2, C), C++);
        }
      }
    };
    return o;
  }();
  n != null ? n.exports = i : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
    return i;
  });
})(gi);
Object.defineProperty(It, "__esModule", { value: true });
It.getParameters = void 0;
var rn = gi.exports;
function an(n) {
  return rn.compressToBase64(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function on(n) {
  return an(JSON.stringify(n));
}
It.getParameters = on;
var Pt = void 0;
var _n = It;
Pt = _n.getParameters;
var vi = { exports: {} };
var yt = {};
var Ot = { exports: {} };
var Gt = {};
var Ht = {};
var $e;
function pe() {
  if ($e)
    return Ht;
  $e = 1;
  function n(t) {
    this.__parent = t, this.__character_count = 0, this.__indent_count = -1, this.__alignment_count = 0, this.__wrap_point_index = 0, this.__wrap_point_character_count = 0, this.__wrap_point_indent_count = -1, this.__wrap_point_alignment_count = 0, this.__items = [];
  }
  n.prototype.clone_empty = function() {
    var t = new n(this.__parent);
    return t.set_indent(this.__indent_count, this.__alignment_count), t;
  }, n.prototype.item = function(t) {
    return t < 0 ? this.__items[this.__items.length + t] : this.__items[t];
  }, n.prototype.has_match = function(t) {
    for (var a = this.__items.length - 1; a >= 0; a--)
      if (this.__items[a].match(t))
        return true;
    return false;
  }, n.prototype.set_indent = function(t, a) {
    this.is_empty() && (this.__indent_count = t || 0, this.__alignment_count = a || 0, this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count));
  }, n.prototype._set_wrap_point = function() {
    this.__parent.wrap_line_length && (this.__wrap_point_index = this.__items.length, this.__wrap_point_character_count = this.__character_count, this.__wrap_point_indent_count = this.__parent.next_line.__indent_count, this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count);
  }, n.prototype._should_wrap = function() {
    return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count;
  }, n.prototype._allow_wrap = function() {
    if (this._should_wrap()) {
      this.__parent.add_new_line();
      var t = this.__parent.current_line;
      return t.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count), t.__items = this.__items.slice(this.__wrap_point_index), this.__items = this.__items.slice(0, this.__wrap_point_index), t.__character_count += this.__character_count - this.__wrap_point_character_count, this.__character_count = this.__wrap_point_character_count, t.__items[0] === " " && (t.__items.splice(0, 1), t.__character_count -= 1), true;
    }
    return false;
  }, n.prototype.is_empty = function() {
    return this.__items.length === 0;
  }, n.prototype.last = function() {
    return this.is_empty() ? null : this.__items[this.__items.length - 1];
  }, n.prototype.push = function(t) {
    this.__items.push(t);
    var a = t.lastIndexOf(`
`);
    a !== -1 ? this.__character_count = t.length - a : this.__character_count += t.length;
  }, n.prototype.pop = function() {
    var t = null;
    return this.is_empty() || (t = this.__items.pop(), this.__character_count -= t.length), t;
  }, n.prototype._remove_indent = function() {
    this.__indent_count > 0 && (this.__indent_count -= 1, this.__character_count -= this.__parent.indent_size);
  }, n.prototype._remove_wrap_indent = function() {
    this.__wrap_point_indent_count > 0 && (this.__wrap_point_indent_count -= 1);
  }, n.prototype.trim = function() {
    for (; this.last() === " "; )
      this.__items.pop(), this.__character_count -= 1;
  }, n.prototype.toString = function() {
    var t = "";
    return this.is_empty() ? this.__parent.indent_empty_lines && (t = this.__parent.get_indent_string(this.__indent_count)) : (t = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count), t += this.__items.join("")), t;
  };
  function i(t, a) {
    this.__cache = [""], this.__indent_size = t.indent_size, this.__indent_string = t.indent_char, t.indent_with_tabs || (this.__indent_string = new Array(t.indent_size + 1).join(t.indent_char)), a = a || "", t.indent_level > 0 && (a = new Array(t.indent_level + 1).join(this.__indent_string)), this.__base_string = a, this.__base_string_length = a.length;
  }
  i.prototype.get_indent_size = function(t, a) {
    var _ = this.__base_string_length;
    return a = a || 0, t < 0 && (_ = 0), _ += t * this.__indent_size, _ += a, _;
  }, i.prototype.get_indent_string = function(t, a) {
    var _ = this.__base_string;
    return a = a || 0, t < 0 && (t = 0, _ = ""), a += t * this.__indent_size, this.__ensure_cache(a), _ += this.__cache[a], _;
  }, i.prototype.__ensure_cache = function(t) {
    for (; t >= this.__cache.length; )
      this.__add_column();
  }, i.prototype.__add_column = function() {
    var t = this.__cache.length, a = 0, _ = "";
    this.__indent_size && t >= this.__indent_size && (a = Math.floor(t / this.__indent_size), t -= a * this.__indent_size, _ = new Array(a + 1).join(this.__indent_string)), t && (_ += new Array(t + 1).join(" ")), this.__cache.push(_);
  };
  function e(t, a) {
    this.__indent_cache = new i(t, a), this.raw = false, this._end_with_newline = t.end_with_newline, this.indent_size = t.indent_size, this.wrap_line_length = t.wrap_line_length, this.indent_empty_lines = t.indent_empty_lines, this.__lines = [], this.previous_line = null, this.current_line = null, this.next_line = new n(this), this.space_before_token = false, this.non_breaking_space = false, this.previous_token_wrapped = false, this.__add_outputline();
  }
  return e.prototype.__add_outputline = function() {
    this.previous_line = this.current_line, this.current_line = this.next_line.clone_empty(), this.__lines.push(this.current_line);
  }, e.prototype.get_line_number = function() {
    return this.__lines.length;
  }, e.prototype.get_indent_string = function(t, a) {
    return this.__indent_cache.get_indent_string(t, a);
  }, e.prototype.get_indent_size = function(t, a) {
    return this.__indent_cache.get_indent_size(t, a);
  }, e.prototype.is_empty = function() {
    return !this.previous_line && this.current_line.is_empty();
  }, e.prototype.add_new_line = function(t) {
    return this.is_empty() || !t && this.just_added_newline() ? false : (this.raw || this.__add_outputline(), true);
  }, e.prototype.get_code = function(t) {
    this.trim(true);
    var a = this.current_line.pop();
    a && (a[a.length - 1] === `
` && (a = a.replace(/\n+$/g, "")), this.current_line.push(a)), this._end_with_newline && this.__add_outputline();
    var _ = this.__lines.join(`
`);
    return t !== `
` && (_ = _.replace(/[\n]/g, t)), _;
  }, e.prototype.set_wrap_point = function() {
    this.current_line._set_wrap_point();
  }, e.prototype.set_indent = function(t, a) {
    return t = t || 0, a = a || 0, this.next_line.set_indent(t, a), this.__lines.length > 1 ? (this.current_line.set_indent(t, a), true) : (this.current_line.set_indent(), false);
  }, e.prototype.add_raw_token = function(t) {
    for (var a = 0; a < t.newlines; a++)
      this.__add_outputline();
    this.current_line.set_indent(-1), this.current_line.push(t.whitespace_before), this.current_line.push(t.text), this.space_before_token = false, this.non_breaking_space = false, this.previous_token_wrapped = false;
  }, e.prototype.add_token = function(t) {
    this.__add_space_before_token(), this.current_line.push(t), this.space_before_token = false, this.non_breaking_space = false, this.previous_token_wrapped = this.current_line._allow_wrap();
  }, e.prototype.__add_space_before_token = function() {
    this.space_before_token && !this.just_added_newline() && (this.non_breaking_space || this.set_wrap_point(), this.current_line.push(" "));
  }, e.prototype.remove_indent = function(t) {
    for (var a = this.__lines.length; t < a; )
      this.__lines[t]._remove_indent(), t++;
    this.current_line._remove_wrap_indent();
  }, e.prototype.trim = function(t) {
    for (t = t === void 0 ? false : t, this.current_line.trim(); t && this.__lines.length > 1 && this.current_line.is_empty(); )
      this.__lines.pop(), this.current_line = this.__lines[this.__lines.length - 1], this.current_line.trim();
    this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
  }, e.prototype.just_added_newline = function() {
    return this.current_line.is_empty();
  }, e.prototype.just_added_blankline = function() {
    return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty();
  }, e.prototype.ensure_empty_line_above = function(t, a) {
    for (var _ = this.__lines.length - 2; _ >= 0; ) {
      var f = this.__lines[_];
      if (f.is_empty())
        break;
      if (f.item(0).indexOf(t) !== 0 && f.item(-1) !== a) {
        this.__lines.splice(_ + 1, 0, new n(this)), this.previous_line = this.__lines[this.__lines.length - 2];
        break;
      }
      _--;
    }
  }, Ht.Output = e, Ht;
}
var Xt = {};
var Ie;
function bi() {
  if (Ie)
    return Xt;
  Ie = 1;
  function n(i, e, t, a) {
    this.type = i, this.text = e, this.comments_before = null, this.newlines = t || 0, this.whitespace_before = a || "", this.parent = null, this.next = null, this.previous = null, this.opened = null, this.closed = null, this.directives = null;
  }
  return Xt.Token = n, Xt;
}
var Qt = {};
var Pe;
function yi() {
  return Pe || (Pe = 1, function(n) {
    var i = "\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a", e = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a", t = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc", a = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f", _ = "\\\\u[0-9a-fA-F]{4}|\\\\u\\{[0-9a-fA-F]+\\}", f = "(?:" + _ + "|[" + i + t + "])", o = "(?:" + _ + "|[" + e + t + a + "])*";
    n.identifier = new RegExp(f + o, "g"), n.identifierStart = new RegExp(f), n.identifierMatch = new RegExp("(?:" + _ + "|[" + e + t + a + "])+"), n.newline = /[\n\r\u2028\u2029]/, n.lineBreak = new RegExp(`\r
|` + n.newline.source), n.allLineBreaks = new RegExp(n.lineBreak.source, "g");
  }(Qt)), Qt;
}
var Jt = {};
var wt = {};
var Be;
function he() {
  if (Be)
    return wt;
  Be = 1;
  function n(t, a) {
    this.raw_options = i(t, a), this.disabled = this._get_boolean("disabled"), this.eol = this._get_characters("eol", "auto"), this.end_with_newline = this._get_boolean("end_with_newline"), this.indent_size = this._get_number("indent_size", 4), this.indent_char = this._get_characters("indent_char", " "), this.indent_level = this._get_number("indent_level"), this.preserve_newlines = this._get_boolean("preserve_newlines", true), this.max_preserve_newlines = this._get_number("max_preserve_newlines", 32786), this.preserve_newlines || (this.max_preserve_newlines = 0), this.indent_with_tabs = this._get_boolean("indent_with_tabs", this.indent_char === "	"), this.indent_with_tabs && (this.indent_char = "	", this.indent_size === 1 && (this.indent_size = 4)), this.wrap_line_length = this._get_number("wrap_line_length", this._get_number("max_char")), this.indent_empty_lines = this._get_boolean("indent_empty_lines"), this.templating = this._get_selection_list("templating", ["auto", "none", "angular", "django", "erb", "handlebars", "php", "smarty"], ["auto"]);
  }
  n.prototype._get_array = function(t, a) {
    var _ = this.raw_options[t], f = a || [];
    return typeof _ == "object" ? _ !== null && typeof _.concat == "function" && (f = _.concat()) : typeof _ == "string" && (f = _.split(/[^a-zA-Z0-9_\/\-]+/)), f;
  }, n.prototype._get_boolean = function(t, a) {
    var _ = this.raw_options[t], f = _ === void 0 ? !!a : !!_;
    return f;
  }, n.prototype._get_characters = function(t, a) {
    var _ = this.raw_options[t], f = a || "";
    return typeof _ == "string" && (f = _.replace(/\\r/, "\r").replace(/\\n/, `
`).replace(/\\t/, "	")), f;
  }, n.prototype._get_number = function(t, a) {
    var _ = this.raw_options[t];
    a = parseInt(a, 10), isNaN(a) && (a = 0);
    var f = parseInt(_, 10);
    return isNaN(f) && (f = a), f;
  }, n.prototype._get_selection = function(t, a, _) {
    var f = this._get_selection_list(t, a, _);
    if (f.length !== 1)
      throw new Error(
        "Invalid Option Value: The option '" + t + `' can only be one of the following values:
` + a + `
You passed in: '` + this.raw_options[t] + "'"
      );
    return f[0];
  }, n.prototype._get_selection_list = function(t, a, _) {
    if (!a || a.length === 0)
      throw new Error("Selection list cannot be empty.");
    if (_ = _ || [a[0]], !this._is_valid_selection(_, a))
      throw new Error("Invalid Default Value!");
    var f = this._get_array(t, _);
    if (!this._is_valid_selection(f, a))
      throw new Error(
        "Invalid Option Value: The option '" + t + `' can contain only the following values:
` + a + `
You passed in: '` + this.raw_options[t] + "'"
      );
    return f;
  }, n.prototype._is_valid_selection = function(t, a) {
    return t.length && a.length && !t.some(function(_) {
      return a.indexOf(_) === -1;
    });
  };
  function i(t, a) {
    var _ = {};
    t = e(t);
    var f;
    for (f in t)
      f !== a && (_[f] = t[f]);
    if (a && t[a])
      for (f in t[a])
        _[f] = t[a][f];
    return _;
  }
  function e(t) {
    var a = {}, _;
    for (_ in t) {
      var f = _.replace(/-/g, "_");
      a[f] = t[_];
    }
    return a;
  }
  return wt.Options = n, wt.normalizeOpts = e, wt.mergeOpts = i, wt;
}
var Me;
function wi() {
  if (Me)
    return Jt;
  Me = 1;
  var n = he().Options, i = ["before-newline", "after-newline", "preserve-newline"];
  function e(t) {
    n.call(this, t, "js");
    var a = this.raw_options.brace_style || null;
    a === "expand-strict" ? this.raw_options.brace_style = "expand" : a === "collapse-preserve-inline" ? this.raw_options.brace_style = "collapse,preserve-inline" : this.raw_options.braces_on_own_line !== void 0 && (this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse");
    var _ = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
    this.brace_preserve_inline = false, this.brace_style = "collapse";
    for (var f = 0; f < _.length; f++)
      _[f] === "preserve-inline" ? this.brace_preserve_inline = true : this.brace_style = _[f];
    this.unindent_chained_methods = this._get_boolean("unindent_chained_methods"), this.break_chained_methods = this._get_boolean("break_chained_methods"), this.space_in_paren = this._get_boolean("space_in_paren"), this.space_in_empty_paren = this._get_boolean("space_in_empty_paren"), this.jslint_happy = this._get_boolean("jslint_happy"), this.space_after_anon_function = this._get_boolean("space_after_anon_function"), this.space_after_named_function = this._get_boolean("space_after_named_function"), this.keep_array_indentation = this._get_boolean("keep_array_indentation"), this.space_before_conditional = this._get_boolean("space_before_conditional", true), this.unescape_strings = this._get_boolean("unescape_strings"), this.e4x = this._get_boolean("e4x"), this.comma_first = this._get_boolean("comma_first"), this.operator_position = this._get_selection("operator_position", i), this.test_output_raw = this._get_boolean("test_output_raw"), this.jslint_happy && (this.space_after_anon_function = true);
  }
  return e.prototype = new n(), Jt.Options = e, Jt;
}
var ct = {};
var Zt = {};
var We;
function ce() {
  if (We)
    return Zt;
  We = 1;
  var n = RegExp.prototype.hasOwnProperty("sticky");
  function i(e) {
    this.__input = e || "", this.__input_length = this.__input.length, this.__position = 0;
  }
  return i.prototype.restart = function() {
    this.__position = 0;
  }, i.prototype.back = function() {
    this.__position > 0 && (this.__position -= 1);
  }, i.prototype.hasNext = function() {
    return this.__position < this.__input_length;
  }, i.prototype.next = function() {
    var e = null;
    return this.hasNext() && (e = this.__input.charAt(this.__position), this.__position += 1), e;
  }, i.prototype.peek = function(e) {
    var t = null;
    return e = e || 0, e += this.__position, e >= 0 && e < this.__input_length && (t = this.__input.charAt(e)), t;
  }, i.prototype.__match = function(e, t) {
    e.lastIndex = t;
    var a = e.exec(this.__input);
    return a && !(n && e.sticky) && a.index !== t && (a = null), a;
  }, i.prototype.test = function(e, t) {
    return t = t || 0, t += this.__position, t >= 0 && t < this.__input_length ? !!this.__match(e, t) : false;
  }, i.prototype.testChar = function(e, t) {
    var a = this.peek(t);
    return e.lastIndex = 0, a !== null && e.test(a);
  }, i.prototype.match = function(e) {
    var t = this.__match(e, this.__position);
    return t ? this.__position += t[0].length : t = null, t;
  }, i.prototype.read = function(e, t, a) {
    var _ = "", f;
    return e && (f = this.match(e), f && (_ += f[0])), t && (f || !e) && (_ += this.readUntil(t, a)), _;
  }, i.prototype.readUntil = function(e, t) {
    var a = "", _ = this.__position;
    e.lastIndex = this.__position;
    var f = e.exec(this.__input);
    return f ? (_ = f.index, t && (_ += f[0].length)) : _ = this.__input_length, a = this.__input.substring(this.__position, _), this.__position = _, a;
  }, i.prototype.readUntilAfter = function(e) {
    return this.readUntil(e, true);
  }, i.prototype.get_regexp = function(e, t) {
    var a = null, _ = "g";
    return t && n && (_ = "y"), typeof e == "string" && e !== "" ? a = new RegExp(e, _) : e && (a = new RegExp(e.source, _)), a;
  }, i.prototype.get_literal_regexp = function(e) {
    return RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
  }, i.prototype.peekUntilAfter = function(e) {
    var t = this.__position, a = this.readUntilAfter(e);
    return this.__position = t, a;
  }, i.prototype.lookBack = function(e) {
    var t = this.__position - 1;
    return t >= e.length && this.__input.substring(t - e.length, t).toLowerCase() === e;
  }, Zt.InputScanner = i, Zt;
}
var Tt = {};
var Yt = {};
var Ue;
function un() {
  if (Ue)
    return Yt;
  Ue = 1;
  function n(i) {
    this.__tokens = [], this.__tokens_length = this.__tokens.length, this.__position = 0, this.__parent_token = i;
  }
  return n.prototype.restart = function() {
    this.__position = 0;
  }, n.prototype.isEmpty = function() {
    return this.__tokens_length === 0;
  }, n.prototype.hasNext = function() {
    return this.__position < this.__tokens_length;
  }, n.prototype.next = function() {
    var i = null;
    return this.hasNext() && (i = this.__tokens[this.__position], this.__position += 1), i;
  }, n.prototype.peek = function(i) {
    var e = null;
    return i = i || 0, i += this.__position, i >= 0 && i < this.__tokens_length && (e = this.__tokens[i]), e;
  }, n.prototype.add = function(i) {
    this.__parent_token && (i.parent = this.__parent_token), this.__tokens.push(i), this.__tokens_length += 1;
  }, Yt.TokenStream = n, Yt;
}
var te = {};
var ee = {};
var Fe;
function Bt() {
  if (Fe)
    return ee;
  Fe = 1;
  function n(i, e) {
    this._input = i, this._starting_pattern = null, this._match_pattern = null, this._until_pattern = null, this._until_after = false, e && (this._starting_pattern = this._input.get_regexp(e._starting_pattern, true), this._match_pattern = this._input.get_regexp(e._match_pattern, true), this._until_pattern = this._input.get_regexp(e._until_pattern), this._until_after = e._until_after);
  }
  return n.prototype.read = function() {
    var i = this._input.read(this._starting_pattern);
    return (!this._starting_pattern || i) && (i += this._input.read(this._match_pattern, this._until_pattern, this._until_after)), i;
  }, n.prototype.read_match = function() {
    return this._input.match(this._match_pattern);
  }, n.prototype.until_after = function(i) {
    var e = this._create();
    return e._until_after = true, e._until_pattern = this._input.get_regexp(i), e._update(), e;
  }, n.prototype.until = function(i) {
    var e = this._create();
    return e._until_after = false, e._until_pattern = this._input.get_regexp(i), e._update(), e;
  }, n.prototype.starting_with = function(i) {
    var e = this._create();
    return e._starting_pattern = this._input.get_regexp(i, true), e._update(), e;
  }, n.prototype.matching = function(i) {
    var e = this._create();
    return e._match_pattern = this._input.get_regexp(i, true), e._update(), e;
  }, n.prototype._create = function() {
    return new n(this._input, this);
  }, n.prototype._update = function() {
  }, ee.Pattern = n, ee;
}
var ze;
function ln() {
  if (ze)
    return te;
  ze = 1;
  var n = Bt().Pattern;
  function i(e, t) {
    n.call(this, e, t), t ? this._line_regexp = this._input.get_regexp(t._line_regexp) : this.__set_whitespace_patterns("", ""), this.newline_count = 0, this.whitespace_before_token = "";
  }
  return i.prototype = new n(), i.prototype.__set_whitespace_patterns = function(e, t) {
    e += "\\t ", t += "\\n\\r", this._match_pattern = this._input.get_regexp(
      "[" + e + t + "]+",
      true
    ), this._newline_regexp = this._input.get_regexp(
      "\\r\\n|[" + t + "]"
    );
  }, i.prototype.read = function() {
    this.newline_count = 0, this.whitespace_before_token = "";
    var e = this._input.read(this._match_pattern);
    if (e === " ")
      this.whitespace_before_token = " ";
    else if (e) {
      var t = this.__split(this._newline_regexp, e);
      this.newline_count = t.length - 1, this.whitespace_before_token = t[this.newline_count];
    }
    return e;
  }, i.prototype.matching = function(e, t) {
    var a = this._create();
    return a.__set_whitespace_patterns(e, t), a._update(), a;
  }, i.prototype._create = function() {
    return new i(this._input, this);
  }, i.prototype.__split = function(e, t) {
    e.lastIndex = 0;
    for (var a = 0, _ = [], f = e.exec(t); f; )
      _.push(t.substring(a, f.index)), a = f.index + f[0].length, f = e.exec(t);
    return a < t.length ? _.push(t.substring(a, t.length)) : _.push(""), _;
  }, te.WhitespacePattern = i, te;
}
var Ke;
function Dt() {
  if (Ke)
    return Tt;
  Ke = 1;
  var n = ce().InputScanner, i = bi().Token, e = un().TokenStream, t = ln().WhitespacePattern, a = {
    START: "TK_START",
    RAW: "TK_RAW",
    EOF: "TK_EOF"
  }, _ = function(f, o) {
    this._input = new n(f), this._options = o || {}, this.__tokens = null, this._patterns = {}, this._patterns.whitespace = new t(this._input);
  };
  return _.prototype.tokenize = function() {
    this._input.restart(), this.__tokens = new e(), this._reset();
    for (var f, o = new i(a.START, ""), u = null, g = [], v = new e(); o.type !== a.EOF; ) {
      for (f = this._get_next_token(o, u); this._is_comment(f); )
        v.add(f), f = this._get_next_token(o, u);
      v.isEmpty() || (f.comments_before = v, v = new e()), f.parent = u, this._is_opening(f) ? (g.push(u), u = f) : u && this._is_closing(f, u) && (f.opened = u, u.closed = f, u = g.pop(), f.parent = u), f.previous = o, o.next = f, this.__tokens.add(f), o = f;
    }
    return this.__tokens;
  }, _.prototype._is_first_token = function() {
    return this.__tokens.isEmpty();
  }, _.prototype._reset = function() {
  }, _.prototype._get_next_token = function(f, o) {
    this._readWhitespace();
    var u = this._input.read(/.+/g);
    return u ? this._create_token(a.RAW, u) : this._create_token(a.EOF, "");
  }, _.prototype._is_comment = function(f) {
    return false;
  }, _.prototype._is_opening = function(f) {
    return false;
  }, _.prototype._is_closing = function(f, o) {
    return false;
  }, _.prototype._create_token = function(f, o) {
    var u = new i(
      f,
      o,
      this._patterns.whitespace.newline_count,
      this._patterns.whitespace.whitespace_before_token
    );
    return u;
  }, _.prototype._readWhitespace = function() {
    return this._patterns.whitespace.read();
  }, Tt.Tokenizer = _, Tt.TOKEN = a, Tt;
}
var ie = {};
var qe;
function fe() {
  if (qe)
    return ie;
  qe = 1;
  function n(i, e) {
    i = typeof i == "string" ? i : i.source, e = typeof e == "string" ? e : e.source, this.__directives_block_pattern = new RegExp(i + / beautify( \w+[:]\w+)+ /.source + e, "g"), this.__directive_pattern = / (\w+)[:](\w+)/g, this.__directives_end_ignore_pattern = new RegExp(i + /\sbeautify\signore:end\s/.source + e, "g");
  }
  return n.prototype.get_directives = function(i) {
    if (!i.match(this.__directives_block_pattern))
      return null;
    var e = {};
    this.__directive_pattern.lastIndex = 0;
    for (var t = this.__directive_pattern.exec(i); t; )
      e[t[1]] = t[2], t = this.__directive_pattern.exec(i);
    return e;
  }, n.prototype.readIgnored = function(i) {
    return i.readUntilAfter(this.__directives_end_ignore_pattern);
  }, ie.Directives = n, ie;
}
var ne = {};
var Ve;
function xi() {
  if (Ve)
    return ne;
  Ve = 1;
  var n = Bt().Pattern, i = {
    django: false,
    erb: false,
    handlebars: false,
    php: false,
    smarty: false,
    angular: false
  };
  function e(t, a) {
    n.call(this, t, a), this.__template_pattern = null, this._disabled = Object.assign({}, i), this._excluded = Object.assign({}, i), a && (this.__template_pattern = this._input.get_regexp(a.__template_pattern), this._excluded = Object.assign(this._excluded, a._excluded), this._disabled = Object.assign(this._disabled, a._disabled));
    var _ = new n(t);
    this.__patterns = {
      handlebars_comment: _.starting_with(/{{!--/).until_after(/--}}/),
      handlebars_unescaped: _.starting_with(/{{{/).until_after(/}}}/),
      handlebars: _.starting_with(/{{/).until_after(/}}/),
      php: _.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
      erb: _.starting_with(/<%[^%]/).until_after(/[^%]%>/),
      django: _.starting_with(/{%/).until_after(/%}/),
      django_value: _.starting_with(/{{/).until_after(/}}/),
      django_comment: _.starting_with(/{#/).until_after(/#}/),
      smarty: _.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
      smarty_comment: _.starting_with(/{\*/).until_after(/\*}/),
      smarty_literal: _.starting_with(/{literal}/).until_after(/{\/literal}/)
    };
  }
  return e.prototype = new n(), e.prototype._create = function() {
    return new e(this._input, this);
  }, e.prototype._update = function() {
    this.__set_templated_pattern();
  }, e.prototype.disable = function(t) {
    var a = this._create();
    return a._disabled[t] = true, a._update(), a;
  }, e.prototype.read_options = function(t) {
    var a = this._create();
    for (var _ in i)
      a._disabled[_] = t.templating.indexOf(_) === -1;
    return a._update(), a;
  }, e.prototype.exclude = function(t) {
    var a = this._create();
    return a._excluded[t] = true, a._update(), a;
  }, e.prototype.read = function() {
    var t = "";
    this._match_pattern ? t = this._input.read(this._starting_pattern) : t = this._input.read(this._starting_pattern, this.__template_pattern);
    for (var a = this._read_template(); a; )
      this._match_pattern ? a += this._input.read(this._match_pattern) : a += this._input.readUntil(this.__template_pattern), t += a, a = this._read_template();
    return this._until_after && (t += this._input.readUntilAfter(this._until_pattern)), t;
  }, e.prototype.__set_templated_pattern = function() {
    var t = [];
    this._disabled.php || t.push(this.__patterns.php._starting_pattern.source), this._disabled.handlebars || t.push(this.__patterns.handlebars._starting_pattern.source), this._disabled.erb || t.push(this.__patterns.erb._starting_pattern.source), this._disabled.django || (t.push(this.__patterns.django._starting_pattern.source), t.push(this.__patterns.django_value._starting_pattern.source), t.push(this.__patterns.django_comment._starting_pattern.source)), this._disabled.smarty || t.push(this.__patterns.smarty._starting_pattern.source), this._until_pattern && t.push(this._until_pattern.source), this.__template_pattern = this._input.get_regexp("(?:" + t.join("|") + ")");
  }, e.prototype._read_template = function() {
    var t = "", a = this._input.peek();
    if (a === "<") {
      var _ = this._input.peek(1);
      !this._disabled.php && !this._excluded.php && _ === "?" && (t = t || this.__patterns.php.read()), !this._disabled.erb && !this._excluded.erb && _ === "%" && (t = t || this.__patterns.erb.read());
    } else
      a === "{" && (!this._disabled.handlebars && !this._excluded.handlebars && (t = t || this.__patterns.handlebars_comment.read(), t = t || this.__patterns.handlebars_unescaped.read(), t = t || this.__patterns.handlebars.read()), this._disabled.django || (!this._excluded.django && !this._excluded.handlebars && (t = t || this.__patterns.django_value.read()), this._excluded.django || (t = t || this.__patterns.django_comment.read(), t = t || this.__patterns.django.read())), this._disabled.smarty || this._disabled.django && this._disabled.handlebars && (t = t || this.__patterns.smarty_comment.read(), t = t || this.__patterns.smarty_literal.read(), t = t || this.__patterns.smarty.read()));
    return t;
  }, ne.TemplatablePattern = e, ne;
}
var Ge;
function kt() {
  if (Ge)
    return ct;
  Ge = 1;
  var n = ce().InputScanner, i = Dt().Tokenizer, e = Dt().TOKEN, t = fe().Directives, a = yi(), _ = Bt().Pattern, f = xi().TemplatablePattern;
  function o(l, m) {
    return m.indexOf(l) !== -1;
  }
  var u = {
    START_EXPR: "TK_START_EXPR",
    END_EXPR: "TK_END_EXPR",
    START_BLOCK: "TK_START_BLOCK",
    END_BLOCK: "TK_END_BLOCK",
    WORD: "TK_WORD",
    RESERVED: "TK_RESERVED",
    SEMICOLON: "TK_SEMICOLON",
    STRING: "TK_STRING",
    EQUALS: "TK_EQUALS",
    OPERATOR: "TK_OPERATOR",
    COMMA: "TK_COMMA",
    BLOCK_COMMENT: "TK_BLOCK_COMMENT",
    COMMENT: "TK_COMMENT",
    DOT: "TK_DOT",
    UNKNOWN: "TK_UNKNOWN",
    START: e.START,
    RAW: e.RAW,
    EOF: e.EOF
  }, g = new t(/\/\*/, /\*\//), v = /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/, b = /[0-9]/, c = /[^\d\.]/, k = ">>> === !== &&= ??= ||= << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *".split(" "), C = ">>>= ... >>= <<= === >>> !== **= &&= ??= ||= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |";
  C = C.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"), C = "\\?\\.(?!\\d) " + C, C = C.replace(/ /g, "|");
  var S = new RegExp(C), h = "continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(","), r3 = h.concat(["do", "in", "of", "else", "get", "set", "new", "catch", "finally", "typeof", "yield", "async", "await", "from", "as", "class", "extends"]), d = new RegExp("^(?:" + r3.join("|") + ")$"), T, x = function(l, m) {
    i.call(this, l, m), this._patterns.whitespace = this._patterns.whitespace.matching(
      /\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,
      /\u2028\u2029/.source
    );
    var p = new _(this._input), O = new f(this._input).read_options(this._options);
    this.__patterns = {
      template: O,
      identifier: O.starting_with(a.identifier).matching(a.identifierMatch),
      number: p.matching(v),
      punct: p.matching(S),
      comment: p.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
      block_comment: p.starting_with(/\/\*/).until_after(/\*\//),
      html_comment_start: p.matching(/<!--/),
      html_comment_end: p.matching(/-->/),
      include: p.starting_with(/#include/).until_after(a.lineBreak),
      shebang: p.starting_with(/#!/).until_after(a.lineBreak),
      xml: p.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/),
      single_quote: O.until(/['\\\n\r\u2028\u2029]/),
      double_quote: O.until(/["\\\n\r\u2028\u2029]/),
      template_text: O.until(/[`\\$]/),
      template_expression: O.until(/[`}\\]/)
    };
  };
  x.prototype = new i(), x.prototype._is_comment = function(l) {
    return l.type === u.COMMENT || l.type === u.BLOCK_COMMENT || l.type === u.UNKNOWN;
  }, x.prototype._is_opening = function(l) {
    return l.type === u.START_BLOCK || l.type === u.START_EXPR;
  }, x.prototype._is_closing = function(l, m) {
    return (l.type === u.END_BLOCK || l.type === u.END_EXPR) && m && (l.text === "]" && m.text === "[" || l.text === ")" && m.text === "(" || l.text === "}" && m.text === "{");
  }, x.prototype._reset = function() {
    T = false;
  }, x.prototype._get_next_token = function(l, m) {
    var p = null;
    this._readWhitespace();
    var O = this._input.peek();
    return O === null ? this._create_token(u.EOF, "") : (p = p || this._read_non_javascript(O), p = p || this._read_string(O), p = p || this._read_pair(O, this._input.peek(1)), p = p || this._read_word(l), p = p || this._read_singles(O), p = p || this._read_comment(O), p = p || this._read_regexp(O, l), p = p || this._read_xml(O, l), p = p || this._read_punctuation(), p = p || this._create_token(u.UNKNOWN, this._input.next()), p);
  }, x.prototype._read_word = function(l) {
    var m;
    if (m = this.__patterns.identifier.read(), m !== "")
      return m = m.replace(a.allLineBreaks, `
`), !(l.type === u.DOT || l.type === u.RESERVED && (l.text === "set" || l.text === "get")) && d.test(m) ? (m === "in" || m === "of") && (l.type === u.WORD || l.type === u.STRING) ? this._create_token(u.OPERATOR, m) : this._create_token(u.RESERVED, m) : this._create_token(u.WORD, m);
    if (m = this.__patterns.number.read(), m !== "")
      return this._create_token(u.WORD, m);
  }, x.prototype._read_singles = function(l) {
    var m = null;
    return l === "(" || l === "[" ? m = this._create_token(u.START_EXPR, l) : l === ")" || l === "]" ? m = this._create_token(u.END_EXPR, l) : l === "{" ? m = this._create_token(u.START_BLOCK, l) : l === "}" ? m = this._create_token(u.END_BLOCK, l) : l === ";" ? m = this._create_token(u.SEMICOLON, l) : l === "." && c.test(this._input.peek(1)) ? m = this._create_token(u.DOT, l) : l === "," && (m = this._create_token(u.COMMA, l)), m && this._input.next(), m;
  }, x.prototype._read_pair = function(l, m) {
    var p = null;
    return l === "#" && m === "{" && (p = this._create_token(u.START_BLOCK, l + m)), p && (this._input.next(), this._input.next()), p;
  }, x.prototype._read_punctuation = function() {
    var l = this.__patterns.punct.read();
    if (l !== "")
      return l === "=" ? this._create_token(u.EQUALS, l) : l === "?." ? this._create_token(u.DOT, l) : this._create_token(u.OPERATOR, l);
  }, x.prototype._read_non_javascript = function(l) {
    var m = "";
    if (l === "#") {
      if (this._is_first_token() && (m = this.__patterns.shebang.read(), m))
        return this._create_token(u.UNKNOWN, m.trim() + `
`);
      if (m = this.__patterns.include.read(), m)
        return this._create_token(u.UNKNOWN, m.trim() + `
`);
      l = this._input.next();
      var p = "#";
      if (this._input.hasNext() && this._input.testChar(b)) {
        do
          l = this._input.next(), p += l;
        while (this._input.hasNext() && l !== "#" && l !== "=");
        return l === "#" || (this._input.peek() === "[" && this._input.peek(1) === "]" ? (p += "[]", this._input.next(), this._input.next()) : this._input.peek() === "{" && this._input.peek(1) === "}" && (p += "{}", this._input.next(), this._input.next())), this._create_token(u.WORD, p);
      }
      this._input.back();
    } else if (l === "<" && this._is_first_token()) {
      if (m = this.__patterns.html_comment_start.read(), m) {
        for (; this._input.hasNext() && !this._input.testChar(a.newline); )
          m += this._input.next();
        return T = true, this._create_token(u.COMMENT, m);
      }
    } else if (T && l === "-" && (m = this.__patterns.html_comment_end.read(), m))
      return T = false, this._create_token(u.COMMENT, m);
    return null;
  }, x.prototype._read_comment = function(l) {
    var m = null;
    if (l === "/") {
      var p = "";
      if (this._input.peek(1) === "*") {
        p = this.__patterns.block_comment.read();
        var O = g.get_directives(p);
        O && O.ignore === "start" && (p += g.readIgnored(this._input)), p = p.replace(a.allLineBreaks, `
`), m = this._create_token(u.BLOCK_COMMENT, p), m.directives = O;
      } else
        this._input.peek(1) === "/" && (p = this.__patterns.comment.read(), m = this._create_token(u.COMMENT, p));
    }
    return m;
  }, x.prototype._read_string = function(l) {
    if (l === "`" || l === "'" || l === '"') {
      var m = this._input.next();
      return this.has_char_escapes = false, l === "`" ? m += this._read_string_recursive("`", true, "${") : m += this._read_string_recursive(l), this.has_char_escapes && this._options.unescape_strings && (m = E(m)), this._input.peek() === l && (m += this._input.next()), m = m.replace(a.allLineBreaks, `
`), this._create_token(u.STRING, m);
    }
    return null;
  }, x.prototype._allow_regexp_or_xml = function(l) {
    return l.type === u.RESERVED && o(l.text, ["return", "case", "throw", "else", "do", "typeof", "yield"]) || l.type === u.END_EXPR && l.text === ")" && l.opened.previous.type === u.RESERVED && o(l.opened.previous.text, ["if", "while", "for"]) || o(l.type, [
      u.COMMENT,
      u.START_EXPR,
      u.START_BLOCK,
      u.START,
      u.END_BLOCK,
      u.OPERATOR,
      u.EQUALS,
      u.EOF,
      u.SEMICOLON,
      u.COMMA
    ]);
  }, x.prototype._read_regexp = function(l, m) {
    if (l === "/" && this._allow_regexp_or_xml(m)) {
      for (var p = this._input.next(), O = false, s = false; this._input.hasNext() && (O || s || this._input.peek() !== l) && !this._input.testChar(a.newline); )
        p += this._input.peek(), O ? O = false : (O = this._input.peek() === "\\", this._input.peek() === "[" ? s = true : this._input.peek() === "]" && (s = false)), this._input.next();
      return this._input.peek() === l && (p += this._input.next(), p += this._input.read(a.identifier)), this._create_token(u.STRING, p);
    }
    return null;
  }, x.prototype._read_xml = function(l, m) {
    if (this._options.e4x && l === "<" && this._allow_regexp_or_xml(m)) {
      var p = "", O = this.__patterns.xml.read_match();
      if (O) {
        for (var s = O[2].replace(/^{\s+/, "{").replace(/\s+}$/, "}"), y = s.indexOf("{") === 0, w = 0; O; ) {
          var A = !!O[1], N = O[2], j = !!O[O.length - 1] || N.slice(0, 8) === "![CDATA[";
          if (!j && (N === s || y && N.replace(/^{\s+/, "{").replace(/\s+}$/, "}")) && (A ? --w : ++w), p += O[0], w <= 0)
            break;
          O = this.__patterns.xml.read_match();
        }
        return O || (p += this._input.match(/[\s\S]*/g)[0]), p = p.replace(a.allLineBreaks, `
`), this._create_token(u.STRING, p);
      }
    }
    return null;
  };
  function E(l) {
    for (var m = "", p = 0, O = new n(l), s = null; O.hasNext(); )
      if (s = O.match(/([\s]|[^\\]|\\\\)+/g), s && (m += s[0]), O.peek() === "\\") {
        if (O.next(), O.peek() === "x")
          s = O.match(/x([0-9A-Fa-f]{2})/g);
        else if (O.peek() === "u")
          s = O.match(/u([0-9A-Fa-f]{4})/g), s || (s = O.match(/u\{([0-9A-Fa-f]+)\}/g));
        else {
          m += "\\", O.hasNext() && (m += O.next());
          continue;
        }
        if (!s || (p = parseInt(s[1], 16), p > 126 && p <= 255 && s[0].indexOf("x") === 0))
          return l;
        p >= 0 && p < 32 || p > 1114111 ? m += "\\" + s[0] : p === 34 || p === 39 || p === 92 ? m += "\\" + String.fromCharCode(p) : m += String.fromCharCode(p);
      }
    return m;
  }
  return x.prototype._read_string_recursive = function(l, m, p) {
    var O, s;
    l === "'" ? s = this.__patterns.single_quote : l === '"' ? s = this.__patterns.double_quote : l === "`" ? s = this.__patterns.template_text : l === "}" && (s = this.__patterns.template_expression);
    for (var y = s.read(), w = ""; this._input.hasNext(); ) {
      if (w = this._input.next(), w === l || !m && a.newline.test(w)) {
        this._input.back();
        break;
      } else
        w === "\\" && this._input.hasNext() ? (O = this._input.peek(), O === "x" || O === "u" ? this.has_char_escapes = true : O === "\r" && this._input.peek(1) === `
` && this._input.next(), w += this._input.next()) : p && (p === "${" && w === "$" && this._input.peek() === "{" && (w += this._input.next()), p === w && (l === "`" ? w += this._read_string_recursive("}", m, "`") : w += this._read_string_recursive("`", m, "${"), this._input.hasNext() && (w += this._input.next())));
      w += s.read(), y += w;
    }
    return y;
  }, ct.Tokenizer = x, ct.TOKEN = u, ct.positionable_operators = k.slice(), ct.line_starters = h.slice(), ct;
}
var He;
function pn() {
  if (He)
    return Gt;
  He = 1;
  var n = pe().Output, i = bi().Token, e = yi(), t = wi().Options, a = kt().Tokenizer, _ = kt().line_starters, f = kt().positionable_operators, o = kt().TOKEN;
  function u(s, y) {
    return y.indexOf(s) !== -1;
  }
  function g(s) {
    return s.replace(/^\s+/g, "");
  }
  function v(s) {
    for (var y = {}, w = 0; w < s.length; w++)
      y[s[w].replace(/-/g, "_")] = s[w];
    return y;
  }
  function b(s, y) {
    return s && s.type === o.RESERVED && s.text === y;
  }
  function c(s, y) {
    return s && s.type === o.RESERVED && u(s.text, y);
  }
  var k = ["case", "return", "do", "if", "throw", "else", "await", "break", "continue", "async"], C = ["before-newline", "after-newline", "preserve-newline"], S = v(C), h = [S.before_newline, S.preserve_newline], r3 = {
    BlockStatement: "BlockStatement",
    Statement: "Statement",
    ObjectLiteral: "ObjectLiteral",
    ArrayLiteral: "ArrayLiteral",
    ForInitializer: "ForInitializer",
    Conditional: "Conditional",
    Expression: "Expression"
  };
  function d(s, y) {
    y.multiline_frame || y.mode === r3.ForInitializer || y.mode === r3.Conditional || s.remove_indent(y.start_line_index);
  }
  function T(s) {
    s = s.replace(e.allLineBreaks, `
`);
    for (var y = [], w = s.indexOf(`
`); w !== -1; )
      y.push(s.substring(0, w)), s = s.substring(w + 1), w = s.indexOf(`
`);
    return s.length && y.push(s), y;
  }
  function x(s) {
    return s === r3.ArrayLiteral;
  }
  function E(s) {
    return u(s, [r3.Expression, r3.ForInitializer, r3.Conditional]);
  }
  function l(s, y) {
    for (var w = 0; w < s.length; w++) {
      var A = s[w].trim();
      if (A.charAt(0) !== y)
        return false;
    }
    return true;
  }
  function m(s, y) {
    for (var w = 0, A = s.length, N; w < A; w++)
      if (N = s[w], N && N.indexOf(y) !== 0)
        return false;
    return true;
  }
  function p(s, y) {
    y = y || {}, this._source_text = s || "", this._output = null, this._tokens = null, this._last_last_text = null, this._flags = null, this._previous_flags = null, this._flag_store = null, this._options = new t(y);
  }
  p.prototype.create_flags = function(s, y) {
    var w = 0;
    s && (w = s.indentation_level, !this._output.just_added_newline() && s.line_indent_level > w && (w = s.line_indent_level));
    var A = {
      mode: y,
      parent: s,
      last_token: s ? s.last_token : new i(o.START_BLOCK, ""),
      last_word: s ? s.last_word : "",
      declaration_statement: false,
      declaration_assignment: false,
      multiline_frame: false,
      inline_frame: false,
      if_block: false,
      else_block: false,
      class_start_block: false,
      do_block: false,
      do_while: false,
      import_block: false,
      in_case_statement: false,
      in_case: false,
      case_body: false,
      case_block: false,
      indentation_level: w,
      alignment: 0,
      line_indent_level: s ? s.line_indent_level : w,
      start_line_index: this._output.get_line_number(),
      ternary_depth: 0
    };
    return A;
  }, p.prototype._reset = function(s) {
    var y = s.match(/^[\t ]*/)[0];
    this._last_last_text = "", this._output = new n(this._options, y), this._output.raw = this._options.test_output_raw, this._flag_store = [], this.set_mode(r3.BlockStatement);
    var w = new a(s, this._options);
    return this._tokens = w.tokenize(), s;
  }, p.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var s, y = this._reset(this._source_text), w = this._options.eol;
    this._options.eol === "auto" && (w = `
`, y && e.lineBreak.test(y || "") && (w = y.match(e.lineBreak)[0]));
    for (var A = this._tokens.next(); A; )
      this.handle_token(A), this._last_last_text = this._flags.last_token.text, this._flags.last_token = A, A = this._tokens.next();
    return s = this._output.get_code(w), s;
  }, p.prototype.handle_token = function(s, y) {
    s.type === o.START_EXPR ? this.handle_start_expr(s) : s.type === o.END_EXPR ? this.handle_end_expr(s) : s.type === o.START_BLOCK ? this.handle_start_block(s) : s.type === o.END_BLOCK ? this.handle_end_block(s) : s.type === o.WORD ? this.handle_word(s) : s.type === o.RESERVED ? this.handle_word(s) : s.type === o.SEMICOLON ? this.handle_semicolon(s) : s.type === o.STRING ? this.handle_string(s) : s.type === o.EQUALS ? this.handle_equals(s) : s.type === o.OPERATOR ? this.handle_operator(s) : s.type === o.COMMA ? this.handle_comma(s) : s.type === o.BLOCK_COMMENT ? this.handle_block_comment(s, y) : s.type === o.COMMENT ? this.handle_comment(s, y) : s.type === o.DOT ? this.handle_dot(s) : s.type === o.EOF ? this.handle_eof(s) : s.type === o.UNKNOWN ? this.handle_unknown(s, y) : this.handle_unknown(s, y);
  }, p.prototype.handle_whitespace_and_comments = function(s, y) {
    var w = s.newlines, A = this._options.keep_array_indentation && x(this._flags.mode);
    if (s.comments_before)
      for (var N = s.comments_before.next(); N; )
        this.handle_whitespace_and_comments(N, y), this.handle_token(N, y), N = s.comments_before.next();
    if (A)
      for (var j = 0; j < w; j += 1)
        this.print_newline(j > 0, y);
    else if (this._options.max_preserve_newlines && w > this._options.max_preserve_newlines && (w = this._options.max_preserve_newlines), this._options.preserve_newlines && w > 1) {
      this.print_newline(false, y);
      for (var P = 1; P < w; P += 1)
        this.print_newline(true, y);
    }
  };
  var O = ["async", "break", "continue", "return", "throw", "yield"];
  return p.prototype.allow_wrap_or_preserved_newline = function(s, y) {
    if (y = y === void 0 ? false : y, !this._output.just_added_newline()) {
      var w = this._options.preserve_newlines && s.newlines || y, A = u(this._flags.last_token.text, f) || u(s.text, f);
      if (A) {
        var N = u(this._flags.last_token.text, f) && u(this._options.operator_position, h) || u(s.text, f);
        w = w && N;
      }
      if (w)
        this.print_newline(false, true);
      else if (this._options.wrap_line_length) {
        if (c(this._flags.last_token, O))
          return;
        this._output.set_wrap_point();
      }
    }
  }, p.prototype.print_newline = function(s, y) {
    if (!y && this._flags.last_token.text !== ";" && this._flags.last_token.text !== "," && this._flags.last_token.text !== "=" && (this._flags.last_token.type !== o.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++"))
      for (var w = this._tokens.peek(); this._flags.mode === r3.Statement && !(this._flags.if_block && b(w, "else")) && !this._flags.do_block; )
        this.restore_mode();
    this._output.add_new_line(s) && (this._flags.multiline_frame = true);
  }, p.prototype.print_token_line_indentation = function(s) {
    this._output.just_added_newline() && (this._options.keep_array_indentation && s.newlines && (s.text === "[" || x(this._flags.mode)) ? (this._output.current_line.set_indent(-1), this._output.current_line.push(s.whitespace_before), this._output.space_before_token = false) : this._output.set_indent(this._flags.indentation_level, this._flags.alignment) && (this._flags.line_indent_level = this._flags.indentation_level));
  }, p.prototype.print_token = function(s) {
    if (this._output.raw) {
      this._output.add_raw_token(s);
      return;
    }
    if (this._options.comma_first && s.previous && s.previous.type === o.COMMA && this._output.just_added_newline() && this._output.previous_line.last() === ",") {
      var y = this._output.previous_line.pop();
      this._output.previous_line.is_empty() && (this._output.previous_line.push(y), this._output.trim(true), this._output.current_line.pop(), this._output.trim()), this.print_token_line_indentation(s), this._output.add_token(","), this._output.space_before_token = true;
    }
    this.print_token_line_indentation(s), this._output.non_breaking_space = true, this._output.add_token(s.text), this._output.previous_token_wrapped && (this._flags.multiline_frame = true);
  }, p.prototype.indent = function() {
    this._flags.indentation_level += 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }, p.prototype.deindent = function() {
    this._flags.indentation_level > 0 && (!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level) && (this._flags.indentation_level -= 1, this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
  }, p.prototype.set_mode = function(s) {
    this._flags ? (this._flag_store.push(this._flags), this._previous_flags = this._flags) : this._previous_flags = this.create_flags(null, s), this._flags = this.create_flags(this._previous_flags, s), this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }, p.prototype.restore_mode = function() {
    this._flag_store.length > 0 && (this._previous_flags = this._flags, this._flags = this._flag_store.pop(), this._previous_flags.mode === r3.Statement && d(this._output, this._previous_flags), this._output.set_indent(this._flags.indentation_level, this._flags.alignment));
  }, p.prototype.start_of_object_property = function() {
    return this._flags.parent.mode === r3.ObjectLiteral && this._flags.mode === r3.Statement && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || c(this._flags.last_token, ["get", "set"]));
  }, p.prototype.start_of_statement = function(s) {
    var y = false;
    return y = y || c(this._flags.last_token, ["var", "let", "const"]) && s.type === o.WORD, y = y || b(this._flags.last_token, "do"), y = y || !(this._flags.parent.mode === r3.ObjectLiteral && this._flags.mode === r3.Statement) && c(this._flags.last_token, O) && !s.newlines, y = y || b(this._flags.last_token, "else") && !(b(s, "if") && !s.comments_before), y = y || this._flags.last_token.type === o.END_EXPR && (this._previous_flags.mode === r3.ForInitializer || this._previous_flags.mode === r3.Conditional), y = y || this._flags.last_token.type === o.WORD && this._flags.mode === r3.BlockStatement && !this._flags.in_case && !(s.text === "--" || s.text === "++") && this._last_last_text !== "function" && s.type !== o.WORD && s.type !== o.RESERVED, y = y || this._flags.mode === r3.ObjectLiteral && (this._flags.last_token.text === ":" && this._flags.ternary_depth === 0 || c(this._flags.last_token, ["get", "set"])), y ? (this.set_mode(r3.Statement), this.indent(), this.handle_whitespace_and_comments(s, true), this.start_of_object_property() || this.allow_wrap_or_preserved_newline(
      s,
      c(s, ["do", "for", "if", "while"])
    ), true) : false;
  }, p.prototype.handle_start_expr = function(s) {
    this.start_of_statement(s) || this.handle_whitespace_and_comments(s);
    var y = r3.Expression;
    if (s.text === "[") {
      if (this._flags.last_token.type === o.WORD || this._flags.last_token.text === ")") {
        c(this._flags.last_token, _) && (this._output.space_before_token = true), this.print_token(s), this.set_mode(y), this.indent(), this._options.space_in_paren && (this._output.space_before_token = true);
        return;
      }
      y = r3.ArrayLiteral, x(this._flags.mode) && (this._flags.last_token.text === "[" || this._flags.last_token.text === "," && (this._last_last_text === "]" || this._last_last_text === "}")) && (this._options.keep_array_indentation || this.print_newline()), u(this._flags.last_token.type, [o.START_EXPR, o.END_EXPR, o.WORD, o.OPERATOR, o.DOT]) || (this._output.space_before_token = true);
    } else {
      if (this._flags.last_token.type === o.RESERVED)
        this._flags.last_token.text === "for" ? (this._output.space_before_token = this._options.space_before_conditional, y = r3.ForInitializer) : u(this._flags.last_token.text, ["if", "while", "switch"]) ? (this._output.space_before_token = this._options.space_before_conditional, y = r3.Conditional) : u(this._flags.last_word, ["await", "async"]) ? this._output.space_before_token = true : this._flags.last_token.text === "import" && s.whitespace_before === "" ? this._output.space_before_token = false : (u(this._flags.last_token.text, _) || this._flags.last_token.text === "catch") && (this._output.space_before_token = true);
      else if (this._flags.last_token.type === o.EQUALS || this._flags.last_token.type === o.OPERATOR)
        this.start_of_object_property() || this.allow_wrap_or_preserved_newline(s);
      else if (this._flags.last_token.type === o.WORD) {
        this._output.space_before_token = false;
        var w = this._tokens.peek(-3);
        if (this._options.space_after_named_function && w) {
          var A = this._tokens.peek(-4);
          c(w, ["async", "function"]) || w.text === "*" && c(A, ["async", "function"]) ? this._output.space_before_token = true : this._flags.mode === r3.ObjectLiteral ? (w.text === "{" || w.text === "," || w.text === "*" && (A.text === "{" || A.text === ",")) && (this._output.space_before_token = true) : this._flags.parent && this._flags.parent.class_start_block && (this._output.space_before_token = true);
        }
      } else
        this.allow_wrap_or_preserved_newline(s);
      (this._flags.last_token.type === o.RESERVED && (this._flags.last_word === "function" || this._flags.last_word === "typeof") || this._flags.last_token.text === "*" && (u(this._last_last_text, ["function", "yield"]) || this._flags.mode === r3.ObjectLiteral && u(this._last_last_text, ["{", ","]))) && (this._output.space_before_token = this._options.space_after_anon_function);
    }
    this._flags.last_token.text === ";" || this._flags.last_token.type === o.START_BLOCK ? this.print_newline() : (this._flags.last_token.type === o.END_EXPR || this._flags.last_token.type === o.START_EXPR || this._flags.last_token.type === o.END_BLOCK || this._flags.last_token.text === "." || this._flags.last_token.type === o.COMMA) && this.allow_wrap_or_preserved_newline(s, s.newlines), this.print_token(s), this.set_mode(y), this._options.space_in_paren && (this._output.space_before_token = true), this.indent();
  }, p.prototype.handle_end_expr = function(s) {
    for (; this._flags.mode === r3.Statement; )
      this.restore_mode();
    this.handle_whitespace_and_comments(s), this._flags.multiline_frame && this.allow_wrap_or_preserved_newline(
      s,
      s.text === "]" && x(this._flags.mode) && !this._options.keep_array_indentation
    ), this._options.space_in_paren && (this._flags.last_token.type === o.START_EXPR && !this._options.space_in_empty_paren ? (this._output.trim(), this._output.space_before_token = false) : this._output.space_before_token = true), this.deindent(), this.print_token(s), this.restore_mode(), d(this._output, this._previous_flags), this._flags.do_while && this._previous_flags.mode === r3.Conditional && (this._previous_flags.mode = r3.Expression, this._flags.do_block = false, this._flags.do_while = false);
  }, p.prototype.handle_start_block = function(s) {
    this.handle_whitespace_and_comments(s);
    var y = this._tokens.peek(), w = this._tokens.peek(1);
    this._flags.last_word === "switch" && this._flags.last_token.type === o.END_EXPR ? (this.set_mode(r3.BlockStatement), this._flags.in_case_statement = true) : this._flags.case_body ? this.set_mode(r3.BlockStatement) : w && (u(w.text, [":", ","]) && u(y.type, [o.STRING, o.WORD, o.RESERVED]) || u(y.text, ["get", "set", "..."]) && u(w.type, [o.WORD, o.RESERVED])) ? u(this._last_last_text, ["class", "interface"]) && !u(w.text, [":", ","]) ? this.set_mode(r3.BlockStatement) : this.set_mode(r3.ObjectLiteral) : this._flags.last_token.type === o.OPERATOR && this._flags.last_token.text === "=>" ? this.set_mode(r3.BlockStatement) : u(this._flags.last_token.type, [o.EQUALS, o.START_EXPR, o.COMMA, o.OPERATOR]) || c(this._flags.last_token, ["return", "throw", "import", "default"]) ? this.set_mode(r3.ObjectLiteral) : this.set_mode(r3.BlockStatement), this._flags.last_token && c(this._flags.last_token.previous, ["class", "extends"]) && (this._flags.class_start_block = true);
    var A = !y.comments_before && y.text === "}", N = A && this._flags.last_word === "function" && this._flags.last_token.type === o.END_EXPR;
    if (this._options.brace_preserve_inline) {
      var j = 0, P = null;
      this._flags.inline_frame = true;
      do
        if (j += 1, P = this._tokens.peek(j - 1), P.newlines) {
          this._flags.inline_frame = false;
          break;
        }
      while (P.type !== o.EOF && !(P.type === o.END_BLOCK && P.opened === s));
    }
    (this._options.brace_style === "expand" || this._options.brace_style === "none" && s.newlines) && !this._flags.inline_frame ? this._flags.last_token.type !== o.OPERATOR && (N || this._flags.last_token.type === o.EQUALS || c(this._flags.last_token, k) && this._flags.last_token.text !== "else") ? this._output.space_before_token = true : this.print_newline(false, true) : (x(this._previous_flags.mode) && (this._flags.last_token.type === o.START_EXPR || this._flags.last_token.type === o.COMMA) && ((this._flags.last_token.type === o.COMMA || this._options.space_in_paren) && (this._output.space_before_token = true), (this._flags.last_token.type === o.COMMA || this._flags.last_token.type === o.START_EXPR && this._flags.inline_frame) && (this.allow_wrap_or_preserved_newline(s), this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame, this._flags.multiline_frame = false)), this._flags.last_token.type !== o.OPERATOR && this._flags.last_token.type !== o.START_EXPR && (u(this._flags.last_token.type, [o.START_BLOCK, o.SEMICOLON]) && !this._flags.inline_frame ? this.print_newline() : this._output.space_before_token = true)), this.print_token(s), this.indent(), !A && !(this._options.brace_preserve_inline && this._flags.inline_frame) && this.print_newline();
  }, p.prototype.handle_end_block = function(s) {
    for (this.handle_whitespace_and_comments(s); this._flags.mode === r3.Statement; )
      this.restore_mode();
    var y = this._flags.last_token.type === o.START_BLOCK;
    this._flags.inline_frame && !y ? this._output.space_before_token = true : this._options.brace_style === "expand" ? y || this.print_newline() : y || (x(this._flags.mode) && this._options.keep_array_indentation ? (this._options.keep_array_indentation = false, this.print_newline(), this._options.keep_array_indentation = true) : this.print_newline()), this.restore_mode(), this.print_token(s);
  }, p.prototype.handle_word = function(s) {
    if (s.type === o.RESERVED) {
      if (u(s.text, ["set", "get"]) && this._flags.mode !== r3.ObjectLiteral)
        s.type = o.WORD;
      else if (s.text === "import" && u(this._tokens.peek().text, ["(", "."]))
        s.type = o.WORD;
      else if (u(s.text, ["as", "from"]) && !this._flags.import_block)
        s.type = o.WORD;
      else if (this._flags.mode === r3.ObjectLiteral) {
        var y = this._tokens.peek();
        y.text === ":" && (s.type = o.WORD);
      }
    }
    if (this.start_of_statement(s) ? c(this._flags.last_token, ["var", "let", "const"]) && s.type === o.WORD && (this._flags.declaration_statement = true) : s.newlines && !E(this._flags.mode) && (this._flags.last_token.type !== o.OPERATOR || this._flags.last_token.text === "--" || this._flags.last_token.text === "++") && this._flags.last_token.type !== o.EQUALS && (this._options.preserve_newlines || !c(this._flags.last_token, ["var", "let", "const", "set", "get"])) ? (this.handle_whitespace_and_comments(s), this.print_newline()) : this.handle_whitespace_and_comments(s), this._flags.do_block && !this._flags.do_while)
      if (b(s, "while")) {
        this._output.space_before_token = true, this.print_token(s), this._output.space_before_token = true, this._flags.do_while = true;
        return;
      } else
        this.print_newline(), this._flags.do_block = false;
    if (this._flags.if_block)
      if (!this._flags.else_block && b(s, "else"))
        this._flags.else_block = true;
      else {
        for (; this._flags.mode === r3.Statement; )
          this.restore_mode();
        this._flags.if_block = false, this._flags.else_block = false;
      }
    if (this._flags.in_case_statement && c(s, ["case", "default"])) {
      this.print_newline(), !this._flags.case_block && (this._flags.case_body || this._options.jslint_happy) && this.deindent(), this._flags.case_body = false, this.print_token(s), this._flags.in_case = true;
      return;
    }
    if ((this._flags.last_token.type === o.COMMA || this._flags.last_token.type === o.START_EXPR || this._flags.last_token.type === o.EQUALS || this._flags.last_token.type === o.OPERATOR) && !this.start_of_object_property() && !(u(this._flags.last_token.text, ["+", "-"]) && this._last_last_text === ":" && this._flags.parent.mode === r3.ObjectLiteral) && this.allow_wrap_or_preserved_newline(s), b(s, "function")) {
      (u(this._flags.last_token.text, ["}", ";"]) || this._output.just_added_newline() && !(u(this._flags.last_token.text, ["(", "[", "{", ":", "=", ","]) || this._flags.last_token.type === o.OPERATOR)) && !this._output.just_added_blankline() && !s.comments_before && (this.print_newline(), this.print_newline(true)), this._flags.last_token.type === o.RESERVED || this._flags.last_token.type === o.WORD ? c(this._flags.last_token, ["get", "set", "new", "export"]) || c(this._flags.last_token, O) ? this._output.space_before_token = true : b(this._flags.last_token, "default") && this._last_last_text === "export" ? this._output.space_before_token = true : this._flags.last_token.text === "declare" ? this._output.space_before_token = true : this.print_newline() : this._flags.last_token.type === o.OPERATOR || this._flags.last_token.text === "=" ? this._output.space_before_token = true : !this._flags.multiline_frame && (E(this._flags.mode) || x(this._flags.mode)) || this.print_newline(), this.print_token(s), this._flags.last_word = s.text;
      return;
    }
    var w = "NONE";
    if (this._flags.last_token.type === o.END_BLOCK ? this._previous_flags.inline_frame ? w = "SPACE" : c(s, ["else", "catch", "finally", "from"]) ? this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && s.newlines ? w = "NEWLINE" : (w = "SPACE", this._output.space_before_token = true) : w = "NEWLINE" : this._flags.last_token.type === o.SEMICOLON && this._flags.mode === r3.BlockStatement ? w = "NEWLINE" : this._flags.last_token.type === o.SEMICOLON && E(this._flags.mode) ? w = "SPACE" : this._flags.last_token.type === o.STRING ? w = "NEWLINE" : this._flags.last_token.type === o.RESERVED || this._flags.last_token.type === o.WORD || this._flags.last_token.text === "*" && (u(this._last_last_text, ["function", "yield"]) || this._flags.mode === r3.ObjectLiteral && u(this._last_last_text, ["{", ","])) ? w = "SPACE" : this._flags.last_token.type === o.START_BLOCK ? this._flags.inline_frame ? w = "SPACE" : w = "NEWLINE" : this._flags.last_token.type === o.END_EXPR && (this._output.space_before_token = true, w = "NEWLINE"), c(s, _) && this._flags.last_token.text !== ")" && (this._flags.inline_frame || this._flags.last_token.text === "else" || this._flags.last_token.text === "export" ? w = "SPACE" : w = "NEWLINE"), c(s, ["else", "catch", "finally"]))
      if ((!(this._flags.last_token.type === o.END_BLOCK && this._previous_flags.mode === r3.BlockStatement) || this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && s.newlines) && !this._flags.inline_frame)
        this.print_newline();
      else {
        this._output.trim(true);
        var A = this._output.current_line;
        A.last() !== "}" && this.print_newline(), this._output.space_before_token = true;
      }
    else
      w === "NEWLINE" ? c(this._flags.last_token, k) ? this._output.space_before_token = true : this._flags.last_token.text === "declare" && c(s, ["var", "let", "const"]) ? this._output.space_before_token = true : this._flags.last_token.type !== o.END_EXPR ? (this._flags.last_token.type !== o.START_EXPR || !c(s, ["var", "let", "const"])) && this._flags.last_token.text !== ":" && (b(s, "if") && b(s.previous, "else") ? this._output.space_before_token = true : this.print_newline()) : c(s, _) && this._flags.last_token.text !== ")" && this.print_newline() : this._flags.multiline_frame && x(this._flags.mode) && this._flags.last_token.text === "," && this._last_last_text === "}" ? this.print_newline() : w === "SPACE" && (this._output.space_before_token = true);
    s.previous && (s.previous.type === o.WORD || s.previous.type === o.RESERVED) && (this._output.space_before_token = true), this.print_token(s), this._flags.last_word = s.text, s.type === o.RESERVED && (s.text === "do" ? this._flags.do_block = true : s.text === "if" ? this._flags.if_block = true : s.text === "import" ? this._flags.import_block = true : this._flags.import_block && b(s, "from") && (this._flags.import_block = false));
  }, p.prototype.handle_semicolon = function(s) {
    this.start_of_statement(s) ? this._output.space_before_token = false : this.handle_whitespace_and_comments(s);
    for (var y = this._tokens.peek(); this._flags.mode === r3.Statement && !(this._flags.if_block && b(y, "else")) && !this._flags.do_block; )
      this.restore_mode();
    this._flags.import_block && (this._flags.import_block = false), this.print_token(s);
  }, p.prototype.handle_string = function(s) {
    s.text.startsWith("`") && s.newlines === 0 && s.whitespace_before === "" && (s.previous.text === ")" || this._flags.last_token.type === o.WORD) || (this.start_of_statement(s) ? this._output.space_before_token = true : (this.handle_whitespace_and_comments(s), this._flags.last_token.type === o.RESERVED || this._flags.last_token.type === o.WORD || this._flags.inline_frame ? this._output.space_before_token = true : this._flags.last_token.type === o.COMMA || this._flags.last_token.type === o.START_EXPR || this._flags.last_token.type === o.EQUALS || this._flags.last_token.type === o.OPERATOR ? this.start_of_object_property() || this.allow_wrap_or_preserved_newline(s) : s.text.startsWith("`") && this._flags.last_token.type === o.END_EXPR && (s.previous.text === "]" || s.previous.text === ")") && s.newlines === 0 ? this._output.space_before_token = true : this.print_newline())), this.print_token(s);
  }, p.prototype.handle_equals = function(s) {
    this.start_of_statement(s) || this.handle_whitespace_and_comments(s), this._flags.declaration_statement && (this._flags.declaration_assignment = true), this._output.space_before_token = true, this.print_token(s), this._output.space_before_token = true;
  }, p.prototype.handle_comma = function(s) {
    this.handle_whitespace_and_comments(s, true), this.print_token(s), this._output.space_before_token = true, this._flags.declaration_statement ? (E(this._flags.parent.mode) && (this._flags.declaration_assignment = false), this._flags.declaration_assignment ? (this._flags.declaration_assignment = false, this.print_newline(false, true)) : this._options.comma_first && this.allow_wrap_or_preserved_newline(s)) : this._flags.mode === r3.ObjectLiteral || this._flags.mode === r3.Statement && this._flags.parent.mode === r3.ObjectLiteral ? (this._flags.mode === r3.Statement && this.restore_mode(), this._flags.inline_frame || this.print_newline()) : this._options.comma_first && this.allow_wrap_or_preserved_newline(s);
  }, p.prototype.handle_operator = function(s) {
    var y = s.text === "*" && (c(this._flags.last_token, ["function", "yield"]) || u(this._flags.last_token.type, [o.START_BLOCK, o.COMMA, o.END_BLOCK, o.SEMICOLON])), w = u(s.text, ["-", "+"]) && (u(this._flags.last_token.type, [o.START_BLOCK, o.START_EXPR, o.EQUALS, o.OPERATOR]) || u(this._flags.last_token.text, _) || this._flags.last_token.text === ",");
    if (!this.start_of_statement(s)) {
      var A = !y;
      this.handle_whitespace_and_comments(s, A);
    }
    if (s.text === "*" && this._flags.last_token.type === o.DOT) {
      this.print_token(s);
      return;
    }
    if (s.text === "::") {
      this.print_token(s);
      return;
    }
    if (u(s.text, ["-", "+"]) && this.start_of_object_property()) {
      this.print_token(s);
      return;
    }
    if (this._flags.last_token.type === o.OPERATOR && u(this._options.operator_position, h) && this.allow_wrap_or_preserved_newline(s), s.text === ":" && this._flags.in_case) {
      this.print_token(s), this._flags.in_case = false, this._flags.case_body = true, this._tokens.peek().type !== o.START_BLOCK ? (this.indent(), this.print_newline(), this._flags.case_block = false) : (this._flags.case_block = true, this._output.space_before_token = true);
      return;
    }
    var N = true, j = true, P = false;
    if (s.text === ":" ? this._flags.ternary_depth === 0 ? N = false : (this._flags.ternary_depth -= 1, P = true) : s.text === "?" && (this._flags.ternary_depth += 1), !w && !y && this._options.preserve_newlines && u(s.text, f)) {
      var F = s.text === ":", z = F && P, it = F && !P;
      switch (this._options.operator_position) {
        case S.before_newline:
          this._output.space_before_token = !it, this.print_token(s), (!F || z) && this.allow_wrap_or_preserved_newline(s), this._output.space_before_token = true;
          return;
        case S.after_newline:
          this._output.space_before_token = true, !F || z ? this._tokens.peek().newlines ? this.print_newline(false, true) : this.allow_wrap_or_preserved_newline(s) : this._output.space_before_token = false, this.print_token(s), this._output.space_before_token = true;
          return;
        case S.preserve_newline:
          it || this.allow_wrap_or_preserved_newline(s), N = !(this._output.just_added_newline() || it), this._output.space_before_token = N, this.print_token(s), this._output.space_before_token = true;
          return;
      }
    }
    if (y) {
      this.allow_wrap_or_preserved_newline(s), N = false;
      var R = this._tokens.peek();
      j = R && u(R.type, [o.WORD, o.RESERVED]);
    } else if (s.text === "...")
      this.allow_wrap_or_preserved_newline(s), N = this._flags.last_token.type === o.START_BLOCK, j = false;
    else if (u(s.text, ["--", "++", "!", "~"]) || w) {
      if ((this._flags.last_token.type === o.COMMA || this._flags.last_token.type === o.START_EXPR) && this.allow_wrap_or_preserved_newline(s), N = false, j = false, s.newlines && (s.text === "--" || s.text === "++" || s.text === "~")) {
        var M = c(this._flags.last_token, k) && s.newlines;
        M && (this._previous_flags.if_block || this._previous_flags.else_block) && this.restore_mode(), this.print_newline(M, true);
      }
      this._flags.last_token.text === ";" && E(this._flags.mode) && (N = true), this._flags.last_token.type === o.RESERVED ? N = true : this._flags.last_token.type === o.END_EXPR ? N = !(this._flags.last_token.text === "]" && (s.text === "--" || s.text === "++")) : this._flags.last_token.type === o.OPERATOR && (N = u(s.text, ["--", "-", "++", "+"]) && u(this._flags.last_token.text, ["--", "-", "++", "+"]), u(s.text, ["+", "-"]) && u(this._flags.last_token.text, ["--", "++"]) && (j = true)), (this._flags.mode === r3.BlockStatement && !this._flags.inline_frame || this._flags.mode === r3.Statement) && (this._flags.last_token.text === "{" || this._flags.last_token.text === ";") && this.print_newline();
    }
    this._output.space_before_token = this._output.space_before_token || N, this.print_token(s), this._output.space_before_token = j;
  }, p.prototype.handle_block_comment = function(s, y) {
    if (this._output.raw) {
      this._output.add_raw_token(s), s.directives && s.directives.preserve === "end" && (this._output.raw = this._options.test_output_raw);
      return;
    }
    if (s.directives) {
      this.print_newline(false, y), this.print_token(s), s.directives.preserve === "start" && (this._output.raw = true), this.print_newline(false, true);
      return;
    }
    if (!e.newline.test(s.text) && !s.newlines) {
      this._output.space_before_token = true, this.print_token(s), this._output.space_before_token = true;
      return;
    } else
      this.print_block_commment(s, y);
  }, p.prototype.print_block_commment = function(s, y) {
    var w = T(s.text), A, N = false, j = false, P = s.whitespace_before, F = P.length;
    if (this.print_newline(false, y), this.print_token_line_indentation(s), this._output.add_token(w[0]), this.print_newline(false, y), w.length > 1) {
      for (w = w.slice(1), N = l(w, "*"), j = m(w, P), N && (this._flags.alignment = 1), A = 0; A < w.length; A++)
        N ? (this.print_token_line_indentation(s), this._output.add_token(g(w[A]))) : j && w[A] ? (this.print_token_line_indentation(s), this._output.add_token(w[A].substring(F))) : (this._output.current_line.set_indent(-1), this._output.add_token(w[A])), this.print_newline(false, y);
      this._flags.alignment = 0;
    }
  }, p.prototype.handle_comment = function(s, y) {
    s.newlines ? this.print_newline(false, y) : this._output.trim(true), this._output.space_before_token = true, this.print_token(s), this.print_newline(false, y);
  }, p.prototype.handle_dot = function(s) {
    this.start_of_statement(s) || this.handle_whitespace_and_comments(s, true), this._flags.last_token.text.match("^[0-9]+$") && (this._output.space_before_token = true), c(this._flags.last_token, k) ? this._output.space_before_token = false : this.allow_wrap_or_preserved_newline(
      s,
      this._flags.last_token.text === ")" && this._options.break_chained_methods
    ), this._options.unindent_chained_methods && this._output.just_added_newline() && this.deindent(), this.print_token(s);
  }, p.prototype.handle_unknown = function(s, y) {
    this.print_token(s), s.text[s.text.length - 1] === `
` && this.print_newline(false, y);
  }, p.prototype.handle_eof = function(s) {
    for (; this._flags.mode === r3.Statement; )
      this.restore_mode();
    this.handle_whitespace_and_comments(s);
  }, Gt.Beautifier = p, Gt;
}
var Xe;
function hn() {
  if (Xe)
    return Ot.exports;
  Xe = 1;
  var n = pn().Beautifier, i = wi().Options;
  function e(t, a) {
    var _ = new n(t, a);
    return _.beautify();
  }
  return Ot.exports = e, Ot.exports.defaultOptions = function() {
    return new i();
  }, Ot.exports;
}
var Rt = { exports: {} };
var se = {};
var re = {};
var Qe;
function Ei() {
  if (Qe)
    return re;
  Qe = 1;
  var n = he().Options;
  function i(e) {
    n.call(this, e, "css"), this.selector_separator_newline = this._get_boolean("selector_separator_newline", true), this.newline_between_rules = this._get_boolean("newline_between_rules", true);
    var t = this._get_boolean("space_around_selector_separator");
    this.space_around_combinator = this._get_boolean("space_around_combinator") || t;
    var a = this._get_selection_list("brace_style", ["collapse", "expand", "end-expand", "none", "preserve-inline"]);
    this.brace_style = "collapse";
    for (var _ = 0; _ < a.length; _++)
      a[_] !== "expand" ? this.brace_style = "collapse" : this.brace_style = a[_];
  }
  return i.prototype = new n(), re.Options = i, re;
}
var Je;
function cn() {
  if (Je)
    return se;
  Je = 1;
  var n = Ei().Options, i = pe().Output, e = ce().InputScanner, t = fe().Directives, a = new t(/\/\*/, /\*\//), _ = /\r\n|[\r\n]/, f = /\r\n|[\r\n]/g, o = /\s/, u = /(?:\s|\n)+/g, g = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g, v = /\/\/(?:[^\n\r\u2028\u2029]*)/g;
  function b(c, k) {
    this._source_text = c || "", this._options = new n(k), this._ch = null, this._input = null, this.NESTED_AT_RULE = {
      page: true,
      "font-face": true,
      keyframes: true,
      media: true,
      supports: true,
      document: true
    }, this.CONDITIONAL_GROUP_RULE = {
      media: true,
      supports: true,
      document: true
    }, this.NON_SEMICOLON_NEWLINE_PROPERTY = [
      "grid-template-areas",
      "grid-template"
    ];
  }
  return b.prototype.eatString = function(c) {
    var k = "";
    for (this._ch = this._input.next(); this._ch; ) {
      if (k += this._ch, this._ch === "\\")
        k += this._input.next();
      else if (c.indexOf(this._ch) !== -1 || this._ch === `
`)
        break;
      this._ch = this._input.next();
    }
    return k;
  }, b.prototype.eatWhitespace = function(c) {
    for (var k = o.test(this._input.peek()), C = 0; o.test(this._input.peek()); )
      this._ch = this._input.next(), c && this._ch === `
` && (C === 0 || C < this._options.max_preserve_newlines) && (C++, this._output.add_new_line(true));
    return k;
  }, b.prototype.foundNestedPseudoClass = function() {
    for (var c = 0, k = 1, C = this._input.peek(k); C; ) {
      if (C === "{")
        return true;
      if (C === "(")
        c += 1;
      else if (C === ")") {
        if (c === 0)
          return false;
        c -= 1;
      } else if (C === ";" || C === "}")
        return false;
      k++, C = this._input.peek(k);
    }
    return false;
  }, b.prototype.print_string = function(c) {
    this._output.set_indent(this._indentLevel), this._output.non_breaking_space = true, this._output.add_token(c);
  }, b.prototype.preserveSingleSpace = function(c) {
    c && (this._output.space_before_token = true);
  }, b.prototype.indent = function() {
    this._indentLevel++;
  }, b.prototype.outdent = function() {
    this._indentLevel > 0 && this._indentLevel--;
  }, b.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var c = this._source_text, k = this._options.eol;
    k === "auto" && (k = `
`, c && _.test(c || "") && (k = c.match(_)[0])), c = c.replace(f, `
`);
    var C = c.match(/^[\t ]*/)[0];
    this._output = new i(this._options, C), this._input = new e(c), this._indentLevel = 0, this._nestedLevel = 0, this._ch = null;
    for (var S = 0, h = false, r3 = false, d = false, T = false, x = false, E = this._ch, l = false, m, p, O; m = this._input.read(u), p = m !== "", O = E, this._ch = this._input.next(), this._ch === "\\" && this._input.hasNext() && (this._ch += this._input.next()), E = this._ch, this._ch; )
      if (this._ch === "/" && this._input.peek() === "*") {
        this._output.add_new_line(), this._input.back();
        var s = this._input.read(g), y = a.get_directives(s);
        y && y.ignore === "start" && (s += a.readIgnored(this._input)), this.print_string(s), this.eatWhitespace(true), this._output.add_new_line();
      } else if (this._ch === "/" && this._input.peek() === "/")
        this._output.space_before_token = true, this._input.back(), this.print_string(this._input.read(v)), this.eatWhitespace(true);
      else if (this._ch === "$") {
        this.preserveSingleSpace(p), this.print_string(this._ch);
        var w = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
        w.match(/[ :]$/) && (w = this.eatString(": ").replace(/\s+$/, ""), this.print_string(w), this._output.space_before_token = true), S === 0 && w.indexOf(":") !== -1 && (r3 = true, this.indent());
      } else if (this._ch === "@")
        if (this.preserveSingleSpace(p), this._input.peek() === "{")
          this.print_string(this._ch + this.eatString("}"));
        else {
          this.print_string(this._ch);
          var A = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);
          A.match(/[ :]$/) && (A = this.eatString(": ").replace(/\s+$/, ""), this.print_string(A), this._output.space_before_token = true), S === 0 && A.indexOf(":") !== -1 ? (r3 = true, this.indent()) : A in this.NESTED_AT_RULE ? (this._nestedLevel += 1, A in this.CONDITIONAL_GROUP_RULE && (d = true)) : S === 0 && !r3 && (T = true);
        }
      else if (this._ch === "#" && this._input.peek() === "{")
        this.preserveSingleSpace(p), this.print_string(this._ch + this.eatString("}"));
      else if (this._ch === "{")
        r3 && (r3 = false, this.outdent()), T = false, d ? (d = false, h = this._indentLevel >= this._nestedLevel) : h = this._indentLevel >= this._nestedLevel - 1, this._options.newline_between_rules && h && this._output.previous_line && this._output.previous_line.item(-1) !== "{" && this._output.ensure_empty_line_above("/", ","), this._output.space_before_token = true, this._options.brace_style === "expand" ? (this._output.add_new_line(), this.print_string(this._ch), this.indent(), this._output.set_indent(this._indentLevel)) : (O === "(" ? this._output.space_before_token = false : O !== "," && this.indent(), this.print_string(this._ch)), this.eatWhitespace(true), this._output.add_new_line();
      else if (this._ch === "}")
        this.outdent(), this._output.add_new_line(), O === "{" && this._output.trim(true), r3 && (this.outdent(), r3 = false), this.print_string(this._ch), h = false, this._nestedLevel && this._nestedLevel--, this.eatWhitespace(true), this._output.add_new_line(), this._options.newline_between_rules && !this._output.just_added_blankline() && this._input.peek() !== "}" && this._output.add_new_line(true), this._input.peek() === ")" && (this._output.trim(true), this._options.brace_style === "expand" && this._output.add_new_line(true));
      else if (this._ch === ":") {
        for (var N = 0; N < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; N++)
          if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[N])) {
            l = true;
            break;
          }
        (h || d) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !T && S === 0 ? (this.print_string(":"), r3 || (r3 = true, this._output.space_before_token = true, this.eatWhitespace(true), this.indent())) : (this._input.lookBack(" ") && (this._output.space_before_token = true), this._input.peek() === ":" ? (this._ch = this._input.next(), this.print_string("::")) : this.print_string(":"));
      } else if (this._ch === '"' || this._ch === "'") {
        var j = O === '"' || O === "'";
        this.preserveSingleSpace(j || p), this.print_string(this._ch + this.eatString(this._ch)), this.eatWhitespace(true);
      } else if (this._ch === ";")
        l = false, S === 0 ? (r3 && (this.outdent(), r3 = false), T = false, this.print_string(this._ch), this.eatWhitespace(true), this._input.peek() !== "/" && this._output.add_new_line()) : (this.print_string(this._ch), this.eatWhitespace(true), this._output.space_before_token = true);
      else if (this._ch === "(")
        if (this._input.lookBack("url"))
          this.print_string(this._ch), this.eatWhitespace(), S++, this.indent(), this._ch = this._input.next(), this._ch === ")" || this._ch === '"' || this._ch === "'" ? this._input.back() : this._ch && (this.print_string(this._ch + this.eatString(")")), S && (S--, this.outdent()));
        else {
          var P = false;
          this._input.lookBack("with") && (P = true), this.preserveSingleSpace(p || P), this.print_string(this._ch), r3 && O === "$" && this._options.selector_separator_newline ? (this._output.add_new_line(), x = true) : (this.eatWhitespace(), S++, this.indent());
        }
      else if (this._ch === ")")
        S && (S--, this.outdent()), x && this._input.peek() === ";" && this._options.selector_separator_newline && (x = false, this.outdent(), this._output.add_new_line()), this.print_string(this._ch);
      else if (this._ch === ",")
        this.print_string(this._ch), this.eatWhitespace(true), this._options.selector_separator_newline && (!r3 || x) && S === 0 && !T ? this._output.add_new_line() : this._output.space_before_token = true;
      else if ((this._ch === ">" || this._ch === "+" || this._ch === "~") && !r3 && S === 0)
        this._options.space_around_combinator ? (this._output.space_before_token = true, this.print_string(this._ch), this._output.space_before_token = true) : (this.print_string(this._ch), this.eatWhitespace(), this._ch && o.test(this._ch) && (this._ch = ""));
      else if (this._ch === "]")
        this.print_string(this._ch);
      else if (this._ch === "[")
        this.preserveSingleSpace(p), this.print_string(this._ch);
      else if (this._ch === "=")
        this.eatWhitespace(), this.print_string("="), o.test(this._ch) && (this._ch = "");
      else if (this._ch === "!" && !this._input.lookBack("\\"))
        this._output.space_before_token = true, this.print_string(this._ch);
      else {
        var F = O === '"' || O === "'";
        this.preserveSingleSpace(F || p), this.print_string(this._ch), !this._output.just_added_newline() && this._input.peek() === `
` && l && this._output.add_new_line();
      }
    var z = this._output.get_code(k);
    return z;
  }, se.Beautifier = b, se;
}
var Ze;
function fn() {
  if (Ze)
    return Rt.exports;
  Ze = 1;
  var n = cn().Beautifier, i = Ei().Options;
  function e(t, a) {
    var _ = new n(t, a);
    return _.beautify();
  }
  return Rt.exports = e, Rt.exports.defaultOptions = function() {
    return new i();
  }, Rt.exports;
}
var St = { exports: {} };
var ae = {};
var oe = {};
var Ye;
function Oi() {
  if (Ye)
    return oe;
  Ye = 1;
  var n = he().Options;
  function i(e) {
    n.call(this, e, "html"), this.templating.length === 1 && this.templating[0] === "auto" && (this.templating = ["django", "erb", "handlebars", "php"]), this.indent_inner_html = this._get_boolean("indent_inner_html"), this.indent_body_inner_html = this._get_boolean("indent_body_inner_html", true), this.indent_head_inner_html = this._get_boolean("indent_head_inner_html", true), this.indent_handlebars = this._get_boolean("indent_handlebars", true), this.wrap_attributes = this._get_selection(
      "wrap_attributes",
      ["auto", "force", "force-aligned", "force-expand-multiline", "aligned-multiple", "preserve", "preserve-aligned"]
    ), this.wrap_attributes_min_attrs = this._get_number("wrap_attributes_min_attrs", 2), this.wrap_attributes_indent_size = this._get_number("wrap_attributes_indent_size", this.indent_size), this.extra_liners = this._get_array("extra_liners", ["head", "body", "/html"]), this.inline = this._get_array("inline", [
      "a",
      "abbr",
      "area",
      "audio",
      "b",
      "bdi",
      "bdo",
      "br",
      "button",
      "canvas",
      "cite",
      "code",
      "data",
      "datalist",
      "del",
      "dfn",
      "em",
      "embed",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "map",
      "mark",
      "math",
      "meter",
      "noscript",
      "object",
      "output",
      "progress",
      "q",
      "ruby",
      "s",
      "samp",
      "select",
      "small",
      "span",
      "strong",
      "sub",
      "sup",
      "svg",
      "template",
      "textarea",
      "time",
      "u",
      "var",
      "video",
      "wbr",
      "text",
      "acronym",
      "big",
      "strike",
      "tt"
    ]), this.inline_custom_elements = this._get_boolean("inline_custom_elements", true), this.void_elements = this._get_array("void_elements", [
      "area",
      "base",
      "br",
      "col",
      "embed",
      "hr",
      "img",
      "input",
      "keygen",
      "link",
      "menuitem",
      "meta",
      "param",
      "source",
      "track",
      "wbr",
      "!doctype",
      "?xml",
      "basefont",
      "isindex"
    ]), this.unformatted = this._get_array("unformatted", []), this.content_unformatted = this._get_array("content_unformatted", [
      "pre",
      "textarea"
    ]), this.unformatted_content_delimiter = this._get_characters("unformatted_content_delimiter"), this.indent_scripts = this._get_selection("indent_scripts", ["normal", "keep", "separate"]);
  }
  return i.prototype = new n(), oe.Options = i, oe;
}
var Ct = {};
var ti;
function ei() {
  if (ti)
    return Ct;
  ti = 1;
  var n = Dt().Tokenizer, i = Dt().TOKEN, e = fe().Directives, t = xi().TemplatablePattern, a = Bt().Pattern, _ = {
    TAG_OPEN: "TK_TAG_OPEN",
    TAG_CLOSE: "TK_TAG_CLOSE",
    CONTROL_FLOW_OPEN: "TK_CONTROL_FLOW_OPEN",
    CONTROL_FLOW_CLOSE: "TK_CONTROL_FLOW_CLOSE",
    ATTRIBUTE: "TK_ATTRIBUTE",
    EQUALS: "TK_EQUALS",
    VALUE: "TK_VALUE",
    COMMENT: "TK_COMMENT",
    TEXT: "TK_TEXT",
    UNKNOWN: "TK_UNKNOWN",
    START: i.START,
    RAW: i.RAW,
    EOF: i.EOF
  }, f = new e(/<\!--/, /-->/), o = function(u, g) {
    n.call(this, u, g), this._current_tag_name = "";
    var v = new t(this._input).read_options(this._options), b = new a(this._input);
    if (this.__patterns = {
      word: v.until(/[\n\r\t <]/),
      word_control_flow_close_excluded: v.until(/[\n\r\t <}]/),
      single_quote: v.until_after(/'/),
      double_quote: v.until_after(/"/),
      attribute: v.until(/[\n\r\t =>]|\/>/),
      element_name: v.until(/[\n\r\t >\/]/),
      angular_control_flow_start: b.matching(/\@[a-zA-Z]+[^({]*[({]/),
      handlebars_comment: b.starting_with(/{{!--/).until_after(/--}}/),
      handlebars: b.starting_with(/{{/).until_after(/}}/),
      handlebars_open: b.until(/[\n\r\t }]/),
      handlebars_raw_close: b.until(/}}/),
      comment: b.starting_with(/<!--/).until_after(/-->/),
      cdata: b.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
      conditional_comment: b.starting_with(/<!\[/).until_after(/]>/),
      processing: b.starting_with(/<\?/).until_after(/\?>/)
    }, this._options.indent_handlebars && (this.__patterns.word = this.__patterns.word.exclude("handlebars"), this.__patterns.word_control_flow_close_excluded = this.__patterns.word_control_flow_close_excluded.exclude("handlebars")), this._unformatted_content_delimiter = null, this._options.unformatted_content_delimiter) {
      var c = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);
      this.__patterns.unformatted_content_delimiter = b.matching(c).until_after(c);
    }
  };
  return o.prototype = new n(), o.prototype._is_comment = function(u) {
    return false;
  }, o.prototype._is_opening = function(u) {
    return u.type === _.TAG_OPEN || u.type === _.CONTROL_FLOW_OPEN;
  }, o.prototype._is_closing = function(u, g) {
    return u.type === _.TAG_CLOSE && g && ((u.text === ">" || u.text === "/>") && g.text[0] === "<" || u.text === "}}" && g.text[0] === "{" && g.text[1] === "{") || u.type === _.CONTROL_FLOW_CLOSE && u.text === "}" && g.text.endsWith("{");
  }, o.prototype._reset = function() {
    this._current_tag_name = "";
  }, o.prototype._get_next_token = function(u, g) {
    var v = null;
    this._readWhitespace();
    var b = this._input.peek();
    return b === null ? this._create_token(_.EOF, "") : (v = v || this._read_open_handlebars(b, g), v = v || this._read_attribute(b, u, g), v = v || this._read_close(b, g), v = v || this._read_control_flows(b, g), v = v || this._read_raw_content(b, u, g), v = v || this._read_content_word(b, g), v = v || this._read_comment_or_cdata(b), v = v || this._read_processing(b), v = v || this._read_open(b, g), v = v || this._create_token(_.UNKNOWN, this._input.next()), v);
  }, o.prototype._read_comment_or_cdata = function(u) {
    var g = null, v = null, b = null;
    if (u === "<") {
      var c = this._input.peek(1);
      c === "!" && (v = this.__patterns.comment.read(), v ? (b = f.get_directives(v), b && b.ignore === "start" && (v += f.readIgnored(this._input))) : v = this.__patterns.cdata.read()), v && (g = this._create_token(_.COMMENT, v), g.directives = b);
    }
    return g;
  }, o.prototype._read_processing = function(u) {
    var g = null, v = null, b = null;
    if (u === "<") {
      var c = this._input.peek(1);
      (c === "!" || c === "?") && (v = this.__patterns.conditional_comment.read(), v = v || this.__patterns.processing.read()), v && (g = this._create_token(_.COMMENT, v), g.directives = b);
    }
    return g;
  }, o.prototype._read_open = function(u, g) {
    var v = null, b = null;
    return (!g || g.type === _.CONTROL_FLOW_OPEN) && u === "<" && (v = this._input.next(), this._input.peek() === "/" && (v += this._input.next()), v += this.__patterns.element_name.read(), b = this._create_token(_.TAG_OPEN, v)), b;
  }, o.prototype._read_open_handlebars = function(u, g) {
    var v = null, b = null;
    return (!g || g.type === _.CONTROL_FLOW_OPEN) && this._options.indent_handlebars && u === "{" && this._input.peek(1) === "{" && (this._input.peek(2) === "!" ? (v = this.__patterns.handlebars_comment.read(), v = v || this.__patterns.handlebars.read(), b = this._create_token(_.COMMENT, v)) : (v = this.__patterns.handlebars_open.read(), b = this._create_token(_.TAG_OPEN, v))), b;
  }, o.prototype._read_control_flows = function(u, g) {
    var v = "", b = null;
    if (!this._options.templating.includes("angular") || !this._options.indent_handlebars)
      return b;
    if (u === "@") {
      if (v = this.__patterns.angular_control_flow_start.read(), v === "")
        return b;
      for (var c = v.endsWith("(") ? 1 : 0, k = 0; !(v.endsWith("{") && c === k); ) {
        var C = this._input.next();
        if (C === null)
          break;
        C === "(" ? c++ : C === ")" && k++, v += C;
      }
      b = this._create_token(_.CONTROL_FLOW_OPEN, v);
    } else
      u === "}" && g && g.type === _.CONTROL_FLOW_OPEN && (v = this._input.next(), b = this._create_token(_.CONTROL_FLOW_CLOSE, v));
    return b;
  }, o.prototype._read_close = function(u, g) {
    var v = null, b = null;
    return g && g.type === _.TAG_OPEN && (g.text[0] === "<" && (u === ">" || u === "/" && this._input.peek(1) === ">") ? (v = this._input.next(), u === "/" && (v += this._input.next()), b = this._create_token(_.TAG_CLOSE, v)) : g.text[0] === "{" && u === "}" && this._input.peek(1) === "}" && (this._input.next(), this._input.next(), b = this._create_token(_.TAG_CLOSE, "}}"))), b;
  }, o.prototype._read_attribute = function(u, g, v) {
    var b = null, c = "";
    if (v && v.text[0] === "<")
      if (u === "=")
        b = this._create_token(_.EQUALS, this._input.next());
      else if (u === '"' || u === "'") {
        var k = this._input.next();
        u === '"' ? k += this.__patterns.double_quote.read() : k += this.__patterns.single_quote.read(), b = this._create_token(_.VALUE, k);
      } else
        c = this.__patterns.attribute.read(), c && (g.type === _.EQUALS ? b = this._create_token(_.VALUE, c) : b = this._create_token(_.ATTRIBUTE, c));
    return b;
  }, o.prototype._is_content_unformatted = function(u) {
    return this._options.void_elements.indexOf(u) === -1 && (this._options.content_unformatted.indexOf(u) !== -1 || this._options.unformatted.indexOf(u) !== -1);
  }, o.prototype._read_raw_content = function(u, g, v) {
    var b = "";
    if (v && v.text[0] === "{")
      b = this.__patterns.handlebars_raw_close.read();
    else if (g.type === _.TAG_CLOSE && g.opened.text[0] === "<" && g.text[0] !== "/") {
      var c = g.opened.text.substr(1).toLowerCase();
      if (c === "script" || c === "style") {
        var k = this._read_comment_or_cdata(u);
        if (k)
          return k.type = _.TEXT, k;
        b = this._input.readUntil(new RegExp("</" + c + "[\\n\\r\\t ]*?>", "ig"));
      } else
        this._is_content_unformatted(c) && (b = this._input.readUntil(new RegExp("</" + c + "[\\n\\r\\t ]*?>", "ig")));
    }
    return b ? this._create_token(_.TEXT, b) : null;
  }, o.prototype._read_content_word = function(u, g) {
    var v = "";
    if (this._options.unformatted_content_delimiter && u === this._options.unformatted_content_delimiter[0] && (v = this.__patterns.unformatted_content_delimiter.read()), v || (v = g && g.type === _.CONTROL_FLOW_OPEN ? this.__patterns.word_control_flow_close_excluded.read() : this.__patterns.word.read()), v)
      return this._create_token(_.TEXT, v);
  }, Ct.Tokenizer = o, Ct.TOKEN = _, Ct;
}
var ii;
function dn() {
  if (ii)
    return ae;
  ii = 1;
  var n = Oi().Options, i = pe().Output, e = ei().Tokenizer, t = ei().TOKEN, a = /\r\n|[\r\n]/, _ = /\r\n|[\r\n]/g, f = function(h, r3) {
    this.indent_level = 0, this.alignment_size = 0, this.max_preserve_newlines = h.max_preserve_newlines, this.preserve_newlines = h.preserve_newlines, this._output = new i(h, r3);
  };
  f.prototype.current_line_has_match = function(h) {
    return this._output.current_line.has_match(h);
  }, f.prototype.set_space_before_token = function(h, r3) {
    this._output.space_before_token = h, this._output.non_breaking_space = r3;
  }, f.prototype.set_wrap_point = function() {
    this._output.set_indent(this.indent_level, this.alignment_size), this._output.set_wrap_point();
  }, f.prototype.add_raw_token = function(h) {
    this._output.add_raw_token(h);
  }, f.prototype.print_preserved_newlines = function(h) {
    var r3 = 0;
    h.type !== t.TEXT && h.previous.type !== t.TEXT && (r3 = h.newlines ? 1 : 0), this.preserve_newlines && (r3 = h.newlines < this.max_preserve_newlines + 1 ? h.newlines : this.max_preserve_newlines + 1);
    for (var d = 0; d < r3; d++)
      this.print_newline(d > 0);
    return r3 !== 0;
  }, f.prototype.traverse_whitespace = function(h) {
    return h.whitespace_before || h.newlines ? (this.print_preserved_newlines(h) || (this._output.space_before_token = true), true) : false;
  }, f.prototype.previous_token_wrapped = function() {
    return this._output.previous_token_wrapped;
  }, f.prototype.print_newline = function(h) {
    this._output.add_new_line(h);
  }, f.prototype.print_token = function(h) {
    h.text && (this._output.set_indent(this.indent_level, this.alignment_size), this._output.add_token(h.text));
  }, f.prototype.indent = function() {
    this.indent_level++;
  }, f.prototype.deindent = function() {
    this.indent_level > 0 && (this.indent_level--, this._output.set_indent(this.indent_level, this.alignment_size));
  }, f.prototype.get_full_indent = function(h) {
    return h = this.indent_level + (h || 0), h < 1 ? "" : this._output.get_indent_string(h);
  };
  var o = function(h) {
    for (var r3 = null, d = h.next; d.type !== t.EOF && h.closed !== d; ) {
      if (d.type === t.ATTRIBUTE && d.text === "type") {
        d.next && d.next.type === t.EQUALS && d.next.next && d.next.next.type === t.VALUE && (r3 = d.next.next.text);
        break;
      }
      d = d.next;
    }
    return r3;
  }, u = function(h, r3) {
    var d = null, T = null;
    return r3.closed ? (h === "script" ? d = "text/javascript" : h === "style" && (d = "text/css"), d = o(r3) || d, d.search("text/css") > -1 ? T = "css" : d.search(/module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/) > -1 ? T = "javascript" : d.search(/(text|application|dojo)\/(x-)?(html)/) > -1 ? T = "html" : d.search(/test\/null/) > -1 && (T = "null"), T) : null;
  };
  function g(h, r3) {
    return r3.indexOf(h) !== -1;
  }
  function v(h, r3, d) {
    this.parent = h || null, this.tag = r3 ? r3.tag_name : "", this.indent_level = d || 0, this.parser_token = r3 || null;
  }
  function b(h) {
    this._printer = h, this._current_frame = null;
  }
  b.prototype.get_parser_token = function() {
    return this._current_frame ? this._current_frame.parser_token : null;
  }, b.prototype.record_tag = function(h) {
    var r3 = new v(this._current_frame, h, this._printer.indent_level);
    this._current_frame = r3;
  }, b.prototype._try_pop_frame = function(h) {
    var r3 = null;
    return h && (r3 = h.parser_token, this._printer.indent_level = h.indent_level, this._current_frame = h.parent), r3;
  }, b.prototype._get_frame = function(h, r3) {
    for (var d = this._current_frame; d && h.indexOf(d.tag) === -1; ) {
      if (r3 && r3.indexOf(d.tag) !== -1) {
        d = null;
        break;
      }
      d = d.parent;
    }
    return d;
  }, b.prototype.try_pop = function(h, r3) {
    var d = this._get_frame([h], r3);
    return this._try_pop_frame(d);
  }, b.prototype.indent_to_tag = function(h) {
    var r3 = this._get_frame(h);
    r3 && (this._printer.indent_level = r3.indent_level);
  };
  function c(h, r3, d, T) {
    this._source_text = h || "", r3 = r3 || {}, this._js_beautify = d, this._css_beautify = T, this._tag_stack = null;
    var x = new n(r3, "html");
    this._options = x, this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, 5) === "force", this._is_wrap_attributes_force_expand_multiline = this._options.wrap_attributes === "force-expand-multiline", this._is_wrap_attributes_force_aligned = this._options.wrap_attributes === "force-aligned", this._is_wrap_attributes_aligned_multiple = this._options.wrap_attributes === "aligned-multiple", this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, 8) === "preserve", this._is_wrap_attributes_preserve_aligned = this._options.wrap_attributes === "preserve-aligned";
  }
  c.prototype.beautify = function() {
    if (this._options.disabled)
      return this._source_text;
    var h = this._source_text, r3 = this._options.eol;
    this._options.eol === "auto" && (r3 = `
`, h && a.test(h) && (r3 = h.match(a)[0])), h = h.replace(_, `
`);
    var d = h.match(/^[\t ]*/)[0], T = {
      text: "",
      type: ""
    }, x = new k(), E = new f(this._options, d), l = new e(h, this._options).tokenize();
    this._tag_stack = new b(E);
    for (var m = null, p = l.next(); p.type !== t.EOF; )
      p.type === t.TAG_OPEN || p.type === t.COMMENT ? (m = this._handle_tag_open(E, p, x, T, l), x = m) : p.type === t.ATTRIBUTE || p.type === t.EQUALS || p.type === t.VALUE || p.type === t.TEXT && !x.tag_complete ? m = this._handle_inside_tag(E, p, x, T) : p.type === t.TAG_CLOSE ? m = this._handle_tag_close(E, p, x) : p.type === t.TEXT ? m = this._handle_text(E, p, x) : p.type === t.CONTROL_FLOW_OPEN ? m = this._handle_control_flow_open(E, p) : p.type === t.CONTROL_FLOW_CLOSE ? m = this._handle_control_flow_close(E, p) : E.add_raw_token(p), T = m, p = l.next();
    var O = E._output.get_code(r3);
    return O;
  }, c.prototype._handle_control_flow_open = function(h, r3) {
    var d = {
      text: r3.text,
      type: r3.type
    };
    return h.set_space_before_token(r3.newlines || r3.whitespace_before !== "", true), r3.newlines ? h.print_preserved_newlines(r3) : h.set_space_before_token(r3.newlines || r3.whitespace_before !== "", true), h.print_token(r3), h.indent(), d;
  }, c.prototype._handle_control_flow_close = function(h, r3) {
    var d = {
      text: r3.text,
      type: r3.type
    };
    return h.deindent(), r3.newlines ? h.print_preserved_newlines(r3) : h.set_space_before_token(r3.newlines || r3.whitespace_before !== "", true), h.print_token(r3), d;
  }, c.prototype._handle_tag_close = function(h, r3, d) {
    var T = {
      text: r3.text,
      type: r3.type
    };
    return h.alignment_size = 0, d.tag_complete = true, h.set_space_before_token(r3.newlines || r3.whitespace_before !== "", true), d.is_unformatted ? h.add_raw_token(r3) : (d.tag_start_char === "<" && (h.set_space_before_token(r3.text[0] === "/", true), this._is_wrap_attributes_force_expand_multiline && d.has_wrapped_attrs && h.print_newline(false)), h.print_token(r3)), d.indent_content && !(d.is_unformatted || d.is_content_unformatted) && (h.indent(), d.indent_content = false), !d.is_inline_element && !(d.is_unformatted || d.is_content_unformatted) && h.set_wrap_point(), T;
  }, c.prototype._handle_inside_tag = function(h, r3, d, T) {
    var x = d.has_wrapped_attrs, E = {
      text: r3.text,
      type: r3.type
    };
    return h.set_space_before_token(r3.newlines || r3.whitespace_before !== "", true), d.is_unformatted ? h.add_raw_token(r3) : d.tag_start_char === "{" && r3.type === t.TEXT ? h.print_preserved_newlines(r3) ? (r3.newlines = 0, h.add_raw_token(r3)) : h.print_token(r3) : (r3.type === t.ATTRIBUTE ? h.set_space_before_token(true) : (r3.type === t.EQUALS || r3.type === t.VALUE && r3.previous.type === t.EQUALS) && h.set_space_before_token(false), r3.type === t.ATTRIBUTE && d.tag_start_char === "<" && ((this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) && (h.traverse_whitespace(r3), x = x || r3.newlines !== 0), this._is_wrap_attributes_force && d.attr_count >= this._options.wrap_attributes_min_attrs && (T.type !== t.TAG_OPEN || this._is_wrap_attributes_force_expand_multiline) && (h.print_newline(false), x = true)), h.print_token(r3), x = x || h.previous_token_wrapped(), d.has_wrapped_attrs = x), E;
  }, c.prototype._handle_text = function(h, r3, d) {
    var T = {
      text: r3.text,
      type: "TK_CONTENT"
    };
    return d.custom_beautifier_name ? this._print_custom_beatifier_text(h, r3, d) : d.is_unformatted || d.is_content_unformatted ? h.add_raw_token(r3) : (h.traverse_whitespace(r3), h.print_token(r3)), T;
  }, c.prototype._print_custom_beatifier_text = function(h, r3, d) {
    var T = this;
    if (r3.text !== "") {
      var x = r3.text, E, l = 1, m = "", p = "";
      d.custom_beautifier_name === "javascript" && typeof this._js_beautify == "function" ? E = this._js_beautify : d.custom_beautifier_name === "css" && typeof this._css_beautify == "function" ? E = this._css_beautify : d.custom_beautifier_name === "html" && (E = function(N, j) {
        var P = new c(N, j, T._js_beautify, T._css_beautify);
        return P.beautify();
      }), this._options.indent_scripts === "keep" ? l = 0 : this._options.indent_scripts === "separate" && (l = -h.indent_level);
      var O = h.get_full_indent(l);
      if (x = x.replace(/\n[ \t]*$/, ""), d.custom_beautifier_name !== "html" && x[0] === "<" && x.match(/^(<!--|<!\[CDATA\[)/)) {
        var s = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(x);
        if (!s) {
          h.add_raw_token(r3);
          return;
        }
        m = O + s[1] + `
`, x = s[4], s[5] && (p = O + s[5]), x = x.replace(/\n[ \t]*$/, ""), (s[2] || s[3].indexOf(`
`) !== -1) && (s = s[3].match(/[ \t]+$/), s && (r3.whitespace_before = s[0]));
      }
      if (x)
        if (E) {
          var y = function() {
            this.eol = `
`;
          };
          y.prototype = this._options.raw_options;
          var w = new y();
          x = E(O + x, w);
        } else {
          var A = r3.whitespace_before;
          A && (x = x.replace(new RegExp(`
(` + A + ")?", "g"), `
`)), x = O + x.replace(/\n/g, `
` + O);
        }
      m && (x ? x = m + x + `
` + p : x = m + p), h.print_newline(false), x && (r3.text = x, r3.whitespace_before = "", r3.newlines = 0, h.add_raw_token(r3), h.print_newline(true));
    }
  }, c.prototype._handle_tag_open = function(h, r3, d, T, x) {
    var E = this._get_tag_open_token(r3);
    if ((d.is_unformatted || d.is_content_unformatted) && !d.is_empty_element && r3.type === t.TAG_OPEN && !E.is_start_tag ? (h.add_raw_token(r3), E.start_tag_token = this._tag_stack.try_pop(E.tag_name)) : (h.traverse_whitespace(r3), this._set_tag_position(h, r3, E, d, T), E.is_inline_element || h.set_wrap_point(), h.print_token(r3)), E.is_start_tag && this._is_wrap_attributes_force) {
      var l = 0, m;
      do
        m = x.peek(l), m.type === t.ATTRIBUTE && (E.attr_count += 1), l += 1;
      while (m.type !== t.EOF && m.type !== t.TAG_CLOSE);
    }
    return (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) && (E.alignment_size = r3.text.length + 1), !E.tag_complete && !E.is_unformatted && (h.alignment_size = E.alignment_size), E;
  };
  var k = function(h, r3) {
    if (this.parent = h || null, this.text = "", this.type = "TK_TAG_OPEN", this.tag_name = "", this.is_inline_element = false, this.is_unformatted = false, this.is_content_unformatted = false, this.is_empty_element = false, this.is_start_tag = false, this.is_end_tag = false, this.indent_content = false, this.multiline_content = false, this.custom_beautifier_name = null, this.start_tag_token = null, this.attr_count = 0, this.has_wrapped_attrs = false, this.alignment_size = 0, this.tag_complete = false, this.tag_start_char = "", this.tag_check = "", !r3)
      this.tag_complete = true;
    else {
      var d;
      this.tag_start_char = r3.text[0], this.text = r3.text, this.tag_start_char === "<" ? (d = r3.text.match(/^<([^\s>]*)/), this.tag_check = d ? d[1] : "") : (d = r3.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/), this.tag_check = d ? d[1] : "", (r3.text.startsWith("{{#>") || r3.text.startsWith("{{~#>")) && this.tag_check[0] === ">" && (this.tag_check === ">" && r3.next !== null ? this.tag_check = r3.next.text.split(" ")[0] : this.tag_check = r3.text.split(">")[1])), this.tag_check = this.tag_check.toLowerCase(), r3.type === t.COMMENT && (this.tag_complete = true), this.is_start_tag = this.tag_check.charAt(0) !== "/", this.tag_name = this.is_start_tag ? this.tag_check : this.tag_check.substr(1), this.is_end_tag = !this.is_start_tag || r3.closed && r3.closed.text === "/>";
      var T = 2;
      this.tag_start_char === "{" && this.text.length >= 3 && this.text.charAt(2) === "~" && (T = 3), this.is_end_tag = this.is_end_tag || this.tag_start_char === "{" && (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(T)));
    }
  };
  c.prototype._get_tag_open_token = function(h) {
    var r3 = new k(this._tag_stack.get_parser_token(), h);
    return r3.alignment_size = this._options.wrap_attributes_indent_size, r3.is_end_tag = r3.is_end_tag || g(r3.tag_check, this._options.void_elements), r3.is_empty_element = r3.tag_complete || r3.is_start_tag && r3.is_end_tag, r3.is_unformatted = !r3.tag_complete && g(r3.tag_check, this._options.unformatted), r3.is_content_unformatted = !r3.is_empty_element && g(r3.tag_check, this._options.content_unformatted), r3.is_inline_element = g(r3.tag_name, this._options.inline) || this._options.inline_custom_elements && r3.tag_name.includes("-") || r3.tag_start_char === "{", r3;
  }, c.prototype._set_tag_position = function(h, r3, d, T, x) {
    if (d.is_empty_element || (d.is_end_tag ? d.start_tag_token = this._tag_stack.try_pop(d.tag_name) : (this._do_optional_end_element(d) && (d.is_inline_element || h.print_newline(false)), this._tag_stack.record_tag(d), (d.tag_name === "script" || d.tag_name === "style") && !(d.is_unformatted || d.is_content_unformatted) && (d.custom_beautifier_name = u(d.tag_check, r3)))), g(d.tag_check, this._options.extra_liners) && (h.print_newline(false), h._output.just_added_blankline() || h.print_newline(true)), d.is_empty_element) {
      if (d.tag_start_char === "{" && d.tag_check === "else") {
        this._tag_stack.indent_to_tag(["if", "unless", "each"]), d.indent_content = true;
        var E = h.current_line_has_match(/{{#if/);
        E || h.print_newline(false);
      }
      d.tag_name === "!--" && x.type === t.TAG_CLOSE && T.is_end_tag && d.text.indexOf(`
`) === -1 || (d.is_inline_element || d.is_unformatted || h.print_newline(false), this._calcluate_parent_multiline(h, d));
    } else if (d.is_end_tag) {
      var l = false;
      l = d.start_tag_token && d.start_tag_token.multiline_content, l = l || !d.is_inline_element && !(T.is_inline_element || T.is_unformatted) && !(x.type === t.TAG_CLOSE && d.start_tag_token === T) && x.type !== "TK_CONTENT", (d.is_content_unformatted || d.is_unformatted) && (l = false), l && h.print_newline(false);
    } else
      d.indent_content = !d.custom_beautifier_name, d.tag_start_char === "<" && (d.tag_name === "html" ? d.indent_content = this._options.indent_inner_html : d.tag_name === "head" ? d.indent_content = this._options.indent_head_inner_html : d.tag_name === "body" && (d.indent_content = this._options.indent_body_inner_html)), !(d.is_inline_element || d.is_unformatted) && (x.type !== "TK_CONTENT" || d.is_content_unformatted) && h.print_newline(false), this._calcluate_parent_multiline(h, d);
  }, c.prototype._calcluate_parent_multiline = function(h, r3) {
    r3.parent && h._output.just_added_newline() && !((r3.is_inline_element || r3.is_unformatted) && r3.parent.is_inline_element) && (r3.parent.multiline_content = true);
  };
  var C = ["address", "article", "aside", "blockquote", "details", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "main", "menu", "nav", "ol", "p", "pre", "section", "table", "ul"], S = ["a", "audio", "del", "ins", "map", "noscript", "video"];
  return c.prototype._do_optional_end_element = function(h) {
    var r3 = null;
    if (!(h.is_empty_element || !h.is_start_tag || !h.parent)) {
      if (h.tag_name === "body")
        r3 = r3 || this._tag_stack.try_pop("head");
      else if (h.tag_name === "li")
        r3 = r3 || this._tag_stack.try_pop("li", ["ol", "ul", "menu"]);
      else if (h.tag_name === "dd" || h.tag_name === "dt")
        r3 = r3 || this._tag_stack.try_pop("dt", ["dl"]), r3 = r3 || this._tag_stack.try_pop("dd", ["dl"]);
      else if (h.parent.tag_name === "p" && C.indexOf(h.tag_name) !== -1) {
        var d = h.parent.parent;
        (!d || S.indexOf(d.tag_name) === -1) && (r3 = r3 || this._tag_stack.try_pop("p"));
      } else
        h.tag_name === "rp" || h.tag_name === "rt" ? (r3 = r3 || this._tag_stack.try_pop("rt", ["ruby", "rtc"]), r3 = r3 || this._tag_stack.try_pop("rp", ["ruby", "rtc"])) : h.tag_name === "optgroup" ? r3 = r3 || this._tag_stack.try_pop("optgroup", ["select"]) : h.tag_name === "option" ? r3 = r3 || this._tag_stack.try_pop("option", ["select", "datalist", "optgroup"]) : h.tag_name === "colgroup" ? r3 = r3 || this._tag_stack.try_pop("caption", ["table"]) : h.tag_name === "thead" ? (r3 = r3 || this._tag_stack.try_pop("caption", ["table"]), r3 = r3 || this._tag_stack.try_pop("colgroup", ["table"])) : h.tag_name === "tbody" || h.tag_name === "tfoot" ? (r3 = r3 || this._tag_stack.try_pop("caption", ["table"]), r3 = r3 || this._tag_stack.try_pop("colgroup", ["table"]), r3 = r3 || this._tag_stack.try_pop("thead", ["table"]), r3 = r3 || this._tag_stack.try_pop("tbody", ["table"])) : h.tag_name === "tr" ? (r3 = r3 || this._tag_stack.try_pop("caption", ["table"]), r3 = r3 || this._tag_stack.try_pop("colgroup", ["table"]), r3 = r3 || this._tag_stack.try_pop("tr", ["table", "thead", "tbody", "tfoot"])) : (h.tag_name === "th" || h.tag_name === "td") && (r3 = r3 || this._tag_stack.try_pop("td", ["table", "thead", "tbody", "tfoot", "tr"]), r3 = r3 || this._tag_stack.try_pop("th", ["table", "thead", "tbody", "tfoot", "tr"]));
      return h.parent = this._tag_stack.get_parser_token(), r3;
    }
  }, ae.Beautifier = c, ae;
}
var ni;
function mn() {
  if (ni)
    return St.exports;
  ni = 1;
  var n = dn().Beautifier, i = Oi().Options;
  function e(t, a, _, f) {
    var o = new n(t, a, _, f);
    return o.beautify();
  }
  return St.exports = e, St.exports.defaultOptions = function() {
    return new i();
  }, St.exports;
}
var si;
function gn() {
  if (si)
    return yt;
  si = 1;
  var n = hn(), i = fn(), e = mn();
  function t(a, _, f, o) {
    return f = f || n, o = o || i, e(a, _, f, o);
  }
  return t.defaultOptions = e.defaultOptions, yt.js = n, yt.css = i, yt.html = t, yt;
}
(function(n) {
  function i(e, t, a) {
    var _ = function(f, o) {
      return e.js_beautify(f, o);
    };
    return _.js = e.js_beautify, _.css = t.css_beautify, _.html = a.html_beautify, _.js_beautify = e.js_beautify, _.css_beautify = t.css_beautify, _.html_beautify = a.html_beautify, _;
  }
  (function(e) {
    var t = gn();
    t.js_beautify = t.js, t.css_beautify = t.css, t.html_beautify = t.html, e.exports = i(t, t, t);
  })(n);
})(vi);
var ri;
var vn = function(i) {
  return typeof i == "string" && bn().test(i);
};
function bn() {
  return ri || (ri = new RegExp(`^[\\s	
\v\f\r   ᠎             　\u2028\u2029\uFEFF"]+$`));
}
var yn = function(i) {
  return typeof i < "u" && i !== null && (typeof i == "object" || typeof i == "function");
};
var ai = yn;
var Ti = function(i) {
  ai(i) || (i = {});
  for (var e = arguments.length, t = 1; t < e; t++) {
    var a = arguments[t];
    ai(a) && wn(i, a);
  }
  return i;
};
function wn(n, i) {
  for (var e in i)
    xn(i, e) && (n[e] = i[e]);
}
function xn(n, i) {
  return Object.prototype.hasOwnProperty.call(n, i);
}
var En = function(n) {
  return n != null && (ki(n) || On(n) || !!n._isBuffer);
};
function ki(n) {
  return !!n.constructor && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n);
}
function On(n) {
  return typeof n.readFloatLE == "function" && typeof n.slice == "function" && ki(n.slice(0, 0));
}
var Tn = En;
var kn = Object.prototype.toString;
var Rn = function(i) {
  if (typeof i > "u")
    return "undefined";
  if (i === null)
    return "null";
  if (i === true || i === false || i instanceof Boolean)
    return "boolean";
  if (typeof i == "string" || i instanceof String)
    return "string";
  if (typeof i == "number" || i instanceof Number)
    return "number";
  if (typeof i == "function" || i instanceof Function)
    return "function";
  if (typeof Array.isArray < "u" && Array.isArray(i))
    return "array";
  if (i instanceof RegExp)
    return "regexp";
  if (i instanceof Date)
    return "date";
  var e = kn.call(i);
  return e === "[object RegExp]" ? "regexp" : e === "[object Date]" ? "date" : e === "[object Arguments]" ? "arguments" : e === "[object Error]" ? "error" : Tn(i) ? "buffer" : e === "[object Set]" ? "set" : e === "[object WeakSet]" ? "weakset" : e === "[object Map]" ? "map" : e === "[object WeakMap]" ? "weakmap" : e === "[object Symbol]" ? "symbol" : e === "[object Int8Array]" ? "int8array" : e === "[object Uint8Array]" ? "uint8array" : e === "[object Uint8ClampedArray]" ? "uint8clampedarray" : e === "[object Int16Array]" ? "int16array" : e === "[object Uint16Array]" ? "uint16array" : e === "[object Int32Array]" ? "int32array" : e === "[object Uint32Array]" ? "uint32array" : e === "[object Float32Array]" ? "float32array" : e === "[object Float64Array]" ? "float64array" : "object";
};
var Sn = vn;
var Cn = Ti;
var An = Rn;
var Nn = function(n, i) {
  var e = Cn({}, i), t = e.sep || `

`, a = e.min, _;
  return typeof a == "number" && a !== 2 && (_ = new RegExp("(\\r\\n|\\n|\\u2424) {" + a + ",}")), typeof _ > "u" && (_ = e.regex || /(\r\n|\n|\u2424){2,}/g), e.keepWhitespace !== true && (n = n.split(`
`).map(function(f) {
    return Sn(f) ? f.trim() : f;
  }).join(`
`)), n = Ln(n, e), n.replace(_, t);
};
function Ln(n, i) {
  var e = i.trailingNewline;
  if (e === false)
    return n;
  switch (An(e)) {
    case "string":
      n = n.replace(/\s+$/, i.trailingNewline);
      break;
    case "function":
      n = i.trailingNewline(n);
      break;
    case "undefined":
    case "boolean":
    default: {
      n = n.replace(/\s+$/, `
`);
      break;
    }
  }
  return n;
}
var jn = vi.exports;
var Dn = Nn;
var $n = Ti;
var In = {
  unformatted: ["code", "pre", "em", "strong", "span"],
  indent_inner_html: true,
  indent_char: " ",
  indent_size: 2,
  sep: `
`
};
var Pn = function(i, e) {
  var t = $n({}, In, e);
  return i = jn.html(i, t), t.ocd === true ? (t.newlines && (t.sep = t.newlines), Bn(i, t)) : i;
};
function Bn(n, i) {
  return Dn(n, i).replace(/^\s+/g, "").replace(/\s+$/g, `
`).replace(/(\s*<!--)/g, `
$1`).replace(/>(\s*)(?=<!--\s*\/)/g, "> ");
}
function gt(n) {
  let { code: i, src: e } = n || {};
  if (i || (i = '<div id="app"></div>'), e && (i += `
<script type="module" src="${e}"><\/script>`), typeof DOMParser < "u") {
    const a = new DOMParser().parseFromString(i, "text/html");
    return Pn(`<!DOCTYPE html>
${a.documentElement.outerHTML}`, {
      ocd: true
    });
  }
  return "";
}
function Mt(n) {
  const i = {};
  return n === $.REACT && (i.jsx = "react"), JSON.stringify(
    {
      compilerOptions: {
        target: "es5",
        lib: ["dom", "dom.iterable", "esnext"],
        allowJs: true,
        skipLibCheck: true,
        esModuleInterop: true,
        allowImportingTsExtensions: true,
        allowSyntheticDefaultImports: true,
        strict: true,
        forceConsistentCasingInFileNames: true,
        module: "esnext",
        moduleResolution: "node",
        resolveJsonModule: true,
        isolatedModules: true,
        noEmit: true,
        ...i
      },
      include: ["src"]
    },
    null,
    2
  );
}
var Ri = () => JSON.stringify(
  {
    installDependencies: false,
    startCommand: "npm install && npm run dev"
  },
  null,
  2
);
var Mn = `import { createApp } from "vue";
import Demo from "./Demo.vue";

const app = createApp(Demo);
app.mount("#app");
`;
var Wn = `import React from "react";
import { createRoot } from "react-dom/client";
import Demo from "./Demo.tsx";

const root = createRoot(document.querySelector("#app"));
root.render(<Demo />);
`;
function Wt(n) {
  return n === $.VUE ? Mn : n === $.REACT ? Wn : "";
}
var Un = `import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
export default defineConfig({
  plugins: [vue(), vueJsx()],
});
`;
var Fn = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
});
`;
function Si(n) {
  return n === $.VUE ? Un : n === $.REACT ? Fn : "";
}
var zn = () => ({
  copyContent: ref(""),
  clickCopy: async (e) => {
    let t = true;
    try {
      navigator.clipboard && navigator.clipboard.writeText && await navigator.clipboard.writeText(e);
    } catch {
      const _ = document.createElement("textarea");
      _.value = e, _.style.position = "fixed", _.style.left = "-999999px", _.style.top = "-999999px", document.body.appendChild(_), _.focus(), _.select(), t = document.execCommand("copy"), document.body.removeChild(_);
    }
    return t;
  }
});
var Kn = () => {
  const n = ref(true);
  return {
    isCodeFold: n,
    setCodeFold: (e) => {
      n.value = e;
    }
  };
};
function qn(n) {
  return [
    ...n.match(/from '([^']+)'(;)?(\r)?\n/g) || [],
    ...n.match(/from "([^"]+)"(;)?(\r)?\n/g) || []
  ].map((i) => {
    let e = "";
    return i.includes("'") ? e = i.split("'")[1] : i.includes('"') && (e = i.split('"')[1]), e.includes("/") && (e.startsWith("@") ? e = e.split("/")[0] + "/" + e.split("/")[1] : e = e.split("/")[0]), e;
  }).filter((i) => i !== "").reduce((i, e) => (i[e] = "latest", i), {});
}
var At = "vitepress-demo-plugin";
var Nt = (n, i, e, t) => {
  let a = i === "" ? `${n}` : `${n}-${i}`;
  return e && (a += `__${e}`), t && (a += `--${t}`), a;
};
var Ut = (n = "") => ({
  b: () => Nt(At, n),
  e: (_ = "") => Nt(At, n, _),
  m: (_ = "") => Nt(At, n, "", _),
  bem: (_, f, o) => Nt(At, _, f, o)
});
var oi = ({
  code: n,
  styles: i,
  links: e
}) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    ${i}
    ${e}
    <style>
      body {
        min-height: 0;
      }
    </style>
  </head>
  <body>
    <div class="vp-raw">
      ${n}
    </div>
  </body>
</html>
  `;
var Vn = (n, i) => {
  const e = {
    dependencies: {},
    devDependencies: {
      typescript: "latest"
    }
  };
  return n === $.VUE ? (e.dependencies.vue = "latest", i === rt.STACKBLITZ ? (e.devDependencies.vite = "latest", e.devDependencies["@vitejs/plugin-vue"] = "latest", e.devDependencies["@vitejs/plugin-vue-jsx"] = "latest") : i === rt.CODESANDBOX && (e.devDependencies["@vue/cli-plugin-babel"] = "latest")) : n === $.REACT && (e.dependencies.react = "latest", e.dependencies["react-dom"] = "latest", e.dependencies["@emotion/react"] = "latest", e.dependencies["@emotion/styled"] = "latest", e.devDependencies["@types/react"] = "latest", e.devDependencies["@types/react-dom"] = "latest", i === rt.STACKBLITZ && (e.devDependencies.vite = "latest", e.devDependencies["@vitejs/plugin-react"] = "latest")), e;
};
function Ft(n) {
  const { type: i, platform: e, code: t, title: a, description: _ } = n, f = e === rt.STACKBLITZ ? {
    scripts: {
      dev: "vite",
      build: "vite build",
      serve: "vite preview"
    }
  } : {}, { dependencies: o, devDependencies: u } = Vn(i, e), g = {
    name: a,
    description: _,
    version: "0.0.0",
    private: true,
    ...f,
    dependencies: {
      ...qn(t),
      ...o
    },
    devDependencies: {
      ...u
    }
  };
  return JSON.stringify(g, null, 2);
}
function Gn(n) {
  const { code: i } = n;
  return Pt({
    files: {
      "package.json": {
        content: Ft({
          type: $.VUE,
          platform: rt.CODESANDBOX,
          code: i
        })
      },
      "tsconfig.json": {
        content: Mt($.VUE)
      },
      "index.html": {
        content: gt()
      },
      "src/main.ts": {
        content: Wt($.VUE)
      },
      "src/Demo.vue": {
        content: i
      },
      ...n.customFiles
    }
  });
}
function Hn(n) {
  const { code: i } = n;
  return Pt({
    files: {
      "package.json": {
        content: Ft({
          type: $.REACT,
          platform: rt.CODESANDBOX,
          code: i
        })
      },
      "tsconfig.json": {
        content: Mt($.REACT)
      },
      "index.html": {
        content: gt()
      },
      "src/main.tsx": {
        content: Wt($.REACT)
      },
      "src/Demo.tsx": {
        content: i
      },
      ...n.customFiles
    }
  });
}
function Xn(n) {
  const { code: i } = n;
  return Pt({
    files: {
      "index.html": {
        content: gt({ code: i })
      },
      ...n.customFiles
    },
    template: "static"
  });
}
function Qn(n) {
  var a, _, f;
  const i = (a = (n.templates || []).find(
    (o) => o.scope === "global"
  )) == null ? void 0 : a.files, e = (_ = (n.templates || []).find(
    (o) => o.scope === n.type
  )) == null ? void 0 : _.files, t = (f = (n.templates || []).find(
    (o) => o.scope === n.scope
  )) == null ? void 0 : f.files;
  n.customFiles = {
    ...i,
    ...e,
    ...t
  };
  for (let o in n.customFiles)
    n.customFiles[o] = {
      content: n.customFiles[o] || ""
    };
  if (n.type === $.VUE)
    return Gn(n);
  if (n.type === $.REACT)
    return Hn(n);
  if (n.type === $.HTML)
    return Xn(n);
}
var Jn = {
  action: "https://codesandbox.io/api/v1/sandboxes/define",
  method: "post",
  target: "_blank",
  style: { display: "flex" }
};
var Zn = ["value"];
var Yn = ["value"];
var ts = defineComponent({
  __name: "codesandbox",
  props: {
    code: {},
    type: {},
    title: {},
    description: {},
    scope: {},
    templates: {}
  },
  setup(n) {
    const i = n, e = computed(
      () => Qn({
        code: i.code,
        type: i.type,
        title: i.title || di,
        description: i.description || mi,
        scope: i.scope,
        templates: i.templates
      })
    ), t = computed(() => sn(i.type));
    return (a, _) => (openBlock(), createElementBlock("form", Jn, [
      createBaseVNode("input", {
        style: { display: "none" },
        name: "parameters",
        value: e.value
      }, null, 8, Zn),
      _[0] || (_[0] = createBaseVNode("input", {
        style: { display: "none" },
        name: "embed",
        value: 1
      }, null, -1)),
      createBaseVNode("input", {
        style: { display: "none" },
        name: "query",
        value: `module=${t.value}`
      }, null, 8, Yn),
      _[1] || (_[1] = createStaticVNode('<button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-codesandbox"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg></button>', 1))
    ]));
  }
});
var es = 500;
var is = 20;
var ns = 300;
var ss = "https://stackblitz.com";
var _i = [
  "angular-cli",
  "create-react-app",
  "html",
  "javascript",
  "node",
  "polymer",
  "typescript",
  "vue"
];
var rs = ["project", "search", "ports", "settings"];
var as = ["light", "dark"];
var os = ["editor", "preview"];
var ui = {
  clickToLoad: (n) => lt("ctl", n),
  devToolsHeight: (n) => li("devtoolsheight", n),
  forceEmbedLayout: (n) => lt("embed", n),
  hideDevTools: (n) => lt("hidedevtools", n),
  hideExplorer: (n) => lt("hideExplorer", n),
  hideNavigation: (n) => lt("hideNavigation", n),
  openFile: (n) => Lt("file", n),
  showSidebar: (n) => _s("showSidebar", n),
  sidebarView: (n) => _e("sidebarView", n, rs),
  startScript: (n) => Lt("startScript", n),
  terminalHeight: (n) => li("terminalHeight", n),
  theme: (n) => _e("theme", n, as),
  view: (n) => _e("view", n, os),
  zenMode: (n) => lt("zenMode", n),
  organization: (n) => `${Lt("orgName", n == null ? void 0 : n.name)}&${Lt("orgProvider", n == null ? void 0 : n.provider)}`,
  crossOriginIsolated: (n) => lt("corp", n)
};
function Ci(n = {}) {
  const i = Object.entries(n).map(([e, t]) => t != null && ui.hasOwnProperty(e) ? ui[e](t) : "").filter(Boolean);
  return i.length ? `?${i.join("&")}` : "";
}
function lt(n, i) {
  return i === true ? `${n}=1` : "";
}
function _s(n, i) {
  return typeof i == "boolean" ? `${n}=${i ? "1" : "0"}` : "";
}
function li(n, i) {
  if (typeof i == "number" && !Number.isNaN(i)) {
    const e = Math.min(100, Math.max(0, i));
    return `${n}=${encodeURIComponent(Math.round(e))}`;
  }
  return "";
}
function _e(n, i = "", e = []) {
  return e.includes(i) ? `${n}=${encodeURIComponent(i)}` : "";
}
function Lt(n, i) {
  return (Array.isArray(i) ? i : [i]).filter((t) => typeof t == "string" && t.trim() !== "").map((t) => `${n}=${encodeURIComponent(t)}`).join("&");
}
function Ai() {
  return Math.random().toString(36).slice(2, 6) + Math.random().toString(36).slice(2, 6);
}
function de(n, i) {
  return `${Ni(i)}${n}${Ci(i)}`;
}
function me(n, i) {
  const e = {
    forceEmbedLayout: true
  };
  return i && typeof i == "object" && Object.assign(e, i), `${Ni(e)}${n}${Ci(e)}`;
}
function Ni(n = {}) {
  return (typeof n.origin == "string" ? n.origin : ss).replace(/\/$/, "");
}
function ge(n, i, e) {
  if (!i || !n || !n.parentNode)
    throw new Error("Invalid Element");
  n.id && (i.id = n.id), n.className && (i.className = n.className), us(i, e), ls(n, i, e), n.replaceWith(i);
}
function ve(n) {
  if (typeof n == "string") {
    const i = document.getElementById(n);
    if (!i)
      throw new Error(`Could not find element with id '${n}'`);
    return i;
  } else if (n instanceof HTMLElement)
    return n;
  throw new Error(`Invalid element: ${n}`);
}
function be(n) {
  return n && n.newWindow === false ? "_self" : "_blank";
}
function us(n, i = {}) {
  const e = Object.hasOwnProperty.call(i, "height") ? `${i.height}` : `${ns}`, t = Object.hasOwnProperty.call(i, "width") ? `${i.width}` : void 0;
  n.setAttribute("height", e), t ? n.setAttribute("width", t) : n.setAttribute("style", "width:100%;");
}
function ls(n, i, e = {}) {
  var a, _, f;
  const t = (f = (_ = (a = n.allow) == null ? void 0 : a.split(";")) == null ? void 0 : _.map((o) => o.trim())) != null ? f : [];
  e.crossOriginIsolated && !t.includes("cross-origin-isolated") && t.push("cross-origin-isolated"), t.length > 0 && (i.allow = t.join("; "));
}
var ps = class {
  constructor(i) {
    this.pending = {}, this.port = i, this.port.onmessage = this.messageListener.bind(this);
  }
  request({ type: i, payload: e }) {
    return new Promise((t, a) => {
      const _ = Ai();
      this.pending[_] = { resolve: t, reject: a }, this.port.postMessage({
        type: i,
        payload: {
          ...e,
          __reqid: _
        }
      });
    });
  }
  messageListener(i) {
    var o;
    if (typeof ((o = i.data.payload) == null ? void 0 : o.__reqid) != "string")
      return;
    const { type: e, payload: t } = i.data, { __reqid: a, __success: _, __error: f } = t;
    this.pending[a] && (_ ? this.pending[a].resolve(this.cleanResult(t)) : this.pending[a].reject(f ? `${e}: ${f}` : e), delete this.pending[a]);
  }
  cleanResult(i) {
    const e = { ...i };
    return delete e.__reqid, delete e.__success, delete e.__error, Object.keys(e).length ? e : null;
  }
};
var hs = class {
  constructor(i, e) {
    this.editor = {
      openFile: (t) => this._rdc.request({
        type: "SDK_OPEN_FILE",
        payload: { path: t }
      }),
      setCurrentFile: (t) => this._rdc.request({
        type: "SDK_SET_CURRENT_FILE",
        payload: { path: t }
      }),
      setTheme: (t) => this._rdc.request({
        type: "SDK_SET_UI_THEME",
        payload: { theme: t }
      }),
      setView: (t) => this._rdc.request({
        type: "SDK_SET_UI_VIEW",
        payload: { view: t }
      }),
      showSidebar: (t = true) => this._rdc.request({
        type: "SDK_TOGGLE_SIDEBAR",
        payload: { visible: t }
      })
    }, this.preview = {
      origin: "",
      getUrl: () => this._rdc.request({
        type: "SDK_GET_PREVIEW_URL",
        payload: {}
      }).then((t) => {
        var a;
        return (a = t == null ? void 0 : t.url) != null ? a : null;
      }),
      setUrl: (t = "/") => {
        if (typeof t != "string" || !t.startsWith("/"))
          throw new Error(`Invalid argument: expected a path starting with '/', got '${t}'`);
        return this._rdc.request({
          type: "SDK_SET_PREVIEW_URL",
          payload: { path: t }
        });
      }
    }, this._rdc = new ps(i), Object.defineProperty(this.preview, "origin", {
      value: typeof e.previewOrigin == "string" ? e.previewOrigin : null,
      writable: false
    });
  }
  applyFsDiff(i) {
    const e = (t) => t !== null && typeof t == "object";
    if (!e(i) || !e(i.create))
      throw new Error("Invalid diff object: expected diff.create to be an object.");
    if (!Array.isArray(i.destroy))
      throw new Error("Invalid diff object: expected diff.destroy to be an array.");
    return this._rdc.request({
      type: "SDK_APPLY_FS_DIFF",
      payload: i
    });
  }
  getDependencies() {
    return this._rdc.request({
      type: "SDK_GET_DEPS_SNAPSHOT",
      payload: {}
    });
  }
  getFsSnapshot() {
    return this._rdc.request({
      type: "SDK_GET_FS_SNAPSHOT",
      payload: {}
    });
  }
};
var jt = [];
var cs = class {
  constructor(i) {
    this.id = Ai(), this.element = i, this.pending = new Promise((e, t) => {
      const a = ({ data: g, ports: v }) => {
        (g == null ? void 0 : g.action) === "SDK_INIT_SUCCESS" && g.id === this.id && (this.vm = new hs(v[0], g.payload), e(this.vm), f());
      }, _ = () => {
        var g;
        (g = this.element.contentWindow) == null || g.postMessage(
          {
            action: "SDK_INIT",
            id: this.id
          },
          "*"
        );
      };
      function f() {
        window.clearInterval(u), window.removeEventListener("message", a);
      }
      window.addEventListener("message", a), _();
      let o = 0;
      const u = window.setInterval(() => {
        if (this.vm) {
          f();
          return;
        }
        if (o >= is) {
          f(), t("Timeout: Unable to establish a connection with the StackBlitz VM"), jt.forEach((g, v) => {
            g.id === this.id && jt.splice(v, 1);
          });
          return;
        }
        o++, _();
      }, es);
    }), jt.push(this);
  }
};
var fs = (n) => {
  var e;
  const i = n instanceof Element ? "element" : "id";
  return (e = jt.find((t) => t[i] === n)) != null ? e : null;
};
function ds(n, i) {
  const e = document.createElement("input");
  return e.type = "hidden", e.name = n, e.value = i, e;
}
function ms(n) {
  return n.replace(/\[/g, "%5B").replace(/\]/g, "%5D");
}
function Li({
  template: n,
  title: i,
  description: e,
  dependencies: t,
  files: a,
  settings: _
}) {
  if (!_i.includes(n)) {
    const g = _i.map((v) => `'${v}'`).join(", ");
    console.warn(`Unsupported project.template: must be one of ${g}`);
  }
  const f = [], o = (g, v, b = "") => {
    f.push(ds(g, typeof v == "string" ? v : b));
  };
  o("project[title]", i), typeof e == "string" && e.length > 0 && o("project[description]", e), o("project[template]", n, "javascript"), t && (n === "node" ? console.warn(
    "Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."
  ) : o("project[dependencies]", JSON.stringify(t))), _ && o("project[settings]", JSON.stringify(_)), Object.entries(a).forEach(([g, v]) => {
    o(`project[files][${ms(g)}]`, v);
  });
  const u = document.createElement("form");
  return u.method = "POST", u.setAttribute("style", "display:none!important;"), u.append(...f), u;
}
function gs(n, i) {
  const e = Li(n);
  return e.action = me("/run", i), e.id = "sb_run", `<!doctype html>
<html>
<head><title></title></head>
<body>
  ${e.outerHTML}
  <script>document.getElementById('${e.id}').submit();<\/script>
</body>
</html>`;
}
function vs(n, i) {
  const e = Li(n);
  e.action = de("/run", i), e.target = be(i), document.body.appendChild(e), e.submit(), document.body.removeChild(e);
}
function zt(n) {
  var e;
  return n != null && n.contentWindow ? ((e = fs(n)) != null ? e : new cs(n)).pending : Promise.reject("Provided element is not an iframe.");
}
function bs(n, i) {
  vs(n, i);
}
function ys(n, i) {
  const e = de(`/edit/${n}`, i), t = be(i);
  window.open(e, t);
}
function ws(n, i) {
  const e = de(`/github/${n}`, i), t = be(i);
  window.open(e, t);
}
function xs(n, i, e) {
  var f;
  const t = ve(n), a = gs(i, e), _ = document.createElement("iframe");
  return ge(t, _, e), (f = _.contentDocument) == null || f.write(a), zt(_);
}
function Es(n, i, e) {
  const t = ve(n), a = document.createElement("iframe");
  return a.src = me(`/edit/${i}`, e), ge(t, a, e), zt(a);
}
function Os(n, i, e) {
  const t = ve(n), a = document.createElement("iframe");
  return a.src = me(`/github/${i}`, e), ge(t, a, e), zt(a);
}
var ye = {
  connect: zt,
  embedGithubProject: Os,
  embedProject: xs,
  embedProjectId: Es,
  openGithubProject: ws,
  openProject: bs,
  openProjectId: ys
};
var Ts = (n) => {
  const { code: i, title: e, description: t } = n;
  ye.openProject(
    {
      title: e,
      description: t,
      template: "html",
      files: {
        "index.html": gt({ code: i }),
        ...n.customFiles
      }
    },
    {
      openFile: "index.html"
    }
  );
};
var ks = (n) => {
  const { code: i, title: e, description: t } = n;
  ye.openProject(
    {
      title: e,
      description: t,
      template: "node",
      files: {
        "src/Demo.tsx": i,
        "src/main.tsx": Wt($.REACT),
        "index.html": gt({ src: "/src/main.tsx" }),
        "package.json": Ft({
          type: $.REACT,
          platform: rt.STACKBLITZ,
          code: i
        }),
        "vite.config.js": Si($.REACT),
        ".stackblitzrc": Ri(),
        "tsconfig.json": Mt($.REACT),
        ...n.customFiles
      }
    },
    {
      openFile: "src/Demo.tsx"
    }
  );
};
var Rs = (n) => {
  const { code: i, title: e, description: t } = n;
  ye.openProject(
    {
      title: e,
      description: t,
      template: "node",
      files: {
        "src/Demo.vue": i,
        "src/main.ts": Wt($.VUE),
        "index.html": gt({ src: "/src/main.ts" }),
        "package.json": Ft({
          type: $.VUE,
          platform: rt.STACKBLITZ,
          code: i
        }),
        "vite.config.js": Si($.VUE),
        ".stackblitzrc": Ri(),
        "tsconfig.json": Mt($.VUE),
        ...n.customFiles
      }
    },
    {
      openFile: "src/Demo.vue"
    }
  );
};
function Ss(n) {
  var a, _, f;
  const i = (a = (n.templates || []).find(
    (o) => o.scope === "global"
  )) == null ? void 0 : a.files, e = (_ = (n.templates || []).find(
    (o) => o.scope === n.type
  )) == null ? void 0 : _.files, t = (f = (n.templates || []).find(
    (o) => o.scope === n.scope
  )) == null ? void 0 : f.files;
  if (n.customFiles = {
    ...i,
    ...e,
    ...t
  }, n.type === $.VUE)
    return Rs(n);
  if (n.type === $.REACT)
    return ks(n);
  if (n.type === $.HTML)
    return Ts(n);
}
var Cs = defineComponent({
  __name: "stackblitz",
  props: {
    code: {},
    type: {},
    title: {},
    description: {},
    templates: {},
    scope: {}
  },
  setup(n) {
    const i = n;
    function e() {
      Ss({
        code: i.code,
        type: i.type,
        title: i.title || di,
        description: i.description || mi,
        templates: i.templates || [],
        scope: i.scope
      });
    }
    return (t, a) => (openBlock(), createElementBlock("svg", {
      onClick: e,
      viewBox: "64 64 896 896",
      focusable: "false",
      "data-icon": "thunderbolt",
      width: "20px",
      height: "20px",
      fill: "currentColor",
      "aria-hidden": "true"
    }, a[0] || (a[0] = [
      createBaseVNode("path", { d: "M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z" }, null, -1)
    ])));
  }
});
var As = {};
var Ns = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "lucide lucide-github"
};
function Ls(n, i) {
  return openBlock(), createElementBlock("svg", Ns, i[0] || (i[0] = [
    createBaseVNode("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }, null, -1),
    createBaseVNode("path", { d: "M9 18c-4.51 2-5-2-7-2" }, null, -1)
  ]));
}
var js = et(As, [["render", Ls]]);
var Ds = {};
var $s = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "lucide lucide-gitlab"
};
function Is(n, i) {
  return openBlock(), createElementBlock("svg", $s, i[0] || (i[0] = [
    createBaseVNode("path", { d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" }, null, -1)
  ]));
}
var Ps = et(Ds, [["render", Is]]);
var Bs = {};
var Ms = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  fill: "none",
  version: "1.1",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24"
};
function Ws(n, i) {
  return openBlock(), createElementBlock("svg", Ms, i[0] || (i[0] = [
    createBaseVNode("defs", null, [
      createBaseVNode("clipPath", { id: "master_svg0_27_0291" }, [
        createBaseVNode("rect", {
          x: "0",
          y: "0",
          width: "24",
          height: "24",
          rx: "0"
        })
      ])
    ], -1),
    createBaseVNode("g", { "clip-path": "url(#master_svg0_27_0291)" }, [
      createBaseVNode("g", null, [
        createBaseVNode("path", {
          d: "M4.707482,11.29327L4.707107,11.29289Q4.566455,11.152239999999999,4.382683,11.07612Q4.198912,11,4,11Q3.801088,11,3.617317,11.07612Q3.433545,11.152239999999999,3.292893,11.29289Q3.152241,11.43355,3.07612,11.61732Q3,11.80109,3,12Q3,12.02403,3.001154,12.04804Q3.010111,12.23427,3.085581,12.40477Q3.161051,12.57527,3.292893,12.70711L3.293268,12.70748L8.29289,17.7071Q8.36254,17.776699999999998,8.44443,17.8315Q8.52632,17.886200000000002,8.61732,17.9239Q8.70831,17.9616,8.80491,17.980800000000002Q8.90151,18,9,18Q9.09849,18,9.19509,17.980800000000002Q9.29169,17.9616,9.38268,17.9239Q9.47368,17.886200000000002,9.55557,17.8315Q9.63746,17.776699999999998,9.70711,17.7071L20.7071,6.707107Q20.8478,6.566454,20.9239,6.382683Q21,6.198912,21,6Q21,5.801088,20.9239,5.617317Q20.8478,5.433546,20.7071,5.292894Q20.5665,5.152241,20.3827,5.076121Q20.1989,5,20,5Q19.9741,5,19.9483,5.001339Q19.762999999999998,5.010937,19.5935,5.086334Q19.4241,5.16173,19.2929,5.292893L19.2925,5.293268L9,15.58579L4.707482,11.29327Z",
          "fill-rule": "evenodd",
          fill: "currentColor",
          "fill-opacity": "0.8500000238418579"
        })
      ])
    ], -1)
  ]));
}
var Us = et(Bs, [["render", Ws]]);
var Fs = {};
var zs = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  class: "lucide lucide-x-icon lucide-x"
};
function Ks(n, i) {
  return openBlock(), createElementBlock("svg", zs, i[0] || (i[0] = [
    createBaseVNode("path", { d: "M18 6 6 18" }, null, -1),
    createBaseVNode("path", { d: "m6 6 12 12" }, null, -1)
  ]));
}
var qs = et(Fs, [["render", Ks]]);
var Vs = { style: { color: "var(--vp-c-text-1)" } };
var Gs = 3e3;
var Hs = defineComponent({
  __name: "message",
  props: {
    content: { default: "复制成功！" },
    close: {},
    success: { type: Boolean, default: true }
  },
  setup(n, { expose: i }) {
    const e = Ut(), t = n, a = ref(false), _ = (g) => {
      a.value = g;
    }, f = ref(-9999), o = (g) => {
      f.value = g;
    };
    watch(a, (g) => {
      g === true && setTimeout(() => {
        a.value = false;
      }, Gs);
    });
    const u = () => {
      t.close();
    };
    return i({
      setVisible: _,
      setTopHeight: o
    }), (g, v) => (openBlock(), createBlock(Transition, {
      name: "slide-fade",
      onAfterLeave: u
    }, {
      default: withCtx(() => [
        a.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(e).bem("message-notice", "container")]),
          style: normalizeStyle({ top: f.value + "px" })
        }, [
          g.success ? (openBlock(), createBlock(Us, { key: 0 })) : (openBlock(), createBlock(qs, {
            key: 1,
            style: { color: "var(--vp-c-danger-2)" }
          })),
          createBaseVNode("span", Vs, toDisplayString(g.content), 1)
        ], 6)) : createCommentVNode("", true)
      ]),
      _: 1
    }));
  }
});
var ue = [];
var Xs = {
  open: (n, i) => {
    const e = document.createElement("div"), t = createApp(Hs, {
      content: n,
      success: i,
      close: () => {
        document.body.removeChild(e), ue.pop(), t.unmount();
      }
    }), a = t.mount(e);
    document.body.appendChild(e);
    const _ = ue.length, f = _ === 0 ? 10 : (_ + 1) * 10 + _ * 42;
    a.setTopHeight(f), a.setVisible(true), ue.push(a);
  }
};
var Qs = defineComponent({
  __name: "index",
  props: {
    content: {}
  },
  setup(n) {
    const i = Ut(), e = n;
    return (t, a) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(i).bem("tooltip", "wrapper")])
    }, [
      createBaseVNode("div", {
        class: normalizeClass([unref(i).bem("tooltip", "content")])
      }, [
        renderSlot(t.$slots, "content", {}, () => [
          createTextVNode(toDisplayString(e.content), 1)
        ], true)
      ], 2),
      renderSlot(t.$slots, "default", {}, void 0, true)
    ], 2));
  }
});
var pt = et(Qs, [["__scopeId", "data-v-588bc5b3"]]);
var Kt = {
  openInStackblitz: "在 Stackblitz 中打开",
  openInCodeSandbox: "在 Codesandbox 中打开",
  openInGithub: "在 GitHub 中打开",
  openInGitlab: "在 GitLub 中打开",
  collapseCode: "收起代码",
  expandCode: "展开代码",
  copyCode: "复制代码",
  copySuccess: "已将代码复制至剪切板！",
  copyFail: "复制失败！"
};
var ji = {
  openInStackblitz: "Open In Stackblitz",
  openInCodeSandbox: "Open In Codesandbox",
  openInGithub: "Open in GitHub",
  openInGitlab: "Open in GitLab",
  collapseCode: "Collapse Code",
  expandCode: "Expand Code",
  copyCode: "Copy Code",
  copySuccess: "The code has been copied to the clipboard!",
  copyFail: "Failed to copy the code!"
};
var ft = ref({
  "zh-CN": Kt,
  "en-US": ji
});
var G = ref(Kt);
var Js = (n) => {
  ft.value = {};
  for (const i in n)
    n[i] === "zh-CN" ? ft.value[i] = Kt : n[i] === "en-US" ? ft.value[i] = ji : ft.value[i] = n[i];
  typeof document < "u" && (G.value = ft.value[document.documentElement.getAttribute("lang") || "zh-CN"]);
};
var $t;
function Zs() {
  typeof MutationObserver < "u" && typeof document < "u" && ($t = new MutationObserver((n) => {
    n.forEach((i) => {
      if (i.type === "attributes" && i.attributeName === "lang") {
        const e = document.documentElement.getAttribute("lang");
        e && (G.value = ft.value[e] || Kt);
      }
    });
  })), $t.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"]
  });
}
function Ys() {
  $t && $t.disconnect();
}
var tr = { style: { "flex-shrink": "0" } };
var er = ["innerHTML"];
var ir = ["onClick"];
var nr = ["onClick"];
var sr = { class: "language-html" };
var rr = ["innerHTML"];
var $r = defineComponent({
  __name: "index",
  props: {
    title: { default: "标题" },
    description: { default: "描述内容" },
    reactComponent: {},
    vueCode: {},
    reactCode: {},
    htmlCode: {},
    order: { default: "vue,react,html" },
    visible: { type: Boolean, default: true },
    select: { default: $.VUE },
    github: { default: "" },
    gitlab: { default: "" },
    reactCreateElement: {},
    reactCreateRoot: {},
    stackblitz: {},
    codesandbox: {},
    codeplayer: {},
    scope: {},
    files: {},
    lightTheme: {},
    darkTheme: {},
    theme: {},
    locale: {},
    htmlWriteWay: { default: "write" },
    background: {}
  },
  emits: ["mount"],
  setup(n, { emit: i }) {
    const e = n, t = i;
    onMounted(() => {
      t("mount"), a(), Zs();
    }), onUnmounted(() => {
      Ys();
    });
    function a() {
      if (e.locale)
        try {
          Js(JSON.parse(decodeURIComponent(e.locale)));
        } catch (R) {
          console.error(R);
        }
    }
    const _ = computed(() => JSON.parse(decodeURIComponent(e.stackblitz || "{}"))), f = computed(() => JSON.parse(decodeURIComponent(e.codesandbox || "{}")));
    computed(() => JSON.parse(decodeURIComponent(e.codeplayer || "{}")));
    const o = ref(""), u = computed(() => {
      var W;
      const M = JSON.parse(decodeURIComponent(e.files || "{}"))[c.value];
      return M && !M[o.value] && (o.value = ((W = Object.keys(M)) == null ? void 0 : W[0]) || ""), M;
    }), g = computed(() => e.order.split(",").map((R) => R.trim())), v = inject("coot-code-type", {}), b = inject(
      "set-coot-code-type",
      (R) => {
      }
    ), c = ref($.VUE);
    function k(R) {
      c.value = R, typeof b == "function" && b(R);
    }
    const C = computed(() => c.value === "react" ? "tsx" : c.value), S = Ut(), { isCodeFold: h, setCodeFold: r3 } = Kn(), { clickCopy: d } = zn(), T = computed(() => u.value && u.value[o.value] ? u.value[o.value].code : e[`${c.value}Code`]), x = ref("");
    watchEffect(async () => {
      await E(), l();
    });
    async function E() {
      var R;
      x.value = await codeToHtml2(T.value || "", {
        lang: ((R = u.value[o.value]) == null ? void 0 : R.filename.split(".").pop()) || C.value,
        themes: {
          dark: e.darkTheme || "github-dark",
          light: e.lightTheme || "github-light"
        }
      });
    }
    function l() {
      setTimeout(() => {
        z.value && !h.value && (z.value.style.height = it.value.scrollHeight + "px");
      });
    }
    const m = computed(() => [$.VUE, $.REACT, $.HTML].filter((R) => e[`${R}Code`]).sort((R, M) => g.value.indexOf(R) - g.value.indexOf(M)));
    watch(
      () => v == null ? void 0 : v.value,
      (R) => {
        R && e[`${R}Code`] && (c.value = R);
      },
      { immediate: true }
    );
    const p = () => {
      window.open(e.github, "_blank");
    }, O = () => {
      window.open(e.gitlab, "_blank");
    };
    watch(
      () => c.value,
      (R) => {
        !R || (R === "html" ? A() : R === "react" && P());
      },
      {
        immediate: true
      }
    );
    const s = async () => {
      const R = await d(T.value || "");
      Xs.open(
        R ? G.value.copySuccess : G.value.copyFail,
        R
      );
    }, y = ref();
    let w;
    function A() {
      nextTick(() => {
        if (!y.value || !e.htmlCode)
          return;
        const R = y.value.querySelector("iframe"), M = document.head.querySelectorAll("style"), W = document.head.querySelectorAll('link[as="style"]'), vt = document.head.querySelectorAll('link[as="font"]'), H = Array.from(M).map((Q) => `<style replace="true">${Q.innerText}</style>`).join(`
`), bt = Array.from(W).map((Q) => Q.outerHTML).join(`
`), ut = Array.from(vt).map((Q) => Q.outerHTML).join(`
`);
        let X = R.contentDocument || R.contentWindow.document;
        typeof X.write == "function" && e.htmlWriteWay === "write" ? (X.open(), X.write(
          oi({
            code: e.htmlCode || "",
            styles: H,
            links: bt + `
` + ut
          })
        ), X.close()) : (R.srcdoc = oi({
          code: e.htmlCode || "",
          styles: H,
          links: bt + `
` + ut
        }), R.onload = () => {
          X = R.contentDocument || R.contentWindow.document;
        });
        const xt = w = function() {
          requestAnimationFrame(() => {
            const Q = X.documentElement.offsetHeight + "px";
            R.style.height = Q, y.value && (y.value.style.height = Q), X.documentElement && (X.documentElement.className = document.documentElement.className), xt === w && w();
          });
        };
        w();
      });
    }
    const N = ref();
    let j = null;
    function P() {
      nextTick(() => {
        e.reactComponent && c.value === "react" && e.reactCode && (j || (j = e.reactCreateRoot(N.value)), j.render(e.reactCreateElement(e.reactComponent, {}, null)));
      });
    }
    onUnmounted(() => {
      j && (j.unmount(), j = null);
    }), watch(
      () => [N.value, e.reactComponent],
      (R) => {
        N.value ? P() : j && (j.unmount(), j = null);
      },
      { immediate: true, deep: true }
    ), watch(
      () => e.reactCode,
      (R, M) => {
        R && R !== M && j && j.render(e.reactCreateElement(e.reactComponent, {}, null));
      },
      { immediate: true, deep: true }
    ), watch(
      () => e.select,
      (R) => {
        R && e[`${R}Code`] && (c.value = R);
      },
      {
        immediate: true
      }
    ), watch(
      () => m.value,
      () => {
        e[`${c.value}Code`] || (c.value = m.value[0]);
      },
      { immediate: true, deep: true }
    );
    function F(R) {
      o.value = R, z.value && (z.value.style.height = "auto");
    }
    const z = ref(), it = ref();
    return watch(
      () => h.value,
      (R) => {
        nextTick(async () => {
          z.value && (R ? z.value.style.height = 0 : (await E(), l()));
        });
      }
    ), (R, M) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(S).e("container")])
    }, [
      createBaseVNode("section", {
        class: normalizeClass([unref(S).bem("preview"), "vp-raw"]),
        style: normalizeStyle({ background: e.background })
      }, [
        c.value === "vue" ? renderSlot(R.$slots, "vue", { key: 0 }) : c.value === "html" ? (openBlock(), createElementBlock("div", {
          key: 1,
          ref_key: "htmlContainerRef",
          ref: y
        }, M[3] || (M[3] = [
          createBaseVNode("iframe", { style: { width: "100%", height: "auto", border: "none" } }, null, -1)
        ]), 512)) : c.value === "react" ? (openBlock(), createElementBlock("div", {
          key: 2,
          ref_key: "reactContainerRef",
          ref: N
        }, null, 512)) : createCommentVNode("", true)
      ], 6),
      createBaseVNode("section", {
        class: normalizeClass([unref(S).bem("description")])
      }, [
        R.title ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([unref(S).bem("description", "title")])
        }, [
          createBaseVNode("div", tr, toDisplayString(R.title), 1)
        ], 2)) : createCommentVNode("", true),
        R.description ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(S).bem("description", "content")]),
          innerHTML: R.description
        }, null, 10, er)) : createCommentVNode("", true),
        e.description || !e.title && !e.description ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass([unref(S).bem("description", "split-line")])
        }, null, 2)) : createCommentVNode("", true),
        m.value.length > 1 && R.visible ? (openBlock(), createElementBlock("div", {
          key: 3,
          class: normalizeClass([unref(S).bem("lang-tabs")])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(m.value, (W) => (openBlock(), createElementBlock("div", {
            key: W,
            class: normalizeClass([unref(S).bem("tab"), c.value === W && unref(S).bem("active-tab")]),
            onClick: (vt) => k == null ? void 0 : k(W)
          }, toDisplayString(W), 11, ir))), 128))
        ], 2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass([unref(S).bem("description", "handle-btn")])
        }, [
          _.value.show ? (openBlock(), createBlock(pt, {
            key: 0,
            content: unref(G).openInStackblitz
          }, {
            default: withCtx(() => [
              createVNode(Cs, {
                code: T.value,
                type: c.value,
                scope: R.scope || "",
                templates: _.value.templates || []
              }, null, 8, ["code", "type", "scope", "templates"])
            ]),
            _: 1
          }, 8, ["content"])) : createCommentVNode("", true),
          f.value.show ? (openBlock(), createBlock(pt, {
            key: 1,
            content: unref(G).openInCodeSandbox
          }, {
            default: withCtx(() => [
              createVNode(ts, {
                code: T.value,
                type: c.value,
                scope: R.scope || "",
                templates: f.value.templates || []
              }, null, 8, ["code", "type", "scope", "templates"])
            ]),
            _: 1
          }, 8, ["content"])) : createCommentVNode("", true),
          R.github ? (openBlock(), createBlock(pt, {
            key: 2,
            content: unref(G).openInGithub
          }, {
            default: withCtx(() => [
              createVNode(js, { onClick: p })
            ]),
            _: 1
          }, 8, ["content"])) : createCommentVNode("", true),
          R.gitlab ? (openBlock(), createBlock(pt, {
            key: 3,
            content: unref(G).openInGitlab
          }, {
            default: withCtx(() => [
              createVNode(Ps, { onClick: O })
            ]),
            _: 1
          }, 8, ["content"])) : createCommentVNode("", true),
          unref(h) ? (openBlock(), createBlock(pt, {
            key: 5,
            content: unref(G).expandCode
          }, {
            default: withCtx(() => [
              createVNode(Ki, {
                onClick: M[1] || (M[1] = (W) => unref(r3)(false))
              })
            ]),
            _: 1
          }, 8, ["content"])) : (openBlock(), createBlock(pt, {
            key: 4,
            content: unref(G).collapseCode
          }, {
            default: withCtx(() => [
              createVNode(Hi, {
                onClick: M[0] || (M[0] = (W) => unref(r3)(true))
              })
            ]),
            _: 1
          }, 8, ["content"])),
          createVNode(pt, {
            content: unref(G).copyCode
          }, {
            default: withCtx(() => [
              createVNode(Zi, { onClick: s })
            ]),
            _: 1
          }, 8, ["content"])
        ], 2)
      ], 2),
      createBaseVNode("section", {
        class: normalizeClass([unref(S).bem("source")]),
        ref_key: "sourceRef",
        ref: z
      }, [
        createBaseVNode("div", {
          ref_key: "sourceContentRef",
          ref: it
        }, [
          Object.keys(u.value).length ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([unref(S).bem("file-tabs")])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(u.value), (W) => (openBlock(), createElementBlock("div", {
              key: W,
              class: normalizeClass([
                unref(S).bem("tab"),
                o.value === W && unref(S).bem("active-tab")
              ]),
              onClick: (vt) => F(W)
            }, toDisplayString(W), 11, nr))), 128))
          ], 2)) : createCommentVNode("", true),
          createBaseVNode("pre", sr, [
            createBaseVNode("div", { innerHTML: x.value }, null, 8, rr)
          ])
        ], 512)
      ], 2),
      unref(h) ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(unref(S).bem("fold")),
        onClick: M[2] || (M[2] = (W) => unref(r3)(true))
      }, [
        createVNode(nn),
        createTextVNode(toDisplayString(unref(G).collapseCode), 1)
      ], 2))
    ], 2));
  }
});
var ar = defineComponent({
  __name: "placeholder",
  setup(n) {
    const i = Ut("placeholder");
    return (e, t) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(i).e("container")])
    }, t[0] || (t[0] = [
      createBaseVNode("div", { class: "loader" }, null, -1),
      createBaseVNode("div", { class: "loading-text" }, "loading", -1)
    ]), 2));
  }
});
var Ir = et(ar, [["__scopeId", "data-v-5eb3f8d4"]]);
var pi = [
  /<demo(\s|\n)((.|\n)*)><\/demo>/,
  /<demo(\s|\n)((.|\n)*)\/>/
];
var or = /<\s*script[^>]*\blang=['"]ts['"][^>]*/;
var _r = /<\s*script[^>]*\bsetup\b[^>]*/;
var ur = /<\s*script\s+(setup|lang='ts'|lang="ts")?\s*(setup|lang='ts'|lang="ts")?\s*>/;
var J = (n, i, e, t) => {
  const a = n.sfcBlocks.scripts, _ = a.findIndex((u) => !!(_r.test(u.tagOpen) || or.test(u.tagOpen))), f = e || "";
  let o = "";
  if (t === "dynamicImport" ? o = e ? `
      const ${f} = shallowRef();
      onMounted(async () => {
        ${f}.value = (await import('${i}')).default;
      });
      `.trim() : `
      onMounted(async () => {
        await import('${i}');
      });
      `.trim() : t === "inject" ? o = `
      ${e}
    `.trim() : o = e ? `import ${f} from '${i}'` : `import '${i}'`, _ === -1) {
    const u = {
      type: "script",
      tagClose: "<\/script>",
      tagOpen: "<script setup lang='ts'>",
      content: `<script setup lang='ts'>
        ${o}
        <\/script>`,
      contentStripped: o
    };
    a.push(u);
  } else {
    const u = a[0];
    if (u.content.includes(i) && (!e || u.content.includes(f)))
      a[0].content = u.content;
    else {
      const g = `<script lang="ts" setup>
`;
      a[0].content = a[0].content.replace(
        ur,
        g
      ), a[0].content = a[0].content.replace(
        g,
        `<script setup>

      ${o}
`
      );
    }
  }
};
var lr = (n) => {
  let i = true;
  const e = [];
  for (; i; ) {
    const t = n.lastIndexOf("/");
    if (t === -1)
      i = false;
    else {
      const a = n.substring(t + 1);
      e.unshift(a), n = n.substring(0, t);
    }
  }
  return "Temp" + btoa(
    encodeURIComponent(
      e.join("-").split(".").slice(0, -1).join(".")
    )
  ).replace(/=/g, "Equal");
};
var pr = /title="(.*?)"/;
var hr = /vue="(.*?)"/;
var cr = /html="(.*?)"/;
var fr = /react="(.*?)"/;
var dr = /description="(.*?)"/;
var mr = /order="(.*?)"/;
var gr = /select="(.*?)"/;
var vr = /github="(.*?)"/;
var br = /gitlab="(.*?)"/;
var yr = /stackblitz="(.*?)"/;
var wr = /codesandbox="(.*?)"/;
var xr = /codeplayer="(.*?)"/;
var Er = /scope="(.*?)"/;
var Or = /vueFiles=("\{((.|\n)*?)\}"|"\[((.|\n)*?)\]")/;
var Tr = /reactFiles=("\{((.|\n)*?)\}"|"\[((.|\n)*?)\]")/;
var kr = /htmlFiles=("\{((.|\n)*?)\}"|"\[((.|\n)*?)\]")/;
var Rr = /ssg="(.*?)"/;
var Sr = /htmlWriteWay="(.*?)"/;
var Cr = /background="(.*?)"/;
var hi = (n, i, e, t) => {
  var Ee, Oe, Te, ke, Re;
  const {
    demoDir: a,
    tab: _ = {},
    stackblitz: f = { show: false },
    codesandbox: o = { show: false },
    codeplayer: u = { show: false }
  } = t || {};
  let {
    order: g = "vue,react,html",
    visible: v = true,
    select: b = (_.order || "vue,react,html").split(",")[0] || "vue"
  } = _;
  const c = {
    vue: "",
    title: "",
    description: "",
    html: "",
    react: ""
  }, k = i.content.match(pr), C = i.content.match(hr), S = i.content.match(cr), h = i.content.match(fr), r3 = i.content.match(dr), d = i.content.match(mr), T = i.content.match(gr), x = i.content.match(vr), E = i.content.match(br), l = i.content.match(yr), m = i.content.match(wr), p = i.content.match(xr), O = ((Ee = i.content.match(Er)) == null ? void 0 : Ee[1]) || "", s = i.content.match(Or), y = i.content.match(Tr), w = i.content.match(kr), A = !!((Oe = i.content.match(Rr)) != null && Oe[1]), N = ((Te = i.content.match(Sr)) == null ? void 0 : Te[1]) || "write", j = (ke = i.content.match(Cr)) == null ? void 0 : ke[1], P = (Re = e.realPath) != null ? Re : e.path, F = a || import_path.default.dirname(P);
  d != null && d[1] && (g = d[1]), T != null && T[1] && (b = T[1]);
  let z = "", it = "";
  x != null && x[1] && (z = x[1]), E != null && E[1] && (it = E[1]), l != null && l[1] && (f.show = l[1] === "true"), m != null && m[1] && (o.show = m[1] === "true"), p != null && p[1] && (u.show = p[1] === "true"), C != null && C[1] && (c.vue = import_path.default.join(F, C[1]).replace(/\\/g, "/")), S != null && S[1] && (c.html = import_path.default.join(F, S[1]).replace(/\\/g, "/")), h != null && h[1] && (c.react = import_path.default.join(F, h[1]).replace(/\\/g, "/")), c.title = k ? k[1] : "", c.description = r3 ? r3[1] : "";
  const R = c.vue ? import_path.default.resolve(
    a || import_path.default.dirname(P),
    (C == null ? void 0 : C[1]) || "."
  ).replace(/\\/g, "/") : "", M = c.html ? import_path.default.resolve(
    a || import_path.default.dirname(P),
    (S == null ? void 0 : S[1]) || "."
  ).replace(/\\/g, "/") : "", W = c.react ? import_path.default.resolve(
    a || import_path.default.dirname(P),
    (h == null ? void 0 : h[1]) || "."
  ).replace(/\\/g, "/") : "", vt = import_path.default.resolve(
    F,
    c.vue || c.react || c.html || "."
  ).replace(/\\/g, "/"), H = lr(vt), bt = `react${H}`;
  J(
    e,
    "vitepress-demo-plugin",
    "{ VitepressDemoBox, VitepressDemoPlaceholder }"
  ), J(e, "vitepress-demo-plugin/dist/style.css"), J(e, "vue", "{ ref, shallowRef, onMounted }"), c.vue && J(
    e,
    R,
    H,
    A ? void 0 : "dynamicImport"
  ), c.react && (J(
    e,
    "react",
    "{ createElement as reactCreateElement }"
  ), J(
    e,
    "react-dom/client",
    "{ createRoot as reactCreateRoot }"
  ), J(
    e,
    W,
    bt,
    "dynamicImport"
  ));
  const ut = "__placeholder_visible_key__";
  J(
    e,
    ut,
    `const ${ut} = ref(true);`,
    "inject"
  );
  const X = c.html ? `TempCodeHtml${H}` : "''", xt = c.react ? `TempCodeReact${H}` : "''", Q = c.vue ? `TempCodeVue${H}` : "''";
  c.html && J(
    e,
    `${M}?raw`,
    X
  ), c.react && J(
    e,
    `${W}?raw`,
    xt
  ), c.vue && J(
    e,
    `${R}?raw`,
    Q
  );
  const at = {
    vue: {},
    react: {},
    html: {}
  };
  function qt(Z) {
    return Z.replace(/'/g, '"').replace(/\\n/g, "").trim().replace(/^"/, "").replace(/"$/, "").replace(/,(\s|\n)*\}$/, "}").replace(/,(\s|\n)*\]$/, "]");
  }
  const we = {
    vue: qt((s == null ? void 0 : s[1]) || ""),
    react: qt((y == null ? void 0 : y[1]) || ""),
    html: qt((w == null ? void 0 : w[1]) || "")
  };
  for (const Z in we) {
    let Se = we[Z];
    if (Se)
      try {
        const ht = JSON.parse(Se);
        if (Array.isArray(ht))
          ht.forEach((Y) => {
            const Et = import_path.default.basename(Y);
            at[Z][Et] = {
              filename: Y,
              code: ""
            };
          });
        else if (typeof ht == "object")
          for (const Y in ht)
            at[Z][Y] = {
              filename: ht[Y],
              code: ""
            };
        for (const Y in at[Z]) {
          const Et = at[Z][Y].filename;
          if (Et) {
            const Ce = import_path.default.resolve(a || import_path.default.dirname(P), Et || ".").replace(/\\/g, "/");
            if (fs_stub_default.existsSync(Ce)) {
              const Di = fs_stub_default.readFileSync(Ce, "utf-8");
              at[Z][Y].code = Di;
            } else
              delete at[Z][Y];
          } else
            delete at[Z][Y];
        }
      } catch {
      }
  }
  let xe = "";
  return (t == null ? void 0 : t.locale) && typeof t.locale == "object" && (xe = encodeURIComponent(JSON.stringify(t.locale))), `
  ${A ? "" : `<vitepress-demo-placeholder v-show="${ut}" />`}
  ${A ? "" : "<ClientOnly>"}
    <vitepress-demo-box 
      title="${c.title}"
      description="${c.description}"
      locale="${xe}"
      select="${b}"
      order="${g}"
      github="${z}"
      gitlab="${it}"
      theme="${(t == null ? void 0 : t.theme) || ""}"
      lightTheme="${(t == null ? void 0 : t.lightTheme) || ""}"
      darkTheme="${(t == null ? void 0 : t.darkTheme) || ""}"
      stackblitz="${encodeURIComponent(JSON.stringify(f))}"
      codesandbox="${encodeURIComponent(JSON.stringify(o))}"
      codeplayer="${encodeURIComponent(JSON.stringify(u))}"
      files="${encodeURIComponent(JSON.stringify(at))}"
      scope="${O || ""}"
      htmlWriteWay="${N}"
      background="${j}"
      :visible="!!${v}"
      @mount="() => { ${ut} = false; }"
      ${c.html ? `
            :htmlCode="${X}"
            ` : ""}
      ${c.vue ? `
            :vueCode="${Q}"
            ` : ""}
      ${c.react ? `
            :reactCode="${xt}"
            :reactComponent="${bt}"
            :reactCreateRoot="reactCreateRoot"
            :reactCreateElement="reactCreateElement"
            ` : ""}
      >
      ${c.vue ? `
            <template v-if="${H}" #vue>
              <${H}></${H}>
            </template>
            ` : ""}
    </vitepress-demo-box>
  ${A ? "" : "</ClientOnly>"}`.trim();
};
var Pr = (n, i) => {
  const e = n.renderer.rules.html_inline, t = n.renderer.rules.html_block;
  n.renderer.rules.html_inline = (a, _, f, o, u) => {
    const g = a[_];
    return g.content = g.content.replace(/<!--[\s\S]*?-->/g, ""), pi.some((v) => v.test(g.content)) ? hi(n, g, o, i) : e(a, _, f, o, u);
  }, n.renderer.rules.html_block = (a, _, f, o, u) => {
    const g = a[_];
    return g.content = g.content.replace(/<!--[\s\S]*?-->/g, ""), pi.some((v) => v.test(g.content)) ? hi(n, g, o, i) : t(a, _, f, o, u);
  };
};
export {
  $r as VitepressDemoBox,
  Ir as VitepressDemoPlaceholder,
  Pr as vitepressDemoPlugin
};
/*! Bundled license information:

vitepress-demo-plugin/dist/index.js:
  (*!
   * is-whitespace <https://github.com/jonschlinkert/is-whitespace>
   *
   * Copyright (c) 2014-2015, Jon Schlinkert.
   * Licensed under the MIT License.
   *)
  (*!
   * is-extendable <https://github.com/jonschlinkert/is-extendable>
   *
   * Copyright (c) 2015, Jon Schlinkert.
   * Licensed under the MIT License.
   *)
  (*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
  (*!
   * condense-newlines <https://github.com/jonschlinkert/condense-newlines>
   *
   * Copyright (c) 2014 Jon Schlinkert, contributors.
   * Licensed under the MIT License
   *)
  (*!
   * pretty <https://github.com/jonschlinkert/pretty>
   *
   * Copyright (c) 2013-2015, 2017, Jon Schlinkert.
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=vitepress-demo-plugin.js.map
