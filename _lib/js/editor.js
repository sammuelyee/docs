docs.Views.Editor = Backbone.View.extend({
  el: document.body,

  events: {
    'click .up': '_goToTop'
  },

  initialize: function() {
    this.$offcanvas = this.$('.offcanvas-inner');
    this.$aside = this.$('.aside');
    this.navbarHeight = this.$('.navbar').outerHeight();
    this.$footer = this.$('.footer');
    this.$content = this.$('.content');
    this.$aside_menu = this.$('.aside-menu');
    this.$up = this.$('.up');

    this._initViews();
    this._initBindings();
  },

  _initBindings: function() {
    var that = this;

    $(window)
      .on('scroll', function() {
        that._onScroll();
      })
      .on('resize', function() {
        that._onScroll();
      });

    this.$content.find('h2, h3, h4').waypoint(function(direction) {
      that._waypoint(direction, this);

      that.api = that.$aside.find('.aside-fixed').jScrollPane({
        contentWidth: '0px'
      }).data().jsp;
    }, { offset: 123 });

    this.$el.find('.anchor').on('click', function(e) {
      e.preventDefault();

      var id_ = this.href.split('#')[1];

      that._goTo($('[id="' + id_ + '"]'), { margin: 118 }, function() {  window.location.hash = $(e.target).attr('href') });
    });
  },

  _onResize: function() {
    var h = $(window).outerHeight() - this.navbarHeight;

    this.$content.css({ 'min-height': h });
    this.$aside.find('.aside-fixed').height(h);
  },

  _onScroll: function() {
    var that = this;

    var pos = $(window).scrollTop(),
        asideHeight = this.$aside.find('.aside-inner').outerHeight();

    if (pos >= $(window).outerHeight()) {
      this.$up.fadeIn(150);
    } else if (pos < asideHeight) {
      this.$up.fadeOut(150);
    }

    if ((pos + this.navbarHeight + asideHeight) > this.$footer.offset().top) {
      if (!this.$aside.hasClass('bottom')) {
        this.$aside.addClass('bottom');
      }
    } else {
      this._onResize();

      if (this.$aside.hasClass('bottom')) {
        this.$aside.removeClass('bottom');
      }
    }

    that.api = that.$aside.find('.aside-fixed').jScrollPane({
      contentWidth: '0px'
    }).data().jsp;
  },

  _waypoint: function(direction, el) {
    var $active = $(el),
        active_id_ = $active.attr('id');

    $('.aside-menu').find('a[href="#' + active_id_ + '"]')
      .closest('li')
      .addClass('selected');

      if (!$active.length) { $active.end('h2'); }

      $('.aside-menu').find('.selected').removeClass('selected');

      var $a = $('.aside-menu').find("a[href='#" + active_id_ + "']").addClass('selected');

      $a.closest('.item')
        .addClass('selected')
        .find('h3 a')
        .addClass('selected');
  },

  _buildAnchors: function() {
    // http://ben.balter.com/2014/03/13/pages-anchor-links/

    this.$content.find("h2, h3, h4, h5").each(function(i, el) {
      var $el, icon, id;

      $el = $(el);
      icon = '<i></i>';
      id = $el.attr('id');

      if (id) {
        return $el.append($("<a />").addClass("anchor header-link").attr("href", "#" + id).html(icon));
      }
    });
  },

  _buildToc: function(callback) {
    var that = this;

    var $title,
      title,
      link;

    this.$content.find('h2').each(function() {
      $title = $(this);
      title = $title.text();
      link = "#" + $title.attr("id");

      var $item = $('<li class="item">'),
        $subTitle,
        subTitle,
        subLink;

      $item.append("<h3><a href='anchor "+link+"'>"+title+"</a></h3>");

      var $subitem= $('<ul>');

      $item.append($subitem);

      $(this).nextAll('h4, h3, h2').each(function(j) {
        $subTitle = $(this);

        if ($subTitle.is('h2')) return false;

        subTitle = $subTitle.html();
        subLink = "#" + $subTitle.attr("id");

        var klass = $subTitle.is('h4') ? 'indent' : '';

        $subitem.append("<li class='"+klass+"'><a href='anchor "+subLink+"'>"+subTitle+"</a></li>");
      });

      that.$aside_menu.append($item);
    });

    callback && callback();
  },

  _initViews: function() {
    var that = this;

    this._onResize();

    this._buildAnchors();

    this._buildToc(function() {
      that.api = that.$aside.find('.aside-fixed').jScrollPane({
        contentWidth: '0px'
      }).data().jsp;
    });

    this.navbar = new docs.ui.Views.Navbar({
      $offcanvas: this.$offcanvas
    });
  },

  _goToTop: function(e) {
    e.preventDefault();

    $('html, body').animate({scrollTop: 0}, 150);
  },

  _goTo: function($el, opt, callback) {
    if ($el) {
      var speed  = (opt && opt.speed)  || 150;
      var delay  = (opt && opt.delay)  || 0;
      var margin = (opt && opt.margin) || 0;

      $('html, body').delay(delay).animate({scrollTop:$el.offset().top - margin}, speed);

      setTimeout(function() {
        callback && callback();
      }, delay);
    }
  }
});

$(function() {
  window.index = new docs.Views.Editor();
});
