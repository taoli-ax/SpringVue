<template>
    
  <el-row class="tac">
    <el-col :sapn="12" >
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        :router="true"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><User /></el-icon>
            <span>指挥官</span>
          </template>
          <el-menu-item index="/1-1">美军</el-menu-item>
          <el-menu-item index="1-2">英军</el-menu-item>
          <el-sub-menu index="1-3">
            <template #title>德军</template>
            <el-menu-item index="/site/germany">东线德军</el-menu-item>
            <el-menu-item index="1-3-2">西线德军</el-menu-item>
            <el-menu-item index="/site/newGermanCommander">新增指挥官</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="1-4">苏联</el-menu-item>
          <el-menu-item index="/site/newCamp">新增阵营</el-menu-item>
        </el-sub-menu>


        <el-sub-menu index="2">
            <template #title>
                <el-icon><MapLocation /></el-icon>
                <span>地图列表</span>
            </template>
          <el-menu-item index="2-1">1v1</el-menu-item>
          <el-menu-item index="2-2">2v2</el-menu-item>
          <el-menu-item index="2-3">3v3</el-menu-item>
          <el-menu-item index="2-4">4v4</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>



<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  MapLocation,
  User
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>