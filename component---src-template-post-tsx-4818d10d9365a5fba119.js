(self.webpackChunk_vallista_land_blog=self.webpackChunk_vallista_land_blog||[]).push([[161,753],{1589:function(t,e,i){var r=i(9859),n=i(1601),o=i(6733),a=i(7079),l=i(95)("toStringTag"),s=r.Object,c="Arguments"==a(function(){return arguments}());t.exports=n?a:function(t){var e,i,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=function(t,e){try{return t[e]}catch(i){}}(e=s(t),l))?i:c?a(e):"Object"==(r=a(e))&&o(e.callee)?"Arguments":r}},17:function(t,e,i){var r=i(5968),n=i(2991),o=Math.floor,a=r("".charAt),l=r("".replace),s=r("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,d=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,i,r,u,m){var p=i+t.length,h=r.length,g=d;return void 0!==u&&(u=n(u),g=c),l(m,g,(function(n,l){var c;switch(a(l,0)){case"$":return"$";case"&":return t;case"`":return s(e,0,i);case"'":return s(e,p);case"<":c=u[s(l,1,-1)];break;default:var d=+l;if(0===d)return n;if(d>h){var m=o(d/10);return 0===m?n:m<=h?void 0===r[m-1]?a(l,1):r[m-1]+a(l,1):n}c=r[d-1]}return void 0===c?"":c}))}},8311:function(t,e,i){var r=i(5052),n=i(7079),o=i(95)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==n(t))}},895:function(t,e,i){"use strict";var r=i(1176);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},1601:function(t,e,i){var r={};r[i(95)("toStringTag")]="z",t.exports="[object z]"===String(r)},3326:function(t,e,i){var r=i(9859),n=i(1589),o=r.String;t.exports=function(t){if("Symbol"===n(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},1639:function(t,e,i){"use strict";var r=i(3103),n=i(9859),o=i(266),a=i(5968),l=i(8885),s=i(6733),c=i(8311),d=i(3326),u=i(5300),m=i(895),p=i(17),h=i(95),g=i(4231),f=h("replace"),b=RegExp.prototype,v=n.TypeError,x=a(m),w=a("".indexOf),R=a("".replace),k=a("".slice),A=Math.max,j=function(t,e,i){return i>t.length?-1:""===e?i:w(t,e,i)};r({target:"String",proto:!0},{replaceAll:function(t,e){var i,r,n,a,m,h,y,C,E,T=l(this),D=0,I=0,S="";if(null!=t){if((i=c(t))&&(r=d(l("flags"in b?t.flags:x(t))),!~w(r,"g")))throw v("`.replaceAll` does not allow non-global regexes");if(n=u(t,f))return o(n,t,T,e);if(g&&i)return R(d(T),t,e)}for(a=d(T),m=d(t),(h=s(e))||(e=d(e)),y=m.length,C=A(1,y),D=j(a,m,0);-1!==D;)E=h?d(e(m,D,a)):p(m,a,D,[],void 0,e),S+=k(a,I,D)+E,I=D+y,D=j(a,m,D+C);return I<a.length&&(S+=k(a,I)),S}})},5704:function(t,e,i){i(1639)},2177:function(t,e,i){"use strict";i.d(e,{Z:function(){return o}});var r=JSON.parse('{"author":"Theo","title":"Blog","titleTemplate":"%s · Theo","placeholder":"/profile.png","siteUrl":"https://dataportal.kr","description":"볼타 CTO 테오 블로그","twitterUserName":"","github":"heli-os","secondary":"https://jinssssun.tistory.com"}'),n=JSON.parse('{"config":{"name":"진태양","role":"Software Engineer","bio":["볼타코퍼레이션 <string>공동창업자 겸 CTO</string>","전자세금계산서 프로덕트 <string>전반 아키텍쳐 설계 및 서비스 개발</string>"],"github":"https://github.com/heli-os","email":"sun@dataportal.kr"},"careers":{"title":"경력","list":[{"name":"볼타코퍼레이션","position":"CTO / Co-Founder","department":"프로덕트팀","startDate":"2023.04","endDate":null,"descriptions":[],"projects":[{"name":"CTO","descriptions":["테크리드 및 매니징 업무 진행"],"startDate":"2023.04","endDate":null,"which":[{"title":"전자세금계산서 프로덕트 전반 설계/구축 및 운영"},{"title":"여러 서비스를 공통적으로 관리할 수 있는 아키텍처 수립 및 개발"},{"title":"TF 등 일정 내 효율적으로 협업할 수 있는 아키텍처 구축"}]},{"name":"Co-Founder","descriptions":["사업 및 투자 관련 업무 기여"],"startDate":"2023.04","endDate":null,"which":[{"title":"제품 전략을 제안하고 적기에 출시하여 비즈니스 기회 확장"},{"title":"투자 유치"},{"title":"TIPS 프로그램 선정"}]},{"name":"프로덕트 개발","startDate":"2023.04","endDate":null,"descriptions":["프로덕트 개발을 위한 아키텍처 설계 및 코딩"],"which":[{"title":"공통 인프라 형상 설계"},{"title":"서비스 확장에 대응할 수 있는 서비스 아키텍처 레이어 설계"},{"title":"비즈니스 로직을 쉽게 테스트하고 격리할 수 있는 객체지향 설계"},{"title":"비즈니스, 인원에 따른 적합한 기술 선정 및 설계"}]}]},{"name":"카카오페이","department":"머니클랜","position":"Software Engineer","startDate":"2022.01","endDate":"2023.06","fold":true,"descriptions":[],"projects":[{"name":"탈퇴 회원 거래내역 분리보관 파이프라인 설계 및 개발","descriptions":[],"startDate":"2022.09","endDate":"2022.12","which":[{"title":"탈퇴 회원 거래내역 분리보관 법적 요건 분석 및 정책 수립"},{"title":"회원 거래내역 탈퇴 이벤트 구독/적재 컨슈머 설계 및 개발"},{"title":"다수의 분리보관 대상 테이블에 대한 카프카 기반 비동기 복제/삭제 구조 설계 및 개발"},{"title":"프로젝트 수행 중 mongo-java-driver 오픈소스 기여"}],"techStacks":["Kotlin","SpringBoot","Kafka","MongoDB","MySQL"]},{"name":"펌뱅킹/오픈뱅킹 연동 시스템(금융플랫폼) 운영 및 고도화","descriptions":["와인을 등록할 수 있는 어드민 페이지를 개발하였습니다."],"startDate":"2022.05","endDate":"2023.06","which":[{"title":"신규 제휴 은행 연동: 출금이체, 입금이체, 예금주 조회 등"},{"title":"VAN(헥토파이낸셜, 더즌), 금융결제원(오픈뱅킹)과의 업무 협업"},{"title":"전사에 제공되는 금융플랫폼 연동 지원","items":["페이봇, 자금반환중개(착오송금반환), 머니 송금/충전 등 서비스 지원"]},{"title":"2022년 10월 15일 카카오 판교 데이터센터 셧다운 대응","items":["운영 관리 도구 및 모니터링 시스템 셧다운 상황 속 서버 헬스 체크 및 DB 커넥션 상태 점검","담당 서비스 구성 요소 중 수동 Failover 필요 대상 식별 및 대응","쿠버네티스 노드 리소스 부족에 따른 pod 리사이즈 대응","외부 제휴사의 인바운드 요청 상태 점검 및 대응","데이터센터 복구 후 주요 서비스 구성 요소 Replicaset 정상화 대응"]}]},{"name":"머니 어드민 Back-office 고도화","descriptions":["하나로 관리하고 있는 어드민을 조직별 R&R에 맞게 분리하여 업무 효율성 향상을 위한 프로젝트"],"startDate":"2022.02","endDate":"2022.04","which":[{"title":"Angular/React 구버전 빌드 결과물을 SpringBoot로 서빙하던 구조 재설계 및 리팩토링","items":["React 17 + Express.js 서빙 구조로 변경"]},{"title":"R&R이 명확하지 않아 발생했던 불필요한 커뮤니케이션 비용 절약"},{"title":"전반적인 어드민 사용성 개선을 통한 개발자가 아닌 누구나 어드민 이용 가능한 시스템 확립"}]},{"name":"레거시 청산 및 기존 비즈니스 유지보수 (a.k.a. 머니 운영 고도화)","descriptions":[],"startDate":"2022.01","endDate":"2023.06","which":[{"title":"일시적 오픈뱅킹 사용 불가 고객의 거래를 펌뱅킹으로 처리하도록 개선","items":["송금 성공률 기존 대비 10% 향상 및 그에 따른 수수료 절감"]},{"title":"2년 이상 방치된 Request/Response 로깅 로직 버그 식별 및 수정"},{"title":"과도하게 설정된 MySQL DB Connection Timeout 이슈 식별 및 수정","items":["AS-IS: 30s(default value)","TO-BE: 3s"]},{"title":"모니터링 누락되어 있는 일부 써킷브레이커 이슈 식별 및 수정"},{"title":"어드민 FE, BFF AEM/APM 및 에러 로깅 적용"},{"title":"조직내 Grafana & Kibana 운영 가이드 작성 및 세션 진행"}]}]},{"name":"핵클","department":"개발팀","position":"Software Engineer","startDate":"2021.06","endDate":"2021.11","fold":true,"descriptions":["A/B 테스트 플랫폼 백엔드 개발","결제 및 구독 백엔드 BFF 서버 개발","엔터프라이즈 고객사의 숫자 100% 증가"],"projects":[{"name":"내부 플랫폼 및 시스템 안정성 관련 기능 개발","descriptions":["서비스 규모가 커짐에 따라 시스템 안정성/운영 효율성 향상을 위해 다양한 서브 프로젝트를 진행하였습니다."],"startDate":"2021.10","endDate":"2021.11","which":[{"title":"비정상 트래픽 자동 감지 & 트래픽 차단 시스템 개발"},{"title":"고객 가입 시 웰컴 이메일 발송 기능 개발"},{"title":"고객 원장 데이터 추출 기능 개발"},{"title":"이메일 발송을 위한 내부 Sdk 개발"}]},{"name":"레거시 청산 및 기존 비즈니스 유지보수","descriptions":[],"startDate":"2021.06","endDate":"2021.11","which":[{"title":"최근 고객 데이터 조회 기능 속도 개선","items":["AS-IS: 800ms ~ 1200ms","TO-BE: 100ms ~ 200ms","ElasticSearch에 모든 Data를 저장하던 시스템을 중복 데이터는 저장하지 않게끔 개선하여 데이터 조회 속도 향상"]},{"title":"AWS Kinesis Produce 로직 이슈 식별","items":["기존에 사용되던 Application -> Kinesis -> S3 파이프라인의 이슈 식별","키네시스는 데이터를 어떤 샤드(Kafka의 파티션)에 적재할지 애플리케이션에서 직접 지정해주어야 함","애플리케이션은 샤드에 쓰기 실패한 경우 재시도하는 로직을 지니고 있었는데, 재시도 시 기존 키를 재활용하여 문제 발생","Why? 쓰기 실패가 발생하는 대부분의 케이스는 특정 샤드에 쓰기 요청이 몰렸기 때문이나 재시도할 때 키가 같다 보니 동일한 샤드에 쓰기를 시도하여 지속하여 실패"]}]},{"name":"결제 및 구독 백엔드 BFF 서버 개발","descriptions":[],"startDate":"2021.09","endDate":"2021.09","which":[{"title":"Stripe, TossPayments 연동 결제 시스템의 BFF(Backend For Front) 서버 개발"},{"title":"결제 요청, 카드 등록, 결제 이력 조회, 구독 정보 조회 등 결제 및 구독 관련 기능 서빙"}]},{"name":"A/B 테스트 상세 분석 백엔드 개발 및 유지보수/운영","descriptions":[],"startDate":"2021.06","endDate":"2021.09","which":[{"title":"프로젝트의 Owner를 맡아 고객의 Pain Point 분석 및 AC 정의"},{"title":"세그먼트 분석(지역, 플랫폼 별 분석 등)을 위한 데이터 모델링 및 API 개발"},{"title":"예비 엔터프라이즈 고객사를 실제 고객사로 전환시켜 기존 대비 엔터프라이즈 고객사의 숫자 100% 증가"}]}]},{"name":"코드포코리아","department":"운영팀","position":"Maintainer & Organizer","startDate":"2020.03","endDate":null,"fold":true,"descriptions":[],"projects":[{"name":"코로나19 개인 안심번호","descriptions":["MAU 4,000만 돌파 프로젝트"],"startDate":"2020.12","endDate":"2021.02","which":[{"title":"개인 안심번호 생성 시스템 설계 및 개발"},{"title":"실제 적용 방법 가이드 작성 & 데모 시스템 개발"},{"title":"네이버, 카카오, PASS 시스템에 도입"},{"title":"코로나19 수기출입명부를 통한 개인정보 유출 사례 감소"}]},{"name":"코로나19 공공데이터 공동대응 및 애플리케이션 개발","descriptions":["API 서비스 첫날 총 9천만회 API 호출, 시간당 최대 7백만회 호출"],"startDate":"2020.02","endDate":"2020.04","which":[{"title":"코로나19 관련 공공데이터 현황 분석"},{"title":"코로나19 관련 공공데이터 개방 요청"},{"title":"코로나19 공적마스크 재고 API 개발 기여(with 정부/네이버/KT)"},{"title":"코로나19 공적마스크 재고 현황 애플리케이션 개발"},{"title":"코로나19 공적마스크 재고 API & 서비스 시작"},{"title":"공적 마스크 매진율 증가","items":["AS-IS: 67.9%","TO-BE: 86.4%(1주일 후)"]}]}]}]},"skills":{"title":"기술","list":[{"title":"Kotlin/SpringBoot","descriptions":[{"title":"Kotlin을 이용한 SpringBoot 프로젝트 개발에 익숙합니다.","subTitle":["다양한 프로젝트 경험으로 코드 리딩 및 작성이 가능합니다."]},{"title":"문법을 잘 활용하며, 가독성 향상을 위해 노력합니다.","subTitle":["객체지향 프로그래밍에 익숙하기 때문에 상속, 확장 등을 통한 추상화에도 강점을 지닙니다."]},{"title":"크거나 작은 규모의 웹 애플리케이션 서버를 설계할 수 있습니다.","subTitle":["모바일 웹앱, PC, 어드민 등 다양한 프로젝트를 리딩하고 개발한 경험이 있습니다."]},{"title":"유지보수 용이하게 Package/Module Structure를 구성합니다.","subTitle":[]}]},{"title":"React/Next.js","descriptions":[{"title":"크거나 작은 규모의 웹 애플리케이션 서버를 설계할 수 있습니다.","subTitle":["모바일 웹앱, PC, 어드민 등 다양한 프로젝트를 리딩하고 개발한 경험이 있습니다."]},{"title":"React hooks를 사용하여 적절하게 데이터를 분배합니다.","subTitle":["Custom hooks을 줄곧 잘 쓰며, Context API를 사용하여 맥락에 맞는 컴포넌트 상태 격리를 통한 구현이 가능합니다.","이러한 시스템을 이용하여 디자인 시스템을 구현한 경험이 있습니다."]}]},{"title":"DevOps","descriptions":[{"title":"자동화 프로세스를 만들어서 팀 내 생산성을 높힙니다.","subTitle":["배포 자동화, JIRA Task 연계 자동화, 주간 비즈니스 지표 공유 자동화 프로세스 등을 만들어서 팀 내 생산성을 높힌 경험이 있습니다."]},{"title":"IaC 기술을 활용하여 인프라 형상을 효율적으로 관리합니다.","subTitle":["Terraform을 이용하여 AWS VPC, ECS, AutosScalingGruoup, VPN 등 인프라 요소를 관리해본 경험이 있습니다."]},{"title":"Jenkins, TeamCity, Docker를 사용하여 개발/배포 환경을 구축할 수 있습니다.","subTitle":[]}]},{"title":"그 외","descriptions":[{"title":"Git을 능숙하게 다룰 수 있습니다.","subTitle":["git flow, github flow를 회사에서 적용해본 경험이 있습니다."]}]}]},"hobby":{"description":"취미","list":[{"title":"블로깅","url":"/posts","descriptions":["개발을 좋아해서 틈틈히 공부를 하고 글을 작성하여 블로그에 투고합니다.","위의 제목을 누르면 제 블로그를 가실 수 있어요!","<a href=\'https://jinssssun.tistory.com\' target=\'_blank\'>https://jinssssun.tistory.com</a> 에서 과거의 글을 보실 수 있어요!"]},{"title":"사진 촬영","url":null,"descriptions":["사진 찍는 것을 좋아해서 사진을 찍으러 맛집 탐방을 다니거나 여행을 다닙니다.","풍경화나 야생 동물 사진을 좋아하고, 상업 촬영을 해보기도 했어요."]}]},"speaker":{"description":"발표","list":[{"title":"C.O.D.E Conference 2022 - 더 나은 오픈 데이터 정책에 대한 토론","url":"https://codecon2022.notion.site"},{"title":"Happy Civic Hacking - 공적마스크 정책 수립, 데이터 개방 API 논의, 서비스 개발 참여 사례 소개","url":"https://onoffmix.com/event/256507"},{"title":"The 2nd AYARF Keynote Speaker - 대한민국 정부혁신 사례 소개 및 질의응답 진행","url":"https://www.youtube.com/watch?v=OiFS4azd9m8&t=6695s"}]},"opensources":{"description":"오픈소스 기여","list":[{"title":"[specmock] PR#7","url":"https://github.com/specmock/specmock/pull/7"},{"title":"[mongo-java-driver] PR#996","url":"https://github.com/mongodb/mongo-java-driver/pull/996"},{"title":"[mongo-java-driver] PR#997","url":"https://github.com/mongodb/mongo-java-driver/pull/997"},{"title":"[mongo-java-driver] ISSUE#4719","url":"https://jira.mongodb.org/browse/JAVA-4719"},{"title":"[mongo-java-driver] PR#999","url":"https://github.com/mongodb/mongo-java-driver/pull/999"},{"title":"[google/ksp] PR#1088","url":"https://github.com/google/ksp/pull/1088"},{"title":"[line/kotlin-jdsl] PR#68","url":"https://github.com/line/kotlin-jdsl/pull/68"},{"title":"[JetBrains/Exposed] PR#1582","url":"https://github.com/JetBrains/Exposed/pull/1582"},{"title":"위클리 아카데미: 800명 규모 기술 경험 공유 네트워크 개설/운영","url":"https://weekly.ac"},{"title":"코드포코리아: 오픈소스 기반 기술 비영리 단체 설립/운영","url":"https://codefor.kr"}]},"activities":{"description":"활동","list":[{"title":"2023.02 ~ 2023.03 경북대학교 해커톤 멘토 활동","url":null},{"title":"2022.11 ~ 2023.02 코드스테이츠 모의 기술 면접관 및 멘토(Java, Spring, Computer Science)","url":null},{"title":"2022.07 ~ 2022.12 2022년 개인정보 국민점검단(개인정보보호위원회)","url":null},{"title":"2021.12 행정안전부 위기대응 민관협력 디지털 지원체계 구축 자문위원","url":null},{"title":"2021.11 2021 공공데이터 청년인턴(일경험 수련생) 해커톤 멘토","url":null},{"title":"2021.11 복지사각지대 발굴시스템 개선 간담회 자문위원","url":null},{"title":"2021.02 전자정부서비스 혁신을 위한 국민참여 기반의 비대면 경진대회 기획 자문위원","url":null},{"title":"2020.11 제4회 정부혁신제안 끝장 개발대회 기술평가 평가위원","url":null},{"title":"2020.04 ~ 202.07 제3회 정부혁신제안 해커톤 국민 기획단 & 멘토","url":null}]},"lectures":{"description":"강의/강연","list":[{"title":"제로베이스 백엔드 스쿨 Java/SpringBoot 기반 프로젝트 강의","url":"https://zero-base.co.kr"},{"title":"2022.10 캐치(진학사) LIVE 클래스 #앵콜","url":"https://www.catch.co.kr/CatchClass/Live/View/5572"},{"title":"2022.09 캐치(진학사) LIVE 클래스","url":"https://www.catch.co.kr/CatchClass/Live/View/5402"}]},"awards":{"description":"수상","list":[{"title":"2021.07 개인정보보호위원회 위원장 표창","description":"코로나 19 감염병 발생 상황에서 수기명부에 휴대전화번호 대신 기재할 수 있는 개인안심번호를 도입하여 개인정보보호 분야 발전에 이바지한 공로로 표창을 수여 받았습니다.","url":null},{"title":"2021.01 2020 COMMONS AWARD Engagement - 사단법인 코드","description":"코로나19 공공데이터 공동대응을 통해 시민참여와 거버넌스의 실현, 과제의 해결, 참여의 확산의 가치를 보여준 사례로 위와 같이 입상하였습니다.","url":"http://commonslab.cc/104/%EC%A0%9C1%ED%9A%8C-%EC%BB%A4%EB%A8%BC%EC%A6%88-%EC%96%B4%EC%9B%8C%EB%93%9C-%EC%8B%9C%EC%83%81%EC%8B%9D-2020-%EC%BB%A4%EB%A8%BC%EC%A6%88-%EC%96%B4%EC%9B%8C%EB%93%9C"},{"title":"2020.10 제1회 소셜 D·N·A 혁신상 대상","description":"코로나19 공적 마스크 판매정보 공공데이터 개방에 핵심 역할을 한 공로로 위와 같이 입상하였습니다.","url":"https://www.inews24.com/view/1307247"}]}}');function o(){return{profile:r,resume:n}}},8014:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return I}});var r=i(2784),n=i(2285),o=i(3919),a=i(8778),l=(0,o.Z)("div",{target:"e1x2ajq20"})("max-width:900px;width:100%;margin:4rem auto;box-sizing:border-box;padding:2rem 2rem;border-top:1px solid ",(function(t){return t.theme.colors.PRIMARY.ACCENT_2}),";&>p{margin-bottom:1.5rem;font-size:1.8rem;",(function(t){var e=t.theme;return(0,a.iv)("color:",e.colors.PRIMARY.FOREGROUND,";")}),";}&>a{border:none!important;outline:none!important;transition:none!important;background:none!important;&:hover{background:none!important;border-color:none!important;}}"),s=i(2322),c=function(){var t=(0,r.useRef)(null),e=(0,r.useState)({status:"pending"}),i=(e[0],e[1]);return(0,n.b6)((function(){var e,r;if(!((null!==(e=null===(r=t.current)||void 0===r?void 0:r.children)&&void 0!==e?e:[]).length>0)){var n=document.createElement("script");n.onload=function(){i({status:"success"})},n.onerror=function(){i({status:"failure"})},n.async=!0,n.src="https://giscus.app/client.js",n.setAttribute("data-repo","heli-os/profile-giscus"),n.setAttribute("data-repo-id","R_kgDOK9PR3w"),n.setAttribute("data-category","Comments"),n.setAttribute("data-category-id","DIC_kwDOK9PR384Cb9um"),n.setAttribute("data-mapping","pathname"),n.setAttribute("data-strict","0"),n.setAttribute("data-reactions-enabled","1"),n.setAttribute("data-emit-metadata","0"),n.setAttribute("data-input-position","top"),n.setAttribute("data-theme","light_high_contrast"),n.setAttribute("data-lang","ko"),n.setAttribute("data-loading","lazy"),n.setAttribute("crossorigin","anonymous")}})),(0,s.jsxs)(l,{children:[(0,s.jsx)(n.$j,{size:50}),(0,s.jsx)(n.xv,{size:12,children:"현재 외부 댓글 시스템 장애로 댓글 시스템을 이용할 수 없습니다."})]})},d=(i(5704),i(4541));var u=(0,o.Z)("section",{target:"e17f2jor1"})({name:"ufexmo",styles:"width:100%;max-width:900px;padding:2rem;margin-left:auto;margin-right:auto;@media screen and (max-width: 1024px){padding:1rem;}"}),m=(0,o.Z)(u,{target:"e17f2jor0"})("width:calc(100vw - 400px);@media screen and (max-width: 1308px){width:calc(100vw - 408px);}@media screen and (max-width: 1024px){width:calc(100vw - 8px);}",(function(t){var e=t.theme;return(0,a.iv)("p>img{width:100%;}p{color:",e.colors.PRIMARY.ACCENT_8,";font-weight:400;line-height:1.6;letter-spacing:-0.02rem;}p,table,ul,blockquote,ol{font-size:1rem;margin:0 0 2rem;}center{color:",e.colors.PRIMARY.ACCENT_5,";font-size:0.8rem;font-weight:400;line-height:1.5;letter-spacing:-0.02rem;margin:0 0 2rem;}p+center,iframe+center{margin-top:-1rem;}h1,h2,h3,h4,h5{position:relative;color:",e.colors.PRIMARY.FOREGROUND,";line-height:1.2;scroll-margin-top:60px;letter-spacing:-0.02rem;font-weight:600;background:none;&>a{color:",e.colors.PRIMARY.FOREGROUND,";opacity:0;border:none;position:absolute;top:50%;left:0;transform:translate(-100%, -50%);padding-right:4px;}&:hover>a{color:",e.colors.PRIMARY.FOREGROUND,";background:none;border:none;opacity:1;}}h2:not(:first-of-type),h3:not(:first-of-type),h4:not(:first-of-type){margin-top:3rem;}h1,h2,h3,h4,h5{margin:0 0 1.25rem;}h1,h2{font-size:1.8rem;filter:brightness(1);}h3{font-size:1.4rem;filter:brightness(1.3);}h4{filter:brightness(1.5);font-size:1.1rem;padding-bottom:0.25rem;text-transform:uppercase;}ul,ol{padding-left:1.5rem;box-sizing:border-box;line-height:1.6;& ul{margin-top:8px;}& ul,& ol{margin-bottom:0;}}ul{list-style:disc;}ol{list-style:decimal;}ul li{margin-bottom:0.5rem;&::marker{font-weight:600;color:",e.colors.HIGHLIGHT.ORANGE,";}}ol li{margin-bottom:0.5rem;&::marker{font-weight:600;color:",e.colors.HIGHLIGHT.ORANGE,";}}li>a{white-space:inherit;word-wrap:break-word;}li{color:",e.colors.PRIMARY.FOREGROUND,";& code{font-weight:600;color:",e.colors.HIGHLIGHT.ORANGE,";white-space:inherit;& * span{white-space:inherit;}& * span:not([class='grvsc-source']){padding-left:0!important;}}}iframe{margin-bottom:2rem;}div[class*='markdown-wrapper']{font-size:0.9rem;text-size-adjust:none;margin:1rem -1rem;overflow-x:auto;overflow-y:hidden;box-sizing:border-box;background-color:var(--scrollbar-background);padding-left:2rem;scrollbar-width:8px;scrollbar-color:var(--scrollbar-thumb) var(--scrollbar-background);&::-webkit-scrollbar{background:var(--scrollbar-background);height:8px;width:8px;}&::-webkit-scrollbar-thumb{background:var(--scrollbar-thumb);border-radius:0;}@media screen and (min-width: 1350px){margin-left:-3.5rem;margin-right:-3.5rem;margin-bottom:2rem;}@media screen and (max-width: 1024px){padding-left:1rem;}}pre{border-radius:0;float:left;margin-bottom:0;margin-top:0;min-width:calc(100% + 1rem);padding:1rem 1rem 1rem 0;-webkit-font-smoothing:subpixel-antialiased;overflow:initial;white-space:pre;font-family:var(--code-font-family);word-wrap:normal;hyphens:none;line-height:1.5;tab-size:2;word-break:normal;word-spacing:normal;&>code{font-weight:600;color:",e.colors.HIGHLIGHT.ORANGE,";white-space:inherit;& * span{white-space:inherit;}& * span:not([class='grvsc-source']){padding-left:0!important;}}}p>code{font-weight:600;color:",e.colors.HIGHLIGHT.ORANGE,";white-space:inherit;& * span{white-space:inherit;}& * span:not([class='grvsc-source']){padding-left:0!important;}}img[class='gatsby-resp-image-image']{box-shadow:none!important;}img[class='gatsby-resp-image-image'][alt]:after{display:flex;justify-content:center;align-items:center;position:absolute;top:0;left:0;width:100%;height:100%;background:",e.colors.PRIMARY.BACKGROUND,";font-weight:200;content:'이미지를 표시할 수 없어요. :(';}blockquote{background:",e.colors.PRIMARY.ACCENT_2,";margin:0 -1rem;margin-bottom:2rem;padding:1rem 1rem;border-left:6px solid ",e.colors.HIGHLIGHT.ORANGE,";&>p{margin-bottom:0;}@media screen and (min-width: 1350px){margin-left:-3.5rem;margin-right:-3.5rem;}@media screen and (max-width: 1024px){padding-left:1rem;}}")}),";"),p=function(t){var e=(0,d.useLocation)(),i=(0,r.useRef)(null),n=(0,r.useMemo)((function(){return t.html.replaceAll("<pre",'<div class="markdown-wrapper"><pre').replaceAll("</pre>","</pre></div>")}),[]);return(0,r.useEffect)((function(){var t,r;Array.from(null!==(t=null===(r=i.current)||void 0===r?void 0:r.getElementsByTagName("*"))&&void 0!==t?t:[]).filter((function(t){var e,i;return Number(null!==(e=null===(i=t.tagName)||void 0===i?void 0:i[1])&&void 0!==e?e:"999")<6})).forEach((function(t){if(!(t.getElementsByTagName("a").length>0)){var e=t.innerHTML.replaceAll(" ","-");t.innerHTML='\n          <a href="#'+e+'" aria-label="'+e+' permalink">\n            <svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16" \n            stroke=\'currentColor\'\n            stroke-width=\'1\'\n            stroke-linecap=\'round\'\n            stroke-linejoin=\'round\'\n            fill=\'none\'\n            shape-rendering=\'geometricPrecision\'>\n              <path\n                fill-rule="evenodd" \n                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">\n              </path>\n            </svg>\n          </a>\n          '+t.innerHTML+"\n        ",t.id=e}})),window.onload=function(){setTimeout((function(){var t,i,r=decodeURIComponent(e.hash).substring(1);r&&window.scrollTo(0,null!==(t=null===(i=document.getElementById(r))||void 0===i?void 0:i.getBoundingClientRect().bottom)&&void 0!==t?t:0)}))}}),[]),(0,s.jsx)("div",{children:(0,s.jsx)(m,{ref:i,dangerouslySetInnerHTML:{__html:n}})})},h=i(8447),g=i(5290);var f=(0,o.Z)("header",{target:"ebd5ed87"})({name:"1azakc",styles:"text-align:center"}),b=(0,o.Z)("div",{target:"ebd5ed86"})({name:"1j1kikd",styles:"display:flex;flex-direction:column;justify-content:flex-start;align-items:center;max-width:900px;padding:2rem;margin-left:auto;margin-right:auto;@media screen and (max-width: 1024px){padding:1.5rem 1rem;}"}),v=(0,o.Z)("div",{target:"ebd5ed85"})({name:"715507",styles:"display:flex;justify-content:space-between;align-items:center;width:100%;@media screen and (max-width: 1024px){flex-direction:column-reverse;align-items:flex-start;justify-content:center;}"}),x=(0,o.Z)("div",{target:"ebd5ed84"})({name:"1u6n871",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start"}),w=(0,o.Z)("div",{target:"ebd5ed83"})({name:"1yvy03y",styles:"display:flex;gap:0.5rem;margin-bottom:1.5rem"}),R=(0,o.Z)("button",{target:"ebd5ed82"})("display:flex;justify-content:center;align-items:center;width:30px;height:30px;outline:none;border:none;border-radius:15px;cursor:pointer;padding:0;",(function(t){var e=t.theme;return(0,a.iv)("background:",e.colors.PRIMARY.FOREGROUND,";color:",e.colors.PRIMARY.BACKGROUND,";")}),";"),k=(0,o.Z)("div",{target:"ebd5ed81"})({name:"1cdt2kf",styles:"display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%;padding:0 1.5rem;&>h1{text-align:left;}"}),A=(0,o.Z)("div",{target:"ebd5ed80"})({name:"1d3w5wq",styles:"width:100%"}),j=function(t){var e=t.title,i=t.tags,r=t.date,o=t.author,a=t.timeToRead,l=t.children,c=(0,g.hK)(r),u=c[0],m=c[1],p=c[2],j=(0,d.useLocation)(),y=(0,n.e1)(),C=u+"년 "+Number(m)+"월 "+Number(p)+"일";return(0,s.jsx)(f,{children:(0,s.jsxs)(b,{children:[(0,s.jsxs)(k,{children:[(0,s.jsx)(n.xv,{as:"h1",size:40,weight:800,children:e}),(0,s.jsx)(n.LZ,{y:1}),i&&(0,s.jsx)(n.W2,{row:!0,wrap:"wrap",gap:.5,children:i.map((function(t){return(0,s.jsxs)(n.Ct,{size:"large",children:["#",t]},t)}))}),(0,s.jsx)(n.LZ,{y:1}),(0,s.jsxs)(v,{children:[(0,s.jsxs)(x,{children:[(0,s.jsxs)(n.xv,{size:16,as:"span",children:["Written by ",(0,s.jsx)(h.Link,{to:"/",children:o})]}),(0,s.jsx)(n.LZ,{y:.25}),(0,s.jsxs)(n.xv,{size:14,as:"span",children:[C," · ",a," min read"]})]}),(0,s.jsxs)(w,{children:[(0,s.jsx)(n.u,{text:"페이스북 공유",position:"top",children:(0,s.jsx)(R,{onClick:function(){y.error("페이스북 공유 기능은 개발중입니다.")},style:{marginLeft:"-0.5rem"},children:(0,s.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:(0,s.jsx)("path",{d:"M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"})})})}),(0,s.jsx)(n.u,{text:"링크 복사",position:"top",children:(0,s.jsx)(R,{onClick:function(){(0,n.JG)(decodeURIComponent(j.href)),y.success("링크를 복사했습니다.")},children:(0,s.jsxs)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision",children:[(0,s.jsx)("path",{d:"M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"}),(0,s.jsx)("path",{d:"M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"})]})})})]})]})]}),(0,s.jsx)(n.LZ,{y:1}),(0,s.jsx)(A,{children:l})]})})},y=i(4213);var C=(0,o.Z)("ol",{target:"e1k9d3a01"})({name:"1o02nna",styles:"padding-left:1.5rem;box-sizing:border-box;line-height:1.6;list-style:decimal"}),E=(0,o.Z)("li",{target:"e1k9d3a00"})((function(t){var e=t.theme,i=t.timeToRead;return(0,a.iv)("margin-bottom:0.5rem;&::marker{font-weight:600;color:",e.colors.HIGHLIGHT.ORANGE,";}&::after{content:'- ",i,"분';margin-left:0.2rem;font-size:0.8rem;}&>span{cursor:pointer;border-bottom:2px solid ",e.colors.HIGHLIGHT.ORANGE,";font-weight:600;text-decoration:none;color:",e.colors.PRIMARY.FOREGROUND,";transition:all 0.1s ease-out;&:hover{background:",e.colors.HIGHLIGHT.ORANGE,";border-top:2px solid ",e.colors.HIGHLIGHT.ORANGE,";color:",e.colors.PRIMARY.BACKGROUND,";}}")}),";"),T=function(t){var e=t.name,i=t.posts;return(0,s.jsx)(n.UO,{title:e,card:!0,size:"medium",subtitle:"시리즈의 글 ("+i.length+"개)",children:(0,s.jsx)(n.W2,{children:(0,s.jsx)(C,{children:i.map((function(t){return(0,s.jsx)(E,{timeToRead:t.timeToRead,children:(0,s.jsx)("span",{onClick:function(){return e=t.slug,void(0,h.navigate)(e);var e},children:t.name})},t.name)}))})})})},D=i(2177),I=function(t){var e=(0,D.Z)().profile,i=t.data.allMarkdownRemark,n=i.nodes,o=i.group,a=t.data.markdownRemark,l=a.timeToRead,d=a.html,u=t.data.markdownRemark.frontmatter,m=u.title,h=u.date,g=u.image,f=u.tags,b=u.series,v=(0,r.useCallback)((function(){return n.filter((function(t){return t.frontmatter.series})).filter((function(t){return t.frontmatter.series===b})).map((function(t){return{name:t.frontmatter.title,timeToRead:t.timeToRead,slug:t.fields.slug}}))}),[t.data]);return(0,s.jsxs)("div",{children:[(0,s.jsx)(y.p,{name:m,image:null==g?void 0:g.publicURL,isPost:!0}),(0,s.jsx)(j,{title:m,date:h,image:null==g?void 0:g.publicURL,tags:f,timeToRead:l,author:e.author,children:b&&o&&(0,s.jsx)(T,{name:b,posts:v()})}),(0,s.jsx)(p,{html:d}),(0,s.jsx)("section",{id:"comments"}),(0,s.jsx)(c,{})]})}}}]);
//# sourceMappingURL=component---src-template-post-tsx-4818d10d9365a5fba119.js.map