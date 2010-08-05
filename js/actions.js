/**
 * Actions.js
 *
 * Author: Fernando.Ferreira@icsystems.com.br
 * Date:   March 15th, 2010
 */

//global functions

function getScrollXY() {
	var myWidth = 0, myHeight = 0;
	if( typeof( window.innerWidth ) == 'number' ) {
		//Non-IE
		myWidth = window.innerWidth;
		myHeight = window.innerHeight;
	} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
		//IE 6+ in 'standards compliant mode'
		myWidth = document.documentElement.clientWidth;
		myHeight = document.documentElement.clientHeight;
	} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
		//IE 4 compatible
		myWidth = document.body.clientWidth;
		myHeight = document.body.clientHeight;
	}
	return [ myWidth, myHeight ];
}

//Document is ready, let's play
$(document).ready(function(){
	var hlcolor = '#FFF8C6';
	$('#data_inicio').datepicker({
		dateFormat: 'dd/mm/yy',
		monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		maxDate: '+0d',
		changeMonth: true,
		changeYear: true,
		maxDate : '+0y',
		minDate : '-130y',
		yearRange : '-130:+130',
		dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
	});

	$('#data_obito').datepicker({
		dateFormat: 'dd/mm/yy',
		monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		maxDate: '+0d',
		changeMonth: true,
		changeYear: true,
		maxDate : '+0y',
		minDate : '-130y',
		yearRange : '-130:+130',
		dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
	});

	$('#data_mudanca').datepicker({
		dateFormat: 'dd/mm/yy',
		monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		maxDate: '+0d',
		changeMonth: true,
		changeYear: true,
		maxDate : '+0y',
		minDate : '-130y',
		yearRange : '-130:+130',
		dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
	});

	$('#data_internacao').datepicker({
		dateFormat: 'dd/mm/yy',
		monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		maxDate: '+0d',
		changeMonth: true,
		changeYear: true,
		maxDate : '+0y',
		minDate : '-130y',
		yearRange : '-130:+130',
		dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
	});

	$('#data_alta').datepicker({
		dateFormat: 'dd/mm/yy',
		monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		maxDate: '+0d',
		changeMonth: true,
		changeYear: true,
		maxDate : '+0y',
		minDate : '-130y',
		yearRange : '-130:+130',
		dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
	});

	$('#data_rx').datepicker({
		dateFormat: 'dd/mm/yy',
		monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		maxDate: '+0d',
		changeMonth: true,
		changeYear: true,
		maxDate : '+0y',
		minDate : '-130y',
		yearRange : '-130:+130',
		dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
	});
	//Toggle options

	//Definindo o formulario
	$('#formulario').change(function(){
		if($('#formulario').val() == 'seguimentoClinico60')
			$('#tituloRXTorax').html('RX de Tórax (60 a 90 dias)');
		else if($('#formulario').val() == 'seguimentoClinico150')
			$('#tituloRXTorax').html('RX de Tórax (150 a 180 dias)');
	});

	//Foi prescrito TB?
	$('#tratamentoPrescritoTB').change(function(){
		var dep = new Array();
		dep[0] = '#divDataInicio';
		dep[1] = '#divTratamentoPrescritoTBFarmaco';
		dep[2] = '#divReacoesAdversasTuberculostaticos';
		dep[3] = '#divMudancaEsquemaTratamentoTB';
		dep[4] = '#divInternacaoHospitalar';
		dep[5] = '#divTosseDiminuida';
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='sim'){
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).addClass('required');
				});
				if($(dep[div]).css('display') != 'block')
					$(dep[div]).toggle(function() {
						$(this).css('background-color', hlcolor);
						$(this).animate({backgroundColor : "white"}, 4000);
					});
			}
		}
		// Se nao, ocultar colunas listadas a cima
		if($(this).val()=='nao'){
			dep[7] = '#divReacoesAdversasTuberculostaticosMaiores';
			dep[8] = '#divReacoesAdversasTuberculostaticosMenores';
			dep[9] = '#divDataMudanca';
			dep[10] = '#divMudanca';
			dep[11] = '#divMudancaFarmacos';
			dep[12] = '#divMudancaMotivo';
			dep[13] = '#divSuspensaoTratamentoTB';
			dep[6] = '#divSuspensaoDiasTratamentoTB';
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).removeClass('required');
				});
				if($(dep[div]).css('display') != 'none')
					$(dep[div]).toggle();
			}
		}
	});
	$('#tratamentoPrescritoTBFarmacos_7').click(function(){
		if($(this).is(':checked')){
			$('').attr('checked', 'true');
			fieldOutros = $('')
			$('input[name=farmacosOutros]').removeAttr('disabled');
			return;
		}
		$(this).removeAttr('checked');
		$('input[name=farmacosOutros]').val('');
		$('input[name=farmacosOutros]').attr('disabled', 'true');
		return;
	});
	//Houve obito?
	$('#obito').change(function(){
		var dep = new Array();
		dep[0] = '#divCasoObito';
		dep[1] = '#divDataObito';
		var ped = new Array();
		ped[0] = '#divTosseDiminuida';
		ped[1] = '#divPesoAtual90dias';
		ped[2] = '#divAlteracoesEvolutivasNoExameFisico';
		ped[3] = '#divFebre90dias';
		ped[4] = '#divExpectoracao90dias';
		ped[5] = '#divAvaliacaoGeral';
		ped[6] = '#divOutrosSintomas';
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='sim'){
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).addClass('required');
				});
				if($(dep[div]).css('display') != 'block')
					$(dep[div]).toggle(function() {
						$(this).css('background-color', hlcolor);
						$(this).animate({backgroundColor : "white"}, 4000);
					});
			}
			for(div in ped){
				var elems = $('*', ped[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).removeClass('required');
				});
				if($(ped[div]).css('display') != 'none')
					$(ped[div]).toggle();
			}
		}
		// Se nao, ocultar colunas listadas a cima
		if($(this).val()=='nao' || $(this).val()=='ignorado'){
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).removeClass('required');
				});
				if($(dep[div]).css('display') != 'none')
					$(dep[div]).toggle();
			}
			for(div in ped){
				var elems = $('*', ped[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).addClass('required');
				});
				if($(ped[div]).css('display') != 'block'){
					if(div == 0 && $('#tratamentoPrescritoTB').val()!='sim')
						continue;
					$(ped[div]).toggle(function() {
						$(this).css('background-color', hlcolor);
						$(this).animate({backgroundColor : "white"}, 4000);
					});
				}
			}
		}
	});

	//Reacao ao tratamento?
	$('#reacoesAdversasTuberculostaticos').change(function(){
		var dep = new Array();
		dep[0] = '#divReacoesAdversasTuberculostaticosMaiores';
		dep[1] = '#divReacoesAdversasTuberculostaticosMenores';
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='sim'){
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).addClass('required');
				});
				if($(dep[div]).css('display') != 'block')
					$(dep[div]).toggle(function() {
						$(this).css('background-color', hlcolor);
						$(this).animate({backgroundColor : "white"}, 4000);
					});
			}
		}
		// Se nao, ocultar colunas listadas a cima
		if($(this).val()=='nao' || $(this).val()=='ignorado'){
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).removeClass('required');
				});
				if($(dep[div]).css('display') != 'none')
					$(dep[div]).toggle();
			}
		}
	});
	//Precisa mudar o tratamento?
	$('#mudancaEsquemaTratamentoTB').change(function(){
		var dep = new Array();
		dep[0] = '#divDataMudanca';
		dep[1] = '#divMudanca';
		dep[2] = '#divMudancaFarmacos';
		dep[3] = '#divMudancaMotivo';
		var ped = new Array();
		ped[0] = '#divSuspensaoTratamentoTB'
		ped[1] = '#divSuspensaoDiasTratamentoTB'
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='sim'){
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).addClass('required');
				});
				if($(dep[div]).css('display') != 'block')
					$(dep[div]).toggle(function() {
						$(this).css('background-color', hlcolor);
						$(this).animate({backgroundColor : "white"}, 4000);
					});
			}
			for(div in ped){
				var elems = $('*', ped[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).removeClass('required');
				});
				if($(ped[div]).css('display') != 'none')
					$(ped[div]).toggle();
			}
		}
		// Se nao, ocultar colunas listadas a cima
		if($(this).val()=='nao' || $(this).val()=='ignorado' || $(this).val() == 'nsa'){
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).removeClass('required');
				});
				if($(dep[div]).css('display') != 'none')
					$(dep[div]).toggle();
			}
			var elems = $('*', ped[0]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).addClass('required');
				});
				if($(ped[0]).css('display') != 'block')
					$(ped[0]).toggle(function() {
						$(this).css('background-color', hlcolor);
						$(this).animate({backgroundColor : "white"}, 4000);
					});

		}
		// 'Mudanca' field  is never required
		$('*', '#divMudanca').each(function(){
			var element = $(this);
			if (   element[0].nodeName != 'FIELDSET'
				&& element[0].nodeName != 'SMALL'
				&& element[0].nodeName != 'OPTION')
				$(this).removeClass('required');
		});

	});

	//Internacao Hospitalar?
	$('#internacaoHospitalar').change(function(){
		var dep = new Array();
		dep[0] = '#divDataInternacao';
		dep[1] = '#divDataAlta';
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='sim'){
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).addClass('required');
				});
				if($(dep[div]).css('display') != 'block')
					$(dep[div]).toggle(function() {
						$(this).css('background-color', hlcolor);
						$(this).animate({backgroundColor : "white"}, 4000);
					});
			}
		}
		// Se nao, ocultar colunas listadas a cima
		if($(this).val()=='nao' || $(this).val()=='ignorado'){
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).removeClass('required');
				});
				if($(dep[div]).css('display') != 'none')
					$(dep[div]).toggle();
			}
		}
	});

	$('#mudanca').click( function(){
		if($('#mudanca').is(':checked')){
			$('#data_mudanca').attr('disabled', true);
			$('#data_mudanca').val('')
		} else {
			$('#data_mudanca').removeAttr('disabled');
		}
	});

	$('#mudancaFarmacos_outros').click(function(){
		if($(this).is(':checked')){
			$('').attr('checked', 'true');
			$('input[name=farmacos14]').removeAttr('disabled');
			return;
		}
		$(this).removeAttr('checked');
		$('input[name=farmacos14]').attr('disabled', 'true');
		return;
	});

	//"Mudanca" enables input text
	$('input[name=mudancaMotivo]:radio').click(function(){
		if($(this).val() == "outro"){
			$('input[name=outro_motivo]').removeAttr('disabled');
		} else {
			$('input[name=outro_motivo]').attr('disabled','true');
			$('input[name=outro_motivo]').val('');
		}
	});

	//Suspensao do Tratamento
	$('#suspensaoTratamentoTB').change(function(){
		var dep = new Array();
		dep[0] = '#divSuspensaoDiasTratamentoTB';
		// Se sim, disponibilizar colunas listadas a cima
		if($(this).val()=='sim'){
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).addClass('required');
				});
				if($(dep[div]).css('display') != 'block')
					$(dep[div]).toggle(function() {
						$(this).css('background-color', hlcolor);
						$(this).animate({backgroundColor : "white"}, 4000);
					});
			}
		}
		// Se nao, ocultar colunas listadas a cima
		if($(this).val()=='nao' || $(this).val()=='ignorado' || $(this).val() == 'nsa'){
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).removeClass('required');
				});
				if($(dep[div]).css('display') != 'none')
					$(dep[div]).toggle();
			}
		}
	});
	//Probabilidade de TBativa
	//O diagnostico eh tb???
	$('#diagnostico').change(function(){
		var dep = new Array();
		dep[0] = '#divDiagnosticoDiferenteTB';
		// Se naun, disponibilizar colunas listadas a cima
		if($(this).val()=='nao_tb'){
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).addClass('required');
				});
				if($(dep[div]).css('display') != 'block')
					$(dep[div]).toggle(function() {
						$(this).css('background-color', hlcolor);
						$(this).animate({backgroundColor : "white"}, 4000);
					});
			}
		} else {
			for(div in dep){
				var elems = $('*', dep[div]);
				$(elems).each(function(){
					var element = $(this);
					if (   element[0].nodeName != 'FIELDSET'
					    && element[0].nodeName != 'SMALL'
					    && element[0].nodeName != 'OPTION')
						$(this).removeClass('required');
				});
				if($(dep[div]).css('display') != 'none')
					$(dep[div]).toggle();
			}
		}
	});
	$('#diagnosticoDifOutros').click(function(){
		if($(this).is(':checked')){
			$('').attr('checked', 'true');
			$('input[name=outro_diagnostico_sim]').removeAttr('disabled');
			return;
		}
		$(this).removeAttr('checked');
		$('input[name=outro_diagnostico_sim]').val('');
		$('input[name=outro_diagnostico_sim]').attr('disabled', 'true');
		return;
	});
;
	$('div.secondary').css('display', 'none');
	
	//\Toggle Options

	// All primary fields are required
	$('div.primary').each(function(){
		var elem_primary = $('*', this);
		$(elem_primary).each(function(){
			var element = $(this);
			if (  element[0].nodeName != 'FIELDSET'
			   && element[0].nodeName != 'SMALL'
			   && element[0].nodeName != 'OPTION')
				$(this).addClass('required');
		});
	});
	//But Observacoes
	var elem_obs = $('*','#divObservacoes');
	$(elem_obs).each(function(){
		var element = $(this);
		if (  element[0].nodeName != 'FIELDSET'
		   && element[0].nodeName != 'SMALL'
		   && element[0].nodeName != 'OPTION')
			$(this).removeClass('required');
	});

	//Form Validation
	$('#form_followup').validate(
	);

	//Load previous exams
	var sUrl="/cgi-bin/neuraltb/retrieveExames.py";
	var edits = new Object();

	var returned = $.ajax({
		url:sUrl,
		dataType:'html',
		complete: function(xhr, textStatus){
			var response = xhr.responseText;
			if(textStatus = 'success'){
				$('#divExames').html(response);
				var sizeH =  0.9*(getScrollXY()[1] - 176) + 'px';
				$('#divExames').height(sizeH);
				//$('#divExames').css('overflow', 'all');
				$('#divExames').jScrollPane({showArrows:true});
				menuYloc = 176;
				$(window).scroll(function () {  
					var offset = menuYloc+$(document).scrollTop()+"px";  
					$('div.jScrollPaneContainer').animate({top:offset},{duration:500,queue:false});  
				});  
				$('tr:odd','#divExames table').css(
					"background-color", "#E0EEEE"
				);
			}else{
				alert("Nao foi possível carregar exames anteriores");
			}
		}
	});
	var menuYloc = null;
});
