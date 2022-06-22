<template>
    <form @submit.prevent="onSubmit()">
        <input v-model="target" type="text" id="target" />
        <label for="target">Target URL</label> <br />
        <button class="btn waves-effect waves-light" type="submit">
            Submit
        </button>
        <div v-if="shURL">
            <input :value="shURL" disabled type="text" />
            <a :href="shURL" target="_blank">Go to shortened URL</a>
        </div>
    </form>
</template>

<script>
import axios from "axios";

export default {
    name: "App",
    data() {
        return {
            target: "",
            shURL: "",
        };
    },

    methods: {
        async onSubmit() {
            try {
                const res = await axios.post("http://localhost:5000/sh", {
                    target: this.target,
                });

                if (res.status == 200 || res.status == 201) {
                    this.shURL = res.data.shURL;
                } else {
                    console.log("Bad Request");
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style></style>
