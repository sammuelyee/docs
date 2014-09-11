docs.Views.Index = Backbone.View.extend({
  el: document.body,

  events: {
    'click .up': '_goToTop'
  },

  initialize: function() {
    this.$aside = this.$('.aside');
    this.navbarHeight = this.$('.navbar').outerHeight();
    this.$footer = this.$('.footer');
    this.$content = this.$('.content');
    this.$up = this.$('.up');

    this._initViews();
    this._initBindings();

    this.$('input, textarea').placeholder();
  },

  _initBindings: function() {
    var that = this;

    $(window)
      .on('scroll', function() {
        that._onScroll();
      })
      .on('resize', function() {
        that._onScroll();
      })
  },

  _onResize: function() {
    var h = $(window).outerHeight() - this.navbarHeight;

    this.$content.css({ 'min-height': h });
    this.$aside.find('.aside-fixed').height(h);
  },

  _onScroll: function() {
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

    this.api = this.$aside.find('.aside-fixed').jScrollPane({
      contentWidth: '0px'
    }).data().jsp;
  },

  _initViews: function() {
    this._onResize();

    this.api = this.$aside.find('.aside-fixed').jScrollPane({
      contentWidth: '0px'
    }).data().jsp;

    this.navbar = new docs.ui.Views.Navbar();
  },

  _goToTop: function(e) {
    e.preventDefault();

    $('html, body').animate({scrollTop: 0}, 150);
  }
});

$(function() {
  window.index = new docs.Views.Index();
});
