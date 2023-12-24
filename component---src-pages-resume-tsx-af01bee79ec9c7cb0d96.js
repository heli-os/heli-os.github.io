"use strict";(self.webpackChunk_vallista_land_blog=self.webpackChunk_vallista_land_blog||[]).push([[753],{2177:function(t,e,i){i.d(e,{Z:function(){return a}});var l=JSON.parse('{"author":"Theo","title":"Blog","titleTemplate":"%s · Theo","placeholder":"/profile.png","siteUrl":"https://heli-os.github.io","description":"Written by Theo","twitterUserName":"","github":"heli-os","secondary":"https://dataportal.kr"}'),s=JSON.parse('{"config":{"name":"진태양","role":"Software Engineer","bio":["볼타코퍼레이션 <string>공동창업자 겸 CTO</string>","전자세금계산서 프로덕트 <string>전반 아키텍쳐 설계 및 서비스 개발</string>"],"github":"https://github.com/heli-os","email":"sun@dataportal.kr"},"careers":{"title":"경력","list":[{"name":"볼타코퍼레이션","position":"CTO / Co-Founder","department":"프로덕트팀","startDate":"2023.04","endDate":null,"descriptions":[],"projects":[{"name":"CTO","descriptions":["테크리드 및 매니징 업무 진행"],"startDate":"2023.04","endDate":null,"which":[{"title":"전자세금계산서 프로덕트 전반 설계/구축 및 운영"},{"title":"여러 서비스를 공통적으로 관리할 수 있는 아키텍처 수립 및 개발"},{"title":"TF 등 일정 내 효율적으로 협업할 수 있는 아키텍처 구축"}]},{"name":"Co-Founder","descriptions":["사업 및 투자 관련 업무 기여"],"startDate":"2023.04","endDate":null,"which":[{"title":"제품 전략을 제안하고 적기에 출시하여 비즈니스 기회 확장"},{"title":"Seed, Pre-A 투자 유치"},{"title":"TIPS 프로그램 선정"}]},{"name":"프로덕트 개발","startDate":"2023.04","endDate":null,"descriptions":["프로덕트 개발을 위한 아키텍처 설계 및 코딩"],"which":[{"title":"공통 인프라 형상 설계"},{"title":"서비스 확장에 대응할 수 있는 서비스 아키텍처 레이어 설계"},{"title":"비즈니스 로직을 쉽게 테스트하고 격리할 수 있는 객체지향 설계"},{"title":"비즈니스, 인원에 따른 적합한 기술 선정 및 설계"}]}]},{"name":"카카오페이","department":"머니클랜","position":"Software Engineer","startDate":"2022.01","endDate":"2023.06","fold":true,"descriptions":[],"projects":[{"name":"탈퇴 회원 거래내역 분리보관 파이프라인 설계 및 개발","descriptions":[],"startDate":"2022.09","endDate":"2022.12","which":[{"title":"탈퇴 회원 거래내역 분리보관 법적 요건 분석 및 정책 수립"},{"title":"회원 거래내역 탈퇴 이벤트 구독/적재 컨슈머 설계 및 개발"},{"title":"다수의 분리보관 대상 테이블에 대한 카프카 기반 비동기 복제/삭제 구조 설계 및 개발"},{"title":"프로젝트 수행 중 mongo-java-driver 오픈소스 기여"}],"techStacks":["Kotlin","SpringBoot","Kafka","MongoDB","MySQL"]},{"name":"펌뱅킹/오픈뱅킹 연동 시스템(금융플랫폼) 운영 및 고도화","descriptions":["와인을 등록할 수 있는 어드민 페이지를 개발하였습니다."],"startDate":"2022.05","endDate":"2023.06","which":[{"title":"신규 제휴 은행 연동: 출금이체, 입금이체, 예금주 조회 등"},{"title":"VAN(헥토파이낸셜, 더즌), 금융결제원(오픈뱅킹)과의 업무 협업"},{"title":"전사에 제공되는 금융플랫폼 연동 지원","items":["페이봇, 자금반환중개(착오송금반환), 머니 송금/충전 등 서비스 지원"]},{"title":"2022년 10월 15일 카카오 판교 데이터센터 셧다운 대응","items":["운영 관리 도구 및 모니터링 시스템 셧다운 상황 속 서버 헬스 체크 및 DB 커넥션 상태 점검","담당 서비스 구성 요소 중 수동 Failover 필요 대상 식별 및 대응","쿠버네티스 노드 리소스 부족에 따른 pod 리사이즈 대응","외부 제휴사의 인바운드 요청 상태 점검 및 대응","데이터센터 복구 후 주요 서비스 구성 요소 Replicaset 정상화 대응"]}]},{"name":"머니 어드민 Back-office 고도화","descriptions":["하나로 관리하고 있는 어드민을 조직별 R&R에 맞게 분리하여 업무 효율성 향상을 위한 프로젝트"],"startDate":"2022.02","endDate":"2022.04","which":[{"title":"Angular/React 구버전 빌드 결과물을 SpringBoot로 서빙하던 구조 재설계 및 리팩토링","items":["React 17 + Express.js 서빙 구조로 변경"]},{"title":"R&R이 명확하지 않아 발생했던 불필요한 커뮤니케이션 비용 절약"},{"title":"전반적인 어드민 사용성 개선을 통한 개발자가 아닌 누구나 어드민 이용 가능한 시스템 확립"}]},{"name":"레거시 청산 및 기존 비즈니스 유지보수 (a.k.a. 머니 운영 고도화)","descriptions":[],"startDate":"2022.01","endDate":"2023.06","which":[{"title":"일시적 오픈뱅킹 사용 불가 고객의 거래를 펌뱅킹으로 처리하도록 개선","items":["송금 성공률 기존 대비 10% 향상 및 그에 따른 수수료 절감"]},{"title":"2년 이상 방치된 Request/Response 로깅 로직 버그 식별 및 수정"},{"title":"과도하게 설정된 MySQL DB Connection Timeout 이슈 식별 및 수정","items":["AS-IS: 30s(default value)","TO-BE: 3s"]},{"title":"모니터링 누락되어 있는 일부 써킷브레이커 이슈 식별 및 수정"},{"title":"어드민 FE, BFF AEM/APM 및 에러 로깅 적용"},{"title":"조직내 Grafana & Kibana 운영 가이드 작성 및 세션 진행"}]}]},{"name":"핵클","department":"개발팀","position":"Software Engineer","startDate":"2021.06","endDate":"2021.11","fold":true,"descriptions":["A/B 테스트 플랫폼 백엔드 개발","예비 엔터프라이즈 고객사를 실제 고객사로 전환시켜 기존 대비 엔터프라이즈 고객사의 숫자 100% 증가"],"projects":[{"name":"내부 플랫폼 및 시스템 안정성 관련 기능 개발","descriptions":["서비스 규모가 커짐에 따라 시스템 안정성/운영 효율성 향상을 위해 다양한 서브 프로젝트를 진행하였습니다."],"startDate":"2021.10","endDate":"2021.11","which":[{"title":"비정상 트래픽 자동 감지 & 트래픽 차단 시스템 개발"},{"title":"고객 가입 시 웰컴 이메일 발송 기능 개발"},{"title":"고객 원장 데이터 추출 기능 개발"},{"title":"이메일 발송을 위한 내부 Sdk 개발"}]},{"name":"레거시 청산 및 기존 비즈니스 유지보수","descriptions":[],"startDate":"2021.06","endDate":"2021.11","which":[{"title":"최근 고객 데이터 조회 기능 속도 개선","items":["AS-IS: 800ms ~ 1200ms","TO-BE: 100ms ~ 200ms","ElasticSearch에 모든 Data를 저장하던 시스템을 중복 데이터는 저장하지 않게끔 개선하여 데이터 조회 속도 향상"]},{"title":"AWS Kinesis Produce 로직 이슈 식별","items":["기존에 사용되던 Application -> Kinesis -> S3 파이프라인의 이슈 식별","키네시스는 데이터를 어떤 샤드(Kafka의 파티션)에 적재할지 애플리케이션에서 직접 지정해주어야 함","애플리케이션은 샤드에 쓰기 실패한 경우 재시도하는 로직을 지니고 있었는데, 재시도 시 기존 키를 재활용하여 문제 발생","Why? 쓰기 실패가 발생하는 대부분의 케이스는 특정 샤드에 쓰기 요청이 몰렸기 때문이나 재시도할 때 키가 같다 보니 동일한 샤드에 쓰기를 시도하여 지속하여 실패"]}]},{"name":"결제 및 구독 백엔드 BFF 서버 개발","descriptions":[],"startDate":"2021.09","endDate":"2021.09","which":[{"title":"Stripe, TossPayments 연동 결제 시스템의 BFF(Backend For Front) 서버 개발"},{"title":"결제 요청, 카드 등록, 결제 이력 조회, 구독 정보 조회 등 결제 및 구독 관련 기능 서빙"}]},{"name":"A/B 테스트 상세 분석 백엔드 개발 및 유지보수/운영","descriptions":[],"startDate":"2021.06","endDate":"2021.09","which":[{"title":"프로젝트의 Owner를 맡아 고객의 Pain Point 분석 및 AC 정의"},{"title":"세그먼트 분석(지역, 플랫폼 별 분석 등)을 위한 데이터 모델링 및 API 개발"},{"title":"예비 엔터프라이즈 고객사를 실제 고객사로 전환시켜 기존 대비 엔터프라이즈 고객사의 숫자 100% 증가"}]}]}]},"skills":{"title":"기술","list":[{"title":"Kotlin","descriptions":[{"title":"Kotlin을 이용한 SpringBoot 프로젝트 개발에 익숙합니다.","subTitle":["다양한 프로젝트 경험으로 코드 리딩 및 작성이 가능합니다."]},{"title":"문법을 잘 활용하며, 가독성 향상을 위해 노력합니다.","subTitle":["객체지향 프로그래밍에 익숙하기 때문에 상속, 확장 등을 통한 추상화에도 강점을 지닙니다."]}]},{"title":"SpringBoot","descriptions":[{"title":"크거나 작은 규모의 웹 애플리케이션 서버를 설계할 수 있습니다.","subTitle":["모바일 웹앱, PC, 어드민 등 다양한 프로젝트를 리딩하고 개발한 경험이 있습니다."]},{"title":"유지보수 용이하게 Package/Module Structure를 구성합니다.","subTitle":[]}]},{"title":"DevOps","descriptions":[{"title":"자동화 프로세스를 만들어서 팀 내 생산성을 높힙니다.","subTitle":["배포 자동화, JIRA Task 연계 자동화, 주간 비즈니스 지표 공유 자동화 프로세스 등을 만들어서 팀 내 생산성을 높힌 경험이 있습니다."]},{"title":"IaC 기술을 활용하여 인프라 형상을 효율적으로 관리합니다.","subTitle":["Terraform을 이용하여 AWS VPC, ECS, AutosScalingGruoup, VPN 등 인프라 요소를 관리해본 경험이 있습니다."]},{"title":"Jenkins, TeamCity, Docker를 사용하여 개발/배포 환경을 구축할 수 있습니다.","subTitle":[]}]},{"title":"그 외","descriptions":[{"title":"Git을 능숙하게 다룰 수 있습니다.","subTitle":["git flow, github flow를 회사에서 적용해본 경험이 있습니다."]}]}]},"hobby":{"description":"취미","list":[{"title":"블로깅","url":"/blog","descriptions":["개발을 좋아해서 틈틈히 공부를 하고 글을 작성하여 블로그에 투고합니다.","위의 제목을 누르면 제 블로그를 가실 수 있어요!","<a href=\'https://dataportal.kr\' target=\'_blank\'>https://dataportal.kr</a> 에서 과거의 글을 보실 수 있어요!"]},{"title":"사진 촬영","url":null,"descriptions":["사진 찍는 것을 좋아해서 사진을 찍으러 맛집 탐방을 다니거나 여행을 다닙니다.","풍경화나 야생 동물 사진을 좋아하고, 상업 촬영을 해보기도 했어요."]}]},"speaker":{"description":"발표","list":[{"title":"C.O.D.E Conference 2022 - 더 나은 오픈 데이터 정책에 대한 토론","url":"https://codecon2022.notion.site"},{"title":"Happy Civic Hacking - 공적마스크 정책 수립, 데이터 개방 API 논의, 서비스 개발 참여 사례 소개","url":"https://onoffmix.com/event/256507"},{"title":"The 2nd AYARF Keynote Speaker - 대한민국 정부혁신 사례 소개 및 질의응답 진행","url":"https://www.youtube.com/watch?v=OiFS4azd9m8&t=6695s"}]},"activities":{"description":"활동","list":[{"title":"2023.02 ~ 2023.03 경북대학교 해커톤 멘토 활동","url":null},{"title":"2022.11 ~ 2023.02 코드스테이츠 모의 기술 면접관 및 멘토(Java, Spring, Computer Science)","url":null},{"title":"2022.07 ~ 2022.12 2022년 개인정보 국민점검단(개인정보보호위원회)","url":null},{"title":"2021.12 행정안전부 위기대응 민관협력 디지털 지원체계 구축 자문위원","url":null},{"title":"2021.11 2021 공공데이터 청년인턴(일경험 수련생) 해커톤 멘토","url":null},{"title":"2021.11 복지사각지대 발굴시스템 개선 간담회 자문위원","url":null},{"title":"2021.02 전자정부서비스 혁신을 위한 국민참여 기반의 비대면 경진대회 기획 자문위원","url":null},{"title":"2020.11 제4회 정부혁신제안 끝장 개발대회 기술평가 평가위원","url":null},{"title":"2020.04 ~ 202.07 제3회 정부혁신제안 해커톤 국민 기획단 & 멘토","url":null}]},"lectures":{"description":"강의/강연","list":[{"title":"제로베이스 백엔드 스쿨 Java/SpringBoot 기반 프로젝트 강의","url":"https://zero-base.co.kr"},{"title":"2022.10 캐치(진학사) LIVE 클래스 #앵콜","url":"https://www.catch.co.kr/CatchClass/Live/View/5572"},{"title":"2022.09 캐치(진학사) LIVE 클래스","url":"https://www.catch.co.kr/CatchClass/Live/View/5402"}]},"awards":{"description":"수상","list":[{"title":"2021.07 개인정보보호위원회 위원장 표창","description":"코로나 19 감염병 발생 상황에서 수기명부에 휴대전화번호 대신 기재할 수 있는 개인안심번호를 도입하여 개인정보보호 분야 발전에 이바지한 공로로 표창을 수여 받았습니다.","url":null},{"title":"2021.01 2020 COMMONS AWARD Engagement - 사단법인 코드","description":"코로나19 공공데이터 공동대응을 통해 시민참여와 거버넌스의 실현, 과제의 해결, 참여의 확산의 가치를 보여준 사례로 위와 같이 입상하였습니다.","url":"http://commonslab.cc/104/%EC%A0%9C1%ED%9A%8C-%EC%BB%A4%EB%A8%BC%EC%A6%88-%EC%96%B4%EC%9B%8C%EB%93%9C-%EC%8B%9C%EC%83%81%EC%8B%9D-2020-%EC%BB%A4%EB%A8%BC%EC%A6%88-%EC%96%B4%EC%9B%8C%EB%93%9C"},{"title":"2020.10 제1회 소셜 D·N·A 혁신상 대상","description":"코로나19 공적 마스크 판매정보 공공데이터 개방에 핵심 역할을 한 공로로 위와 같이 입상하였습니다.","url":"https://www.inews24.com/view/1307247"}]}}');function a(){return{profile:l,resume:s}}}}]);
//# sourceMappingURL=component---src-pages-resume-tsx-af01bee79ec9c7cb0d96.js.map