"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Protractor Typescript Demo', function () {
    it('title verifications', function () {
        protractor_1.browser.get('https://angularjs.org/');
        protractor_1.browser.getTitle().then(function (title) {
            console.log("The title is  : " + title);
            protractor_1.browser.sleep(75000);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBb0M7QUFDcEMsUUFBUSxDQUFDLDRCQUE0QixFQUFFO0lBQ3RDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtRQUN4QixvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ3RDLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBSztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3JDLG9CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyJ9