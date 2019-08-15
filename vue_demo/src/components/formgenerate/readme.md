#配置式表单
  参数项:
    formDataEntity  表单实体项
    btnGroup     操作按钮项
    detail     详情数据
    iseditor   是否编辑
    selectData  选择数据项
    submit      提交事件
    colse      关闭事件
 #表单配置项 formDataEntity
   组成
      type =[
        {
            label,
            prop,
            type,
            data:(value)=>value
            process:()=>[{k:'v'}]
            show:()=>true,
            placeholder: "",

            {...anthoer}
        }
      ]



