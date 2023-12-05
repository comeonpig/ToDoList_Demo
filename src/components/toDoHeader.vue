<template>
  <div class="header">
    <h1>我的一天</h1>
    <p>{{ month }}月 {{ day }}日 {{ weekday[week] }}</p>
  </div>
</template>

<script>
export default {
  name: "toDoHeader",
  data() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const week = date.getDay(2023, 12, 5);
    const weekday = [
      "星期日",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六",
    ];
    return {
      year,
      month,
      day,
      week,
      weekday,
    };
  },
};
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  margin-bottom: 50%;
}
h1 {
  font-size: 34px;
  font-weight: bolder;
  color: antiquewhite;
  padding-left: 5%;
  margin-top: 0;
  padding-top: 5%;
}
p {
  display: block;
  color: aliceblue;
  font-size: 400;
  position: absolute;
  top: 80%;
  left: 11%;
  margin-bottom: 5%;
}
</style>
