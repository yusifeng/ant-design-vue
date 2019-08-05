(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1469:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <a-button @click="success">Customized display duration</a-button>\n',script:"\nexport default {\n  methods: {\n    success () {\n      this.$message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);\n    },\n  }\n}\n",style:null,us:"\n#### Customize duration\nCustomize message display duration from default `3s` to `10s`.\n",cn:"\n#### 修改延时\n自定义时长 `10s`，默认时长为 `3s`。\n",sourceCode:"<template>\n  <a-button @click=\"success\">Customized display duration</a-button>\n</template>\n<script>\nexport default {\n  methods: {\n    success () {\n      this.$message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);\n    },\n  }\n}\n<\/script>\n"}}},[a("template",{slot:"component"},[a("a-button",{on:{click:s.success}},[s._v("Customized display duration")])],1),s._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"修改延时"}},[s._v("修改延时 "),a("a",{staticClass:"anchor",attrs:{href:"#修改延时","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("自定义时长 "),a("code",[s._v("10s")]),s._v("，默认时长为 "),a("code",[s._v("3s")]),s._v("。")])]),s._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Customize-duration"}},[s._v("Customize duration "),a("a",{staticClass:"anchor",attrs:{href:"#Customize-duration","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("Customize message display duration from default "),a("code",[s._v("3s")]),s._v(" to "),a("code",[s._v("10s")]),s._v(".")])]),s._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"success"')]),s._v(">")]),s._v("Customized display duration"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    success () {\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$message.success("),a("span",{staticClass:"hljs-string"},[s._v("'This is a prompt message for success, and it will disappear in 10 seconds'")]),s._v(", "),a("span",{staticClass:"hljs-number"},[s._v("10")]),s._v(");\n    },\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)};e._withStripped=!0;var n={methods:{success:function(){this.$message.success("This is a prompt message for success, and it will disappear in 10 seconds",10)}}},i=a(31),o=Object(i.a)(n,e,[],!1,null,null,null);o.options.__file="components/message/demo/duration.md";var l=o.exports,v=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <a-button type="primary" @click="info">Display normal message</a-button>\n',script:"\n  export default {\n    methods: {\n      info () {\n        this.$message.info('This is a normal message');\n      },\n    }\n  }\n",style:null,us:"\n#### Normal prompt\nNormal messages as feedbacks.\n",cn:"\n#### 普通提示\n信息提醒反馈。\n",sourceCode:'<template>\n  <a-button type="primary" @click="info">Display normal message</a-button>\n</template>\n<script>\n  export default {\n    methods: {\n      info () {\n        this.$message.info(\'This is a normal message\');\n      },\n    }\n  }\n<\/script>\n'}}},[a("template",{slot:"component"},[a("a-button",{attrs:{type:"primary"},on:{click:s.info}},[s._v("Display normal message")])],1),s._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"普通提示"}},[s._v("普通提示 "),a("a",{staticClass:"anchor",attrs:{href:"#普通提示","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("信息提醒反馈。")])]),s._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Normal-prompt"}},[s._v("Normal prompt "),a("a",{staticClass:"anchor",attrs:{href:"#Normal-prompt","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("Normal messages as feedbacks.")])]),s._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("type")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"primary"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"info"')]),s._v(">")]),s._v("Display normal message"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n      info () {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$message.info("),a("span",{staticClass:"hljs-string"},[s._v("'This is a normal message'")]),s._v(");\n      },\n    }\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)};v._withStripped=!0;var _={methods:{info:function(){this.$message.info("This is a normal message")}}},r=Object(i.a)(_,v,[],!1,null,null,null);r.options.__file="components/message/demo/info.md";var c=r.exports,d=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <a-button @click="success">Display a loading indicator</a-button>\n',script:"\n  export default {\n    methods: {\n      success () {\n        const hide = this.$message.loading('Action in progress..', 0);\n        setTimeout(hide, 2500);\n      },\n    }\n  }\n",style:null,us:"\n#### Message of loading\nDisplay a global loading indicator, which is dismissed by itself asynchronously.\n",cn:"\n#### 加载中\n进行全局 loading，异步自行移除。\n",sourceCode:"<template>\n  <a-button @click=\"success\">Display a loading indicator</a-button>\n</template>\n<script>\n  export default {\n    methods: {\n      success () {\n        const hide = this.$message.loading('Action in progress..', 0);\n        setTimeout(hide, 2500);\n      },\n    }\n  }\n<\/script>\n"}}},[a("template",{slot:"component"},[a("a-button",{on:{click:s.success}},[s._v("Display a loading indicator")])],1),s._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"加载中"}},[s._v("加载中 "),a("a",{staticClass:"anchor",attrs:{href:"#加载中","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("进行全局 loading，异步自行移除。")])]),s._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Message-of-loading"}},[s._v("Message of loading "),a("a",{staticClass:"anchor",attrs:{href:"#Message-of-loading","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("Display a global loading indicator, which is dismissed by itself asynchronously.")])]),s._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"success"')]),s._v(">")]),s._v("Display a loading indicator"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n      success () {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" hide = "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$message.loading("),a("span",{staticClass:"hljs-string"},[s._v("'Action in progress..'")]),s._v(", "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(");\n        setTimeout(hide, "),a("span",{staticClass:"hljs-number"},[s._v("2500")]),s._v(");\n      },\n    }\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)};d._withStripped=!0;var p={methods:{success:function(){var s=this.$message.loading("Action in progress..",0);setTimeout(s,2500)}}},h=Object(i.a)(p,d,[],!1,null,null,null);h.options.__file="components/message/demo/loading.md";var m=h.exports,u=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <div>\n    <a-button @click="success">Success</a-button>\n    <a-button @click="error">Error</a-button>\n    <a-button @click="warning">Warning</a-button>\n  </div>\n',script:"\n  export default {\n    methods: {\n      success () {\n        this.$message.success('This is a message of success');\n      },\n      error () {\n        this.$message.error('This is a message of error');\n      },\n      warning () {\n        this.$message.warning('This is message of warning');\n      },\n    }\n  }\n",style:null,us:"\n#### Other types of message\nMessages of success, error and warning types.\n",cn:"\n#### 其他提示类型\n包括成功、失败、警告。\n",sourceCode:"<template>\n  <div>\n    <a-button @click=\"success\">Success</a-button>\n    <a-button @click=\"error\">Error</a-button>\n    <a-button @click=\"warning\">Warning</a-button>\n  </div>\n</template>\n<script>\n  export default {\n    methods: {\n      success () {\n        this.$message.success('This is a message of success');\n      },\n      error () {\n        this.$message.error('This is a message of error');\n      },\n      warning () {\n        this.$message.warning('This is message of warning');\n      },\n    }\n  }\n<\/script>\n"}}},[a("template",{slot:"component"},[a("div",[a("a-button",{on:{click:s.success}},[s._v("Success")]),s._v(" "),a("a-button",{on:{click:s.error}},[s._v("Error")]),s._v(" "),a("a-button",{on:{click:s.warning}},[s._v("Warning")])],1)]),s._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"其他提示类型"}},[s._v("其他提示类型 "),a("a",{staticClass:"anchor",attrs:{href:"#其他提示类型","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("包括成功、失败、警告。")])]),s._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Other-types-of-message"}},[s._v("Other types of message "),a("a",{staticClass:"anchor",attrs:{href:"#Other-types-of-message","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("Messages of success, error and warning types.")])]),s._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"success"')]),s._v(">")]),s._v("Success"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"error"')]),s._v(">")]),s._v("Error"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"warning"')]),s._v(">")]),s._v("Warning"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n      success () {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$message.success("),a("span",{staticClass:"hljs-string"},[s._v("'This is a message of success'")]),s._v(");\n      },\n      error () {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$message.error("),a("span",{staticClass:"hljs-string"},[s._v("'This is a message of error'")]),s._v(");\n      },\n      warning () {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$message.warning("),a("span",{staticClass:"hljs-string"},[s._v("'This is message of warning'")]),s._v(");\n      },\n    }\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)};u._withStripped=!0;var g={methods:{success:function(){this.$message.success("This is a message of success")},error:function(){this.$message.error("This is a message of error")},warning:function(){this.$message.warning("This is message of warning")}}},C=Object(i.a)(g,u,[],!1,null,null,null);C.options.__file="components/message/demo/other.md";var f=C.exports,j=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[[a("demo-box",{attrs:{jsfiddle:{html:'\n  <a-button @click="success">Display a sequence of message</a-button>\n',script:"\n  export default {\n    methods: {\n      success () {\n        this.$message.loading('Action in progress..', 2.5)\n          .then(() => this.$message.success('Loading finished', 2.5))\n          .then(() => this.$message.info('Loading finished is finished', 2.5));\n      },\n    }\n  }\n",style:null,us:"\n#### Promise interface\n`message` provides promise interface for `onClose`. The above example will display a new message when old message is about to finish.\n",cn:"\n#### Promise 接口\n可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 message 将要结束时通过 then 显示新的 message 。\n",sourceCode:"<template>\n  <a-button @click=\"success\">Display a sequence of message</a-button>\n</template>\n<script>\n  export default {\n    methods: {\n      success () {\n        this.$message.loading('Action in progress..', 2.5)\n          .then(() => this.$message.success('Loading finished', 2.5))\n          .then(() => this.$message.info('Loading finished is finished', 2.5));\n      },\n    }\n  }\n<\/script>\n"}}},[a("template",{slot:"component"},[a("a-button",{on:{click:s.success}},[s._v("Display a sequence of message")])],1),s._v(" "),a("template",{slot:"description"},[a("h4",{attrs:{id:"Promise-接口"}},[s._v("Promise 接口 "),a("a",{staticClass:"anchor",attrs:{href:"#Promise-接口","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 message 将要结束时通过 then 显示新的 message 。")])]),s._v(" "),a("template",{slot:"us-description"},[a("h4",{attrs:{id:"Promise-interface"}},[s._v("Promise interface "),a("a",{staticClass:"anchor",attrs:{href:"#Promise-interface","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[a("code",[s._v("message")]),s._v(" provides promise interface for "),a("code",[s._v("onClose")]),s._v(". The above example will display a new message when old message is about to finish.")])]),s._v(" "),a("template",{slot:"code"},[a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"success"')]),s._v(">")]),s._v("Display a sequence of message"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("a-button")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n  "),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n      success () {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$message.loading("),a("span",{staticClass:"hljs-string"},[s._v("'Action in progress..'")]),s._v(", "),a("span",{staticClass:"hljs-number"},[s._v("2.5")]),s._v(")\n          .then("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$message.success("),a("span",{staticClass:"hljs-string"},[s._v("'Loading finished'")]),s._v(", "),a("span",{staticClass:"hljs-number"},[s._v("2.5")]),s._v("))\n          .then("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" =>")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".$message.info("),a("span",{staticClass:"hljs-string"},[s._v("'Loading finished is finished'")]),s._v(", "),a("span",{staticClass:"hljs-number"},[s._v("2.5")]),s._v("));\n      },\n    }\n  }\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])])],2)]],2)};j._withStripped=!0;var b={methods:{success:function(){var s=this;this.$message.loading("Action in progress..",2.5).then(function(){return s.$message.success("Loading finished",2.5)}).then(function(){return s.$message.info("Loading finished is finished",2.5)})}}},y=Object(i.a)(b,j,[],!1,null,null,null);y.options.__file="components/message/demo/thenable.md";var w=y.exports,k=function(){var s=this.$createElement;this._self._c;return this._m(0)};k._withStripped=!0;var $=Object(i.a)({},k,[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("h2",{attrs:{id:"API"}},[s._v("API "),a("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("组件提供了一些静态方法，使用方式和参数如下：")]),s._v(" "),a("ul",[a("li",[a("code",{pre:!0},[s._v("message.success(content, [duration], onClose)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.error(content, [duration], onClose)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.info(content, [duration], onClose)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.warning(content, [duration], onClose)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.warn(content, [duration], onClose)")]),s._v(" // alias of warning")]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.loading(content, [duration], onClose)")])])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("content")]),s._v(" "),a("td",[s._v("提示内容")]),s._v(" "),a("td",[s._v("string| VNode |(h) => VNode")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("duration")]),s._v(" "),a("td",[s._v("自动关闭的延时，单位秒。设为 0 时不自动关闭。")]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td",[s._v("3")])]),s._v(" "),a("tr",[a("td",[s._v("onClose")]),s._v(" "),a("td",[s._v("关闭时触发的回调函数")]),s._v(" "),a("td",[s._v("Function")]),s._v(" "),a("td",[s._v("-")])])])]),s._v(" "),a("p",[s._v("组件同时提供 promise 接口")]),s._v(" "),a("ul",[a("li",[a("code",{pre:!0},[s._v("message[level](content, [duration]).then(afterClose)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message[level](content, [duration], onClose).then(afterClose)")])])]),s._v(" "),a("p",[s._v("其中"),a("code",{pre:!0},[s._v("message[level]")]),s._v(" 是组件已经提供的静态方法。"),a("code",{pre:!0},[s._v("then")]),s._v(" 接口返回值是 Promise 。")]),s._v(" "),a("ul",[a("li",[a("code",{pre:!0},[s._v("message.open(config)")])])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("content")]),s._v(" "),a("td",[s._v("提示内容")]),s._v(" "),a("td",[s._v("string| VNode |(h) => VNode")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("duration")]),s._v(" "),a("td",[s._v("自动关闭的延时，单位秒。设为 0 时不自动关闭。")]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td",[s._v("3")])]),s._v(" "),a("tr",[a("td",[s._v("onClose")]),s._v(" "),a("td",[s._v("关闭时触发的回调函数")]),s._v(" "),a("td",[s._v("Function")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("icon")]),s._v(" "),a("td",[s._v("自定义图标")]),s._v(" "),a("td",[s._v("string| VNode |(h) => VNode")]),s._v(" "),a("td",[s._v("-")])])])]),s._v(" "),a("h3",{attrs:{id:"全局方法"}},[s._v("全局方法 "),a("a",{staticClass:"anchor",attrs:{href:"#全局方法","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("还提供了全局配置和全局销毁方法：")]),s._v(" "),a("ul",[a("li",[a("code",{pre:!0},[s._v("message.config(options)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.destroy()")])])]),s._v(" "),a("h4",{attrs:{id:"message.config"}},[s._v("message.config "),a("a",{staticClass:"anchor",attrs:{href:"#message.config","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[s._v("message.config({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("top")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`100px`")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("duration")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("maxCount")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v(",\n});\n")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("duration")]),s._v(" "),a("td",[s._v("默认自动关闭延时，单位秒")]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td",[s._v("3")])]),s._v(" "),a("tr",[a("td",[s._v("getContainer")]),s._v(" "),a("td",[s._v("配置渲染节点的输出位置")]),s._v(" "),a("td",[s._v("() => HTMLElement")]),s._v(" "),a("td",[s._v("() => document.body")])]),s._v(" "),a("tr",[a("td",[s._v("maxCount")]),s._v(" "),a("td",[s._v("最大显示数, 超过限制时，最早的消息会被自动关闭")]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("top")]),s._v(" "),a("td",[s._v("消息距离顶部的位置")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("24px")])])])])])])}],!1,null,null,null);$.options.__file="components/message/index.zh-CN.md";var x=$.exports,T=function(){var s=this.$createElement;this._self._c;return this._m(0)};T._withStripped=!0;var D=Object(i.a)({},T,[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("h2",{attrs:{id:"API"}},[s._v("API "),a("a",{staticClass:"anchor",attrs:{href:"#API","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("This components provides some static methods, with usage and arguments as following:")]),s._v(" "),a("ul",[a("li",[a("code",{pre:!0},[s._v("message.success(content, [duration], onClose)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.error(content, [duration], onClose)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.info(content, [duration], onClose)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.warning(content, [duration], onClose)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.warn(content, [duration], onClose)")]),s._v(" // alias of warning")]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.loading(content, [duration], onClose)")])])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Argument")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("Default")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("content")]),s._v(" "),a("td",[s._v("content of the message")]),s._v(" "),a("td",[s._v("string| VNode |(h) => VNode")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("duration")]),s._v(" "),a("td",[s._v("time(seconds) before auto-dismiss, don't dismiss if set to 0")]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td",[s._v("1.5")])]),s._v(" "),a("tr",[a("td",[s._v("onClose")]),s._v(" "),a("td",[s._v("Specify a function that will be called when the message is closed")]),s._v(" "),a("td",[s._v("Function")]),s._v(" "),a("td",[s._v("-")])])])]),s._v(" "),a("p",[a("code",{pre:!0},[s._v("afterClose")]),s._v(" can be called in then-able interface:")]),s._v(" "),a("ul",[a("li",[a("code",{pre:!0},[s._v("message[level](content, [duration]).then(afterClose)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message[level](content, [duration], onClose).then(afterClose)")])])]),s._v(" "),a("p",[s._v("where "),a("code",{pre:!0},[s._v("level")]),s._v(" refers one static methods of "),a("code",{pre:!0},[s._v("message")]),s._v(". The result of "),a("code",{pre:!0},[s._v("then")]),s._v(" method will be a Promise.")]),s._v(" "),a("ul",[a("li",[a("code",{pre:!0},[s._v("message.open(config)")])])]),s._v(" "),a("p",[s._v("The properties of config are as follows:")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Property")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("Default")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("content")]),s._v(" "),a("td",[s._v("content of the message")]),s._v(" "),a("td",[s._v("string| VNode |(h) => VNode")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("duration")]),s._v(" "),a("td",[s._v("time(seconds) before auto-dismiss, don't dismiss if set to 0")]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td",[s._v("3")])]),s._v(" "),a("tr",[a("td",[s._v("onClose")]),s._v(" "),a("td",[s._v("Specify a function that will be called when the message is closed")]),s._v(" "),a("td",[s._v("function")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("icon")]),s._v(" "),a("td",[s._v("Customized Icon")]),s._v(" "),a("td",[s._v("string| VNode |(h) => VNode")]),s._v(" "),a("td",[s._v("-")])])])]),s._v(" "),a("h3",{attrs:{id:"Global-static-methods"}},[s._v("Global static methods "),a("a",{staticClass:"anchor",attrs:{href:"#Global-static-methods","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("p",[s._v("Methods for global configuration and destruction are also provided:")]),s._v(" "),a("ul",[a("li",[a("code",{pre:!0},[s._v("message.config(options)")])]),s._v(" "),a("li",[a("code",{pre:!0},[s._v("message.destroy()")])])]),s._v(" "),a("h4",{attrs:{id:"message.config"}},[s._v("message.config "),a("a",{staticClass:"anchor",attrs:{href:"#message.config","aria-hidden":"true"}},[s._v("#")])]),s._v(" "),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[s._v("message.config({\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("top")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'100px'")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("duration")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(",\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("maxCount")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v(",\n});\n")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Argument")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Type")]),s._v(" "),a("th",[s._v("Default")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("duration")]),s._v(" "),a("td",[s._v("time before auto-dismiss, in seconds")]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td",[s._v("1.5")])]),s._v(" "),a("tr",[a("td",[s._v("getContainer")]),s._v(" "),a("td",[s._v("Return the mount node for Message")]),s._v(" "),a("td",[s._v("() => HTMLElement")]),s._v(" "),a("td",[s._v("() => document.body")])]),s._v(" "),a("tr",[a("td",[s._v("maxCount")]),s._v(" "),a("td",[s._v("max message show, drop oldest if exceed limit")]),s._v(" "),a("td",[s._v("number")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("top")]),s._v(" "),a("td",[s._v("distance from top")]),s._v(" "),a("td",[s._v("string")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("24px")])])])])])])}],!1,null,null,null);D.options.__file="components/message/index.en-US.md";var N=D.exports,A="# 全局提示\n全局展示操作反馈信息。\n## 何时使用\n- 可提供成功、警告和错误等反馈信息。\n- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。\n\n## 代码演示",P="# Message\nDisplay global messages as feedback in response to user operations.\n## When To Use\n- To provide feedback such as success, warning, error etc.\n- A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt.\n## Examples ",E={category:"Components",subtitle:"全局提示",type:"Feedback",noinstant:!0,title:"Message",render:function(){var s=arguments[0];return s("div",[s("md",{attrs:{cn:A,us:P}}),s(c),s(l),s(m),s(f),s(w),s("api",[s(x,{slot:"cn"}),s(N)])])}},S=Object(i.a)(E,void 0,void 0,!1,null,null,null);S.options.__file="components/message/demo/index.vue";t.default=S.exports}}]);