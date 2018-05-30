// $(document).ready(function(){
// $('[data-toggle="popover"]').popover({title:"header", content:"This is the content", trigger:'focus'})




// $('a.show-pop-delay').webuiPopover('destroy').webuiPopover({trigger:'hover',width:300});
// $('a.show-pop-code-delay').webuiPopover('destroy').webuiPopover({
// 			trigger:'hover',
// 			width:300,
// 			delay:{
// 			show:0,
// 			hide:1000
// 			}
// 		});


// $('body').on('mouseenter mouseleave','.dropdown',function(e){
//   var _d=$(e.target).closest('.dropdown');
//   _d.addClass('show');
//   setTimeout(function(){
//     _d[_d.is(':hover')?'addClass':'removeClass']('show');
//     $('[data-toggle="dropdown"]', _d).attr('aria-expanded',_d.is(':hover'));
//   },300);
// });
//fungsi cartcount 
var n=0;
function increaseNumber(){
	n=n+1;
	document.getElementById('cartcount').innerHTML=n;
}


//fungsi popup
$(".pop").popover({ trigger: "manual" , html: true, animation:false})
    .on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide");
            }
        }, 300);
});
//fungsi search angular
var app = angular.module("myapp",[]);
	app.controller("usercontroller", function($scope){
		$scope.searchList=["Angular","Artificial","Business","Design","Development","Human Computer Interaction","Languange","LifeStyle","Marketing","Personal Development","Photography","Teacher Training"
		];
		$scope.complete=function(string){
			var output = [];
			angular.forEach($scope.searchList, function(search){
				if (search.toLowerCase().indexOf(string.toLowerCase()) > 0)
				{
					output.push(search);
				}
			});
			$scope.filtersearch = output;
		}
		$scope.fillTextbox = function(string){
			$scope.search = string;
			$scope.hidethis = true;
		}
	});