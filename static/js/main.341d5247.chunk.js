(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{14:function(e,t,n){e.exports={Input:"Input_Input__220oi"}},15:function(e,t,n){e.exports={Select:"Select_Select__3XBce"}},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),u=n.n(a),r=n(4),c=n.n(r),i=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,a=t.getFID,u=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),u(e),r(e),c(e)}))},l=n(5),s=n(3),o=n(2),v="FETCH_RATES_SUCCESS",p="FETCH_RATES_ERROR",x="SELECT_VALUES_SAVE",d="VALIDATION",j="INPUT1_VALUE_SAVE",f="INPUT2_VALUE_SAVE",b={input1:"",input2:"",isInvalid:!1,selects:{from:"DEFAULT",to:"DEFAULT"},baseRates:{},error:null};var O=n(13),_="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):s.c,h=Object(s.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(o.a)(Object(o.a)({},e),{},{selects:t.selects});case v:return Object(o.a)(Object(o.a)({},e),{},{baseRates:t.baseRates});case p:return Object(o.a)(Object(o.a)({},e),{},{error:t.err});case f:return Object(o.a)(Object(o.a)({},e),{},{input2:t.result});case d:return Object(o.a)(Object(o.a)({},e),{},{isInvalid:t.isInvalid});case j:return Object(o.a)(Object(o.a)({},e),{},{input1:t.value});default:return e}}),_(Object(s.a)(O.a))),E=[{text:"\u0410\u0432\u0441\u0442\u0440\u0430\u043b\u0438\u0439\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440",value:"AUD"},{text:"\u0411\u043e\u043b\u0433\u0430\u0440\u0441\u043a\u0438\u0439 \u043b\u0435\u0432",value:"BGN"},{text:"\u0411\u0440\u0430\u0437\u0438\u043b\u044c\u0441\u043a\u0438\u0439 \u0440\u0435\u0430\u043b",value:"BRL"},{text:"\u0412\u0435\u043d\u0433\u0435\u0440\u0441\u043a\u0438\u0439 \u0444\u043e\u0440\u0438\u043d\u0442",value:"HUF"},{text:"\u0413\u043e\u043d\u043a\u043e\u043d\u0433\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440",value:"HKD"},{text:"\u0414\u0430\u0442\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430",value:"DKK"},{text:"\u0414\u043e\u043b\u043b\u0430\u0440 \u0421\u0428\u0410",value:"USD"},{text:"\u0415\u0432\u0440\u043e",value:"EUR"},{text:"\u0418\u043d\u0434\u0438\u0439\u0441\u043a\u0430\u044f \u0440\u0443\u043f\u0438\u044f",value:"INR"},{text:"\u0418\u043d\u0434\u043e\u043d\u0435\u0437\u0438\u0439\u0441\u043a\u0430\u044f \u0440\u0443\u043f\u0438\u044f",value:"IDR"},{text:"\u0418\u0441\u043b\u0430\u043d\u0434\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430",value:"ISK"},{text:"\u041a\u0430\u043d\u0430\u0434\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440",value:"CAD"},{text:"\u041a\u0438\u0442\u0430\u0439\u0441\u043a\u0438\u0439 \u044e\u0430\u043d\u044c",value:"CNY"},{text:"\u041a\u043e\u0440\u0435\u0439\u0441\u043a\u0430\u044f \u0432\u043e\u043d\u0430",value:"KRW"},{text:"\u041c\u0430\u043b\u0430\u0439\u0437\u0438\u0439\u0441\u043a\u0438\u0439 \u0440\u0438\u043d\u0433\u0433\u0438\u0442",value:"MYR"},{text:"\u041c\u0435\u043a\u0441\u0438\u043a\u0430\u043d\u0441\u043a\u043e\u0435 \u043f\u0435\u0441\u043e",value:"MXN"},{text:"\u041d\u043e\u0432\u043e\u0437\u0435\u043b\u0430\u043d\u0434\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440",value:"NZD"},{text:"\u041d\u043e\u0432\u044b\u0439 \u0438\u0437\u0440\u0430\u0438\u043b\u044c\u0441\u043a\u0438\u0439 \u0448\u0435\u043a\u0435\u043b\u044c",value:"ILS"},{text:"\u041d\u043e\u0440\u0432\u0435\u0436\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430",value:"NOK"},{text:"\u041f\u043e\u043b\u044c\u0441\u043a\u0438\u0439 \u0437\u043b\u043e\u0442\u044b\u0439",value:"PLN"},{text:"\u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u0438\u0439 \u0440\u0443\u0431\u043b\u044c",value:"RUB"},{text:"\u0420\u0443\u043c\u044b\u043d\u0441\u043a\u0438\u0439 \u043b\u0435\u0439",value:"RON"},{text:"\u0421\u0438\u043d\u0433\u0430\u043f\u0443\u0440\u0441\u043a\u0438\u0439 \u0434\u043e\u043b\u043b\u0430\u0440",value:"SGD"},{text:"\u0422\u0430\u0438\u043b\u0430\u043d\u0434\u0441\u043a\u0438\u0439 \u0431\u0430\u0442",value:"THB"},{text:"\u0422\u0443\u0440\u0435\u0446\u043a\u0430\u044f \u043b\u0438\u0440\u0430",value:"TRY"},{text:"\u0424\u0438\u043b\u0438\u043f\u043f\u0438\u043d\u0441\u043a\u043e\u0435 \u043f\u0435\u0441\u043e",value:"PHP"},{text:"\u0424\u0443\u043d\u0442 \u0441\u0442\u0435\u0440\u043b\u0438\u043d\u0433\u043e\u0432",value:"GBP"},{text:"\u0425\u043e\u0440\u0432\u0430\u0442\u0441\u043a\u0430\u044f \u043a\u0443\u043d\u0430",value:"HRK"},{text:"\u0427\u0435\u0448\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430",value:"CZK"},{text:"\u0428\u0432\u0435\u0434\u0441\u043a\u0430\u044f \u043a\u0440\u043e\u043d\u0430",value:"SEK"},{text:"\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0441\u043a\u0438\u0439 \u0444\u0440\u0430\u043d\u043a",value:"CHF"},{text:"\u042e\u0436\u043d\u043e\u0430\u0444\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u0438\u0439 \u0440\u044d\u043d\u0434",value:"ZAR"},{text:"\u042f\u043f\u043e\u043d\u0441\u043a\u0430\u044f \u0438\u0435\u043d\u0430",value:"JPY"}],S=n(14),C=n.n(S),I=n(1),N=function(e){var t=e.id,n=e.value,a=e.onChange,u=e.isInvalid;return Object(I.jsxs)("div",{className:C.a.Input,children:[Object(I.jsx)("input",{type:"text",id:t,value:n,onChange:a}),u?Object(I.jsx)("span",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e"}):null]})},g=n(15),R=n.n(g),V=function(e){var t=e.onChange,n=e.id,a=e.defaultValue,u=e.options;return Object(I.jsx)("div",{className:R.a.Select,children:Object(I.jsxs)("select",{onChange:t,id:n,defaultValue:a,children:[Object(I.jsx)("option",{value:a,disabled:!0,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u043b\u044e\u0442\u0443"}),u.map((function(e,t){return Object(I.jsx)("option",{value:e.value,children:e.text},e.value+t)}))]})})},T=n(10),D=n.n(T),m=n(16),A=function(e,t){return function(n,a){var u=a().selects;u[t]=e,n(function(e){return{type:x,selects:e}}(u))}},U=function(e){return{type:v,baseRates:e}},L=function(e){return{type:p,error:e}},w=function(e){var t=""===h.getState().input1||Number.isNaN(e)?"":e;return{type:f,result:t}},y=function(e){return function(t,n){var a=n().selects,u=n().baseRates,r=a.to,c=e*u[r];t(w(c))}},F=n(6),P=n.n(F);var K=Object(l.b)((function(e){return{input1:e.input1,input2:e.input2,selects:e.selects,isInvalid:e.isInvalid}}),(function(e){return{fetchRates:function(t){return e((n=t,function(){var e=Object(m.a)(D.a.mark((function e(t){var a,u,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.exchangeratesapi.io/latest?base="+n);case 3:return a=e.sent,e.next=6,a.json();case 6:u=e.sent,r=u.rates,t(U(r)),t(y(h.getState().input1)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t(L(e.t0));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()));var n},setSelectValue:function(t,n){return e(A(t,n))},convert:function(t){return e(y(t))},inputValidation:function(t){return e(function(e){var t=Number(e),n=Number.isNaN(t);return{type:d,isInvalid:n}}(t))},saveInput1Value:function(t){return e(function(e){return{type:j,value:e}}(t))},saveInput2Value:function(t){return e(w(t))}}}))((function(e){var t=e.fetchRates,n=e.setSelectValue,a=e.convert,u=e.inputValidation,r=e.saveInput1Value,c=e.saveInput2Value,i=e.isInvalid,l=e.input1,s=e.input2,o=function(e){n(e.target.value,e.target.id),a(l),"from"===e.target.id&&t(e.target.value)};return Object(I.jsx)("div",{className:P.a.Converter,children:Object(I.jsxs)("div",{className:P.a.wrapper,children:[Object(I.jsx)("h1",{children:"Currency Converter"}),Object(I.jsxs)("div",{className:P.a.content,children:[Object(I.jsx)(N,{id:"input1",value:l,onChange:function(e){u(e.target.value),r(e.target.value),i||a(e.target.value)},isInvalid:i},"input1"),Object(I.jsx)(N,{id:"input2",value:s,onChange:function(e){c(e.target.value)}},"input2"),["from","to"].map((function(e,t){return Object(I.jsx)(V,{id:e,onChange:o,options:E,defaultValue:"DEFAULT"},e+t)}))]})]})})}));function B(){return Object(I.jsx)(K,{})}n(31);c.a.render(Object(I.jsx)(u.a.StrictMode,{children:Object(I.jsx)(l.a,{store:h,children:Object(I.jsx)(B,{})})}),document.getElementById("root")),i()},6:function(e,t,n){e.exports={Converter:"Converter_Converter__1EdpE",wrapper:"Converter_wrapper__11O4f",content:"Converter_content__DtR20"}}},[[32,1,2]]]);
//# sourceMappingURL=main.341d5247.chunk.js.map