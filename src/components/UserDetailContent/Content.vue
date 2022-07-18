<template>
    <div style="margin-top:20px;">
        <el-row style="margin-top: 20px;background-image: url(src/assets/img/user_detail_background.jpg)">
            <el-col :offset="2" :span="6">
                <!--                用户头像-->
                <el-aside width="200px" height="100px">
                    <el-upload
                            class="avatar-uploader"
                            :action="this.$api.upload_avator_api"
                            :show-file-list="false"
                            :headers="heads"
                            :name="avatar_name"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-aside>
            </el-col>
            <el-col :span="2">
                <div style="font-size: 20px">{{user_info.username}}</div>

            </el-col>
        </el-row>
        <!--        收藏图片-->
        <el-row style="margin-top: 20px">
            <el-col :offset="2" :span="20">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="我的收藏" name="first">

                        <!--                        设置图片-->
                        <el-row>
                            <div class="demo-image">
                                <div class="block" v-for="img_url in img_url_list" :key="img_url">
                                    <el-col :span="4">
                                        <el-image
                                                style="width: 95%; height: 95%"
                                                :src="img_url"
                                                fit="scale-down">
                                        </el-image>
                                    </el-col>
                                </div>
                            </div>
                        </el-row>

                        <!--                        分页-->
                        <el-pagination
                                background
                                layout="prev, pager, next"
                                page-size="10"
                                current-page="2"
                                :total="1000">
                        </el-pagination>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    import {mapState} from "vuex";
    import {get_static_image_url, valid_status} from "../../assets/js/utils";
    import {getToken} from "../../utils/auth";

    export default {
        name: "Content",
        computed: mapState({
            user_info: state => state.user_info
        }),
        data() {
            return {
                imageUrl: '',
                heads: {
                    "Authorization": getToken()
                },
                avatar_name: "avatar",
                activeName: 'first',
                background_img: require("@/assets/img/icon2.png"),
                fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                img_url_list: []

            };
        },
        methods: {
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            get_user_rel_images() {
                //    获取用户收藏的图片信息
                let result = this.$api.get_user_rel_image(this.$page, this.$page_size)
                result.then(res => {
                    res.data.data.forEach(r => {
                        this.img_url_list.push(get_static_image_url(r.url))
                    })
                })
            }
        },
        mounted() {
            this.imageUrl = this.$api.base_url + this.user_info.avatar
            this.get_user_rel_images()
        }
    }
</script>

<style>
    .user_header {
        background-image: url("/src/assets/img/icon2.png");
    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 50%;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        width: 100px;
        height: 100px;
        display: block;
    }


</style>