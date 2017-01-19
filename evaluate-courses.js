var grade = 0;
var attendance = 0;
var studyTime = 5;
var amountOfWork = 2;
var remark = "";
// script logic
var indexString;
for (var i = 1; i < 20; i++) {
  indexString = (i<10)?'0'+i:i;
  document.getElementById('objRptr_ctl'+indexString+'_grade_'+grade).click();
}
document.getElementById('RadioButtonList1_'+attendance).click();
document.getElementById('RadioButtonList2_'+studyTime).click();
document.getElementById('RadioButtonList3_'+amountOfWork).click();
// remark
document.getElementById('rmrk').innerHTML = remark;
// sumbit
document.getElementById('pstEvalBtn').click();
// logging success
console.log('Course evaluated successfully');
