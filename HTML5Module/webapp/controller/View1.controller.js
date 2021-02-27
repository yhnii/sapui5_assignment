sap.ui.define([
        "sap/ui/core/mvc/Controller", 
        "sap/ui/model/json/JSONModel"
	],
	/**
     * param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("ns.HTML5Module.controller.View1", {
			onInit: function () {
                var JSONData = {
							initialValue: "Please make your choice.",
							selectedKey: "None",
							data: [{
								category: "업무",
                                text: "구매 프로세스 변경 신청의 건",
                                rdate: "2020-05-02",
                                status:"정상",
                                progress: "1"
                                
							}, {
								category: "업무",
                                text: "인사 프로세스 검토 회의 건",
                                rdate: "2020-05-04",
                                status:"정상",
                                progress: "1"
							}, {
								category: "이슈",
                                text: "자재 물류 프로세스 검증의 건",
                                rdate: "2020-05-04",
                                status:"지연",
                                progress: "2"
							}]
                        };
                this.getView().setModel(JSONData, "myModel01")

                var JSONData2 = {
							initialValue: "Please make your choice.",
							selectedKey: "None",
							data: [{
								category: "협업",
                                text: "GILRO 개발을 위한 벤치마킹 협의(12월 10일 화상회의)",
                                writer: "이희준",
                                wdate:"2020-12-12"                               
							}, {
								category: "공지",
                                text: "연구 개발팀 회식 일정 공지",
                                writer: "이금복",
                                wdate:"2020-12-10"
							}]
                        };
                this.getView().setModel(JSONData2, "myModel02")
			}
		});
	});
