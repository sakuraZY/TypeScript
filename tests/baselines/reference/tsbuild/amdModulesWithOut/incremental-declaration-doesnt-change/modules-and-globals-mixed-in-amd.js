//// [/src/app/module.js]
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = 10;
    console.log(exports.x);
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = 20;
});
var globalConst = 10;
define("file3", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.z = 30;
});
var myVar = 30;
//# sourceMappingURL=module.js.map

//// [/src/app/module.js.map]
{"version":3,"file":"module.js","sourceRoot":"","sources":["../lib/file0.ts","../lib/file1.ts","../lib/file2.ts","../lib/global.ts","file3.ts","file4.ts"],"names":[],"mappings":"AAAA,IAAM,MAAM,GAAG,EAAE,CAAC;;;;ICAL,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;;ICAtB,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC;;;;ICAV,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,KAAK,GAAG,EAAE,CAAC"}

//// [/src/app/module.js.map.baseline.txt]
===================================================================
JsFile: module.js
mapUrl: module.js.map
sourceRoot: 
sources: ../lib/file0.ts,../lib/file1.ts,../lib/file2.ts,../lib/global.ts,file3.ts,file4.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file0.ts
-------------------------------------------------------------------
>>>var myGlob = 20;
1 >
2 >^^^^
3 >    ^^^^^^
4 >          ^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >const 
3 >    myGlob
4 >           = 
5 >             20
6 >               ;
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(1, 7) + SourceIndex(0)
3 >Emitted(1, 11) Source(1, 13) + SourceIndex(0)
4 >Emitted(1, 14) Source(1, 16) + SourceIndex(0)
5 >Emitted(1, 16) Source(1, 18) + SourceIndex(0)
6 >Emitted(1, 17) Source(1, 19) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file1.ts
-------------------------------------------------------------------
>>>define("file1", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.x = 10;
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
7 >                   ^^^^^^^^^->
1->export const 
2 >    
3 >            x
4 >              = 
5 >                10
6 >                  ;
1->Emitted(5, 5) Source(1, 14) + SourceIndex(1)
2 >Emitted(5, 13) Source(1, 14) + SourceIndex(1)
3 >Emitted(5, 14) Source(1, 15) + SourceIndex(1)
4 >Emitted(5, 17) Source(1, 18) + SourceIndex(1)
5 >Emitted(5, 19) Source(1, 20) + SourceIndex(1)
6 >Emitted(5, 20) Source(1, 21) + SourceIndex(1)
---
>>>    console.log(exports.x);
1->^^^^
2 >    ^^^^^^^
3 >           ^
4 >            ^^^
5 >               ^
6 >                ^^^^^^^^^
7 >                         ^
8 >                          ^
1->
2 >    console
3 >           .
4 >            log
5 >               (
6 >                x
7 >                         )
8 >                          ;
1->Emitted(6, 5) Source(1, 21) + SourceIndex(1)
2 >Emitted(6, 12) Source(1, 28) + SourceIndex(1)
3 >Emitted(6, 13) Source(1, 29) + SourceIndex(1)
4 >Emitted(6, 16) Source(1, 32) + SourceIndex(1)
5 >Emitted(6, 17) Source(1, 33) + SourceIndex(1)
6 >Emitted(6, 26) Source(1, 34) + SourceIndex(1)
7 >Emitted(6, 27) Source(1, 35) + SourceIndex(1)
8 >Emitted(6, 28) Source(1, 36) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/file2.ts
-------------------------------------------------------------------
>>>});
>>>define("file2", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.y = 20;
1 >^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1 >export const 
2 >    
3 >            y
4 >              = 
5 >                20
6 >                  ;
1 >Emitted(11, 5) Source(1, 14) + SourceIndex(2)
2 >Emitted(11, 13) Source(1, 14) + SourceIndex(2)
3 >Emitted(11, 14) Source(1, 15) + SourceIndex(2)
4 >Emitted(11, 17) Source(1, 18) + SourceIndex(2)
5 >Emitted(11, 19) Source(1, 20) + SourceIndex(2)
6 >Emitted(11, 20) Source(1, 21) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:../lib/global.ts
-------------------------------------------------------------------
>>>});
>>>var globalConst = 10;
1 >
2 >^^^^
3 >    ^^^^^^^^^^^
4 >               ^^^
5 >                  ^^
6 >                    ^
7 >                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >const 
3 >    globalConst
4 >                = 
5 >                  10
6 >                    ;
1 >Emitted(13, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(13, 5) Source(1, 7) + SourceIndex(3)
3 >Emitted(13, 16) Source(1, 18) + SourceIndex(3)
4 >Emitted(13, 19) Source(1, 21) + SourceIndex(3)
5 >Emitted(13, 21) Source(1, 23) + SourceIndex(3)
6 >Emitted(13, 22) Source(1, 24) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:file3.ts
-------------------------------------------------------------------
>>>define("file3", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.z = 30;
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1->export const 
2 >    
3 >            z
4 >              = 
5 >                30
6 >                  ;
1->Emitted(17, 5) Source(1, 14) + SourceIndex(4)
2 >Emitted(17, 13) Source(1, 14) + SourceIndex(4)
3 >Emitted(17, 14) Source(1, 15) + SourceIndex(4)
4 >Emitted(17, 17) Source(1, 18) + SourceIndex(4)
5 >Emitted(17, 19) Source(1, 20) + SourceIndex(4)
6 >Emitted(17, 20) Source(1, 21) + SourceIndex(4)
---
-------------------------------------------------------------------
emittedFile:/src/app/module.js
sourceFile:file4.ts
-------------------------------------------------------------------
>>>});
>>>var myVar = 30;
1 >
2 >^^^^
3 >    ^^^^^
4 >         ^^^
5 >            ^^
6 >              ^
7 >               ^^^^^^^^^^^^^^^^^^->
1 >
2 >const 
3 >    myVar
4 >          = 
5 >            30
6 >              ;
1 >Emitted(19, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(19, 5) Source(1, 7) + SourceIndex(5)
3 >Emitted(19, 10) Source(1, 12) + SourceIndex(5)
4 >Emitted(19, 13) Source(1, 15) + SourceIndex(5)
5 >Emitted(19, 15) Source(1, 17) + SourceIndex(5)
6 >Emitted(19, 16) Source(1, 18) + SourceIndex(5)
---
>>>//# sourceMappingURL=module.js.map

//// [/src/app/module.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "/src/app/",
    "sourceFiles": [
      "/src/app/file3.ts",
      "/src/app/file4.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 438,
          "kind": "prepend",
          "data": "/src/lib/module.js",
          "texts": [
            {
              "pos": 0,
              "end": 438,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 438,
          "end": 639,
          "kind": "text"
        }
      ]
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 171,
          "kind": "prepend",
          "data": "/src/lib/module.d.ts",
          "texts": [
            {
              "pos": 0,
              "end": 171,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 171,
          "end": 253,
          "kind": "text"
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}

//// [/src/app/module.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/app/module.js
----------------------------------------------------------------------
prepend: (0-438):: /src/lib/module.js texts:: 1
>>--------------------------------------------------------------------
text: (0-438)
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = 10;
    console.log(exports.x);
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = 20;
});
var globalConst = 10;

----------------------------------------------------------------------
text: (438-639)
define("file3", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.z = 30;
});
var myVar = 30;

======================================================================
======================================================================
File:: /src/app/module.d.ts
----------------------------------------------------------------------
prepend: (0-171):: /src/lib/module.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (0-171)
declare const myGlob = 20;
declare module "file1" {
    export const x = 10;
}
declare module "file2" {
    export const y = 20;
}
declare const globalConst = 10;

----------------------------------------------------------------------
text: (171-253)
declare module "file3" {
    export const z = 30;
}
declare const myVar = 30;

======================================================================

//// [/src/lib/file1.ts]
export const x = 10;console.log(x);

//// [/src/lib/module.js]
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = 10;
    console.log(exports.x);
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = 20;
});
var globalConst = 10;
//# sourceMappingURL=module.js.map

//// [/src/lib/module.js.map]
{"version":3,"file":"module.js","sourceRoot":"","sources":["file0.ts","file1.ts","file2.ts","global.ts"],"names":[],"mappings":"AAAA,IAAM,MAAM,GAAG,EAAE,CAAC;;;;ICAL,QAAA,CAAC,GAAG,EAAE,CAAC;IAAA,OAAO,CAAC,GAAG,CAAC,SAAC,CAAC,CAAC;;;;;ICAtB,QAAA,CAAC,GAAG,EAAE,CAAC;;ACApB,IAAM,WAAW,GAAG,EAAE,CAAC"}

//// [/src/lib/module.js.map.baseline.txt]
===================================================================
JsFile: module.js
mapUrl: module.js.map
sourceRoot: 
sources: file0.ts,file1.ts,file2.ts,global.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file0.ts
-------------------------------------------------------------------
>>>var myGlob = 20;
1 >
2 >^^^^
3 >    ^^^^^^
4 >          ^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
2 >const 
3 >    myGlob
4 >           = 
5 >             20
6 >               ;
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(1, 7) + SourceIndex(0)
3 >Emitted(1, 11) Source(1, 13) + SourceIndex(0)
4 >Emitted(1, 14) Source(1, 16) + SourceIndex(0)
5 >Emitted(1, 16) Source(1, 18) + SourceIndex(0)
6 >Emitted(1, 17) Source(1, 19) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file1.ts
-------------------------------------------------------------------
>>>define("file1", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.x = 10;
1->^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
7 >                   ^^^^^^^^^->
1->export const 
2 >    
3 >            x
4 >              = 
5 >                10
6 >                  ;
1->Emitted(5, 5) Source(1, 14) + SourceIndex(1)
2 >Emitted(5, 13) Source(1, 14) + SourceIndex(1)
3 >Emitted(5, 14) Source(1, 15) + SourceIndex(1)
4 >Emitted(5, 17) Source(1, 18) + SourceIndex(1)
5 >Emitted(5, 19) Source(1, 20) + SourceIndex(1)
6 >Emitted(5, 20) Source(1, 21) + SourceIndex(1)
---
>>>    console.log(exports.x);
1->^^^^
2 >    ^^^^^^^
3 >           ^
4 >            ^^^
5 >               ^
6 >                ^^^^^^^^^
7 >                         ^
8 >                          ^
1->
2 >    console
3 >           .
4 >            log
5 >               (
6 >                x
7 >                         )
8 >                          ;
1->Emitted(6, 5) Source(1, 21) + SourceIndex(1)
2 >Emitted(6, 12) Source(1, 28) + SourceIndex(1)
3 >Emitted(6, 13) Source(1, 29) + SourceIndex(1)
4 >Emitted(6, 16) Source(1, 32) + SourceIndex(1)
5 >Emitted(6, 17) Source(1, 33) + SourceIndex(1)
6 >Emitted(6, 26) Source(1, 34) + SourceIndex(1)
7 >Emitted(6, 27) Source(1, 35) + SourceIndex(1)
8 >Emitted(6, 28) Source(1, 36) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:file2.ts
-------------------------------------------------------------------
>>>});
>>>define("file2", ["require", "exports"], function (require, exports) {
>>>    "use strict";
>>>    Object.defineProperty(exports, "__esModule", { value: true });
>>>    exports.y = 20;
1 >^^^^
2 >    ^^^^^^^^
3 >            ^
4 >             ^^^
5 >                ^^
6 >                  ^
1 >export const 
2 >    
3 >            y
4 >              = 
5 >                20
6 >                  ;
1 >Emitted(11, 5) Source(1, 14) + SourceIndex(2)
2 >Emitted(11, 13) Source(1, 14) + SourceIndex(2)
3 >Emitted(11, 14) Source(1, 15) + SourceIndex(2)
4 >Emitted(11, 17) Source(1, 18) + SourceIndex(2)
5 >Emitted(11, 19) Source(1, 20) + SourceIndex(2)
6 >Emitted(11, 20) Source(1, 21) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/lib/module.js
sourceFile:global.ts
-------------------------------------------------------------------
>>>});
>>>var globalConst = 10;
1 >
2 >^^^^
3 >    ^^^^^^^^^^^
4 >               ^^^
5 >                  ^^
6 >                    ^
7 >                     ^^^^^^^^^^^^->
1 >
2 >const 
3 >    globalConst
4 >                = 
5 >                  10
6 >                    ;
1 >Emitted(13, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(13, 5) Source(1, 7) + SourceIndex(3)
3 >Emitted(13, 16) Source(1, 18) + SourceIndex(3)
4 >Emitted(13, 19) Source(1, 21) + SourceIndex(3)
5 >Emitted(13, 21) Source(1, 23) + SourceIndex(3)
6 >Emitted(13, 22) Source(1, 24) + SourceIndex(3)
---
>>>//# sourceMappingURL=module.js.map

//// [/src/lib/module.tsbuildinfo]
{
  "bundle": {
    "commonSourceDirectory": "/src/lib/",
    "sourceFiles": [
      "/src/lib/file0.ts",
      "/src/lib/file1.ts",
      "/src/lib/file2.ts",
      "/src/lib/global.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 438,
          "kind": "text"
        }
      ]
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 171,
          "kind": "text"
        }
      ]
    }
  },
  "version": "FakeTSVersion"
}

//// [/src/lib/module.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/lib/module.js
----------------------------------------------------------------------
text: (0-438)
var myGlob = 20;
define("file1", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.x = 10;
    console.log(exports.x);
});
define("file2", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.y = 20;
});
var globalConst = 10;

======================================================================
======================================================================
File:: /src/lib/module.d.ts
----------------------------------------------------------------------
text: (0-171)
declare const myGlob = 20;
declare module "file1" {
    export const x = 10;
}
declare module "file2" {
    export const y = 20;
}
declare const globalConst = 10;

======================================================================

