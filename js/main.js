$(function(){
    // Cursor //
    $(document).mousemove(function(e){
        o = $('.cursor').offset();
        $(".dot").css({
          "top": e.pageY - o.top,
          "left": e.pageX - o.left
        });
      });
      // dark btn   
        $.fn.toggleSwitch = function () {
          return this.each(function () {
            const $toggleSwitch = $(this);
            const $slider = $toggleSwitch.find('.slider');
            const $modeIcon = $toggleSwitch.find('.mode-icon');
            const $sunIcon = $toggleSwitch.find('.sun-icon');
            const $moonIcon = $toggleSwitch.find('.moon-icon');
            const updateUI = () => {
              const isChecked = $toggleSwitch.find('input[type="checkbox"]').prop('checked');
              // modify from here
              // darkmode_btn
              $sunIcon.toggleClass('visible', isChecked);
              $moonIcon.toggleClass('visible', !isChecked);
              const iconPosition = isChecked ? '26px' : '0';
              $modeIcon.css('transform', `translateX(${iconPosition})`);
              // colors
              const darkmode_btn = isChecked ? '#ff003c' : '#3d78c5';
              $slider.css('background-color', darkmode_btn);
              // const banner = isChecked ? '#1c1d1d' : '#fbfcfc';
              // $('#banner').css('background-color', banner);
            };
            updateUI();
            $toggleSwitch.find('input[type="checkbox"]').on('change', updateUI);
            $toggleSwitch.find('input[type="checkbox"]').on('keydown', function (event) {
              if (event.key === 'Enter') {
                $toggleSwitch.find('input[type="checkbox"]').trigger('change');
              }
            });
          });
        };
      $('.toggle-switch').toggleSwitch();
      // navbar
      $('.mbl_nav_toggle span i').click(function(){
        $('.mbl_nav_toggle span i').toggleClass('-rotate-[90deg]');
        $('.mbl_nav_toggle span i').toggleClass('fa-x');
        $('.mbl_nav_toggle span i').toggleClass('fa-bars');
        $('.nav-item').toggleClass('-right-[100vh]');
        $('.nav-item').toggleClass('right-[0]');
      })
      $('.navbar-wrapper ul li a').click(function(){
        $('.mbl_nav_toggle span i').toggleClass('-rotate-[90deg]');
        $('.mbl_nav_toggle span i').toggleClass('fa-x');
        $('.mbl_nav_toggle span i').toggleClass('fa-bars');
        $('.nav-item').toggleClass('-right-[100vh]');
        $('.nav-item').toggleClass('right-[0]');
        
      })
      // auto type
      new Typed('.stack',{
          strings : ['FRONTEND WEB DEVELOPER','WEB DESIGNER'],
          typeSpeed : 40,
          delaySpeed : 90,
          loop : true,
          cursorChar: "&nbsp;|",
        });
      // service multiTextToggleCollapse
      $('.service-item').curtail({
        limit: 150,
        ellipsis: '',
        toggle: true,
        text: ['show less', '.... show more']
    });
      // smooth scroling
      // Smooth scrolling for anchor links using jQuery
      $('a[href^="#"]').on('click', function() {
        var target = $(this.getAttribute('href'));  
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
    // skill chart
    let dataPoints= [
      { label: "HTML5", y: 92, color: "#e44d26",indexLabelFontColor: "#fbfcfc"},	
      { label: "CSS3", y: 87, color: "#254bdd",indexLabelFontColor: "#fbfcfc" },	
      { label: "JS", y: 56, color: "#efd81d",indexLabelFontColor: "#fbfcfc" },
      { label: "BOOTSTRAP_5", y: 63, color: "#8512f3",indexLabelFontColor: "#fbfcfc" },	
      { label: "TAILWIND", y: 83, color: "#36b6f2",indexLabelFontColor: "#fbfcfc" },
      { label: "JQUERY", y: 64, color: "#1163a4",indexLabelFontColor: "#fbfcfc" },
      { label: "GITHUB", y: 77, color: "#1a1e22",indexLabelFontColor: "#fbfcfc" },
      { label: "NETLIFY", y: 82, color: "#38a6b3",indexLabelFontColor: "#fbfcfc" }      
    ];
    // pie chart
    var options1 = {
      animationEnabled: true,
      zoomEnabled: true,
      title: {
        text: "Frontend Skill",
        fontColor: '#fff',
        fontSize: 30,
        horizontalAlign: "center",
        paddingBottom: 200
      },
      backgroundColor: "transparent",
      data: [
        {
          type: "pie",
          yValueFormatString: "#,##0.0#'%'",
          dataPoints: dataPoints
        }
      ]
    };
    $("#skil_piechart").CanvasJSChart(options1);
    // bar chart
    var options2 = {
      animationEnabled: true,
      zoomEnabled: true,
      title: {
        text: "Frontend Skill",
        fontColor: '#fff',
        fontSize: 30,
        horizontalAlign: "center",
      },
      axisY: {
        title: "Skill Rate (in %)",
        suffix: "%",
        titleFontColor: '#fbfcfc',
        labelFontColor: '#f90326'
      },
      axisX: {
        title: "Skill Name",
        titleFontColor: '#fbfcfc',
        labelFontColor: '#f90326'
      },
      backgroundColor: "transparent",
      data: [
        {
          type: "column",
          yValueFormatString: "#,##0.0#'%'",
          dataPoints: dataPoints
        },
        {
          type: "spline",
          yValueFormatString: "#,##0.0#'%'",
          dataPoints: dataPoints
        }
      ]
    };
    $("#skil_barchart").CanvasJSChart(options2);
    // service multiTextToggleCollapse
    $('.portfolio_card_dec').curtail({
      limit: 100,
      ellipsis: '',
      toggle: true,
      text: ['show less', '...show more']
  });
  // portfolio slider
  $('.slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode:true,
    focusOnSelect:true,
    autoplay: false,
    pauseOnHover: true,
    pauseOnFocus: false,
    arrows:true,
    prevArrow:".left",
    nextArrow:'.right',
   });
  //  portfolio filter
  // var mixer = mixitup('.portfolio_wrapper');






  
    })


    //===========| Raw Js |
