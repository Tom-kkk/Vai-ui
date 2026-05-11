import {
  EncodedTokenMetadata,
  FontStyle,
  INITIAL,
  Registry,
  Theme,
  atomic,
  possessive,
  recursion,
  toHtml
} from "./chunk-UFSOVTIJ.js";
import {
  __export,
  __privateAdd,
  __privateGet,
  __privateMethod,
  __privateSet,
  __publicField,
  __superGet
} from "./chunk-B4Q33VKO.js";

// ../packages/components/node_modules/shiki/dist/chunk-CtajNgzt.mjs
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __exportAll = (all, no_symbols) => {
  let target = {};
  for (var name in all) {
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
  }
  if (!no_symbols) {
    __defProp(target, Symbol.toStringTag, { value: "Module" });
  }
  return target;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (var keys = __getOwnPropNames(from), i2 = 0, n = keys.length, key; i2 < n; i2++) {
      key = keys[i2];
      if (!__hasOwnProp.call(to, key) && key !== except) {
        __defProp(to, key, {
          get: ((k3) => from[k3]).bind(null, key),
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      }
    }
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));

// ../packages/components/node_modules/shiki/dist/langs-bundle-full-DfKZStlK.mjs
var bundledLanguagesInfo = [
  {
    "id": "abap",
    "name": "ABAP",
    "import": () => import("./abap-MUONX62F.js")
  },
  {
    "id": "actionscript-3",
    "name": "ActionScript",
    "import": () => import("./actionscript-3-JET6GR77.js")
  },
  {
    "id": "ada",
    "name": "Ada",
    "import": () => import("./ada-YWMM3KQQ.js")
  },
  {
    "id": "angular-html",
    "name": "Angular HTML",
    "import": () => import("./angular-html-HIA5FMSX.js")
  },
  {
    "id": "angular-ts",
    "name": "Angular TypeScript",
    "import": () => import("./angular-ts-UQIYFNZQ.js")
  },
  {
    "id": "apache",
    "name": "Apache Conf",
    "import": () => import("./apache-LZNDG5TC.js")
  },
  {
    "id": "apex",
    "name": "Apex",
    "import": () => import("./apex-PVK3YUVQ.js")
  },
  {
    "id": "apl",
    "name": "APL",
    "import": () => import("./apl-6FJONHYV.js")
  },
  {
    "id": "applescript",
    "name": "AppleScript",
    "import": () => import("./applescript-HONFNMTB.js")
  },
  {
    "id": "ara",
    "name": "Ara",
    "import": () => import("./ara-BX6A4PDU.js")
  },
  {
    "id": "asciidoc",
    "name": "AsciiDoc",
    "aliases": ["adoc"],
    "import": () => import("./asciidoc-T7EF7QYD.js")
  },
  {
    "id": "asm",
    "name": "Assembly",
    "import": () => import("./asm-PAGFRVOH.js")
  },
  {
    "id": "astro",
    "name": "Astro",
    "import": () => import("./astro-Q66YVNCK.js")
  },
  {
    "id": "awk",
    "name": "AWK",
    "import": () => import("./awk-GDNAU5ZI.js")
  },
  {
    "id": "ballerina",
    "name": "Ballerina",
    "import": () => import("./ballerina-CF2NMG7Q.js")
  },
  {
    "id": "bat",
    "name": "Batch File",
    "aliases": ["batch"],
    "import": () => import("./bat-7FMHDOGM.js")
  },
  {
    "id": "beancount",
    "name": "Beancount",
    "import": () => import("./beancount-BBJ5AJBI.js")
  },
  {
    "id": "berry",
    "name": "Berry",
    "aliases": ["be"],
    "import": () => import("./berry-3Z5M3X2S.js")
  },
  {
    "id": "bibtex",
    "name": "BibTeX",
    "import": () => import("./bibtex-SZ5AFT5S.js")
  },
  {
    "id": "bicep",
    "name": "Bicep",
    "import": () => import("./bicep-MXUNRS36.js")
  },
  {
    "id": "bird2",
    "name": "BIRD2 Configuration",
    "aliases": ["bird"],
    "import": () => import("./bird2-S6VIL2XJ.js")
  },
  {
    "id": "blade",
    "name": "Blade",
    "import": () => import("./blade-V5CUEAQL.js")
  },
  {
    "id": "bsl",
    "name": "1C (Enterprise)",
    "aliases": ["1c"],
    "import": () => import("./bsl-P6DTOGUC.js")
  },
  {
    "id": "c",
    "name": "C",
    "import": () => import("./c-PEXU3RZB.js")
  },
  {
    "id": "c3",
    "name": "C3",
    "import": () => import("./c3-LJGBUQIX.js")
  },
  {
    "id": "cadence",
    "name": "Cadence",
    "aliases": ["cdc"],
    "import": () => import("./cadence-KGC6MA4W.js")
  },
  {
    "id": "cairo",
    "name": "Cairo",
    "import": () => import("./cairo-2JRBMP4F.js")
  },
  {
    "id": "clarity",
    "name": "Clarity",
    "import": () => import("./clarity-URB5GSL5.js")
  },
  {
    "id": "clojure",
    "name": "Clojure",
    "aliases": ["clj"],
    "import": () => import("./clojure-KK34ODDR.js")
  },
  {
    "id": "cmake",
    "name": "CMake",
    "import": () => import("./cmake-B6VZGAA7.js")
  },
  {
    "id": "cobol",
    "name": "COBOL",
    "import": () => import("./cobol-JZ3JY7WZ.js")
  },
  {
    "id": "codeowners",
    "name": "CODEOWNERS",
    "import": () => import("./codeowners-V7PVOUD2.js")
  },
  {
    "id": "codeql",
    "name": "CodeQL",
    "aliases": ["ql"],
    "import": () => import("./codeql-T64TUJQ6.js")
  },
  {
    "id": "coffee",
    "name": "CoffeeScript",
    "aliases": ["coffeescript"],
    "import": () => import("./coffee-PUGD4FU5.js")
  },
  {
    "id": "common-lisp",
    "name": "Common Lisp",
    "aliases": ["lisp"],
    "import": () => import("./common-lisp-25T7FYAH.js")
  },
  {
    "id": "coq",
    "name": "Coq",
    "import": () => import("./coq-2G3BE3Y5.js")
  },
  {
    "id": "cpp",
    "name": "C++",
    "aliases": ["c++"],
    "import": () => import("./cpp-AT4JPOHN.js")
  },
  {
    "id": "crystal",
    "name": "Crystal",
    "import": () => import("./crystal-XKTEXKUB.js")
  },
  {
    "id": "csharp",
    "name": "C#",
    "aliases": ["c#", "cs"],
    "import": () => import("./csharp-PMJBR6PM.js")
  },
  {
    "id": "css",
    "name": "CSS",
    "import": () => import("./css-6OMBU3K6.js")
  },
  {
    "id": "csv",
    "name": "CSV",
    "import": () => import("./csv-QASTJT3Q.js")
  },
  {
    "id": "cue",
    "name": "CUE",
    "import": () => import("./cue-BPO5WQKK.js")
  },
  {
    "id": "cypher",
    "name": "Cypher",
    "aliases": ["cql"],
    "import": () => import("./cypher-6ZWDCGG7.js")
  },
  {
    "id": "d",
    "name": "D",
    "import": () => import("./d-QBI532P6.js")
  },
  {
    "id": "dart",
    "name": "Dart",
    "import": () => import("./dart-UBBNNU6M.js")
  },
  {
    "id": "dax",
    "name": "DAX",
    "import": () => import("./dax-J3HK24CT.js")
  },
  {
    "id": "desktop",
    "name": "Desktop",
    "import": () => import("./desktop-HMLOBJCX.js")
  },
  {
    "id": "diff",
    "name": "Diff",
    "import": () => import("./diff-WHOLG6XR.js")
  },
  {
    "id": "docker",
    "name": "Dockerfile",
    "aliases": ["dockerfile"],
    "import": () => import("./docker-WU75J7XS.js")
  },
  {
    "id": "dotenv",
    "name": "dotEnv",
    "import": () => import("./dotenv-MWXOWJ3U.js")
  },
  {
    "id": "dream-maker",
    "name": "Dream Maker",
    "import": () => import("./dream-maker-PX5CHHTU.js")
  },
  {
    "id": "edge",
    "name": "Edge",
    "import": () => import("./edge-XZY7EKC2.js")
  },
  {
    "id": "elixir",
    "name": "Elixir",
    "import": () => import("./elixir-KU3PNX4P.js")
  },
  {
    "id": "elm",
    "name": "Elm",
    "import": () => import("./elm-GE4WRHH3.js")
  },
  {
    "id": "emacs-lisp",
    "name": "Emacs Lisp",
    "aliases": ["elisp"],
    "import": () => import("./emacs-lisp-ZOQE7SDS.js")
  },
  {
    "id": "erb",
    "name": "ERB",
    "import": () => import("./erb-JVYB2HAJ.js")
  },
  {
    "id": "erlang",
    "name": "Erlang",
    "aliases": ["erl"],
    "import": () => import("./erlang-JZJZJYV7.js")
  },
  {
    "id": "fennel",
    "name": "Fennel",
    "import": () => import("./fennel-PHO5A37K.js")
  },
  {
    "id": "fish",
    "name": "Fish",
    "import": () => import("./fish-6BKQPBIS.js")
  },
  {
    "id": "fluent",
    "name": "Fluent",
    "aliases": ["ftl"],
    "import": () => import("./fluent-CILH6GZL.js")
  },
  {
    "id": "fortran-fixed-form",
    "name": "Fortran (Fixed Form)",
    "aliases": [
      "f",
      "for",
      "f77"
    ],
    "import": () => import("./fortran-fixed-form-FBRFTDT7.js")
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
    "import": () => import("./fortran-free-form-NYSXK7C4.js")
  },
  {
    "id": "fsharp",
    "name": "F#",
    "aliases": ["f#", "fs"],
    "import": () => import("./fsharp-NNXYTGF6.js")
  },
  {
    "id": "gdresource",
    "name": "GDResource",
    "aliases": ["tscn", "tres"],
    "import": () => import("./gdresource-RUKRJKHJ.js")
  },
  {
    "id": "gdscript",
    "name": "GDScript",
    "aliases": ["gd"],
    "import": () => import("./gdscript-46FIBWEQ.js")
  },
  {
    "id": "gdshader",
    "name": "GDShader",
    "import": () => import("./gdshader-DHJPNKNR.js")
  },
  {
    "id": "genie",
    "name": "Genie",
    "import": () => import("./genie-5O7PFGF5.js")
  },
  {
    "id": "gherkin",
    "name": "Gherkin",
    "import": () => import("./gherkin-QFR6H7WJ.js")
  },
  {
    "id": "git-commit",
    "name": "Git Commit Message",
    "import": () => import("./git-commit-7ZGSAODH.js")
  },
  {
    "id": "git-rebase",
    "name": "Git Rebase Message",
    "import": () => import("./git-rebase-RS27T6DN.js")
  },
  {
    "id": "gleam",
    "name": "Gleam",
    "import": () => import("./gleam-MYEHKX6S.js")
  },
  {
    "id": "glimmer-js",
    "name": "Glimmer JS",
    "aliases": ["gjs"],
    "import": () => import("./glimmer-js-HNW3PK43.js")
  },
  {
    "id": "glimmer-ts",
    "name": "Glimmer TS",
    "aliases": ["gts"],
    "import": () => import("./glimmer-ts-V66UNUNA.js")
  },
  {
    "id": "glsl",
    "name": "GLSL",
    "import": () => import("./glsl-IEZOPB5N.js")
  },
  {
    "id": "gn",
    "name": "GN",
    "import": () => import("./gn-RZUF5NQM.js")
  },
  {
    "id": "gnuplot",
    "name": "Gnuplot",
    "import": () => import("./gnuplot-MNVW5A4H.js")
  },
  {
    "id": "go",
    "name": "Go",
    "import": () => import("./go-2QFTIZA5.js")
  },
  {
    "id": "graphql",
    "name": "GraphQL",
    "aliases": ["gql"],
    "import": () => import("./graphql-PPI2A7MR.js")
  },
  {
    "id": "groovy",
    "name": "Groovy",
    "import": () => import("./groovy-I7VW6RCU.js")
  },
  {
    "id": "hack",
    "name": "Hack",
    "import": () => import("./hack-2G4SGCER.js")
  },
  {
    "id": "haml",
    "name": "Ruby Haml",
    "import": () => import("./haml-OCF4PBDM.js")
  },
  {
    "id": "handlebars",
    "name": "Handlebars",
    "aliases": ["hbs"],
    "import": () => import("./handlebars-HFYHVZ5X.js")
  },
  {
    "id": "haskell",
    "name": "Haskell",
    "aliases": ["hs"],
    "import": () => import("./haskell-VNOQG2GC.js")
  },
  {
    "id": "haxe",
    "name": "Haxe",
    "import": () => import("./haxe-LSR76CSI.js")
  },
  {
    "id": "hcl",
    "name": "HashiCorp HCL",
    "import": () => import("./hcl-ONUNQC2M.js")
  },
  {
    "id": "hjson",
    "name": "Hjson",
    "import": () => import("./hjson-A44O6WOE.js")
  },
  {
    "id": "hlsl",
    "name": "HLSL",
    "import": () => import("./hlsl-Y5IWWCS7.js")
  },
  {
    "id": "html",
    "name": "HTML",
    "import": () => import("./html-P3TTFAX2.js")
  },
  {
    "id": "html-derivative",
    "name": "HTML (Derivative)",
    "import": () => import("./html-derivative-BO4EGXDQ.js")
  },
  {
    "id": "http",
    "name": "HTTP",
    "import": () => import("./http-5YEWRRA5.js")
  },
  {
    "id": "hurl",
    "name": "Hurl",
    "import": () => import("./hurl-B7AZVP4J.js")
  },
  {
    "id": "hxml",
    "name": "HXML",
    "import": () => import("./hxml-VHWTB24A.js")
  },
  {
    "id": "hy",
    "name": "Hy",
    "import": () => import("./hy-7GCDWI77.js")
  },
  {
    "id": "imba",
    "name": "Imba",
    "import": () => import("./imba-URA4DQUB.js")
  },
  {
    "id": "ini",
    "name": "INI",
    "aliases": ["properties"],
    "import": () => import("./ini-2J2QGA4J.js")
  },
  {
    "id": "java",
    "name": "Java",
    "import": () => import("./java-XMDR4NHL.js")
  },
  {
    "id": "javascript",
    "name": "JavaScript",
    "aliases": [
      "js",
      "cjs",
      "mjs"
    ],
    "import": () => import("./javascript-ZJ5FM37S.js")
  },
  {
    "id": "jinja",
    "name": "Jinja",
    "import": () => import("./jinja-KQS5OTHX.js")
  },
  {
    "id": "jison",
    "name": "Jison",
    "import": () => import("./jison-X34PYO5C.js")
  },
  {
    "id": "json",
    "name": "JSON",
    "import": () => import("./json-BTC46QPR.js")
  },
  {
    "id": "json5",
    "name": "JSON5",
    "import": () => import("./json5-QOH5JC6P.js")
  },
  {
    "id": "jsonc",
    "name": "JSON with Comments",
    "import": () => import("./jsonc-PLGWAM5D.js")
  },
  {
    "id": "jsonl",
    "name": "JSON Lines",
    "import": () => import("./jsonl-ULQ2CILI.js")
  },
  {
    "id": "jsonnet",
    "name": "Jsonnet",
    "import": () => import("./jsonnet-5IORBCE7.js")
  },
  {
    "id": "jssm",
    "name": "JSSM",
    "aliases": ["fsl"],
    "import": () => import("./jssm-WS4AGFT4.js")
  },
  {
    "id": "jsx",
    "name": "JSX",
    "import": () => import("./jsx-QG5RS7FE.js")
  },
  {
    "id": "julia",
    "name": "Julia",
    "aliases": ["jl"],
    "import": () => import("./julia-JS6ODF7C.js")
  },
  {
    "id": "just",
    "name": "Just",
    "import": () => import("./just-RCXIO3PF.js")
  },
  {
    "id": "kdl",
    "name": "KDL",
    "import": () => import("./kdl-JJ2A565J.js")
  },
  {
    "id": "kotlin",
    "name": "Kotlin",
    "aliases": ["kt", "kts"],
    "import": () => import("./kotlin-PH4SNP34.js")
  },
  {
    "id": "kusto",
    "name": "Kusto",
    "aliases": ["kql"],
    "import": () => import("./kusto-7NOQ77B5.js")
  },
  {
    "id": "latex",
    "name": "LaTeX",
    "import": () => import("./latex-TLWYLJUU.js")
  },
  {
    "id": "lean",
    "name": "Lean 4",
    "aliases": ["lean4"],
    "import": () => import("./lean-7O67PIXM.js")
  },
  {
    "id": "less",
    "name": "Less",
    "import": () => import("./less-A7BSH4YD.js")
  },
  {
    "id": "liquid",
    "name": "Liquid",
    "import": () => import("./liquid-I4GFMSBP.js")
  },
  {
    "id": "llvm",
    "name": "LLVM IR",
    "import": () => import("./llvm-E6HPR4BT.js")
  },
  {
    "id": "log",
    "name": "Log file",
    "import": () => import("./log-DMTWKKFJ.js")
  },
  {
    "id": "logo",
    "name": "Logo",
    "import": () => import("./logo-PH52PBHQ.js")
  },
  {
    "id": "lua",
    "name": "Lua",
    "import": () => import("./lua-ENYDMPZD.js")
  },
  {
    "id": "luau",
    "name": "Luau",
    "import": () => import("./luau-UN26GBUU.js")
  },
  {
    "id": "make",
    "name": "Makefile",
    "aliases": ["makefile"],
    "import": () => import("./make-OLE53V6B.js")
  },
  {
    "id": "markdown",
    "name": "Markdown",
    "aliases": ["md"],
    "import": () => import("./markdown-5VOO2KJ3.js")
  },
  {
    "id": "marko",
    "name": "Marko",
    "import": () => import("./marko-42UY3MWA.js")
  },
  {
    "id": "matlab",
    "name": "MATLAB",
    "import": () => import("./matlab-DZ7SBYNI.js")
  },
  {
    "id": "mdc",
    "name": "MDC",
    "import": () => import("./mdc-MWFPGZBO.js")
  },
  {
    "id": "mdx",
    "name": "MDX",
    "import": () => import("./mdx-NPYQZFFH.js")
  },
  {
    "id": "mermaid",
    "name": "Mermaid",
    "aliases": ["mmd"],
    "import": () => import("./mermaid-K6CGML3K.js")
  },
  {
    "id": "mipsasm",
    "name": "MIPS Assembly",
    "aliases": ["mips"],
    "import": () => import("./mipsasm-72RGG2UE.js")
  },
  {
    "id": "mojo",
    "name": "Mojo",
    "import": () => import("./mojo-IDLMPYOI.js")
  },
  {
    "id": "moonbit",
    "name": "MoonBit",
    "aliases": ["mbt", "mbti"],
    "import": () => import("./moonbit-3CFA6YU6.js")
  },
  {
    "id": "move",
    "name": "Move",
    "import": () => import("./move-KVHTTQO5.js")
  },
  {
    "id": "narrat",
    "name": "Narrat Language",
    "aliases": ["nar"],
    "import": () => import("./narrat-EK7ZBLL4.js")
  },
  {
    "id": "nextflow",
    "name": "Nextflow",
    "aliases": ["nf"],
    "import": () => import("./nextflow-OJSAUIFU.js")
  },
  {
    "id": "nextflow-groovy",
    "name": "Nextflow Groovy",
    "import": () => import("./nextflow-groovy-7K5OPPUY.js")
  },
  {
    "id": "nginx",
    "name": "Nginx",
    "import": () => import("./nginx-6WL5LXC2.js")
  },
  {
    "id": "nim",
    "name": "Nim",
    "import": () => import("./nim-22J4VQOV.js")
  },
  {
    "id": "nix",
    "name": "Nix",
    "import": () => import("./nix-7SFYRXMW.js")
  },
  {
    "id": "nushell",
    "name": "nushell",
    "aliases": ["nu"],
    "import": () => import("./nushell-DFZMSGRZ.js")
  },
  {
    "id": "objective-c",
    "name": "Objective-C",
    "aliases": ["objc"],
    "import": () => import("./objective-c-5VZA44GF.js")
  },
  {
    "id": "objective-cpp",
    "name": "Objective-C++",
    "import": () => import("./objective-cpp-IJTDECE3.js")
  },
  {
    "id": "ocaml",
    "name": "OCaml",
    "import": () => import("./ocaml-GFXI5A5X.js")
  },
  {
    "id": "odin",
    "name": "Odin",
    "import": () => import("./odin-7AAF5TKO.js")
  },
  {
    "id": "openscad",
    "name": "OpenSCAD",
    "aliases": ["scad"],
    "import": () => import("./openscad-XVQHPXOJ.js")
  },
  {
    "id": "pascal",
    "name": "Pascal",
    "import": () => import("./pascal-Q5PK4NLM.js")
  },
  {
    "id": "perl",
    "name": "Perl",
    "import": () => import("./perl-EX2JAQYL.js")
  },
  {
    "id": "php",
    "name": "PHP",
    "import": () => import("./php-AW2W3HE2.js")
  },
  {
    "id": "pkl",
    "name": "Pkl",
    "import": () => import("./pkl-AMCDLBAK.js")
  },
  {
    "id": "plsql",
    "name": "PL/SQL",
    "import": () => import("./plsql-IZH2ZQZJ.js")
  },
  {
    "id": "po",
    "name": "Gettext PO",
    "aliases": ["pot", "potx"],
    "import": () => import("./po-ARHXI6EQ.js")
  },
  {
    "id": "polar",
    "name": "Polar",
    "import": () => import("./polar-5UUEM2ZN.js")
  },
  {
    "id": "postcss",
    "name": "PostCSS",
    "import": () => import("./postcss-ROE5H7NG.js")
  },
  {
    "id": "powerquery",
    "name": "PowerQuery",
    "import": () => import("./powerquery-WSTXHGIT.js")
  },
  {
    "id": "powershell",
    "name": "PowerShell",
    "aliases": ["ps", "ps1"],
    "import": () => import("./powershell-SPTI2YOK.js")
  },
  {
    "id": "prisma",
    "name": "Prisma",
    "import": () => import("./prisma-FX3TEQZC.js")
  },
  {
    "id": "prolog",
    "name": "Prolog",
    "import": () => import("./prolog-S6AW3XUL.js")
  },
  {
    "id": "proto",
    "name": "Protocol Buffer 3",
    "aliases": ["protobuf"],
    "import": () => import("./proto-ARUAQTYX.js")
  },
  {
    "id": "pug",
    "name": "Pug",
    "aliases": ["jade"],
    "import": () => import("./pug-VNUHH3HG.js")
  },
  {
    "id": "puppet",
    "name": "Puppet",
    "import": () => import("./puppet-33AWJCDE.js")
  },
  {
    "id": "purescript",
    "name": "PureScript",
    "import": () => import("./purescript-MTKCHPXE.js")
  },
  {
    "id": "python",
    "name": "Python",
    "aliases": ["py"],
    "import": () => import("./python-GBKT3R7O.js")
  },
  {
    "id": "qml",
    "name": "QML",
    "import": () => import("./qml-7MNEPS2W.js")
  },
  {
    "id": "qmldir",
    "name": "QML Directory",
    "import": () => import("./qmldir-OGBKX6R5.js")
  },
  {
    "id": "qss",
    "name": "Qt Style Sheets",
    "import": () => import("./qss-3SVQAEX5.js")
  },
  {
    "id": "r",
    "name": "R",
    "import": () => import("./r-PRKQBH6L.js")
  },
  {
    "id": "racket",
    "name": "Racket",
    "import": () => import("./racket-JXNXNHF7.js")
  },
  {
    "id": "raku",
    "name": "Raku",
    "aliases": ["perl6"],
    "import": () => import("./raku-S43ZPZ2W.js")
  },
  {
    "id": "razor",
    "name": "ASP.NET Razor",
    "import": () => import("./razor-3UH2LZCC.js")
  },
  {
    "id": "reg",
    "name": "Windows Registry Script",
    "import": () => import("./reg-EUY3A4TY.js")
  },
  {
    "id": "regexp",
    "name": "RegExp",
    "aliases": ["regex"],
    "import": () => import("./regexp-FEASTQGX.js")
  },
  {
    "id": "rel",
    "name": "Rel",
    "import": () => import("./rel-RYKQGZT5.js")
  },
  {
    "id": "riscv",
    "name": "RISC-V",
    "import": () => import("./riscv-XB7FOQVO.js")
  },
  {
    "id": "ron",
    "name": "RON",
    "import": () => import("./ron-TK35TPYV.js")
  },
  {
    "id": "rosmsg",
    "name": "ROS Interface",
    "import": () => import("./rosmsg-MIHHAEEF.js")
  },
  {
    "id": "rst",
    "name": "reStructuredText",
    "import": () => import("./rst-VX5AOONZ.js")
  },
  {
    "id": "ruby",
    "name": "Ruby",
    "aliases": ["rb"],
    "import": () => import("./ruby-YMIF2DLN.js")
  },
  {
    "id": "rust",
    "name": "Rust",
    "aliases": ["rs"],
    "import": () => import("./rust-DKUTFLHD.js")
  },
  {
    "id": "sas",
    "name": "SAS",
    "import": () => import("./sas-MEFLQ3NK.js")
  },
  {
    "id": "sass",
    "name": "Sass",
    "import": () => import("./sass-TGMDTNAM.js")
  },
  {
    "id": "scala",
    "name": "Scala",
    "import": () => import("./scala-2PLWIYOO.js")
  },
  {
    "id": "scheme",
    "name": "Scheme",
    "import": () => import("./scheme-DMDBZXOS.js")
  },
  {
    "id": "scss",
    "name": "SCSS",
    "import": () => import("./scss-N6DFKKPL.js")
  },
  {
    "id": "sdbl",
    "name": "1C (Query)",
    "aliases": ["1c-query"],
    "import": () => import("./sdbl-THJGKLHF.js")
  },
  {
    "id": "shaderlab",
    "name": "ShaderLab",
    "aliases": ["shader"],
    "import": () => import("./shaderlab-I2JFAXEF.js")
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
    "import": () => import("./shellscript-QI57I46E.js")
  },
  {
    "id": "shellsession",
    "name": "Shell Session",
    "aliases": ["console"],
    "import": () => import("./shellsession-J7YEOIRT.js")
  },
  {
    "id": "smalltalk",
    "name": "Smalltalk",
    "import": () => import("./smalltalk-KVGQ35BQ.js")
  },
  {
    "id": "solidity",
    "name": "Solidity",
    "import": () => import("./solidity-OZZZ2ELU.js")
  },
  {
    "id": "soy",
    "name": "Closure Templates",
    "aliases": ["closure-templates"],
    "import": () => import("./soy-C4UWXI5T.js")
  },
  {
    "id": "sparql",
    "name": "SPARQL",
    "import": () => import("./sparql-JYR3H2UH.js")
  },
  {
    "id": "splunk",
    "name": "Splunk Query Language",
    "aliases": ["spl"],
    "import": () => import("./splunk-OTYIPHJX.js")
  },
  {
    "id": "sql",
    "name": "SQL",
    "import": () => import("./sql-RZ3KDJHC.js")
  },
  {
    "id": "ssh-config",
    "name": "SSH Config",
    "import": () => import("./ssh-config-LJGH2IF5.js")
  },
  {
    "id": "stata",
    "name": "Stata",
    "import": () => import("./stata-HAZAJ6NP.js")
  },
  {
    "id": "stylus",
    "name": "Stylus",
    "aliases": ["styl"],
    "import": () => import("./stylus-AMY5FQFG.js")
  },
  {
    "id": "surrealql",
    "name": "SurrealQL",
    "aliases": ["surql"],
    "import": () => import("./surrealql-JK3QCJ73.js")
  },
  {
    "id": "svelte",
    "name": "Svelte",
    "import": () => import("./svelte-7JC7G6VW.js")
  },
  {
    "id": "swift",
    "name": "Swift",
    "import": () => import("./swift-SINXNN6A.js")
  },
  {
    "id": "system-verilog",
    "name": "SystemVerilog",
    "import": () => import("./system-verilog-3SNIX444.js")
  },
  {
    "id": "systemd",
    "name": "Systemd Units",
    "import": () => import("./systemd-6ZUIMP2E.js")
  },
  {
    "id": "talonscript",
    "name": "TalonScript",
    "aliases": ["talon"],
    "import": () => import("./talonscript-MY2YNJFB.js")
  },
  {
    "id": "tasl",
    "name": "Tasl",
    "import": () => import("./tasl-EB34AEUI.js")
  },
  {
    "id": "tcl",
    "name": "Tcl",
    "import": () => import("./tcl-CEJDH54A.js")
  },
  {
    "id": "templ",
    "name": "Templ",
    "import": () => import("./templ-MMS7RNHV.js")
  },
  {
    "id": "terraform",
    "name": "Terraform",
    "aliases": ["tf", "tfvars"],
    "import": () => import("./terraform-TZCLDL2Q.js")
  },
  {
    "id": "tex",
    "name": "TeX",
    "import": () => import("./tex-OW5VNAF7.js")
  },
  {
    "id": "toml",
    "name": "TOML",
    "import": () => import("./toml-GSYAVFSV.js")
  },
  {
    "id": "ts-tags",
    "name": "TypeScript with Tags",
    "aliases": ["lit"],
    "import": () => import("./ts-tags-BNI3H7VU.js")
  },
  {
    "id": "tsv",
    "name": "TSV",
    "import": () => import("./tsv-JEYI74VZ.js")
  },
  {
    "id": "tsx",
    "name": "TSX",
    "import": () => import("./tsx-NFIJ5LDW.js")
  },
  {
    "id": "turtle",
    "name": "Turtle",
    "import": () => import("./turtle-JWUJBMAK.js")
  },
  {
    "id": "twig",
    "name": "Twig",
    "import": () => import("./twig-HWRUNNR4.js")
  },
  {
    "id": "typescript",
    "name": "TypeScript",
    "aliases": [
      "ts",
      "cts",
      "mts"
    ],
    "import": () => import("./typescript-AD7FTAUP.js")
  },
  {
    "id": "typespec",
    "name": "TypeSpec",
    "aliases": ["tsp"],
    "import": () => import("./typespec-2CJXZ272.js")
  },
  {
    "id": "typst",
    "name": "Typst",
    "aliases": ["typ"],
    "import": () => import("./typst-3KYJQYMQ.js")
  },
  {
    "id": "v",
    "name": "V",
    "import": () => import("./v-E4F4HFUZ.js")
  },
  {
    "id": "vala",
    "name": "Vala",
    "import": () => import("./vala-V7J57B75.js")
  },
  {
    "id": "vb",
    "name": "Visual Basic",
    "aliases": ["cmd"],
    "import": () => import("./vb-NRRJUVEA.js")
  },
  {
    "id": "verilog",
    "name": "Verilog",
    "import": () => import("./verilog-E3TL7J6L.js")
  },
  {
    "id": "vhdl",
    "name": "VHDL",
    "import": () => import("./vhdl-MHLR7SNO.js")
  },
  {
    "id": "viml",
    "name": "Vim Script",
    "aliases": ["vim", "vimscript"],
    "import": () => import("./viml-SWPQWPVW.js")
  },
  {
    "id": "vue",
    "name": "Vue",
    "import": () => import("./vue-TBUWM7YU.js")
  },
  {
    "id": "vue-html",
    "name": "Vue HTML",
    "import": () => import("./vue-html-LOUVVAA2.js")
  },
  {
    "id": "vue-vine",
    "name": "Vue Vine",
    "import": () => import("./vue-vine-5XHUHCPD.js")
  },
  {
    "id": "vyper",
    "name": "Vyper",
    "aliases": ["vy"],
    "import": () => import("./vyper-SZKLBGDD.js")
  },
  {
    "id": "wasm",
    "name": "WebAssembly",
    "import": () => import("./wasm-HEEXMGPE.js")
  },
  {
    "id": "wenyan",
    "name": "Wenyan",
    "aliases": ["文言"],
    "import": () => import("./wenyan-SRDKXLHB.js")
  },
  {
    "id": "wgsl",
    "name": "WGSL",
    "import": () => import("./wgsl-OEWAWHXD.js")
  },
  {
    "id": "wikitext",
    "name": "Wikitext",
    "aliases": ["mediawiki", "wiki"],
    "import": () => import("./wikitext-GFQUEPGO.js")
  },
  {
    "id": "wit",
    "name": "WebAssembly Interface Types",
    "import": () => import("./wit-4LJG2HEU.js")
  },
  {
    "id": "wolfram",
    "name": "Wolfram",
    "aliases": ["wl"],
    "import": () => import("./wolfram-7JX6NPSR.js")
  },
  {
    "id": "xml",
    "name": "XML",
    "import": () => import("./xml-D7AMOPWQ.js")
  },
  {
    "id": "xsl",
    "name": "XSL",
    "import": () => import("./xsl-IP7HHMFU.js")
  },
  {
    "id": "yaml",
    "name": "YAML",
    "aliases": ["yml"],
    "import": () => import("./yaml-M7ITQ744.js")
  },
  {
    "id": "zenscript",
    "name": "ZenScript",
    "import": () => import("./zenscript-JDITMD7B.js")
  },
  {
    "id": "zig",
    "name": "Zig",
    "import": () => import("./zig-UDOBNPIB.js")
  }
];
var bundledLanguagesBase = Object.fromEntries(bundledLanguagesInfo.map((i2) => [i2.id, i2.import]));
var bundledLanguagesAlias = Object.fromEntries(bundledLanguagesInfo.flatMap((i2) => {
  var _a2;
  return ((_a2 = i2.aliases) == null ? void 0 : _a2.map((a2) => [a2, i2.import])) || [];
}));
var bundledLanguages = {
  ...bundledLanguagesBase,
  ...bundledLanguagesAlias
};

// ../packages/components/node_modules/shiki/dist/themes.mjs
var bundledThemesInfo = [
  {
    "id": "andromeeda",
    "displayName": "Andromeeda",
    "type": "dark",
    "import": () => import("./andromeeda-FQHTJDRE.js")
  },
  {
    "id": "aurora-x",
    "displayName": "Aurora X",
    "type": "dark",
    "import": () => import("./aurora-x-YOXFASOL.js")
  },
  {
    "id": "ayu-dark",
    "displayName": "Ayu Dark",
    "type": "dark",
    "import": () => import("./ayu-dark-6DB3ZB24.js")
  },
  {
    "id": "ayu-light",
    "displayName": "Ayu Light",
    "type": "light",
    "import": () => import("./ayu-light-ZCGR6G3Q.js")
  },
  {
    "id": "ayu-mirage",
    "displayName": "Ayu Mirage",
    "type": "dark",
    "import": () => import("./ayu-mirage-IKT6F5JN.js")
  },
  {
    "id": "catppuccin-frappe",
    "displayName": "Catppuccin Frappé",
    "type": "dark",
    "import": () => import("./catppuccin-frappe-BY3Y6YOF.js")
  },
  {
    "id": "catppuccin-latte",
    "displayName": "Catppuccin Latte",
    "type": "light",
    "import": () => import("./catppuccin-latte-UBF433RX.js")
  },
  {
    "id": "catppuccin-macchiato",
    "displayName": "Catppuccin Macchiato",
    "type": "dark",
    "import": () => import("./catppuccin-macchiato-UV3EEBKO.js")
  },
  {
    "id": "catppuccin-mocha",
    "displayName": "Catppuccin Mocha",
    "type": "dark",
    "import": () => import("./catppuccin-mocha-J6342UZ4.js")
  },
  {
    "id": "dark-plus",
    "displayName": "Dark Plus",
    "type": "dark",
    "import": () => import("./dark-plus-5ZFAWQ5Y.js")
  },
  {
    "id": "dracula",
    "displayName": "Dracula Theme",
    "type": "dark",
    "import": () => import("./dracula-27HQUHOM.js")
  },
  {
    "id": "dracula-soft",
    "displayName": "Dracula Theme Soft",
    "type": "dark",
    "import": () => import("./dracula-soft-4EHDNICJ.js")
  },
  {
    "id": "everforest-dark",
    "displayName": "Everforest Dark",
    "type": "dark",
    "import": () => import("./everforest-dark-MQEVWKPI.js")
  },
  {
    "id": "everforest-light",
    "displayName": "Everforest Light",
    "type": "light",
    "import": () => import("./everforest-light-CGBEMWMC.js")
  },
  {
    "id": "github-dark",
    "displayName": "GitHub Dark",
    "type": "dark",
    "import": () => import("./github-dark-3QKMKAR3.js")
  },
  {
    "id": "github-dark-default",
    "displayName": "GitHub Dark Default",
    "type": "dark",
    "import": () => import("./github-dark-default-BNKEFPNY.js")
  },
  {
    "id": "github-dark-dimmed",
    "displayName": "GitHub Dark Dimmed",
    "type": "dark",
    "import": () => import("./github-dark-dimmed-VXZR2VRP.js")
  },
  {
    "id": "github-dark-high-contrast",
    "displayName": "GitHub Dark High Contrast",
    "type": "dark",
    "import": () => import("./github-dark-high-contrast-HIOWLNH6.js")
  },
  {
    "id": "github-light",
    "displayName": "GitHub Light",
    "type": "light",
    "import": () => import("./github-light-I7NFDX4E.js")
  },
  {
    "id": "github-light-default",
    "displayName": "GitHub Light Default",
    "type": "light",
    "import": () => import("./github-light-default-FMYSIPBH.js")
  },
  {
    "id": "github-light-high-contrast",
    "displayName": "GitHub Light High Contrast",
    "type": "light",
    "import": () => import("./github-light-high-contrast-5ZTZAJBY.js")
  },
  {
    "id": "gruvbox-dark-hard",
    "displayName": "Gruvbox Dark Hard",
    "type": "dark",
    "import": () => import("./gruvbox-dark-hard-2YSKPBQY.js")
  },
  {
    "id": "gruvbox-dark-medium",
    "displayName": "Gruvbox Dark Medium",
    "type": "dark",
    "import": () => import("./gruvbox-dark-medium-RMJY3G7F.js")
  },
  {
    "id": "gruvbox-dark-soft",
    "displayName": "Gruvbox Dark Soft",
    "type": "dark",
    "import": () => import("./gruvbox-dark-soft-M3C2FXSV.js")
  },
  {
    "id": "gruvbox-light-hard",
    "displayName": "Gruvbox Light Hard",
    "type": "light",
    "import": () => import("./gruvbox-light-hard-2ONWVZAQ.js")
  },
  {
    "id": "gruvbox-light-medium",
    "displayName": "Gruvbox Light Medium",
    "type": "light",
    "import": () => import("./gruvbox-light-medium-WR3MLURH.js")
  },
  {
    "id": "gruvbox-light-soft",
    "displayName": "Gruvbox Light Soft",
    "type": "light",
    "import": () => import("./gruvbox-light-soft-2ZCGWS7I.js")
  },
  {
    "id": "horizon",
    "displayName": "Horizon",
    "type": "dark",
    "import": () => import("./horizon-MCFX74QH.js")
  },
  {
    "id": "horizon-bright",
    "displayName": "Horizon Bright",
    "type": "light",
    "import": () => import("./horizon-bright-GB25O2NT.js")
  },
  {
    "id": "houston",
    "displayName": "Houston",
    "type": "dark",
    "import": () => import("./houston-675M5Z56.js")
  },
  {
    "id": "kanagawa-dragon",
    "displayName": "Kanagawa Dragon",
    "type": "dark",
    "import": () => import("./kanagawa-dragon-KOXPA5VT.js")
  },
  {
    "id": "kanagawa-lotus",
    "displayName": "Kanagawa Lotus",
    "type": "light",
    "import": () => import("./kanagawa-lotus-CAUINBYJ.js")
  },
  {
    "id": "kanagawa-wave",
    "displayName": "Kanagawa Wave",
    "type": "dark",
    "import": () => import("./kanagawa-wave-SKS7RNLG.js")
  },
  {
    "id": "laserwave",
    "displayName": "LaserWave",
    "type": "dark",
    "import": () => import("./laserwave-VV3GZVXN.js")
  },
  {
    "id": "light-plus",
    "displayName": "Light Plus",
    "type": "light",
    "import": () => import("./light-plus-RBMXVCYT.js")
  },
  {
    "id": "material-theme",
    "displayName": "Material Theme",
    "type": "dark",
    "import": () => import("./material-theme-HKZONJTC.js")
  },
  {
    "id": "material-theme-darker",
    "displayName": "Material Theme Darker",
    "type": "dark",
    "import": () => import("./material-theme-darker-IR3ER46I.js")
  },
  {
    "id": "material-theme-lighter",
    "displayName": "Material Theme Lighter",
    "type": "light",
    "import": () => import("./material-theme-lighter-J5ZEFNPR.js")
  },
  {
    "id": "material-theme-ocean",
    "displayName": "Material Theme Ocean",
    "type": "dark",
    "import": () => import("./material-theme-ocean-7DKPKZF6.js")
  },
  {
    "id": "material-theme-palenight",
    "displayName": "Material Theme Palenight",
    "type": "dark",
    "import": () => import("./material-theme-palenight-ZDLCGKAS.js")
  },
  {
    "id": "min-dark",
    "displayName": "Min Dark",
    "type": "dark",
    "import": () => import("./min-dark-5OH56QNF.js")
  },
  {
    "id": "min-light",
    "displayName": "Min Light",
    "type": "light",
    "import": () => import("./min-light-IR2BEMMF.js")
  },
  {
    "id": "monokai",
    "displayName": "Monokai",
    "type": "dark",
    "import": () => import("./monokai-3UJHWQP6.js")
  },
  {
    "id": "night-owl",
    "displayName": "Night Owl",
    "type": "dark",
    "import": () => import("./night-owl-GODLBZU5.js")
  },
  {
    "id": "night-owl-light",
    "displayName": "Night Owl Light",
    "type": "light",
    "import": () => import("./night-owl-light-X4BC5N5B.js")
  },
  {
    "id": "nord",
    "displayName": "Nord",
    "type": "dark",
    "import": () => import("./nord-4VLGR5EP.js")
  },
  {
    "id": "one-dark-pro",
    "displayName": "One Dark Pro",
    "type": "dark",
    "import": () => import("./one-dark-pro-3Z2YVHST.js")
  },
  {
    "id": "one-light",
    "displayName": "One Light",
    "type": "light",
    "import": () => import("./one-light-GGHG3YME.js")
  },
  {
    "id": "plastic",
    "displayName": "Plastic",
    "type": "dark",
    "import": () => import("./plastic-ZO3WF56Q.js")
  },
  {
    "id": "poimandres",
    "displayName": "Poimandres",
    "type": "dark",
    "import": () => import("./poimandres-BHRPV6AM.js")
  },
  {
    "id": "red",
    "displayName": "Red",
    "type": "dark",
    "import": () => import("./red-QE7QMDEE.js")
  },
  {
    "id": "rose-pine",
    "displayName": "Rosé Pine",
    "type": "dark",
    "import": () => import("./rose-pine-7NMZCXMG.js")
  },
  {
    "id": "rose-pine-dawn",
    "displayName": "Rosé Pine Dawn",
    "type": "light",
    "import": () => import("./rose-pine-dawn-PW7XI3KW.js")
  },
  {
    "id": "rose-pine-moon",
    "displayName": "Rosé Pine Moon",
    "type": "dark",
    "import": () => import("./rose-pine-moon-HMXSR6WL.js")
  },
  {
    "id": "slack-dark",
    "displayName": "Slack Dark",
    "type": "dark",
    "import": () => import("./slack-dark-432YHSZD.js")
  },
  {
    "id": "slack-ochin",
    "displayName": "Slack Ochin",
    "type": "light",
    "import": () => import("./slack-ochin-LQZC4QOE.js")
  },
  {
    "id": "snazzy-light",
    "displayName": "Snazzy Light",
    "type": "light",
    "import": () => import("./snazzy-light-KA7WJN5N.js")
  },
  {
    "id": "solarized-dark",
    "displayName": "Solarized Dark",
    "type": "dark",
    "import": () => import("./solarized-dark-SDZDWZRM.js")
  },
  {
    "id": "solarized-light",
    "displayName": "Solarized Light",
    "type": "light",
    "import": () => import("./solarized-light-LAHHAFE3.js")
  },
  {
    "id": "synthwave-84",
    "displayName": "Synthwave '84",
    "type": "dark",
    "import": () => import("./synthwave-84-W27NLCAQ.js")
  },
  {
    "id": "tokyo-night",
    "displayName": "Tokyo Night",
    "type": "dark",
    "import": () => import("./tokyo-night-ZVII5P4H.js")
  },
  {
    "id": "vesper",
    "displayName": "Vesper",
    "type": "dark",
    "import": () => import("./vesper-RYY5UQTX.js")
  },
  {
    "id": "vitesse-black",
    "displayName": "Vitesse Black",
    "type": "dark",
    "import": () => import("./vitesse-black-QVGIYVWV.js")
  },
  {
    "id": "vitesse-dark",
    "displayName": "Vitesse Dark",
    "type": "dark",
    "import": () => import("./vitesse-dark-5U2DBGTN.js")
  },
  {
    "id": "vitesse-light",
    "displayName": "Vitesse Light",
    "type": "light",
    "import": () => import("./vitesse-light-LCLTMS75.js")
  }
];
var bundledThemes = Object.fromEntries(bundledThemesInfo.map((i2) => [i2.id, i2.import]));

// ../packages/components/node_modules/@shikijs/engine-oniguruma/dist/index.mjs
var dist_exports = {};
__export(dist_exports, {
  createOnigurumaEngine: () => createOnigurumaEngine,
  getDefaultWasmLoader: () => getDefaultWasmLoader,
  loadWasm: () => loadWasm,
  setDefaultWasmLoader: () => setDefaultWasmLoader
});
var ShikiError = class extends Error {
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
var alignUp = (x3, multiple) => x3 + (multiple - x3 % multiple) % multiple;
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
    while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
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
    const exports$1 = await init(info);
    wasmMemory = exports$1.memory;
    updateGlobalBufferAndViews(wasmMemory.buffer);
    Object.assign(binding, exports$1);
    binding.UTF8ToString = UTF8ToString;
  }
  await createWasm();
  return binding;
}
var __defProp2 = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField2 = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var onigBinding = null;
function throwLastOnigError(onigBinding2) {
  throw new ShikiError(onigBinding2.UTF8ToString(onigBinding2.getLastOnigError()));
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
    for (let i2 = 0, len = str.length; i2 < len; i2++) {
      const charCode = str.charCodeAt(i2);
      let codepoint = charCode;
      let wasSurrogatePair = false;
      if (charCode >= 55296 && charCode <= 56319) {
        if (i2 + 1 < len) {
          const nextCharCode = str.charCodeAt(i2 + 1);
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
        i2++;
    }
    return result;
  }
  createString(onigBinding2) {
    const result = onigBinding2.omalloc(this.utf8Length);
    onigBinding2.HEAPU8.set(this.utf8Value, result);
    return result;
  }
};
var _OnigString = class _OnigString2 {
  constructor(str) {
    __publicField2(this, "id", ++_OnigString2.LAST_ID);
    __publicField2(this, "_onigBinding");
    __publicField2(this, "content");
    __publicField2(this, "utf16Length");
    __publicField2(this, "utf8Length");
    __publicField2(this, "utf16OffsetToUtf8");
    __publicField2(this, "utf8OffsetToUtf16");
    __publicField2(this, "ptr");
    if (!onigBinding)
      throw new ShikiError("Must invoke loadWasm first.");
    this._onigBinding = onigBinding;
    this.content = str;
    const utfString = new UtfString(str);
    this.utf16Length = utfString.utf16Length;
    this.utf8Length = utfString.utf8Length;
    this.utf16OffsetToUtf8 = utfString.utf16OffsetToUtf8;
    this.utf8OffsetToUtf16 = utfString.utf8OffsetToUtf16;
    if (this.utf8Length < 1e4 && !_OnigString2._sharedPtrInUse) {
      if (!_OnigString2._sharedPtr)
        _OnigString2._sharedPtr = onigBinding.omalloc(1e4);
      _OnigString2._sharedPtrInUse = true;
      onigBinding.HEAPU8.set(utfString.utf8Value, _OnigString2._sharedPtr);
      this.ptr = _OnigString2._sharedPtr;
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
    if (this.ptr === _OnigString2._sharedPtr)
      _OnigString2._sharedPtrInUse = false;
    else
      this._onigBinding.ofree(this.ptr);
  }
};
__publicField2(_OnigString, "LAST_ID", 0);
__publicField2(_OnigString, "_sharedPtr", 0);
__publicField2(_OnigString, "_sharedPtrInUse", false);
var OnigString = _OnigString;
var OnigScanner = class {
  constructor(patterns) {
    __publicField2(this, "_onigBinding");
    __publicField2(this, "_ptr");
    if (!onigBinding)
      throw new ShikiError("Must invoke loadWasm first.");
    const strPtrsArr = [];
    const strLenArr = [];
    for (let i2 = 0, len = patterns.length; i2 < len; i2++) {
      const utfString = new UtfString(patterns[i2]);
      strPtrsArr[i2] = utfString.createString(onigBinding);
      strLenArr[i2] = utfString.utf8Length;
    }
    const strPtrsPtr = onigBinding.omalloc(4 * patterns.length);
    onigBinding.HEAPU32.set(strPtrsArr, strPtrsPtr / 4);
    const strLenPtr = onigBinding.omalloc(4 * patterns.length);
    onigBinding.HEAPU32.set(strLenArr, strLenPtr / 4);
    const scannerPtr = onigBinding.createOnigScanner(strPtrsPtr, strLenPtr, patterns.length);
    for (let i2 = 0, len = patterns.length; i2 < len; i2++)
      onigBinding.ofree(strPtrsArr[i2]);
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
    for (let i2 = 0; i2 < count; i2++) {
      const beg = string.convertUtf8OffsetToUtf16(HEAPU32[offset++]);
      const end = string.convertUtf8OffsetToUtf16(HEAPU32[offset++]);
      captureIndices[i2] = {
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
  var _a2;
  return typeof ArrayBuffer !== "undefined" && (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) || typeof Buffer !== "undefined" && ((_a2 = Buffer.isBuffer) == null ? void 0 : _a2.call(Buffer, data)) || typeof SharedArrayBuffer !== "undefined" && data instanceof SharedArrayBuffer || typeof Uint32Array !== "undefined" && data instanceof Uint32Array;
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
function setDefaultWasmLoader(_loader) {
  _defaultWasmLoader = _loader;
}
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
    createString(s2) {
      return new OnigString(s2);
    }
  };
}

// ../packages/components/node_modules/shiki/dist/engine-oniguruma.mjs
var engine_oniguruma_exports = __exportAll({});
__reExport(engine_oniguruma_exports, dist_exports);

// ../packages/components/node_modules/@shikijs/types/dist/index.mjs
var ShikiError2 = class extends Error {
  constructor(message) {
    super(message);
    this.name = "ShikiError";
  }
};

// ../node_modules/@shikijs/primitive/node_modules/@shikijs/types/dist/index.mjs
var ShikiError3 = class extends Error {
  constructor(message) {
    super(message);
    this.name = "ShikiError";
  }
};

// ../node_modules/@shikijs/primitive/dist/index.mjs
function resolveColorReplacements(theme, options) {
  const replacements = typeof theme === "string" ? {} : { ...theme.colorReplacements };
  const themeName = typeof theme === "string" ? theme : theme.name;
  for (const [key, value] of Object.entries((options == null ? void 0 : options.colorReplacements) || {})) if (typeof value === "string") replacements[key] = value;
  else if (key === themeName) Object.assign(replacements, value);
  return replacements;
}
function applyColorReplacements(color, replacements) {
  if (!color) return color;
  return (replacements == null ? void 0 : replacements[color == null ? void 0 : color.toLowerCase()]) || color;
}
function toArray(x3) {
  return Array.isArray(x3) ? x3 : [x3];
}
async function normalizeGetter(p) {
  return Promise.resolve(typeof p === "function" ? p() : p).then((r3) => r3.default || r3);
}
function isPlainLang(lang) {
  return !lang || [
    "plaintext",
    "txt",
    "text",
    "plain"
  ].includes(lang);
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
function splitLines(code, preserveEnding = false) {
  var _a2;
  if (code.length === 0) return [["", 0]];
  const parts = code.split(/(\r?\n)/g);
  let index = 0;
  const lines = [];
  for (let i2 = 0; i2 < parts.length; i2 += 2) {
    const line = preserveEnding ? parts[i2] + (parts[i2 + 1] || "") : parts[i2];
    lines.push([line, index]);
    index += parts[i2].length;
    index += ((_a2 = parts[i2 + 1]) == null ? void 0 : _a2.length) || 0;
  }
  return lines;
}
var VSCODE_FALLBACK_EDITOR_FG = {
  light: "#333333",
  dark: "#bbbbbb"
};
var VSCODE_FALLBACK_EDITOR_BG = {
  light: "#fffffe",
  dark: "#1e1e1e"
};
var RESOLVED_KEY = "__shiki_resolved";
function normalizeTheme(rawTheme) {
  var _a2, _b, _c, _d, _e;
  if (rawTheme == null ? void 0 : rawTheme[RESOLVED_KEY]) return rawTheme;
  const theme = { ...rawTheme };
  if (theme.tokenColors && !theme.settings) {
    theme.settings = theme.tokenColors;
    delete theme.tokenColors;
  }
  theme.type || (theme.type = "dark");
  theme.colorReplacements = { ...theme.colorReplacements };
  theme.settings || (theme.settings = []);
  let { bg, fg } = theme;
  if (!bg || !fg) {
    const globalSetting = theme.settings ? theme.settings.find((s2) => !s2.name && !s2.scope) : void 0;
    if ((_a2 = globalSetting == null ? void 0 : globalSetting.settings) == null ? void 0 : _a2.foreground) fg = globalSetting.settings.foreground;
    if ((_b = globalSetting == null ? void 0 : globalSetting.settings) == null ? void 0 : _b.background) bg = globalSetting.settings.background;
    if (!fg && ((_c = theme == null ? void 0 : theme.colors) == null ? void 0 : _c["editor.foreground"])) fg = theme.colors["editor.foreground"];
    if (!bg && ((_d = theme == null ? void 0 : theme.colors) == null ? void 0 : _d["editor.background"])) bg = theme.colors["editor.background"];
    if (!fg) fg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_FG.light : VSCODE_FALLBACK_EDITOR_FG.dark;
    if (!bg) bg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_BG.light : VSCODE_FALLBACK_EDITOR_BG.dark;
    theme.fg = fg;
    theme.bg = bg;
  }
  if (!(theme.settings[0] && theme.settings[0].settings && !theme.settings[0].scope)) theme.settings.unshift({ settings: {
    foreground: theme.fg,
    background: theme.bg
  } });
  let replacementCount = 0;
  const replacementMap = /* @__PURE__ */ new Map();
  function getReplacementColor(value) {
    var _a3;
    if (replacementMap.has(value)) return replacementMap.get(value);
    replacementCount += 1;
    const hex = `#${replacementCount.toString(16).padStart(8, "0").toLowerCase()}`;
    if ((_a3 = theme.colorReplacements) == null ? void 0 : _a3[`#${hex}`]) return getReplacementColor(value);
    replacementMap.set(value, hex);
    return hex;
  }
  theme.settings = theme.settings.map((setting) => {
    var _a3, _b2;
    const replaceFg = ((_a3 = setting.settings) == null ? void 0 : _a3.foreground) && !setting.settings.foreground.startsWith("#");
    const replaceBg = ((_b2 = setting.settings) == null ? void 0 : _b2.background) && !setting.settings.background.startsWith("#");
    if (!replaceFg && !replaceBg) return setting;
    const clone = {
      ...setting,
      settings: { ...setting.settings }
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
  for (const key of Object.keys(theme.colors || {})) if (key === "editor.foreground" || key === "editor.background" || key.startsWith("terminal.ansi")) {
    if (!((_e = theme.colors[key]) == null ? void 0 : _e.startsWith("#"))) {
      const replacement = getReplacementColor(theme.colors[key]);
      theme.colorReplacements[replacement] = theme.colors[key];
      theme.colors[key] = replacement;
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
  return Array.from(new Set((await Promise.all(langs.filter((l3) => !isSpecialLang(l3)).map(async (lang) => await normalizeGetter(lang).then((r3) => Array.isArray(r3) ? r3 : [r3])))).flat()));
}
async function resolveThemes(themes) {
  return (await Promise.all(themes.map(async (theme) => isSpecialTheme(theme) ? null : normalizeTheme(await normalizeGetter(theme))))).filter((i2) => !!i2);
}
function resolveLangAlias(name, alias) {
  if (!alias) return name;
  if (alias[name]) {
    const resolved = /* @__PURE__ */ new Set([name]);
    while (alias[name]) {
      name = alias[name];
      if (resolved.has(name)) throw new ShikiError3(`Circular alias \`${Array.from(resolved).join(" -> ")} -> ${name}\``);
      resolved.add(name);
    }
  }
  return name;
}
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
    if (typeof theme === "string") return this._resolvedThemes.get(theme);
    else return this.loadTheme(theme);
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
    if (!this._loadedThemesCache) this._loadedThemesCache = [...this._resolvedThemes.keys()];
    return this._loadedThemesCache;
  }
  setTheme(theme) {
    let textmateTheme = this._textmateThemeCache.get(theme);
    if (!textmateTheme) {
      textmateTheme = Theme.createFromRawTheme(theme);
      this._textmateThemeCache.set(theme, textmateTheme);
    }
    this._syncRegistry.setTheme(textmateTheme);
  }
  getGrammar(name) {
    name = resolveLangAlias(name, this._alias);
    return this._resolvedGrammars.get(name);
  }
  loadLanguage(lang) {
    var _a2, _b, _c, _d;
    if (this.getGrammar(lang.name)) return;
    const embeddedLazilyBy = new Set([...this._langMap.values()].filter((i2) => {
      var _a3;
      return (_a3 = i2.embeddedLangsLazy) == null ? void 0 : _a3.includes(lang.name);
    }));
    this._resolver.addLanguage(lang);
    const grammarConfig = {
      balancedBracketSelectors: lang.balancedBracketSelectors || ["*"],
      unbalancedBracketSelectors: lang.unbalancedBracketSelectors || []
    };
    this._syncRegistry._rawGrammars.set(lang.scopeName, lang);
    const g = this.loadGrammarWithConfiguration(lang.scopeName, 1, grammarConfig);
    g.name = lang.name;
    this._resolvedGrammars.set(lang.name, g);
    if (lang.aliases) lang.aliases.forEach((alias) => {
      this._alias[alias] = lang.name;
    });
    this._loadedLanguagesCache = null;
    if (embeddedLazilyBy.size) for (const e of embeddedLazilyBy) {
      this._resolvedGrammars.delete(e.name);
      this._loadedLanguagesCache = null;
      (_b = (_a2 = this._syncRegistry) == null ? void 0 : _a2._injectionGrammars) == null ? void 0 : _b.delete(e.scopeName);
      (_d = (_c = this._syncRegistry) == null ? void 0 : _c._grammars) == null ? void 0 : _d.delete(e.scopeName);
      this.loadLanguage(this._langMap.get(e.name));
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
    for (const lang of langs) this.resolveEmbeddedLanguages(lang);
    const langsGraphArray = Array.from(this._langGraph.entries());
    const missingLangs = langsGraphArray.filter(([_3, lang]) => !lang);
    if (missingLangs.length) {
      const dependents = langsGraphArray.filter(([_3, lang]) => {
        var _a2;
        if (!lang) return false;
        return (_a2 = lang.embeddedLanguages || lang.embeddedLangs) == null ? void 0 : _a2.some((l3) => missingLangs.map(([name]) => name).includes(l3));
      }).filter((lang) => !missingLangs.includes(lang));
      throw new ShikiError3(`Missing languages ${missingLangs.map(([name]) => `\`${name}\``).join(", ")}, required by ${dependents.map(([name]) => `\`${name}\``).join(", ")}`);
    }
    for (const [_3, lang] of langsGraphArray) this._resolver.addLanguage(lang);
    for (const [_3, lang] of langsGraphArray) this.loadLanguage(lang);
  }
  getLoadedLanguages() {
    if (!this._loadedLanguagesCache) this._loadedLanguagesCache = [.../* @__PURE__ */ new Set([...this._resolvedGrammars.keys(), ...Object.keys(this._alias)])];
    return this._loadedLanguagesCache;
  }
  resolveEmbeddedLanguages(lang) {
    this._langMap.set(lang.name, lang);
    this._langGraph.set(lang.name, lang);
    const embedded = lang.embeddedLanguages ?? lang.embeddedLangs;
    if (embedded) for (const embeddedLang of embedded) this._langGraph.set(embeddedLang, this._langMap.get(embeddedLang));
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
      createOnigString: (s2) => engine.createString(s2)
    };
    langs.forEach((i2) => this.addLanguage(i2));
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
  addLanguage(l3) {
    this._langs.set(l3.name, l3);
    if (l3.aliases) l3.aliases.forEach((a2) => {
      this._langs.set(a2, l3);
    });
    this._scopeToLang.set(l3.scopeName, l3);
    if (l3.injectTo) l3.injectTo.forEach((i2) => {
      if (!this._injections.get(i2)) this._injections.set(i2, []);
      this._injections.get(i2).push(l3.scopeName);
    });
  }
  getInjections(scopeName) {
    const scopeParts = scopeName.split(".");
    let injections = [];
    for (let i2 = 1; i2 <= scopeParts.length; i2++) {
      const subScopeName = scopeParts.slice(0, i2).join(".");
      injections = [...injections, ...this._injections.get(subScopeName) || []];
    }
    return injections;
  }
};
var instancesCount = 0;
function createShikiPrimitive(options) {
  instancesCount += 1;
  if (options.warnings !== false && instancesCount >= 10 && instancesCount % 10 === 0) console.warn(`[Shiki] ${instancesCount} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);
  let isDisposed = false;
  if (!options.engine) throw new ShikiError3("`engine` option is required for synchronous mode");
  const langs = (options.langs || []).flat(1);
  const themes = (options.themes || []).flat(1).map(normalizeTheme);
  const _registry = new Registry2(new Resolver(options.engine, langs), themes, langs, options.langAlias);
  let _lastTheme;
  function resolveLangAlias$1(name) {
    return resolveLangAlias(name, options.langAlias);
  }
  function getLanguage(name) {
    ensureNotDisposed();
    const _lang = _registry.getGrammar(typeof name === "string" ? name : name.name);
    if (!_lang) throw new ShikiError3(`Language \`${name}\` not found, you may need to load it first`);
    return _lang;
  }
  function getTheme(name) {
    if (name === "none") return {
      bg: "",
      fg: "",
      name: "none",
      settings: [],
      type: "dark"
    };
    ensureNotDisposed();
    const _theme = _registry.getTheme(name);
    if (!_theme) throw new ShikiError3(`Theme \`${name}\` not found, you may need to load it first`);
    return _theme;
  }
  function setTheme(name) {
    ensureNotDisposed();
    const theme = getTheme(name);
    if (_lastTheme !== name) {
      _registry.setTheme(theme);
      _lastTheme = name;
    }
    return {
      theme,
      colorMap: _registry.getColorMap()
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
    for (const theme of themes2.flat(1)) _registry.loadTheme(theme);
  }
  async function loadTheme(...themes2) {
    ensureNotDisposed();
    return loadThemeSync(await resolveThemes(themes2));
  }
  function ensureNotDisposed() {
    if (isDisposed) throw new ShikiError3("Shiki instance has been disposed");
  }
  function dispose() {
    if (isDisposed) return;
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
    resolveLangAlias: resolveLangAlias$1,
    loadLanguage,
    loadLanguageSync,
    loadTheme,
    loadThemeSync,
    dispose,
    [Symbol.dispose]: dispose
  };
}
var createShikiInternalSync = createShikiPrimitive;
async function createShikiPrimitiveAsync(options) {
  if (!options.engine) console.warn("`engine` option is required. Use `createOnigurumaEngine` or `createJavaScriptRegexEngine` to create an engine.");
  const [themes, langs, engine] = await Promise.all([
    resolveThemes(options.themes || []),
    resolveLangs(options.langs || []),
    options.engine
  ]);
  return createShikiPrimitive({
    ...options,
    themes,
    langs,
    engine
  });
}
var createShikiInternal = createShikiPrimitiveAsync;
var _grammarStateMap = /* @__PURE__ */ new WeakMap();
function setLastGrammarStateToMap(keys, state) {
  _grammarStateMap.set(keys, state);
}
function getLastGrammarStateFromMap(keys) {
  return _grammarStateMap.get(keys);
}
var GrammarState = class GrammarState2 {
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
    return new GrammarState2(Object.fromEntries(toArray(themes).map((theme) => [theme, INITIAL])), lang);
  }
  /**
  * Get the internal stack object.
  * @internal
  */
  getInternalStack(theme = this.theme) {
    return this._stacks[theme];
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
    var _a2;
    if (visited.has(stack2)) return;
    visited.add(stack2);
    const name = (_a2 = stack2 == null ? void 0 : stack2.nameScopesList) == null ? void 0 : _a2.scopeName;
    if (name) scopes.push(name);
    if (stack2.parent) pushScope(stack2.parent);
  }
  pushScope(stack);
  return scopes;
}
function getGrammarStack(state, theme) {
  if (!(state instanceof GrammarState)) throw new ShikiError3("Invalid grammar state");
  return state.getInternalStack(theme);
}
function codeToTokensBase(primitive, code, options = {}) {
  const { theme: themeName = primitive.getLoadedThemes()[0] } = options;
  if (isPlainLang(primitive.resolveLangAlias(options.lang || "text")) || isNoneTheme(themeName)) return splitLines(code).map((line) => [{
    content: line[0],
    offset: line[1]
  }]);
  const { theme, colorMap } = primitive.setTheme(themeName);
  const _grammar = primitive.getLanguage(options.lang || "text");
  if (options.grammarState) {
    if (options.grammarState.lang !== _grammar.name) throw new ShikiError3(`Grammar state language "${options.grammarState.lang}" does not match highlight language "${_grammar.name}"`);
    if (!options.grammarState.themes.includes(theme.name)) throw new ShikiError3(`Grammar state themes "${options.grammarState.themes}" do not contain highlight theme "${theme.name}"`);
  }
  return tokenizeWithTheme(code, _grammar, theme, colorMap, options);
}
function getLastGrammarState(...args) {
  if (args.length === 2) return getLastGrammarStateFromMap(args[1]);
  const [primitive, code, options = {}] = args;
  const { lang = "text", theme: themeName = primitive.getLoadedThemes()[0] } = options;
  if (isPlainLang(lang) || isNoneTheme(themeName)) throw new ShikiError3("Plain language does not have grammar state");
  if (lang === "ansi") throw new ShikiError3("ANSI language does not have grammar state");
  const { theme, colorMap } = primitive.setTheme(themeName);
  const _grammar = primitive.getLanguage(lang);
  return new GrammarState(_tokenizeWithTheme(code, _grammar, theme, colorMap, options).stateStack, _grammar.name, theme.name);
}
function tokenizeWithTheme(code, grammar, theme, colorMap, options) {
  const result = _tokenizeWithTheme(code, grammar, theme, colorMap, options);
  const grammarState = new GrammarState(result.stateStack, grammar.name, theme.name);
  setLastGrammarStateToMap(result.tokens, grammarState);
  return result.tokens;
}
function _tokenizeWithTheme(code, grammar, theme, colorMap, options) {
  const colorReplacements = resolveColorReplacements(theme, options);
  const { tokenizeMaxLineLength = 0, tokenizeTimeLimit = 500 } = options;
  const lines = splitLines(code);
  let stateStack = options.grammarState ? getGrammarStack(options.grammarState, theme.name) ?? INITIAL : options.grammarContextCode != null ? _tokenizeWithTheme(options.grammarContextCode, grammar, theme, colorMap, {
    ...options,
    grammarState: void 0,
    grammarContextCode: void 0
  }).stateStack : INITIAL;
  let actual = [];
  const final = [];
  for (let i2 = 0, len = lines.length; i2 < len; i2++) {
    const [line, lineOffset] = lines[i2];
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
    for (let j2 = 0; j2 < tokensLength; j2++) {
      const startIndex = result.tokens[2 * j2];
      const nextStartIndex = j2 + 1 < tokensLength ? result.tokens[2 * j2 + 2] : line.length;
      if (startIndex === nextStartIndex) continue;
      const metadata = result.tokens[2 * j2 + 1];
      const color = applyColorReplacements(colorMap[EncodedTokenMetadata.getForeground(metadata)], colorReplacements);
      const fontStyle = EncodedTokenMetadata.getFontStyle(metadata);
      const token = {
        content: line.substring(startIndex, nextStartIndex),
        offset: lineOffset + startIndex,
        color,
        fontStyle
      };
      if (options.includeExplanation) {
        const themeSettingsSelectors = [];
        if (options.includeExplanation !== "scopeName") for (const setting of theme.settings) {
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
        token.explanation = [];
        let offset = 0;
        while (startIndex + offset < nextStartIndex) {
          const tokenWithScopes = tokensWithScopes[tokensWithScopesIndex];
          const tokenWithScopesText = line.substring(tokenWithScopes.startIndex, tokenWithScopes.endIndex);
          offset += tokenWithScopesText.length;
          token.explanation.push({
            content: tokenWithScopesText,
            scopes: options.includeExplanation === "scopeName" ? explainThemeScopesNameOnly(tokenWithScopes.scopes) : explainThemeScopesFull(themeSettingsSelectors, tokenWithScopes.scopes)
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
  for (let i2 = 0, len = scopes.length; i2 < len; i2++) {
    const scope = scopes[i2];
    result[i2] = {
      scopeName: scope,
      themeMatches: explainThemeScope(themeSelectors, scope, scopes.slice(0, i2))
    };
  }
  return result;
}
function matchesOne(selector, scope) {
  return selector === scope || scope.substring(0, selector.length) === selector && scope[selector.length] === ".";
}
function matches(selectors, scope, parentScopes) {
  if (!matchesOne(selectors[selectors.length - 1], scope)) return false;
  let selectorParentIndex = selectors.length - 2;
  let parentIndex = parentScopes.length - 1;
  while (selectorParentIndex >= 0 && parentIndex >= 0) {
    if (matchesOne(selectors[selectorParentIndex], parentScopes[parentIndex])) selectorParentIndex -= 1;
    parentIndex -= 1;
  }
  if (selectorParentIndex === -1) return true;
  return false;
}
function explainThemeScope(themeSettingsSelectors, scope, parentScopes) {
  const result = [];
  for (const { selectors, settings } of themeSettingsSelectors) for (const selectorPieces of selectors) if (matches(selectorPieces, scope, parentScopes)) {
    result.push(settings);
    break;
  }
  return result;
}
function codeToTokensWithThemes(primitive, code, options, codeToTokensBaseFn = codeToTokensBase) {
  const themes = Object.entries(options.themes).filter((i2) => i2[1]).map((i2) => ({
    color: i2[0],
    theme: i2[1]
  }));
  const themedTokens = themes.map((t) => {
    const tokens2 = codeToTokensBaseFn(primitive, code, {
      ...options,
      theme: t.theme
    });
    return {
      tokens: tokens2,
      state: getLastGrammarStateFromMap(tokens2),
      theme: typeof t.theme === "string" ? t.theme : t.theme.name
    };
  });
  const tokens = alignThemesTokenization(...themedTokens.map((i2) => i2.tokens));
  const mergedTokens = tokens[0].map((line, lineIdx) => line.map((_token, tokenIdx) => {
    const mergedToken = {
      content: _token.content,
      variants: {},
      offset: _token.offset
    };
    if ("includeExplanation" in options && options.includeExplanation) mergedToken.explanation = _token.explanation;
    tokens.forEach((t, themeIdx) => {
      const { content: _3, explanation: __, offset: ___, ...styles } = t[lineIdx][tokenIdx];
      mergedToken.variants[themes[themeIdx].color] = styles;
    });
    return mergedToken;
  }));
  const mergedGrammarState = themedTokens[0].state ? new GrammarState(Object.fromEntries(themedTokens.map((s2) => {
    var _a2;
    return [s2.theme, (_a2 = s2.state) == null ? void 0 : _a2.getInternalStack(s2.theme)];
  })), themedTokens[0].state.lang) : void 0;
  if (mergedGrammarState) setLastGrammarStateToMap(mergedTokens, mergedGrammarState);
  return mergedTokens;
}
function alignThemesTokenization(...themes) {
  const outThemes = themes.map(() => []);
  const count = themes.length;
  for (let i2 = 0; i2 < themes[0].length; i2++) {
    const lines = themes.map((t) => t[i2]);
    const outLines = outThemes.map(() => []);
    outThemes.forEach((t, i3) => t.push(outLines[i3]));
    const indexes = lines.map(() => 0);
    const current = lines.map((l3) => l3[0]);
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

// ../packages/components/node_modules/@shikijs/core/dist/index.mjs
function addClassToHast(node, className) {
  var _a2;
  if (!className) return node;
  node.properties || (node.properties = {});
  (_a2 = node.properties).class || (_a2.class = []);
  if (typeof node.properties.class === "string") node.properties.class = node.properties.class.split(/\s+/g);
  if (!Array.isArray(node.properties.class)) node.properties.class = [];
  const targets = Array.isArray(className) ? className : className.split(/\s+/g);
  for (const c of targets) if (c && !node.properties.class.includes(c)) node.properties.class.push(c);
  return node;
}
function createPositionConverter(code) {
  const lines = splitLines(code, true).map(([line]) => line);
  function indexToPos(index) {
    if (index === code.length) return {
      line: lines.length - 1,
      character: lines[lines.length - 1].length
    };
    let character = index;
    let line = 0;
    for (const lineText of lines) {
      if (character < lineText.length) break;
      character -= lineText.length;
      line++;
    }
    return {
      line,
      character
    };
  }
  function posToIndex(line, character) {
    let index = 0;
    for (let i2 = 0; i2 < line; i2++) index += lines[i2].length;
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
  for (const match of code.matchAll(/:?lang=["']([^"']+)["']/g)) {
    const lang = match[1].toLowerCase().trim();
    if (lang) langs.add(lang);
  }
  for (const match of code.matchAll(/(?:```|~~~)([\w-]+)/g)) {
    const lang = match[1].toLowerCase().trim();
    if (lang) langs.add(lang);
  }
  for (const match of code.matchAll(/\\begin\{([\w-]+)\}/g)) {
    const lang = match[1].toLowerCase().trim();
    if (lang) langs.add(lang);
  }
  for (const match of code.matchAll(/<script\s+(?:type|lang)=["']([^"']+)["']/gi)) {
    const fullType = match[1].toLowerCase().trim();
    const lang = fullType.includes("/") ? fullType.split("/").pop() : fullType;
    if (lang) langs.add(lang);
  }
  if (!highlighter) return Array.from(langs);
  const bundle = highlighter.getBundledLanguages();
  return Array.from(langs).filter((l3) => l3 && bundle[l3]);
}
var DEFAULT_COLOR_LIGHT_DARK = "light-dark()";
var COLOR_KEYS = ["color", "background-color"];
function splitToken(token, offsets) {
  let lastOffset = 0;
  const tokens = [];
  for (const offset of offsets) {
    if (offset > lastOffset) tokens.push({
      ...token,
      content: token.content.slice(lastOffset, offset),
      offset: token.offset + lastOffset
    });
    lastOffset = offset;
  }
  if (lastOffset < token.content.length) tokens.push({
    ...token,
    content: token.content.slice(lastOffset),
    offset: token.offset + lastOffset
  });
  return tokens;
}
function splitTokens(tokens, breakpoints) {
  const sorted = Array.from(breakpoints instanceof Set ? breakpoints : new Set(breakpoints)).sort((a2, b3) => a2 - b3);
  if (!sorted.length) return tokens;
  return tokens.map((line) => {
    return line.flatMap((token) => {
      const breakpointsInToken = sorted.filter((i2) => token.offset < i2 && i2 < token.offset + token.content.length).map((i2) => i2 - token.offset).sort((a2, b3) => a2 - b3);
      if (!breakpointsInToken.length) return token;
      return splitToken(token, breakpointsInToken);
    });
  });
}
function flatTokenVariants(merged, variantsOrder, cssVariablePrefix, defaultColor, colorsRendering = "css-vars") {
  const token = {
    content: merged.content,
    explanation: merged.explanation,
    offset: merged.offset
  };
  const styles = variantsOrder.map((t) => getTokenStyleObject(merged.variants[t]));
  const styleKeys = new Set(styles.flatMap((t) => Object.keys(t)));
  const mergedStyles = {};
  const varKey = (idx, key) => {
    const keyName = key === "color" ? "" : key === "background-color" ? "-bg" : `-${key}`;
    return cssVariablePrefix + variantsOrder[idx] + (key === "color" ? "" : keyName);
  };
  styles.forEach((cur, idx) => {
    for (const key of styleKeys) {
      const value = cur[key] || "inherit";
      if (idx === 0 && defaultColor && COLOR_KEYS.includes(key)) if (defaultColor === DEFAULT_COLOR_LIGHT_DARK && styles.length > 1) {
        const lightIndex = variantsOrder.findIndex((t) => t === "light");
        const darkIndex = variantsOrder.findIndex((t) => t === "dark");
        if (lightIndex === -1 || darkIndex === -1) throw new ShikiError2('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
        mergedStyles[key] = `light-dark(${styles[lightIndex][key] || "inherit"}, ${styles[darkIndex][key] || "inherit"})`;
        if (colorsRendering === "css-vars") mergedStyles[varKey(idx, key)] = value;
      } else mergedStyles[key] = value;
      else if (colorsRendering === "css-vars") mergedStyles[varKey(idx, key)] = value;
    }
  });
  token.htmlStyle = mergedStyles;
  return token;
}
function getTokenStyleObject(token) {
  const styles = {};
  if (token.color) styles.color = token.color;
  if (token.bgColor) styles["background-color"] = token.bgColor;
  if (token.fontStyle) {
    if (token.fontStyle & FontStyle.Italic) styles["font-style"] = "italic";
    if (token.fontStyle & FontStyle.Bold) styles["font-weight"] = "bold";
    const decorations2 = [];
    if (token.fontStyle & FontStyle.Underline) decorations2.push("underline");
    if (token.fontStyle & FontStyle.Strikethrough) decorations2.push("line-through");
    if (decorations2.length) styles["text-decoration"] = decorations2.join(" ");
  }
  return styles;
}
function stringifyTokenStyle(token) {
  if (typeof token === "string") return token;
  return Object.entries(token).map(([key, value]) => `${key}:${value}`).join(";");
}
function transformerDecorations() {
  const map = /* @__PURE__ */ new WeakMap();
  function getContext(shiki) {
    if (!map.has(shiki.meta)) {
      let normalizePosition = function(p) {
        if (typeof p === "number") {
          if (p < 0 || p > shiki.source.length) throw new ShikiError2(`Invalid decoration offset: ${p}. Code length: ${shiki.source.length}`);
          return {
            ...converter.indexToPos(p),
            offset: p
          };
        } else {
          const line = converter.lines[p.line];
          if (line === void 0) throw new ShikiError2(`Invalid decoration position ${JSON.stringify(p)}. Lines length: ${converter.lines.length}`);
          let character = p.character;
          if (character < 0) character = line.length + character;
          if (character < 0 || character > line.length) throw new ShikiError2(`Invalid decoration position ${JSON.stringify(p)}. Line ${p.line} length: ${line.length}`);
          return {
            ...p,
            character,
            offset: converter.posToIndex(p.line, character)
          };
        }
      };
      const converter = createPositionConverter(shiki.source);
      const decorations2 = (shiki.options.decorations || []).map((d2) => ({
        ...d2,
        start: normalizePosition(d2.start),
        end: normalizePosition(d2.end)
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
      var _a2;
      if (!((_a2 = this.options.decorations) == null ? void 0 : _a2.length)) return;
      return splitTokens(tokens, getContext(this).decorations.flatMap((d2) => [d2.start.offset, d2.end.offset]));
    },
    code(codeEl) {
      var _a2;
      if (!((_a2 = this.options.decorations) == null ? void 0 : _a2.length)) return;
      const ctx = getContext(this);
      const lines = Array.from(codeEl.children).filter((i2) => i2.type === "element" && i2.tagName === "span");
      if (lines.length !== ctx.converter.lines.length) throw new ShikiError2(`Number of lines in code element (${lines.length}) does not match the number of lines in the source (${ctx.converter.lines.length}). Failed to apply decorations.`);
      function applyLineSection(line, start, end, decoration) {
        const lineEl = lines[line];
        let text = "";
        let startIndex = -1;
        let endIndex = -1;
        if (start === 0) startIndex = 0;
        if (end === 0) endIndex = 0;
        if (end === Number.POSITIVE_INFINITY) endIndex = lineEl.children.length;
        if (startIndex === -1 || endIndex === -1) for (let i2 = 0; i2 < lineEl.children.length; i2++) {
          text += stringify(lineEl.children[i2]);
          if (startIndex === -1 && text.length === start) startIndex = i2 + 1;
          if (endIndex === -1 && text.length === end) endIndex = i2 + 1;
        }
        if (startIndex === -1) throw new ShikiError2(`Failed to find start index for decoration ${JSON.stringify(decoration.start)}`);
        if (endIndex === -1) throw new ShikiError2(`Failed to find end index for decoration ${JSON.stringify(decoration.end)}`);
        const children = lineEl.children.slice(startIndex, endIndex);
        if (!decoration.alwaysWrap && children.length === lineEl.children.length) applyDecoration(lineEl, decoration, "line");
        else if (!decoration.alwaysWrap && children.length === 1 && children[0].type === "element") applyDecoration(children[0], decoration, "token");
        else {
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
        var _a3;
        const properties = decoration.properties || {};
        const transform2 = decoration.transform || ((i2) => i2);
        el.tagName = decoration.tagName || "span";
        el.properties = {
          ...el.properties,
          ...properties,
          class: el.properties.class
        };
        if ((_a3 = decoration.properties) == null ? void 0 : _a3.class) addClassToHast(el, decoration.properties.class);
        el = transform2(el, type) || el;
        return el;
      }
      const lineApplies = [];
      const sorted = ctx.decorations.sort((a2, b3) => b3.start.offset - a2.start.offset || a2.end.offset - b3.end.offset);
      for (const decoration of sorted) {
        const { start, end } = decoration;
        if (start.line === end.line) applyLineSection(start.line, start.character, end.character, decoration);
        else if (start.line < end.line) {
          applyLineSection(start.line, start.character, Number.POSITIVE_INFINITY, decoration);
          for (let i2 = start.line + 1; i2 < end.line; i2++) lineApplies.unshift(() => applyLine(i2, decoration));
          applyLineSection(end.line, 0, end.character, decoration);
        }
      }
      lineApplies.forEach((i2) => i2());
    }
  };
}
function verifyIntersections(items) {
  for (let i2 = 0; i2 < items.length; i2++) {
    const foo = items[i2];
    if (foo.start.offset > foo.end.offset) throw new ShikiError2(`Invalid decoration range: ${JSON.stringify(foo.start)} - ${JSON.stringify(foo.end)}`);
    for (let j2 = i2 + 1; j2 < items.length; j2++) {
      const bar = items[j2];
      const isFooHasBarStart = foo.start.offset <= bar.start.offset && bar.start.offset < foo.end.offset;
      const isFooHasBarEnd = foo.start.offset < bar.end.offset && bar.end.offset <= foo.end.offset;
      const isBarHasFooStart = bar.start.offset <= foo.start.offset && foo.start.offset < bar.end.offset;
      const isBarHasFooEnd = bar.start.offset < foo.end.offset && foo.end.offset <= bar.end.offset;
      if (isFooHasBarStart || isFooHasBarEnd || isBarHasFooStart || isBarHasFooEnd) {
        if (isFooHasBarStart && isFooHasBarEnd) continue;
        if (isBarHasFooStart && isBarHasFooEnd) continue;
        if (isBarHasFooStart && foo.start.offset === foo.end.offset) continue;
        if (isFooHasBarEnd && bar.start.offset === bar.end.offset) continue;
        throw new ShikiError2(`Decorations ${JSON.stringify(foo.start)} and ${JSON.stringify(bar.start)} intersect.`);
      }
    }
  }
}
function stringify(el) {
  if (el.type === "text") return el.value;
  if (el.type === "element") return el.children.map(stringify).join("");
  return "";
}
var builtInTransformers = [transformerDecorations()];
function getTransformers(options) {
  const transformers = sortTransformersByEnforcement(options.transformers || []);
  return [
    ...transformers.pre,
    ...transformers.normal,
    ...transformers.post,
    ...builtInTransformers
  ];
}
function sortTransformersByEnforcement(transformers) {
  const pre = [];
  const post = [];
  const normal = [];
  for (const transformer of transformers) switch (transformer.enforce) {
    case "pre":
      pre.push(transformer);
      break;
    case "post":
      post.push(transformer);
      break;
    default:
      normal.push(transformer);
  }
  return {
    pre,
    post,
    normal
  };
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
      if (nextClose !== -1) return {
        sequence: value.substring(nextEscape + 2, nextClose).split(";"),
        startPosition: nextEscape,
        position: nextClose + 1
      };
    }
  }
  return { position: value.length };
}
function parseColor(sequence) {
  const colorMode = sequence.shift();
  if (colorMode === "2") {
    const rgb = sequence.splice(0, 3).map((x3) => Number.parseInt(x3));
    if (rgb.length !== 3 || rgb.some((x3) => Number.isNaN(x3))) return;
    return {
      type: "rgb",
      rgb
    };
  } else if (colorMode === "5") {
    const index = sequence.shift();
    if (index) return {
      type: "table",
      index: Number(index)
    };
  }
}
function parseSequence(sequence) {
  const commands = [];
  while (sequence.length > 0) {
    const code = sequence.shift();
    if (!code) continue;
    const codeInt = Number.parseInt(code);
    if (Number.isNaN(codeInt)) continue;
    if (codeInt === 0) commands.push({ type: "resetAll" });
    else if (codeInt <= 9) {
      if (decorations[codeInt]) commands.push({
        type: "setDecoration",
        value: decorations[codeInt]
      });
    } else if (codeInt <= 29) {
      const decoration = decorations[codeInt - 20];
      if (decoration) {
        commands.push({
          type: "resetDecoration",
          value: decoration
        });
        if (decoration === "dim") commands.push({
          type: "resetDecoration",
          value: "bold"
        });
      }
    } else if (codeInt <= 37) commands.push({
      type: "setForegroundColor",
      value: {
        type: "named",
        name: namedColors[codeInt - 30]
      }
    });
    else if (codeInt === 38) {
      const color = parseColor(sequence);
      if (color) commands.push({
        type: "setForegroundColor",
        value: color
      });
    } else if (codeInt === 39) commands.push({ type: "resetForegroundColor" });
    else if (codeInt <= 47) commands.push({
      type: "setBackgroundColor",
      value: {
        type: "named",
        name: namedColors[codeInt - 40]
      }
    });
    else if (codeInt === 48) {
      const color = parseColor(sequence);
      if (color) commands.push({
        type: "setBackgroundColor",
        value: color
      });
    } else if (codeInt === 49) commands.push({ type: "resetBackgroundColor" });
    else if (codeInt === 53) commands.push({
      type: "setDecoration",
      value: "overline"
    });
    else if (codeInt === 55) commands.push({
      type: "resetDecoration",
      value: "overline"
    });
    else if (codeInt >= 90 && codeInt <= 97) commands.push({
      type: "setForegroundColor",
      value: {
        type: "named",
        name: namedColors[codeInt - 90 + 8]
      }
    });
    else if (codeInt >= 100 && codeInt <= 107) commands.push({
      type: "setBackgroundColor",
      value: {
        type: "named",
        name: namedColors[codeInt - 100 + 8]
      }
    });
  }
  return commands;
}
function createAnsiSequenceParser() {
  let foreground = null;
  let background = null;
  let decorations2 = /* @__PURE__ */ new Set();
  return { parse(value) {
    const tokens = [];
    let position = 0;
    do {
      const findResult = findSequence(value, position);
      const text = findResult.sequence ? value.substring(position, findResult.startPosition) : value.substring(position);
      if (text.length > 0) tokens.push({
        value: text,
        foreground,
        background,
        decorations: new Set(decorations2)
      });
      if (findResult.sequence) {
        const commands = parseSequence(findResult.sequence);
        for (const styleToken of commands) if (styleToken.type === "resetAll") {
          foreground = null;
          background = null;
          decorations2.clear();
        } else if (styleToken.type === "resetForegroundColor") foreground = null;
        else if (styleToken.type === "resetBackgroundColor") background = null;
        else if (styleToken.type === "resetDecoration") decorations2.delete(styleToken.value);
        for (const styleToken of commands) if (styleToken.type === "setForegroundColor") foreground = styleToken.value;
        else if (styleToken.type === "setBackgroundColor") background = styleToken.value;
        else if (styleToken.type === "setDecoration") decorations2.add(styleToken.value);
      }
      position = findResult.position;
    } while (position < value.length);
    return tokens;
  } };
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
    return `#${rgb.map((x3) => Math.max(0, Math.min(x3, 255)).toString(16).padStart(2, "0")).join("")}`;
  }
  let colorTable;
  function getColorTable() {
    if (colorTable) return colorTable;
    colorTable = [];
    for (let i2 = 0; i2 < namedColors.length; i2++) colorTable.push(namedColor(namedColors[i2]));
    let levels = [
      0,
      95,
      135,
      175,
      215,
      255
    ];
    for (let r3 = 0; r3 < 6; r3++) for (let g = 0; g < 6; g++) for (let b3 = 0; b3 < 6; b3++) colorTable.push(rgbColor([
      levels[r3],
      levels[g],
      levels[b3]
    ]));
    let level = 8;
    for (let i2 = 0; i2 < 24; i2++, level += 10) colorTable.push(rgbColor([
      level,
      level,
      level
    ]));
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
  return { value };
}
var defaultAnsiColors = {
  black: "#000000",
  red: "#cd3131",
  green: "#0DBC79",
  yellow: "#E5E510",
  blue: "#2472C8",
  magenta: "#BC3FBC",
  cyan: "#11A8CD",
  white: "#E5E5E5",
  brightBlack: "#666666",
  brightRed: "#F14C4C",
  brightGreen: "#23D18B",
  brightYellow: "#F5F543",
  brightBlue: "#3B8EEA",
  brightMagenta: "#D670D6",
  brightCyan: "#29B8DB",
  brightWhite: "#FFFFFF"
};
function tokenizeAnsiWithTheme(theme, fileContents, options) {
  const colorReplacements = resolveColorReplacements(theme, options);
  const lines = splitLines(fileContents);
  const colorPalette = createColorPalette(Object.fromEntries(namedColors.map((name) => {
    var _a2;
    const key = `terminal.ansi${name[0].toUpperCase()}${name.substring(1)}`;
    return [name, ((_a2 = theme.colors) == null ? void 0 : _a2[key]) || defaultAnsiColors[name]];
  })));
  const parser = createAnsiSequenceParser();
  return lines.map((line) => parser.parse(line[0]).map((token) => {
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
    if (token.decorations.has("dim")) color = dimColor(color);
    let fontStyle = FontStyle.None;
    if (token.decorations.has("bold")) fontStyle |= FontStyle.Bold;
    if (token.decorations.has("italic")) fontStyle |= FontStyle.Italic;
    if (token.decorations.has("underline")) fontStyle |= FontStyle.Underline;
    if (token.decorations.has("strikethrough")) fontStyle |= FontStyle.Strikethrough;
    return {
      content: token.value,
      offset: line[1],
      color,
      bgColor,
      fontStyle
    };
  }));
}
function dimColor(color) {
  const hexMatch = color.match(/#([0-9a-f]{3,8})/i);
  if (hexMatch) {
    const hex = hexMatch[1];
    if (hex.length === 8) {
      const alpha = Math.round(Number.parseInt(hex.slice(6, 8), 16) / 2).toString(16).padStart(2, "0");
      return `#${hex.slice(0, 6)}${alpha}`;
    } else if (hex.length === 6) return `#${hex}80`;
    else if (hex.length === 4) {
      const r3 = hex[0];
      const g = hex[1];
      const b3 = hex[2];
      const a2 = hex[3];
      return `#${r3}${r3}${g}${g}${b3}${b3}${Math.round(Number.parseInt(`${a2}${a2}`, 16) / 2).toString(16).padStart(2, "0")}`;
    } else if (hex.length === 3) {
      const r3 = hex[0];
      const g = hex[1];
      const b3 = hex[2];
      return `#${r3}${r3}${g}${g}${b3}${b3}80`;
    }
  }
  const cssVarMatch = color.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);
  if (cssVarMatch) return `var(${cssVarMatch[1]}-dim)`;
  return color;
}
function codeToTokensBase2(primitive, code, options = {}) {
  const lang = primitive.resolveLangAlias(options.lang || "text");
  const { theme: themeName = primitive.getLoadedThemes()[0] } = options;
  if (!isPlainLang(lang) && !isNoneTheme(themeName) && lang === "ansi") {
    const { theme } = primitive.setTheme(themeName);
    return tokenizeAnsiWithTheme(theme, code, options);
  }
  return codeToTokensBase(primitive, code, options);
}
function codeToTokens(primitive, code, options) {
  let bg;
  let fg;
  let tokens;
  let themeName;
  let rootStyle;
  let grammarState;
  if ("themes" in options) {
    const { defaultColor = "light", cssVariablePrefix = "--shiki-", colorsRendering = "css-vars" } = options;
    const themes = Object.entries(options.themes).filter((i2) => i2[1]).map((i2) => ({
      color: i2[0],
      theme: i2[1]
    })).sort((a2, b3) => a2.color === defaultColor ? -1 : b3.color === defaultColor ? 1 : 0);
    if (themes.length === 0) throw new ShikiError2("`themes` option must not be empty");
    const themeTokens = codeToTokensWithThemes(primitive, code, options, codeToTokensBase2);
    grammarState = getLastGrammarStateFromMap(themeTokens);
    if (defaultColor && DEFAULT_COLOR_LIGHT_DARK !== defaultColor && !themes.find((t) => t.color === defaultColor)) throw new ShikiError2(`\`themes\` option must contain the defaultColor key \`${defaultColor}\``);
    const themeRegs = themes.map((t) => primitive.getTheme(t.theme));
    const themesOrder = themes.map((t) => t.color);
    tokens = themeTokens.map((line) => line.map((token) => flatTokenVariants(token, themesOrder, cssVariablePrefix, defaultColor, colorsRendering)));
    if (grammarState) setLastGrammarStateToMap(tokens, grammarState);
    const themeColorReplacements = themes.map((t) => resolveColorReplacements(t.theme, options));
    fg = mapThemeColors(themes, themeRegs, themeColorReplacements, cssVariablePrefix, defaultColor, "fg", colorsRendering);
    bg = mapThemeColors(themes, themeRegs, themeColorReplacements, cssVariablePrefix, defaultColor, "bg", colorsRendering);
    themeName = `shiki-themes ${themeRegs.map((t) => t.name).join(" ")}`;
    rootStyle = defaultColor ? void 0 : [fg, bg].join(";");
  } else if ("theme" in options) {
    const colorReplacements = resolveColorReplacements(options.theme, options);
    tokens = codeToTokensBase2(primitive, code, options);
    const _theme = primitive.getTheme(options.theme);
    bg = applyColorReplacements(_theme.bg, colorReplacements);
    fg = applyColorReplacements(_theme.fg, colorReplacements);
    themeName = _theme.name;
    grammarState = getLastGrammarStateFromMap(tokens);
  } else throw new ShikiError2("Invalid options, either `theme` or `themes` must be provided");
  return {
    tokens,
    fg,
    bg,
    themeName,
    rootStyle,
    grammarState
  };
}
function mapThemeColors(themes, themeRegs, themeColorReplacements, cssVariablePrefix, defaultColor, property, colorsRendering) {
  return themes.map((t, idx) => {
    const value = applyColorReplacements(themeRegs[idx][property], themeColorReplacements[idx]) || "inherit";
    const cssVar = `${cssVariablePrefix + t.color}${property === "bg" ? "-bg" : ""}:${value}`;
    if (idx === 0 && defaultColor) {
      if (defaultColor === DEFAULT_COLOR_LIGHT_DARK && themes.length > 1) {
        const lightIndex = themes.findIndex((t2) => t2.color === "light");
        const darkIndex = themes.findIndex((t2) => t2.color === "dark");
        if (lightIndex === -1 || darkIndex === -1) throw new ShikiError2('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
        return `light-dark(${applyColorReplacements(themeRegs[lightIndex][property], themeColorReplacements[lightIndex]) || "inherit"}, ${applyColorReplacements(themeRegs[darkIndex][property], themeColorReplacements[darkIndex]) || "inherit"});${cssVar}`;
      }
      return value;
    }
    if (colorsRendering === "css-vars") return cssVar;
    return null;
  }).filter((i2) => !!i2).join(";");
}
function codeToHast(primitive, code, options, transformerContext = {
  meta: {},
  options,
  codeToHast: (_code, _options) => codeToHast(primitive, _code, _options),
  codeToTokens: (_code, _options) => codeToTokens(primitive, _code, _options)
}) {
  var _a2, _b;
  let input = code;
  for (const transformer of getTransformers(options)) input = ((_a2 = transformer.preprocess) == null ? void 0 : _a2.call(transformerContext, input, options)) || input;
  let { tokens, fg, bg, themeName, rootStyle, grammarState } = codeToTokens(primitive, input, options);
  const { mergeWhitespaces = true, mergeSameStyleTokens = false } = options;
  if (mergeWhitespaces === true) tokens = mergeWhitespaceTokens(tokens);
  else if (mergeWhitespaces === "never") tokens = splitWhitespaceTokens(tokens);
  if (mergeSameStyleTokens) tokens = mergeAdjacentStyledTokens(tokens);
  const contextSource = {
    ...transformerContext,
    get source() {
      return input;
    }
  };
  for (const transformer of getTransformers(options)) tokens = ((_b = transformer.tokens) == null ? void 0 : _b.call(contextSource, tokens)) || tokens;
  return tokensToHast(tokens, {
    ...options,
    fg,
    bg,
    themeName,
    rootStyle: options.rootStyle === false ? false : options.rootStyle ?? rootStyle
  }, contextSource, grammarState);
}
function tokensToHast(tokens, options, transformerContext, grammarState = getLastGrammarStateFromMap(tokens)) {
  var _a2, _b, _c, _d;
  const transformers = getTransformers(options);
  const lines = [];
  const root = {
    type: "root",
    children: []
  };
  const { structure = "classic", tabindex = "0" } = options;
  const properties = { class: `shiki ${options.themeName || ""}` };
  if (options.rootStyle !== false) if (options.rootStyle != null) properties.style = options.rootStyle;
  else properties.style = `background-color:${options.bg};color:${options.fg}`;
  if (tabindex !== false && tabindex != null) properties.tabindex = tabindex.toString();
  for (const [key, value] of Object.entries(options.meta || {})) if (!key.startsWith("_")) properties[key] = value;
  let preNode = {
    type: "element",
    tagName: "pre",
    properties,
    children: [],
    data: options.data
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
    var _a3, _b2;
    if (idx) {
      if (structure === "inline") root.children.push({
        type: "element",
        tagName: "br",
        properties: {},
        children: []
      });
      else if (structure === "classic") lines.push({
        type: "text",
        value: "\n"
      });
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
        properties: { ...token.htmlAttrs },
        children: [{
          type: "text",
          value: token.content
        }]
      };
      const style = stringifyTokenStyle(token.htmlStyle || getTokenStyleObject(token));
      if (style) tokenNode.properties.style = style;
      for (const transformer of transformers) tokenNode = ((_a3 = transformer == null ? void 0 : transformer.span) == null ? void 0 : _a3.call(context, tokenNode, idx + 1, col, lineNode, token)) || tokenNode;
      if (structure === "inline") root.children.push(tokenNode);
      else if (structure === "classic") lineNode.children.push(tokenNode);
      col += token.content.length;
    }
    if (structure === "classic") {
      for (const transformer of transformers) lineNode = ((_b2 = transformer == null ? void 0 : transformer.line) == null ? void 0 : _b2.call(context, lineNode, idx + 1)) || lineNode;
      lineNodes.push(lineNode);
      lines.push(lineNode);
    } else if (structure === "inline") lineNodes.push(lineNode);
  });
  if (structure === "classic") {
    for (const transformer of transformers) codeNode = ((_a2 = transformer == null ? void 0 : transformer.code) == null ? void 0 : _a2.call(context, codeNode)) || codeNode;
    preNode.children.push(codeNode);
    for (const transformer of transformers) preNode = ((_b = transformer == null ? void 0 : transformer.pre) == null ? void 0 : _b.call(context, preNode)) || preNode;
    root.children.push(preNode);
  } else if (structure === "inline") {
    const syntheticLines = [];
    let currentLine = {
      type: "element",
      tagName: "span",
      properties: { class: "line" },
      children: []
    };
    for (const child of root.children) if (child.type === "element" && child.tagName === "br") {
      syntheticLines.push(currentLine);
      currentLine = {
        type: "element",
        tagName: "span",
        properties: { class: "line" },
        children: []
      };
    } else if (child.type === "element" || child.type === "text") currentLine.children.push(child);
    syntheticLines.push(currentLine);
    let transformedCode = {
      type: "element",
      tagName: "code",
      properties: {},
      children: syntheticLines
    };
    for (const transformer of transformers) transformedCode = ((_c = transformer == null ? void 0 : transformer.code) == null ? void 0 : _c.call(context, transformedCode)) || transformedCode;
    root.children = [];
    for (let i2 = 0; i2 < transformedCode.children.length; i2++) {
      if (i2 > 0) root.children.push({
        type: "element",
        tagName: "br",
        properties: {},
        children: []
      });
      const line = transformedCode.children[i2];
      if (line.type === "element") root.children.push(...line.children);
    }
  }
  let result = root;
  for (const transformer of transformers) result = ((_d = transformer == null ? void 0 : transformer.root) == null ? void 0 : _d.call(context, result)) || result;
  if (grammarState) setLastGrammarStateToMap(result, grammarState);
  return result;
}
function mergeWhitespaceTokens(tokens) {
  return tokens.map((line) => {
    const newLine = [];
    let carryOnContent = "";
    let firstOffset;
    line.forEach((token, idx) => {
      const couldMerge = !(token.fontStyle && (token.fontStyle & FontStyle.Underline || token.fontStyle & FontStyle.Strikethrough));
      if (couldMerge && token.content.match(/^\s+$/) && line[idx + 1]) {
        if (firstOffset === void 0) firstOffset = token.offset;
        carryOnContent += token.content;
      } else if (carryOnContent) {
        if (couldMerge) newLine.push({
          ...token,
          offset: firstOffset,
          content: carryOnContent + token.content
        });
        else newLine.push({
          content: carryOnContent,
          offset: firstOffset
        }, token);
        firstOffset = void 0;
        carryOnContent = "";
      } else newLine.push(token);
    });
    return newLine;
  });
}
function splitWhitespaceTokens(tokens) {
  return tokens.map((line) => {
    return line.flatMap((token) => {
      if (token.content.match(/^\s+$/)) return token;
      const match = token.content.match(/^(\s*)(.*?)(\s*)$/);
      if (!match) return token;
      const [, leading, content, trailing] = match;
      if (!leading && !trailing) return token;
      const expanded = [{
        ...token,
        offset: token.offset + leading.length,
        content
      }];
      if (leading) expanded.unshift({
        content: leading,
        offset: token.offset
      });
      if (trailing) expanded.push({
        content: trailing,
        offset: token.offset + leading.length + content.length
      });
      return expanded;
    });
  });
}
function mergeAdjacentStyledTokens(tokens) {
  return tokens.map((line) => {
    const newLine = [];
    for (const token of line) {
      if (newLine.length === 0) {
        newLine.push({ ...token });
        continue;
      }
      const prevToken = newLine[newLine.length - 1];
      const prevStyle = stringifyTokenStyle(prevToken.htmlStyle || getTokenStyleObject(prevToken));
      const currentStyle = stringifyTokenStyle(token.htmlStyle || getTokenStyleObject(token));
      const isPrevDecorated = prevToken.fontStyle && (prevToken.fontStyle & FontStyle.Underline || prevToken.fontStyle & FontStyle.Strikethrough);
      const isDecorated = token.fontStyle && (token.fontStyle & FontStyle.Underline || token.fontStyle & FontStyle.Strikethrough);
      if (!isPrevDecorated && !isDecorated && prevStyle === currentStyle) prevToken.content += token.content;
      else newLine.push({ ...token });
    }
    return newLine;
  });
}
var hastToHtml = toHtml;
function codeToHtml(primitive, code, options) {
  var _a2;
  const context = {
    meta: {},
    options,
    codeToHast: (_code, _options) => codeToHast(primitive, _code, _options),
    codeToTokens: (_code, _options) => codeToTokens(primitive, _code, _options)
  };
  let result = hastToHtml(codeToHast(primitive, code, options, context));
  for (const transformer of getTransformers(options)) result = ((_a2 = transformer.postprocess) == null ? void 0 : _a2.call(context, result, options)) || result;
  return result;
}
async function createHighlighterCore(options) {
  const primitive = await createShikiPrimitiveAsync(options);
  return {
    getLastGrammarState: (...args) => getLastGrammarState(primitive, ...args),
    codeToTokensBase: (code, options2) => codeToTokensBase2(primitive, code, options2),
    codeToTokensWithThemes: (code, options2) => codeToTokensWithThemes(primitive, code, options2),
    codeToTokens: (code, options2) => codeToTokens(primitive, code, options2),
    codeToHast: (code, options2) => codeToHast(primitive, code, options2),
    codeToHtml: (code, options2) => codeToHtml(primitive, code, options2),
    getBundledLanguages: () => ({}),
    getBundledThemes: () => ({}),
    ...primitive,
    getInternalContext: () => primitive
  };
}
function createHighlighterCoreSync(options) {
  const internal = createShikiPrimitive(options);
  return {
    getLastGrammarState: (...args) => getLastGrammarState(internal, ...args),
    codeToTokensBase: (code, options2) => codeToTokensBase2(internal, code, options2),
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
      const s2 = await _shiki;
      await Promise.all([s2.loadTheme(...options.themes || []), s2.loadLanguage(...options.langs || [])]);
      return s2;
    }
  }
  return getSingletonHighlighterCore2;
}
var getSingletonHighlighterCore = makeSingletonHighlighterCore(createHighlighterCore);
function createBundledHighlighter(options) {
  const bundledLanguages2 = options.langs;
  const bundledThemes2 = options.themes;
  const engine = options.engine;
  async function createHighlighter2(options2) {
    function resolveLang(lang) {
      var _a2;
      if (typeof lang === "string") {
        lang = ((_a2 = options2.langAlias) == null ? void 0 : _a2[lang]) || lang;
        if (isSpecialLang(lang)) return [];
        const bundle = bundledLanguages2[lang];
        if (!bundle) throw new ShikiError2(`Language \`${lang}\` is not included in this bundle. You may want to load it from external source.`);
        return bundle;
      }
      return lang;
    }
    function resolveTheme(theme) {
      if (isSpecialTheme(theme)) return "none";
      if (typeof theme === "string") {
        const bundle = bundledThemes2[theme];
        if (!bundle) throw new ShikiError2(`Theme \`${theme}\` is not included in this bundle. You may want to load it from external source.`);
        return bundle;
      }
      return theme;
    }
    const _themes = (options2.themes ?? []).map((i2) => resolveTheme(i2));
    const langs = (options2.langs ?? []).map((i2) => resolveLang(i2));
    const core = await createHighlighterCore({
      engine: options2.engine ?? engine(),
      ...options2,
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
        themes: [],
        langs: []
      });
      const s2 = await _shiki;
      await Promise.all([s2.loadTheme(...options.themes || []), s2.loadLanguage(...options.langs || [])]);
      return s2;
    } else {
      const s2 = await _shiki;
      await Promise.all([s2.loadTheme(...options.themes || []), s2.loadLanguage(...options.langs || [])]);
      return s2;
    }
  }
  return getSingletonHighlighter2;
}
function createSingletonShorthands(createHighlighter2, config) {
  const getSingletonHighlighter2 = makeSingletonHighlighter(createHighlighter2);
  async function get(code, options) {
    var _a2;
    const shiki = await getSingletonHighlighter2({
      langs: [options.lang],
      themes: "theme" in options ? [options.theme] : Object.values(options.themes)
    });
    const langs = await ((_a2 = config == null ? void 0 : config.guessEmbeddedLanguages) == null ? void 0 : _a2.call(config, code, options.lang, shiki));
    if (langs) await shiki.loadLanguage(...langs);
    return shiki;
  }
  return {
    getSingletonHighlighter(options) {
      return getSingletonHighlighter2(options);
    },
    async codeToHtml(code, options) {
      return (await get(code, options)).codeToHtml(code, options);
    },
    async codeToHast(code, options) {
      return (await get(code, options)).codeToHast(code, options);
    },
    async codeToTokens(code, options) {
      return (await get(code, options)).codeToTokens(code, options);
    },
    async codeToTokensBase(code, options) {
      return (await get(code, options)).codeToTokensBase(code, options);
    },
    async codeToTokensWithThemes(code, options) {
      return (await get(code, options)).codeToTokensWithThemes(code, options);
    },
    async getLastGrammarState(code, options) {
      return (await getSingletonHighlighter2({
        langs: [options.lang],
        themes: [options.theme]
      })).getLastGrammarState(code, options);
    }
  };
}
function createCssVariablesTheme(options = {}) {
  var _a2;
  const { name = "css-variables", variablePrefix = "--shiki-", fontStyle = true } = options;
  const variable = (name2) => {
    var _a3;
    if ((_a3 = options.variableDefaults) == null ? void 0 : _a3[name2]) return `var(${variablePrefix}${name2}, ${options.variableDefaults[name2]})`;
    return `var(${variablePrefix}${name2})`;
  };
  const theme = {
    name,
    type: "dark",
    colors: {
      "editor.foreground": variable("foreground"),
      "editor.background": variable("background"),
      "terminal.ansiBlack": variable("ansi-black"),
      "terminal.ansiRed": variable("ansi-red"),
      "terminal.ansiGreen": variable("ansi-green"),
      "terminal.ansiYellow": variable("ansi-yellow"),
      "terminal.ansiBlue": variable("ansi-blue"),
      "terminal.ansiMagenta": variable("ansi-magenta"),
      "terminal.ansiCyan": variable("ansi-cyan"),
      "terminal.ansiWhite": variable("ansi-white"),
      "terminal.ansiBrightBlack": variable("ansi-bright-black"),
      "terminal.ansiBrightRed": variable("ansi-bright-red"),
      "terminal.ansiBrightGreen": variable("ansi-bright-green"),
      "terminal.ansiBrightYellow": variable("ansi-bright-yellow"),
      "terminal.ansiBrightBlue": variable("ansi-bright-blue"),
      "terminal.ansiBrightMagenta": variable("ansi-bright-magenta"),
      "terminal.ansiBrightCyan": variable("ansi-bright-cyan"),
      "terminal.ansiBrightWhite": variable("ansi-bright-white")
    },
    tokenColors: [
      {
        scope: [
          "keyword.operator.accessor",
          "meta.group.braces.round.function.arguments",
          "meta.template.expression",
          "markup.fenced_code meta.embedded.block"
        ],
        settings: { foreground: variable("foreground") }
      },
      {
        scope: "emphasis",
        settings: { fontStyle: "italic" }
      },
      {
        scope: [
          "strong",
          "markup.heading.markdown",
          "markup.bold.markdown"
        ],
        settings: { fontStyle: "bold" }
      },
      {
        scope: ["markup.italic.markdown"],
        settings: { fontStyle: "italic" }
      },
      {
        scope: "meta.link.inline.markdown",
        settings: {
          fontStyle: "underline",
          foreground: variable("token-link")
        }
      },
      {
        scope: [
          "string",
          "markup.fenced_code",
          "markup.inline"
        ],
        settings: { foreground: variable("token-string") }
      },
      {
        scope: ["comment", "string.quoted.docstring.multi"],
        settings: { foreground: variable("token-comment") }
      },
      {
        scope: [
          "constant.numeric",
          "constant.language",
          "constant.other.placeholder",
          "constant.character.format.placeholder",
          "variable.language.this",
          "variable.other.object",
          "variable.other.class",
          "variable.other.constant",
          "meta.property-name",
          "meta.property-value",
          "support"
        ],
        settings: { foreground: variable("token-constant") }
      },
      {
        scope: [
          "keyword",
          "storage.modifier",
          "storage.type",
          "storage.control.clojure",
          "entity.name.function.clojure",
          "entity.name.tag.yaml",
          "support.function.node",
          "support.type.property-name.json",
          "punctuation.separator.key-value",
          "punctuation.definition.template-expression"
        ],
        settings: { foreground: variable("token-keyword") }
      },
      {
        scope: "variable.parameter.function",
        settings: { foreground: variable("token-parameter") }
      },
      {
        scope: [
          "support.function",
          "entity.name.type",
          "entity.other.inherited-class",
          "meta.function-call",
          "meta.instance.constructor",
          "entity.other.attribute-name",
          "entity.name.function",
          "constant.keyword.clojure"
        ],
        settings: { foreground: variable("token-function") }
      },
      {
        scope: [
          "entity.name.tag",
          "string.quoted",
          "string.regexp",
          "string.interpolated",
          "string.template",
          "string.unquoted.plain.out.yaml",
          "keyword.other.template"
        ],
        settings: { foreground: variable("token-string-expression") }
      },
      {
        scope: [
          "punctuation.definition.arguments",
          "punctuation.definition.dict",
          "punctuation.separator",
          "meta.function-call.arguments"
        ],
        settings: { foreground: variable("token-punctuation") }
      },
      {
        scope: ["markup.underline.link", "punctuation.definition.metadata.markdown"],
        settings: { foreground: variable("token-link") }
      },
      {
        scope: ["beginning.punctuation.definition.list.markdown"],
        settings: { foreground: variable("token-string") }
      },
      {
        scope: [
          "punctuation.definition.string.begin.markdown",
          "punctuation.definition.string.end.markdown",
          "string.other.link.title.markdown",
          "string.other.link.description.markdown"
        ],
        settings: { foreground: variable("token-keyword") }
      },
      {
        scope: [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted"
        ],
        settings: { foreground: variable("token-inserted") }
      },
      {
        scope: [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted"
        ],
        settings: { foreground: variable("token-deleted") }
      },
      {
        scope: ["markup.changed", "punctuation.definition.changed"],
        settings: { foreground: variable("token-changed") }
      }
    ]
  };
  if (!fontStyle) theme.tokenColors = (_a2 = theme.tokenColors) == null ? void 0 : _a2.map((tokenColor) => {
    var _a3;
    if ((_a3 = tokenColor.settings) == null ? void 0 : _a3.fontStyle) delete tokenColor.settings.fontStyle;
    return tokenColor;
  });
  return theme;
}

// ../packages/components/node_modules/shiki/dist/bundle-full.mjs
var bundle_full_exports = __exportAll({
  bundledLanguages: () => bundledLanguages,
  bundledLanguagesAlias: () => bundledLanguagesAlias,
  bundledLanguagesBase: () => bundledLanguagesBase,
  bundledLanguagesInfo: () => bundledLanguagesInfo,
  bundledThemes: () => bundledThemes,
  bundledThemesInfo: () => bundledThemesInfo,
  codeToHast: () => codeToHast2,
  codeToHtml: () => codeToHtml2,
  codeToTokens: () => codeToTokens2,
  codeToTokensBase: () => codeToTokensBase3,
  codeToTokensWithThemes: () => codeToTokensWithThemes2,
  createHighlighter: () => createHighlighter,
  getLastGrammarState: () => getLastGrammarState2,
  getSingletonHighlighter: () => getSingletonHighlighter
});
var createHighlighter = createBundledHighlighter({
  langs: bundledLanguages,
  themes: bundledThemes,
  engine: () => (0, engine_oniguruma_exports.createOnigurumaEngine)(import("./wasm-D6YS65OI.js"))
});
var { codeToHtml: codeToHtml2, codeToHast: codeToHast2, codeToTokens: codeToTokens2, codeToTokensBase: codeToTokensBase3, codeToTokensWithThemes: codeToTokensWithThemes2, getSingletonHighlighter, getLastGrammarState: getLastGrammarState2 } = createSingletonShorthands(createHighlighter, { guessEmbeddedLanguages });

// ../packages/components/node_modules/@shikijs/engine-javascript/dist/scanner-BFcBmQR1.mjs
var MAX = 4294967295;
var JavaScriptScanner = class {
  constructor(patterns, options = {}) {
    __publicField(this, "regexps");
    this.patterns = patterns;
    this.options = options;
    const { forgiving = false, cache, regexConstructor } = options;
    if (!regexConstructor) throw new Error("Option `regexConstructor` is not provided");
    this.regexps = patterns.map((p) => {
      if (typeof p !== "string") return p;
      const cached = cache == null ? void 0 : cache.get(p);
      if (cached) {
        if (cached instanceof RegExp) return cached;
        if (forgiving) return null;
        throw cached;
      }
      try {
        const regex = regexConstructor(p);
        cache == null ? void 0 : cache.set(p, regex);
        return regex;
      } catch (e) {
        cache == null ? void 0 : cache.set(p, e);
        if (forgiving) return null;
        throw e;
      }
    });
  }
  findNextMatchSync(string, startPosition, _options) {
    const str = typeof string === "string" ? string : string.content;
    const pending = [];
    function toResult(index, match, offset = 0) {
      return {
        index,
        captureIndices: match.indices.map((indice) => {
          if (indice == null) return {
            start: MAX,
            end: MAX,
            length: 0
          };
          return {
            start: indice[0] + offset,
            end: indice[1] + offset,
            length: indice[1] - indice[0]
          };
        })
      };
    }
    for (let i2 = 0; i2 < this.regexps.length; i2++) {
      const regexp = this.regexps[i2];
      if (!regexp) continue;
      try {
        regexp.lastIndex = startPosition;
        const match = regexp.exec(str);
        if (!match) continue;
        if (match.index === startPosition) return toResult(i2, match, 0);
        pending.push([
          i2,
          match,
          0
        ]);
      } catch (e) {
        if (this.options.forgiving) continue;
        throw e;
      }
    }
    if (pending.length) {
      const minIndex = Math.min(...pending.map((m3) => m3[1].index));
      for (const [i2, match, offset] of pending) if (match.index === minIndex) return toResult(i2, match, offset);
    }
    return null;
  }
};

// ../node_modules/oniguruma-parser/dist/utils.js
function r(e) {
  if ([...e].length !== 1) throw new Error(`Expected "${e}" to be a single code point`);
  return e.codePointAt(0);
}
function l(e, t, n) {
  return e.has(t) || e.set(t, n), e.get(t);
}
var i = /* @__PURE__ */ new Set(["alnum", "alpha", "ascii", "blank", "cntrl", "digit", "graph", "lower", "print", "punct", "space", "upper", "word", "xdigit"]);
var o = String.raw;
function u(e, t) {
  if (e == null) throw new Error(t ?? "Value expected");
  return e;
}

// ../node_modules/oniguruma-parser/dist/tokenizer/tokenize.js
var m = o`\[\^?`;
var b = `c.? | C(?:-.?)?|${o`[pP]\{(?:\^?[-\x20_]*[A-Za-z][-\x20\w]*\})?`}|${o`x[89A-Fa-f]\p{AHex}(?:\\x[89A-Fa-f]\p{AHex})*`}|${o`u(?:\p{AHex}{4})? | x\{[^\}]*\}? | x\p{AHex}{0,2}`}|${o`o\{[^\}]*\}?`}|${o`\d{1,3}`}`;
var y = /[?*+][?+]?|\{(?:\d+(?:,\d*)?|,\d+)\}\??/;
var C = new RegExp(o`
  \\ (?:
    ${b}
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
    | \*[^\)]*\)?
  )?
  | (?:${y.source})+
  | ${m}
  | .
`.replace(/\s+/g, ""), "gsu");
var T = new RegExp(o`
  \\ (?:
    ${b}
    | .
  )
  | \[:(?:\^?\p{Alpha}+|\^):\]
  | ${m}
  | &&
  | .
`.replace(/\s+/g, ""), "gsu");
function M(e, n = {}) {
  const t = { flags: "", ...n, rules: { captureGroup: false, singleline: false, ...n.rules } };
  if (typeof e != "string") throw new Error("String expected as pattern");
  const o3 = Y(t.flags), s2 = [o3.extended], a2 = { captureGroup: t.rules.captureGroup, getCurrentModX() {
    return s2.at(-1);
  }, numOpenGroups: 0, popModX() {
    s2.pop();
  }, pushModX(u2) {
    s2.push(u2);
  }, replaceCurrentModX(u2) {
    s2[s2.length - 1] = u2;
  }, singleline: t.rules.singleline };
  let r3 = [], i2;
  for (C.lastIndex = 0; i2 = C.exec(e); ) {
    const u2 = F(a2, e, i2[0], C.lastIndex);
    u2.tokens ? r3.push(...u2.tokens) : u2.token && r3.push(u2.token), u2.lastIndex !== void 0 && (C.lastIndex = u2.lastIndex);
  }
  const l3 = [];
  let c = 0;
  r3.filter((u2) => u2.type === "GroupOpen").forEach((u2) => {
    u2.kind === "capturing" ? u2.number = ++c : u2.raw === "(" && l3.push(u2);
  }), c || l3.forEach((u2, S2) => {
    u2.kind = "capturing", u2.number = S2 + 1;
  });
  const g = c || l3.length;
  return { tokens: r3.map((u2) => u2.type === "EscapedNumber" ? ee(u2, g) : u2).flat(), flags: o3 };
}
function F(e, n, t, o3) {
  const [s2, a2] = t;
  if (t === "[" || t === "[^") {
    const r3 = K(n, t, o3);
    return { tokens: r3.tokens, lastIndex: r3.lastIndex };
  }
  if (s2 === "\\") {
    if ("AbBGyYzZ".includes(a2)) return { token: w(t, t) };
    if (/^\\g[<']/.test(t)) {
      if (!/^\\g(?:<[^>]+>|'[^']+')$/.test(t)) throw new Error(`Invalid group name "${t}"`);
      return { token: R(t) };
    }
    if (/^\\k[<']/.test(t)) {
      if (!/^\\k(?:<[^>]+>|'[^']+')$/.test(t)) throw new Error(`Invalid group name "${t}"`);
      return { token: A(t) };
    }
    if (a2 === "K") return { token: I("keep", t) };
    if (a2 === "N" || a2 === "R") return { token: k("newline", t, { negate: a2 === "N" }) };
    if (a2 === "O") return { token: k("any", t) };
    if (a2 === "X") return { token: k("text_segment", t) };
    const r3 = x(t, { inCharClass: false });
    return Array.isArray(r3) ? { tokens: r3 } : { token: r3 };
  }
  if (s2 === "(") {
    if (a2 === "*") return { token: j(t) };
    if (t === "(?{") throw new Error(`Unsupported callout "${t}"`);
    if (t.startsWith("(?#")) {
      if (n[o3] !== ")") throw new Error('Unclosed comment group "(?#"');
      return { lastIndex: o3 + 1 };
    }
    if (/^\(\?[-imx]+[:)]$/.test(t)) return { token: L(t, e) };
    if (e.pushModX(e.getCurrentModX()), e.numOpenGroups++, t === "(" && !e.captureGroup || t === "(?:") return { token: f("group", t) };
    if (t === "(?>") return { token: f("atomic", t) };
    if (t === "(?=" || t === "(?!" || t === "(?<=" || t === "(?<!") return { token: f(t[2] === "<" ? "lookbehind" : "lookahead", t, { negate: t.endsWith("!") }) };
    if (t === "(" && e.captureGroup || t.startsWith("(?<") && t.endsWith(">") || t.startsWith("(?'") && t.endsWith("'")) return { token: f("capturing", t, { ...t !== "(" && { name: t.slice(3, -1) } }) };
    if (t.startsWith("(?~")) {
      if (t === "(?~|") throw new Error(`Unsupported absence function kind "${t}"`);
      return { token: f("absence_repeater", t) };
    }
    throw t === "(?(" ? new Error(`Unsupported conditional "${t}"`) : new Error(`Invalid or unsupported group option "${t}"`);
  }
  if (t === ")") {
    if (e.popModX(), e.numOpenGroups--, e.numOpenGroups < 0) throw new Error('Unmatched ")"');
    return { token: Q(t) };
  }
  if (e.getCurrentModX()) {
    if (t === "#") {
      const r3 = n.indexOf(`
`, o3);
      return { lastIndex: r3 === -1 ? n.length : r3 };
    }
    if (/^\s$/.test(t)) {
      const r3 = /\s+/y;
      return r3.lastIndex = o3, { lastIndex: r3.exec(n) ? r3.lastIndex : o3 };
    }
  }
  if (t === ".") return { token: k("dot", t) };
  if (t === "^" || t === "$") {
    const r3 = e.singleline ? { "^": o`\A`, $: o`\Z` }[t] : t;
    return { token: w(r3, t) };
  }
  return t === "|" ? { token: P(t) } : y.test(t) ? { tokens: te(t) } : { token: d(r(t), t) };
}
function K(e, n, t) {
  const o3 = [E(n[1] === "^", n)];
  let s2 = 1, a2;
  for (T.lastIndex = t; a2 = T.exec(e); ) {
    const r3 = a2[0];
    if (r3[0] === "[" && r3[1] !== ":") s2++, o3.push(E(r3[1] === "^", r3));
    else if (r3 === "]") {
      if (o3.at(-1).type === "CharacterClassOpen") o3.push(d(93, r3));
      else if (s2--, o3.push(z(r3)), !s2) break;
    } else {
      const i2 = X(r3);
      Array.isArray(i2) ? o3.push(...i2) : o3.push(i2);
    }
  }
  return { tokens: o3, lastIndex: T.lastIndex || e.length };
}
function X(e) {
  if (e[0] === "\\") return x(e, { inCharClass: true });
  if (e[0] === "[") {
    const n = /\[:(?<negate>\^?)(?<name>[a-z]+):\]/.exec(e);
    if (!n || !i.has(n.groups.name)) throw new Error(`Invalid POSIX class "${e}"`);
    return k("posix", e, { value: n.groups.name, negate: !!n.groups.negate });
  }
  return e === "-" ? U(e) : e === "&&" ? H(e) : d(r(e), e);
}
function x(e, { inCharClass: n }) {
  const t = e[1];
  if (t === "c" || t === "C") return Z(e);
  if ("dDhHsSwW".includes(t)) return q(e);
  if (e.startsWith(o`\o{`)) throw new Error(`Incomplete, invalid, or unsupported octal code point "${e}"`);
  if (/^\\[pP]\{/.test(e)) {
    if (e.length === 3) throw new Error(`Incomplete or invalid Unicode property "${e}"`);
    return V(e);
  }
  if (new RegExp("^\\\\x[89A-Fa-f]\\p{AHex}", "u").test(e)) try {
    const o3 = e.split(/\\x/).slice(1).map((i2) => parseInt(i2, 16)), s2 = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }).decode(new Uint8Array(o3)), a2 = new TextEncoder();
    return [...s2].map((i2) => {
      const l3 = [...a2.encode(i2)].map((c) => `\\x${c.toString(16)}`).join("");
      return d(r(i2), l3);
    });
  } catch {
    throw new Error(`Multibyte code "${e}" incomplete or invalid in Oniguruma`);
  }
  if (t === "u" || t === "x") return d(J(e), e);
  if ($.has(t)) return d($.get(t), e);
  if (/\d/.test(t)) return W(n, e);
  if (e === "\\") throw new Error(o`Incomplete escape "\"`);
  if (t === "M") throw new Error(`Unsupported meta "${e}"`);
  if ([...e].length === 2) return d(e.codePointAt(1), e);
  throw new Error(`Unexpected escape "${e}"`);
}
function P(e) {
  return { type: "Alternator", raw: e };
}
function w(e, n) {
  return { type: "Assertion", kind: e, raw: n };
}
function A(e) {
  return { type: "Backreference", raw: e };
}
function d(e, n) {
  return { type: "Character", value: e, raw: n };
}
function z(e) {
  return { type: "CharacterClassClose", raw: e };
}
function U(e) {
  return { type: "CharacterClassHyphen", raw: e };
}
function H(e) {
  return { type: "CharacterClassIntersector", raw: e };
}
function E(e, n) {
  return { type: "CharacterClassOpen", negate: e, raw: n };
}
function k(e, n, t = {}) {
  return { type: "CharacterSet", kind: e, ...t, raw: n };
}
function I(e, n, t = {}) {
  return e === "keep" ? { type: "Directive", kind: e, raw: n } : { type: "Directive", kind: e, flags: u(t.flags), raw: n };
}
function W(e, n) {
  return { type: "EscapedNumber", inCharClass: e, raw: n };
}
function Q(e) {
  return { type: "GroupClose", raw: e };
}
function f(e, n, t = {}) {
  return { type: "GroupOpen", kind: e, ...t, raw: n };
}
function D(e, n, t, o3) {
  return { type: "NamedCallout", kind: e, tag: n, arguments: t, raw: o3 };
}
function _(e, n, t, o3) {
  return { type: "Quantifier", kind: e, min: n, max: t, raw: o3 };
}
function R(e) {
  return { type: "Subroutine", raw: e };
}
var B = /* @__PURE__ */ new Set(["COUNT", "CMP", "ERROR", "FAIL", "MAX", "MISMATCH", "SKIP", "TOTAL_COUNT"]);
var $ = /* @__PURE__ */ new Map([["a", 7], ["b", 8], ["e", 27], ["f", 12], ["n", 10], ["r", 13], ["t", 9], ["v", 11]]);
function Z(e) {
  const n = e[1] === "c" ? e[2] : e[3];
  if (!n || !/[A-Za-z]/.test(n)) throw new Error(`Unsupported control character "${e}"`);
  return d(r(n.toUpperCase()) - 64, e);
}
function L(e, n) {
  let { on: t, off: o3 } = /^\(\?(?<on>[imx]*)(?:-(?<off>[-imx]*))?/.exec(e).groups;
  o3 ?? (o3 = "");
  const s2 = (n.getCurrentModX() || t.includes("x")) && !o3.includes("x"), a2 = v(t), r3 = v(o3), i2 = {};
  if (a2 && (i2.enable = a2), r3 && (i2.disable = r3), e.endsWith(")")) return n.replaceCurrentModX(s2), I("flags", e, { flags: i2 });
  if (e.endsWith(":")) return n.pushModX(s2), n.numOpenGroups++, f("group", e, { ...(a2 || r3) && { flags: i2 } });
  throw new Error(`Unexpected flag modifier "${e}"`);
}
function j(e) {
  const n = /\(\*(?<name>[A-Za-z_]\w*)?(?:\[(?<tag>(?:[A-Za-z_]\w*)?)\])?(?:\{(?<args>[^}]*)\})?\)/.exec(e);
  if (!n) throw new Error(`Incomplete or invalid named callout "${e}"`);
  const { name: t, tag: o3, args: s2 } = n.groups;
  if (!t) throw new Error(`Invalid named callout "${e}"`);
  if (o3 === "") throw new Error(`Named callout tag with empty value not allowed "${e}"`);
  const a2 = s2 ? s2.split(",").filter((g) => g !== "").map((g) => /^[+-]?\d+$/.test(g) ? +g : g) : [], [r3, i2, l3] = a2, c = B.has(t) ? t.toLowerCase() : "custom";
  switch (c) {
    case "fail":
    case "mismatch":
    case "skip":
      if (a2.length > 0) throw new Error(`Named callout arguments not allowed "${a2}"`);
      break;
    case "error":
      if (a2.length > 1) throw new Error(`Named callout allows only one argument "${a2}"`);
      if (typeof r3 == "string") throw new Error(`Named callout argument must be a number "${r3}"`);
      break;
    case "max":
      if (!a2.length || a2.length > 2) throw new Error(`Named callout must have one or two arguments "${a2}"`);
      if (typeof r3 == "string" && !/^[A-Za-z_]\w*$/.test(r3)) throw new Error(`Named callout argument one must be a tag or number "${r3}"`);
      if (a2.length === 2 && (typeof i2 == "number" || !/^[<>X]$/.test(i2))) throw new Error(`Named callout optional argument two must be '<', '>', or 'X' "${i2}"`);
      break;
    case "count":
    case "total_count":
      if (a2.length > 1) throw new Error(`Named callout allows only one argument "${a2}"`);
      if (a2.length === 1 && (typeof r3 == "number" || !/^[<>X]$/.test(r3))) throw new Error(`Named callout optional argument must be '<', '>', or 'X' "${r3}"`);
      break;
    case "cmp":
      if (a2.length !== 3) throw new Error(`Named callout must have three arguments "${a2}"`);
      if (typeof r3 == "string" && !/^[A-Za-z_]\w*$/.test(r3)) throw new Error(`Named callout argument one must be a tag or number "${r3}"`);
      if (typeof i2 == "number" || !/^(?:[<>!=]=|[<>])$/.test(i2)) throw new Error(`Named callout argument two must be '==', '!=', '>', '<', '>=', or '<=' "${i2}"`);
      if (typeof l3 == "string" && !/^[A-Za-z_]\w*$/.test(l3)) throw new Error(`Named callout argument three must be a tag or number "${l3}"`);
      break;
    case "custom":
      throw new Error(`Undefined callout name "${t}"`);
    default:
      throw new Error(`Unexpected named callout kind "${c}"`);
  }
  return D(c, o3 ?? null, (s2 == null ? void 0 : s2.split(",")) ?? null, e);
}
function O(e) {
  let n = null, t, o3;
  if (e[0] === "{") {
    const { minStr: s2, maxStr: a2 } = /^\{(?<minStr>\d*)(?:,(?<maxStr>\d*))?/.exec(e).groups, r3 = 1e5;
    if (+s2 > r3 || a2 && +a2 > r3) throw new Error("Quantifier value unsupported in Oniguruma");
    if (t = +s2, o3 = a2 === void 0 ? +s2 : a2 === "" ? 1 / 0 : +a2, t > o3 && (n = "possessive", [t, o3] = [o3, t]), e.endsWith("?")) {
      if (n === "possessive") throw new Error('Unsupported possessive interval quantifier chain with "?"');
      n = "lazy";
    } else n || (n = "greedy");
  } else t = e[0] === "+" ? 1 : 0, o3 = e[0] === "?" ? 1 : 1 / 0, n = e[1] === "+" ? "possessive" : e[1] === "?" ? "lazy" : "greedy";
  return _(n, t, o3, e);
}
function q(e) {
  const n = e[1].toLowerCase();
  return k({ d: "digit", h: "hex", s: "space", w: "word" }[n], e, { negate: e[1] !== n });
}
function V(e) {
  const { p: n, neg: t, value: o3 } = /^\\(?<p>[pP])\{(?<neg>\^?)(?<value>[^}]+)/.exec(e).groups;
  return k("property", e, { value: o3, negate: n === "P" && !t || n === "p" && !!t });
}
function v(e) {
  const n = {};
  return e.includes("i") && (n.ignoreCase = true), e.includes("m") && (n.dotAll = true), e.includes("x") && (n.extended = true), Object.keys(n).length ? n : null;
}
function Y(e) {
  const n = { ignoreCase: false, dotAll: false, extended: false, digitIsAscii: false, posixIsAscii: false, spaceIsAscii: false, wordIsAscii: false, textSegmentMode: null };
  for (let t = 0; t < e.length; t++) {
    const o3 = e[t];
    if (!"imxDPSWy".includes(o3)) throw new Error(`Invalid flag "${o3}"`);
    if (o3 === "y") {
      if (!/^y{[gw]}/.test(e.slice(t))) throw new Error('Invalid or unspecified flag "y" mode');
      n.textSegmentMode = e[t + 2] === "g" ? "grapheme" : "word", t += 3;
      continue;
    }
    n[{ i: "ignoreCase", m: "dotAll", x: "extended", D: "digitIsAscii", P: "posixIsAscii", S: "spaceIsAscii", W: "wordIsAscii" }[o3]] = true;
  }
  return n;
}
function J(e) {
  if (new RegExp("^(?:\\\\u(?!\\p{AHex}{4})|\\\\x(?!\\p{AHex}{1,2}|\\{\\p{AHex}{1,8}\\}))", "u").test(e)) throw new Error(`Incomplete or invalid escape "${e}"`);
  const n = e[2] === "{" ? new RegExp("^\\\\x\\{\\s*(?<hex>\\p{AHex}+)", "u").exec(e).groups.hex : e.slice(2);
  return parseInt(n, 16);
}
function ee(e, n) {
  const { raw: t, inCharClass: o3 } = e, s2 = t.slice(1);
  if (!o3 && (s2 !== "0" && s2.length === 1 || s2[0] !== "0" && +s2 <= n)) return [A(t)];
  const a2 = [], r3 = s2.match(/^[0-7]+|\d/g);
  for (let i2 = 0; i2 < r3.length; i2++) {
    const l3 = r3[i2];
    let c;
    if (i2 === 0 && l3 !== "8" && l3 !== "9") {
      if (c = parseInt(l3, 8), c > 127) throw new Error(o`Octal encoded byte above 177 unsupported "${t}"`);
    } else c = r(l3);
    a2.push(d(c, (i2 === 0 ? "\\" : "") + l3));
  }
  return a2;
}
function te(e) {
  const n = [], t = new RegExp(y, "gy");
  let o3;
  for (; o3 = t.exec(e); ) {
    const s2 = o3[0];
    if (s2[0] === "{") {
      const a2 = /^\{(?<min>\d+),(?<max>\d+)\}\??$/.exec(s2);
      if (a2) {
        const { min: r3, max: i2 } = a2.groups;
        if (+r3 > +i2 && s2.endsWith("?")) {
          t.lastIndex--, n.push(O(s2.slice(0, -1)));
          continue;
        }
      }
    }
    n.push(O(s2));
  }
  return n;
}

// ../node_modules/oniguruma-parser/dist/parser/node-utils.js
function o2(e, t) {
  if (!Array.isArray(e.body)) throw new Error("Expected node with body array");
  if (e.body.length !== 1) return false;
  const r3 = e.body[0];
  return !t || Object.keys(t).every((n) => t[n] === r3[n]);
}
function s(e) {
  return y2.has(e.type);
}
var y2 = /* @__PURE__ */ new Set(["AbsenceFunction", "Backreference", "CapturingGroup", "Character", "CharacterClass", "CharacterSet", "Group", "Quantifier", "Subroutine"]);

// ../node_modules/oniguruma-parser/dist/parser/parse.js
function J2(e, r3 = {}) {
  const n = { flags: "", normalizeUnknownPropertyNames: false, skipBackrefValidation: false, skipLookbehindValidation: false, skipPropertyNameValidation: false, unicodePropertyMap: null, ...r3, rules: { captureGroup: false, singleline: false, ...r3.rules } }, o3 = M(e, { flags: n.flags, rules: { captureGroup: n.rules.captureGroup, singleline: n.rules.singleline } }), i2 = (p, N) => {
    const u2 = o3.tokens[t.nextIndex];
    switch (t.parent = p, t.nextIndex++, u2.type) {
      case "Alternator":
        return b2();
      case "Assertion":
        return W2(u2);
      case "Backreference":
        return X2(u2, t);
      case "Character":
        return m2(u2.value, { useLastValid: !!N.isCheckingRangeEnd });
      case "CharacterClassHyphen":
        return ee2(u2, t, N);
      case "CharacterClassOpen":
        return re(u2, t, N);
      case "CharacterSet":
        return ne(u2, t);
      case "Directive":
        return I2(u2.kind, { flags: u2.flags });
      case "GroupOpen":
        return te2(u2, t, N);
      case "NamedCallout":
        return U2(u2.kind, u2.tag, u2.arguments);
      case "Quantifier":
        return oe(u2, t);
      case "Subroutine":
        return ae(u2, t);
      default:
        throw new Error(`Unexpected token type "${u2.type}"`);
    }
  }, t = { capturingGroups: [], hasNumberedRef: false, namedGroupsByName: /* @__PURE__ */ new Map(), nextIndex: 0, normalizeUnknownPropertyNames: n.normalizeUnknownPropertyNames, parent: null, skipBackrefValidation: n.skipBackrefValidation, skipLookbehindValidation: n.skipLookbehindValidation, skipPropertyNameValidation: n.skipPropertyNameValidation, subroutines: [], tokens: o3.tokens, unicodePropertyMap: n.unicodePropertyMap, walk: i2 }, d2 = B2(T2(o3.flags));
  let s2 = d2.body[0];
  for (; t.nextIndex < o3.tokens.length; ) {
    const p = i2(s2, {});
    p.type === "Alternative" ? (d2.body.push(p), s2 = p) : s2.body.push(p);
  }
  const { capturingGroups: a2, hasNumberedRef: l3, namedGroupsByName: c, subroutines: f2 } = t;
  if (l3 && c.size && !n.rules.captureGroup) throw new Error("Numbered backref/subroutine not allowed when using named capture");
  for (const { ref: p } of f2) if (typeof p == "number") {
    if (p > a2.length) throw new Error("Subroutine uses a group number that's not defined");
    p && (a2[p - 1].isSubroutined = true);
  } else if (c.has(p)) {
    if (c.get(p).length > 1) throw new Error(o`Subroutine uses a duplicate group name "\g<${p}>"`);
    c.get(p)[0].isSubroutined = true;
  } else throw new Error(o`Subroutine uses a group name that's not defined "\g<${p}>"`);
  return d2;
}
function W2({ kind: e }) {
  return F2(u({ "^": "line_start", $: "line_end", "\\A": "string_start", "\\b": "word_boundary", "\\B": "word_boundary", "\\G": "search_start", "\\y": "text_segment_boundary", "\\Y": "text_segment_boundary", "\\z": "string_end", "\\Z": "string_end_newline" }[e], `Unexpected assertion kind "${e}"`), { negate: e === o`\B` || e === o`\Y` });
}
function X2({ raw: e }, r3) {
  const n = /^\\k[<']/.test(e), o3 = n ? e.slice(3, -1) : e.slice(1), i2 = (t, d2 = false) => {
    const s2 = r3.capturingGroups.length;
    let a2 = false;
    if (t > s2) if (r3.skipBackrefValidation) a2 = true;
    else throw new Error(`Not enough capturing groups defined to the left "${e}"`);
    return r3.hasNumberedRef = true, k2(d2 ? s2 + 1 - t : t, { orphan: a2 });
  };
  if (n) {
    const t = /^(?<sign>-?)0*(?<num>[1-9]\d*)$/.exec(o3);
    if (t) return i2(+t.groups.num, !!t.groups.sign);
    if (/[-+]/.test(o3)) throw new Error(`Invalid backref name "${e}"`);
    if (!r3.namedGroupsByName.has(o3)) throw new Error(`Group name not defined to the left "${e}"`);
    return k2(o3);
  }
  return i2(+o3);
}
function ee2(e, r3, n) {
  const { tokens: o3, walk: i2 } = r3, t = r3.parent, d2 = t.body.at(-1), s2 = o3[r3.nextIndex];
  if (!n.isCheckingRangeEnd && d2 && d2.type !== "CharacterClass" && d2.type !== "CharacterClassRange" && s2 && s2.type !== "CharacterClassOpen" && s2.type !== "CharacterClassClose" && s2.type !== "CharacterClassIntersector") {
    const a2 = i2(t, { ...n, isCheckingRangeEnd: true });
    if (d2.type === "Character" && a2.type === "Character") return t.body.pop(), L2(d2, a2);
    throw new Error("Invalid character class range");
  }
  return m2(r("-"));
}
function re({ negate: e }, r3, n) {
  const { tokens: o3, walk: i2 } = r3, t = [C2()], d2 = o3[r3.nextIndex];
  let s2 = z2(d2);
  for (; s2.type !== "CharacterClassClose"; ) {
    if (s2.type === "CharacterClassIntersector") t.push(C2()), r3.nextIndex++;
    else {
      const l3 = t.at(-1);
      l3.body.push(i2(l3, n));
    }
    s2 = z2(o3[r3.nextIndex], d2);
  }
  const a2 = C2({ negate: e });
  return t.length === 1 ? a2.body = t[0].body : (a2.kind = "intersection", a2.body = t.map((l3) => l3.body.length === 1 ? l3.body[0] : l3)), r3.nextIndex++, a2;
}
function ne({ kind: e, negate: r3, value: n }, o3) {
  const { normalizeUnknownPropertyNames: i2, skipPropertyNameValidation: t, unicodePropertyMap: d2 } = o3;
  if (e === "property") {
    const s2 = w2(n);
    if (i.has(s2) && !(d2 == null ? void 0 : d2.has(s2))) e = "posix", n = s2;
    else return Q2(n, { negate: r3, normalizeUnknownPropertyNames: i2, skipPropertyNameValidation: t, unicodePropertyMap: d2 });
  }
  return e === "posix" ? R2(n, { negate: r3 }) : E2(e, { negate: r3 });
}
function te2(e, r3, n) {
  const { tokens: o3, capturingGroups: i2, namedGroupsByName: t, skipLookbehindValidation: d2, walk: s2 } = r3, a2 = ie(e), l3 = a2.type === "AbsenceFunction", c = $2(a2), f2 = c && a2.negate;
  if (a2.type === "CapturingGroup" && (i2.push(a2), a2.name && l(t, a2.name, []).push(a2)), l3 && n.isInAbsenceFunction) throw new Error("Nested absence function not supported by Oniguruma");
  let p = D2(o3[r3.nextIndex]);
  for (; p.type !== "GroupClose"; ) {
    if (p.type === "Alternator") a2.body.push(b2()), r3.nextIndex++;
    else {
      const N = a2.body.at(-1), u2 = s2(N, { ...n, isInAbsenceFunction: n.isInAbsenceFunction || l3, isInLookbehind: n.isInLookbehind || c, isInNegLookbehind: n.isInNegLookbehind || f2 });
      if (N.body.push(u2), (c || n.isInLookbehind) && !d2) {
        const v2 = "Lookbehind includes a pattern not allowed by Oniguruma";
        if (f2 || n.isInNegLookbehind) {
          if (M2(u2) || u2.type === "CapturingGroup") throw new Error(v2);
        } else if (M2(u2) || $2(u2) && u2.negate) throw new Error(v2);
      }
    }
    p = D2(o3[r3.nextIndex]);
  }
  return r3.nextIndex++, a2;
}
function oe({ kind: e, min: r3, max: n }, o3) {
  const i2 = o3.parent, t = i2.body.at(-1);
  if (!t || !s(t)) throw new Error("Quantifier requires a repeatable token");
  const d2 = _2(e, r3, n, t);
  return i2.body.pop(), d2;
}
function ae({ raw: e }, r3) {
  const { capturingGroups: n, subroutines: o3 } = r3;
  let i2 = e.slice(3, -1);
  const t = /^(?<sign>[-+]?)0*(?<num>[1-9]\d*)$/.exec(i2);
  if (t) {
    const s2 = +t.groups.num, a2 = n.length;
    if (r3.hasNumberedRef = true, i2 = { "": s2, "+": a2 + s2, "-": a2 + 1 - s2 }[t.groups.sign], i2 < 1) throw new Error("Invalid subroutine number");
  } else i2 === "0" && (i2 = 0);
  const d2 = O2(i2);
  return o3.push(d2), d2;
}
function G(e, r3) {
  if (e !== "repeater") throw new Error(`Unexpected absence function kind "${e}"`);
  return { type: "AbsenceFunction", kind: e, body: h(r3 == null ? void 0 : r3.body) };
}
function b2(e) {
  return { type: "Alternative", body: V2(e == null ? void 0 : e.body) };
}
function F2(e, r3) {
  const n = { type: "Assertion", kind: e };
  return (e === "word_boundary" || e === "text_segment_boundary") && (n.negate = !!(r3 == null ? void 0 : r3.negate)), n;
}
function k2(e, r3) {
  const n = !!(r3 == null ? void 0 : r3.orphan);
  return { type: "Backreference", ref: e, ...n && { orphan: n } };
}
function P2(e, r3) {
  const n = { name: void 0, isSubroutined: false, ...r3 };
  if (n.name !== void 0 && !se(n.name)) throw new Error(`Group name "${n.name}" invalid in Oniguruma`);
  return { type: "CapturingGroup", number: e, ...n.name && { name: n.name }, ...n.isSubroutined && { isSubroutined: n.isSubroutined }, body: h(r3 == null ? void 0 : r3.body) };
}
function m2(e, r3) {
  const n = { useLastValid: false, ...r3 };
  if (e > 1114111) {
    const o3 = e.toString(16);
    if (n.useLastValid) e = 1114111;
    else throw e > 1310719 ? new Error(`Invalid code point out of range "\\x{${o3}}"`) : new Error(`Invalid code point out of range in JS "\\x{${o3}}"`);
  }
  return { type: "Character", value: e };
}
function C2(e) {
  const r3 = { kind: "union", negate: false, ...e };
  return { type: "CharacterClass", kind: r3.kind, negate: r3.negate, body: V2(e == null ? void 0 : e.body) };
}
function L2(e, r3) {
  if (r3.value < e.value) throw new Error("Character class range out of order");
  return { type: "CharacterClassRange", min: e, max: r3 };
}
function E2(e, r3) {
  const n = !!(r3 == null ? void 0 : r3.negate), o3 = { type: "CharacterSet", kind: e };
  return (e === "digit" || e === "hex" || e === "newline" || e === "space" || e === "word") && (o3.negate = n), (e === "text_segment" || e === "newline" && !n) && (o3.variableLength = true), o3;
}
function I2(e, r3 = {}) {
  if (e === "keep") return { type: "Directive", kind: e };
  if (e === "flags") return { type: "Directive", kind: e, flags: u(r3.flags) };
  throw new Error(`Unexpected directive kind "${e}"`);
}
function T2(e) {
  return { type: "Flags", ...e };
}
function A2(e) {
  const r3 = e == null ? void 0 : e.atomic, n = e == null ? void 0 : e.flags;
  if (r3 && n) throw new Error("Atomic group cannot have flags");
  return { type: "Group", ...r3 && { atomic: r3 }, ...n && { flags: n }, body: h(e == null ? void 0 : e.body) };
}
function K2(e) {
  const r3 = { behind: false, negate: false, ...e };
  return { type: "LookaroundAssertion", kind: r3.behind ? "lookbehind" : "lookahead", negate: r3.negate, body: h(e == null ? void 0 : e.body) };
}
function U2(e, r3, n) {
  return { type: "NamedCallout", kind: e, tag: r3, arguments: n };
}
function R2(e, r3) {
  const n = !!(r3 == null ? void 0 : r3.negate);
  if (!i.has(e)) throw new Error(`Invalid POSIX class "${e}"`);
  return { type: "CharacterSet", kind: "posix", value: e, negate: n };
}
function _2(e, r3, n, o3) {
  if (r3 > n) throw new Error("Invalid reversed quantifier range");
  return { type: "Quantifier", kind: e, min: r3, max: n, body: o3 };
}
function B2(e, r3) {
  return { type: "Regex", body: h(r3 == null ? void 0 : r3.body), flags: e };
}
function O2(e) {
  return { type: "Subroutine", ref: e };
}
function Q2(e, r3) {
  var _a2;
  const n = { negate: false, normalizeUnknownPropertyNames: false, skipPropertyNameValidation: false, unicodePropertyMap: null, ...r3 };
  let o3 = (_a2 = n.unicodePropertyMap) == null ? void 0 : _a2.get(w2(e));
  if (!o3) {
    if (n.normalizeUnknownPropertyNames) o3 = de(e);
    else if (n.unicodePropertyMap && !n.skipPropertyNameValidation) throw new Error(o`Invalid Unicode property "\p{${e}}"`);
  }
  return { type: "CharacterSet", kind: "property", value: o3 ?? e, negate: n.negate };
}
function ie({ flags: e, kind: r3, name: n, negate: o3, number: i2 }) {
  switch (r3) {
    case "absence_repeater":
      return G("repeater");
    case "atomic":
      return A2({ atomic: true });
    case "capturing":
      return P2(i2, { name: n });
    case "group":
      return A2({ flags: e });
    case "lookahead":
    case "lookbehind":
      return K2({ behind: r3 === "lookbehind", negate: o3 });
    default:
      throw new Error(`Unexpected group kind "${r3}"`);
  }
}
function h(e) {
  if (e === void 0) e = [b2()];
  else if (!Array.isArray(e) || !e.length || !e.every((r3) => r3.type === "Alternative")) throw new Error("Invalid body; expected array of one or more Alternative nodes");
  return e;
}
function V2(e) {
  if (e === void 0) e = [];
  else if (!Array.isArray(e) || !e.every((r3) => !!r3.type)) throw new Error("Invalid body; expected array of nodes");
  return e;
}
function M2(e) {
  return e.type === "LookaroundAssertion" && e.kind === "lookahead";
}
function $2(e) {
  return e.type === "LookaroundAssertion" && e.kind === "lookbehind";
}
function se(e) {
  return /^[\p{Alpha}\p{Pc}][^)]*$/u.test(e);
}
function de(e) {
  return e.trim().replace(/[- _]+/g, "_").replace(/[A-Z][a-z]+(?=[A-Z])/g, "$&_").replace(/[A-Za-z]+/g, (r3) => r3[0].toUpperCase() + r3.slice(1).toLowerCase());
}
function w2(e) {
  return e.replace(/[- _]+/g, "").toLowerCase();
}
function z2(e, r3) {
  const n = r3;
  return u(e, `Unclosed character class${(n == null ? void 0 : n.type) === "Character" && n.value === 93 && n.raw === "]" ? ' (started with "]")' : ""}`);
}
function D2(e) {
  return u(e, "Unclosed group");
}

// ../node_modules/oniguruma-parser/dist/traverser/traverse.js
function S(a2, v2, N = null) {
  function b3(e, s2) {
    for (let t = 0; t < e.length; t++) {
      const r3 = n(e[t], s2, t, e);
      t = Math.max(-1, t + r3);
    }
  }
  function n(e, s2 = null, t = null, r3 = null) {
    var _a2, _b;
    let i2 = 0, c = false;
    const d2 = { node: e, parent: s2, key: t, container: r3, root: a2, remove() {
      x2(r3).splice(Math.max(0, l2(t) + i2), 1), i2--, c = true;
    }, removeAllNextSiblings() {
      return x2(r3).splice(l2(t) + 1);
    }, removeAllPrevSiblings() {
      const o3 = l2(t) + i2;
      return i2 -= o3, x2(r3).splice(0, Math.max(0, o3));
    }, replaceWith(o3, m3 = {}) {
      const y3 = !!m3.traverse;
      r3 ? r3[Math.max(0, l2(t) + i2)] = o3 : u(s2, "Can't replace root node")[t] = o3, y3 && n(o3, s2, t, r3), c = true;
    }, replaceWithMultiple(o3, m3 = {}) {
      const y3 = !!m3.traverse;
      if (x2(r3).splice(Math.max(0, l2(t) + i2), 1, ...o3), i2 += o3.length - 1, y3) {
        let g = 0;
        for (let p = 0; p < o3.length; p++) g += n(o3[p], s2, l2(t) + p + g, r3);
      }
      c = true;
    }, skip() {
      c = true;
    } }, { type: f2 } = e, u2 = v2["*"], h2 = v2[f2], R3 = typeof u2 == "function" ? u2 : u2 == null ? void 0 : u2.enter, P3 = typeof h2 == "function" ? h2 : h2 == null ? void 0 : h2.enter;
    if (R3 == null ? void 0 : R3(d2, N), P3 == null ? void 0 : P3(d2, N), !c) switch (f2) {
      case "AbsenceFunction":
      case "Alternative":
      case "CapturingGroup":
      case "CharacterClass":
      case "Group":
      case "LookaroundAssertion":
        b3(e.body, e);
        break;
      case "Assertion":
      case "Backreference":
      case "Character":
      case "CharacterSet":
      case "Directive":
      case "Flags":
      case "NamedCallout":
      case "Subroutine":
        break;
      case "CharacterClassRange":
        n(e.min, e, "min"), n(e.max, e, "max");
        break;
      case "Quantifier":
        n(e.body, e, "body");
        break;
      case "Regex":
        b3(e.body, e), n(e.flags, e, "flags");
        break;
      default:
        throw new Error(`Unexpected node type "${f2}"`);
    }
    return (_a2 = h2 == null ? void 0 : h2.exit) == null ? void 0 : _a2.call(h2, d2, N), (_b = u2 == null ? void 0 : u2.exit) == null ? void 0 : _b.call(u2, d2, N), i2;
  }
  return n(a2), a2;
}
function x2(a2) {
  if (!Array.isArray(a2)) throw new Error("Container expected");
  return a2;
}
function l2(a2) {
  if (typeof a2 != "number") throw new Error("Numeric key expected");
  return a2;
}

// ../packages/components/node_modules/oniguruma-to-es/dist/esm/index.js
var cp = String.fromCodePoint;
var r2 = String.raw;
var envFlags = {};
var globalRegExp = globalThis.RegExp;
envFlags.flagGroups = (() => {
  try {
    new globalRegExp("(?i:)");
  } catch {
    return false;
  }
  return true;
})();
envFlags.unicodeSets = (() => {
  try {
    new globalRegExp("[[]]", "v");
  } catch {
    return false;
  }
  return true;
})();
envFlags.bugFlagVLiteralHyphenIsRange = envFlags.unicodeSets ? (() => {
  try {
    new globalRegExp(r2`[\d\-a]`, "v");
  } catch {
    return true;
  }
  return false;
})() : false;
envFlags.bugNestedClassIgnoresNegation = envFlags.unicodeSets && new globalRegExp("[[^a]]", "v").test("a");
function getNewCurrentFlags(current, { enable, disable }) {
  return {
    dotAll: !(disable == null ? void 0 : disable.dotAll) && !!((enable == null ? void 0 : enable.dotAll) || current.dotAll),
    ignoreCase: !(disable == null ? void 0 : disable.ignoreCase) && !!((enable == null ? void 0 : enable.ignoreCase) || current.ignoreCase)
  };
}
function getOrInsert(map, key, defaultValue) {
  if (!map.has(key)) {
    map.set(key, defaultValue);
  }
  return map.get(key);
}
function isMinTarget(target, min) {
  return EsVersion[target] >= EsVersion[min];
}
function throwIfNullish(value, msg) {
  if (value == null) {
    throw new Error(msg ?? "Value expected");
  }
  return value;
}
var EsVersion = {
  ES2025: 2025,
  ES2024: 2024,
  ES2018: 2018
};
var Target = (
  /** @type {const} */
  {
    auto: "auto",
    ES2025: "ES2025",
    ES2024: "ES2024",
    ES2018: "ES2018"
  }
);
function getOptions(options = {}) {
  if ({}.toString.call(options) !== "[object Object]") {
    throw new Error("Unexpected options");
  }
  if (options.target !== void 0 && !Target[options.target]) {
    throw new Error(`Unexpected target "${options.target}"`);
  }
  const opts = {
    // Sets the level of emulation rigor/strictness.
    accuracy: "default",
    // Disables advanced emulation that relies on returning a `RegExp` subclass, resulting in
    // certain patterns not being emulatable.
    avoidSubclass: false,
    // Oniguruma flags; a string with `i`, `m`, `x`, `D`, `S`, `W`, `y{g}` in any order (all
    // optional). Oniguruma's `m` is equivalent to JavaScript's `s` (`dotAll`).
    flags: "",
    // Include JavaScript flag `g` (`global`) in the result.
    global: false,
    // Include JavaScript flag `d` (`hasIndices`) in the result.
    hasIndices: false,
    // Delay regex construction until first use if the transpiled pattern is at least this length.
    lazyCompileLength: Infinity,
    // JavaScript version used for generated regexes. Using `auto` detects the best value based on
    // your environment. Later targets allow faster processing, simpler generated source, and
    // support for additional features.
    target: "auto",
    // Disables minifications that simplify the pattern without changing the meaning.
    verbose: false,
    ...options,
    // Advanced options that override standard behavior, error checking, and flags when enabled.
    rules: {
      // Useful with TextMate grammars that merge backreferences across patterns.
      allowOrphanBackrefs: false,
      // Use ASCII `\b` and `\B`, which increases search performance of generated regexes.
      asciiWordBoundaries: false,
      // Allow unnamed captures and numbered calls (backreferences and subroutines) when using
      // named capture. This is Oniguruma option `ONIG_OPTION_CAPTURE_GROUP`; on by default in
      // `vscode-oniguruma`.
      captureGroup: false,
      // Change the recursion depth limit from Oniguruma's `20` to an integer `2`–`20`.
      recursionLimit: 20,
      // `^` as `\A`; `$` as`\Z`. Improves search performance of generated regexes without changing
      // the meaning if searching line by line. This is Oniguruma option `ONIG_OPTION_SINGLELINE`.
      singleline: false,
      ...options.rules
    }
  };
  if (opts.target === "auto") {
    opts.target = envFlags.flagGroups ? "ES2025" : envFlags.unicodeSets ? "ES2024" : "ES2018";
  }
  return opts;
}
var asciiSpaceChar = "[	-\r ]";
var CharsWithoutIgnoreCaseExpansion = /* @__PURE__ */ new Set([
  cp(304),
  // İ
  cp(305)
  // ı
]);
var defaultWordChar = r2`[\p{L}\p{M}\p{N}\p{Pc}]`;
function getIgnoreCaseMatchChars(char) {
  if (CharsWithoutIgnoreCaseExpansion.has(char)) {
    return [char];
  }
  const set = /* @__PURE__ */ new Set();
  const lower = char.toLowerCase();
  const upper = lower.toUpperCase();
  const title = LowerToTitleCaseMap.get(lower);
  const altLower = LowerToAlternativeLowerCaseMap.get(lower);
  const altUpper = LowerToAlternativeUpperCaseMap.get(lower);
  if ([...upper].length === 1) {
    set.add(upper);
  }
  altUpper && set.add(altUpper);
  title && set.add(title);
  set.add(lower);
  altLower && set.add(altLower);
  return [...set];
}
var JsUnicodePropertyMap = new Map(
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
XID_Start XIDS`.split(/\s/).map((p) => [w2(p), p])
);
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
var PosixClassMap = /* @__PURE__ */ new Map([
  ["alnum", r2`[\p{Alpha}\p{Nd}]`],
  ["alpha", r2`\p{Alpha}`],
  ["ascii", r2`\p{ASCII}`],
  ["blank", r2`[\p{Zs}\t]`],
  ["cntrl", r2`\p{Cc}`],
  ["digit", r2`\p{Nd}`],
  ["graph", r2`[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]`],
  ["lower", r2`\p{Lower}`],
  ["print", r2`[[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]\p{Zs}]`],
  ["punct", r2`[\p{P}\p{S}]`],
  // Updated value from Onig 6.9.9; changed from Unicode `\p{punct}`
  ["space", r2`\p{space}`],
  ["upper", r2`\p{Upper}`],
  ["word", r2`[\p{Alpha}\p{M}\p{Nd}\p{Pc}]`],
  ["xdigit", r2`\p{AHex}`]
]);
function range(start, end) {
  const range2 = [];
  for (let i2 = start; i2 <= end; i2++) {
    range2.push(i2);
  }
  return range2;
}
function titleEntry(codePoint) {
  const char = cp(codePoint);
  return [char.toLowerCase(), char];
}
function titleRange(start, end) {
  return range(start, end).map((codePoint) => titleEntry(codePoint));
}
var UnicodePropertiesWithSpecificCase = /* @__PURE__ */ new Set([
  "Lower",
  "Lowercase",
  "Upper",
  "Uppercase",
  "Ll",
  "Lowercase_Letter",
  "Lt",
  "Titlecase_Letter",
  "Lu",
  "Uppercase_Letter"
  // The `Changes_When_*` properties (and their aliases) could be included, but they're very rare.
  // Some other properties include a handful of chars with specific cases only, but these chars are
  // generally extreme edge cases and using such properties case insensitively generally produces
  // undesired behavior anyway
]);
function transform(ast, options) {
  const opts = {
    // A couple edge cases exist where options `accuracy` and `bestEffortTarget` are used:
    // - `CharacterSet` kind `text_segment` (`\X`): An exact representation would require heavy
    //   Unicode data; a best-effort approximation requires knowing the target.
    // - `CharacterSet` kind `posix` with values `graph` and `print`: Their complex Unicode
    //   representations would be hard to change to ASCII versions after the fact in the generator
    //   based on `target`/`accuracy`, so produce the appropriate structure here.
    accuracy: "default",
    asciiWordBoundaries: false,
    avoidSubclass: false,
    bestEffortTarget: "ES2025",
    ...options
  };
  addParentProperties(ast);
  const firstPassState = {
    accuracy: opts.accuracy,
    asciiWordBoundaries: opts.asciiWordBoundaries,
    avoidSubclass: opts.avoidSubclass,
    flagDirectivesByAlt: /* @__PURE__ */ new Map(),
    jsGroupNameMap: /* @__PURE__ */ new Map(),
    minTargetEs2024: isMinTarget(opts.bestEffortTarget, "ES2024"),
    passedLookbehind: false,
    strategy: null,
    // Subroutines can appear before the groups they ref, so collect reffed nodes for a second pass 
    subroutineRefMap: /* @__PURE__ */ new Map(),
    supportedGNodes: /* @__PURE__ */ new Set(),
    digitIsAscii: ast.flags.digitIsAscii,
    spaceIsAscii: ast.flags.spaceIsAscii,
    wordIsAscii: ast.flags.wordIsAscii
  };
  S(ast, FirstPassVisitor, firstPassState);
  const globalFlags = {
    dotAll: ast.flags.dotAll,
    ignoreCase: ast.flags.ignoreCase
  };
  const secondPassState = {
    currentFlags: globalFlags,
    prevFlags: null,
    globalFlags,
    groupOriginByCopy: /* @__PURE__ */ new Map(),
    groupsByName: /* @__PURE__ */ new Map(),
    multiplexCapturesToLeftByRef: /* @__PURE__ */ new Map(),
    openRefs: /* @__PURE__ */ new Map(),
    reffedNodesByReferencer: /* @__PURE__ */ new Map(),
    subroutineRefMap: firstPassState.subroutineRefMap
  };
  S(ast, SecondPassVisitor, secondPassState);
  const thirdPassState = {
    groupsByName: secondPassState.groupsByName,
    highestOrphanBackref: 0,
    numCapturesToLeft: 0,
    reffedNodesByReferencer: secondPassState.reffedNodesByReferencer
  };
  S(ast, ThirdPassVisitor, thirdPassState);
  ast._originMap = secondPassState.groupOriginByCopy;
  ast._strategy = firstPassState.strategy;
  return ast;
}
var FirstPassVisitor = {
  AbsenceFunction({ node, parent, replaceWith }) {
    const { body, kind } = node;
    if (kind === "repeater") {
      const innerGroup = A2();
      innerGroup.body[0].body.push(
        // Insert own alts as `body`
        K2({ negate: true, body }),
        Q2("Any")
      );
      const outerGroup = A2();
      outerGroup.body[0].body.push(
        _2("greedy", 0, Infinity, innerGroup)
      );
      replaceWith(setParentDeep(outerGroup, parent), { traverse: true });
    } else {
      throw new Error(`Unsupported absence function "(?~|"`);
    }
  },
  Alternative: {
    enter({ node, parent, key }, { flagDirectivesByAlt }) {
      const flagDirectives = node.body.filter((el) => el.kind === "flags");
      for (let i2 = key + 1; i2 < parent.body.length; i2++) {
        const forwardSiblingAlt = parent.body[i2];
        getOrInsert(flagDirectivesByAlt, forwardSiblingAlt, []).push(...flagDirectives);
      }
    },
    exit({ node }, { flagDirectivesByAlt }) {
      var _a2;
      if ((_a2 = flagDirectivesByAlt.get(node)) == null ? void 0 : _a2.length) {
        const flags = getCombinedFlagModsFromFlagNodes(flagDirectivesByAlt.get(node));
        if (flags) {
          const flagGroup = A2({ flags });
          flagGroup.body[0].body = node.body;
          node.body = [setParentDeep(flagGroup, node)];
        }
      }
    }
  },
  Assertion({ node, parent, key, container, root, remove, replaceWith }, state) {
    const { kind, negate } = node;
    const { asciiWordBoundaries, avoidSubclass, supportedGNodes, wordIsAscii } = state;
    if (kind === "text_segment_boundary") {
      throw new Error(`Unsupported text segment boundary "\\${negate ? "Y" : "y"}"`);
    } else if (kind === "line_end") {
      replaceWith(setParentDeep(K2({ body: [
        b2({ body: [F2("string_end")] }),
        b2({ body: [m2(10)] })
        // `\n`
      ] }), parent));
    } else if (kind === "line_start") {
      replaceWith(setParentDeep(parseFragment(r2`(?<=\A|\n(?!\z))`, { skipLookbehindValidation: true }), parent));
    } else if (kind === "search_start") {
      if (supportedGNodes.has(node)) {
        root.flags.sticky = true;
        remove();
      } else {
        const prev = container[key - 1];
        if (prev && isAlwaysNonZeroLength(prev)) {
          replaceWith(setParentDeep(K2({ negate: true }), parent));
        } else if (avoidSubclass) {
          throw new Error(r2`Uses "\G" in a way that requires a subclass`);
        } else {
          replaceWith(setParent(F2("string_start"), parent));
          state.strategy = "clip_search";
        }
      }
    } else if (kind === "string_end" || kind === "string_start") {
    } else if (kind === "string_end_newline") {
      replaceWith(setParentDeep(parseFragment(r2`(?=\n?\z)`), parent));
    } else if (kind === "word_boundary") {
      if (!wordIsAscii && !asciiWordBoundaries) {
        const b3 = `(?:(?<=${defaultWordChar})(?!${defaultWordChar})|(?<!${defaultWordChar})(?=${defaultWordChar}))`;
        const B3 = `(?:(?<=${defaultWordChar})(?=${defaultWordChar})|(?<!${defaultWordChar})(?!${defaultWordChar}))`;
        replaceWith(setParentDeep(parseFragment(negate ? B3 : b3), parent));
      }
    } else {
      throw new Error(`Unexpected assertion kind "${kind}"`);
    }
  },
  Backreference({ node }, { jsGroupNameMap }) {
    let { ref } = node;
    if (typeof ref === "string" && !isValidJsGroupName(ref)) {
      ref = getAndStoreJsGroupName(ref, jsGroupNameMap);
      node.ref = ref;
    }
  },
  CapturingGroup({ node }, { jsGroupNameMap, subroutineRefMap }) {
    let { name } = node;
    if (name && !isValidJsGroupName(name)) {
      name = getAndStoreJsGroupName(name, jsGroupNameMap);
      node.name = name;
    }
    subroutineRefMap.set(node.number, node);
    if (name) {
      subroutineRefMap.set(name, node);
    }
  },
  CharacterClassRange({ node, parent, replaceWith }) {
    if (parent.kind === "intersection") {
      const cc = C2({ body: [node] });
      replaceWith(setParentDeep(cc, parent), { traverse: true });
    }
  },
  CharacterSet({ node, parent, replaceWith }, { accuracy, minTargetEs2024, digitIsAscii, spaceIsAscii, wordIsAscii }) {
    const { kind, negate, value } = node;
    if (digitIsAscii && (kind === "digit" || value === "digit")) {
      replaceWith(setParent(E2("digit", { negate }), parent));
      return;
    }
    if (spaceIsAscii && (kind === "space" || value === "space")) {
      replaceWith(setParentDeep(setNegate(parseFragment(asciiSpaceChar), negate), parent));
      return;
    }
    if (wordIsAscii && (kind === "word" || value === "word")) {
      replaceWith(setParent(E2("word", { negate }), parent));
      return;
    }
    if (kind === "any") {
      replaceWith(setParent(Q2("Any"), parent));
    } else if (kind === "digit") {
      replaceWith(setParent(Q2("Nd", { negate }), parent));
    } else if (kind === "dot") {
    } else if (kind === "text_segment") {
      if (accuracy === "strict") {
        throw new Error(r2`Use of "\X" requires non-strict accuracy`);
      }
      const eBase = "\\p{Emoji}(?:\\p{EMod}|\\uFE0F\\u20E3?|[\\x{E0020}-\\x{E007E}]+\\x{E007F})?";
      const emoji = r2`\p{RI}{2}|${eBase}(?:\u200D${eBase})*`;
      replaceWith(setParentDeep(parseFragment(
        // Close approximation of an extended grapheme cluster; see <unicode.org/reports/tr29/>
        r2`(?>\r\n|${minTargetEs2024 ? r2`\p{RGI_Emoji}` : emoji}|\P{M}\p{M}*)`,
        // Allow JS property `RGI_Emoji` through
        { skipPropertyNameValidation: true }
      ), parent));
    } else if (kind === "hex") {
      replaceWith(setParent(Q2("AHex", { negate }), parent));
    } else if (kind === "newline") {
      replaceWith(setParentDeep(parseFragment(negate ? "[^\n]" : "(?>\r\n?|[\n\v\f\u2028\u2029])"), parent));
    } else if (kind === "posix") {
      if (!minTargetEs2024 && (value === "graph" || value === "print")) {
        if (accuracy === "strict") {
          throw new Error(`POSIX class "${value}" requires min target ES2024 or non-strict accuracy`);
        }
        let ascii = {
          graph: "!-~",
          print: " -~"
        }[value];
        if (negate) {
          ascii = `\0-${cp(ascii.codePointAt(0) - 1)}${cp(ascii.codePointAt(2) + 1)}-􏿿`;
        }
        replaceWith(setParentDeep(parseFragment(`[${ascii}]`), parent));
      } else {
        replaceWith(setParentDeep(setNegate(parseFragment(PosixClassMap.get(value)), negate), parent));
      }
    } else if (kind === "property") {
      if (!JsUnicodePropertyMap.has(w2(value))) {
        node.key = "sc";
      }
    } else if (kind === "space") {
      replaceWith(setParent(Q2("space", { negate }), parent));
    } else if (kind === "word") {
      replaceWith(setParentDeep(setNegate(parseFragment(defaultWordChar), negate), parent));
    } else {
      throw new Error(`Unexpected character set kind "${kind}"`);
    }
  },
  Directive({ node, parent, root, remove, replaceWith, removeAllPrevSiblings, removeAllNextSiblings }) {
    const { kind, flags } = node;
    if (kind === "flags") {
      if (!flags.enable && !flags.disable) {
        remove();
      } else {
        const flagGroup = A2({ flags });
        flagGroup.body[0].body = removeAllNextSiblings();
        replaceWith(setParentDeep(flagGroup, parent), { traverse: true });
      }
    } else if (kind === "keep") {
      const firstAlt = root.body[0];
      const hasWrapperGroup = root.body.length === 1 && // Not emulatable if within a `CapturingGroup`
      o2(firstAlt, { type: "Group" }) && firstAlt.body[0].body.length === 1;
      const topLevel = hasWrapperGroup ? firstAlt.body[0] : root;
      if (parent.parent !== topLevel || topLevel.body.length > 1) {
        throw new Error(r2`Uses "\K" in a way that's unsupported`);
      }
      const lookbehind = K2({ behind: true });
      lookbehind.body[0].body = removeAllPrevSiblings();
      replaceWith(setParentDeep(lookbehind, parent));
    } else {
      throw new Error(`Unexpected directive kind "${kind}"`);
    }
  },
  Flags({ node, parent }) {
    if (node.posixIsAscii) {
      throw new Error('Unsupported flag "P"');
    }
    if (node.textSegmentMode === "word") {
      throw new Error('Unsupported flag "y{w}"');
    }
    [
      "digitIsAscii",
      // Flag D
      "extended",
      // Flag x
      "posixIsAscii",
      // Flag P
      "spaceIsAscii",
      // Flag S
      "wordIsAscii",
      // Flag W
      "textSegmentMode"
      // Flag y{g} or y{w}
    ].forEach((f2) => delete node[f2]);
    Object.assign(node, {
      // JS flag g; no Onig equiv
      global: false,
      // JS flag d; no Onig equiv
      hasIndices: false,
      // JS flag m; no Onig equiv but its behavior is always on in Onig. Onig's only line break
      // char is line feed, unlike JS, so this flag isn't used since it would produce inaccurate
      // results (also allows `^` and `$` to be used in the generator for string start and end)
      multiline: false,
      // JS flag y; no Onig equiv, but used for `\G` emulation
      sticky: node.sticky ?? false
      // Note: Regex+ doesn't allow explicitly adding flags it handles implicitly, so leave out
      // properties `unicode` (JS flag u) and `unicodeSets` (JS flag v). Keep the existing values
      // for `ignoreCase` (flag i) and `dotAll` (JS flag s, but Onig flag m)
    });
    parent.options = {
      disable: {
        // Onig uses different rules for flag x than Regex+, so disable the implicit flag
        x: true,
        // Onig has no flag to control "named capture only" mode but contextually applies its
        // behavior when named capturing is used, so disable Regex+'s implicit flag for it
        n: true
      },
      force: {
        // Always add flag v because we're generating an AST that relies on it (it enables JS
        // support for Onig features nested classes, intersection, Unicode properties, etc.).
        // However, the generator might disable flag v based on its `target` option
        v: true
      }
    };
  },
  Group({ node }) {
    if (!node.flags) {
      return;
    }
    const { enable, disable } = node.flags;
    (enable == null ? void 0 : enable.extended) && delete enable.extended;
    (disable == null ? void 0 : disable.extended) && delete disable.extended;
    (enable == null ? void 0 : enable.dotAll) && (disable == null ? void 0 : disable.dotAll) && delete enable.dotAll;
    (enable == null ? void 0 : enable.ignoreCase) && (disable == null ? void 0 : disable.ignoreCase) && delete enable.ignoreCase;
    enable && !Object.keys(enable).length && delete node.flags.enable;
    disable && !Object.keys(disable).length && delete node.flags.disable;
    !node.flags.enable && !node.flags.disable && delete node.flags;
  },
  LookaroundAssertion({ node }, state) {
    const { kind } = node;
    if (kind === "lookbehind") {
      state.passedLookbehind = true;
    }
  },
  NamedCallout({ node, parent, replaceWith }) {
    const { kind } = node;
    if (kind === "fail") {
      replaceWith(setParentDeep(K2({ negate: true }), parent));
    } else {
      throw new Error(`Unsupported named callout "(*${kind.toUpperCase()}"`);
    }
  },
  Quantifier({ node }) {
    if (node.body.type === "Quantifier") {
      const group = A2();
      group.body[0].body.push(node.body);
      node.body = setParentDeep(group, node);
    }
  },
  Regex: {
    enter({ node }, { supportedGNodes }) {
      const leadingGs = [];
      let hasAltWithLeadG = false;
      let hasAltWithoutLeadG = false;
      for (const alt of node.body) {
        if (alt.body.length === 1 && alt.body[0].kind === "search_start") {
          alt.body.pop();
        } else {
          const leadingG = getLeadingG(alt.body);
          if (leadingG) {
            hasAltWithLeadG = true;
            Array.isArray(leadingG) ? leadingGs.push(...leadingG) : leadingGs.push(leadingG);
          } else {
            hasAltWithoutLeadG = true;
          }
        }
      }
      if (hasAltWithLeadG && !hasAltWithoutLeadG) {
        leadingGs.forEach((g) => supportedGNodes.add(g));
      }
    },
    exit(_3, { accuracy, passedLookbehind, strategy }) {
      if (accuracy === "strict" && passedLookbehind && strategy) {
        throw new Error(r2`Uses "\G" in a way that requires non-strict accuracy`);
      }
    }
  },
  Subroutine({ node }, { jsGroupNameMap }) {
    let { ref } = node;
    if (typeof ref === "string" && !isValidJsGroupName(ref)) {
      ref = getAndStoreJsGroupName(ref, jsGroupNameMap);
      node.ref = ref;
    }
  }
};
var SecondPassVisitor = {
  Backreference({ node }, { multiplexCapturesToLeftByRef, reffedNodesByReferencer }) {
    const { orphan, ref } = node;
    if (!orphan) {
      reffedNodesByReferencer.set(node, [...multiplexCapturesToLeftByRef.get(ref).map(({ node: node2 }) => node2)]);
    }
  },
  CapturingGroup: {
    enter({
      node,
      parent,
      replaceWith,
      skip
    }, {
      groupOriginByCopy,
      groupsByName,
      multiplexCapturesToLeftByRef,
      openRefs,
      reffedNodesByReferencer
    }) {
      const origin = groupOriginByCopy.get(node);
      if (origin && openRefs.has(node.number)) {
        const recursion2 = setParent(createRecursion(node.number), parent);
        reffedNodesByReferencer.set(recursion2, openRefs.get(node.number));
        replaceWith(recursion2);
        return;
      }
      openRefs.set(node.number, node);
      multiplexCapturesToLeftByRef.set(node.number, []);
      if (node.name) {
        getOrInsert(multiplexCapturesToLeftByRef, node.name, []);
      }
      const multiplexNodes = multiplexCapturesToLeftByRef.get(node.name ?? node.number);
      for (let i2 = 0; i2 < multiplexNodes.length; i2++) {
        const multiplex = multiplexNodes[i2];
        if (
          // This group is from subroutine expansion, and there's a multiplex value from either the
          // origin node or a prior subroutine expansion group with the same origin
          origin === multiplex.node || origin && origin === multiplex.origin || // This group is not from subroutine expansion, and it comes after a subroutine expansion
          // group that refers to this group
          node === multiplex.origin
        ) {
          multiplexNodes.splice(i2, 1);
          break;
        }
      }
      multiplexCapturesToLeftByRef.get(node.number).push({ node, origin });
      if (node.name) {
        multiplexCapturesToLeftByRef.get(node.name).push({ node, origin });
      }
      if (node.name) {
        const groupsWithSameName = getOrInsert(groupsByName, node.name, /* @__PURE__ */ new Map());
        let hasDuplicateNameToRemove = false;
        if (origin) {
          hasDuplicateNameToRemove = true;
        } else {
          for (const groupInfo of groupsWithSameName.values()) {
            if (!groupInfo.hasDuplicateNameToRemove) {
              hasDuplicateNameToRemove = true;
              break;
            }
          }
        }
        groupsByName.get(node.name).set(node, { node, hasDuplicateNameToRemove });
      }
    },
    exit({ node }, { openRefs }) {
      if (openRefs.get(node.number) === node) {
        openRefs.delete(node.number);
      }
    }
  },
  Group: {
    enter({ node }, state) {
      state.prevFlags = state.currentFlags;
      if (node.flags) {
        state.currentFlags = getNewCurrentFlags(state.currentFlags, node.flags);
      }
    },
    exit(_3, state) {
      state.currentFlags = state.prevFlags;
    }
  },
  Subroutine({ node, parent, replaceWith }, state) {
    const { isRecursive, ref } = node;
    if (isRecursive) {
      let reffed = parent;
      while (reffed = reffed.parent) {
        if (reffed.type === "CapturingGroup" && (reffed.name === ref || reffed.number === ref)) {
          break;
        }
      }
      state.reffedNodesByReferencer.set(node, reffed);
      return;
    }
    const reffedGroupNode = state.subroutineRefMap.get(ref);
    const isGlobalRecursion = ref === 0;
    const expandedSubroutine = isGlobalRecursion ? createRecursion(0) : (
      // The reffed group might itself contain subroutines, which are expanded during sub-traversal
      cloneCapturingGroup(reffedGroupNode, state.groupOriginByCopy, null)
    );
    let replacement = expandedSubroutine;
    if (!isGlobalRecursion) {
      const reffedGroupFlagMods = getCombinedFlagModsFromFlagNodes(getAllParents(
        reffedGroupNode,
        (p) => p.type === "Group" && !!p.flags
      ));
      const reffedGroupFlags = reffedGroupFlagMods ? getNewCurrentFlags(state.globalFlags, reffedGroupFlagMods) : state.globalFlags;
      if (!areFlagsEqual(reffedGroupFlags, state.currentFlags)) {
        replacement = A2({
          flags: getFlagModsFromFlags(reffedGroupFlags)
        });
        replacement.body[0].body.push(expandedSubroutine);
      }
    }
    replaceWith(setParentDeep(replacement, parent), { traverse: !isGlobalRecursion });
  }
};
var ThirdPassVisitor = {
  Backreference({ node, parent, replaceWith }, state) {
    if (node.orphan) {
      state.highestOrphanBackref = Math.max(state.highestOrphanBackref, node.ref);
      return;
    }
    const reffedNodes = state.reffedNodesByReferencer.get(node);
    const participants = reffedNodes.filter((reffed) => canParticipateWithNode(reffed, node));
    if (!participants.length) {
      replaceWith(setParentDeep(K2({ negate: true }), parent));
    } else if (participants.length > 1) {
      const group = A2({
        atomic: true,
        body: participants.reverse().map((reffed) => b2({
          body: [k2(reffed.number)]
        }))
      });
      replaceWith(setParentDeep(group, parent));
    } else {
      node.ref = participants[0].number;
    }
  },
  CapturingGroup({ node }, state) {
    node.number = ++state.numCapturesToLeft;
    if (node.name) {
      if (state.groupsByName.get(node.name).get(node).hasDuplicateNameToRemove) {
        delete node.name;
      }
    }
  },
  Regex: {
    exit({ node }, state) {
      const numCapsNeeded = Math.max(state.highestOrphanBackref - state.numCapturesToLeft, 0);
      for (let i2 = 0; i2 < numCapsNeeded; i2++) {
        const emptyCapture = P2();
        node.body.at(-1).body.push(emptyCapture);
      }
    }
  },
  Subroutine({ node }, state) {
    if (!node.isRecursive || node.ref === 0) {
      return;
    }
    node.ref = state.reffedNodesByReferencer.get(node).number;
  }
};
function addParentProperties(root) {
  S(root, {
    "*"({ node, parent }) {
      node.parent = parent;
    }
  });
}
function areFlagsEqual(a2, b3) {
  return a2.dotAll === b3.dotAll && a2.ignoreCase === b3.ignoreCase;
}
function canParticipateWithNode(capture, node) {
  let rightmostPoint = node;
  do {
    if (rightmostPoint.type === "Regex") {
      return false;
    }
    if (rightmostPoint.type === "Alternative") {
      continue;
    }
    if (rightmostPoint === capture) {
      return false;
    }
    const kidsOfParent = getKids(rightmostPoint.parent);
    for (const kid of kidsOfParent) {
      if (kid === rightmostPoint) {
        break;
      }
      if (kid === capture || isAncestorOf(kid, capture)) {
        return true;
      }
    }
  } while (rightmostPoint = rightmostPoint.parent);
  throw new Error("Unexpected path");
}
function cloneCapturingGroup(obj, originMap, up, up2) {
  const store = Array.isArray(obj) ? [] : {};
  for (const [key, value] of Object.entries(obj)) {
    if (key === "parent") {
      store.parent = Array.isArray(up) ? up2 : up;
    } else if (value && typeof value === "object") {
      store[key] = cloneCapturingGroup(value, originMap, store, up);
    } else {
      if (key === "type" && value === "CapturingGroup") {
        originMap.set(store, originMap.get(obj) ?? obj);
      }
      store[key] = value;
    }
  }
  return store;
}
function createRecursion(ref) {
  const node = O2(ref);
  node.isRecursive = true;
  return node;
}
function getAllParents(node, filterFn) {
  const results = [];
  while (node = node.parent) {
    if (!filterFn || filterFn(node)) {
      results.push(node);
    }
  }
  return results;
}
function getAndStoreJsGroupName(name, map) {
  if (map.has(name)) {
    return map.get(name);
  }
  const jsName = `$${map.size}_${name.replace(/^[^$_\p{IDS}]|[^$\u200C\u200D\p{IDC}]/ug, "_")}`;
  map.set(name, jsName);
  return jsName;
}
function getCombinedFlagModsFromFlagNodes(flagNodes) {
  const flagProps = ["dotAll", "ignoreCase"];
  const combinedFlags = { enable: {}, disable: {} };
  flagNodes.forEach(({ flags }) => {
    flagProps.forEach((prop) => {
      var _a2, _b;
      if ((_a2 = flags.enable) == null ? void 0 : _a2[prop]) {
        delete combinedFlags.disable[prop];
        combinedFlags.enable[prop] = true;
      }
      if ((_b = flags.disable) == null ? void 0 : _b[prop]) {
        combinedFlags.disable[prop] = true;
      }
    });
  });
  if (!Object.keys(combinedFlags.enable).length) {
    delete combinedFlags.enable;
  }
  if (!Object.keys(combinedFlags.disable).length) {
    delete combinedFlags.disable;
  }
  if (combinedFlags.enable || combinedFlags.disable) {
    return combinedFlags;
  }
  return null;
}
function getFlagModsFromFlags({ dotAll, ignoreCase }) {
  const mods = {};
  if (dotAll || ignoreCase) {
    mods.enable = {};
    dotAll && (mods.enable.dotAll = true);
    ignoreCase && (mods.enable.ignoreCase = true);
  }
  if (!dotAll || !ignoreCase) {
    mods.disable = {};
    !dotAll && (mods.disable.dotAll = true);
    !ignoreCase && (mods.disable.ignoreCase = true);
  }
  return mods;
}
function getKids(node) {
  if (!node) {
    throw new Error("Node expected");
  }
  const { body } = node;
  return Array.isArray(body) ? body : body ? [body] : null;
}
function getLeadingG(els) {
  const firstToConsider = els.find((el) => el.kind === "search_start" || isLoneGLookaround(el, { negate: false }) || !isAlwaysZeroLength(el));
  if (!firstToConsider) {
    return null;
  }
  if (firstToConsider.kind === "search_start") {
    return firstToConsider;
  }
  if (firstToConsider.type === "LookaroundAssertion") {
    return firstToConsider.body[0].body[0];
  }
  if (firstToConsider.type === "CapturingGroup" || firstToConsider.type === "Group") {
    const gNodesForGroup = [];
    for (const alt of firstToConsider.body) {
      const leadingG = getLeadingG(alt.body);
      if (!leadingG) {
        return null;
      }
      Array.isArray(leadingG) ? gNodesForGroup.push(...leadingG) : gNodesForGroup.push(leadingG);
    }
    return gNodesForGroup;
  }
  return null;
}
function isAncestorOf(node, descendant) {
  const kids = getKids(node) ?? [];
  for (const kid of kids) {
    if (kid === descendant || isAncestorOf(kid, descendant)) {
      return true;
    }
  }
  return false;
}
function isAlwaysZeroLength({ type }) {
  return type === "Assertion" || type === "Directive" || type === "LookaroundAssertion";
}
function isAlwaysNonZeroLength(node) {
  const types = [
    "Character",
    "CharacterClass",
    "CharacterSet"
  ];
  return types.includes(node.type) || node.type === "Quantifier" && node.min && types.includes(node.body.type);
}
function isLoneGLookaround(node, options) {
  const opts = {
    negate: null,
    ...options
  };
  return node.type === "LookaroundAssertion" && (opts.negate === null || node.negate === opts.negate) && node.body.length === 1 && o2(node.body[0], {
    type: "Assertion",
    kind: "search_start"
  });
}
function isValidJsGroupName(name) {
  return /^[$_\p{IDS}][$\u200C\u200D\p{IDC}]*$/u.test(name);
}
function parseFragment(pattern, options) {
  const ast = J2(pattern, {
    ...options,
    // Providing a custom set of Unicode property names avoids converting some JS Unicode
    // properties (ex: `\p{Alpha}`) to Onig POSIX classes
    unicodePropertyMap: JsUnicodePropertyMap
  });
  const alts = ast.body;
  if (alts.length > 1 || alts[0].body.length > 1) {
    return A2({ body: alts });
  }
  return alts[0].body[0];
}
function setNegate(node, negate) {
  node.negate = negate;
  return node;
}
function setParent(node, parent) {
  node.parent = parent;
  return node;
}
function setParentDeep(node, parent) {
  addParentProperties(node);
  node.parent = parent;
  return node;
}
function generate(ast, options) {
  const opts = getOptions(options);
  const minTargetEs2024 = isMinTarget(opts.target, "ES2024");
  const minTargetEs2025 = isMinTarget(opts.target, "ES2025");
  const recursionLimit = opts.rules.recursionLimit;
  if (!Number.isInteger(recursionLimit) || recursionLimit < 2 || recursionLimit > 20) {
    throw new Error("Invalid recursionLimit; use 2-20");
  }
  let hasCaseInsensitiveNode = null;
  let hasCaseSensitiveNode = null;
  if (!minTargetEs2025) {
    const iStack = [ast.flags.ignoreCase];
    S(ast, FlagModifierVisitor, {
      getCurrentModI: () => iStack.at(-1),
      popModI() {
        iStack.pop();
      },
      pushModI(isIOn) {
        iStack.push(isIOn);
      },
      setHasCasedChar() {
        if (iStack.at(-1)) {
          hasCaseInsensitiveNode = true;
        } else {
          hasCaseSensitiveNode = true;
        }
      }
    });
  }
  const appliedGlobalFlags = {
    dotAll: ast.flags.dotAll,
    // - Turn global flag i on if a case insensitive node was used and no case sensitive nodes were
    //   used (to avoid unnecessary node expansion).
    // - Turn global flag i off if a case sensitive node was used (since case sensitivity can't be
    //   forced without the use of ES2025 flag groups)
    ignoreCase: !!((ast.flags.ignoreCase || hasCaseInsensitiveNode) && !hasCaseSensitiveNode)
  };
  let lastNode = ast;
  const state = {
    accuracy: opts.accuracy,
    appliedGlobalFlags,
    captureMap: /* @__PURE__ */ new Map(),
    currentFlags: {
      dotAll: ast.flags.dotAll,
      ignoreCase: ast.flags.ignoreCase
    },
    inCharClass: false,
    lastNode,
    originMap: ast._originMap,
    recursionLimit,
    useAppliedIgnoreCase: !!(!minTargetEs2025 && hasCaseInsensitiveNode && hasCaseSensitiveNode),
    useFlagMods: minTargetEs2025,
    useFlagV: minTargetEs2024,
    verbose: opts.verbose
  };
  function gen(node) {
    state.lastNode = lastNode;
    lastNode = node;
    const fn = throwIfNullish(generator[node.type], `Unexpected node type "${node.type}"`);
    return fn(node, state, gen);
  }
  const result = {
    pattern: ast.body.map(gen).join("|"),
    // Could reset `lastNode` at this point via `lastNode = ast`, but it isn't needed by flags
    flags: gen(ast.flags),
    options: { ...ast.options }
  };
  if (!minTargetEs2024) {
    delete result.options.force.v;
    result.options.disable.v = true;
    result.options.unicodeSetsPlugin = null;
  }
  result._captureTransfers = /* @__PURE__ */ new Map();
  result._hiddenCaptures = [];
  state.captureMap.forEach((value, key) => {
    if (value.hidden) {
      result._hiddenCaptures.push(key);
    }
    if (value.transferTo) {
      getOrInsert(result._captureTransfers, value.transferTo, []).push(key);
    }
  });
  return result;
}
var FlagModifierVisitor = {
  "*": {
    enter({ node }, state) {
      if (isAnyGroup(node)) {
        const currentModI = state.getCurrentModI();
        state.pushModI(
          node.flags ? getNewCurrentFlags({ ignoreCase: currentModI }, node.flags).ignoreCase : currentModI
        );
      }
    },
    exit({ node }, state) {
      if (isAnyGroup(node)) {
        state.popModI();
      }
    }
  },
  Backreference(_3, state) {
    state.setHasCasedChar();
  },
  Character({ node }, state) {
    if (charHasCase(cp(node.value))) {
      state.setHasCasedChar();
    }
  },
  CharacterClassRange({ node, skip }, state) {
    skip();
    if (getCasesOutsideCharClassRange(node, { firstOnly: true }).length) {
      state.setHasCasedChar();
    }
  },
  CharacterSet({ node }, state) {
    if (node.kind === "property" && UnicodePropertiesWithSpecificCase.has(node.value)) {
      state.setHasCasedChar();
    }
  }
};
var generator = {
  /**
  @param {AlternativeNode} node
  */
  Alternative({ body }, _3, gen) {
    return body.map(gen).join("");
  },
  /**
  @param {AssertionNode} node
  */
  Assertion({ kind, negate }) {
    if (kind === "string_end") {
      return "$";
    }
    if (kind === "string_start") {
      return "^";
    }
    if (kind === "word_boundary") {
      return negate ? r2`\B` : r2`\b`;
    }
    throw new Error(`Unexpected assertion kind "${kind}"`);
  },
  /**
  @param {BackreferenceNode} node
  */
  Backreference({ ref }, state) {
    if (typeof ref !== "number") {
      throw new Error("Unexpected named backref in transformed AST");
    }
    if (!state.useFlagMods && state.accuracy === "strict" && state.currentFlags.ignoreCase && !state.captureMap.get(ref).ignoreCase) {
      throw new Error("Use of case-insensitive backref to case-sensitive group requires target ES2025 or non-strict accuracy");
    }
    return "\\" + ref;
  },
  /**
  @param {CapturingGroupNode} node
  */
  CapturingGroup(node, state, gen) {
    const { body, name, number } = node;
    const data = { ignoreCase: state.currentFlags.ignoreCase };
    const origin = state.originMap.get(node);
    if (origin) {
      data.hidden = true;
      if (number > origin.number) {
        data.transferTo = origin.number;
      }
    }
    state.captureMap.set(number, data);
    return `(${name ? `?<${name}>` : ""}${body.map(gen).join("|")})`;
  },
  /**
  @param {CharacterNode} node
  */
  Character({ value }, state) {
    const char = cp(value);
    const escaped = getCharEscape(value, {
      escDigit: state.lastNode.type === "Backreference",
      inCharClass: state.inCharClass,
      useFlagV: state.useFlagV
    });
    if (escaped !== char) {
      return escaped;
    }
    if (state.useAppliedIgnoreCase && state.currentFlags.ignoreCase && charHasCase(char)) {
      const cases = getIgnoreCaseMatchChars(char);
      return state.inCharClass ? cases.join("") : cases.length > 1 ? `[${cases.join("")}]` : cases[0];
    }
    return char;
  },
  /**
  @param {CharacterClassNode} node
  */
  CharacterClass(node, state, gen) {
    const { kind, negate, parent } = node;
    let { body } = node;
    if (kind === "intersection" && !state.useFlagV) {
      throw new Error("Use of character class intersection requires min target ES2024");
    }
    if (envFlags.bugFlagVLiteralHyphenIsRange && state.useFlagV && body.some(isLiteralHyphen)) {
      body = [m2(45), ...body.filter((kid) => !isLiteralHyphen(kid))];
    }
    const genClass = () => `[${negate ? "^" : ""}${body.map(gen).join(kind === "intersection" ? "&&" : "")}]`;
    if (!state.inCharClass) {
      if (
        // Already established `kind !== 'intersection'` if `!state.useFlagV`; don't check again
        (!state.useFlagV || envFlags.bugNestedClassIgnoresNegation) && !negate
      ) {
        const negatedChildClasses = body.filter(
          (kid) => kid.type === "CharacterClass" && kid.kind === "union" && kid.negate
        );
        if (negatedChildClasses.length) {
          const group = A2();
          const groupFirstAlt = group.body[0];
          group.parent = parent;
          groupFirstAlt.parent = group;
          body = body.filter((kid) => !negatedChildClasses.includes(kid));
          node.body = body;
          if (body.length) {
            node.parent = groupFirstAlt;
            groupFirstAlt.body.push(node);
          } else {
            group.body.pop();
          }
          negatedChildClasses.forEach((cc) => {
            const newAlt = b2({ body: [cc] });
            cc.parent = newAlt;
            newAlt.parent = group;
            group.body.push(newAlt);
          });
          return gen(group);
        }
      }
      state.inCharClass = true;
      const result = genClass();
      state.inCharClass = false;
      return result;
    }
    const firstEl = body[0];
    if (
      // Already established that the parent is a char class via `inCharClass`; don't check again
      kind === "union" && !negate && firstEl && // Allows many nested classes to work with `target` ES2018 which doesn't support nesting
      ((!state.useFlagV || !state.verbose) && parent.kind === "union" && !(envFlags.bugFlagVLiteralHyphenIsRange && state.useFlagV) || !state.verbose && parent.kind === "intersection" && // JS doesn't allow intersection with union or ranges
      body.length === 1 && firstEl.type !== "CharacterClassRange")
    ) {
      return body.map(gen).join("");
    }
    if (!state.useFlagV && parent.type === "CharacterClass") {
      throw new Error("Uses nested character class in a way that requires min target ES2024");
    }
    return genClass();
  },
  /**
  @param {CharacterClassRangeNode} node
  */
  CharacterClassRange(node, state) {
    const min = node.min.value;
    const max = node.max.value;
    const escOpts = {
      escDigit: false,
      inCharClass: true,
      useFlagV: state.useFlagV
    };
    const minStr = getCharEscape(min, escOpts);
    const maxStr = getCharEscape(max, escOpts);
    const extraChars = /* @__PURE__ */ new Set();
    if (state.useAppliedIgnoreCase && state.currentFlags.ignoreCase) {
      const charsOutsideRange = getCasesOutsideCharClassRange(node);
      const ranges = getCodePointRangesFromChars(charsOutsideRange);
      ranges.forEach((value) => {
        extraChars.add(
          Array.isArray(value) ? `${getCharEscape(value[0], escOpts)}-${getCharEscape(value[1], escOpts)}` : getCharEscape(value, escOpts)
        );
      });
    }
    return `${minStr}-${maxStr}${[...extraChars].join("")}`;
  },
  /**
  @param {CharacterSetNode} node
  */
  CharacterSet({ kind, negate, value, key }, state) {
    if (kind === "dot") {
      return state.currentFlags.dotAll ? state.appliedGlobalFlags.dotAll || state.useFlagMods ? "." : "[^]" : (
        // Onig's only line break char is line feed, unlike JS
        r2`[^\n]`
      );
    }
    if (kind === "digit") {
      return negate ? r2`\D` : r2`\d`;
    }
    if (kind === "property") {
      if (state.useAppliedIgnoreCase && state.currentFlags.ignoreCase && UnicodePropertiesWithSpecificCase.has(value)) {
        throw new Error(`Unicode property "${value}" can't be case-insensitive when other chars have specific case`);
      }
      return `${negate ? r2`\P` : r2`\p`}{${key ? `${key}=` : ""}${value}}`;
    }
    if (kind === "word") {
      return negate ? r2`\W` : r2`\w`;
    }
    throw new Error(`Unexpected character set kind "${kind}"`);
  },
  /**
  @param {FlagsNode} node
  */
  Flags(node, state) {
    return (
      // The transformer should never turn on the properties for flags d, g, m since Onig doesn't
      // have equivs. Flag m is never used since Onig uses different line break chars than JS
      // (node.hasIndices ? 'd' : '') +
      // (node.global ? 'g' : '') +
      // (node.multiline ? 'm' : '') +
      (state.appliedGlobalFlags.ignoreCase ? "i" : "") + (node.dotAll ? "s" : "") + (node.sticky ? "y" : "")
    );
  },
  /**
  @param {GroupNode} node
  */
  Group({ atomic: atomic2, body, flags, parent }, state, gen) {
    const currentFlags = state.currentFlags;
    if (flags) {
      state.currentFlags = getNewCurrentFlags(currentFlags, flags);
    }
    const contents = body.map(gen).join("|");
    const result = !state.verbose && body.length === 1 && // Single alt
    parent.type !== "Quantifier" && !atomic2 && (!state.useFlagMods || !flags) ? contents : `(?${getGroupPrefix(atomic2, flags, state.useFlagMods)}${contents})`;
    state.currentFlags = currentFlags;
    return result;
  },
  /**
  @param {LookaroundAssertionNode} node
  */
  LookaroundAssertion({ body, kind, negate }, _3, gen) {
    const prefix = `${kind === "lookahead" ? "" : "<"}${negate ? "!" : "="}`;
    return `(?${prefix}${body.map(gen).join("|")})`;
  },
  /**
  @param {QuantifierNode} node
  */
  Quantifier(node, _3, gen) {
    return gen(node.body) + getQuantifierStr(node);
  },
  /**
  @param {SubroutineNode & {isRecursive: true}} node
  */
  Subroutine({ isRecursive, ref }, state) {
    if (!isRecursive) {
      throw new Error("Unexpected non-recursive subroutine in transformed AST");
    }
    const limit = state.recursionLimit;
    return ref === 0 ? `(?R=${limit})` : r2`\g<${ref}&R=${limit}>`;
  }
};
var BaseEscapeChars = /* @__PURE__ */ new Set([
  "$",
  "(",
  ")",
  "*",
  "+",
  ".",
  "?",
  "[",
  "\\",
  "]",
  "^",
  "{",
  "|",
  "}"
]);
var CharClassEscapeChars = /* @__PURE__ */ new Set([
  "-",
  "\\",
  "]",
  "^",
  // Literal `[` doesn't require escaping with flag u, but this can help work around regex source
  // linters and regex syntax processors that expect unescaped `[` to create a nested class
  "["
]);
var CharClassEscapeCharsFlagV = /* @__PURE__ */ new Set([
  "(",
  ")",
  "-",
  "/",
  "[",
  "\\",
  "]",
  "^",
  "{",
  "|",
  "}",
  // Double punctuators; also includes already-listed `-` and `^`
  "!",
  "#",
  "$",
  "%",
  "&",
  "*",
  "+",
  ",",
  ".",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "`",
  "~"
]);
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
function charHasCase(char) {
  return casedRe.test(char);
}
function getCasesOutsideCharClassRange(node, options) {
  const firstOnly = !!(options == null ? void 0 : options.firstOnly);
  const min = node.min.value;
  const max = node.max.value;
  const found = [];
  if (min < 65 && (max === 65535 || max >= 131071) || min === 65536 && max >= 131071) {
    return found;
  }
  for (let i2 = min; i2 <= max; i2++) {
    const char = cp(i2);
    if (!charHasCase(char)) {
      continue;
    }
    const charsOutsideRange = getIgnoreCaseMatchChars(char).filter((caseOfChar) => {
      const num = caseOfChar.codePointAt(0);
      return num < min || num > max;
    });
    if (charsOutsideRange.length) {
      found.push(...charsOutsideRange);
      if (firstOnly) {
        break;
      }
    }
  }
  return found;
}
function getCharEscape(codePoint, { escDigit, inCharClass, useFlagV }) {
  if (CharCodeEscapeMap.has(codePoint)) {
    return CharCodeEscapeMap.get(codePoint);
  }
  if (
    // Control chars, etc.; condition modeled on the Chrome developer console's display for strings
    codePoint < 32 || codePoint > 126 && codePoint < 160 || // Unicode planes 4-16; unassigned, special purpose, and private use area
    codePoint > 262143 || // Avoid corrupting a preceding backref by immediately following it with a literal digit
    escDigit && isDigitCharCode(codePoint)
  ) {
    return codePoint > 255 ? `\\u{${codePoint.toString(16).toUpperCase()}}` : `\\x${codePoint.toString(16).toUpperCase().padStart(2, "0")}`;
  }
  const escapeChars = inCharClass ? useFlagV ? CharClassEscapeCharsFlagV : CharClassEscapeChars : BaseEscapeChars;
  const char = cp(codePoint);
  return (escapeChars.has(char) ? "\\" : "") + char;
}
function getCodePointRangesFromChars(chars) {
  const codePoints = chars.map((char) => char.codePointAt(0)).sort((a2, b3) => a2 - b3);
  const values = [];
  let start = null;
  for (let i2 = 0; i2 < codePoints.length; i2++) {
    if (codePoints[i2 + 1] === codePoints[i2] + 1) {
      start ?? (start = codePoints[i2]);
    } else if (start === null) {
      values.push(codePoints[i2]);
    } else {
      values.push([start, codePoints[i2]]);
      start = null;
    }
  }
  return values;
}
function getGroupPrefix(atomic2, flagMods, useFlagMods) {
  if (atomic2) {
    return ">";
  }
  let mods = "";
  if (flagMods && useFlagMods) {
    const { enable, disable } = flagMods;
    mods = ((enable == null ? void 0 : enable.ignoreCase) ? "i" : "") + ((enable == null ? void 0 : enable.dotAll) ? "s" : "") + (disable ? "-" : "") + ((disable == null ? void 0 : disable.ignoreCase) ? "i" : "") + ((disable == null ? void 0 : disable.dotAll) ? "s" : "");
  }
  return `${mods}:`;
}
function getQuantifierStr({ kind, max, min }) {
  let base;
  if (!min && max === 1) {
    base = "?";
  } else if (!min && max === Infinity) {
    base = "*";
  } else if (min === 1 && max === Infinity) {
    base = "+";
  } else if (min === max) {
    base = `{${min}}`;
  } else {
    base = `{${min},${max === Infinity ? "" : max}}`;
  }
  return base + {
    greedy: "",
    lazy: "?",
    possessive: "+"
  }[kind];
}
function isAnyGroup({ type }) {
  return type === "CapturingGroup" || type === "Group" || type === "LookaroundAssertion";
}
function isDigitCharCode(value) {
  return value > 47 && value < 58;
}
function isLiteralHyphen({ type, value }) {
  return type === "Character" && value === 45;
}
var _captureMap, _compiled, _pattern, _nameMap, _strategy, __EmulatedRegExp_instances, execCore_fn, _a;
var EmulatedRegExp = (_a = class extends RegExp {
  /**
  @overload
  @param {string} pattern
  @param {string} [flags]
  @param {EmulatedRegExpOptions} [options]
  */
  /**
  @overload
  @param {EmulatedRegExp} pattern
  @param {string} [flags]
  */
  constructor(pattern, flags, options) {
    var __super = (...args) => {
      super(...args);
      __privateAdd(this, __EmulatedRegExp_instances);
      /**
      @type {Map<number, {
        hidden?: true;
        transferTo?: number;
      }>}
      */
      __privateAdd(this, _captureMap, /* @__PURE__ */ new Map());
      /**
      @type {RegExp | EmulatedRegExp | null}
      */
      __privateAdd(this, _compiled, null);
      /**
      @type {string}
      */
      __privateAdd(this, _pattern);
      /**
      @type {Map<number, string>?}
      */
      __privateAdd(this, _nameMap, null);
      /**
      @type {string?}
      */
      __privateAdd(this, _strategy, null);
      /**
      Can be used to serialize the instance.
      @type {EmulatedRegExpOptions}
      */
      __publicField(this, "rawOptions", {});
      return this;
    };
    const lazyCompile = !!(options == null ? void 0 : options.lazyCompile);
    if (pattern instanceof RegExp) {
      if (options) {
        throw new Error("Cannot provide options when copying a regexp");
      }
      const re2 = pattern;
      __super(re2, flags);
      __privateSet(this, _pattern, re2.source);
      if (re2 instanceof _a) {
        __privateSet(this, _captureMap, __privateGet(re2, _captureMap));
        __privateSet(this, _nameMap, __privateGet(re2, _nameMap));
        __privateSet(this, _strategy, __privateGet(re2, _strategy));
        this.rawOptions = re2.rawOptions;
      }
    } else {
      const opts = {
        hiddenCaptures: [],
        strategy: null,
        transfers: [],
        ...options
      };
      __super(lazyCompile ? "" : pattern, flags);
      __privateSet(this, _pattern, pattern);
      __privateSet(this, _captureMap, createCaptureMap(opts.hiddenCaptures, opts.transfers));
      __privateSet(this, _strategy, opts.strategy);
      this.rawOptions = options ?? {};
    }
    if (!lazyCompile) {
      __privateSet(this, _compiled, this);
    }
  }
  // Override the getter with one that works with lazy-compiled regexes
  get source() {
    return __privateGet(this, _pattern) || "(?:)";
  }
  /**
  Called internally by all String/RegExp methods that use regexes.
  @override
  @param {string} str
  @returns {RegExpExecArray?}
  */
  exec(str) {
    if (!__privateGet(this, _compiled)) {
      const { lazyCompile, ...rest } = this.rawOptions;
      __privateSet(this, _compiled, new _a(__privateGet(this, _pattern), this.flags, rest));
    }
    const useLastIndex = this.global || this.sticky;
    const pos = this.lastIndex;
    if (__privateGet(this, _strategy) === "clip_search" && useLastIndex && pos) {
      this.lastIndex = 0;
      const match = __privateMethod(this, __EmulatedRegExp_instances, execCore_fn).call(this, str.slice(pos));
      if (match) {
        adjustMatchDetailsForOffset(match, pos, str, this.hasIndices);
        this.lastIndex += pos;
      }
      return match;
    }
    return __privateMethod(this, __EmulatedRegExp_instances, execCore_fn).call(this, str);
  }
}, _captureMap = new WeakMap(), _compiled = new WeakMap(), _pattern = new WeakMap(), _nameMap = new WeakMap(), _strategy = new WeakMap(), __EmulatedRegExp_instances = new WeakSet(), /**
Adds support for hidden and transfer captures.
@param {string} str
@returns
*/
execCore_fn = function(str) {
  __privateGet(this, _compiled).lastIndex = this.lastIndex;
  const match = __superGet(_a.prototype, this, "exec").call(__privateGet(this, _compiled), str);
  this.lastIndex = __privateGet(this, _compiled).lastIndex;
  if (!match || !__privateGet(this, _captureMap).size) {
    return match;
  }
  const matchCopy = [...match];
  match.length = 1;
  let indicesCopy;
  if (this.hasIndices) {
    indicesCopy = [...match.indices];
    match.indices.length = 1;
  }
  const mappedNums = [0];
  for (let i2 = 1; i2 < matchCopy.length; i2++) {
    const { hidden, transferTo } = __privateGet(this, _captureMap).get(i2) ?? {};
    if (hidden) {
      mappedNums.push(null);
    } else {
      mappedNums.push(match.length);
      match.push(matchCopy[i2]);
      if (this.hasIndices) {
        match.indices.push(indicesCopy[i2]);
      }
    }
    if (transferTo && matchCopy[i2] !== void 0) {
      const to = mappedNums[transferTo];
      if (!to) {
        throw new Error(`Invalid capture transfer to "${to}"`);
      }
      match[to] = matchCopy[i2];
      if (this.hasIndices) {
        match.indices[to] = indicesCopy[i2];
      }
      if (match.groups) {
        if (!__privateGet(this, _nameMap)) {
          __privateSet(this, _nameMap, createNameMap(this.source));
        }
        const name = __privateGet(this, _nameMap).get(transferTo);
        if (name) {
          match.groups[name] = matchCopy[i2];
          if (this.hasIndices) {
            match.indices.groups[name] = indicesCopy[i2];
          }
        }
      }
    }
  }
  return match;
}, _a);
function adjustMatchDetailsForOffset(match, offset, input, hasIndices) {
  match.index += offset;
  match.input = input;
  if (hasIndices) {
    const indices = match.indices;
    for (let i2 = 0; i2 < indices.length; i2++) {
      const arr = indices[i2];
      if (arr) {
        indices[i2] = [arr[0] + offset, arr[1] + offset];
      }
    }
    const groupIndices = indices.groups;
    if (groupIndices) {
      Object.keys(groupIndices).forEach((key) => {
        const arr = groupIndices[key];
        if (arr) {
          groupIndices[key] = [arr[0] + offset, arr[1] + offset];
        }
      });
    }
  }
}
function createCaptureMap(hiddenCaptures, transfers) {
  const captureMap = /* @__PURE__ */ new Map();
  for (const num of hiddenCaptures) {
    captureMap.set(num, {
      hidden: true
    });
  }
  for (const [to, from] of transfers) {
    for (const num of from) {
      getOrInsert(captureMap, num, {}).transferTo = to;
    }
  }
  return captureMap;
}
function createNameMap(pattern) {
  const re2 = /(?<capture>\((?:\?<(?![=!])(?<name>[^>]+)>|(?!\?)))|\\?./gsu;
  const map = /* @__PURE__ */ new Map();
  let numCharClassesOpen = 0;
  let numCaptures = 0;
  let match;
  while (match = re2.exec(pattern)) {
    const { 0: m3, groups: { capture, name } } = match;
    if (m3 === "[") {
      numCharClassesOpen++;
    } else if (!numCharClassesOpen) {
      if (capture) {
        numCaptures++;
        if (name) {
          map.set(numCaptures, name);
        }
      }
    } else if (m3 === "]") {
      numCharClassesOpen--;
    }
  }
  return map;
}
function toRegExp(pattern, options) {
  const d2 = toRegExpDetails(pattern, options);
  if (d2.options) {
    return new EmulatedRegExp(d2.pattern, d2.flags, d2.options);
  }
  return new RegExp(d2.pattern, d2.flags);
}
function toRegExpDetails(pattern, options) {
  const opts = getOptions(options);
  const onigurumaAst = J2(pattern, {
    flags: opts.flags,
    normalizeUnknownPropertyNames: true,
    rules: {
      captureGroup: opts.rules.captureGroup,
      singleline: opts.rules.singleline
    },
    skipBackrefValidation: opts.rules.allowOrphanBackrefs,
    unicodePropertyMap: JsUnicodePropertyMap
  });
  const regexPlusAst = transform(onigurumaAst, {
    accuracy: opts.accuracy,
    asciiWordBoundaries: opts.rules.asciiWordBoundaries,
    avoidSubclass: opts.avoidSubclass,
    bestEffortTarget: opts.target
  });
  const generated = generate(regexPlusAst, opts);
  const recursionResult = recursion(generated.pattern, {
    captureTransfers: generated._captureTransfers,
    hiddenCaptures: generated._hiddenCaptures,
    mode: "external"
  });
  const possessiveResult = possessive(recursionResult.pattern);
  const atomicResult = atomic(possessiveResult.pattern, {
    captureTransfers: recursionResult.captureTransfers,
    hiddenCaptures: recursionResult.hiddenCaptures
  });
  const details = {
    pattern: atomicResult.pattern,
    flags: `${opts.hasIndices ? "d" : ""}${opts.global ? "g" : ""}${generated.flags}${generated.options.disable.v ? "u" : "v"}`
  };
  if (opts.avoidSubclass) {
    if (opts.lazyCompileLength !== Infinity) {
      throw new Error("Lazy compilation requires subclass");
    }
  } else {
    const hiddenCaptures = atomicResult.hiddenCaptures.sort((a2, b3) => a2 - b3);
    const transfers = Array.from(atomicResult.captureTransfers);
    const strategy = regexPlusAst._strategy;
    const lazyCompile = details.pattern.length >= opts.lazyCompileLength;
    if (hiddenCaptures.length || transfers.length || strategy || lazyCompile) {
      details.options = {
        ...hiddenCaptures.length && { hiddenCaptures },
        ...transfers.length && { transfers },
        ...strategy && { strategy },
        ...lazyCompile && { lazyCompile }
      };
    }
  }
  return details;
}

// ../packages/components/node_modules/@shikijs/engine-javascript/dist/engine-compile.mjs
function defaultJavaScriptRegexConstructor(pattern, options) {
  return toRegExp(pattern, {
    global: true,
    hasIndices: true,
    lazyCompileLength: 3e3,
    rules: {
      allowOrphanBackrefs: true,
      asciiWordBoundaries: true,
      captureGroup: true,
      recursionLimit: 5,
      singleline: true
    },
    ...options
  });
}
function createJavaScriptRegexEngine(options = {}) {
  const _options = Object.assign({
    target: "auto",
    cache: /* @__PURE__ */ new Map()
  }, options);
  _options.regexConstructor || (_options.regexConstructor = (pattern) => defaultJavaScriptRegexConstructor(pattern, { target: _options.target }));
  return {
    createScanner(patterns) {
      return new JavaScriptScanner(patterns, _options);
    },
    createString(s2) {
      return { content: s2 };
    }
  };
}

// ../packages/components/node_modules/shiki/dist/index.mjs
var src_exports = __exportAll({
  bundledLanguages: () => bundledLanguages,
  bundledLanguagesAlias: () => bundledLanguagesAlias,
  bundledLanguagesBase: () => bundledLanguagesBase,
  bundledLanguagesInfo: () => bundledLanguagesInfo,
  bundledThemes: () => bundledThemes,
  bundledThemesInfo: () => bundledThemesInfo,
  codeToHast: () => codeToHast2,
  codeToHtml: () => codeToHtml2,
  codeToTokens: () => codeToTokens2,
  codeToTokensBase: () => codeToTokensBase3,
  codeToTokensWithThemes: () => codeToTokensWithThemes2,
  createHighlighter: () => createHighlighter,
  createJavaScriptRegexEngine: () => createJavaScriptRegexEngine,
  createOnigurumaEngine: () => createOnigurumaEngine,
  defaultJavaScriptRegexConstructor: () => defaultJavaScriptRegexConstructor,
  getLastGrammarState: () => getLastGrammarState2,
  getSingletonHighlighter: () => getSingletonHighlighter,
  loadWasm: () => loadWasm
});
__reExport(src_exports, bundle_full_exports);
export {
  ShikiError3 as ShikiError,
  addClassToHast,
  applyColorReplacements,
  bundledLanguages,
  bundledLanguagesAlias,
  bundledLanguagesBase,
  bundledLanguagesInfo,
  bundledThemes,
  bundledThemesInfo,
  codeToHast2 as codeToHast,
  codeToHtml2 as codeToHtml,
  codeToTokens2 as codeToTokens,
  codeToTokensBase3 as codeToTokensBase,
  codeToTokensWithThemes2 as codeToTokensWithThemes,
  createBundledHighlighter,
  createCssVariablesTheme,
  createHighlighter,
  createHighlighterCore,
  createHighlighterCoreSync,
  createJavaScriptRegexEngine,
  createOnigurumaEngine,
  createPositionConverter,
  createShikiInternal,
  createShikiInternalSync,
  createShikiPrimitive,
  createShikiPrimitiveAsync,
  createSingletonShorthands,
  defaultJavaScriptRegexConstructor,
  flatTokenVariants,
  getLastGrammarState2 as getLastGrammarState,
  getSingletonHighlighter,
  getSingletonHighlighterCore,
  getTokenStyleObject,
  guessEmbeddedLanguages,
  hastToHtml,
  isNoneTheme,
  isPlainLang,
  isSpecialLang,
  isSpecialTheme,
  loadWasm,
  makeSingletonHighlighter,
  makeSingletonHighlighterCore,
  normalizeGetter,
  normalizeTheme,
  resolveColorReplacements,
  splitLines,
  splitToken,
  splitTokens,
  stringifyTokenStyle,
  toArray,
  tokenizeAnsiWithTheme,
  tokenizeWithTheme,
  tokensToHast,
  transformerDecorations
};
//# sourceMappingURL=shiki.js.map
