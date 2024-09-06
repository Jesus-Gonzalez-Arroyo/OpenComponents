var oc=oc||{};oc.components=oc.components||{};oc.components['a0b6a1527bcfcaa72af0332dbabc9db801d31b41']=function(model) {
           var __toOcStaticPathUrl = function(args) {
             return model.component.props._staticPath + 'public/' + args;
           } 
           const { _staticPath, _baseUrl, _componentName, _componentVersion, ...rest } = model.component.props;
           var __$$oc_initialData__ = rest;
           var __$$oc_Settings__ = {id: model.id, staticPath: _staticPath, baseUrl: _baseUrl, name: _componentName, version: _componentVersion};
           var innerFn = function(model){
  oc.reactComponents = oc.reactComponents || {};
  oc.reactComponents['a0b6a1527bcfcaa72af0332dbabc9db801d31b41'] = (
           (function() {
            var clientBundle=function(u){"use strict";var v=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P=u,k=Symbol.for("react.element"),C=Symbol.for("react.fragment"),N=Object.prototype.hasOwnProperty,U=P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,c){var a,i={},r=null,s=null;c!==void 0&&(r=""+c),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(s=t.ref);for(a in t)N.call(t,a)&&!E.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)i[a]===void 0&&(i[a]=t[a]);return{$$typeof:k,type:e,key:r,ref:s,props:i,_owner:U.current}}x.Fragment=C,x.jsx=w,x.jsxs=w,p.exports=x;var n=p.exports;const y={container:"_container_eh50l_1",button:"_button_eh50l_8",info:"_info_eh50l_20",block:"_block_eh50l_24"};class M extends u.Component{render(){return n.jsxs("div",{children:[n.jsx("h1",{children:"Prueba del componente"}),n.jsx("button",{})]})}}class S extends u.Component{render(){const t=()=>{alert("Hola a todos")};return n.jsxs("div",{className:y.container,children:[n.jsx(M,{}),n.jsx("button",{className:y.button,onClick:t,children:"Fun year fact"})]})}}var _={},T=v&&v.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_,"__esModule",{value:!0}),_.useData=g=_.DataProvider=void 0;const V=n,D=T(u),j=D.default.createContext({}),H=({children:e,...t})=>(0,V.jsx)(j.Provider,{value:t,children:e});var g=_.DataProvider=H;function F(){const{value:{getData:e,...t}}=D.default.useContext(j);return{getData:D.default.useCallback(a=>new Promise((i,r)=>{e({...t,...a},(s,h)=>{s?r(s):i(h)})}),[]),...t}}_.useData=F;function f(e){const{_staticPath:t,_baseUrl:c,_componentName:a,_componentVersion:i,...r}=e;u.useEffect(()=>{window.oc.events.fire("oc:componentDidMount",r)},[]);function s(o,l,d){return window.oc.getData({name:o._componentName,version:o._componentVersion,baseUrl:o._baseUrl,parameters:l},(b,m)=>{if(b)return d(b);const{_staticPath:O,_baseUrl:Y,_componentName:z,_componentVersion:K,...L}=m.component.props;d(null,L,m.component.props)})}function h(o,l){return{name:o._componentName,version:o._componentVersion,baseUrl:o._baseUrl,staticPath:o._staticPath}[l]}const G=(o,l)=>{if(!l||typeof l!="function")return new Promise((d,b)=>{s(e,o,(m,O)=>{if(m)return b(m);d(O)})});s(e,o,l)},I=o=>h(e,o);return r.getData=G,r.getSetting=I,n.jsx(g,{value:{...r},children:n.jsx(S,{...r})})}function R(e,t,c){window.ReactDOM.createRoot?c?window.ReactDOM.hydrateRoot(t,n.jsx(f,{...e})):window.ReactDOM.createRoot(t).render(n.jsx(f,{...e})):c?window.ReactDOM.hydrate(n.jsx(f,{...e}),t):window.ReactDOM.render(n.jsx(f,{...e}),t)}return R.component=f,R}(React);

            return clientBundle;
           })());
  if (!model) return;
  var modelHTML =  model.__html ? model.__html : '';
  var ssr = !!modelHTML;
  var externals = [{"global":"React","url":"https://unpkg.com/react@18.3.1/umd/react.production.min.js","devUrl":"https://unpkg.com/react@18.3.1/umd/react.development.js","name":"react"},{"global":"ReactDOM","url":"https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js","devUrl":"https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js","name":"react-dom"}];
  var staticPath = model.component.props._staticPath;
  if (ssr) {
    externals.push({
      global: ['oc', 'components', 'a0b6a1527bcfcaa72af0332dbabc9db801d31b41'],
      url: staticPath + 'template.js',
      name: "template"
    });
  }
  var props = JSON.stringify(model.component.props);
  oc = oc || {};
  oc.__reactTemplate = oc.__reactTemplate || { count: 0 };
  var count = oc.__reactTemplate.count;
  var templateId = "oc-reactRoot-prueba-components-" + count;
  oc.__reactTemplate.count++;
  var ssrCall = 'oc.components["a0b6a1527bcfcaa72af0332dbabc9db801d31b41"]({ component: { props:' + props + ' } });';

  return '<div id="' + templateId + '" class="oc-reactRoot-prueba-components">' + modelHTML + '</div>' +
    '<style>._container_eh50l_1{background-color:#3b246c;color:#fff;font-family:sans-serif;padding:40px}._button_eh50l_8{background-color:#a97613;border:none;padding:15px 32px;text-align:center;font-size:16px;text-decoration:none;display:inline-block;color:inherit;cursor:pointer}._info_eh50l_20{margin-bottom:20px}._block_eh50l_24{margin:6px 0}._button_eh50l_8:hover{background-color:#c79535}</style>' +
    '<script>' +
    'oc = oc || {};' +
    'oc.cmd = oc.cmd || [];' +
    'oc.cmd.push(function(oc){' +
    'oc.events.fire(\'oc:cssDidMount\', \'._container_eh50l_1{background-color:#3b246c;color:#fff;font-family:sans-serif;padding:40px}._button_eh50l_8{background-color:#a97613;border:none;padding:15px 32px;text-align:center;font-size:16px;text-decoration:none;display:inline-block;color:inherit;cursor:pointer}._info_eh50l_20{margin-bottom:20px}._block_eh50l_24{margin:6px 0}._button_eh50l_8:hover{background-color:#c79535}\');' +
      'oc.requireSeries(' + JSON.stringify(externals) + ', function(){' +
        'var targetNode = document.getElementById("' + templateId + '");' +
        'targetNode.setAttribute("id","");' +
        (ssr ? ssrCall : '') +
        'oc.components["a0b6a1527bcfcaa72af0332dbabc9db801d31b41"]({ id: ' + model.id + ', component: { props:' + props + ' } });' +
        'oc.reactComponents["a0b6a1527bcfcaa72af0332dbabc9db801d31b41"](' + props + ', targetNode, ' + !!modelHTML  + ');' +
      '});' +
    '});' +
  '</script>'
};
           return innerFn(model);
         }
         