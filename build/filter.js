"use strict";var _interopRequireWildcard=require("babel-runtime/helpers/interop-require-wildcard")["default"],_interopRequireDefault=require("babel-runtime/helpers/interop-require-default")["default"],_import=require("./config"),config=_interopRequireWildcard(_import),_RequireFilter=require("meepworks/require-filter"),_RequireFilter2=_interopRequireDefault(_RequireFilter),requireFilter=new _RequireFilter2["default"]({fileRoot:__dirname,urlRoot:"/build",version:config.version});requireFilter.filter(".css!"),requireFilter.filter(".mp3!"),requireFilter.filter(".*!asset");