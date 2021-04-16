<template>
    <div>


        <el-row style="height: auto">
            <el-col :offset="4" :span="16">

                <el-tabs v-model="activeName">
                    <el-tab-pane label="插画" name="first">
                        <Ikon></Ikon>
                    </el-tab-pane>
                    <el-tab-pane label="漫画" name="second">
                        <Comic></Comic>
                    </el-tab-pane>
                    <el-tab-pane label="小说" name="third">
                        <Noval></Noval>
                    </el-tab-pane>
                </el-tabs>

            </el-col>

        </el-row>


    </div>

</template>

<script>
    import Ikon from './slot/ikon/Ikon'
    import Comic from './slot/comic/Comic'
    import Noval from './slot/noval/Noval'

    export default {
        name: "Content",
        data() {
            return {
                activeName: 'first',

            };
        },
        components: {
            Noval,
            Comic,
            Ikon,


        }
    }
</script>

<style scoped>
    .clear {
        clear: both;
        margin: 0;
        padding: 0;
    }
</style>