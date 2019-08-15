<template>
  <FormItem
    v-if="formdata.show(data)"
    :label="formdata.label"
    :prop="dataProp"
  >
    <Input
      v-if="formdata.type==='input'"
      v-model.trim="data[dataProp]"
      class="bs-form-input"
      @on-change="(val)=>handleonChangeProxy(val,formdata)"
      :placeholder="formdata.placeholder"
      :disabled="disabled||setDisable(formdata)"
    />
    <Input  v-if="formdata.type==='textarea'"
       v-model.trim="data[dataProp]" 
       class="bs-form-input" 
       type='textarea'
       @on-change="(val)=>handleonChangeProxy(val,formdata)"
       :placeholder="formdata.placeholder"/>
    <Select
      v-if="formdata.type==='select'"
      v-model="data[dataProp]"
      class="bs-form-select"
      @on-change="(val)=>handleonChangeProxy(val,formdata)"
      :placeholder="formdata.placeholder"
      :disabled="disabled||setDisable(formdata)"
    >
      <Option
        v-for="item in selectData[formdata.prop]"
        :value="item.id"
        :key="item.id"
      >{{item.code}}</Option>
    </Select>
    

  </FormItem>
</template>
<script>
export default {
  name: "FromItemGeneRate",
  components: {},
  props: {
    name:String,
    idx:Number,
    formdata: Object,
    data:Object,
    selectData: Object,
    prop:String,
    renderType:String,
    disabled:Boolean,
    detail:Object
  },
  data() {
    return {
       dataProp:this.formdata.prop
    };
  },
  created(){
    if(this.renderType ==="group"){
        this.dataProp = this.prop
    }
  },
  methods: {
    setDisable(formdata){
      if(formdata.disabled&&typeof(formdata.disabled) ==="function"){
       return formdata.disabled(this.detail)
      }else{
         return formdata.disabled
      }
      //  return formdata.disabled&&typeof(formdata.disabled) ==="function"?formdata.disabled():formdata.disabled
    },

    handleonChangeProxy(val,obj){
      let value =""
      if( val instanceof Event)
          value= val.currentTarget.value
      else
          value = val
       if(this.renderType ==="group"){
          this.data[this.name][this.idx][obj.prop] =obj.handleonChange(value)
          this.data[this.prop] = this.data[this.name][this.idx][obj.prop]
       }else{
          this.data[obj.prop] =obj.handleonChange(value)
       }
       
    }

  }
};
</script>
