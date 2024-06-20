import{C as F,L as V,p as H,a as $,b as B,c as E,P as T,d as G}from"./index-8dfK7056.js";import{_ as O,r as s,c as d,a as r,w as p,u as W,F as _,b as g,o as u,n as C,t as c,d as b,e as X,f as j}from"./index-NjLzwpJC.js";const z={__name:"TeacherView",setup(A){F.register(V,H,$,B,E,T);const w=[{title:"易错知识点统计",dataIndex:"lostPoint",key:"lostPoint"},{title:"失分率",dataIndex:"lostRate",key:"lostRate",customRender:e=>`${e.value}%`}],h=s([{lostPoint:"三大改造",lostRate:14.85},{lostPoint:"新民主主义",lostRate:11.72},{lostPoint:"民族资本主义",lostRate:75.89},{lostPoint:"亚太经合",lostRate:24.76},{lostPoint:"战后世界经济",lostRate:80.29}]);function m(e){const a=e.value.length;for(let t=0;t<a;t++)for(const o in e.value[t])typeof e.value[t][o]=="number"&&(e.value[t][o]=Number((Math.random(Date.now())*100).toFixed(2)))}const y=s(8),f=s([]);for(let e=1;e<12;e++)f.value.push({value:e,label:`第${e}次月考 - 历史`});const P=()=>{console.log("focus")},D=()=>{m(h),m(l)};function R(e){return e<=30?"below-30 white-text":e<=50?"below-50 white-text":"normal"}function M(e,a){const t=Object.values(e);return t.shift(),t.pop(),Math.max(...t)===a?"largest":"non-largest"}const N=[{title:"序号",dataIndex:"questionIndex",key:"questionIndex"},{title:"得分率",dataIndex:"correctRate",key:"correctRate"},{title:"错因统计(错误人数)",dataIndex:"count",children:[{title:"题目理解",dataIndex:"understanding",key:"understanding"},{title:"记忆缺失",dataIndex:"memory",key:"memory"},{title:"知识点理解错误",dataIndex:"knowledgePoint",key:"knowledgePoint"},{title:"缺乏知识体系",dataIndex:"system",key:"system"},{title:"解题技巧",dataIndex:"technique",key:"technique"}]}],l=s([]);for(let e=0;e<30;e++)l.value.push({correctRate:0,understanding:0,memory:0,knowledgePoint:0,system:0,technique:0});m(l);for(let e=0;e<30;e++)l.value[e].questionIndex=(e+1).toString();const q=[{title:"学生姓名",dataIndex:"studentName",key:"studentName"},{title:"学号",dataIndex:"studentID",key:"studentID"}],x=["王 (Wang)","李 (Li)","张 (Zhang)","刘 (Liu)","陈 (Chen)","杨 (Yang)","黄 (Huang)","赵 (Zhao)","吴 (Wu)","周 (Zhou)","徐 (Xu)","孙 (Sun)","马 (Ma)","朱 (Zhu)","胡 (Hu)","郭 (Guo)","何 (He)","林 (Lin)","高 (Gao)","郑 (Zheng)"],k=["沐宸 (Mùchén)","若汐 (Ruòxī)","浩宇 (Hàoyǔ)","一诺 (Yīnuò)","沐辰 (Mùchén)","艺涵 (Yìhán)","奕辰 (Yìchén)","梓涵 (Zǐhán)","雨桐 (Yǔtóng)","欣怡 (Xīnyí)","宇轩 (Yǔxuān)","语桐 (Yǔtóng)","沐阳 (Mùyáng)","语汐 (Yǔxī)"];function L(){const e=parseInt(Math.random()*x.length),a=parseInt(Math.random()*k.length);return{studentName:`${x[e]} ${k[a]}`,studentID:parseInt(Math.random()*1e8).toString().padStart(10,"0")}}const I=s([]);for(let e=0;e<60;e++)I.value.push(L());const Y=s({labels:["题目理解","记忆缺失","知识点理解","缺乏知识体系","解题技巧"],datasets:[{label:"一班",backgroundColor:"#f87979",borderColor:"#f87979",data:[40,39,10,40,39,80,40]},{label:"二班",backgroundColor:"#087909",borderColor:"#087909",data:[20,8,18,40,8,4,20]}]}),S=s({responsive:!0});return(e,a)=>{const t=g("a-select"),o=g("a-table"),Z=g("router-link");return u(),d(_,null,[r(t,{ref:"select",options:f.value,value:y.value,"onUpdate:value":a[0]||(a[0]=n=>y.value=n),style:{width:"300px"},onFocus:P,onChange:D,class:"row"},null,8,["options","value"]),r(o,{columns:N,"data-source":l.value,pagination:!1,scroll:{y:320},class:"row"},{bodyCell:p(({text:n,record:i,column:v})=>[v.dataIndex==="correctRate"?(u(),d("span",{key:0,class:C(R(n))},c(n.toFixed(2))+"%",3)):["understanding","memory","knowledgePoint","system","technique"].includes(v.dataIndex)?(u(),d("span",{key:1,class:C(M(i,n))},c(parseInt(n*.3)),3)):(u(),d(_,{key:2},[b(c(n),1)],64))]),_:1},8,["data-source"]),r(o,{columns:w,"data-source":h.value,pagination:!1,scroll:{y:320},class:"row"},null,8,["data-source"]),r(o,{columns:q,"data-source":I.value,pagination:!1,scroll:{y:320}},{bodyCell:p(({column:n,record:i})=>[n.key==="studentID"?(u(),X(Z,{key:0,to:"/student/"+i.studentID},{default:p(()=>[b(c(i.studentID),1)]),_:2},1032,["to"])):j("",!0)]),_:1},8,["data-source"]),r(W(G),{data:Y.value,options:S.value,class:"line-chart"},null,8,["data","options"])],64)}}},K=O(z,[["__scopeId","data-v-c0a10898"]]);export{K as default};