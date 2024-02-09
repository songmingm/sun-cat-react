/*
 * @Author: songmm mmsong@yeah.net
 * @Date: 2023-12-17 14:58:12
 * @LastEditors: songmm mmsong@yeah.net
 * @LastEditTime: 2024-01-01 01:01:54
 * @Description: vite配置
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  css: {
    modules: {
      // css模块化 文件以.module.[css|less|scss]结尾
      generateScopedName: "[name]__[local]___[hash:base64:5]",
      hashPrefix: "prefix",
    },
    // 预处理器配置项
    preprocessorOptions: {
      less: {
        math: "always",
        javascriptEnabled: true,
        additionalData: `@import "@/styles/common/base.less";`,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    port: 5173, // 运行端口
    hmr: true, // 热更新
  },
});
