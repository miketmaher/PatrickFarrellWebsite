$(document).ready(function()
{
	$(".question").hide();
	$("h4").click(function()
	{
		$(this).next("p").slideToggle(500);
	});
});