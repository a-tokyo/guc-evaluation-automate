// user customizable inputs
var grade = 1;
var remark = "";
// script logic
var indexString;
for (var i = 0; i < 14; i++) {
  indexString = i;
  document.getElementById('ContentPlaceHolderright_ContentPlaceHoldercontent_objRptr_grade_'+indexString+'_'+grade+'_'+indexString).click();
}
// remark
document.getElementById('ContentPlaceHolderright_ContentPlaceHoldercontent_rmrk').innerHTML = remark;

// submit
//document.getElementById('pstEvalBtn').click();
// logging success
console.log('Academic evaluated successfully.');
