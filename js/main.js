$(document).ready(function(){
  jQuery(function($){
    $("#input-phone").mask("+38(999) 999-99-99");	
  });
  
  $("#form").validate({
    rules:{
      phone:{
        required: true
      }
    },
    messages: {
      phone: {
        required:"Ви ввели неправильний номер"
      }
    },
  });

  $("#form").submit(function(){
    
    return false;
  });
  
  $(function(){
    $.getJSON('../sources/sizes.json',function(data){
      console.log('success');
      sizeChart = data.sizes;
      $select = $('<select class="form-control col-md-3" name="foot" id="foot_length"></select>');
      $.each(data.sizes,function(i,sizeChart){
        $select.append('<option value="' + sizeChart.length + '">' + sizeChart.length + '</option>');
      });
      $('#select-wrapper').append($select);

      $('#select-wrapper select').on('change', function() {
        var length = $(this).val();
        requiredSize = sizeChart.find(function(size) { return size.length == length });

        $('#men_size').html(requiredSize.man);
        $('#female_size').html(requiredSize.woman);
        $('#european_size').html(requiredSize.euro);
      });''
    }).error(function(){
        console.log('error');
    });
  });

  new WOW().init('slow');
});