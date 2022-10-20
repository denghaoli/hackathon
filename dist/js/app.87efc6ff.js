(function(){"use strict";var t={787:function(t,s,a){var e=a(6369),n=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],r={name:"App"},o=r,c=a(1001),l=(0,c.Z)(o,n,i,!1,null,null,null),A=l.exports,p=a(2631),v=function(){var t=this,s=t._self._c;return s("div",{staticClass:"main"},[s("NavBar"),s("div",{staticClass:"banner"},[s("div",{staticClass:"container"},[s("div",{staticClass:"button",on:{click:t.showTips}})])]),s("div",{staticClass:"container"},[t._m(0),t._m(1),t._m(2),s("section",{attrs:{id:"experts"}},[t._m(3),s("div",{staticClass:"experts-container"},t._l(t.experts,(function(a,e){return s("div",{key:e,staticClass:"experts",attrs:{cols:"5",sm:"3"}},[s("div",{staticClass:"experts-avatar",on:{mousemove:function(s){return t.handleHover(e)},mouseout:t.handleLeave}},[s("img",{attrs:{src:a.img,alt:a.name}})]),s("div",{staticClass:"experts-info text-left",class:{show:e===t.hoverIndex}},[s("p",{staticClass:"experts-name"},[t._v(t._s(a.name))]),s("p",{domProps:{innerHTML:t._s(a.desHtml)}})])])})),0),t._m(4)]),s("section",{staticClass:"box text-left",attrs:{id:"contact"}},[s("h3",[t._v("联系我们")]),s("b-row",{staticClass:"mb-5 align-item-center"},[s("b-col",{staticClass:"qrcode",attrs:{cols:"6",sm:"6"}},[s("p",[t._v("合作联系人：大赛小助手"),s("br"),t._v(" 邮箱：zhengchao@openmpc.com ")]),s("img",{attrs:{src:a(101),alt:"郑超"}})])],1)],1),t._m(5),s("hr")]),s("section",{staticClass:"partners2"},[t._m(6),t._m(7),s("div",{staticClass:"partners-item"},[s("h3",[t._v("合作伙伴")]),s("div",{staticClass:"img-container"},[s("img",{attrs:{src:a(2015),alt:"Datawhale 开源社区"}}),s("img",{attrs:{src:a(3579),alt:"Nebula Graph"}}),s("img",{attrs:{src:a(7860),alt:"JuiceFS"}}),s("img",{attrs:{src:a(9593),alt:"木兰开源社区"}}),s("img",{attrs:{src:a(1671),alt:"木兰开源社区"}}),s("img",{attrs:{src:a(9235),alt:"开源社"}}),s("img",{attrs:{src:a(5061),alt:"春松客服开源社区"}}),s("img",{attrs:{src:a(7918),alt:"开源面对面"}}),s("img",{attrs:{src:a(6708),alt:"IoTDB"}}),s("img",{attrs:{src:a(1248),alt:"Jina AI"}}),s("img",{attrs:{src:a(2924),alt:"Wasm Edge Runtime"}}),t.expired?t._e():s("div",{staticClass:"placeholder-img"},[t._v("欢迎加入")])])]),t._m(8)]),t._m(9),t.showTip?s("ToolTip",{attrs:{text:"报名即将开始",visible:t.showTip}}):t._e()],1)},d=[function(){var t=this,s=t._self._c;return s("section",{staticClass:"intro",attrs:{id:"intro"}},[s("div",{staticClass:"section-title"},[s("span",{staticClass:"title"},[t._v("活动背景")]),s("span",{staticClass:"background"},[t._v("Background")])]),s("div",{staticClass:"intro-desc"},[s("p",{staticClass:"summary text-left"},[t._v("我国相继颁布施行的《网络安全法》、《数据安全法》、《个人信息保护法》，三部法律 共同组成数据保护领域的“三驾马车”，构筑了一张新时代的数据安全防护网。同期，国务院办公厅在《要素市场化配置综合改革试点总体方案》里提出建立健全数据流通交易规则，探索"),s("strong",{staticClass:"active-color"},[t._v("“原始数据不出域、数据可用不可见”")]),t._v("的交易范式。隐私计算作为数据产业的核心基础设施，其全球市场规模有望突破数万亿。")]),s("p",{staticClass:"summary text-left"},[s("strong",{staticClass:"active-color"},[t._v("OpenMPC联合CSDN在2022年程序员节开展隐私计算 Hackathon。")]),t._v("本大赛旨在通过竞赛方式，促进隐私计算技术应用与创新，促进更多的数据拥有方和数据使用方通过隐私计算发挥数据价值，促进数字产业与隐私计算结合应用，为打造数据要素流通高效协同的关键基础设施贡献科创力量，促进数据要素化创新应用、技术实践、培育优秀人才。")])])])},function(){var t=this,s=t._self._c;return s("section",{attrs:{id:"system"}},[s("div",{staticClass:"section-title"},[s("span",{staticClass:"title"},[t._v("活动赛制")]),s("span",{staticClass:"background"},[t._v("Format")])]),s("div",{staticClass:"system-intro text-left"},[s("dl",[s("dt",[t._v("1.赛事启动")]),s("dd",[s("p",[t._v("第一届隐私计算 Hackathon 在1024程序员节启动。")])])]),s("dl",[s("dt",[t._v("2.参赛对象")]),s("dd",[s("ul",[s("li",[t._v("大赛面向社会各界开放，不限年龄、国籍，高校、科研院所、企业从业人员均可报名参赛。")]),s("li",[t._v("报名条件：参赛人员以个人或者团队形式报名参赛，一名参赛人员在一个赛道中仅允许出现1次，但可以参加多个赛道。可以组团参加，每支参赛团队人数不超过5人。")])])])]),s("dl",[s("dt",[t._v("3.赛制说明")]),s("dd",[s("p",{staticClass:"summary text-left"},[s("a",{staticClass:"nocolor",attrs:{href:"https://github.com/primihub/primihub",target:"_blank"}},[t._v("PrimiHub")]),t._v(" 是基于安全多方计算、联邦学习、同态加密、可信计算等的隐私计算技术，结合区块链等研发的开源隐私计算应用平台。 "),s("a",{staticClass:"nocolor",attrs:{href:"https://github.com/primihub/primihub",target:"_blank"}},[t._v("PrimiHub")]),t._v(" 秉承保护数据在应用过程中的隐私安全，实现“数据可用不可见”。 产品平台涵盖了匿踪查询、隐私求交、联合建模、联合统计、算法容器管理、数据资源管理、数据确权与定价、异构平台互联互通等主要应用服务功能。 ")]),s("p",{staticClass:"summary text-left"},[t._v(" 本次比赛，邀请所有参赛团队基于 "),s("a",{staticClass:"nocolor",attrs:{href:"https://github.com/primihub/primihub",target:"_blank"}},[t._v("PrimiHub")]),t._v(" 技术及其服务进行开发，期待通过本场大赛，为隐私计算技术的推进和应用的发展提供新思路。 ")])])]),s("dl",[s("dt",[t._v("4.赛事日程")]),s("dd",{staticClass:"group-con text-center"},[s("img",{attrs:{src:a(5112),alt:""}})])]),s("dl",[s("dt",[t._v("5.评比规则")]),s("dd",[s("p",{staticClass:"summary text-left"},[t._v(" 本次比赛分为初赛、复赛，初赛阶段只需要提交方案设计即可，具体形式不作限制，例如：文档、PPT、示例代码等待。通过专家评委的审核后，可以得到主办方提供的周边大礼包，并获得参加复赛的资格。 ")]),s("p",{staticClass:"summary text-left"},[t._v(" 凡进入复赛的团队（个人），需要在指定时间内完成代码的编写、测试，确保功能完整、可用。参赛选手在线上提交，主办方组织专家评审，择优评出一二三等奖若干名。 ")])])]),s("dl",[s("dt",[t._v("6.奖项设置")]),s("dd",[t._v(" 择优评出一等奖两组*3万，二等奖4组*2万，三等奖六组*1万，优胜奖-礼品证书。 ")])])])])},function(){var t=this,s=t._self._c;return s("section",{attrs:{id:"rules"}},[s("div",{staticClass:"section-title"},[s("span",{staticClass:"title"},[t._v("参赛规则")]),s("span",{staticClass:"background"},[t._v("Rules")])]),s("div",{staticClass:"system-intro text-left"},[s("dl",[s("dt",[t._v("1.参赛材料")]),s("dd",[s("p",[t._v("提交源码+路演PPT+5分钟以内演示视频。")])])]),s("dl",[s("dt",[t._v("2.提交方式")]),s("dd",[t._v(" 参赛团队按报名审核提交材料清单，按要求准备材料后压缩成 zip 文档进行提交，提交网址为：（陆续开放） ")])]),s("dl",[s("dt",[t._v("3.参赛回避")]),s("dd",[s("ul",[s("li",[t._v("参赛者禁止在指定考核技术能力的范围外，利用规则漏洞或技术漏洞等不良途径提高成绩排名，禁止在比赛中交换答案或有其他违规行为，一经发现将取消比赛成绩并严肃处理。")]),s("li",[t._v(" 报名回避条件： "),s("p",[t._v("直接参与大赛策划、组织、技术服务提供、评审的工作人员、专家及其直系亲属不得作为参赛人员报名参加大赛。")]),s("p",[t._v("失信企业以及含有征信不良的参赛人员的团队不得报名参加大赛。")])])])])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"section-title"},[s("span",{staticClass:"title"},[t._v("评审专家")]),s("span",{staticClass:"background"},[t._v("Evaluation Experts")])])},function(){var t=this,s=t._self._c;return s("p",[t._v("重量级评委待揭晓"),s("br"),t._v("……")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"box text-left"},[s("h3",[t._v("权责说明")]),s("p",[t._v("主办方和承办方保留对比赛规则进行调整修改的权利，并对赛事相关事宜拥有最终解释权；"),s("br"),t._v(" 主办方和承办方保留调整赛事时间安排的权利，主办方和承办方有权在特殊条件下暂停或终止比赛；"),s("br"),t._v(" 主办方和承办方保留调整比赛各阶段入选团队数量的权利，以及调整奖项设置的权利；"),s("br"),t._v(" 对影响比赛组织及比赛公平性的参赛团队，主办方和承办方保留收回或拒绝授予其奖项的权利；"),s("br"),t._v(" 若因故出现数据更新、评审代码更新、作弊检查等原因主办方和承办方有权对参赛结果进行重新测评并更新排行榜。 ")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"section-title"},[s("span",{staticClass:"title"},[t._v("合作伙伴")]),s("span",{staticClass:"background"},[t._v("Partners")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"partners-item"},[s("h3",[t._v("主办单位")]),s("div",{staticClass:"img-container"},[s("img",{attrs:{src:a(8055),alt:"CSDN"}}),s("img",{attrs:{src:a(8222),alt:"openmpc logo"}})])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"partners-item"},[s("h3",[t._v("赞助商")]),s("div",{staticClass:"img-container"},[s("img",{attrs:{src:a(4320),alt:"北京原语科技有限公司"}})])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"text-center footer"},[s("p",[t._v("OpenMPC 版权所有 "),s("a",{attrs:{href:"https://beian.miit.gov.cn/#/Integrated/index"}},[t._v("冀ICP备16008495号-2")])])])}],g=function(){var t=this,s=t._self._c;return s("div",{staticClass:"nav"},[s("b-navbar",{staticClass:"navbar-custom sticky sticky-dark",staticStyle:{"background-color":"#4b2f9a"},attrs:{type:"dark",variant:"dark",toggleable:"lg",fixed:"top",id:"main-menu"}},[s("b-navbar-brand",{attrs:{to:"/"}},[s("img",{staticClass:"logo",attrs:{src:a(4427),alt:"原语科技"}})]),s("b-navbar-toggle",{attrs:{target:"navbarCollapse"}}),s("b-collapse",{attrs:{id:"navbarCollapse","is-nav":""}},[s("b-navbar-nav",{attrs:{id:"navbar-navlist"}},[s("b-nav-item-dropdown",{staticClass:"dropdown",attrs:{text:"新闻中心"}},[s("b-dropdown-item",{attrs:{href:"https://live.csdn.net/list/zxff716 "}},[t._v("CSDN")]),s("b-dropdown-item",{attrs:{href:"https://live.csdn.net/room/zxff716/YCRz6iv6"}},[t._v("Meetup")])],1),t._l(t.list,(function(a,e){return s("b-nav-item",{key:e,class:{active:t.activeIndex===e},attrs:{href:`#${a.path}`,id:"navbar-links-"+e},on:{click:function(s){return t.handleClick(a.path,e)}}},[t._v(t._s(a.name))])})),s("b-nav-item",{attrs:{href:"https://github.com/primihub/hackathon"}},[s("img",{staticClass:"github-logo",attrs:{src:a(8745),alt:"",srcset:""}})])],2)],1)],1)],1)},u=[],f={name:"NavBar",data(){return{activeIndex:0,list:[{name:"大赛简介",path:"intro"},{name:"活动赛制",path:"system"},{name:"参赛规则",path:"rules"},{name:"评审专家",path:"experts"},{name:"联系我们",path:"contact"}]}},mounted(){},methods:{handleClick(t,s){const a=document.getElementById(t).offsetTop+100;this.activeIndex=s,document.body.scrollTo({top:a,behavior:"smooth"})},handleSelect(t,s){this.activeIndex=s}}},m=f,C=(0,c.Z)(m,g,u,!1,null,"91c26f9c",null),h=C.exports,b=function(){var t=this,s=t._self._c;return s("div",t._b({staticClass:"tip"},"div",t.$attrs,!1),[t._v(t._s(t.text))])},E=[],w={name:"ToolTip",props:{text:{type:String,default:"报名即将开始"}}},x=w,B=(0,c.Z)(x,b,E,!1,null,"1f88effc",null),Q=B.exports,k={name:"PcIndex",components:{NavBar:h,ToolTip:Q},data(){return{showTip:!1,hoverIndex:-1,experts:[{name:"范晶晶",img:a(2583),desHtml:"科鲸CEO<br>开源组织Datawhale发起人<br>开源社成员"},{name:"强锋",img:a(1789),desHtml:"微言科技CTO<br>曾任中国工商银行大数据与人工智能实验室资深数据科学家和联邦学习团队负责人"}]}},computed:{expired(){const t=(new Date).getTime(),s=new Date("2022-10-24 23:59:59").getTime();return console.log((s-t)/864e5+"天"),s-t<0}},methods:{showTips(){this.showTip=!0,setTimeout((()=>{this.showTip=!1}),2e3)},handleHover(t){this.hoverIndex=t,console.log(t)},handleLeave(){this.hoverIndex=""}}},I=k,J=(0,c.Z)(I,v,d,!1,null,null,null),D=J.exports;e["default"].use(p.ZP);const R=p.ZP.prototype.push;p.ZP.prototype.push=function(t){return R.call(this,t).catch((t=>t))};const y=[{path:"/",name:"home",component:D},{path:"*",redirect:"/",hidden:!0}],M=new p.ZP({routes:y});var P=M,U=a(7725),S=a(6635);a(7024);e["default"].use(U.XG7),e["default"].use(S.u3),e["default"].config.productionTip=!1,new e["default"]({router:P,render:t=>t(A)}).$mount("#app")},1671:function(t,s,a){t.exports=a.p+"img/partner-logo-kubesphere.22248582.svg"},2583:function(t,s,a){t.exports=a.p+"img/fanjingjing2.88f35ec4.png"},8745:function(t){t.exports="data:image/png;base64,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"},4427:function(t){t.exports="data:image/png;base64,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"},8222:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABQCAYAAABcbTqwAAAACXBIWXMAAAsTAAALEwEAmpwYAAASMUlEQVR4nO3deXwU9f3H8dfMXrkTCIGQSwiBJCKXiAcoKqJgaT1ARFGLP8+fR8WrVepRLyq1XvVEbK30J1YpXogcVqgCciM3kSuBhJD72k02u9mZ+fz+2BChwEJIwNb9Ph+PfTySnZnv9zuz+945vzOaiAiKohyW/mM3QFH+k6mAKEoIKiCKEoIKiKKEoAKiKCGogChKCCogihKC/cduwI9ti6eBt7aWsbfBx6BOsdx9agqxdtsxT7+h0s3MvDLWVNbjs4TsaBdXZnXi0qwuJ7DVysmihfOJwjVVHsZ9tQ2rUdBcNixvE53SY1k0LIe4YwjJixv28vLifCxfAM1lA3QsbxNiBLjwtK5Mv6wPdv3Yw6b85wnrTaxJW0qx/Bb2pChssS4cybFUFrmZtrP8qNO+u72UF+ZvQ3M5cHSOxhYTiS3ahSMpEkdSHAtXlXL155tPwlwoJ1LYBsQSi0KPH1t0BFgCIiCgRzhYV+s72tQ88U0+9vgodJeOWIBoYAliCqDhSo9n2apiFhxD2NpDY5NxUuoJN2G7D6JrOslRDgqr3dgjooIB0TQ0p53luyvpsbcGmybEO3U6R0WQEukiJcLBKdF2tlR7EQP0GDuYBqCDgIgFaMGXLmg2nb9tLmVEVucTMg/F1fVMnZvH8u1V1DUaxEXonJ2VyO0/yyUjKe6E1BluwnofZGlFHTcs+B5ER49wYnoaiU2J5dHcZIo8PnZ7fJT5DCp8AWoaDTy+Jix/AGkCPSoCLAOxpHntYSFigmULhsU0Met8pKfGsWLCme3e9sV5JYyZ8g2+Ei/2DpHYnDqG18CoaMCR6GLmYxdy8ekZ7V5vuAnrgAAsq/Tw/MZiyvwG/RMiebxfKl2iIo44fsA0eWLNXv62fDf2BFdw88rSQExEBCwdxEIswajxk5URx+JfDmrXNu+p9ND/ntlg6SR3icEyTCwBRLBrGvuKPFh+P+v+Ooas1A7tWne4Cdt9kP0Gd4rl42E5fHtpLq+f0yNkOAAcNhvDUmMRI0Dwp0UHkeDmlQQXZ/A3RxCfydnJse3e5imfbMJyGyQnx2CaJs3ZAAHLsEhLicHyGjzz/rp2rzvchH1AfnDsh2OHdo0numsMRrUPTdOA5n2P/d9UIXjo2Knx6/O6t2sr67x+Fmwsx9k5BtO0gptzNNfbfJAgEDCJTYtjwdp9lNU0tGv94UYF5Dg4bDamD8sGyyRQ5UEQDlyUltfA8jUhpjDln9vbte78Uje1tT6iI+y0bB0LaM2v/dvLUS479TU+dhXXtWv94UYF5Did3bUD748fQKcEJ4EyT/PLjX9vDZgGL15xKp/dcgb/t2gX/f+wiNpA+xyGzc3oQHSMA7/fbAmESPAwtUbwBYJlCbpDJzrS0S71hquw30lvq4Bl8sX3ZayvasRnWGTHOrgkK4nUhGgA9noaGfr8YjzVXhZMuoDTU9q20/zMrPU899f1JGYk4LSBaQGmoFvBTSxNE8QSyiu8dE+NYeVrV+BsxaUzysFUQE6SMW8vZ9G/8nn13nO5/sxTWj29J2Bw2SMLWF9YwzXnd+ODb/bQsWMMNhEwLcQUtOa1SMCwKN9bx9RJQ7n+4pwTMDfhI2xPFJ5sH916Ds+mJ3D3lK9ZP64vz48bcMzTLskrZdRv5hIbH0nem6NJ7hBFTYOfzz/aTkxWIh2jHIguaGjUegLUVzRgVnnpkRJ/AucoPKg1yEk2b0sJ4ycvpF/frnz50AU4tR82fwzTxG47eHPo2Vnrefq5JYwd14fpD1xwwBBh0l9X8tbc7TSV+UDTwDJxdHAx+eaBrNlSztYiNyveHH1yZuwnSgXkR7CjysM5jyzAGe1g2SMXsa3EzdOzt+LxBvhF3y48M/Z0AEY+OZ8l83by6tPDuekIm0r5JdUs/K6E8poGOiVEctGAFLJSEymu9NBjyFTWzr+J3t0TT+bs/aSogPxIGi2TK/+0lHWFtYgFls9Es+sEyuoZMTyTnYU17N1bx8Lfj+S0tI7HVUfudTM4vVcnZvxuRDu3PnyogPyI/JZBxoPzEAsSYhyIJWjolOeVM/CMLvzzkUvadBx+/vICRt87h4aVd6OhtVu7w4k6D3IMApbBU9/u5Ny/r2Ho+6t4ccWudim3uLoREJwuG2IJIoKYFiLCHcN7tvnDGXnOKTiinYx+YA4fzNvaHk0OOyogR9Fkmlz86UamfrWLPaUN5Jd4eG52HtfN3cIP562PT0p8FKdnJOCvbwpeoSIajf4AkcnRdEtq2zVcHq+Pyx/6gsjICBYsLmTCLbO5/L5P8al+I62iAnIU728rZfvWCpxpHbHFOrDFRuBKT2TRikIW5le2qewIh41B3RLw7aimuthNzV437u8rSE2K4ozMTm0q+5V/bGD+3/OIj3GQ0T2B9LNSmTd9C2/P2timcsONCshRfFtaj+50AtLcc1AHPdh7cHFhTZvKfvTDdbz28RZ+e8+Z/GZsb24d1ZPnHxxCUWk9t726pE1lL9tcgT01HsTCMgUdwZYWzz9XFLap3HCjThQeRZdIB2KYoJkEL53VEMsEm86QjOO7bMQCfv7cv1i6uID3nhzOZQMP7tg0MDOR88Z9gMOm8fqd5x5XHUNO68y/Fu5GTEAEm01H3E1knIDL73/KVECOYkJOZ95dVoBR1YAtPhrQMD1+rIYAc7dVMjyzE/q/HSFauqucP68sYleNF5emMSQ9nrvPzyIpLpKqBh/9Hp6Lt9bH6r9cRXaXQ7vGDsxM4qsZYxl2xQwSop1MPo4eiQ3eAEa+m2KXnahYJ/VF9WiROv97dd/jXRRhSR3mPQazd5Vx37zvaazxgQjdMjvyi26JvPp1PtJk8vLo0xjXPw2AR+dtZdr8HYilYYtyYDUFu96m9uzAr4Z244lPt9LFofH1EyOIc4a+0vbLDUVcNu5DfvfkMCaNO/2Y2rpwdSG3PrOIssoGJo7vy66iOlZvKic5MYpnJw7m/IGqG25rqIAco9qmAN/mV+LQNYb36IRus1PZ2MSvPt7Al4sKOP/CTAamxvGn2dtwdIjC6dTQTNBMQdc1PB4/voIqxo7qxdutWCN8vrqAq8bOZPILI3lwTD8M02TN9+V0jHfR64ATiFv3VHPn7xex7PNtXHBFDm9MuoCs9OAZ9MqaBjp1iG73ZRIOVEDawbLdVdw4cyM1RW6i0+LRCfbsC16CHuxtaFkW7iI3j48/jYkXte4K21lLdnHjY19x1w39Wb+zkmVrS9EcGveN7c3Nl+by4ocbmPrqMnIGpfL6QxcwpF/aiZnRMKQC0k4W7Srn2tdXEZkUHey4ZIFmWkBzhyZLqHf7SekYwarfDsNpa10fjXcWbOXOiV8SkdOJxAQnXp9BQ40Pp0sn2qHz0l1nMXpY9omYtbCmdtLbyc7KxuZLRYLdw3XrgN8dETQB3a7j8ZnU+ww6RrcuIBFOB47UGJI6uECEuAg7TREOXHaLHR+Ox2lXH+WJoM6DtJPOUXZAsADdovk2I7D/rgoaYPoCJLh04iJa/2UuKPFgeQ3s9uBVVQKYpknHWJfqMXgCqYC0k2FZSTg6RuCr8WFrPuqrAZbVvPbQNQJlDYzq0+WQPh/HYtSZaWgO2FfqRbPrNBkWjZsrGDkorbkm5URQAWkncZFOXrk8F6OyAY+7CV0P3j5BD97RlMr8Gjp2i+P+EcfXBbZ/VmemPn4+YjZRtKGE8h0VXHZ9b564qf3v2qj8QO2kt7Npy3by6IebMT0GeoQNy28i/gAZ3eOZedcQeiW3rRtsYXkdi9cU07VzNBed0fq+7UrrqICcADvL65i5Zi+FtY04NY2BafFcP6Q7NvWskP86KiCKEoLaB1GUEFRAFCUEFRBFCUEFRFFCUAFRlBBUQBQlBBUQRQlBBURRQlABUZQQVEAUJQQVEEUJQQVEUUJQAVGUEMKyI/NHM2fy2Scf4/d50QDd5uTCSy7h1ttuO2i8FcuWMusfs9AF7A47RiCAZrdz1ZgxDDpnMABbN2/ivffeQwwDTYP9vftEhKq6OibeM5Heffrw6/vvY8QllzB85KUH1WFZFs88/hiZPXty/YQbD2nr91u38Odp03j62SlERkYedn5ee/EFNN3GXffeC0BpSQlvTZ2Ku6Yal8uFZZo0GSZnDxnM1eOuaZmuuKiQqVPforHejdPpanm/sraOn40cwRVjrmrdgv0pkjBz/913BZ+TDNLR6ZBEl1O05v8vHXahNPn9IiLy7ZLFLeMd7jV/zmwREXnovntDj/fFFyIiLf/nbd50UHsMwxBABg/od9j2zpj+rgDywrOTDzu8pGSfAHJaZqaIiNTV1Up2esoR2/PgxF8Fx6utlW7JSUcc786bb2rzsv4pCKuALJg3VwB5+MH7pbamWkzDENMwpKHeI2+9+ooA8tIf/yAiInfccrMAsnPbNqmsqJCy0lKprKiQ/F07JbdnD4l3OkRE5KnHHhNACnfvFp/PJ16vV7xer/h8PqmpqZGmJr9UlJVLv8xTWr58+Tu2t7TJMA1JjHDKdWOvOmybZ3/ysQDi1JDy0tJDht9+4w0CyIRrrhERka++XCCA/OP9GS3trigvl5J9xfJA849DZWWFrF29SgCZ/fFHLePtf+0rLhZ3XV17L/7/SmEVkFsn3CBaiJVmr/RUObNPbxERuevWWyRSO/y4H/xtuuxf+b78xz+GLFNEZN/evRLndMgDd98pfU/NEUCKC/eIiIhphA7I55980hKsO26acNCwdWvXtAy7cfy1IiIyd/bs4Jpqy+ZDyqqprhJAvl2yRL5bvVoA2Z1fELLt4S6sdtK93kaSIpxHHN6rZzYejweAyKgofEfoa5mXl9fyt2VZDMjJ5p23p6FpGpG6RqxNR9M0bvufGwBwOBy4mwKcO+wi1q4PPp+jW7duNLjd6DYbAcM8YpsCgQDRusaYUSN5853pbFz3XcuwCePHk5qUxOm9c6isKAfA7gje77e+vv6QsnZs3wZATExMy3jVVW17xslPXVjtpIslGOaRv4xNAT8tT40SyErryuoVK5g/dw6RUVE4HU52FxTw0utvMPbnowCoqqqi1u0mPT2DG8ZdTVRUFLquUVpdzaCzzgkW1dyreeumTVxx5Wjyt28js1c2vXNzWLdpE9nZPTGP0C7TNPFawpQXX2b7zssYO/pKthXsYd7nn7Fx23bWrFzB21PfYMN36w6armRfMe/8+W3K9hUTFR1DvcfDo08+RaRNp3efPiz5+pvgiJq6ZVAoYRWQtIw0qgMmdbU1xCcc+myPJStWct7g4NEpwwiQntGNVStX8PjTkw8a79qxVzHtL+8AUF1ZSf6+Ei4eOZKLR448bL1Nfj8Auh5cYXfv2YutGzdwat9+9MnNRtdtnJF4+CfZalrw9kHde2Qx69PPyM7N5c1XXubZyb9n+PlDGXjmWTw4cSK6fvBHWVFRwRMP/4aianfLezk9Mnn/ww+w2WwUFe0BoGtKytEWW1gLq4DccvsdPPfSnxjQuzdvTJtGQsfgl7Khvp7nJk+mMWDwwEMPBd/zNrBk2XJmzfmCMeOuARFM08TpcpGUlNRS5induwEw9bVXSElLwwgEnwEoCJ56LyMvvZTY+OCtfg5cS+T26cu6NasZcMYgACJdEYdts9U8zc6dO8jOyeHyERdz58T7AFi2eg0AZWUlREcFH4wjzfcDzuzRgw07CvD7fAiCJZCamtpSbmpa8AbXL/1hCucMHYoRCLB/7eluaKRfn94MHHRWq5fxT86PvRN0ss2fM/uIhzbffOXllvGuv3qsHMviqagol2HnDT5imXNmfyYiwcO8j096+JDply9dIoDc8svrDlv+jHeDh3lXrVguIiLf5+UJIPfcflvLOKd0TpScjHQREZnz2acCyNJvvgnZbsMIyN233nzEdk+49pqjzns4CMvb/tR73CxfvgKftwENsDudDBg4kC5dklvG2bO7gOrqavr1H9CyaRTK+vXrEdPE1nxbUQGaAgF69epFfHw8a9euJSU5ma4H/Iq3TPvdWuLi4sjM6nnIsOqqKgp2F5Cbm0tUVPAZH2tXrSQ791RiYoNrjbwtW9B0jZzcU6mtrWHXzl306tWL2LhDn1717/LyttLY4MV+wM2v/YEAyV26kJ6hHrYTlgFRlGMVVod5FaW1VEAUJQQVEEUJQQVEUUJQAVGUEFRAFCUEFRBFCUEFRFFCUAFRlBBUQBQlBBUQRQlBBURRQlABUZQQ/h9rimhOv2IRoQAAAABJRU5ErkJggg=="},8055:function(t,s,a){t.exports=a.p+"img/partner-logo-csdn.2b5d8ae7.png"},5061:function(t,s,a){t.exports=a.p+"img/partner-logo-cskefu.1f5030d3.png"},2015:function(t,s,a){t.exports=a.p+"img/partner-logo-datawhale.b60e3002.png"},6708:function(t,s,a){t.exports=a.p+"img/partner-logo-iotdb.c057e9ac.png"},1248:function(t,s,a){t.exports=a.p+"img/partner-logo-jina.d43ff70d.png"},7860:function(t,s,a){t.exports=a.p+"img/partner-logo-juicefs.a57be322.png"},9235:function(t,s,a){t.exports=a.p+"img/partner-logo-kaiyuanshe.afe40003.png"},9593:function(t,s,a){t.exports=a.p+"img/partner-logo-mulan.664e80b5.png"},3579:function(t,s,a){t.exports=a.p+"img/partner-logo-nebula-graph.6e7a594b.png"},7918:function(t,s,a){t.exports=a.p+"img/partner-logo-osf2f.b22122b3.png"},4320:function(t,s,a){t.exports=a.p+"img/partner-logo-primihub.82f3df1a.png"},2924:function(t,s,a){t.exports=a.p+"img/partner-logo-wasm-edge-runtime.18d25802.png"},5112:function(t,s,a){t.exports=a.p+"img/process.9215d86f.png"},1789:function(t,s,a){t.exports=a.p+"img/qiangfeng2.e2d914c1.png"},101:function(t,s,a){t.exports=a.p+"img/zhengchao.1a339cae.png"}},s={};function a(e){var n=s[e];if(void 0!==n)return n.exports;var i=s[e]={exports:{}};return t[e](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(s,e,n,i){if(!e){var r=1/0;for(A=0;A<t.length;A++){e=t[A][0],n=t[A][1],i=t[A][2];for(var o=!0,c=0;c<e.length;c++)(!1&i||r>=i)&&Object.keys(a.O).every((function(t){return a.O[t](e[c])}))?e.splice(c--,1):(o=!1,i<r&&(r=i));if(o){t.splice(A--,1);var l=n();void 0!==l&&(s=l)}}return s}i=i||0;for(var A=t.length;A>0&&t[A-1][2]>i;A--)t[A]=t[A-1];t[A]=[e,n,i]}}(),function(){a.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(s,{a:s}),s}}(),function(){a.d=function(t,s){for(var e in s)a.o(s,e)&&!a.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:s[e]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(s){return 0===t[s]};var s=function(s,e){var n,i,r=e[0],o=e[1],c=e[2],l=0;if(r.some((function(s){return 0!==t[s]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(c)var A=c(a)}for(s&&s(e);l<r.length;l++)i=r[l],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(A)},e=self["webpackChunk_1024competition"]=self["webpackChunk_1024competition"]||[];e.forEach(s.bind(null,0)),e.push=s.bind(null,e.push.bind(e))}();var e=a.O(void 0,[998],(function(){return a(787)}));e=a.O(e)})();
//# sourceMappingURL=app.87efc6ff.js.map