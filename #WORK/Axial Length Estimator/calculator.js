var selectReKUnitVal = jQuery(".selectReunit input[name='selectReKUnit']:checked").val();
var selectLeKUnitVal = jQuery("input[name='selectLeKUnit']:checked").val();

       jQuery('.selectReunit input[name="selectReKUnit"]').click(function(){
	        var reInputValue = jQuery(this).val();
	        var retargetBox = jQuery("." + reInputValue);
	        jQuery(".selrunit").not(retargetBox).hide();
	        jQuery(retargetBox).css("display","inline-block").css("display","inline-flex");

	
	       
		        if(reInputValue == 'rmm'){
	              jQuery( ".right-eyectc .selectReMMUnit select" ).attr('required', true);
	              jQuery( ".right-eyectc .selectReDUnit select" ).attr('required', false).removeClass('form-error');
		        } else if (reInputValue == 'rD') {
		        	jQuery( ".right-eyectc .selectReMMUnit select" ).attr('required', false).removeClass('form-error');
		        	if(jQuery('.righteyerow #rightmyonoffswitch').prop("checked") == false){
			        	jQuery( ".right-eyectc .selectReDUnit select" ).attr('required', true);
			        }
		        }
           

	    });

       jQuery('input[name="selectLeKUnit"]').click(function(){
	        var leInputValue = jQuery("input[name='selectLeKUnit']:checked").val();
	        var letargetBox = jQuery("." + leInputValue);
	        jQuery(".sellunit").not(letargetBox).hide();
	        jQuery(letargetBox).css("display","inline-block").css("display","inline-flex");

		        if(leInputValue == 'lmm'){
	              jQuery( ".left-eyectc .selectLeMMUnit select" ).attr('required', true);
	              jQuery( ".left-eyectc .selectLeDUnit select" ).attr('required', false).removeClass('form-error');
		        } else if (leInputValue == 'lD') {
		        	jQuery( ".left-eyectc .selectLeMMUnit select" ).attr('required', false).removeClass('form-error');
		        	if(jQuery('.lefteyerow #leftmyonoffswitch').prop("checked") == false){
			        	jQuery( ".left-eyectc .selectLeDUnit select" ).attr('required', true);
			        }
		        }
           

	    });

    
    jQuery('.righteyerow #rightmyonoffswitch').click(function(){
        if(jQuery(this).prop("checked") == true){
            jQuery( ".right-eyectc .resphrctc select" ).prop( "disabled", false ).attr('required', 'true');
            if (selectReKUnitVal == 'rmm') {
            	jQuery( ".right-eyectc .selectReMMUnit select" ).prop( "disabled", false ).attr('required', 'true');
            	jQuery( ".right-eyectc .selectReDUnit select" ).prop( "disabled", false ).attr('required', 'false');
            } else if (selectReKUnitVal == 'rD') {
                jQuery( ".right-eyectc .selectReMMUnit select" ).prop( "disabled", false ).attr('required', 'false');
                jQuery( ".right-eyectc .selectReDUnit select" ).prop( "disabled", false ).attr('required', 'true');
            }
        }
        else if(jQuery(this).prop("checked") == false){
           jQuery( ".right-eyectc select" ).prop( "disabled", true ).removeAttr('required').removeClass('form-error');
            jQuery( ".right-eyectc .selectReDUnit select" ).prop( "disabled", true ).removeAttr('required').removeClass('form-error');
             jQuery( ".right-eyectc .selectReMMUnit select" ).prop( "disabled", true ).removeAttr('required').removeClass('form-error');
        }

          if(window.outerWidth < 705){
	         jQuery("#righteyeinner").toggle(jQuery(this).checked);
          } 
    });
       if(jQuery('.righteyerow #rightmyonoffswitch').prop("checked") == true){
            jQuery( ".right-eyectc .resphrctc select" ).prop( "disabled", false ).attr('required', 'true');
            if (selectReKUnitVal == 'rmm') {
            	jQuery( ".right-eyectc .selectReMMUnit select" ).prop( "disabled", false ).attr('required', 'true');
            	jQuery( ".right-eyectc .selectReDUnit select" ).prop( "disabled", false ).attr('required', 'false');
            } else if (selectReKUnitVal == 'rD') {
                jQuery( ".right-eyectc .selectReMMUnit select" ).prop( "disabled", false ).attr('required', 'false');
                jQuery( ".right-eyectc .selectReDUnit select" ).prop( "disabled", false ).attr('required', 'true');
            }
        }
        else if(jQuery('.righteyerow #rightmyonoffswitch').prop("checked") == false){
           jQuery( ".right-eyectc select" ).prop( "disabled", true ).removeAttr('required').removeClass('form-error');
           jQuery( ".right-eyectc .selectReDUnit select" ).prop( "disabled", true ).removeAttr('required').removeClass('form-error');
             jQuery( ".right-eyectc .selectReMMUnit select" ).prop( "disabled", true ).removeAttr('required').removeClass('form-error');
        }

   

    jQuery('.lefteyerow #leftmyonoffswitch').click(function(){
        if(jQuery(this).prop("checked") == true){
            jQuery( ".left-eyectc .lesphrctc select" ).prop( "disabled", false ).attr('required', 'true');
            if (selectLeKUnitVal == 'lmm') {
            	jQuery( ".left-eyectc .selectLeMMUnit select" ).prop( "disabled", false ).attr('required', 'true');
            	jQuery( ".left-eyectc .selectLeDUnit select" ).prop( "disabled", false ).attr('required', 'false');
            } else if (selectLeKUnitVal == 'lD') {
                jQuery( ".left-eyectc .selectLeMMUnit select" ).prop( "disabled", false ).attr('required', 'false');
                jQuery( ".left-eyectc .selectLeDUnit select" ).prop( "disabled", false ).attr('required', 'true');
            }
        }
        else if(jQuery(this).prop("checked") == false){
           jQuery( ".left-eyectc select" ).prop( "disabled", true ).removeAttr('required').removeClass('form-error');
            jQuery( ".left-eyectc .selectLeDUnit select" ).prop( "disabled", true ).removeAttr('required').removeClass('form-error');
             jQuery( ".left-eyectc .selectLeMMUnit select" ).prop( "disabled", true ).removeAttr('required').removeClass('form-error');
        }
        if(window.outerWidth < 705){
		jQuery("#lefteyeinner").toggle(this.checked);
	} 
    });

       if(jQuery('.lefteyerow #leftmyonoffswitch').prop("checked") == true){
            jQuery( ".left-eyectc .lesphrctc select" ).prop( "disabled", false ).attr('required', 'true');
            if (selectLeKUnitVal == 'lmm') {
            	jQuery( ".left-eyectc .selectLeMMUnit select" ).prop( "disabled", false ).attr('required', 'true');
            	jQuery( ".left-eyectc .selectLeDUnit select" ).prop( "disabled", false ).attr('required', 'false');
            } else if (selectLeKUnitVal == 'lD') {
                jQuery( ".left-eyectc .selectLeMMUnit select" ).prop( "disabled", false ).attr('required', 'false');
                jQuery( ".left-eyectc .selectLeDUnit select" ).prop( "disabled", false ).attr('required', 'true');
            }
        }
        else if(jQuery('.lefteyerow #leftmyonoffswitch').prop("checked") == false){
           jQuery( ".left-eyectc select" ).prop( "disabled", true ).removeAttr('required').removeClass('form-error');
           jQuery( ".left-eyectc .selectLeDUnit select" ).prop( "disabled", true ).removeAttr('required').removeClass('form-error');
             jQuery( ".left-eyectc .selectLeMMUnit select" ).prop( "disabled", true ).removeAttr('required').removeClass('form-error');
        }



    jQuery(".righteyefinal").hide();
    jQuery(".lefteyefinal").hide();
    jQuery(".resultstitle").hide();
    jQuery(".resultcontain").hide();

    jQuery("#axllgtnclcbtn").click(function(e){
    	e.preventDefault();
    	var resphereval = jQuery("#resphere").val();
	    var recylval = jQuery("#recyl").val();
	    var bvdval = jQuery("#axbvd").val();
	    var rekone = jQuery("#rekone").val();
	    var rektwo = jQuery("#rektwo").val();
	    var rekoned = jQuery("#rekoned").val();
        var rektwod = jQuery("#rektwod").val();

        var selectReKUnitVal = jQuery("input[name='selectReKUnit']:checked").val();
        var selectLeKUnitVal = jQuery("input[name='selectLeKUnit']:checked").val();

	    var lesphereval = jQuery("#lesphere").val();
	    var lecylval = jQuery("#lecyl").val();
	    var lekone = jQuery("#lekone").val();
	    var lektwo = jQuery("#lektwo").val();
	    var lekoned = jQuery("#lekoned").val();
	    var lektwod = jQuery("#lektwod").val();
	    /*var radioValue = jQuery("input[name='cycloplegicrefraction']:checked").val();*/


	    var reselectreq = jQuery(".right-eyectc select").attr("disabled");
		if (typeof reselectreq !== typeof undefined && reselectreq !== false) {
		   
		   if (resphereval == '') {
	    	 jQuery(".selectctc .resphere").removeClass("form-error");
	       }
	       if (recylval == '') {
	    	 jQuery(".selectctc .recyl").removeClass("form-error");
	       }
	 


		      if (rekone == '') {
		    	 jQuery(".selectctc .rekone").removeClass("form-error");
		       }
		       if (rektwo == '') {
		    	 jQuery(".selectctc .rektwo").removeClass("form-error");
		       }

		     

	       if (rekoned == '') {
	    	 jQuery(".selectctc .rekoned").removeClass("form-error");
	       }
	       if (rektwod == '') {
	    	 jQuery(".selectctc .rektwod").removeClass("form-error");
	       } 

		} else {
		   
		   if (resphereval == '') {
	    	  jQuery(".selectctc .resphere").addClass("form-error");
	       } else {
	          jQuery(".selectctc .resphere").removeClass("form-error");
     	   }

     	   if (recylval == '') {
	    	  jQuery(".selectctc .recyl").addClass("form-error");
	       } else {
	          jQuery(".selectctc .recyl").removeClass("form-error");
     	   }

     	  if (rekone == '') {
	     	  	if (selectReKUnitVal == 'rmm') {
		    	  jQuery(".selectctc .rekone").addClass("form-error");
		    	}
	       } else {
	          jQuery(".selectctc .rekone").removeClass("form-error");
     	   }

     	   if (rektwo == '') {
     	   	    if (selectReKUnitVal == 'rmm') {
	    	     jQuery(".selectctc .rektwo").addClass("form-error");
		    	}    
	       } else {
	          jQuery(".selectctc .rektwo").removeClass("form-error");
     	   }
     	

     	   if (rekoned == '') {
     	   	  if (selectReKUnitVal == 'rD') {
	    	 	 jQuery(".selectctc .rekoned").addClass("form-error");
	    	  } 	 
	       } else {
	          jQuery(".selectctc .rekoned").removeClass("form-error");
     	   }

     	   if (rektwod == '') {
     	   	  if (selectReKUnitVal == 'rD') {
	    	  	jQuery(".selectctc .rektwod").addClass("form-error");
	    	  }	
	       } else {
	          jQuery(".selectctc .rektwod").removeClass("form-error");
     	   } 
		}

		

		 /******************************************** left eye **********************************/
			var leselectreq = jQuery(".left-eyectc select").attr("disabled");
			if (typeof leselectreq !== typeof undefined && leselectreq !== false) {
			   
			   if (lesphereval == '') {
		    	 jQuery(".selectctc .lesphere").removeClass("form-error");
		       }
		       if (lecylval == '') {
		    	 jQuery(".selectctc .lecyl").removeClass("form-error");
		       }
		       if (lekone == '') {
		    	 jQuery(".selectctc .lekone").removeClass("form-error");
		       }
		       if (lektwo == '') {
		    	 jQuery(".selectctc .lektwo").removeClass("form-error");
		       }
		       if (lekoned == '') {
		    	 jQuery(".selectctc .lekoned").removeClass("form-error");
		       }
		       if (lektwod == '') {
		    	 jQuery(".selectctc .lektwod").removeClass("form-error");
		       } 

			} else {
			   
			   if (lesphereval == '') {
		    	  jQuery(".selectctc .lesphere").addClass("form-error");
		       } else {
		          jQuery(".selectctc .lesphere").removeClass("form-error");
	     	   }

	     	   if (lecylval == '') {
		    	  jQuery(".selectctc .lecyl").addClass("form-error");
		       } else {
		          jQuery(".selectctc .lecyl").removeClass("form-error");
	     	   }

	     	  if (lekone == '') {
	     	  	if (selectLeKUnitVal == 'lmm') {
		    	  jQuery(".selectctc .lekone").addClass("form-error");
		    	}
		       } else {
		          jQuery(".selectctc .lekone").removeClass("form-error");
	     	   }

	     	   if (lektwo == '') {
	     	   	    if (selectLeKUnitVal == 'lmm') {
		    	     jQuery(".selectctc .lektwo").addClass("form-error");
			    	}    
		       } else {
		          jQuery(".selectctc .lektwo").removeClass("form-error");
	     	   }
	     	

	     	   if (lekoned == '') {
	     	   	  if (selectLeKUnitVal == 'lD') {
		    	 	 jQuery(".selectctc .lekoned").addClass("form-error");
		    	  } 	 
		       } else {
		          jQuery(".selectctc .lekoned").removeClass("form-error");
	     	   }

	     	   if (lektwod == '') {
	     	   	  if (selectLeKUnitVal == 'lD') {
		    	  	jQuery(".selectctc .lektwod").addClass("form-error");
		    	  }	
		       } else {
		          jQuery(".selectctc .lektwod").removeClass("form-error");
	     	   } 
			}

		/* left eye switch check */



		if (bvdval == '') {
	    	jQuery(".bvdselect .axbvd").addClass("form-error");
	    } else {
	    	jQuery(".bvdselect .axbvd").removeClass("form-error");
	    }
	    

		var radioValue = jQuery("input[name='cycloplegicrefraction']:checked").val();

		if (typeof radioValue !== typeof undefined && radioValue !== false) {
	    	 jQuery(".radiogroup").removeClass("form-error");
	    	 
        } else {
        	jQuery(".radiogroup").addClass("form-error");
        	
        }


if( (jQuery('.righteyerow #rightmyonoffswitch').prop("checked") == true) || (jQuery('.lefteyerow #leftmyonoffswitch').prop("checked") == true)) {

    if ((jQuery('.righteyerow #rightmyonoffswitch').prop("checked") == true) && (jQuery('.lefteyerow #leftmyonoffswitch').prop("checked") == false)) {

        if ( (!jQuery(".resphere").hasClass('form-error')) && (!jQuery(".recyl").hasClass('form-error')) && (!jQuery(".rekone").hasClass('form-error')) && (!jQuery(".rektwo").hasClass('form-error')) && (!jQuery(".axbvd").hasClass('form-error')) && (!jQuery(".radiogroup").hasClass('form-error')) ) {
	    	
		    jQuery('.msg').text('');

	          /* Calculated Variables */
		    var mrd1power = resphereval/(1-(0.001 * bvdval * resphereval));

		    var mrd2part1 = parseFloat(resphereval) + parseFloat(recylval);
		    var mrd2power = mrd2part1/(1-(0.001 * bvdval * mrd2part1));

		    var mrd1rounded = (Math.round(mrd1power * 4) / 4).toFixed(2);
		    var mrd2rounded = (Math.round(mrd2power * 4) / 4).toFixed(2);

		    /* Output - Ocular Refraction */
		    var ocularRefractSphere = mrd1rounded;
		    var ocularRefractCyl = parseFloat(mrd2rounded) - parseFloat(mrd1rounded);

		    /* To calculate S for Right EYE */
		    var halfofocrefcyl = ocularRefractCyl/2;
		    var reS = parseFloat(ocularRefractSphere) + parseFloat(halfofocrefcyl);
		    reS = reS.toFixed(2);

		    /* Mean K */

		    var selectReKUnitVal = jQuery("input[name='selectReKUnit']:checked").val();

			if (typeof selectReKUnitVal !== typeof undefined && selectReKUnitVal !== false) {
		    	 
		    	 if (selectReKUnitVal == 'rD') {
		    	 	rekone = (337.5/rekoned);
		    	 	rektwo = (337.5/rektwod);
		    	 	rekone = (Math.round(rekone * 4) / 4).toFixed(2);
		    	 	rektwo = (Math.round(rektwo * 4) / 4).toFixed(2);
		    	 }	    	 
	        } 

		    var reSumK = parseFloat(rekone) + parseFloat(rektwo);
		    var reK = reSumK/2;


			if(radioValue == 'Cycloplegic Refraction'){
			   var reKval = 0.22273/reK;
			   var rebtmsum = reKval + (0.00070 * reS) + 0.01368;
			   var reaxiallength = 1/rebtmsum;
			   var reaxiallength = reaxiallength.toFixed(2);

			   jQuery(".righteyeresults").text(reaxiallength + ' Мм');
			   jQuery(".axlngthclcinner").hide();

			   jQuery(".resultstitle").show();
			   jQuery(".righteyefinal").show();
			   jQuery(".resultcontain").show();
          	           jQuery(".axlngthfinal .ctooltiptext").addClass("cycloreftooltip");
          	           jQuery(".axlngthfinal .nctooltiptext").removeClass("noncycloreftooltip");
                           jQuery("html, body").scrollTop(0); 

			} 
			else if (radioValue == 'Non-cycloplegic Refraction') {
			   var reKval = 0.22451/reK;
			   var rebtmsum = reKval + (0.00069 * reS) + 0.01353;
			   var reaxiallength = 1/rebtmsum;
			   var reaxiallength = reaxiallength.toFixed(2);

			   jQuery(".righteyeresults").text(reaxiallength + ' Мм');
			   jQuery(".axlngthclcinner").hide();

			   jQuery(".resultstitle").show();
			   jQuery(".righteyefinal").show();
			   jQuery(".resultcontain").show();
			   jQuery(".axlngthfinal .ctooltiptext").removeClass("cycloreftooltip");
			   jQuery(".axlngthfinal .nctooltiptext").addClass("noncycloreftooltip");
                           jQuery("html, body").scrollTop(0); 
			}

	    } else {
	    	jQuery('.msg').text('Пожалуйста, заполните все поля');
	    }

	} /* if right is checked */

	if ((jQuery('.lefteyerow #leftmyonoffswitch').prop("checked") == true) && (jQuery('.righteyerow #rightmyonoffswitch').prop("checked") == false) ) {
	    /** Left eye **/
	    if ( (!jQuery(".lesphere").hasClass('form-error')) && (!jQuery(".lecyl").hasClass('form-error')) && (!jQuery(".lekone").hasClass('form-error')) && (!jQuery(".lektwo").hasClass('form-error')) && (!jQuery(".axbvd").hasClass('form-error')) && (!jQuery(".radiogroup").hasClass('form-error'))) {
		    
		    jQuery('.msg').text('');
		      /* Calculated Variables */
		    var lmrd1power = lesphereval/(1-(0.001 * bvdval * lesphereval));

		    var lmrd2part1 = parseFloat(lesphereval) + parseFloat(lecylval);
		    var lmrd2power = lmrd2part1/(1-(0.001 * bvdval * lmrd2part1));

		    var lmrd1rounded = (Math.round(lmrd1power * 4) / 4).toFixed(2);
		    var lmrd2rounded = (Math.round(lmrd2power * 4) / 4).toFixed(2);

		    /* Output - Ocular Refraction */
		    var locularRefractSphere = lmrd1rounded;
		    var locularRefractCyl = parseFloat(lmrd2rounded) - parseFloat(lmrd1rounded);

		    /* To calculate S for Right EYE */
		    var lhalfofocrefcyl = locularRefractCyl/2;
		    var leS = parseFloat(locularRefractSphere) + parseFloat(lhalfofocrefcyl);
		    leS = leS.toFixed(2);

		    /* Mean K */
		    var selectLeKUnitVal = jQuery("input[name='selectLeKUnit']:checked").val();

			if (typeof selectLeKUnitVal !== typeof undefined && selectLeKUnitVal !== false) {
		    	 
		    	 if (selectLeKUnitVal == 'lD') {
		    	 	lekone = (337.5/lekoned);
		    	 	lektwo = (337.5/lektwod);
		    	 	lekone = (Math.round(lekone * 4) / 4).toFixed(2);
		    	 	lektwo = (Math.round(lektwo * 4) / 4).toFixed(2);

		    	 }
		    	 
	        } 
		    var leSumK = parseFloat(lekone) + parseFloat(lektwo);
		    var leK = leSumK/2;

			

			if(radioValue == 'Cycloplegic Refraction'){
			   var leKval = 0.22273/leK;
			   var lebtmsum = leKval + (0.00070 * leS) + 0.01368;
			   var leaxiallength = 1/lebtmsum;
			   var leaxiallength = leaxiallength.toFixed(2);

			   jQuery(".lighteyeresults").text(leaxiallength + ' Мм');
			   jQuery(".axlngthclcinner").hide();
			   jQuery(".resultstitle").show();
			   jQuery(".lefteyefinal").show();
			   jQuery(".resultcontain").show();
			   jQuery(".axlngthfinal .ctooltiptext").addClass("cycloreftooltip");
          	           jQuery(".axlngthfinal .nctooltiptext").removeClass("noncycloreftooltip");
                           jQuery("html, body").scrollTop(0); 
		} 
			else if (radioValue == 'Non-cycloplegic Refraction') {
			   var leKval = 0.22451/leK;
			   var lebtmsum = leKval + (0.00069 * leS) + 0.01353;
			   var leaxiallength = 1/lebtmsum;
			   var leaxiallength = leaxiallength.toFixed(2);

			   jQuery(".lighteyeresults").text(leaxiallength + ' Мм');
			   jQuery(".axlngthclcinner").hide();
			   jQuery(".resultstitle").show();
			   jQuery(".lefteyefinal").show();
			   jQuery(".resultcontain").show();
			   jQuery(".axlngthfinal .ctooltiptext").removeClass("cycloreftooltip");
			   jQuery(".axlngthfinal .nctooltiptext").addClass("noncycloreftooltip");
                           jQuery("html, body").scrollTop(0); 
			}

		} else {
	    	jQuery('.msg').text('Пожалуйста, заполните все поля');
	    }
	} /* left eye is checked only */



	/* if both eyes are checked all fields are required */
	if ((jQuery('.righteyerow #rightmyonoffswitch').prop("checked") == true) && (jQuery('.lefteyerow #leftmyonoffswitch').prop("checked") == true)) {
	    /** Left eye **/
	    if ( (!jQuery(".lesphere").hasClass('form-error')) && (!jQuery(".lecyl").hasClass('form-error')) && (!jQuery(".lekone").hasClass('form-error')) && (!jQuery(".lektwo").hasClass('form-error')) && (!jQuery(".axbvd").hasClass('form-error')) && (!jQuery(".radiogroup").hasClass('form-error')) && (!jQuery(".resphere").hasClass('form-error')) && (!jQuery(".recyl").hasClass('form-error')) && (!jQuery(".rekone").hasClass('form-error')) && (!jQuery(".rektwo").hasClass('form-error')) && (!jQuery(".axbvd").hasClass('form-error')) && (!jQuery(".radiogroup").hasClass('form-error'))) {
		    
		    jQuery('.msg').text('');
		    
		      /* Calculated Variables */
		    var mrd1power = resphereval/(1-(0.001 * bvdval * resphereval));

		    var mrd2part1 = parseFloat(resphereval) + parseFloat(recylval);
		    var mrd2power = mrd2part1/(1-(0.001 * bvdval * mrd2part1));

		    var mrd1rounded = (Math.round(mrd1power * 4) / 4).toFixed(2);
		    var mrd2rounded = (Math.round(mrd2power * 4) / 4).toFixed(2);

		    /* Output - Ocular Refraction */
		    var ocularRefractSphere = mrd1rounded;
		    var ocularRefractCyl = parseFloat(mrd2rounded) - parseFloat(mrd1rounded);

		    /* To calculate S for Right EYE */
		    var halfofocrefcyl = ocularRefractCyl/2;
		    var reS = parseFloat(ocularRefractSphere) + parseFloat(halfofocrefcyl);
		    reS = reS.toFixed(2);

		    /* Mean K */
		    var selectReKUnitVal = jQuery("input[name='selectReKUnit']:checked").val();

			if (typeof selectReKUnitVal !== typeof undefined && selectReKUnitVal !== false) {
		    	 
		    	 if (selectReKUnitVal == 'rD') {
		    	 	rekone = (337.5/rekoned);
		    	 	rektwo = (337.5/rektwod);
		    	 	rekone = (Math.round(rekone * 4) / 4).toFixed(2);
		    	 	rektwo = (Math.round(rektwo * 4) / 4).toFixed(2);

		    	 }
		    	 
	        } 
		    var reSumK = parseFloat(rekone) + parseFloat(rektwo);
		    var reK = reSumK/2;

		      /* Calculated Variables */
		    var lmrd1power = lesphereval/(1-(0.001 * bvdval * lesphereval));

		    var lmrd2part1 = parseFloat(lesphereval) + parseFloat(lecylval);
		    var lmrd2power = lmrd2part1/(1-(0.001 * bvdval * lmrd2part1));

		    var lmrd1rounded = (Math.round(lmrd1power * 4) / 4).toFixed(2);
		    var lmrd2rounded = (Math.round(lmrd2power * 4) / 4).toFixed(2);

		    /* Output - Ocular Refraction */
		    var locularRefractSphere = lmrd1rounded;
		    var locularRefractCyl = parseFloat(lmrd2rounded) - parseFloat(lmrd1rounded);

		    /* To calculate S for Right EYE */
		    var lhalfofocrefcyl = locularRefractCyl/2;
		    var leS = parseFloat(locularRefractSphere) + parseFloat(lhalfofocrefcyl);
		    leS = leS.toFixed(2);

		    /* Mean K */
		     var selectLeKUnitVal = jQuery("input[name='selectLeKUnit']:checked").val();

			if (typeof selectLeKUnitVal !== typeof undefined && selectLeKUnitVal !== false) {
		    	 
		    	 if (selectLeKUnitVal == 'lD') {
		    	 	lekone = (337.5/lekoned);
		    	 	lektwo = (337.5/lektwod);
		    	 	lekone = (Math.round(lekone * 4) / 4).toFixed(2);
		    	 	lektwo = (Math.round(lektwo * 4) / 4).toFixed(2);

		    	 }
		    	 
	        } 
		    var leSumK = parseFloat(lekone) + parseFloat(lektwo);
		    var leK = leSumK/2;

			

			if(radioValue == 'Cycloplegic Refraction'){
			   var leKval = 0.22273/leK;
			   var lebtmsum = leKval + (0.00070 * leS) + 0.01368;
			   var leaxiallength = 1/lebtmsum;
			   var leaxiallength = leaxiallength.toFixed(2);

			   var reKval = 0.22273/reK;
			   var rebtmsum = reKval + (0.00070 * reS) + 0.01368;
			   var reaxiallength = 1/rebtmsum;
			   var reaxiallength = reaxiallength.toFixed(2);

			   jQuery(".lighteyeresults").text(leaxiallength + ' Мм');
			   jQuery(".axlngthclcinner").hide();
			   jQuery(".resultstitle").show();
			   jQuery(".lefteyefinal").show();
			   jQuery(".resultcontain").show();

			   jQuery(".righteyeresults").text(reaxiallength + ' Мм');		

			   jQuery(".righteyefinal").show();
          	           jQuery(".axlngthfinal .ctooltiptext").addClass("cycloreftooltip");
          	           jQuery(".axlngthfinal .nctooltiptext").removeClass("noncycloreftooltip");
                           jQuery("html, body").scrollTop(0); 
			} 
			else if (radioValue == 'Non-cycloplegic Refraction') {
			   var leKval = 0.22451/leK;
			   var lebtmsum = leKval + (0.00069 * leS) + 0.01353;
			   var leaxiallength = 1/lebtmsum;
			   var leaxiallength = leaxiallength.toFixed(2); 

			   var reKval = 0.22451/reK;
			   var rebtmsum = reKval + (0.00069 * reS) + 0.01353;
			   var reaxiallength = 1/rebtmsum;
			   var reaxiallength = reaxiallength.toFixed(2);

			   jQuery(".lighteyeresults").text(leaxiallength + ' Мм');
			   jQuery(".axlngthclcinner").hide();
			   jQuery(".resultstitle").show();
			   jQuery(".lefteyefinal").show();
			   jQuery(".resultcontain").show();
			   jQuery(".righteyeresults").text(reaxiallength + ' Мм');
			   jQuery(".righteyefinal").show();
			   jQuery(".axlngthfinal .ctooltiptext").removeClass("cycloreftooltip");
			   jQuery(".axlngthfinal .nctooltiptext").addClass("noncycloreftooltip");
                           jQuery("html, body").scrollTop(0); 
			}

		} else {
	    	jQuery('.msg').text('Пожалуйста, заполните все поля');
	    }
	} /* both eyes are checked */

} else {
	   	alert('Please select at least one eye');
        return false;
	   }
	});