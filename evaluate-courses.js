var grade = 0;
var attendance = '0';
var studyTime = '5';
var amountOfWork = '2';
var indexString = '1';
for (var i = 1; i < 20; i++) {
  indexString = (i<10)?'0'+i:i;
document.getElementById('objRptr_ctl'+indexString+'_grade_'+grade).click();
}
document.getElementById('RadioButtonList1_'+attendance).click();
document.getElementById('RadioButtonList2_'+studyTime).click();
document.getElementById('RadioButtonList3_'+amountOfWork).click();
//sumbit
document.getElementById('pstEvalBtn').click();
