$(document).ready(function() {
	/*Slider contenido relacionado*/
	$(".slideshow").css("overflow", "hidden");
	
	$(".slides").cycle({
		fx:     'scrollHorz',
		easing:  'easeInOutBack',
		pause: 1,
		prev: '.prev',
		next: '.next',
		speed:  700,
	    timeout: 0
	    //scrollHorz
	});
	/*Slider contenido relacionado*/

	/* Navegación contenido relacionado */
	$(".slideshow").hover(function() {
		var hijos = $(this).find("ul.slides").children("li").size();
		if (hijos > 1) {
			$(this).find("ul.nav_").fadeToggle();
		}
  	});
  	/* Navegación contenido relacionado */

	/*desplegable advanced search*/
	$(".levantaAdvanced").click(function(){
  		$(".advanced_search").toggleClass("advancedHover");
  		$(".Arrow").toggleClass("Up");
	  	$(".contenido_advanced_search").slideToggle("fast");
	});
	/*desplegable advanced search*/

	/*desplegable comentarios de tabla*/
  	$(".levantaComments").click(function(){
  		$(".levantaComments").toggleClass("commentsHover");
	  	$(".comentarios_dataset").slideToggle("fast");
	});
	/*desplegable comentarios de tabla*/

	/*desplegable export*/
  	$(".levantaExport").click(function(){
  		$(".levantaExport").toggleClass("exportHover");
	  	$(".Export").slideToggle("fast");
	});
	/*desplegable export*/

	/*Tooltip*/
	if ($(window).width() > 680) {
		$(".favorite_btn").hover(function() {
			$(".tooltip_favorite").fadeToggle();
		});

		$(".comments_btn").hover(function() {
			$(".tooltip_comments").fadeToggle();
		});
	}

	//$(".i_export").hover(function() {
	//	$(".tooltip_export").fadeToggle();
	//});

	/*Tooltip*/

	/*Muestra columnas del dataset en resultado de búsqueda*/
	$(".Show_Col").hover(function(){
		$(this).parent().find(".box_columns").fadeToggle("fast");
	});
	/*Muestra columnas del dataset en resultado de búsqueda*/

	/*cambia vista de data set favoritos, list o grid*/
	$(".view_List").click(function(){
		$(".content_list, .contenido_page_grid").hide();
		$(".view_List, .view_Grid").removeClass("view_List_on view_Grid_on");

		$(".content_list").show();
		$(".view_List").addClass("view_List_on");
	});

	$(".view_Grid").click(function(){
		$(".content_list, .contenido_page_grid").hide();
		$(".view_List, .view_Grid").removeClass("view_List_on view_Grid_on");

		$(".contenido_page_grid").show();
		$(".view_Grid").addClass("view_Grid_on");
	});
	/*cambia vista de data set favoritos, list o grid*/

	/*tooltip favoritos*/
	if ($(window).width() > 680) {
		$(".favorite_Icon").hover(function(){
			if ($(this).hasClass("favorite_on")){
				$(this).parent().find(".favorite_tltp").fadeToggle().text("Delete from favorites");
			}
			else if($(this).hasClass("favorite_off")){
				$(this).parent().find(".favorite_tltp").fadeToggle().text("Add to favorites");
			}
		});
	}
	$(".favorite_Icon").click(function(){
		if ($(this).hasClass("favorite_on")){
			$(this).removeClass("favorite_on");
			$(this).addClass("favorite_off");
		}
		else if($(this).hasClass("favorite_off")){
			$(this).removeClass("favorite_off");
			$(this).addClass("favorite_on");
		}
	});
	/*tooltip favoritos*/	

	$(".items_menu_stats").hover(function(){
		var clase= $.trim($(this).find("div").attr('class'));
		console.log(clase);
		$(this).find("div").toggleClass("+clase+'_on'");
	});

});

/*Tabs búsqueda avanzada*/ 
function showTab(param){
	if(param==1){
		$("#sectorFilters, #generalFilters, #Country, #Date").removeClass("showtab");
		$(".titulos_boxadvanced").removeClass("activeTab");

		$("#sectorFilters").addClass("showtab");
		$("#showSectors").addClass("activeTab");
	}
	else if(param==2){
		$("#sectorFilters, #generalFilters, #Country, #Date").removeClass("showtab");
		$(".titulos_boxadvanced").removeClass("activeTab");

		$("#generalFilters").addClass("showtab");
		$("#showTags").addClass("activeTab");
	}
	else if(param==3){
		$("#sectorFilters, #generalFilters, #Country, #Date").removeClass("showtab");
		$(".titulos_boxadvanced").removeClass("activeTab");

		$("#Country").addClass("showtab");
		$("#showCountry").addClass("activeTab");
	}
	else {
		$("#sectorFilters, #generalFilters, #Country, #Date").removeClass("showtab");
		$(".titulos_boxadvanced").removeClass("activeTab");

		$("#Date").addClass("showtab");
		$("#showDate").addClass("activeTab");
	}
}
/*Tabs búsqueda avanzada*/