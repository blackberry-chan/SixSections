<script type="text/javascript">
  
//For Section 1
jQuery(document).ready(function() {
jQuery('#HiddenSection1').hide();
jQuery('.Image1').click(function(e){
e.preventDefault();jQuery("#HiddenSection1").slideToggle();
jQuery("#HiddenSection2").hide();
jQuery("#HiddenSection3").hide();
jQuery("#HiddenSection4").hide();
jQuery("#HiddenSection5").hide();
jQuery("#HiddenSection6").hide();
});
});

//For Section 2
jQuery(document).ready(function() {
jQuery('#HiddenSection2').hide();
jQuery('.Image2').click(function(e){
e.preventDefault();jQuery("#HiddenSection2").slideToggle();
jQuery("#HiddenSection1").hide();
jQuery("#HiddenSection3").hide();
jQuery("#HiddenSection4").hide();
jQuery("#HiddenSection5").hide();
jQuery("#HiddenSection6").hide();
});
});

//For Section 3
jQuery(document).ready(function() {
jQuery('#HiddenSection3').hide();
jQuery('.Image3').click(function(e){
e.preventDefault();jQuery("#HiddenSection3").slideToggle();
jQuery("#HiddenSection1").hide();
jQuery("#HiddenSection2").hide();
jQuery("#HiddenSection4").hide();
jQuery("#HiddenSection5").hide();
jQuery("#HiddenSection6").hide();
});
});

//For Section 4
jQuery(document).ready(function() {
jQuery('#HiddenSection4').hide();
jQuery('.Image4').click(function(e){
e.preventDefault();jQuery("#HiddenSection4").slideToggle();
jQuery("#HiddenSection1").hide();
jQuery("#HiddenSection2").hide();
jQuery("#HiddenSection3").hide();
jQuery("#HiddenSection5").hide();
jQuery("#HiddenSection6").hide();
});
});

//For Section 5
jQuery(document).ready(function() {
jQuery('#HiddenSection5').hide();
jQuery('.Image5').click(function(e){
e.preventDefault();jQuery("#HiddenSection5").slideToggle();
jQuery("#HiddenSection1").hide();
jQuery("#HiddenSection2").hide();
jQuery("#HiddenSection3").hide();
jQuery("#HiddenSection4").hide();
jQuery("#HiddenSection6").hide();
});
});

//For Section 6
jQuery(document).ready(function() {
jQuery('#HiddenSection6').hide();
jQuery('.Image6').click(function(e){
e.preventDefault();jQuery("#HiddenSection6").slideToggle();
jQuery("#HiddenSection1").hide();
jQuery("#HiddenSection2").hide();
jQuery("#HiddenSection3").hide();
jQuery("#HiddenSection4").hide();
jQuery("#HiddenSection5").hide();
});
});

</script>