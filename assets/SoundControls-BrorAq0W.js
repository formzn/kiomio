import{c as r,a9 as o,ao as u}from"./index-BkQ0EkR1.js";import{j as e,m as c,r as y}from"./motion-DzuF0SEY.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=r("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=r("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=r("Volume1",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=r("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=r("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=r("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);function V({className:a=""}){const s=o(t=>t.enabled&&t.volume>0),n=o(t=>t.toggle),l=o(t=>t.setVolume),h=o(t=>t.volume);return e.jsx(c.button,{type:"button","data-sound":"none","data-testid":"sound-toggle",whileTap:{scale:.9},onClick:()=>{!s&&h<=0?l(.5):n(),s||setTimeout(()=>u.play("happy",{channel:"ui",gain:.7}),60)},"aria-label":s?"Выключить звук":"Включить звук","aria-pressed":s,className:`press-glow glass liquid grid h-11 w-11 shrink-0 place-items-center rounded-full ${s?"text-white/85":"text-white/45"} ${a}`,children:s?e.jsx(x,{size:19,strokeWidth:1.4}):e.jsx(m,{size:19,strokeWidth:1.4})})}function k({className:a="",showValue:s=!0}){const n=o(i=>i.volume),l=o(i=>i.enabled),h=o(i=>i.setVolume),t=y.useRef(0),d=Math.round(n*100),b=!l||n===0?m:n<.5?g:x;return e.jsxs("label",{className:`flex items-center gap-3 ${a}`,children:[e.jsx(b,{size:17,strokeWidth:1.4,className:"shrink-0 text-white/50","aria-hidden":!0}),e.jsx("input",{type:"range",min:0,max:100,step:1,value:l?d:0,"data-testid":"volume","aria-label":"Громкость","aria-valuetext":`${l?d:0}%`,onChange:i=>{const w=Number(i.target.value)/100;h(w);const p=performance.now();p-t.current>140&&(t.current=p,u.play("tap",{channel:"ui"}))},className:"glass-range h-7 min-w-0 flex-1",style:{"--fill":`${l?d:0}%`}}),s&&e.jsxs("span",{className:"w-9 shrink-0 text-right text-[12px] tabular-nums text-white/45",children:[l?d:0,"%"]})]})}function z(){const a=o(n=>n.enabled),s=o(n=>n.setEnabled);return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("button",{type:"button",role:"switch","aria-checked":a,"data-sound":"none","data-testid":"sound-switch",onClick:()=>{s(!a),a||setTimeout(()=>u.play("happy",{channel:"ui",gain:.7}),60)},className:`flex h-[56px] items-center justify-between rounded-[20px] border px-5 text-left text-[15px] transition-colors ${a?"border-white/20 bg-white/[0.08] text-white":"border-white/[0.06] bg-white/[0.02] text-white/70"}`,children:["Звуки персонажа и интерфейса",e.jsx("span",{className:`relative h-[26px] w-[44px] rounded-full border transition-colors duration-300 ${a?"border-white/30 bg-glow/45":"border-white/15 bg-white/[0.06]"}`,children:e.jsx(c.span,{layout:!0,transition:{type:"spring",stiffness:600,damping:32},className:`absolute top-[3px] h-[18px] w-[18px] rounded-full bg-snow shadow-[0_0_10px_rgb(var(--eye)/0.7)] ${a?"right-[3px]":"left-[3px]"}`})})]}),e.jsxs("div",{className:"rounded-[20px] border border-white/[0.06] bg-white/[0.02] px-4 py-3",children:[e.jsx("p",{className:"mb-1 text-[13px] text-white/50",children:"Громкость"}),e.jsx(k,{})]})]})}export{j as C,M as H,V as S,k as V,N as W,x as a,z as b};
