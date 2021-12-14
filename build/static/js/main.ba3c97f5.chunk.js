(this.webpackJsonpatividade3=this.webpackJsonpatividade3||[]).push([[0],{41:function(e,n){},66:function(e,n,t){"use strict";t.r(n);var c,i,a,r,o,s,l,h,u,d,b,j,f,O=t(0),k=t.n(O),p=t(24),v=t.n(p),x=t(31),g=t(6),m=t(4),w=t(5),S=w.a.div(c||(c=Object(m.a)(["\n    background-color: black;\n    margin: 0;\n    padding: 0;\n    width: 100vw;\n    height: 100vh;\n    label {\n        color: white;\n    }\n"]))),B=w.a.div(i||(i=Object(m.a)(["\n    width: 100%;\n    height: 90%;\n    overflow-y: auto;\n    padding: 20px;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    flex-direction: column;\n"]))),y=w.a.div(a||(a=Object(m.a)(["\n    width: 100%;\n    height: 10%;\n    padding: 20px;\n    box-sizing: border-box;\n    border-top: 1px solid white;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    > * {\n        margin-right: 10px;\n\n    }\n\n"]))),H=w.a.button(r||(r=Object(m.a)(["\n    color: white;\n    border: 1px solid white;\n    padding: 10px;\n    background-color: black;\n    cursor: pointer;\n    transition: transform 0.3s ease;\n    :hover {\n        transform: scale(1.1);\n    }\n    :active {\n        transform: scale(1);\n    }\n    :disabled {\n        border 1px solid grey;\n        transform: scale(1);\n        cursor: default;\n    }\n"]))),N=w.a.input(o||(o=Object(m.a)(["\n    color: white;\n    border: 1px solid white;\n    padding: 10px;\n    background-color: black;\n"]))),C=w.a.div(s||(s=Object(m.a)(["\n    border: 1px solid white;\n    padding: 20px;\n    color: white;\n    font-size: 20px;\n    min-width: 80%;\n    height: 300px;\n    margin-bottom: 20px;\n"]))),I=w.a.span(l||(l=Object(m.a)(["\n    font-weight: bolder;\n    color: red;\n    border: 1px solid red;\n    padding: 5px;\n"]))),D=w.a.span(h||(h=Object(m.a)(["\n    font-weight: bolder;\n    color: green;\n    border: 1px solid green;\n    padding: 5px;\n"]))),E=t(1),M=function(e){var n=Object(O.useState)(e),t=Object(g.a)(n,2),c=t[0],i=(t[1],Object(O.useState)(!1)),a=Object(g.a)(i,2),r=a[0],o=a[1],s=Object(O.useState)(c.data.someData),l=Object(g.a)(s,2),h=l[0],u=l[1];return Object(E.jsxs)(C,{children:[Object(E.jsxs)("h5",{children:["Block Number - #",c.blockNumber," - ",c.timestamp.toISOString()," ",e.invalid?Object(E.jsx)(I,{children:"Block Invalid!"}):Object(E.jsx)(D,{children:"Block Valid"})]}),Object(E.jsx)("hr",{}),Object(E.jsxs)("p",{children:[r?Object(E.jsx)(N,{value:h,onChange:function(e){return u(e.target.value)}}):JSON.stringify(c.data)," ",Object(E.jsx)(H,{onClick:function(){o((function(n){return!1===(n=!n)&&(e.data.someData=h),n}))},children:r?"Save":"Edit Block Data"})]}),Object(E.jsx)("hr",{}),Object(E.jsxs)("h6",{children:["Previous Hash: ",c.previousHash]}),Object(E.jsxs)("h6",{children:["Block Hash: ",c.hash]})]})},z=t(20),A=t.n(z),J=t(28),T=t(30),R=w.a.div(u||(u=Object(m.a)(["\n    border: 1px solid white;\n    background-color: black;\n    color: white;\n    padding: 10px;\n    width: 60%;\n    height: 80%;\n\n"]))),V=w.a.div(d||(d=Object(m.a)(["\n    position: absolute;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0,0,0,0.8);\n    z-index: 10;\n"]))),F=w.a.div(b||(b=Object(m.a)(["\n    width: 100%;\n    height: 10%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    > * {\n        margin-left: 10px;\n    }\n"]))),P=w.a.div(j||(j=Object(m.a)(["\n    height: 62%;\n    width: 100%;\n    overflow-y: auto;\n"]))),q=w.a.span(f||(f=Object(m.a)(["\n    font-weight: bolder;\n"]))),G=t(14),K=t(15),L=t(29),Q=function(){function e(n){var t=n.blockNumber,c=n.data,i=n.previousHash,a=n.nonce;Object(G.a)(this,e),this.blockNumber=void 0,this.timestamp=void 0,this.data=void 0,this.hash=void 0,this.previousHash=void 0,this.nonce=void 0,this.blockNumber=t,this.timestamp=new Date,this.data=c,this.previousHash=i||"0",this.nonce=a||0,this.hash=this.generateHash()}return Object(K.a)(e,[{key:"generateHash",value:function(){return this.hash=Object(L.SHA256)(this.blockNumber+JSON.stringify(this.data)+this.previousHash+this.nonce).toString(),this.hash}}]),e}(),U=t(68),W=function(e){var n=Object(O.useState)(""),t=Object(g.a)(n,2),c=t[0],i=t[1],a=Object(O.useState)(null),r=Object(g.a)(a,2),o=r[0],s=r[1],l=Object(O.useState)([]),h=Object(g.a)(l,2),u=h[0],d=h[1],b=Object(O.useState)(!1),j=Object(g.a)(b,2),f=j[0],k=j[1],p=Object(O.useState)(0),v=Object(g.a)(p,2),x=v[0],m=v[1],w=Object(O.useRef)(null),S=Object(O.useState)(new Q({blockNumber:e.blockNumber,data:{someData:c},previousHash:e.previousHash,nonce:0})),B=Object(g.a)(S,1)[0],y=Object(O.useRef)(null),C=Object(O.useRef)(null),I=function(n){return n.slice(0,e.difficulty)===Array(e.difficulty).fill("0").join("")};Object(O.useEffect)((function(){B.data={someData:c}}),[c]),Object(O.useEffect)((function(){return f?y.current=setInterval((function(){return m((function(e){return e+1}))}),1e3):clearInterval(y.current),function(){return clearInterval(y.current)}}),[f]),Object(O.useEffect)((function(){return f?C.current=setInterval((function(){return d((function(e){return[].concat(Object(T.a)(e),[{nonce:B.nonce,hash:B.hash}])}))}),200):clearInterval(C.current),function(){return clearInterval(C.current)}}),[f]),Object(O.useEffect)((function(){w.current&&w.current.scrollTo(0,w.current.scrollHeight)}),[u.length,o]);var D=function(){var n=Object(J.a)(A.a.mark((function n(){var t,c,i,a,r,o;return A.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(console.log("Started mining 10 blocks..."),10,t=[],c=0;c<10;c++){for(i=new Date,a=new Q({blockNumber:e.blockNumber,data:{someData:Object(U.a)()},previousHash:e.previousHash,nonce:0});!I(a.hash);)a.nonce++,a.generateHash();r=new Date,console.log("1 Block mined"),t.push(r.getTime()-i.getTime())}o=t.reduce((function(e,n){return e+n}))/10,console.log("Mean time to mine 10 blocks: ".concat(o," milliseconds"));case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(E.jsx)(V,{children:Object(E.jsxs)(R,{children:[Object(E.jsx)(F,{children:Object(E.jsxs)("h2",{children:["Block Miner",f&&" - mining..."," ",(f||o)&&"Elapsed time: ".concat(function(){var e=Math.floor(x%216e3/3600),n=Math.floor(x%3600/60),t=x%60;return"".concat(e.toString().padStart(2,"0"),":").concat(n.toString().padStart(2,"0"),":").concat(t.toString().padStart(2,"0"))}())]})}),Object(E.jsx)("hr",{}),Object(E.jsxs)(F,{children:[Object(E.jsx)(N,{placeholder:"New block data...",value:c,onChange:function(e){return i(e.target.value)},disabled:f}),Object(E.jsx)(H,{disabled:f,onClick:function(){k(!0);!function e(){if(B.nonce++,B.generateHash(),!I(B.hash))return setTimeout(e,0);s(B),k(!1)}()},children:f?"Mining...":"Mine New Block"})]}),Object(E.jsxs)(P,{ref:w,children:[u.slice(-100).map((function(e,n){var t=e.nonce,c=e.hash;return Object(E.jsxs)("p",{children:[Object(E.jsx)(q,{children:"Nonce: "}),t," ",Object(E.jsx)(q,{children:"Hash: "}),c]},n)})),o&&Object(E.jsxs)("h4",{children:["Block mined!! Hash found ",o.hash]})]}),Object(E.jsx)("hr",{}),Object(E.jsxs)(F,{children:[Object(E.jsx)(H,{disabled:null===o,onClick:function(){null!==o&&(e.addBlock(o),e.setShow(!1))},children:"Add Block"}),Object(E.jsx)(H,{disabled:f,onClick:function(){return e.setShow(!1)},children:"Cancel"}),Object(E.jsx)(H,{onClick:D,children:"mine 10"})]})]})})},X=new(function(){function e(){Object(G.a)(this,e),this.blocks=void 0,this.blocks=[],this.addBlock(new Q({blockNumber:0,data:{someData:"the genesis block"}}))}return Object(K.a)(e,[{key:"addBlock",value:function(e){this.blocks.push(e)}},{key:"searchInvalidBlock",value:function(){var e=this;return this.blocks.slice(1,this.blocks.length).findIndex((function(n,t){return n.previousHash!==e.blocks[t].generateHash()}))}},{key:"checkBlockChainValidation",value:function(){return-1===this.searchInvalidBlock()}},{key:"lastBlock",value:function(){return this.blocks[this.blocks.length-1]}}]),e}()),Y=function(){var e=Object(O.useState)(X.blocks),n=Object(g.a)(e,2),t=n[0],c=n[1],i=Object(O.useState)(2),a=Object(g.a)(i,2),r=a[0],o=a[1],s=Object(O.useState)(!1),l=Object(g.a)(s,2),h=l[0],u=l[1],d=Object(O.useState)(-1),b=Object(g.a)(d,2),j=b[0],f=b[1];return Object(E.jsxs)(S,{children:[h&&Object(E.jsx)(W,{show:h,setShow:u,blockNumber:X.lastBlock().blockNumber+1,previousHash:X.lastBlock().hash,difficulty:r,addBlock:function(e){X.addBlock(e),c(X.blocks)}}),Object(E.jsx)(B,{children:t.map((function(e,n){return Object(E.jsx)(M,Object(x.a)({invalid:-1!==j&&n>=j},e),n)}))}),Object(E.jsxs)(y,{children:[Object(E.jsx)(H,{onClick:function(){return u(!0)},children:"+ Add New Block"}),Object(E.jsx)(H,{onClick:function(){var e=X.searchInvalidBlock();f(e),alert(-1===e?"Block chain is valid !":"Block chain is invalid !")},children:"Check Block Chain Validation"}),Object(E.jsx)("label",{htmlFor:"diff",children:"Set Block Chain Difficulty:"}),Object(E.jsx)(N,{id:"diff",type:"number",placeholder:"Set Difficulty",value:r,onChange:function(e){return o(Number(e.target.value))}})]})]})};v.a.render(Object(E.jsx)(k.a.StrictMode,{children:Object(E.jsx)(Y,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.ba3c97f5.chunk.js.map