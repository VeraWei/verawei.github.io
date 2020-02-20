import request from '../utils/request';

export function queryCustomer() {
  return request('/api/customer');
}

export function queryCustomerHistory() {
  return request('/api/customer/1');
}

export function querySale() {
  return request('/api/sale');
}

export function queryInventory() {
  return request('/api/inventory');
}

export function queryCompanyInfo() {
  return request('/api/companyinfo');
}