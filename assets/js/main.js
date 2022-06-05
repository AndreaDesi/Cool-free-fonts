/* index */
$('#serif-btn').click(function(){
  $('.serif-tag').show();
  $('.sans-tag').show();
  $('.mono-tag').show();
  $('.sans-tag').hide();
  $('.mono-tag').hide();
})

$('#sans-btn').click(function(){
  $('.serif-tag').show();
  $('.sans-tag').show();
  $('.mono-tag').show();
  $('.serif-tag').hide();
  $('.mono-tag').hide();
})

$('#mono-btn').click(function(){
  $('.serif-tag').show();
  $('.sans-tag').show();
  $('.mono-tag').show();
  $('.serif-tag').hide();
  $('.sans-tag').hide();
})

$('#all-btn').click(function(){
  $('.serif-tag').show();
  $('.sans-tag').show();
  $('.mono-tag').show();
})
