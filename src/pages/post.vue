<template>
  <!-- Your template -->
  <div>
    this is post vue

    <button @click="handle">btn</button>
  </div>
</template>
<script>
import axios from "axios";
import to from "await-to-js";

export default {
  layout: "blog",
  async asyncData({ params, app }) {
    //   console.log(app);
    app.$myInjectedFunction("works in asyncData");

    return {};
  },
  async fetch({ store, params, app }) {
    app.$myInjectedFunction("works in fetch");
  },
  data() {
    return {
      name: "sss",
    };
  },
  methods: {
    async handle() {
      console.log("dd");
      let data = await axios.post(`127.0.0.0/ap2/:id`, { id: "22" });
      console.log(data);
    },
    async asyncTaskWithCb(cb) {
      let err, user, savedTask, notification;

      [err, user] = await to(UserModel.findById(1));
      if (!user) return cb("No user found");

      [err, savedTask] = await to(
        TaskModel({ userId: user.id, name: "Demo Task" })
      );
      if (err) return cb("Error occurred while saving task");

      if (user.notificationsEnabled) {
        [err] = await to(
          NotificationService.sendNotification(user.id, "Task Created")
        );
        if (err) return cb("Error while sending notification");
      }

      if (savedTask.assignedUser.id !== user.id) {
        [err, notification] = await to(
          NotificationService.sendNotification(
            savedTask.assignedUser.id,
            "Task was created for you"
          )
        );
        if (err) return cb("Error while sending notification");
      }
      cb(null, savedTask);
    },
    async asyncFunctionWithThrow() {
      const res= await to(this.sleep(1000));
      console.log(res);
      // if (!user) throw new Error("User not found");
    },
    async sleep(time=2000){
      return new Promise((resolve,reject)=>{
        setTimeout(() => {
          resolve('ok')
        }, time);
      })
    }
  },
  mounted() {
    console.log(this.name);
    this.$myInjectedFunction("works in mounted");
    this.asyncFunctionWithThrow()
  },
};
</script>
