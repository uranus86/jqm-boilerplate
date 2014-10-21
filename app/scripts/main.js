require.config({
	paths: {
		jquery: '../components/jquery/jquery',
		jqueryMobile: 'libs/jquery.mobile-1.3.2',
		backbone : "../components/backbone/backbone",
		underscore: "../components/underscore/underscore",
	},
  shim: {
	jqueryMobile : { deps: ["jquery"], exports: 'jquery' },
	backbone : {
        deps : ["underscore", "jquery"],
        exports : "Backbone"
    },
}
});

require(["jquery",
	"jqueryMobile",
], function ($) {
  console.log('jQuery version ' + $().jquery + ' installed');
});