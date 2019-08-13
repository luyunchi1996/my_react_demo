<template>
  <div class="list" >
    <div class="list-warp">
      <div class="list-head" >
        <p  style="width:120px;">&nbsp;</p>

        <p style="width:120px" class="fix-left">filter1</p>
        <p style="width:120px;background-color: green;">filter2</p>
        <p style="width:500px;background-color: green;">filter3</p>
        <p style="width:650px;background-color: green;">filter4</p>
        <p style="width:120px;background-color: green;">filter5</p>
        <p style="width:120px" class="fix-right">filter6</p>
        <p  style="width:120px;">&nbsp;</p>
      </div>
    </div>


    
  </div>
</template>

<script>


export default {
  name: 'List',
  components:{
     
  },
  props: {

  },
  data () {
    return {
       
    }
  },
  methods: {

  },
  mounted () {
  
  }
}
</script>
<style scoped>
    .list{
       width: 600px;
       position: relative;
    }
    .list-warp{
        width: 100%;
        overflow-x: auto;
    }
    .clearfix::after{
       content: " ";
       display: block;
       clear: both;
    }
    .fix-left{
        position: absolute;
        left: 0;
        background-color: red;

    }
    .fix-right{
        position: absolute;
        right: 0;
        background-color: red;
    }

    .list-head{

        height: 20px;
        width:800px;
        white-space: nowrap;

    }
    .list-head p{
       display: inline-block;

    }

</style>
