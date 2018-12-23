$(function(){
	$("#MyDialog").dialog({
		width:500,
		height:500,
		title:'My Dialog',
		resizable:true,
		iconCls:'icon-save',
		closed:false,
		tools:[{
			iconCls:"icon-add",
			handler:function(){alert("add")}
		},{
			iconCls:"icon-edit",
			handler:function(){alert("edit")}
		}],
		toolbar:"#tt",
		buttons:"#btn"
	})
})