const register = require('./register.js');
const login = require('./login.js');
const deleteUser = require('./deleteUser.js')
const sectionOperator = require('./teacherCourse/sectionOperator.js');
const sectionTable = require('./teacherCourse/sectionTable.js');
const invigilateManage = require('./invigilateExam/invigilateManage.js');
const intoInvigilateTable = require('./invigilateExam/intoInvigilateTable.js');
const showInvigilateExamTable = require('./invigilateExam/showInvigilateExamTable.js');
const showHistoryRecord = require('./historyRecord/showHistoryRecord.js');
const historyInvigilateTable = require('./historyRecord/historyInvigilateTable.js')
const teacherInfoManage = require('./teacherInformation/teacherInfoManage.js');
const showTeacherInfo = require('./teacherInformation/showTeacherInfo.js');
const userManage = require('./userManage/userManage.js');
const sendMessage = require('./sendNodeManage/sendMessage.js')


module.exports = (app) => {
    app.use(login),
    app.use(register),
    app.use(deleteUser),
    app.use(sectionOperator),
    app.use(sectionTable),
    app.use(invigilateManage),
    app.use(intoInvigilateTable),
    app.use(showInvigilateExamTable),
    app.use(showHistoryRecord),
    app.use(historyInvigilateTable),
    app.use(teacherInfoManage),
    app.use(showTeacherInfo),
    app.use(userManage),
    app.use(sendMessage)
}

