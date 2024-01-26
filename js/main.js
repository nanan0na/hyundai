$(function () {
  const $header = $('#header');

  $('#fullpage').fullpage({
    anchors: ['visual', 'about', 'business', 'h-story'],
    fixedElements: '#header',
    verticalCentered: true,
    bigSectionsDestination: 'top',
    scrollBar: true,
    menu: '#indicator',
  });

  // Swiper 초기화
  const businessContents = [
    {
      title: '철강',
      subtitle: 'steel',
      content:
        '세계 정상의 철강전문 기업들과 함께 풍부한 비즈니스 경험과 노하우를 갖고 세계 최강의 글로벌 철강 트레이더로 활약하고 있습니다.',
      bg: './img/business-steel-pic.jpg',
    },
    {
      title: '석유화학',
      subtitle: 'Petroleum & Chemical',
      content:
        '빠른 정보력과 숙련된 거래기법으로 급변하는 시장변화에 대응하면서 고객을 만족시키는 세계 최고의 석유화학 트레이더로 발전하고 있습니다.',
      bg: './img/business-chemical-pic.jpg',
    },
    {
      title: '자동차',
      subtitle: 'Automobile',
      content:
        '세계 자동차시장에서 브랜드 가치가 높은 현대․기아자동차와 함께 다양한 방식의 영업활동으로 신규시장 개척 및 확대에 주력하고 있습니다.',
      bg: './img/business-automobile-pic.jpg',
    },
    {
      title: '상용차량',
      subtitle: 'Railway System',
      content:
        '상용차량의 설계, 제작 및 서비스 분야에서 세계적 경쟁력을 갖추고 있는 현대로템과 협력하여 다양한 종류의 철도차량을 공급하고 있습니다.',
      bg: './img/business-rail-pic.jpg',
    },
    {
      title: '선박',
      subtitle: 'Ship',
      content: '조선부문 글로벌 No.1 기업으로 명성 높은 현대중공업의 선박 및 선박용 기자재를 전 세계에 공급합니다.',
      bg: './img/business-ship-pic.jpg',
    },
    {
      title: '플랜트',
      subtitle: 'plant',
      content:
        '빠른 정보력과 탁월한 마케팅 능력, 앞선 프로젝트 파이낸싱 기법으로 대규모 산업설비의 제작 및 인프라 공급 서비스를 수행합니다.',
      bg: './img/business-plant-pic.jpg',
    },
    {
      title: '전기전자',
      subtitle: 'electronic equipment',
      content:
        '발전기, 변압기, 배전반 등 각종 전력기자재의 공급에서 엔지니어링, 설치, 프로젝트 파이낸싱까지 다양한 서비스를 제공하고 있습니다.',
      bg: './img/business-electronic-pic.jpg',
    },
    {
      title: '신재생에너지',
      subtitle: 'renwable energy',
      content:
        '인류사회 친환경 청정에너지 확산을 위한 신재생에너지 Total Solution 제공 전문으로, 인프라 시설 구축, 기획, 투자, 파이낸싱, 건설 운영 전문 사업을 지속적으로 개발하고 있습니다.',
      bg: './img/business-renwable-pic.jpg',
    },
    {
      title: '건설장비',
      subtitle: 'construction equipment',
      content:
        '굴삭기, 휠로더, 지게차 등 건설장비와 산업차량을 주력으로 고객의 니즈에 맞는 다양하고 신뢰성 높은 건설기계장비 공급에 힘쓰고 있습니다.',
      bg: './img/business-construction-pic.jpg',
    },
    {
      title: '자원개발',
      subtitle: 'natural resources',
      content:
        '석탄, 석유, 가스 등 30년 이상 쌓은 풍부한 사업경험을 바탕으로 유망한 에너지․광물자원의 탐사 및 개발을 적극 추진해 나갈 것입니다.',
      bg: './img/business-natural-pic.jpg',
    },
    {
      title: '해외투자',
      subtitle: 'foreign investment',
      content:
        '철강가공, 공업용지 개발 등 세계를 무대로 다양한 비즈니스 모델을 개발하며 성공적인 해외투자 사업을 전개하고 있습니다.',
      bg: './img/business-foreign-pic.jpg',
    },
  ];

  const businessSlider = new Swiper('.business-slide', {
    slidesPerView: 7,
    loop: true,
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
    },
    spaceBetween: 20,
    loopAdditionalSlides: 3,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.btn-prev',
    },
    on: {
      slideChange: function () {
        const idx = this.realIndex;
        const businessBg = businessContents[idx].bg;
        const businessTitle = businessContents[idx].title;
        const businessSubtitle = businessContents[idx].subtitle;
        const businessContent = businessContents[idx].content;
        $('.business').css({
          'background-image': `url(${businessBg})`,
        });
        // 텍스트 업데이트
        $('.business-title h3').text(businessTitle);
        $('.business-title b').text(businessSubtitle);
        $('.business-title p').text(businessContent);
      },
    },
  });

  $('.business .swiper-slide').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    const clickedIndex = $(this).index();
    businessSlider.slideToLoop(clickedIndex);
  });

  const storySlider = new Swiper('.h-story-slide', {
    slidesPerView: 4,
    loop: true,
    navigation: {
      prevEl: '.story-prv',
      nextEl: '.story-nxt',
    },
  });
});
