import{C as f,A as k,p as b,a as h,e as w}from"./index-8dfK7056.js";import{_ as A,r as e,c as C,a as l,u as x,F as D,b as d,o as F}from"./index-NjLzwpJC.js";const I={__name:"StudentView",setup(B){f.register(k,b,h);const p=[{title:"知识点",dataIndex:"knowledgePoint",key:"knowledgePoint"},{title:"本次丢分情况",dataIndex:"lostPoint",key:"lostPoint"},{title:"历史正确率",dataIndex:"historicalAccuracy",key:"historicalAccuracy",customRender:t=>`${t.value}%`}],s=e([{knowledgePoint:"重要会议体系",lostPoint:13,historicalAccuracy:14.85},{knowledgePoint:"意义",lostPoint:6,historicalAccuracy:11.72},{knowledgePoint:"影响",lostPoint:4,historicalAccuracy:75.89},{knowledgePoint:"作用",lostPoint:3,historicalAccuracy:24.76},{knowledgePoint:"世界多极化",lostPoint:2,historicalAccuracy:80.29}]),y=[{title:"各项能力失分情况",dataIndex:"ability",key:"ability"},{title:"分数",dataIndex:"lostPoint",key:"lostPoint"}],i=e([{ability:"阐释事务能力",lostPoint:23.5},{ability:"探讨问题能力",lostPoint:14},{ability:"运用知识能力",lostPoint:6.5},{ability:"解读信息能力",lostPoint:6}]);function c(t){const n=t.value.length;for(let o=0;o<n;o++)for(const a in t.value[o])typeof t.value[o][a]=="number"&&(t.value[o][a]=Number((Math.random(Date.now())*100).toFixed(2)))}const u=e(4),r=e([]);for(let t=1;t<12;t++)r.value.push({value:t,label:`第${t}次月考 - 历史`});const P=()=>{console.log("focus")},m=()=>{c(s),c(i)},g=e({labels:["阐释事务能力","探讨问题能力","运用知识能力","解读信息能力"],datasets:[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[40,20,80,10]}]}),v=e({responsive:!0,maintainAspectRatio:!0});return(t,n)=>{const o=d("a-select"),a=d("a-table");return F(),C(D,null,[l(o,{ref:"select",options:r.value,value:u.value,"onUpdate:value":n[0]||(n[0]=_=>u.value=_),style:{width:"300px"},onFocus:P,onChange:m,class:"row"},null,8,["options","value"]),l(a,{columns:p,"data-source":s.value,pagination:!1,scroll:{y:320},class:"row"},null,8,["data-source"]),l(a,{columns:y,"data-source":i.value,pagination:!1,scroll:{y:320},class:"row"},null,8,["data-source"]),l(x(w),{data:g.value,options:v.value,class:"pieChart"},null,8,["data","options"])],64)}}},N=A(I,[["__scopeId","data-v-deb13e4c"]]);export{N as default};