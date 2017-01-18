// grade 0 (strongly agree) to 5 (strongly disagree)

var grade = 0;
var indexString = '1';
for (var i = 1; i < 15; i++) {
  if(i<10){
    indexString = '0'+i;
  }else{
    indexString = '' + i;
  }
  document.getElementById('objRptr_ctl'+indexString+'_grade_'+grade).click();
}
document.getElementById('pstEvalBtn').click();
