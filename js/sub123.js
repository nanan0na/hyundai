$(function () {
  const subTab = $('.sub-tab li');
  const overviewList = $('.overview-list > li');
  const overviewWrap = $('.overview-wrap');
  const tl = gsap.timeline();

  // sub-visual
  tl.from('.sub-visual h2', { delay: 0.5, y: -50, autoAlpha: 0 });
  tl.from('.sub-visual span', { y: -40, autoAlpha: 0 });
  tl.from('.sub-visual h3', { y: -20, autoAlpha: 0 }, '-=.3');

  // sub-tab
  subTab.on('click', function (e) {
    e.preventDefault();
    subTab.removeClass('active');
    $(this).addClass('active');
  });
  $('.sub-tab li:nth-child(1)').on('click', () => {
    $('.overview').addClass('active');
    $('.history, .greeting').removeClass('active');
  });
  $('.sub-tab li:nth-child(2)').on('click', () => {
    $('.history').addClass('active');
    $('.overview, .greeting').removeClass('active');
  });
  $('.sub-tab li:nth-child(3)').on('click', () => {
    $('.greeting').addClass('active');
    $('.history, .overview').removeClass('active');
  });

  overviewList.on('click', function () {
    const index = overviewList.index(this);

    const contents = [
      '세계시장을 무대로 중화학 제품 중심의 국제무역과 해외투자, 그리고 에너지, 자원개발 사업에서 큰 성과를 거두며 한국의 대표적 종합무역상사로 성장해 왔습니다.',
      '빠른 정보력과 숙련된 거래기법, 우수한 파이낸싱 능력을 바탕으로 선박, 기계, 플랜트, 자동차, 철강, 금속, 화학, 전기전자 등 각종 중화학공업 중심 제품들을 발굴하여 고객이 원하는 최적의 조건과 서비스로 공급하고 있습니다.',
      '세계시장에서 축적한 다양한 경험과 비즈니스 노하우를 기반으로 인도 첸나이의 ‘포스현대’ 철강코일센터, 그리고 인도네시아 자카르타 근교의 ‘인니공단’ 등 선박건조에서 철강가공, 공업용지 개발에 이르기까지 활발한 해외투자 사업을 전개하고 있습니다.',
      '세계적 기업브랜드로 성장한 ‘HYUNDAI’의 브랜드 파워를 기반으로 첨단 가전ㆍ정보통신 분야와 고부가가치 신제품 분야에서도 새로운 성장동력을 창출해 가고 있습니다.',
    ];

    $('.overview-wrap > p').fadeOut(300, function () {
      $(this).html(contents[index]).fadeIn(300);
    });
    $('.overview-list li').removeClass('active');
    $(this).addClass('active');
  });

  // overview-circle
  gsap.registerPlugin(ScrollTrigger);
  tl.to('.circle', {
    scaleX: 4,
    scaleY: 4,
    scrub: 1,
    scrollTrigger: {
      trigger: '.circle-container',
      start: '-70% center',
      end: 'bottom+=500',
      toggleActions: 'play none reverse none',
      pin: true,
      markers: true,
    },
  });

  // 타임라인에 추가
  tl.to('.circle-text', {
    opacity: 1,
  });
  tl.to('.circle', {
    scaleX: 300,
    scaleY: 300,
    scrub: 1,
    scrollTrigger: {
      trigger: '.overview > span',
      start: '10% center',
      end: 'bottom+=1000 center',
      markers: true,
    },
    onComplete: function () {
      $('.circle-text').css('opacity', 0);
      $('.full-container').css('opacity', 1);
    },
  });
});