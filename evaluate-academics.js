// user customizable inputs
var grade = 0;
var remark = "";
// script logic
var indexString;
for (var i = 1; i < 15; i++) {
  indexString = (i<10)?'0'+i:i;
  document.getElementById('objRptr_ctl'+indexString+'_grade_'+grade).click();
}
// remark
document.getElementById('rmrk').innerHTML = remark;
// sumbit
document.getElementById('pstEvalBtn').click();
// logging success
console.log('Academic evaluated successfully.');
