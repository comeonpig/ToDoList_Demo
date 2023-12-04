<template>
  <div class="bg">
    <to-do-header />
    <div>
      <van-cell-group size="small">
        <van-field
          left-icon="smile-o"
          clickable
          v-model="inputValue"
          placeholder="注定要去的地方，多晚都有光"
          ><template #button>
            <van-button round size="small" @click="handleAdd">Add</van-button>
          </template></van-field
        >
      </van-cell-group>

      <van-radio-group>
        <van-cell-group>
          <van-cell icon="smile-o" v-show="datalist.length === 0"
            >暂无待办事项喔~</van-cell
          >
          <van-cell
            icon="smile-o"
            v-for="(item, index) in datalist"
            :title="item"
            center
            clickable
          >
            <template #right-icon>
              <van-radio
                :name="index"
                @click="handleDel(index)"
                id="selected"
              />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>

      <!-- <ul v-show="datalist.length !== 0">
      <li v-for="(item, index) in datalist">
        {{ item }}
        <button @click="handleDel(index)">Del</button>
      </li>
    </ul> -->
    </div>
  </div>
</template>

<script>
import { Cell, Field, CellGroup, Button, Radio, RadioGroup } from "vant";
import toDoHeader from "./components/toDoHeader.vue";
import { ref } from "vue";
import "vant/lib/index.css";

export default {
  components: {
    [Cell.name]: Cell,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
    [Radio.name]: Radio,
    [RadioGroup.name]: RadioGroup,
    toDoHeader,
  },
  data() {
    const checked = ref(0);
    const datalist = ref([]);
    return {
      inputValue: "",
      datalist,
      checked,
    };
  },
  methods: {
    handleAdd() {
      if (this.inputValue.trim() === "") {
        return;
      }
      this.datalist.push(this.inputValue);
      this.inputValue = "";
    },
    handleDel(e) {
      document.getElementById("selected").checked = e;
      this.datalist.splice(e, 1);
    },
  },
};
</script>
<style lang="scss">
.van-cell {
  color: #000;
  font-size: small;
  background: #fff9d545;
}
.van >>> .van-cell {
  background: transparent;
}
.van-field__left-icon .van-icon,
.van-field__right-icon .van-icon {
  font-size: 24px;
  position: absolute;
  top: 27%;
}

.van-field__control {
  text-align: center;
}

input.van-field__control::-webkit-input-placeholder {
  color: #29282a97;
}
.van-cell__value--alone {
  text-align: center;
  font-weight: bold;
  font-family: "STXihei";
}
.van-cell__title {
  overflow: hidden;
  padding: 0 17%;
  span {
    word-wrap: break-word;
  }
}
.bg {
  width: 100%;
  height: 100vh;
  background-image: url("../src/assets/bg.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
