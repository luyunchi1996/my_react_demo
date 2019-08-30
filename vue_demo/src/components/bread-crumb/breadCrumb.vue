<template>
  <ul class="bread-crumb">
    <li
      v-for="(breadCrumb,index) in breadCrumbList"
      :key="index"
      class="bread-crumb-list"
      :class="setbreadCrumbListIcon(index,breadCrumbList.length)"
    >
      <a :href="breadCrumb.href">
        <span>{{breadCrumb.name}}</span>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: "BreadCrumb",
  props: {
    breadCrumbList: Array
  },
  methods: {
    setbreadCrumbListIcon(index, length) {
      if (length - 1 - index === 0) return "";
      return "bread-crumb-icon";
    }
  }
};
</script>
<style scoped>
.bread-crumb {
  display: flex;
  list-style: none;
  padding: 6px 12px;
}

.bread-crumb-list {
  padding-right: 12px;
  font-size: 14px;
}
.bread-crumb-icon::after {
  content: ">";
  display: inline-block;
  position: relative;
  left: 6px;
}
</style>
