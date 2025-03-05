import { App } from 'vue';
import axios from 'axios';
import JwtService from '@/core/services/JwtService';
import {defineConfig} from "vite";

/**
 * @description service to call HTTP request via Axios
 */
class ApiService {
  public static vueInstance: App<Element>;

  /**
   * @description initialize vue axios
   */
  public static init(app: App<Element>) {
    ApiService.vueInstance = app;

    // Đăng ký axios vào globalProperties của Vue 3
    ApiService.vueInstance.config.globalProperties.$axios = axios;

    // Cấu hình baseURL từ env
    ApiService.vueInstance.config.globalProperties.$axios.defaults.baseURL =
        import.meta.env.VITE_APP_API_URL;
  }

  /**
   * @description set the default HTTP request headers
   */
  public static setHeader(): void {
    const token = JwtService.getToken();
    console.log(token)
    if (token) {
      ApiService.vueInstance.config.globalProperties.$axios.defaults.headers.common['Authorization'] = `Token ${token}`;
    }
    ApiService.vueInstance.config.globalProperties.$axios.defaults.headers.common['Accept'] = 'application/json';
    console.log(ApiService,3)
  }

  // Các phương thức API (GET, POST, PUT, DELETE)
  public static get(resource: string, params: any) {
    ApiService.setHeader();
    return ApiService.vueInstance.config.globalProperties.$axios.get(`${resource}`,  {
      params: params,
    });
  }

  public static post(resource: string, params: any) {
    ApiService.setHeader();
    return ApiService.vueInstance.config.globalProperties.$axios.post(resource, params);
  }

  public static put(resource: string, params: any) {
    ApiService.setHeader();
    return ApiService.vueInstance.config.globalProperties.$axios.put(resource, params);
  }

  public static delete(resource: string) {
    ApiService.setHeader();
    return ApiService.vueInstance.config.globalProperties.$axios.delete(resource);
  }
}

export default ApiService;