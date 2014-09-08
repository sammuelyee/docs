docs.Views.Home = Backbone.View.extend({
  el: 'body',

  events: {
    'click': '_closeDialogs',
  },

  initialize: function() {
    this._initViews();
  },

  _closeDialogs: function() {
    this.tooltip.close();
  },

  _initViews: function() {
    this.tooltip = new CDBUI.Tooltip();
  }
});

$(function() {
  window.Index = new docs.Views.Home();
});
