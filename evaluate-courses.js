// user customizable inputs
var grade = 1;
var attendance = 2;
var studyTime = 2;
var amountOfWork = 2;
var remark = "";
// script logic
for (var i = 0; i < 19; i++) {
  document.getElementById('ContentPlaceHolderright_ContentPlaceHoldercontent_objRptr_grade_'+i+'_'+grade+'_'+i).click();
}
document.getElementById('ContentPlaceHolderright_ContentPlaceHoldercontent_RadioButtonList1_'+attendance).click();
document.getElementById('ContentPlaceHolderright_ContentPlaceHoldercontent_RadioButtonList2_'+studyTime).click();
document.getElementById('ContentPlaceHolderright_ContentPlaceHoldercontent_RadioButtonList3_'+amountOfWork).click();
// remark
document.getElementById('ContentPlaceHolderright_ContentPlaceHoldercontent_rmrk').innerHTML = remark;
// submit
//document.getElementById('pstEvalBtn').click();
// logging success
console.log('Course evaluated successfully');
