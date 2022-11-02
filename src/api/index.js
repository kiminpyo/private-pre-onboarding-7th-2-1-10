import interceptor from './interceptor';

// 전체 차량 조회
export const getCarsAPI = params => {
  return interceptor({
    method: 'get',
    url: '/cars',
    params,
  });
};
